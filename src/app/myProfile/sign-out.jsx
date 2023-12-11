"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function Signout() {
  const route = useRouter();
  return (
    <div className="d-flex justify-center">
      <button
        className="hover:bg-orange-300 hover:text-white"
        style={{
          border: "1px solid transparent",
          backgroundColor: "orange",
          width: "100px",
          height: "50px",
          borderRadius: "10px",
          margin: "20px 20px",
          display: "inline-block",
        }}
        onClick={() => {
          signOut();
          route.push("/");
        }}
      >
        Sign out
      </button>
    </div>
  );
}
