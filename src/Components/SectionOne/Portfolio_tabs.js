import React, { useEffect, useState } from 'react'


import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function Portfolio_tabs() {
  return (
    <Tabs>
      <TabList className="portfolio_tab">
        <Tab>All</Tab>
        <Tab>NFT</Tab>
        <Tab>Healthcare</Tab>
        <Tab>Blockchain</Tab>
        <Tab>Agriculture</Tab>
        <Tab>Real-State</Tab>
        <Tab>Education</Tab>
        <Tab>Insurance</Tab>
        <Tab>Travell</Tab>
      </TabList>
      <TabPanel>
        <div className='tab_content'>
          <div className='tab_template'>
            <div className='top-cont'>
              <div><img src="../images/NFT-icon-orange.svg" alt="svg" className='img-img' />
                <div className='over-color'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
                <div className='over-color-1'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
              </div>
              <div className='tab_wrapper'>
                <h3>NFT Marketplace for creators</h3>
                <p>NFT I Blockchain</p>
                <div class="projects-tile-desc">
                  <p>
                    А revolutionary NFT platform where creators can transform their works into unique, non-fungible assets and trade these via blockchain.                                        </p>
                </div>
              </div>
            </div>
            <div className='temp_img'>
              <img src="../images/cybersecurity.png" alt="svg" className='tem-bg' />
              <img src="../images/cybersecurity.png" alt="svg" className='tem-above' />
            </div>
          </div>

          <div className='tab_template'>
            <div className='top-cont'>
              <div><img src="../images/NFT-icon-orange-1.svg" alt="svg" className='img-img' />
                <div className='over-color'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
                <div className='over-color-1'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
              </div>
              <div className='tab_wrapper'>
                <h3>HEALTHCARE Marketplace for creators</h3>
                <p>HEALTHCARE I Blockchain</p>
                <div class="projects-tile-desc">
                  <p>
                    А revolutionary HEALTHCARE platform where creators can transform their works into unique.                                        </p>
                </div>
              </div>
            </div>
            <div className='temp_img'>
              <img src="../images/health-web.png" alt="svg" className='tem-bg' />
              <img src="../images/health-web.png" alt="svg" className='tem-above' />
            </div>

          </div>

          <div className='tab_template'>
            <div className='top-cont'>
              <div><img src="../images/NFT-icon-orange-2.svg" alt="svg" className='img-img' />
                <div className='over-color'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
                <div className='over-color-1'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
              </div>
              <div className='tab_wrapper'>
                <h3>Agriculture Marketplace for creators</h3>
                <p>Agriculture I Blockchain</p>
                <div class="projects-tile-desc">
                  <p>
                    А revolutionary Agriculture platform where creators can transform their works into unique.                                        </p>
                </div>
              </div>
            </div>
            <div className='temp_img'>
              <img src="../images/Agriculture.png" alt="svg" className='tem-bg' />
              <img src="../images/Agriculture.png" alt="svg" className='tem-above' />
            </div>

          </div>

          <div className='tab_template'>
            <div className='top-cont'>
              <div><img src="../images/NFT-icon-orange-3.svg" alt="svg" className='img-img' />
                <div className='over-color'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
                <div className='over-color-1'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
              </div>
              <div className='tab_wrapper'>
                <h3>REAL ESTATE Marketplace for creators</h3>
                <p>REAL ESTATE I Blockchain</p>
                <div class="projects-tile-desc">
                  <p>
                    А revolutionary REAL ESTATE platform where creators can transform their works into unique.                                        </p>
                </div>
              </div>
            </div>
            <div className='temp_img'>
              <img src="../images/Real-estate-website.png" alt="svg" className='tem-bg' />
              <img src="../images/Real-estate-website.png" alt="svg" className='tem-above' />
            </div>

          </div>

          <div className='tab_template'>
            <div className='top-cont'>
              <div><img src="../images/NFT-icon-orange-4.svg" alt="svg" className='img-img' />
                <div className='over-color'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
                <div className='over-color-1'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
              </div>
              <div className='tab_wrapper'>
                <h3>EDUCATION for creators</h3>
                <p>EDUCATION I Blockchain</p>
                <div class="projects-tile-desc">
                  <p>
                    А revolutionary EDUCATION platform where creators can transform their works into unique.                                        </p>
                </div>
              </div>
            </div>
            <div className='temp_img'>
              <img src="../images/educationdesktop.png" alt="svg" className='tem-bg' />
              <img src="../images/educationdesktop.png" alt="svg" className='tem-above' />
            </div>

          </div>

          <div className='tab_template'>
            <div className='top-cont'>
              <div><img src="../images/NFT-icon-orange-5.svg" alt="svg" className='img-img' />
                <div className='over-color'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
                <div className='over-color-1'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
              </div>
              <div className='tab_wrapper'>
                <h3>INSURANCE for creators</h3>
                <p>INSURANCE I Blockchain</p>
                <div class="projects-tile-desc">
                  <p>
                    А revolutionary INSURANCE platform where creators can transform their works into unique.                                        </p>
                </div>
              </div>
            </div>
            <div className='temp_img'>
              <img src="../images/insurancedesktop.png" alt="svg" className='tem-bg' />
              <img src="../images/insurancedesktop.png" alt="svg" className='tem-above' />
            </div>

          </div>

          <div className='tab_template'>
            <div className='top-cont'>
              <div><img src="../images/NFT-icon-orange-6.svg" alt="svg" className='img-img' />
                <div className='over-color'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
                <div className='over-color-1'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
              </div>
              <div className='tab_wrapper'>
                <h3>TRAVELL Marketplace for creators</h3>
                <p>TRAVELL I Blockchain</p>
                <div class="projects-tile-desc">
                  <p>
                    А revolutionary TRAVELL platform where creators can transform their works into unique.                                        </p>
                </div>
              </div>
            </div>
            <div className='temp_img'>
              <img src="../images/travell-desktop.png" alt="svg" className='tem-bg' />
              <img src="../images/travell-desktop.png" alt="svg" className='tem-above' />
            </div>

          </div>
        </div>
      </TabPanel>
      <TabPanel><div className='tab_content'>
        <div className='tab_template'>
          <div className='top-cont'>
            <div><img src="../images/NFT-icon-orange.svg" alt="svg" className='img-img' />
              <div className='over-color'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
              <div className='over-color-1'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
            </div>
            <div className='tab_wrapper'>
              <h3>NFT Marketplace for creators</h3>
              <p>NFT I Blockchain</p>
              <div class="projects-tile-desc">
                <p>
                  А revolutionary NFT platform where creators can transform their works into unique, non-fungible assets and trade these via blockchain.                                        </p>
              </div>
            </div>
          </div>
          <div className='temp_img'>
            <img src="../images/cybersecurity.png" alt="svg" className='tem-bg' />
            <img src="../images/cybersecurity.png" alt="svg" className='tem-above' />
          </div>

        </div>
      </div>

      </TabPanel>

      <TabPanel>
        <div className='tab_content'>
          <div className='tab_template'>
            <div className='top-cont'>
              <div><img src="../images/NFT-icon-orange-1.svg" alt="svg" className='img-img' />
                <div className='over-color'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
                <div className='over-color-1'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
              </div>
              <div className='tab_wrapper'>
                <h3>HEALTHCARE Marketplace for creators</h3>
                <p>HEALTHCARE I Blockchain</p>
                <div class="projects-tile-desc">
                  <p>
                    А revolutionary HEALTHCARE platform where creators can transform their works into unique.                                        </p>
                </div>
              </div>
            </div>
            <div className='temp_img'>
              <img src="../images/health-web.png" alt="svg" className='tem-bg' />
              <img src="../images/health-web.png" alt="svg" className='tem-above' />
            </div>

          </div>
        </div>

      </TabPanel>

      <TabPanel><div className='tab_content'>
        <div className='tab_template'>
          <div className='top-cont'>
            <div><img src="../images/NFT-icon-orange.svg" alt="svg" className='img-img' />
              <div className='over-color'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
              <div className='over-color-1'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
            </div>
            <div className='tab_wrapper'>
              <h3>Agriculture Marketplace for creators</h3>
              <p>Agriculture I Blockchain</p>
              <div class="projects-tile-desc">
                <p>
                  А revolutionary NFT platform where creators can transform their works into unique, non-fungible assets and trade these via blockchain.                                        </p>
              </div>
            </div>
          </div>
          <div className='temp_img'>
            <img src="../images/cybersecurity.png" alt="svg" className='tem-bg' />
            <img src="../images/cybersecurity.png" alt="svg" className='tem-above' />
          </div>

        </div>
      </div>

      </TabPanel>

      <TabPanel><div className='tab_content'>
        <div className='tab_template'>
          <div className='top-cont'>
            <div><img src="../images/NFT-icon-orange-2.svg" alt="svg" className='img-img' />
              <div className='over-color'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
              <div className='over-color-1'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
            </div>
            <div className='tab_wrapper'>
              <h3>Agriculture Marketplace for creators</h3>
              <p>Agriculture I Blockchain</p>
              <div class="projects-tile-desc">
                <p>
                  А revolutionary Agriculture platform where creators can transform their works into unique.                                        </p>
              </div>
            </div>
          </div>
          <div className='temp_img'>
            <img src="../images/Agriculture.png" alt="svg" className='tem-bg' />
            <img src="../images/Agriculture.png" alt="svg" className='tem-above' />
          </div>

        </div>
      </div>

      </TabPanel>

      <TabPanel><div className='tab_content'>
        <div className='tab_template'>
          <div className='top-cont'>
            <div><img src="../images/NFT-icon-orange-3.svg" alt="svg" className='img-img' />
              <div className='over-color'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
              <div className='over-color-1'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
            </div>
            <div className='tab_wrapper'>
              <h3>REAL ESTATE Marketplace for creators</h3>
              <p>REAL ESTATE I Blockchain</p>
              <div class="projects-tile-desc">
                <p>
                  А revolutionary REAL ESTATE platform where creators can transform their works into unique.                                        </p>
              </div>
            </div>
          </div>
          <div className='temp_img'>
            <img src="../images/Real-estate-website.png" alt="svg" className='tem-bg' />
            <img src="../images/Real-estate-website.png" alt="svg" className='tem-above' />
          </div>

        </div>
      </div>

      </TabPanel>

      <TabPanel><div className='tab_content'>
        <div className='tab_template'>
          <div className='top-cont'>
            <div><img src="../images/NFT-icon-orange-4.svg" alt="svg" className='img-img' />
              <div className='over-color'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
              <div className='over-color-1'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
            </div>
            <div className='tab_wrapper'>
              <h3>EDUCATION for creators</h3>
              <p>EDUCATION I Blockchain</p>
              <div class="projects-tile-desc">
                <p>
                  А revolutionary EDUCATION platform where creators can transform their works into unique.                                        </p>
              </div>
            </div>
          </div>
          <div className='temp_img'>
            <img src="../images/educationdesktop.png" alt="svg" className='tem-bg' />
            <img src="../images/educationdesktop.png" alt="svg" className='tem-above' />
          </div>

        </div>
      </div>

      </TabPanel>

      <TabPanel><div className='tab_content'>
        <div className='tab_template'>
          <div className='top-cont'>
            <div><img src="../images/NFT-icon-orange-5.svg" alt="svg" className='img-img' />
              <div className='over-color'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
              <div className='over-color-1'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
            </div>
            <div className='tab_wrapper'>
              <h3>INSURANCE for creators</h3>
              <p>INSURANCE I Blockchain</p>
              <div class="projects-tile-desc">
                <p>
                  А revolutionary INSURANCE platform where creators can transform their works into unique.                                        </p>
              </div>
            </div>
          </div>
          <div className='temp_img'>
            <img src="../images/insurancedesktop.png" alt="svg" className='tem-bg' />
            <img src="../images/insurancedesktop.png" alt="svg" className='tem-above' />
          </div>

        </div>
      </div>

      </TabPanel>

      <TabPanel><div className='tab_content'>
        <div className='tab_template'>
          <div className='top-cont'>
            <div><img src="../images/NFT-icon-orange-6.svg" alt="svg" className='img-img' />
              <div className='over-color'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
              <div className='over-color-1'><img src="../images/portfolio_item_blur.webp" alt="svg" /></div>
            </div>
            <div className='tab_wrapper'>
              <h3>TRAVELL Marketplace for creators</h3>
              <p>TRAVELL I Blockchain</p>
              <div class="projects-tile-desc">
                <p>
                  А revolutionary TRAVELL platform where creators can transform their works into unique.                                        </p>
              </div>
            </div>
          </div>
          <div className='temp_img'>
            <img src="../images/travell-desktop.png" alt="svg" className='tem-bg' />
            <img src="../images/travell-desktop.png" alt="svg" className='tem-above' />
          </div>

        </div>
      </div>

      </TabPanel>
    </Tabs>
  );
}

export default Portfolio_tabs