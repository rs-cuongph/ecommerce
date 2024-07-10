import PaperCustom from "@/components/common/PaperCustom/PaperCustom";
import ListItemIconCustom from "@/components/modules/ItemIcon/ListItemIconCustom";
import { Divider, List, Typography } from "@mui/material";
import React from "react";
import {
  AiFillFileText,
  AiFillGift,
  AiFillRocket,
  AiFillSafetyCertificate,
  AiFillTruck,
} from "react-icons/ai";

const ProductServiceCard = () => {
  return (
    <PaperCustom variant="outlined">
      <Typography className="text-sm text-red font-medium text-center">
        YÊN TÂM MUA SẮM
      </Typography>
      <Divider />
      <List>
        <ListItemIconCustom
          label="Bảo hành Chính Hãng an tâm sử dụng"
          iconEl={<AiFillFileText color="red" size={30} />}
        />
        <Divider />
        <ListItemIconCustom
          label="Giao hàng Miễn phí"
          iconEl={<AiFillTruck color="red" size={30} />}
        />
        <Divider />
        <ListItemIconCustom
          label="Đảm bảo hàng Chính Hãng chất lượng cao"
          iconEl={<AiFillGift color="red" size={30} />}
        />
        <Divider />
        <ListItemIconCustom
          label="Giao hàng Nhanh Chóng - Nhận hàng Nhanh"
          iconEl={<AiFillRocket color="red" size={30} />}
        />
        <Divider />
        <ListItemIconCustom
          label="
Sản phẩm được Kiểm Định Chất Lượng Theo Tiêu Chuẩn"
          iconEl={<AiFillSafetyCertificate color="red" size={30} />}
        />
      </List>
    </PaperCustom>
  );
};

export default ProductServiceCard;
