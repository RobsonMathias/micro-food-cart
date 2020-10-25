import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";

function Dropdown() {
  return (
    <IconButton aria-label="show 17 new notifications" color="inherit">
      <Badge badgeContent={3} color="secondary">
        <AddShoppingCart />
      </Badge>
    </IconButton>
  );
}

export { Dropdown };
