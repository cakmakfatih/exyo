import React, { Component } from 'react';
import Header from './../../Components/Header';
import FerihaContent from './../../Components/FerihaContent';
import Footer from './../../Components/Footer';

export default class AkademikKariyer extends Component {
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
        let vidSrc = "https://www.youtube.com/embed/M6dP1saOKRk";
        let info = `
        BÖLÜM 1
Lisansüstü Eğitim
Yüksek Lisans ve Doktora Nedir? 
Yüksek Lisans her lisans mezununun kendi alanında ve belirli şartlar dahilinde başka alanlarda yapabileceği, “lisansüstü eğitimin” ilk basamağıdır. Doktora ise yüksek lisanstan sonraki süreçtir ve doktora bitiren kişi Dr. Ünvanı alır.
Yüksek Lisans ve Doktora programları fakültelere değil “Enstitülere” bağlıdır. Dolayısıyla başvuru yapmayı düşündüğünüz üniversitede istediğiniz yüksek lisans ve doktora programının olup olmadığını, varsa bunların şartlarının neler olduğunu fakültelerin değil enstitülerin web sitelerinden kontrol etmelisiniz.
Örnek vermek gerekirse;
• Eğitim fakültelerinden mezun olan kişiler kendi alanlarında lisans üstü eğitime devam etmek için “Eğitim Bilimleri Enstitüleri’ne”
• İktisat, İşletme, Halkla İlişkiler, Turizm İşletmeciliği, Sosyoloji gibi sosyal bilimler kapsamındaki lisans üstü programlar için “Sosyal Bilimler Enstitüleri’ne”
• Fizik, Kimya, Matematik, Biyoloji vb lisans üstü eğitim bölümleri için ise genellikle “Fen Bilimleri Enstitüleri’ne başvuru yapılmaktadır.
Bunun dışında İnkılap Tarihi Enstitüsü gibi farklı enstitülerde mevcut olabilmektedir. 

Yüksek Lisans ve Doktora Neden yapılır?
Yüksek lisans ve doktora sanılanın aksine sadece akademisyen olmak için yapılmaz. Özel sektör ve kamu sektörü çalışanları için de lisans üstü eğitimin getirdiği avantajlar vardır. Örnek vermek gerekirse öğretmenler lisans üstü eğitime devam ederek MEB bünyesinde farklı görevler alabilmektedir. Aynı şekilde kamu kurumlarında uzman yardımcısı, uzman gibi birçok kadro lisans üstü eğitimle sıkı sıkıya bağ içindedir. 
Bunun yanı sıra yüksek lisans ve doktora yapmanın en bilinen gerekçesi üniversitede akademisyen olabilmektir. Bununla ilgili detaylar aşağıda verilecektir.

Yüksek Lisans ve Doktora Nasıl Yapılır?
Yüksek Lisans üniversitelerin büyük çoğunluğu için 2 yıllık bir süreçtir. Bunun ilk yılında (2 dönem) size verilen yüksek lisans derslerini alırsınız (çoğunlukla her dönem 3-4 adet). Daha sonra tez döneminiz başlar ve tez yazmanız gerekir. Bu süreçte devlet üniversitelerinde harç ödenmemektedir. Ancak YÖK’ün belirlediği şartlara göre 3 yıl içerisinde yüksek lisansınızı bitirmezseniz harç ödemeniz gerekir. Mevcut kanunlara göre dersleri veya tezi uzatmanız nedeniyle okuldan atılmanız söz konusu değildir. Ancak meclis şu anda atılmayı tekrar mümkün kılmayı planlamaktadır.
Doktora da aynı şekilde ders ve tez dönemlerinden oluşur. Üniversiteler doktoranın asgari süresini kendileri belirlemektedir. Örneğin bazı üniversitelerde ders dönemi 2 dönem, bazılarında 3 dönemdir. Bu üniversitenin inisiyatifindedir. Daha sonra teze geçilir. Tez döneminin de asgari kaç dönem süreceğini üniversite belirleyebilir. Ancak YÖK’ün belirlediği kurallara göre doktoran en fazla 6 yıl sürmektedir. 6 yıldan sonra üniversiteye harç ödenmesi söz konusudur. 6 yıl doldurulduğunda doktoradan atılmanız yürürlükteki kanunlara göre mümkün değildir. Ancak meclis şu anda atılmayı tekrar mümkün kılmayı planlamaktadır.
Yüksek Lisans bittikten sonra Doktora aynı veya başka üniversitede yapılabilir. Nerede yapılırsa yapılsın yeniden başvuru yapılır. Doktoraya doğrudan geçiş mümkün değildir.

Torpilim yoksa yüksek lisans hayal mi?
Kesinlikle hayır. 
Öncelikle şunu belirtelim: Örneğin bir üniversite yüksek lisansa 5 kişi alacak. 150 kişi başvuru yaptı. Üniversite başvuran kişileri puan sırasına dizer (ales, lisans, ve varsa dil). Bu sıralama içerisinden en fazla 20 kişiyi mülakata/yazılı sınava alabilir. Yani 5 kişi alacaksa bunun en fazla 4 katı kadar kişi sınava girebilir. Bu durumda ilk aşamada büyük oranda engellenmektedir. Çünkü 21. Kişinin istediği kadar torpili olsun sınava giremediği için başta elenmiş olur. İkinci aşamada bahsettiğimiz 20 kişi sınava alınır. Sözlü veya yazılı sınav yapılabilmektedir. Sözlü sınavlarla ilgili çoğunlukla kuşku bulunsa da grubumuzda da defalarca örneğini gördüğümüz gibi hiçbir torpili olmayan kişiler de yüksek lisansı kazanmaktadır. Çünkü ikinci aşamada yüksek lisansa kimin girip kimin girmediği sadece sınav sonucuna göre belirlenmez. Lisans ortalamanız, alesiniz ve varsa diliniz de sınav puanıyla harmanlanarak hesaplanır. Bu durumda puanları yeterince yüksek olan birinin yalnızca sınav puanı düşürülerek elenmesi imkansız olmasa da zordur.
Bu nedenle torpilsiz hiçbirşey olmaz, torpilsiz yüksek lisans kazanılmaz gibi sözlere itibar etmeyiniz. Eğer bir üniversitede olmadıysa bir başka üniversitede mutlaka olacaktır (Tabi gerçekten yeterince puana sahipseniz).

Okulu uzatmam yüksek lisansa başlamama engel midir?
Hayır. 

Yüksek Lisans ve Doktoraya başlamak için ne yapmalıyım?
Yüksek lisans başvurularında istenen kriterleri üniversiteler kendisi belirler. Ales puanı ve lisans ortalamanız esastır. Bunları her üniversite ister. Ancak bu puanların yüzde kaçının alınacağı enstitü mevzuatına bağlıdır. Ayrıca dil puanının istenmesi sözkonusudur;
• Enstitü dil puanı istemeyebilir,
• Enstitü dil puanı için asgari bir puan belirleyebilir (Örneğin 55 ve altı olan kişilerin başvurusu kabul edilmeyebilir)
• Enstitü dil puanınızın yüzdesini alabilir. (Örneğin enstitülerde dil puanının %15’i alınabilir ve son ortalamanıza eklenebilir)
Bu kurallar aynı üniversitenin farklı enstitülerinde farklı belirlenebilir. Örneğin A üniversitesinin Eğitim Bilimleri Enstitüsü yüksek lisans için dil puanı istemezken, Sosyal Bilimler enstitüsü dil puanınızın %10’unu alarak hesaba katabilir.
Doktora için ise tüm üniversiteler için en az 55 dil puanı gerekmektedir.
Başvuru yapmak istediğiniz lisansüstü programındaki puan hesaplaması için en doğru bilgiyi ilgili enstitünün “Enstitü Yönetmeliği”nden edinebilirsiniz. Bu nedenle grubumuzdaki bir kişinin size A üniversitesi yüksek lisansta dil istemiyor demesi geçerli bir cümle olmayabilir. O kişinin başvurduğu enstitü sizinkinden farklı olabilir. Bu yüzden enstitü sitesini ziyaret etmeyi unutmayın.

Bütünleşik Doktora Nedir?
Bütünleşik doktora yüksek lisansı ve doktorayı içinde barındıran bir eğitim türüdür, ancak yüksek lisans tezi yazılmamaktadır. Doktora olan her enstitüde bütünleşik doktora da olacak diye bir kaide yoktur. Bütünleşik doktora doktoradan ayrıdır ve her yerde olmayabilir. Bu bilgi enstitü web sitelerinden öğrenilebilir.

Lisans bölümümden farklı bir bölümde yüksek lisans yapabilir miyim?
Mümkündür. Ancak böyle bir kaide yoktur. Örneğin İşletme mezunu iseniz ve İktisat anabilim dalında yüksek lisans yapmak istiyorsanız önemli olan tek şey iktisat yüksek lisansının sizi kabul ediyor olmasıdır. İktisat yüksek lisans ilanında yalnızca iktisat bölümü mezunları başvurabilir yazıyorsa oraya başvuramazsınız. Ama başka bir üniversitenin iktisat bölümü işletme mezunlarını kabul ediyor olabilir. Bunun için farklı üniversitelerdeki enstitülerin web sitelerinden araştırma yapmanız gerekmektedir. 
Bunun yanı sıra bazı bölümlerin yüksek lisans ilanında “Herhangi bir lisans bölümünden mezun olmak” yazabilir. Bunun anlamı en az 4 yıllık fakülte bitiren herkes bu ilana başvurabilir demektir. 
Elbette tekrar edelim ki bu tamamen üniversitenin vereceği karardır.

Bilimsel hazırlık nedir?
Lisansınızdan farklı bir yüksek lisansı kazandıysanız bazı üniversitelerde bilimsel hazırlık uygulanabilir. Bilimsel hazırlık programında kazandığınız yüksek lisansın, lisans derslerinden size dersler verilir. Bilimsel hazırlık çoğunlukla 1 yıl (2 dönem) sürer ve her dönem ortalama 3-5 ders verilir. 
Aynı şekilde yüksek lisans bölümünüzden farklı bir doktora bölümünü kazandıysanız doktora öncesi bilimsel hazırlık uygulanabilir. Bu durumda kazandığınız doktora programının yüksek lisansındaki dersler verilmektedir. 
Bilimsel hazırlık bazı üniversitelerde bulunmayabilir. (Bkz. Enstitü Yönetmelikleri)


Yüksek lisans ve doktora yaparken üniversite dışında bir işte çalışabilir miyim?
Evet yüksek lisans yaparken istediğiniz yerde çalışabilir veya hiçbir yerde çalışmayabilirsiniz.

Yüksek lisans ve doktora yaparken devam zorunluluğu var mıdır?
Öncelikle her iki programda da tez yazarken düzenli bir okula gidiş söz konusu değildir. Danışmanınızla belirlediğiniz şekilde belirli aralıklarla bir araya gelerek tezle ilgili müzakerelerde bulunursunuz.
Ancak, ders dönemleri için farklı durumlar söz konusudur. Üniversiteye, enstitüye, bölüme ve hatta hocaya göre bu durum değişir. Bazı yerlerde mutlaka devam isterler, bazılarında ise çalışanlara ve uzakta olanlara müsamaha gösterilebilir. Bu nedenle eğer çalışıyorsanız ve başka bir şehire başvurmayı düşünüyorsanız önceden bu konuda araştırma yapmanız uygun olabilir.

Aynı anda iki yüksek lisans veya iki doktora yapabilir miyim.
Evet. İki yüksek lisansa, iki doktoraya veya aynı anda bir yüksek lisans ve bir doktoraya kayıt yaptırabilirsiniz.

Ales puanım 78, lisansım 80, dil puanım 55. Yüksek lisansa kabul edilir miyim?
Bu soru geçersizdir. Yukarıda da bahsettiğimiz üzere her bölümün puan dinamikleri farklıdır. Bölümünüzü bilmeden bu soruya verilen cevaplara itibar etmeyiniz. A bölümü için bu puanlar yetebilir, ancak B bölümü için düşük kalabilir. Aynı şekilde A üniversitesi sizi bu puanlarla kabul edebilir, B üniversitesi kabul etmeyebilir. Bu nedenle bu tarz sorularda verilen cevaplar çoğunlukla afakidir. En iyisi kendi bölümünüzde yüksek lisans yapan kişilere danışmak ve üniversitelerin öğrenci alırken yayınladıkları puan listelerini önceden takip etmektir.

Yüksek lisans ve doktora alımları ne zaman oluyor? Başvuruları ne zaman başlıyor?
Lisans üstü öğrenci alımları 1. Dönem ve 2. Dönem başlarında olabilir. Güz dönemi dediğimiz 1. Dönem alımları yazın olur. 2. Dönem alımları ise genellikle Aralık sonu – Ocak – Şubat aylarında yapılmaktadır.
Her enstitünün başvuru tarihleri farklıdır. Düşündüğünüz enstitünün web sitesindeki duyuruları takip ediniz.
Ayrıca her bölümde 2. Dönem alımı yapılmamaktadır. Bununla ilgiyi bilgi enstitülerden alınmalıdır.
 
BÖLÜM 2
AKADEMİSYENLİK
Akademisyen Kimdir?
Akademisyen, üniversite ve benzeri yüksek öğrenim kurumlarında öğretimi gerçekleştiren, araştırma yapan ve özgün araştırmalarıyla alanına katkıda bulunan kişilere verilen genel mesleki unvandır. Üniversitelerde ve araştırma kurumlarında görev yapan öğretim yardımcıları olançevirmenler, uzmanlar, öğretim planlamacıları, araştırma görevlileri (üniversite asistanı), okutmanlar ve öğretim görevlileri ile öğretim üyeleri olan yardımcı doçentler, doçentler,araştırma profesörleri, profesörler ve ordinaryüs profesörler farklı derecelerden akademisyenlerdir (Kaynak: Wikipedia)

Yüksek lisans ve doktora yapan kişiye akademisyen mi denir?
Hayır. Yüksek lisans ve doktora yapan kişi akademik çalışma yapan kişidir. Ancak akademisyen sıfatına sahip olması için aşağıdaki soruda belirtilen ünvanlardan birine sahip olmalıdır.

Öğretim Üyesi, Öğretim Görevlisi, Araştırma Görevlisi.. Ne bunlar?
En özet haliyle; 
Öğretim üyesi : Yardımcı Doçent, Doçent ve Profesör
Öğretim yardımcısı : Araştırma görevlisi, Çevirmen, Okutman, Öğretim görevlisi, Uzman

İster araştırma görevlisi olsun, ister uzman olsun, isterse öğretim görevlisi olsun, hatta isterse bir lisede öğretmen olsun doktorasını bitirmiş her kişi yardımcı doçentliğe başvuru yapma hakkına sahiptir.

Araştırma Görevlisi, Öğretim Görevlisi ile Öğretim Üyesi arasında ne fark var?
Araştırma görevlisi bir danışman eşliğinde “öğretim üyeliğine hazırlanan” kişidir. Ders vermez. Yükümlülüğü yüksek lisansını ve doktorasını yapmak, alanında kendini geliştirmek ve öğretim üyeliğine hazırlanmaktır.
Öğretim üyesi yardımcı doçent, doçent veya profesör ünvanlarından birine sahip kişidir.
Öğretim Görevlileri öğretim üyesi değildir. Öğretim görevlileri üniversitelerde “yalnızca” ders veren kişidir. Ancak akademik kariyer yapmak gibi bir zorunluluğu yoktur. Örneğin lisans mezunu olarak öğretim görevliliğine başlayan kişi isterse hiçbir zaman yüksek lisans veya doktora yapmayabilir. İsterse yapabilir ve doktoradan sonra yardımcı doçent olmayı hedefleyebilir.

Öğretim Görevlisi, Uzman, Okutman, Çevirmen olmak için ne yapmak lazım?
Öğretim görevlisi alımları Yüksek Öğretim Kurulu’nun “Öğretim Üyesi Dışındaki Öğretim Elemanı Kadrolarına Naklen veya Açıktan Yapılacak Atamalarda Uygulanacak Merkezi Sınav ile Giriş Sınavlarına İlişkin Usul ve Esaslar Hakkında Yönetmeliği” uyarınca yapılmaktadır. Bu yönetmeliği dikkatlice okumanız gerekmektedir. 
YÖNETMELİK LİNKİ : 
http://www.mevzuat.gov.tr/Metin.Aspx?Me ... %20Uygulan

Örnek olarak yönetmelikten bir bölüm sunalım:
(4) Öğretim Görevlisi kadrosuna başvuru için aranacak özel şartlar şunlardır:

a) Lisans düzeyinde eğitim yapılan birimlere (rektörlüğe bağlı bölümler dâhil) başvuracak öğretim görevlisi adaylarında en az yüksek lisans mezunu veya lisans mezunu olmak şartıyla en az alanında beş yıl tecrübeli olmak,

b) Güzel Sanatlar Fakülteleri, Eğitim Fakültelerinin Güzel Sanatlar Eğitimi Bölümleri, Konservatuarlar ile ön lisans (2 yıllıklar*) düzeyinde eğitim yapılan birimlere başvuracak öğretim görevlisi adaylarında en az lisans mezunu olmak ve belgelendirmek kaydıyla ** alanları ile ilgili iki yıl tecrübeli olmak.

* parantez bizim tarafımızdan eklenmiştir
** SGK dökümü ile

Uzman, çevirmen gibi kadrolar için yönetmeliğe bakabilirsiniz.

Öğretim Görevlisi, uzman veya çevirmen olduktan sonra doktora yaparsak öğretim üyesi olabilir miyiz?
Evet. Her ne kadar bu kadrolarda iken doktora yapma zorunluluğunuz olmasa da, yapmanız halinde Yardımcı Doçentliğe başvuru hakkınız vardır.

Doktora yapan herkes yardımcı doçent olabilir mi?
Hayır. Devletin doktora yapan herkesi yardımcı doçent olarak atama zorunluluğu yoktur. Araştırma görevlileri dahi doktoralarını bitirdiklerinde yardımcı doçent olacak diye bir kaide yoktur. Yardımcı doçent kadroları üniversitelere YÖK tarafından verilmektedir. YÖK’ün bu kadroyu vermesi halinde üniversite kadroyu ilana çıkarır ve şartlar tutuyorsa başvuru yaparsınız.



Bu kadrolar için yaş sınırı var mı?
Yalnızca araştırma görevlisi olmak için ilk başvuru tarihi itibariyle 35 yaşını doldurmamış olmak gerekir.
Bunun dışındaki kadrolar için yaş sınırı yoktur.

Bu kadrolara girmek için torpil mi gerek?
Hayır. İlk bölümde yüksek lisans alımlarında torpille ilgili verdiğimiz cevap bu soru içinde geçerlidir.

Bu kadroların ilanları nerededir? 
https://yoksis.yok.gov.tr/ilansayfa/

Araştırma Görevlisi olmak için ne yapmam gerekiyor?
Araştırma görevlisi alımları iki türlüdür:
1) CARİ USÜL (Eski usül)
2) ÖYP (Öğretim Üyesi Yetiştirme Programı)

Cari usül araştırma görevlisi alım süreci;
Örnek: Uşak Üniversitesi İktisadi İdari Bilimler Fakültesi İşletme Bölümü’nün araştırma görevlisine ihtiyacı vardır. Elinde YÖK’ten alınmış bir kadro boşluğu ilanı varsa bu ilanı çıkarır. Şartlarını belirler. Örneğin şartlarına 
• “işletme bölümü mezunu olmak ve işletme bölümünde yüksek lisans yapıyor olmak”, 
• Lisans mezunu olmak ve işletme bölümünde yüksek lisans yapıyor olmak (yani lisans bölümü farketmez)
Vs. yazabilir. Siz bu ilanı gördüğünüzde başvurmak istiyorsanız istenen belgeleri süresi içerisinde üniversiteye ulaştırırsınız. Aynı yüksek lisans alımlarında olduğu gibi öncelikle başvuranlar puan sırasına dizilir. Kadroya alınacak kişi sayısı kaç ise bunun 4 katı kadar kişi sınava çağırılır. Bu durumda 5. Kişiden itibaren olanların başvurusu elenmiş olur. Daha sonrasında yazılı sınav yapılır (sözlü yapılmıyor). 
Cari usülden alınan araştırma görevlisi sayısı oldukça azdır.
Cari Usül alım ilanları için link: 
https://yoksis.yok.gov.tr/ilansayfa/

ÖYP nedir?
ÖYP mazisi uzun olmayan bir araştırma görevlisi alımı usülüdür. Henüz 4 yıldır uygulanmaktadır. Cari usüle göre epey farklıdır. Yazılı veya sözlü hiçbir sınav yapılmaz. Yalnızca “ÖYP PUANINIZ” esas alınır.
YÖK’ün ÖYP sayfası : http://www.yok.gov.tr/web/oyp

ÖYP Puanı Nedir?
ALES puanınızın %60’ı, Lisans ortalamanızın %25’i ve Yabancı Dil puanınızın %15’ini alıp toplayarak elde ettiğiniz puandır.
(Lisans ortalaması 4 üzerinden olanlar bunu 100’lük sisteme çevirecek. Bu çevirme işlemiyle ilgili google’dan YÖK NOT DÖNÜŞÜM TABLOSU olarak arama yapınız).
ALES puanı 70’in altında olanlar ÖYP’ye başvuru yapamaz.

ÖYP Alımları nasıl yapılıyor?
Öncelikle YÖK her yıl için alacağı yaklaşık kişi sayısını belirleyip ilan ediyor. Örneğin bu sene 2000 kişi alınacak diyor (yaklaşık).
Yıl içerisinde 3-4 kere kadro açıklanıyor. Ne zaman olacağı konusunda bir netlik olmasa da çoğunlukla Temmuz, Ekim, Aralık aylarında kadro açıldığı görülmekte.
Örneğin Temmuz ayı geldiğinde YÖK 1000 kişilik bir kadro ilanı açıyor. Burada sizin bölümünüz olabilir de, olmayabilir de. Ya da bölümünüzle ilgili 1 kadro da çıkabilir 40 kadro da çıkabilir. Sizin istediğiniz şehirde çıkadabilir, çıkmayadabilir. Bunların hepsi belirsizdir. Bu nedenle kadro açıklanmasını beklemek stresli bir süreçtir çünkü önceden hiçbir tahmininiz olmaz genellikle. 
Kadrolar açıklandığında son başvuru tarihi duyurulur. O tarihe kadar YÖK’ün sisteminden tercih yaparsınız. 10 tercih hakkınız bulunur. Tıpkı üniversite sınavında yaptığımız tercihler gibi belirli bir kadroyu tercih edenler arasından en yüksek ÖYP puanına sahip olan kişi kadroya atanır. Herşey bu kadar basittir.

ÖYP’de torpil işler mi?
ÖYP araştırma görevlisi alımlarında torpil olması fizik kuralları açısından mümkün değildir. Herşey ÖYP puanınıza dayanır.

a) Dil sınavına girmedim. 
b) Dil puanım çok düşük.
ÖYP’ye başvuramaz mıyım?
ÖYP’ye başvurmanız için asgari dil puanı uygulaması yoktur. Başvuruda sadece “varsa” dil puanınızın %15’i alınır. O nedenle dil puanınız 10 bile olsa başvururken bunu belirtin. 

ALES’e girdim. Lisans ortalamamı biliyorum. ÖYP Puanımı hesapladım. Peki bu puanlar yeter mi?
Grubumuzda en çok sorulan sorular arasında “ALES’im X, lisans ortalamam Y ise öyp olur mu?” sorusu yer almaktadır.
Bu soruya geçerli bir cevap verilemez. Çünkü öncelikle kimse sizin bölümünüzü bilmemektedir.
Yapmanız gereken tek şey 4 yıldır bölümünüzle ilgili yapılan alımlarda gerçekleşen taban ve tavan puanları incelemektir. Bunun dışında kimsenin söylediği “yerleşirsin”, “yerleşemezsin maalesef”, “belki yerleşirsin” gibi cevaplara itibar etmeyiniz.
Taban ve tavan puan araştırmasını detaylandıralım:
Örnek 1: Örneğin sizin için “aman yerleşeyim de neresi olursa olsun” cümlesi geçerliyse, “Bölüm bazında taban ve tavan puanlara” bakmalısınız. Yani böylece örneğin 2014 Temmuz alımlarında İlköğretim Matematik Öğretmenliği Türkiye çapında en düşük X, en yüksek Y puanıyla alım yapmıştır gibi bir sonuca varırsınız. 
Örnek 2: “İlla da X şehrini istiyorum” ya da “İlla da Y üniversitesini istiyorum” diyorsanız bu durumda “Fakülte Bazlı Taban ve Tavan Puanlara” bakmalısınız. Örneğin İşletme mezunusunuz ve İstanbul’da bir kadro almak istiyorsunuz. İstanbulda İşletme hangi üniversitelerin fakültelerinde varsa bunun bir listesini çıkarmakla başlayabilirsiniz. Daha sonra “Fakülte bazlı taban ve tavan puanlardan” örneğin Boğaziçi Üniversitesi İİBF en düşük ve en yüksek kaçla almış bunu öğrenmiş olursunuz. 
Taban ve tavan puan araştırması yapmak ÖYP’ye hazırlanan herkes için en önemli ve öncelikli konudur. Bunu yapmadığınız takdirde alesten, dilden kaç almanız gerektiğini asla öngöremezsiniz. 
Bir kişinin lisans ortalaması örneğin 79 olsun. ÖYP’nin kendi bölümünden açtığı kadroların taban puanı 85 olsun. Bu durumda bu kişi “ÖYP puanımı 85 yapmak için ales ve dilden kaç almam gerekir” sorusunun cevabını çok rahatlıkla verebilecektir.
TABAN VE TAVAN PUANLARLA İLGİLİ TABLOLARI GOOGLE’DA ARAYARAK KOLAYLIKLA ELDE EDEBİLİRSİNİZ.

ÖYP’ye atandıktan sonra ne oluyor?
Öncelikle dil puanınız önemli. İki durum söz konusu
1)Dil puanınız 65’den düşük ise;
ÖYP sizden 65 dil puanı almanızı ister. Atanırken dil puanınız 65’in altında ise, üniversiteniz sizi bir dil merkezine yönlendirecektir (genelde Ankara, İstanbul, İzmir, Trabzon, Antalya ve bunun gibi “Yabancı Dil Merkezi’ne” sahip diğer şehirler). 6 ay burada dil eğitimi alırsınız. Bu eğitime gitmeden önce size 30.000 liralık bir senet imzalatılır. 6 ay bittiğinde atandığınız üniversiteye geri dönersiniz. Dil puanı aldığınız süre içinde lisansüstü eğitime başlayamazsınız, ancak maaşınızı alırsınız.
Öyp’ye ilk atama tarihinden itibaren 1 yıl içerisinde 55 almanız gerekir. 55 aldıysanız 2. Yıl içerisinde bunu mutlak surette 65’e çıkarmalısınız. Aksi takdirde işinize son verilecektir. Ayrıca üniversite sizden 30.000 liralık senedi ödemenizi isteyebilir. 
(Atandığınızdaki puanınız 55-65 arasında ise 65 puan almak için 2 değil 1 yılınız var)

2) Dil puanınız 65’den yüksek ise;
Lisans üstü eğitime başlayabilirsiniz. Atandığınız üniversitede yüksek lisans/doktora yok ise sizi başka bir üniversiteye gönderirler. Gönderirken 120.000’liralık bir senet imzalatılır. Bu nedenle başka bir üniversiteye gönderildiyseniz, araştırma görevlisi olduğunuz sürece, ÖYP’den hiçbir şekilde istifa edemez ve kadronuzu başka bir yere aldıramazsınız. Gittiğiniz bu üniversitede ne kadar kaldıysanız, geri döndüğünüzde o kadar mecburi hizmetle yükümlü olursunuz (Yardımcı doçentlikten itibaren). Mecburi hizmet boyunca da istifa edemezsiniz, başka bir üniversiteye geçemezsiniz. Örneğin Mardin Üniversitesi’ne atanıp Ege Üniversitesi’ne yüksek lisans ve doktora için gönderildiyseniz ve burada 6 yıl kaldıysanız, yardımcı doçent olduktan sonra Mardin Üniversitesi’nde 6 yıl görev yapmanız gerekecektir.
Ancak atandığınız üniversitede yüksek lisans/doktora yapabiliyorsanız başka bir yere gitmenize gerek kalmaz. Senet imzalamazsınız ve bu durumda mecburi hizmetiniz de olmaz. Araştırma görevliliğinden istediğiniz zaman istifa edebilir, başka bir üniversiteye geçebilirsiniz.

ÖYP’yi kazanıp gitmezsem ne olur?
ÖYP kapsamında araştırma görevlisi kadrosuna atanmaya hak kazandığı halde göreve başlamayanlar, göreve başladıktan sonra istifa edenler, 10 uncu madde uyarınca kurumlarınca ilişikleri kesilenler ile ÖYP araştırma görevlisi kadrosunda bulunanlar üç yıl süre geçmeden yeniden ÖYP araştırma görevlisi kadrolarına başvuramazlar, bu süre geçtikten sonra yapılacak ilk başvuruda ÖYP puanı % 10 oranında düşürülür (Kaynak: oyp.com.tr).

ÖYP’ye başvurmak için yüksek lisansa başlamış olmam mı gerekir?
Bu kadro ilanındaki şartlara bağlıdır. Kadrolar genellikle çok çeşitli çıkmaktadır. Örneğin İşletme bölümü için alınan bir kadroyu ele alalım. İlanlar şöyle olabilir:
• İşletme bölümü mezunu olmak
• İşletme bölümü mezunu olmak ve işletme bölümünde yüksek lisans yapıyor olmak
• İşletme bölümü mezunu olmak veya işletme bölümünde yüksek lisans yapıyor olmak
• İktisadi İdari Bilimler Fakültesi bölümlerinden birinden mezun olmak
• İşletme bölümü mezunu olmak veya işletme bölümünde yüksek lisans yapıyor olmak veya yapmış olmak veya işletme bölümünde doktora yapıyor olmak
• …….
Bu tarz ilanlar çıkabilir. Kadroya başvururken “VE”, “VEYA” gibi kelimelere çok dikkat etmelisiniz. Şartlarınıza uymayan bir ilana yanlışlıkla başvurursanız birdaha hiçbir zaman ÖYP başvurusu yapamazsınız.

ÖYP Araştırma görevlilerinin maaşı ne kadardır?
2014 Haziran itibariyle araştırma görevlisi maaşı 2.350 TL’dir. Gelişmekte olan üniversite sınıfındaki üniversiteler bu maaşa ek olarak ödeme yapmaktadır. Bunlar çoğunlukla doğu illerimizdeki üniversitelerdir. Geliştirme ödenekleri 1000 liraya kadar çıkabilmektedir. Böylelikle bazı illerimizde araştırma görevlileri 3500 TL’ye yakın maaş alabilmektedir.


(Bu dosyada verilen tüm bilgiler öneri ve genel bilgi mahiyetindedir. İlgili kurumların yönetmeliklerinde değişiklikler olabilir ve bu dosyadaki bazı süreçler zaman içerisinde değişebilir. Bu durumda grubumuz sorumluluk kabul etmemektedir. Bu nedenle akademisyenliği düşünen kişilerin yönetmelikleri takip etmesi önerilir)

        `;
        let { navMinified } = this.state;
        return (
            <div className="app-wrapper">
                <Header active={"feriha"} navMinified={navMinified}/>
                <div style={{marginTop:140}} />
                <h1 className="title-feriha">Akademik Kariyer</h1>
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