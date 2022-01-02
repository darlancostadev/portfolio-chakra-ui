import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  useColorMode,
} from '@chakra-ui/react'
import React from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

function Menu() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex maxW={{ xl: '1200px' }} m='0 auto' w='100%'>
      <Box p='2'>
        <Heading size='md' fontWeight={600} fontFamily={'Poppins'}>
          Darlan Costa DEV
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Box>
    </Flex>
  )
}

export default Menu
