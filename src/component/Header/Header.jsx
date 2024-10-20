import { AppBar, Autocomplete, Box, InputBase, Toolbar, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';  

import useStyles from './styles';

function Header() {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h5' className={classes.title}>
            Travel Advisor
        </Typography>
        <Box display="flex">
           <Typography variant='h6' className={classes.title}>
                Explore New Places
            </Typography>
            {/* <Autocomplete> */}
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase placeholder='Search...' classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                </div>
            {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header