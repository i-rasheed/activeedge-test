import React from 'react'

export default function AlbumPhotos() {

    const albumId = props.match.params.id

    const [albumPhotos, setAlbumPhotos ] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const allAlbumPhoto = () =>{
           try{
               setLoading(true)
                const albumPhotosRes = Axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
                setLoading(false)
                setAlbumPhotos(albumPhotosRes.data)
                console.log(albumPhotos)
           } catch(error) {
                setLoading(false)
                console.log(error)
                setError(error.message)
           }     
        }
        allAlbumPhoto();   
    }, [])

    return <div>
    <h1>Album Photos</h1>
    { loading? (
            <h1>Loading...</h1>
        ) : error? (
            <h1>{error}</h1>
        ) :
        <table className="table">
        <thead>
        <tr>
            <th>id</th>
            <th>Photo</th>
        </tr>
        </thead>
        <tbody>
        {albumPhotos.map((albumPhoto) => (
            <tr key={albumPhoto.id}>
            <td>{albumPhoto.id}</td>
            <td>{albumPhoto.title}</td>
            </tr>
        ))}
        </tbody>
    </table>
}
</div>
}
