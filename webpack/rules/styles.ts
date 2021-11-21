import { cssLoader, sassLoader, miniCssExtractLoader, postCssLoader, styleLoader } from './loaders'

/** css **/
export const cssRule = {
  test: /\.css$/,
  use: [miniCssExtractLoader, cssLoader].filter(Boolean)
}

/** sass **/
export const sassRule = {
  test: /\.scss$/,
  use: [
    styleLoader,
    {
      ...cssLoader,
      options: {
        importLoaders: 2,
        modules: {
          exportLocalsConvention: 'camelCaseOnly',
          localIdentName: '[local]__[contenthash:base64:5]'
        }
      }
    },
    postCssLoader,
    sassLoader
  ]
}
