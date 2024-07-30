import React from 'react'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button';

function CtrlBar() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>PicOverLap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item>
              import file
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              export file
            </NavDropdown.Item>
          </NavDropdown>{' '}
          <Button variant="primary">Present</Button>{' '}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CtrlBar