import { Control, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { FormValues } from "../schema";

type FieldProps = {
  control: Control<FormValues>;
};

export function AddressNumberField({ control }: FieldProps) {
  return (
    <Controller
      name="address.number"
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor="address.number">Número</FieldLabel>
          <Input
            {...field}
            id="address.number"
            aria-invalid={fieldState.invalid}
            placeholder="Ex: 56"
            autoComplete="off"
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
