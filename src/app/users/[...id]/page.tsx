import React from "react";

const getUsers = async () => {
  "use server"
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
  return (
    <>
      <div className="flex w-full py-6 px-6 pb-10 justify-between items-center border-b border-primary-border-colour">
        <h1
          aria-label="home-page-title"
          className="m-0 text-primary-font-colour text-3xl font-bold leading-11"
        >
          This works twe
        </h1>
      </div>
    </>
  );
};

export default Users;
