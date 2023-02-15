import {makeStyles, Paper, Tab, Tabs} from '@material-ui/core'
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {PORTFOLIO} from '../../apis/urlConfig'
import background from '../../asset/images/portfolio_background.png'
import CardSuccessCase from '../../components/card_success_case'
import {BASE_URL} from '../../constants'
import {PortfolioType} from '../../types/portfolio.type'

const useStyles = makeStyles({
  container_portfolio: {
    '&>div:nth-child(1)': {
      background: `url(${background})`,
      backgroundSize: 'cover',
      position: 'relative',
      height: '800px',
      '&>div:nth-child(1)': {
        position: 'absolute',
        top: '40%',
        width: '100%',
        '&>p': {
          textAlign: 'center',
          fontWeight: 700,
          fontSize: '44px',
          lineHeight: '66px',
          color: '#FFFFFF',
          margin: '5px 0',
        },
        '&>p:nth-child(2)': {
          fontWeight: 500,
          fontSize: '20px',
          lineHeight: '30px',
        },
      },
    },
    '&>div:nth-child(2)': {
      padding: '0 140px',
      boxShadow: '0px 2px 16px rgba(78, 78, 78, 0.16)',
      '& .MuiPaper-elevation1': {
        boxShadow: 'none',
      },
      '& .MuiTabs-flexContainer': {
        justifyContent: 'center',
        padding: '12px 0',
        '& .MuiTab-wrapper': {
          fontFamily: 'Pretendard',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '24px',
          lineHeight: '36px',
        },
      },
      '& .MuiTab-textColorPrimary.Mui-selected': {
        background: 'linear-gradient(180deg, #2E88FF 0%, #004EC7 100%)',
        WebkitBackgroundClip: 'text',
        webkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
      },
    },
    '&>div:nth-child(3)': {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      background: '#F9FAFB',
      padding: '60px 130px 80px 130px',
    },
  },
  '@media (max-width: 740px)': {
    container_portfolio: {
      '&>div:nth-child(1)': {
        background: `url(${background})`,
        backgroundSize: 'cover',
        position: 'relative',
        height: '350px',
        '&>div:nth-child(1)': {
          position: 'absolute',
          top: '40%',
          width: '100%',
          '&>p': {
            textAlign: 'center',
            fontWeight: 700,
            fontSize: '28px',
            lineHeight: '42px',
            color: '#FFFFFF',
            margin: '5px 0',
          },
          '&>p:nth-child(2)': {
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
          },
        },
      },
      '&>div:nth-child(2)': {
        padding: '16px',
      },
      '&>div:nth-child(3)': {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        background: '#F9FAFB',
        padding: '30px 16px 30px 16px',
      },
    },
  },
})

const Portfolio = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(2)

  const [listPortfolio, setListPortfolio] = useState<PortfolioType[]>([])
  useEffect(() => {
    const getListPortfolio = async () => {
      const data = await axios.get(`${BASE_URL}${PORTFOLIO}`, {
        params: {sort: 'DESC'},
      })
      console.log(data)
      if (data.data.code === 0) {
        console.log(1111, data.data.data.listPortfolios)
        setListPortfolio([...data.data.data.listPortfolios])
      } else console.log(111, data)
    }
    getListPortfolio()
  }, [])
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }
  return (
    <div className={classes.container_portfolio}>
      <div>
        <div>
          <p>포트폴리오</p>
          <p>대표적인 성공 사례를 공개합니다.</p>
        </div>
      </div>
      <div>
        <Paper square>
          <Tabs
            value={value}
            indicatorColor='primary'
            textColor='primary'
            onChange={handleChange}
            aria-label='disabled tabs example'
          >
            <Tab label='과학 기술' />
            <Tab label='쇼핑' disabled />
            <Tab label='자동차' disabled />
            <Tab label='여행하다' disabled />
            <Tab label='패션' disabled />
            <Tab label='마케팅' disabled />
            <Tab label='마케팅' disabled />
            <Tab label='마케팅' disabled />
            <Tab label='마케팅' disabled />
          </Tabs>
        </Paper>
      </div>
      <div>
        {listPortfolio.map((item) => (
          <CardSuccessCase data={item} key={item.portfolio_id} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio
