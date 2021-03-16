import React, { Component } from "react";
import "./Headline.css";
import PropTypes from "prop-types";

export class Headline extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { header = null, description } = this.props;

    // if (!header) {
    //   return null;
    // }

    return (
      <div data-testid="headlineComponent">
        <section className="section">
          <h1 data-testid="header" className="header">
            {header}
          </h1>
          <p data-testid="description" className="description">
            {description}
          </p>
        </section>
      </div>
    );
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool,
    })
  ),
};

export default Headline;
