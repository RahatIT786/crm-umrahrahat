<template>
          <div class="sidebar" data-background-color="dark">
        <div class="sidebar-logo">
          <!-- Logo Header -->
          <div class="logo-header" data-background-color="dark">
            <a href="" class="logo">
              <img
                src="../../assets/images/RAHAT_UMRAH_LOGO.png"
                alt="navbar brand"
                class="navbar-brand"
                height="80px"
              />
            </a>
            <div class="nav-toggle">
              <button class="btn btn-toggle toggle-sidebar">
                <i class="gg-menu-right"></i>
              </button>
              <button class="btn btn-toggle sidenav-toggler">
                <i class="gg-menu-left"></i>
              </button>
            </div>
            <button class="topbar-toggler more">
              <i class="gg-more-vertical-alt"></i>
            </button>
          </div>
          <!-- End Logo Header -->
        </div>
        <div class="sidebar-wrapper scrollbar scrollbar-inner">
          <div class="sidebar-content">
            <ul class="nav nav-secondary">
              <li class="nav-item active">
                <a
                  data-bs-toggle="collapse"
                  href="#dashboard"
                  class="collapsed"
                  aria-expanded="false"
                >
                  <i class="fas fa-home"></i>
                  <p>Dashboard</p>
                </a>
    
              </li>
              <li class="nav-item">
                <a data-bs-toggle="collapse" href="#CM">
                  <i class="fas fa-layer-group"></i>
                  <p>Company Management</p>
                  <span class="caret"></span>
                </a>
                <div class="collapse" id="CM">
                  <ul class="nav nav-collapse">
                    <li>
                      <a >
                        <span class="sub-item">Branches</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="sub-item">Bank Accounts</span>
                      </a>
                    </li>
                    <li>
                      <a >
                        <span class="sub-item">GST</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a data-bs-toggle="collapse">
                  <i class="fas fa-layer-group"></i>
                  <p>Agent Management</p>
                </a>
              </li>
              <li class="nav-item">
                <a data-bs-toggle="collapse" href="#staffm">
                  <i class="fas fa-layer-group"></i>
                  <p>Staff Management</p>
                  <span class="caret"></span>
                </a>
                <div class="collapse" id="staffm">
                  <ul class="nav nav-collapse">
                    <li>
                      <a >
                        <span class="sub-item">Roles</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="sub-item">Department</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="sub-item">Staff</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a data-bs-toggle="collapse">
                  <i class="fas fa-layer-group"></i>
                  <p>User Management</p>
                </a>
              </li>
              <li class="nav-item">
                <a data-bs-toggle="collapse">
                  <i class="fas fa-layer-group"></i>
                  <p>CRM Lead / Queries</p>
                </a>
              </li>
              <li class="nav-item">
                <a data-bs-toggle="collapse">
                  <i class="fas fa-layer-group"></i>
                  <p>Booking Management</p>
                </a>
              </li>
              <li class="nav-item">
                <a data-bs-toggle="collapse">
                  <i class="fas fa-layer-group"></i>
                  <p>Payment Management</p>
                </a>
              </li>
              <li class="nav-item">
                <a data-bs-toggle="collapse" href="#fm">
                  <i class="fas fa-layer-group"></i>
                  <p>Finance Management</p>
                  <span class="caret"></span>
                </a>
                <div class="collapse" id="fm">
                  <ul class="nav nav-collapse">
                    <li>
                      <a >
                        <span class="sub-item">Wallet Management</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="sub-item">Forex Transaction</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a data-bs-toggle="collapse" href="#INVENTORY">
                  <i class="fas fa-layer-group"></i>
                  <p>Inventory</p>
                  <span class="caret"></span>
                </a>
                <div class="collapse" id="INVENTORY">
                  <ul class="nav nav-collapse">
                    <li>
                      <a >
                        <span class="sub-item">Package management</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="sub-item">Ziyarat Management</span>
                      </a>
                    </li>
                    <li>
                      <a >
                        <span class="sub-item">Holidays Management</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="sub-item">PNR Management</span>
                      </a>
                    </li>
                    
                    <li>
                      <a>
                        <span class="sub-item">Transport</span>
                      </a>
                    </li>
                    <li>
                      <a >
                        <span class="sub-item">Catering</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="sub-item">SiteSeeing</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="sub-item">Hotels</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item">
                <a data-bs-toggle="collapse" href="#service">
                  <i class="fas fa-layer-group"></i>
                  <p>Services</p>
                  <span class="caret"></span>
                </a>
                <div class="collapse" id="service">
                  <ul class="nav nav-collapse">
                    <li>
                      <a >
                        <span class="sub-item">Laundry</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="sub-item">Forex</span>
                      </a>
                    </li>
                    <li>
                      <a >
                        <span class="sub-item">Publications</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="sub-item">Guide & Assistant</span>
                      </a>
                    </li>
                    
                    <li>
                      <a>
                        <span class="sub-item">Shopping</span>
                      </a>
                    </li>
                    <li>
                      <a >
                        <span class="sub-item">Hajj Umrah Kit</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li class="nav-item">
                <a data-bs-toggle="collapse" href="#ss">
                  <i class="fas fa-layer-group"></i>
                  <p>Site Settings</p>
                  <span class="caret"></span>
                </a>
                <div class="collapse" id="ss">
                  <ul class="nav nav-collapse">
                    <li>
                      <a >
                        <span class="sub-item">Awards</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="sub-item">AGM</span>
                      </a>
                    </li>
                    <li>
                      <a >
                        <span class="sub-item">Events</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="sub-item">Blog</span>
                      </a>
                    </li>
                    
                    <li>
                      <a>
                        <span class="sub-item">Manage Cities</span>
                      </a>
                    </li>
                    <li>
                      <a >
                        <span class="sub-item">Manage Package Includes</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="sub-item">FAQ</span>
                      </a>
                    </li>
                    
                    <li>
                      <a>
                        <span class="sub-item">Site Fee</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="sub-item">Membership Plan</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="sub-item">Testimonial B2b</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="sub-item">Testimonial B2C</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>



              <li class="nav-item">
                <a data-bs-toggle="collapse">
                  <i class="fas fa-layer-group"></i>
                  <p>Reports</p>
                </a>
              </li>

              <li class="nav-item">
                <a data-bs-toggle="collapse">
                  <i class="fas fa-layer-group"></i>
                  <p>Downloads</p>
                </a>
              </li>

              <li class="nav-item">
                <a data-bs-toggle="collapse">
                  <i class="fas fa-layer-group"></i>
                  <p>Flyers</p>
                </a>
              </li>

              <li class="nav-item">
                <a data-bs-toggle="collapse" href="#sidebarLayouts">
                  <i class="fas fa-th-list"></i>
                  <p>Global Settings</p>
                  <span class="caret"></span>
                </a>
                <div class="collapse" id="sidebarLayouts">
                  <ul class="nav nav-collapse">
                    <li>
                      <a >
                        <span class="sub-item">IMAGE API</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="sub-item">AKBAR API</span>
                      </a>
                    </li>
                    <li>
                      <a >
                        <span class="sub-item">TRIPJACK API</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="sub-item">TBO API</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="sub-item">ATOM PAYMENT</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
</template>