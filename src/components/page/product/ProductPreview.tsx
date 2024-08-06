/* eslint-disable @next/next/no-img-element */
import { Backdrop, Box, Grid } from "@mui/material";
import React from "react";

const ProductPreview = ({ src = "" }: { src: string }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Grid container spacing={1}>
      <Grid item md={11} sm={12} xs={12}>
        <img
          className="w-full border-[1px] border-gray cursor-pointer sm:max-w-[400px] xs:max-w-[400px]"
          src={src ?? ""}
          onClick={handleOpen}
          alt="product"
        />
      </Grid>
      {src && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <img
            className="w-full max-w-[700px] border-[1px] border-gray"
            src={src}
            alt="product-preview"
          />
        </Backdrop>
      )}
    </Grid>
  );
};

export default ProductPreview;
