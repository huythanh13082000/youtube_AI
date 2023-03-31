import React from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from './app/store'
import reportWebVitals from './reportWebVitals'
import './index.scss'
import Router from './router'
import BaseLayout from './layouts/base'
import {createTheme, ThemeProvider} from '@material-ui/core'
import moment from 'moment'
import 'moment/locale/ko' // without this line it didn't work
import Loading from './components/loading'
import CustomizedSnackbars from './components/snackbar'
moment.locale('ko')

const container = document.getElementById('root')!
const root = createRoot(container)

const theme = createTheme({
  typography: {
    fontFamily: ['Gothic A1'].join(','),
  },
  props: {
    MuiButton: {
      style: {
        height: '48px',
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: '28px',
      },
    },
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#2B83FE',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <BaseLayout>
            <CustomizedSnackbars />
            <Loading />
            <Router />
          </BaseLayout>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
