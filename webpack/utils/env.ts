import dotenv from 'dotenv'
import { join } from 'path'

dotenv.config()
export const mode = process.env.NODE_ENV ?? 'production'
export const apiMode = process.env.API_MDOE ?? 'stage'

export const debug = process.env.DEBG ?? true
export const isProd = mode === 'production'
export const isDev = !isProd

export const rootDir = join(__dirname, '../../')
export const webpackDir = join(__dirname, '../')
