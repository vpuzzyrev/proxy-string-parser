# proxy-string-parser

## Осуждаемо

Вместо этого используйте нативные URL объекты: https://developer.mozilla.org/ru/docs/Web/API/URL.

Пример:

```typescript
const url1 = new URL('https://username:password@localhost:3000')
const url2 = new URL('https://localhost:3000')

console.log(url1.protocol, url1.username, url1.password, url1.hostname, url1.port)
console.log(url2.protocol, url2.hostname, url2.port)
```

## Введение

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

TypeDoc документация доступна на [wiki](https://github.com/vladislav-puzyrev/proxy-string-parser/wiki).

## Установка

```bash
npm install proxy-string-parser
```

## Использование

```javascript
import proxyStringParser from 'proxy-string-parser'

const proxy = proxyStringParser('protocol://username:password@host:80')
console.log(proxy)
```
