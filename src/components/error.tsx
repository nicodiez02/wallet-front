import React from "react";

export const Error = ({ message }: { message: string }) => {
  return <p className="text-error italic text-center w-full">{message}</p>;
};
