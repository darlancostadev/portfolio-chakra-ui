import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

// import { Container } from './styles';

function Footer() {
  return (
    <Flex maxW={{ xl: '1200px' }} m='0 auto' w='100%'>
      <Box>
        <Heading>Footer</Heading>
      </Box>
    </Flex>
  )
}

export default Footer
