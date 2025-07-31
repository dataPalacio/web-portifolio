// Criar um componente React para capturar erros no console e simplificar o projeto temporariamente
import React, { useEffect, useState } from "react";

const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setError(event.message);
      console.error("Captured error:", event.message, event.error);
    };

    const handleRejection = (event: PromiseRejectionEvent) => {
      setError(event.reason?.message || "Unhandled promise rejection");
      console.error("Captured promise rejection:", event.reason);
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);

  if (error) {
    return <div style={{ padding: 20, color: "red", backgroundColor: "#fff" }}>
      <h1>Erro capturado no console:</h1>
      <pre>{error}</pre>
    </div>;
  }

  return <>{children}</>;
};

export default ErrorBoundary;
