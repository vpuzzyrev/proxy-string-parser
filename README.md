# proxy-string-parser

## Deprecated

Use native URL objects instead: https://developer.mozilla.org/en-US/docs/Web/API/URL.

Example:

```typescript
const url1 = new URL('https://username:password@localhost:3000')
const url2 = new URL('https://localhost:3000')

console.log(url1.protocol, url1.username, url1.password, url1.hostname, url1.port)
console.log(url2.protocol, url2.hostname, url2.port)
```

## Introduction

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

TypeDoc documentation is available on [wiki](https://github.com/vladislav-puzyrev/proxy-string-parser/wiki).

## Install

```bash
npm install proxy-string-parser
```

## Usage

```javascript
import proxyStringParser from 'proxy-string-parser'

const proxy = proxyStringParser('protocol://username:password@host:80')
console.log(proxy)
```
