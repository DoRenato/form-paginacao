"use client";

import { XIcon } from "lucide-react";
import { Control, Controller, useFieldArray } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { FormValues } from "../schema";
import { useMask } from "@react-input/mask";

type FieldProps = {
  control: Control<FormValues>;
};

export default function PhoneNumbers({ control }: FieldProps) {
  const { fields, append, remove } = useFieldArray({
    control: control,
    name: "phoneNumbers",
  });
  const inputRef = useMask({
    mask: "(##) #####-####",
    replacement: { "#": /\d/ },
  });

  return (
    <div>
      <FieldSet className="gap-4">
        <FieldLegend variant="label">Telefone</FieldLegend>
        <FieldGroup className="gap-4">
          {fields.map((field, index) => (
            <Controller
              key={field.id}
              name={`phoneNumbers.${index}.number`}
              control={control}
              render={({ field: controllerField, fieldState }) => (
                <Field
                  orientation="horizontal"
                  data-invalid={fieldState.invalid}
                >
                  <FieldContent>
                    <InputGroup>
                      <InputGroupInput
                        {...controllerField}
                        id={`phoneNumbers.${index}.number`}
                        aria-invalid={fieldState.invalid}
                        ref={inputRef}
                        placeholder="(11) 98888-7777"
                        type="text"
                        autoComplete="off"
                      />
                      {fields.length > 1 && (
                        <InputGroupAddon align="inline-end">
                          <InputGroupButton
                            type="button"
                            variant="ghost"
                            size="icon-xs"
                            onClick={() => remove(index)}
                            aria-label={`Remover Telefone ${index + 1}`}
                          >
                            <XIcon />
                          </InputGroupButton>
                        </InputGroupAddon>
                      )}
                    </InputGroup>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </FieldContent>
                </Field>
              )}
            />
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => append({ number: "" })}
            disabled={fields.length >= 2}
          >
            Adicionar outro Telefone
          </Button>
        </FieldGroup>
      </FieldSet>
    </div>
  );
}
