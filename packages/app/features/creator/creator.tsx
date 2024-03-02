import {
  Adapt,
  Avatar,
  Button,
  Dialog,
  H1,
  ListItem,
  Sheet,
  Unspaced,
  XStack,
  YGroup,
  YStack,
} from '@my/ui'
import { Github, Linkedin, X } from '@tamagui/lucide-icons'
import React from 'react'
function SocialLink({ GitHubUser, GitHubLink, LinkedInUser, LinkedInLink }) {
  return (
    <YGroup bordered>
      <YGroup.Item>
        <ListItem
          hoverTheme
          icon={Github}
          title="GitHub"
          subTitle={GitHubUser}
          // @ts-ignore
          onClick={() => window.open(GitHubLink)}
        />
      </YGroup.Item>
      <YGroup.Item>
        <ListItem
          hoverTheme
          icon={Linkedin}
          title="LinkedIn"
          subTitle={LinkedInUser}
          // @ts-ignore
          onClick={() => window.open(LinkedInLink)}
        />
      </YGroup.Item>
    </YGroup>
  )
}

function GenerateDialog({ avatarUrl, name, description, socialLinks}) {
  return (
    <Dialog modal>
      <Dialog.Trigger asChild>
        <Avatar circular size='$10'>
          <Avatar.Image
            accessibilityLabel={name}
            source={{ uri: avatarUrl }}
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
          <Dialog.Title>{name}</Dialog.Title>
          <Dialog.Description>
            {description}
          </Dialog.Description>
          <SocialLink
            GitHubUser={socialLinks.GitHubUser}
            GitHubLink={socialLinks.GitHubLink}
            LinkedInUser={socialLinks.LinkedInUser}
            LinkedInLink={socialLinks.LinkedInLink}
          />
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
  )
}

export function CreatorSection() {
  return (
    <YStack f={1} jc='center' ai='center' p='$4'>
      <H1 ta='left'>Meet your creator</H1>
      <XStack alignItems='center' gap='$6'>
        <GenerateDialog
          avatarUrl='https://media.discordapp.net/attachments/737897046953951235/1212004369323794482/IMG_8669.jpg?ex=65f04207&is=65ddcd07&hm=c72e211196222ce293bf4b74f5b84114c4c39d5717580207a3af42afac732035&=&format=webp&width=865&height=649'
          name='Thootau'
          description='太平洋の空遠く 輝やく南十字星'
          socialLinks={{
            GitHubUser: 'Thootau',
            GitHubLink: 'https://github.com/thootau99',
            LinkedInUser: 'Hong Ki Khoo',
            LinkedInLink: 'https://www.linkedin.com/in/hong-ki-khoo-806b7b244'
          }}
        />
        <GenerateDialog
          avatarUrl='https://avatars.githubusercontent.com/u/33322926?v=4'
          name='ShiriNmi'
          description='Seeking for new opportunities'
          socialLinks={{
            GitHubUser: 'ShiriNmi1520',
            GitHubLink: 'https://github.com/ShiriNmi1520',
            LinkedInUser: 'YuChe Huang',
            LinkedInLink: 'https://www.linkedin.com/in/yuche-huang-085094229'
          }}
        />
      </XStack>
    </YStack>
  )
}