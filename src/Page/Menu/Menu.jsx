
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladsImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'


import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

import UseMenu from '../../Hooks/UseMenu';


const Menu = () => {
    const [menu] = UseMenu();

    const dessert = menu?.filter(item => item.category === 'dessert');
    const soup = menu?.filter(item => item.category === 'soup');
    const salad = menu?.filter(item => item.category === 'salad');
    const pizza = menu?.filter(item => item.category === 'pizza');
    const offered = menu?.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
            <SectionTitle subHeading="Don't miss" heading="Today's Offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
          
            <MenuCategory
                items={dessert}
                title="dessert"
               Img={dessertImg}
            >
            </MenuCategory>
            <MenuCategory
             items={pizza}
             title="pizza"
            Img={pizzaImg}
            
            ></MenuCategory>
            <MenuCategory
             items={salad}
             title="salads"
            Img={saladsImg}
            
            ></MenuCategory>
            <MenuCategory
             items={soup}
             title="soup"
            Img={soupImg}
            
            ></MenuCategory>


        </div>
    );
};

export default Menu;