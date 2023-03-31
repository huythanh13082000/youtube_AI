import {makeStyles} from '@material-ui/styles'
import React, {ReactNode} from 'react'
import {useAppSelector} from '../../app/hooks'
import Footer from '../../components/footer'
import Header from '../../components/header'
import {selectUserInfo} from '../../feature/user/user.slice'
interface Props {
  children: ReactNode
}

const useStyles = makeStyles({
  container_layout: {
    paddingTop: '86px',
  },
})

const BaseLayout: React.FC<Props> = ({children}) => {
  const classes = useStyles()

  return (
    <div className={classes.container_layout}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default BaseLayout
