import { Control, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { FormValues } from "../../schema";

type FieldProps = {
  control: Control<FormValues>;
};

export function CityField({ control }: FieldProps) {
  return (
    <Controller
      name="address.city"
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor="address.city">Cidade</FieldLabel>
          <Input
            {...field}
            id="address.city"
            aria-invalid={fieldState.invalid}
            placeholder="Ex: São Paulo"
            autoComplete="off"
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
