import React, { useState } from 'react'
import { Stage, Layer } from 'react-konva'
import { DraggableImage } from '../interfaces/draggable-image'
import { ImageItem } from './draggable-image-item'
import { MaterialSelector } from './material-selector'
export function WorkingSpace() {
  const [imageLocation, setImageLocation] = useState<Record<string, DraggableImage>>({})
  return (
    <>
      <Stage width={1000} height={400}>
        <Layer>
          {Object.keys(imageLocation).map((imageKey) =>
            ImageItem(imageLocation[imageKey], setImageLocation)
          )}
        </Layer>
      </Stage>
      <MaterialSelector
        imageUrl={'https://i1.sndcdn.com/artworks-TOJJyHynzM0iRSuW-9URBDA-t500x500.jpg'}
        setImageLocation={setImageLocation}
      ></MaterialSelector>
    </>
  )
}
