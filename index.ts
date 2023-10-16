interface Window {
    console1: Console;
    ng: any;
    $0: any;
    $: any;
    qp: any;
}

console.log = console.info;

// window.console1 = window.console1 !== undefined ? { ...window.console1 } : { ...console };

// console.warn = (...args) => {
//     if (typeof (args[0]) === 'string' && (args[0].includes(' does not look like a valid JavaScript identifier.') || args[0].includes('d numeric value for column width, but got a string') || args[0].includes('[webpack-dev-server] W') || args[0].includes('hin a few seconds from the win'))) {
//         ;
//     } else {
//         window.console1.warn(...args);
//     }
// };

// console.log = (...args) => {
//     if (typeof (args[0]) === 'string' && args.some(a => a?.includes && (a.includes(' ExpressionChangedAfterItHasBeenCheckedError') || a.includes('******') || a.includes('Failed to execute') || a.includes(', but only font icon name is provid')))) {
//         ;
//     } else {
//         window.console1.log(...args);
//     }
// };

//#region remove exception
if (window.$) {
    window.$('app-exception-handler')?.siblings(':hidden')?.show().parent().css({ border: '2px red solid' });
    window.$('[appmarsloader]')?.remove();
    window.$('app-exception-handler')?.remove();
}
//#endregion remove exception

//#region get active element/component
const _element = document.getElementsByTagName('')[0] || window.$0;
let thiss = window.$0;
if (_element && window.ng?.getComponent && _element.nodeName !== '#comment') {
    thiss = window.ng.getComponent(_element);;
}
//#endregion get active element/component

//#region queryParameter
window.qp = location.href.split('?')[1];
if (window.qp?.length > 0) {
    window.qp = window.qp.split('&')
        .reduce((a, v) => {
            const [key, value] = v.split('=');
            a[key] = value;
            return a;
        }, {});
}
//#endregion queryParameter