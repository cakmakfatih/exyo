import React, { Component } from 'react';
import Header from './../../Components/Header';
import SliderWA from './../../Components/SliderWA';
import Footer from './../../Components/Footer';
import FerihaContent from './../../Components/FerihaContent';

import A1 from './../../Assets/w1.jpg';
import A2 from './../../Assets/w2.jpg';
import A3 from './../../Assets/w3.jpg';
import A4 from './../../Assets/w4.jpg';

export default class WorkAndTravel extends Component {
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
        let stepsImages = [ A1, A2, A3, A4 ];
        let { navMinified } = this.state;
        let info = `Work and Travel nedir?
Work and Travel programı Amerikan hükumetinin kontrolünde yapılan, dünyanın değişik yerlerinden üniversite öğrencilerinin yaz tatilleri boyunca Amerika’da çalışıp İngilizcelerini geliştirme imkanları buldukları, dünyayı ve farklı kültürleri tanımalarını sağlayan bir öğrenci kültürel değişim programıdır. WAT programı Amerika’yı turist gibi değil içinden biri gibi yaşamanızı ve anlamanızı sağlayan ve bunu yaparken de seyahat harcamalarınızı karşılayıp yanınızda bir miktar parayla dönebileceğiniz bir program.
 
Work and Travel size hem unutulmaz bir macera yaşatıyor hem de hayatla tanıştırıyor. WAT ile belki de ilk kez tek başınıza yurtdışına yolculuk yapacak, ilk defa bir işiniz, patronunuz ve mesainiz olacak, ilk defa kendi kazandığınız para ile ayakta kalmaya çalışacak, sorumluluk ve inisiyatif sahibi olarak gerçek hayatta da yüzleşmek zorunda olduğunuz birçok sorunla kendiniz yüzleşmek zorunda kalacaksınız.Bu program size alternatifi olmayan bir kişisel gelişim ve öz güven kazanma olanağı sağlıyor.
Ayda ortalama 900-1.500 USD kazanabilecek ve program için gerekli olan yaşam ve seyahat masraflarınızı karşılayabileceksiniz. Amerika gibi herkesin hayallerini süsleyen bir ülkeyi masraflarınızı karşılayarak görüp gezebileceksiniz. Aynı anda hem çalışma hem de tatil yapma fırsatı bulacak, tüm bunları yaparken de kimseye yük olmayacaksınız. Program sonunda ömür boyu unutulmayacak tecrübe ve birikimlerle ülkenize geri döneceksiniz.
Amerika’da kaldığınız 4 ay boyunca İngilizcenizi geliştirme ve günlük hayatta pratik yapma fırsatını bulacaksınız. İngilizce konuştukça yabancı dilinize olan güveniniz artacak ve her ortamda kendinizi İngilizce olarak ifade eder hala geleceksiniz. Bu güven sayesinde pratik yeteneğiniz artacak ve yabancı dil korkunuzun yok olmasını sağlayacaktır.
 
 İleriye dönük kariyeriniz için birikim sahibi olacaksınız. Bu birikim gerek maddi anlamda gerekse tecrübe anlamında gelecekte birçok alanda sizin rakiplerinizin bir kaç adim önünde olmanızı sağlayacaktır. Yurtdışında iş tecrübesi elde edecek ve böylece CV’nize de yeni bir değer katacaksınız. Bir düşünün, daha öğrenciyken CV’nizde çalışmış olduğunuz Amerikan şirketlerinin isimleri ve referansları olacak! Bu gerçekten de çok önemli bir avantaj.
Gerek Amerikan kültürü gerekse diğer ülkelerden gelen Kültürel Değişim Programı öğrencileri ile tanışıp onların kültürlerini tanıma fırsatı bulacak ayni zamanda kendi kültürünüzü de onlara tanıtma fırsatı bulacaksınız – çalışarak kendi ayaklarınız üzerinde durmaya alışacak ve hayata daha objektif bakabileceksiniz. “Kendi yağınızla kavrulmanın” hazzını yasarken başkalarının yardımına gerek kalmadan bir takım projeleri gerçekleştirebileceksiniz. Kendi başınıza bir takım sorumluluklar üstlenecek ve özgürce kararlar alabileceksiniz.
Yurt dışında eğitim, burs ve staj fırsatlarını daha yakından araştırabilecek ve kendinize uygun bir üniversite ya da işyeri bulabilecek bunları yerinde ziyaret ederek tüm imkanları kendi gözünüzle değerlendirebileceksiniz. Öğretim üyeleri ve işverenler ile yüz yüze görüşme imkanı bulacak ve kendinizi ifade etme olanağı bulacaksanız.
Work and Travel programına katılarak kendinizi yeni ve heyecan verici bir deneyimin içinde bulup, farklı kültürlerin her an daha yakınlaştığı dünyamızda bu yöndeki kabiliyetlerinizi geliştirme fırsatı elde edeceksiniz.

`;
        return (
            <div className="app-wrapper">
                <Header active={"feriha"} navMinified={navMinified}/>
                <div style={{marginTop:140}} />
                <h1 className="title-feriha">Work and Travel</h1>
                <SliderWA images={stepsImages} />
                <FerihaContent info={info} />
                <Footer />
            </div>
        );
    }
}