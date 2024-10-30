import styled from 'styled-components';
import GithubSVG from '@public/svgs/github.svg';
import LinkSVG from '@public/svgs/link.svg';
import InstagramImg from '@public/images/instagram.png';
import Image from 'next/image';

const ContactLinkList = (): JSX.Element => {
  return (
    <Container>
      <ContactLink href='https://github.com/kimjy97' target='_blank'>
        <GithubIcon />
        <LinkIcon />
        <ContactIconText>GitHub</ContactIconText>
      </ContactLink>
      <ContactLink href='https://www.instagram.com/jjon9_yy' target='_blank'>
        <InstagramIcon>
          <Image src={InstagramImg} alt='instagram' />
        </InstagramIcon>
        <LinkIcon />
        <ContactIconText>Instagram</ContactIconText>
      </ContactLink>
      <ContactLink href='https://kimjy.vercel.app' target='_blank'>
        <BlogText><p>BLOG</p></BlogText>
        <LinkIcon />
        <ContactIconText>개발 블로그</ContactIconText>
      </ContactLink>
    </Container>
  )
};

export default ContactLinkList;

const Container = styled.div`
  display: flex;
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
`
const ContactLink = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 8.125em;
  height: 8.375em;

  border: 1px solid #232327;
  border-radius: 0.75em;
  background-color: #0d0e1b;

  transition: 100ms;
  cursor: pointer;

  img {
    width: 3.25em;
    height: auto;
  }

  &:hover {
    border: 1px solid #333337;
    transform: scale(1.1);
  }
`
const GithubIcon = styled(GithubSVG)`
  width: 3.25em;
  height: 6em;
`
const InstagramIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.25em;
  height: 6em;
`
const LinkIcon = styled(LinkSVG)`
  position: absolute;
  top: 0.625em;
  right: 0.625em;
  width: 0.75em;
  height: 0.75em;

  stroke: #2c2c33;
  transition: 100ms;

  ${ContactLink}:hover &{
    stroke: #585863;
  }
`
const BlogText = styled.div`
  height: 6em;
  line-height: 6em;

  p {
    color: #2ea7c3;
    font-size: 1.6em;
    font-weight: 700;
  }
`
const ContactIconText = styled.div`
  color: #fff;
  font-size: 0.875em;
  font-weight: 400;
`
