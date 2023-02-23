import {Grid, makeStyles} from '@material-ui/core'

import iconInput from '../../asset/images/footer-circle.png'
import RoomIcon from '@material-ui/icons/Room'
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined'
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined'
import facebook from '../../asset/images/footer-facebook.png'
import linked from '../../asset/images/footer-linked.png'
import twitter from '../../asset/images/footer-twitter.png'
import instagram from '../../asset/images/footer-instagram.png'
import {useNavigate} from 'react-router-dom'

const useStyles = makeStyles({
  container_footer: {
    padding: '0 130px',
    marginTop: '3rem',
    backgroundColor: 'white',
    '&>:nth-child(1)': {
      borderBottom: '1px solid #9CA3AF',
      '&>div:nth-child(1)': {
        '&>p': {
          fontFamily: 'Anton',
          fontWeight: 400,
          fontSize: '32px',
          lineHeight: '48px',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(180deg, #0DC074 0%, #0EADC3 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          marginTop: 0,
        },
        '&>span': {
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '24px',
          display: 'inline-block',
          color: '#353945',
          marginBottom: '2rem',
        },
        '&>div': {
          position: 'relative',
          width: '90%',
          '&>input': {
            width: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '8px 8px 8px 26px',
            height: '49px',
            border: '1px solid #9CA3AF',
            borderRadius: '100px',
          },
          '&>img': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            gap: '10px',
            width: '33px',
            height: '33px',
            position: 'absolute',
            right: '0',
            top: -2,
          },
        },
      },
      '&>div:nth-child(2)': {
        '&>p': {
          marginTop: 0,
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '30px',
          display: 'flex',
          alignItems: 'center',
          color: '#4B5563',
        },
        '&>:nth-child(1)': {
          color: '#111827',
          fontWeight: 500,
          fontSize: '20px',
        },
      },
      '&>div:nth-child(3)': {
        '&>p': {
          marginTop: 0,
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '30px',
          display: 'flex',
          alignItems: 'center',
          color: '#4B5563',
        },
        '&>:nth-child(1)': {
          color: '#111827',
          fontWeight: 500,
          fontSize: '20px',
        },
      },
      '&>div:nth-child(4)': {
        '&>p': {
          marginTop: 0,
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '30px',
          display: 'flex',
          alignItems: 'center',
          color: '#4B5563',
        },
        '&>:nth-child(1)': {
          color: '#111827',
          fontWeight: 500,
          fontSize: '20px',
        },
      },
    },
    '&>:nth-child(2)': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 0',
      '&>a': {
        '&>img': {
          width: '24px',
          height: '24px',
          margin: '0 10px',
        },
      },
    },
  },
  '@media (max-width: 740px)': {
    container_footer: {
      padding: '0 16px',
      marginTop: '3rem',
      backgroundColor: 'white',
      '&>:nth-child(1)': {
        display: 'inherit',
        borderBottom: '1px solid #9CA3AF',
        '&>div:nth-child(1)': {
          maxWidth: '100%',
          '&>p': {
            fontFamily: 'Anton',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '36px',
            display: 'flex',
            alignItems: 'center',
            background: 'linear-gradient(180deg, #0DC074 0%, #0EADC3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            margin: '5px 0',
          },
          '&>span': {
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '21px',
            display: 'inline-block',
            color: '#353945',
            marginBottom: '1rem',
          },
          '&>div': {
            position: 'relative',
            width: '90%',

            '&>input': {
              width: '100%',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '8px 8px 8px 26px',
              height: '40px',
              border: '1px solid #9CA3AF',
              borderRadius: '100px',
            },
            '&>img': {
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px',
              gap: '10px',
              width: '33px',
              height: '33px',
              position: 'absolute',
              right: -5,
              top: -6,
            },
          },
        },
        '&>div:nth-child(2)': {
          maxWidth: '100%',
          '&>p': {
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '24px',
            display: 'flex',
            alignItems: 'center',
            color: '#4B5563',
            margin: '8px 0',
            '&>svg': {
              width: '20px',
            },
          },
          '&>:nth-child(1)': {
            color: '#111827',
            fontWeight: 500,
            fontSize: '16px',
            marginTop: '1.5rem',
          },
        },
        '&>div:nth-child(3)': {
          maxWidth: '100%',
          '&>p': {
            marginTop: 0,
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '24px',
            display: 'flex',
            alignItems: 'center',
            color: '#4B5563',
            margin: '8px 0',
          },
          '&>:nth-child(1)': {
            color: '#111827',
            fontWeight: 500,
            fontSize: '16px',
            marginTop: '1.5rem',
          },
        },
        '&>div:nth-child(4)': {
          maxWidth: '100%',
          '&>p': {
            marginTop: 0,
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '21px',
            display: 'flex',
            alignItems: 'center',
            color: '#4B5563',
            margin: '8px 0',
          },
          '&>:nth-child(1)': {
            color: '#111827',
            fontWeight: 500,
            fontSize: '16px',
            marginTop: '1.5rem',
          },
        },
      },
      '&>:nth-child(2)': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 0',
        '&>div': {
          '&>img': {
            width: '24px',
            height: '24px',
            margin: '0 10px',
          },
        },
        '&>p': {
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '21px',
          color: '#4B5563',
        },
      },
    },
  },
})

const Footer = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  return (
    <Grid className={classes.container_footer}>
      <Grid item xs={12} container>
        <Grid item xs={4}>
          <p onClick={() => navigate('/')}>Greenapp</p>
          <span>
            Similarly, a loan taken out to buy a car may be secured by the car.
            The duration of the loan.
          </span>
          <div>
            <input type='text' placeholder='Enter your email' />
            <img src={iconInput} alt='' />
          </div>
        </Grid>
        <Grid item xs={4}>
          <p>연락해주세요</p>
          <p>대표 이성훈</p>
          <p>사업자등록번호 326-81-00644</p>
          <p>
            <RoomIcon />
            서울 성동구 아차산로 17길 48 성수 SK V1 CENTER 1동 718-719
          </p>
          <p>
            <PhoneInTalkOutlinedIcon />
            010 - 1234 - 5678
          </p>
          <p>
            <MailOutlineOutlinedIcon />
            greenapp@naver.com
          </p>
        </Grid>
        <Grid item xs={2}>
          <p>연락해주세요</p>
          <p>메인</p>
          <p>포트폴리오</p>
          <p>자주묻는질문</p>
          <p>문의하기</p>
        </Grid>
        <Grid item xs={2}>
          <p>서비스 정책</p>
          <p>이용약관</p>
          <p>개인정보보호정책 </p>
        </Grid>
      </Grid>
      <div>
        <p>Copyright© 2022 GREENAPP. All rights reserved</p>
        <a
          href='https://www.youtube.com/@gm4company102'
          target='_blank'
          rel='noreferrer'
        >
          <img src={facebook} alt='facebook' />
          <img src={linked} alt='linked' />
          <img src={twitter} alt='twitter' />
          <img src={instagram} alt='instagram' />
        </a>
      </div>
    </Grid>
  )
}

export default Footer
