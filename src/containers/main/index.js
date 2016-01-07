import React from 'react';
import { Container, Nav, Footer } from 'core-ui';
import { connect } from 'react-redux';
import { handleError } from 'core-utilz';

function mapStateToProps(state) {
  const { user } = state;
  return { user };
}

class Main extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    router: React.PropTypes.any,
    user: React.PropTypes.any,
    dispatch: React.PropTypes.func.isRequired
  };
  render() {
    return (
      <Container>
        <Nav router={this.props.router} user={this.props.user} />
        { this.props.children }
        <Footer />
      </Container>
    );
  }
}

export default connect(mapStateToProps)(Main);
