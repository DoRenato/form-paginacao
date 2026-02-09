import { Control, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { FormValues } from "../schema";
import { useMask } from "@react-input/mask";

type FieldProps = {
  control: Control<FormValues>;
};

export function CpfField({ control }: FieldProps) {
  const inputRef = useMask({
    mask: "###.###.###-##",
    replacement: { "#": /\d/ },
  });
  return (
    <Controller
      name="cpf"
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor="name">CPF</FieldLabel>
          <Input
            {...field}
            id="cpf"
            ref={inputRef}
            aria-invalid={fieldState.invalid}
            placeholder="Digite seu CPF"
            autoComplete="off"
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
