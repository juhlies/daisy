import './globals.css'
import Head from 'next/head'
import {useRouter} from 'next/router'

export default function App({Component, pageProps}) {
    const title = pageProps?.frontMatter?.title
    
    return (
        <>
            <Head>
                <title key="title">{title ? `${title} - Daisy` : 'Daisy'}</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}