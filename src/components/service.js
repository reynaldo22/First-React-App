import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, CardText, Button} from 'react-mdl';
import axios from 'axios';

class Service extends Component {

    state = {
        posts: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
        //   console.log(response.data);
          this.setState({ posts: response.data});
        })
        .catch(error => {
          console.log(error);
        });
      }
    
    render() {

            return (
                <Grid className="demo-grid-1">
                    {this.state.posts.map(title => 
                <Cell col={4}>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>{title.title}</CardTitle>
                        {this.state.posts.map(body => 
                        <CardText>
                            {body.body}
                        </CardText>
                        )}
                        <CardActions border>
                            <Button colored>View Updates</Button>
                        </CardActions>
                    </Card>
                    </Cell>
                    )}
                </Grid>
        //     <ul>
        //     {this.state.persons.map(person => 
        //         <li>{person.name}</li>
        //     )}
        // </ul>
            );
        }

}

export default Service;