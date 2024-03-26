import millify from "millify"
import { Link } from "react-router-dom"
import { Typography, Statistic, Row, Col } from "antd"
import { useGetCryptosQuery } from "../services/cryptoApi";
import { News, Cryptocurrency } from "../components"


const { Title } = Typography
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery()
  const globalStat = data?.data?.stats
  if (isFetching) {
    return 'Loading....'
  }
  console.log(data)
  return (
    <>
      <Title level={2} className="heading">Global Crypto Statistic</Title>
      <Row>
        <Col span={12} ><Statistic value={globalStat.totalCoins} title="Total Cryptocurrencies" /></Col>
        <Col span={12} ><Statistic value={millify(globalStat.totalExchanges)} title="Total Exchanges" /></Col>
        <Col span={12} ><Statistic value={millify(globalStat.totalMarketCap)} title="Total Market Cap" /></Col>
        <Col span={12} ><Statistic value={millify(globalStat.total24hVolume)} title="Total 24h" /></Col>
        <Col span={12} ><Statistic value={millify(globalStat.totalMarkets)} title="Total Market" /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 CryptoCurrency in The World</Title>
        <Title level={4} className="show-more" style={{ marginRight: "1rem" }}><Link to="./Cryptocurrency">Show more</Link></Title>
      </div>
      <Cryptocurrency simplified/>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={4} className="show-more" style={{ marginRight: "1rem" }}><Link to="./News">Show More</Link></Title>
      </div>
      <News/>
    </>
  )
}

export default Homepage
