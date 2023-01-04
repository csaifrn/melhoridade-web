import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme, 
  ListItem,
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { useDrawerContext } from "./DrawerContext";
import {children} from "../../../types/Children"
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

  return (
    <>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        variant="temporary"
        onClose={toggleDrawerOpen}
      >
        <Box width={theme.spacing(28)}>
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
          <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
        </List>
        </Box>
      </Drawer>
      <Box height="100vh">{children}</Box>
    </>
  );
};

export { useDrawerContext };
