"use client";

import { toast } from "sonner";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useFormDemo } from "./useFormDemo";
import { NameField } from "./fields/NameField";
import { LastNameField } from "./fields/LastNameField";
import { FormValues } from "./schema";
import { FormProvider } from "react-hook-form";
import PhoneNumber from "./fields/PhoneNumber";
import { CpfField } from "./fields/CpfField";


export default function FormDemo() {
  const form = useFormDemo();

  function onSubmit(data: FormValues) {
    toast.success("Enviado");
    console.log(data);
  }

  return (
    <FormProvider {...form}>
      <Card>
        <CardHeader>
          <CardTitle>Dados Pessoais</CardTitle>
          <CardDescription>Nos ajude a te conhecer melhor.</CardDescription>
        </CardHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-3 gap-3 px-6">
            <NameField control={form.control} />
            <LastNameField control={form.control} />
            <CpfField control={form.control} />
            <PhoneNumber control={form.control} />
          </div>

          <div className="pt-5 pl-6">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Card>
    </FormProvider>
  );
}
