

const FoodCard = ({ item }) => {
    const {image, name, recipe, category, price} = item;
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
                        <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 text-center ">Add to cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FoodCard;