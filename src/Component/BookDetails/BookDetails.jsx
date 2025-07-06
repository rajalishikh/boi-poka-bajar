import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const {detailsId}=useParams()
    console.log(detailsId)
   
    const BookId=parseInt(detailsId)
    console.log(BookId)

    const data=useLoaderData()
   
    const find_data= data.find(book=>book.bookId === BookId)
    console.log(find_data)
    
    

    return (
        <div>
            <h2>Welcome to my Book details Page </h2>
            
        </div>
    );
};

export default BookDetails;