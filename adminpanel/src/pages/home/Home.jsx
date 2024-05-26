import "./home.css";
import Featuredinf from "../../components/featuredi]Info/Featuredinf";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/widgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
export default function Home() {
  return (
    <div className="home">
      <Featuredinf/>
      <Chart data={userData} title="User Analytics " grid datakey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}
