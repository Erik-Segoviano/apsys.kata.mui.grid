import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    item: {
        border: "#00ff00 solid 1px"
    },
}));

function BasicSample() {
    const classes = useStyles();
    return (
        <div style={{ padding: 5 }}>
            <Grid container spacing={0} justify="space-between">
                <Grid className={classes.item} item xs={12} sm={6} md={4} lg={2} xl={1}>Item 1</Grid>
                <Grid className={classes.item} item xs={12} sm={6} md={4} lg={2} xl={1}>Item 2</Grid>
                <Grid className={classes.item} item xs={12} sm={6} md={4} lg={2} xl={1}>Item 3</Grid>
                <Grid className={classes.item} item xs={12} sm={6} md={4} lg={2} xl={1}>Item 4</Grid>
                <Grid className={classes.item} item xs={12} sm={6} md={4} lg={2} xl={1}>Item 5</Grid>
            </Grid>
        </div>
    )
}

export default BasicSample
