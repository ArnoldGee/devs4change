import React, { ChangeEvent, FocusEventHandler, ReactElement } from "react";

interface Props {
  placeholder: string;
  type?: "text" | "password";
  label: string;
  value?: string;
  onChange?: (e: ChangeEvent<any>) => any;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  name?: string;
  error?: string;
}

export default function Input({ error, label, type = "text", ...props }: Props): ReactElement {
  return (
    <label className="block">
      <span className="text-sm text-green">{label}</span>
      <input
        className="block w-full py-3 px-4 border-2 border-green  placeholder-concrete"
        type={type}
        {...props}
      />
      {error && <span className="text-xs text-error">{error}</span>}
    </label>
  );
}
