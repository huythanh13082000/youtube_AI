import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import {makeStyles} from '@material-ui/styles'
import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axiosClient from '../../apis/axiosClient'
import {ANALYTICS_SEARCH_MORE} from '../../apis/urlConfig'
import {useAppDispatch} from '../../app/hooks'
import SortDown from '../../asset/icons/sort_down'
import SortUp from '../../asset/icons/sort_up'
import buttonAdd from '../../asset/images/button_add.png'
import {ROUTE} from '../../router/routes'
import {loadingActions} from '../loading/loadingSlice'

const useStyles = makeStyles({
  table_container: {
    '&>table': {
      borderCollapse: 'collapse',
      width: '100%',
      '&>thead': {
        border: '',
        '&>tr': {
          textAlign: 'start',
          borderBottom: '1px solid #B1B5C3',
          '&>th': {
            padding: '8px',
            textAlign: 'left',
            fontWeight: 700,
            fontSize: '20px',
          },
        },
      },
      '&>tbody': {
        '&>tr': {
          borderBottom: '1px solid #B1B5C3',
          '&>td': {
            padding: '16px 8px',
            fontWeight: 500,
            fontSize: '20px',
            textAlign: 'left',
          },
          '&>td:nth-of-type(2)': {
            width: '40%',
          },
        },
      },
    },
  },
})

const TableCustom = (props: {
  column: {
    title: string
    dataIndex: string
    render: any
    sort: boolean
  }[]
  url: string
  style?: React.CSSProperties
  paramsGet?: any
  setParamsGet?: (e: any) => void
  loadMore?: boolean
  data?: any[]
}) => {
  const classes = useStyles()
  const [data, setData] = useState<any[]>([])
  const [listVideo, setListVideo] = useState<any[]>([])
  const navigate = useNavigate()
  const [index, setIndex] = useState(0)
  const handleClick = () => {
    navigate(ROUTE.ANALYTICS_DETAIL)
  }
  const dispatch = useAppDispatch()

  useEffect(() => {
    const getData = async () => {
      const token = localStorage.getItem('accessToken')
      axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
      console.log(localStorage.getItem('accessToken'))
      const res = await axiosClient.get(props.url, {
        params: props.paramsGet,
      })
      setListVideo(res.data.videos)
      setData(res.data.fisrtList)
    }
    props.url && getData()
  }, [props.paramsGet, props.url])
  const loadMore = async () => {
    setIndex(index + 1)
    dispatch(loadingActions.openLoading())
    const res: any = await axiosClient.get(ANALYTICS_SEARCH_MORE, {
      params: {videoIds: JSON.stringify(listVideo[index + 1])},
    })
    setData([...data, ...res.data.moreVideos])
    dispatch(loadingActions.loadingSuccess())
  }
  console.log(listVideo.length)
  return (
    <div className={classes.table_container}>
      <table>
        <thead>
          <tr>
            {props.column.map((item) => (
              <th>
                <div>
                  {item.title}{' '}
                  {item.sort && (
                    <span>
                      <SortDown /> <SortUp />
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data ? (
            <>
              {props.data.map((itemData: any, index) => (
                <tr>
                  {props.column.map((item) => (
                    <td>
                      {item.render(itemData[`${item.dataIndex}`])}{' '}
                      {item.dataIndex === '시청그래프' && (
                        <span
                          aria-controls='fade-menu'
                          aria-haspopup='true'
                          onClick={handleClick}
                          style={{margin: 0, padding: 0, color: '#2B83FE'}}
                        >
                          <SearchOutlinedIcon />
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </>
          ) : (
            <>
              {data.map((itemData: any, index) => (
                <tr>
                  {props.column.map((item) => (
                    <td>
                      {item.render(itemData[`${item.dataIndex}`])}{' '}
                      {item.dataIndex === '시청그래프' && (
                        <span
                          aria-controls='fade-menu'
                          aria-haspopup='true'
                          onClick={handleClick}
                          style={{margin: 0, padding: 0}}
                        >
                          <SearchOutlinedIcon />
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
      {props.loadMore && index < listVideo.length && (
        <p>
          <img
            src={buttonAdd}
            alt=''
            style={{width: '44px', height: '44px'}}
            onClick={() => loadMore()}
          />
          <p
            style={{
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '22px',
              padding: 0,
              margin: 0,
            }}
          >
            참고 항목
          </p>
        </p>
      )}
    </div>
  )
}

export default TableCustom
