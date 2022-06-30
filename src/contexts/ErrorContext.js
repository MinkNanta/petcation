import { createContext, useContext, useState } from 'react';

const ErrorContext = createContext();

function ErrorContextProvider({ children }) {
  const [error, setError] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [trigger, setTrigger] = useState(false);
  return (
    <ErrorContext.Provider
      value={{ error, setError, trigger, setTrigger, feedback, setFeedback }}
    >
      {children}
    </ErrorContext.Provider>
  );
}

const useError = () => {
  const ctx = useContext(ErrorContext);
  return ctx;
};

export default ErrorContextProvider;

export { ErrorContext, useError };
