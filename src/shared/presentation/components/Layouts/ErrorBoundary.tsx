import { Component, ErrorInfo, ReactNode } from 'react';
import Alert from '../Alert';
import Layout from './Layout';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Layout>
          <Alert>
            Oops, there is an error! Please contact administrator{' '}
            <a href="emailto:ardi.winardi91@gmail.com" className="text-primary">
              ardi.winardi91@gmail.com
            </a>
          </Alert>
        </Layout>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
