import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';




function App() {
  // State variables
  const [movies, setMovies] = useState([
    // Initial list of movies
    { id: 1, title: "Sound of Metal",
     description: "A heavy metal drummer's life is turned upside down when he begins to lose his hearing and he must confront a future filled with silence.",
     posterURL: "./SOUND-OF-METAL-2020.jpeg",
     rating: 7.7 ,},
  
       { id: 2, title: "School of Rock",
     description: "User reviews591 ... A wannabe rock star in need of cash (Jack Black) poses as a substitute teacher at a prep school, and tries to turn his class into a rock band.",
      posterURL: ".School-of-Rock-poster-iii-e1579652182124.jp",
       rating: 7.2 },
    // Add more initial movies as needed
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');
  const [title, setTitle] = useState(''); // Define state variable for title
  const [description, setDescription] = useState(''); // Define state variable for description
  const [posterURL, setPosterURL] = useState(''); // Define state variable for posterURL
  const [rating, setRating] = useState(''); // Define state variable for rating

  // Function to add a new movie
  const addMovie = () => {
    const newMovie = {
      id: movies.length + 1,
      title,
      description,
      posterURL,
      rating: parseInt(rating) // Convert rating to integer
    };
    setMovies([...movies, newMovie]);
    // Reset input fields
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  // Function to handle filter change
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    if (name === 'title') {
      setFilterTitle(value);
    } else if (name === 'rating') {
      setFilterRating(value);
    }
  };

  // Function to filter movies based on title and rating
  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRating === '' || movie.rating >= parseInt(filterRating));
  });

  return (
    <div className="App">
      <h1>Cinema App</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <div className="add-movie">
        <h2>Add New Movie</h2>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="text" placeholder="Poster URL" value={posterURL} onChange={(e) => setPosterURL(e.target.value)} />
        <input type="number" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
        <button onClick={addMovie}>Add Movie</button>
      </div>
    </div>
  );
}

export default App;
