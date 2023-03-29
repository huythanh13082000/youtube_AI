import {makeStyles} from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import InputSearch from '../../components/input_search'
import background from '../../asset/images/background_download.png'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import TableCustom from '../../components/table/tableCustom'
import {COLUMN_TABLE_DOWNLOAD} from '../../constants/column'
import {LINK_INFORMATION_VIDEO} from '../../apis/urlConfig'
import axiosClient from '../../apis/axiosClient'
import {
  InformationVideoFormatsType,
  InformationVideoType,
} from '../../types/informationVideo.type'
import moment from 'moment'

const useStyles = makeStyles({
  download_container: {
    background: '#F1F1F1',
    minHeight: 'calc(100vh - 86px - 139px)',
    '&>div:nth-of-type(1)': {
      backgroundImage: `url("${background}")`,
      height: '282px',
      textAlign: 'center',
      padding: '60px 0',
      boxSizing: 'border-box',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      '&>p:nth-of-type(1)': {
        fontWeight: 700,
        fontSize: '28px',
        width: '560px',
        margin: '0 auto',
        marginBottom: '1rem',
      },
      '&>p:nth-of-type(2)': {
        fontWeight: 400,
        fontSize: '16px',
        color: '#353945',
        width: '530px',
        margin: '0 auto',
        marginBottom: '1.5rem',
      },
    },
    '&>div:nth-of-type(2)': {
      '&>p:nth-of-type(1)': {
        textAlign: 'center',
        fontWeight: 500,
        fontSize: '24px',
      },
      '&>p:nth-of-type(2)': {
        textAlign: 'center',
        fontWeight: 400,
        fontSize: '18px',
        width: '866px',
        margin: '0 auto',
        color: '#353945',
      },
      '&>div': {
        width: '1144px',
        minHeight: '516px',
        margin: 'auto',
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        '&>div:nth-of-type(1)': {
          width: '446px',
          padding: '16px 16px 20px',
          boxSizing: 'border-box',
          background: 'white',
          borderRadius: '12px',
          height: '370px',
          '&>img': {
            width: '100%',
            borderRadius: '4px',
            height: '237px',
            objectFit: 'cover',
          },
          '&>p:nth-of-type(1)': {
            fontSize: '20px',
            margin: '8px 0',
          },
          '&>p:nth-of-type(2)': {
            fontSize: '20px',
            margin: 0,
          },
        },
        '&>div:nth-of-type(2)': {
          width: '678px',
          '&>div:nth-of-type(1)': {
            background: '#E6E8EC',
            display: 'flex',
            justifyContent: 'space-between',
            borderRadius: '8px',
            '&>div': {
              width: '33%',
              boxSizing: 'border-box',
              padding: '12px 40px',
              borderRadius: '4px',
              textAlign: 'center',
              fontSize: '20px',
              cursor: 'pointer',
            },
          },
          '&>div:nth-of-type(2)': {
            background: 'white',
            marginTop: '1rem',
            padding: '1rem',
          },
        },
      },
    },
  },
  active: {
    boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)',
    color: '#FFFFFF',
    fontWeight: 600,
    background: '#3B71FE',
  },
  no_active: {
    color: '#777E91',
    fontWeight: 500,
    background: 'none',
  },
})

const Download = () => {
  const classes = useStyles()
  const [search, setSearch] = useState('')
  const [tab, setTab] = useState('mp4')
  const [data, setData] = useState<any[]>([])
  const [dataSearch, setDataSearch] = useState<{
    url: string
    type: string
    'x-custom-lang': 'en'
  }>({url: '', type: 'mp4', 'x-custom-lang': 'en'})

  const [inforVideo, setInfoVideo] = useState<any>()
  useEffect(() => {
    const getData = async () => {
      console.log(localStorage.getItem('accessToken'))
      const token = localStorage.getItem('accessToken')
      axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
      const res = await axiosClient.get(LINK_INFORMATION_VIDEO, {
        params: {...dataSearch},
      })

      setData(res.data.formats)
      setInfoVideo(res.data)
    }

    getData()
  }, [dataSearch])

  const formatDuration = (params: number) => {
    const date = new Date(0)
    date.setSeconds(params)
    return date.toISOString().substr(11, 8)
  }
  console.log(inforVideo)

  return (
    <div className={classes.download_container}>
      <div>
        <p>Youtube Video,Mp3,Mp4 다운로드</p>
        <p>원하시는 URL링크를 복사후 붙여넣기 하세요.</p>
        <InputSearch
          onChange={(e) => {
            setSearch(e)
          }}
          placeholder='Pate link'
          value={search}
          buttonSend={
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                fontSize: '24px',
              }}
              onClick={() =>
                setDataSearch({url: search, type: tab, 'x-custom-lang': 'en'})
              }
            >
              Go
              <ArrowForwardIcon />
            </span>
          }
        />
      </div>
      <div>
        {!inforVideo ? (
          <>
            <p>MP4에 최고의 유튜브, MP3 변환기</p>
            <p>
              YouTubetoMP4는 몇 번의 클릭만으로 YouTube 비디오를 MP4 파일로 변환
              할 수있는 최고의 변환기입니다. 최대 4p의 고품질 MP720를
              지원합니다.좋아하는 YouTube 동영상을 즐기십시오.
            </p>
          </>
        ) : (
          <div>
            {inforVideo && (
              <div>
                <img src={inforVideo.thumbnail} alt='' />
                <p>{inforVideo.title}</p>
                <p>
                  <span style={{color: '#353945', fontWeight: 400}}>기간</span>{' '}
                  {formatDuration(inforVideo.duration)}
                </p>
              </div>
            )}
            <div>
              <div>
                <div
                  className={tab === 'mp4' ? classes.active : classes.no_active}
                  onClick={() => setTab('mp4')}
                >
                  비디오
                </div>
                <div
                  className={tab === 'm4a' ? classes.active : classes.no_active}
                  onClick={() => setTab('m4a')}
                >
                  Mp3
                </div>
                <div
                  className={
                    tab === 'webm' ? classes.active : classes.no_active
                  }
                  onClick={() => setTab('webm')}
                >
                  오디오
                </div>
              </div>
              {data && (
                <div>
                  <TableCustom
                    column={COLUMN_TABLE_DOWNLOAD}
                    url={''}
                    data={data}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Download
