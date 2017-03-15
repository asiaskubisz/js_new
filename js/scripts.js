function Telefon(marka, cena, kolor) {
    this.marka = marka;
    this.cena = cena;
    this.kolor = kolor;
}

Telefon.prototype.printInfo = function(){
	console.log("Marka telefonu to " + this.marka +", kolor to " + this.kolor +", a cena to " + this.cena +".")}
    
var iPhone7 = new Telefon("Apple", 2250, "srebrny");
var SamsungGalaxyS6 = new Telefon("Samsung", 1300, "czarny");
var OnePlusOne = new Telefo("ChineseMaker", 400, "zielony");
    
iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();