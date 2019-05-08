import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <h4>{this.props.startYear} - {this.props.endYear}</h4>
                    </Cell>

                    <Cell col={8}>
                        <h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
                        <p>{this.props.description}</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Education;