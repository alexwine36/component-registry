export function copyToClipboard(text: string) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text);
}

function fallbackCopyTextToClipboard(text: string) {
  const textArea = document.createElement('textarea');

  textArea.value = text;

  // Avoid scrolling to bottom

  textArea.style.top = '0';

  textArea.style.left = '0';

  textArea.style.position = 'fixed';

  document.body.appendChild(textArea);

  textArea.focus();

  textArea.select();

  try {
    const _successful = document.execCommand('copy');

    // var msg = successful ? "successful" : "unsuccessful"

    // console.log("Fallback: Copying text command was " + msg)
  } catch (err) {
    // console.error("Fallback: Oops, unable to copy", err)
  }

  document.body.removeChild(textArea);
}
