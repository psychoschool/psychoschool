import { join } from 'path'

import * as rules from '../rules'
import * as plugins from '../plugins'
import { rootDir } from '../utils/env'
import { alias } from '../utils/alias'
import { devServerConfig } from '../utils/devServer'

const config = {
  target: 'web',
  devtool: 'inline-source-map',
  entry: [join(rootDir, 'src', 'main.tsx')],
  output: {
    path: join(rootDir, 'dist'),
    publicPath: '/',
    filename: 'js/[name].[fullhash].js'
  },
  module: {
    rules: [
      rules.typescriptRule,
      rules.htmlRule,
      rules.fontsRule,
      rules.mediasRule,
      rules.sassRule,
      rules.cssRule,
      ...rules.svgRules
    ]
  },
  devServer: devServerConfig,
  resolve: {
    alias,
    extensions: ['*', '.json', '.js', '.ts', '.tsx', '.scss'],
    fallback: { assert: false }
  },
  plugins: [
    plugins.miniCssExtractPlugin,
    plugins.esLintPlugin,
    plugins.forkTsCheckerWebpackPlugin,
    plugins.refreshPlugin,
    plugins.definePlugin,
    plugins.environmentPlugin,
    plugins.copyPlugin,
    ...plugins.htmlWebpackPlugin
  ].filter(Boolean)
}

export default config
