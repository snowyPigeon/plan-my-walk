import React, { useState } from "react";
import Map from "./components/Map";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <Map />
      <Navbar
        bg="transparent"
        className="justify-content-center"
        fixed="bottom"
      >
        <Nav>
          <Nav.Link>Monitor</Nav.Link>
          <Nav.Link>Directions</Nav.Link>
          <Nav.Link onClick={handleShow}>Help</Nav.Link>
        </Nav>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>Help</Modal.Header>
        <Modal.Body>text</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
