import React from "react";
import { client } from "./config/clinet";
import { LoginForm } from "./register/login";
import { QueryClientProvider } from "react-query";

function App() {
  return (
    <QueryClientProvider client={client}>
      <LoginForm />
    </QueryClientProvider>
  );
}

export default App;
