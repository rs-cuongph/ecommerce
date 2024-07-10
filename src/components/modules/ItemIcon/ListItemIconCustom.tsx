import { ListItem, ListItemIcon, Typography } from "@mui/material";
import React, { ReactNode } from "react";

const ListItemIconCustom = ({
  label,
  iconEl,
}: {
  label: string;
  iconEl: ReactNode;
}) => {
  return (
    <ListItem className="p-2">
      <ListItemIcon>{iconEl}</ListItemIcon>
      <Typography className="text-xs">{label}</Typography>
    </ListItem>
  );
};

export default ListItemIconCustom;
