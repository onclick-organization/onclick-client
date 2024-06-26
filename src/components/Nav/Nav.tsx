import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Button, Link as MuiLink } from '@mui/material'
import InputBase from '@mui/material/InputBase'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { ShoppingCartOutlined } from '@mui/icons-material'
import logo2 from '../../img/logo2.png'
import logo3 from '../../img/logo3.png'
import Image from 'next/image'
import { LanguageRounded } from '@mui/icons-material'
import NestedList from './TabPanel'
import SideList from './SideList'
import {
  Container,
  LogoContainer,
  Logo,
  LogoHover,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  Overlay,
  Categories
} from './NavStyles'
import NotificationMenu from '../Notification'
import { authFetcher, fetcher } from '@/utilities/fetcher'
import AccountMenu from '../User/User'
import Link from 'next/link'

export default function PrimarySearchAppBar() {
  React.useState<null | HTMLElement>(null)
  const [isHovered, setIsHovered] = React.useState(false)
  const [listshover, setListshover] = React.useState(false)
  const [openList, setOpenList] = React.useState(false)
  const [userData, setUserData] = React.useState({})

  React.useEffect(() => {
    const getUserData = async () => {
      const res = await fetcher({ url: '/users/userinfo' })
      return res
    }

    const fetchData = async () => {
      const fetchedUserData = await getUserData()
      setUserData(fetchedUserData.data)
    }
    fetchData()
  }, [])

  const handleOpenList = () => {
    setOpenList(!openList)
  }
  return (
    <Container>
      <Overlay style={{ display: openList ? 'block' : 'none' }} onClick={handleOpenList} />
      <Box sx={{ display: openList ? 'block' : 'none', position: 'absolute' }}>
        <SideList />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          height: '74px',
          backgroundColor: 'transparent',
          border: 'none',
          position: 'relative',
          zIndex: 50
        }}
      >
        <Toolbar>
          <LogoContainer onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <Link href='/'>
              <Logo
                src={logo2}
                alt='logo'
                style={{
                  opacity: isHovered ? 1 : 0,
                  width: '100%'
                }}
              />
            </Link>
            <LogoHover
              src={logo3}
              alt='logo'
              style={{
                opacity: isHovered ? 0 : 1,
                width: '100%'
              }}
            />
          </LogoContainer>
          <Categories onMouseEnter={() => setListshover(true)} onMouseLeave={() => setListshover(false)}>
            Categories
            {listshover && <NestedList />}
          </Categories>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: '#97999b' }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search for anything'
              inputProps={{ 'aria-label': 'search' }}
              sx={{
                fontSize: '15px',
                width: '100%',
                '&:hover:': { backgroundColor: 'white' }
              }}
            />
          </Search>
          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'flex'
              },
              width: {
                xl: !userData ?'44%' : '35%',
                lg: '52%',
                md: '54%'
              },
              alignItems: 'center',
              paddingLeft: {
                lg: '20px',
                md: '10px'
              },
              gap: {
                lg: '15px',
                md: '11px',
                xl: userData ? '3%' : '11px'
              },
              backgroundColor: {
                xl: 'transparent',
                lg: 'transparent',
                md: 'transparent'
              },
              justifyContent: {
                xl: userData ? 'center': 'flex-start',
                lg: 'flex-end',
                md: 'flex-end'
              }
            }}
          >
            <Typography
              noWrap
              component='div'
              variant='body2'
              sx={{
                display: {
                  md: 'none',
                  lg: 'block',
                  width: {
                    xl: '50%',
                    
                  },
                  cursor: 'pointer',
                  marginLeft: '1%',
                  marginTop: '0.6%',
                  fontSize: '13px',
                  color: 'white',
                  '&:hover': {
                    textDecoration: 'none',
                    color: '#7157b3'
                  }
                }
              }}
            >
              Academy Business
            </Typography>
            <Typography
              noWrap
              component='a'
              href='/applyinstructor'
              variant='body2'
              sx={{
                display: {
                  xs: 'none',
                  sm: 'block',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  width: {
                    xl: '50%',
                    lg: '70%'
                  },
                  marginLeft: '1%',
                  marginTop: '0.6%',
                  fontSize: '13px',
                  color: 'white',
                  textShadow: '0 0 0px #2d2f31',
                  '&:hover': {
                    textDecoration: 'none',
                    color: '#7157b3'
                  }
                }
              }}
            >
              Teach on Academy
            </Typography>
            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-haspopup='true'
              sx={{
                color: 'white',
                '&:hover': {
                  textDecoration: 'none',
                  color: '#7157b3',
                  backgroundColor: 'transparent',
                }
              }}
            >
              <ShoppingCartOutlined />
            </IconButton>

            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-haspopup='true'
              sx={{
                color: 'white',
                '&:hover': {
                  textDecoration: 'none',
                  color: '#7157b3',
                  backgroundColor: 'transparent'
                }
              }}
            >
              <NotificationMenu />
            </IconButton>

            {userData ? (
              <AccountMenu />
            ) : (
              <Box
                sx={{
                  marginLeft: {
                    lg: '2%',
                    md: '1%'
                  },
                  display: 'flex',
                  gap: {
                    lg: '8px',
                    md: '2px'
                  }
                }}
              >
                <Button
                  sx={{
                    // border: "1px solid black",
                    padding: '8px 19px',
                    color: 'white',
                    border: '1px solid #5624d0',
                    borderRadius: '7px',
                    fontWeight: 'bold',
                    textTransform: 'inherit',
                    fontSize: '13px',
                    textShadow: '1px 0 0px #90959c',
                    transition: '0.1s ease-in-out',
                    '&:hover': {
                      textDecoration: 'none',
                      backgroundColor: '#5624d0'
                    }
                  }}
                >
                  <MuiLink component={Link} href='/auth' style={{ textDecoration: 'none' }}>
                    Log in
                  </MuiLink>
                </Button>
                <Button
                  sx={{
                    border: '1px solid #5624d0',
                    padding: '8px 16px',
                    borderRadius: '7px',
                    color: 'white',
                    fontWeight: 'bold',
                    textTransform: 'inherit',
                    fontSize: '13px',
                    textShadow: '1px 0 0px #90959c',
                    backgroundColor: '#5624d0',
                    transition: '0.1s ease-in-out',
                    '&:hover': {
                      textDecoration: 'none',
                      backgroundColor: 'transparent'
                    }
                  }}
                >
                  <MuiLink component={Link} href='/auth' style={{ textDecoration: 'none' }}>
                    Sign up
                  </MuiLink>
                </Button>
              </Box>
            )}
            <IconButton
              edge='end'
              aria-label='account of current user'
              aria-haspopup='true'
              sx={{
                color: 'white',
                borderRadius: '0',
                padding: '7px',
                '&:hover': {
                  textDecoration: 'none',
                  color: '#7157b3',
                  rotate: '180deg',
                  transition: '0.8s',
                  backgroundColor: 'transparent'
                }
              }}
            ></IconButton>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='open drawer'
              sx={{ mr: 2 }}
              onClick={handleOpenList}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Box>
    </Container>
  )
}
