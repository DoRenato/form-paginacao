import { Control, Controller, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { FormValues } from "../../schema";
import { useMask } from "@react-input/mask";
import { useEffect } from "react";

type FieldProps = {
  control: Control<FormValues>;
};

export function ZipCodeField({ control }: FieldProps) {
  const { watch, setValue, setError, clearErrors } =
    useFormContext<FormValues>();

  const cep = watch("address.zipCode");

  const inputRef = useMask({
    mask: "#####-###",
    replacement: { "#": /\d/ },
  });

  useEffect(() => {
    if (!cep) return;

    const cleanCep = cep.replace(/\D/g, "");

    if (cleanCep.length !== 8) return;

    async function fetchAddress() {
      const res = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      const data = await res.json();

      if (data.erro) {
        setError("address.zipCode", {
          type: "manual",
          message: "CEP não encontrado",
        });

        setValue("address.street", "");
        setValue("address.neighborhood", "");
        setValue("address.city", "");
        setValue("address.state", "Select");

        return;
      }

      clearErrors("address.zipCode");

      setValue("address.street", data.logradouro);
      setValue("address.neighborhood", data.bairro);
      setValue("address.city", data.localidade);
      setValue("address.state", data.uf);
    }

    fetchAddress();
  }, [cep, setValue, clearErrors, setError]);

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
            ref={inputRef}
            placeholder="Ex: 01001-000"
            autoComplete="off"
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
