import React, { ReactNode } from "react";
import { IconButton, Icon, Box } from "@chakra-ui/react";
import { IconType } from "react-icons";
import Link from "next/link";
type TSocialButton = {
  href: string;
  icon: IconType;
  label: string;
};

const SocialButton = (props: TSocialButton) => {
  const { href, icon, label } = props;
  let aicon = <Icon as={icon} boxSize={"40px"} />;

  return (
    <Link href={href}>
      <a className="btnlink" target="_blank">
        <IconButton
          aria-label={label}
          variant="ghost"
          size="lg"
          icon={aicon}
          _hover={{
            bg: "blue.500",
            color: "white",
          }}
          isRound
        />
      </a>
    </Link>
  );
};

export default SocialButton;
