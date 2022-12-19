import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MyApp</title>
      </Head>
      <section>
        <h1>Next App</h1>
        <p>This is a Next.js web application.</p>
      </section>
      <section>
        <Link href='/sign'>Sign In</Link>
      </section>
    </div>
  )
}