import CardProduct from "@/components/CardProduct";
import WrapperTitleBox from "@/components/WrapperTitleBox";
import useProduct from "@/hooks/useProduct";
import { RootState } from "@/store/store";
import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function WaterTank() {
  const { tankWaters, getProductAllTypes } = useProduct();

  const { productsSearch } = useSelector((state: RootState) => state.product);
  useEffect(() => {
    getProductAllTypes();
  }, []);

  return (
    <main className={`md:container mx-auto p-4`}>
      <Box display="flex" flexDirection="column" gap={2}>
        {productsSearch && productsSearch.length > 0 ? (
          <WrapperTitleBox title="KẾT QUẢ TÌM KIẾM" className="bg-white">
            <Grid container spacing={2} p={2}>
              {productsSearch.map((product) => {
                return (
                  <Grid lg={2} md={3} sm={6} xs={12} item key={product.id}>
                    <CardProduct item={product} />
                  </Grid>
                );
              })}
            </Grid>
          </WrapperTitleBox>
        ) : (
          <>
            <WrapperTitleBox title="BỒN NƯỚC SƠN HÀ" className="bg-white">
              <Grid container spacing={2} p={2}>
                {tankWaters.map((product) => {
                  return (
                    <Grid lg={2} md={3} sm={6} xs={12} item key={product.id}>
                      <CardProduct item={product} />
                    </Grid>
                  );
                })}
              </Grid>
            </WrapperTitleBox>
          </>
        )}
      </Box>
    </main>
  );
}
