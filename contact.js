// contact.js
function handleContact(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Contact Us Page');
}

module.exports = handleContact;
