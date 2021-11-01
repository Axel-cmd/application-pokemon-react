import React from 'react'
import { Button, Menu, MenuItem } from '@material-ui/core'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import './Header.css';

export default function Header(){

  return(
<div className="container-header">
  <img className="img" src={`${process.env.PUBLIC_URL}/logo/pikacu.jpg`}alt=""/>
  <img className="img" src={`${process.env.PUBLIC_URL}/logo/pokemon.png`}alt=""/>

    <PopupState className='menu' variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Button variant="contained" {...bindTrigger(popupState)}>
              <img src={`${process.env.PUBLIC_URL}/logo/engrenage.png`}alt=""/>
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>Profile</MenuItem>
                <MenuItem onClick={popupState.close}>Langue</MenuItem>
                <MenuItem onClick={popupState.close}>Darkmode</MenuItem>
                <MenuItem onClick={popupState.close}>Logout</MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
            </div>
  );
}

