import { useState } from "react";
import coverImg from "../../../assets/shop/order.jpg"
import Cover from "../../Shared/Cover/Cover";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categorys = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const intialIndex = categorys.indexOf(category)

    const [menu] = useMenu();
    // console.log(category)
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');
    const [indexNum, SetIndexNum] = useState(intialIndex)
    return (
        <div>

            <Helmet>
                <title>Bistro | Order Food</title>
            </Helmet>
            <Cover img={coverImg} title="Order Food"></Cover>

            <Tabs defaultIndex={indexNum} onSelect={(index) => SetIndexNum(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab item={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={drinks}> </OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;