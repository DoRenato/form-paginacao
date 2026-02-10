"use client";

import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useFormDemo } from "./useFormDemo";
import { NameField } from "./fields/NameField";
import { LastNameField } from "./fields/LastNameField";
import { FormValues } from "./schema";
import { FormProvider } from "react-hook-form";
import PhoneNumbers from "./fields/PhoneNumbersField";
import { CpfField } from "./fields/CpfField";
import { BirthDateField } from "./fields/BirthDate";
import GenderField from "./fields/GenderField";
import FormSection from "@/components/form/FormSection";
import { StreetField } from "./fields/address/StreetField";
import { AddressNumberField } from "./fields/address/AddressNumberField";
import { ComplementField } from "./fields/address/ComplementField";
import { NeighborhoodField } from "./fields/address/NeighborhoodField";
import { ZipCodeField } from "./fields/address/ZipCodeField";
import { CityField } from "./fields/address/CityField";
import StateField from "./fields/address/StateField";

export default function FormDemo() {
  const form = useFormDemo();

  function onSubmit(data: FormValues) {
    toast.success("Enviado");
    const cleaned = data.phoneNumbers.map((p) => ({
      number: p.number.replace(/\D/g, ""),
    }));
    const formatted = {
      ...data,
      phoneNumbers: cleaned,
      birthDate: data.birthDate
        ? data.birthDate.toLocaleDateString("pt-BR")
        : "",
    };

    console.log(formatted);
  }

  return (
    <FormProvider {...form}>
      <Card>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormSection
            titulo="Dados Pessoais"
            descricao="Nos ajude a te conhecer melhor."
          />
          <div className="grid grid-cols-12 gap-3 px-6">
            <div className="col-span-4">
              <NameField control={form.control} />
            </div>
            <div className="col-span-4">
              <LastNameField control={form.control} />
            </div>
            <div className="col-span-4">
              <CpfField control={form.control} />
            </div>
            <div className="col-span-4">
              <PhoneNumbers control={form.control} />
            </div>
            <div className="col-span-4">
              <BirthDateField />
            </div>
            <div className="col-span-4">
              <GenderField />
            </div>
          </div>
          <div className="pt-15">
            <FormSection
              titulo="Dados de Endereço"
              descricao="Vamos guardar seu endereço para a entrega do seu produto imaginário."
            />
          </div>
          <div className="grid grid-cols-12 gap-3 px-6">
            <div className="col-span-4">
              <StreetField control={form.control} />
            </div>
            <div className="col-span-2">
              <AddressNumberField control={form.control} />
            </div>
            <div className="col-span-4">
              <ComplementField control={form.control} />
            </div>
            <div className="col-span-4">
              <NeighborhoodField control={form.control} />
            </div>
            <div className="col-span-4">
              <ZipCodeField control={form.control} />
            </div>
            <div className="col-span-4">
              <CityField control={form.control} />
            </div>
            <div className="col-span-4">
              <StateField control={form.control} />
            </div>
          </div>
          <div className="pt-5 pl-6">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Card>
    </FormProvider>
  );
}
