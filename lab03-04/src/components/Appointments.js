import React from "react";
import { Card, Col,Pagination, Row } from "react-bootstrap";
import "../styles/Appointments.scss";
import { ReactComponent as Social } from '../icons/profile.svg';
import { ReactComponent as Place } from '../icons/interface.svg';
import { ReactComponent as Phone } from '../icons/communications .svg';
import { ReactComponent as Email } from '../icons/multimedia.svg';
import { ReactComponent as Job } from '../icons/business.svg';
import { connect } from 'react-redux'
import { getFilter } from "../reducers"



class Appointments extends React.Component {

  constructor(props){
    super(props)
    this.state = {
     currentPage: 1,
    }
  }

  render() {
    const { data, features } = this.props;
    const { currentPage } = this.state;
    const appNum = 3;

    const filteredApps = data.filter(el => features[el.type.toLowerCase()] && (features.city === "All" || el.city === features.city))

    const pages = Math.round((filteredApps.length)/appNum);
    const start = currentPage * appNum - appNum;
    const appointments = filteredApps.slice(start, start + appNum)

    return (
      <div>
      <section className="Appointments">
        {appointments.map((el, i) => (
          <Card className="deck m-3 item grow bg-light" key={i}>
            <Card.Header>
            <Card.Title className="item-title">{el.title}</Card.Title>
              <span className="item-details"><Place/>{el.city},</span>
              <span className="item-dateails">{el.freetime}</span>
            </Card.Header>
            <Card.Body>
              {/* <span className="item-details">
                {el.timeStart}-{el.timeEnd}
              </span> */}
              <div className="item-body">
              <Col>
                <div className="item-leftside">
                <span className="item-desc"><Social/>{el.doctor}</span>
                  <span className="item-desc"><Job/>{el.type}</span>
                </div>
                </Col>
                <Col>
                <div className="item-leftside">
                  <span className="item-desc"><Phone/>{el.phone}</span>
                  <span className="item-desc"><Email/>{el.email}</span>
                </div>
                </Col>
              </div>
            </Card.Body>
          </Card>
        ))}
      </section>
       <Row className="buttons justify-content-center">{new Array(pages).fill(0).map((e, i) => (<Pagination.Item  onClick={() => this.setState({currentPage: i+1})} key={i+1} active={i+1 === currentPage}><div>{i+1}</div></Pagination.Item>))}</Row>
       </div>
    );
  }
}

function mapStateToProps(state) {
  return { features: getFilter(state) }
}

const AppointmentsConnected = connect(mapStateToProps, null)(Appointments)

export default AppointmentsConnected;
