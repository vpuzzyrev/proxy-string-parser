# proxy-string-parser

Parsing strings of the following formats:

- protocol://username:password@host:port
- protocol://host:port
- username:password@host:port
- host:port

To the AxiosProxyConfig object:

```typescript
interface AxiosProxyConfig {
  host: string
  port: number
  auth?: {
    username: string
    password: string
  }
  protocol?: string
}
```

## Install

```bash
npm install proxy-string-parser
```

## Usage

```javascript
import proxyParser from 'proxy-string-parser'

const proxy = proxyParser('protocol://username:password@host:80')
console.log(proxy)
```

# API

## Table of contents

### Interfaces

- [AxiosProxyConfig](#interfacesaxiosproxyconfigmd)

### Functions

- [default](#default)

## Functions

### default

▸ **default**(`proxy`): [`AxiosProxyConfig`](#interfacesaxiosproxyconfigmd)

#### Parameters

| Name | Type |
| :------ | :------ |
| `proxy` | `string` |

#### Returns

[`AxiosProxyConfig`](#interfacesaxiosproxyconfigmd)

#### Defined in

[src/proxyParser.ts:3](https://github.com/vladislav-puzyrev/proxy-string-parser/blob/f331269/src/proxyParser.ts#L3)

# Interface: AxiosProxyConfig

## Table of contents

### Properties

- [auth](#auth)
- [host](#host)
- [port](#port)
- [protocol](#protocol)

## Properties

### auth

• `Optional` **auth**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `password` | `string` |
| `username` | `string` |

#### Defined in

node_modules/axios/index.d.ts:99

___

### host

• **host**: `string`

#### Defined in

node_modules/axios/index.d.ts:97

___

### port

• **port**: `number`

#### Defined in

node_modules/axios/index.d.ts:98

___

### protocol

• `Optional` **protocol**: `string`

#### Defined in

node_modules/axios/index.d.ts:103
