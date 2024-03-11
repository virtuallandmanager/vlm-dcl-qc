export class VLMDebug {
  public static debug: boolean = false
  public static scope: { videos: boolean; widgets: boolean } = {
    videos: false,
    widgets: false,
  }

  static init = (debugConfig: boolean | string[]): void => {
    if (debugConfig) {
      this.debug = true
      return
    }

    if (Array.isArray(debugConfig)) {
      debugConfig.forEach((scope: string) => {
        switch (scope) {
          case 'videos':
            this.scope.videos = true
        }
      })
    }
  }

  static log = (...args: any): void => {
    if (!this.debug) {
      return
    }
    switch (args[0]) {
      case 'info':
        this.logInfo(...args.filter((arg: any, index: number) => index !== 0))
        break
      case 'playlist':
        this.logPlaylistInfo(...args.filter((arg: any, index: number) => index !== 0))
        break
      case 'video':
        this.logVideoInfo(...args.filter((arg: any, index: number) => index !== 0))
        break
      case 'error':
        this.logError(...args.filter((arg: any, index: number) => index !== 0))
        break
      default:
        this.logInfo(...args)
        break
    }
  }

  static logInfo = (...args: any): void => {
    if (this.debug) {
      console.log('VLM - ', ...args)
    }
  }

  static logPlaylistInfo = (...args: any): void => {
    console.log('VLM - PLAYLIST - ', ...args, this.debug, this.scope)
    if (this.debug && this.scope.videos) {
      console.log('VLM - PLAYLIST - ', ...args)
    }
  }

  static logVideoInfo = (...args: any): void => {
    console.log('VLM - VIDEO - ', ...args)
    if (this.debug && this.scope.videos) {
      console.log('VLM - VIDEO - ', ...args)
    }
  }

  static logError = (...args: any): void => {
    if (this.debug) {
      console.log('VLM - ERROR - ', ...args)
    }
  }
}
