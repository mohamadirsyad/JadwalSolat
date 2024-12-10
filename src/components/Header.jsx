import PropTypes from "prop-types";

const Header = ({ term, currentTime, currentDate, loading }) => (
  <div className="w-full flex justify-between p-10">
    <div className="text-gray-400">
      {loading ? <h1>Loading...</h1> : <h1>{currentDate}</h1>}
    </div>
    <div className="text-gray-400 capitalize">
      <h1>{term}</h1>
      <h2>{currentTime}</h2>
    </div>
  </div>
);

Header.propTypes = {
  term: PropTypes.string.isRequired,
  currentTime: PropTypes.string.isRequired,
  currentDate: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};
export default Header;
