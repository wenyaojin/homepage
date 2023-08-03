import * as React from 'react';
import './styles/burgerButton.scss';

export function BurgerButton(): JSX.Element {
  return (
    <div className='burgerButton'>
      <div className='bar1'/>
      <div className='bar2'/>
      <div className='bar3'/>
    </div>
  )
}