import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/landing';
import About from './components/about';
import Service from './components/service';
import Projects from './components/projects';
import Contact from './components/contact';

function Main() {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/service" component={Service} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
        </Switch>
    );
}

export default Main;