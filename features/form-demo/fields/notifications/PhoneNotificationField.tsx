"use client";

import { Controller, useFormContext } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { FormValues } from "../../schema";
import { Label } from "@/components/ui/label";

export default function PhoneNotificationField() {
  const { control } = useFormContext<FormValues>();
  return (
    <Controller
      name="notifications.phone"
      control={control}
      render={({ field, fieldState }) => (
        <FieldGroup className="max-w-sm">
          <Field orientation="horizontal">
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              id="notifications.phone"
              name="notifications.phone"
            />
            <Label htmlFor="notifications.phone">
              Notificações por Telefone
            </Label>
          </Field>
          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </FieldGroup>
      )}
    />
  );
}
