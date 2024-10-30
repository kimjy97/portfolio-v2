import styled from 'styled-components';

interface IProps {
  isVisible: boolean;
  main: string;
  sub: string;
  bold?: boolean;
};

const Title = ({ isVisible, main, sub, bold }: IProps): JSX.Element => {
  const isVisibleClassName = isVisible ? 'visible' : '';
  const isBold = bold ? 'bold' : '';

  return (
    <Container className={isVisibleClassName}>
      <MainTitle className={isBold}>
        <h2>{main}</h2>
      </MainTitle>
      <SubTitle>{sub}</SubTitle>
    </Container>
  )
};

export default Title;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-top: 5.875rem;

  transform: scale(2);
  opacity: 0;

  font-size: 1rem;

  transition: 500ms cubic-bezier(0.23, 1, 0.320, 1);

  &.visible {
    transform: scale(1);
    opacity: 1;

    &>p:nth-child(2) {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    margin-top: 4rem;
    font-size: 0.75rem;
  }
  @media (max-width: 470px) {
    gap: 1rem;
    font-size: 0.75rem;
  }
`
const MainTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  h2 {
    color: #cc57e7;
    font-size: 3em;
  }

  &.bold {
    h2 {
      font-weight: 900;
    }
  }
`
const SubTitle = styled.p`
  color: #ffffff;
  font-size: 1.125em;
  font-weight: 400;

  opacity: 0;

  transition: opacity 500ms 300ms;

  @media (max-width: 768px) {
    font-size: 1.25em;
  }
  @media (max-width: 470px) {
    font-size: 1.125em;
  }
`