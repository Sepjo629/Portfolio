import React from "react"
import { Flex, Link, Box, Image } from "rebass"

import Icon from "../images/Icon.svg"

const Header = () => {
  return (
    <>
      <Flex
        sx={{
          position: "fixed",
          width: "100%",
          padding: 50,
          transition: "top 0.3s",
          zIndex: "100",
        }}
        alignItems="center"
      >
        <Link href="#home">
          <Image src={Icon} width={42} />
        </Link>
        <Box mx="auto" />
        <Link
          sx={{ textDecoration: "none", color: "black" }}
          href="#about"
          px={10}
        >
          About
        </Link>
        <Link
          sx={{ textDecoration: "none", color: "black" }}
          href="#work"
          px={10}
        >
          Work
        </Link>
        <Link
          sx={{ textDecoration: "none", color: "black" }}
          href="#contact"
          pl={10}
        >
          Contact
        </Link>
      </Flex>
    </>
  )
}

export default Header
