import {
  Header,
  Group,
  Button,
  Text,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { logo } from '../assets/images/image';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useStyles } from '../constants/common/commonStyles';

const Navbar = (props) => {
  const { setThemeMode } = props;
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes, theme } = useStyles();
  const navigate = useNavigate();

  const onNavigateMobile = (path) => {
    closeDrawer();
    navigate(path);
  };

  return (
    <Box pb={20}>
      <Header height={60} px='md'>
        <Group className='flex justify-around' sx={{ height: '100%' }}>
          <img
            src={logo}
            alt='Pet Fair Logo'
            style={{ maxWidth: '25%', width: '200px' }}
          />

          <Group
            sx={{ height: '100%' }}
            spacing={0}
            className={classes.hiddenMobile}>
            <Text onClick={() => navigate('/')} className={classes.link}>
              All Pets
            </Text>
            <Text onClick={() => navigate('/dogs')} className={classes.link}>
              Dogs
            </Text>
            <Text onClick={() => navigate('/cats')} className={classes.link}>
              Cats
            </Text>
            <Text onClick={() => navigate('/birds')} className={classes.link}>
              Birds
            </Text>
            <Text
              onClick={() => navigate('/reptiles')}
              className={classes.link}>
              Reptiles
            </Text>
          </Group>

          <Group>
            {theme.colorScheme === 'dark' ? (
              <Button variant='default' onClick={() => setThemeMode('light')}>
                <Icon icon='tdesign:mode-light' />
              </Button>
            ) : (
              <Button variant='default' onClick={() => setThemeMode('dark')}>
                <Icon icon='tdesign:mode-dark' />
              </Button>
            )}
            <Button
              onClick={() => navigate('/pets/register')}
              className={classes.hiddenMobile}>
              Introduce Pet
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size='100%'
        padding='md'
        title='Navigation'
        className={classes.hiddenDesktop}
        zIndex={1000000}>
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx='-md'>
          <Divider
            my='sm'
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <Text onClick={() => onNavigateMobile('/')} className={classes.link}>
            All Pets
          </Text>
          <Text
            onClick={() => onNavigateMobile('/dogs')}
            className={classes.link}>
            Dogs
          </Text>
          <Text
            onClick={() => onNavigateMobile('/cats')}
            className={classes.link}>
            Cats
          </Text>
          <Text
            onClick={() => onNavigateMobile('/birds')}
            className={classes.link}>
            Birds
          </Text>
          <Text
            onClick={() => onNavigateMobile('/reptiles')}
            className={classes.link}>
            Reptiles
          </Text>

          <Divider
            my='sm'
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <Group position='center' grow pb='xl' px='md'>
            <Button onClick={() => onNavigateMobile('/pets/register')}>
              Introduce Pet
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default Navbar;
