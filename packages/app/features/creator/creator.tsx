import {
  Adapt,
  Button,
  H1,
  Dialog,
  Sheet,
  Unspaced,
  XStack,
  YStack,
  Avatar,
} from '@my/ui'
import { X } from '@tamagui/lucide-icons'
import { useState } from 'react'

export function CreatorSection() {
  return (
    <YStack f={1} jc='center' ai='center' p='$4'>
      <H1 ta='left'>Meet your creator</H1>
      <XStack alignItems='center' space='$6'>
        <Dialog modal>
          <Dialog.Trigger asChild>
            <Avatar circular size='$10'>
              <Avatar.Image
                accessibilityLabel='Test1'
                source={{ uri: 'https://media.discordapp.net/attachments/737897046953951235/1212004369323794482/IMG_8669.jpg?ex=65f04207&is=65ddcd07&hm=c72e211196222ce293bf4b74f5b84114c4c39d5717580207a3af42afac732035&=&format=webp&width=865&height=649' }}
              />
              <Avatar.Fallback backgroundColor='$blue10' />
            </Avatar>
          </Dialog.Trigger>
          <Adapt when='sm' platform='touch'>
            <Sheet animation='medium' zIndex={200000} modal dismissOnSnapToBottom>
              <Sheet.Frame padding='$4' gap='$4'>
                <Adapt.Contents />
              </Sheet.Frame>
              <Sheet.Overlay
                animation='lazy'
                enterStyle={{ opacity: 0 }}
                exitStyle={{ opacity: 0 }}
              />
            </Sheet>
          </Adapt>
          <Dialog.Portal>
            <Dialog.Overlay
              key='overlay'
              animation='slow'
              opacity={0.5}
              enterStyle={{ opacity: 0 }}
              exitStyle={{ opacity: 0 }}
            />
            <Dialog.Content
              bordered
              elevate
              key='content'
              animateOnly={['transform', 'opacity']}
              animation={[
                'quick',
                {
                  opacity: {
                    overshootClamping: true,
                  },
                },
              ]}
              enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
              exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
              gap='$4'
            >
              <Dialog.Title>Thootau</Dialog.Title>
              <Dialog.Description>
                Make changes to your profile here. Click save when you're done.
              </Dialog.Description>
              <Unspaced>
                <Dialog.Close asChild>
                  <Button
                    position='absolute'
                    top='$3'
                    right='$3'
                    size='$2'
                    circular
                    icon={X}
                  />
                </Dialog.Close>
              </Unspaced>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog>
      </XStack>
    </YStack>
  )
}