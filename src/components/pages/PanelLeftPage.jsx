import React from 'react';
import { Page, Navbar, Block, BlockTitle, List, ListItem } from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="Left Panel" backLink="Back"/>
    <List>
      <ListItem link="/Login/" title="Login"></ListItem>
    </List>
  </Page>
);
