import { Modal, Input, Button, Form, TimePicker } from "antd";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import React, { useState } from "react";

// Assuming you have some API call function like `CreateBranch`
import { CreateBranch, createLunch } from "../../service/userAction"; // import your API function
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
const Createbreakfast = NiceModal.create(({ id, setbutton, button }) => {
  const [form] = Form.useForm(); // Ant Design's form instance
  const modal = useModal();
  const onSubmit = async (values) => {
    console.log("Form data:", values);
    const obj = {
      mealName: values.mealName,
      mealId: id,
      time: "09:20:00",
    };

    console.log("obj=>", obj);
    const { data } = await createLunch(obj);
    console.log("data=>", data);
    setbutton(!button);
    modal.hide(); // Hide modal on success
  };

  return (
    <Modal
      title="Create Meal"
      visible={modal.visible}
      onCancel={() => modal.hide()}
      afterClose={() => modal.remove()}
      footer={null} // Disable footer for custom submission button
    >
      <Form form={form} onFinish={onSubmit} layout="vertical">
        <Form.Item
          label="Meal Name"
          name="mealName"
          rules={[{ required: true, message: "Meal Name is required" }]}
        >
          <Input placeholder="Meal Name" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
});

export default Createbreakfast;
