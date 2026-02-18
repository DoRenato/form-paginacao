"use client";

import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useFormDemo } from "@/features/form-demo/useFormDemo";
import { NameField } from "@/features/form-demo/fields/NameField";
import { LastNameField } from "@/features/form-demo/fields/LastNameField";
import { FormValues } from "@/features/form-demo/schema";
import { FormProvider } from "react-hook-form";
import PhoneNumbers from "@/features/form-demo/fields/PhoneNumbersField";
import { CpfField } from "@/features/form-demo/fields/CpfField";
import { BirthDateField } from "@/features/form-demo/fields/BirthDateField";
import GenderField from "@/features/form-demo/fields/GenderField";
import FormSection from "@/components/form/FormSection";
import { StreetField } from "@/features/form-demo/fields/address/StreetField";
import { AddressNumberField } from "@/features/form-demo/fields/address/AddressNumberField";
import { ComplementField } from "@/features/form-demo/fields/address/ComplementField";
import { NeighborhoodField } from "@/features/form-demo/fields/address/NeighborhoodField";
import { ZipCodeField } from "@/features/form-demo/fields/address/ZipCodeField";
import { CityField } from "@/features/form-demo/fields/address/CityField";
import StateField from "@/features/form-demo/fields/address/StateField";
import { EmailField } from "@/features/form-demo/fields/EmailField";
import PhoneNotificationField from "@/features/form-demo/fields/notifications/PhoneNotificationField";
import { CheckboxesTitleField } from "@/features/form-demo/fields/CheckboxesTitleField";
import EmailNotificationField from "@/features/form-demo/fields/notifications/EmailNotificationField";
import { Separator } from "@/components/ui/separator";
import MultiStepSwitchField from "@/features/form-demo/fields/MultiStepSwitchField";
import React from "react";
import { UserPayload } from "@/data/listOfAccounts";

type FormDemoProps = {
  setAccounts: React.Dispatch<React.SetStateAction<UserPayload[]>>; //sempre que for setAlgo precisa ser desse jeito
};

export default function FormDemo({ setAccounts }: FormDemoProps) {
  const form = useFormDemo();

  function onSubmit(data: FormValues) {
    const cleaned = data.phoneNumbers.map((p) => ({
      number: p.number.replace(/\D/g, ""),
    }));
    const payload: UserPayload = {
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      cpf: data.cpf,
      gender: data.gender,
      multistep: data.multistep,
      birthDate: data.birthDate
        ? data.birthDate.toLocaleDateString("pt-BR")
        : "",
      phoneNumbers: cleaned,
      notifications: {
        phone: data.notifications.phone,
        email: data.notifications.email,
      },
      address: {
        street: data.address.street,
        number: data.address.number,
        complement: data.address.complement ?? "",
        neighborhood: data.address.neighborhood,
        zipCode: data.address.zipCode,
        city: data.address.city,
        state: data.address.state,
      },
    };
    setAccounts((prev) => [payload, ...prev]); // joga pro topo
    toast.success("Enviado");
  }

  return (
    <FormProvider {...form}>
      <Card className="px-6">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormSection
            titulo="Dados Pessoais"
            descricao="Os campos como CPF e Telefone possuem máscaras para melhor experiência."
          />
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-12">
            <div className="order-1 lg:order-0 lg:col-span-3">
              <NameField control={form.control} />
            </div>
            <div className="order-2 lg:order-0 lg:col-span-3">
              <LastNameField control={form.control} />
            </div>
            <div className="order-3 lg:order-0 lg:col-span-3">
              <CpfField control={form.control} />
            </div>
            <div className="order-7 col-span-2 lg:order-0 lg:col-span-3 lg:row-span-2">
              <GenderField />
            </div>
            <div className="order-4 lg:order-0 lg:col-span-4">
              <EmailField control={form.control} />
            </div>
            <div className="order-6 lg:order-0 lg:col-span-2">
              <BirthDateField />
            </div>
            <div className="order-5 lg:order-0 lg:col-span-3">
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
          <div className="w-35 lg:w-30 pb-5">
            <ZipCodeField control={form.control} />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-3">
            <div className="lg:col-span-3">
              <StreetField control={form.control} />
            </div>
            <div className="lg:col-span-1">
              <AddressNumberField control={form.control} />
            </div>
            <div className="col-span-2 lg:col-span-4">
              <ComplementField control={form.control} />
            </div>
            <div className="lg:col-span-3">
              <NeighborhoodField control={form.control} />
            </div>
            <div className="lg:col-span-3">
              <CityField control={form.control} />
            </div>
            <div className="lg:col-span-3">
              <StateField control={form.control} />
            </div>
            <div className="hidden lg:col-span-3">{/* espaço */}</div>
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
              <MultiStepSwitchField />
            </div>
            <div className="col-span-1">{/* espaço */}</div>
            <div className="absolute right-0 bottom-0">
              <Button type="submit">Enviar</Button>
            </div>
          </div>
        </form>
      </Card>
    </FormProvider>
  );
}
