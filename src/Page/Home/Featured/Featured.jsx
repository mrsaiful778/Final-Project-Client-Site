import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import './Featured.css'
const Featured = () => {

    return (
        <div className="featured-item bg-fixed pt-8 my-20 text-white">
            <SectionTitle subHeading={"Check in out"} heading={"Featured Items"}

            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img className="rounded-lg" src="https://i.ibb.co/5R1SRVJ/featured.jpg" alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Nov 20, 2023</p>
                    <p className="uppercase">When can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nulla pariatur sapiente harum alias velit ad, nisi dolores sit autem obcaecati tempore recusandae tenetur, provident temporibus quaerat minima debitis nesciunt vel. Eaque velit eligendi maiores qui natus? Deleniti necessitatibus eos ea aliquid nemo veniam, enim excepturi eligendi vitae. Id, odit.</p>
                    <button className="btn btn-outline border-0 border-b-4 border-white text-white ">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;