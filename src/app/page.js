import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">WebTech Final Project</h1>
      <nav className="mt-4 space-x-4">
        <Link href="/users" className="text-blue-500 underline">Users</Link>
        <Link href="/posts" className="text-blue-500 underline">Posts</Link>
        <Link href="/charts" className="text-blue-500 underline">Charts</Link>
      </nav>
    </main>
  );
}
