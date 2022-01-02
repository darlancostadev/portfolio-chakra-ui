import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: { heading: 'Poppins', body: 'Poppins' },
}
const theme = extendTheme({ config })

export default theme
