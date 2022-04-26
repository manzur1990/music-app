import NextImage from 'next/image'
import NextLink from 'next/link'
import NavigationItems from '../components/navigationItems'
import MusicMenu from '../components/musicMenu'

import {
  Box,
  Divider,
  Center,
  List,
  ListItem,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/layout'

const playList = new Array(30).fill(1).map((_, i) => `Plalist ${i + 1}`)

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.png" height={100} width={100} />
        </Box>
        <NavigationItems />
        <MusicMenu />
        <Divider marginTop="20px" color="gray.900" />
        <Box height="66%" overflowY="auto" paddingY="20px">
          <List spacing="2">
            {playList.map((playlist) => (
              <ListItem paddingX="20px" key={playlist}>
                <LinkBox>
                  <NextLink href="/">
                    <LinkOverlay>{playlist}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
