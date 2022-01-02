import React from 'react'
import { Flex } from '@chakra-ui/react'
import Header from '../Header'
import Footer from '../Footer'

export default function LandingLayout({ children }) {
  return (
    <Flex direction='column' align='left' p='2' m='0 auto'>
      <Header />
      {children}
      <Footer />
    </Flex>
  )
}
