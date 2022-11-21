# proxy-string-parser

Parsing strings of the following formats:

```text
protocol://username:password@host:port
protocol://host:port
username:password@host:port
host:port
```

To the Proxy object:

```typescript
interface Proxy {
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

- [Proxy](#interfacesproxymd)

### Functions

- [default](#default)

## Functions

### default

▸ **default**(`proxy`): [`Proxy`](#interfacesproxymd)

#### Parameters

| Name | Type |
| :------ | :------ |
| `proxy` | `string` |

#### Returns

[`Proxy`](#interfacesproxymd)

#### Defined in

[proxyParser.ts:3](https://github.com/vladislav-puzyrev/proxy-string-parser/blob/25ff6c8/src/proxyParser.ts#L3)

# Interface: Proxy

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

[types/Proxy.ts:4](https://github.com/vladislav-puzyrev/proxy-string-parser/blob/25ff6c8/src/types/Proxy.ts#L4)

___

### host

• **host**: `string`

#### Defined in

[types/Proxy.ts:2](https://github.com/vladislav-puzyrev/proxy-string-parser/blob/25ff6c8/src/types/Proxy.ts#L2)

___

### port

• **port**: `number`

#### Defined in

[types/Proxy.ts:3](https://github.com/vladislav-puzyrev/proxy-string-parser/blob/25ff6c8/src/types/Proxy.ts#L3)

___

### protocol

• `Optional` **protocol**: `string`

#### Defined in

[types/Proxy.ts:8](https://github.com/vladislav-puzyrev/proxy-string-parser/blob/25ff6c8/src/types/Proxy.ts#L8)
