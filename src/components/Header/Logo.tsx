import styled, { keyframes } from 'styled-components';
import Logo1SVG from '@public/svgs/logo1.svg'
import Logo2SVG from '@public/svgs/logo2.svg'

const Logo = (): JSX.Element => {
  return (
    <Container>
      <AnimatedLogo1 />
      <AnimatedLogo2 />
    </Container>
  )
};

export default Logo;

const fadeInOutWithPause = keyframes`
  0%, 100% {
    opacity: 0;
    transform: translateY(-50%) translateX(-8px);
  }
  10%, 40% {
    opacity: 1;
    transform: translateY(-50%) translateX(0px);
  }
  50%, 90% {
    opacity: 0;
    transform: translateY(-50%) translateX(8px);
  }
`
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 7.5rem;
  height: 100%;
  position: relative;
`
const AnimatedLogo1 = styled(Logo1SVG)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(-5px);
  animation: ${fadeInOutWithPause} 12s infinite;
  width: 3.25rem;
  height: 3.25rem;
  animation-delay: 0s;

  @media (max-width: 768px) {
    display: none;
  }
`
const AnimatedLogo2 = styled(Logo2SVG)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(-5px);
  animation: ${fadeInOutWithPause} 12s infinite;
  height: 1.375rem;
  animation-delay: 6s;
  opacity: 0;
  
  @media (max-width: 768px) {
    height: 1.125rem;
    animation: none;
    opacity: 1;
  }
`