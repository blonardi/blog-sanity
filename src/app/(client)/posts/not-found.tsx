import { Header } from '@/app/components/Header'
import Link from 'next/link'
import React from 'react'

export default function notFound() {
	return (
		<div>
			<Header title='404 - Page not found'/>
			<div>
				<Link href='/'>Return Home</Link>
			</div>
		</div>
	)
}
