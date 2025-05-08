import Link from 'next/link';
import '@/app/globals.css';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">WebTech Final Project</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Link href="/users" passHref>
            <Button variant="contained" color="primary" fullWidth>
              Users
            </Button>
          </Link>


          <Link href="/posts">
            <div className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 transition cursor-pointer">
              <h2 className="text-xl font-semibold text-green-600 mb-2">Posts</h2>
              <p className="text-gray-500">Read and create posts.</p>
            </div>
          </Link>

          <Link href="/charts">
            <div className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 transition cursor-pointer">
              <h2 className="text-xl font-semibold text-purple-600 mb-2">Charts</h2>
              <p className="text-gray-500">Visualize data trends.</p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}