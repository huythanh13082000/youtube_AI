import {GoogleAuthProvider, signInWithPopup} from '@firebase/auth'
import {makeStyles} from '@material-ui/core/styles'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import axiosClient from '../../apis/axiosClient'
import {LOGIN_SOCIAL} from '../../apis/urlConfig'
import google from '../../asset/images/google.png'
import kakao from '../../asset/images/kakao.png'
import naver from '../../asset/images/naver.png'
import {BASE_URL} from '../../constants'
import {userAction} from '../../feature/user/user.slice'
import {auth} from '../../firebaseConfig'
import {ROUTE} from '../../router/routes'
import {setTokens} from '../../utils'

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

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const providerGoogle = new GoogleAuthProvider()

  const signInGoogle = async (provider: 'google' | 'naver' | 'kakao') => {
    await signInWithPopup(auth, providerGoogle)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        const user = result.user
        console.log(123123, token)
        if (token) {
          const tokens = await axiosClient.post(BASE_URL + LOGIN_SOCIAL, {
            accessToken: token,
            provider,
          })
          if (tokens) {
            setTokens(tokens.data)
            dispatch(userAction.getInfo())
            navigate(ROUTE.HOME)
          }
        }
        // if (user.providerData[0].email && user.providerData[0].photoURL) {
        //   dispatch(
        //     authActions.loginSns({
        //       loginType: LOGIN_TYPE.GOOGLE,
        //       snsLoginId: user.providerData[0].uid,
        //       snsEmail: user.providerData[0].email,
        //       photoURL: user.providerData[0].photoURL,
        //       history: navigate,
        //     })
        //   )
        // }
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)

        // ...
      })
  }
  return (
    <div className={classes.login_container}>
      <div>
        <p>로그인</p>
        <p onClick={() => {}}>
          <img src={naver} alt='' /> 네이버로 로그인
        </p>
        <p onClick={() => {}}>
          <img src={kakao} alt='' />
          카카오로 로그인
        </p>
        <p onClick={() => signInGoogle('google')}>
          <img src={google} alt='' />
          구글로 로그인
        </p>
      </div>
    </div>
  )
}

export default Login
