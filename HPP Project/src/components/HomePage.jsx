import Navbar from "./Navbar"
import './HP.css'
const HomePage = () => {
    return (<>
       <Navbar />
       <div className="homepage-container border border-black">
            <div className="p1-animate  text-center">Welcome To</div>
            <div className="p2-animate  text-center">HomeVision-AI</div>
       </div>
    </>)
}

export default HomePage