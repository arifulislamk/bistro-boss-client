import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-Item bg-fixed text-white pt-8  my-20">
            <SectionTitle heading="Featured Item" subheading="Cheek It Out"></SectionTitle>

            <div className=" md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36 ">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className=" md:ml-10">
                    <p>March 20, 2023</p>
                    <p className=" uppercase ">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusantium, nam fugit blanditiis in vero, obcaecati eveniet voluptatem distinctio dolore quibusdam! Excepturi ullam, sunt sint reprehenderit quam fuga cum aliquam eveniet consectetur iusto, exercitationem, at est praesentium. Suscipit consectetur praesentium deserunt ipsum consequuntur ut quaerat rerum, minus amet quos eaque.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Read More</button>
                </div>

            </div>
        </div>
    );
};

export default Featured;