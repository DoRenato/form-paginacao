import FormDemo from "@/features/form-demo/FormDemo";

export default function Home() {
  return (
    <main className="bg-gray-300 lg:min-h-dvh">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 pt-2">
          <div className="col-span-8">
            <FormDemo />
          </div>
          <div className="col-span-4">lista</div>
        </div>
      </div>
    </main>
  );
}
