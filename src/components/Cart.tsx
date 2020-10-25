import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function Cart() {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="https://picsum.photos/200/300" />
      </ListItemAvatar>
      <Grid container>
        <Grid item md={8}>
          <ListItemText primary="Random Image" />
          <Typography variant={"body2"}>
            Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma
            uma pindureta. Suco de cevadiss deixa as pessoas mais interessantis.
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Grid container alignItems={"center"} justify={"space-between"}>
            <Grid item xs={6}>
              <TextField
                size={"small"}
                label="Length"
                type="number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth={true} size={"small"} color="secondary">
                Remove
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  );
}

export { Cart };
