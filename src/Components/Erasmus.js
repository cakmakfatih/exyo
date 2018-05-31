import React from 'react';
import './Erasmus.css';

const SingleStep = (props) => {
  let { image, desc, index } = props;
  return (
    <div className="single-step">
      <img src={image} alt="stepimage" height="200"/>
      <h2>Adım {index+1}</h2>
      { index === 0 ? <p>Bölümünüzün anlaşmalı olduğu yabancı üniversiteler ve bölümleri hakkında <a href="https://appabofisi.hacettepe.edu.tr/tr/euc-agreements/list" rel="noopener noreferrer" target="_blank">buradan</a> bilgi alabilirsiniz.Bu linkte anlaşmalı bölümleri bulabilirsin, liste sürekli güncellenmektedir. Gerektiğinde bölüm koordinatöründen ve daha önce o üniversiteye gitmiş arkadaşlarından da yardım alabilirsin. Bu konuda Uluslararası Değişim Kulübü de sana yardımcı olabilir.</p> : <p>{desc}</p> }
    </div>
  );
}

const Erasmus = (props) => {
  let { images, title, info } = props;
  return (
    <section className="app-erasmus-container">
      <h1 id="erasmus">{title === undefined ? 'ERASMUS' : title }</h1>
      <div className="app-erasmus" id="sect-erasmus">
        { images.map((item, index) => <SingleStep image={item} index={index} key={index} desc={info[index]} />) }
      </div>
    </section>
  );
}

export default Erasmus;
