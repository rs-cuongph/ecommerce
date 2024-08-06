import { IProduct } from "@/shared/interfaces";
import { ROUTES_NAME } from "@/shared/routes";
import { formatNumberWithCommas } from "@/shared/utils/formatNumberWithCommas";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

interface ICardProductProps {
  item: IProduct;
}

const CardProduct = ({ item }: ICardProductProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`${ROUTES_NAME.productDetail}/${item.id}`);
  };
  return (
    <Card onClick={handleClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={item.image_url ?? ""}
          sx={{ height: 200, objectFit: "cover" }}
        />
        <CardContent className="xs:p-[5px] sm:p-[5px] md:p-[10px]">
          <Typography
            gutterBottom
            variant="subtitle1"
            fontWeight={600}
            component="div"
            className="text-base md:text-base sm:text-sm xs:text-sm lg:min-h-[55px]"
          >
            {item.name}
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            className="text-lg md:text-lg sm:text-sm xs:text-sm text-red"
          >
            {formatNumberWithCommas(
              item.discounted_price > 0
                ? item.discounted_price
                : item.original_price
            )}
            <u>đ</u>
          </Typography>
          {item.discounted_price > 0 && (
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight={600}
              className="line-through"
            >
              {formatNumberWithCommas(item.original_price)}
              <u>đ</u>
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardProduct;
