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
import TailwindCSSSVG from '@public/svgs/stacks/tailwindcss.svg';
import RailwaySVG from '@public/svgs/stacks/railway.svg';
import SocketIOSVG from '@public/svgs/stacks/socketio.svg';
import TanstackQuerySrc from '@public/images/stacks/tanstackquery.png';
import PostgreSQLSrc from '@public/images/stacks/postgresql.png';
import NginxSrc from '@public/images/stacks/nginx.png';
import ViteSrc from '@public/images/stacks/vite.png';
import SupabaseSVG from '@public/svgs/stacks/supabase.svg';
import NestjsSVG from '@public/svgs/stacks/nestjs.svg';
import DockerSVG from '@public/svgs/stacks/docker.svg';
import CloudflareSVG from '@public/svgs/stacks/cloudflare.svg';
import RedisSVG from '@public/svgs/stacks/redis.svg';
import OciSVG from '@public/svgs/stacks/oci.svg';
import Stack from '@components/Section/StacksSection/Stack';
import Title from '@components/Section/Title';
import { IProjectProps, projectData } from '@/constants/project';
import Image from 'next/image';
import { normalizeStackName } from '@/utils/stackMatcher';

interface IStackData {
  name: string;
  name2?: string;
  icon: React.ReactNode;
  countKey: string;
}

const StacksSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleRows, setVisibleRows] = useState<boolean[]>([]);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setRowRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    rowRefs.current[index] = el;
  }, []);

  const calculateStackCounts = useCallback(() => {
    const counts: { [key: string]: number } = {};
    projectData
      .filter((project: IProjectProps) => !project.hidden)
      .forEach((project: IProjectProps) => {
        project.stacks.forEach((stack: string) => {
          counts[stack] = (counts[stack] || 0) + 1;
          const normalized = normalizeStackName(stack);
          if (normalized && normalized !== stack) {
            counts[normalized] = (counts[normalized] || 0) + 1;
          }
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

    const currentRefs = [...rowRefs.current];
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <SectionContainer
      name='stacks'
      handleVisible={setIsVisible}
    >
      <Background />
      <Wrapper>
        <Title
          isVisible={isVisible}
          main='주요 기술 스택'
          sub='스택을 누르면 해당 스택이 사용된 프로젝트로 이동합니다.'
        />
        <StackList>
          {STACK_CATEGORIES.map((category, rowIndex) => (
            <StackItem key={category.title}>
              <StackType $visible={!!visibleRows[rowIndex]}>{category.title}</StackType>
              <StackRow ref={setRowRef(rowIndex)}>
                {category.stacks.map((stack, stackIndex) => (
                  <Stack
                    key={`${stack.name}-${stack.name2 ?? ''}`}
                    name={stack.name}
                    name2={stack.name2}
                    icon={stack.icon}
                    count={stackCounts[stack.countKey] || stackCounts[normalizeStackName(stack.countKey)] || 0}
                    isVisible={!!visibleRows[rowIndex]}
                    delay={stackIndex * 45}
                  />
                ))}
              </StackRow>
            </StackItem>
          ))}
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
  max-width: 72em;
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
const StackType = styled.p<{ $visible: boolean }>`
  width: 100%;
  margin-bottom: 1.125em;

  color: #5e5e6a;
  font-size: 1.35em;
  font-weight: 500;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0px' : '10px')});
  transition: 200ms ease-out;
`
const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  width: 100%;
  margin-bottom: 1.5em;

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
const NestjsIcon = styled(NestjsSVG)`
  width: 4.25em;
  height: 4.25em;
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
const DockerIcon = styled(DockerSVG)`
  width: 5em;
  height: 5em;
`
const CloudflareIcon = styled(CloudflareSVG)`
  width: 5em;
  height: 5em;
`
const RedisIcon = styled(RedisSVG)`
  width: 4.25em;
  height: 4.25em;
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
const RailwayIcon = styled(RailwaySVG)`
  width: 4.25em;
  height: 4.25em;
`
const AwsIcon = styled(AwsSVG)`
  width: 5em;
  height: 5em;
`
const OciIcon = styled(OciSVG)`
  width: 4.25em;
  height: 4.25em;
`
const GooglePlayIcon = styled(GooglePlaySVG)`
  width: 3.8em;
  height: 3.8em;
`
const ExpoIcon = styled(ExpoSVG)`
  width: 3.8em;
  height: 3.8em;
`
const SocketIOIcon = styled(SocketIOSVG)`
  width: 4em;
  height: 4em;
`
const ViteIcon = styled(Image)`
  width: 3.75em;
  height: 3.75em;
`
const SupabaseIcon = styled(SupabaseSVG)`
  width: 3.5em;
  height: 3.5em;
`
const TailwindCSSIcon = styled(TailwindCSSSVG)`
  width: 3.8em;
  height: 3.8em;
`
const TanstackQueryIcon = styled(Image)`
  width: 4.25em;
  height: 4.25em;
`
const PostgreSQLIcon = styled(Image)`
  width: 4.25em;
  height: 4.25em;
`
const NginxIcon = styled(Image)`
  width: 4.25em;
  height: 4.25em;
`

const FRONTEND_STACKS: IStackData[] = [
  { name: 'Next.js', icon: <NextjsIcon />, countKey: 'Next.js' },
  { name: 'React.js', icon: <ReactIcon />, countKey: 'React' },
  { name: 'Vite', icon: <ViteIcon src={ViteSrc} alt='Vite' />, countKey: 'Vite' },
  { name: 'ReactNative', icon: <ReactIcon />, countKey: 'ReactNative' },
  { name: 'Expo', icon: <ExpoIcon />, countKey: 'Expo' },
  { name: 'jQuery', icon: <JqueryIcon />, countKey: 'jQuery' },
  { name: 'TypeScript', icon: <TypescriptIcon />, countKey: 'TypeScript' },
  { name: 'Recoil', icon: <RecoilIcon />, countKey: 'Recoil' },
  { name: 'Zustand', icon: <ZustandIcon />, countKey: 'Zustand' },
  { name: 'TanstackQuery', icon: <TanstackQueryIcon src={TanstackQuerySrc} alt='TanstackQuery' />, countKey: 'TanstackQuery' },
  { name: 'Styled', name2: 'Components', icon: <StyledComponentsIcon />, countKey: 'StyledComponents' },
  { name: 'TailwindCSS', icon: <TailwindCSSIcon />, countKey: 'TailwindCSS' },
  { name: 'SCSS', icon: <ScssIcon />, countKey: 'SCSS' },
  { name: 'Socket.IO', icon: <SocketIOIcon />, countKey: 'Socket.IO' },
];

const BACKEND_STACKS: IStackData[] = [
  { name: 'Nest.js', icon: <NestjsIcon />, countKey: 'Nestjs' },
  { name: 'Node.js', icon: <NodejsIcon />, countKey: 'Nodejs' },
  { name: 'Supabase', icon: <SupabaseIcon />, countKey: 'Supabase' },
  { name: 'MongoDB', icon: <MongodbIcon />, countKey: 'MongoDB' },
  { name: 'MySQL', icon: <MysqlIcon />, countKey: 'MySQL' },
  { name: 'PostgreSQL', icon: <PostgreSQLIcon src={PostgreSQLSrc} alt='PostgreSQL' />, countKey: 'PostgreSQL' },
  { name: 'Nginx', icon: <NginxIcon src={NginxSrc} alt='Nginx' />, countKey: 'Nginx' },
  { name: 'Redis', icon: <RedisIcon />, countKey: 'Redis' },
];

const DEPLOYMENT_STACKS: IStackData[] = [
  { name: 'Docker', icon: <DockerIcon />, countKey: 'Docker' },
  { name: 'Cloudflare', icon: <CloudflareIcon />, countKey: 'Cloudflare' },
  { name: 'Vercel', icon: <VercelIcon />, countKey: 'Vercel' },
  { name: 'Railway', icon: <RailwayIcon />, countKey: 'Railway' },
  { name: 'AWS', icon: <AwsIcon />, countKey: 'AWS' },
  { name: 'Oracle Cloud', icon: <OciIcon />, countKey: 'Oracle Cloud' },
  { name: 'GooglePlay', name2: 'Console', icon: <GooglePlayIcon />, countKey: 'GooglePlayConsole' },
];

const TOOL_STACKS: IStackData[] = [
  { name: 'Postman', icon: <PostmanIcon />, countKey: 'Postman' },
  { name: 'Figma', icon: <FigmaIcon />, countKey: 'Figma' },
  { name: 'illustrator', icon: <IllustratorIcon />, countKey: 'Illustrator' },
  { name: 'Photoshop', icon: <PhotoshopIcon />, countKey: 'Photoshop' },
];

const STACK_CATEGORIES = [
  { title: '# FRONT-END', stacks: FRONTEND_STACKS },
  { title: '# BACK-END & DATABASE', stacks: BACKEND_STACKS },
  { title: '# DEPLOYMENT', stacks: DEPLOYMENT_STACKS },
  { title: '# TOOLS', stacks: TOOL_STACKS },
];
