import {
  VLMVideo,
  VLMSound,
  QuickVideoScreen,
  QuickImage,
  QuickSound,
  QuickMesh,
  QuickNull,
  QuickNullConfig,
  QuickVideoConfig,
  QuickImageConfig,
  QuickMeshConfig,
  QuickSoundConfig,
} from './components/index'
import 'xmlhttprequest-polyfill'

// @ts-ignore
import { URL } from 'whatwg-url-without-unicode'
import { QuickDanceFloor, QuickDanceFloorConfig } from './components/VLMDanceFloor.component'

// @ts-ignore
globalThis['URL'] = URL

interface VideoConfig extends VLMVideo.Config {}
interface SoundConfig extends VLMSound.Config {}
namespace QuickCreate {
  export class SceneParent extends QuickNull {
    constructor(config: QuickNullConfig) {
      super(config)
      return this
    }
  }
  export class VideoScreen extends QuickVideoScreen {
    constructor(config: QuickVideoConfig) {
      super(config)
      return this
    }
  }
  export class Image extends QuickImage {
    constructor(config: QuickImageConfig) {
      super(config)
      return this
    }
  }
  export class Mesh extends QuickMesh {
    constructor(config: QuickMeshConfig) {
      super(config)
      return this
    }
  }
  export class Sound extends QuickSound {
    constructor(config: QuickSoundConfig) {
      super(config)
      return this
    }
    play: CallableFunction = () => {
      this.config.services.audio.playAll()
    }
  }
  export class DanceFloor extends QuickDanceFloor {
    constructor(config: QuickDanceFloorConfig) {
      super(config)
      return this
    }
  }
}

export default QuickCreate
export {
  QuickCreate,
  VideoConfig,
  SoundConfig,
}
