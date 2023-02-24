import multiscreen from '../asset/images/multiscreen.png'
import landingPage from '../asset/images/landing_page.png'
import application from '../asset/images/application.png'
import coding from '../asset/images/coding.png'

import cooperate from '../asset/images/cooperate.png'
import cycle from '../asset/images/cycle.png'
import database from '../asset/images/database.png'
import hourglass from '../asset/images/hourglass.png'
import learn from '../asset/images/learn.png'
import w from '../asset/images/w.png'
import intro from '../asset/images/intro.png'
import intro1 from '../asset/images/intro1.png'
import intro2 from '../asset/images/intro2.png'
import intro3 from '../asset/images/intro3.png'
import intro4 from '../asset/images/intro4.png'
import intro5 from '../asset/images/intro5.png'
import intro6 from '../asset/images/intro6.png'
import intro7 from '../asset/images/intro7.png'
import intro8 from '../asset/images/intro8.png'
import intro9 from '../asset/images/intro9.png'
import intro10 from '../asset/images/intro10.png'
import intro11 from '../asset/images/intro11.png'
import intro12 from '../asset/images/intro12.png'
import intro13 from '../asset/images/intro13.png'
import intro14 from '../asset/images/intro14.png'
import intro15 from '../asset/images/intro15.png'
import intro16 from '../asset/images/intro16.png'
import intro17 from '../asset/images/intro17.png'
import intro18 from '../asset/images/intro18.png'
import intro19 from '../asset/images/intro19.png'
import intro20 from '../asset/images/intro20.png'
import intro21 from '../asset/images/intro21.png'

export const BASE_URL = 'http://3.34.144.245:3535'

export const HTTP_STATUS = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
}
export const LIST_DATA_SERVICE = [
  {
    url: landingPage,
    name: 'UI/UX 디자인',
    description: '이용자에게 더욱 편하고 즐거운 방문을 유도하는 디자인 필수',
  },
  {
    url: multiscreen,
    name: '반응형 웹',
    description:
      '이용자들은 PC와 휴대폰으로 접속하여, 디바이스에 맞는 편리함을 제공!',
  },
  {
    url: application,
    name: '애플리케이션',
    description:
      '구글플레이와 앱스토어를 출시하여, 전문적인 APP을 출시해보세요.',
  },
  {
    url: coding,
    name: '관리자 페이지',
    description:
      '사이트와 APP을 관리하고, 고객관리를 할수있는 시스템에 필수요소',
  },
]
export const LIST_DATA_STRENGTH = [
  {
    url: learn,
    name: '우선 순위 중심으로 LEAN 한 개발',
    description:
      '개발 초반에는 CTO 급, 시니어급이 구조를 잡아야 프로젝트가 안전하게 진행될 수 있습니다.',
  },
  {
    url: hourglass,
    name: '효율적인 방식 제안',
    description:
      '비슷한 기능을 구현하더라도 훨씬 빠르고 효율적인 방식이 있습니다. 비용 절감 할 수있는 방법을 지속적으로 제안합니다.',
  },
  {
    url: cycle,
    name: '고객이 만족해야 우리에게도 이익',
    description:
      '빠르게 개발하여 적은 비용으로 프로젝트를 완수하면 고객사가 지속적으로 의뢰를 맡기 신다고 생각합니다.',
  },
  {
    url: cooperate,
    name: '정부창업지원과의 궁합',
    description:
      '절반 이상의 고객사가 정부창업지원금을 개발비로 집행하셨고 사업에 선정, 통과, 우수 기업 입상 등의 성과를 보셨습니다.',
  },
  {
    url: w,
    name: '전문가 개발자들과 함께',
    description:
      '빠르게 개발하여 적은 비용으로 프로젝트를 완수하면 고객사가 지속적으로 의뢰를 맡기 신다고 생각합니다.',
  },
  {
    url: database,
    name: '저희의 경험으로 최적화된 서비스를 제공하세요.',
    description:
      '안정화된 개발 라이브러리 디자인 테마, UX 패턴을 최대한 활용하여 생산성을 극 대화하고 리스크를 줄입니다',
  },
]

export const LIST_IMAGE_INTRO: string[] = [
  intro,
  intro1,
  intro2,
  intro3,
  intro4,
  intro5,
  intro6,
  intro7,
  intro8,
  intro9,
  intro10,
  intro11,
  intro12,
  intro13,
  intro14,
  intro15,
  intro16,
  intro17,
  intro18,
  intro19,
  intro20,
  intro21,
]

export const LIST_TYPE = ['UX_UI', 'APP', 'WEB', 'ADMIN_PAGE']
export const LIST_TYPE_FORMAT: any = {
  UX_UI: 'UI/UX 디자인',
  APP: 'APP',
  WEB: 'WEB',
  ADMIN_PAGE: '관리자 페이지',
}
