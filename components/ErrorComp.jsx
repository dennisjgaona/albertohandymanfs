import React from "react";
import { useRouteError } from "react-router-dom";
export default function ErrorComp() {
  const error = useRouteError();
  return (
    <>
      <h1>Error {error.status}</h1>
      <h2>Status: {error.statusText}</h2>
      <p>{error.message}</p>
    </>
  );
}
