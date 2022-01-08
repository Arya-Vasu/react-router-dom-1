import {useState} from 'react';
import Button from '@mui/material/Button';
// import * as React from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import logo from './logo.svg';
import './App.css';

export default function App() {
  const [pic, setPic] = useState("");
  const [name, setName] = useState("");
  const [imdb, setImdb] = useState("");
  const [year, setYear] = useState("");
  const [summary, setSummary] = useState("");
  const [link, setLink] = useState("");
  const [movies, setMovies] = useState([
    {
      pic:
        "https://www.pinkvilla.com/imageresize/atrangi_re_twitter_reaction.jpg?width=752&format=webp&t=pvorg",
      name: "Atrangi Re",
      imdb: "7.2",
      year: "2021",
      summary:
        "Atrangi Re is a 2021 Indian Hindi-language romance drama film directed by Aanand L. Rai, written by Himanshu Sharma and produced by Bhushan Kumar and Krishan Kumar. Production companies are T-Series, Colour Yellow Productions and Cape of Good Films. The film stars Akshay Kumar, Dhanush and Sara Ali Khan in lead roles.",
      link: "https://www.hotstar.com/in/movies/atrangi-re/1260076066"
      },
    {
      pic:
        "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
      name: "Spider-Man: No Way Home",
      imdb: "8.9",
      year: "2021",
      summary:
        "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      link: "https://in.bookmyshow.com/"
     },
    {
      pic:
        "https://www.onlinekhabar.com/wp-content/uploads/2021/10/suryabanshi.jpg",
      name: "Sooryavanshi",
      imdb: "6.4",
      year: "2021",
      summary:
        "A Mumbai cop pulls out all the stops to ensure the conspiracy that is about to attack his city is intercepted.",
      link: "https://www.netflix.com/in/"
      },
    {
      pic:
        "https://m.media-amazon.com/images/M/MV5BODViODU5NDEtZGQwOS00OTAzLWIyNjQtNGU5ZmMxZjM5NTQ5XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
      name: "Satyameva jayate 2",
      imdb: "5.3",
      year: "2021",
      summary:
        "As an anti-corruption bill stalls in the government and doctors go one strike, a vigilante delivers his own justice and becomes a hero.",
      link: "https://www.primevideo.com/detail/0I1O5BWCMBBNZG6D1Y3HOEZV4D/ref=atv_hm_hom_1_c_bV3MWc_CZikBR_1_1"
    },
    {
      pic:
        "https://m.media-amazon.com/images/M/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      name: "Red Notice",
      imdb: "6.4",
      year: "2021",
      summary:
        "In the world of international crime, an Interpol agent attempts to hunt down and capture the world's most wanted art thief.",
      link: "https://www.netflix.com/in/"
     },
    {
      pic:
        "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa--the-rise-et00129538-08-12-2021-01-21-46.jpg",
      name: "Pushpa : The Rise",
      imdb: "8.2",
      year: "2021",
      summary:
        "Violence erupts between red sandalwood smugglers and the police charged with bringing down their organization.",
      link: "https://in.bookmyshow.com/"
      },
    {
      pic:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg",
      name: "Jai Bhim",
      imdb: "9.4",
      year: "2021",
      summary:
        "A pregnant woman from a primitive tribal community, searches desperately for her husband, who is missing from police custody. A High Court advocate rises in support to find her husband and seek justice for them.",
      link: "https://www.primevideo.com/detail/0SWGQNS7I3QUVSVKQE0V3Q0O2V/ref=atv_hm_vRJ6BI_brws_1_28"
    },
    {
      pic:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bunty_Aur_Babli_2_film_poster.jpg/220px-Bunty_Aur_Babli_2_film_poster.jpg",
      name: "Bunty Aur babli 2",
      imdb: "3.9",
      year: "2021",
      summary:
        "Bunty and Babli are a pair of retired con-artists. After a spate of robberies with their trademark sigil start appearing across India the two are forced out of retirement to find out who has been copying them.",
      link: "https://www.primevideo.com/detail/0RBE0W7LKVHWU4FMBYF0ZBW08E/ref=atv_hm_hom_1_c_bV3MWc_6KCyNm_1_5"
     },
    {
      pic:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Bob_Biswas_poster.jpg/220px-Bob_Biswas_poster.jpg",
      name: "Bob biswas",
      imdb: "6.9",
      year: "2021",
      summary:
        "Bob Biswas is a 2021 Indian Hindi-language crime thriller film directed by Diya Annapurna Ghosh. It is produced by Red Chillies Entertainment. The film, starring Abhishek Bachchan and Chitrangada Singh, serves as a spin-off to the 2012 thriller Kahaani. The film premiered on 3 December 2021 on ZEE5.",
      link: "https://www.zee5.com/movies/details/bob-biswas/0-0-1z544916"
    },
    {
      pic:
        "https://static.toiimg.com/photo/msid-88251487/420%20IPC.jpg?88251487",
      name: "420 IPC",
      imdb: "6.6",
      year: "2021",
      summary:
        "In this ZEE5 Original film, CA Keswani is arrested for bank fraud and forgery. Keswani hires Birbal, a lawyer, to fight his case, but Birbal realises that there's more to it than meets the eye.",
      link: "https://www.zee5.com/movies/details/420-ipc/0-0-1z552045"
      }
    ]);
  return (
    <div className="App">
      <h1>Movies Details</h1>
      <form>
        <h3>Please fill the below form to add movie in the list :</h3>
        <TextField label="Movie Name" variant="standard" value={name} onChange={(event) => setName(event.target.value)} placeholder="Movie Name" />
        <TextField label="IMDb Rating" variant="standard" value={imdb} onChange={(event) => setImdb(event.target.value)} placeholder="IMDb" />
        <TextField label="Poster URL" variant="standard" value={pic} onChange={(event) => setPic(event.target.value)} placeholder="Poster Link" />
        <TextField label="Year of Release" variant="standard" value={year} onChange={(event) => setYear(event.target.value)} placeholder="Year" />
        <TextField label="Summary" variant="standard" value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="Summary" />
        <TextField label="Watch Link" variant="standard" value={link} onChange={(event) => setLink(event.target.value)} placeholder="Watch Link" />
        <Button onClick={() => {
          const newMovie = { pic:pic, name:name, imdb:imdb, year:year, summary:summary, link:link}
          setMovies([...movies, newMovie])
          }} variant="contained">Add Movie</Button>
      </form>
      <section class="list">
        {movies.map((movie) => (
          <Movie
            pic={movie.pic}
            name={movie.name}
            imdb={movie.imdb}
            year={movie.year}
            summary={movie.summary}
            link={movie.link}
          />
         ))}
      </section>
      {/* <AddColor /> */}
    </div>
  );
}

function Movie({ pic, name, imdb, year, summary, link }) {
  const styles={color:(imdb > 7.5 ? 'red' : 'green')};
  return (
    <div className="card">
      <div className="poster">
        <img className="pic" alt={name} src={pic} />
      </div>
      <div className="details">
        <h2>{name}</h2>
        <div class="imdb">
          <p> IMDb : <strong style={styles}>{imdb} ⭐</strong></p>
          <p><strong>Year: </strong>{year}</p>
        </div>
        <Button class="toggle" variant="outlined">Toggle Description</Button>
        <p className="summary">{summary}</p>
        <a href={link} target="_blank" className="link">Watch Now</a>
        <Counter />
      </div>
    </div>
  );
}

function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return(
    <div className="counter">
       <button className="button" onClick={() => setLike(like + 1)}>
          👍 {like}
        </button>
        <button className="button" onClick={() => setDislike(dislike + 1)}>
          👎 {dislike}
        </button>
    </div>
  );
}

// function AddColor() {
//   const [color, setColor] = useState("pink");
//   const styles = {background: color};
//   const [colorList, setColorList] = useState(['green', 'yellow', 'orange', 'red']);
//   return (
//     <div>
//       <input value={color} style={styles} onChange={(event) => setColor(event.target.value)} placeholder="Enter a color" />
//       <button onClick={
//         () => setColorList([...colorList, color])}>Add color</button>
//       {colorList.map((clr) => <ColorBox color={clr}/>)}
//     </div>
//   );
// }

// function ColorBox({color}) {
//   const style = {
//     width:"200px", 
//     height:'25px', 
//     background:color, 
//     marginTop:'10px',};
//   return (
//     <div style={style} key="{color}">{color}</div>
//   )
// }