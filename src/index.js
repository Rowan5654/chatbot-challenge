import ReactDOM from 'react-dom';

import "./index.css"
import "./grid.css"

import TurnersLogo from "./images/Turners logo.png"
import SearchIcon from "./images/Search Icon.png"
import Car from "./images/Car.png"
import Speed from "./images/Speedometer.png"

export default function App() {
    return (
        <>
            {/*SECTION 1*/}	
            <div className="main-grid">
                <div className="grid-item">
                    <div className="nav-container" id="nav">
                            <img src={TurnersLogo} className="nav-item" />
                            <p className="nav-item" id="nav-text-login">Login</p>
                            <p className="nav-item" id="nav-text">Careers</p>
                            <p className="nav-item" id="nav-text">Finance & Insurance</p>
                            <p className="nav-item" id="nav-text">Sell your Car</p>
                            <p className="nav-item" id="nav-text">How to Buy</p>  
                    </div>
                </div>

                {/*SECTION 2*/}
                <div className="grid-item" id="blue-section-background">
                    <div className="query-search-container">
                        <div className="query-search-content">
                            <div className="query-search-category-div">
                                <p className="query-search-title">Brand</p>
                                <p classNmae="query-search-placeholder">Choose Brand</p>
                            </div>
                            <div className="query-search-category-div" id="verticle-line"></div>
                            <div className="query-search-category-div">
                                <p className="query-search-title">Model</p>
                                <p classNmae="query-search-placeholder">Choose Model</p>
                            </div>
                            <div className="query-search-category-div" id="verticle-line"></div>
                            <div className="query-search-category-div">
                                <p className="query-search-title">Year</p>
                                <p classNmae="query-search-placeholder">Choose Year</p>
                            </div>
                            <div className="query-search-category-div" id="verticle-line"></div>
                            <div className="query-search-category-div">
                                <p className="query-search-title">Kms</p>
                                <p classNmae="query-search-placeholder">Choose Kms</p>
                            </div>
                            <div className="query-search-category-div" id="verticle-line"></div>
                            <div className="query-search-category-div">
                                <p className="query-search-title">Location</p>
                                <p classNmae="query-search-placeholder">Choose Location</p>
                            </div>
                            <div className="query-search-category-div" id="search">
                                <img src={SearchIcon} />
                            </div>
                        </div>
                    </div>
                </div>

                {/*SECTION 3*/}
                <div className="grid-item" id="blue-section-background">
                    <div id="car-image">
                        <img src={Car} />
                    </div>
                </div>

                {/*SECTION 4*/}
                <div className="grid-item" id="blue-section-background">
                    <div className="section4-grid">
                        <p className="section4-item">Best Deals</p>
                        <p className="section4-item">Book Review</p>
                        <p className="section4-item">Book Appraisal</p>
                        <p className="section4-item">Car Insurance</p>
                        <p className="section4-item">Inspection</p>
                        <p className="section4-item">Get Loan</p>  
                    </div>
                </div>

                {/*SECTION 5*/}
                <div className="grid-item" id="blue-section-background">
                    <div id="speed-image">
                        <img src={Speed} />
                    </div>
                </div>
            </div>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));