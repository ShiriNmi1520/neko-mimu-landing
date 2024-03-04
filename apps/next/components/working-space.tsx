import React, { useState } from 'react'
import { Stage, Layer } from 'react-konva'
import { ImageItem } from './konva-items'
import { MaterialSelector } from './material-selector'
import { MaterialImage } from '../interfaces/draggable-image'
import { XStack, YStack } from 'tamagui'

export function WorkingSpace() {
  const [imageLocation, setImageLocation] = useState<Record<string, MaterialImage>>({})
  const [selectedId, setSelectedId] = useState<string>('')
  const temlpateImaegs = [
    'https://i1.sndcdn.com/artworks-TOJJyHynzM0iRSuW-9URBDA-t500x500.jpg',
    'https://i1.sndcdn.com/artworks-TOJJyHynzM0iRSuW-9URBDA-t500x500.jpg',
    'https://i1.sndcdn.com/artworks-TOJJyHynzM0iRSuW-9URBDA-t500x500.jpg',
  ]
  return (
    <>
      <XStack padding={'$3'} gap={'$3'} justifyContent={'center'}>
        <Stage width={1000} height={400}>
          <Layer>
            {Object.keys(imageLocation).map((imageKey) => (
              // eslint-disable-next-line react/jsx-key
              <ImageItem
                imageItem={imageLocation[imageKey]}
                setLocation={setImageLocation}
                isSelected={selectedId === imageLocation[imageKey].id}
                onClick={() => {
                  console.log('clicked', imageLocation[imageKey])
                  setSelectedId(imageLocation[imageKey].id)
                }}
              />
            ))}
          </Layer>
        </Stage>
        <YStack padding={'$3'} gap={'$3'} flex={1} flexDirection={'row'}>
          <XStack flexWrap="wrap" flexBasis={'70%'}>
            {temlpateImaegs.map((image) => {
              return (
                <MaterialSelector
                  imageUrl={image}
                  setImageLocation={setImageLocation}
                  key={crypto.randomUUID()}
                />
              )
            })}
          </XStack>
        </YStack>
      </XStack>
    </>
  )
}
