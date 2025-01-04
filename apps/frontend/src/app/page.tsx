import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-10 justify-center items-center w-svw h-svh bg-primary text-white">
        <h1 className="text-8xl font-semibold">Welcome to Fast Flow</h1>
        <div className="flex gap-8">
          <Link href={'/testpage'}>Form</Link>
          <Link href={'/messenger'}>Messenger</Link>
          <Link href={'/timetracking'}>Timetracking</Link>
          <Link href={'/auth'}>Auth</Link>
          <Link href={'/order'}>Order</Link>
          <Link href={'/calender'}>Calender</Link>
        </div>
      </main>
    </div>
  );
}
