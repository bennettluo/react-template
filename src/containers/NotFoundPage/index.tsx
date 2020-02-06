/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import messages from './messages';

const NotFound: React.FC<{}> = () => {
  return (
    <article>
      <h1>{messages.header}</h1>
    </article>
  );
};

export default NotFound;
