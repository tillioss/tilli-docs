import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import TilliLogo from '../pages/images/download.png';
import Information1 from '../pages/images/Information1.png';
import Information2 from '../pages/images/Information2.png';
import Information3 from '../pages/images/Information3.png';
import Information4 from '../pages/images/Information4.png';
import Introduction from '../pages/images/Introduction.png';
import Introduction2 from '../pages/images/Introduction2.png';
import Introduction3 from '../pages/images/Introduction3.png';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('', styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <p style={{ textAlign: "center" }}>
          <img loading="lazy" src={Introduction} alt="Introduction" title="Introduction" class="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module" />
        </p>
        <p style={{ textAlign: "center" }}>
          <img loading="lazy" src={Introduction2} alt="Introduction2" title="Introduction2" class="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module" />
        </p>
        <p style={{ textAlign: "center" }}>
          <img loading="lazy" src={Introduction3} alt="Introduction3" title="Introduction3" class="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module" />
        </p>
        <p style={{ textAlign: "center" }}>
          <img loading="lazy" src={Information1} alt="Information1" title="Information1" class="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module" />
        </p>
        <div style={{textAlign: "center"}}>
        <button className={styles.Buttonclass} type="button" style={{backgroundColor: '#FAD202'}} ><a href="https://tilli.teqbahn.com/tilli-web" target="_blank"><h1>     Play     </h1></a></button>
        </div>

        <p style={{ textAlign: "center" }}>
          <img loading="lazy" src={Information2} alt="Information2" title="Information2" class="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module" />
        </p>
        <div style={{textAlign: "center"}}>
        <button className={styles.Buttonclass} type="button" style={{backgroundColor: '#FAD202'}}><a href="https://github.com/tillioss/tilli-ide" target="_blank"><h1>   IDE     </h1></a></button>
        <button className={styles.Buttonclass} type="button" style={{backgroundColor: '#FAD202'}}><a href="https://github.com/tillioss/Godot-Strategies-V1" target="_blank"><h1>    Tilli x Godot     </h1></a></button>
        </div>
        <p style={{ textAlign: "center" }}>
          <img loading="lazy" src={Information3} alt="Information3" title="Information3" class="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module" />
        </p>
        <div style={{textAlign: "center"}}>
        <button className={styles.Buttonclass} type="button" style={{backgroundColor: '#FAD202'}} ><a href="https://tillioss.github.io/docs/project-charter/" target="_blank"><h1>Project Charter</h1></a></button>
        </div>
        <p style={{ textAlign: "center" }}>
          <img loading="lazy" src={Information4} alt="Information4" title="Information4" class="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module" />
        </p>
        <div style={{textAlign: "center" }}>
        <button className={styles.Buttonclass} type="button" style={{backgroundColor: '#FAD202'}} ><a href="https://github.com/tillioss" target="_blank"><h1> Github </h1></a></button>
        </div>
        <p style={{ textAlign: "center" }}>
          <img loading="lazy" src={TilliLogo} alt="Tilli Logo" title="tilli logo" class="img_node_modules-@docusaurus-theme-classic-lib-theme-MDXComponents-Img-styles-module" />
        </p>

      </main>
    </Layout>
  );
}
