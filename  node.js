//Redirects http users to https
//Thanks to Soumya on Stack Overflow!
//I have no idea how this works XD
if (location.protocol !== "https:") {
  location.replace(
    `https:${location.href.substring(location.protocol.length)}`
  );
}
