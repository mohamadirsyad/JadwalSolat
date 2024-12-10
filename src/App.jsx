import { useState } from "react";
import usePrayerTimes from "./hooks/usePrayerTimes";

import SearchForm from "./components/SearchForm";
import PrayerTimes from "./components/PrayerTimes";
import Header from "./components/Header";

const App = () => {
  const [input, setInput] = useState("");
  const [term, setTerm] = useState("jakarta");

  const { data, currentTime, currentDate, loading } = usePrayerTimes(term);

  return (
    <div className="h-screen flex flex-col bg-[url(./assets/masjid.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col w-full justify-between absolute items-center">
        <Header
          term={term}
          currentTime={currentTime}
          currentDate={currentDate}
          loading={loading}
        />
        <SearchForm input={input} setInput={setInput} setTerm={setTerm} />
        <div className="mt-10">
          <PrayerTimes data={data} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default App;
