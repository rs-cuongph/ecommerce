import PaperCustom from "@/components/common/PaperCustom/PaperCustom";
import { IProduct } from "@/shared/interfaces";
import { formatNumberWithCommas } from "@/shared/utils/formatNumberWithCommas";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";

const ProductInfoCard = ({ product }: { product: IProduct }) => {
  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography
          variant="h6"
          className="text-base md:text-base sm:text-sm xs:text-sm"
        >
          {product?.name ?? ""}
        </Typography>
        <Typography
          variant="body2"
          className="text-base md:text-base sm:text-sm xs:text-sm"
        >
          Mã hàng: {product?.id ?? ""}
        </Typography>
      </Box>
      <Divider />
      <Box display="flex" flexDirection="column" gap={1}>
        <Box display="flex" gap={1} alignItems="center">
          <Typography
            variant="body1"
            className="text-base md:text-base sm:text-sm xs:text-sm"
          >
            Giá hiện tại:
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            className="text-lg md:text-lg sm:text-sm xs:text-sm text-red"
          >
            {formatNumberWithCommas(product?.discounted_price ?? 0)}
            <u>đ</u>
          </Typography>
        </Box>
        <Box display="flex" gap={1} alignItems="center">
          <Typography
            variant="body1"
            className="text-base md:text-base sm:text-sm xs:text-sm"
          >
            Giá cũ:
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontWeight={600}
            className="line-through"
          >
            {formatNumberWithCommas(product?.original_price ?? 0)}
            <u>đ</u>
          </Typography>
        </Box>
        <Box display="flex" gap={1} alignItems="center">
          <Typography
            variant="body1"
            className="text-red text-sm"
            fontWeight={600}
          >
            Bảo hành:　
          </Typography>
          <Typography variant="body1" className="text-sm">
            {product?.warranty ?? ""}
          </Typography>
        </Box>
        <Box display="flex" gap={1} alignItems="center">
          <Typography variant="body1" className="text-sm">
            Tình trạng:
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            className="text-base md:text-base sm:text-sm xs:text-sm"
            color="primary"
          >
            {product?.status ?? ""}
          </Typography>
        </Box>
      </Box>
      <PaperCustom variant="outlined" className="px-6 py-2 border-red">
        <ul className="list-disc">
          <li>Miễn phí vận chuyển toàn quốc</li>
          <li>Miễn phí khảo sát tư vấn</li>
          <li>Áp dụng cho khách hàng gọi điện hoặc đến trực tiếp!</li>
        </ul>
      </PaperCustom>
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="error"
          className="full-width max-w-[300px]"
        >
          Liên Hệ Tư Vấn Ngay
        </Button>
      </Box>
    </Box>
  );
};

export default ProductInfoCard;
