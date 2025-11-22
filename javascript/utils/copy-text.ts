/**
 * 
 * @param {string} text 
 */
function copyText(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  } else {
    var textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    // 隐藏此输入框
    textarea.style.position = 'fixed';
    textarea.style.clip = 'rect(0 0 0 0)';
    textarea.style.top = '10px';
    textarea.value = text;
    // 选中
    textarea.select();
    document.execCommand('copy', true);
    document.body.removeChild(textarea);
  }
}