import React, { useMemo, useState, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Project from '@/components/Section/ProjectsSection/ProjectsList/Project';
import { IProjectProps, projectData } from '@/constants/project';
import { projectFilterState } from '@/atoms/project';
import { isStackMatched } from '@/utils/stackMatcher';

const ProjectsList = (): JSX.Element => {
  const selectedStacks = useRecoilValue<string[]>(projectFilterState);
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const alreadyVisibleSet = useRef<Set<string>>(new Set());
  const [visibleItems, setVisibleItems] = useState<Record<string, number>>({});

  const visibleProjects = useMemo(() => {
    return projectData.filter((project: IProjectProps) => !project.hidden);
  }, []);

  const sortedProjects = useMemo(() => {
    return [...visibleProjects].sort((a, b) => {
      const isVisibleA =
        selectedStacks.length === 0 ||
        a.stacks.some((stack: string) => selectedStacks.some((selected) => isStackMatched(stack, selected)));
      const isVisibleB =
        selectedStacks.length === 0 ||
        b.stacks.some((stack: string) => selectedStacks.some((selected) => isStackMatched(stack, selected)));

      if (isVisibleA === isVisibleB) return 0;
      return isVisibleA ? -1 : 1;
    });
  }, [visibleProjects, selectedStacks]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const newlyVisible = entries.filter(
          (entry) => entry.isIntersecting && !alreadyVisibleSet.current.has((entry.target as HTMLElement).dataset.name || '')
        );

        if (newlyVisible.length > 0) {
          newlyVisible.sort((a, b) => {
            const rectA = a.target.getBoundingClientRect();
            const rectB = b.target.getBoundingClientRect();
            if (Math.abs(rectA.top - rectB.top) > 20) {
              return rectA.top - rectB.top;
            }
            return rectA.left - rectB.left;
          });

          const newUpdates: Record<string, number> = {};
          newlyVisible.forEach((entry, i) => {
            const name = (entry.target as HTMLElement).dataset.name;
            if (name) {
              alreadyVisibleSet.current.add(name);
              observer.unobserve(entry.target);
              newUpdates[name] = i * 110;
            }
          });

          setVisibleItems((prev) => ({ ...prev, ...newUpdates }));
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const observedElements: Element[] = [];
    cardRefs.current.forEach((el, name) => {
      if (el && !alreadyVisibleSet.current.has(name)) {
        observer.observe(el);
        observedElements.push(el);
      }
    });

    return () => {
      observedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [sortedProjects]);

  return (
    <Container>
      {sortedProjects.map((project: IProjectProps, idx: number) => (
        <Project
          key={project.name || idx}
          data={project}
          setRef={(el) => {
            if (el) cardRefs.current.set(project.name, el);
            else cardRefs.current.delete(project.name);
          }}
          isVisible={visibleItems[project.name] !== undefined}
          delay={visibleItems[project.name] ?? 0}
        />
      ))}
    </Container>
  );
};

export default ProjectsList;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  column-gap: 2.5rem;
  row-gap: 4.5rem;
  width: 100%;
  padding: 0 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    column-gap: 1.75rem;
    row-gap: 3.5rem;
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 2.5rem;
    padding: 0 1.25rem;
  }
`;