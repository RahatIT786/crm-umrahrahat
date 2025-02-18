import './App.css';
import AppRoutes from './router/AppRoutes';
import React,{useEffect} from 'react';
import WebFont from 'webfontloader';
function App() {

  useEffect(()=>{

    WebFont.load({
      google: { families: ["Public Sans:300,400,500,600,700"] },
      custom: {
        families: [
          "Font Awesome 5 Solid",
          "Font Awesome 5 Regular",
          "Font Awesome 5 Brands",
          "simple-line-icons",
        ],
        urls: ["/assets/css/fonts.min.css"],
      },
      active: function () {
        sessionStorage.fonts = true;
      },
    });
  },[]);
  return  <AppRoutes />;
}

export default App;
