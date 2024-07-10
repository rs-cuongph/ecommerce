/* eslint-disable @next/next/no-img-element */
import { Box, BoxProps, Typography } from "@mui/material";
import React, { ReactNode } from "react";
interface IWrapperTitleBoxProps extends BoxProps {
  title?: string;
  srcBanner?: string;
  children: ReactNode;
}
const WrapperTitleBox = ({
  title,
  srcBanner,
  children,
  ...rest
}: IWrapperTitleBoxProps) => {
  return (
    <Box {...rest}>
      {srcBanner && (
        <img
          src={srcBanner}
          alt="banner-product"
          width="100%"
          height="100%"
          className="max-h-[200px]"
        />
      )}
      <Box className="border-b-2 border-red bg-color-title text-white">
        <Box p={2} pb={1}>
          <Typography
            variant="h5"
            className="font-semibold text-xl md:text-xl xs:text-sm"
          >
            {title}
          </Typography>
        </Box>
      </Box>
      {children}
    </Box>
  );
};

export default WrapperTitleBox;
