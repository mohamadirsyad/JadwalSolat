import PropTypes from "prop-types";
const PrayerTimes = ({ data, loading }) => {
  const prayTime = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

  return (
    <ul className="w-[200px] bg-slate-700 flex flex-col rounded-lg py-2">
      {loading ? (
        <li className="text-white text-center p-3">Loading...</li>
      ) : (
        data &&
        prayTime.map((item, id) => (
          <li
            key={id}
            className="odd:text-white even:text-green-400 flex justify-between p-3"
          >
            <div>{item}</div>
            <div className="font-bold">{data.timings?.[item]}</div>
          </li>
        ))
      )}
    </ul>
  );
};

PrayerTimes.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
};

export default PrayerTimes;
