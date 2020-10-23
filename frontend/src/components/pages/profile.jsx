import React, { Component } from 'react';

class Profile extends Component {

    
    render() {
        return (
   <div className="d-flex justify-content-center mt-5">   
    <div className="col-xl-8 order-xl-1">
      <div className="card">
        <div className="card-header">
          <div className="row align-items-center">
            <div className="col-8">
              <h3 className="mb-0">Profile </h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form>
            <h6 className="heading-small text-muted mb-4">User information</h6>
            <div className="pl-lg-4">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="input-username">Role</label>
                    <input type="text" id="input-username" className="form-control" placeholder="Role" defaultValue={this.props.auth.role} />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="input-email">Email address</label>
                    <input type="email" id="input-email" className="form-control" placeholder="Email" defaultValue={this.props.auth.email} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="input-first-name">First name</label>
                    <input type="text" id="input-first-name" className="form-control" placeholder="First name" defaultValue="Lucky" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="input-last-name">Last name</label>
                    <input type="text" id="input-last-name" className="form-control" placeholder="Last name" defaultValue={this.props.auth.name} />
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-4" />
            {/* Address */}
            <h6 className="heading-small text-muted mb-4">Contact information</h6>
            <div className="pl-lg-4">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="input-address">Address</label>
                    <input id="input-address" className="form-control" placeholder="Home Address" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" type="text" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="input-city">City</label>
                    <input type="text" id="input-city" className="form-control" placeholder="City" defaultValue="New York" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="input-country">Country</label>
                    <input type="text" id="input-country" className="form-control" placeholder="Country" defaultValue="United States" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="input-country">Postal code</label>
                    <input type="number" id="input-postal-code" className="form-control" placeholder="Postal code" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  


        );
    }
}

export default Profile;
