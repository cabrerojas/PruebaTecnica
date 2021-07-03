import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
//import { get_all_promotions } from "../../actions/promotion";
import {
  PicCenterOutlined,
  UserAddOutlined
} from "@ant-design/icons";

const IndexPage = ({ children }) => {
  const { Item } = Menu;
  //const { allPromotion } = useSelector(({ promotions }) => promotions);
  const dispatch = useDispatch();
  const { Header, Content, Footer } = Layout;

  const deleteLocalStorageInfo = () => {
    //localStorage.removeItem("tokenExpiration");
    //localStorage.removeItem("token");
    //localStorage.removeItem("user");
  };

  useEffect(() => {
    //allPromotion === null && dispatch(get_all_promotions());
  }, [/*allPromotion*/]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="ant-layout" >
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="horizontal" >
          <Item key="1" icon={<PicCenterOutlined style={{ fontSize: 22 }} />}>
            <Link style={{ textDecoration: "none" }} to="/listado-personas">
              Listado
            </Link>
          </Item>
          <Item key="2" icon={<UserAddOutlined style={{ fontSize: 22 }} />}>
            <Link style={{ textDecoration: "none" }} to="/alta-personas">
              Nueva Persona
            </Link>
          </Item>
        </Menu>
      </Header>
      <Content style={{ margin: "0 16px" }}>{children}</Content>
      <Footer style={{ textAlign: "center" }} className="bg-white py-3"/>
    </Layout>
  );
};

export default IndexPage;
