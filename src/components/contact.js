import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import image from '../images/me.jpg';
// import { Map, Marker } from  'google-map-react';

class Contact extends Component {

    componentDidMount() {
        this.renderMap();
    }

    renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBE0eChVb5a8-aXolI5gy6Q8SZ5P30aiQw&callback=initMap")
        window.initMap = this.initMap;
    }

    initMap = () => {
       var map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: -6.203603, lng: 106.782989},
            zoom: 20
        });
    }
    
    render() {

        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Reynaldo Sincar Pratama</h2>
                        <img src={image} height="250px" alt="me"/>
                        <div id="map"></div>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px'}}>
                                    <i className="fa fa-phone" aria-hidden="true"/>
                                    0821-8118-9178
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    reynaldopratama84@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px'}}>
                                    <i className="fa fa-instagram" aria-hidden="true"/>
                                    reynaldo2203
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px'}}>
                                    <i className="fa fa-github" aria-hidden="true"/>
                                    reynaldo22
                                </ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
            // <div id="map"></div>
        );
    }
}

function loadScript(url) {
    var index  = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
  }

export default Contact;