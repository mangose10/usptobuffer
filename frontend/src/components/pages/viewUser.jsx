import React, { Component } from 'react';




class ViewUser extends Component {

  constructor() {
    super();
    
    this.state = {
      gotu: '',
      email: ''
    };
  }

  componentDidMount(){
      this.getUser()
  }

  getUser = async() => {
    
    const response = await fetch('/api/view-usr')
    
    const body = await response.text();
    
    this.setState({gotu:JSON.parse(body)});
    console.log(body);
  };

  handleEChange = e => {
    this.setState({email: e.target.value});
  }

  displayUsers = () => {
    
  }

  render() {
    return (
<div className="container-fluid mt-5">

  <div className="row">
    <div className="col">
      <div className="card">
        {/* Card header */}
        <div className="card-header border-0">
          <h3 className="mb-0">Users</h3>
        </div>
        {/* Light table */}
        <div className="table-responsive">
          <table className="table align-items-center table-flush">
            <thead className="thead-light">
              <tr>
                <th scope="col" className="sort" data-sort="name">Email</th>
                <th scope="col" className="sort" data-sort="budget">Name</th>
                <th scope="col" className="sort" data-sort="status">Role</th>
                <th scope="col" className="sort" data-sort="completion">Completion</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody className="list">
              <tr>
                <th scope="row">
                  <div className="media align-items-center">
                    <a href="https://demos.creative-tim.com/argon-dashboard/examples/tables.html#" className="avatar rounded-circle mr-3">
                      <img alt="Image placeholder" src="./Argon Dashboard - Free Dashboard for Bootstrap 4_files/bootstrap.jpg" />
                    </a>
                    <div className="media-body">
                      <span className="name mb-0 text-sm">Argon Design System</span>
                    </div>
                  </div>
                </th>
                <td className="budget">
                  $2500 USD
                </td>
                <td>
                  <span className="badge badge-dot mr-4">
                    <i className="bg-warning" />
                    <span className="status">pending</span>
                  </span>
                </td>
                
                <td>
                  <div className="d-flex align-items-center">
                    <span className="completion mr-2">60%</span>
                    <div>
                      <div className="progress">
                        <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}} />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <div className="dropdown">
                    <a className="btn btn-sm btn-icon-only text-light" href="https://demos.creative-tim.com/argon-dashboard/examples/tables.html#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-ellipsis-v" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                      <a className="dropdown-item" href="https://demos.creative-tim.com/argon-dashboard/examples/tables.html#">Action</a>
                      <a className="dropdown-item" href="https://demos.creative-tim.com/argon-dashboard/examples/tables.html#">Another action</a>
                      <a className="dropdown-item" href="https://demos.creative-tim.com/argon-dashboard/examples/tables.html#">Something else here</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="media align-items-center">
                    <a href="https://demos.creative-tim.com/argon-dashboard/examples/tables.html#" className="avatar rounded-circle mr-3">
                      <img alt="Image placeholder" src="./Argon Dashboard - Free Dashboard for Bootstrap 4_files/angular.jpg" />
                    </a>
                    <div className="media-body">
                      <span className="name mb-0 text-sm">Angular Now UI Kit PRO</span>
                    </div>
                  </div>
                </th>
                <td className="budget">
                  $1800 USD
                </td>
                <td>
                  <span className="badge badge-dot mr-4">
                    <i className="bg-success" />
                    <span className="status">completed</span>
                  </span>
                </td>
                
                <td>
                  <div className="d-flex align-items-center">
                    <span className="completion mr-2">100%</span>
                    <div>
                      <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}} />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <div className="dropdown">
                    <a className="btn btn-sm btn-icon-only text-light" href="https://demos.creative-tim.com/argon-dashboard/examples/tables.html#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-ellipsis-v" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                      <a className="dropdown-item" href="https://demos.creative-tim.com/argon-dashboard/examples/tables.html#">Action</a>
                      <a className="dropdown-item" href="https://demos.creative-tim.com/argon-dashboard/examples/tables.html#">Another action</a>
                      <a className="dropdown-item" href="https://demos.creative-tim.com/argon-dashboard/examples/tables.html#">Something else here</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="media align-items-center">
                    <a href="https://demos.creative-tim.com/argon-dashboard/examples/tables.html#" className="avatar rounded-circle mr-3">
                      <img alt="Image placeholder" src="./Argon Dashboard - Free Dashboard for Bootstrap 4_files/sketch.jpg" />
                    </a>
                    <div className="media-body">
                      <span className="name mb-0 text-sm">Black Dashboard</span>
                    </div>
                  </div>
                </th>
                <td className="budget">
                  $3150 USD
                </td>
                <td>
                  <span className="badge badge-dot mr-4">
                    <i className="bg-danger" />
                    <span className="status">delayed</span>
                  </span>
                </td>
                
                <td>
                  <div className="d-flex align-items-center">
                    <span className="completion mr-2">72%</span>
                    <div>
                      <div className="progress">
                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} style={{width: '72%'}} />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <div className="dropdown">
                    <a className="btn btn-sm btn-icon-only text-light" href="https://demos.creative-tim.com/argon-dashboard/examples/tables.html#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-ellipsis-v" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                      <a className="dropdown-item" href="https://demos.creative-tim.com/argon-dashboard/examples/tables.html#">Action</a>
                      <a className="dropdown-item" href="https://demos.creative-tim.com/argon-dashboard/examples/tables.html#">Another action</a>
                      <a className="dropdown-item" href="https://demos.creative-tim.com/argon-dashboard/examples/tables.html#">Something else here</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="media align-items-center">
                    <a href="https://demos.creative-tim.com/argon-dashboard/examples/tables.html#" className="avatar rounded-circle mr-3">
                      <img alt="Image placeholder" src="./Argon Dashboard - Free Dashboard for Bootstrap 4_files/react.jpg" />
                    </a>
                    <div className="media-body">
                      <span className="name mb-0 text-sm">React Material Dashboard</span>
                    </div>
                  </div>
                </th>
                <td className="budget">
                  $4400 USD
                </td>
                <td>
                  <span className="badge badge-dot mr-4">
                    <i className="bg-info" />
                    <span className="status">on schedule</span>
                  </span>
                </td>
                
                <td>
                  <div className="d-flex align-items-center">
                    <span className="completion mr-2">90%</span>
                    <div>
                      <div className="progress">
                        <div className="progress-bar bg-info" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}} />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <div className="dropdown">
                    <a className="btn btn-sm btn-icon-only text-light" href="https://demos.creative-tim.com/argon-dashboard/examples/tables.html#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-ellipsis-v" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                      <a className="dropdown-item" href="https://demos.creative-tim.com/argon-dashboard/examples/tables.html#">Action</a>
                      <a className="dropdown-item" href="https://demos.creative-tim.com/argon-dashboard/examples/tables.html#">Another action</a>
                      <a className="dropdown-item" href="https://demos.creative-tim.com/argon-dashboard/examples/tables.html#">Something else here</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="media align-items-center">
                    <a href="https://demos.creative-tim.com/argon-dashboard/examples/tables.html#" className="avatar rounded-circle mr-3">
                      <img alt="Image placeholder" src="./Argon Dashboard - Free Dashboard for Bootstrap 4_files/vue.jpg" />
                    </a>
                    <div className="media-body">
                      <span className="name mb-0 text-sm">Vue Paper UI Kit PRO</span>
                    </div>
                  </div>
                </th>
                <td className="budget">
                  $2200 USD
                </td>
                <td>
                  <span className="badge badge-dot mr-4">
                    <i className="bg-success" />
                    <span className="status">completed</span>
                  </span>
                </td>
                
                <td>
                  <div className="d-flex align-items-center">
                    <span className="completion mr-2">100%</span>
                    <div>
                      <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}} />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-right">
                  <div className="dropdown">
                    <a className="btn btn-sm btn-icon-only text-light" href="https://demos.creative-tim.com/argon-dashboard/examples/tables.html#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-ellipsis-v" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                      <a className="dropdown-item" href="https://demos.creative-tim.com/argon-dashboard/examples/tables.html#">Action</a>
                      <a className="dropdown-item" href="https://demos.creative-tim.com/argon-dashboard/examples/tables.html#">Another action</a>
                      <a className="dropdown-item" href="https://demos.creative-tim.com/argon-dashboard/examples/tables.html#">Something else here</a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  </div>
  
  
</div>

    );
  }
}

export default ViewUser;
      