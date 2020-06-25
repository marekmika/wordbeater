import Router from 'next/router'

const IS_SERVER = typeof window === "undefined";

const Home = () => null;

Home.getInitialProps = async ctx => {
    const { res } = ctx;
    if (IS_SERVER){
        res.writeHead(302, {
            'Location': '/game'
        });
        res.end();

        return;
    }

    await Router.push('/game');


};

export default Home
