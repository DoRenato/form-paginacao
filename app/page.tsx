import FormDemo from "@/features/form-demo/FormDemo";

export default function Home() {
  return (
    <main className="container mx-auto">
      <div className="pt-2 grid grid-cols-2">
        <div>
          <FormDemo />
        </div>
        <div>lista</div>
      </div>
    </main>
  );
}
