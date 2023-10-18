import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
          <p>pages/index.js 진희도 201930431 </p>
          <Link href ="/">| Home</Link> |
          <Link href ="/about"> About</Link> |
          <Link href="/contact"> Contact</Link> |
      </div>
    </>
  );
}
