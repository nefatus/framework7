import React, { Component } from 'react';
import {
  Page,
  Col,
  Navbar,
  NavLeft,
  Link,
  Toolbar,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Row,
  List,
  ListItem,
} from 'framework7-react';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }


  componentDidMount() {
    fetch(`https://api.myjson.com/bins/b1n2v`)
      .then(res => res.json())
      .then(parsedJSON => parsedJSON.entities.map(data => (
        {
          image: `${data.image}`,
          title: `${data.title}`,
        }
      )))
      .then(items => this.setState({
        items,
        isLoaded: false
      }))
      .catch(err => console.log(err));
  }

  render() {
    const { items } = this.state;
    return (
      <Page>
        <Navbar>
          <NavLeft>
            <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left"></Link>
          </NavLeft>
          <Navbar title="My App" large titleLarge="Large Title"> MY STORE
          </Navbar>
        </Navbar>
        <List>
          <ListItem link="/Form/" title="Welcome"></ListItem>
        </List>
        <Row>
          {
            items.length > 0 ? items.map(item => {
              return (
                <Col width="80">
                  <Card className="demo-card-header-pic">
                      <CardHeader
                        className="no-border"
                        valign="bottom"
                        style={{ backgroundImage: 'url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)' }}
                      >Journey To Mountains</CardHeader>
                      <CardContent>
                        <p className="date">Posted on January 21, 2015</p>
                        <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p>
                      </CardContent>
                      <CardFooter>
                        <Link>Like</Link>
                        <Link>Read more</Link>
                      </CardFooter>
                    </Card>
                </Col>
              );
            
            }) : null
          }
        </Row>
        <Toolbar bottom>
          <Link>Left Link</Link>
        </Toolbar>
      </Page>
    );

  }
}

export default HomePage;
