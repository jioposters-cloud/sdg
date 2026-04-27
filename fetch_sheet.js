
import https from 'https';

const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSJy-xzoHUd_Mv8wL4fZNJW9PO7u2bPsanbYNAQX2dxjyd8I3K1ZFUb_pNAfPSgbmq6PKS1pwtILbVJ/pub?gid=462474319&single=true&output=csv';

function fetch(url) {
  https.get(url, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      fetch(res.headers.location);
      return;
    }
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      console.log(data);
    });
  }).on('error', (err) => {
    console.error(err.message);
  });
}

fetch(url);
