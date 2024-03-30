import { Card, Row, Col, input, FloatButton } from "antd"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useGetCryptosQuery } from "../services/cryptoApi"
import millify from "millify"

const Cryptocurrency = ({ simplified }) => {
  const { data: cryptoList, isFetching } = useGetCryptosQuery()
  const [cryptos, setCryptos] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const FetchCoin = cryptoList?.data?.coins.filter((coins) => coins.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setCryptos(FetchCoin)

  }, [searchTerm, cryptoList])


  if (isFetching) {
    return 'Loading....'

  }

  return (
    <>
      {!simplified && <div className="search-crypto" >
        <input className="search-input" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)} />

      </div>}
      <Row gutter={[32, 32]} className="crypto-card-container" style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
        {
          cryptos?.map((currency) => (
            <Col className="crypto-card" key={currency.id} xs={24} sm={12} lg={6}>
              <Link to={`/crypto/${currency.id}`}>
                <Card title={`${currency.rank} ${currency.name}`} extra={<img className="crypto-image" src={`${currency.iconUrl}`} />} hoverable>
                  <p> Price: {millify(currency.price)}</p>
                  <p> Market Cap: {millify(currency.marketCap)}</p>
                  <p> Daily Change: {millify(currency.change)}%</p>

                </Card>
              </Link>
            </Col>
          ))
        }
        <FloatButton.BackTop />
      </Row>
    </>

  )
}

export default Cryptocurrency




