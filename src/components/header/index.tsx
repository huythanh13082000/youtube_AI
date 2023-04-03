import {makeStyles} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import {useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import logo from '../../asset/images/logo.png'
import {ROUTE} from '../../router/routes'
import MenuIcon from '@material-ui/icons/Menu'
import {selectUserInfo, userAction} from '../../feature/user/user.slice'
import {useAppDispatch, useAppSelector} from '../../app/hooks'

const useStyles = makeStyles({
  container_header: {
    position: 'fixed',
    zIndex: 1300,
    top: 0,
    left: 0,
    right: 0,
    height: 86,
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: '0.4s',
    boxSizing: 'border-box',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.08)',
    '&>div:nth-of-type(1)': {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      '&>span:nth-of-type(1)': {
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
          width: '152.8px',
          height: '54px',
          marginRight: '1rem',
        },
      },
      '&>ul:nth-of-type(1)': {
        display: 'flex',
        alignItems: 'center',
        listStyle: 'none',
        justifyContent: 'space-between',
        '&>li': {
          fontWeight: 500,
          fontSize: '18px',
          display: 'flex',
          cursor: 'pointer',
          marginRight: '2rem',
        },
        '&>li:hover': {
          fontWeight: 600,
          color: '#3B71FE',
        },
      },
    },
    '&>div:nth-of-type(2)': {
      '&>img': {
        width: '52px',
        height: '52px',
        borderRadius: '50%',
      },
      '&>button': {
        boxSizing: 'border-box',
        width: '100px',
        height: '43px',
        padding: '10px 0',
        background: '#EBF1FF',
        border: '1px solid #3B71FE',
        borderRadius: '100px',
        fontWeight: 500,
        fontSize: '18px',
        color: '#3B71FE',
      },
    },
  },
  '@media (max-width: 740px)': {
    container_header: {
      position: 'fixed',
      zIndex: 1300,
      top: 0,
      left: 0,
      right: 0,
      height: 86,
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: '0.4s',
      boxSizing: 'border-box',
      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.08)',

      '&>div:nth-of-type(1)': {
        display: 'flex',
        width: '100%',
        alignItems: 'center',

        '&>span:nth-of-type(1)': {
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
            width: '152.8px',
            height: '54px',
            marginRight: '1rem',
          },
        },
        '&>ul:nth-of-type(1)': {
          display: 'none',
          alignItems: 'center',
          listStyle: 'none',
          justifyContent: 'space-between',
          '&>li': {
            fontWeight: 500,
            fontSize: '18px',
            display: 'flex',
            cursor: 'pointer',
            marginRight: '2rem',
          },
          '&>li:hover': {
            fontWeight: 600,
            color: '#3B71FE',
          },
        },
      },
      '&>div:nth-of-type(2)': {
        '&>img': {
          width: '52px',
          height: '52px',
          borderRadius: '50%',
        },
        '&>button': {
          boxSizing: 'border-box',
          width: '100px',
          height: '43px',
          padding: '10px 0',
          background: '#EBF1FF',
          border: '1px solid #3B71FE',
          borderRadius: '100px',
          fontWeight: 500,
          fontSize: '18px',
          color: '#3B71FE',
        },
      },
    },
  },
})

const Header = () => {
  const classes = useStyles()
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const userInfo = useAppSelector(selectUserInfo)
  console.log('info', userInfo)
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  useEffect(() => {
    dispatch(userAction.getInfo())
  }, [dispatch])
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    })
  }, [])
  console.log(userInfo?.socialPhoto)
  return (
    <div
      className={classes.container_header}
      style={{background: scroll ? 'white' : 'white'}}
    >
      <div>
        {/* <div>
          <MenuIcon />
        </div> */}
        <span onClick={() => navigate('/')}>
          <img src={logo} alt='' />
        </span>

        <ul>
          <li
            style={
              location.pathname === '/'
                ? {
                    fontWeight: 600,
                    color: '#3B71FE',
                  }
                : {fontWeight: 500}
            }
            onClick={() => navigate(ROUTE.HOME)}
          >
            유튜브 키워드 조회
          </li>
          <li
            style={
              location.pathname === ROUTE.DOWNLOAD
                ? {
                    fontWeight: 600,
                    color: '#3B71FE',
                  }
                : {fontWeight: 500}
            }
            onClick={() => navigate(ROUTE.DOWNLOAD)}
          >
            유튜브 다운로드
          </li>
          <li
            style={
              location.pathname === ROUTE.KEYWORD
                ? {
                    fontWeight: 600,
                    color: '#3B71FE',
                  }
                : {fontWeight: 500}
            }
            onClick={() => navigate(ROUTE.KEYWORD)}
          >
            검색 키워드 분석
          </li>
          <li
            style={
              location.pathname === ROUTE.CUSTOMER_SUPPORT
                ? {
                    fontWeight: 600,
                    color: '#3B71FE',
                  }
                : {fontWeight: 500}
            }
            onClick={() => navigate(ROUTE.CUSTOMER_SUPPORT)}
          >
            고객센터
          </li>
        </ul>
      </div>
      <div>
        {localStorage.getItem('accessToken') &&
        userInfo &&
        userInfo?.socialPhoto ? (
          <img src={userInfo.socialPhoto} alt='' />
        ) : (
          <button onClick={() => navigate('/login')}>로그인</button>
        )}
      </div>
    </div>
  )
}

export default Header
