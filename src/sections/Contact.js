import React from "react"
import { Flex, Box, Image } from "rebass"
import Icon from "../images/Icon.svg"
import {
  LinkedinFilled,
  InstagramOutlined,
  MailFilled,
} from "@ant-design/icons"

const Contact = () => {
  return (
    <Flex
      id="contact"
      flexDirection="column"
      width="100%"
      height="100vh"
      px="10vw"
      py="20vh"
      alignItems="center"
      justifyContent=""
    >
      <Box mx="auto">
        <Image src={Icon} width="8.75vw" py="7vw" />
      </Box>
      <Box sx={{ borderTop: "1px solid #32ADB2" }}>
        <LinkedinFilled
          style={{ fontSize: "16px", color: "black", padding: 30 }}
        />
        <InstagramOutlined
          style={{ fontSize: "16px", color: "black", padding: 30 }}
        />
        <MailFilled style={{ fontSize: "16px", color: "black", padding: 30 }} />
      </Box>
    </Flex>
  )
}

export default Contact
