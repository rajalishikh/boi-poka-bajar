import { toast } from "react-toastify"

const getBookId=()=>{
    const findId=localStorage.getItem("BookId")
    if(findId){
        const convertFindId=JSON.parse(findId)
        return convertFindId
    }else{
        return[]
    }
}

const setStoreCard=(id)=>{
    const findData=getBookId()
    if(findData.includes(id)){
        return console.log("The Book is study complete")
    }else{
        findData.push(id)
        const convertStringFindData=JSON.stringify(findData)
        const saveDataLs=localStorage.setItem("BookId",convertStringFindData)
        toast("This Book is All ready taken")
       
    }
}
export { getBookId, setStoreCard }

