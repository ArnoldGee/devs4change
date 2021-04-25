import Button from "../common/atoms/Button";
import Input from "../common/atoms/Input";
import LoginFormWrapper from "../common/molecules/LoginFormWrapper";
import TextDivider from "../common/molecules/TextDivider";

function LoginForm(): JSX.Element {
  return (
    <LoginFormWrapper title="Welcome back!">
      <Input label="Mail" placeholder="devs4change@email.com" />
      <Input label="Password" placeholder="1234aaaa" />
      <div className="flex justify-end">
        <Button size="m">Log in</Button>
      </div>
      <TextDivider text="or" />
      <div className="flex justify-center">
        <Button size="m">Log in with Google</Button>
      </div>
    </LoginFormWrapper>
  );
}

export default LoginForm;
