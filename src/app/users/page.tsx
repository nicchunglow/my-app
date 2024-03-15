import Link from "next/link";
import React from "react";

const getUsers = async () => {
  try {
    const response = await fetch(
      `https://65f3afd2105614e654a0dfc7.mockapi.io/users`,
      {
        method: "GET",
      }
    );
    return await response.json();
  } catch (err: any) {
    throw new Error(err.message);
  }
};

const Users = async () => {
  const users = await getUsers();
  const list = users.map((user: any) => {
    return (
      <div>
        <Link href={`/users/not-user/${user.id}`}>{user.name}</Link>
      </div>
    );
  });
  return (
    <>
      <div className="flex w-full py-6 px-6 pb-10 justify-between items-center border-b border-primary-border-colour">
        <h1
          aria-label="home-page-title"
          className="m-0 text-primary-font-colour text-3xl font-bold leading-11"
        >
          Home page
        </h1>
      </div>
      <div className="flex flex-col w-[96%] mx-[1%] py-[2%] px-[1%]">
        {list}
      </div>
    </>
  );
};

export default Users;
