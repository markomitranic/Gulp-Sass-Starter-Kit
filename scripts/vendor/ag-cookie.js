/* eslint-disable no-unused-vars */
const agCookie = {
    create: function(name, value, days) {
        value = encodeURIComponent(value);
        let expires;

        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toGMTString();
        } else {
            expires = '';
        }

        document.cookie = name + '=' + value + expires + '; path=/';
    },
    read: function(name) {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                let contents = c.substring(nameEQ.length, c.length);
                contents = decodeURIComponent(contents);
                return contents;
            }
        }
        return null;
    },
    erase: function(name) {
        this.create(name, '', -1);
    }
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = agCookie;
}