import Banner from "@/components/Banner";
import CardProduct from "@/components/CardProduct";
import WrapperTitleBox from "@/components/WrapperTitleBox";
import { categories } from "@/shared/data/categories";
import { productData } from "@/shared/data/productData";
import { Box, Button, Grid } from "@mui/material";

export default function Home() {
  return (
    <main className={`md:container mx-auto p-4`}>
      <Box display="flex" flexDirection="column" gap={2}>
        <Banner />
        <WrapperTitleBox title="SẢN PHẨM TIÊU BIỂU" className="bg-white">
          <Grid container spacing={1} p={2} pb={0}>
            {categories.map((item) => (
              <Grid item key={item.id}>
                <Button variant="outlined" size="small" color="error">
                  {item.name}
                </Button>
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={2} p={2}>
            {productData.map((product) => {
              return (
                <Grid lg={2} md={3} sm={6} xs={12} item key={product.id}>
                  <CardProduct item={product} />
                </Grid>
              );
            })}
          </Grid>
          <Box display="flex" width="100%" justifyContent="center" pb={2}>
            <Button variant="contained" color="primary">
              Xem thêm
            </Button>
          </Box>
        </WrapperTitleBox>
        <WrapperTitleBox
          title="BỒN NƯỚC SƠN HÀ"
          srcBanner="https://picsum.photos/2000/600.jpg"
          className="bg-white"
        >
          <Grid container spacing={2} p={2}>
            {productData.map((product) => {
              return (
                <Grid lg={2} md={3} sm={6} xs={12} item key={product.id}>
                  <CardProduct item={product} />
                </Grid>
              );
            })}
          </Grid>
        </WrapperTitleBox>
      </Box>
    </main>
  );
}
