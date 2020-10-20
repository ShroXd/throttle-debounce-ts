// @ts-ignore
import { throttle } from "../src";

beforeEach(() => {
  jest.useFakeTimers("modern")
});

test("throttle delay", () => {
  let fn = jest.fn()
  let throttleFn = throttle(3000, fn)

  setInterval(throttleFn, 100)
  jest.advanceTimersByTime(10000)
  expect(fn).toHaveBeenCalledTimes(3)
})

test("throttle leading", () => {
  let fn = jest.fn()
  let throttleFn = throttle({
    delay: 3000,
    leading: true
  }, fn)

  setInterval(throttleFn, 100)
  jest.advanceTimersByTime(10000)
  expect(fn).toHaveBeenCalledTimes(4)
})

test("throttle trailing", () => {
  let fn = jest.fn()
  let throttleFn = throttle({
    delay: 3000,
    leading: false,
    trailing: true
  }, fn)

  const timer = setInterval(throttleFn, 100)
  jest.advanceTimersByTime(12000)
  clearInterval(timer)
  jest.advanceTimersByTime(12000)
  expect(fn).toHaveBeenCalledTimes(4)
})

test("throttle leading trailing", () => {
  let fn = jest.fn()
  let throttleFn = throttle({
    delay: 3000,
    leading: true,
    trailing: true
  }, fn)

  const timer = setInterval(throttleFn, 100)
  jest.advanceTimersByTime(12000)
  clearInterval(timer)
  jest.advanceTimersByTime(12000)
  expect(fn).toHaveBeenCalledTimes(5)
})

test("throttle cancel", () => {
  let fn = jest.fn()
  let throttleFn = throttle(3000, fn)

  const timer = setInterval(throttleFn, 100)
  throttleFn.cancel()
  jest.advanceTimersByTime(12000)
  expect(fn).not.toBeCalled()
})
