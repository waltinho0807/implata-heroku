import buildClient from '../api/build-client';
import Head from '../components/Head';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Head/>
      <Component {...pageProps} />
    </div>
  );
};

AppComponent.getInitialProps = async appContext => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return {
    pageProps,
    ...data
  };
};

export default AppComponent;
