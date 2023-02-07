import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
  container_header: {
    position: 'absolute',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
    color: 'white',
    height: 120,
    padding: '0 130px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&>:nth-child(1)': {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      '&>:nth-child(1)': {
        fontFamily: 'Anton',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '32px',
        lineHeight: '66px',
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF',
        cursor: 'pointer',
      },
      '&>:nth-child(2)': {
        display: 'flex',
        width: '510px',
        alignItems: 'center',
        listStyle: 'none',
        justifyContent: 'space-between',
        '&>li': {
          fontWeight: 500,
          fontSize: '18px',
          display: 'flex',
          color: '#FFFFFF',
        },
      },
      '&>:nth-child(3)': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '162px',
        height: '48px',
        background: '#FFFFFF',
        borderRadius: '4px',
        fontWeight: 600,
        fontSize: '18px',
        color: '#000000',
      },
    },
  },
})

const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.container_header}>
      <div>
        <span>Greenapp</span>
        <ul>
          <li>회사소개</li>
          <li>포트폴리오</li>
          <li>견적계산</li>
          <li>개발문의</li>
        </ul>
        <span>프로젝트 생성</span>
      </div>
    </div>
  )
}

export default Header
