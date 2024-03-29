import { Entity } from '@dcl/sdk/ecs'
import { Vector3 } from '@dcl/sdk/math'
import { VLMClickEvent } from '../components/VLMClickEvent.component'

// integration interfaces - these define properties and methods that are used by this package

export interface BaseProperties {
  pk?: string
  sk?: string
  customId?: string
  customRendering?: boolean
  enabled?: boolean
  parent?: Entity
  instanceIds: string[]
  init?: CallableFunction
}

export interface Clickable {
  clickEvent?: VLMClickEvent.Config
}

export interface Transformable {
  parent?: Entity
  position: Vector3
  scale: Vector3
  rotation: Vector3
  updateTransform: CallableFunction
}

export interface Audible {
  volume: number
  updateVolume: CallableFunction
  showLocators?: CallableFunction
}

export interface Playable {
  start: CallableFunction
  pause?: CallableFunction
  stop: CallableFunction
}

export interface DynamicMedia {
  offType?: DynamicMediaType
  offImageSrc?: string
  showOffImage?: CallableFunction
}

export interface LiveStream {
  liveSrc?: string
  isLive?: boolean
  enableLiveStream?: boolean
}

export interface Playlist {
  playlist?: string[]
  activePlaylistVideo?: number
  startPlaylistVideo: CallableFunction
  updatePlaylist: CallableFunction
}

export type TextureOptions = {
  textureSrc?: string
  bumpSrc?: string
  emissiveSrc?: string
  alphaSrc?: string
  emission?: number
  castShadows?: boolean
}

// vlm config interfaces - these define the properties stored in the database and passed in from VLM's API

export type VLMBaseProperties = {
  pk: string
  sk: string
  name?: string
  customId?: string
  customRendering?: boolean
  enabled: boolean
  parent?: Entity
}

export type VLMClickable = {
  clickEvent?: VLMClickEvent.Config
}

export type VLMTransformable = {
  parent?: Entity
  position: Vector3
  scale: Vector3
  rotation: Vector3
}

export type VLMAudible = {
  audioSrc?: string
  sourceType?: AudioSourceType
  volume?: number
}

export type VLMPlayable = {
  start: CallableFunction
  pause?: CallableFunction
  stop: CallableFunction
}

export type VLMDynamicMedia = {
  liveSrc?: string
  isLive?: boolean
  enableLiveStream?: boolean
  playlist?: string[]
  offType?: DynamicMediaType
  offImageSrc?: string
}

export type VLMTextureOptions = {
  textureSrc?: string
  bumpSrc?: string
  emissiveSrc?: string
  alphaSrc?: string
  emission?: number
  castShadows?: boolean
  isTransparent?: boolean
}

export type VLMMeshOptions = {
  modelSrc?: string
  withCollisions?: boolean
}

export type VLMDanceFloorOptions = {
  emotes?: EmoteList
  interval?: number
}

export enum ClaimPointType {
  MARKETPLACE_IMAGE,
  CUSTOM_IMAGE,
  MODEL,
  MANNEQUIN,
}

export enum MannequinType {
  MALE,
  FEMALE,
  MATCH_PLAYER,
}

export interface VLMClaimPointProperties {
  enableKiosk?: boolean
  enableSpin?: boolean
  type?: ClaimPointType
  imgSrc?: string
  modelSrc?: string
  mannequinType?: MannequinType
  hoverText?: string
  color1?: { r: number; g: number; b: number; a: number }
  color2?: { r: number; g: number; b: number; a: number }
  color3?: { r: number; g: number; b: number; a: number }
  kioskImgSrc?: string
  itemYOffset?: number
  itemScale?: number
}

export type EmoteList = TriggeredEmote[]

export type TriggeredEmote = {
  emote: string
  isCustom?: string
  loop: boolean
}

export type VLMInstanceProperties = VLMBaseProperties & VLMTransformable & VLMClickable & VLMMeshOptions

export type VLMInstancedItem = { instances?: VLMInstanceProperties[] }

// enums

export enum DynamicMediaType {
  NONE,
  IMAGE,
  PLAYLIST,
  LIVE,
}

export enum AudioSourceType {
  CLIP,
  LOOP,
  PLAYLIST,
  STREAM,
}

export enum StreamState {
  NOT_FOUND,
  INACTIVE,
  STATIC,
  LIVE,
}

export enum TextureType {
  BASIC = 'basic',
  ADVANCED = 'pbr',
}