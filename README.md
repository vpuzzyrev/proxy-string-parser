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

TypeDoc documentation is available on [wiki](https://github.com/vladislav-puzyrev/proxy-string-parser/wiki)

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
