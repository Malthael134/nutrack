"use client";
import { useEffect, useState } from "react";
import { users as usersTable } from "@/server/db/schema";
import { getAllUsers } from "@/server/functions/users";
import { formatDistance } from "date-fns";

// type GetUserFn = () => { name: string }[];

export default function Users() {
    const [users, setUsers] = useState<(typeof usersTable.$inferSelect)[]>([]);
    const miliToHour = 1000; // * 60 * 60

    useEffect(() => {
        (async () => {
            const users = await getAllUsers();
            setUsers(users);
        })();
    }, []);

    return (
        <div className="grid grid-cols-2 gap-2 rounded-xl bg-inherit bg-opacity-30 p-4 text-white ">
            {users.map((user) => (
                <>
                    <div className="font-bold">{user.name}</div>
                    <div>
                        Joined{" "}
                        {formatDistance(user.joinedAt, new Date(), {
                            addSuffix: true,
                        })}
                    </div>
                </>
            ))}
        </div>
    );
}
