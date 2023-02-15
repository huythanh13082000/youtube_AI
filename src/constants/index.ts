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
    url: multiscreen,
    name: '반응형 웹',
    description:
      '디자인 감각이 없어도 훌륭한 반응형 웹사이트를 만들 수 있습니다.',
  },
  {
    url: landingPage,
    name: '방문 페이지',
    description:
      '디자인 감각이 없어도 훌륭한 반응형 웹사이트를 만들 수 있습니다.',
  },
  {
    url: application,
    name: '애플리케이션',
    description:
      '디자인 감각이 없어도 훌륭한 반응형 웹사이트를 만들 수 있습니다.',
  },
  {
    url: coding,
    name: '관리 웹',
    description:
      '디자인 감각이 없어도 훌륭한 반응형 웹사이트를 만들 수 있습니다.',
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
    name: '대표가 15 년차 풀스택 개발자',
    description:
      '비슷한 기능을 구현하더라도 훨씬 빠르고 효율적인 방식이 있습니다. 비용 절감 할 수있는 방법을 지속적으로 제안합니다.',
  },
  {
    url: database,
    name: '바퀴를 재발명하지 않음',
    description:
      '안정화된 개발 라이브러리와 디자인 테마, UX 패턴을 최대한 활용하여 생산성을 극 대화하고 리스크를 즐입니다',
  },
]
