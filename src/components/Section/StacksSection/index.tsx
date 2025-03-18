import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import SectionContainer from '@components/Section/SectionContainer';
import NextjsSVG from '@public/svgs/stacks/nextjs.svg';
import TypescriptSVG from '@public/svgs/stacks/typescript.svg';
import ReactSVG from '@public/svgs/stacks/react.svg';
import JquerySVG from '@public/svgs/stacks/jquery.svg';
import NodejsSVG from '@public/svgs/stacks/nodejs.svg';
import MysqlSVG from '@public/svgs/stacks/mysql.svg';
import MongodbSVG from '@public/svgs/stacks/mongodb.svg';
import StyledComponentsSVG from '@public/svgs/stacks/styledcompoents.svg';
import ScssSVG from '@public/svgs/stacks/scss.svg';
import RecoilSVG from '@public/svgs/stacks/recoil.svg';
import ZustandSVG from '@public/svgs/stacks/zustand.svg';
import FigmaSVG from '@public/svgs/stacks/figma.svg';
import PostmanSVG from '@public/svgs/stacks/postman.svg';
import IllustratorSVG from '@public/svgs/stacks/illustrator.svg';
import PhotoshopSVG from '@public/svgs/stacks/photoshop.svg';
import VercelSVG from '@public/svgs/stacks/vercel.svg';
import AwsSVG from '@public/svgs/stacks/aws.svg';
import GooglePlaySVG from '@public/svgs/stacks/googleplay.svg';
import ExpoSVG from '@public/svgs/stacks/expo.svg';
import SupabaseSVG from '@public/svgs/stacks/supabase.svg';
import FirebaseSVG from '@public/svgs/stacks/firebase.svg';
import { useScroll } from '@hooks/useScroll';
import Stack from '@components/Section/StacksSection/Stack';
import Title from '@components/Section/Title';
import { IProjectProps, projectData } from '@/constants/project';

const StacksSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleRows, setVisibleRows] = useState<boolean[]>([]);
  const { handleScroll, opacity } = useScroll();
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setRowRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    rowRefs.current[index] = el;
  }, []);

  const calculateStackCounts = useCallback(() => {
    const counts: { [key: string]: number } = {};
    projectData.forEach((project: IProjectProps) => {
      project.stacks.forEach((stack: string) => {
        counts[stack] = (counts[stack] || 0) + 1;
      });
    });
    return counts;
  }, []);

  const stackCounts = calculateStackCounts();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = rowRefs.current.findIndex((ref) => ref === entry.target);
          if (index !== -1) {
            setVisibleRows((prev) => {
              const newState = [...prev];
              if (!newState[index]) {
                newState[index] = entry.isIntersecting;
              }
              return newState;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -70px 0px',
      }
    );

    rowRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      rowRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <SectionContainer
      name='stacks'
      handleVisible={setIsVisible}
      onScroll={handleScroll}
    >
      <Background />
      <Wrapper style={{ opacity }}>
        <Title
          isVisible={isVisible}
          main='주요 기술 스택'
          sub='스택을 누르면 해당 스택이 사용된 프로젝트로 이동합니다.'
        />
        <StackList>
          <StackItem>
            <StackType visible={visibleRows[0]}># FRONT-END & BACK-END</StackType>
            <StackRow ref={setRowRef(0)} visible={visibleRows[0]}>
              <Stack name='Next.js' icon={<NextjsIcon />} count={stackCounts['Next.js'] || 0} />
              <Stack name='React.js' icon={<ReactIcon />} count={stackCounts['React'] || 0} />
              <Stack name='ReactNative' icon={<ReactIcon />} count={stackCounts['ReactNative'] || 0} />
              <Stack name='Expo' icon={<ExpoIcon />} count={stackCounts['Expo'] || 0} />
              <Stack name='jQuery' icon={<JqueryIcon />} count={stackCounts['jQuery'] || 0} />
              <Stack name='TypeScript' icon={<TypescriptIcon />} count={stackCounts['TypeScript'] || 0} />
              <Stack name='Recoil' icon={<RecoilIcon />} count={stackCounts['Recoil'] || 0} />
              <Stack name='Zustand' icon={<ZustandIcon />} count={stackCounts['Zustand'] || 0} />
              <Stack name='Styled' name2='Components' icon={<StyledComponentsIcon />} count={stackCounts['StyledComponents'] || 0} />
              <Stack name='SCSS' icon={<ScssIcon />} count={stackCounts['SCSS'] || 0} />
              <Stack name='Node.js' icon={<NodejsIcon />} count={stackCounts['Nodejs'] || 0} />
              <Stack name='MongoDB' icon={<MongodbIcon />} count={stackCounts['MongoDB'] || 0} />
              <Stack name='MySQL' icon={<MysqlIcon />} count={stackCounts['MySQL'] || 0} />
              <Stack name='Supabase' icon={<SupabaseIcon />} count={stackCounts['Supabase'] || 0} />
              <Stack name='Firebase' icon={<FirebaseIcon />} count={stackCounts['Firebase'] || 0} />
            </StackRow>
          </StackItem>
          <StackItem>
            <StackType visible={visibleRows[1]}># DEPLOYMENT</StackType>
            <StackRow ref={setRowRef(1)} visible={visibleRows[1]}>
              <Stack name='Vercel' icon={<VercelIcon />} count={stackCounts['Vercel'] || 0} />
              <Stack name='AWS' icon={<AwsIcon />} count={stackCounts['AWS'] || 0} />
              <Stack name='GooglePlay' name2='Console' icon={<GooglePlayIcon />} count={stackCounts['GooglePlayConsole'] || 0} />
            </StackRow>
          </StackItem>
          <StackItem>
            <StackType visible={visibleRows[2]}># TOOLS</StackType>
            <StackRow ref={setRowRef(2)} visible={visibleRows[2]}>
              <Stack name='Postman' icon={<PostmanIcon />} count={stackCounts['Postman'] || 0} />
              <Stack name='Figma' icon={<FigmaIcon />} count={stackCounts['Figma'] || 0} />
              <Stack name='illustrator' icon={<IllustratorIcon />} count={stackCounts['Illustrator'] || 0} />
              <Stack name='Photoshop' icon={<PhotoshopIcon />} count={stackCounts['Photoshop'] || 0} />
            </StackRow>
          </StackItem>
        </StackList>
      </Wrapper>
      <TopGradient />
    </SectionContainer>
  )
};

export default StacksSection;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(27, 19, 30);
  z-index: 0;
  pointer-events: none;
`
const TopGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 5rem;
  bottom: 0;
  left: 0;
  background: linear-gradient(#0000, #0006);
`
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  
  font-family: var(--font-pretendard);
`
const StackList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5em;
  column-gap: 4em;
  width: calc(100% - 6rem);
  max-width: 61em;
  padding-top: 8em;
  padding-bottom: 10em;

  margin: 0 auto;
  
  font-size: 0.875rem;

  @media (max-width: 1024px) {
    width: calc(100% - 4rem);
  }
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
  @media (max-width: 470px) {
    width: calc(100% - 2rem);
    font-size: 0.6875rem;
  }
`
const StackItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:first-child) {
    margin-top: 1em;
  }
`
const StackType = styled.p<{ visible: boolean }>`
  width: 100%;
  margin-bottom: 1.125em;

  color: #5e5e6a;
  font-size: 1.35em;
  font-weight: 500;

  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: translateY(${({ visible }) => (visible ? '0px' : '10px')});
  transition: 200ms ease-out;
`
const StackRow = styled.div<{ visible: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 1.5em;

  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: translateY(${({ visible }) => (visible ? '0px' : '10px')});
  transition: opacity 1200ms 250ms cubic-bezier(0.23, 1, 0.320, 1), transform 1200ms 250ms cubic-bezier(0.23, 1, 0.320, 1);

  @media (max-width: 470px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`
const NextjsIcon = styled(NextjsSVG)`
  width: 5em;
  height: 5em;
`
const TypescriptIcon = styled(TypescriptSVG)`
  width: 4em;
  height: 4em;
`
const ReactIcon = styled(ReactSVG)`
  width: 4.375em;
  height: 4.375em;
`
const JqueryIcon = styled(JquerySVG)`
  width: 4em;
  height: 4em;
`
const NodejsIcon = styled(NodejsSVG)`
  width: 5.5em;
  height: 5.5em;
  margin-bottom: -0.625em;
`
const MysqlIcon = styled(MysqlSVG)`
  width: 5.5em;
  height: 5.5em;
`
const MongodbIcon = styled(MongodbSVG)`
  width: 4em;
  height: 4em;
`
const StyledComponentsIcon = styled(StyledComponentsSVG)`
  width: 5.5em;
  height: 5.5em;
`
const ScssIcon = styled(ScssSVG)`
  width: 4.875em;
  height: 4.875em;
`
const RecoilIcon = styled(RecoilSVG)`
  width: 3.5em;
  height: 3.5em;
`
const ZustandIcon = styled(ZustandSVG)`
  width: 4.25em;
  height: 4.25em;
`
const FigmaIcon = styled(FigmaSVG)`
  width: 3.75em;
  height: 3.75em;
`
const PostmanIcon = styled(PostmanSVG)`
  width: 4.25em;
  height: 4.25em;
`
const IllustratorIcon = styled(IllustratorSVG)`
  width: 4em;
  height: 4em;
`
const PhotoshopIcon = styled(PhotoshopSVG)`
  width: 4em;
  height: 4em;
`
const VercelIcon = styled(VercelSVG)`
  width: 5em;
  height: 5em;
`
const AwsIcon = styled(AwsSVG)`
  width: 5em;
  height: 5em;
`
const GooglePlayIcon = styled(GooglePlaySVG)`
  width: 3.8em;
  height: 3.8em;
`
const ExpoIcon = styled(ExpoSVG)`
  width: 3.8em;
  height: 3.8em;
`
const SupabaseIcon = styled(SupabaseSVG)`
  width: 3.8em;
  height: 3.8em;
`
const FirebaseIcon = styled(FirebaseSVG)`
  width: 3.8em;
  height: 3.8em;
`