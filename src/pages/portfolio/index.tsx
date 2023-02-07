import {makeStyles, Paper, Tab, Tabs} from '@material-ui/core'
import React from 'react'
import background from '../../asset/images/portfolio_background.png'
import CardSuccessCase from '../../components/card_success_case'

const useStyles = makeStyles({
  container_portfolio: {
    '&>div:nth-child(1)': {
      background: `url(${background})`,
      backgroundSize: 'cover',
      position: 'relative',
      height: '800px',
      '&>div:nth-child(1)': {
        position: 'absolute',
        top: '40%',
        width: '100%',
        '&>p': {
          textAlign: 'center',
          fontWeight: 700,
          fontSize: '44px',
          lineHeight: '66px',
          color: '#FFFFFF',
          margin: '5px 0',
        },
        '&>p:nth-child(2)': {
          fontWeight: 500,
          fontSize: '20px',
          lineHeight: '30px',
        },
      },
    },
    '&>div:nth-child(2)': {
      padding: '0 140px',
      boxShadow: '0px 2px 16px rgba(78, 78, 78, 0.16)',
      '& .MuiPaper-elevation1': {
        boxShadow: 'none',
      },
      '& .MuiTabs-flexContainer': {
        justifyContent: 'center',
        padding: '12px 0',
        '& .MuiTab-wrapper': {
          fontFamily: 'Pretendard',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '24px',
          lineHeight: '36px',
        },
      },
      '& .MuiTab-textColorPrimary.Mui-selected': {
        background: 'linear-gradient(180deg, #2E88FF 0%, #004EC7 100%)',
        WebkitBackgroundClip: 'text',
        webkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
      },
    },
    '&>div:nth-child(3)': {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      background: '#F9FAFB',
      padding: '60px 130px 80px 130px',
    },
  },
})

const Portfolio = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(2)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }
  return (
    <div className={classes.container_portfolio}>
      <div>
        <div>
          <p>포트폴리오</p>
          <p>대표적인 성공 사례를 공개합니다.</p>
        </div>
      </div>
      <div>
        <Paper square>
          <Tabs
            value={value}
            indicatorColor='primary'
            textColor='primary'
            onChange={handleChange}
            aria-label='disabled tabs example'
          >
            <Tab label='과학 기술' />
            <Tab label='쇼핑' />
            <Tab label='자동차' />
            <Tab label='여행하다  ' />
            <Tab label='패션' />
            <Tab label='마케팅' />
            <Tab label='마케팅' />
            <Tab label='마케팅' />
            <Tab label='마케팅' />
          </Tabs>
        </Paper>
      </div>
      <div>
        <CardSuccessCase />
        <CardSuccessCase />
        <CardSuccessCase />
        <CardSuccessCase />
        <CardSuccessCase />
        <CardSuccessCase />
      </div>
    </div>
  )
}

export default Portfolio
