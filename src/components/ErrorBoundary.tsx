import { Component, ErrorInfo, ReactNode } from 'react';
import styled from '@emotion/styled';

const ErrorContainer = styled.div`
  padding: 20px;
  margin: 20px;
  border: 1px solid #ef4444;
  border-radius: 4px;
  background-color: #1e293b;
  color: #fca5a5;
`;

const ErrorHeading = styled.h2`
  margin-bottom: 10px;
`;

const ErrorMessage = styled.p`
  margin-bottom: 10px;
`;

const ReloadButton = styled.button`
  padding: 8px 16px;
  background-color: #ef4444;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #dc2626;
  }
`;

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Произошла ошибка:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorHeading>Упс! Что-то пошло не так</ErrorHeading>
          <ErrorMessage>
            {this.state.error?.message || 'Произошла неизвестная ошибка'}
          </ErrorMessage>
          <ReloadButton onClick={() => window.location.reload()}>
            Перезагрузить страницу
          </ReloadButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 