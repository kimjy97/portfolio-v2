import { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const THROTTLE_DELAY = 60000;

emailjs.init("Scwa9NGp1ske3WT84");

const ContactFrom = (): JSX.Element => {
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const lastSubmitTime = useRef(0);

  const throttledHandleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const now = Date.now();

    if (now - lastSubmitTime.current < THROTTLE_DELAY) {
      setFormStatus(`잠시 후에 다시 시도해주세요. (${Math.ceil((THROTTLE_DELAY - (now - lastSubmitTime.current)) / 1000)}초 후 가능)`);
      return;
    }

    setIsSubmitting(true);
    const form = e.currentTarget;

    try {
      const result = await emailjs.sendForm('service_mox54ke', 'template_n5xmf0s', form);
      if (result.text === 'OK') {
        setFormStatus('메시지가 성공적으로 전송되었습니다!');
        form.reset();
        lastSubmitTime.current = now;
      } else {
        setFormStatus('메시지 전송에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      setFormStatus('오류가 발생했습니다. 나중에 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return (
    <Container onSubmit={throttledHandleSubmit}>
      <Note>해당 메시지는 <b>poot972@gamil.com</b>으로 메시지가 전송됩니다.</Note>
      <FlexRow>
        <Input
          type="text"
          name="from_name"
          placeholder="보내는 사람"
          required
        />
        <Input
          className='fill'
          type="text"
          name="reply_to"
          placeholder="연락처 ( 이메일, 휴대폰 ... )"
          required
        />
      </FlexRow>
      <TextArea name="message" placeholder="메시지 내용" required />
      <SubmitButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? '전송 중...' : '메시지 보내기'}
      </SubmitButton>
      <FormStatus className={formStatus ? 'visible' : ''}>
        {formStatus || '메시지'}
      </FormStatus>
    </Container>
  )
};

export default ContactFrom;

const Container = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`
const Input = styled.input`
  flex: .5;
  width: auto;
  min-width: 0;
  padding: 0.75em 0.75em;

  outline: 1px solid #2a2a30;
  border: none;
  border-radius: 0.5em;
  background-color: #0c0c14;

  color: #fff;
  font-size: 1em;
  font-family: var(--font-pretendard);

  &::placeholder {
    color: #3d3d4d;
  }

  &.fill {
    flex: 1;
  }

  &:focus {
    outline: 2px solid #6565b6;
  }
`
const TextArea = styled.textarea`
  margin-bottom: 1em;
  min-height: 10em;
  min-width: 0;
  padding: 0.75em 0.75em;

  outline: 1px solid #2a2a30;
  border: none;
  border-radius: 8px;
  background-color: #0c0c14;
  resize: vertical;

  color: #fff;
  font-size: 1em;
  font-family: var(--font-pretendard);

  &::placeholder {
    color: #3d3d4d;
  }

  &:focus {
    outline: 2px solid #6565b6;
  }
`
const SubmitButton = styled.button<{ disabled: boolean }>`
  padding: 0.65em 1em;
  background-color: ${props => props.disabled ? '#2e2d37' : '#352d71'};
  color: ${props => props.disabled ? '#6f6d83' : '#fff'};
  border: 1px solid ${props => props.disabled ? '#464553' : '#504e8d'};
  border-radius: 0.5em;
  font-size: 1em;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: 150ms;

  &:hover {
    background-color: ${props => props.disabled ? '#2e2d37' : '#0b3f82'};
  }
`
const FormStatus = styled.p`
  margin-top: 1.5em;
  text-align: center;
  color: #ab5959;
  opacity: 0;
  transition: 150ms;

  &.visible {
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`
const FlexRow = styled.div`
  display: flex;
  gap: 0.75em;
  margin-bottom: 0.75em;
`
const Note = styled.div`
  margin-bottom: 1.5em;
  text-align: center;
  color: #52536d;
  font-size: 1em;

  &>b {
    font-weight: 700;
  }

  @media (max-width: 470px) {
    font-size: 0.875em;
  }
`