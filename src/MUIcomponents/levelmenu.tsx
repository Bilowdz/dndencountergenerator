import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Menu, { MenuProps } from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { createContext, useState } from 'react'

export const levelContext = createContext(1)

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

export default function Levelmenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const [playerCount, setPlayerCount] = useState(1)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
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
        Average Player Level
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
        <MenuItem
          onClick={() => {
            setPlayerCount(9)
            handleClose()
          }}
          disableRipple
        >
          9
        </MenuItem>
        <MenuItem
          onClick={() => {
            setPlayerCount(10)
            handleClose()
          }}
          disableRipple
        >
          10
        </MenuItem>
        <MenuItem
          onClick={() => {
            setPlayerCount(11)
            handleClose()
          }}
          disableRipple
        >
          11
        </MenuItem>
        <MenuItem
          onClick={() => {
            setPlayerCount(12)
            handleClose()
          }}
          disableRipple
        >
          12
        </MenuItem>
        <MenuItem
          onClick={() => {
            setPlayerCount(13)
            handleClose()
          }}
          disableRipple
        >
          13
        </MenuItem>
        <MenuItem
          onClick={() => {
            setPlayerCount(14)
            handleClose()
          }}
          disableRipple
        >
          14
        </MenuItem>
        <MenuItem
          onClick={() => {
            setPlayerCount(15)
            handleClose()
          }}
          disableRipple
        >
          15
        </MenuItem>
        <MenuItem
          onClick={() => {
            setPlayerCount(16)
            handleClose()
          }}
          disableRipple
        >
          16
        </MenuItem>
        <MenuItem
          onClick={() => {
            setPlayerCount(17)
            handleClose()
          }}
          disableRipple
        >
          17
        </MenuItem>
        <MenuItem
          onClick={() => {
            setPlayerCount(18)
            handleClose()
          }}
          disableRipple
        >
          18
        </MenuItem>
        <MenuItem
          onClick={() => {
            setPlayerCount(19)
            handleClose()
          }}
          disableRipple
        >
          19
        </MenuItem>
        <MenuItem
          onClick={() => {
            setPlayerCount(20)
            handleClose()
          }}
          disableRipple
        >
          20
        </MenuItem>
      </StyledMenu>
      <p>{playerCount}</p>
      <levelContext.Provider value={playerCount}>
      </levelContext.Provider>
    </div>
  )
}
