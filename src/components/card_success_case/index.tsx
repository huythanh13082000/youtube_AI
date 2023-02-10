import {makeStyles} from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import React, {useState} from 'react'
import {PortfolioDetail} from '../../pages/portfolio/portfolio_detail'

const useStyles = makeStyles({
  container_card_success_case: {
    width: '32%',
    textAlign: 'center',
    background: '#FFFFFF',
    padding: '44px 32px',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 20px rgba(0, 102, 255, 0.25)',
    borderRadius: '10px',
    margin: '1% 0',
    '&>img': {
      borderRadius: '12px',
      width: '80px',
      height: '80px',
    },
    '&>p:nth-child(2)': {
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '30px',
      color: '#111827',
    },
    '&>p:nth-child(3)': {
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '24px',
      color: '#D97706',
    },
    '&>p:nth-child(4)': {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
      color: '#4B5563',
    },
    '&>span:nth-child(5)': {
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '27px',
      color: '#9CA3AF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
    '&>span:nth-child(5):hover': {
      color: '#2C97EB',
    },
  },
  '@media (max-width: 740px)': {
    container_card_success_case: {
      width: '100%',
      textAlign: 'center',
      background: '#FFFFFF',
      padding: '16px',
      boxSizing: 'border-box',
      boxShadow: '0px 4px 20px rgba(0, 102, 255, 0.25)',
      borderRadius: '10px',
      margin: '1% 0',
    },
  },
})

const CardSuccessCase = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  return (
    <div className={classes.container_card_success_case}>
      <img src='' alt='' />
      <p>리뷰팡팡</p>
      <p>Web/ Android/ IOS</p>
      <p>
        인플루언서 마케팅 플랫폼 프로젝트는 그린앱의 산물입니다.인플루언서
        마케팅 플랫폼 프로젝트는 그린앱의 산물입니다.
      </p>
      <span onClick={() => setOpen(true)}>
        View Detail <ArrowRightAltIcon />
      </span>
      <PortfolioDetail open={open} setOpen={() => setOpen(false)} />
    </div>
  )
}

export default CardSuccessCase
