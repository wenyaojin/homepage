import * as React from 'react';
import './styles/projectSection.scss';
import { ProjectBox } from './projectBox';

export function ProjectSection(): JSX.Element {
  return (
    <section className='projectBoxSection'>
      <h4 className='heading4'>My Projects</h4>
      <div className='projectBoxWrapper'>
        <ProjectBox projectName='test1' projectLink='www.bing.com'/>
        <ProjectBox projectName='test2' projectLink='www.bing.com'/>
        <ProjectBox projectName='test3' projectLink='www.bing.com'/>
      </div>
    </section>
  );
}