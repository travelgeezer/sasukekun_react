import React from 'react';
import { Link } from 'react-router-dom';
import './style.less';

export default class ToolbarExamplesSimple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3,
      open: false
    };
  }

  render() {
    return (
      <div>
        <nav className="nav clearfix">
          <ul>
            <Link to="/">
              <li>home</li>
            </Link>
            <Link to="/blog/create">
              <li>blog</li>
            </Link>
            <Link to="/upload">
              <li>upload</li>
            </Link>
            <Link to="/user">
              <li>user</li>
            </Link>
            <Link to="/register">
              <li>register</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}
