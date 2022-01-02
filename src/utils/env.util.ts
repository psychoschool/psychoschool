type VAR = 'API_MODE' | 'DEBUG' | 'STRIPE_API_KEY'

export const getEnvVars = (variable: VAR, initial = '') => {
  return process.env[variable] ?? initial
}
