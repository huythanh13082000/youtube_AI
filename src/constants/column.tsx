import moment from 'moment'
import {numberWithCommas} from '../utils'
import bieuDo from '../asset/images/bieudo.png'

export const BASE_URL = ''

export const COLUMN_TABLE_HOME = [
  {
    title: '썸네일',
    dataIndex: '썸네일',
    render: (url: any) => (
      <img style={{width: '309px', objectFit: 'cover'}} src={url} alt='' />
    ),
    sort: false,
  },
  {
    title: '제목',
    dataIndex: '제목',
    render: (text: string) => <span>{text}</span>,
    sort: false,
  },
  {
    title: '구독자',
    dataIndex: '구독자',
    render: (text: number) => <span>{numberWithCommas(text)}</span>,
    sort: true,
  },
  {
    title: '조회수',
    dataIndex: '조회수',
    render: (text: number) => <span>{numberWithCommas(text)}</span>,
    sort: true,
  },
  {
    title: '업로드 날짜',
    dataIndex: '업로드날짜',
    render: (text: string) => <span>{moment(text).format('YYYY.MM.DD')}</span>,
    sort: true,
  },
  {
    title: '시청그래프',
    dataIndex: '시청그래프',
    render: (text: string) => (
      <span>
        <img src={bieuDo} alt='' style={{width: '120px', height: '35.12px'}} />
      </span>
    ),
    sort: true,
  },
]
