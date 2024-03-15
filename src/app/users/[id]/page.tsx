"use client";
import { usePathname } from "next/navigation";
import React from "react";

const getUser = async (id: string) => {
  try {
    const response = await fetch(
      `https://65f3afd2105614e654a0dfc7.mockapi.io/users/${id}`,
      {
        method: "GET",
      }
    );
    return await response.json();
  } catch (err: any) {
    throw new Error(err.message);
  }
};

const SingleUser = async () => {
  const pathname = usePathname();
  const id = pathname.split("/")[1];
  const userData: any = await getUser(id);
  console.log("🚀 ~ SingleUser ~ userData:", userData);

  return (
    <>
      <div className="flex w-full py-6 px-6 pb-10 justify-between items-center border-b border-primary-border-colour">
        <h1
          aria-label="home-page-title"
          className="m-0 text-primary-font-colour text-3xl font-bold leading-11"
        >
          This works twe
          {userData && "fetched"}
        </h1>
      </div>
    </>
  );
};

export default SingleUser;
