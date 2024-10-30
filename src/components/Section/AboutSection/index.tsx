import React, { useState } from 'react';
import SectionContainer from '@components/Section/SectionContainer';
import styled, { keyframes } from 'styled-components';
import { useScroll } from '@hooks/useScroll';

const AboutSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const { handleScroll, opacity } = useScroll();
  const isVisibleClassName = isVisible ? 'visible' : '';

  return (
    <SectionContainer
      name='about'
      handleVisible={setIsVisible}
      onScroll={handleScroll}
      full
    >
      <Background />
      <TopGradient />
      <Wrapper style={{ opacity }}>
        <BackImg />
        <Typo className={isVisibleClassName}>
          I&apos;M GETTING READY FOR<br />
          <span>NEW START.</span>
        </Typo>
        <AboutTextWrapper className={isVisibleClassName}>
          <p>안녕하세요! 프론트엔드 개발자 <b>김종연</b>입니다.</p>
          <p>이 단어는 저의 성향을 가장 잘 표현한다고 생각합니다.</p>
          <p className='word'>&quot; 몰두하다 : [동사] 어떤 일에 온 정신을 다 기울여 열중하다. &quot;</p>
          <p>저는 어떤 일이든 온 마음을 다해 몰두하며, 목표를 달성하기 위해 최선을 다하는 사람입니다.</p>
          <p>단 하나의 결함도 용납하지 않는 완벽함을 추구하며, 목적을 달성하기 위해 밤을 새우는 것도 마다하지 않습니다. 항상 사용자의 입장에서 고민하며, 수십 번씩 직접 테스트를 통해 최상의 결과를 만들어내고자 합니다.</p>
          <br></br>
          <p>어린 시절부터 꿈꿔온 개발자의 길을 걷기 위해, 이제는 실력으로 증명할 차례입니다. 신입으로서 배움에 대한 열정을 품고, 최선을 다해 경력을 쌓아나갈 준비가 되었습니다.</p>
          <TagList>
            <Tag>#열정적인</Tag>
            <Tag>#끈기있는</Tag>
            <Tag>#섬세한</Tag>
            <Tag>#완벽주의자</Tag>
          </TagList>
        </AboutTextWrapper>
      </Wrapper>
    </SectionContainer>
  )
};

export default AboutSection;

const typoAni = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`
const Background = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100%;

  background-color: rgb(27, 19, 30);

  z-index: 0;
  pointer-events: none;
`
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 95rem;
  margin: 0 auto;
`
const BackImg = styled.div`
  position: absolute;
  left: 3rem;
  width: 32.5rem;
  height: 100%;

  background: url('/images/aboutBackground.jpg') 18% 0% no-repeat;
  background-size: 69rem auto;
  background-attachment: fixed;
  mask-image: linear-gradient( #fff0 0%, #fff 10%, #fff 90%, #fff0 100%);
  filter: brightness(80%);

  @media (max-width: 1024px) {
    width: 100vw;
    min-width: 48rem;
    height: 100%;
    left: auto;

    background: url('/images/aboutBackground.jpg') 0% 0% no-repeat;
    background-size: 78rem auto;
    background-attachment: fixed;
    filter: brightness(60%);
  }
  @media (max-width: 768px) {
    background-size: 60rem auto;
    min-width:  initial;
  }
`
const Typo = styled.h2`
  position: absolute;
  top: 15%;
  left: 14vw;
  transform: translateX(-1.25rem);

  font-size: 3.5rem;
  font-weight: 500;
  font-family: var(--font-poppins);
  line-height: 3.9rem;
  
  user-select: none;
  animation: ${typoAni} 8s linear infinite alternate;
  background: linear-gradient(90deg, rgb(208, 209, 142) 0%, rgb(255, 255, 255) 25%, rgb(144, 164, 255) 50%, rgb(255, 255, 255) 75%, rgb(252, 255, 49) 100%);
  background-size: 800% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0;

  &.visible {
    transition: transform 500ms, opacity 500ms;
    transform: translateX(0);
    opacity: 1;
  }

  &>span {
    font-size: 4.4rem;
    font-weight: 900;
  }

  @media (max-width: 1024px) {
    top: 15%;
    left: auto;
    width: 100%;
    padding: 0 2.5rem;

    font-size: 5.5vw;
    line-height: 7.1vw;

    &>span {
      font-size: 7.1vw;
    }
  }
  @media (max-width: 768px) {
    top: 16%;
    padding: 0 2rem;
    font-size: 6.9vw;
    line-height: 9vw;

    &>span {
      font-size: 9.6vw;
    }
  }
  @media (max-width: 470px) {
    top: 34vw;
    padding: 0 1rem;

    font-size: 7.4vw;
    line-height: 10vw;

    &>span {
      font-size: 10.5vw;
    }
  }
`
const AboutTextWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 49em;
  right: 3em;
  top: 33%;
  padding: 2.2em 2.7em;
  transform: translateX(1.25rem);
  
  border-radius: 1.5em;
  backdrop-filter: blur(40px);
  opacity: 0;
  overflow: hidden;

  &.visible {
    transition: transform 500ms 250ms, opacity 500ms 250ms;
    transform: translateX(0);
    opacity: 1;
  }

  &>p {
    font-size: 1em;
    font-weight: 500;
    font-family: var(--font-poppins) var(--font-pretendard);
    line-height: 1.7em;
    color: #fff;

    &:first-child {
      font-size: 1.4em;
      font-weight: 600;
      
      padding-bottom: 1.25em;
      margin-bottom: 1.75em;
      border-bottom: 2px dashed #b1b1bd22;
      
      &>b {
        color: #ccccff;
        font-weight: 700;
        font-size: 1.35em;
      }
    }
    
    &.word {
      margin: 0.3em 0.375em;

      color: rgb(255, 149, 149);;
      font-size: 1em;
    }
  }

  @media (max-width: 1024px) {
    top: 37.5vw;
    right: auto;
    width: 100%;
    padding: 2rem 2.5rem;
    
    background-color: transparent;
    backdrop-filter: initial;

    &>p:first-child {
      border: none;
      margin-bottom: 0;
      padding-bottom: 1rem;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem 1.875rem;
    top: 38%;

    font-size: 0.9375rem;

    background-color: transparent;
    backdrop-filter: initial;
  }
  @media (max-width: 470px) {
    top: 62vw;
    padding: 1.5rem 1rem;
    font-size: 0.875rem;
  }
`
const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.875em;
  padding-top: 2.25em;
`
const Tag = styled.div`
  padding: 0.5em 0.875em;

  border-radius: 0.5em;
  background-color: #8585a21d;

  color: #fff;
  font-size: 0.875em;
  font-weight: 500;
  white-space: nowrap;
  
  transition: 150ms;

  &:hover {
    transform: scale(1.1);
  }
`
const TopGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 5rem;
  top: 0;
  left: 0;
  background: linear-gradient(#0003, #0000);
`