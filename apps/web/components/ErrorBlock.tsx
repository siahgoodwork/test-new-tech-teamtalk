import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

export function ErrorBlock({ children }: { children: React.ReactNode }) {
  const [errorMessage, setErrorMessage] = useState<string>("");
  return (
    <ErrorBoundary
      onError={(e) => {
        console.log(e);
        setErrorMessage(e.message);
      }}
      fallback={
        <div className="bg-red-100 w-full p-4 rounded-lg">
          Component error: {errorMessage}
        </div>
      }
    >
      {children}
    </ErrorBoundary>
  );
}
