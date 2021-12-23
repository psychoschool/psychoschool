import { resource } from 'utils/resource.util'
import { PSYCHO_API } from 'config/services'
import { UserResponse } from 'resources/types'

export const getUser = resource(ctx => ({
  ctx,
  name: 'checkAuth',
  method: 'GET',
  serviceName: PSYCHO_API,
  url: '/me',
  onSuccess: (response: Response<Nullable<UserResponse>>) => response.data,
  onError: error => error
}))
