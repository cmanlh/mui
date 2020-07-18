/**
 * @description dynamically load resources
 * 
 * @author luhong <cmanlh@163.com>
 */
(function (global) {
    const DOT_SEARCH_PATTERN = /\./g;

    function Loader() { }

    Loader.prototype.js = async function (url) {
        await new Promise((resolve, reject) => {
            var script = document.createElement("script");
            script.src = url;
            script.type = "text/javascript";
            script.async = false;
            var fun = function () {
                script.removeEventListener('load', fun);
                resolve();
            };
            script.addEventListener('load', fun);
            script.addEventListener('error', function () {
                var errMsg = '资源加载出错：'.concat(url);
                console.error(errMsg);
                reject(errMsg);
            });
            document.getElementsByTagName('head')[0].appendChild(script);
        });
    }

    Loader.prototype.text = async function(url){
        let response = await fetch(url);
        if(response.ok){
            return response.text();
        }
    }

    global.$loader = new Loader();
}(window));