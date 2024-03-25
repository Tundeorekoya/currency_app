import { Typography, Button, Menu, Avatar } from "antd"
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FunctionOutlined, FundOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom"
import icon from "../images/cryptocurrency.png"

const navbar = () => {
    const {Item} = Menu
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">
                        CryptoCash
                    </Link>
                </Typography.Title>
                {/* <Button className=""></Button> */}
            </div>
            <Menu theme="dark">
                <Item >
                    <Link to="/" >{<HomeOutlined style={{ marginRight: "0.65rem" }} />} Home</Link>
                </Item>
                <Item >
                    <Link to="/cryptocurrency" >{<FundOutlined style={{ marginRight: "0.65rem" }} />} CryptoCurrencies</Link>
                </Item>
                <Item >
                    <Link to="/exchanges"  >{<MoneyCollectOutlined style={{ marginRight: "0.65rem" }} />}Exchange</Link>
                </Item>
                <Item >
                    <Link to="/news"  >{<BulbOutlined style={{ marginRight: "0.65rem" }} />}News</Link>
                </Item>
            </Menu>

        </div>
    )
}

export default navbar