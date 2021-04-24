const color = ["Red", "Green", "Blue", "Black","Silver","White", "Yellow", "Orange","Gray","Tan","Gold","Purple","Pink"];

const make = ["BMW","Buick","Cadillac","Chevy","Chrysler","Dodge","Ford","GMC","Honda","Hyundai","Infinti","Jaguar","Jeep","Kia","Lexus","Mercedes","Nissan","Mitsubishi","Subaru","Toyota","Volkswagen","Volvo"];

const getCar = () => {
  let randomColor = Math.floor(Math.random() * color.length);
   let randomMake = Math.floor(Math.random() * make.length);
  return color[randomColor] + " " + make[randomMake];
};