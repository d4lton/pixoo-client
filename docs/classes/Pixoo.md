[@d4lton/pixoo-client](../README.md) / [Exports](../modules.md) / Pixoo

# Class: Pixoo

## Table of contents

### Constructors

- [constructor](Pixoo.md#constructor)

### Properties

- [LAN\_DEVICES\_URL](Pixoo.md#lan_devices_url)
- [\_devices](Pixoo.md#_devices)

### Accessors

- [devices](Pixoo.md#devices)

### Methods

- [GetAllConf](Pixoo.md#getallconf)
- [GetIndex](Pixoo.md#getindex)
- [SetBrightness](Pixoo.md#setbrightness)
- [SetIndex](Pixoo.md#setindex)
- [SetLogAndLat](Pixoo.md#setlogandlat)
- [SetTimeZone](Pixoo.md#settimezone)
- [getDeviceById](Pixoo.md#getdevicebyid)
- [getStandardOptions](Pixoo.md#getstandardoptions)
- [request](Pixoo.md#request)
- [start](Pixoo.md#start)

## Constructors

### constructor

• **new Pixoo**()

## Properties

### LAN\_DEVICES\_URL

▪ `Static` `Private` **LAN\_DEVICES\_URL**: `string` = `"https://app.divoom-gz.com/Device/ReturnSameLANDevice"`

#### Defined in

[pixoo/Pixoo.ts:19](https://github.com/d4lton/pixoo-client/blob/d8fa72f/src/pixoo/Pixoo.ts#L19)

___

### \_devices

▪ `Static` `Protected` `Optional` **\_devices**: `any`[]

#### Defined in

[pixoo/Pixoo.ts:21](https://github.com/d4lton/pixoo-client/blob/d8fa72f/src/pixoo/Pixoo.ts#L21)

## Accessors

### devices

• `Static` `get` **devices**(): `any`[]

#### Returns

`any`[]

#### Defined in

[pixoo/Pixoo.ts:108](https://github.com/d4lton/pixoo-client/blob/d8fa72f/src/pixoo/Pixoo.ts#L108)

## Methods

### GetAllConf

▸ `Static` **GetAllConf**(`id`): `Promise`<`any`\>

Get all configuration settings.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[pixoo/Pixoo.ts:62](https://github.com/d4lton/pixoo-client/blob/d8fa72f/src/pixoo/Pixoo.ts#L62)

___

### GetIndex

▸ `Static` **GetIndex**(`id`): `Promise`<[`PixooChannel`](../enums/PixooChannel.md)\>

Get current channel index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[`PixooChannel`](../enums/PixooChannel.md)\>

#### Defined in

[pixoo/Pixoo.ts:78](https://github.com/d4lton/pixoo-client/blob/d8fa72f/src/pixoo/Pixoo.ts#L78)

___

### SetBrightness

▸ `Static` **SetBrightness**(`id`, `brightness`): `Promise`<`void`\>

Set device brightness.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `brightness` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[pixoo/Pixoo.ts:87](https://github.com/d4lton/pixoo-client/blob/d8fa72f/src/pixoo/Pixoo.ts#L87)

___

### SetIndex

▸ `Static` **SetIndex**(`id`, `channel`): `Promise`<`void`\>

Select channel index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `channel` | [`PixooChannel`](../enums/PixooChannel.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[pixoo/Pixoo.ts:70](https://github.com/d4lton/pixoo-client/blob/d8fa72f/src/pixoo/Pixoo.ts#L70)

___

### SetLogAndLat

▸ `Static` **SetLogAndLat**(`id`, `latitude`, `longitude`): `Promise`<`void`\>

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

[pixoo/Pixoo.ts:95](https://github.com/d4lton/pixoo-client/blob/d8fa72f/src/pixoo/Pixoo.ts#L95)

___

### SetTimeZone

▸ `Static` **SetTimeZone**(`id`, `timezone`): `Promise`<`void`\>

Set the timezone. Example: "GMT-5"

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `timezone` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[pixoo/Pixoo.ts:103](https://github.com/d4lton/pixoo-client/blob/d8fa72f/src/pixoo/Pixoo.ts#L103)

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

[pixoo/Pixoo.ts:53](https://github.com/d4lton/pixoo-client/blob/d8fa72f/src/pixoo/Pixoo.ts#L53)

___

### getStandardOptions

▸ `Static` `Private` **getStandardOptions**(`method`, `body?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `body?` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[pixoo/Pixoo.ts:30](https://github.com/d4lton/pixoo-client/blob/d8fa72f/src/pixoo/Pixoo.ts#L30)

___

### request

▸ `Static` `Protected` **request**(`url`, `method`, `body?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `method` | `string` |
| `body?` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[pixoo/Pixoo.ts:41](https://github.com/d4lton/pixoo-client/blob/d8fa72f/src/pixoo/Pixoo.ts#L41)

___

### start

▸ `Static` **start**(): `Promise`<`void`\>

Initialize the Pixoo module.

#### Returns

`Promise`<`void`\>

#### Defined in

[pixoo/Pixoo.ts:26](https://github.com/d4lton/pixoo-client/blob/d8fa72f/src/pixoo/Pixoo.ts#L26)
