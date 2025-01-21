import { Modal, Input, Button, Form } from "antd";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import React, { useState } from "react";

// Assuming you have some API call function like `CreateBranch`
import { CreateBranch } from "../../service/userAction"; // import your API function

const CreateMeal = NiceModal.create(({ id, setbutton }) => {
  const [form] = Form.useForm(); // Ant Design's form instance
  const modal = useModal();
  const onSubmit = async (values) => {
    console.log("Form data:", values);
    console.log(id);

    const obj = {
      mealName: values.mealName,
      mealType: values.mealType,
      totalPeopleMeal: values.totalPeopleMeal,
      branchId: id, // Assuming you have an `id` variable somewhere
    };
    console.log("API response data:", obj);

    // Make the API call here
    const { data } = await CreateBranch(obj);
    console.log("data=>", data);
    setbutton(true);
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

        <Form.Item
          label="Meal Type"
          name="mealType"
          rules={[{ required: true, message: "Meal Type is required" }]}
        >
          <Input placeholder="Meal Type" />
        </Form.Item>

        <Form.Item
          label="Total People for Meal"
          name="totalPeopleMeal"
          rules={[
            { required: true, message: "Total People for Meal is required" },
            {
              pattern: /^[0-9]+$/,
              message: "Please enter a valid number",
            },
          ]}
        >
          <Input placeholder="Total People for Meal" />
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

export default CreateMeal;
