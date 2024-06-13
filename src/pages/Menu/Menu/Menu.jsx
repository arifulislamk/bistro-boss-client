import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

import coverImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladsImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu//soup-bg.jpg"

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>


            <Cover
                img={coverImg}
                title={'Our Menu'}
            >
            </Cover>

            <SectionTitle subheading="Don't miss" heading="TODAY'S OFFER" />
            <MenuCategory item={offered} />

            <MenuCategory item={dessert} title="dessert" img={dessertImg} />
            <MenuCategory item={pizza} title="pizza" img={pizzaImg} />
            <MenuCategory item={salad} title="salad" img={saladsImg} />
            <MenuCategory item={soup} title="soup" img={soupImg} />
        </div>
    );
};

export default Menu;