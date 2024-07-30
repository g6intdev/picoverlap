import React, { useState } from 'react'
import CtrlBar from './CtrlBar'
import SideBar from './SideBar'
import MainStage from './MainStage'

import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  const [pics, setPics] = useState(["placehlder"]);

  return (
    <>
      <CtrlBar />
      <Row>
        <Col sm={4}>
        <SideBar setPics={setPics}  />

      </Col>
      <Col>
        <MainStage pics={pics} picOpacity={0.5}/>
      </Col>
    </Row >
    </>
  )
}

export default App