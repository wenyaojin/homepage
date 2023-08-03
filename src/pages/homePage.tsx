import * as React from 'react';
import { PersonDetail, ProjectSection, BurgerButton } from '../components/index';


export function HomePage(): JSX.Element {
  return (
    <div>
      <PersonDetail />
      <BurgerButton />
      <ProjectSection />
    </div>
  );
} 