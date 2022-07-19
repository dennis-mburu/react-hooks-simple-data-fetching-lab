// create your App component here
import React, {useState, useEffect} from "react";

function App(){
    const[isLoaded, setIsLoaded] = useState(false)
    const[dogImages, setDogImages] = useState([])

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => res.json())
        .then((data) => {
            setDogImages(data.message)
            setIsLoaded(true)
        })
        }
    ,[])


if (!isLoaded) return <p>Loading...</p>
return <img src={dogImages} alt="A Random Dog"/>
}

export default App;