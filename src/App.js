import React from 'react'
import { BrowserRouter, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import AlbumPhotos from './screens/AlbumPhotos';
import AllArtists from './screens/AllArtists';
import ArtistAlbum from './screens/ArtistAlbum';
import ArtistTweet from './screens/ArtistTweet';
import CreateTweet from './screens/CreateTweet';

export default function App() {
    return (
        <BrowserRouter>
        <NavBar />
        <div>
            <Route path="/" exact component={AllArtists} />
            <Route path="/album"  component={ArtistAlbum} />
            <Route path="/tweet"  component={ArtistTweet} />
            <Route path="/create"  component={CreateTweet} />
            <Route path="/albums/:id/photos"  component={AlbumPhotos} />
        </div>   
        </BrowserRouter>
        
    )
}
