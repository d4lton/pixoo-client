/**
 * Copyright ©2022 Dana Basken
 */

import {Pixoo64} from "../../src/pixoo/Pixoo64";

describe("Pixoo64", function() {

  beforeAll(async () => {
    await Pixoo64.start();
  });

  it("SetBrightness works as expected", async () => {
    const BRIGHTNESS = 90;
    await Pixoo64.SetBrightness("pixoo-1", BRIGHTNESS);
    const config = await Pixoo64.GetAllConf("pixoo-1");
    expect(config).not.toBeUndefined();
    expect(config).not.toBeNull();
    expect(config.Brightness).toEqual(BRIGHTNESS);
  });

});
