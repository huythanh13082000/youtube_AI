import {Button} from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import youtubeIcon from '../../asset/icons/ant-design_youtube-outlined.png'
import commentIcon from '../../asset/icons/coment.svg'
import likeIcon from '../../asset/icons/like.svg'
import CustomChart from '../../components/custom_chart'

const useStyles = makeStyles({
  analytics_detail_container: {
    padding: '1rem 200px',
    background: '#F1F1F1',
    '&>p:nth-of-type(1)': {
      display: 'flex',
      alignItems: 'center',
      color: '#777E90',
      '&>span': {
        color: 'black',
      },
    },
    '&>div:nth-of-type(1)': {
      background: 'white',
      padding: '1rem',
      boxShadow: '0px 2px 16px rgba(113, 128, 150, 0.12)',
      borderRadius: '4px',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'space-between',

      '&>div:nth-of-type(1)': {
        width: 'calc(60% - 1.5rem)',
        '&>p:nth-of-type(1)': {
          fontWeight: 700,
          fontSize: '24px',
        },
        '&>p:nth-of-type(2)': {
          color: '#353945',
          display: 'flex',
          alignItems: 'center',
          '&>img': {
            marginRight: '0.5rem',
          },
          '&>img:nth-of-type(2)': {
            marginLeft: '2rem',
          },
        },
        '&>div:nth-of-type(1)': {
          display: 'flex',
          justifyContent: 'space-between',

          '&>div': {
            background: '#F8F8F8',
            width: 'calc(100%/3 - 0.5rem)',
            boxSizing: 'border-box',
            padding: '0.2rem 1rem',
            borderRadius: '4px',

            '&>p:nth-of-type(1)': {
              fontSize: '18px',
              color: '#777E91',
            },
            '&>p:nth-of-type(2)': {
              color: '#141416',
              fontWeight: 700,
              fontSize: '24px',
            },
          },
          '&>div:nth-of-type(3)': {
            marginRight: 0,
          },
        },
      },
    },
    '&>div:nth-of-type(2)': {
      background: 'white',
      padding: '1rem',
      width: '100%',
      border: '0.5px solid #B1B5C4',
      borderRadius: '4px',
      marginTop: '1rem',
      boxSizing: 'border-box',
    },
    '&>div:nth-of-type(3)': {
      margin: '1rem 0',
      display: 'flex',
      justifyContent: 'space-between',
      '&>div:nth-of-type(1)': {
        width: '40%',
        background: 'white',
        borderRadius: '4px',
        border: '0.5px solid #B1B5C4',
        boxSizing: 'border-box',

        '&>div:nth-of-type(1)': {
          padding: '1rem 20%',
        },
        '&>div:nth-of-type(2)': {
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2rem',
          '&>div:nth-of-type(1)': {
            width: '17px',
            height: '17px',
            background: '#FF6492',
            borderRadius: '50%',
            marginRight: '0.5rem',
          },
          '&>div:nth-of-type(2)': {
            width: '17px',
            height: '17px',
            background: '#6473FF',
            borderRadius: '50%',
            margin: '0 0.5rem 0 2rem',
          },
          '&>span': {
            color: '#777E91',
            marginRight: '0.5rem',
          },
        },
      },
      '&>div:nth-of-type(2)': {
        width: 'calc(60% - 1rem)',
        background: 'white',
        border: '0.5px solid #B1B5C4',
        borderRadius: '4px',
        boxSizing: 'border-box',

        '&>div:nth-of-type(1)': {
          display: 'flex',
          justifyContent: 'start',
          marginBottom: '2rem',
          paddingLeft: '1rem',
          '&>div:nth-of-type(1)': {
            width: '17px',
            height: '17px',
            background: '#FF6492',
            borderRadius: '50%',
            marginRight: '0.5rem',
          },
          '&>div:nth-of-type(2)': {
            width: '17px',
            height: '17px',
            background: '#6473FF',
            borderRadius: '50%',
            margin: '0 0.5rem 0 2rem',
          },
          '&>span': {
            color: '#777E91',
            marginRight: '0.5rem',
          },
        },
        '&>div:nth-of-type(2)': {
          padding: '0 2rem',
        },
      },
    },
    '&>div:nth-of-type(4)': {
      margin: '1rem 0',
      display: 'flex',
      justifyContent: 'space-between',
      '&>div:nth-of-type(1)': {
        boxSizing: 'border-box',
        background: 'white',
        width: '40%',
        border: '0.5px solid #B1B5C4',
        borderRadius: '4px',
        '&>div:nth-of-type(1)': {
          paddingLeft: '1rem',
          '&>p': {
            color: '#353945',
            fontWeight: 400,
            fontSize: '16px',
          },
        },
      },
      '&>div:nth-of-type(2)': {
        width: 'calc(60% - 1rem)',
        background: 'white',
        border: '0.5px solid #B1B5C4',
        borderRadius: '4px',
        boxSizing: 'border-box',
        '&>div': {
          display: 'flex',
          padding: '1rem 5%',
          paddingBottom: '3rem',
          boxSizing: 'border-box',
          justifyContent: 'space-between',
          '&>div:nth-of-type(1)': {
            width: '40%',
            boxSizing: 'border-box',
          },
          '&>div:nth-of-type(2)': {
            width: '50%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            '&>div': {
              display: 'flex',
              justifyContent: 'space-between',
              width: '40%',
              '&>div': {
                display: 'flex',
                '&>div': {
                  width: '44px',
                  height: '22px',
                  background: '#FF584A',
                  borderRadius: '4px',
                  marginRight: '5px',
                },
                '&>span': {
                  color: '#777E91',
                  margin: '0 ',
                },
              },
            },
          },
        },
      },
    },
  },
  button_view: {
    fontSize: '16px',
    textTransform: 'none',
    border: '1px solid #CA1D00',
    color: '#CA1D00',
    marginTop: '1rem',
  },
  p_title: {
    fontWeight: 700,
    fontSize: '20px',
    borderBottom: '0.5px solid #B1B5C4',
    padding: '1rem',
    paddingTop: 0,
  },
})

const AnalyticsDetail = () => {
  const classes = useStyles()
  return (
    <div className={classes.analytics_detail_container}>
      <p>
        유튜브 키워드 조회 <ChevronRightIcon /> 영상 <ChevronRightIcon />
        <span>[R]S/S 세인트 포켓 가디건....</span>
      </p>
      <div>
        <iframe
          width='40%'
          src='https://www.youtube.com/embed/48o4CHtM5oE'
          title='NHÀ MA TẬP 65 |  CHÔN SỐNG - CHUYỆN MA TÂM LINH CÓ THẬT - MC DUY THUẬN | FULL 4K'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          // allowfullscreen
          style={{border: 'none'}}
        ></iframe>
        <div>
          <p>[R]S/S 세인트 포켓 가디건</p>
          <p>
            <img src={likeIcon} alt='' />
            1M 좋아요
            <img src={commentIcon} alt='' />
            1024 코멘트
          </p>
          <div>
            <div>
              <p>구독자</p>
              <p>1,233,232</p>
            </div>
            <div>
              <p>구독자</p>
              <p>1,233,232</p>
            </div>
            <div>
              <p>구독자</p>
              <p>1,233,232</p>
            </div>
          </div>
          <Button
            variant='outlined'
            color='secondary'
            fullWidth
            className={classes.button_view}
          >
            <img
              style={{width: '24px', height: '24px', marginRight: '0.5rem'}}
              src={youtubeIcon}
              alt=''
            />
            View on Youtube
          </Button>
        </div>
      </div>
      <div>
        <p className={classes.p_title}>조회수</p>
        <CustomChart type='Line' />
      </div>
      <div>
        <div>
          <p className={classes.p_title}>성별</p>
          <div>
            <CustomChart type='Doughnut' />
          </div>
          <div>
            <div></div>
            <span>여성</span> 32%
            <div></div>
            <span>인류 </span> 68%
          </div>
        </div>
        <div>
          <p className={classes.p_title}>연령 할당</p>
          <div>
            <div></div>
            <span>여성</span>
            <div></div>
            <span>인류 </span>
          </div>
          <div>
            <CustomChart type='Bar' />
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className={classes.p_title}>검색 키워드</p>
          <div>
            <p>1. 술꾼 도시 여자들</p>
            <p>2. 술꾼 도시 여자들</p>
            <p>3. 술꾼 도시 여자들</p>
            <p>4. 술꾼 도시 여자들</p>
            <p>4. 술꾼 도시 여자들</p>
            <p>6. 술꾼 도시 여자들</p>
          </div>
        </div>
        <div>
          <p className={classes.p_title}>검색 키워드</p>
          <div>
            <div>
              <CustomChart type='Pie' />
            </div>
            <div>
              <div>
                <div>
                  <div></div> <span>한국</span>
                </div>
                68%
              </div>
              <div>
                <div>
                  <div></div> <span>한국</span>
                </div>
                68%
              </div>
              <div>
                <div>
                  <div></div> <span>한국</span>
                </div>
                68%
              </div>
              <div>
                <div>
                  <div></div> <span>한국</span>
                </div>
                68%
              </div>
              <div>
                <div>
                  <div></div> <span>한국</span>
                </div>
                68%
              </div>
              <div>
                <div>
                  <div></div> <span>한국</span>
                </div>
                68%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsDetail
