import {  setSelectUser } from "@/store/slices/userSlice";
import { User } from "@/types/user";
import Image from "next/image";
import { useDispatch } from "react-redux";

interface ItemProps {
  user: User;
}

export const UserItem: React.FC<ItemProps> = ({ user }) => {
  const dispatch = useDispatch();
  
  return (
    <div
      className="border-2 border-slate-400 w-[200px] rounded-lg"
      onClick={() => dispatch(setSelectUser(user.id.toString()))}
    >
      <Image
        src={`/assets/img/users/user${user.id}.png`}
        width={202}
        height={202}
        alt={""}
        className="rounded-md"
      />
      <h2 className="text-center text-indigo-500">{user.name}</h2>
    </div>
  );
};
