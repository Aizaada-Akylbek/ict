import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

const { TextArea } = Input;

function AppContactAlert() {
  return (
    <div className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>
            {" "}
            <i class="fas fa-solid fa-check"></i> Ваша заявка принята
          </h2>
          <p>
            В скором времени менеджер свяжется с Вами, спасибо за обращение!
          </p>
        </div>
      </div>
    </div>
  );
}

function AppContact() {
  const [showApproved, setShowApproved] = React.useState(false);
  const [formData, setFormData] = React.useState({
    username: null,
    email: null,
    subject: null,
    tel: null,
    message: null,
  });

  return (
    <>
      {showApproved ? (
        <AppContactAlert />
      ) : (
        <div id="contact" className="block contactBlock">
          <div className="container-fluid">
            <div className="titleHolder">
              <h2>Оставьте заявку</h2>
              <p>Заполните форму и мы обязательно свяжемся с Вами</p>
            </div>

            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="fullname"
                rules={[
                  { required: true, message: "Please input your Full Name!" },
                ]}
              >
                <Input
                  onChange={(e) => {
                    setFormData({ ...formData, username: e.target.value });
                  }}
                  placeholder="Full Name"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  type="email"
                  placeholder="Email address"
                />
              </Form.Item>
              <Form.Item
                name="subject"
                rules={[
                  { required: true, message: "Please input the subject!" },
                ]}
              >
                <Input
                  onChange={(e) => {
                    setFormData({ ...formData, username: e.target.value });
                  }}
                  placeholder="Subject"
                />
              </Form.Item>
              <Form.Item name="telephone">
                <Input
                  onChange={(e) => {
                    setFormData({ ...formData, username: e.target.value });
                  }}
                  placeholder="Telephone"
                />
              </Form.Item>
              <Form.Item name="message">
                <TextArea
                  onChange={(e) => {
                    setFormData({ ...formData, username: e.target.value });
                  }}
                  placeholder="Message"
                />
              </Form.Item>

              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("Should accept agreement")),
                  },
                ]}
              >
                <Checkbox>Я принимаю условия</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  disabled={!formData.username || !formData.email}
                  onClick={() => {
                    console.log(formData);
                    setShowApproved(true);
                  }}
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}
    </>
  );
}

export default AppContact;
