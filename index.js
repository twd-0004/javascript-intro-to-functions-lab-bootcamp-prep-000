function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return whisper.toLowerCase();
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(whisper.toLowerCase());
}
function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  } elseif (string.toUpperCase() === string) {
    return "YES INDEED!"
  } elseif (string === "I love you, Grandma.") {
    
  }
}