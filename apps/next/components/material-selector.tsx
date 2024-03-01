import { Stage, Layer } from 'react-konva'
import React, { useEffect, useState } from 'react'
import { DraggableImage } from '../interfaces/draggable-image'
import { ImageItem } from './draggable-image-item'

export function MaterialSelector() {
  const [imageLocation, setImageLocation] = useState<Record<string, DraggableImage>>({})
  const imageArray = [
    'https://media.discordapp.net/attachments/1210109351000408084/1212597865365373049/8nMRuD7fDhY71dXLS3DNnLSlqZy3AoEkTazrggAMOOOCASPwHviputgEtESYAAAAASUVORK5CYII.png?ex=65f26ac4&is=65dff5c4&hm=0d1870e58b5b70a5f314b061bc8346beed2c677736258abfab25f84f6bbf5437&=&format=webp&quality=lossless&width=440&height=458',
  ]
  useEffect(() => {
    imageArray.map((imageUrl) => {
      const image = new Image()
      image.src = imageUrl
      const randomId = crypto.randomUUID()
      setImageLocation({
        ...imageLocation,
        [randomId]: {
          image: image,
          id: randomId,
          isDragging: false,
          x: 0,
          y: 0,
        } as DraggableImage,
      })
    })
  }, [])
  return (
    <>
      <Stage width={300} height={300}>
        <Layer>
          {Object.keys(imageLocation).map((image) =>
            ImageItem(imageLocation[image], imageLocation, setImageLocation)
          )}
        </Layer>
      </Stage>
    </>
  )
}
