import Navbar from "./Navbar"
import House from '../assets/AboutImg.avif'
const AboutUs = () => {
    return (<>
        <Navbar />
        <div className="about-us-container  flex gap-5 p-10">
            <div className="aboutus-content px-10 py-32 w-1/2 rounded-2xl bg-cyan-200 ">
                <h1 className="text-center headtext">Your Dream Home, Reimagined: AI-Driven Pricing and Blueprints</h1>
                <p>At our core, we provide a platform that combines advanced Machine Learning (ML) and Generative AI to offer a comprehensive real estate solution. We help users make informed decisions by predicting house prices and creating custom interior layouts tailored to their needs. House prices are influenced by various factors, including location, the size and type of the property, its age and condition, and overall market trends. Our ML algorithms analyze these key aspects, along with other features like proximity to amenities, future development prospects, and additional elements such as a backyard or eco-friendly technology, to give accurate price predictions. By using historical data and regional market insights, our platform provides users with a precise price range for the kind of property they are interested in, enabling them to navigate the real estate market with confidence.

                    In addition to price predictions, we also utilize Generative AI to offer users a visual representation of their future home. By entering specific details such as the number of rooms, design style, and other preferences, our AI generates rough blueprints of interior layouts that match the user’s vision. This feature helps buyers visualize their potential home’s layout, making the property search process more engaging and personalized. Whether you're buying a home, selling one, or simply exploring your options, our platform equips you with both the data and design tools needed to make well-informed real estate decisions. Through the integration of AI technology, we aim to provide a seamless and innovative experience for users looking for properties that meet both their financial and aesthetic expectations.</p>
            </div>
            <img src={House} alt="" className="houseimg"/>
        </div>
    </>)
}

export default AboutUs