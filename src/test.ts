"use strict";

import ServerChan from "./";
import test from "ava";
// store the original sckey
let processKey = process.env.SERVERCHAN_SCKEY;

import { http, HttpResponse } from "msw";
export const handlers = [
  http.get("https://sctapi.ftqq.com/:token.send", ({ params }) => {
    if (params.token === "__SUCCESS") {
      return HttpResponse.json({
        errno: 0,
        errmsg: "success",
        dataset: "done",
      });
    } else {
      return HttpResponse.json({
        errno: 1024,
        errmsg: "不要重复发送同样的内容",
      });
    }
  }),
];
import { setupServer } from "msw/node";
export const server = setupServer(...handlers);
server.listen();

test("constructor - should load parameter", (t) => {
  let sc = new ServerChan("SCKEYOWN1");
  t.deepEqual(sc.sckey, "SCKEYOWN1");
});

test("constructor - should throw on no set", (t) => {
  t.throws(() => {
    delete process.env.SERVERCHAN_SCKEY;
    let sc = new ServerChan();
  });
});

test("constructor - should load env", (t) => {
  process.env.SERVERCHAN_SCKEY = "SCKEYOWN2";
  let sc = new ServerChan();
  t.deepEqual(sc.sckey, "SCKEYOWN2");
});

test("#sendMessage (title)", async (t) => {
  let sc = new ServerChan("__SUCCESS");
  await sc.sendMessage("build test " + Date.now().toString());
  t.pass();
});

test("#sendMessage (title, content)", async (t) => {
  let sc = new ServerChan("__SUCCESS");
  await sc.sendMessage("build test " + Date.now().toString(), "test");
  t.pass();
});

test("#sendMessage (title, content?) error should throw", async (t) => {
  let sc = new ServerChan("__FAIL");
  try {
    await sc.sendMessage("");
    throw new Error("No error thrown.");
  } catch (err) {
    t.deepEqual(err?.["message"], "不要重复发送同样的内容");
  }
});
