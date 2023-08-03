import * as React from 'react';
import Button from '@mui/material/Button';
import './styles/personDetailStyles.scss';

const cvUrl: string = 'https://www.google.com';
export function PersonDetail(): JSX.Element {
  return (
    <div className='personalDetailsWrapper'>
      <h5 className='heading5'>hello there👋, I'm</h5>
      <div className='fullName'>Wenyao Jin</div>
      <h4 className='heading4'>Full-stack engineer</h4>
      <p className='skillsParagraph'>Java • C# • Azure • SQL • JS • TypeScript • Node • React</p>
      <Button variant="outlined" size="medium" onClick={onClick}>CHECK OUT MY CV</Button>
    </div>
  );

  function onClick(): void {
    window.open(cvUrl, '_blank');
  }
}