import Link from 'next/link'

export default () => (
  <ul>
    <li><Link href='/blog2?id=first' as='/blog/first'><a>My first blog post</a></Link></li>
    <li><Link href='/blog2?id=second' as='/blog/second'><a>My second blog post</a></Link></li>
    <li><Link href='/blog2?id=last' as='/blog/last'><a>My last blog post</a></Link></li>
  </ul>
)
