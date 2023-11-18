
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import UseMenu from "../../../Hooks/UseMenu";

const PopularMenu = () => {
        const [menu]= UseMenu();
        const popular = menu?.filter(item => item.category === 'popular');
     

    return (
        <section className="mb-12">
            <SectionTitle
            heading={"From Our Menu"}
            subHeading={"Popular Items"}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem key={item._id} 
                    item={item}
                    ></MenuItem> )
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 text-center">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;