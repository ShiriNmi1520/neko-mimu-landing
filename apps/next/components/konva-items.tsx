import { Image as RKImage, Transformer } from 'react-konva'
import React, { Dispatch, ReactElement, SetStateAction, useEffect } from 'react'
import { MaterialImage } from '../interfaces/draggable-image'
interface ImageItemProps {
  imageItem: MaterialImage
  setLocation: Dispatch<SetStateAction<Record<string, MaterialImage>>>
  isSelected: boolean
  onClick: () => void
}
export const ImageItem = (props: ImageItemProps): ReactElement => {
  const imageRef = React.useRef(null)
  const transformerRef = React.useRef()
  useEffect(() => {
    if (props.isSelected) {
      // we need to attach transformer manually
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      transformerRef.current.nodes([imageRef.current])
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      transformerRef.current.getLayer().batchDraw()
    }
  }, [props.isSelected])
  return (
    <>
      <RKImage
        image={props.imageItem.image}
        x={props.imageItem.x}
        y={props.imageItem.y}
        width={props.imageItem.width}
        height={props.imageItem.height}
        scaleX={props.imageItem.scaleX}
        scaleY={props.imageItem.scaleY}
        ref={imageRef}
        key={props.imageItem.id}
        draggable
        onDragStart={() => {
          props.setLocation((prevState) => {
            return {
              ...prevState,
              [props.imageItem.id]: {
                ...prevState[props.imageItem.id],
                isDragging: true,
              },
            }
          })
        }}
        onDragEnd={(e) => {
          props.setLocation((prevState) => {
            return {
              ...prevState,
              [props.imageItem.id]: {
                ...prevState[props.imageItem.id],
                isDragging: false,
                x: e.target.x(),
                y: e.target.y(),
              },
            }
          })
        }}
        onTransformEnd={() => {
          const node = imageRef.current
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          const scaleX = node.scaleX()
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          const scaleY = node.scaleY()
          const thisImage = { ...props.imageItem }
          thisImage.scaleX = scaleX
          thisImage.scaleY = scaleY
          props.setLocation((prevState) => {
            return {
              ...prevState,
              [thisImage.id]: { ...thisImage },
            }
          })
        }}
        onClick={props.onClick}
      />
      {props.isSelected && (
        <Transformer
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          // @ts-expect-error
          ref={transformerRef}
          flipEnabled={false}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (Math.abs(newBox.width) < 5 || Math.abs(newBox.height) < 5) {
              return oldBox
            }
            return newBox
          }}
        />
      )}
    </>
  )
}
