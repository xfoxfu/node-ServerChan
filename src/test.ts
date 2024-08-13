"use strict";

import ServerChan from "./";
import chai = require("chai");
const expect = chai.expect;
// store the original sckey
let processKey = process.env.SERVERCHAN_SCKEY;
import nock = require("nock");

describe("constructor", () => {
  it("should load parameter", () => {
    let sc = new ServerChan("SCKEYOWN1");
    expect(sc.sckey).to.eql("SCKEYOWN1");
  });
  it("should throw on no set", () => {
    expect(() => {
      delete process.env.SERVERCHAN_SCKEY;
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
  it("(title)", async () => {
    nock("https://sctapi.ftqq.com")
      .get(/[A-Za-z0-9]*\.send/)
      .reply(200, { errno: 0, errmsg: "success", dataset: "done" });
    process.env.SERVERCHAN_SCKEY = processKey;
    let sc = new ServerChan();
    await sc.sendMessage("build test " + Date.now().toString());
  });
  it("(title, content)", async () => {
    nock("https://sctapi.ftqq.com")
      .get(/[A-Za-z0-9]*\.send/)
      .reply(200, { errno: 0, errmsg: "success", dataset: "done" });
    process.env.SERVERCHAN_SCKEY = processKey;
    let sc = new ServerChan();
    await sc.sendMessage("build test " + Date.now().toString(), "test");
  });
  it("(title, content?) error should throw", async () => {
    nock("https://sctapi.ftqq.com")
      .get(/[A-Za-z0-9]*\.send/)
      .reply(200, { errno: 1024, errmsg: "不要重复发送同样的内容" });
    let sc = new ServerChan();
    try {
      await sc.sendMessage("");
      throw new Error("No error thrown.");
    } catch (err) {
      expect(err?.["message"]).to.eql("不要重复发送同样的内容");
    }
  });
});
