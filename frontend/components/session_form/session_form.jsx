import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = this.props.loginInfo;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    console.log(this.state);
    this.props.login(this.state).then(() => this.props.history.push('/'));
  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value});
  }

  render() {
    return (
      <div className="login-form-container">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="email">Email or Phone</label>
                </td>
                <td>
                  <label htmlFor="password">Password</label>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    id="email"
                    onChange={this.handleChange('email')}
                    />
                </td>
                <td>
                  <input
                    type="password"
                    id="password"
                    onChange={this.handleChange('password')}
                    />
                </td>
                <td>
                  <label className="login-button">
                    <input
                      type="submit"
                      value="Log In"
                      />
                  </label>
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <label>
                    <a href="#">Forgot account?</a>
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
