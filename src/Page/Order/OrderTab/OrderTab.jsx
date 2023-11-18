import FoodCard from "../../../Components/SectionTitle/FoodCard/FoodCard";


const OrderTab = ({items}) => {

    return (
        <div>
             <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-5'>
                    {
                       items.map(item => <FoodCard key={item._id}
                        item={item}
                        ></FoodCard>)
                    }
                    </div>
        </div>
    );
};

export default OrderTab;