import { isPreviewMode } from '~system/EnvironmentApi'
import * as ecsLib from '@dcl/sdk/ecs'
import * as uiLib from '@dcl/sdk/react-ecs'
import { VLMDebug } from './logic/VLMDebug.logic'

export let ecs: any = ecsLib
export let ui: any = uiLib

export abstract class VLMEnvironment {
  static configureEcs: CallableFunction = async (_ecs: any, _ui: any) => {
    ecs = _ecs || ecs
    ui = _ui || ui
  }
}
