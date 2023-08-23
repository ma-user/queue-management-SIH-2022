import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"
import Table from 'react-bootstrap/Table';
import { BsArrowRepeat } from "react-icons/bs";

export default class Services extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      textDisplay: false,
    }
  }

  ToggleButton() {
    this.setState((currentState) => ({
      textDisplay: !currentState.textDisplay,
    }));
  }

  render() {
    return (
      <div className="approval">
        <div class="sidenav">
          <Link to="/analytics">Analytics</Link>
          <Link to="/serviceUpdate">Service Updation</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/serviceLogin">Service Login</Link>
          <Link to="/message">Message</Link>
          <Link to="/ticket">Raise a ticket</Link>
          <Link to="/profile">Profile</Link>
        </div>

        <div class="main">
          <Table striped bordered hover class="table">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Service Name</th>
                <th>Authorized Person</th>
                <th>Current Token</th>
                <th>Max. Token</th>
                <th>Update</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>MRI</td>
                <td>Kashif Raza</td>
                <td>08</td>
                <td>60</td>
                <BsArrowRepeat />
                <td>
                  <button className="btn-secondary" onClick={() => this.ToggleButton()}>Toggle</button>
                  {!this.state.textDisplay && this.props.text}
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Sonography</td>
                <td>Muskaan Agrawal</td>
                <td>12</td>
                <td>100</td>
                <BsArrowRepeat />
                <td>
                  <button className="btn-secondary" onClick={() => this.ToggleButton()}>Toggle</button>
                  {!this.state.textDisplay && this.props.text}
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>X-Ray</td>
                <td>Chirag Rawat</td>
                <td>34</td>
                <td>160</td>
                <BsArrowRepeat />
                <td>
                  <button className="btn-secondary" onClick={() => this.ToggleButton()}>Toggle</button>
                  {!this.state.textDisplay && this.props.text}
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Dr. Kuldeep Gaur</td>
                <td>Chatur K.</td>
                <td>18</td>
                <td>50</td>
                <BsArrowRepeat />
                <td>
                  <button className="btn-secondary" onClick={() => this.ToggleButton()}>Toggle</button>
                  {!this.state.textDisplay && this.props.text}
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Dr. Milisha Gupta</td>
                <td>Sakshi Magre</td>
                <td>27</td>
                <td>80</td>
                <BsArrowRepeat />
                <td>
                  <button className="btn-secondary" onClick={() => this.ToggleButton()}>Toggle</button>
                  {!this.state.textDisplay && this.props.text}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
