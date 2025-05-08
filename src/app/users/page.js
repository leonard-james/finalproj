import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
};

export default function UsersPage() {
  const { data, isLoading, error } = useQuery(['users'], fetchUsers);

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Users</h1>
      <ul className="space-y-2">
        {data.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <span className="text-blue-600 cursor-pointer hover:underline">
                {user.name} (@{user.username})
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
