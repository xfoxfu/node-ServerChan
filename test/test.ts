/// <reference path="../references.d.ts" />
"use strict";

import ServerChan = require("../");
import chai = require("chai");
const expect = chai.expect;


describe("constructor", () => {
  it("should load parameter", () => {
    let sc = new ServerChan("SCKEYOWN1");
    expect(sc.sckey).to.eql("SCKEYOWN1");
  });
  it("should throw on no set", () => {
    expect(() => {
      let sc = new ServerChan();
    }).to.throw();
  });
  it("should load env", () => {
    process.env.SERVERCHAN_SCKEY = "SCKEYOWN2";
    let sc = new ServerChan();
    expect(sc.sckey).to.eql("SCKEYOWN2");
  });
});
describe("#sendMessage", () => {
});