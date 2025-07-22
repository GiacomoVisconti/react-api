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
            {console.log(actorsData, actressData)
            }
            <div className="py-3">
                <h3>Actress and Actors</h3>
            </div>
            <div className="row">

                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}