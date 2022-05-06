import React from "react";
import { Carousel, Button } from "antd";

const items = [
  {
    key: "1",
    title: "Быстрые решения для вашего бизнеса",
    content:
      "Разработка программного обеспечения для информационных и вычислительных систем",
  },
  {
    key: "2",
    title: "Разработка сайтов",
    content:
      "Разработка программного обеспечения для информационных и вычислительных услуг",
  }
];

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>
        {items.map((item) => {
          return (
            <div className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
      ,
    </div>
  );
}
export default AppHero;
