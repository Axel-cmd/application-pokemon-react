import React from 'react'
import { AppBar, Toolbar, Box, IconButton, Typography} from '@material-ui/core'
import './Header.css'

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

export default function Header(){

  return(
<div className="container-header">
  <img className="img" src={`${process.env.PUBLIC_URL}/logo/pikacu.jpg`}alt=""/>
    <img className="img" src={`${process.env.PUBLIC_URL}/logo/pokemon.png`}alt=""/>

  </div>
)
}
