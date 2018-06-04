import React, { Component } from 'react';
import Header from './../../Components/Header';
import FerihaContent from './../../Components/FerihaContent';
import Footer from './../../Components/Footer';

export default class DoguEkspresi extends Component {
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
        let vidSrc = "https://www.youtube.com/embed/iI6Yvh9ESlQ";
        let { navMinified } = this.state;
        let info = `
Doğu Ekspresi bir çocukluk hayalidir. Tren yolculuğu, 24 saat sürmesine rağmen hiç bitmesini istemediğin bir seyahattir. Aslında bir yere ulaşmak için gidilmez. Asıl olan, yolda olmaktır. O yüzden, herkese ama herkese hayatında en az bir defa bu seyahati yada kimilerine göre macera olan bu deneyimi mutlaka yaşamalarını tavsiye ediyorum. Kars‘a gitmenin en güzel, en keyifli yolu olan Doğu Ekspresine dair tüm detaylar başlıyor.
Doğu Ekspresi, Ankara’dan kalkan Kars’ta son bulan kompartımanlı bir tren seferidir. Doğuya doğru ilerlediğinden ve bir çok şehire uğradığından dolayı Doğu Ekspresi adını almıştır. Ucuz, yorulmadan ve üstelik güzel manzaraları, dağları dereleri doya doya seyrederek, sabah uyanırken gün ışığının camdan süzülerek seni uyandırdığı bir yolculuk, bir hikaye.
Doğu Ekspresi, farklı farklı insanların hayatlarına şahit olmak, onların hikayelerini dinlemek, sohbet etmek, tanımaktır.
Yolculuk 24 saat sürer ama inanın bana sıkılmak bir yana dursun, vagonları doyasıya gezerken, kondüktörlerle, sizin gibi hayallerinin peşinden koşan seyahat severler ile sohbet ederek, hayatının deneyimlerinden birisini yaşadığın efsane güzel serüvendir.
Doğu Ekspresi Güzergahı Ve Saat Bilgileri
Nerden nereye gidiyor ? Hangi saatlerde ve duraklarda duruyor ?
Doğu Ekspresi treni haftanın hergünü Ankara’dan 18:00’da; Kars’tan ise 08:00’de kalkıyor. Ara duraklara hangi saatlerde ulaşacağı ve ne kadar duracağı yol durumundan dolayı belli olmuyor.
Doğu Ekspresi güzergahı ise : Ankara > Kırıkkale > Kayseri > Sivas > Erzincan > Erzurum > Kars

Erzurum en önemli duraklardan birisi Doğu Ekspresi için : Ankara Kars Treni Doğu ekspresi
Önemli Not: Ankara’daki hızlı tren çalışmalarından dolayı 11.12.2017 tarihine kadar trenin kalkış yeri Kırıkkale’nin Irmak beldesi olarak değişmiştir.
Eski tren garı önünden saat 18:00’da kalkan otobüs, yolcularını Irmak’a götürüyor. Zaten eski tren garı ile yeni tren garı yan yana.
Otobüs yolculuğu, tren biletinize dahil. Kars’tan gelirken de yine aynı şekilde Irmak tren garında iniliyor ve TCDD otobüsleri ile Ankara’ya ulaşıyorsunuz.

Kars’da bulunan Ani Harabeleri : Doğu Ekspresi önerilerim
Tren küçük istasyonlarda 2-3 dakika duruyor, koşup dışardan bir şeyler almak için kendinizi riske atmayın. Büyük şehirlerde 6-7 dakika duruyor ve böylece hem ihtiyaçlarınızı alabilir hemde 4-5 şehre ayak basabilirsiniz.
Dilerseniz İstanbul veya Eskişehir’den de yüksek hızlı tren ile Ankara’ya gelebiliyorsunuz. Ama bunun için ayrı bir bilet almanız gerekiyor ve tek yön fiyatı 70 TL civarında. Böylece Ankara’daki yeni tren garına yüksek hızlı tren ile gelip, oradan Doğu Ekspresi maceranıza başlayabilirsiniz.
3. Doğu Ekspresi Vagonları
Sosyal medyayı aktif kullananlar için güzel bir haberim var: tren yolculuğunun büyük bir kısmında internet çekiyor. Ama öyle çok hızlı bir internet beklemeyin. Ayrıca, yol üstünde çoğu noktada GSM firmalarının internetleri çekmeye biliyor.
Ayrıca, kedisinden ve köpeğinden ayrılamayanlar için de güzel bir haberim var: vagonlara evcil hayvan da alıyorlar. Ancak hayvanınıza %50 indirimli bilet almanız gerekiyor ve sadece pulman vagonda geçerli oluyor.

Sömestr tatilini bitirip yola çıkan bir öğrenci. “Git çocuk git,bu tren senin hayallerine gidiyor.” : Doğu ekspresi
VAGONLAR
Pulman: Normal koltuklu vagondur. Bir tarafta 2 çiftli koltuk bir tarafta 1 tekli koltuk mevcuttur. Koltuklar gayet geniştir. Ama Doğu Ekspresi ruhu bu vagonlar için uygun değil. Ya kuşetli ya da yataklı vagonları tercih etmek gerekir. Bu vagonlar, genele kısa mesafeli yolculuklarda kullanılıyor.

Pulman Vagon : Doğu ekspresi
Örtülü Kuşetli: Bir kompartımanda (bölüm, oda olarak da bilinir.) 4 kişilik koltuklar bulunuyor ve koltuklar rahatça uyuyabileceğiniz, yataklara dönüşebiliyor.
Gayet temiz nevresim veriyorlar ve yatağınızı kendiniz yapıyorsunuz. Yalnız burada bir önerim var : Eğer, çift olarak gelmişseniz, diğer 2 kişi de kadın/erkek ise, genelde sizi ayırabiliyorlar. Yani kızlar bir kompartımanda, erkekler ayrı. O yüzden, ya 2 çift gidin, ya da 4 koltuğu da satın alın derim.
DİKKAT : Örtülü kuşetlide bilet alacaklar yukarıdaki önerimi dikkatli okuyun

Örtülü-Kuşetli Vagon : Doğu ekspresi
Yataklı: Bir kompartımanda 2 kişilik, biri altta biri üstte yataklar bulunuyor. Kompartıman içinde mini buzdolabı, priz, masa ve lavabo(tuvalet değildir) da bulunuyor. Rahatına düşkünlere duyurulur ! Ben, bu kısımda Doğu Ekspresi ile yolculuk yaptım ve oldukça da konforlu bir seyahat geçirdim.

Yataklı Vagon : Doğu ekspresi
Yemekli: 4’er kişilik masalar halinde restorandan oluşan vagondur. Yemek listesini de aşağıda belirteceğim. Tüm fiyatları görebileceksiniz. Merak etmeyin : Fiyatlar gayet güzel.

Yemekli Vagon : Doğu ekspresi
Not : Konfor açısından kesinlikle yataklı vagonu tavsiye ediyorum. 
4. Doğu Ekspresi Bilet Fiyatları
Doğu Ekspresi fiyatları, bana sorarsanız çok pahalı değil. Yani yurtdışındaki, özellikle Avrupa‘daki tren fiyatlarını göz önüne alınca, gayet makul diye düşünüyorum. Aşağıdaki fiyatlar, Ocak 2017 tarihine ait. Kişi başı tek yön şu şekilde :

Doğu Ekspresi Biletim : Doğu ekspresi
Pulman Fiyatları
Tam: 46   TL
Öğrenci(13-26): 36.50 TL
60-64 Yaş: 36.50 TL
65+ Yaş: 23.50 TL
Çocuk(7-12): 23.50 TL
Basın,Öğretmen: 36.50 TL
Örtülü Kuşetli Fiyatları 
Tam: 61 TL
Öğrenci(13-26): 51.50  TL
60-64 Yaş: 51.50  TL
65+ Yaş: 38.50 TL
Çocuk(7-12): 38.50 TL
Basın,Öğretmen: 51.50  TL
Yataklı (2 Kişi alırsanız) Fiyatları
Tam: 96 TL
Öğrenci(13-26): 86.50 TL
60-64 Yaş: 86.50 TL
65+ Yaş: 73.50 TL
Çocuk(7-12): 73.50 TL
Basın,Öğretmen: 86.50 TL
(1 Kişi alırsanız,kompartıman tek kişiye kapanıyor)
Tam: 116  TL
Öğrenci(13-26): 106.50 TL
60-64 Yaş: 106.50 TL
65+ Yaş: 93.50 TL
Çocuk(7-12): 93.50 TL
Basın,Öğretmen: 106.50 TL
Biletinizi bu bağlantıdan satın alabilir ve güncel fiyatlara ulaşabilirsiniz. Bileti satın aldıktan sonra, hem mail hem de mesaj olarak PNR bilgiler gelecek. Trene binerken o bilgileri sizden istiyorlar hepsi o kadar. Biletin çıktısına gerek yok yani.
Ayrıca, bir çoğunuz muhtemelen bilet alırken yer yok diye isyan edeceksiniz. Ya da bilet alırken yer var sanıp, yanlış bölümden bilet alacaksınız. O yüzden aşağıdaki ekran görüntülerini dikkatle okuyarak Doğu Ekspresi biletleri almanızı öneririm :
EYBİS sitesine geldikten sonra, Ankara-Kars ya da tam ters rotada biletini gitmek istediğiniz gün için aratın. Sonra, aşağıdaki ekran görüntüsü karşınıza gelecek :

Eybis sitesinden ilgili günde tüm biletleri inceliyorum
Normalde bu bileti alırken, bilet varmış gibi görünüyor değil mi ? Doğru. Aslında var ama Pulman Vagonunda yer var. O yüzden, yataklı vagonların dolu olup olmadığını, trenin vagonlarını tıklayarak da görebilirsiniz. Mesela :

Yalnız, özellikle yataklı trenlerin dolu olduğunu görüyorum. Sadece pulman vagonlarda yer var.
Yukarıda seçtiğim gün için, bilet var demesine rağmen tüm yataklı vagonlar dolu idi. O yüzden, bilet alamadım. Peki ne yapmak lazım ? Her gün sabah 11 civarında gün gün Doğu Ekspresi biletlerini ve vagonlarını teker teker incelemek lazım.
Veya, diyelim ki bilet bulamadınız. O halde, eğer ki Doğu Ekspresi macerasını tek yönde yaşamak yeter diyorsanız, bir de Kars-Ankara rotasında biletlere bakın. Çünkü bir çok kişi Ankara-Kars rotasında Doğu Ekspresi deneyimini yaşayıp, dönüşü Kars’tan uçak ile yapıyor.
Diğer bir öneri daha : Erzurum-Kars arasında bu deneyimi yaşayın. Ama bu deneyim gece trende yaşanan o güzel deneyim şeklinde olmayacak. En azından bu treni ve rotayı, birazcık da olsa görmüş olursunuz. Hiç yoktan iyidir değil mi ?
5. Doğu Ekspresi’nde Temel İhtiyaçlar
Şimdi ise, Doğu ekspresi yolculuğunda karşılaşacağınız ihtiyaçlarınızı tek tek anlatacağım. İlk konumuz : Yemek
Doğu Ekspresi’nde Yemek
Trenin restoranında; çorbalar, ızgaralar, atıştırmalıklar, mezeler, alkolsüz içeçeklere kadar her şey mevcut. Fiyat konusuna gelince; restoran özel işletme olduğu için esnaf lokantasından birazcık pahalı. Ama çay 2 tl, ızgaralar 15 TL civarında. Lakin, özellikle yemekler mikro dalga fırında ısıtılıp, öyle servis ediliyor.
Doğu Ekspresinde artık alkollü içecek satışı yapılmıyor.

Restoran Menüsü : Doğu ekspresi yemek fiyatları
Kredi kartı geçiyor fakat tren sürekli hareket halinde olduğu için internetin çekmesini beklemek gerekiyor. Sizlere tavsiyem mutlaka yanınızda yemek, atıştırmalıklar ve sabah kahvaltısı götürmeniz.
Böylece, sabah sadece restorandan taze demlenmiş çayınızı alsanız yeter. Biz, yeni tren garından alışveriş yapmıştık. Sandviç, abur cubur, içecekler v.s alıp, yataklı vagondaki dolabımıza koymuştuk.
Bu arada, yataklı ve kuşetlide priz bulunuyor ve elektrik ile çalışan kettle veya ocak götürebilirsiniz. Yapanlar vardı. Bizzat gördüm.
Yataklı vagonlarda minibarın içersinde iki adet çikolata, meyvesuyu, çubuk kraker ve su bulunuyor. 
Şimdi sıra geldi, bana göre en önemli konuya yani Cağ Kebabı’na. Erzurum’dan geçerken bu meşhur kebabı tadabilirsiniz.
Erzurum’a varmadan 30-45 dakika önce aşağıdaki numarayı arayın. Ama aramadan önce, kondüktörlerden ne zaman varacağınıza dair bilgi alın. İstasyona varınca, sizi mislerrr gibi kokan, hazır Cağ Kebabı bekliyor olacak. Ama uyarayım : Öyle çok fazla bir beklentiniz olmasın derim. Genelde soğuk geliyor. Bilginize…
Gel Gör Kebap:(0442) 213 3253

Doğu Ekspresi’nde Kompartıman ve Temizlik
Her kompartıman sefere çıkılmadan özenle temizleniyor. Doğrusunu söylemek gerekirse, ben bu konuda ikna oldum. Çünkü herhangi bir kirlilikle karşılaşmadım.
Kondüktörler kuşetli vagonlardaki kompartımanlara yıkanmış, ütülenmiş ve paketlenmiş bembeyaz çarşafları dağıtıyorlar. Yataklı vagonda ise seferden önce hazırlanmış olan yataklarınız sizleri bekliyor. Bir çok tuvalet, en azından sefer öncesinde temiz oluyor. Hem tuvaletlerde, hem de yataklı vagonlardaki lavabolarda sabun ve tuvalet kağıdı da oluyor.
Doğu Ekspresi’nde Tuvaletler
Yataklı vagonda, vagonun başında ve sonunda, birisi alaturka diğeri alafranga olmak üzere 2 tuvalet bulunuyor.
Yataklı vagonda 10 adet kompartıman olduğu için bu tuvaletler fazla pislenmiyor. Tuvalet kağıdı da var ancak yolculuğun sonuna doğru kalmayabiliyor.
Gerçeği söyleyeyim : Kuşetli ve pulman vagonlarda ise tuvalet çok fazla kişi tarafından kullanıldığı için temizlik sıkıntısı oluyor.

Yataklı vagonda uyuduğum yatağım. Doğu ekspresi yataklı vagonları oldukça rahat
Doğu Ekspresi’nde Güvenlik 
Özellikle hanımların bu konuda çokça soruları oldu. Doğu Ekspresi’ne bir kadın olarak gitsem, tadımı kaçıracak sorunlar yaşar mıyım demiştiniz : Bence bir sorun olmaz. Çünkü, onlarca kadın bu macerayı yaşamaya geliyor ve kimse kimseyi rahatsız etmiyor doğrusu.
Ayrıca, kompartımanların, yani odaların kapıları içerden kitlenebiliyor, dışardan maalesef kitlenmiyor.
Yataklı vagon, trenin sonunda yer aldığı için vagon girişinde konduktör bulunuyor. Yine de sizlere tavsiyem, restorana giderken değerli eşyalarınızı yanınıza almanız yada ara ara gelip kompartımanı kontrol etmeniz yönünde. Hani ne olur ne olmaz diyerekten !

Saçlarını gurbette beyazlatıp,en sonunda memleketine dönen bir amcamız. : Doğu ekspresi
Doğu Ekspresinde Telefon ve İnternet
Wifi maalesef yok. Yolculuğun büyük kısmında telefon çekiyor, 3G ise şehir merkezlerine yakın yerlerde çekiyor. Ben telefonumu çantama koydum ve yolcuğun, manzaranın, sohbetin tadını çıkardım.
Doğu Ekspresi’nde Valizler Durumu
Yataklı vagon dışındaki tüm vagonlarda valiz alanı bulunmuyor. Sadece küçük sırt çantalarının sığabileceği baş üstü raflar var. Kuşetli vagonda ise, iki kişiyseniz, yataklardan birini açıp valiz alanı olarak kullanabilirsiniz.
Doğu Ekspresi’nde Kıyafet Önerileri
Kars, özellikle kış mevsiminde, gündüzleri -10, geceleri ise -40 derecelerde olabiliyor. O yüzden; gitmeden önce çok iyi bir mont, eldiven, içlik, bot, pantolon almanızı öneririm.
Ben Decathlon‘dan şu kıyafetler ile Kars’a gitmiştim : Uzun Kollu T Shirt, kayak içliği, pantolon, eldiven, bot, mont. Özellikle mont 3 katmalı idi ve gayet sıcak tutmuştu.

Kars, geceleri -20 derece civarında oluyor
Doğu Ekspresi’nde Yataklar
Pulman vagonlarda, yatak konforu yok. Bildiğiniz koltukta uyuyarak gidebilirsiniz.
Kuşetli vagonlarda, oturduğunuz koltuklar aynı zamanda ranza şeklinde yatak oluyor. Gece, kondüktörler gelip yardımcı oluyorlar. Ancak kuşetlide 4 yatak olduğundan dolayı açıldığı zaman neredeyse koyun koyuna yatacak şekilde kalıyorsunuz. Bilginize…
Yataklı vagonda gayet rahat bir yatak konforu bulabilirsiniz. Şahsen ben çok ama çok rahat ettim. Sabah uyandığımda gördüğüm manzara ise hala aklımda…
Doğu Ekspresi Treninde Sıcaklık
Her kompartımanda ısısını ayarlamak  için panel mevcut. Bazen tren çok sıcak oluyor ve ben yolculuk sırasında 2-3 defa paneli tamamen kapattım. Ama bazen paneli kapatınca, yeniden ısınması 40-45 dakika sürüyor. Merak etmeyin. Bu yolculukta üşüyeceğinizi hiç sanmıyorum.
Sigara içiliyor mu ? 
Trende sigara içilmesi yasak tabi. Fakat siz kapınızı kitledikten sonra içerde istediğiniz kadar sigara içebilirsiniz. (Not: Yine de içmeyiniz. İçenleri gördüm. O yüzden yazmak istedim.)
Yolculuk Yorucu Geçiyor Mu ?
Pulmanda seyahat etmek tabiki yorucu oluyor, ancak yataklı ve kuşetli için aynı şeyi söylemem. Trenden indikten sonra kendinizi hiç yorgun hissetmiyorsunuz. Şahsen evde uyuduğumdan daha güzel uyudum. Normalden çok daha dinç hissettim.
Trenlerden Elektrik Var Mı ? 
Pulman vagonda priz bulunmuyor. Kuşetlide 1 adet, yataklıda ise 2 adet priz bulunuyor. 24 saat boyunca elektrik kesintisi olmadan telefonlarınızı ve elektronik eşyalarınızı şarj edebiliyorsunuz.
6. Doğu Ekspresi İle Ne Zaman Gitmeli
Doğu’ya kar yakışır. Ben nedense böyle seviyorum ! O yüzden, bana göre en güzel zaman Ocak-Şubat ayları.
Dağların ve derelerin arasından geçerken, o mükemmel bembeyaz karlı manzaraları görmek paha biçilemez. Sabah uyandığımda gördüğüm o sisli-puslu tepelerin manzaraları hala aklımda !

Trenin son vagonundan bir bakış. : Doğu ekspresi
2. alternatif olarak; Doğu’nun uçsuz bucaksız yemyeşil yaylalarını görmek. İsviçre’yi andıran doğamıza bir bakmak için ise Mayıs-Haziran aylarını öneriyorum. Özellikle Kars halkı bu dönemi çok seviyormuş.
Kars’ta nerede konaklanır diye soracak olursanız, Kars’ta Konaklamaönerilerimize bakınız.
 Yukarıda anlattım ama bir kez daha anlatmam gerek diye düşünüyorum : Kuşetli kompartımanda tüm koltuklar boş görünürken; bir kız, bir erkek bilet aldınız diyelim.
Sonra 2 hanım da aynı kompartımandan yer aldı. Onlar, o kompartımanda erkek olduğunu bile bile yerlerini almış olsalar da, görevli gelip erkeği sırf erkeklerin olduğu bir kuşete yollayabiliyor.
Ayrıca uyku vakti geldiğinde kadınlar bir kompartımanda, erkekler başka bir kompartımanda yatacak şekilde dağıtılabilir.
Yani kompartımanınızda 3 kişilik kadınlı erkekli bir grup varsa bile, yatarken kadın kadına yada erkek erkeğe olacak şekilde ayarlanabilir.
Bunun çözümü olarakta diğer 2 koltuğu çocuk yolcu şeklinde alabilirsiniz, böylece 4 koltukta sizin olur. Ya da 2 çift olarak gidebilirsiniz. Yeter ki o kompartımanın 4 koltuğu da sizin olsun.

Kars : Ankara Kars tren gezisi yapacaklara önerilerimiz
Yastık konusunda titizseniz, yanınızda yastık kılıfı ya da kendi yastığınızı götürebilirsiniz.
Tuvalet kağıdı yolculuğun sonuna doğru bittiğinden dolayı, yanınızda tuvalet kağıdı götürebilirsiniz.

`;
        return (
            <div className="app-wrapper">
                <Header active={"feriha"} navMinified={navMinified}/>
                <div style={{marginTop:140}} />
                <h1 className="title-feriha">Doğu Ekspresi</h1>
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