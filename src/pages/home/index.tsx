import VolumeOffIcon from '@material-ui/icons/VolumeOff'
import VolumeUpIcon from '@material-ui/icons/VolumeUp'
import {makeStyles} from '@material-ui/styles'
import axios from 'axios'
import {useEffect, useRef, useState} from 'react'
import {PORTFOLIO} from '../../apis/urlConfig'
import users from '../../asset/images/users.png'
import CardService from '../../components/card_service'
import CardStrength from '../../components/card_strength'
import CardSuccessCase from '../../components/card_success_case'
import {BASE_URL, LIST_DATA_SERVICE, LIST_DATA_STRENGTH} from '../../constants'
import {PortfolioType} from '../../types/portfolio.type'
import {isMobile} from 'react-device-detect'
import backgroundVideo from '../../asset/images/background_video.jpg'

const useStyles = makeStyles({
  home_container: {
    '&>div:nth-child(1)': {
      // background: `url(${background})`,
      backgroundSize: 'cover',
      position: 'relative',
      height: '100vh',
      '&>video': {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        objectFit: 'cover',
        height: '100vh',
      },
      '&>span': {
        position: 'absolute',
        bottom: '1rem',
        // left: 0,
        borderRadius: '50%',
        right: '1rem',
        // background: 'black',
        zIndex: 1000,
      },
      '&>div:nth-child(1)': {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '160px 130px 40px 130px',
        position: 'relative',
        zIndex: 1000,
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
            cursor: 'pointer',
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
        zIndex: 200,
      },
      '&>div:nth-child(3)': {
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
      paddingTop: '4rem',
      background: '#F9FAFB',
      paddingBottom: '80px',
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
      },
    },
    '&>div:nth-child(3)': {
      padding: '0 120px 60px 120px',
      display: 'flex',
      boxSizing: 'border-box',
      background: '#F9FAFB',
    },
    '&>div:nth-child(4)': {
      background: 'white',
      marginTop: '60px',
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
        paddingBottom: '30px',
      },
    },
    '&>div:nth-child(5)': {
      padding: '0 180px',
      paddingBottom: '4rem',
      display: 'flex',
      flexWrap: 'wrap',
      boxSizing: 'border-box',
      justifyContent: 'space-between',
    },
    '&>div:nth-child(6)': {
      // boxSizing: 'border-box',
      // height: '673px',
      // background: `url(${backgroundWord})`,
      // backgroundSize: 'cover',
      // padding: '0 130px',
      // display: 'flex',
      // margin: '60px 0 0 0',
      // justifyContent: 'space-between',
      // alignItems: 'center',
      '&>div:nth-child(1)': {
        width: '35%',
        '&>p:nth-child(1)': {
          fontFamily: 'Anton',
          fontWeight: '400',
          fontSize: '20px',
          lineHeight: '30px',
          background: 'linear-gradient(180deg, #2E88FF 0%, #004EC7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          margin: 0,
        },
        '&>p:nth-child(2)': {
          width: '75px',
          height: '10px',
          margin: 0,
          background:
            'linear-gradient(0deg, #CFCFCF 14.36%, rgba(217, 217, 217, 0) 100%)',
          filter: 'blur(2px)',
        },
        '&>p:nth-child(3)': {
          fontWeight: 700,
          fontSize: '32px',
          lineHeight: '48px',
          display: 'flex',
          alignItems: 'center',
          color: '#000000',
          margin: '16px 0',
        },
        '&>p:nth-child(4)': {
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '20px',
          lineHeight: '160%',
          display: 'flex',
          alignItems: 'center',
          color: '#1F2937',
        },
      },
      '&>div:nth-child(2)': {
        height: '100%',
        width: '60%',
        background: `url(${users})`,
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    '&>div:nth-child(7)': {
      background: '#EDF2FF',
      padding: '60px 130px 80px 130px',
      '&>div:nth-child(1)': {
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
          marginBottom: '2rem',
        },
      },
      '&>div:nth-child(2)': {
        display: 'flex',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
      },
    },
  },
  '@media (max-width: 740px)': {
    home_container: {
      '&>div:nth-child(1)': {
        height: '40vh',
        '&>video': {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '40vh',
          width: '100%',
          objectFit: 'cover',
        },
        '&>span': {
          position: 'absolute',
          bottom: '1rem',
          // left: 0,
          borderRadius: '50%',
          right: '1rem',
          // background: 'black',
          zIndex: 1000,
        },
        '&>div:nth-child(1)': {
          display: 'inherit',
          padding: '64px 32px',
          '&>div:nth-child(1)': {
            width: '100%',
            '&>p:nth-child(1)': {
              fontWeight: 700,
              fontSize: '28px',
              lineHeight: '42px',
              color: '#FFFFFF',
              textAlign: 'center',
            },
            '&>p:nth-child(2)': {
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: '24px',
              textAlign: 'center',
              color: '#FFFFFF',
            },
            '&>span:nth-child(3)': {
              width: '152px',
              height: '40px',
              margin: '0 auto',
              fontSize: '14px',
              padding: '0 0.5rem',
              boxSizing: 'border-box',
              '&>img': {
                width: '28px',
                height: '28px',
                margin: 0,
              },
            },
          },
          '&>div:nth-child(2)': {
            width: '100%',
          },
        },
        '&>:nth-child(2)': {
          display: 'none',
        },
        '&>div:nth-child(3)': {
          '&>div': {
            '&>p': {
              fontFamily: 'Anton',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '24px',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              color: '#000000',
              marginBottom: '10px',
              marginTop: '0px',
            },
            '&>span': {
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '21px',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              color: '#1F2937',
            },
          },
        },
      },
      '&>div:nth-child(2)': {
        padding: '30px 0 16px 0',
        '&>p:nth-child(3)': {
          fontWeight: 700,
          fontSize: '28px',
          lineHeight: '130%',
          textAlign: 'center',
          color: '#000000',
          margin: '10px',
          display: 'flex',
          justifyContent: 'center',
        },
        '&>p:nth-child(4)': {
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '24px',
          textAlign: 'center',
          color: '#4B5563',
          margin: 0,
          display: 'flex',
          justifyContent: 'center',
        },
      },
      '&>div:nth-child(3)': {flexWrap: 'wrap', padding: '0 16px 16px 16px'},
      '&>div:nth-child(4)': {
        padding: '0 16px',
        '&>p:nth-child(3)': {
          fontWeight: 700,
          fontSize: '28px',
          lineHeight: '130%',
          textAlign: 'center',
          color: '#000000',
          margin: '10px',
          display: 'flex',
          justifyContent: 'center',
        },
        '&>p:nth-child(4)': {
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '24px',
          textAlign: 'center',
          color: '#4B5563',
          margin: 0,
          display: 'flex',
          justifyContent: 'center',
        },
      },
      '&>div:nth-child(5)': {
        display: 'wrap',
        padding: '0 16px',
        paddingBottom: '4rem',
      },
      '&>div:nth-child(6)': {
        // boxSizing: 'border-box',
        // height: '673px',
        // background: `url(${backgroundWord})`,
        // backgroundSize: 'cover',
        // padding: '16px 16px 0 16px',
        // display: 'inherit',
        // margin: '60px 0 0 0',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        '&>div:nth-child(1)': {
          width: '100%',
          '&>p:nth-child(1)': {
            fontFamily: 'Anton',
            fontWeight: '400',
            fontSize: '20px',
            lineHeight: '30px',
            background: 'linear-gradient(180deg, #2E88FF 0%, #004EC7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            margin: 0,
            textAlign: 'center',
          },
          '&>p:nth-child(2)': {
            width: '75px',
            height: '10px',
            margin: '0 auto',
            background:
              'linear-gradient(0deg, #CFCFCF 14.36%, rgba(217, 217, 217, 0) 100%)',
            filter: 'blur(2px)',
          },
          '&>p:nth-child(3)': {
            fontWeight: 700,
            fontSize: '28px',
            lineHeight: '130%',
            textAlign: 'center',
            color: '#000000',
            margin: '10px',
            display: 'flex',
            justifyContent: 'center',
          },
          '&>p:nth-child(4)': {
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
            textAlign: 'center',
            color: '#4B5563',
            margin: 0,
            display: 'flex',
            justifyContent: 'center',
          },
        },
        '&>div:nth-child(2)': {
          height: '380px',
          width: '100%',
          background: `url(${users})`,
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
      '&>div:nth-child(7)': {
        display: 'wrap',
        padding: '1rem 16px',
        '&>div:nth-child(1)': {
          '&>p:nth-child(1)': {
            fontFamily: 'Anton',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '21px',
            textAlign: 'center',
            background: 'linear-gradient(180deg, #2E88FF 0%, #004EC7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            margin: '0',
          },
          '&>p:nth-child(2)': {
            width: '80px',
            height: '5px',
            margin: '0 auto',
            background:
              'linear-gradient(0deg, #CFCFCF 14.36%, rgba(217, 217, 217, 0) 100%)',
            filter: 'blur(2px)',
          },
          '&>p:nth-child(3)': {
            fontWeight: 700,
            fontSize: '28px',
            lineHeight: '42px',
            textAlign: 'center',
            color: '#000000',
            margin: '10px',
          },
          '&>p:nth-child(4)': {
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
            textAlign: 'center',
            color: '#4B5563',
            margin: 0,
            marginBottom: '1rem',
          },
        },
        '&>div:nth-child(2)': {
          display: 'flex',
          flexWrap: 'wrap',
          boxSizing: 'border-box',
        },
      },
    },
  },

  '@media (min-width: 740px) and (max-width: 1024px)': {
    home_container: {
      '&>div:nth-child(1)': {
        backgroundSize: 'cover',
        position: 'relative',
        height: '100vh',
        '&>video': {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          objectFit: 'cover',
          height: '100vh',
        },
        '&>span': {
          position: 'absolute',
          bottom: '1rem',
          borderRadius: '50%',
          right: '1rem',
          zIndex: 1000,
        },
        '&>div:nth-child(1)': {
          display: 'flex',
          justifyContent: 'space-between',
          padding: '160px 130px 40px 130px',
          position: 'relative',
          zIndex: 1000,
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
              cursor: 'pointer',
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
          zIndex: 200,
        },
        '&>div:nth-child(3)': {
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
        paddingTop: '4rem',
        background: '#F9FAFB',
        paddingBottom: '80px',
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
          fontSize: '30px',
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
        },
      },
      '&>div:nth-child(3)': {
        padding: '0 60px 60px 60px',
        display: 'flex',
        boxSizing: 'border-box',
        background: '#F9FAFB',
        flexWrap: 'wrap',
      },
      '&>div:nth-child(4)': {
        background: 'white',
        marginTop: '60px',
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
          fontSize: '30px',
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
          paddingBottom: '30px',
        },
      },
      '&>div:nth-child(5)': {
        padding: '0 60px',
        paddingBottom: '4rem',
        display: 'flex',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        justifyContent: 'space-between',
      },
      '&>div:nth-child(6)': {
        // boxSizing: 'border-box',
        // height: '673px',
        // background: `url(${backgroundWord})`,
        // backgroundSize: 'cover',
        // padding: '0 130px',
        // display: 'flex',
        // margin: '60px 0 0 0',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        '&>div:nth-child(1)': {
          width: '35%',
          '&>p:nth-child(1)': {
            fontFamily: 'Anton',
            fontWeight: '400',
            fontSize: '20px',
            lineHeight: '30px',
            background: 'linear-gradient(180deg, #2E88FF 0%, #004EC7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            margin: 0,
          },
          '&>p:nth-child(2)': {
            width: '75px',
            height: '10px',
            margin: 0,
            background:
              'linear-gradient(0deg, #CFCFCF 14.36%, rgba(217, 217, 217, 0) 100%)',
            filter: 'blur(2px)',
          },
          '&>p:nth-child(3)': {
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: '48px',
            display: 'flex',
            alignItems: 'center',
            color: '#000000',
            margin: '16px 0',
          },
          '&>p:nth-child(4)': {
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '20px',
            lineHeight: '160%',
            display: 'flex',
            alignItems: 'center',
            color: '#1F2937',
          },
        },
        '&>div:nth-child(2)': {
          height: '100%',
          width: '60%',
          background: `url(${users})`,
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
      '&>div:nth-child(7)': {
        background: '#EDF2FF',
        padding: '60px 60px 80px 60px',
        '&>div:nth-child(1)': {
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
            fontSize: '30px',
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
            marginBottom: '2rem',
          },
        },
        '&>div:nth-child(2)': {
          display: 'flex',
          flexWrap: 'wrap',
          boxSizing: 'border-box',
        },
      },
    },
  },
})

const Home = () => {
  let classes: any = useStyles()
  const vidRef = useRef<HTMLVideoElement>(null)
  const [listPortfolio, setListPortfolio] = useState<PortfolioType[]>([])
  const [muted, setMuted] = useState<boolean>(true)
  useEffect(() => {
    const getListPortfolio = async () => {
      const data = await axios.get(`${BASE_URL}${PORTFOLIO}`, {
        params: {sort: 'DESC'},
      })
      if (data.data.code === 0) {
        setListPortfolio([...data.data.data.listPortfolios])
      } else console.log(111, data)
    }
    getListPortfolio()
  }, [])
  return (
    <div className={classes.home_container}>
      <div>
        <div>
          <div></div>
          <div>
            <img src='' alt='' loading='lazy' />
          </div>
        </div>
        <div></div>
        <div></div>
        <video
          ref={vidRef}
          autoPlay={true}
          loop
          id='myVideo'
          controls={isMobile ? true : false}
          muted={muted}
          poster={backgroundVideo}
        >
          <source src='/videos/background.mp4' type='video/mp4' />
        </video>
        {!isMobile && (
          <span onClick={() => setMuted(!muted)}>
            {muted ? (
              <VolumeOffIcon style={{color: 'white', background: 'black'}} />
            ) : (
              <VolumeUpIcon style={{color: 'white', background: 'black'}} />
            )}
          </span>
        )}
      </div>
      <div>
        <p>Our Services</p>
        <p></p>
        <p>어떤게 필요하세요?</p>
        <p>견적을 통해 기능과 필수요소 및 견적을 계산해보세요.</p>
      </div>
      <div>
        {LIST_DATA_SERVICE.map((item) => {
          return <CardService {...item} />
        })}
      </div>
      <div>
        <p>Strengths</p>
        <p></p>
        <p>지엠포컴퍼니의 강점</p>
        <p>전문성과 프로젝트의 완성을 위해 최선을 다 하겠습니다.</p>
      </div>
      <div>
        {LIST_DATA_STRENGTH.map((item) => {
          return <CardStrength {...item} />
        })}
      </div>
      <div>
        {/* <div>
          <p>Welcome</p>
          <p></p>
          <p>고객이 우리에 대해 뭐라고 말합니까?</p>
          <p>
            우리의 고객은 전 세계에서 왔으며 이것이 그들이 우리와 함께 일할 때
            느끼는 것입니다
          </p>
        </div>
        <div>
          <Slideshow />
        </div> */}
      </div>
      <div>
        <div>
          <p>Success Case</p>
          <p></p>
          <p>포트폴리오를 안내해드립니다.</p>
          <p>산업, 분야 및 주제가 다양해졌습니다.</p>
        </div>
        <div>
          {listPortfolio.map((item) => (
            <CardSuccessCase data={item} key={item.portfolio_id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
