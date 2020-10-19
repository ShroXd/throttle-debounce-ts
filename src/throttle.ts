interface ThrottleOptions {
  delay?: number;
  leading?: boolean;
  trailing?: boolean;
}

export const throttle = (options: ThrottleOptions, callback: any) => {
  let timeoutID;
  let cancelled: boolean;
  let lastExec = options.leading ? 0 : Date.now();

  const clearExistingTimeout = () => {
    if (timeoutID) {
      clearTimeout(timeoutID);
      timeoutID = undefined;
    }
  };

  const cancel = () => {
    clearExistingTimeout();
    cancelled = true;
  };

  const wrapper = (...args) => {
    if (cancelled) {
      return;
    }

    const self = this;
    const runTime = Date.now() - lastExec;

    function exec() {
      if (options.trailing) {
        clearExistingTimeout();
        timeoutID = setTimeout(exec, options.delay);
      }
      lastExec = Date.now();
      callback.apply(self, args);
    }

    if (runTime > options.delay) {
      exec();
    }
  };

  wrapper.cancel = cancel;
  return wrapper;
};
