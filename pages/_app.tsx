import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import 'reset-css';
import PlayerLayout from '../components/playerLayout';

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
        Buton: {
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
});

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <PlayerLayout>
                <Component {...pageProps} />
            </PlayerLayout>
        </ChakraProvider>
    );
}

export default MyApp;
