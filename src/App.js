import React from 'react'
import { BrowserRouter, Route} from "react-router-dom";
import AlbumPhotos from './screens/AlbumPhotos';
import AllArtists from './screens/AllArtists';
import ArtistAlbum from './screens/ArtistAlbum';
import ArtistCrud from './screens/ArtistCrud';
import ArtistTweet from './screens/ArtistTweet';

export default function App() {
    return (
        <BrowserRouter>
        <div>
            <Route path="/" exact component={AllArtists} />
            <Route path="/album"  component={ArtistAlbum} />
            <Route path="/tweet"  component={ArtistTweet} />
            <Route path="/crud"  component={ArtistCrud} />
            <Route path="/albums/:id/photos"  component={AlbumPhotos} />
        </div>   
        </BrowserRouter>
        
    )
}
