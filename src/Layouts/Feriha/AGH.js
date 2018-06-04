import React, { Component } from 'react';
import Header from './../../Components/Header';
import SliderWA from './../../Components/SliderWA';
import Footer from './../../Components/Footer';
import FerihaContent from './../../Components/FerihaContent';

import A1 from './../../Assets/agh1.jpg';
import A2 from './../../Assets/agh2.png';

export default class Agh extends Component {
    state = {
        navMinified:false,
    }
    componentDidMount = () => {
        window.addEventListener("scroll", this._handleScroll);
    }
    componentWillUnmount = () => {
        window.removeEventListener("scroll", this._handleScroll);
    }
    _handleScroll = () => {
        let scrollTop = window.scrollY;
        if(scrollTop >= 170){
            this.setState({
                navMinified:true
            });
        } else {
            this.setState({
                navMinified:false
            });
        }
    }
    render() {
        let info = `                                   
    

1)	AGH Nedir, Nasıl Öğrenebilirim?
Türkiye Ulusal Ajansı’nın  www.ua.gov.tr  sitesinden AGH hakkında bilgi edinebilirsiniz.

       


2)	AGH Proje Koordinatörleri İle Nasıl İletişime Geçerim?
Merkez ofisi ziyaret edebileceğiniz gibi evs@gonulluhareketi.org adresinden de iletişime geçebilirsiniz.
 

3)	Gönderen Kuruluşu Nasıl Bulabilirim?
Gönderen kuruluşların listesine Avrupa Gençlik Portalı’nda bulunan “AGH Akredite Kuruluşlar Veritabanı”ndan ulaşabilirsin. 
Ancak gönderen kuruluşun gönüllü haklarınızı gözetmeyecek, AGH tecrübesi olmayan, gönüllünün halinden anlamayan bir kuruluşun senin gönderen kuruluşun olması, kendini proje boyunca yalnız hissetmene neden olacaktır.

 

4)	AGH Başvurumu Nasıl Yapacağım?
Bunun için öncelikli olarak “Başvuru” sayfası altında yer alan bilgileri dikkatlice okumuş olman önemli. Hazırlamanız gereken Europass CV ve Motivasyon Mektubunuz ile birlikte gerekli olabilecek diğer belgeleri eksiksiz tamamlaman gerekli. Başarılı bir başvuru için Gönderen Kuruluşun bilgilendirmesi ve desteği önemlidir. Gönderen Kuruluşun yönlendirmesi ile Europass CV ve Motivasyon Mektubunda bazı değişiklikler yapman gerekebilir.
Gönüllü Hareketi’nin senin Gönderen Kuruluşun olmasını istiyorsan, Europass CV ve Motivasyon Mektubunu evs@gonulluhareketi.org adresine gönderebilirsin. Başvuru formlarını inceleyerek, geri bildirimde bulunacak, destekleyici belgeleri de sana göndereceğiz. Belgelerin eksiksiz ve doğru bir şekilde hazırlanmasının ardından şimdi sıra Ev Sahibi Kuruluşlar ile temasa geçme ve hayallerini süsleyen  AGH projeni bulma zamanı.
Gönüllü Hareketi aynı zamanda Eurodesk Türkiye Yerel Temas Noktası’dır. Bu nedenle Avrupa Komisyonu Bilgi Ağı’nın erişim imkanlarını da kullanarak adaylarına proje bulmanı noktasında da destek veriyoruz.
5)	Kabulden Sonra Ne Yapmalıyım?
Biraz daha zamanın var, valizini hazırlamak için. Aklındaki bütün soruları Ev Sahibi Kuruluş ile görüşerek gidermeli, eski Avrupa gönüllülerinin tecrübe ve önerilerini dinlemelisin. Tabi kabul aldıktan sonra Gönderen Kuruluşa bir an önce bilgi vermeyi unutma! Çünkü Gönderen Kuruluşun en kısa zamanda Ev Sahibi Kuruluş ile iletişime geçmesi gerekiyor.

            


6)	Resmi İşlemleri Tamamlama
Başvuru tarihini kaçırmadan, ESK ve GK’nın arasındaki yazışmaların tamamlanması ve proje antlaşmasının (Activity/Partnership Agreement) imzalanması gerekir. Bunun için GK’yı takip edin, ancak çok ısrarcı olmaktan çekinin. Bu zaten onları işi, sadece yaptıklarından emin olun.
`;
        let stepsImages = [ A1, A2 ];
        let { navMinified } = this.state;
        let vidSrc = 'https://www.youtube.com/embed/QY3rYV4ZY9I';
        return (
            <div className="app-wrapper">
                <Header active={"feriha"} navMinified={navMinified}/>
                <div style={{marginTop:140}} />
                <h1 className="title-feriha">AGH</h1>
                <div className={"video-container"}>
                    <iframe width="560" height="315" src={vidSrc} frameBorder="0"
                            allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>
                <SliderWA images={stepsImages} />
                <FerihaContent info={info} />
                <Footer />
            </div>
        );
    }
}