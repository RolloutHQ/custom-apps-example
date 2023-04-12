import React from "react";
import type { AppComponentProps } from "@rollouthq/framework";

import type { inputParamsSchema } from "./params";

export const Component = (
  props: AppComponentProps<typeof inputParamsSchema>
) => {
  const { inputComponents, b } = props;
  const { NoInputsComponent, RichTextInput } = inputComponents;

  return (
    <>
      some inputs here?
      <RichTextInput bind={b.someParam} />
    </>
  );
};
