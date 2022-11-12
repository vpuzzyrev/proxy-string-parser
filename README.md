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

### Functions

- [default](#default)

## Functions

### default

▸ **default**(`proxy`): `AxiosProxyConfig`

#### Parameters

| Name | Type |
| :------ | :------ |
| `proxy` | `string` |

#### Returns

`AxiosProxyConfig`

#### Defined in

[index.ts:3](https://github.com/vladislav-puzyrev/proxy-string-parser/blob/ad138bd/src/index.ts#L3)
