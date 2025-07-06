
const BooksCard = ({data}) => {
    console.log(data)
    const { author,bookId,bookName,category,image,publisher,rating,tags,totalPages,yearOfPublishing,review,}=data
    return (
        <div className="border-2 border-[#13131326] rounded-xl hover:scale-105 " >
            <div className="card card-compact w-full bg-base-100 shadow-xl">
  <div>
    <figure className="bg-[#F3F3F3] m-3 rounded-xl">
    <img  className="w-[134px] h-[166px] p-4" src={image} alt="Shoes" />
  
  </figure>
  <div className="flex justify-between m-3 ">
    {
      tags.map(tag=><button className="bg-[#23BE0A0D] text-[#23BE0A] p-2 rounded-xl">{tag}</button>)
    }
  </div>
  </div>
  <div className="card-body">
    <h2 className="card-title ">{bookName}</h2>
    <p>{author}</p>
    <div className="divider"></div>
    <div className="flex justify-between w-full ">
      <div><p className="text-[#131313CC] font-bold">{category}</p></div>
      <div><p>{rating}</p></div>
    </div>
    
    
  </div>
</div>
            
        </div>
    );
};

export default BooksCard;