// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from "../home/home";
import '../../App.css';
import {Outlet} from "react-router-dom";
import Nav from './nav';
import Footer from '../footer/footer';

function Layout() {

      return(
        <>
           <Nav/>
            <Outlet/>
           <Footer/>
        </>
      )
}

export default Layout;