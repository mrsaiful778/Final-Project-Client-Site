import { useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../../Hooks/UseMenu';
import FoodCard from '../../../Components/SectionTitle/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks',]
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = UseMenu();
    console.log(category);
    const dessert = menu?.filter(item => item.category === 'dessert');
    const soup = menu?.filter(item => item.category === 'soup');
    const salad = menu?.filter(item => item.category === 'salad');
    const pizza = menu?.filter(item => item.category === 'pizza');
    const drinks = menu?.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderCover} title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salads</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        salad.map(item => <FoodCard key={item._id}
                        item={item}
                        ></FoodCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel> <OrderTab items={salad}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={pizza}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={soup}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={dessert}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={drinks}></OrderTab></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;