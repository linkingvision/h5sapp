### 使用cordova打包vue项目

#### 环境配置

##### 1、cordova安装

使用npm安装

```
npm install -g cordova
```

输入 

```
cordova -v
```

有显示版本号即安装成功

##### 2、JAVA环境安装

需求jdk1.8.0

https://www.oracle.com/cn/java/technologies/javase/javase-jdk8-downloads.html

下载好以后按照提示安装

设置好环境变量。

打开终端输入

 

```
java -version 
```

 

```
javac 
```

没有报错即成功。

##### 3、安卓环境安装

下载***Android studio***

在***https://developer.android.com/studio***这里下载最新版本即可



使用***Android studio***的sdkmanager 

SDK Tools里下载即可。 如果需要测试空的APP版本号不能高于29.0.0

在SDKplatform里 下载Android版本API level不能高于29（具体看cordova requirements里的提示）

安装好设置环境变量即可。

##### 4、Gradle环境安装

下载 在官网（https://gradle.org/releases/）下载最新版本的 [binary-only]



在适当的位置新建文件夹，将下载好的压缩包解压进这个文件夹。



把这个文件夹的位置作为gradle环境变量的路径添加进去即可。



#### vue项目配置

将dist的输出目录调整至cordova app里的www里后进行

```
npm run build
```

。

#### cordova打包

##### 1 、首先创建一个cordova APP 

```
cordova create yourappname
```



##### 2、添加要打包的平台

```
cordova platform add android
```

或者

```
cordova platform add android
```





在这一步过后因为android不允许进行HTTP连接。

所以在这里进入到***platforms\android\app\src\main\AndroidManifest.xml***里

<application><application/>里添加一句

```
android:usesCleartextTraffic="true"
```



或者是在VUE项目里改写全部采用HTTPS方式进行连接。

##### 3、进行检查

```
cordova requirements
```

无报错即可进行下一步打包

##### 4、进行打包

输入

```
cordova build android
```

等待完成即可得到未签名版本的apk



##### 5、签名

在生成APK的目录下 新建一个build.json文件来自动化签名操作

```
{
    "android": {
        "release": {
            "keystore": "test.keystore",
            "alias": "test",
            "storePassword": "123456",
            "password": "123456"
        }
    }
}

```

之后直接执行

```
cordova build --release
```

 即可得到打包好的已签名apk
