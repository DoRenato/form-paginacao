"use client";

import { listOfAccounts, UserPayload } from "@/data/listOfAccounts";
import FormDemo from "@/widgets/FormDemo";
import ShowAccounts from "@/widgets/ShowAccounts";
import { useState } from "react";

export default function Home() {
  const [accounts, setAccounts] = useState<UserPayload[]>(listOfAccounts);
  return (
    <main className="relative bg-gray-100 lg:min-h-dvh">
      <div className="flex flex-col gap-5 px-2 pt-2 lg:grid lg:grid-cols-12">
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
