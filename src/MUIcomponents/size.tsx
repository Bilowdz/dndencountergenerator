import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Menu, { MenuProps } from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react'

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

export default function Sizemenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const [size, setSize] = useState('any size')
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
        Size of Monsters
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
            setSize('any size')
            handleClose()
          }}
          disableRipple
        >
          any size
        </MenuItem>
        <MenuItem
          onClick={() => {
            setSize('tiny')
            handleClose()
          }}
          disableRipple
        >
          tiny
        </MenuItem>
        <MenuItem
          onClick={() => {
            setSize('small')
            handleClose()
          }}
          disableRipple
        >
          small
        </MenuItem>
        <MenuItem
          onClick={() => {
            setSize('medium')
            handleClose()
          }}
          disableRipple
        >
          medium
        </MenuItem>
        <MenuItem
          onClick={() => {
            setSize('large')
            handleClose()
          }}
          disableRipple
        >
          large
        </MenuItem>
        <MenuItem
          onClick={() => {
            setSize('huge')
            handleClose()
          }}
          disableRipple
        >
          huge
        </MenuItem>
        <MenuItem
          onClick={() => {
            setSize('gargantuan')
            handleClose()
          }}
          disableRipple
        >
          gargantuan
        </MenuItem>
      </StyledMenu>
      <p>{size}</p>
    </div>
  )
}
