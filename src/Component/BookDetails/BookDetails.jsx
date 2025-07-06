import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const {detailsId}=useParams()
    console.log(detailsId)
   
    const BookId=parseInt(detailsId)
    console.log(BookId)

    const data=useLoaderData()
   
    const find_data= data.find(book=>book.bookId === BookId)
    console.log(find_data)
    const {author,bookId,bookName,category,image,publisher,rating,tags,totalPages,yearOfPublishing,review}=find_data

    

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl w-2/3 h-auto lg:w-[425px] lg:h-[564px] md:w-auto md:h-auto" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        {review}
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default BookDetails;