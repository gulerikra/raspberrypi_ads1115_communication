const ADS1115 = require('ads1115')
 
const i2c = require('i2c-bus')
i2c.openPromisified(1).then(async (bus) => {
  const ads1115 = await ADS1115(bus)
  // ads1115.gain = 1
 
  for (let i = 0; i < 1000; i++) {  // 1000 adet veri okur
    let value = await ads1115.measure('0+GND')  // A0 pininden veri okuma
    // '0+GND' = A0 pinini okumak için
    // '1+GND' = A1 pinini okumak için
    // '2+GND' = A2 pinini okumak için
    // '3+GND' = A3 pinini okumak için
    console.log(value*5.3/28274) // A0 pininden max 5.3V okunabilir
  }
})
