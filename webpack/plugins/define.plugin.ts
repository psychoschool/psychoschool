import { DefinePlugin } from 'webpack'
import { apiMode, debug, isDev, isProd } from '../utils/env'

const config = {
  IS_DEV: isDev,
  IS_PROD: isProd,
  'process.env': {
    DEBUG: JSON.stringify(debug),
    API_MODE: JSON.stringify(apiMode)
  }
}

export const definePlugin = new DefinePlugin(config)
