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
import { BirthDateField } from "./fields/BirthDateField";
import GenderField from "./fields/GenderField";
import FormSection from "@/components/form/FormSection";
import { StreetField } from "./fields/address/StreetField";
import { AddressNumberField } from "./fields/address/AddressNumberField";
import { ComplementField } from "./fields/address/ComplementField";
import { NeighborhoodField } from "./fields/address/NeighborhoodField";
import { ZipCodeField } from "./fields/address/ZipCodeField";
import { CityField } from "./fields/address/CityField";
import StateField from "./fields/address/StateField";
import { EmailField } from "./fields/EmailField";
import PhoneNotificationField from "./fields/notifications/PhoneNotificationField";
import { CheckboxesTitleField } from "./fields/CheckboxesTitleField";
import EmailNotificationField from "./fields/notifications/EmailNotificationField";
import { Separator } from "@/components/ui/separator";
import MultiStepSwitchField from "./fields/MultiStepSwitchField";

export default function FormDemo() {
  const form = useFormDemo();

  function onSubmit(data: FormValues) {
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
    toast.success(`Enviado`);
    console.log(formatted);
  }

  return (
    <FormProvider {...form}>
      <Card className="px-6">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormSection
            titulo="Dados Pessoais"
            descricao="Os campos como CPF e Telefone possuem máscaras para melhor experiência."
          />
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-3">
              <NameField control={form.control} />
            </div>
            <div className="col-span-3">
              <LastNameField control={form.control} />
            </div>
            <div className="col-span-3">
              <CpfField control={form.control} />
            </div>
            <div className="col-span-3 row-span-2">
              <GenderField />
            </div>
            <div className="col-span-4">
              <EmailField control={form.control} />
            </div>
            <div className="col-span-2">
              <BirthDateField />
            </div>
            <div className="col-span-3">
              <PhoneNumbers control={form.control} />
            </div>
          </div>
          <div className="pt-2 pb-4">
            <Separator />
          </div>
          <FormSection
            titulo="Dados de Endereço"
            descricao="Ao digitar o CEP, ele irá resgatar todos os dados de endereço do mesmo."
          />
          <div className="w-30 pb-5">
            <ZipCodeField control={form.control} />
          </div>
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-3">
              <StreetField control={form.control} />
            </div>
            <div className="col-span-1">
              <AddressNumberField control={form.control} />
            </div>
            <div className="col-span-4">
              <ComplementField control={form.control} />
            </div>
            <div className="col-span-3">
              <NeighborhoodField control={form.control} />
            </div>
            <div className="col-span-3">
              <CityField control={form.control} />
            </div>
            <div className="col-span-3">
              <StateField control={form.control} />
            </div>
            <div className="col-span-3">{/* espaço */}</div>
          </div>
          <div className="pt-2 pb-4">
            <Separator />
          </div>
          <FormSection
            titulo="Outros Dados"
            descricao="Checkboxes, switches etc"
          />
          <div className="relative grid grid-cols-12">
            <div className="col-span-4">
              <CheckboxesTitleField title="Notificações">
                <PhoneNotificationField />
                <EmailNotificationField />
              </CheckboxesTitleField>
            </div>
            <div className="col-span-5">
              <MultiStepSwitchField/>
            </div>
            <div className="col-span-1">
              {/* espaço */}
            </div>
            <div className="absolute right-0 bottom-0">
              <Button type="submit">Enviar</Button>
            </div>
          </div>
        </form>
      </Card>
    </FormProvider>
  );
}
