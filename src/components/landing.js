import React from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../images/me.jpg';

function Landing() {
    return (
        <div className="landing">
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img src={avatar} className="avatar-img" alt="avatar" />
                    <div className="banner-text">
                        <h1>FullStack Web Developer</h1>

                        <hr/>

                        <p>HTML/CSS | Javascript | PHP | Laravel | React JS | Angular JS | MySQL | PostgreSQL</p>

                        <div className="social-links">
                            <a href="#" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-instagram" aria-hidden="true" />
                            </a>
                            <a href="#" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    );
}

export default Landing;