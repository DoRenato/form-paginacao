"use client";

import { listOfAccounts, UserPayload } from "@/data/listOfAccounts";
import FormDemo from "@/features/form-demo/FormDemo";
import ShowAccounts from "@/widgets/ShowAccounts";
import { useState } from "react";

export default function Home() {
  const [accounts, setAccounts] = useState<UserPayload[]>(listOfAccounts);
  return (
    <main className="relative bg-gray-100 lg:min-h-dvh">
      <div className="grid grid-cols-12 gap-5 px-2 pt-2">
        <div className="col-span-7">
          <FormDemo setAccounts={setAccounts} />
        </div>
        <div className="col-span-5">
          <ShowAccounts accounts={accounts} />
        </div>
      </div>
    </main>
  );
}
