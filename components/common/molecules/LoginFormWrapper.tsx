import { ReactNode } from "react";

interface LoginFormWrapperProps {
  children: ReactNode;
  title: string;
}

const LoginFormWrapper = ({ children, title }: LoginFormWrapperProps): JSX.Element => (
  <section className="h-screen flex justify-center items-center px-5">
    <article className="max-w-sm">
      <div className="h-2.5">
        <div className="absolute inset-x-0 flex justify-center">
          <h2 className="bg-white px-4 pb-2 font-bold text-center text-green">{title}</h2>
        </div>
      </div>
      <form className="p-5 pt-8 pb-6 border-4 border-green space-y-4">{children}</form>
    </article>
  </section>
);

export default LoginFormWrapper;
