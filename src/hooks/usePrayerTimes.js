import { useState, useEffect } from "react";
import { DateTime } from "luxon";

const usePrayerTimes = (term) => {
  const [data, setData] = useState([]);
  const [timezone, setTimezone] = useState("Asia/Jakarta");
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.aladhan.com/v1/timingsByAddress?address=${term}`
        );
        const result = await response.json();

        if (result.code !== 200 || !result.data) {
          alert(`Kota "${term}" tidak ditemukan.`);
          setLoading(false);
          return;
        }

        setData(result.data);

        const tz = result.data.meta.timezone;
        setTimezone(tz);

        const dateInTz = DateTime.now().setZone(tz);
        setCurrentDate(dateInTz.toFormat("cccc, dd LLLL yyyy"));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (term.trim()) fetchData();
  }, [term]);

  useEffect(() => {
    const updateTime = () => {
      const localTime = DateTime.now().setZone(timezone);
      setCurrentTime(localTime.toFormat("HH:mm:ss"));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return { data, currentTime, currentDate, loading, timezone };
};

export default usePrayerTimes;
