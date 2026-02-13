"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { UserPayload } from "@/data/listOfAccounts";
import { ShowFullUserData } from "@/components/form/ShowFullUserData";
import PaginationTable from "@/components/form/PaginationTable";
import { Card } from "@/components/ui/card";

type Props = {
  accounts: UserPayload[];
};

export default function ShowAccounts({ accounts }: Props) {
  const [linhas, setLinhas] = useState(3);
  const [pagina, setPagina] = useState(1);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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
  function openUser(index: number) {
    setActiveIndex(index);
    setOpen(true);
  }
  return (
    <Card className="px-5">
      <Table className="w-full table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead className="w-40">Nome</TableHead>
            <TableHead className="w-40">Email</TableHead>
            <TableHead className="w-40">Telefone</TableHead>
            <TableHead className="w-40">Gênero</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contas.map((conta, indice) => (
            <TableRow key={indice}>
              <TableCell className="max-w-40 truncate font-medium">
                {conta.name} {conta.lastName}
              </TableCell>
              <TableCell className="max-w-40 truncate">{conta.email}</TableCell>
              <TableCell className="max-w-25 truncate">
                {conta.phoneNumbers[0].number}
              </TableCell>
              <TableCell className="max-w-25 truncate">
                {conta.gender}
              </TableCell>
              <TableCell
                className="flex justify-end"
                onClick={() => openUser(indice)}
              >
                <div className="cursor-pointer font-medium hover:underline">
                  Ver completo
                </div>
              </TableCell>
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

      <PaginationTable
        pagina={pagina}
        linhas={linhas}
        totalPaginas={totalPaginas}
        setPagina={setPagina}
        setLinhas={setLinhas}
        getPages={getPages}
      />

      <ShowFullUserData
        activeIndex={activeIndex}
        contas={contas}
        open={open}
        setOpen={setOpen}
      />
    </Card>
  );
}
