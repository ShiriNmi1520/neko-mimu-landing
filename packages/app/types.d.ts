import { config } from '@my/config'

export type Conf = typeof config

declare module '@my/ui' {
  interface TamaguiCustomConfig extends Conf {}
  interface CreatorSocialLinkProps {
    GitHubUser: string
    GitHubLink: string
    LinkedInUser: string
    LinkedInLink: string
  }
  interface CreatorInfoProps {
    avatarUrl: string
    name: string
    description: string
    socialLinks: CreatorSocialLinkProps
  }
}
