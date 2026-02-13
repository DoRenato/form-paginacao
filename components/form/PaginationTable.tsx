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

type Props = {
  pagina: number;
  totalPaginas: number;
  linhas: number;
  setPagina: (n: number) => void;
  setLinhas: (n: number) => void;
  getPages: () => number[];
};

export default function PaginationTable({
  pagina,
  totalPaginas,
  linhas,
  setPagina,
  setLinhas,
  getPages,
}: Props) {
  return (
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
              className="cursor-pointer select-none"
              onClick={(e) => {
                e.preventDefault();
                setPagina(Math.max(1, pagina - 1));
              }}
            />
          </PaginationItem>
          {getPages().map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                className="cursor-pointer select-none"
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
              className="cursor-pointer select-none"
              onClick={(e) => {
                e.preventDefault();
                setPagina(Math.min(totalPaginas, pagina + 1));
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
