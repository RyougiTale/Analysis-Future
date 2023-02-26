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
import { useEffect, useState } from 'react'
import {
  Link as RouterLink,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
  BrowserRouter,
} from 'react-router-dom';


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

function HoverPage() {

}

function Item(props) {
  return (
    <button style={{
      width: '100%',
      height: '100%',
      border: '1px solid #d9d9d9',
      //  outline: 'none'
      background: '#008DC5',
      color: '#fff',
      fontSize: '1.5em',

      position: 'relative',
      overflow: 'hidden',

      borderRadius: '25%',
    }} onClick={() => {
      console.log("hello");

    }} className="item">{props.name}</button>
  )
}

function FloatingBox() {
  const [top, setTop] = useState("50%");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log("use effect");
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const visible = scrollTop >= 5;
      setIsVisible(visible);
      setTop(visible ? `${scrollTop + window.innerHeight / 2}px` : "50%");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (<div style={{
    position: 'absolute',
    zIndex: '1',
    background: '#6f6f6fa1',
    width: '80%',
    height: '80%',
    border: '1px solid black',
    // alignSelf: 'center',
    // justifySelf: 'center',
    left: '50%',
    // top: '50%',
    top: isVisible ? top : "-100px",
    transform: 'translate(-50%, -50%)',
    transition: "top 0.5s",
  }}></div>);
}

function ThingsManagerPage() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  console.log("hello world, this is ThingsManagerPage");
  let thingsArray = [];
  let items_per_row = 4;


  for (let i = 0; i < 13; i++) {
    // if (i % items_per_row == 0) {
    //   thingsArray.push(<div className="row"></div>);
    // }
    // thingsArray[i / items_per_row].push(<div className="item">test</div>);
    thingsArray.push(<div key={i} style={{ width: '250px', height: '250px' }} className="item"><Item name="test" /></div>)
  }
  return (
    <div>
      <FloatingBox />
      <div style={{
        display: 'flex',
        // flexBasis: '100px',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        alignContent: 'center',
        justifyContent: 'center',
        gap: '10px',
        // justifyItems: 'center',
      }} className="ThingsManagerPage">
        {thingsArray}
      </div>
    </div>
  );
}

export default ThingsManagerPage;
