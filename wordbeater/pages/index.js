import Router from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css';

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
