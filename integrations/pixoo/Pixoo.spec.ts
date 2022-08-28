/**
 * Copyright ©2022 Dana Basken
 */

import {Pixoo} from "../../src/pixoo/Pixoo";

describe("Pixoo64", function() {

  beforeAll(async () => {
    await Pixoo.start();
  });

  it("SetBrightness works as expected", async () => {
    const BRIGHTNESS = 90;
    await Pixoo.SetBrightness("pixoo-1", BRIGHTNESS);
    const config = await Pixoo.GetAllConf("pixoo-1");
    expect(config).not.toBeUndefined();
    expect(config).not.toBeNull();
    expect(config.Brightness).toEqual(BRIGHTNESS);
  });

});
