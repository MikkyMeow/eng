import { useEffect, useState } from "react";
import { fetchUnits } from "../../../api/units";
import { Link } from "react-router-dom";

export const UnitsList = () => {
  const [units, setUnits] = useState<any[]>([]);

  useEffect(() => {
    const getThemes = async () => {
      const units = await fetchUnits();
      setUnits(units);
    };

    getThemes();
  }, []);

  return (
    <>
      <h2>Units</h2>
      <ul>
        {units.map(({ id, name }) => (
          <li>
            <Link to={`/units/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
