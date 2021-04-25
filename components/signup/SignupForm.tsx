import Button from "../common/atoms/Button";
import Input from "../common/atoms/Input";
import LoginFormWrapper from "../common/molecules/LoginFormWrapper";
import TextDivider from "../common/molecules/TextDivider";

function SignupForm(): JSX.Element {
  return (
    <LoginFormWrapper title="Create your account">
      <Input label="Mail" placeholder="devs4change@email.com" />
      <Input label="Password" placeholder="1234aaaa" />
      <div className="flex justify-end">
        <Button size="m">Sign up</Button>
      </div>
      <TextDivider text="or" />
      <div className="flex justify-center">
        <Button size="m">Join with your Google account</Button>
      </div>
    </LoginFormWrapper>
  );
}

export default SignupForm;
