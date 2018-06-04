import React, { Component } from 'react';
import Header from './../../Components/Header';
import FerihaContent from './../../Components/FerihaContent';
import Footer from './../../Components/Footer';

export default class WWoof extends Component {
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
        let vidSrc = 'https://www.youtube.com/embed/lLYt1zlqUtE';
        let { navMinified } = this.state;
        let info = ` 
WWOOF Nedir?
Öncelikle World Wide Opportunities on Organic Farms‘ın kısaltılmış halidir. Farklı insanlarla tanışmanın, farklı ülkelere gitmenin, doğal hayatla iç içe olmanın ve dilinizi geliştirmenin harika bir fırsatıdır. 40 yıldan beri, organik çiftlikler ile gönüllü çalışanların bağlantı kurmasını sağlar. Bizlere Dünya üzerinde bu organizasyona kayıtlı olan bütün çifliklerde çalışabilme imkanı sunar. Bunu istediğiniz ülkede seyehat ederken yiyecek ve konaklama ücretlerinizi karşılanayan part time bir iş olarak düşünebilirsiniz. Günlük çalışma saatinizi doldurduktan sonra istediğiniz şeyi yapmakta özgürsünüz. Doğada yürüyüş yapabilir, ya da şehir merkezlerini günübirlik keşiflere çıkabilirsiniz.
Bu zamana kadar hakkında bu kadar az araştırma yapılmış olması gerçekten şaşırtıcı çünkü bu organizasyonun bünyesinde bulundurduğu binlerce çiftliğin olduğunu söyleyebilirim. Hatta Türkiye’de bile kayıtlı bir sürü çiftlik mevcut! Ben de dayanamayıp iştahla araştırdım bu organizasyonu. Anladım ki böyle güzel bir fırsatı araştırmak için geç bile kalmışım.
WWOOF’un Amacı Nedir?
Organik Tarım’ı öğrenmek ve yardıma ihtiyacı olan çiftliklere yardımcı olmak.
Suni gübreleri ve böcek ilaçları olmadan organik tarım hareketine katkıda bulunmak.
Organik tarım sayesinde farklı kültürlerle iletişim kurmak.
WWOOFer Olarak Hangi Ülkelere Gidebilirim?

Ve daha fazlası… wwoof.net sitesine gir ve sayfanın en alt kısmına in. Bütün ülkeleri orada bulabilirsin.
Ayrıca Bağımsız WWOOF ülkelerine bakmayı da unutma! (http://www.wwoofindependents.org/)

WWOOF’a Katılmak İçin Ne Yapmalıyım?
İlk yapmanız gerekn WWOOF’un resmi internet sitesine girip buradan hangi ülkeye gideceğinize karar vermektir. Daha sonrasında o ülkenin resmi WWOOF internet sitesine yönlerdirilirsiniz. Bu siteden ev sahibi çiftlikleri görebilir ve aralarında seçim yapabilirsiniz. Eğer seçtiğiniz ülkede kararlıysanız siteye üye olmalısınız. Böylece çiftlikler hakkında herkese açık olmayan bilgilere erişebilirsiniz ve çiftlik sahipleriyle iletişime geçebilirsiniz. Bundan sonrası size ve ev sahibi çiftliğe kalmıştır. Eminim istediğiniz şartlara uyan çiftliği bulacaksınız!
WWOOF’a Katılmak İçin Kaç Yaşında Olmalıyım?
18 yaşında olmanız gerekir. Ancak 18 yaşından küçükler de yanında yasal vasiliğini yapan biri ile katılabilirler. Üst yaş sınırı yoktur.
Çiftlikte Ne Kadar Kalabilirim?
Standart bir süresi yoktur. Buna çiftlik sahibi ve gönüllü birlikte karar verir. Uzun süreli(6 ay, 1 yıl) ya da kısa süreli (2-4 hafta) kalabilirsiniz.
WWoof’un Karşıladığı İmkanlar Nelerdir?
Ana Öğünler: Kaldığınız çiftlikte yaşayanlar ve çalışanlarla birlikte yemeğinizi yersiniz. Ve bunun için sizden ayrı bir ücret talep edilmez.
Konaklama: Şartlar çiftliklere göre değişir. Çiftlikte yaşayanlar ile birlikte ya da ayrı bir binada kalabilirsiniz.
WWOOF’un Karşılamadıkları Nelerdir?
-Uçak biletinizi karşılamaz.
-Vize ve pasaport işlemleri için gerekli olan ücretleri karşılamaz.
-Seyehat sigortanızın ücretini karşılamaz.
-Gönüllü çalışmanız sonucunda size artı olarak ücret vermez.
Çalışma Şartları Nasıldır?
Haftada 6 gün, günde 4-6 saat gönüllü olarak çalışılır.
WWOOF Ücretli Midir?
Wwoof organizasyonundaki çiftliklerle iletişim kurmak için wwoof’un internet sitesine üye olmanız gerekmektedir. Bunun 0 – US$72 / 0 – 56 Euro civarında bir ücreti vardır.
WWOOF’a Arkadaşımla Katılabilir Miyim?
“Ben arkadaş olmadan hiç bir yere gitmiyorum!” diyorsanız eğer, 10-20 wwoofer’ı misafir edebilecek büyüklükte çiftlikler de var. Tek yapmanız gereken çiftlik sahiplerine mesaj atmak ve kaç kişiyi karşılayabileceklerini sormak.
En Çok Hangi Ülkeler Tercih Ediliyor?

*Hosts: Ev sahibi sayısı *Volunteers: Gönüllü Sayısı



`;
        return (
            <div className="app-wrapper">
                <Header active={"feriha"} navMinified={navMinified}/>
                <div style={{marginTop:140}} />
                <h1 className="title-feriha">WWoof</h1>
                <div className={"video-container"}>
                    <iframe width="560" height="315" src={vidSrc} frameBorder="0"
                            allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>
                <FerihaContent info={info} />
                <Footer />
            </div>
        );
    }
}