import React from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../images/me.jpg';
import Education from './education';
import Experience from './experience';
import Skill from './skills';

function About() {
    return (
        <div>
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                        <img src={avatar} style={{height: '200px'}} alt="avatar"/>
                    </div>
                    <h2 style={{paddingTop: '1em'}}>Reynaldo Sincar Pratama</h2>
                    <h4>Web Developer</h4>
                    <hr style={{borderTop: '3px solid #000', width: '50%'}} />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <hr style={{borderTop: '3px solid #000', width: '50%'}} />
                    <h2>Location</h2>
                    <h4>Indonesia</h4>
                    <h2>Phone</h2>
                    <h4>+62 821-8118-9178</h4>
                    <h2>Email</h2>
                    <a style={{fontSize: '24px', color: '#000', textDecoration: 'none'}} href="mailto:reynaldopratama84@gmail.com?Subject=Hello%20Reynaldo" target="_top">Email me</a>
                    <hr style={{borderTop: '3px solid #000', width: '50%'}} />
                </Cell>
                <Cell className="right-side" col={8}>
                    <h2>Education</h2>
                    <Education
                        startYear={2015}
                        endYear={2017}
                        schoolName="Xaverius Bandar Lampung"
                        description="Science"
                    />

                    <Education
                        startYear={2017}
                        endYear={2022}
                        schoolName="Binus University"
                        description="Computer Science"
                    />

                    <hr style={{borderTop: '3px solid #fff'}} />

                    <h2>Experience</h2>
                    <Experience
                        startYear={2017}
                        endYear={2017}
                        jobName="Web Developer"
                        description="Build website for Dearte Cafe"
                    />
                    
                    <Experience
                        startYear={2017}
                        endYear={2017}
                        jobName="Web Developer"
                        description="Build website for Delotuz Kitchen"
                    />

                    <Experience
                        startYear={2018}
                        endYear="Current"
                        jobName="Front End Developer"
                        description="New startup called Foundyst"
                    />

                    <Experience
                        startYear={2019}
                        endYear="Current"
                        jobName="Full Stack Developer"
                        description="Sokrates System at Binus"
                    />
                    
                    <hr style={{borderTop: '3px solid #fff'}} />
                    
                    <h2>Skills</h2>
                    <Skill 
                        skill="HTML"
                        progress={100}
                    />

                     <Skill 
                        skill="CSS"
                        progress={98}
                    />

                     <Skill 
                        skill="Javascript"
                        progress={90}
                    />

                     <Skill 
                        skill="PHP"
                        progress={90}
                    />

                     <Skill 
                        skill="MySQL"
                        progress={85}
                    />

                     <Skill 
                        skill="Laravel"
                        progress={80}
                    />

                     <Skill 
                        skill="Angular JS"
                        progress={70}
                    />

                     <Skill 
                        skill="React JS"
                        progress={50}
                    />

                </Cell>
            </Grid>
        </div>
    );
}

export default About;