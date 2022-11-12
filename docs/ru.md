# proxy-string-parser

Преобразование строк следующих форматов:

- protocol://username:password@host:port
- protocol://host:port
- username:password@host:port
- host:port

В объект AxiosProxyConfig:

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

## Установка

```bash
npm install proxy-string-parser
```

## Использование

```javascript
import proxyParser from 'proxy-string-parser'

const proxy = proxyParser('protocol://username:password@host:80')
console.log(proxy)
```
