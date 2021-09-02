import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
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
        </div>   
        </BrowserRouter>
        
    )
}
