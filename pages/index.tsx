import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen py-2'>
			<Head>
				<title>Apple-Redesign</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h1>Let's Build Apple Redesign</h1>
		</div>
	)
}

export default Home
