import proxyStringParser from './index.js'

describe('proxyStringParser', () => {
  test('full string', () => {
    const string = 'protocol://username:password@host:80'
    const proxy = proxyStringParser(string)

    expect(proxy).toStrictEqual({
      host: 'host',
      port: 80,
      auth: {
        username: 'username',
        password: 'password'
      },
      protocol: 'protocol'
    })
  })

  test('without auth', () => {
    const string = 'protocol://host:80'
    const proxy = proxyStringParser(string)

    expect(proxy).toStrictEqual({
      host: 'host',
      port: 80,
      protocol: 'protocol'
    })
  })

  test('without protocol', () => {
    const string = 'username:password@host:80'
    const proxy = proxyStringParser(string)

    expect(proxy).toStrictEqual({
      host: 'host',
      port: 80,
      auth: {
        username: 'username',
        password: 'password'
      }
    })
  })

  test('minimal string', () => {
    const string = 'host:80'
    const proxy = proxyStringParser(string)

    expect(proxy).toStrictEqual({
      host: 'host',
      port: 80
    })
  })
})
