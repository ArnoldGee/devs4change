import React, { ReactElement } from "react";

interface Props {
  placeholder: string;
  label: string;
  error?: string;
}

export default function Input({ error, label, ...props }: Props): ReactElement {
  return (
    <label className="block">
      <span className="text-sm text-green">{label}</span>
      <input
        className="block w-full py-3 px-4 border-2 border-green  placeholder-concrete"
        type="text"
        {...props}
      />
      {error && <span className="text-xs text-error">{error}</span>}
    </label>
  );
}
