"use client";
import { useRouter } from "next/navigation";
export default function Auth() {
  const route = useRouter();
  return (
    <div style={{ marginTop: "120px" }} className="d-flex justify-center">
      <button
        style={{
          backgroundColor: "#0d6efd",
          color: "whitesmoke",
          width: "250px",
          height: "50px",
          border: "1px solid transparent",
          borderRadius: "10px",
          marginRight: "20px",
        }}
        onClick={() => {
          route.push("/api/auth/signin");
        }}
      >
        Signin with Github
      </button>
      <button
        style={{
          backgroundColor: "white",
          color: "#0d6efd",
          width: "250px",
          height: "50px",
          border: "1px solid #0d6efd",
          borderRadius: "10px",
        }}
      >
        Signin with Google
      </button>
    </div>
  );
}
