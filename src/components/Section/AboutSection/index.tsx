import React, { useState } from 'react';
import SectionContainer from '@components/Section/SectionContainer';
import styled, { keyframes } from 'styled-components';

const AboutSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const isVisibleClassName = isVisible ? 'visible' : '';

  return (
    <SectionContainer
      name='about'
      handleVisible={setIsVisible}
      full
    >
      <Background />
      <TopGradient />
      <Wrapper>
        <BackImg />
        <Typo className={isVisibleClassName} aria-label="I'm getting ready for next level">
          I&apos;M GETTING READY FOR<br />
          <span>NEXT LEVEL.</span>
        </Typo>
        <AboutTextWrapper className={isVisibleClassName}>
          <p>안녕하세요! 웹 개발자 <b>김종연</b>입니다.</p>
          <p>저는 <b>끝없이 성장</b>하며 <span className='word'>&ldquo;지치지 않는 열정&rdquo;</span>을 가진 개발자입니다.</p>
          <p>맡은 일에 최선을 다하는 책임감 있는 태도로 <b>완벽한 결과물</b>을 만들기 위해 노력합니다.</p>
          <br />
          <p><b>10개 이상의 프로젝트를</b> 단순 토이 프로젝트가 아닌 실제 <b>서비스 수준</b>으로 기획하고, <b>풀스택</b>으로 개발하며 실질적인 개발 역량을 키웠습니다.</p>
          <br />
          <p>최근에는 <b>AI와의 협업</b>을 통해 <b>개발 속도와 코드 품질을 동시에 높이는 것</b>을 지속적으로 연습 하고 있으며 개발자로서의 한계를 끊임없이 확장해 나가고 있습니다.</p>
          <br />
          <p><b>초등학생때 부터</b> 해온 개발이 지금은 <b>가장 큰 즐거움</b>이 되었고, 개발에 <b>지치지 않는 열정</b>을 가지게 되었습니다.</p>
          <p>앞으로도 <span className='word'>&ldquo;끝없이 발전하는 개발자&rdquo;</span>가 되는것이 <b>목표</b>입니다.</p>
          <TagList>
            <Tag>#열정적인</Tag>
            <Tag>#끈기있는</Tag>
            <Tag>#섬세한</Tag>
            <Tag>#완벽주의자</Tag>
          </TagList>
        </AboutTextWrapper>
      </Wrapper>
    </SectionContainer >
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
    letter-spacing: 0.015em;
    color: #fff;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    word-break: keep-all;

    &:first-child {
      font-size: 1.4em;
      font-weight: 400;
      
      padding-bottom: 1.25em;
      margin-bottom: 1.25em;
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
      font-weight: 500;
      line-height: 1.5em;
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
    top: 30%;

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