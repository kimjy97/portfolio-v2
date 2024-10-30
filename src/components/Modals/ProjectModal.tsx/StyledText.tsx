'use client'

import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IProps {
  children: ReactNode;
}

const StyledText = ({ children }: IProps): JSX.Element => {
  const parseText = (text: string): JSX.Element[] => {
    const regex = /(\*\*[^*]+\*\*)/g;
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <BoldText key={index}>{part.slice(2, -2)}</BoldText>;
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  return <Container>{parseText(String(children))}</Container>;
};

export default StyledText;

const Container = styled.div`
`;

const BoldText = styled.span`
  font-weight: bold;
`;