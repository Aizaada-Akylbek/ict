import React from "react";
import { List } from "antd";

const projects = [
  {
    title: "Высшая аттестационная комиссия Кыргызской Республики",
    img: "http://ictlab.kg/img/portfolio/128_1.jpg",
    description:
      "Высшая аттестационная комиссия Кыргызской Республики является государственным коллегиальным научно-экспертным органом, подчиненным Правительству Кыргызской Республики, разрабатывающим и реализующим единую государственную политику и осуществляющим аттестацию научных и научно-педагогических кадров высшей квалификации, присуждение им ученых степеней, присвоение ученых званий.",
    link: "https://vak.kg",
  },
  {
    title:
      "Государственная служба регклирования и надзора за финансовы рынком при министерстве экономики и коммерции Кыргызской Республики",
    img: "http://ictlab.kg/img/portfolio/thesis-logo.png",
    description:
      " Госфиннадзор осуществляет свою деятельность во взаимодействии с государственными органами, органами местного самоуправления, общественными объединениями и иными юридическими лицами.",
    link: "http://fsa.gov.kg",
  },
  {
    title:
      "Государственное агенство по регулированию топливно-энергетического комплекса при Министерстве энергетики и промышленности Кыргызской Республики",
    img: "http://ictlab.kg/img/portfolio/app3.jpg",
    description:
      "Государственное агентство по регулированию топливно-энергетического комплекса при Правительстве Кыргызской Республики является уполномоченным государственным органом, осуществляющим государственное регулирование деятельности субъектов топливно-энергетического комплекса посредством лицензирования и установления тарифов на электрическую, тепловую энергию и природный газ.",
    link: "http://regultek.gov.kg/ru/",
  },
  {
    title: "Партнерство ТЕЗИС",
    img: "http://ictlab.kg/img/portfolio/web3-.jpg",
    description: "Партнерство ТЕЗИС",
    link: "link",
  },
  {
    title: "Мобильная разработка",
    img: "http://ictlab.kg/img/portfolio/web2.png",
    description: "Мобильная разработка",
    link: "link",
  },
];
function AppProject() {
  return (
    <div id="projects" className="projects" style={{ padding: 30 }}>
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Наши проекты</h2>
        </div>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={projects}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              extra={<img width={272} alt="logo" src={item.img} />}
            >
              <List.Item.Meta
                title={<a href={item.link}>{item.title}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default AppProject;
