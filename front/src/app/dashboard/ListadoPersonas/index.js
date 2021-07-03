import React, { useEffect, useState } from "react";
import {
  Table,
  Drawer,
  Form,
  Input,
  DatePicker,
  Select,
  message,
  Empty,
} from "antd";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import Acciones from "../../components/dashboard/Acciones";

const Index = () => {

    const dataSource = [
        {
          key: '1',
          nombre: 'Mike',
          rut: 32,
        },
        {
          key: '2',
          nombre: 'John',
          rut: 42,
        },
      ];

  const columns = [
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "1",
      className: "text-center",
    },
    {
      title: "R.U.T",
      dataIndex: "rut",
      key: "2",
      className: "text-center",
    },
    {
      title: "Acciones",
      dataIndex: "acciones",
      key: "3",
      className: "text-center",
      render: (_, record) => {
        return <Acciones />;
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: null,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: null,
      }),
    };
  });

  return (
    <div className="ant-form ant-form-vertical ant-form-hide-required-mark bg-white m-4 shadow">
      <Table
        locale={{
          emptyText: (
            <Empty
              description={<div className="font-weight-bold">SIN DATOS</div>}
            />
          ),
        }}
        form={null}
        components={{
          body: {
            cell: null,
          },
        }}
        expandable={{
          expandedRowRender: (record, col, row, isExpand) => (
            <div>{record}</div>
          ),
        }}
        rowClassName="editable-row"
        loading={false}
        columns={mergedColumns}
        pagination={{ pageSize: 10, className: "p-4 float-right" }}
        dataSource={dataSource}
      />
    </div>
  );
};

export default Index;
