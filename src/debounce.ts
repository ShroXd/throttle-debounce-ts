import { DebounceOptions, isDebounceOptions } from "./utils"

export function debounce(options: DebounceOptions | number, callback: any) {
  let delay: number;
  let leading = (options as DebounceOptions).leading || false;

  let timeoutID;
  let cancelled: boolean;
  let leadingExec = false;

  if (isDebounceOptions(options)) {
    delay = options.delay;
  } else {
    delay = options;
  }

  const clearExistingTimeout = () => {
    if (timeoutID) {
      clearTimeout(timeoutID);
      timeoutID = undefined;
    }
  }

  const cancel = () => {
    clearExistingTimeout();
    cancelled = true;
  }

  function wrapper(...args) {
    const self = this;

    const exec = () => {
      callback.apply(self, args);
    }

    if (leading && !leadingExec) {
      exec();
      leadingExec = true;
    }

    if (cancelled) {
      exec();
      cancelled = false;
      return
    }

    clearExistingTimeout();
    if (!timeoutID) {
      timeoutID = setTimeout(exec, delay);
    }
  }

  wrapper.cancel = cancel;
  return wrapper;
}
