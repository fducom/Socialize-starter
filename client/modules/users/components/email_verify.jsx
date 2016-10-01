import React from 'react';
import Helmet from 'react-helmet';
import Error from '../../core/components/error.jsx';

export default class EmailVerify extends React.Component {
  render() {
    let message;
    let { success, error } = this.props;

    // TODO improve the look
    if (!success && !error) {
      message = <p className="flow-text">Veryfing your e-mail. This will take just a moment...</p>;
    }

    if (success) {
      // TODO add link to settings/dashboard
      message = <p className="flow-text">Your e-mail has been verified!</p>;
    } else if (!success && error) {
      message = <Error error={error} />;
    }

    return (<div>
      <Helmet
        title="E-mail verification"
      />
      {message}
    </div>);
  }
}

EmailVerify.propTypes = {
  error: React.PropTypes.string,
  success: React.PropTypes.string,
};
