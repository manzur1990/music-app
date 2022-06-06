import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import PlayerLayout from '../components/playerLayout'
import { StoreProvider } from 'easy-peasy'
import { store } from '../lib/store'
import 'reset-css'

const theme = extendTheme({
  colors: {
    gray: {
      100: '#F5F5F5',
      300: '#EEEEEE',
      400: '#BDBDBD',
      500: '#757575',
      600: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ':focus': {
            outline: 'none',
            boxShadow: 'none',
          },
        },
      },
    },
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <StoreProvider store={store}>
        {Component.authPage ? (
          <Component {...pageProps} />
        ) : (
          <PlayerLayout>
            <Component {...pageProps} />
          </PlayerLayout>
        )}
      </StoreProvider>
    </ChakraProvider>
  )
}

export default MyApp
