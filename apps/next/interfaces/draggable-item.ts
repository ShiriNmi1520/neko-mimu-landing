import {ItemLocation} from "./item-location";

export interface DraggableItem extends ItemLocation{
  item: string,
  id: string
  isDragging: boolean
}