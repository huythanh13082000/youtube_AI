import {
  Button,
  FormControl,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextareaAutosize,
} from '@material-ui/core'
import React from 'react'
import InputBase from '../../components/input'

const useStyles = makeStyles({
  container_development_inquiry: {
    background: '#F9FAFB',
    paddingBottom: '40px',
    '&>div:nth-child(1)': {
      background: 'black',
      height: '120px',
    },
    '&>div:nth-child(2)': {
      margin: '60px auto 0',
      width: '50%',
      padding: '32px 40px',
      background: '#FFFFFF',
      boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.2)',
      borderRadius: '6px',
      '&>p': {
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '36px',
      },
      '&>div': {
        display: 'flex',
        '&>label': {
          display: 'inline-block',
          marginBottom: '10px',
          marginTop: '10px',
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '27px',
          color: '#1F293',
        },
        '&>p': {
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '27px',
          color: '#1F2937',
        },
        '& .MuiFormControlLabel-label': {
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '24px',
          color: '#6B7280',
        },
      },
      '&>button': {
        width: '100%',
        height: '48px',
        background: '#2C97EB',
        borderRadius: '5px',
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '24px',
        margin: '32px 0',
      },
      '&>span': {
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        textAlign: 'center',
        color: '#6B7280',
        display: 'block',
        '&>span': {
          color: '#2C97EB',
        },
      },
    },
  },
})

const DevelopmentInquiry = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState('female')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }
  return (
    <div className={classes.container_development_inquiry}>
      <div></div>
      <div>
        <p>문의 내용</p>
        <div>
          <InputBase onChange={()=>console.log(11)} placeholder='프로젝트명' label='프로젝트명' />
          <div style={{width: '32px'}}></div>
          <InputBase onChange={()=>console.log(11)} placeholder='화면기획서' label='파일 선택' />
        </div>
        <div style={{display: 'inherit'}}>
          <label htmlFor='textarea'>서비스의 주요 기능</label>
          <br />
          <TextareaAutosize
            aria-label='minimum height'
            minRows={3}
            id='textarea'
            placeholder='예: 인테리어 업체와 소비자 매칭 서비스'
            style={{
              width: '100%',
              paddingLeft: '10px',
              height: '144px',
              boxSizing: 'border-box',
            }}
          />
        </div>
        <div>
          <InputBase onChange={()=>console.log(11)} placeholder='최대 예상' label='최대 예상' />
        </div>
        <div>
          <InputBase onChange={()=>console.log(11)}
            placeholder='예: 예비창업패키지 사업비'
            label='정부지원사업 집행 여부'
          />
        </div>
        <FormControl>
          <p>출시 플랫폼</p>
          <RadioGroup
            aria-label='gender'
            name='gender1'
            value={value}
            onChange={handleChange}
            style={{display: 'flex', flexDirection: 'row'}}
          >
            <FormControlLabel
              value='female'
              control={<Radio />}
              label='모발일앱(하이브리드)'
            />
            <FormControlLabel
              value='male'
              control={<Radio />}
              label='반응형웹'
            />
          </RadioGroup>
        </FormControl>
        <div>
          <InputBase onChange={()=>console.log(11)}
            placeholder='이름과 성을 입력하세요'
            label='성함'
            require
          />
        </div>
        <div>
          <InputBase onChange={()=>console.log(11)} placeholder='프로젝트명' label='회사이름 ' />
          <div style={{width: '32px'}}></div>
          <InputBase onChange={()=>console.log(11)} placeholder='직위를 입력하세요' label='직책' />
        </div>
        <div>
          <InputBase onChange={()=>console.log(11)} placeholder='이메일을 입력하세요' label='이메일' require />
          <div style={{width: '32px'}}></div>
          <InputBase onChange={()=>console.log(11)}
            placeholder='전화번호를 입력하세요 '
            label='휴대폰번호(응대문발송)'
            require
          />
        </div>
        <div>
          <InputBase onChange={()=>console.log(11)}
            placeholder='들어 오세요 '
            label='추천인 또는 인썸니아를 알게 된 경로'
          />
        </div>
        <Button variant='contained' color='primary'>
          제출하기
        </Button>
        <span>
          제출하기를 누르면 <span>개인정보수집</span> 에 동의한 것으로 됩니다
        </span>
      </div>
    </div>
  )
}

export default DevelopmentInquiry
