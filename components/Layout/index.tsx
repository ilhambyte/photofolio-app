import { Navbar } from '../Header'
import { ReactNode } from 'react'
import Footer from '../Footer'
import Head from 'next/head'

interface LayoutProps {
    children: ReactNode
    pageTitle: string
}

export default function Layout(props: LayoutProps) {
    const { children, pageTitle } = props;
    return (
        <>
            <Head>
                <title>Photofolio | {pageTitle}</title>
                <meta name="description" content="Website NextJS Basic" />
            </Head>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </>
    )
}