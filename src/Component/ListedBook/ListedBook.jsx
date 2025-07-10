
import { useLoaderData } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getBookId } from '../../Utility/Utility';

const ListedBook = () => {
    const allBookData=useLoaderData()
   
    const listedBookId=getBookId()
  
    

    const listedBookIdInt=listedBookId.map(item=>parseInt(item))
    

    const myFinalListedId=allBookData.filter(item=>listedBookIdInt.includes(item.bookId))
    console.log(myFinalListedId)

    
    
    return (
        <div>
           
            <Tabs>
    <TabList>
      <Tab>Listed Book</Tab>
      <Tab>Wish List Book</Tab>
    </TabList>

    <TabPanel>
      <h2>Here is Listed Book </h2>
    </TabPanel>
    <TabPanel>
      <h2>Here is Wish List Book </h2>
    </TabPanel>
  </Tabs>
            
        </div>
    );
};

export default ListedBook;