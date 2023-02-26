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
import HelloWorldPage from '../UtilPage'
import ThingsManagerPage from '../ThingsManagerPage'

import { Provider } from 'react-redux';
import store from '../../store/store';
const LinkRouter = (props) => (
  <Link {...props} component={RouterLink} />
);




export default function MainRouter() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <MemoryRouter initialEntries={['/']} initialIndex={0}> */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>

          <Routes>
            <Route path="*" element={<HelloWorldPage />} />
            <Route path="test" element={<HelloWorldPage />} />
            <Route path="trash" element={<HelloWorldPage />} />
            <Route path="things" element={<ThingsManagerPage />} />
          </Routes>

        </div>
        {/* </MemoryRouter> */}
      </BrowserRouter>
    </Provider>
  );
}

