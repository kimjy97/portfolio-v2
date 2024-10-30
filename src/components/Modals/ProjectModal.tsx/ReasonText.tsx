import React from 'react';
import { IProjectProps } from '@/constants/project';
import styled from 'styled-components';

interface IProps {
  info: IProjectProps | undefined;
}

const ReasonText = ({ info }: IProps): JSX.Element => {
  const parseText = (text: string): JSX.Element[] => {
    const regex = /(`[^`]+`|\*\*[^*]+\*\*)/g;
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        return <DetailStack key={index}>{part.slice(1, -1)}</DetailStack>;
      } else if (part.startsWith('**') && part.endsWith('**')) {
        return <BoldText key={index}>{part.slice(2, -2)}</BoldText>;
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  return <Container>{info?.reason ? parseText(info.reason) : null}</Container>;
};

export default ReasonText;

const Container = styled.div`
  position: relative;
  font-size: 1em;
  font-weight: 500;
  line-height: 1.75em;
  white-space: pre-wrap;
`;

const DetailStack = styled.span`
  padding: 0.125em 0.5em;
  margin: 0 0.15em;
  border-radius: 6px;
  background: #7173a6;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 500;
`;

const BoldText = styled.span`
  font-weight: 700;
`;