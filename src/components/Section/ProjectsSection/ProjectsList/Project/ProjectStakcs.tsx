import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { projectFilterState } from '@/atoms/project';
import { GooglePlayConsoleIcon, MongodbIcon, NextjsIcon, ReactNativeIcon, RecoilIcon, StyledComponentsIcon, TypescriptIcon, VercelIcon, TailwindCSSIcon, ZustandIcon, ReactQueryIcon } from '@/components/Section/ProjectsSection/ProjectsList/Project/StackIcons';
import smoothScrollTo from '@/utils/smoothScrollTo';
import { useRouter } from 'next/navigation';
interface StackIconsType {
  [key: string]: React.ElementType;
}

const stackIcons: StackIconsType = {
  'Next.js': NextjsIcon,
  TypeScript: TypescriptIcon,
  Recoil: RecoilIcon,
  StyledComponents: StyledComponentsIcon,
  MongoDB: MongodbIcon,
  Vercel: VercelIcon,
  ReactNative: ReactNativeIcon,
  GooglePlayConsole: GooglePlayConsoleIcon,
  TailwindCSS: TailwindCSSIcon,
  Zustand: ZustandIcon,
  ReactQuery: ReactQueryIcon,
};

interface IProps {
  stacks: string[];
}

interface TooltipProps {
  children: React.ReactNode;
  text: string;
}

interface StackIconProps {
  stack: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedStacks, setSeletedStacks] = useRecoilState(projectFilterState);
  const router = useRouter();

  const handleClickStack = async (stack: string) => {
    const temp: string[] = [];
    selectedStacks.forEach((i: string) => { if (i !== stack) temp.push(i) });
    setSeletedStacks([stack, ...temp]);
    const targetSection = document.getElementById('projects');
    if (targetSection) {
      const targetPosition = targetSection.offsetTop;
      await smoothScrollTo(targetPosition, 450);
      router.replace(`/?section=projects`, { scroll: false });
    }
  }

  return (
    <TooltipWrapper
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onClick={() => handleClickStack(text)}
    >
      {children}
      <TooltipText className={isVisible ? 'visible' : ''}>
        {text}
      </TooltipText>
    </TooltipWrapper>
  );
};

const StackIcon: React.FC<StackIconProps> = ({ stack }) => {
  const Icon = stackIcons[stack];
  return Icon ? (
    <Tooltip text={stack}>
      <Icon />
    </Tooltip>
  ) : null;
};

const ProjectStacks = ({ stacks }: IProps) => {
  return (
    <Row $marginBottom="1em">
      <Stacks>
        {stacks.map((stack: string, index: number) => (
          <StackIcon key={index} stack={stack} />
        ))}
      </Stacks>
    </Row>
  );
};

export default ProjectStacks;

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;

  cursor: pointer;
  
  svg {
    transition: 100ms;
  }
  
  &:hover svg{
    transform: scale(1.15);
  }
`
const TooltipText = styled.span`
  position: absolute;
  top: 150%;
  left: 50%;
  transform: translate(-50%, 0.25em);
  visibility: visible;
  padding: 0.4em 0.875em;

  background-color: #aea9f91e;
  opacity: 0;
  border-radius: 0.375em;
  backdrop-filter: blur(20px);
  
  font-size: 0.875em;
  color: #fff;
  text-align: center;
  
  z-index: 1;
  transition: 150ms;
  pointer-events: none;

  &.visible {
    transform: translate(-50%);
    opacity: 1;
    pointer-events: initial;
  }
`
const Stacks = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1em;
  padding-right: 1.5em;

  &::-webkit-scrollbar {
    display: none;
  }
`
const Row = styled.div<{ $marginBottom?: string }>`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ $marginBottom }) => $marginBottom || '1em'};
`
