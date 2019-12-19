### 字符串base64转码和解码

* 使用方式  
  > var base = new Base64();//保证引入路径真确
  > //1.加密  
  > var str = '124中文内容';  
  > var result = base.encode(str);  
  > //document.write(result);  
  > //2.解密  
  > var result2 = base.decode(result);  
  > document.write(result2);  