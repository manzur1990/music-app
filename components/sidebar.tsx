import NextImage from 'next/image';

import {
    Box,
    List,
    ListItem,
    ListIcon,
    Divider,
    Center,
    LinkBox,
    LinkOverlay,
} from '@chakra-ui/layout';
import {
    MdHome,
    MdSearch,
    MdLibraryMusic,
    MdPlayListAdd,
    MdFavorite,
} from 'react-icons';

const Sidebar = () => {
    return (
        <Box
            width='100%'
            height='calc(100vh - 100px)'
            bg='black'
            paddingX='5px'
            color='gray'>
            sidebar
            <Box paddingY='20px'>
                <Box width='120px' marginBottom='20px' paddingX='20px'>
                    <NextImage src='/logo.png' height={100} width={100} />
                </Box>
            </Box>
        </Box>
    );
};

export default Sidebar;
