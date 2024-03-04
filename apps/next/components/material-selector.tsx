import useImage from 'use-image'
import React, { Dispatch, SetStateAction } from 'react'
import { MaterialImage } from '../interfaces/draggable-image'
import { Button } from 'tamagui'

interface MaterialSelectorProps {
  imageUrl: string
  setImageLocation: Dispatch<SetStateAction<Record<string, MaterialImage>>>
}
export function MaterialSelector(props: MaterialSelectorProps) {
  const [thisImage] = useImage(props.imageUrl)
  return (
    <Button
      size={'$6'}
      // icon={React.createElement('img', { src: props.imageUrl })}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      onClick={() => {
        const randomId = crypto.randomUUID()
        props.setImageLocation((prevState) => {
          return {
            ...prevState,
            [randomId]: {
              image: thisImage,
              id: randomId,
              isDragging: false,
              x: 0,
              y: 0,
              scaleX: 1,
              scaleY: 1,
            } as MaterialImage,
          }
        })
      }}
    >
      <img style={{ height: '80%', width: 'auto', position: 'relative' }} src={props.imageUrl} />
    </Button>
  )
}
