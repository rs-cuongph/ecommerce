import { Paper, PaperProps, styled } from "@mui/material";
import React, { ReactNode } from "react";

const DemoPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  ...theme.typography.body2,
}));

interface IPaperCustomProps extends PaperProps {
  children: ReactNode;
}

const PaperCustom = ({ children, ...rest }: IPaperCustomProps) => {
  return <DemoPaper {...rest}>{children}</DemoPaper>;
};

export default PaperCustom;
