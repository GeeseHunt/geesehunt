/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';

export function ErrorPageWithoutStyle({ error }) {
  if (__DEV__ && error) {
    return (
      <>
        <h1>{error.name}</h1>
        <pre>{error.stack}</pre>
      </>
    );
  }

  return (
    <>
      <h1>Error</h1>
      <p>Sorry, a critical error occurred on this page.</p>
    </>
  );
}

ErrorPageWithoutStyle.propTypes = {
  error: PropTypes.shape({
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
  }),
};

ErrorPageWithoutStyle.defaultProps = {
  error: null,
};

export default function ErrorPage(props) {
  return ErrorPageWithoutStyle(props);
}
