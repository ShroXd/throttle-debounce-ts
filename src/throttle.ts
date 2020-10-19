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

    clearExistingTimeout();
    if (!timeoutID && options.trailing) {
      timeoutID = setTimeout(exec, options.delay);
    }

    const self = this;
    const runTime = Date.now() - lastExec;

    function exec() {
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
