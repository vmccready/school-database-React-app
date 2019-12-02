import React from 'react';

// TO DO:
// make <title> variable


export default class Header extends React.PureComponent {
  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,500" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Cousine" rel="stylesheet" type="text/css" />
        {/* <link href="../styles/global.css" rel="stylesheet" /> */}
        <title>Courses</title>
      </div>
    );
  }
}