import { useEffect, useState } from "react"

const useAdvertise = id =>{
    const [isAdvertise,setIsAdvertise]=useState(false);
    const [isAdvertiseLoading,setIsAdvertiseLoading] = useState(true)
    useEffect(()=>{
        if(id){
            fetch(`https://b612-used-products-resale-server-side-atiq100.vercel.app/all-bikes/advertise/${id}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setIsAdvertise(data.isAdvertise)
                setIsAdvertiseLoading(false)
            })
        }
    },[id])
    return [isAdvertise, isAdvertiseLoading]
}
export default useAdvertise;