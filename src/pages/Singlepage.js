import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

//Context
import ShowsContext from "../context/shows/showsContext";

//Components
import Loader from "../components/Loader";

const Singlepage = ({match}) => {

    const { id } = useParams();

    const {getSingleShow, singleShow, loading } = useContext(ShowsContext);

    useEffect(() => {
        if (id) {
            getSingleShow(id);
        }

        // eslint-disable-next-line
    }, []);

    const removeTags = (text) => {
        if (text === null || text === "") {
            return false;
        } else {
            text = text.toString();
        }
        return text.replace(/(<([^>]+)>)/gi, "");
    };

  return (
    <>
        {loading ? <Loader /> :
            <div className="singleshow">
                <img 
                    src={singleShow.image 
                        ? singleShow.image.medium 
                        : "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
                    } 
                    alt={singleShow.name}
                />
                <div className="singleshow__info">
                    <h1>{singleShow.name}</h1>
                    {singleShow.genres && singleShow.genres.map(genre => (
                        <span key={genre} className="singleshow__genre">{genre}</span>
                    ))}
                    <p>
                        <strong>Status: </strong> {singleShow.status && singleShow.status}
                    </p>
                    <p>
                        <strong>Rating: </strong> {singleShow.rating ? singleShow.rating.average : "No rating"}
                    </p>
                    <p>
                        <strong>Official Site: </strong> {singleShow.officialSite ? (<a href={singleShow.officialSite} target="_blank" rel="noreferrer">{singleShow.officialSite}</a>) : "No Official Site"}
                    </p>
                    <p>
                        {singleShow.summary && removeTags(singleShow.summary)}
                    </p>
                </div>
            </div>
        }
    </>
  );
};

export default Singlepage;
