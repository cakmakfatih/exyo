import React, { Component } from 'react';
import Header from './../../Components/Header';
import Footer from './../../Components/Footer';
import SliderWA from './../../Components/SliderWA';
import FerihaContent from './../../Components/FerihaContent';

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
        let info = `Interrail, gençlerin Avrupa’yı daha ekonomik bir şekilde gezmesi için tasarlanmış bir kombine tren bileti. Aynı zamanda bazı feribotlarda da geçerli. Mesela Stockholm – Helsinki arasındaki feribotta da geçiyor. Yunan Adaları arasında gezmenizi sağlayan bir Interrail bileti çeşidi de var, adı Interrail Greek Island Pass.
Daha çok öğrencilerce, tek bir biletle, diledikleri rota ve programda, istenilen yer ve zamanda, trenin 2. sınıf vagonlarına binerek Avrupa’nın 30 ülkesinde turlamak için kullanılıyor. Bununla birlikte Interrail bileti her yaştan insana açık ama 28 yaş altındakiler indirimli fiyattan satınalabilirler. Interrail bileti fiyatı konusuna da geleceğiz.
Interrail biletinin bir satış kotası yoktur, uçak bileti gibi satışa kapanmaz. Yani tükenme ihtimali yoktur, erkenden almak gerekmez.
Peki nereden alınır?
– Uluslararası bilet satışı yapan garlar (Sirkeci)
– Yetkili Turizm Acentaları
İstanbul’da Gençtur, Cosmopolitan, Viking Turizm
Ankara’da  Uygar Tours
Van’da  Ayanis Turizm
– Resmi Interrail websitesi
Temelde; Global Pass ve One Country Pass olmak üzere 2 tip Interrail bileti var. Daha sonra bunlar da geçerlilik süresi ve bu süre zarfında kaç gün seyahat edileceğine göre kendi içinde de kategorilere ayrılıyor:
1. Interrail Global Pass – Belli bir süre zarfında tüm Avrupa ülkelerinde trene binme imkanı sağlayan bilet.
Geçerli olduğu ülkeler: Avusturya, Belçika, Bosna Hersek, Bulgaristan, Hırvatistan, Çek Cumhuriyetii Danimarka, Finlandiya, Fransa, Almanya, Birleşik Krallık, Yunanistan, Macaristan, İrlanda, İtalya, Lüksemburg, Makedonya, Karadağ, Hollanda, Norveç, Polonya, Portekiz, Romanya, Sırbistan, Slovakya, Slovenya, İspanya, İsveç, İsviçre, Türkiye.
Özetle; İngiltere ve bazı Baltık ülkeleri hariç, tüm Avrupa’da geçiyor.
2. Interrail One Country Pass – Belli bir süre zarfında sadece 1 ülkede limitsiz trene binme imkanı sağlayan bilet.
Geçerli olduğu ülkeler: Yukarıda listelediğimiz ülkelerin hepsi için tek ülke bileti mevcut.
3. Birkaç ülkeyi gruplayan biletler
– Balkan Flexi Pass: Bulgaristan, Makedonya, Romanya, Sırbistan, Karadağ, Bosna Hersek, Yunanistan ve Türkiye’de tek bilet ile 2 ay boyunca gezmenizi sağlar.
– Benelux Flexi Pass: Belçika, Hollanda ve Lüxemburg’da 1 ay boyunca tek bilet ile gezmenizi sağlar.
– Greek Island Pass: Yunan adaları arasında faliyet gösteren feribotlara tek biletle binmenizi sağlar. 1 ay geçerlidir, en fazla 6 kez feribota binebilirsiniz.
4. Yunanistan ya da İtalya’ya Feribotla Geçiş İçeren Biletler
– Interrail Italy Plus Pass (İtalya Bileti) – Italya’da geçerli olan ve Yunanistan’a da ücretsiz feribotla geçiş hakkı veren bilet.
– Interrail Greek Plus Pass (Yunanistan Bileti) – Yunanistan’da geçerli olan ve İtalya’ya da ücretsiz feribotla geçiş hakkı veren bilet.
5. İtalya ve İspanya’da Ekstra Hizmetler Sağlayan Biletler
Interrail Premium – Sadece İtalya ve İspanya içindeki trenlerde geçerli olmak üzere biletinizi Interrail.eu adresi üzerinden online olarak aldığınızda size ücretsiz tren rezervasyonu olanağı veren, bunun yanında ücretsiz tur ve rehberlik gibi hizmetleri de sağlayan bilet.
Interrail bileti fiyatını belirleyen bir diğer konu da; geçerlilik süresi ve bu sürede kaç gün trene bineceğiniz.
– Eğer geçerlilik süresi boyunca canınızın istediği kadar inip binmek isterseniz “Continious” bilet almanız lazım. Yani binebileceğiniz tren sayısında hiçbir sınırlama yok.
– Diğer seçenek sınırlı paketlerden almak. Buna “Flexi” bilet deniyor. Bu durumda size şu kadar gün içinde şu kadar gün trene binebilirsin deniliyor ama o gün içinde sınırsız kez trene binebiliyorsunuz. Ancak hareket saati 19.00 ve daha geç olan trenlerde, varış saati de 04:00 ve sonrasında ise ertesi günün tarihi yazılıyor.
Aşağıdaki tablodan hangi Interrail bileti türü için ne seçenekler tanınıyor inceleyebilirsiniz. Interrail bileti fiyatları için tıklayın.
Bilet Türü
Geçerlilik Süresi Seçenekleri
Kaç Gün Kullanılabilir
 
One Country
15 gün
5 gün
(flexi)


1 ay
7 gün
(flexi)


1 ay
10 gün
(flexi)


15 gün
sınırsız
(continous)


22 gün
sınırsız
(continous)


1 ay
sınırsız
(continous)








Global
1 ay
3 gün
(flexi)


1 ay
4 gün
(flexi)


1 ay
6 gün
(flexi)


1 ay
8 gün
(flexi)
 
Örneklemek gerekirse;
15 günlük  One Country / Flexi Pass aldıysanız, 15 gün boyunca tek ülke içinde 5 gün boyunca trene binebilirsiniz. Bu 5 gün 15 günün içinde herhangi bir şekilde yayılabilir.
Yani Global Pass’in 4, Flexi Pass’in 6 çeşidi, az trene binecek olan az ödesin, çok trene binecek olan daha çok ödesin mantığı ile yapılmış. Interrail planlamasının meşakati buradan geliyor çünkü sizin için en mantıklı olacak bileti almak için hangi ülkede, hangi şehirlerde kaç gün geçireceğinizi önceden kestirmeniz gerekiyor. İçinden çıkamıyorsanız Global almak bir çözüm ama tabi ki daha pahalı. Günün sonunda 8 günlük global bilet alıp, sonra sadece 3 gün kullanmak da var.
Biliyoruz çoğunuzun kafasında Interrail ile ilgili tonla soru işareti var. Aşağıda hepsine tek tek cevap vermeye çalıştık ama yine de kafanıza takılan sorular olursa yorumlarda sorabilirsiniz.
Bilet çeşitleri ve kapsamları Interrail Nedir konusunun ilk aşamasıydı. Gelelim Interrail size göre mi onu anlamaya.
  Interrail Yapmaya Değer Mi ?
Interrail yapmaya değer mi değmez mi sorusu, biraz da seyahate çıkacak kişinin daha önce herhangi bir yurtdışı deneyiminin olup olmadığı, kişinin yaşı, ekonomik durumu, lüks ihtiyacı, o yolculuktan beklentileri gibi konularla yakından alakalı.
Ekonomik bir şekilde Avrupa’yı gezmek isteyen öğrencilerin sıkça tercih ettiği bir yöntem çünkü arkadaşlarla paylaşılması çok keyifli ve uçakla seyahate kıyasla daha maceralı.
Özellikle lüks ve konfor ihtiyacınızın daha az olduğu 20’li yaşlardaysanız ve Avrupa’ya ilk kez çıkacaksanız, bu senaryoda kesinlikle Interrail yapmaya değer! Bunu gözümüz kapalı söyleyebiliriz. Ama bunu çok ekonomik olduğu için söylemiyoruz, Interrail başlı başına bir serüven olduğu için söylüyoruz.
Kime Interrail Önermeyiz?
Şunu da baştan konuşmak gerekir, eğer Interrail planınız bir haftada sadece bir iki Avrupa şehri görmekten ibaretse hiç boşuna bilet almayın deriz. Böyle bir planı klasik turla da yapabilirsiniz. Zaten her şekilde A şehrinden B şehrine normal tren bileti alarak gitmek Interrail bileti ile aynı paraya gelecektir. Çünkü bizce bu işin asıl olayı, kendinize 1 ay gibi bir süre ayırıp Global Pass alıp, Interrail’in hakkını adam gibi vermek, biletin parasını kat be kat amorti ettirecek kadar kara geçerek gezmek.
  Interrail Ucuz Mu?
Interrail bileti almak tek tek tren bileti almaktan karlı oluyor.
Fransa – İsveç – Danimarka – Almanya gibi 4 farklı ülke uçarak gitmektense Interrail bileti almak da çoğu zaman daha ucuz.
Diğer taraftan Easy Jet ve Ryan Air gibi ucuz uçak bileti satan firmaların artması ile ülkeler arası uçuşlar 35 Euro’lara düştü. Benim Paris’ten Madrid’e, orada biraz kalıp da Kanarya Adaları’na toplam 35 Euro’ya uçmuşluğum var. Bu gibi uçuşların olduğu yerlerde, eğer ülke içinde tren ile gezmeyecekseniz Interrail daha masraflı olabilir.
Diğer bir sıkıntı şu ki, maalesef Türkiye’den böyle uçuşlar yok. Anca Avrupa şehirlerinden var. Yani illa bir şekilde önce kendinizi Avrupa’ya atmanız gerekiyor.
Planlama yaparken mutlaka charter uçan şirketlere de bakmayı unutmayın. Bazen Interrail biletinizdeki gün sayısını kullanmak yerine uçak daha avantajlı olabilir.
Ucuz Uçak Bileti yazımızdan ucuza mal etmenin yollarını öğrenebilirsiniz.
Interrail’ı Nasıl Daha Ucuza Mal Ederiz?
Yeme – içme, konaklama, müze girişleri Interrail turunun en önemli masraf kalemleri. Bunları çok uyguna mal etmenin yollarını Nasıl Ucuza Gezilir yazımızdan okuyabilirsiniz. Bu yazı Interrail’a bakışınızı da değiştirecektir. Bu sadece Interrail nedir konusu için değil, ömrünüz boyunca yapacağınız tüm geziler için önemli bir kaynak.
  Interrail Kimlere Uygun ?
Avrupa’da uzun uzun gezmek isteyenlere,
Farklı milletlerden insanlarla tanışmak isteyenlere (Diğer ülkelerden Interrail yapanlarla tanışıyorsunuz).
Interrail kesinlikle belirli bir oranda konfor zonundan çıkmayı ve yol şartlarına uyum sağlamayı gerektiriyor. 20’li yaşlarda olsanız bile, eğer rahatınıza çok düşkün ve ben zora gelemem diyen biriyseniz Interrail sizi zorlayacak bir seyahat yöntemi olabilir. Elbette otellerde kalarak da Interrail yapılmaz mı yapılır ama Interrail’in olayı minimal lüks beklentisinde maksimum yer görmek. Yaşarken biraz zorlayıcı bir deneyim olsa da geriye dönüp bakınca “Of be keşke eskiye dönsem de tekrar yapsam” diyeceksiniz. Kısacası gezerken pek fazla keyfine varamasanız da, bir arkadaşınıza anlatırken kahkahalarla gülerek bahsedeceğiniz bol bol anılarınız olacak.
  Interrail İle İlk Kez Yurt Dışına Çıkacaklara Tavsiyeler
Yurt dışına ilk kez çıkmak insanın gözünü korkutabilen bir konu. Ama içiniz rahat olsun, insan her yerde insan, sadece bazı yöntem ve işleyiş farklılıkları var. Ama tabi bunları bilmezseniz kızgın bakışları üzerinize çekebilirsiniz ya da tren/uçak kaçırmak, ceza yemek gibi beklenmedik bir maddi yükler oluşabilir. O yüzden şu iki yazımız çok işinize yarayacaktır:
İlk Kez Yurt Dışına Çıkacakların Bilmesi Gerekenler
Yurt Dışında Sık Yapılan Hatalar
  Ücretsiz Öğrenci Pasaportu Nasıl Alınır
25 yaşından küçükseniz ve öğrenciliğe devam ediyorsanız, harç ödemeden pasaport çıkarttırabiliyorsunuz. 25 yaşından büyük öğrenciler de belli koşulları sağlarlarsa harçsız pasaport çıkartabiliyor. Öğrenmek için tıklayın: Harçsız Öğrenci Pasaportu
  Vize Gerekir Mi? Schengen Vizesi Nasıl Alınır?
Türkiye’den demiryolu ile Avrupa’ya gitmek için ya Bulgaristan üzerinden, ya da Yunanistan’dan geçmek gerekiyor. Yunanistan için Schengen Vizesi gerekiyor, Bulgaristan için ya Bulgar vizenizin olması ya da Schengen Vizesi olması gerekiyor. Yani paşa paşa vize alacaksınız. Bu durumda en mantıklısı 26 ülkede geçerli olan Schengen Vizesi’nden almanız. Böylece gönlünüzce Avrupa’da gezebilirsiniz. Schengen Vizesinin Geçtiği Ülkeler  ve Schengen Vizesi Nasıl Alınır öğrenmek için tıklayın. Interrail bütçenizi planlarken Schengen Vizesi Ücretini de hesaba katmayı unutmayın.
Diğer bir opsiyon One Country Pass ile vize  istemeyen tek bir ülkede gezmek ama bunun için önce oraya uçmanız gerekiyor. En güzel vizesiz gidilen ülkeler hakkında bilgi almak için tıklayın.
INTERRAIL’İN AVANTAJLARI NELER ?
👉  Ekonomik ve Pratik
Bizce işin ekonomik boyutundansa kazanılan deneyim boyutu tartıda daha ağır basıyor ama elbette böylesine bir deneyimi bu kadar bütçeyle yaşamak Interrail’in en büyük artısı. Havayolu şirketleri gibi sınırlı yer yok ve ücretler git gide artıyor. Ha 3 ay önce almışsınız, ha 1 gün önce, fiyat değişmiyor. (En erken 3 ay önce alabiliyorsunuz)
👉  Esnek Seyahat Avantajı
Interrail biletinin geçerlilik süreleri ve esnekliklerine göre 5 farklı çeşidi var. Belirli bir gün süresi içinde kaç gün ve kaç kere trenlere binebileceğinize siz karar veriyorsunuz. Elbette süre ve esneklik arttıkça fiyatlar da doğru orantılı şekilde artıyor. Ayrıca biletinizi tüm Interrail ülkelerinde geçerli Global Pass veya spesifik olarak sadece tek ülkede geçerli olan Regional Pass olarak da alabiliyorsunuz.
👉  Seyahatinizi Özgürce Planlama Olanağı
Evet Interrail’de sadece ve sadece trenleri kullanarak seyahat ediyorsunuz ama trenlerin sefer saatleri uçaklara nazaran daha sık olduğundan ve ana tren istasyonları havaalanları gibi şehrin dışında değil de tam merkezinde olduğundan bu size seyahatinizi özgürce planlama olanağı sağlıyor. Bir şehirden sıkıldınız mı o zaman spontane bir şekilde gece son treni yakalayabilirsiniz. Yani kesinlikle yakalamanız gereken bir uçağınız yok. Uzun x-ray kontrolleri, bitmeyen check-inler yok. Uçaktaki gibi çantanızda yanınıza alamayacağınız şeyler diye kısıtlamalar yok. 2 saat öncesinden garda olmanıza da gerek yok. Bazen trenleri kıl payı kaçırıyor bazen de sürpriz bir şekilde yakalıyorsunuz. Tabi ki arada turist olmanın getirdiği “görmedim, duymadım, bilmiyordum” durumları da olmuyor değil 🙂
👉 Kısa Sürede Çok Yer
Interrail’ın en büyük artısı bir sürü ülkenin birkaç haftaya sığdırılması. Bu 2-3 haftalık bir yolculuk, en azından Avrupa hakkında kabaca bir fikir edinmenize yetecek bir süre.
👉  Yeni Kültürler ve Deneyimler
Eminiz ki ülke ülke gezmenin kazandırdığı sosyal ve kültürel deneyimlerin değeri kesinlikle paha biçilemez ama trenle yolculuk yapmanın da keyfi bir başka. Tüm Interrail macerası boyunca bir trenden inip diğerine biniyor, gittiğiniz her ülkede bir tren macerası yaşıyor, yeni insanlarla dolayısıyla da yeni kültürlerle tanışıyorsunuz.
👉 Anı Biriktirmek
Seyahatiniz boyunca 20’li yaşlarda mutlaka yapılması gereken ve gezerken pek fazla keyfine varamayacağınız (bu yüzden ordayken ben naptım diyeceğiniz) ama bir arkadaşınıza anlatırken kahkahalarla gülerek bahsedeceğiniz bol bol anılarınız olacağını garanti ederiz.
INTERRAIL’İN DEZAVANTAJLARI NELER ?
👉 Schengen Vizesi Konusu
Vize almak ekstra bir uğraş ve bütçe demek. Hiç vize almadıysanız bile ne kadar uğraşlı olduğunu duymuşsunuzdur. Bin tane evrak toplamak, form doldurmak lazım. Schengen Vizesi İçin Gerekli Evrakları buradan öğrenebilirsiniz. Yine de öğrenciyken vize almak daha kolay ve denemeye kesinlikle değer.
👉 Yorucu Olması
Kimse Interrail’in çok kolay bir seyahat yolu olduğunu iddia etmiyor. Biliyoruz kolay değil tabi kilometrelerce yolu 2 – 3 haftaya sığdırmak. Enerji gerektiriyor. Oradan oraya yürümek, bazen aç kalmak bazen de marketten aldığınız 3-5 krakerle bütün geceyi geçirmek…
👉 Konfor Azlığı
Dediğimiz gibi, Interrail’in asıl felsefesi trenden trene koşup, az bütçeyle çok yer görmek, minimum harcama yaparak olabildiğinde çok yer görmek demek. Bu durum yolculuk sırasında, alışık olduğunuz konfor standartlarınızı biraz düşürmenizi gerektirebiliyor. Örneğin bir ülkeden diğer ülkeye geçerken, 12 saati trende geçirmek ve trende wc’ye gitmek, bir sonraki treni beklerken garda sabahlamak, tanımadığınız insanlarla aynı kompartmanı paylaşmak, oteller ve moteller yerine hostel ve misafirhanelerde konaklamak gibi gibi.
👉 Kısıtlı Zaman
Interrail’de amaç kısıtlı zamanda çok yer görmek olduğundan, her durakta kısıtlı zamanınız oluyor. Örneğin Roma’ya mı geldiniz, normal bir seyahat planıyla buraya uçakla gelecek olsaydınız muhtemelen en az 4 gününüzü ayırır sindire sindire gezerdiniz. Ama Interrail yaparken bu pek de akıllıca olmazdı. Çünkü biletinizin izin verdiği süre dahilinde, elinizden geldiğince sıkıştırılmış bir programa tabi olacaksınızdır.
👉 Mahremiyet
Elbette masrafları minimumda tutmaya çalışmanız, doğal olarak bir noktada kişisel alanınızın azalması durumunu da beraberinde getiriyor. Trenlerin kompartımanlarında, hostel ve dorm (yatakhane) gibi konaklama opsiyonlarında çoğunlukla hiç tanımadığınız, sizinle aynı dili konuşmayan hatta belki İngilizce bile konuşmayan kompartman / oda arkadaşlarınız olacak. Yeri gelecek, ortak paylaşımlı tuvaletler ve duşları kullanmanız gerekecek. Eğer kalabalık bir grupsanız belki hostellerde size özel oda bulmanız muhtemel ama yine de fazla heveslenmeyin. Aynı şekilde bütün gün yanınızda taşıyamayacağınız özel eşyalarınızı hostel odalarında bırakmanız gerekecek ama her yerde kilitli dolap bulmayı ummak büyük hata.
👉 Trenlerin Ekstra Rezervasyon Ücretleri
Interrail biletinizi aldınız ama ne yazık ki masraflarınız bunla sınırlı kalmıyor. Avrupa’da kimi trenlere binmek için Interrail biletinizin olması yetmiyor bir de yer için rezervasyon yapmanız gerekiyor. Mesela Almaya’da hiç bir ön hazırlık yapmadan trene binebilirlen, İspanya, İtalya, Fransa rezervasyon yapmanızı istiyor. Bu rezervasyonun da bir 10 Euro’ya varan ekstra ücreti olabiliyor. Özellikle yoğun bir dönemde, rezervasyon gerektiren bir trene rezervasyon yaptırmadan binerseniz, ayakta kalma ihtimaliniz oldukça yüksek. Hatta Bazı trenlere rezervasyon yaptırmadan ayakta bile gidemiyorsunuz.
👉 Bileti Kaybedersen Yanıyor
İnsan diyor ki devir dijital devir, barkodlar, çipler, takip sistemleri, adamlar bilgilerini de sisteme giriyor, kesin biletin başına bir şey gelse herhangi bir ülkeden adamlar yenisini basarlar ama ÖYLE DEĞİL. Aman biletinize sarılın, sakın kaybetmeyin. Kaybederseniz telafisi yok.
👉 Görünmeyen Harcamalar
– Eğer gezinize Türkiye’den başlıyorsanız, Interrail bilet ücretine ek olarak sınırda bazı ödemeler yapmanız gerekiyor. Yunanistan üzerinde çıkıyorsanız 13.26 Euro, Bulgaristan üzerinden çıkıyorsanız 14.94 Euro ödüyorsunuz.
– Interrail bileti ile tüm trenlere binemiyorsunuz. Intercity, EuroCity, TGV vb. gibi hızlı trenlere binmek isterseniz 2 basamaklı ücretler ödemeniz lazım.
👉 Tarih Değişikliği Yapamıyorsunuz
Ablanız erken mi doğurdu, trafik kazası mı atlattın, hiç umurlarında değil. Kesinlikle tarihlerde oynama yapılamıyor.
👉 İadesi Halinde Ceza Ödemesi
Yolculuk tarihinden 1 gün önceye kadar %15 kesinti ile paranızı geri alabiliyorsunuz. Yani tarih değiştirmeniz gerekiyorsa en mantıklısı iade edip, yeniden kesirmek.

`;
        let stepsImages = [ A1, A2, A3, A4 ];
        let { navMinified } = this.state;
        let vidSrc = 'https://www.youtube.com/embed/Uho8KfG0J60';

        return (
            <div className="app-wrapper">
                <Header active={"feriha"} navMinified={navMinified}/>
                <div style={{marginTop:140}} />
                <h1 className="title-feriha">Interrail</h1>
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