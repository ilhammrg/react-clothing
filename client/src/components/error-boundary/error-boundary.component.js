import React from 'react';

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

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
          <ErrorImageContainer imageUrl={'https://i.imgur.com/A040Lxr.png'} />
          <ErrorImageText>Something went wrong. Please try again.</ErrorImageText>
        </ErrorImageOverlay>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;