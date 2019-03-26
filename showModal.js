
// title	string		是	提示的标题
// content	string		是	提示的内容
// showCancel	boolean	true	否	是否显示取消按钮
// cancelText	string	'取消'	否	取消按钮的文字，最多 4 个字符
// cancelColor	string	#000000	否	取消按钮的文字颜色，必须是 16 进制格式的颜色字符串
// confirmText	string	'确定'	否	确认按钮的文字，最多 4 个字符
// confirmColor	string	#576B95	否	确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
// success	function		否	接口调用成功的回调函数
// fail	function		否	接口调用失败的回调函数
// complete	function		否	接口调用结束的回调函数（调用成功、失败都会执行）

function showModals(obj) {
    let params = obj || {};
    params.title = params.title || '提示';
    params.content = params.content || '提示内容';
    params.showCancel = params.showCancel || true;
    params.cancelText = params.cancelText || '取消';
    params.cancelColor = params.cancelColor || '#000000';
    params.confirmText = params.confirmText || '确定';
    params.confirmColor = params.confirmColor || '#576B95';
    params.success = params.success || function () { };
    params.fail = params.fail || function () { };
    params.complete = params.complete || function () { };

    if (params.cancelText.length > 4 || params.confirmText.lenght > 4) {
        alert('最多四个字符')
    }
    let myBody = document.getElementsByTagName("body")[0];

    let str = `<div class="modal-box"
    style="position:fixed;top: 0;left: 0;width: 100%; height: 100%; display: flex;align-items: center;justify-content: center;">
    <div class="modal-bg" style="width: 100%; height: 100%; background-color: rgba(0,0,0,.5)"></div>
    <div class="modal-cont" style="position: absolute;width: 240px; background-color: #fff; display: flex; flex-direction: column;padding-bottom: 40px; box-sizing: border-box; border-radius: 4px;overflow: hidden;">
        <div class="modal-title" style="width: 100%; text-align: center;height: 40px;line-height: 40px;">${params.title}</div>
        <div class="modal-content" style="flex:1;padding: 0 10px; min-height: 60px;">${params.content}</div>
        <div class="modal-btn"
            style="display: flex;width: 100%; height: 40px;position:absolute;bottom: 0; left: 0;border-top: 1px solid #e5e5e5;">`;

    if (params.showCancel) {
        str += `<div id='modalCancel' style="flex: 1; display: flex;align-items: center;justify-content: center; background-color: #fff;color: ${params.cancelColor};">${params.cancelText}</div>`;
    }

    str += `<div style="flex: 1;background-color: #fff; display: flex;align-items: center;justify-content: center; background-color: #fff; border-left: 1px solid #e5e5e5;color: ${params.confirmColor};"
    id="modalConfirm">${params.confirmText}</div>
</div>
</div>
</div>`;

    myBody.innerHTML = str;

    let modalCancel = document.getElementById('modalCancel');
    let modalConfirm = document.getElementById('modalConfirm');

    modalCancel.onclick = function () {
        myBody.innerHTML = '';
        params.success && params.success({ cancel: true });
    }

    modalConfirm.onclick = function () {
        myBody.innerHTML = '';
        params.success && params.success({ confirm: true });
    }
}