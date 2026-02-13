import FormDemo from "@/features/form-demo/FormDemo";
import ShowAccounts from "@/widgets/ShowAccounts";

export default function Home() {
  return (
    <main className="relative bg-gray-100 lg:min-h-dvh">
      <div className="grid grid-cols-12 px-2 pt-2">
        <div className="col-span-7 px-5">
          <FormDemo />
        </div>
      </div>
      <div className="absolute top-0 right-0 h-full w-200 bg-white px-5">
        <div className="">
          <ShowAccounts />
        </div>
      </div>
    </main>
  );
}
