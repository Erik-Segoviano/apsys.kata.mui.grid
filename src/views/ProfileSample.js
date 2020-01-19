import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

import logo from '../resources/images/logo.png';

function ProfileSample() {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paperHeadet}>
                <Grid container spacing={2} justify="center" >
                    <Grid item xs={6} style={{backgroundColor:"red"}}   
                        container
                        direction="column"
                        justify="center"
                        alignItems="center" >

                        <Avatar alt="logo" src={logo} />
                    </Grid>
                    <Grid item xs={6} style={{backgroundColor:"green"}}
                        container>
                        <Grid item xs={6}>
                            {"Hola Betty"}
                        </Grid>
                        <Grid item xs={6}>
                            {"Hola Betty"}
                        </Grid>
                        
                        <Grid xs={12}>
                            <Grid item xs>
                                {"Lorem 1"}
                            </Grid>
                            <Grid item xs>
                                {"Lorem 2"}
                            </Grid>
                            <Grid item xs>
                                {"Lorem 3"}
                            </Grid>
                            <Grid item xs>
                                {"Material UI no contiene una implementación actualmente de CSS Grid layout debido a que la implementación actual esta basada en Flexbox , sin embargo el código es similar a la implementación de CSS Grid con Bootstrap. "}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>

        </div>
    )
}

const useStyles = makeStyles(theme => ({
    paperHeadet: {
        marginTop: "20px",
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 800,
      },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
  }));

export default ProfileSample
