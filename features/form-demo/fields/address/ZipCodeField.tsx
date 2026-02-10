import { Control, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { FormValues } from "../../schema";

type FieldProps = {
  control: Control<FormValues>;
};

export function ZipCodeField({ control }: FieldProps) {
  return (
    <Controller
      name="address.zipCode"
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor="address.zipCode">CEP</FieldLabel>
          <Input
            {...field}
            id="address.zipCode"
            aria-invalid={fieldState.invalid}
            placeholder="Ex: 01001-000"
            autoComplete="off"
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
