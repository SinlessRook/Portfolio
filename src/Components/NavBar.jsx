import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SortIcon from '@mui/icons-material/Sort';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import InfoIcon from '@mui/icons-material/Info';
import { motion } from 'framer-motion';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })( // styling
    ({ theme }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
        position: 'relative',
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

export default function NavBar(props) {
    const onNavigate =props.onNavigate;
    const currentPage = props.currentPage;

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    // Animation variants for fade-in effect
    const animationVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            
            <AppBar position="fixed" open={open} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                <motion.div
                initial={{ opacity: 0,scale: 0.5 }}
                animate={{ opacity: 1,scale: 1 }}
                transition={{ duration: 1.5 ,type: 'spring', stiffness: 150, delay:0.1 }}
                >
                <Toolbar>
                        <Typography 
                            variant="h6" 
                            noWrap 
                            sx={{ flexGrow: 1, textAlign: 'center', fontSize: '3rem', fontWeight: 'bold' }} 
                            component="div"
                        >
                            PORTFOLIO
                        </Typography>
                    
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        sx={[open && { display: 'none' }]}
                    >
                        <SortIcon />
                    </IconButton>
                </Toolbar>
                </motion.div>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem 
                    onClick={() => onNavigate(0)}
                    key={'Home'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon
                            // style={{ 
                            //     color: currentPage === 0 ? '#3B7778' : 'black' ,
                            //     scale: currentPage === 0 ? 1.5 : 1 
                            // }}
                            >
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText 
                            // style={{ 
                            //     color: currentPage === 0 ? '#3B7778' : 'black' ,
                            //     scale: currentPage === 0 ? 1.5 : 1, 
                            //     fontWeight: currentPage === 0? '1000': null
                            // }}
                            primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem 
                     onClick={() => onNavigate(1)}
                    key={'About Me'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary="About Me" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem
                     onClick={() => onNavigate(2)}
                    key={'Projects'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountTreeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Projects" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem
                     onClick={() => onNavigate(3)}
                    key={'Contact Me'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Contact Me" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
}
