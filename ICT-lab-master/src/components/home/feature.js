import React from "react";
import { Row, Col } from "antd";
import imageLogo from "../../assets/images/advanced-option.jpg";
import imageModernDesign from "../../assets/images/modern-design.jpg";
import imageUnlimited from "../../assets/images/unlimited-features.jpg";
import imageEasy from "../../assets/images/easy-customise.jpg";
import imageSupport from "../../assets/images/great-support.jpg";

import { Card } from "antd";
const { Meta } = Card;

function AppFeature() {
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Наши услуги</h2>
          <p> Мы предоставляем услуги по следующим направлениям:</p>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Разработка сайтов " src={imageLogo} />}
            >
              <Meta title="Разработка сайтов" />
              <p>
                {" "}
                Разработка программного обеспечения для информационных и
                вычислительных систем
              </p>
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Дизайн" src={imageModernDesign} />}
            >
              <Meta title="Дизайн" />
              <p>
                Дизайн: веб-сайты, печатные рекламы, логотипы, визитки, макеты,
                шаблоны отчетов и др.
              </p>
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Управление качеством" src={imageSupport} />}
              // cover={<i class="fa-solid fa-laptop-mobile"></i>}
            >
              <Meta title="Управление качеством " />
              <p>
                ИТ аудит - диагностика и оценка состояния информационных систем
                Информационная безопасность
              </p>
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Управление проектами" src={imageUnlimited} />}
            >
              <Meta title="Управление проектами" />
              <p>
                Установка и настройка автоматизированных систем(Офисные
                приложения и другие лицензионные программы)
              </p>
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Бизнес-аналитика" src={imageEasy} />}
            >
              <Meta title="Бизнес-аналитика" />
              <p>
                Системное и сетовое администрирование комплексных оборудований и
                приложений, а также сетей и телекомуникаций
              </p>
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Интернет-маркетинг" src={imageEasy} />}
            >
              <Meta title="Интернет-маркетинг" />
              <p>
                Консультационные услуги по разработке Технических заданий и
                документаций, а также обучение
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default AppFeature;
