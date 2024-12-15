"use client";

import { useGetUsersQuery } from "@/store/services/usersApi";
import { User } from "@/types/user";

export const UsersPage = () => {
  const { data: users, isLoading, error } = useGetUsersQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error Users</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">List users</h1>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
