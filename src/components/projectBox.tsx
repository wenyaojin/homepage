import * as React from 'react';
import './styles/projectBoxStyles.scss';

interface IProjectBoxProps {
  projectName: string,
  projectLink: string
}
export function ProjectBox(props: IProjectBoxProps): JSX.Element {
  return (
    <div className='projectBox'>
      <div className='projectTitle'>
        <h3>{props.projectName}</h3>
        <a href={props.projectLink} target='_blank'>
          <img src='https://tiapnn.netlify.app/github.a1bad59c.svg' alt='github logo'/>
        </a>
      </div>
      <p>sui bian xie dian</p>
      <p>sui bian xie dian</p>
      <p>sui bian xie dian</p>
    </div>
  );
}