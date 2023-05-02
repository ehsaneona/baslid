import React from 'react';

function HomePage() {
    return <div>Fuck You</div>;
}

export async function getServerSideProps() {
    return {
        props: {},
    };
}

// HomePage.layout = getLandingLayout;

export default HomePage;
