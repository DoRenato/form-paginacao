"use client";

import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useFormDemo } from "./useFormDemo";
import { NameField } from "./fields/NameField";
import { LastNameField } from "./fields/LastNameField";
import { FormValues } from "./schema";

export default function FormDemo() {
  const form = useFormDemo();

  function onSubmit(data: FormValues) {
    toast.success("Enviado");
  }

  return (
    <Card className="p-5">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-3">
          <NameField control={form.control} />
          <LastNameField control={form.control} />
        </div>

        <div className="pt-5">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Card>
  );
}
