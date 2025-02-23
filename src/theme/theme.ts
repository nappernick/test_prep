// theme.ts
import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    brand: {
      50: '#ffe5e5',
      100: '#ffb8b8',
      200: '#ff8a8a',
      300: '#ff5c5c',
      400: '#ff2e2e',
      500: '#ff0000', // Yelp-inspired red
      600: '#cc0000',
      700: '#990000',
      800: '#660000',
      900: '#330000',
    }
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: { bg: 'brand.600' },
          borderRadius: 'xl',
        }
      }
    },
    Card: {
      baseStyle: {
        p: 6,
        borderRadius: 'xl',
        boxShadow: 'lg',
        bg: 'white',
      }
    }
  }
})
