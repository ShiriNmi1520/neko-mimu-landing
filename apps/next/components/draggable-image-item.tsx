import { Image as RKImage } from 'react-konva'
import { DraggableImage } from '../interfaces/draggable-image'
import React, { Dispatch, ReactElement, SetStateAction } from 'react'
export const ImageItem = (
  imageItem: DraggableImage,
  location: Record<string, DraggableImage>,
  setLocation: Dispatch<SetStateAction<Record<string, DraggableImage>>>
): ReactElement => {
  return (
    <RKImage
      image={imageItem.image}
      x={imageItem.x}
      y={imageItem.y}
      key={imageItem.id}
      draggable
      onDragStart={() => {
        setLocation({
          ...location,
          [imageItem.id]: {
            ...location[imageItem.id],
            isDragging: true,
          },
        })
      }}
      onDragEnd={(e) => {
        setLocation({
          ...location,
          [imageItem.id]: {
            ...location[imageItem.id],
            isDragging: false,
            x: e.target.x(),
            y: e.target.y(),
          },
        })
      }}
    />
  )
}
