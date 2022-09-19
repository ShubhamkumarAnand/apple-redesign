import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header'

const Home: NextPage = () => {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen py-2'>
			<Head>
				<title>Apple-Redesign</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
		</div>
	)
}

export default Home
