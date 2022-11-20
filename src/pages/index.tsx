import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import LayoutProviders from '@theme/LayoutProviders';
import 'animate.css';
import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import Swiper from '../components/Swiper';
import Cswiper from '../components/Cswiper';
import NavBar from '../components/NavBar';
import styles from './index.module.scss';
import AnnouncementBar from '@theme/AnnouncementBar';
import Footer from '@theme/Footer';
import {motion} from "framer-motion";
import {OverPack} from 'rc-scroll-anim';
import Texty from 'rc-texty';
import {useTrail, animated} from 'react-spring';
import Translate from '@docusaurus/Translate';
import {useLocation} from '@docusaurus/router';
import clsx from 'clsx';

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    const [mask_config, setMask_config] = useState(false);
    const [hover_img, setHover_Img] = useState(false);
    const [hoverImg, setHoverImg] = useState(false);
    const [open, setOpen] = useState('first');
    const LocalUrlEn = useLocation().pathname.includes('/en');

    const animatedTexts = useTrail(5, {
        from: {opacity: 0, transform: 'translateY(3em)'},
        to: {opacity: 1, transform: 'translateY(0)'},
        config: {
            mass: 3,
            friction: 45,
            tension: 460,
        },
    })
    const handleWhyRainbondFirst = useCallback(() => {
        setOpen('first');
    }, []);
    const handleWhyRainbondSecond = useCallback(() => {
        setOpen('second');
    }, []);
    const handleWhyRainbondThird = useCallback(() => {
        setOpen('third');
    }, []);
    const handleWhyRainbondFourth = useCallback(() => {
        setOpen('fourth');
    }, []);

    return (
        <LayoutProviders>
            <Head>
                <title>{siteConfig.title}</title>
                <meta property='og:title' content={siteConfig.title}/>
                <link rel='icon' href={siteConfig.favicon} type='image/x-icon'/>
            </Head>
            {/* 导航栏 */}
            <AnnouncementBar/>
            <NavBar/>
            {/* 主体区域 */}
            <div>
                {/* 第一屏 */}
                <section id={styles.section_first} className={styles.width}>
                    <div className={styles.rainbond_desc}>
                        <animated.h2
                            className={clsx({
                                [styles.rainbond_title]: !LocalUrlEn,
                                [styles.rainbond_title_en]: LocalUrlEn,
                            })}
                            style={animatedTexts[0]}
                        >
                            手机自动化脚本专家
                            <br/>
                            专业游戏、营销自动化解决方案
                        </animated.h2>
                        <animated.div style={animatedTexts[0]} className={styles.rainbond_description}>
                                易点新媒旗下EasyClick自动化产品,
                                安卓&iOS&PC&Web自动化脚本，自动化测试专业工具，支持多个平台快速构建自动化测试脚本.
                                新媒体云控专业营销平台，多端控制设备，实时远程投屏控制.
                        </animated.div>
                        <animated.div style={animatedTexts[1]} className={styles.btnBox}>
                            <a
                                className={styles.btns}
                                href='docs/'
                                style={{marginRight: '16px'}}
                            >
                                开始安卓开发
                            </a>
                            {/* <a
                className={`${styles.btns} animate__animated animate__fadeInDown`}
                href='http://demo.c9f961.grapps.cn/'
                target='_blank'
                onClick={handleJumpDemo}
              >
                在线体验
              </a>} */}
                            {<a
                                className={styles.right_btns}
                                href='iosdocs/'
                            >
                                开始iOS开发
                            </a>}
                        </animated.div>
                    </div>
                    <animated.div
                        className={styles.know_rainbond_video}
                        style={animatedTexts[1]}
                    >
                        <div
                            className={clsx('mask_video', styles.know_rainbond_video_div)}
                        >
                            <img src='/img/video/sss.jpg' alt=''
                                 className={styles.know_rainbond_video_div_img}/>
                        </div>
                    </animated.div>
                </section>
                {/* 第二屏 */}
                {/*<section id={styles.section_second} className={styles.width}>*/}
                {/*    <animated.div*/}
                {/*        className={styles.community_case}*/}
                {/*        style={animatedTexts[1]}*/}
                {/*    >*/}
                {/*        <div className={styles.img_container}>*/}
                {/*            <a href='#' style={{cursor: 'default'}}>*/}
                {/*                <img src='/img/users/boe.png' alt=''/>*/}
                {/*            </a>*/}
                {/*        </div>*/}
                {/*        <div className={styles.img_container} style={{width: '160px'}}>*/}
                {/*            <a href='#' style={{cursor: 'default'}}>*/}
                {/*                <img src='/img/users/mky.png' alt=''/>*/}
                {/*            </a>*/}
                {/*        </div>*/}
                {/*        <div className={styles.img_container}>*/}
                {/*            <a href='#' style={{cursor: 'default'}}>*/}
                {/*                <img src='/img/users/zhx.jpeg' alt=''/>*/}
                {/*            </a>*/}
                {/*        </div>*/}
                {/*        <div className={styles.img_container}>*/}
                {/*            <a href='#' style={{cursor: 'default'}}>*/}
                {/*                <img src='/img/users/lvzhiyun.png' alt=''/>*/}
                {/*            </a>*/}
                {/*        </div>*/}
                {/*        <div className={styles.img_container} style={{width: '150px'}}>*/}
                {/*            <a href='#' style={{cursor: 'default'}}>*/}
                {/*                <img src='/img/users/lyyl.png' alt=''/>*/}
                {/*            </a>*/}
                {/*        </div>*/}
                {/*        <div className={styles.img_container}>*/}
                {/*            <a href='#' style={{cursor: 'default'}}>*/}
                {/*                <img src='/img/users/zggk.jpg' alt=''/>*/}
                {/*            </a>*/}
                {/*        </div>*/}
                {/*        <div className={styles.img_container}>*/}
                {/*            <a href='#' style={{cursor: 'default'}}>*/}
                {/*                <img src='/img/users/bkrj.png' alt=''/>*/}
                {/*            </a>*/}
                {/*        </div>*/}
                {/*        <div className={styles.img_container} style={{width: '150px'}}>*/}
                {/*            <a href='#' style={{cursor: 'default'}}>*/}
                {/*                <img src='/img/users/xinanmingzu.png' alt=''/>*/}
                {/*            </a>*/}
                {/*        </div>*/}
                {/*    </animated.div>*/}
                {/*</section>*/}
                {/* 为什么选择Rainbond */}
                <OverPack style={{overflow: 'hidden'}} playScale={0.15}>
                    <section id={styles.section_why_rainbond} className={styles.width}>
                        <h1 className={styles.dosc_logo}>
                        </h1>
                        <h1
                            style={{
                                textAlign: 'center',
                                marginBottom: '70px',
                                position: 'relative'
                            }}>
                            为什么选择
                            <span className={styles.how_rainbond}>
                               EasyClick ？
                            </span>
                        </h1>
                        <div className={styles.how_rainbond_desc_container} key="why_rainbond_desc">
                            <div className={styles.how_rainbond_btn}>
                                <motion.button
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                    className={
                                        (open === 'first' && styles.active_btn) || styles.default_btn
                                    }
                                    onClick={handleWhyRainbondFirst}
                                >
                                        使用简单
                                </motion.button>
                                <motion.button
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                    className={
                                        (open === 'second' && styles.active_btn) || styles.default_btn
                                    }
                                    onClick={handleWhyRainbondSecond}
                                >
                                        开发智能
                                </motion.button>
                                <motion.button
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                    className={
                                        (open === 'third' && styles.active_btn) || styles.default_btn
                                    }
                                    onClick={handleWhyRainbondThird}
                                >
                                        多端兼容
                                </motion.button>
                                {/* <button
                className={
                  (open === 'fourth' && styles.active_btn) || styles.default_btn
                }
                onClick={handleWhyRainbondFourth}
              >
                开源社区支持
              </button> */}
                            </div>
                            {open === 'first' && (
                                <div className={styles.how_rainbond_desc}>
                                    <div>
                                        <img src='/img/pass.svg' alt=''/>
                                        <span>&nbsp;&nbsp;
                                                安装IDEA插件即可体验
                  </span>
                                    </div>
                                    <div>
                                        <img src='/img/pass.svg' alt=''/>
                                        <span>&nbsp;&nbsp;
                                            兼顾 “简单易用” 和 “功能强大”
                  </span>
                                    </div>
                                    <div>
                                        <img src='/img/pass.svg' alt=''/>
                                        <span>&nbsp;&nbsp;
                                                自带模板功能，多模板兼顾
                  </span>
                                    </div>
                                    <div>
                                        <img src='/img/pass.svg' alt=''/>
                                        <span>&nbsp;&nbsp;
                                            “以自动化为中心”的设计理念
                  </span>
                                    </div>
                                </div>
                            )}
                            {open === 'second' && (
                                <div className={styles.how_rainbond_desc}>
                                    <div>
                                        <img src='/img/pass.svg' alt=''/>
                                        <span>&nbsp;&nbsp;
                                            优秀的代码提示功能
                  </span>
                                    </div>
                                    <div>
                                        <img src='/img/pass.svg' alt=''/>
                                        <span>&nbsp;&nbsp;
                                                智能的代码纠错能力
                  </span>
                                    </div>
                                    <div>
                                        <img src='/img/pass.svg' alt=''/>
                                        <span>&nbsp;&nbsp;
                                            完备的日志调试
                  </span>
                                    </div>
                                    <div>
                                        <img src='/img/pass.svg' alt=''/>
                                        <span>&nbsp;&nbsp;
                                           完善的打包定制功能
                  </span>
                                    </div>
                                </div>
                            )}
                            {open === 'third' && (
                                <div className={styles.how_rainbond_desc}>
                                    <div>
                                        <img src='/img/pass.svg' alt=''/>
                                        <span>&nbsp;&nbsp;
                                            安卓、iOS多端支持
                  </span>
                                    </div>
                                    <div>
                                        <img src='/img/pass.svg' alt=''/>
                                        <span>&nbsp;&nbsp;
                                            H5、原生UI支持
                  </span>
                                    </div>
                                    <div>
                                        <img src='/img/pass.svg' alt=''/>
                                        <span>&nbsp;&nbsp;
                                            开发工具多端支持
                  </span>
                                    </div>
                                    <div>
                                        <img src='/img/pass.svg' alt=''/>
                                        <span>&nbsp;&nbsp;
                                          js java 互相操作支持
                  </span>
                                    </div>
                                </div>
                            )}

                            {/* {open === 'fourth' && (
              <div className={styles.how_rainbond_desc}>
                <div>
                  <img src='/img/pass.svg' alt='' />
                  <span>用户无需学习KubernetesFourth</span>
                </div>
                <div>
                  <img src='/img/pass.svg' alt='' />
                  <span>用户无需学习KubernetesFourth</span>
                </div>
                <div>
                  <img src='/img/pass.svg' alt='' />
                  <span>用户无需学习KubernetesFourth</span>
                </div>
                <div>
                  <img src='/img/pass.svg' alt='' />
                  <span>用户无需学习KubernetesFourth</span>
                </div>
              </div>
            )}*/}
                            <motion.button
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                className={`${styles.how_rainbond_desc_container_start} ${styles.active_btn}`}
                            >
                                <a href='/docs/'>
                                   开始安卓开发
                                    &nbsp; {'>'}
                                </a>
                            </motion.button>
                        </div>
                    </section>
                </OverPack>
                {/* 第四屏 */}
                <section className={styles.fouthBg}>
                    <div id={styles.section_fouth} className={styles.width}>
                        <h1 className={styles.dosc_logo}>
                            <img src='/img/smallimages/RainbondStudy.png' alt=''/>
                        </h1>
                        <h1
                            style={{
                                textAlign: 'center',
                                marginBottom: '56px',
                                position: 'relative'
                            }}
                        >
                            观看视频学习 &nbsp;
                            <span className={styles.how_rainbond}>EasyClick</span>
                        </h1>
                        <Cswiper/>
                        <Swiper/>
                    </div>
                </section>
                {/* 第三屏 */}
                <section className={styles.third}>
                    <div id={styles.section_third} className={styles.width}>
                        <h1 className={styles.dosc_logo}>
                            <img src='/img/smallimages/RainbondDoWhat.png' alt=''/>
                        </h1>
                        <h1
                            style={{
                                textAlign: 'center',
                                marginBottom: '56px',
                                position: 'relative'
                            }}
                        >
                            <span className={styles.how_rainbond}>EasyClick</span>
                            &nbsp;
                            有哪些能力?
                        </h1>

                        <div
                            className={`${styles.docs} docs_container`}
                        >
                            <a href='/docs' style={{position: 'relative'}}>
                                <div className={styles.left_logo}>
                                    {/* <img src='/img/cursor.svg' /> */}
                                    详情
                                </div>
                                <div className={styles.desc}>
                                    <div className={styles.desc_title}>
                                        <h4>
                                            {/* <a href='usescene/IntegrationDev'>一体化开发测试环境</a> */}
                                                一体化安卓开发环境
                                        </h4>
                                    </div>
                                    <div className={styles.desc_detail}>
                                        <p>
                                                集成化的安卓免root脚本开发和测试环境，提供开箱即用的体验
                                        </p>
                                    </div>
                                    {/* <i className={styles.angle}></i> */}
                                </div>
                            </a>
                            <a href='/iosdocs' style={{position: 'relative'}}>
                                <div className={styles.left_logo}>
                                    {/* <img src='/img/cursor.svg' /> */}
                                    详情
                                </div>
                                <div className={styles.desc}>
                                    <div className={styles.desc_title}>
                                        <h4>
                                            {/* <a href='usescene/AppManagement'>企业级应用统一管理</a> */}
                                                一体化iOS开发环境
                                        </h4>
                                    </div>
                                    <div className={styles.desc_detail}>
                                        <p>
                                              集成iOS免越狱开发环境和中控功能
                                        </p>
                                    </div>
                                </div>
                                {/* <i className={styles.angle}></i> */}
                            </a>
                            <a href='/docs/zh-cn/funcs/global/selector-node' style={{position: 'relative'}}>
                                <div className={styles.left_logo}>
                                    {/* <img src='/img/cursor.svg' /> */}
                                    详情
                                </div>
                                <div className={styles.desc}>
                                    <div className={styles.desc_title}>
                                        <h4>
                                            {/* <a href='usescene/MultiCloudManagement'>应用级多云管理</a> */}
                                            节点查找功能
                                        </h4>
                                    </div>
                                    <div className={styles.desc_detail}>
                                        <p>
                                          支持安卓和iOS双端的节点查找，自动化测试更丝滑
                                        </p>
                                    </div>
                                </div>
                                {/* <i className={styles.angle}></i> */}
                            </a>
                            <a href='/docs/zh-cn/funcs/image-api' style={{position: 'relative'}}>
                                <div className={styles.left_logo}>
                                    {/* <img src='/img/cursor.svg' /> */}
                                   详情
                                </div>
                                <div className={styles.desc}>
                                    <div className={styles.desc_title}>
                                        <h4>
                                            {/* <a href='usescene/offlineDelivery'>离线环境软件交付</a> */}
                                            图色OCR功能
                                        </h4>
                                    </div>
                                    <div className={styles.desc_detail}>
                                        <p>
                                          集成opencv，paddleocr，orclite等，支持找图、找色、ocr多重模式
                                        </p>
                                    </div>
                                </div>
                                {/* <i className={styles.angle}></i> */}
                            </a>
                            <a href='/docs/zh-cn/funcs/ui/' style={{position: 'relative'}}>
                                <div className={styles.left_logo}>
                                    {/* <img src='/img/cursor.svg' /> */}
                                    详情
                                </div>
                                <div className={styles.desc}>
                                    <div className={styles.desc_title}>
                                        <h4>
                                            {/* <a href='usescene/componentReuse'>业务积木式拼装</a> */}
                                          多模板支持
                                        </h4>
                                    </div>
                                    <div className={styles.desc_detail}>
                                        <p>
                                           支持HTML5,原生的UI，多模板融合，UI视觉效果更好
                                        </p>
                                    </div>
                                </div>
                                {/* <i className={styles.angle}></i> */}
                            </a>
                            <a href='/docs/zh-cn/ecloud2/intro' style={{position: 'relative'}}>
                                <div className={styles.left_logo}>
                                    {/* <img src='/img/cursor.svg' /> */}
                                    详情
                                </div>
                                <div className={styles.desc}>
                                    <div className={styles.desc_title}>
                                        <h4>
                                            {/* <a href='usescene/x86ToArm'>国产化和信创支撑</a> */}
                                          原生云控支持
                                        </h4>
                                    </div>
                                    <div className={styles.desc_detail}>
                                        <p>
                                          自带原生云控，无缝支持，随时下发任务，投屏操作
                                        </p>
                                    </div>
                                </div>
                                {/* <i className={styles.angle}></i> */}
                            </a>
                        </div>
                    </div>
                </section>

            </div>
            {/* 底部 */}
            <footer className={`${styles.footer_container} `}>
                <h1>参与其中</h1>
                <div className={`${styles.join_type} ${styles.width}`}>
                    <a href='/docs/zh-cn/joinus' target='_blank'>
                        <div className={styles.join_logo}>
                        </div>
                        <div className={styles.join_detali}>
                            <h4 style={{fontSize: '20px'}}>
                               社区
                            </h4>
                            <p>
                                加入我们的QQ群，一起交流学习技术
                            </p>
                        </div>
                    </a>
                    <a href='#' target='_blank'>
                        <div className={styles.join_logo}>
                        </div>
                        <div className={styles.join_detali}>
                            <h4 style={{fontSize: '20px'}}>
                                客服
                            </h4>
                            <p>
                               客服QQ: 2050858539
                            </p>
                        </div>
                    </a>
                    <a href='/community/support'>
                        <div className={styles.join_logo}>
                        </div>
                        <div className={styles.join_detali}>
                            <h4 style={{fontSize: '20px'}}>
                                贡献
                            </h4>
                            <p>
                             欢迎参与贡献,你可以提出Issues和解决Issues开始
                            </p>
                        </div>
                    </a>
                </div>
            </footer>
            <Footer/>
            {/* 遮罩层 */}
            {mask_config && (
                <div
                    className={styles.mask_div}
                    onClick={() => {
                        setMask_config(false);
                    }}
                >
                </div>
            )}
        </LayoutProviders>
    );
}
