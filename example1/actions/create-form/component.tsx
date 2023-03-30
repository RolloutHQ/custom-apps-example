import React from "react";

import type { AppComponentProps } from "@rollouthq/connect-react/components/app-component-renderer";

import type { inputParamsSchema } from "./params";

export const Component = (
  props: AppComponentProps<typeof inputParamsSchema>
) => {
  const { b, inputComponents } = props;
  const { RichTextInput } = inputComponents;

  return (
    <>
      <RichTextInput bind={b.name} />
    </>
  );
};
