import { Control, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { FormValues } from "../schema";

type NameFieldProps = {
  control: Control<FormValues>;
};

export function NameField({ control }: NameFieldProps) {
  return (
    <Controller
      name="name"
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor="name">Nome</FieldLabel>
          <Input
            {...field}
            id="name"
            aria-invalid={fieldState.invalid}
            placeholder="Digite seu nome"
            autoComplete="off"
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
