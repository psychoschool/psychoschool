import { readFileSync } from 'fs'
import { join } from 'path'
import { isDev, rootDir } from './env'

/**
 * @see https://webpack.js.org/configuration/dev-server/
 */
export const devServerConfig = {
  port: 3000,
  host: 'local.psychoschool.ru',
  historyApiFallback: true
}
