import dotenv from 'dotenv'
import { DefinePlugin } from 'webpack'
import { isDev } from '../utils/env'

dotenv.config()
const config = {
  IS_DEV: isDev
}

export const definePlugin = new DefinePlugin(config)
