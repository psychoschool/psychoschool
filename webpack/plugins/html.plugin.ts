import { join } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import { isProd, rootDir } from '../utils/env'

const offlineConfig = {
  filename: 'offline.html',
  inject: true,
  template: join(rootDir, 'src/assets/offline/index.html')
}

const spaConfig = {
  filename: 'index.html',
  inject: true,
  favicon: join(rootDir, 'src/assets/favicon.png'),
  template: join(rootDir, 'src/assets/index.html')
}

export const htmlWebpackPlugin = [
  // isProd && new HtmlWebpackPlugin(offlineConfig),
  new HtmlWebpackPlugin(spaConfig)
].filter(Boolean)
