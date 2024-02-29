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
import React, {useState} from "react";
import {ItemLocation} from "../interfaces/item-location";
import useImage from "use-image";



const ImageItem = (imageUrl: string) => {
  const [ location, setLocation ] = useState<Partial<ItemLocation>>({ x: 0, y: 0, isDragging: false })
  const [image, status] = useImage(imageUrl)
  return (
    <Image image={image}
           x={location.x}
           y={location.y}
           key={Math.random()}
           draggable
           onDragStart={() => {
             setLocation({
               ...location,
               isDragging: true,
             });
           }}
           onDragEnd={(e) => {
             setLocation({
               isDragging: false,
               x: e.target.x(),
               y: e.target.y(),
             });
           }}
    ></Image>
  )
}

export function MaterialSelector() {
  const imageArray = ["https://media.discordapp.net/attachments/1210109351000408084/1212597865365373049/8nMRuD7fDhY71dXLS3DNnLSlqZy3AoEkTazrggAMOOOCASPwHviputgEtESYAAAAASUVORK5CYII.png?ex=65f26ac4&is=65dff5c4&hm=0d1870e58b5b70a5f314b061bc8346beed2c677736258abfab25f84f6bbf5437&=&format=webp&quality=lossless&width=440&height=458", "https://media.discordapp.net/attachments/1210109351000408084/1212597865365373049/8nMRuD7fDhY71dXLS3DNnLSlqZy3AoEkTazrggAMOOOCASPwHviputgEtESYAAAAASUVORK5CYII.png?ex=65f26ac4&is=65dff5c4&hm=0d1870e58b5b70a5f314b061bc8346beed2c677736258abfab25f84f6bbf5437&=&format=webp&quality=lossless&width=440&height=458"]
  return (
    <>
      <Stage>
        <Layer>
          { imageArray.map(imageUrl => {
            return ImageItem(imageUrl)
          }) }
        </Layer>
      </Stage>
    </>
  )
}
