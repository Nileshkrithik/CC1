export default function TryCatch(props){
    try{
        if(props.num===0){
            throw new Error("cannot divide number by zero")
        }
    }
    catch(error){
        console.log(error)
        document.write("Number cannot be divided by zero")
    }

}