/**
 * @author Vishant Rastogi
 * @email vishant777@gmail.com
 * @create date 2021-04-27 14:16:39
 * @modify date 2021-04-27 14:16:39
 */

import React from 'react';
import { Link } from 'react-router-dom';

import { NotFoundSC, Card, Heading } from './NotFound-style';

export default function NotFound() {
  return (
    <NotFoundSC data-testid="not-found">
      <Card>
        <Heading data-testid="not-found-h2">404</Heading>
        <h3>Page Not found</h3>
        <br />
        <p>
          Please go back to <Link to="/">main site</Link>.
        </p>
      </Card>
    </NotFoundSC>
  );
}