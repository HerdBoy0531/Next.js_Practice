import Link from 'next/link'
// a 태그를 사용하게 되면 href로 타고 들어갈 때마다 새로운 페이지를 다운로드 받기 때문에 SPA의 장점이 소실된다.
// Link를 이용하면 페이지를 벗어나는 것이 아니고 새로운 페이지를 로딩하는 것이 아니라는 것임

import Header from './components/header'

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About Us</Link></p>
    </main>
  );
}
