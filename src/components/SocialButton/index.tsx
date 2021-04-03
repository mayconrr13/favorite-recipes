import React from 'react'

import { Button } from './styles'

interface SocialButtonProps {
  socialMedia: string;
}

export const SocialButton = ({ socialMedia }: SocialButtonProps) => {
  return (
    <Button color={socialMedia} type="button">
      <div>
        <img src={`/icons/${socialMedia.toLowerCase()}.svg`}alt={socialMedia}/>
      </div>
      <span>Sign in with {socialMedia}</span>
    </Button>
  )
}
