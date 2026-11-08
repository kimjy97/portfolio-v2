import styled from 'styled-components';
import GithubSVG from '@public/svgs/github.svg';
import LinkSVG from '@public/svgs/link.svg';
import InstagramImg from '@public/images/instagram.png';
import Image from 'next/image';

interface IProps {
  isVisible?: boolean;
}

const ContactLinkList = ({ isVisible = false }: IProps): JSX.Element => {
  return (
    <Container>
      <ContactLink
        href='https://github.com/kimjy97'
        target='_blank'
        $visible={isVisible}
        $delay={200}
      >
        <GithubIcon />
        <LinkIcon />
        <ContactIconText>GitHub</ContactIconText>
      </ContactLink>
      <ContactLink
        href='https://www.instagram.com/jjon9_yy'
        target='_blank'
        $visible={isVisible}
        $delay={300}
      >
        <InstagramIcon>
          <Image src={InstagramImg} alt='instagram' />
        </InstagramIcon>
        <LinkIcon />
        <ContactIconText>Instagram</ContactIconText>
      </ContactLink>
      <ContactLink
        href='https://kimjy.vercel.app'
        target='_blank'
        $visible={isVisible}
        $delay={400}
      >
        <BlogText><p>BLOG</p></BlogText>
        <LinkIcon />
        <ContactIconText>개발 블로그</ContactIconText>
      </ContactLink>
    </Container>
  );
};

export default ContactLinkList;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4.5rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
    font-size: 0.875rem;
  }

  @media (max-width: 470px) {
    gap: 0.75rem;
    font-size: 0.75rem;
  }
`;

const ContactIconText = styled.div`
  color: #fff;
  font-size: 0.875em;
  font-weight: 400;
  transition: color 0.2s ease;
`;

const GithubIcon = styled(GithubSVG)`
  width: 3.25em;
  height: 6em;
`;

const InstagramIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.25em;
  height: 6em;
`;

const LinkIcon = styled(LinkSVG)`
  position: absolute;
  top: 0.625em;
  right: 0.625em;
  width: 0.75em;
  height: 0.75em;

  stroke: #2c2c33;
  transition: transform 0.2s ease, stroke 0.2s ease;
`;

const BlogText = styled.div`
  height: 6em;
  line-height: 6em;

  p {
    color: #2ea7c3;
    font-size: 1.6em;
    font-weight: 700;
  }
`;

const ContactLink = styled.a<{ $visible: boolean; $delay: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 8.125em;
  height: 8.375em;

  border: 1px solid #232327;
  border-radius: 0.75em;
  background-color: #0d0e1b;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0px' : '20px')});
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${({ $delay }) => $delay}ms,
    opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1) ${({ $delay }) => $delay}ms,
    border-color 0.2s ease,
    background-color 0.2s ease;
  cursor: pointer;

  img {
    width: 3.25em;
    height: auto;
  }

  &:hover {
    border: 1px solid #333337;
    background-color: #161721;

    ${LinkIcon} {
      stroke: #585863;
      transform: translate(2px, -2px);
    }
  }
`;
