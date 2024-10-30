import StyledText from '@/components/Modals/ProjectModal.tsx/StyledText';
import { IProjectProps } from '@/constants/project';
import styled from 'styled-components';

interface IProps {
  info: IProjectProps | undefined;
};

const Issue = ({ info }: IProps): JSX.Element => {
  return (
    <Container>
      {info?.issues && info?.issues.map((i: { issue: string, solving: string }, idx: number) =>
        <Wrapper key={idx}>
          <DetailInfoText>
            <DetailBoldRed>문제</DetailBoldRed>
            <StyledText>{i.issue}</StyledText>
          </DetailInfoText>
          <DetailInfoText>
            <DetailBoldBlue>해결</DetailBoldBlue>
            <StyledText>{i.solving}</StyledText>
          </DetailInfoText>
        </Wrapper>
      )
      }
    </Container>
  )
};

export default Issue;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-bottom: 4px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`
const DetailInfoText = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  
  font-size: 1em;
  font-weight: 500;
  line-height: 1.75em;
  white-space: pre-wrap;
`
const DetailBoldRed = styled.b`
  margin-right: 0.625em;

  color: #ad3838;
  font-weight: 500;
  white-space: nowrap;
`
const DetailBoldBlue = styled.b`
  position: relative;
  margin-left: 1.875em;
  margin-right: 0.625em;
  
  color: #5151d0;
  font-weight: 500;
  white-space: nowrap;

  &::before {
    content: '';
    position: absolute;
    top: 0.375em;
    left: -1.25em;
    width: 0.5em;
    height: 0.5em;

    border-width: 0 0 1px 1px;
    border-color: #9f9faf;
    border-style: solid;
  }
`