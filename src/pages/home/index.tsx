import {makeStyles} from '@material-ui/styles'

import background from '../../asset/images/home-background.png'
import homeCircleTopRight from '../../asset/images/home-circle-top-right.png'
import homeRobot from '../../asset/images/home-robot.png'
import homeScrollDown from '../../asset/images/home-scroll-down.png'
import CardService from '../../components/card_service'

const useStyles = makeStyles({
  home_container: {
    '&>div:nth-child(1)': {
      background: `url(${background})`,
      backgroundSize: 'cover',
      position: 'relative',
      '&>div:nth-child(1)': {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '40px 130px',
        '&>div:nth-child(1)': {
          width: '40%',
          '&>p:nth-child(1)': {
            fontWeight: 700,
            fontSize: '44px',
            lineHeight: '66px',
            color: '#FFFFFF',
          },
          '&>p:nth-child(2)': {
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '160%',
            display: 'flex',
            alignItems: 'center',
            color: '#FFFFFF',
          },
          '&>span': {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0px',
            gap: '24px',
            width: '230px',
            height: '64px',
            background: 'linear-gradient(180deg, #0DC074 0%, #0EADC3 100%)',
            border: '1px solid #FFFFFF',
            boxShadow: '-16px 22px 42px rgba(4, 80, 193, 0.8)',
            borderRadius: '100px',
            color: '#FFFFFF',
            fontWeight: 500,
            fontSize: '20px',
            '&>img': {
              width: '36px',
              height: '36px',
            },
          },
        },
        '&>div:nth-child(2)': {
          width: '60%',
          '&>img': {
            width: '100%',
          },
        },
      },
      '&>:nth-child(2)': {
        width: '62px',
        height: '78px',
        position: 'absolute',
        bottom: 110,
        left: 'calc(50% - 31px)',
      },
      '&>div:nth-child(3)': {
        boxSizing: 'border-box',
        padding: '32px 120px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
        width: 'calc(100% - 240px)',
        background: '#FFFFFF',
        boxShadow: '0px 4px 30px rgba(78, 78, 78, 0.2)',
        borderRadius: '24px',
        position: 'absolute',
        bottom: '-80px',
        left: '120px',
        '&>div': {
          '&>p': {
            fontFamily: 'Anton',
            fontWeight: 400,
            fontSize: '44px',
            lineHeight: '66px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            color: '#000000',
            marginBottom: '10px',
            marginTop: '0px',
          },
          '&>span': {
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '27px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            color: '#1F2937',
          },
        },
      },
    },
    '&>div:nth-child(2)': {
      marginTop: '150px',
      '&>p:nth-child(1)': {
        fontFamily: 'Anton',
        fontWeight: '400',
        fontSize: '20px',
        lineHeight: '30px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #2E88FF 0%, #004EC7 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        margin: '0',
      },
      '&>p:nth-child(2)': {
        width: '106px',
        height: '10px',
        margin: '0 auto',
        background:
          'linear-gradient(0deg, #CFCFCF 14.36%, rgba(217, 217, 217, 0) 100%)',
        filter: 'blur(2px)',
      },
      '&>p:nth-child(3)': {
        fontWeight: 700,
        fontSize: '44px',
        lineHeight: '66px',
        textAlign: 'center',
        color: '#000000',
        margin: '10px',
      },
      '&>p:nth-child(4)': {
        fontWeight: 500,
        fontSize: '20px',
        lineHeight: '30px',
        textAlign: 'center',
        color: '#4B5563',
        margin: 0,
        marginBottom: '30px',
      },
    },
    '&>div:nth-child(3)': {
      padding: '0 120px',
      display: 'flex',
      boxSizing: 'border-box',
    },
    '&>div:nth-child(4)': {
      background: 'black',
    },
  },
})

const Home = () => {
  const classes = useStyles()
  return (
    <div className={classes.home_container}>
      <div>
        <div>
          <div>
            <p>세계 최고 기술기업 목표 달성</p>
            <p>
              기술과 더불어 다양한 분야 및 산업에 개발 연구하는 기업
              지엠포컴퍼니 입니다.
            </p>
            <span>
              Explore Now <img src={homeCircleTopRight} alt='' />
            </span>
          </div>
          <div>
            <img src={homeRobot} alt='' />
          </div>
        </div>
        <img src={homeScrollDown} alt='' />
        <div>
          <div>
            <p>4+</p>
            <span>경험의 해 </span>
          </div>
          <div>
            <p>99+</p>
            <span>파트너 </span>
          </div>
          <div>
            <p>2,9k</p>
            <span>작업 완료 </span>
          </div>
          <div>
            <p>1,2k</p>
            <span>고객 </span>
          </div>
        </div>
      </div>
      <div>
        <p>Our Services</p>
        <p></p>
        <p>뭐가 필요하세요?</p>
        <p>쉬우면서도 딱 맞는 기능과 감각적인 디자인</p>
      </div>
      <div>
        <CardService />
        <CardService />
        <CardService />
        <CardService />
      </div>
    </div>
  )
}

export default Home
