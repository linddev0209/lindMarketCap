import { NavLink } from "react-router-dom";
import GrayButton from "../../components/coin/GrayButton";
import BitcoinSVG from "../../assets/svg/bitcoin.svg";
import { WatchlistIcon, ArrowUpIcon } from "../../assets/icons";
import BitTabComponent from "../../components/Bitcoin/TabComponent";
import ChartComponent from "../../components/Bitcoin/ChartComponent";

const initialData = [
  { time: "2018-12-22", value: 32.51 },
  { time: "2018-12-23", value: 31.11 },
  { time: "2018-12-24", value: 27.02 },
  { time: "2018-12-25", value: 27.32 },
  { time: "2018-12-26", value: 25.17 },
  { time: "2018-12-27", value: 28.89 },
  { time: "2018-12-28", value: 25.46 },
  { time: "2018-12-29", value: 23.92 },
  { time: "2018-12-30", value: 22.68 },
  { time: "2018-12-31", value: 28.67 },
  { time: "2019-01-01", value: 25.68 },
  { time: "2019-01-02", value: 24.67 },
  { time: "2019-01-03", value: 26.68 },
  { time: "2019-01-04", value: 28.67 },
  { time: "2019-01-05", value: 23.68 },
  { time: "2019-01-06", value: 25.67 },
  { time: "2019-01-07", value: 30.68 },
  { time: "2019-01-08", value: 32.67 },
  { time: "2019-01-09", value: 34.68 },
  { time: "2019-01-10", value: 40.67 },
];

const BitcoinPage: React.FC = () => {
  return (
    <div className="bg-gray-200 sm:px-10 px-4 py-4 min-h-screen static">
      <div className="flex">
        <NavLink
          to="/"
          type="button"
          className="text-gray-400 hover:text-gray-600 border font-medium text-sm py-2 inline-flex mr-2"
        >
          Cryptocurrencies &gt;
        </NavLink>
        <NavLink
          to="/"
          type="button"
          className="text-gray-400 hover:text-gray-600 border font-medium text-sm py-2 inline-flex mr-2"
        >
          Coins &gt;
        </NavLink>
        <NavLink
          to="/"
          type="button"
          className="text-black hover:text-gray-600 border font-medium text-sm py-2 inline-flex mr-2"
        >
          Bitcoin
        </NavLink>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4">
        <div className="col-span-1">
          <div className="flex items-center my-4">
            <img className="w-10 mr-2" src={BitcoinSVG} alt="bitcoin" />
            <span className="font-bold text-lg mr-2">Bitcoin</span>
            <GrayButton text="BTC" />
            <WatchlistIcon className="ml-2" width={18} height={18} />
          </div>
          <div className="flex flex-wrap gap-4">
            <GrayButton text="Rank #1" active={true} />
            <GrayButton text="Coin" />
            <GrayButton text="Been Favorited +4.2 Million Times" />
            <GrayButton text="Website" />
            <GrayButton text="Explorers" />
            <GrayButton text="White Paper" />
            <GrayButton text="Source Code" />
          </div>
          <p className="my-2">Tages</p>
          <div className="flex gap-4 flex-wrap">
            <GrayButton text="PoW" />
            <GrayButton text="SHA-256" />
            <GrayButton text="Store Of Value" />
            <GrayButton text="Mineable" />
            <span className="text-blue-500 hover:cursor-pointer">View All</span>
          </div>
        </div>
        <div className="md:col-span-2 col-span-1">
          <div className="font-bold flex items-center mb-8">
            <span className="md:text-[60px] text-3xl mr-2 p-2">$28,013.46</span>
            <span className="p-2 text-white bg-green-500 rounded-2xl flex items-center md:text-2xl text-md">
              <ArrowUpIcon
                className="mt-2"
                color="white"
                width={15}
                height={15}
              />
              0.02%
            </span>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-2">
            <div className="flex-col">
              <span className="text-[#7D7D7D]">Market Cap</span>
              <br />
              <span className="font-bold">$535,170,972,845</span>
              <span className="flex items-center text-green-500">
                <ArrowUpIcon
                  className="mt-2 mr-1"
                  color="green"
                  width={15}
                  height={15}
                />
                0.02%
              </span>
            </div>
            <div className="flex-col">
              <span className="text-[#7D7D7D]">Fully Diluted Market Cap</span>
              <br />
              <span className="font-bold">$535,170,972,845</span>
              <span className="flex items-center text-green-500">
                <ArrowUpIcon
                  className="mt-2 mr-1"
                  color="green"
                  width={15}
                  height={15}
                />
                0.02%
              </span>
            </div>
            <div className="flex-col">
              <span className="text-[#7D7D7D]">Volume</span>
              <br />
              <span className="font-bold">$25,170,972,845</span>
              <span className="flex items-center text-green-500">
                <ArrowUpIcon
                  className="mt-2 mr-1"
                  color="green"
                  width={15}
                  height={15}
                />
                0.02%
              </span>
            </div>
            <div className="flex-col">
              <span className="text-[#7D7D7D]">Circulating Supply</span>
              <br />
              <div className="flex justify-between">
                <span className="font-bold">19,327,200 BTC</span>
                <span className="font-bold">92%</span>
              </div>
              <span className="flex items-center text-green-500">
                <div className="w-full bg-gray-400 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-gray-700 h-2.5 rounded-full"
                    style={{ width: "92%" }}
                  ></div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex items-center justify-between my-4">
        <span className="font-bold md:text-3xl text-xl whitespace-nowrap mx-2 mb-2">
          Bitcoin To USD Chart
        </span>
        <BitTabComponent />
      </div>
      <div>
        <ChartComponent data={initialData} />;
      </div>
    </div>
  );
};

export default BitcoinPage;
