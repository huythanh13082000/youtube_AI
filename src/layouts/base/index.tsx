import React, {ReactNode} from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
interface Props {
  children: ReactNode
}
const BaseLayout: React.FC<Props> = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default BaseLayout
