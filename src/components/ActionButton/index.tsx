import React, { ButtonHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'
import { FiPlus } from 'react-icons/fi'

import { Button } from './styles'

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  property: string;
  icon: React.ComponentType<IconBaseProps>;
}

export const ActionButton = ({ property, icon: Icon, ...rest }: ActionButtonProps) => {
  return (
    <Button type="button" {...rest}>
      <div>
        {Icon && <Icon />}
      </div>
      <span>
        {property}
      </span>
    </Button>
  )
}
