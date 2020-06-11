import React from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import "../styles/Search.scss"

class Search extends React.Component {
  render() {
    return (
        <Form className="Search">
          <FormControl type="text" placeholder="Search" className="input mr-sm-2" />
          <Button variant="secondary">Search</Button>
        </Form>
    );
  }
}

export default Search;
