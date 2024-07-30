import React, { useState } from 'react'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'

function SideBar({setPics}) {
  const [selectedFile, setSelectedFile] = useState([]);
  const [picOpacity, setPicOpacity] = useState(0.5);

  const changeHandler = (event) => {

    let tempfile = [];

    for (let cpic = 0; cpic < event.target.files.length; cpic++) {
      tempfile.push(URL.createObjectURL(event.target.files[cpic]));

    }
    setSelectedFile(tempfile);
    setPics(tempfile);

  };

  const ochange = (event) => {
    setPicOpacity(document.getElementById("picOpacity").value);
  };

  return (
    <Container>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Multiple files input example</Form.Label>
        <Form.Control type="file" accept="image/*" onChange={changeHandler} multiple />
      </Form.Group>

      <Form.Group controlId="picOpacity" className="mb-3">
        <Form.Label>opacity</Form.Label>
        <Form.Control type="range" min="0" max="1" defaultValue="0.4" step="0.1" onChange={ochange} />
      </Form.Group>

      {selectedFile.map(cFile =>
        <Image src={cFile} style={{ opacity: picOpacity }} fluid />

      )}

    </Container>
  )

}

export default SideBar