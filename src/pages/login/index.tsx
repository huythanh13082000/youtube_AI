import {makeStyles} from '@material-ui/core/styles'
import React from 'react'
import naver from '../../asset/images/naver.png'
import kakao from '../../asset/images/kakao.png'
import google from '../../asset/images/google.png'
import axiosClient from '../../apis/axiosClient'
import {
  CALLBACK_GOOGLE,
  CALLBACK_KAKAO,
  CALLBACK_NAVER,
  LOGIN_GOOGLE,
  LOGIN_KAKAO,
  LOGIN_NAVER,
} from '../../apis/urlConfig'
import {BASE_URL} from '../../constants'

const useStyles = makeStyles({
  login_container: {
    height: 'calc(100vh - 86px - 139px)',
    width: '100%',
    background: '#F1F1F1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&>div': {
      padding: '2rem',
      background: 'white',
      width: '535px',
      borderRadius: '16px',
      '&>p:nth-of-type(1)': {
        textAlign: 'center',
        fontWeight: 700,
        fontSize: '28px',
        background: 'white',
      },
      '&>p': {
        fontWeight: 400,
        fontSize: '20px',
        display: 'flex',
        alignItems: 'center',
        background: '#F1F1F1',
        padding: '10px 32px',
        borderRadius: '8px',
        justifyContent: 'center',
        '&>img': {
          width: '44px',
          height: '44px',
          marginRight: '1rem',
        },
      },
    },
  },
})

const Login = () => {
  const classes = useStyles()
  const fetchAuthUser = async (type: string) => {
    const response = await axiosClient
      .get(`${BASE_URL}${type}`, {withCredentials: true})
      .catch((err) => {
        console.log('Not properly authenticated')
        // dispatch(setIsAuthenticated(false));
        // dispatch(setAuthUser(null));
        // history.push("/login/error");
      })

    if (response && response.data) {
      console.log('User: ', response.data)
      // dispatch(setIsAuthenticated(true));
      // dispatch(setAuthUser(response.data));
      // history.push("/welcome");
    }
  }

  const redirectToSns = async (type: string) => {
    let timer: NodeJS.Timeout | null = null
    const googleLoginURL = `${BASE_URL}${type}`
    const newWindow = window.open(
      googleLoginURL,
      '_blank',
      'width=500,height=600'
    )

    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log("Yay we're authenticated")
          fetchAuthUser(
            type === LOGIN_GOOGLE
              ? CALLBACK_GOOGLE
              : type === LOGIN_KAKAO
              ? CALLBACK_KAKAO
              : CALLBACK_NAVER
          )
          if (timer) clearInterval(timer)
        }
      }, 500)
    }
  }
  return (
    <div className={classes.login_container}>
      <div>
        <p>로그인</p>
        <p onClick={() => redirectToSns(LOGIN_NAVER)}>
          <img src={naver} alt='' /> 네이버로 로그인
        </p>
        <p onClick={() => redirectToSns(LOGIN_KAKAO)}>
          <img src={kakao} alt='' />
          카카오로 로그인
        </p>
        <p onClick={() => redirectToSns(LOGIN_GOOGLE)}>
          <img src={google} alt='' />
          구글로 로그인
        </p>
      </div>
    </div>
  )
}

export default Login
