import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-border flex flex-col justify-center space-y-5 py-10">
      <ul className="flex space-x-2 justify-center">
        <li><Link href="/about" className="text-accent hover:underline">About page</Link></li>
        <li><a href="https://github.com/Ivanlkv/blog-about-fish" target="_blank" className="text-accent hover:underline">Github</a></li>
      </ul>
    </footer>
  )
}