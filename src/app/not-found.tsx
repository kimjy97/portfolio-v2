'use client'

import styled from "styled-components";

export default function NotFound() {
  return (
    <Container>
      <Wrapper>
        <p>404 : NOT FOUND</p>
        <p>해당 페이지의 주소가 잘못되었습니다.</p>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;

  background-color: #000;

  z-index: 10010;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  font-size: 1rem;

  p:nth-child(1) {
    color: #ff4545;
    font-size: 2.75em;
    font-weight: 900;
  }
  p:nth-child(2) {
    color: #b4b3bc;
    font-size: 1.25em;
    font-weight: 400;
  }

  @media (max-width: 470px) {
    gap: 0.45rem;
    font-size: 0.8rem;
  }
`



