"use strict";

import request = require("request-promise");

export = class ServerChanClient {
  private _sckey: string;
  constructor(sckey?: string) {
    if (sckey) {
      this._sckey = sckey;
    } else if (process.env.SERVERCHAN_SCKEY) {
      this._sckey = process.env.SERVERCHAN_SCKEY;
    } else {
      throw new Error("SCKEY not found!");
    }
  };
  async sendMessage(title: string, content?: string) {
    let result = JSON.parse(await request(`http://sc.ftqq.com/${this._sckey}.send`, {
      qs: {
        text: title,
        desp: content
      }
    }));
    if (result.errno !== 0) throw new Error(result.errmsg);
  };
  get sckey() {
    return this._sckey;
  };
};