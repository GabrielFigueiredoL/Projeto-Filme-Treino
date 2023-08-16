import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import CreateMovie from "./components/pages/CreateMovie"
import MoviePreview from "./components/pages/MoviePreview"
import Profile from './components/pages/Profile'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create-movie" element={<CreateMovie />} />
          <Route path="/movie-preview" element={<MoviePreview />}  />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
