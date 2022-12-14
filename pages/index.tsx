import axios from 'axios'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { type } from 'os'
import styles from '../styles/Home.module.css'

interface HomeTypeProps {
	booksData: []
}

interface BookType {
	title: string
}

export default function Home(props: HomeTypeProps) {
	console.log('data :', props.booksData)
	return (
		<div className={styles.container}>
			{props.booksData.map((book: { title: string }) => (
				<div>{book.title}</div>
			))}
		</div>
	)
}

export const getStaticProps: GetStaticProps = async (context) => {
	//const params = context.params! // ! is a non-null assertion
	const booksData = await axios
		.get(`https://json-server-book-store-pod.herokuapp.com/books`)
		.then((res) => res.data)
	return {
		props: { booksData },
	}
}
