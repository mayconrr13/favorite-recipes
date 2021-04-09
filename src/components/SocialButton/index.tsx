import React, { ButtonHTMLAttributes } from 'react'

import { Button } from './styles'

interface SocialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  socialMedia: string;
}

export const SocialButton = ({ socialMedia , ...rest}: SocialButtonProps) => {
  return (
    <Button color={socialMedia} type="button" {...rest}>
      <div>
        <img src={`/icons/${socialMedia.toLowerCase()}.svg`}alt={socialMedia}/>
      </div>
      <span>Sign in with {socialMedia}</span>
    </Button>
  )
}
