import React from "react"
import { Flex, Box, Card, Text, Image, Link } from "rebass"

import Vidly from "../images/Vidly.png"
import Portfolio from "../images/Portfolio.png"
import Hoopjump from "../images/HoopJump.png"
import PlanetBreaker from "../images/PlanetBreaker.png"
import Boomerang from "../images/Boomerang.png"
import Seasaw from "../images/Seasaw.png"

const { Meta } = Card

const Work = () => {
  return (
    <Flex
      id="work"
      flexWrap="wrap"
      width="100%"
      height="160vh"
      px="10vw"
      py="20vh"
      alignItems="flex-start"
      justifyContent="space-between"
      fontFamily="Poppins"
    >
      <Box width={1 / 3} width="25vw">
        <Card>
          <Link href="https://dry-sea-88218.herokuapp.com/movies">
            <Image
              src={Vidly}
              height="25vw"
              width="25vw"
              sx={{
                ":hover": {
                  outline: "3px solid rgba(191,191,191,0.7)",
                },
              }}
            />
          </Link>
          <Text fontSize="1.5vw" pb="1vw" pt="1vw">
            Vidly Project
          </Text>
          <Text fontSize="1vw" pb="1vw">
            Simple video rental app. Includes adding/deleting movies, data
            sorting, user sign up and login/logout.
          </Text>
          <Text fontSize="1vw" color="#32ADB2" pb="4vw" opacity="0.7">
            React / Bootstrap / MongoDB / Heroku
          </Text>
        </Card>
      </Box>
      <Box width={1 / 3} width="25vw">
        <Card>
          <Link href="https://dry-sea-88218.herokuapp.com/movies">
            <Image
              src={Portfolio}
              height="25vw"
              width="25vw"
              sx={{
                ":hover": {
                  outline: "3px solid rgba(191,191,191,0.7)",
                },
              }}
            />
          </Link>
          <Text fontSize="1.5vw" pb="1vw" pt="1vw">
            Portfolio Website (WIP)
          </Text>
          <Text fontSize="1vw" pb="1vw">
            My first portfolio website I designed and built. I was able to apply
            JSX, CSS basics along with svg animations and routing.
          </Text>
          <Text fontSize="1vw" color="#32ADB2" pb="4vw" opacity="0.7">
            React / Rebass / Gatsby / Figma
          </Text>
        </Card>
      </Box>
      <Box width={1 / 3} width="25vw">
        <Card>
          <Link href="https://apps.apple.com/us/app/throw-it/id1478687060">
            <Image
              src={Boomerang}
              height="25vw"
              width="25vw"
              sx={{
                ":hover": {
                  outline: "3px solid rgba(191,191,191,0.7)",
                },
              }}
            />
          </Link>
          <Text fontSize="1.5vw" pb="1vw" pt="1vw">
            Throw It!!
          </Text>
          <Text fontSize="1vw" pb="1vw">
            Hypercasual 3D shooter game throwing boomerang to hit multiple
            blocks at once avoiding obstacles. Throw it like a real master!
          </Text>
          <Text fontSize="1vw" color="#32ADB2" pb="4vw" opacity="0.7">
            Unity / Blender / 3D animation
          </Text>
        </Card>
      </Box>
      <Box width={1 / 3} width="25vw">
        <Card>
          <Link href="https://apps.apple.com/us/app/seasaw/id1444287969">
            <Image
              src={Seasaw}
              height="25vw"
              width="25vw"
              sx={{
                ":hover": {
                  outline: "3px solid rgba(191,191,191,0.7)",
                },
              }}
            />
          </Link>
          <Text fontSize="1.5vw" pb="1vw" pt="1vw">
            Seasaw
          </Text>
          <Text fontSize="1vw" pb="1vw">
            Keep the sea-saw in balance! and yes, we got the spelling right!
            Cute sea creatures' life hangs in your ability to balance!
          </Text>
          <Text fontSize="1vw" color="#32ADB2" pb="4vw" opacity="0.7">
            Unity / Illustrator / Dragonbone
          </Text>
        </Card>
      </Box>
      <Box width={1 / 3} width="25vw">
        <Card>
          <Link href="https://www.appannie.com/apps/ios/app/planetbreaker/details/">
            <Image
              src={PlanetBreaker}
              height="25vw"
              width="25vw"
              sx={{
                ":hover": {
                  outline: "3px solid rgba(191,191,191,0.7)",
                },
              }}
            />
          </Link>
          <Text fontSize="1.5vw" pb="1vw" pt="1vw">
            Planet Breaker
          </Text>
          <Text fontSize="1vw" pb="1vw">
            The ultimate planet breaking game! BOOM, control the comet, hit the
            right platforms and get to a higher orbit to get a damage boost!
          </Text>
          <Text fontSize="1vw" color="#32ADB2" pb="4vw" opacity="0.7">
            Unity / Illustrator
          </Text>
        </Card>
      </Box>
      <Box width={1 / 3} width="25vw">
        <Card>
          <Link href="https://apps.apple.com/us/app/hoop-jump/id1448344219">
            <Image
              src={Hoopjump}
              height="25vw"
              width="25vw"
              sx={{
                ":hover": {
                  outline: "3px solid rgba(191,191,191,0.7)",
                },
              }}
            />
          </Link>
          <Text fontSize="1.5vw" pb="1vw" pt="1vw">
            Hoop Jump
          </Text>
          <Text fontSize="1vw" pb="1vw">
            Jump over spinning clocks to reach the end! Plunge into the land of
            mysterious wonders of time and space.
          </Text>
          <Text fontSize="1vw" color="#32ADB2" pb="4vw" opacity="0.7">
            Unity / Illustrator
          </Text>
        </Card>
      </Box>
    </Flex>
  )
}

export default Work
