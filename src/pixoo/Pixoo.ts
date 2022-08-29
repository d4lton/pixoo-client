/**
 * Copyright ©2022 Dana Basken
 */

import fetch from "node-fetch";

// http://doc.divoom-gz.com/web/#/12?page_id=240

export enum PixooChannel {
  FACES = 0,
  CLOUD = 1,
  VISUALIZER = 2,
  CUSTOM = 3,
  BLACK_SCREEN = 4
}

export class Pixoo {

  /** @hidden */
  private static LAN_DEVICES_URL = "https://app.divoom-gz.com/Device/ReturnSameLANDevice";

  /** @hidden */
  protected static _devices?: any[];

  /**
   * @hidden
   */
  constructor() {
  }

  /**
   * Initialize the Pixoo module.
   */
  static async start(): Promise<void> {
    Pixoo._devices = (await Pixoo.request(Pixoo.LAN_DEVICES_URL, "GET")).DeviceList;
  }

  /**
   * @private
   * @hidden
   */
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

  /**
   * @private
   * @hidden
   */
  protected static async request(url: string, method: string, body?: any): Promise<any> {
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

  private static getDeviceById(id: string): any {
    const device = Pixoo.devices.find(it => it.DeviceName === id);
    if (!device) { throw new Error(`device ${id} not found`); }
    return device;
  }

  /**
   * Get all configuration settings.
   */
  static async getConfiguration(id: string): Promise<any> {
    const device = Pixoo.getDeviceById(id);
    return await Pixoo.request(`http://${device.DevicePrivateIP}/post`, "POST", {Command: "Channel/GetAllConf"});
  }

  /**
   * Select channel.
   */
  static async setChannel(id: string, channel: PixooChannel): Promise<void> {
    const device = Pixoo.getDeviceById(id);
    await Pixoo.request(`http://${device.DevicePrivateIP}/post`, "POST", {Command: "Channel/SetIndex", SelectIndex: channel});
  }

  /**
   * Get current channel.
   */
  static async getChannel(id: string): Promise<PixooChannel> {
    const device = Pixoo.getDeviceById(id);
    const response = await Pixoo.request(`http://${device.DevicePrivateIP}/post`, "POST", {Command: "Channel/GetIndex"});
    return response?.SelectIndex;
  }

  /**
   * Set device brightness.
   */
  static async setBrightness(id: string, brightness: number): Promise<void> {
    const device = Pixoo.getDeviceById(id);
    await Pixoo.request(`http://${device.DevicePrivateIP}/post`, "POST", {Command: "Channel/SetBrightness", Brightness: brightness});
  }

  /**
   * Set the latitude and longitude to get weather information.
   */
  static async setGeographicCoordinates(id: string, latitude: string, longitude: string): Promise<void> {
    const device = Pixoo.getDeviceById(id);
    await Pixoo.request(`http://${device.DevicePrivateIP}/post`, "POST", {Command: "Sys/LogAndLat", Longitude: longitude, Latitude: latitude});
  }

  /**
   * Set the timezone. Example: "GMT-5"
   */
  static async setTimezone(id: string, timezone: string): Promise<void> {
    const device = Pixoo.getDeviceById(id);
    await Pixoo.request(`http://${device.DevicePrivateIP}/post`, "POST", {Command: "Sys/TimeZone", TimeZoneValue: timezone});
  }

  /**
   * Set an array of display elements. Pixoo64 only.
   * @see http://doc.divoom-gz.com/web/#/12?page_id=234
   */
  static async setItemList(id: string, items: any[]): Promise<void> {
    const device = Pixoo.getDeviceById(id);
    await Pixoo.request(`http://${device.DevicePrivateIP}/post`, "POST", {Command: "Sys/TimeZone", ItemList: items});
  }

  /**
   * Return all discovered Pixoo devices.
   */
  static get devices(): any[] {
    return this._devices || [];
  }

}
