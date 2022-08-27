import Translate from '@docusaurus/Translate';
import React, {useEffect, useState} from 'react';
import styles from './index.module.scss';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import LocaleDropdownNavbarItem from '@site/src/theme/NavbarItem/LocaleDropdownNavbarItem';

export default function Index(props) {
  // 菜单开关
  const [menu_Config, setMenu_Config] = useState(true);
  const [menu_Config_Drop, setMenu_Config_Drop] = useState(false);
  // useEffect(() => {
  //   // 注册页面滚动事件
  //   window.addEventListener('scroll', handleScrollPage);
  //   return () => {
  //     window.removeEventListener('scroll', handleScrollPage);
  //   };
  // }, []);
  //   头部NavBar滚动
  // const handleScrollPage = () => {
  //   let scrollTop = document.documentElement.scrollTop;
  //   const nav_scroll = document.querySelector('.mdHeader'); //导航栏
  //   // 头部tab
  //   if (scrollTop > 0) {
  //     nav_scroll.classList.add('nav_scroll_bar');
  //   } else {
  //     nav_scroll.classList.remove('nav_scroll_bar');
  //   }
  // };
  return (
    <div>
      <header className={`${styles.mdHeader}`}>
        {/* 导航栏 */}
        <nav className={`${styles.nav_bar} ${styles.width}`}>
          {/* 左侧logo */}
          <a href='/'>
            <h2>EasyClick - 自动化脚本专家</h2>
          </a>
          {/* 右侧列表 */}
          <div className={styles.nav_container}>
            <ul className={styles.nav_lists}>
              <li>
                <a href='/enterprise_server'>
                  <Translate id='navbar.enterprise'>企业版云控</Translate>
                </a>
              </li>
              <li>
                <a href='/enterprise_server'>
                  <Translate id='navbar.enterprise'>企业版群控</Translate>
                </a>
              </li>
              <li>
                <div className="dropdown dropdown--hoverable">
                  <Translate id='navbar.learn'>自动化产品</Translate>
                  <img className={styles.iconDropDown}
                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABUUlEQVRoge3Wr0tdcRzH4WfeKcpwCCIMBAXBIlgWFpYMppUVLUs2i9F/4SbXtrBmsmhZWVpYWrhhRVgZCBMGggiiyIZjTsO9XyZ3XO65P86P8HngE88571c7hBBCCCGEEEIYujpuK371rDE7FRjb6d5kjYAHeFeB0e23i5FeQrQe2KvA+HQHqPUakdSwX4GI9xjtNyIZw4cSIz5ifNCIZAKfSoj4jEfDikgeo1FgRAOTw45IpvClgIhDTOcVkczga44R3/Ak74hkFkc5RBxjvqiIZA7fBxx+/35godCCexZx0mVgljvFUsHb/7OMM/1HnONp4as7eIZLvUdctJ6tlOe4kj3iJ1ZKWZrBKn7pHnGNFyVtzOwlfusc8Qfrpa3r0Zrm4PaIG7wqcVdfNjSHp4i/2Cx10QC2/AvZzvNDD/N8Od5q/jXD65y/FUIIIYRQNXfPaMyAru8lkAAAAABJRU5ErkJggg=="/>
                  <ul className="dropdown__menu">
                    <li>
                      <a className={`${styles.DropDownFont} dropdown__link`} href="/usescene"><Translate
                        id='navbar.usescene'>易点云测安卓版</Translate></a>
                    </li>
                    <li>
                      <a className={`${styles.DropDownFont} dropdown__link`} href="/case"><Translate
                        id='navbar.case'>易点云测iOS版</Translate></a>
                    </li>

                  </ul>
                </div>
              </li>
              <li>
                <a href='/docs/'>
                  <Translate id='navbar.doc'>安卓文档</Translate>
                </a>
              </li>
              <li>
                <a href='/iosdocs/'>
                  <Translate id='navbar.doc'>iOS文档</Translate>
                </a>
              </li>

              {/* <li>
                <NavbarColorModeToggle/>
              </li> */}
              <li>
                <a className={`button button--primary ${styles.buttonQuick}`} href="/docs/">
                  <Translate id='navbar.quickstart'>快速开始</Translate></a>
              </li>
              <LocaleDropdownNavbarItem dropdownItemsBefore={[]} dropdownItemsAfter={[]} items={[]}/>
            </ul>
          </div>
          {/* 移动端导航栏 */}
          <div
            className={styles.isMobieNav}
            style={{display: 'none'}}
            onClick={() => {
              setMenu_Config(!menu_Config);
              setMenu_Config_Drop(!menu_Config_Drop);
            }}
          >
            {(menu_Config && <img src='/img/menu.svg' alt=''/>) || (
              <img src='/img/close.svg' alt=''/>
            )}
          </div>
        </nav>
      </header>
      {menu_Config_Drop && (
        <div className={styles.isMobieNavBar}>
          <ul className={styles.mobile_nav_lists}>
            <li>
              <a href='/enterprise_server'>
                <Translate>产品1</Translate>
              </a>
            </li>
            <li>
              <div className="dropdown dropdown--hoverable">
                <Translate>产品22</Translate>
                <img className={styles.iconDropDown}
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABUUlEQVRoge3Wr0tdcRzH4WfeKcpwCCIMBAXBIlgWFpYMppUVLUs2i9F/4SbXtrBmsmhZWVpYWrhhRVgZCBMGggiiyIZjTsO9XyZ3XO65P86P8HngE88571c7hBBCCCGEEEIYujpuK371rDE7FRjb6d5kjYAHeFeB0e23i5FeQrQe2KvA+HQHqPUakdSwX4GI9xjtNyIZw4cSIz5ifNCIZAKfSoj4jEfDikgeo1FgRAOTw45IpvClgIhDTOcVkczga44R3/Ak74hkFkc5RBxjvqiIZA7fBxx+/35godCCexZx0mVgljvFUsHb/7OMM/1HnONp4as7eIZLvUdctJ6tlOe4kj3iJ1ZKWZrBKn7pHnGNFyVtzOwlfusc8Qfrpa3r0Zrm4PaIG7wqcVdfNjSHp4i/2Cx10QC2/AvZzvNDD/N8Od5q/jXD65y/FUIIIYRQNXfPaMyAru8lkAAAAABJRU5ErkJggg=="/>
                <ul className="dropdown__menu">
                  <li>
                    <a className={`${styles.DropDownFont} dropdown__link`} href="/usescene">易点云测安卓版本</a>
                  </li>
                  <li>
                    <a className={`${styles.DropDownFont} dropdown__link`} href="/case">易点云测iOS版本</a>
                  </li>
                  <li>
                    <a className={`${styles.DropDownFont} dropdown__link`} href="/blog">易点云控</a>
                  </li>
                  <li>
                    <a className={`${styles.DropDownFont} dropdown__link`} href="/blog">易点群控</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href='/docs/'>
                <Translate id='navbar.doc'>文档</Translate>
              </a>
            </li>

          </ul>
        </div>
      )}
    </div>
  );
}
