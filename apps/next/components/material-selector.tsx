import { Stage, Layer, Image } from "react-konva";
import React, {Dispatch, ReactElement, SetStateAction, useEffect, useState} from "react";
import useImage from "use-image";
import {DraggableItem} from "../interfaces/draggable-item";


const ImageItem = (imageItem: DraggableItem, location: Record<string, DraggableItem>, setLocation: Dispatch<SetStateAction<Record< string, DraggableItem >>>): ReactElement => {
  const [image] = useImage(imageItem.item)
  return (
    <Image image={image}
           x={imageItem.x}
           y={imageItem.y}
           key={imageItem.id}
           draggable
           onDragStart={() => {
             setLocation({
               ...location,
               [imageItem.id]: {
                 ...location[imageItem.id],
                 isDragging: true
               },
             });
           }}
           onDragEnd={(e) => {
             setLocation({
               ...location,
               [imageItem.id]: {
                 ...location[imageItem.id],
                 isDragging: false,
                 x: e.target.x(),
                 y: e.target.y(),               },
             });
           }}
    />
  )
}

export function MaterialSelector() {
  const [ imageLocation, setImageLocation ] = useState<Record< string, DraggableItem >>({})
  const imageArray = ["https://media.discordapp.net/attachments/1210109351000408084/1212597865365373049/8nMRuD7fDhY71dXLS3DNnLSlqZy3AoEkTazrggAMOOOCASPwHviputgEtESYAAAAASUVORK5CYII.png?ex=65f26ac4&is=65dff5c4&hm=0d1870e58b5b70a5f314b061bc8346beed2c677736258abfab25f84f6bbf5437&=&format=webp&quality=lossless&width=440&height=458" ]
  useEffect(() => {
    imageArray.map(imageUrl => {
      const randomId = crypto.randomUUID()
      setImageLocation({ ...imageLocation, [randomId]: {
          item: imageUrl,
          id: randomId,
          isDragging: false,
          x: 0,
          y: 0
        } as DraggableItem })
    })
  }, [imageArray])
  return (
    <>
      <Stage width={300} height={300}>
        <Layer>
          { Object.keys(imageLocation).map(image => ImageItem(imageLocation[image], imageLocation, setImageLocation)) }
        </Layer>
      </Stage>
    </>
  )
}
