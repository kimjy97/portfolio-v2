import React, { useState } from 'react';
import styled from 'styled-components';
import SectionContainer from '@components/Section/SectionContainer';
import { useScroll } from '@hooks/useScroll';
import ProjectsList from '@components/Section/ProjectsSection/ProjectsList';
import Title from '@components/Section/Title';
import SortOption from '@components/Section/ProjectsSection/SortOption';

const ProjectsSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const { handleScroll, opacity } = useScroll();
  const className = isVisible ? 'visible' : '';

  return (
    <SectionContainer
      name='projects'
      handleVisible={setIsVisible}
      onScroll={handleScroll}
    >
      <Background />
      <Wrapper style={{ opacity }}>
        <Title
          isVisible={isVisible}
          main='프로젝트'
          sub='현재까지 개발한 개인 또는 팀 프로젝트입니다.'
        />
        <ContentsWrapper className={className}>
          <SortOption />
          <ProjectsList />
        </ContentsWrapper>
      </Wrapper>
    </SectionContainer>
  )
};

export default ProjectsSection;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  z-index: 0;
  pointer-events: none;
`
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 80rem;
  min-height: 100vh;
  margin: 0 auto;
  padding-bottom: 5.875rem;
  
  font-family: var(--font-pretendard);
`
const ContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  opacity: 0;
  transition: 500ms 600ms cubic-bezier(0.23, 1, 0.320, 1);

  &.visible {
    opacity: 1;
  }
`