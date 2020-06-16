import React from "react"
import { Box, Flex, Text, Link, Image } from "rebass"
import Wave from "react-wavify"

import HomeLine from "../images/HomeLine.svg"
import Arrow from "../images/Arrow.svg"
import HomeImage from "../assets/HomeImage.svg"

const Home = () => {
  return (
    <Flex id="home" flexDirection="column">
      <Flex width="100%" height="100vh" px="10vw" alignItems="center">
        <Box width={3 / 4}>
          <Box>
            <Text
              fontFamily="Poppins"
              fontWeight="600"
              fontSize="1.2vw"
              letterSpacing="0.2vw"
              pb="1.313vw"
              color="#32ADB2"
            >
              HI! I AM JOSEPH CHOI.
            </Text>
            <Text fontFamily="Playfair Display" fontWeight="400" fontSize="4vw">
              Web Developer / Game Designer
            </Text>
            <Text
              fontFamily="Playfair Display"
              fontWeight="400"
              fontSize="4vw"
              pb="5.125vw"
            >
              based in Auckland.
            </Text>
            <Flex>
              <Image src={HomeLine} pr="1vw" />
              <Link
                fontFamily="Poppins"
                fontWeight="400"
                fontSize="0.875vw"
                letterSpacing="0.4vw"
              >
                LEARN MORE
              </Link>
              <Image src={Arrow} pl="1vw" />
            </Flex>
          </Box>
        </Box>
        <Box width={1 / 4}>
          <HomeImage />
        </Box>
      </Flex>
      <Box sx={{ position: "absolute" }} width="100%" pt="78vh" opacity="0.8">
        <Wave
          fill="#E9FFF9"
          paused={false}
          options={{
            height: 10,
            amplitude: 30,
            speed: 0.15,
            points: 5,
          }}
        />
      </Box>
      <Box sx={{ position: "absolute" }} width="100%" pt="85vh">
        <Wave
          fill="#DDFBF2"
          paused={false}
          options={{
            height: 10,
            amplitude: 30,
            speed: 0.15,
            points: 7,
          }}
        />
      </Box>
    </Flex>
  )
}

export default Home
