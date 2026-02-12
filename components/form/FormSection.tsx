interface FormSectionProps {
  titulo: string;
  descricao: string;
}

export default function FormSection({ titulo, descricao }: FormSectionProps) {
  return (
    <div className="pb-6">
      <h1 className="font-semibold">{titulo}</h1>
      <p className="pt-1 text-sm text-gray-500">{descricao}</p>
    </div>
  );
}
