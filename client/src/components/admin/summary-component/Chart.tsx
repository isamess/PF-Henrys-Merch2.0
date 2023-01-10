import { useState, useEffect } from "react";
import axios from "axios";
import { url, setHeaders } from "../../../redux/slices/api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const [sales, setSales] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  function compare(a: any, b: any) {
    if (a._id < b._id) {
      return 1;
    } else if (a._id > b._id) {
      return -1;
    }
    return 0;
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res: any = await axios.get(
          `${url}/orders/week-sales`,
          setHeaders()
        );

        res.data.sort(compare);

        const newData: Array<any> = res.data.map((item: any) => {
          const DAYS: Array<string> = [
            "Dom",
            "Lun",
            "Mar",
            "Mie",
            "Jue",
            "Vie",
            "Sab",
          ];

          return {
            days: DAYS[item._id - 1],
            amount: item.total / 100,
          };
        });
        setSales(newData);
        setLoading(false);
      } catch (err: any) {
        console.log(err);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="chart-loader">Loading ...</div>
      ) : (
        <div className="chart">
          <h3>Ganancia última semana(US $)</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={sales}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="days" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};

export default Chart;
