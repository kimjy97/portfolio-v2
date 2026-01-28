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
        <Typo className={isVisibleClassName} aria-label="I'm getting ready for next level">
          I&apos;M GETTING READY FOR<br />
          <span>NEXT LEVEL.</span>
        </Typo>
        <AboutTextWrapper className={isVisibleClassName}>
          <p>안녕하세요! 웹 개발자 <b>김종연</b>입니다.</p>
          <p><span className='word'>&ldquo;왜?&rdquo;</span>라는 질문을 통해 <b>본질적인 문제</b>를 파악하고,</p>
          <p>기술적 의사결정을 통해 <b>효율적인 솔루션</b>을 제시하는 개발자입니다.</p>
          <br />
          <p>프론트엔드 중심으로 시작했지만, 더 다양한 서비스를 직접 만들어보고 싶다는 열망으로 <b>백엔드와 데이터베이스 영역</b>까지 확장했습니다. 그 과정에서 <b>10개 이상의 풀스택 서비스</b>를 처음부터 끝까지 완성하며 실질적인 개발 역량을 키웠습니다.</p>
          <br />
          <p>AI와의 긴밀한 협업을 통해 <b>생산성과 품질</b>을 동시에 높이는 연습을 지속해왔습니다. AI로 절약한 시간을 서비스의 <b>구조적 설계와 성능 최적화</b>에 재투자하고, 동시에 AI를 <b>코드 리뷰어 및 페어 프로그래밍 파트너</b>로 활용하며 개발자로서의 한계를 끊임없이 확장하고 있습니다.</p>
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
    font-weight: 400;
    font-family: var(--font-poppins) var(--font-pretendard);
    line-height: 1.7em;
    color: #fff;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

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
    
    .word {
      margin: 0.3em 0;

      color: rgb(255, 149, 149);
      font-size: 1.5em;
    }

    b {
      font-weight: 700;
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
  cursor: default;
  
  transition: 150ms;

  &:hover {
    transform: scale(1.1);
    background-color: #8585a22d;
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