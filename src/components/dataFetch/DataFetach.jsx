import { useEffect, useState } from "react";
import DataCard from "./dataCard";

const DataFetach = () => {
  const [dataGet, setDataGet] = useState([]);

  useEffect(() => {
    fetch("https://react.microhost.one/api/course?email=naim@microdeft.com")
      .then((res) => res.json())
      .then((res) => {
        setDataGet(res.data);
      });
  }, []);
  return (
    <div>
      {dataGet?.map((datas) => (
        <DataCard key={datas._id} datas={datas}></DataCard>
      ))}
    </div>
  );
};

export default DataFetach;
