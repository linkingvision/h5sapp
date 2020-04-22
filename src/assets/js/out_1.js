document.addEventListener('plusready', function() {
    var webview = plus.webview.currentWebview();
    plus.key.addEventListener('backbutton', function() {
        webview.canBack(function(e) {
            if(e.canBack) {
                webview.back();
            } else {
                webview.close(); //hide,quit
                //plus.runtime.quit();
            }
        })
    });
    });
    //纯js调用HBuilder提供的api
    document.addEventListener('plusready', function(a) {
    var first = null;
    plus.key.addEventListener('backbutton', function() {
            //首次按键，提示‘再按一次退出应用’
            if (!first) {
                first = new Date().getTime();
                console.log('再按一次退出应用');//用自定义toast提示最好
                console.log("first1",first);
                setTimeout(function() {
                    first = null;
                }, 1000);
            } else {
                console.log("first2",first);
                if (new Date().getTime() - first < 1000) {
                    plus.runtime.quit();
                }
            }
        }, false);
    });