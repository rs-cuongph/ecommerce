import { IProduct } from "@/shared/interfaces";
import { formatNumberWithCommas } from "@/shared/utils/formatNumberWithCommas";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

interface ICardProductProps {
  item: IProduct;
}

const CardProduct = ({ item }: ICardProductProps) => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={item.imgUrl ?? "https://picsum.photos/3000/3000.jpg"}
        />
        <CardContent className="xs:p-[5px] sm:p-[5px] md:p-[10px]">
          <Typography
            gutterBottom
            variant="subtitle1"
            fontWeight={600}
            component="div"
            className="text-base md:text-base xs:text-sm"
          >
            {item.name}
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            className="text-lg text-red"
          >
            {formatNumberWithCommas(item.price)}
            <u>đ</u>
          </Typography>
          {item.oldPrice && (
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight={600}
              className="line-through"
            >
              {formatNumberWithCommas(item.oldPrice)}
              <u>đ</u>
            </Typography>
          )}
          <Typography
            variant="body2"
            className="overflow-hidden overflow-ellipsis whitespace-nowrap text-primary"
          >
            {item.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardProduct;
