import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import logoType from '../../resources/images/logotype.png';
import logo from '../../resources/images/logo.png';


const useStyles = makeStyles(theme => ({
    appBar:{
        height: "100%"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    sectionMenuDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
    sectionMenuMobile: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
}));


function Header(props) {
    const classes = useStyles();

    return (
        <AppBar position="static" color="primary" className={classes.appBar}>
            <Toolbar color="primary">
                <Grid container spacing={2} justify="space-between" >
                    <Grid item className={classes.sectionMenuMobile}>
                        <div className="logo">
                            <a href="/">
                                <img alt="logo" src={logo} style={{ maxWidth: '40px', maxHeight: "40px" }}></img>
                            </a>
                        </div>
                    </Grid>
                    <Grid item className={classes.sectionMenuDesktop}>
                        <div className="logo">
                            <a href="/">
                                <img alt="logoType" src={logoType}></img>
                            </a>
                        </div>
                    </Grid>
                    <Grid item className={classes.sectionMenuDesktop}>
                        <Button color="inherit" href={'/basicsample'}>{"Basico"}</Button>

                        <Button color="inherit" href={'/profilesample'}>{"Perfil"}</Button>

                        <Button color="inherit" href={'/tacossample'}>{"Tacos!"}</Button>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2} className={classes.sectionMenuMobile} style={{ textAlign: "right" }}>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header

