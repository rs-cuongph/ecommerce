import CardProduct from "@/components/CardProduct";
import { productData } from "@/shared/data/productData";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <main className={`container mx-auto p-4`}>
      <Box display="flex" gap={2} className="xs:flex-col sm:flex-row">
        {productData.map((product) => {
          return <CardProduct key={product.id} item={product} />;
        })}
      </Box>
    </main>
  );
}
