import MaxWidth from "../common/atoms/MaxWidth";
import Section from "../common/atoms/Section";
import TextH2 from "../common/atoms/TextH2";
import Button from "../common/atoms/Button";
import Link from "next/link";

const CallToActionSection = (): JSX.Element => (
  <Section>
    <MaxWidth>
      <div className="py-20">
        <TextH2 className="pb-14 text-center">Sign up now</TextH2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <Link href="/signup">
            <a>
              <Button>Start as a developer</Button>
            </a>
          </Link>
          <Link href="/signup">
            <a>
              <Button style="inverted">I am a non-profit</Button>
            </a>
          </Link>
        </div>
      </div>
    </MaxWidth>
  </Section>
);

export default CallToActionSection;
