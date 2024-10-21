import WhatWeOffer from '../../components/common/WhatWeOffer';
import Faq from '../../components/common/Faq';
import HomeFooter from '../../components/common/HomeFooter';
import HomeHeader from '../../components/common/HomeHeader';

const Home = () => {
    return (
        <div>
            <main>
                <HomeHeader />
                <WhatWeOffer />
                <Faq />
                <HomeFooter />
            </main>
        </div>
    );
};

export default Home;
