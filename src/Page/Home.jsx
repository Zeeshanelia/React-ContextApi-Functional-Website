import Header from "../Component/Header";
import Category from "../Component/Category";
import BestSeller from '../Component/BestSeller'
import Deal from "../Component/Deal";
import Testimonial from '../Component/Testimonial'

const Home = () => {

    return (
        <section className=" ">

            <Header />
            <Category />
            < BestSeller />
            < Deal />
            < Testimonial />

        </section>
    )
}

export default Home;