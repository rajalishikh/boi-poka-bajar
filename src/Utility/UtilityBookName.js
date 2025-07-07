const findBookName=()=>{
    const bookNameData=localStorage.getItem("BookName")
    if(bookNameData){
        const convertParse=JSON.parse(bookNameData)
        console.log(convertParse)
        return convertParse
    }else{
        return []
    }
}

const saveBookName=(bookName)=>{
    const getBookName=findBookName()
    if(getBookName.includes(bookName)){
        return console.log("The Book is all ready in your wish List")
    }else{
        getBookName.push(bookName)
        const convertString=JSON.stringify(getBookName)
        const saveLocalStorage=localStorage.setItem("BookName",convertString)
    }

}
export default saveBookName