import Link from 'next/link';

export default function index() {
    return <>
   <h1>hello world!</h1>
    <Link href="/about" >About.js Link</Link>
  </>
}
