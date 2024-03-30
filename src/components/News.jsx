import moment from "moment"
import { Typography, Row, Col, Card, Select } from "antd"
import { useGetCryptosNewsQuery } from "../services/cryptoNewsApi"

const { Text, Title } = Typography
const { Option } = Select
const News = () => {
  const { data: cryptoNews } = useGetCryptosNewsQuery()
  console.log(cryptoNews)


  return (
    <div>
      news
    </div>
  )
}

export default News