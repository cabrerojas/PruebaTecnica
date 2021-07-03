import React, { useState } from "react";
import { Form, Button, Col, Row, Input, Select, DatePicker, Radio } from "antd";
import { Link } from "react-router-dom";

const Alta = ({ valuesFormValidates, loadingOnClick }) => {
  const { Option } = Select;
  const { Item } = Form;
  const { TextArea } = Input;
  
  return (
    <Form
      layout="vertical"
      hideRequiredMark
      className="p-5 m-3 bg-white"
      onFinish={valuesFormValidates}
    >
      <div className="row">
        <Col xl={12} sm={24}>
          <Item
            name="run"
            label="R.U.N.:"
            rules={[
              { required: true, message: "El campo R.U.N. es requerido" },
            ]}
          >
            <Input placeholder="11.111.111-1" />
          </Item>
        </Col>
        <Col xl={12} sm={24}>
          <Item
            name="nombre"
            label="Nombre"
            rules={[
              {
                required: true,
                message: "Debe ingresar su Nombre",
              },
            ]}
          >
            <Input placeholder="Nombres" />
          </Item>
        </Col>
      </div>
      <div className="row">
        <Col xl={12} sm={24}>
          <Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Debe ingresar un email valido",
              },
            ]}
          >
            <Input placeholder="correo@correo.cl" />
          </Item>
        </Col>
        <Col xl={12} sm={24}>
          <Item
            name="fechanacimiento"
            label="Fecha nacimiento"
            rules={[
              {
                required: true,
                message: "Por favor seleccione la fecha de nacimiento",
              },
            ]}
          >
            <DatePicker className="col-12" onChange={null} />
          </Item>
        </Col>
      </div>
      <div className="row">
        <Col xl={12} sm={24}>
          <Item
            name="sexo"
            label="Sexo"
            rules={[{ required: true, message: "Debe seleccionar un Sexo" }]}
          >
            <Radio.Group onChange={null} value={null}>
              <Radio value={0}>Femenino</Radio>
              <Radio value={1}>Masculino</Radio>
            </Radio.Group>
          </Item>
        </Col>
      </div>
      <div className="row">
        <Col xl={8} sm={24}>
          <Item
            name="region"
            label="Region"
            rules={[
              {
                required: true,
                message: "Por favor seleccione una region",
              },
            ]}
          >
            <Select placeholder="Seleccione">
              <Option value="A">A</Option>
              <Option value="B">B</Option>
            </Select>
          </Item>
        </Col>
        <Col xl={8} sm={24}>
          <Item
            name="ciudad"
            label="Ciudad"
            rules={[
              {
                required: true,
                message: "Por favor seleccione una Ciudad",
              },
            ]}
          >
            <Select placeholder="Seleccione">
              <Option value="A">e</Option>
              <Option value="B">f</Option>
            </Select>
          </Item>
        </Col>
        <Col xl={8} sm={24}>
          <Item
            name="comuna"
            label="Comuna"
            rules={[
              {
                required: true,
                message: "Por favor seleccione una comuna",
              },
            ]}
          >
            <Select placeholder="Seleccione">
              <Option value="A">C</Option>
              <Option value="B">D</Option>
            </Select>
          </Item>
        </Col>
      </div>
      <div className="row">
        <Col xl={12} sm={24}>
          <Item
            name="direccion"
            label="Direccion"
            rules={[
              { required: true, message: "El campo direccion es requerido" },
            ]}
          >
            <Input placeholder="Direccion" />
          </Item>
        </Col>
        <Col xl={12} sm={24}>
          <Item
            name="telefono"
            label="Telefono"
            rules={[
              {
                required: true,
                message: "Debe ingresar un Telefono",
              },
            ]}
          >
            <Input placeholder="Telefono" />
          </Item>
        </Col>
      </div>
      <div className="row">
        <Col span={24}>
          <Item
            name="observacion"
            rules={[
              {
                required: true,
                message: "Por favor ingrese una Observaciones",
              },
            ]}
          >
            <TextArea rows={4} placeholder="Observaciones" />
          </Item>
        </Col>
      </div>
      <Row>
        <Link style={{ textDecoration: "none" }} to="/listado-personas">
          <Button type="dashed" className="m-2">
            Volver
          </Button>
        </Link>
        <Button
          type="primary"
          htmlType="submit"
          className="m-2"
          loading={loadingOnClick}
        >
          Guardar
        </Button>
      </Row>
    </Form>
  );
};

export default Alta;
