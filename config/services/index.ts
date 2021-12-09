interface ServiceConfig {
  host: string
  pathPrefix?: string
}

export const PSYCHO_API: Readonly<'psycho-api'> = 'psycho-api'

const prod: Record<string, ServiceConfig> = {
  [PSYCHO_API]: {
    host: 'https://api.psychoschool.ru',
    pathPrefix: '/api/v1'
  }
}

const stage: Record<string, ServiceConfig> = {
  [PSYCHO_API]: {
    host: 'https://api-stage.psychoschool.ru',
    pathPrefix: '/api/v1'
  }
}

export const services = process.env.API_MODE === 'prod' ? prod : stage
