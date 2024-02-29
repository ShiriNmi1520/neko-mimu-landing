// get materials from API

// use `use-image` to load image to this selector

// if user click the image in this selector, add the image of user just clicked to layer `content`

// the first very simple and recommended way:
//const MaterialImageFromAPI = () => {
  //const [image] = useImage('https://example.of.material.exists');
  //return <Image image={image} />;
//};


/*
<Stage width={window.innerWidth} height={window.innerHeight}>
  <Layer>
    <URLImage src="https://konvajs.org/assets/yoda.jpg" x={150} />
    <LionImage />
  </Layer>
</Stage>
*/

// append image to Layer like this

import { Stage, Layer, Image } from "react-konva";
import React, {Dispatch, ReactElement, SetStateAction, useEffect, useState} from "react";
import useImage from "use-image";
import {DraggableItem} from "../interfaces/draggable-item";


const ImageItem = (imageItem: DraggableItem, location: Record<string, DraggableItem>, setLocation: Dispatch<SetStateAction<Record< string, DraggableItem >>>): ReactElement => {
  return (
    <Image image={imageItem.item}
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
  const [imageElement] = useImage("https://media.discordapp.net/attachments/1210109351000408084/1212597865365373049/8nMRuD7fDhY71dXLS3DNnLSlqZy3AoEkTazrggAMOOOCASPwHviputgEtESYAAAAASUVORK5CYII.png?ex=65f26ac4&is=65dff5c4&hm=0d1870e58b5b70a5f314b061bc8346beed2c677736258abfab25f84f6bbf5437&=&format=webp&quality=lossless&width=440&height=458")
  const imageArray = [imageElement, imageElement]
  const [ imageLocation, setImageLocation ] = useState<Record< string, DraggableItem >>({})
  useEffect(() => {

    const imageItems = imageArray.map(imageUrl => {
      const randomId = crypto.randomUUID()
      setImageLocation({ ...imageLocation, [randomId]: {
          item: imageUrl,
          id: randomId,
          isDragging: false,
          x: 0,
          y: 0
        } as DraggableItem })
    })
  } )
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
