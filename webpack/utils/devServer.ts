import { readFileSync } from 'fs'
import { join } from 'path'
import { rootDir } from './env'
const defaultPort = 3000
const devServerHost = 'local.psychoschool.ru'

/**
 * @see https://webpack.js.org/configuration/dev-server/
 */
export const devServerConfig = {
  http2: true,
  https: {
    key: readFileSync(join(rootDir, 'certificate', 'key.pem')),
    cert: readFileSync(join(rootDir, 'certificate', 'cert.pem'))
  },
  open: {
    app: {
      name: 'Google Chrome'
    }
  },
  port: defaultPort,
  host: devServerHost,
  historyApiFallback: true
}
