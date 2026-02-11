"use client";

import { Controller, useFormContext } from "react-hook-form";
import * as React from "react";
import { ptBR } from "date-fns/locale";

import { Calendar } from "@/components/ui/calendar";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

import { FormValues } from "../schema";

function formatDate(date?: Date) {
  if (!date) return "";

  return date.toLocaleDateString("pt-BR");
}

export function BirthDateField() {
  const { control } = useFormContext<FormValues>();
  const [open, setOpen] = React.useState(false);

  return (
    <Controller
      name="birthDate"
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel>Data de nascimento</FieldLabel>

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="justify-start font-normal">
                {field.value
                  ? formatDate(field.value)
                  : "Selecione uma data"}
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                locale={ptBR}
                captionLayout="dropdown"
                startMonth={new Date(1916, 0)}
                disabled={{ after: new Date() }}
                onSelect={(date) => {
                  field.onChange(date);
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>

          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
