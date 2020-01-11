import React from 'react'
import { Paper, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AvatarApsys from '../resources/images/logo.png'
const useStyles = makeStyles(theme => ({
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    paper: {
        width: "60vw",
        marginTop: "70px",
        padding: "10px",
    },
    dataLabel: {
        padding: "10px",
        textAlign: "justify"
    }
}));

function ProfileSample() {
    const classes = useStyles();
    return (
        <Grid container item spacing={0} justify="center" alignItems="center">
            <Paper className={classes.paper}>
                <Grid container spacing={2} justify="center">
                    <Grid container item justify="center" alignItems="center" xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Avatar alt="Remy Sharp" src={AvatarApsys} className={classes.large} />
                    </Grid>
                    <Grid container spacing={2} item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Grid item className={classes.dataLabel}>Erik R. Segoviano</Grid>
                        <Grid item className={classes.dataLabel}>24 años</Grid>
                        <Grid item className={classes.dataLabel}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Grid>
                        <Grid item className={classes.dataLabel}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default ProfileSample;