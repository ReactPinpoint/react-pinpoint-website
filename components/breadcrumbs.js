import Link from 'next/link';

export default function Breadcrumbs({ text = '' }) {
  return (
    <header className="bg-white shadow">
      <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Link href="/dashboard">
          <a className="text-2xl font-bold leading-tight text-neutral-900">
            <span className="hover:underline ">Dashboard</span>
          </a>
        </Link>
        <span className="text-2xl font-bold leading-tight text-neutral-900">{' ' + text}</span>
      </div>
    </header>
  );
}
