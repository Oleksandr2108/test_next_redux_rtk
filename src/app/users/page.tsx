/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useGetUsersQuery } from "@/store/services/usersApi";

export const UsersPage = () => {
  const { data: users, isLoading, error } = useGetUsersQuery();

  if (isLoading) return <div>Завантаження...</div>;
  if (error) return <div>Помилка завантаження користувачів!</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Список користувачів</h1>
      <ul>
        {users.map((user: any) => (
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
