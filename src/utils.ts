export interface ThrottleOptions {
  delay: number;
  leading?: boolean;
  trailing?: boolean;
}

export const isThrottleOptions = (arg: ThrottleOptions | number): arg is ThrottleOptions => {
  return (arg as ThrottleOptions).delay !== undefined;
};

export interface DebounceOptions {
  delay: number;
  leading?: boolean
}

export const isDebounceOptions = (arg: DebounceOptions | number): arg is DebounceOptions => {
  return (arg as DebounceOptions).leading !== undefined;
}
