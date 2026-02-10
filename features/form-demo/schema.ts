import { isValidCpf } from "@/lib/cpfValidator";
import * as z from "zod";



const onlyLetters = /^[\p{L}\s]+$/u;

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
    .trim()
    .min(2, "Nome muito curto.")
    .max(32, "Nome muito longo.")
    .regex(onlyLetters, "Use apenas letras"),
  lastName: z
    .string()
    .trim()
    .min(2, "Sobrenome muito curto.")
    .max(32, "Sobrenome muito longo.")
    .regex(onlyLetters, "Use apenas letras"),
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
  birthDate: z.date({error:"Data obrigatória"
  }),
  gender: z.enum(["male", "female", "not_say"]),
});

export type FormValues = z.infer<typeof formSchema>;
