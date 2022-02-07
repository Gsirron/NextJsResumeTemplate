import { Stack } from "@chakra-ui/react";
import React from "react";
import ResumeData from "../data/resumeData";
import SocialButton from "./SocialButton";

const SocialMediaBtnStack = () => {
  return (
    <Stack spacing={{ base: 4, md: 8, lg: 20 }} direction={"row"}>
      {ResumeData.social.map((buttoninfo) => (
        <SocialButton key={buttoninfo.label} {...buttoninfo} />
      ))}
    </Stack>
  );
};

export default SocialMediaBtnStack;
