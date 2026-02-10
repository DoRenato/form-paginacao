import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormValues } from "./schema";

export function useFormDemo() {
  return useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastName: "",
      cpf: "",
      phoneNumbers: [{ number: "" }],
      birthDate: undefined,
      gender: "not_say",
    },
  });
}
