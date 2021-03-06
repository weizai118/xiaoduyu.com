import React from 'react';

// components
import Shell from '@modules/shell';
import Meta from '@modules/meta';

// modules
import Topics from '@modules/topics';
import AppDownload from '@modules/app-download';
import LinksExchange from '@modules/links-exchange';
import OperatingStatus from '@modules/operating-status';
import Footer from '@modules/footer';
import MixingFeed from '@modules/mixing-feed';
import HotPostsList from '@modules/hot-posts-list';
import Case from '@modules/case';
import AdsByGoogle from '@modules/adsbygoogle';
import ProfileCard from '@modules/profile-card';

// layout
import ThreeColumns from '../../layout/three-columns';

import { Goole_AdSense } from '@config';

@Shell
export default class Home extends React.PureComponent {

  render() {

    return(<>
      <Meta />

      <ThreeColumns>
        
        <>
          <Topics />
          <div className="d-none d-lg-block d-xl-block"><AppDownload /></div>
        </>
        
        <>
          <MixingFeed />
        </>
        
        <>
          <ProfileCard />
          {Goole_AdSense.sidebar ? <AdsByGoogle {...Goole_AdSense.sidebar} /> : null}
          <HotPostsList />
          <Case />
          <LinksExchange />
          <OperatingStatus />
          <Footer />
        </>

        <>
          <HotPostsList />
          {Goole_AdSense.sidebar ? <AdsByGoogle {...Goole_AdSense.sidebar} /> : null}
        </>

      </ThreeColumns>
    </>)
  }

}
