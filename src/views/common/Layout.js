import React from 'react'
import { Grid, Typography } from '@material-ui/core'

function Layout() {
    return (
        <Grid container spacing={5} justify="center" alignItems="center">
            <Grid item xs={12}>
                <Typography variant="subtitle1" align="center">
                    {"Layout"}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle2" align="center">
                    {"Componente: Grid"}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Layout
