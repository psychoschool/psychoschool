import { useEffect, useState } from 'react'
import { useScript } from 'utils/script.util'

// @see https://wistia.com/doc/embed-options
interface Options {
  autoPlay: boolean
  controlsVisibleOnLoad: boolean
  endVideoBehavior: 'loop'
  fullscreenButton: boolean
  googleAnalytics: boolean
  playButton: boolean
  playerColor: string
  seo: boolean
  stillUrl: string
  volume: number
  wmode: 'transparent'
}

export const useWistia = (videId: string, options: Partial<Options>) => {
  const [video, setVideo] = useState()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window._wq = window._wq || []
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    _wq.push({
      id: videId,
      options,

      // When the video becomes ready, we can run a function here, using `video` as a handle to the Player API.
      // See all available events and methods at https://wistia.com/doc/player-api.
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onReady: video => {
        setVideo(video)
        video.bind('play', () => {
          console.log(`You played the video! Its name is ${video.name()}.`)
          return video.unbind
        })

        video.bind('secondchange', (s: number) => {
          // maybe add some interactive goodness to the page?
        })

        video.bind('end', () => {
          console.log('The video ended')
        })

        // There are many other interesting events you can bind to:
        // @see https://wistia.com/doc/player-api#events
      }
    })
  }, [options, videId])

  // useEffect(() => {
  //   return () => {
  //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //     // @ts-ignore
  //     video?.remove()
  //   }
  // }, [video])

  return { video }
}
