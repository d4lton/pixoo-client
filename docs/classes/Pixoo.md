[@d4lton/pixoo-client](../README.md) / [Exports](../modules.md) / Pixoo

# Class: Pixoo

## Table of contents

### Accessors

- [devices](Pixoo.md#devices)

### Methods

- [getChannel](Pixoo.md#getchannel)
- [getConfiguration](Pixoo.md#getconfiguration)
- [getDeviceById](Pixoo.md#getdevicebyid)
- [setBrightness](Pixoo.md#setbrightness)
- [setChannel](Pixoo.md#setchannel)
- [setGeographicCoordinates](Pixoo.md#setgeographiccoordinates)
- [setItemList](Pixoo.md#setitemlist)
- [setTimezone](Pixoo.md#settimezone)
- [start](Pixoo.md#start)

## Accessors

### devices

• `Static` `get` **devices**(): `any`[]

Return all discovered Pixoo devices.

#### Returns

`any`[]

#### Defined in

[pixoo/Pixoo.ts:136](https://github.com/d4lton/pixoo-client/blob/f5230c7/src/pixoo/Pixoo.ts#L136)

## Methods

### getChannel

▸ `Static` **getChannel**(`id`): `Promise`<[`PixooChannel`](../enums/PixooChannel.md)\>

Get current channel.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[`PixooChannel`](../enums/PixooChannel.md)\>

#### Defined in

[pixoo/Pixoo.ts:94](https://github.com/d4lton/pixoo-client/blob/f5230c7/src/pixoo/Pixoo.ts#L94)

___

### getConfiguration

▸ `Static` **getConfiguration**(`id`): `Promise`<`any`\>

Get all configuration settings.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[pixoo/Pixoo.ts:78](https://github.com/d4lton/pixoo-client/blob/f5230c7/src/pixoo/Pixoo.ts#L78)

___

### getDeviceById

▸ `Static` `Private` **getDeviceById**(`id`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`any`

#### Defined in

[pixoo/Pixoo.ts:69](https://github.com/d4lton/pixoo-client/blob/f5230c7/src/pixoo/Pixoo.ts#L69)

___

### setBrightness

▸ `Static` **setBrightness**(`id`, `brightness`): `Promise`<`void`\>

Set device brightness.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `brightness` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[pixoo/Pixoo.ts:103](https://github.com/d4lton/pixoo-client/blob/f5230c7/src/pixoo/Pixoo.ts#L103)

___

### setChannel

▸ `Static` **setChannel**(`id`, `channel`): `Promise`<`void`\>

Select channel.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `channel` | [`PixooChannel`](../enums/PixooChannel.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[pixoo/Pixoo.ts:86](https://github.com/d4lton/pixoo-client/blob/f5230c7/src/pixoo/Pixoo.ts#L86)

___

### setGeographicCoordinates

▸ `Static` **setGeographicCoordinates**(`id`, `latitude`, `longitude`): `Promise`<`void`\>

Set the latitude and longitude to get weather information.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `latitude` | `string` |
| `longitude` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[pixoo/Pixoo.ts:111](https://github.com/d4lton/pixoo-client/blob/f5230c7/src/pixoo/Pixoo.ts#L111)

___

### setItemList

▸ `Static` **setItemList**(`id`, `items`): `Promise`<`void`\>

Set an array of display elements. Pixoo64 only.

**`See`**

http://doc.divoom-gz.com/web/#/12?page_id=234

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `items` | `any`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[pixoo/Pixoo.ts:128](https://github.com/d4lton/pixoo-client/blob/f5230c7/src/pixoo/Pixoo.ts#L128)

___

### setTimezone

▸ `Static` **setTimezone**(`id`, `timezone`): `Promise`<`void`\>

Set the timezone. Example: "GMT-5"

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `timezone` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[pixoo/Pixoo.ts:119](https://github.com/d4lton/pixoo-client/blob/f5230c7/src/pixoo/Pixoo.ts#L119)

___

### start

▸ `Static` **start**(): `Promise`<`void`\>

Initialize the Pixoo module.

#### Returns

`Promise`<`void`\>

#### Defined in

[pixoo/Pixoo.ts:34](https://github.com/d4lton/pixoo-client/blob/f5230c7/src/pixoo/Pixoo.ts#L34)
