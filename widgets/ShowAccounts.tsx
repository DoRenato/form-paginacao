"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { UserPayload } from "@/data/listOfAccounts";

type Props = {
  accounts: UserPayload[];
};

export default function ShowAccounts({ accounts }: Props) {
  const [linhas, setLinhas] = useState(3);
  const [pagina, setPagina] = useState(1);
  const totalPaginas = Math.ceil(accounts.length / linhas);
  const inicio = (pagina - 1) * linhas;
  const fim = inicio + linhas;
  const contas = accounts.slice(inicio, fim);
  const linhasVazias = linhas - contas.length;
  const getPages = () => {
    if (totalPaginas <= 5) {
      return Array.from({ length: totalPaginas }, (_, i) => i + 1);
    }
    if (pagina <= 2) return [1, 2, 3, 4, 5];
    if (pagina >= totalPaginas - 2)
      return [
        totalPaginas - 4,
        totalPaginas - 3,
        totalPaginas - 2,
        totalPaginas - 1,
        totalPaginas,
      ];
    return [pagina - 2, pagina - 1, pagina, pagina + 1, pagina + 2];
  };
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-25">Nome</TableHead>
            <TableHead>CPF</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contas.map((conta, indice) => (
            <TableRow key={indice}>
              <TableCell className="font-medium">
                {conta.name} {conta.lastName}
              </TableCell>
              <TableCell>{conta.cpf}</TableCell>
              <TableCell className="flex flex-col">
                <div>{conta.phoneNumbers[0].number}</div>
              </TableCell>
              <TableCell className="text-right">{conta.email}</TableCell>
            </TableRow>
          ))}
          {/* linhas vazias */}
          {Array.from({ length: linhasVazias }).map((_, i) => (
            <TableRow key={`empty-${i}`}>
              <TableCell colSpan={4}>&nbsp;</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex gap-4 pt-5">
        <Field orientation="horizontal" className="w-fit">
          <FieldLabel htmlFor="select-rows-per-page">
            Linhas por página
          </FieldLabel>
          <Select
            defaultValue={linhas.toString()}
            onValueChange={(v) => {
              setLinhas(Number(v));
              setPagina(1);
            }}
          >
            <SelectTrigger className="w-20" id="select-rows-per-page">
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="start">
              <SelectGroup>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="7">7</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>
        <Pagination className="mx-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPagina((p) => Math.max(1, p - 1));
                }}
              />
            </PaginationItem>
            {getPages().map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  isActive={pagina === page}
                  onClick={(e) => {
                    e.preventDefault();
                    setPagina(page);
                  }}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPagina((p) => Math.min(totalPaginas, p + 1));
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
