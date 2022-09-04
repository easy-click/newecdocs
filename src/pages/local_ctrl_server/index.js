import React from 'react';
import NavBar from '../../components/NavBar';
import styles from './index.module.scss';
import LayoutProviders from '@theme/LayoutProviders';
import Footer from '@theme/Footer';

export default function Index() {
  return (
    <LayoutProviders>
      {/* 导航栏 */}
      <NavBar/>
      <div id={styles.box_container}>
        <section className={`${styles.width} ${styles.outside_container}`}>
          {/* 标题 */}
          <div className={styles.title}>
            <h1 style={{textAlign: 'center'}}>企业版群控产品介绍</h1>
            <div style={{textAlign: 'center'}}>

              <a
                className={`${styles.btns} ${styles.enterprise}`}
                href='/docs/zh-cn/joinus'
              >
                试用购买请联系我们
              </a>
            </div>
          </div>
          {/* 分类 */}
          <div>
            待发布，敬请关注
          </div>
        </section>
        <Footer/>
      </div>
    </LayoutProviders>
  );
}
