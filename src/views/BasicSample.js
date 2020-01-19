import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function BasicSample() {
    const classes = useStyles();
    return (
        <div >
            <Grid container spacing={1} justify="space-between">
                <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
                    <Paper className={classes.paper}>Item 1</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
                    <Paper className={classes.paper}>Item 2</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
                    <Paper className={classes.paper}>Item 3</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
                    <Paper className={classes.paper}>Item 4</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2} xl={2}>
                    <Paper className={classes.paper}>Item 5</Paper>
                </Grid>
            </Grid>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
  }));

export default BasicSample
