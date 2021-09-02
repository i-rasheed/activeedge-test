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

    return (
        <div>
            
        </div>
    )
}
