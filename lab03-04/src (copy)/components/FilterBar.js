import React from "react"
import { Card, ToggleButton, Row } from "react-bootstrap";
import "../styles/FilterBar.scss"
import {setFilter} from "../actions/filters.js"
import { connect } from 'react-redux'
import { getFilter } from "../reducers"


class FilterBar extends React.Component {

    render() {
      const { filter } = this.props
      return (
        <Card className="FilterBar">
      <Row className="d-flex justify-content-center" >
        <ToggleButton className="toglleButton" type="checkbox"  variant="light" checked={filter.vet} onChange={(ev) => this.props.setNewFilter({vet:ev.target.checked})}>Vet</ToggleButton>
        <ToggleButton className="toglleButton" type="checkbox" variant="light" checked={filter.groomer} onChange={(ev) => this.props.setNewFilter({groomer:ev.target.checked})}>Groomer</ToggleButton>
      </Row>
        </Card>
      );
    }
  }


  const mapDispatchToProps = dispatch => {
    return {
      setNewFilter: (filter) => {
        dispatch(setFilter(filter))
      }
    }
  }

  function mapStateToProps(state) {
    return { filter: getFilter(state) }
  }

  const FilterBarConnected = connect(mapStateToProps, mapDispatchToProps)(FilterBar)

export default FilterBarConnected
