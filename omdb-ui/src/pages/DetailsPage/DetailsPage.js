import React, { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { axiosHeaders,baseUrl } from '../../utils/constants';
import { useHistory } from 'react-router-dom';
import './DetailsPage';

export default function DetailsPage() {
    const params = useParams();
    const [details,setDetails] = useState({
        Actors: "",
        Awards: "",
        BoxOffice: "",
        Country: "",
        DVD: "",
        Director: "",
        Genre: "",
        Language: "",
        Metascore: "",
        Plot: "",
        Poster: "",
        Production: "",
        Rated: "",
        Ratings: {},
        Released: "",
        Response: "",
        Runtime: "",
        Title: "",
        Type: "",
        Website: "",
        Writer: "",
        Year: "",
        imdbID: "",
        imdbRating: "",
        imdbVotes: "",
    });
    const uri = `${baseUrl}omdb/imdb/${params.imdbID}`;
    const history = useHistory();

    useEffect( () =>{
        axios.get(uri,axiosHeaders)
        .then(response => setDetails(response.data))
        .catch(err=>console.log(err))
    },[])

    console.log(details);
    
    const backButtonClick = () => {
      history.push(`/`);
    } 

    return (
       
        <div>
              <div className="header">
                <h1>The Movie Search</h1>
              </div>
              <div className="card" style={{ margin: "auto" , justifyContent : "center"}}>
              <div className="card-body ">
                <h5 className="card-title"><u>{details.Title}</u> ({details.Year})</h5>
                  <div className="card" style={{width: "18rem"  , margin : "auto"}}>
                  <img className="card-img-top" src={details.Poster} alt="Card image cap"/>
                  <div className="card-body d-flex justify-content-center">
                    <p className="card-text">{details.Title}    ({details.Country})</p>
                  </div>
                </div>
              </div>
              <ul className="list-group list-group-flush justify-content-center">
              <li className="list-group-item"><br/><b>Plot:</b><br></br>{details.Plot}</li>
                <li className="list-group-item"><b>Director:</b><br></br>{details.Director}<br></br><br></br><b>Actors:</b><br></br>{details.Actors}</li>
                <li className="list-group-item">
                  <b>Movie Info : </b><br/><br/>
                  Genre : {details.Genre}<br/>
                  Runtime : {details.Runtime}<br/>
                  Released : {details.Released}<br/>
                  Writer : {details.Writer}<br/>
                  Type : {details.Type}<br/>
                  Language : {details.Language}<br/>
                  Awards : {details.Awards} <br/>
                  Metascore : {details.Metascore}<br/>

                </li>
                <li className="list-group-item">
                <b>Ratings & Reviews : </b><br/><br/>
                  Rated : {details.Rated}<br/>
                  Review : {details.Review}<br/>
                  ImDB Rating : {details.imdbRating}<br/>
                  ImDB Votes : {details.imdbVotes}<br/>

                </li>
              </ul>
              <div className="card-body d-flex justify-content-center">
                <button className="btn btn-success clear-margin-top" onClick={backButtonClick} >Back to Search</button>              
              </div>
            </div>
        </div>
    )
}