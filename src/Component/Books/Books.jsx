import { useEffect, useState } from "react";
import BooksCard from "../BooksCard/BooksCard";

const Books = () => {
    const [book,setBook]=useState([])
    useEffect(()=>{
        fetch("booksData.json")
        .then(res=>res.json())
        .then(data=>setBook(data))
    },[])
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center italic">Books</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 ">
             {
                book.map(data=><BooksCard data={data}></BooksCard>)
            }
            
           </div>
        </div>
    );
};

export default Books;