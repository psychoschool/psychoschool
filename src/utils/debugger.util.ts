import debugLib from 'debug'
import { getEnvVars } from 'utils/env.util'

const debug = getEnvVars('DEBUG')
if (debug) debugLib.enable('PLATFORM:*')
else debugLib.disable()

export const getDebugger = (debugLabel: string) => debugLib(`PLATFORM:${debugLabel}`)
