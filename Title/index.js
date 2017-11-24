import React from 'react';

class Title extends React.Component {
  render() {
    return (
      <div className='title'>
      {this.props.type == 'intro' && <h1 className='intro'>{this.props.children}</h1>}
      {this.props.type == 'pageSectionTitle' && <h2 className='pageSectionTitle'>{this.props.children}</h2>}
      {this.props.type == 'paragraphH3' && <h3 className='paragraphH3'>{this.props.children}</h3>}
      
      <style jsx>{`
        .title, h1, h2, h3 {
          font-family:'Open Sans',sans-serif;
          color:#333;
          line-height:1.5;
          margin:0;
        }
        .intro {
          font-size:36px;
          font-weight:200;
        }
        .pageSectionTitle {
          font-size:24px;
          font-weight:200;
          text-transform:uppercase;
          color:#4bc1e6;
        }
        .paragraphH3 {
          color:#999;
          font-weight:400;
          font-size:20px;
        }
      `}</style>
      </div>
    );
  }
}

export default Title;
