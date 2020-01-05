import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { Tina, TinaCMS } from 'tinacms'
import { GitClient } from '@tinacms/git-client'

export default class MyApp extends App {

  constructor() {
    super()
    this.cms = new TinaCMS()
    const client = new GitClient('https://db.originalone.cloud/___tina')
    this.cms.registerApi('git', client)
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Tina cms={this.cms}>
            <Component {...pageProps} />
          </Tina>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
