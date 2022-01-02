import { Box, Grid, GridItem, Heading, Skeleton, Text } from '@chakra-ui/react'
import React from 'react'

function ListPost() {
  return (
    <Box maxW={{ xl: '1200px' }} m='0 auto' w='100%'>
      <Text as='h3' mb='5' fontWeight={500} fontFamily={'Poppins'}>
        Alguns dos meus trabalhos:
      </Text>
      <Grid
        templateColumns={{
          base: 'repeat(2, 1fr)',
          sm: 'repeat(3, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={4}
      >
        <GridItem w='100%' h='80px'>
          <Skeleton height='100%' borderRadius={10} />
        </GridItem>
        <GridItem w='100%' h='80px'>
          <Skeleton height='100%' borderRadius={10} />
        </GridItem>
        <GridItem w='100%' h='80px'>
          <Skeleton height='100%' borderRadius={10} />
        </GridItem>
        <GridItem w='100%' h='80px'>
          <Skeleton height='100%' borderRadius={10} />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default ListPost
