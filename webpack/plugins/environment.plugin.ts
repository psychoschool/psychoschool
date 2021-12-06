import { EnvironmentPlugin } from 'webpack'
import { apiMode, debug } from '../utils/env'

const config = {
  DEBUG: debug,
  API_MODE: apiMode
}

export const environmentPlugin = new EnvironmentPlugin(config)
