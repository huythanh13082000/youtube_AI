import {
  Button,
  FormControl,
  FormControlLabel,
  makeStyles,
  TextareaAutosize,
} from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import axios from 'axios'
import {useEffect, useState} from 'react'
import {ORDER_PROJECT, TYPE, UPLOAD_fILES} from '../../apis/urlConfig'
import InputBase from '../../components/input'
import Loading from '../../components/loading'
import CustomizedSnackbars from '../../components/snackbar'
import UploadFile from '../../components/upload_file'
import {BASE_URL} from '../../constants'
import {OrderProjectType} from '../../types/orderProject.type'
import {numberWithCommas, sum} from '../../utils'

const useStyles = makeStyles({
  container_development_inquiry: {
    background: '#F9FAFB',
    paddingBottom: '40px',
    '&>div:nth-child(1)': {
      background: 'black',
      height: '120px',
    },
    '&>div:nth-child(2)': {
      margin: '60px auto 0',
      width: '50%',
      padding: '32px 40px',
      background: '#FFFFFF',
      boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.2)',
      borderRadius: '6px',
      '&>div:nth-child(1)': {
        width: '100%',
        display: 'inherit',
        padding: '0 2rem',
        boxSizing: 'border-box',
        borderRadius: '4px',
        border: '1px solid #78BDF2',
        '&>p': {
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: '30px',
          display: 'flex',
          alignItems: 'center',
          color: '#111827',
          justifyContent: 'space-between',
        },
        '&>div': {
          '&>p': {
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '27px',
            display: 'flex',
            color: '#111827',
            justifyContent: 'space-between',
            '&>span': {
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '24px',
              color: '#4B5563',
            },
          },
        },
      },
      '&>div:nth-child(2)': {
        margin: '16px auto 0',
        width: '85%',
        padding: '8px 16px',
        background: '#FFFFFF',
        boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.2)',
        borderRadius: '6px',
        '&>p': {
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: '30px',
          textAlign: 'center',
        },
      },
      '&>p': {
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '36px',
      },
      '&>div': {
        display: 'flex',
        '&>label': {
          display: 'inline-block',
          marginBottom: '10px',
          marginTop: '10px',
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '27px',
          color: '#1F293',
        },
        '&>p': {
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '27px',
          color: '#1F2937',
        },
        '& .MuiFormControlLabel-label': {
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '24px',
          color: '#6B7280',
        },
      },
      '&>button': {
        width: '100%',
        height: '48px',
        borderRadius: '5px',
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '24px',
        margin: '32px 0',
      },
      '&>span': {
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        textAlign: 'center',
        color: '#6B7280',
        display: 'block',
        '&>span': {
          color: '#2C97EB',
        },
      },
    },
  },
  '@media (max-width: 740px)': {
    container_development_inquiry: {
      background: '#F9FAFB',
      paddingBottom: '40px',
      '&>div:nth-child(1)': {
        background: 'black',
        height: '65px',
      },
      '&>div:nth-child(2)': {
        margin: '16px auto 0',
        width: '85%',
        padding: '8px 16px',
        background: '#FFFFFF',
        boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.2)',

        '&>p': {
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: '30px',
          textAlign: 'center',
        },
        '&>div:nth-child(1)': {
          width: '100%',
          padding: '0',
          border: 'none',
          '&>p': {
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '30px',
            display: 'flex',
            alignItems: 'center',
            color: '#111827',
            justifyContent: 'space-between',
          },
          '&>div': {
            '&>p': {
              fontWeight: 700,
              fontSize: '16px',
              lineHeight: '27px',
              display: 'flex',
              color: '#111827',
              justifyContent: 'space-between',
              '&>span': {
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '24px',
                color: '#4B5563',
              },
            },
          },
        },
        '&>div': {
          display: 'inherit',
          '&>label': {
            display: 'inline-block',
            marginBottom: '10px',
            marginTop: '10px',
            fontWeight: '500',
            fontSize: '18px',
            lineHeight: '27px',
            color: '#1F293',
          },
          '&>p': {
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '20px',
            color: '#1F2937',
          },
          '& .MuiFormControlLabel-label': {
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '24px',
            color: '#6B7280',
          },
        },
        '&>button': {
          width: '100%',
          height: '48px',
          borderRadius: '5px',
          fontWeight: 700,
          fontSize: '16px',
          lineHeight: '24px',
          margin: '32px 0',
        },
        '&>span': {
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '24px',
          textAlign: 'center',
          color: '#6B7280',
          display: 'block',
          '&>span': {
            color: '#2C97EB',
          },
        },
      },
    },
  },
  '@media (min-width: 740px) and (max-width: 1185px)': {
    container_development_inquiry: {
      '&>div:nth-child(1)': {
        background: 'black',
        height: '65px',
      },
      '&>div:nth-child(2)': {
        margin: '60px auto 0',
        width: '70%',
      },
    },
  },
})

const DevelopmentInquiry = () => {
  const classes = useStyles()
  const [listType, setListType] = useState<{name: string; id?: number}[]>([])
  const [data, setData] = useState<OrderProjectType>({
    platform: 'NOTHING',
    companyName: '',
    customerName: '',
    email: '',
    governmentSupport: '',
    phone: '',
    position: '',
    projectName: '',
    description: '',
    presenter: '',
    planFile: [],
  })
  const [snackbar, setSnackbar] = useState<{
    content: string
    type?: 'error' | 'warning' | 'success' | 'info'
  }>({content: ''})
  const [open, setOpen] = useState<boolean>(false)
  const [openLoading, setOpenLoading] = useState<boolean>(false)
  const [options, setOptions] = useState<
    {
      type?: string
      nameOption: string
      price: number
      // tag?: string
    }[]
  >([])

  useEffect(() => {
    const getType = async () => {
      const data: {
        data: {
          code: number
          data: {listTypes: {name: string; id?: number}[]}
        }
      } = await axios.get(`${BASE_URL}${TYPE}`, {
        params: {page: 1, perPage: 50},
      })
      if (data && data.data.code === 0)
        data && setListType(data.data.data.listTypes)
    }
    getType()
  }, [])

  const handleCreateOrderProject = async () => {
    setOpenLoading(true)
    const formdataFile = new FormData()
    data.planFile?.forEach((item) => {
      formdataFile.append('files', item)
    })
    const resUploadFiles = await axios.post(
      `${BASE_URL}${UPLOAD_fILES}`,
      formdataFile
    )
    const res = await axios.post(`${BASE_URL}${ORDER_PROJECT}`, {
      ...data,
      maximumBudget: Number(data.maximumBudget),
      planFile: resUploadFiles.data.data,
      options: options,
      estimatedCost: sum(options),
    })

    if (res.data.code === 0) {
      setOpen(true)
      setOpenLoading(false)
      setSnackbar({content: 'success', type: 'success'})
      resetForm()
      localStorage.removeItem('options')
    } else {
      setOpen(true)
      setOpenLoading(false)
      setSnackbar({
        content: `${res.data.errors[0].rule} 잘못된 형식`,
        type: 'error',
      })
    }
  }
  const resetForm = () => {
    setData({
      platform: 'NOTHING',
      companyName: '',
      customerName: '',
      email: '',
      governmentSupport: '',
      phone: '',
      position: '',
      projectName: '',
      description: '',
      presenter: '',
      planFile: [],
      maximumBudget: '',
    })
  }

  useEffect(() => {
    localStorage.getItem('options') &&
      setOptions(JSON.parse(localStorage.getItem('options') || ''))
  }, [])
  useEffect(() => {
    return function cleanUp() {
      localStorage.removeItem('options')
    }
  })

  return (
    <div className={classes.container_development_inquiry}>
      <div></div>
      <div>
        {options.length > 0 ? (
          <div>
            <p>견적</p>
            {listType.map((item) => (
              <div key={item.id}>
                <p>{item.name}</p>
                {options.map(
                  (option) =>
                    option.type === item.name && (
                      <p key={option.nameOption}>
                        <span>{option.nameOption}</span>{' '}
                        <span>{numberWithCommas(option.price)}원</span>
                      </p>
                    )
                )}
              </div>
            ))}

            <p style={{borderTop: '1px dashed #000000', padding: '1rem 0'}}>
              <span>총 금액</span>{' '}
              <span>{numberWithCommas(sum(options))}원</span>
            </p>
          </div>
        ) : (
          <div style={{border: 'none'}}></div>
        )}

        <p>문의 내용</p>
        <div>
          <InputBase
            placeholder='프로젝트명'
            label='프로젝트명'
            value={data.projectName}
            onChange={(e) => setData({...data, projectName: e})}
            require
          />
        </div>
        <div>
          <UploadFile
            label='화면기획서'
            placeholder='파일 선택 (.pdf, .csv)'
            setFile={(e) => setData({...data, planFile: e})}
            file={data.planFile as any[]}
          />
        </div>
        <div style={{display: 'inherit'}}>
          <label htmlFor='textarea'>서비스의 주요 기능</label>
          <br />
          <TextareaAutosize
            aria-label='minimum height'
            minRows={3}
            id='textarea'
            placeholder='예: 인테리어 업체와 소비자 매칭 서비스'
            style={{
              width: '100%',
              paddingLeft: '10px',
              height: '144px',
              boxSizing: 'border-box',
            }}
            value={data.description}
            onChange={(e) => setData({...data, description: e.target.value})}
          />
        </div>
        <div>
          <InputBase
            value={data.maximumBudget}
            onChange={(e) => {
              const regNumber = /^\d+$/
              regNumber.test(e) && setData({...data, maximumBudget: Number(e)})
            }}
            placeholder='최대예상금액'
            label='최대예상금액'
            type='text'
            require
          />
        </div>
        <div>
          <InputBase
            onChange={(e) => setData({...data, governmentSupport: e})}
            placeholder='예: 예비창업패키지 사업비'
            label='정부지원사업 집행 여부'
            value={data.governmentSupport}
          />
        </div>
        <FormControl>
          <p>출시 플랫폼</p>
          <FormGroup style={{display: 'flex'}}>
            <FormControlLabel
              control={<Checkbox />}
              label='모발일앱'
              checked={
                data.platform === 'MOBILE_APP' || data.platform === 'BOTH'
                  ? true
                  : false
              }
              onChange={() => {
                switch (data.platform) {
                  case 'NOTHING':
                    setData({...data, platform: 'MOBILE_APP'})
                    break
                  case 'BOTH': {
                    setData({...data, platform: 'WEB_APP'})
                    break
                  }
                  case 'WEB_APP': {
                    setData({...data, platform: 'BOTH'})
                    break
                  }
                  case 'MOBILE_APP': {
                    setData({...data, platform: 'NOTHING'})
                    break
                  }
                  default:
                    break
                }
              }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label='반응형웹'
              checked={
                data.platform === 'WEB_APP' || data.platform === 'BOTH'
                  ? true
                  : false
              }
              onChange={() => {
                switch (data.platform) {
                  case 'NOTHING':
                    setData({...data, platform: 'WEB_APP'})
                    break
                  case 'BOTH': {
                    setData({...data, platform: 'MOBILE_APP'})
                    break
                  }
                  case 'WEB_APP': {
                    setData({...data, platform: 'NOTHING'})
                    break
                  }
                  case 'MOBILE_APP': {
                    setData({...data, platform: 'BOTH'})
                    break
                  }
                  default:
                    break
                }
              }}
            />
          </FormGroup>
        </FormControl>
        <div>
          <InputBase
            onChange={(e) => setData({...data, customerName: e})}
            value={data.customerName}
            placeholder='이름과 성을 입력하세요'
            label='성함'
            require
          />
        </div>
        <div>
          <InputBase
            onChange={(e) => setData({...data, companyName: e})}
            value={data.companyName}
            placeholder='프로젝트명'
            label='회사이름 '
            require
          />
          <div style={{width: '32px'}}></div>
          <InputBase
            onChange={(e) => setData({...data, position: e})}
            value={data.position}
            placeholder='직위를 입력하세요'
            label='직책'
            require
          />
        </div>
        <div>
          <InputBase
            onChange={(e) => setData({...data, email: e})}
            value={data.email}
            placeholder='이메일을 입력하세요'
            label='이메일'
            require
          />
          <div style={{width: '32px'}}></div>
          <InputBase
            onChange={(e) => setData({...data, phone: e})}
            value={data.phone}
            placeholder='전화번호를 입력하세요 '
            label='휴대폰번호(응대문발송)'
            require
          />
        </div>
        <div>
          <InputBase
            onChange={(e) => setData({...data, presenter: e})}
            value={data.presenter}
            placeholder='유입경로 '
            label='추천인 또는 지엠포컴퍼니를 알게 된 경로'
            require
          />
        </div>
        <Button
          variant='contained'
          color='primary'
          onClick={handleCreateOrderProject}
          disabled={
            !data.projectName ||
            !data.maximumBudget ||
            !data.customerName ||
            !data.companyName ||
            !data.position ||
            !data.email ||
            !data.presenter ||
            !data.phone ||
            !data.platform
              ? true
              : false
          }
        >
          제출하기
        </Button>
        <span>
          제출하기를 누르면 <span>개인정보수집</span> 에 동의한 것으로 됩니다
        </span>
      </div>
      <CustomizedSnackbars
        {...snackbar}
        open={open}
        setOpen={() => setOpen(false)}
      />
      <Loading open={openLoading} />
    </div>
  )
}

export default DevelopmentInquiry
