import {ItemLocation} from "./item-location";

export interface DraggableItem extends ItemLocation{
  item: any,
  id: string
  isDragging: boolean
}