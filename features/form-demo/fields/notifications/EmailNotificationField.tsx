"use client";

import { Controller, useFormContext } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { FormValues } from "../../schema";
import { Label } from "@/components/ui/label";

export default function EmailNotificationField() {
  const { control } = useFormContext<FormValues>();
  return (
    <Controller
      name="notifications.email"
      control={control}
      render={({ field, fieldState }) => (
        <FieldGroup className="max-w-sm">
          <Field orientation="horizontal">
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              id="notifications.email"
              name="notifications.email"
            />
            <Label htmlFor="notifications.email">
              Notificações por Email
            </Label>
          </Field>
          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </FieldGroup>
      )}
    />
  );
}
