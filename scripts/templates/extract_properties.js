const ref_re = /{([a-z0-9A-Z]+)/;
const title_re = /title\s*=\s*({[^}]+|"[^"]+)/;
const year_re = /year\s*=\s*({[^}]+|"[^"]+)/;
const url_re = /url\s*=\s*({[^}]+|"[^"]+)/;

function extract_properties(content) {
    return {
        ref: content.search(ref_re) == -1 ? '' : content.match(ref_re)[1],
        title: content.search(title_re) == -1 ? '' : content.match(title_re)[1].substring(1),
        year: content.search(year_re) == -1 ? '' : content.match(year_re)[1].substring(1),
        url: content.search(url_re) == -1 ? '' : content.match(url_re)[1].substring(1),
    };
}

module.exports = extract_properties;
