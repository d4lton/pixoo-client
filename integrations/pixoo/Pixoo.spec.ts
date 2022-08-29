/**
 * Copyright ©2022 Dana Basken
 */

import {Pixoo} from "../../src/pixoo/Pixoo";

describe("Pixoo64", function() {

  const DEVICE_ID = "pixoo-1";

  beforeAll(async () => {
    await Pixoo.start();
  });

  it("setBrightness works as expected", async () => {
    const BRIGHTNESS = 75;
    await Pixoo.setBrightness(DEVICE_ID, BRIGHTNESS);
    const config = await Pixoo.getConfiguration(DEVICE_ID);
    expect(config.Brightness).toEqual(BRIGHTNESS);
  });

  it("GetAllConf works as expected", async () => {
    const config = await Pixoo.getConfiguration(DEVICE_ID);
    expect(config).not.toBeUndefined();
    expect(config).not.toBeNull();
    console.log(config);
  });

});
