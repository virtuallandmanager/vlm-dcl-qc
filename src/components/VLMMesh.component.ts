import { Vector3 } from '@dcl/sdk/math'
import { Entity } from '@dcl/sdk/ecs'
import { MeshService } from '../services/Mesh.service'
import { TransformService } from '../services/Transform.service'
import { ClickEventService } from '../services/ClickEvent.service'
import { ColliderService } from '../services/Collider.service'
import { ecs } from '../environment'
import { getModelPath } from '../shared/paths'
import { VLMClickable } from '../shared/interfaces'

export type QuickMeshConfig = {
  path: string
  position: Vector3
  scale?: Vector3
  rotation?: Vector3
  colliders?: boolean
  parent?: Entity
} & VLMClickable

/**
 * Quick creator function for VLMMesh Configs
 * @param config - the config object
 * @returns void
 *
 *
 */
export class QuickMesh {
  entity: Entity = ecs.engine.addEntity()
  services: { mesh: MeshService; collider: ColliderService; transform: TransformService; clickEvent: ClickEventService }
  constructor(config: QuickMeshConfig) {
    this.services = {
      mesh: new MeshService(),
      collider: new ColliderService(),
      transform: new TransformService(),
      clickEvent: new ClickEventService(),
    }

    this.services.mesh.set(this.entity, 'gltf', { src: getModelPath(config.path) })
    this.services.transform.set(this.entity, {
      position: config.position,
      scale: config.scale || Vector3.create(1, 1, 1),
      rotation: config.rotation || Vector3.create(0, 0, 0),
      parent: config.parent,
    })

    if (config.clickEvent) {
      this.services.clickEvent.set(this.entity, config.clickEvent)
    }
    if (config.colliders) {
      // this.services.collider.set(this.entity, 'box', true, true)
    }
    console.log('QuickMesh created!', config.clickEvent)
  }
}
