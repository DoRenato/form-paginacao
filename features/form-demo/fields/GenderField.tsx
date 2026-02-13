import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormValues } from "../schema";
import { Controller, useFormContext } from "react-hook-form";

export default function GenderField() {
  const { control } = useFormContext<FormValues>();
  return (
    <Controller
      name="gender"
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor="gender">Gênero</FieldLabel>
          <RadioGroup
            value={field.value}
            onValueChange={field.onChange}
            className="flex w-fit lg:flex-col"
          >
            <div className="flex items-center gap-1">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Masculino</Label>
            </div>
            <div className="flex items-center gap-1">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Feminino</Label>
            </div>
            <div className="flex items-center gap-1">
              <RadioGroupItem value="not_say" id="not_say" />
              <Label htmlFor="not_say">Não responder</Label>
            </div>
          </RadioGroup>
          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
