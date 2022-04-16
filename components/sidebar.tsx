import NextImage from 'next/image';
import NavigationItems from '../components/navigationItems';
import MusicMenu from '../components/musicMenu';

import { Box, Divider, Center } from '@chakra-ui/layout';

const Sidebar = () => {
    return (
        <Box
            width='100%'
            height='calc(100vh - 100px)'
            bg='black'
            paddingX='5px'
            color='gray'>
            <Box paddingY='20px'>
                <Box width='120px' marginBottom='20px' paddingX='20px'>
                    <NextImage src='/logo.png' height={100} width={100} />
                </Box>
                <NavigationItems />
                <Divider color='gray.900' />
                <MusicMenu />
            </Box>
        </Box>
    );
};

export default Sidebar;
