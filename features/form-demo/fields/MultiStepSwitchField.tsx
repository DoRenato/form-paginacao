"use client";

import { Controller, useFormContext } from "react-hook-form";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { FormValues } from "../schema";
import { Switch } from "@/components/ui/switch";

export default function MultiStepSwitchField() {
  const { control } = useFormContext<FormValues>();
  return (
    <Controller
      name="multistep"
      control={control}
      render={({ field, fieldState }) => (
        <FieldGroup className="max-w-sm">
          <Field orientation="horizontal" data-invalid={fieldState.invalid}>
            <FieldContent>
              <FieldLabel htmlFor="multistep">
                Autenticação em 2 fatores
              </FieldLabel>
              <FieldDescription>
                Ativar a Autenticação em 2 fatores para manter sua conta segura.
              </FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
            <Switch
              id="multistep"
              name={field.name}
              checked={field.value}
              onCheckedChange={field.onChange}
              aria-invalid={fieldState.invalid}
            />
          </Field>
          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </FieldGroup>
      )}
    />
  );
}
