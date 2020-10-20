export interface ThrottleOptions {
  delay: number;
  leading?: boolean;
  trailing?: boolean;
}

export const isThrottleOptions = (arg: ThrottleOptions | number): arg is ThrottleOptions => {
  return (arg as ThrottleOptions).delay !== undefined;
};
