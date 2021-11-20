import debugLib from 'debug'

const debug = process.env.DEBUG
if (debug) debugLib.enable('PLATFORM:*')
else debugLib.disable()

export const getDebugger = (debugLabel: string) => debugLib(`PLATFORM:${debugLabel}`)
