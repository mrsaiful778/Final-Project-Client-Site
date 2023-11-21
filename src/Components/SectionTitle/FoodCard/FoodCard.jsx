import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";



const FoodCard = ({ item }) => {
    const { image, name, recipe, category, price, _id } = item;
    const { user } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = food => {
        if(user && user?.email){
             //todo: send cart item to the database 
           console.log(user.email, food);
           const cartItem = {
            menuId: _id,
            email: user.email,
            name,
            image, 
            price

           }
           axios.post('http://localhost:5000/carts', cartItem)
           .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${name} added to food your cart`,
                    showCancelButton: false,
                    timer: 1500
                  });
            }
           })
       
       }
       else{
        Swal.fire({
            title: " You are not login!",
            text: "Please Login add to the cart?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, login!"
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login',{state: {from: location}})
            }
          });
       }

    }
    return (
        <div className="py-5 space-x-5">
            <div className="">
                <div className="relative">
                    <img className="w-full h-[200px] " src={image} alt="" />
                    <p className="absolute right-0 top-5 mr-4 px-4 bg-slate-900 bg-opacity-50 w-16 rounded-lg text-center text-white "> ${price}</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg text-center py-5 h-[200px] ">
                    <h2 className="text-xl font-medium">{name}</h2>
                    <p className="px-5 text-justify">{recipe}</p>
                    <div className="pb-2 py-2">
                        <button onClick={() => handleAddToCart(item)}
                         className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 text-center ">Add to cart</button>
                </div>
            </div>
        </div>

        </div >
    );
};

export default FoodCard;