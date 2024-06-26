import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SearchedVideos from "../components/SearchedVideos";
import TagsBar from "../components/TagsBar";
import LayoutBase from "../components/LayoutBase";
import { clearState, updateSearhedVideos } from "../store/searchPage/reducers";

const SearchPage = () => {
  const { searchQuery } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSearhedVideos(searchQuery));
    return () => dispatch(clearState());
  }, [searchQuery]);

  return (
    <LayoutBase>
      <TagsBar />
      <SearchedVideos />
    </LayoutBase>
  );
};

export default SearchPage;
