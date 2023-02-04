import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Mycrumbs from './RouterBreadcrumbs';
import UtilPage from './SubPages/UtilPage'
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />}>
  //       <Route index element={<App />} />
  //       <Route path="teams" element={<UtilPage />}>
  //         <Route path=":teamId" element={<UtilPage />} />
  //         <Route path="new" element={<UtilPage />} />
  //         <Route index element={<UtilPage />} />
  //       </Route>
  //     </Route>
  //     <Route path="util" element={<UtilPage />} />

  //   </Routes>
  // </BrowserRouter>
  <div>
    <Mycrumbs />
    {/* <Outlet /> */}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
