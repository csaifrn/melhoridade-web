import {
  Avatar,
  Box,
  Divider,
  Drawer,
  SvgIcon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme, 
} from "@mui/material";
import Icon from '@mui/material/Icon';
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { useDrawerContext } from "./DrawerContext";
import {children} from "../../../types/Children"
import { getAuth, signOut } from "firebase/auth";




interface IListItemLinkProps {
  label: string;
  icon: string;
  to: string;
  onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({
  to,
  icon,
  label,
  onClick,
}) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(to);
    onClick?.();
  };
  const resolvedPath = useResolvedPath(to);
  
  const match = useMatch({ path: resolvedPath.pathname, end: false });
  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
      <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const MenuLateral: React.FC<children> = ({ children }) => {
  const theme = useTheme();
  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
  const auth = getAuth();

  function signOutButton(){
    signOut(auth);
    toggleDrawerOpen();
}
  return (
    <>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        variant="temporary"
        onClose={toggleDrawerOpen}
      >
        <Box width={theme.spacing(28)} height="100%">
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src=""
            />
          </Box>
          <Divider></Divider>
          <List component="nav">
              {drawerOptions.map(drawerOption => (
                <ListItemLink
                  to={drawerOption.path}
                  key={drawerOption.path}
                  icon={drawerOption.icon}
                  label={drawerOption.label}
                  onClick={toggleDrawerOpen}
                />
              ))}
            </List>
        </Box>
        <Box>
            <List component="nav">
              <ListItemButton  onClick={signOutButton}>
                <ListItemIcon >
                  <Icon>logout</Icon>
                </ListItemIcon>
                <ListItemText primary="Sair" />
              </ListItemButton>
            </List>
          </Box>
      </Drawer>
      <Box height="100vh">{children}</Box>
    </>
  );
};

export { useDrawerContext };
