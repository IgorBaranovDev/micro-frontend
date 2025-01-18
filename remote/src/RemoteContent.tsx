import React from "react";
import { CounterWrapper } from "./CounterWrapper";

export const RemoteContent = () => {
  return (
    <div>
      <h2>Hello, I'll be imported into the host</h2>
      <CounterWrapper />
    </div>
  );
};

