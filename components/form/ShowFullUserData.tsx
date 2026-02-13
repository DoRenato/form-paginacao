import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { UserPayload } from "@/data/listOfAccounts";
import React from "react";
import { Separator } from "../ui/separator";

type Props = {
  contas: UserPayload[]; //sempre que for setAlgo precisa ser desse jeito
  open: boolean;
  setOpen:React.Dispatch<React.SetStateAction<boolean>>;
  activeIndex: number
};

export function ShowFullUserData({ open, setOpen, contas, activeIndex }: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {contas[activeIndex].name} {contas[activeIndex].lastName}
          </DialogTitle>
          <DialogDescription>
            Você pode user o scroll para ver todo o conteúdo.
          </DialogDescription>
        </DialogHeader>
        <div className="no-scrollbar flex max-h-[60dvh] flex-col overflow-y-auto">
          <div className="pb-4">
            <h1 className="pb-1 font-bold">Dados Pessoais</h1>
            <Separator className="bg-neutral-400" />
          </div>
          <div className="flex gap-1 pb-4">
            <h3 className="font-semibold">CPF:</h3>
            <p className="">{contas[activeIndex].cpf}</p>
          </div>
          <div className="flex gap-1 pb-4">
            <h3 className="font-semibold">Gênero:</h3>
            <p className="">{contas[activeIndex].gender}</p>
          </div>
          <div className="flex gap-1 pb-4">
            <h3 className="font-semibold">Email:</h3>
            <p className="">{contas[activeIndex].email}</p>
          </div>
          <div className="flex gap-1 pb-4">
            <h3 className="font-semibold">Data de Nascimento:</h3>
            <p className="">{contas[activeIndex].birthDate}</p>
          </div>
          <div className="flex gap-1 pb-4">
            <h3 className="font-semibold">Telefone(s):</h3>
            <p className="flex gap-3">
              {contas[activeIndex].phoneNumbers.map((numero, indice) => (
                <span key={indice}>{numero.number}</span>
              ))}
            </p>
          </div>
          <div className="pt-5 pb-4">
            <h1 className="pb-1 font-bold">Dados de Endereço</h1>
            <Separator className="bg-neutral-400" />
          </div>
          <div className="flex gap-1 pb-4">
            <h3 className="font-semibold">Endereço:</h3>
            <p className="">{contas[activeIndex].address.street}</p>
          </div>
          <div className="flex gap-1 pb-4">
            <h3 className="font-semibold">Número:</h3>
            <p className="">{contas[activeIndex].address.number}</p>
          </div>
          <div className="flex gap-1 pb-4">
            <h3 className="font-semibold">Complemento:</h3>
            <p className="">
              {contas[activeIndex].address.complement || "Sem complemento"}
            </p>
          </div>
          <div className="flex gap-1 pb-4">
            <h3 className="font-semibold">Bairro:</h3>
            <p className="">{contas[activeIndex].address.neighborhood}</p>
          </div>
          <div className="flex gap-1 pb-4">
            <h3 className="font-semibold">Cidade:</h3>
            <p className="">{contas[activeIndex].address.city}</p>
          </div>
          <div className="flex gap-1 pb-4">
            <h3 className="font-semibold">Estado:</h3>
            <p className="">{contas[activeIndex].address.state}</p>
          </div>
          <div className="pt-5 pb-4">
            <h1 className="pb-1 font-bold">Outros Dados</h1>
            <Separator className="bg-neutral-400" />
          </div>
          <div className="flex gap-1 pb-4">
            <h3 className="font-semibold">Notificações:</h3>
            <p>
              {[
                contas[activeIndex].notifications.phone && "Telefone",
                contas[activeIndex].notifications.email && "Email",
              ]
                .filter(Boolean)
                .join(", ")}
            </p>
          </div>
          <div className="flex gap-1 pb-4">
            <h3 className="font-semibold">Autent. 2 Fatores:</h3>
            <p className="">
              {contas[activeIndex].multistep ? "Ativada" : "Desativada"}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
