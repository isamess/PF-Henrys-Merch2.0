import { FaUsers, FaChartBar, FaClipboard } from "react-icons/fa";
import Widget from "./summary-component/Widget";
import { useState, useEffect } from "react";
import axios from "axios";
import { setHeaders, url } from "../../redux/slices/api";
import Chart from "./summary-component/Chart";
import Transaction from "./summary-component/Transactions";
import AllTimeData from "./summary-component/AllTimeData";

const Summary = () => {
  const [users, setUsers] = useState<Array<any>>([]);
  const [usersPercent, setUsersPercent] = useState<any>([0]);
  const [orders, setOrders] = useState<Array<any>>([]);
  const [ordersPercent, setOrdersPercent] = useState<any>([0]);
  const [income, setIncome] = useState<Array<any>>([]);
  const [incomePercent, setIncomePercent] = useState<any>([0]);

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
      try {
        const res: any = await axios.get(`${url}/users/stats`, setHeaders());

        res.data.sort(compare);

        setUsers(res.data);
        setUsersPercent(
          res.data[0]._id === 12
            ? ((res.data[1].total - res.data[0].total) / res.data[0].total) *
                100
            : ((res.data[0].total - res.data[1].total) / res.data[1].total) *
                100
        );
      } catch (err: any) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const res: any = await axios.get(`${url}/orders/stats`, setHeaders());

        res.data.sort(compare);

        setOrders(res.data);
        setOrdersPercent(
          res.data[0]._id === 12
            ? ((res.data[1].total - res.data[0].total) / res.data[0].total) *
                100
            : ((res.data[0].total - res.data[1].total) / res.data[1].total) *
                100
        );
      } catch (err: any) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const res: any = await axios.get(
          `${url}/orders/income/stats`,
          setHeaders()
        );

        res.data.sort(compare);

        setIncome(res.data);
        setIncomePercent(
          res.data[0]._id === 12
            ? ((res.data[1].total - res.data[0].total) / res.data[0].total) *
                100
            : ((res.data[0].total - res.data[1].total) / res.data[1].total) *
                100
        );
      } catch (err: any) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  const data: any = [
    {
      icon: <FaUsers />,
      digits: users[0]?.total,
      isMoney: false,
      title: "Users",
      color: "rgb(102,108,255)",
      bgColor: "rgb(102,108,255, 0.12)",
      percentage: usersPercent,
      position: 1,
    },
    {
      icon: <FaClipboard />,
      digits: orders[0]?.total,
      isMoney: false,
      title: "Orders",
      color: "rgb(38,198,249)",
      bgColor: "rgb(38,198,249, 0.12)",
      percentage: ordersPercent,
      position: 2,
    },
    {
      icon: <FaChartBar />,
      digits:
        income[0]?._id === 12
          ? income[1]?.total
            ? income[1]?.total.toFixed(2) / 100
            : "0"
          : income[0]?.total
          ? income[0]?.total.toFixed(2) / 100
          : "0",
      isMoney: true,
      title: "Earnings",
      color: "rgb(253, 181, 40)",
      bgColor: "rgb(253, 181, 40, 0.12)",
      percentage: incomePercent,
      position: 3,
    },
  ];

  return (
    <div className="styled-summary">
      <div className="main-stat">
        <div className="overview">
          <div className="title-sum">
            <h2>Overview</h2>
            <p>Comparación con el mes anterior</p>
          </div>
          <div className="d-flex  justify-content-between">
            {data?.map((data: any, index: any) => (
              <Widget key={index} data={data} />
            ))}
          </div>
        </div>
        <Chart />
      </div>
      <div className="side-stat">
        <Transaction />
        <AllTimeData />
      </div>
    </div>
  );
};

export default Summary;
