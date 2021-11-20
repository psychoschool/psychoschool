interface ServiceConfig {
  host: string
  pathPrefix?: string
}

export const COMPLECT_API: Readonly<'complect-api'> = 'complect-api'

const prod: Record<string, ServiceConfig> = {
  [COMPLECT_API]: {
    host: 'https://complect-group.ru',
    pathPrefix: ''
  }
}

const dev: Record<string, ServiceConfig> = {
  [COMPLECT_API]: {
    host: 'http://localhost:3000',
    pathPrefix: ''
  }
}

export const services = IS_DEV ? dev : prod
