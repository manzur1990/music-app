import NextLink from 'next/link'

import {
  Box,
  List,
  ListItem,
  ListIcon,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/layout'

import { MdHome, MdSearch, MdLibraryMusic } from 'react-icons/md'

const navMenu = [
  { name: 'Home', icon: MdHome, route: '/' },
  { name: 'Search', icon: MdSearch, route: '/search' },
  { name: 'Your Library', icon: MdLibraryMusic, route: '/library' },
]

const NavigationItems = () => {
  return (
    <Box marginBottom="20px">
      <List spacing={2}>
        {navMenu.map((menu) => (
          <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
            <LinkBox>
              <NextLink href={menu.route} passHref>
                <LinkOverlay>
                  <ListIcon as={menu.icon} color="white" marginRight="20px" />
                  {menu.name}
                </LinkOverlay>
              </NextLink>
            </LinkBox>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default NavigationItems
