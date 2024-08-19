import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg"
// "../../public/logo.svg";

export default function Logo() {
  return (
    <Link href="/">
      <Image src={logo} alt="Furfriends logo" />
    </Link>
  );
}
