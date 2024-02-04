import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { nunito } from '@/app/ui/fonts';
import clsx from 'clsx';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      /> */}
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'collected' | 'pending' | 'invoices' | 'customers';
}) {
  const Icon = iconMap[type];

  return (
    <div className={clsx(
      "rounded-xl bg-gray-50 p-2 shadow-sm",
      {
        "bg-green-300": type == 'collected',
        "bg-red-300": type == 'pending',
        "bg-sky-300": type == 'invoices',
        "bg-orange-300": type == 'customers',
      }
    )}>
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-xs font-medium">{title}</h3>
      </div>
      <p
        className={`${nunito.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
