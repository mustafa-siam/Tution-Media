
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Premiumtotors from "./Premiumtotors";
import Tutoringjobs from "./Tutoringjobs";


const Home = () => {
    return (
        <div className="space-y-12">
            <Banner></Banner>
            <Tutoringjobs></Tutoringjobs>
            <Premiumtotors></Premiumtotors>
            <Footer></Footer>
        </div>
    );
};

export default Home;