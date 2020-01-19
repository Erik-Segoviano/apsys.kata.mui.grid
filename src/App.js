import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Header from './views/common/Header';
// import BasicSample from './views/BasicSample';
// import ProfileSample from './views/ProfileSample';
// import TacosSample from './views/TacosSample';
// import Home from './views/Home';

import { makeStyles } from '@material-ui/core/styles';
import Header from './views/common/Header';


function App() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.layoutContainer}>
        <div className={classes.headerFlex}>
          <Header />
        </div>
        <div className={classes.containerFlex}>
          <div className={classes.sideBar}>
          dfghjklñ
          </div>
          <div className={classes.workspace}>
            Container
          </div>
        </div>
        <div className={classes.footerFlex}>Footer</div>
      </div>
    </>
  );
}

const headerHeight = 7;
const footerHeight = 5;
const useStyles = makeStyles({
  layoutContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    minWidth: "100vw",
    backgroundColor: "red",
  },
  headerFlex: {
    flexGrow: 1,
    height: `${headerHeight}vh`,
    width: "100vw",
    backgroundColor: "green",
  },
  sideBar: {
    flexGrow: 0,
    // minWidth: "fit-content",
    width: "minmax(0,30rem)",
    // maxWidth: "20rem",
    backgroundColor: "gray",
  },
  containerFlex: {
    display: "flex",
    flex: "1 0 auto",
    flexDirection: "row",
    height: `calc(100vh - ${headerHeight + footerHeight}vh)`,
    width: "100vw",
    backgroundColor: "yellow",
  },
  workspace: {
    backgroundColor: "pink",
    flexGrow: 1
  },
  footerFlex: {
    flex: "0 0 auto",
    width: "100vw",
    backgroundColor: "blue",
  }
})

export default App;
