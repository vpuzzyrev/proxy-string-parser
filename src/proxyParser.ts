import { AxiosProxyConfig } from 'axios'

const proxyParser = (proxy: string): AxiosProxyConfig => {
  const protocolSplit = proxy.split('://')
  const protocol = protocolSplit.length === 1 ? null : protocolSplit[0]
  const rest = protocolSplit.length === 1 ? protocolSplit[0] : protocolSplit[1]

  const authSplit = rest.split('@')

  if (authSplit.length === 1) {
    const host = authSplit[0].split(':')[0]
    const port = Number(authSplit[0].split(':')[1])

    const proxyConfig: AxiosProxyConfig = {
      host,
      port
    }

    if (protocol != null) {
      proxyConfig.protocol = protocol
    }

    return proxyConfig
  }

  const host = authSplit[1].split(':')[0]
  const port = Number(authSplit[1].split(':')[1])
  const [username, password] = authSplit[0].split(':')

  const proxyConfig: AxiosProxyConfig = {
    host,
    port,
    auth: {
      username,
      password
    }
  }

  if (protocol != null) {
    proxyConfig.protocol = protocol
  }

  return proxyConfig
}

export default proxyParser
