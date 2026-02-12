import { Field, FieldLabel } from "@/components/ui/field";
import React from "react";

type FieldProps = {
  title: string;
  children: React.ReactNode;
};

export function CheckboxesTitleField({ children, title }: FieldProps) {
  return (
    <Field>
      <FieldLabel>{title}</FieldLabel>
      {children}
    </Field>
  );
}
