
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getBookId } from '../../Utility/Utility';
import BooksCard from '../BooksCard/BooksCard';

const ListedBook = () => {

  const [dataLIsted,setDataLIsted]= useState([])
  const [sort,Setsort]=useState('')
  const allBookData=useLoaderData()
  console.log("Save The Data ",allBookData)

    useEffect(()=>{
      
       const listedBookId=getBookId()
       const listedBookIdInt=listedBookId.map(item=>parseInt(item))
       const myFinalListedId=allBookData.filter(item=>listedBookIdInt.includes(item.bookId))
       console.log("My raj",myFinalListedId)
       
       setDataLIsted(myFinalListedId)


    },[])

    const handleShort=(shortType)=>{
      if(shortType === "Sort By Book Page" ){
        Setsort(shortType)
       const myShortLIst=[...dataLIsted].sort((a,b)=>a.totalPages -b.totalPages)
       setDataLIsted(myShortLIst)

      }else if(shortType ==="Sort By Book Star"){
        Setsort(shortType)
       const myShortLIst=[...dataLIsted].sort((a,b)=>a.rating -b.rating)
       setDataLIsted(myShortLIst)

      }
      

    }
    
    
    return (
        <div>
          <div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="btn m-1">{sort?`Sort By${sort}`:"Sort By"}</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li onClick={()=>handleShort("Sort By Book Page")}><a>Sort By Book Page </a></li>
    <li onClick={()=>handleShort("Sort By Book Star")}><a>Sort By Book Star </a></li>
  </ul>
</div>
           
            <Tabs>
    <TabList>
      <Tab>Listed Book</Tab>
      <Tab>Wish List Book</Tab>
    </TabList>

    <TabPanel>
      
      <div>
        {
          dataLIsted.map(item=><BooksCard data={item}></BooksCard>)
        }
        
      </div>
    </TabPanel>
    <TabPanel>
      <h2>Here is Wish List Book </h2>
    </TabPanel>
  </Tabs>
            
        </div>
    );
};

export default ListedBook;