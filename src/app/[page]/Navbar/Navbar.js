import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import Image from "next/image";
import facebook from "../assets/image/facebook.png";
import youtube from "..//assets/image/youtube.png";
import f8 from "../assets/image/f8_icon.png";

import "../assets/css/navbar.css";
import Language from "./Lang/language";
import Theme from "../../components/Theme";

export default function Navbar() {
  return (
    <div className="wrap">
      <nav className="navbar d-flex">
        <ul className="nav-left d-flex">
          <a href="/">
            <p className="source">Fullstack.edu.vn F8</p>
          </a>
          <Link href={"/"} className="go-home">
            Home
          </Link>
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
