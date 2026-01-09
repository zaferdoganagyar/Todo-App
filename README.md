# Zer-iş Gold – Frontend Web Projesi

Bu proje, **Zer-iş Gold** markası için geliştirilmiş, modern ve mobil uyumlu bir **frontend e-ticaret arayüzü** çalışmasıdır. Projede kullanıcı deneyimi (UX), responsive tasarım ve tarayıcı tarafı veri yönetimi ön planda tutulmuştur.

---

##  Proje Özellikleri

###  Navbar (Gezinme Menüsü)

* Masaüstü ve mobil için **ayrı davranışlara sahip responsive navbar**
* Masaüstünde klasik yatay menü yapısı
* Mobilde **hamburger menü** ile açılıp kapanan yapı
* Menü içinden filtreleme ve sayfa yönlendirme

---

###  Dark / Light Mode

* Tek tıkla **Dark Mode – Light Mode** geçişi
* Kullanıcı tercihi **Local Storage** üzerinde saklanır
* Sayfa yenilense bile tema tercihi korunur

---

###  Butonlar & Etkileşimler

* Hover, transition ve scale efektleri
* Mobil ve masaüstü için optimize edilmiş dokunma alanları
* Kullanıcı aksiyonlarına anlık görsel geri bildirim

---

###  Logo & Görseller

* PNG formatında özel logo kullanımı
* Tarayıcı sekmesi (favicon) desteği
* Responsive görsel boyutlandırma

---

###  Sepet (Cart) Sistemi

* Ürün ekleme / çıkarma
* Ürün adedi artırma (+) / azaltma (−)
* Sepet içeriğini anlık güncelleme
* Sepet ürün sayısı badge gösterimi

---

###  Local Storage Mantığı

* Sepet bilgileri `localStorage` üzerinde saklanır
* Tarayıcı kapatılsa bile sepet verileri kaybolmaz
* Tema (dark/light) tercihi local storage ile yönetilir

---

###  Hesaplamalar

* Sepette:

  * Toplam ürün adedi
  * Ürün bazlı fiyat hesaplaması
  * Genel sepet toplam tutarı
* Hesaplamalar **Vue computed properties** ile yapılır

---

###  Filtreleme Sistemi

* Ürünleri:

  * Ayar (14 Ayar / 22 Ayar)
  * Tür (Yüzük, Bileklik, Kolye)
* Çoklu filtre desteği
* Mobilde açılır-kapanır filtre paneli

---

###  Resim Geçişleri (Slider)

* Ürün kartlarında otomatik resim geçişi
* Hover ile başlatılan / durdurulan slider mantığı
* `setInterval` ve `clearInterval` kullanımı

---

###  Mobil Uyumluluk (Responsive Design)

* **Mobile-first** yaklaşım
* Tailwind CSS breakpoint’leri kullanıldı (`md`, `lg` vb.)
* Mobilde:

  * Hamburger menü
  * Açılır filtre alanları
  * Dokunmatik uyumlu butonlar

---

##  Kullanılan Teknolojiler

* **HTML5** – Sayfa yapısı
* **CSS3** – Temel stil mantığı
* **Tailwind CSS** – Utility-first modern tasarım
* **JavaScript (ES6+)** – Uygulama mantığı
* **Vue.js (CDN)** – Reaktif yapı ve state yönetimi
* **Local Storage API** – Tarayıcı tarafı veri saklama

---

##  Proje Yapısı (Özet)

```
/project-root
│
├── index.html
├── app.js
├── /visuals
│   ├── logo.png
│   ├── diamond.png
│   └── ürün görselleri
└── README.md
```

---

##  Amaç

Bu proje;

* Frontend geliştirme becerilerini sergilemek,
* Vue.js + Tailwind CSS entegrasyonunu göstermek,
* Gerçek bir e-ticaret senaryosuna yakın bir yapı kurmak
  amacıyla geliştirilmiştir.

---

##  Notlar

* Proje tamamen **frontend** odaklıdır.
* Backend veya ödeme sistemi entegrasyonu yoktur.
* Geliştirilmeye ve ölçeklenmeye uygundur.

---


## Projeyi Çalıştırma (PC & Mobil) 

### Gereksinimler

* Güncel bir web tarayıcısı (Chrome, Edge, Firefox)
* Dosyaları açabilen bir işletim sistemi (Windows / macOS / Linux)

### PC Üzerinde Çalıştırma

* Proje klasörünü bilgisayarına indir.
* index.html dosyasına çift tıkla.
* Proje tarayıcıda açılır.

### Mobilde Çalıştırma

* Bilgisayarda projeyi Live Server ile çalıştır.
* Tarayıcıda açılan adres genelde şu formattadır: http://127.0.0.1:5500
* Bilgisayarının yerel IP adresini öğren: Windows: ipconfig / macOS/Linux: ifconfig
* Telefonda tarayıcıya şu şekilde yaz: http://BILGISAYAR_IP:5500
* Site mobilde açılır.

**Hazırlayan:** Zafer Doğan Ağyar
