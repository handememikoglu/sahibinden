import { useEffect, useState } from "react"
import HousingFilter from "./HousingFilter";

export default function Housing(){
    const [house,setHouse] = useState([]);
    const [filteredHouses, setFilteredHouses] = useState([]);
    useEffect(() => {
        const getData = async() =>{
            try{
                const res = await fetch("./sahibinden.json");
                if(!res.ok){
                    throw new Error ("Bir hata oluştu");
                }
                const data = await res.json();
                setHouse(data);
                setFilteredHouses(data);
                console.log(data);
                
            }catch(err){
                console.log(err);
                
            }
        }
        getData();
    },[])


   return(
    <>
            <h1>Konutlar</h1>
            <HousingFilter house={house} setFilteredHouses={setFilteredHouses}/>
            {
                filteredHouses.length === 0 ? (
                    <p>Konutlar bulunamadı</p>
                ): (
                    <div className="house-container">
                        {filteredHouses.map(home => (
                            <div className="house-card" key={home.id}>
                                <p>{home.title}</p>
                                <p><span>ilan numarası:</span> {home.id}</p>
                                <p><span>Konut Tipi:</span> {home.type}</p>
                                <p><span>Fiyat:</span> {home.price.amount}</p>
                                <p><span>Emlak Tipi:</span>{home.listing_type}</p>
                                <p><span>İl:</span> {home.location.city}</p>
                                <p> <span>Oda Sayısı:</span>{home.property_details.room_count}</p>
                            </div>
                        ))}
                    </div>
                )
            }
    </>
        
   )
}