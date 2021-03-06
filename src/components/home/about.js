import React from "react";
import { Row, Col } from "antd";

const items = [
  {
    key: "1",
    icon: <i className=" fa-solid fa-calendar"></i>,
    content:
      "96% клиентов, которые начинали с нами работать, продолжают с нами сотрудничать и сейчас. Мы всегда выслушиваем заказчика и можем адекватно подстраиваться под любые его пожелания.",
  },
  {
    key: "2",
    icon: <i className="fas fa-chart-pie"></i>,
    content:
      " Мы выполняем весь комплекс услуг, начиная от разработки логотипа, фирменного стиля, разработки сайта, мобильного приложения или мобильной версии сайта, заканчивая seo-продвижением проекта, а также поддержки и модернизации проекта, в течении длительного времени, за адекватные деньги.",
  },
  {
    key: "3",
    icon: <i className="fas fa-solid fa-laptop"></i>,
    content:
      "При разработке каждого проекта, мы выкладываемся на все 100%, часто тратя на проект заметно больше времени, чем заложено в смете. Каждый раз мы стараемся реализовать проект максимально хорошо, заметно выше ожиданий заказчика, т.к. понимаем, что каждый хорошо разработанный проект, повышает нашу репутацию и узнаваемость.",
  },
];

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>О нас</h2>
          <p>Здесь можно добавить более краткую информацию о компании</p>
        </div>
        <div className="contentHolder">
          <p>
            ICT Lab— это активно развивающаяся IT компания, которая
            предоставляет широкий спектр высококачественных продуктов, решений и
            сервисов в сфере информационных технологий. Основными направлениями
            нашей деятельности являются разработка интернет-проектов различного
            уровня сложности, создание систем автоматизации бизнеса и
            IT-консалтинг.
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map((item) => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;
