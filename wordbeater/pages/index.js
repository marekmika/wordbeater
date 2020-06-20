import Router from 'next/router'
// const IS_CLIENT = typeof window !== "undefined";
const IS_SERVER = typeof window === "undefined";

const Home = () => null;

Home.getInitialProps = async ctx => {
    const { res } = ctx;
    if (IS_SERVER){
        res.writeHead(302, {
            'Location': '/game'
        });
        res.end();
    }

    await Router.push('http://localhost:3000/game');


};

export default Home
