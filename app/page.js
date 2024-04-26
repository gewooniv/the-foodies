import Link from "next/link";
import cssClasses from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={cssClasses.header}>
        <div className={cssClasses.slideshow}></div>
        <div>
          <div className={cssClasses.hero}>
            <div>
              <h1>Great meals for nextlevel foodies</h1>
              <p>Taste and share food</p>
            </div>
          </div>
          <div className={cssClasses.cta}>
            <Link href="/community">Join the other foodies</Link>
            <Link href="/meals">Explore meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={cssClasses.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={cssClasses.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
