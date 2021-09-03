import React,{useState, useEffect} from 'react'
import Axios from 'axios'

export default function ArtistTweet(props) {
    const [artistTweet, setArtistTweet ] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)
    const [response, setResponse] = useState('')

    useEffect(() => {
        const artistTweet = async () =>{
           try{
               setLoading(true)
                const artistTweetRes = await Axios.get('https://jsonplaceholder.typicode.com/comments')
                console.log(artistTweetRes.data)
                setLoading(false)
                setArtistTweet(artistTweetRes.data)
                console.log(artistTweet)
           } catch(error) {
                setLoading(false)
                console.log(error)
                setError(error.message)
           }     
        }
        artistTweet();   
    }, [])

    const deleteTweet = async (id) => {
        try{
            const deleteRes = await Axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
            if(deleteRes.data){
                setResponse('Successfully deleted tweet')
            }
            artistTweet.filter(el => el.id !== id)
        }catch(err){
            setError(err.message)
        }
        
    }

    return (
        <div>
            <h1>Artist Tweet</h1>
            {response && <p>{response}</p>}
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
                    <th>email</th>
                    <th>body</th>
                </tr>
                </thead>
                <tbody>
                {artistTweet.map((artist) => (
                    <tr key={artist.id}>
                    <td>{artist.id}</td>
                    <td>{artist.name}</td>
                    <td>{artist.email}</td>
                    <td>{artist.body}</td>
                    <td>
                        <button
                        type="button"
                        className="small"
                          onClick={() =>
                            props.history.push(`/edit/${artist.id}`)
                          }
                        >
                        Edit
                        </button>
                    </td>
                    <td>
                        <button
                        type="button"
                        className="small"
                        onClick={() => deleteTweet(artist.id)}
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
