import Content from "../components/Content";
import Competition from "../components/Competition";
import Header from "../components/Header";
import Review from "../components/Review";
import Footer from "../components/Footer";

import ".././App.css";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Content></Content>
            <Competition></Competition>
            <Review></Review>
            <Footer></Footer>
        </div>
);
};

export default Main;