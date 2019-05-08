import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Layout, Navigation, Header, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './main';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header title={<Link style={{color:'#fff', textDecoration:'none'}} to="/">Reynaldo</Link>} to="/" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/service">Service</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{color:'#000', textDecoration:'none'}} to="/">Reynaldo</Link>} to="/">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/service">Service</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>

  );
}

export default App;
