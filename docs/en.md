# Proxy Parser

Converting strings of the following formats:

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
  protocol?: strings
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
