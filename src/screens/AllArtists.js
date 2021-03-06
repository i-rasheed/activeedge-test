import React, {useState, useEffect} from 'react'
import Axios from 'axios'

export default function AllArtists() {
    const [artists, setArtist ] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const allArtists = async () =>{
           try{
               setLoading(true)
                const allArtistRes = await Axios.get('https://jsonplaceholder.typicode.com/users')
                console.log(allArtistRes.data)
                setLoading(false)
                setArtist(allArtistRes.data)
                console.log(artists)
           } catch(error) {
                setLoading(false)
                console.log(error)
                setError(error.message)
           }     
        }
        allArtists();   
    }, [])
    return (
        <div>
            <h1>Artists</h1>
            { loading? (
                    <h1>Loading...</h1>
                ) : error? (
                    <h1>{error}</h1>
                ) :
                <table className="table">
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>website</th>
                </tr>
                </thead>
                <tbody>
                {artists.map((artist) => (
                    <tr key={artist.id}>
                    <td>{artist.id}</td>
                    <td>{artist.name}</td>
                    <td>{artist.username}</td>
                    <td>{artist.email}</td>
                    <td>{artist.phone}</td>
                    <td>{artist.website}</td>
                    </tr>
                ))}
                </tbody>
            </table>
    }
        </div>
    )
}
