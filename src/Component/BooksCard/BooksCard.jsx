
const BooksCard = ({data}) => {
    console.log(data)
    const { author,bookId,bookName,category,image,publisher,rating,tags,totalPages,yearOfPublishing,review,}=data
    return (
        <div >
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <div>
    <figure className="bg-[#F3F3F3] m-3 rounded-xl">
    <img  className="w-[134px] h-[166px] p-4" src={image} alt="Shoes" />
  
  </figure>
  </div>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default BooksCard;