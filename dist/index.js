Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var EasyFormsEmbed = function (_a) {
    var formUrl = _a.formUrl, prefillInfo = _a.prefillInfo;
    //regex to get ID of form from form link
    var regex = new RegExp('id=.*');
    var match = regex.exec(formUrl.toString());
    var formUrlId = match[0].slice(3);
    //regex to get appPathUrl from form link
    var appPathUrlRegex = new RegExp('www..*/index.php');
    var appPathUrlMatch = appPathUrlRegex.exec(formUrl.toString());
    var appPathUrl = appPathUrlMatch[0].slice(0, -9);
    React.useEffect(function () {
        var scriptElement = document.createElement('script');
        var prefillInfoData = prefillInfo;
        var options = {
            // ID of the form
            id: formUrlId,
            theme: 0,
            container: 'c7',
            height: '479px',
            form: '//' + appPathUrl + 'index.php?r=app%2Fembed',
            defaultValues: prefillInfoData,
        };
        scriptElement.type = 'text/javascript';
        scriptElement.src =
            'https://' + appPathUrl + 'static_files/js/form.widget.js';
        scriptElement.onload = scriptElement.onreadystatechange = function () {
            var rs = this.readyState;
            if (rs)
                if (rs !== 'complete')
                    if (rs !== 'loaded')
                        return;
            try {
                // @ts-ignore
                new window.EasyForms().initialize(options).display();
            }
            catch (e) {
            }
        };
        var scr = document.getElementsByTagName('script')[0];
        var par = scr.parentNode;
        par.insertBefore(scriptElement, scr);
    });
    return (React__default["default"].createElement("div", { id: "c7" },
        "Fill in the",
        ' ',
        React__default["default"].createElement("a", { href: formUrl.href }, "online form")));
};

exports.EasyFormsEmbed = EasyFormsEmbed;
//# sourceMappingURL=index.js.map
