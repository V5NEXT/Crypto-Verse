import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

const {Title} = Typography;
 
const Homepage = () => {
  return (
    <>
      <Title level={2} className='heading'></Title>
      <Row>
        <Col span={12}><Statistic title="Total Crytpocurrencies" value={5}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={5}/></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={5}/></Col>
        <Col span={12}><Statistic title="Total 24h Voloume" value={5}/></Col>
        <Col span={12}><Statistic title="Total Markets" value={5}/></Col>
      </Row>
    </>

  )
}

export default Homepage