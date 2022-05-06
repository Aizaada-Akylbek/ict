import React, { useState } from "react";
import { Anchor, Drawer, Button } from "antd";

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i class="fas fa-solid fa-code"></i>
          <a href="http:www.google.com">ICT Lab</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#hero" title="Главная" />
            <Link href="#about" title="О нас" />
            <Link href="#feature" title="Наши услуги" />
            <Link href="#projects" title="Проекты" />
            <Link href="#contact" title="Оставить заявку" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer placement="right" onClose={onClose} visible={visible}>
            <Anchor targetOffset="65">
              <Link href="#hero" title="Главная" />
              <Link href="#about" title="О нас" />
              <Link href="#feature" title="Наши услуги" />
              <Link href="#projects" title="Проекты" />
              <Link href="#contact" title="Оставить заявку" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
