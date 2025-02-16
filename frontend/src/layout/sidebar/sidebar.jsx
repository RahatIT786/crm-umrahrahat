import React from 'react'

const sidebar = () => {
  return (
 
     <div className="sidebar" data-background-color="dark">
        <div className="sidebar-logo">
        {/*  */}
          <div className="logo-header" data-background-color="dark">
            <a href="" className="logo">
              <img
                src=""
                alt="navbar brand"
                className="navbar-brand"
                height="80px"
              />
            </a>
            <div className="nav-toggle">
              <button className="btn btn-toggle toggle-sidebar">
                <i className="gg-menu-right"></i>
              </button>
              <button className="btn btn-toggle sidenav-toggler">
                <i className="gg-menu-left"></i>
              </button>
            </div>
            <button className="topbar-toggler more">
              <i className="gg-more-vertical-alt"></i>
            </button>
          </div>
          {/* <!-- End Logo Header -->   */}
        </div>
        <div className="sidebar-wrapper scrollbar scrollbar-inner">
          <div className="sidebar-content">
            <ul className="nav nav-secondary">
              <li className="nav-item active">
                <a
                  data-bs-toggle="collapse"
                  href="#dashboard"
                  className="collapsed"
                  aria-expanded="false"
                >
                  <i className="fas fa-home"></i>
                  <p>Dashboard</p>
                </a>
    
              </li>
              <li className="nav-item">
                <a data-bs-toggle="collapse" href="#CM">
                  <i className="fas fa-layer-group"></i>
                  <p>Company Management</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="CM">
                  <ul className="nav nav-collapse">
                    <li>
                      <a >
                        <span className="sub-item">Branches</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Bank Accounts</span>
                      </a>
                    </li>
                    <li>
                      <a >
                        <span className="sub-item">GST</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a data-bs-toggle="collapse">
                  <i className="fas fa-layer-group"></i>
                  <p>Agent Management</p>
                </a>
              </li>
              <li className="nav-item">
                <a data-bs-toggle="collapse" href="#staffm">
                  <i className="fas fa-layer-group"></i>
                  <p>Staff Management</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="staffm">
                  <ul className="nav nav-collapse">
                    <li>
                      <a >
                        <span className="sub-item">Roles</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Department</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Staff</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a data-bs-toggle="collapse">
                  <i className="fas fa-layer-group"></i>
                  <p>User Management</p>
                </a>
              </li>
              <li className="nav-item">
                <a data-bs-toggle="collapse">
                  <i className="fas fa-layer-group"></i>
                  <p>CRM Lead / Queries</p>
                </a>
              </li>
              <li className="nav-item">
                <a data-bs-toggle="collapse">
                  <i className="fas fa-layer-group"></i>
                  <p>Booking Management</p>
                </a>
              </li>
              <li className="nav-item">
                <a data-bs-toggle="collapse">
                  <i className="fas fa-layer-group"></i>
                  <p>Payment Management</p>
                </a>
              </li>
              <li className="nav-item">
                <a data-bs-toggle="collapse" href="#fm">
                  <i className="fas fa-layer-group"></i>
                  <p>Finance Management</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="fm">
                  <ul className="nav nav-collapse">
                    <li>
                      <a >
                        <span className="sub-item">Wallet Management</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Forex Transaction</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a data-bs-toggle="collapse" href="#INVENTORY">
                  <i className="fas fa-layer-group"></i>
                  <p>Inventory</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="INVENTORY">
                  <ul className="nav nav-collapse">
                    <li>
                      <a >
                        <span className="sub-item">Package management</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Ziyarat Management</span>
                      </a>
                    </li>
                    <li>
                      <a >
                        <span className="sub-item">Holidays Management</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">PNR Management</span>
                      </a>
                    </li>
                    
                    <li>
                      <a>
                        <span className="sub-item">Transport</span>
                      </a>
                    </li>
                    <li>
                      <a >
                        <span className="sub-item">Catering</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">SiteSeeing</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Hotels</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <a data-bs-toggle="collapse" href="#service">
                  <i className="fas fa-layer-group"></i>
                  <p>Services</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="service">
                  <ul className="nav nav-collapse">
                    <li>
                      <a >
                        <span className="sub-item">Laundry</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Forex</span>
                      </a>
                    </li>
                    <li>
                      <a >
                        <span className="sub-item">Publications</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Guide & Assistant</span>
                      </a>
                    </li>
                    
                    <li>
                      <a>
                        <span className="sub-item">Shopping</span>
                      </a>
                    </li>
                    <li>
                      <a >
                        <span className="sub-item">Hajj Umrah Kit</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <a data-bs-toggle="collapse" href="#ss">
                  <i className="fas fa-layer-group"></i>
                  <p>Site Settings</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="ss">
                  <ul className="nav nav-collapse">
                    <li>
                      <a >
                        <span className="sub-item">Awards</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">AGM</span>
                      </a>
                    </li>
                    <li>
                      <a >
                        <span className="sub-item">Events</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Blog</span>
                      </a>
                    </li>
                    
                    <li>
                      <a>
                        <span className="sub-item">Manage Cities</span>
                      </a>
                    </li>
                    <li>
                      <a >
                        <span className="sub-item">Manage Package Includes</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">FAQ</span>
                      </a>
                    </li>
                    
                    <li>
                      <a>
                        <span className="sub-item">Site Fee</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Membership Plan</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Testimonial B2b</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Testimonial B2C</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>



              <li className="nav-item">
                <a data-bs-toggle="collapse">
                  <i className="fas fa-layer-group"></i>
                  <p>Reports</p>
                </a>
              </li>

              <li className="nav-item">
                <a data-bs-toggle="collapse">
                  <i className="fas fa-layer-group"></i>
                  <p>Downloads</p>
                </a>
              </li>

              <li className="nav-item">
                <a data-bs-toggle="collapse">
                  <i className="fas fa-layer-group"></i>
                  <p>Flyers</p>
                </a>
              </li>

              <li className="nav-item">
                <a data-bs-toggle="collapse" href="#sidebarLayouts">
                  <i className="fas fa-th-list"></i>
                  <p>Global Settings</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="sidebarLayouts">
                  <ul className="nav nav-collapse">
                    <li>
                      <a >
                        <span className="sub-item">IMAGE API</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">AKBAR API</span>
                      </a>
                    </li>
                    <li>
                      <a >
                        <span className="sub-item">TRIPJACK API</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">TBO API</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">ATOM PAYMENT</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

  )
}

export default sidebar