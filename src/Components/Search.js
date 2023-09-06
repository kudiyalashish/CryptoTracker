function Search({ func }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search"
        onChange={function (e) {
          func(e.target.value.toLowerCase());
        }}
      />
    </div>
  );
}

export default Search;
