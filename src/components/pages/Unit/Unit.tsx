import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUnit } from "../../../api/units";

export const Unit = () => {
  const { id } = useParams();
  const [unit, setUnit] = useState<any | null>(null);

  useEffect(() => {
    const getTheme = async () => {
      const unit = await fetchUnit(Number(id));

      setUnit(unit);
    };

    getTheme();
  }, []);

  return <div>{JSON.stringify(unit)}</div>;
};
