import React, {useState} from 'react'
import {makeStyles} from '@material-ui/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import InputTextarea from '../../components/input_textarea'
import UploadFile from '../../components/upload_file'

const useStyles = makeStyles({
  customer_support: {
    background: '#F8F8F8',
    padding: '2rem 3rem',
    '&>p:nth-of-type(1)': {
      fontWeight: 700,
      fontSize: '32px',
      marginBottom: 0,
    },
    '&>p:nth-of-type(2)': {
      color: '#777E91',
      fontWeight: 500,
      fontSize: '16px',
    },
  },
  chat_container: {
    display: 'flex',

    '&>div:nth-of-type(1)': {
      width: '70%',
      '&>div': {
        boxSizing: 'border-box',
        background: 'white',
        padding: '2rem',
        width: '100%',
        borderRadius: '12px',
        '&>div': {
          marginTop: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          '&>button': {
            width: '24%',
          },
        },
      },
    },
    '&>div:nth-of-type(2)': {
      padding: '2rem',
      width: '30%',
      boxSizing: 'border-box',
      '&>p:nth-of-type(1)': {
        fontWeight: 500,
        fontSize: '18px',
        color: '#141416',
      },
      '&>p:nth-of-type(2)': {
        fontWeight: 500,
        fontSize: '16px',
        color: '#353945',
      },
      '&>p:nth-of-type(3)': {
        fontWeight: 400,
        fontSize: '16px',
        color: '#777E91',
      },
    },
  },
  label_style: {
    color: '#141416',
    fontWeight: 700,
    fontSize: '18px',
  },
})

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const CustomerSupport = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={classes.customer_support}>
      <p>문의하기</p>
      <p>꼼꼼한 답변이 필요하시다면 문의하기 서비스를 이용해보세요.</p>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
        aria-label='full width tabs example'
        style={{borderBottom: '1px solid #B1B5C4'}}
      >
        <Tab
          label='1:1 문의하기'
          {...a11yProps(0)}
          style={{fontWeight: 700, fontSize: '20px'}}
        />
        <Tab
          label='문의내역'
          {...a11yProps(1)}
          style={{fontWeight: 700, fontSize: '20px'}}
        />
      </Tabs>
      <br />
      {value === 0 && (
        <div className={classes.chat_container}>
          <div>
            <div>
              <label htmlFor='' className={classes.label_style}>
                문의유형 *
              </label>

              <div>
                <Button variant='contained' color='primary'>
                  요금/결제
                </Button>
                <Button variant='outlined'>기능제안</Button>
                <Button variant='outlined'>불편사항/오류</Button>
                <Button variant='outlined'>기타</Button>
              </div>
              <br />
              <label htmlFor='' className={classes.label_style}>
                제목 *
              </label>
              <div>
                <InputTextarea
                  value={title}
                  onChange={(e) => setTitle(e)}
                  placeholder={'제목을 입력해주세요.'}
                />
              </div>
              <label htmlFor='' className={classes.label_style}>
                내용 *
              </label>
              <div>
                <InputTextarea
                  value={detail}
                  onChange={(e) => setDetail(e)}
                  placeholder={
                    '문의하실 내용을 입력해주세요. 답변 완료된 문의 내용은 수정,삭제가 어렵습니다.'
                  }
                  maxLength={2000}
                />
              </div>
              <UploadFile />
            </div>
            <br />
            <Button variant='contained' color='primary'>
              유튜브브
            </Button>
          </div>
          <div>
            <p>고객센터 업무시간</p>
            <p>평일 09:00 ~ 17:00 (주말/공휴일은 제외)</p>
            <p>
              업무시간 외에 접수된 문의는 유형, 문의 내용, 접수량에 따라 답변이
              지연될 수 있습니다.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default CustomerSupport
