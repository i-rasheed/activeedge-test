import React,{useState, useEffect} from 'react'
import Axios from 'axios'

export default function ArtistAlbum(props) {
    const [artistAlbums, setArtistAlbums ] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const albums = async() =>{
           try{
               setLoading(true)
                const artistAlbumRes = await Axios.get('https://jsonplaceholder.typicode.com/albums')
                setLoading(false)
                setArtistAlbums(artistAlbumRes.data)
                console.log(artistAlbums)
           } catch(error) {
                setLoading(false)
                console.log(error)
                setError(error.message)
           }     
        }
        albums();   
    }, [])
    return (
        <div>
            <h1>Albums</h1>
            { loading? (
                    <h1>Loading...</h1>
                ) : error? (
                    <h1>{error}</h1>
                ) :
                <table className="table">
                <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                </tr>
                </thead>
                <tbody>
                {artistAlbums.map((artistAlbum) => (
                    <tr key={artistAlbum.id}>
                    <td>{artistAlbum.id}</td>
                    <td>{artistAlbum.title}</td>
                    <td>
                        <button
                        type="button"
                        className="small"
                          onClick={() =>
                            props.history.push(`/albums/${artistAlbum.userId}/photos`)
                          }
                        >
                        Get album photos
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
    }
        </div>
    )
}
