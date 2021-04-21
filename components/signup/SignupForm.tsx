import Button from "../atoms/Button";
import Input from "../atoms/Input";

// TODO: Separate form wrapper into its own independendent component
function SignupForm(): JSX.Element {
  return (
    <section className="h-screen flex justify-center items-center px-5">
      <article className="max-w-sm">
        <div className="h-2.5">
          <div className="absolute inset-x-0 flex justify-center">
            <h2 className="bg-white px-5 pb-2 font-bold text-center text-green">
              Create your account
            </h2>
          </div>
        </div>
        <form className="p-5 pt-8 pb-6 border-4 border-green space-y-4">
          <Input label="Mail" placeholder="devs4change@email.com" />
          <Input label="Password" placeholder="1234aaaa" />
          <div className="flex justify-end">
            <Button size="m">Sign up</Button>
          </div>
        </form>
      </article>
    </section>
  );
}

export default SignupForm;
