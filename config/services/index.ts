import { getEnvVars } from 'utils/env.util'

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

const apiMode = getEnvVars('API_MODE', 'stage')
export const services = apiMode === 'prod' ? prod : stage
