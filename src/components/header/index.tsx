import { makeStyles } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../../asset/images/logo.png'
import menu from '../../asset/images/menu.png'
import { ROUTE } from '../../router/routes'
import DialogMenuHeader from './dialog'

const useStyles = makeStyles({
  container_header: {
    position: 'absolute',
    zIndex: 10000,
    top: 0,
    left: 0,
    right: 0,
    color: 'white',
    height: 120,
    padding: '0 130px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&>:nth-child(1)': {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      '&>:nth-child(1)': {
        fontFamily: 'Anton',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '28px',
        lineHeight: '66px',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        color: '#FFFFFF',
        cursor: 'pointer',
        '&>img': {
          width: '104px',
          height: '67px',
          marginRight: '1rem',
        },
      },
      '&>:nth-child(2)': {
        display: 'flex',
        width: '510px',
        alignItems: 'center',
        listStyle: 'none',
        justifyContent: 'space-between',
        '&>li': {
          fontWeight: 300,
          fontSize: '18px',
          display: 'flex',
          color: 'white',
          cursor: 'pointer',
        },
        '&>li:hover': {
          fontWeight: 700,
        },
      },
      '&>:nth-child(3)': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '162px',
        height: '48px',
        background: '#FFFFFF',
        borderRadius: '4px',
        fontWeight: 600,
        fontSize: '18px',
        color: '#000000',
      },
    },
    '&>:nth-child(2)': {
      display: 'none',
    },
  },

  '@media (max-width: 740px)': {
    container_header: {
      padding: '0 16px',
      '&>div:nth-child(1)': {
        display: 'none',
      },
      '&>div:nth-child(2)': {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&>:nth-child(1)': {
          fontFamily: 'Anton',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '18px',
          lineHeight: '36px',
          display: 'flex',
          alignItems: 'center',
          color: '#FFFFFF',
          cursor: 'pointer',
          '&>img': {
            width: '60px',
            height: '38.65px',
            marginRight: '8px',
          },
        },
        '&>img:nth-child(2)': {
          width: '24px',
          height: '24px',
        },
      },
    },
  },

  '@media (min-width: 740px) and (max-width: 1024px)': {
    container_header: {
      '&>div:nth-child(1)': {
        // display: 'none',
        '&>div:nth-child(1)': {
          padding: '1rem',
        },
      },
    },
  },
})

const Header = () => {
  const classes = useStyles()
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  return (
    <div className={classes.container_header}>
      <div>
        <span onClick={() => navigate('/')}>
          <img src={logo} alt='' />
          지엠포컴퍼니
        </span>
        <ul>
          <li
            style={
              location.pathname === '/'
                ? {
                    fontWeight: 700,
                    borderBottom: '2px solid white',
                  }
                : {fontWeight: 400}
            }
            onClick={() => navigate(ROUTE.HOME)}
          >
            Home
          </li>
          <li
            style={
              location.pathname === '/intro'
                ? {
                    fontWeight: 700,
                    borderBottom: '2px solid white',
                  }
                : {fontWeight: 400}
            }
            onClick={() => navigate(ROUTE.INTRO)}
          >
            회사소개
          </li>
          <li
            style={
              location.pathname === '/portfolio'
                ? {
                    fontWeight: 700,
                    borderBottom: '2px solid white',
                  }
                : {fontWeight: 400}
            }
            onClick={() => navigate(ROUTE.PORTFOLIO)}
          >
            포트폴리오
          </li>
          <li
            style={
              location.pathname === '/estimate_calculation'
                ? {
                    fontWeight: 700,
                    borderBottom: '2px solid white',
                  }
                : {fontWeight: 400}
            }
            onClick={() => navigate(ROUTE.ESTIMATE_CALCULATION)}
          >
            견적계산
          </li>
          <li
            style={
              location.pathname === '/development_inquiry'
                ? {
                    fontWeight: 700,
                    borderBottom: '2px solid white',
                  }
                : {fontWeight: 400}
            }
            onClick={() => navigate(ROUTE.DEVELOPMENT_INQUIRY)}
          >
            개발문의
          </li>
        </ul>
        {/* <span>프로젝트 생성</span> */}
      </div>
      <div>
        <span onClick={() => navigate('/')}>
          {' '}
          <img src={logo} alt='' />
          지엠포컴퍼니
        </span>
        {open ? (
          <span onClick={() => setOpen(false)}>
            <CloseIcon />
          </span>
        ) : (
          <img src={menu} alt='' onClick={() => setOpen(true)} />
        )}
      </div>
      <DialogMenuHeader open={open} setOpen={() => setOpen(false)} />
    </div>
  )
}

export default Header
