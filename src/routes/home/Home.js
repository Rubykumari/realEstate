import SearchBar from "../../components/navbar/searchBar/SearchBar";
import "./home.scss";

const Home = () => {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1>Find Real Estate & Get Your Dream Place.</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, provident optio. Suscipit, dolorum. Iure commodi exercitationem voluptatum quos possimus quia iste autem repudiandae minus facilis debitis sint, hic soluta explicabo.</p>
                    <SearchBar/>
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>1200+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="assets/bg3.png" alt="" />
            </div>

        </div>
    )
}
export default Home