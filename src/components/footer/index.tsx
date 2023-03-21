import {makeStyles} from '@material-ui/core/styles'
import React from 'react'
import logo from '../../asset/images/logo.png'
import cIcon from '../../asset/images/c.png'

const useStyles = makeStyles({
  footer_container: {
    background: '#F8F8F8',
    padding: '2rem',
    '&>div:nth-of-type(1)': {
      display: 'flex',
      justifyContent: 'space-between',
      '&>img': {
        width: '162px',
        height: '54px',
      },
      '&>ul': {
        display: 'flex',
        listStyle: 'none',
        '&>li': {
          marginLeft: '2rem',
          fontWeight: 500,
          fontSize: '18px',
        },
      },
    },
    '&>div:nth-of-type(2)': {
      textAlign: 'center',
      fontSize: '16px',
    },
  },
})

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.footer_container}>
      <div>
        <img src={logo} alt='' />
        <ul>
          <li>접촉</li>
          <li>이용기간</li>
          <li>개인 정보 정책</li>
          <li>저작권 고지</li>
        </ul>
      </div>
      <div>
        <img src={cIcon} alt='' /> youtubeai 2023. All Right Reserved
      </div>
    </div>
  )
}

export default Footer
