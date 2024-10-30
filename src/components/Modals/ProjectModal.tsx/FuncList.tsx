import { IProjectProps } from '@/constants/project';
import styled from 'styled-components';

interface IProps {
  info: IProjectProps | undefined;
};

const FuncList = ({ info }: IProps): JSX.Element | null => {
  return info?.func ? (
    <Container>
      {info.func.map((i: string, idx: number) =>
        <FuncItem key={idx}>{i}</FuncItem>
      )}
    </Container>
  ) : null
};

export default FuncList;

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`
const FuncItem = styled.li`
  position: relative;
  padding-left: 1em;

  font-size: 1em;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0.4375em;
    width: 0.3125rem;
    height: 0.3125rem;

    border-radius: 100%;
    background-color: #aeaecb;
  }
`

