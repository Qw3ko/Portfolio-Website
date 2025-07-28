import Layout from '@/app/components/layout/Layout'
import PageTransition from '@/app/components/ui/PageTransition'
import StairTransition from '@/app/components/ui/StairTransition'
import { AppProps } from 'next/app'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Head>
				<title>Qw3ko | Frontend Developer</title>
			</Head>
			<StairTransition />
			<PageTransition>
				<Component {...pageProps} />
			</PageTransition>
		</Layout>
	)
}
