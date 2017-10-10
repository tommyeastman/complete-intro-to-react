// @flow

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Landing = () => (
  <div className="landing">
    <h1>svideo</h1>
    <input type="text" placeholder="Search" />
    <Link to="/search">or Browse All</Link>
  </div>
);

const mapStatetoProps = state => ({ searchTerm: state.searchTerm });

export default connect(mapStatetoProps)(Landing);
