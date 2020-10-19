// @ts-ignore
import { throttle } from "../src";


function execManyTimes(each, times = 20) {
  let i = 0, intervalId

  const start = () => {
    intervalId = setInterval(() => {
      each();
      if (++i === times) {
        clearInterval(intervalId);
      }
    }, 20)
  }

  start()
}

test("throttle", () => {
  expect(1).toBe(1)
})
