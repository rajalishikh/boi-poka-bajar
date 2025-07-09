import { useLoaderData, useParams } from "react-router-dom";
import { setStoreCard } from "../../Utility/Utility";
import saveBookName from "../../Utility/UtilityBookName";

const BookDetails = () => {
    const {detailsId}=useParams()
    console.log(detailsId)
   
    const BookId=parseInt(detailsId)
    console.log(BookId)

    const data=useLoaderData()
   
    const find_data= data.find(book=>book.bookId === BookId)
    console.log(find_data)
    const {author,bookId,bookName,category,image,publisher,rating,tags,totalPages,yearOfPublishing,review}=find_data

    // Books Details part when click 

    // add books id
    const handleBookId=(id)=>{
      setStoreCard(id)

    }
    const handleBookName=(bookName)=>{
      saveBookName(bookName)

    }
    const handleBookReview=()=>{
      document.getElementById("review").classList.remove("hidden")
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl w-2/3 h-auto lg:w-[425px] lg:h-[564px] md:w-auto md:h-auto" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p id="review" className="py-6 hidden ">
        {review}
      </p>
      <div className="flex  gap-2">
        <button onClick={()=>handleBookId(bookId)} className="btn  hover:bg-[#50B1C9] hover:text-white">Mark asRead</button>
        <button onClick={()=>handleBookName(bookName)} className="btn hover:bg-[#50B1C9] hover:text-white"> MArk asWishList</button>
        <button onClick={handleBookReview}  className="btn hover:bg-[#50B1C9] hover:text-white"> Book Review</button>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default BookDetails;