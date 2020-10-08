import React from 'react';

import { 
  ErrorImageOverlay, 
  ErrorImageText, 
  ErrorImage,
  ErrorTitle 
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error);
  }

  render() {
    if(this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorTitle>Oops...</ErrorTitle>
          <ErrorImage />
          <ErrorImageText>Something went wrong</ErrorImageText>
          <ErrorImageText>Check your connection and try again</ErrorImageText>
        </ErrorImageOverlay>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;