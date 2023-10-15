import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import PageLayout from "./PageLayout";

export const Callback: React.FC = () => {
  const { error } = useAuth0();

  if (error) {
    return (
      <PageLayout>
        <h1>Oops... {error.message}</h1>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <p>Callback!</p>
    </PageLayout>
  );
};
