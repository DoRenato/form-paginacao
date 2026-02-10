import { Control, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { FormValues } from "../schema";

type FieldProps = {
  control: Control<FormValues>;
};

export function AddressComplementField({ control }: FieldProps) {
  return (
    <Controller
      name="address.complement"
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor="address.complement">Complemento (Opcional)</FieldLabel>
          <Input
            {...field}
            id="address.complement"
            aria-invalid={fieldState.invalid}
            placeholder="Ex: Em frente à academia"
            autoComplete="off"
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
