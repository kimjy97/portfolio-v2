import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Project from '@/components/Section/ProjectsSection/ProjectsList/Project';
import { IProjectProps, projectData } from '@/constants/project';
import { projectFilterState } from '@/atoms/project';

const ProjectsList = (): JSX.Element => {
  const selectedStacks = useRecoilValue<string[]>(projectFilterState);

  const sortedProjects = useMemo(() => {
    return projectData.sort((a, b) => {
      const isVisibleA = selectedStacks.length === 0 || a.stacks.some((stack: string) => selectedStacks.includes(stack));
      const isVisibleB = selectedStacks.length === 0 || b.stacks.some((stack: string) => selectedStacks.includes(stack));

      if (isVisibleA === isVisibleB) return 0;
      return isVisibleA ? -1 : 1;
    });
  }, [selectedStacks]);

  return (
    <Container>
      {sortedProjects.map((project: IProjectProps, idx: number) => (
        <Project key={idx} data={project} />
      ))}
    </Container>
  );
};

export default ProjectsList;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(550px, 1fr));
  column-gap: 4rem;
  row-gap: 5rem;
  width: 100%;
  padding: 0 1.5rem;

  @media (max-width: 1360px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    column-gap: 1.5rem;
    row-gap: 3rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 2.5rem;
    padding: 0 1rem;
  }
`;