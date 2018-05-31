import React, { Component } from 'react';
import Header from './../../Components/Header';
import Erasmus from './../../Components/Erasmus';
import Footer from './../../Components/Footer';

import A1 from './../../Assets/i1.jpg';
import A2 from './../../Assets/i2.jpg';
import A3 from './../../Assets/i3.png';
import A4 from './../../Assets/i4.png';

export default class Interrail extends Component {
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
        let info = [
            "Bölümünüzün anlaşmalı olduğu yabancı üniversiteler ve bölümleri hakkında buradan bilgi alabilirsiniz.Bu linkte anlaşmalı bölümleri bulabilirsin, liste sürekli güncellenmektedir. Gerektiğinde bölüm koordinatöründen ve daha önce o üniversiteye gitmiş arkadaşlarından da yardım alabilirsin. Bu konuda Uluslararası Değişim Kulübü de sana yardımcı olabilir.",

            "Hacettepe Yabancı Diller Yüksek Okulu internet sayfasından duyurular ve afişleri takip ederek online yapılacak olan yabancı dil sınavı başvuru tarihlerini takip ediniz ve bu süre içerisinde başvuru yapınız. Başvuru yapabilmeniz için akademik ortalamanız 2.00'nin üzerinde olması gerekir. Daha önceden Yabancı Diller Yüksekokulu’nun düzenlediği sınavlara (Hazırlık Sınavı ve Erasmus Sınavı) katılmış olan öğrenciler, notlarını Uluslararası İlişkiler Koordinatörlüğü’ne ibraz etmeleri halinde notları Erasmus yerleştirmelerinde kullanılacaktır. Ayrıca Yükseköğretim Kurumunun eşdeğer olarak kabul ettiği sınavlara (Yükseköğretim Kurulu’nun resmi ana sayfasında  yabancı dil eşdeğerlikleri adı altında bulunan linkteki “ÖSYM-Yabancı Dil Sınavları Eşdeğerlikleri) katılmış olan öğrenciler, notlarını Uluslararası İlişkiler Koordinatörlüğü’ne ibraz etmeleri halinde notları Erasmus yerleştirmelerinde kullanılacaktır.",

            "Yabancı dil sınav sonuçları açıklandıktan sonra üniversite tercihlerini yapmak için sistemin açılacağına dair duyuru yapılacaktır. Belirtilen tarihler arasında tercihlerini ve gitmek istediğin dönemin seçimini yapınız.",

            `Öncelikle Tebrikler 😊 Artık gideceğin ülkeyi ve üniversiteyi biliyorsun. Bu arada ofis de Ulusal Ajansa seçim sonucunda kaç öğrenciyi göndereceğini bildirdi ve sizler için bütçe talep etti. Uluslararası İlişkiler Koordinatörlüğü sizler için bilgilendirme toplantıları yapacaktır. Bu toplantılara mutlaka katıl. Gideceğiniz üniversitenin web sitesini dikkatle inceleyerek, oku. Erasmus öğrencilerinin başvuru son tarihlerini, ders programlarını, akademik takvimlerini eğer varsa doldurup göndermeniz gereken belgeleri dikkatlice incele. Bu arada daha önce o üniversiteye ya da o ülkeye gitmiş arkadaşlarından bilgi al. Gideceğin Üniversitenin web sayfasını inceleyip application (başvuru formunu), accommodation (konaklama formu varsa), varsa gidilecek olan üniversitenin Learning Agreement formu x 1 nüsha ve Hacettepe Üniversitesi Learning Agreement formu x 3 nüsha bölüm koordinatörü yardımı ile doldur. Uluslararası İlişkiler Koordinatörlüğü’ne 2 adet fotoğraf ve İngilizce transkriptin ile birlikte teslim et.`,

            `Karşı üniversiteden kabul yazın geldiğinde gidiş evraklarının düzenlenmesi (Vize, pasaport, hibe yazısı) için Uluslararası İlişkiler Ofisine uğra ve pasaportunu al`,
        ];
        let stepsImages = [ A1, A2, A3, A4 ];
        let { navMinified } = this.state;
        return (
            <div className="app-wrapper">
                <Header from="feriha" active={"feriha"} navMinified={navMinified}/>
                <div style={{marginTop:100}} />
                <Erasmus images={stepsImages} title="Interrail" info={info} />
                <Footer />
            </div>
        );
    }
}