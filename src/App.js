import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import Flex, { Column } from './components/Flex';
import Card from './components/Card';
import Heading from './components/Heading';
import { Header } from './components/Header';

class App extends React.Component {
  render(){
    return (
      <>
      <Header img bgColor color>
        <p>Header component</p>
      </Header>
      <Container>Default container</Container>
      <Container full>Full width container</Container>
      <Container fullVertical>Full Vertical container</Container>
      <Container small>Small container</Container>
      <br/>
      <Flex justifyAround>Justify Around</Flex>
      <Flex noWrap>
        <Column three/>(x3)
      </Flex>
      <Flex justifyAround>
        <Column four/>(x3)
      </Flex>
      <br/><br/>
        <Button>Normal Button</Button>
        <Button secondary>Secondary Button</Button>
        <Button inverse big>Inverse Button</Button>
        <Button loading={''}></Button>
        <br/><br/>
      <Card>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </Card>
      <Card big>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </Card>
      <Card primary delay={400}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </Card>
      <br/>
      <p>Heading component variants</p>
      <Heading>Default heading</Heading>
      <Heading h2>Heading 2</Heading>
      <Heading h3>Heading 3</Heading>
      <Heading h4>Heading 4</Heading>
      <Heading h5>Heading 5</Heading>
      </>
    )
  }
}

export default App;
