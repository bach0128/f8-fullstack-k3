"use client";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import facebook from "../assets/image/facebook.png";
import youtube from "..//assets/image/youtube.png";
import f8 from "../assets/image/f8_icon.png";

import "../assets/css/navbar.css";
import Language from "./Lang/Language";
import Theme from "../../components/Theme";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="wrap w-full top-0 fixed">
      <nav className="navbar d-flex ">
        <ul className="nav-left d-flex">
          <a href="/">
            <p className="source">Fullstack.edu.vn F8</p>
          </a>
          <a href="/" className="go-home">
            Home
          </a>
          <button
            className="d-block text-xl mx-2 text-orange-600 text-center"
            onClick={() => router.push("/pages")}
          >
            Blogs
          </button>
          <button
            className="d-block text-xl mx-2 text-orange-600 text-center font-bold"
            onClick={() => router.push("/auths")}
          >
            Contact
          </button>
        </ul>
        <ul className="nav-right d-flex">
          <li className="gap-2 d-flex items-center">
            <a
              className="d-flex items-center"
              target="_blank"
              href="https:fullstack.edu.vn/@son-dang"
            >
              <Image
                alt="none"
                src={f8}
                style={{ maxWidth: "20px", height: "auto" }}
              />
            </a>
            <a
              className="d-flex items-center"
              target="_blank"
              href="https://www.facebook.com/groups/f8official"
            >
              <Image
                alt="none"
                src={facebook}
                style={{ maxWidth: "20px", height: "auto" }}
              />
            </a>
            <a
              className="d-flex items-center"
              target="_blank"
              href="https://www.youtube.com/c/F8VNOfficial"
            >
              <Image
                alt="none"
                src={youtube}
                style={{ maxWidth: "30px", height: "auto" }}
              />
            </a>
            <Theme />
            <Language />
          </li>
        </ul>
      </nav>
    </div>
  );
}
