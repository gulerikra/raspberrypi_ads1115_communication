# raspberry pi ile ADS1115 okuması

Raspberry pi kartının analog giriş pini olmadığı için analog bir değeri raspberry pi ile okumak için ads1115 gibi bir analog dijital converter kartına ihtiyaç vardır.

Bu haberleşmede I2C haberleşme protokolü kullanılacaktır.

Bu örnekte A0 pininden alınan bir analog değeri ads1115 kartı ile raspberry pi üzerinden JavaScript yardımıyla okuma yapılacaktır.

Bağlantı;

![BDFVS](https://user-images.githubusercontent.com/62421679/214127557-235d50b4-f4fc-4f62-aeaf-248da62240c4.PNG)


A0 pini analog voltaj sinyali ile beslenir.


ADS1115 kartı;

![asddd](https://user-images.githubusercontent.com/62421679/214125110-6fc4ded4-0b49-4fbf-814a-ca8ca039736f.png)
