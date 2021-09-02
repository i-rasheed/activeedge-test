import React from 'react'

export default function ArtistAlbum() {
    const [artistAlbums, setArtistAlbums ] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const albums = () =>{
           try{
               setLoading(true)
                const artistAlbumRes = Axios.get('https://jsonplaceholder.typicode.com/albums')
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
                        //   onClick={() =>
                        //     props.history.push(`/product/${product._id}/edit`)
                        //   }
                        >
                        Edit
                        </button>
                        <button
                        type="button"
                        className="small"
                        //   onClick={() => deleteHandler(product)}
                        >
                        Delete
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
