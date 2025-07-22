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

                        <div  key={element.id} className=" py-3 col-12">


                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                    <img src={element.image} className="img-fluid rounded-start w-75 h-100" alt={element.name}/>
                                    </div>
                                    <div className="col-md-8 d-flex flex-column justify-content-center align-items-center">
                                        <div className="card-body">
                                            <h2 className="card-title pb-3 fs-1 text-center">{element.name}</h2>
                                            <div className="d-flex flex-column gap-4 fs-5 px-4">
                                                <span><b>Anno di Nascita:</b> <span>{element.birth_year}</span></span>
                                                <span><b>Nazionalità:</b> <span>{element.nationality}</span></span>
                                                <span><b>Biografia: </b><span>{element.biography}</span></span>
                                                <span><b>Awards: </b><span>{element.awards}</span></span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })}

                {actressData?.map((element) => {
                    return (

                        <div  key={element.id} className=" py-3 col-12">


                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                    <img src={element.image} className="img-fluid rounded-start w-75 h-100" alt={element.name}/>
                                    </div>
                                    <div className="col-md-8 d-flex flex-column justify-content-center align-items-center">
                                        <div className="card-body">
                                            <h2 className="card-title pb-3 fs-1 text-center">{element.name}</h2>
                                            <div className="d-flex flex-column gap-4 fs-5 px-4">
                                                <span><b>Anno di Nascita:</b> <span>{element.birth_year}</span></span>
                                                <span><b>Nazionalità:</b> <span>{element.nationality}</span></span>
                                                <span><b>Biografia: </b><span>{element.biography}</span></span>
                                                <span><b>Awards: </b><span>{element.awards}</span></span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })}
                

            </div>
        </div>
    )
}