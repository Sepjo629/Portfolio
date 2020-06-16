import React from "react"
import { Box, Flex, Text, Button } from "rebass"
import { OverPack } from "rc-scroll-anim"
import TweenOne from "rc-tween-one"

const About = () => {
  return (
    <Flex
      id="about"
      width="100%"
      height="100vh"
      px="10vw"
      py="20vh"
      bg="#ddfbf2"
      alignItems="center"
    >
      <Box width={1 / 2}>
        <OverPack>
          <TweenOne
            animation={{ y: 0, opacity: 1, playScale: [0, 0.5] }}
            style={{ transform: "translateY(30px)", opacity: 0 }}
          >
            <Text
              fontFamily="Poppins"
              fontWeight="400"
              fontSize="2.5vw"
              py="30vh"
            >
              About.
            </Text>
          </TweenOne>
        </OverPack>
      </Box>
      <Box width={1 / 2}>
        <Box>
          <Text
            fontFamily="Poppins"
            fontWeight="400"
            fontSize="1.25vw"
            pb="2vw"
            color="#32ADB2"
          >
            CREATING NEW EXPERIENCES THAT ARE FUN TO PLAY.
          </Text>
          <Text
            fontFamily="Lora"
            fontWeight="400"
            fontSize="1.25vw"
            pb="1.25vw"
            color="#454545"
          >
            I’m a self-taught web developer with a passion for front end
            development and UX design. Currently working on intuitive game
            designs at Two-Eight studio. I’m always eager to learn, love solving
            problems and leverage my skills to facilitate intuitive, performant
            experiences.
          </Text>
          <Text
            fontFamily="Lora"
            fontWeight="400"
            fontSize="1.25vw"
            pb="3vw"
            color="#454545"
          >
            I am currently looking for a job, aspiring toward a career that will
            allow me to channel my creativity through crafting beautiful
            software and engaging experiences.
          </Text>
          <Button
            backgroundColor="#32ADB2"
            px={13}
            py={10}
            fontFamily="Poppins"
            fontWeight="600"
            fontSize="0.875vw"
          >
            Resume
          </Button>
        </Box>
      </Box>
    </Flex>
  )
}

export default About
