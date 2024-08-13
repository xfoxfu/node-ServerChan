class ServerChanClient {
  private _sckey: string;

  constructor(sckey?: string) {
    this._sckey = sckey ?? process.env.SERVERCHAN_SCKEY ?? "";

    if (!this._sckey) {
      throw new Error("SCKEY not found!");
    }
  }

  async sendMessage(title: string, content?: string) {
    const url = new URL(`https://sctapi.ftqq.com/${this._sckey}.send`);
    url.searchParams.append("text", title);
    if (content) {
      url.searchParams.append("desp", content);
    }
    let result = await fetch(url.toString()).then((res) => res.json());
    if (result.errno !== 0) throw new Error(result.errmsg);
  }

  get sckey() {
    return this._sckey;
  }
}

export default ServerChanClient;
export { ServerChanClient };
