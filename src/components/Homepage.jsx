import millify from "millify"
import { Link } from "react-router-dom"
import { Typography, Statistic, Row, Col } from "antd"
import { useGetCryptosQuery } from "../services/cryptoApi";




const { Title } = Typography
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery()
  console.log(data)
  return (
    <>
      <Title level={2} className="heading">Global Crypto Statistic</Title>
      <Row>
        <Col span={12} ><Statistic value="5" title="Total Cryptocurrencies" /></Col>
        <Col span={12} ><Statistic value="5" title="Total Exchanges" /></Col>
        <Col span={12} ><Statistic value="5" title="Total Market Cap" /></Col>
        <Col span={12} ><Statistic value="5" title="Total 24h" /></Col>
        <Col span={12} ><Statistic value="5" title="Total Market" /></Col>

      </Row>
    </>
  )
}

export default Homepage
