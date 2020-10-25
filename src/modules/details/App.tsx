import React, { Fragment } from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Cart, StyleProvider } from "../../components";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: "1rem",
    },
    list: {
      width: "100%",
    },
    checkout: {
      marginTop: "2rem",
    },
  })
);

function CartDetailsApp() {
  const classes = useStyles();
  return (
    <StyleProvider>
      <List className={classes.list}>
        {[1, 2, 3].map((i) => (
          <Fragment key={i}>
            <Cart />
            <Divider variant="inset" component="li" />
          </Fragment>
        ))}
      </List>
    </StyleProvider>
  );
}

export { CartDetailsApp };
