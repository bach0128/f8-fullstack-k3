import Link from "next/link";
import Image from "next/image";

export default async function Profile({ user }) {
  return (
    <div className="container w-full" style={{ marginTop: "100px" }}>
      <div className="h-16 w-16 flex justify-between mt-40">
        <div>
          <h2>{user?.name}</h2>
          <h2>{user?.email}</h2>
        </div>
        <Link href={user?.image}>
          <div className=" w-20 h-20 rounded-full rounded-r-full overflow-hidden ">
            <Image
              className="object-cover"
              src={user?.image}
              alt="userImage"
              quality={100}
              priority={true}
              width={100}
              height={100}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
