export function addEllipsis(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }

  let truncatedText = text.slice(0, maxLength);
  let lastSpaceIndex = truncatedText.lastIndexOf(" ");

  if (lastSpaceIndex === -1) {
    return text.slice(0, maxLength) + "...";
  }

  truncatedText = text.slice(0, lastSpaceIndex);

  return truncatedText + "...";
}
