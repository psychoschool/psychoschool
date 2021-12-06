import { ResourceError } from 'errors/resource-error'
import { request, RequestOptions } from 'utils/request.util'
import { Context } from 'utils/context.util'

type TResourceMeta = {
  name: string
  startTime: number
  endTime: number
}

export type IResourceOptions<ResponseData, ReturnType> = {
  name: string
  onSuccess: (data: ResponseData, meta: TResourceMeta) => ReturnType
  onError?: (error: ResourceError, meta: TResourceMeta) => ResourceError
}

type OptionsMaker<ResourceParams, RequestPostData, ResponseData, ReturnType> = (
  ctx: Context,
  params: ResourceParams
) => RequestOptions<RequestPostData> & IResourceOptions<ResponseData, ReturnType>

export function resource<ResourceParams, RequestPostData, ResponseData, ResourceResult>(
  optionsMaker: OptionsMaker<ResourceParams, RequestPostData, ResponseData, ResourceResult>
) {
  return async (ctx: Context, params: ResourceParams): Promise<ResourceResult> => {
    const { name, onSuccess, onError, ...options } = optionsMaker(ctx, params)
    const startTime = performance.now()

    try {
      const response = await request<RequestPostData, ResponseData>(options)
      const meta: TResourceMeta = { name, startTime, endTime: performance.now() }

      return onSuccess(response, meta)
    } catch (error) {
      const resourceError = new ResourceError(name, error)
      const meta: TResourceMeta = { name, startTime, endTime: performance.now() }

      if (onError) onError(resourceError, meta)
      throw resourceError
    }
  }
}
