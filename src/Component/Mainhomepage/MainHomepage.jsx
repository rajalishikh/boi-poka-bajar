
import img from "../../assets/Image/books.jpg";
import Books from "../Books/Books";
const MainHomepage = () => {
    return (
        <div>
            {/* My Home Page Banner design */}
           <div className="hero min-h-screen bg-base-200 mb-4">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold mb-5 italic">Books To freshen Up Your bookshelf</h1>
     
      <button className="btn  bg-[#23BE0A] text-white p-4 rounded-xl">View The List </button>
    </div>
  </div>
           </div>
           {/* Book section  */}
           <Books></Books>
            
        </div>
    );
};

export default MainHomepage;