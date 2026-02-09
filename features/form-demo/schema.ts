import { isValidCpf } from "@/lib/cpfValidator";
import * as z from "zod";

const phoneSchema = z
  .string()
  // remove tudo que não for número
  .transform((val) => val.replace(/\D/g, ""))
  // remove 55 se existir
  .transform((val) => (val.startsWith("55") ? val.slice(2) : val))
  // valida tamanho
  .refine((val) => val.length === 11, {
    message: "Telefone deve conter DDD + 9 dígitos",
  })
  // valida celular (9 na terceira posição)
  .refine((val) => val[2] === "9", {
    message: "Número de celular inválido",
  });

export const formSchema = z.object({
  name: z
    .string()
    .min(2, "O nome deve conter pelo menos 2 caracteres.")
    .max(32, "O nome deve conter no máximo 32 caracteres."),
  lastName: z
    .string()
    .min(2, "O Sobrenome deve conter pelo menos 2 caracteres.")
    .max(32, "O Sobrenome deve conter no máximo 32 caracteres."),
  phoneNumbers: z
    .array(
      z.object({
        number: phoneSchema,
      }),
    )
    .min(1, "Informe ao menos um telefone")
    .max(2, "Máximo de dois telefones"),
  cpf: z
    .string()
    .trim() // remove espaços em branco no começo e final da string
    .transform((value) => value.replace(/\D/g, "")) // remove pontos e traço
    .refine((value) => value.length === 11, {
      message: "CPF deve conter 11 números.",
    })
    .refine((value) => isValidCpf(value), {
      message: "CPF inválido.",
    }),
  // birthDate: z
  //   .string()
  //   .trim()
  //   .refine((v) => /^\d{2}\/\d{2}\/\d{4}$/.test(v), {
  //     message: "Formato inválido. Use DD/MM/AAAA",
  //   })
  //   .transform((v) => {
  //     const [day, month, year] = v.split("/").map(Number);

  //     return new Date(year, month - 1, day);
  //   })
  //   .refine((date) => !isNaN(date.getTime()), {
  //     message: "Data inválida",
  //   })
  //   .refine(
  //     (date) => {
  //       const age = new Date().getFullYear() - date.getFullYear();

  //       return age >= 16;
  //     },
  //     {
  //       message: "Você precisa ter ao menos 16 anos",
  //     },
  //   ),
  // gender: z.enum(["male", "female", "not_say"]),
});

export type FormValues = z.infer<typeof formSchema>;
