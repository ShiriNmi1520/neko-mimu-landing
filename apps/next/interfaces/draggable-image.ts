import { ItemLocation } from './item-location'

interface Draggable {
  isDragging: boolean
}

interface Selectable {
  isSelected: boolean
}

export interface MaterialImage extends ItemLocation, Draggable, Selectable {
  width: number
  height: number
  scaleX: number
  scaleY: number
  image: HTMLImageElement | undefined
  id: string
}
