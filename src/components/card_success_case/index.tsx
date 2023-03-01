import {makeStyles} from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import React, {useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {BASE_URL} from '../../constants'
import {PortfolioDetail} from '../../pages/portfolio/portfolio_detail'
import {ROUTE} from '../../router/routes'
import {PortfolioType} from '../../types/portfolio.type'

const useStyles = makeStyles({
  container_card_success_case: {
    width: '32%',
    textAlign: 'center',
    background: '#FFFFFF',
    padding: '44px 32px',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 20px rgba(0, 102, 255, 0.25)',
    borderRadius: '10px',
    margin: '0.66%',
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
    '&:hover': {
      '&>span:nth-child(5)': {
        color: '#2C97EB',
      },
    },
  },
  '@media (max-width: 740px)': {
    container_card_success_case: {
      width: '48%',
      textAlign: 'center',
      background: '#FFFFFF',
      padding: '16px',
      boxSizing: 'border-box',
      boxShadow: '0px 4px 20px rgba(0, 102, 255, 0.25)',
      borderRadius: '10px',
      margin: '0.66%',
      '&>img': {
        borderRadius: '12px',
        width: '60px',
        height: '60px',
      },
      '&>p:nth-child(2)': {
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: '24px',
        color: '#111827',
        margin: '5px',
      },
      '&>p:nth-child(3)': {
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '21px',
        color: '#D97706',
        margin: '5px',
      },
      '&>p:nth-child(4)': {
        display: 'none',
      },
      '&>span:nth-child(5)': {
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '21px',
        color: '#9CA3AF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      },
    },
  },
})

const CardSuccessCase = (props: {data: PortfolioType}) => {
  const classes = useStyles()
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  return (
    <>
      <div
        className={classes.container_card_success_case}
        onClick={() => {
          if (location.pathname === ROUTE.PORTFOLIO) setOpen(true)
          else navigate(ROUTE.PORTFOLIO)
        }}
      >
        <img src={`${BASE_URL}/${props.data.logo}`} alt='' />
        <p>{props.data.title}</p>
        <p>{props.data.programming_language}</p>
        <p>{props.data.description}</p>
        <span>
          View Detail <ArrowRightAltIcon />
        </span>
      </div>
      <PortfolioDetail
        open={open}
        setOpen={() => setOpen(false)}
        data={props.data}
      />
    </>
  )
}

export default CardSuccessCase
