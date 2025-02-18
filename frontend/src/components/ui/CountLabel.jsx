import React from 'react'

const CountLabel = ({icon,category,value}) => {
  return (
    <div className="col-sm-6 col-md-3">
    <div className="card card-stats card-round">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-icon">
            <div
              className="icon-big text-center icon-success bubble-shadow-small"
            >
              <i className={`fas ${icon}`}></i>
            </div>
          </div>
          <div className="col col-stats ms-3 ms-sm-0">
            <div className="numbers">
              <p className="card-category">{category}</p>
              <h4 className="card-title">{value}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

CountLabel.defaultProps={
    icon:"fa-luggage-cart",
    category:"Sales",
    value:"45",
};

export default CountLabel