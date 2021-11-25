import { join } from 'path'
import { rootDir } from './env'

export const alias = {
  config: join(rootDir, 'config'),
  errors: join(rootDir, 'src/errors'),
  components: join(rootDir, 'src/components'),
  pages: join(rootDir, 'src/pages'),
  resources: join(rootDir, 'src/resources'),
  entities: join(rootDir, 'src/entities'),
  store: join(rootDir, 'src/store'),
  api: join(rootDir, 'src/resources/api'),
  schemas: join(rootDir, 'src/resources/schemas'),
  assets: join(rootDir, 'src/assets'),
  'ui-kit': join(rootDir, 'src/ui-kit'),
  utils: join(rootDir, 'src/utils')
}
