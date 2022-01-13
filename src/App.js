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
          <Nav.Link onClick={handleShow}>Monitor</Nav.Link>
          <Nav.Link onClick={handleShow}>Directions</Nav.Link>
          <Nav.Link onClick={handleShow}>Help</Nav.Link>
        </Nav>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>Title</Modal.Header>
        <Modal.Body>Text for Monitor/Directions/Help</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
