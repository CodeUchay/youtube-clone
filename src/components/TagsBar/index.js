import Tag from "./Tag";

const TAGS = [
  "All",
  "Music",
  "Cooking Shows",
  "Computer Programming",
  "Sia",
  "Driving",
  "Country Music",
  "Movies",
  "JavaScript",
  "Magic",
  "Tennis",
  "Database",
  "store",
  "Breaking News",
  "Messi",
  "Beyonce",
  "Sports",
  "Cars",
];

const TagsBar = () => {
  return (
    <div className=" whitespace-nowrap z-10 p-2 bg-white fixed w-full flex items-center justify-between overflow-scroll no-scrollbar">
      {TAGS.map((tag) => (
        <Tag key={tag} tagContent={tag} />
      ))}
    </div>
  );
};

export default TagsBar;
