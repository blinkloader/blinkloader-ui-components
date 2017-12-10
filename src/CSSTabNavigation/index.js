import React from 'react';
import find from 'array.prototype.find';

const CSSTabNavigation = ({ children }) => {
  const tabs = children.map((el) => (el.props.tab))
  return (
    <div className='cssTab flex flex-wrap justify-center'>
      { tabs.map((tab, i, arr) => {
        return ([
          <input
            key={`input_${tab.name}`}
            id={`tab${i+1}`}
            type="radio" name="tabs"
            defaultChecked={i===0? true : false}
          />,
          <label key={`label_${tab.name}`} htmlFor={`tab${i+1}`}>
            <div className='flex flex-row justify-center items-center'>
              <img
                className={tab.square?'squareLogo':'logo'}
                src={tab.img}
              />
              <span>
                {tab.square?tab.name:''}
              </span>
            </div>
          </label>
        ])
      })}

      <div style={{width:'100%'}} className='content'>
      { children.map((child, i, arr) => {
        return (
          <div key={child.props.tab.name+'child'} id={`content${i+1}`}>
            {child}
          </div>
        )
      })}
      </div>

      <style jsx>{`
        .logo {
          max-height:30px;
        }
        .squareLogo {
          padding-right:5px;
          max-height:30px;
        }
        .content > div {
          display: none;
        }
        input {display: none;}
        label {
          display: inline-block;
          padding: 15px 25px;
          text-align: center;
          font-family:'Open Sans',sans-serif;
          font-size:14px;
          font-weight:600;
          background-color:white;
          border:transparent;
          border-bottom:solid 2px transparent;
          outline:none;
          margin:5px;
        }
        label:hover {
          border-bottom: solid 2px #00adee;
          opacity:0.7;
          transition: all .2s ease-in;
          cursor: pointer;
        }
        input:checked + label {
          border-bottom: solid 2px #00adee;
          opacity:0.7;
          cursor: pointer;
        }
        #tab1:checked ~ .content #content1,
        #tab2:checked ~ .content #content2,
        #tab3:checked ~ .content #content3,
        #tab4:checked ~ .content #content4,
        #tab5:checked ~ .content #content5,
        #tab6:checked ~ .content #content6,
        #tab7:checked ~ .content #content7,
        #tab8:checked ~ .content #content8,
        #tab9:checked ~ .content #content9,
        #tab10:checked ~ .content #content10 {
          display: block;
        }

      `}</style>
    </div>
  );
}

export default CSSTabNavigation;
