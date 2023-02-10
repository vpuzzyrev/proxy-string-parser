# proxy-string-parser

Парсинг строк следующих форматов:

```text
protocol://username:password@host:port
protocol://host:port
username:password@host:port
host:port
```

В объект Proxy:

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

TypeDoc документация доступна на [wiki](https://github.com/vladislav-puzyrev/proxy-string-parser/wiki)

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
