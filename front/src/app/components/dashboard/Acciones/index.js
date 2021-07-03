import React from "react";
import { Link } from "react-router-dom";
import { Space, Button, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const Acciones = () => {
  return (
    <Space size="middle">
      <Tooltip title="Editar">
        <Link style={{ textDecoration: "none" }} to="/alta-personas">
          <Button
            type="dashed"
            shape="circle"
            size="middle"
            icon={<EditOutlined />}
          />
        </Link>
      </Tooltip>
      <Tooltip title="Eliminar">
        <Button
          value={null}
          disabled={false}
          danger
          type="dashed"
          shape="circle"
          size="middle"
          icon={<DeleteOutlined />}
          onClick={null}
        />
      </Tooltip>
    </Space>
  );
};
export default Acciones;
