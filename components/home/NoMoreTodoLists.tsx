import React, { ReactElement } from "react";
import MaxWidth from "../atoms/MaxWidth";
import Section from "../atoms/Section";
import TextH2 from "../atoms/TextH2";

export default function NoMoreTodoLists(): ReactElement {
  return (
    <div className="bg-green text-center text-white pt-10 pb-14">
      <Section>
        <MaxWidth>
          <div className="text-5xl pb-10">{">_"}</div>
          <TextH2>Please don’t build another to-do list.</TextH2>
          <article className="text-lg pt-12 space-y-4">
            <p>Being a self-taught developer is hard. We’ve been there.</p>
            <p>Getting a job with no experience is even tougher.</p>
            <p>
              But we know one thing for sure:{" "}
              <strong>
                You didn’t get into coding to spend your life watching YouTube tutorials.
              </strong>
            </p>
            <p>It’s time to create something awesome.</p>
          </article>
        </MaxWidth>
      </Section>
    </div>
  );
}
