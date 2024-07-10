import PaperCustom from "@/components/common/PaperCustom/PaperCustom";
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

const ProductInfoCard = () => {
  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography variant="h6">Bồn nước Nhựa Sơn Hà 300L đứng</Typography>
        <Typography variant="body2">Mã hàng: 2908</Typography>
      </Box>
      <Divider />
      <Box display="flex" flexDirection="column" gap={1}>
        <Box display="flex" gap={1} alignItems="center">
          <Typography variant="body1" className="text-sm">
            Giá hiện tại:
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            className="text-lg text-red"
          >
            {formatNumberWithCommas(7000000)}
            <u>đ</u>
          </Typography>
        </Box>
        <Box display="flex" gap={1} alignItems="center">
          <Typography variant="body1" className="text-sm">
            Giá cũ:
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontWeight={600}
            className="line-through"
          >
            {formatNumberWithCommas(7000000)}
            <u>đ</u>
          </Typography>
        </Box>
        <List>
          <ListItem>
            <Typography
              variant="body1"
              className="text-red text-sm text-sm"
              fontWeight={600}
            >
              Bảo hành:
            </Typography>
            <Typography variant="body1" className="text-sm">
              {" "}
              10 năm
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant="body1"
              className="text-red text-sm"
              fontWeight={600}
            >
              Kiểu dáng:
            </Typography>
            <Typography variant="body1" className="text-sm">
              {" "}
              Bồn đứng
            </Typography>
          </ListItem>
        </List>
        <Box display="flex" gap={1} alignItems="center">
          <Typography variant="body1" className="text-sm">
            Tình trạng:
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            className="text-xl"
            color="primary"
          >
            CÒN HÀNG
          </Typography>
        </Box>
      </Box>
      <PaperCustom variant="outlined" className="px-6 py-2 border-red">
        <ul className="list-disc">
          <li>Miễn phí vận chuyển toàn quốc</li>
          <li>Miễn phí khảo sát tư vấn</li>
          <li>Áp dụng cho khách hàng gọi điện, đến trực tiếp hoặc chát!</li>
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
