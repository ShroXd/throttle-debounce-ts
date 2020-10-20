# throttle-debounce-ts &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

Throttle and debounce functions written in Typescript.

Features:
    
- No thirdparty dependecies
- Easy to use
- ES Modules and CommonJS format
    
## Install

```
npm i throttle-debounce-ts
```

## Usage

### Throttle

```javascript
import { throttle } from "throttle-debounce-ts";

const throttleFunc = throttle(1000, () => {
  console.log("Hello Throttle!");
});
```

### Debounce

```javascript
import { debounce } from "throttle-debounce-ts";

const debounceFunc = debounce(1000, () => {
    console.log("Hello Debounce!");
});
```

### Cancel

```javascript
const throttleFunc = throttle(1000, () => {
    // ...
});
// will cancel throttleFunc
throttleFunc.cancel();

const debounceFunc = debounce(1000, () => {
    // ...
});
// will cancel delay of debounceFunc
// callback will exec immediately when you call debounceFunc next time
debounceFunc.cancel();
```

## API

### throttle(options, callback)
Returns: `Function`

Throttle execution of a function.

#### _options_
Type: `Number`

A zero-or-greater delay in milliseconds.

Type: `Object`

__options.delay__ <br>
A zero-or-greater delay in milliseconds.

__options.leading__ <br>
Optional, defaults to false. If it's true, the function will exec on the first call.

__options.trailing__ <br>
Optional, defaults to false. If it's true, the function will exec after last call.

#### _callback_
Type: `Function`

A function to be executed after delay milliseconds.

***

### debounce(options, callback)
Returns: `Function`

Debounce execution of a function.

#### _options_
Type: `Number`

A zero-or-greater delay in milliseconds.

Type: `Object`

__options.delay__ <br>
A zero-or-greater delay in milliseconds.

__options.leading__ <br>
Optional, defaults to false. If it's true, the function will exec on the first call.

#### _callback_
Type: `Function`

A function to be executed after delay milliseconds.
