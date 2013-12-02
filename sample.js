function runSample() {
    var _className = document.getElementById('type');
    confirmsa.confirm('Alert!! Do you confirm?!', function () { alert('yes pressed'); }, noCallBack, _className.value);
}

function runSecondSample() {
    var msg = '<h4>Please Confirm : </h4><ul style="text-align:left;font-size:0.75em;"><li>You have to consider rule # 1 , read carefuly</li><li>You have to consider rule # 2 , read carefuly</li><li>You have to consider rule # 3 , read carefuly</li></ul>';
    confirmsa.confirm(msg, yesCB, noCB, 'important');
}

function yesCB() {
    var _body = document.getElementsByTagName('body')[0];
    _body.innerHTML += 'You have pressed yes button<br/>';
}

function noCB() {
    var _body = document.getElementsByTagName('body')[0];
    _body.innerHTML += 'You have pressed no button<br/>';
}

function noCallBack() {
    alert('no pressed');
}

function runOptionsSample() {
    var options = {
        textAlign: 'right',
        direction: 'rtl',
        yesButtonText: 'بله',
        noButtonText: 'نه'
    };

    confirmsa.confirm('آیا تایید میکنید؟', yesCB, noCB, 'important', options);
}
