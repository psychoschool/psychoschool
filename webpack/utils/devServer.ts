const defaultPort = 3000
const devServerHost = 'local.psychoschool.ru'

/**
 * @see https://webpack.js.org/configuration/dev-server/
 */
export const devServerConfig = {
  open: {
    app: {
      name: 'Google Chrome'
    }
  },
  port: defaultPort,
  host: devServerHost,
  historyApiFallback: true
}
