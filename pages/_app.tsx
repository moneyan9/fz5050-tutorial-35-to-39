import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { UserContext } from '../UserContext';

import { useState } from 'react';


export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props;

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }, []);


    //useContextに渡すstate
    const [value, setValue] = useState<string>("hello from context with useState");


    return (
        <React.Fragment>
            <Head>
                <title>My page</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>

            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <UserContext.Provider value={{ value, setValue }}>
                <Component {...pageProps} />
            </UserContext.Provider>
        </React.Fragment>
    );
}