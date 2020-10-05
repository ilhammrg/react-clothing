import React from 'react';

import Spinner from '../spinner/spinner.component';

const WithSpinner = WrappedComponent => {
  const ComponentWithSpinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
  };

  return ComponentWithSpinner;
};

export default WithSpinner;