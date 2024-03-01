import { ItemLocation } from './item-location'

export interface DraggableImage extends ItemLocation {
  image: HTMLImageElement | undefined
  id: string
  isDragging: boolean
}
