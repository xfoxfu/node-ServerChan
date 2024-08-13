# node-ServerChan

[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/xfoxfu/node-ServerChan/ci.yml?style=flat-square)](https://github.com/xfoxfu/node-ServerChan/actions/workflows/ci.yml)
[![Codecov](https://img.shields.io/codecov/c/github/xfoxfu/node-ServerChan?style=flat-square)](https://app.codecov.io/gh/xfoxfu/node-ServerChan)
[![license](https://img.shields.io/github/license/coderfox/node-ServerChan.svg?style=flat-square)](https://github.com/coderfox/node-ServerChan/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dt/serverchan.svg?style=flat-square)](https://www.npmjs.com/package/serverchan)
[![npm](https://img.shields.io/npm/v/serverchan.svg?style=flat-square)](https://www.npmjs.com/package/serverchan)

## Install

```
npm install serverchan --save
```

## Usage

```TypeScript
import ServerChanClient from "serverchan";

// create with SCKEY parameter
let client = new ServerChanClient("SCKEY"); // replace SCKEY with your own
// create with SCKEY in environment (SERVERCHAN_SCKEY)
let client = new ServerChanClient();

client.sendMessage("title") // returns Promise
  .then(() => { console.log("sent"); });
client.sendMessage("title", "content") // returns Promise
  .then(() => { console.log("sent"); });
```

## License

```
The MIT License (MIT)
Copyright (c) 2016-2024 Yuze Fu (xfoxfu)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
