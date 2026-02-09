import { Control, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { FormValues } from "../schema";

type LastNameFieldProps = {
  control: Control<FormValues>;
};

export function LastNameField({ control }: LastNameFieldProps) {
  return (
    <Controller
      name="lastName"
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor="lastName">Sobrenome</FieldLabel>
          <Input
            {...field}
            id="lastName"
            aria-invalid={fieldState.invalid}
            placeholder="Digite seu Sobrenome"
            autoComplete="off"
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
