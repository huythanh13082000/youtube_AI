import {makeStyles} from '@material-ui/styles'
import React from 'react'
import background from '../../asset/images/background_home.png'
import InputSearch from '../../components/input_search'
import CloseIcon from '@material-ui/icons/Close'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const useStyles = makeStyles({
  home_container: {
    '&>div:nth-of-type(1)': {
      backgroundImage: `url("${background}")`,
      height: '374px',
      textAlign: 'center',
      padding: '60px 0',
      boxSizing: 'border-box',
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
      '&>div:nth-of-type(2)': {
        marginTop: '1.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#353945',
        '&>span:nth-of-type(1)': {
          color: 'black',
          marginRight: '1rem',
        },
      },
    },
  },
  span_style: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 12px 8px 16px',
    boxSizing: 'border-box',
    gap: '10px',

    height: '39px',

    border: '1px solid #777E90',
    borderRadius: '100px',
    margin: '0 0.5rem',
    '&>svg': {
      color: '#777E90',
    },
  },
})

const Home = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }
  return (
    <div className={classes.home_container}>
      <div>
        <p>원하는 키워드를 검색해보세요.</p>
        <p>
          구독자와 영상조회수를 분석하기 위해서는 키워드를 입력후에
          확인해보세요. 유튜브 채널을 운영하는데 필수 분석툴 입니다.
        </p>
        <InputSearch />
        <div>
          <span>검색기록</span>
          <span className={classes.span_style}>
            하이
            <CloseIcon />
          </span>
          <span className={classes.span_style}>
            우리
            <CloseIcon />
          </span>
          <span className={classes.span_style}>
            하이하이하이
            <CloseIcon />
          </span>
          <span className={classes.span_style}>
            하이
            <CloseIcon />
          </span>
          <span className={classes.span_style}>
            하이
            <CloseIcon />
          </span>
        </div>
      </div>
      <div>
        <p>
          검색 키워드: <span>베트남</span>
        </p>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          centered
        >
          <Tab label={<span><img src="" alt="" /></span>} />
          <Tab label='Item Two' />
        </Tabs>
      </div>
    </div>
  )
}

export default Home
