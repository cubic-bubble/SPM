
export type Metadata = {
  sid?: string
  type: 'application' | 'plugin' | 'library'
  name: string
  namespace: string
  nsi: string
  description: string
  version: string
  favicon: string
  categories: string[]
  runscript?: {
    [index: string]: {
      workspace?: string
      autoload?: boolean
    }
  }
  resource?: {
    dependencies?: string[]
    permissions?: {
      scope?: (string | { type: string, access: string })[]
    }
    services?: { [index: string]: string[] }
  }
  author: {
    type: string
    name: string
  }
  configs?: { [index: string]: any }
}
export type Process = {
  loaded: boolean,
  status: 'LATENT' | 'ACTIVE' | 'INACTIVE',
  metadata: Metadata,
  argv: { [index: string]: any },
  stats: { [index: string]: any },
}
export type CPROptions = {
  hostname: string
  version?: number
  accessToken: string
  anchorToken: string
}
export type LPSOptions = {
  userAgent: string
  clientId: string
}
export type Options = {
  UAT: string
  CPR: CPROptions
  LPS?: LPSOptions
}
export type AssetsManifest = {
  js?: string[]
  css?: string[]
  media?: string[]
}
