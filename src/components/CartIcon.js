import React from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { connect } from "react-redux";

const StyledBadge = withStyles((theme) => ({
  badge: {
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

function CustomizedBadges({ cart }) {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={cart} color="primary">
        <ShoppingCartIcon style={{ color: "white" }} />
      </StyledBadge>
    </IconButton>
  );
}

export default CustomizedBadges;
