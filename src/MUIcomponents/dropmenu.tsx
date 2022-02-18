import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Menu, { MenuProps } from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import EditIcon from '@mui/icons-material/Edit'
import Divider from '@mui/material/Divider'
import ArchiveIcon from '@mui/icons-material/Archive'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { createContext, useEffect, useState } from 'react'
import App from '../App'

export const UserContext = createContext('')

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}))

export default function Playermenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const [playerCount, setPlayerCount] = useState(1)
  const [easyxp, setEasyxp] = useState(25)
  const [mediumxp, setMediumxp] = useState(50)
  const [hardxp, setHardxp] = useState(75)
  const [deadlyxp, setDeadlyxp] = useState(100)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  useEffect(() => {
    setEasyxp(playerCount * 25)
  }, [playerCount])
  return (
    <div>
      {/* <UserContext.Provider value={'Vishwas'}>
        <App />
      </UserContext.Provider> */}
      <Button
        id='demo-customized-button'
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        variant='contained'
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Number of Players
      </Button>
      <StyledMenu
        id='demo-customized-menu'
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            setPlayerCount(1)
            handleClose()
          }}
          disableRipple
        >
          1
        </MenuItem>
        <MenuItem
          onClick={() => {
            setPlayerCount(2)
            handleClose()
          }}
          disableRipple
        >
          2
        </MenuItem>
        <MenuItem
          onClick={() => {
            setPlayerCount(3)
            handleClose()
          }}
          disableRipple
        >
          3
        </MenuItem>
        <MenuItem
          onClick={() => {
            setPlayerCount(4)
            handleClose()
          }}
          disableRipple
        >
          4
        </MenuItem>
        <MenuItem
          onClick={() => {
            setPlayerCount(5)
            handleClose()
          }}
          disableRipple
        >
          5
        </MenuItem>
        <MenuItem
          onClick={() => {
            setPlayerCount(6)
            handleClose()
          }}
          disableRipple
        >
          6
        </MenuItem>
        <MenuItem
          onClick={() => {
            setPlayerCount(7)
            handleClose()
          }}
          disableRipple
        >
          7
        </MenuItem>
        <MenuItem
          onClick={() => {
            setPlayerCount(8)
            handleClose()
          }}
          disableRipple
        >
          8
        </MenuItem>
      </StyledMenu>
      <p>{playerCount}</p>
      <p>easy: {easyxp} xp</p>
    </div>
  )
}
