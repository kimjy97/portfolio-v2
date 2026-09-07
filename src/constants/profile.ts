export type JobRole = 'web' | 'frontend';

export const CURRENT_ROLE: JobRole =
  process.env.NEXT_PUBLIC_ROLE === 'frontend' ? 'frontend' : 'web';

export interface ProfileConfig {
  role: JobRole;
  intro: {
    mainTypo: string;
    subTypo: string;
  };
  about: {
    greeting: string;
    roleName: string;
    projectExperience?: string;
  };
  meta: {
    title: string;
    siteName: string;
    description: string;
  };
}

export const PROFILE_CONFIGS: Record<JobRole, ProfileConfig> = {
  web: {
    role: 'web',
    intro: {
      mainTypo: 'WEB DEVELOPER.',
      subTypo: 'PORTFOLIO',
    },
    about: {
      greeting: '안녕하세요! 웹 개발자',
      roleName: '웹 개발자',
    },
    meta: {
      title: '웹 개발자 포트폴리오 - 김종연',
      siteName: '웹 개발자 김종연 포트폴리오',
      description: '안녕하세요. 웹 개발자 김종연 입니다. 해당 웹사이트는 저의 기술과 프로젝트를 소개하기 위한 포트폴리오 웹사이트입니다.',
    },
  },
  frontend: {
    role: 'frontend',
    intro: {
      mainTypo: 'FRONTEND DEV.',
      subTypo: 'PORTFOLIO',
    },
    about: {
      greeting: '안녕하세요! 프론트엔드 개발자',
      roleName: '프론트엔드 개발자',
    },
    meta: {
      title: '프론트엔드 개발자 포트폴리오 - 김종연',
      siteName: '프론트엔드 개발자 김종연 포트폴리오',
      description: '안녕하세요. 프론트엔드 개발자 김종연 입니다. 해당 웹사이트는 저의 기술과 프로젝트를 소개하기 위한 포트폴리오 웹사이트입니다.',
    },
  },
};

export const PROFILE = PROFILE_CONFIGS[CURRENT_ROLE];
