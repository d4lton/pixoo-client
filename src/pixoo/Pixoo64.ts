/**
 * Copyright ©2022 Dana Basken
 */

import fetch from "node-fetch";

export enum Pixoo64Channel {
  FACES = 0,
  CLOUD = 1,
  VISUALIZER = 2,
  CUSTOM = 3,
  BLACK_SCREEN = 4
}

// http://doc.divoom-gz.com/web/#/12?page_id=240

export class Pixoo64 {

  private static LAN_DEVICES_URL = "https://app.divoom-gz.com/Device/ReturnSameLANDevice";

  private static _devices?: any[];

  static async start(): Promise<void> {
    Pixoo64._devices = (await Pixoo64.request(Pixoo64.LAN_DEVICES_URL, "GET")).DeviceList;
  }

  private static async getStandardOptions(method: string, body?: any): Promise<any> {
    if (body !== undefined) {
      body = typeof body === "string" ? body : JSON.stringify(body);
    }
    return {
      headers: {"Content-Type": "application/json"},
      method: method,
      body: body
    };
  }

  private static async request(url: string, method: string, body?: any): Promise<any> {
    const options = await this.getStandardOptions(method, body);
    return fetch(url, options)
      .then(async (response: any) => {
        if (response.status !== 200) { throw new Error(response.statusText); }
        const data = await response.json();
        if (data.ReturnCode !== undefined && data.ReturnCode !== 0) { throw new Error(data.ReturnMessage); }
        if (data.error_code !== undefined && data.error_code !== 0) { throw new Error(data.error_code); }
        return data;
      });
  }

  static async GetAllConf(id: string): Promise<any> {
    const device = Pixoo64.devices.find(it => it.DeviceName === id);
    if (!device) { throw new Error(`device ${id} not found`); }
    return await Pixoo64.request(`http://${device.DevicePrivateIP}/post`, "POST", {Command: "Channel/GetAllConf"});
  }

  static async SetIndex(id: string, channel: Pixoo64Channel): Promise<void> {
    const device = Pixoo64.devices.find(it => it.DeviceName === id);
    if (!device) { throw new Error(`device ${id} not found`); }
    await Pixoo64.request(`http://${device.DevicePrivateIP}/post`, "POST", {Command: "Channel/SetIndex", SelectIndex: channel});
  }

  static async GetIndex(id: string): Promise<Pixoo64Channel> {
    const device = Pixoo64.devices.find(it => it.DeviceName === id);
    if (!device) { throw new Error(`device ${id} not found`); }
    const response = await Pixoo64.request(`http://${device.DevicePrivateIP}/post`, "POST", {Command: "Channel/GetIndex"});
    return response?.SelectIndex;
  }

  static async SetBrightness(id: string, brightness: number): Promise<void> {
    const device = Pixoo64.devices.find(it => it.DeviceName === id);
    if (!device) { throw new Error(`device ${id} not found`); }
    await Pixoo64.request(`http://${device.DevicePrivateIP}/post`, "POST", {Command: "Channel/SetBrightness", Brightness: brightness});
  }

  static get devices(): any[] {
    return this._devices;
  }

}
