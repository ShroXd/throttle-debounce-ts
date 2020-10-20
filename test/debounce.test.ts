// @ts-ignore
import { debounce } from "../src";

beforeEach(() => {
  jest.useFakeTimers("modern")
});

test("debounce delay", () => {
  let fn = jest.fn()
  let debounceFn = debounce(3000, fn)

  debounceFn()
  debounceFn()
  debounceFn()

  setTimeout(jest.fn(), 4000)
  jest.advanceTimersByTime(5000)
  expect(fn).toHaveBeenCalledTimes(1)
})

test("debounce delay leading", () => {
  let fn = jest.fn()
  let debounceFn = debounce({
    delay: 3000,
    leading: true
  }, fn)

  debounceFn()
  debounceFn()
  debounceFn()

  setTimeout(jest.fn(), 4000)
  jest.advanceTimersByTime(5000)
  expect(fn).toHaveBeenCalledTimes(2)
})

test("debounce cancel", () => {
  let fn = jest.fn()
  let debounceFn = debounce(3000, fn)

  debounceFn()
  debounceFn()
  debounceFn()
  setTimeout(() => {
    debounceFn.cancel()
    debounceFn()
  }, 1000)
  jest.advanceTimersByTime(5000)


  expect(fn).toHaveBeenCalledTimes(1)
})
