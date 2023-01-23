# adc_okuma

Raspberry pi kartının analog giriş pini olmadığı için analog bir değeri raspberry pi ile okumak için ads1115 gibi bir analog dijital converter kartına ihtiyaç vardır.

Bu örnekte A0 pininden alınan bir analog değeri ads1115 kartı ile raspberry pi üzerinden nodejs yardımıyla okuma yapacağız.

Bağlantı;

ADS1115     ,      RaspberryPi

VDD        →      5V

GND        →      GND

SCL        →      GPIO3 

SDA        →      GPIO2

A0 pini güç kaynağından beslenebilir.

![asddd](https://user-images.githubusercontent.com/62421679/214125110-6fc4ded4-0b49-4fbf-814a-ca8ca039736f.png)
