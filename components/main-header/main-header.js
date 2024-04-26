import Link from "next/link";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import cssClasses from "@/components/main-header/main-header.module.css";
import logo from "@/assets/logo.png";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={cssClasses.header}>
        <Link className={cssClasses.logo} href="/">
          <img src={logo.src} alt="A plate with food" />
          <h2>The Foodies</h2>
        </Link>
        <nav className={cssClasses.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Other Foodies</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
