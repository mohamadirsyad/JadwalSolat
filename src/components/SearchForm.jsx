import PropTypes from "prop-types";

const SearchForm = ({ input, setInput, setTerm }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      if (input.trim()) {
        setTerm(input);
        setInput("");
      } else {
        alert("Please enter a search term");
      }
    }}
  >
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      type="text"
      placeholder="Search City"
      className="w-[250px] py-2 px-4 rounded-full text-md text-slate-400 focus:shadow-xl"
    />
    <button type="submit" className="hidden">
      Submit
    </button>
  </form>
);

SearchForm.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  setTerm: PropTypes.func.isRequired,
};
export default SearchForm;
