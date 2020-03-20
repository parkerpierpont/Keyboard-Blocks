export * from './tools';
if (!!document) {
    const versionNumber = '0.0.15';
    const setScriptTags = () => {
        const script = document.createElement('SCRIPT');
        script.src = `https://unpkg.com/@register-ui/keyboard-base@${versionNumber}/dist/register-keyboard/register-keyboard.esm.js`;
        script.setAttribute('keyboard-base-c', "true");
        script.type = "module";
        const nscript = document.createElement('SCRIPT');
        nscript.src = `https://unpkg.com/@register-ui/keyboard-base@${versionNumber}/dist/register-keyboard/register-keyboard.js`;
        nscript.setAttribute('nomodule', "true");
        document.head.appendChild(script);
        document.head.appendChild(nscript);
    };
    if (document.head.querySelectorAll('[keyboard-base-c]').length === 0) {
        setScriptTags();
    }
}
//# sourceMappingURL=index.js.map