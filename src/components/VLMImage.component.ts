import { Entity } from '@dcl/sdk/ecs'
import { Vector3 } from '@dcl/sdk/math'
import { MaterialService } from '../services/Material.service'
import { MeshService } from '../services/Mesh.service'
import { TransformService } from '../services/Transform.service'
import { ClickEventService } from '../services/ClickEvent.service'
import { ColliderService } from '../services/Collider.service'
import { ecs } from '../environment'
import { VLMClickable } from '../shared/interfaces'

export type QuickImageConfig = {
  path: string
  position: Vector3
  scale?: Vector3
  rotation?: Vector3
  colliders?: boolean
  parent?: Entity
} & VLMClickable

/**
 * Quick creator function for VLMImage Configs
 * @param config - the config object
 * @returns void
 */
export class QuickImage {
  entity: Entity = ecs.engine.addEntity()
  services: { material: MaterialService; mesh: MeshService; collider: ColliderService; transform: TransformService; clickEvent: ClickEventService }
  constructor(config: QuickImageConfig) {
    this.services = {
      material: new MaterialService(),
      mesh: new MeshService(),
      collider: new ColliderService(),
      transform: new TransformService(),
      clickEvent: new ClickEventService(),
    }

    const textureOptions = this.services.material.buildOptions({ textureSrc: config.path })
    this.services.material.set(this.entity, 'basic', textureOptions)
    this.services.mesh.set(this.entity, 'plane')
    this.services.collider.set(this.entity, 'plane', config.colliders, !!config.clickEvent)
    this.services.transform.set(this.entity, {
      position: config.position,
      scale: config.scale || Vector3.create(1, 1, 0.01),
      rotation: config.rotation || Vector3.create(0, 0, 0),
      parent: config.parent,
    })
    this.services.clickEvent.set(this.entity, config.clickEvent)
  }
}
