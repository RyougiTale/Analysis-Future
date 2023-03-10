import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Link, { LinkProps } from '@mui/material/Link';
import ListItem, { ListItemProps } from '@mui/material/ListItem';
import Collapse from '@mui/material/Collapse';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {
  Link as RouterLink,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
  BrowserRouter,
} from 'react-router-dom';
// import HelloWorldPage from './SubPages/UtilPage'


const LinkRouter = (props) => (
  <Link {...props} component={RouterLink} />
);

function ListItemLink(props) {
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  let icon = null;
  if (open != null) {
    icon = open ? <ExpandLess /> : <ExpandMore />;
  }

  return (
    <li className='ListSingleItem'>
      <ListItem button component={RouterLink} to={to} {...other}>
        <ListItemText primary={primary} />
        {icon}
      </ListItem>
    </li>
  );
}

const breadcrumbNameMap = {
  '/inbox': 'Inbox',
  '/inbox/important': 'Important',
  '/trash': 'Trash',
  '/spam': 'Spam',
  '/drafts': 'Drafts',
};



const Page = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  console.log(pathnames);
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <LinkRouter underline="hover" color="inherit" to="/">
        JavyHome
      </LinkRouter>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        console.log("last: " + index + ", to: " + to);

        return last ? (
          <Typography color="text.primary" key={to}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
};


function UtilPage() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  console.log("hello world, this is util page");
  return (
    <Box className='MainBox' sx={{ display: 'flex', flexDirection: 'column', width: 360 }}>
      <Box
        className='ListBox'
        sx={{
          bgcolor: 'background.paper',
          mt: 1,
        }}
        component="nav"
        aria-label="mailbox folders"
      >
        <List>
          <ListItemLink to="/inbox" open={open} onClick={handleClick} />
          <Collapse component="li" in={open} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItemLink sx={{ pl: 4 }} to="/inbox/important" />
            </List>
          </Collapse>
          <ListItemLink to="/trash" />
          <ListItemLink to="/spam" />
        </List>
      </Box>
    </Box>
  );
}

export default UtilPage;
