const ltwa_url = 'https://raw.githubusercontent.com/marcinwrochna/abbrevIso/master/LTWA_20210702-modified.csv';
const shortwords_url = 'https://raw.githubusercontent.com/marcinwrochna/abbrevIso/master/shortwords.txt';
(async () => {
    const ltwa_resp = await fetch(ltwa_url);
    const shortwords_resp = await fetch(shortwords_url);
    const ltwa = await ltwa_resp.text();
    const shortWords = await shortwords_resp.text();
    abbrevIso = new AbbrevIso.AbbrevIso(ltwa, shortWords);
})()
