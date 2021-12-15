import React from 'react'
import { Link } from 'react-router-dom'

export default function TotalCasesCont(props) {
    return (
        <div className='moremargin'>
            <div className="card text-center">
  <div className="card-header">
  Updated on {props.date}
  </div>
  <div className="card-body">
    <h5 className="card-title">India's Total Confirmed Covid Cases:</h5>
    <p className="card-text">{props.totalcases}</p>
    <Link to="/bookavaccine" className="btn btn-primary">Get Vaccinated</Link>
  </div>
  <div className="card-footer text-muted">
    Precaution is better than cure
  </div>
</div>
        </div>
    )
}
