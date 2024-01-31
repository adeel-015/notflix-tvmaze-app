import { useContext } from 'react';

//Context
import ShowsContext from '../context/shows/showsContext';

//Components
import Searchbar from "../components/Searchbar";
import ListItem from '../components/ListItem';
import Loader from '../components/Loader';

const Homepage = () => {
    const showsContext = useContext(ShowsContext);
    const {loading, shows} = showsContext;

  return (
    <div className="homepage">
      <Searchbar />
      {loading ? (
        <Loader />
      ) : (
        <div className='homepage__list'>
            {shows.map((item) => (
                <ListItem 
                    key={item.show.id}
                    id={item.show.id}
                    image={item.show.image? item.show.image.medium : "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg" }
                    name={item.show.name}
                    rating={item.show.rating.average ? item.show.rating.average : "No rating" }
                 />
            ))}
        </div>
      )}
    </div>
  )
}

export default Homepage
