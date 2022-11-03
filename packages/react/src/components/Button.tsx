import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  transition: '0.2s',

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$indigo400',

        '&:not(:disabled):hover': {
          background: '$indigo500',
        },

        '&:disabled': {
          backgroundColor: '$slate200',
          color: '$slate400',
        },
      },

      secondary: {
        color: '$indigo400',
        border: '2px solid $indigo400',

        '&:not(:disabled):hover': {
          background: '$indigo400',
          color: '$white',
        },

        '&:disabled': {
          color: '$slate200',
          borderColor: '$slate200',
        },
      },

      tertiary: {
        color: '$slate400',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$slate400',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
