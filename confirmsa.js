var confirmsa = {};
confirmsa.config = {};

confirmsa.config.containerElement = null;
confirmsa.config.zIndex = 2013;
confirmsa.config.yesButtonText = "Yes";
confirmsa.config.noButtonText = "No";
confirmsa.config.direction = "ltr";
confirmsa.config.textAlign = "center";
confirmsa.config.blockUI = true;

confirmsa.configurations = function () {
    return {
        containerElement: confirmsa.config.containerElement,
        zIndex: confirmsa.config.zIndex,
        yesButtonText: confirmsa.config.yesButtonText,
        noButtonText: confirmsa.config.noButtonText,
        direction: confirmsa.config.direction,
        textAlign: confirmsa.config.textAlign,
        blockUI: confirmsa.config.blockUI
    };
};

confirmsa.confirm = function (message, confirmedCallback, notConfirmedCallback, className, options) {
    var config = confirmsa.configure(options);

    confirmsa.removeConfirmElement();

    className = confirmsa.getClassName(className);

    config.containerElement.innerHTML += '<div id="confirmsaPluginConfirmBox"><p>' + message + '</p><p class="confirmsa-btnsHolder"><button id="confirmsaPluginConfirmBoxYesBtn" class="confirmsa-button">' + config.yesButtonText + '</button><button id="confirmsaPluginConfirmBoxNoBtn" class="confirmsa-button">' + config.noButtonText + '</button></p></div>';

    var holder = document.getElementById('confirmsaPluginConfirmBox');
    holder.style['z-index'] = config.zIndex;
    holder.style['text-align'] = config.textAlign;
    holder.style.direction = config.direction;

    holder.className = className + " confirmsa-showConfirmBox";

    confirmsa.configureBlockUI(config);

    var yesBtn = document.getElementById('confirmsaPluginConfirmBoxYesBtn');
    yesBtn.className += ' ' + className + '-btn';
    yesBtn.focus();

    confirmsa.setCallback(yesBtn, confirmedCallback);

    var noBtn = document.getElementById('confirmsaPluginConfirmBoxNoBtn');
    noBtn.className += ' ' + className + '-btn';

    confirmsa.setCallback(noBtn, notConfirmedCallback);
};

confirmsa.configure = function (options) {
    var config = new confirmsa.configurations();

    if (options) {
        config = confirmsa.setOptions(options);
    }

    if (!config.containerElement) {
        config.containerElement = document.getElementsByTagName('body')[0];
    }

    return config;
};

confirmsa.getClassName = function (type) {
    var returnal;
    switch (type) {
        case 'important':
            returnal = 'confirmsa-showConfirmBox-i-c';
            break;
        case 'normal':
            returnal = 'confirmsa-showConfirmBox-n-c';
            break;
        case 'notImportant':
            returnal = 'confirmsa-showConfirmBox-ni-c';
            break;
        default:
            returnal = 'confirmsa-showConfirmBox-n-c';
            break;
    }
    return returnal;
};

confirmsa.setOptions = function (options) {
    var configs = new confirmsa.configurations();

    if (options.containerElementc) {
        configs.containerElement = options.containerElement;
    }
    if (options.zIndex) {
        configs.zIndex = options.zIndex;
    }
    if (options.yesButtonText) {
        configs.yesButtonText = options.yesButtonText;
    }
    if (options.noButtonText) {
        configs.noButtonText = options.noButtonText;
    }
    if (options.direction) {
        configs.direction = options.direction;
    }
    if (options.textAlign) {
        configs.textAlign = options.textAlign;
    }
    if (options.blockUI) {
        configs.blockUI = options.blockUI;
    }

    return configs;
};

confirmsa.removeConfirmElement = function () {
    var element = document.getElementById('confirmsaPluginConfirmBox');
    if (element) {
        element.parentNode.removeChild(element);
    }
    var blockUiDiv = document.getElementById('confirmsaPluginBlockUiDiv');
    if (blockUiDiv) {
        blockUiDiv.parentNode.removeChild(blockUiDiv);
    }
};

confirmsa.setCallback = function (elem, callback) {
    var _callback;
    if (callback) {
        _callback = function () {
            callback();
            confirmsa.removeConfirmElement();
        };
        elem.onclick = _callback;
    }
    else {
        elem.onclick = confirmsa.removeConfirmElement;
    }
};

confirmsa.setBlockUI = function () {
    var body = document.getElementsByTagName('body')[0];

    var height = window.innerHeight || document.documentElement.clientHeight;

    body.innerHTML += '<div id="confirmsaPluginBlockUiDiv" class="confirmsa-blockUi"></div>';

    var blockUiDiv = document.getElementById('confirmsaPluginBlockUiDiv');

    blockUiDiv.style.height = height + 'px';
};

confirmsa.configureBlockUI = function (configs) {
    if (configs.blockUI) {
        confirmsa.setBlockUI();
    }
};
