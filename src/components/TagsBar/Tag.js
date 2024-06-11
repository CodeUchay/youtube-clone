import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearState, updateSearhedVideos } from "../../store/searchPage/reducers";

const Tag = ({ tagContent }) => {
const { searchQuery } = useParams();
const navigate = useNavigate();
const dispatch = useDispatch();

const handelFormSubmit = () => {
 tagContent && navigate(`/search/${tagContent}`);
//  dispatch(updateSearhedVideos(tagContent));
//     return () => dispatch(clearState());
};
  return (
    <button onClick={handelFormSubmit} className={`p-2 mx-1 text-sm rounded-lg bg-neutral-100 ${tagContent === searchQuery && 'bg-black text-white'} hover:bg-neutral-200`}>
      {tagContent}
    </button>
  );
};

export default Tag;
