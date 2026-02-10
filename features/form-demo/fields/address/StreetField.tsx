import { Control, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { FormValues } from "../../schema";

type FieldProps = {
  control: Control<FormValues>;
};

export function StreetField({ control }: FieldProps) {
  return (
    <Controller
      name="address.street"
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor="address.street">Endereço</FieldLabel>
          <Input
            {...field}
            id="address.street"
            aria-invalid={fieldState.invalid}
            placeholder="Rua/Avenida"
            autoComplete="off"
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
