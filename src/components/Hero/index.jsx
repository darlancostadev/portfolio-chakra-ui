import React from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Skeleton,
  Stack,
  Text,
} from '@chakra-ui/react'

// import { Container } from './styles';

function Hero() {
  return (
    <Flex
      direction={{ base: 'column-reverse', md: 'row' }}
      maxW={{ xl: '1200px' }}
      m='0 auto'
      w='100%'
    >
      <Box textAlign={'left'} py={{ base: 10, md: 36 }} w='100%'>
        <Heading
          fontWeight={600}
          fontFamily={'Poppins'}
          as='h1'
          fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
          textAlign={{ base: 'center', sm: 'left' }}
        >
          Olá meu nome é
          <br />
          <Text as={'span'} color={'green.400'}>
            Darlan Costa
          </Text>
          <br />
          vem me conhecer! <br />
        </Heading>
      </Box>
      <Box
        h='80px'
        w='100%'
        pl={{ base: '0', md: '15' }}
        m='auto'
        my={{ base: 5, md: 36 }}
      >
        <Skeleton height='100%' borderRadius={10} />
      </Box>
    </Flex>
  )
}

export default Hero
