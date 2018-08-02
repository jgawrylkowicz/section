//import 'tinycolor2' from 'tinycolor2';

hexo.extend.helper.register('lighten', function(color, value){
  
  var tinycolor = require("tinycolor2");
  return tinycolor(color).lighten(value);
});