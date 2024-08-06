import ProductInfoCard from "@/components/page/product/ProductInfoCard";
import ProductPreview from "@/components/page/product/ProductPreview";
import ProductServiceCard from "@/components/page/product/ProductServiceCard";
import useProduct from "@/hooks/useProduct";
import { Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";

const ProductDetail = () => {
  const router = useRouter();
  const { allProducts, getProductAllTypes } = useProduct();
  const { id } = router.query;

  useEffect(() => {
    getProductAllTypes();
  }, []);

  const product = useMemo(() => {
    if (allProducts.length <= 0 && !id) return;
    return allProducts.find((item) => item.id === id) ?? null;
  }, [id, allProducts]);

  return (
    <Box className="md:container mx-auto md:p-4 ">
      {product && (
        <Grid container className="bg-white p-4 ml-0 w-full">
          <Grid item lg={3} md={4} sm={12} xs={12}>
            <ProductPreview src={product?.image_url ?? ""} />
          </Grid>
          <Grid item lg={6} md={8} sm={12} xs={12} pr={{ md: 4, sm: 0, xs: 0 }}>
            <ProductInfoCard product={product} />
          </Grid>
          <Grid
            item
            lg={3}
            md={12}
            sm={12}
            xs={12}
            pt={{ lg: 0, md: 4, sm: 4, xs: 2 }}
          >
            <ProductServiceCard />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default ProductDetail;
