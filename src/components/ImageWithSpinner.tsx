import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import styled from 'styled-components';

interface LoaderContainerProps {
  $isLoading: boolean;
}

interface ImageWithSpinnerProps extends Omit<ImageProps, 'onLoad'> {
  className?: string;
}

const ImageWithSpinner = ({
  src,
  alt,
  width,
  height,
  priority = false,
  quality,
  placeholder,
  blurDataURL,
  className,
  ...props
}: ImageWithSpinnerProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Container>
      <LoaderContainer $isLoading={isLoading}>
        <svg
          className="container"
          x="0px"
          y="0px"
          viewBox="0 0 37 37"
          height="37"
          width="37"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            className="track"
            fill="none"
            strokeWidth="5"
            pathLength="100" d="M0.37 18.5 C0.37 5.772 5.772 0.37 18.5 0.37 S36.63 5.772 36.63 18.5 S31.228 36.63 18.5 36.63 S0.37 31.228 0.37 18.5">
          </path>
          <path
            className="car"
            fill="none"
            strokeWidth="5"
            pathLength="100"
            d="M0.37 18.5 C0.37 5.772 5.772 0.37 18.5 0.37 S36.63 5.772 36.63 18.5 S31.228 36.63 18.5 36.63 S0.37 31.228 0.37 18.5">
          </path>
        </svg>
      </LoaderContainer>
      <StyledImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        className={className}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </Container>
  );
};

export default ImageWithSpinner;

const Container = styled.div`
  position: relative;
`
const LoaderContainer = styled.div<LoaderContainerProps>`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
  opacity: ${props => props.$isLoading ? 1 : 0};

  z-index: ${props => props.$isLoading ? 1000 : 0};

  path {
    stroke-width: 5.5;
  }

  .container {
    --uib-size: 2.25rem;
    --uib-color: #cc57e7;
    --uib-speed: .9s;
    --uib-bg-opacity: .2;
    height: var(--uib-size);
    width: var(--uib-size);
    transform-origin: center;
    overflow: visible;
  }

  .car {
    fill: none;
    stroke: var(--uib-color);
    stroke-dasharray: 15, 85;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: travel var(--uib-speed) linear infinite;
    will-change: stroke-dasharray, stroke-dashoffset;
    transition: stroke 0.5s ease;
  }

  .track {
    stroke: var(--uib-color);
    opacity: var(--uib-bg-opacity);
    transition: stroke 0.5s ease;
  }

  @keyframes travel {
    0% {
      stroke-dashoffset: 0;
    }

    100% {
      stroke-dashoffset: -100;
    }
  }

  @media (max-width: 768px) {
    .container {
      --uib-size: 1.75rem;
    }

    path {
      stroke-width: 5;
    }
  }
`
const StyledImage = styled(Image)`
  display: block;
`