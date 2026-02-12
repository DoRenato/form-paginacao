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
      email: "",
      phoneNumbers: [{ number: "" }],
      birthDate: undefined,
      gender: "not_say",
      multistep: false,
      notifications: {
        phone: false,
        email: false,
      },
      address: {
        street: "",
        number: "",
        complement: "",
        neighborhood: "",
        zipCode: "",
        city: "",
        state: "Select",
      },
    },
  });
}
