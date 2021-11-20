import { EnvironmentPlugin } from 'webpack'
import { isDev } from '../utils/env'

const config = {
  DEBUG: isDev
}

export const environmentPlugin = new EnvironmentPlugin(config)
