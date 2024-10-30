import React, { useState } from 'react';
import styled from 'styled-components';
import SectionContainer from '@components/Section/SectionContainer';
import { useScroll } from '@hooks/useScroll';
import Title from '@components/Section/Title';
import ContactForm from '@/components/Section/ContactSection/ContactForm';
import ContactLinkList from '@/components/Section/ContactSection/ContactLinkList';

const ContactSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const { handleScroll, opacity } = useScroll();
  const className = isVisible ? 'visible' : '';

  return (
    <SectionContainer
      name='contact'
      handleVisible={setIsVisible}
      onScroll={handleScroll}
    >
      <Background />
      <Wrapper style={{ opacity }}>
        <Title
          isVisible={isVisible}
          main='CONTACT'
          sub=''
          bold
        />
        <ContentsWrapper className={className}>
          <FormText>
            <p>저의 포트폴리오를 봐주셔서 감사합니다!</p>
            <p>관심있게 보셨다면 아래를 통해 저에게 연락주세요 🙇‍♂️</p>
          </FormText>
          <ContactLinkList />
          <ContactForm />
        </ContentsWrapper>
        <CopyRights>
          Copyright ⓒ 2024. JongYeon All rights reserved.
        </CopyRights>
      </Wrapper>
      <BottomGradient />
      <TopGradient />
    </SectionContainer>
  )
};

export default ContactSection;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #18161e;
  background-image: radial-gradient(#ffffff14 1.6px, transparent 1.6px);
  background-size: 40px 40px;
  background-attachment: fixed;
  z-index: 0;
  pointer-events: none;
`
const BottomGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 9rem;
  bottom: 0;
  left: 0;
  background: linear-gradient(#0000, #0006);
`
const TopGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 6rem;
  top: 0;
  left: 0;
  background: linear-gradient(#0004, #0000);
`
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 1rem;
  padding-top: 0;
  padding-bottom: 8rem;

  font-family: var(--font-pretendard);
`
const CopyRights = styled.div`
  position: absolute;
  bottom :2rem;
  margin-top: auto;
  margin-bottom: 0.375rem;

  color: #868098;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`
const FormText = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2.5rem;
  padding-bottom: 3rem;
  gap: 0.875rem;

  text-align: center;
  font-size: 1rem;

  &>p {
    &:first-child {
      color: #f4f270;
      font-size: 1.875em;
      font-weight: 700;
    }
    &:last-child {
      color: #ffffff;
      font-size: 1.125em;
      font-weight: 400;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }

  @media (max-width: 470px) {
    gap: 0.5rem;
    font-size: 0.65rem;

    &>p:last-child {
      color: #ffffff;
      font-size: 1.3em;
      font-weight: 400;
    }
  }
`
const ContentsWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(10px);

  opacity: 0;
  transition: 1200ms 400ms cubic-bezier(0.23, 1, 0.320, 1);

  &.visible {
    transform: translateY(0px);
    opacity: 1;
  }
`

