import { Entity } from '@dcl/sdk/ecs'
import { Vector3, Color4 } from '@dcl/sdk/math'
import { MaterialService } from '../services/Material.service'
import { MeshService } from '../services/Mesh.service'
import { TransformService } from '../services/Transform.service'
import { ecs } from '../environment'
import { VLMClickable,  } from '../shared/interfaces'
import { AutoDanceService } from '../services/AutoDance.service'

export type EmoteList = TriggeredEmote[]

export type TriggeredEmote = {
  emote: string
  isCustom?: string
  loop: boolean
}

export type QuickDanceFloorConfig = {
  emotes?: EmoteList
  interval?: number
  position: Vector3
  scale?: Vector3
  rotation?: Vector3
  parent?: Entity
  debug?: boolean
  enabledOnLoad?: boolean
} & VLMClickable

/**
 * Quick creator function for VLMDance Floor Configs
 * @param config - the config object
 * @returns void
 */
export class QuickDanceFloor {
  entity: Entity = ecs.engine.addEntity()
  services: { material: MaterialService; mesh: MeshService; transform: TransformService; autodance: AutoDanceService }
  constructor(config: QuickDanceFloorConfig) {
    this.services = {
      material: new MaterialService(),
      mesh: new MeshService(),
      transform: new TransformService(),
      autodance: new AutoDanceService(),
    }

    if (config.debug) {
      this.services.material.set(this.entity, 'pbr', { albedoColor: Color4.create(0, 1, 0, 0.5) })
    } else {
      ecs.VisibilityComponent.create(this.entity, { visible: false })
    }
    this.services.mesh.set(this.entity, 'box')
    this.services.transform.set(this.entity, {
      position: config.position,
      scale: config.scale || Vector3.create(4, 2, 4),
      rotation: config.rotation || Vector3.create(0, 0, 0),
      parent: config.parent,
    })
    this.services.autodance.addEntity(this.entity)
    this.services.autodance.setup({ emotes: config.emotes || [], delay: config.interval || 5000, enabledOnLoad: config.enabledOnLoad })
  }
}
