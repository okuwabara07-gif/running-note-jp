import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'ランニングノート',
  description: 'ランニング・マラソン情報',
  keywords: 'ランニングノート,ランニング・マラソン情報',
  openGraph: {
    title: 'ランニングノート',
    description: 'ランニング・マラソン情報',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'ランニングノート',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ランニングノート',
    description: 'ランニング・マラソン情報',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQXY5C3PW"></script>
      <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SVQXY5C3PW');`}} />
      <body>{children}</body>
    </html>
  )
}
