import { Bridge, Layer2, TokenInfo } from '@l2beat/config'

export interface Config {
  links: {
    twitter: string
    discord: string
    github: string
    youTube: string
    medium: string
    forum: string
  }
  features: {
    bridges: boolean
    activity: boolean
    banner: boolean
    gitcoinOption: boolean
  }
  backend: {
    apiUrl: string
    skipCache: boolean
  }
  layer2s: Layer2[]
  bridges: Bridge[]
  tokens: TokenInfo[]
}