import MarketCapComponent from "../../components/Dashboard/marketCapComponent";
import TabComponent from "../../components/Dashboard/tabComponent";
import DropDownAllTypes from "../../components/Dashboard/dropDownAllTypes";

const data = [
  {
    title: "Trending",
    type: "trending",
    data: [
      { text: "Shiba Inu", icon: "SHIB", value: "-4.28" },
      { text: "Shiba Inu", icon: "SHIB", value: "4.28" },
      { text: "Shiba Inu", icon: "SHIB", value: "-4.28" },
    ],
  },
  {
    title: "Biggest Gainer",
    type: "price",
    data: [
      { text: "Timeseries AI", icon: "TIMESERIES", value: "0.000251" },
      { text: "Timeseries AI", icon: "TIMESERIES", value: "0.000251" },
      { text: "Timeseries AI", icon: "TIMESERIES", value: "0.000251" },
    ],
  },
  {
    title: "Recently Updated Socials",
    type: "price",
    data: [
      { text: "Timeseries AI", icon: "TIMESERIES", value: "0.000251" },
      { text: "Shiba Inu", icon: "SHIB", value: "0.000251" },
      { text: "Timeseries AI", icon: "TIMESERIES", value: "0.000251" },
    ],
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="bg-gray-200 sm:px-10 px-4 py-4 min-h-screen static">
      <div className="mb-8">
        <p className="text-black font-bold text-3xl">
          Today's Cryptocurrency Prices by Market Cap
        </p>
        <p className="text-gray-500">
          The global market cap is{" "}
          <span className="text-green-500 font-bold">$1.18T,</span>a
          <span className="text-green-500 font-bold">+1.38%</span> increase over
          the last day. <span className="text-gray-400">Read More</span>
        </p>
      </div>
      <div className="flex flex-wrap gap-5 my-6">
        {data.map((val, key) => {
          return (
            <div className="flex-1" key={key}>
              <MarketCapComponent
                title={val.title}
                type={val.type}
                data={val.data}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center">
        <TabComponent />
        <DropDownAllTypes />
      </div>
    </div>
  );
};

export default Dashboard;
