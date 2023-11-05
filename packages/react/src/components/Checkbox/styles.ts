import * as Checkbox from '@radix-ui/react-checkbox';

import { styled, keyframes } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  background: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray900',

  '&[data-state="checked"]': {
    background: '$ignite300'
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed'
  },

  '&:focus': {
    border: '2px solid $ignite300'
  },

  transition: 'background 200ms linear'
})

const fadeIn = keyframes({
  from: {
    transform: 'translateY(-100%)'
  },
  to: {
    transform: 'translateY(0)'
  },
});

const fadeOut = keyframes({
  from: {
    transform: 'translateY(0)'
  },
  to: {
    transform: 'translateY(-100%)'
  },
});

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${fadeIn} 200ms ease-in`
  },
  
  '&[data-state="unchecked"]': {
    animation: `${fadeOut} 200ms ease-out`
  },
})
