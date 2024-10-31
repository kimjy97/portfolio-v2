import BlogThumbImg from '@public/images/projects/blog_2.png';
import BlogImg1 from '@public/images/projects/blog_1.png';
import BlogImg2 from '@public/images/projects/blog_3.png';
import BlogImg3 from '@public/images/projects/blog_4.png';
import PortfolioThumbImg from '@public/images/thumbnails/portfolio.png';
import PortfolioImg1 from '@public/images/projects/portfolio_1.png';
import PortfolioImg2 from '@public/images/projects/portfolio_2.png';
import PortfolioImg3 from '@public/images/projects/portfolio_3.png';
import AichatThumbImg from '@public/images/projects/chat_1.png';
import AichatImg1 from '@public/images/projects/chat_2.png';
import AichatImg2 from '@public/images/projects/chat_3.png';
import AichatImg3 from '@public/images/projects/chat_4.png';
import MongoDBThumbImg from '@public/images/thumbnails/mongodbmanager.png';
import MongoDBImg1 from '@public/images/projects/db_2.png';
import MongoDBImg2 from '@public/images/projects/db_3.png';
import MongoDBImg3 from '@public/images/projects/db_1.png';
import WhatIsPillThumbImg from '@public/images/thumbnails/whatispill.png';
import WhatIsPillImg1 from '@public/images/projects/wip_1.png';
import WhatIsPillImg2 from '@public/images/projects/wip_2.png';
import WhatIsPillImg3 from '@public/images/projects/wip_3.png';
import { StaticImageData } from 'next/image';

export interface IProjectProps {
  thumb: StaticImageData[];
  term: string;
  termDiff?: string;
  name: string;
  url: string;
  github?: string;
  team?: string;
  contribution: { dev: string, design: string, planning: string };
  stacks: string[];
  issues?: { issue: string, solving: string }[];
  reason: string;
  learned: string;
  intro: string,
  func?: string[],
}

export const projectData: IProjectProps[] = [{
  thumb: [PortfolioThumbImg, PortfolioImg1, PortfolioImg2, PortfolioImg3],
  term: '2024.09 ~ 2024.10',
  termDiff: '2개월',
  name: '웹 포트폴리오',
  url: 'https://kimjy-portfolio.vercel.app/',
  github: 'https://github.com/kimjy97/portfolio-v2',
  contribution: { dev: '100%', design: '100%', planning: '100%' },
  stacks: ['Next.js', 'TypeScript', 'Recoil', 'StyledComponents', 'MongoDB', 'Vercel'],
  issues: [{
    issue: '섹션이 화면에 보여지면 애니메이션 효과를 주기 위해 **IntersectionObserver**를 사용했으나, 긴 섹션에서는 제대로 동작하지 않는 문제가 있었음.',
    solving: '기존에 **IntersectionObserver**를 사용해 화면에 노출되는 섹션을 감지하려 했지만, 섹션이 길어질 경우 감지 범위가 불안정하게 작동하는 문제가 발생함. 이를 해결하기 위해 **getBoundingClientRect**와 스크롤 이벤트를 사용해 화면 노출 여부를 직접 계산하고, 특정 지점에서 섹션이 노출되는지 체크하는 방식으로 변경함.'
  },
  ],
  reason: "`Next.js`는 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)으로 SEO와 성능을 최적화할 수 있어 선택했고, **API Routes**로 백엔드 없이도 API 처리가 가능했음. `TypeScript`는 타입 오류 방지와 코드 유지보수를 위해 도입했으며, `Recoil`은 불필요한 리렌더링을 줄여 성능 최적화에 적합해 사용함. **배포 환경**으로는 Next.js와 호환성이 뛰어나고 빠른 배포가 가능한 `Vercel`을 선택함. `MongoDB`는 유연한 스키마 설계와 빠른 데이터 처리 속도로 선택했으며, 간단한 CRUD 작업에 적합해 사용함.",
  learned: ' 웹사이트 퍼포먼스 최적화와 사용자 경험을 고려한 인터랙티브 요소 구현에 대해 학습했으며, 다양한 디바이스에 맞는 반응형 디자인의 중요성을 경험했습니다.',
  intro: '저의 개발 기술 스택과 진행한 프로젝트들을 보여주기 위해 제작한 웹 포트폴리오입니다.\n사용자 경험을 고려해 인터랙티브한 요소를 추가했고, 추가적인 라이브러리 없이 다양한 효과들을 직접 구현했습니다. 또한, 반응형 디자인을 적용하여 어디서든 쉽게 포트폴리오를 볼 수 있도록 개발했습니다.',
}, {
  thumb: [AichatThumbImg, AichatImg1, AichatImg2, AichatImg3],
  term: '2024.04 ~ 2024.08',
  termDiff: '5개월',
  name: 'AI 챗봇 서비스',
  url: '',
  github: 'https://github.com/kimjy97/devblog-v2',
  contribution: { dev: '100%', design: '100%', planning: '100%' },
  stacks: ['Next.js', 'TypeScript', 'Recoil', 'MongoDB', 'Vercel', 'StyledComponents'],
  issues: [{
    issue: '챗봇 응답 시간이 길어지는 문제 발생',
    solving: 'Gemini API의 **Streaming** 기능을 활용하여 응답이 준비되는 대로 실시간으로 표시되도록 처리함. 이를 통해 사용자 경험을 개선하고, 긴 텍스트 응답의 대기 시간을 줄일 수 있었음.'
  }, {
    issue: '긴 대화가 이어질수록 렌더링 성능이 저하되는 문제 발생',
    solving: '대화 UI의 **box-shadow**와 같은 복잡한 스타일 속성을 제거하고, 디자인을 단순화하여 성능을 최적화함. 불필요한 CSS 효과를 줄임으로써 렌더링 속도를 개선하고, 대화 내용의 가독성도 함께 향상시켰음.'
  }, {
    issue: '로그인 없이 대화 내용을 저장할 방법 필요',
    solving: '**localStorage**를 사용해 브라우저에 대화 내용을 저장함으로써, 페이지 새로고침이나 브라우저 종료 후에도 대화 기록을 복원할 수 있도록 구현함. 이를 통해 로그인 없이도 사용자 대화 기록을 유지할 수 있었음.'
  }],
  reason: "`Next.js`는 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)으로 SEO와 성능을 최적화할 수 있어 선택했고, **API Routes**로 백엔드 없이도 API 처리가 가능했음. `TypeScript`는 타입 오류 방지와 코드 유지보수를 위해 도입했으며, `Recoil`은 불필요한 리렌더링을 줄여 성능 최적화에 적합해 사용함. **배포 환경**으로는 Next.js와 호환성이 뛰어나고 빠른 배포가 가능한 `Vercel`을 선택함. `MongoDB`는 유연한 스키마 설계와 빠른 데이터 처리 속도로 선택했으며, 간단한 CRUD 작업에 적합해 사용함.",
  learned: ' AI 챗봇 서비스를 개발하며 **Gemini API**를 활용한 자연어 처리와 대화 흐름 관리에 대한 이해를 높일 수 있었습니다. 특히, **Next.js**와 **TypeScript**를 사용해 서버 사이드 렌더링과 클라이언트 측 상태 관리를 효과적으로 구현하는 방법을 익혔습니다. 또한, **Recoil**을 통해 복잡한 대화 상태를 관리하며 성능을 최적화하는 기술을 배웠고, **localStorage**를 활용한 대화 기록 저장 방식으로 사용자 편의성을 높이는 경험을 쌓았습니다. 이 프로젝트를 통해 웹 기반 실시간 서비스의 성능 최적화 및 사용자 경험 개선에 대한 다양한 실무적 역량을 키웠습니다.',
  intro: 'Gemini API의 스트리밍 기능을 활용한 웹 기반 챗봇 서비스로, 사용자와 AI 간의 실시간 대화를 지원합니다. Google Cloud의 TTS(Text-to-Speech) 기능을 통합해 음성으로도 응답을 제공하며, 이미지와 음성 파일 분석 기능을 통해 다양한 입력을 처리할 수 있습니다. 대화 내용은 브라우저 캐시를 통해 저장되며, 여러 채팅 기록을 저장해 사용자가 이전 대화를 쉽게 이어나갈 수 있습니다.',
  func: [
    '실시간 대화 지원 (Gemini API Streaming 기능 사용)',
    'Google Cloud TTS(Text-to-Speech) 음성 응답 제공',
    '이미지 및 음성 파일 분석 기능',
    '대화 내용 저장 (여러 채팅 기록 저장 가능)',
    '다크모드 및 라이트모드 지원',
    '반응형 웹'
  ],
}, {
  thumb: [BlogThumbImg, BlogImg1, BlogImg2, BlogImg3],
  term: '2024.05 ~ 2024.09',
  termDiff: '5개월',
  name: "JongYeon's 개발 블로그",
  url: 'https://kimjy.vercel.app/',
  github: 'https://github.com/kimjy97/devblog-v2',
  contribution: { dev: '100%', design: '100%', planning: '100%' },
  stacks: ['Next.js', 'TypeScript', 'Recoil', 'StyledComponents', 'MongoDB', 'Vercel'],
  issues: [{
    issue: '**Vercel**의 특징 중 하나인 **Cold Start**로 인해 초기 데이터가 로드되는 시간이 길어져 화면에 게시물 관련 요소들이 노출 되는 것이 늦어지는 문제 발생.',
    solving: '게시판의 게시물들과 게시물의 내용들을 **Skeletone UI**를 적용해 데이터가 로드 되는 것을 직관적으로 알 수 있도록 함.'
  }, {
    issue: '특정 IP나 사용자가 **블랙리스트**에 등록되었을 때, 이를 실시간으로 감지하여 접근을 제한할 필요가 있었음.',
    solving: 'Next.js의 **미들웨어** 기능을 사용해 블랙리스트 API를 호출하고, 사용자가 블랙리스트에 포함되어 있는지 실시간으로 확인하는 로직을 구현함. 이를 통해 특정 사용자가 블랙리스트에 있을 경우, API 응답에 필요한 **헤더**를 추가하고 접근을 차단하는 방식으로 처리했으며, 미들웨어에서 NextResponse를 활용하여 블랙리스트 여부를 빠르게 응답할 수 있도록 최적화함.'
  }
  ],
  reason: "`Next.js`는 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)으로 SEO와 성능을 최적화할 수 있어 선택했고, **API Routes**로 백엔드 없이도 API 처리가 가능했음. `TypeScript`는 타입 오류 방지와 코드 유지보수를 위해 도입했으며, `Recoil`은 불필요한 리렌더링을 줄여 성능 최적화에 적합해 사용함. **배포 환경**으로는 Next.js와 호환성이 뛰어나고 빠른 배포가 가능한 `Vercel`을 선택함. `MongoDB`는 유연한 스키마 설계와 빠른 데이터 처리 속도로 선택했으며, 간단한 CRUD 작업에 적합해 사용함.",
  learned: ' 블로그 프로젝트를 통해 풀스택 개발 경험을 쌓으며, 프론트엔드와 백엔드 통합의 중요성을 배웠습니다. 특히, **SEO 최적화 기법**과 성능 향상을 위한 다양한 **Next.js** 기능을 실제로 적용해보며 깊이 있는 학습을 할 수 있었습니다. 또한, **TypeScript**를 사용하면서 타입 시스템의 이점을 직접 경험하고, 더 안정적인 코드 작성 방법을 익혔습니다.\n 추가로, 다크모드와 라이트모드를 구현하여 사용자 환경에 맞춘 UI 경험을 제공하는 방법을 배웠으며, **chart.js**를 사용해 시각화 도구를 구현하고 데이터 분석 결과를 직관적으로 표현하는 방법을 익혔습니다. 블로그 포스트 작성 형식을 위해 **react-markdown**을 사용해 마크다운 방식을 커스텀하여, 유연하게 포스트를 작성하고 관리할 수 있는 경험을 쌓았습니다.',
  intro: '개발하면서 얻은 정보들을 체계적으로 기록할 수 있는 개인 블로그가 필요하다고 느껴 직접 제작하였습니다. 블로그의 기본적인 형태와 기능을 모두 구현했으며, SEO 최적화를 통해 구글 검색이 가능하도록 했습니다. 또한, 사용자의 선호에 따라 다크모드와 라이트모드를 선택할 수 있도록 기능을 추가하여, 다양한 환경에서도 편리하게 블로그를 이용할 수 있도록 하였습니다.',
  func: ['게시물 조회', '게시물 검색', '게시물 좋아요', '게시물 정렬', '댓글 등록, 수정, 삭제', '게시판 이동', '다크모드 및 라이트모드 지원', '반응형 웹'],
}, {
  thumb: [WhatIsPillThumbImg, WhatIsPillImg1, WhatIsPillImg2, WhatIsPillImg3],
  term: '2023.03 ~ 진행중',
  name: '이게뭐약 - 알약 촬영 검색 애플리케이션',
  url: 'https://play.google.com/store/apps/details?id=com.mbm.whatispill&hl=ko',
  team: 'FE: 1명, BE: 2명',
  contribution: { dev: '100%', design: '100%', planning: '33%' },
  stacks: ['ReactNative', 'TypeScript', 'Recoil', 'MongoDB', 'GooglePlayConsole'],
  issues: [{
    issue: '기존 코드에 명확한 디자인 패턴이 적용되지 않아 코드 구조가 일관되지 않고 관리가 어려웠음. 디렉토리와 코드 구조의 체계적인 개편이 필요했음.',
    solving: '**아토믹 디자인 패턴**을 도입해 컴포넌트를 작은 단위로 나누고, 재사용성과 유지보수성을 높임. 이를 통해 코드 구조가 명확해지고, 확장성과 디자인 일관성도 개선됨.'
  }, {
    issue: '백엔드에서 알약 앞뒤 이미지를 가로로 배치한 하나의 이미지를 요청 본문에 포함해 보내야 하는 요구사항 발생.',
    solving: '**react-native-view-shot**을 사용해 알약 앞뒤 이미지를 가로로 배열한 후 **ViewShot**으로 캡처, URI로 추출해 문제 해결. 이미지 합성 작업을 별도의 라이브러리 없이 간단하게 구현하기 위해 이 방식을 사용했음.'
  }],
  reason: '`React Native`는 하나의 코드베이스로 iOS와 Android 모두에서 앱을 개발할 수 있어 개발 속도가 빠르고 유지보수가 용이해서 선택함. **Flutter**도 고려했으나, 기존 **React** 지식을 활용할 수 있고 커뮤니티 지원이 풍부한 React Native가 적합하다고 판단함. `TypeScript`는 복잡한 데이터 구조를 안전하게 처리하고, 런타임 오류를 줄이기 위해 사용함. `Recoil`은 React와 자연스럽게 통합되고, 모바일 환경에서 성능 최적화가 쉬워 **Redux**보다 간편하게 상태 관리를 할 수 있어 선택함.',
  learned: ' **React**와 **React Native**의 차이를 깊이 이해하며 모바일 환경에서의 성능 최적화와 네이티브 모듈, 특히 카메라 모듈을 활용한 이미지 처리 방법을 배웠습니다. 앱 출시 경험을 통해 **Google Play** 등록 절차와 팀 프로젝트에서의 협업 중요성도 깨달았습니다. 다양한 디바이스에 대응하는 반응형 UI와 성능 최적화 기술을 익혀 실무 역량을 한층 강화했으며, **Git 커밋 컨벤션**을 도입하여 코드 일관성과 협업 효율성을 높일 수 있었습니다.',
  intro: '사용자가 알약을 카메라로 촬영하여 검색하면 해당 약품의 정보를 제공하는 모바일 애플리케이션입니다. AI 기반의 이미지 인식 기술을 활용하여 촬영한 알약을 식별하고, 식품의약품안전처에서 제공하는 공공데이터를 바탕으로 상세한 약품 정보를 제공합니다. React Native를 사용해 크로스 플랫폼 앱으로 개발되었으며, 현재 Android 버전은 Google Play에 출시되어 있습니다. 올해 안에 iOS 버전도 App Store에 등록할 예정입니다. 알약 데이터는 식품의약품안전처의 최신 데이터를 기반으로 지속적으로 업데이트됩니다.',
  func: ['알약 촬영 및 검색 기능', '앨범에서 사진 선택하여 검색 기능', '알약 정보 조회', '최근 검색한 약품 리스트 제공', '알약 보관함 기능'],
}, {
  thumb: [MongoDBThumbImg, MongoDBImg1, MongoDBImg2, MongoDBImg3],
  term: '2024.08 ~ 2024.09',
  termDiff: '2개월',
  name: 'MongoDB 매니저',
  url: 'https://mongo-db-manager.vercel.app',
  github: 'https://github.com/kimjy97/mongoDB-manager',
  contribution: { dev: '100%', design: '100%', planning: '100%' },
  stacks: ['Next.js', 'TypeScript', 'Recoil', 'MongoDB', 'Vercel', 'StyledComponents'],
  issues: [{
    "issue": "**Mongoose** 사용으로 인한 MongoDB 관리 서비스의 유연성 제한 및 다중 데이터베이스 동적 관리의 복잡성 증가.",
    "solving": "**MongoDB 네이티브 드라이버**로 전환하고 DB연결 함수를 개선하여 직접적인 데이터베이스 제어 및 다중 데이터베이스 연결 관리 구현. 이를 통해 서비스의 유연성 향상 및 관리 효율성 증대."
  }, {
    "issue": "MongoDB 관리 서비스에서 **대량의 문서**를 효율적으로 로드하고 표시해야 하는 **사용자 경험 문제** 발생.",
    "solving": "**IntersectionObserver**를 활용한 **무한 스크롤** 기능을 구현하여 **페이지네이션** 없이 **점진적인 문서 로딩** 구현. 이를 통해 **초기 로딩 시간 단축**과 **부드러운 스크롤 경험** 제공."
  }],
  reason: "`Next.js`는 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)으로 SEO와 성능을 최적화할 수 있어 선택했고, **API Routes**로 백엔드 없이도 API 처리가 가능했음. `TypeScript`는 타입 오류 방지와 코드 유지보수를 위해 도입했으며, `Recoil`은 불필요한 리렌더링을 줄여 성능 최적화에 적합해 사용함. **배포 환경**으로는 Next.js와 호환성이 뛰어나고 빠른 배포가 가능한 `Vercel`을 선택함. `MongoDB`는 유연한 스키마 설계와 빠른 데이터 처리 속도로 선택했으며, 간단한 CRUD 작업에 적합해 사용함.",
  learned: 'MongoDB 매니저 프로젝트를 통해 데이터베이스 관리와 성능 최적화에 대한 깊은 이해를 얻었습니다. 특히, **MongoDB 네이티브 드라이버**를 사용한 다중 데이터베이스 관리와 효율적인 데이터 처리 방법을 학습했습니다. 또한, **IntersectionObserver**를 활용한 무한 스크롤 구현을 통해 대규모 데이터셋을 사용자에게 부드럽게 제공하는 기술을 익혔습니다. 이 프로젝트를 통해 데이터베이스와 프론트엔드 간의 상호작용을 효율적으로 설계하고, 사용자 경험을 고려한 인터페이스 최적화 방법을 경험했습니다.',
  intro: 'MongoDB 데이터베이스를 쉽게 관리하고 모니터링할 수 있는 웹 기반 도구입니다. 데이터베이스 구조를 시각화하고, 데이터를 다루는 기본 작업들을 쉽고 빠르게 다룰 수 있도록 구현하여 개발자와 데이터베이스 관리자가 작업을 효율적으로 할 수 있도록 돕습니다. 제가 진행한 대부분의 프로젝트에서 MongoDB를 사용했기 때문에, MongoDB를 직접 관리할 수 있는 도구의 필요성을 느껴 이 프로젝트를 시작하게 되었습니다. 이를 통해 MongoDB의 관리 효율성을 높이고, 데이터 작업을 보다 직관적으로 수행할 수 있는 환경을 만들고자 했습니다.',
  func: [
    '데이터베이스 연결 및 관리',
    '컬렉션 및 문서 조회',
    '컬렉션 및 문서 검색',
    '문서 추가, 수정, 삭제',
    '고급 쿼리 작성',
  ]
}
]