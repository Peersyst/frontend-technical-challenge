import { ErrorWrapper } from './ErrorMsg.styles';

interface CenteredRowProps {
  children: React.ReactNode;
}

const ErrorMsg = ({ children }: CenteredRowProps) => (
  <ErrorWrapper>
    {children}
  </ErrorWrapper>
);


export default ErrorMsg;
