import React from 'react';
import './News.css';


const Burs = () => {
    return (
        <div className="app-news" id="sect-news">
            <h2 className={"sect-title"}>Burs</h2>
            <p>
                Yurtdışında dil, lisans, master, doktora yapmanız için  devletin burs verdiğini biliyor muyudunuz? Ülkelere göre çeşitli güncel burslar için <a href="http://abdigm.meb.gov.tr/www/2018-2019-akademik-yili-yabanci-hukmet-burslari/icerik/935" target={"_blank"}>bu</a> sayfayı ziyaret edebilirsiniz. Keyifli harcamalar :)
            </p>
        </div>
    );
}

const Oregon = () => {
    return (
        <div className="app-news" id="sect-news">
            <h2 className={"sect-title"}>Oregon State University'de Yaz Okulu Fırsatı</h2>
            <p>Oregon State'de dönemlik fiyatların yaz için üçte birine düştüğünü biliyor muydunuz? <a href={"https://drive.google.com/open?id=1lNCx2r0Zel4TOofloPs2lJQQrc3UXObK"} target={"_blank"}>Buraya</a> tıklayarak ayrıntılı bilgi alabilirsiniz.</p>
        </div>
    );
};

const Tatuta = () => {
    return (
        <div className="app-news" id="sect-news">
            <h2 className={"sect-title"}>Yazınızı daha farklı geçirmeye ne dersiniz?</h2>
            <p>Yazınızı akşam 5'e kadar yatıp sabaha kadar instagramda, oyun başında geçirmek istemiyorsanız <a href={"https://drive.google.com/open?id=1lNCx2r0Zel4TOofloPs2lJQQrc3UXObK"} target={"_blank"}>buraya</a> bir göz atın derim.</p>
        </div>
    );
}
const Tubitak = () => {
    return (
        <div className="app-news" id="sect-news">
            <h2 className={"sect-title"}>Tubitak 2209</h2>
            <p>Tubitak, üniversitelerin doğa bilimleri, mühendislik ve teknoloji, tıbbi bilimler, tarımsal bilimler, sosyal bilimler ve beşeri bilimler alanlarında öğrenim görmekte olan lisans öğrencilerinin; kendilerine ve ülkelerine katkıda bulunmaları için üreteceği projeler için %100 arkalarında. <br />
                Tubitak 2209 Üniversite Öğrencileri Yurtiçi/Yurtdışı Araştırma Projeleri Destekleme Programı hakkında ayrıntılı bilgiye ulaşmak için
                <a href={"http://www.tubitak.gov.tr/tubitak_content_files/BIDEB/Yurutme_kural_ve_ilkeler/2209_kural.pdf"} target={"_blank"}> buraya </a>tıklayın.
            </p>
        </div>
    );
}
const News = () => {
  return (
    <section className="app-news-container">
        <h1 id="news">Duyurular</h1>
        <Burs />
        <Oregon />
        <Tatuta />
        <Tubitak />
    </section>
  );
}

export default News;
