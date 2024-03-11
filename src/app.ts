import { VLMEnvironment } from './environment'
import { AutoDanceService } from './services/AutoDance.service'
import { UIService } from './services/UI.service'

/**
 * The main entry point for the VLM library.
 * @public
 */
export abstract class QuickCreate {
  public static version: string = __VERSION__

  public static configureEcs: CallableFunction = async (ecs: any, ui: any) => {
    return VLMEnvironment.configureEcs(ecs, ui)
  }

  public static toggleAutoDance = AutoDanceService.toggleGlobalAutoDance

  public static UI = () => UIService.internalComponents()
}
