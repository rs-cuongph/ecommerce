import {
  handleEmailContact,
  handlePhoneNumberContact,
} from "@/shared/utils/contactPhoneOrEmail";
import { Box, Button } from "@mui/material";
import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";

const ContactIcons = () => {
  const email: string = process.env.NEXT_PUBLIC_EMAIL ?? "";
  return (
    <Box className="fixed z-[99] bottom-[30%] right-[10px] flex flex-col gap-[4px]">
      <Button
        variant="contained"
        color="success"
        onClick={() => handlePhoneNumberContact("")}
      >
        <AiFillPhone fontSize={26} />
      </Button>
      <Button variant="contained" onClick={() => handleEmailContact(email)}>
        <BiMailSend fontSize={26} />
      </Button>
    </Box>
  );
};

export default ContactIcons;
