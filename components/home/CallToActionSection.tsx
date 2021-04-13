import MaxWidth from "../atoms/MaxWidth";
import Section from "../atoms/Section";
import TextH2 from "../atoms/TextH2";
import Button from "../atoms/Button";

const CallToActionSection = (): JSX.Element => (
  <Section>
    <MaxWidth>
      <div className="py-20">
        <TextH2 className="pb-14 text-center">Sign up now</TextH2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <Button>Start as a developer</Button>
          <Button style="inverted">I am a non-profit</Button>
        </div>
      </div>
    </MaxWidth>
  </Section>
);

export default CallToActionSection;
