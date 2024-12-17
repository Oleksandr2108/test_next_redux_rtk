import { useGetUsersQuery } from "@/store/services/usersApi";
import { UserItem } from "../UserItem/UserItem";
import { User } from "@/types/user";

export const UserList = () => {
  const { data: users, isLoading, error } = useGetUsersQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error Users</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">List users</h1>
      <ul className="flex flex-wrap gap-20 justify-center">
        {users.map((user: User) => (
          <li key={user.id}>
            <UserItem user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};
