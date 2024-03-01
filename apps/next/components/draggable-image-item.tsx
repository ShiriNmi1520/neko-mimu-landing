import { Image as RKImage } from 'react-konva'
import { DraggableImage } from '../interfaces/draggable-image'
import React, { Dispatch, ReactElement, SetStateAction } from 'react'
export const ImageItem = (
  imageItem: DraggableImage,
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
        setLocation((prevState) => {
          return {
            ...prevState,
            [imageItem.id]: {
              ...prevState[imageItem.id],
              isDragging: true,
            },
          }
        })
      }}
      onDragEnd={(e) => {
        setLocation((prevState) => {
          return {
            ...prevState,
            [imageItem.id]: {
              ...prevState[imageItem.id],
              isDragging: false,
              x: e.target.x(),
              y: e.target.y(),
            },
          }
        })
      }}
    />
  )
}
