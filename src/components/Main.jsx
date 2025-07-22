import { useState, useEffect } from "react"

export default function Main(){
    const actressUrl = 'https://lanciweb.github.io/demo/api/actresses/'
    const actorsUrl = 'https://lanciweb.github.io/demo/api/actors/'
    const [actressData, setActressData] = useState(null)
    const [actorsData, setActorsData] = useState(null)

    useEffect(() => {
        fetch(actressUrl)
        .then(res => res.json())
        .then(data => {
            setActressData(data)
        })

        fetch(actorsUrl)
        .then(res => res.json())
        .then(data => {
            setActorsData(data)
        })
    }, [])

    return (
        
        <div className="container">
            <div className="py-3">
                <h3>Actress and Actors</h3>
            </div>
            <div className="row">
                {actorsData?.map((element) => {
                    return (

                        <div  key={element.id} className=" py-3 col-sm-6 col-md-4 col-lg-3">
                            <div className="card h-100">
                                <img src={element.image} className="card-img-top img-fluid" alt={element.name}/>
                                <div className="card-body">
                                    <h4 className="card-text text-center">{element.name}</h4>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {actressData?.map((element) => {
                    return (

                        <div key={element.id} className=" py-3 col-sm-6 col-md-4 col-lg-3">
                            <div className="card h-100">
                                <img src={element.image} className="card-img-top img-fluid" alt={element.name}/>
                                <div className="card-body">
                                    <h4 className="card-text text-center">{element.name}</h4>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}