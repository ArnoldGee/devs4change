import Button from "../common/atoms/Button";
import Input from "../common/atoms/Input";
import LoginFormWrapper from "../common/molecules/LoginFormWrapper";
import TextDivider from "../common/molecules/TextDivider";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import firebase from "../../api/firebase";
import { provider } from "../../api/google-signin";

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: "",
  password: "",
};

function SignupForm(): JSX.Element {
  const router = useRouter();

  const handleGoogleAuth = async (e) => {
    const userCredentials = await firebase.auth().signInWithPopup(provider);
    console.log(userCredentials);
    await router.push("/");
  };

  const handleSubmit = async ({ email, password }: FormValues) => {
    console.log(email, password);
    const userCredentials = await firebase.auth().createUserWithEmailAndPassword(email, password);

    // TODO: save user in recoil or whatever state manager we're going to use
    console.log(userCredentials);
    await router.push("/");
  };

  const DisplayingErrorMessagesSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required field"),
    password: Yup.string()
      .min(6, "Password must be more than 6 words")
      .max(20, "Password must be less than 20 words")
      .required("Required field"),
  });

  return (
    <>
      <Formik
        validationSchema={DisplayingErrorMessagesSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ values, errors, handleChange, handleBlur, touched, handleSubmit }) => (
          <LoginFormWrapper onSubmit={handleSubmit} title="Create your account">
            <Input
              name="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              label="Mail"
              placeholder="devs4change@email.com"
            />
            {errors.email && touched.email && errors.email}
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              label="Password"
              placeholder="1234aaaa"
            />
            {errors.password && touched.password && errors.password}
            <div className="flex justify-end">
              <Button type="submit" size="m">
                Sign up
              </Button>
            </div>
            <TextDivider text="or" />
            <div className="flex justify-center">
              <Button onClick={handleGoogleAuth} size="m">
                Join with GitHub
              </Button>
            </div>
          </LoginFormWrapper>
        )}
      </Formik>
    </>
  );
}

export default SignupForm;
