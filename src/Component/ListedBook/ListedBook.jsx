
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getBookId } from '../../Utility/Utility';
import BooksCard from '../BooksCard/BooksCard';

const ListedBook = () => {

  const [dataLIsted,setDataLIsted]=useState()
  const allBookData=useLoaderData()
  console.log("Save The Data ",dataLIsted)

    useEffect(()=>{
      
       const listedBookId=getBookId()
       const listedBookIdInt=listedBookId.map(item=>parseInt(item))
       const myFinalListedId=allBookData.filter(item=>listedBookIdInt.includes(item.bookId))
       setDataLIsted(myFinalListedId)


    },[])
    
    
    return (
        <div>
           
            <Tabs>
    <TabList>
      <Tab>Listed Book</Tab>
      <Tab>Wish List Book</Tab>
    </TabList>

    <TabPanel>
      
      <div>
        {
          dataLIsted.map(item=><BooksCard data={item} ></BooksCard>)
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