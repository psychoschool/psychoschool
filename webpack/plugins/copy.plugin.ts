import { join } from 'path'
import CopyPlugin from 'copy-webpack-plugin'

import { rootDir, isProd } from '../utils/env'

const config = {
  patterns: [{ from: join(rootDir, 'src/assets/favicon.png'), to: './' }]
}

export const copyPlugin = isProd && new CopyPlugin(config)
