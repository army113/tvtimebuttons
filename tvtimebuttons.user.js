// ==UserScript==
// @name        TV Time - TPB, Google and Addic7ed search buttons
// @description Provide a "Search in TPB, Google or Addic7ed" button in the "show" and "to-watch" pages
// @downloadURL https://github.com/army113/tvtimebuttons/raw/master/tvtimebuttons.user.js
// @namespace   https://github.com/army113/tvtimebuttons
// @include     http*://www.tvshowtime.com/*
// @include     http*://www.tvtime.com/*
// @version     1.0
// @grant       none
// @icon data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAFnUlEQVR4AdWZzWtkSxmHn7eq+nT6Y9Kd5I4zY5gPh1nMiOLi/h3CdaOg+AGCkosrN24UFa/gUhDNSjfCXQr3H7m48G50NcMwMzGf3Z10us+pqtcUOY195oTodJNEH6gEwjmHJ796q07xHuFiePz48TeAD4D3gduA5WoIwB7wKfAJ8DHUkTMh3uKHwNb6+vpX+v0+rVYLay0iwlWgqnjvGY/HDIdDDg4OPgO2gd9fJvqHbre79eDBA5rNJukBIQRUldm4CkSE2SiKgtevX3N8fJxkP6TEzUuura1tJfF08WQyIUmmUXKlojPS7N2/fz/Jbh0dHZFk5xP9Sbvd/s2zZ8/I8zyNlOYSYsuLJ+GXL1+mkvgZ8JHhnK0nT56kJG9ccjZzaSbv3r1Lcpsl+rWzKf/Lo0eP0nQn0bqkgCBchAJcYUns7e0xGAy+7YDvbmxszC+cyoUxRkbDHA2KSs0fMYLYJoL5971S/lAQAcRf+I+qghjotAwiimo92bPFnUS/44D30xZUWTglSTKGSLfdIQZQjVQRjBVcY4KxBiOmmrWAqlKEjBhB3jJREQygWgDCRTQaDYAvOWDNGJPqsxb7YDBhrdfmT7/7Aq31MZwIFawl5J7h67/S7XuanSaogsZSdMpkvEIo3sPKEDDM4zpwtAs/+KlhPO2w2hVUteYBrDpKLtonvYfglc3NIbQPYKNBFQNFoDM+pn0nQD+CloMAMoFRhGIP7A6QUaGn9I2SF7cJsctFlE7qgMjFIJyvvuOB0G03YGip0HAUI+VgP0eySEscRAX157ImZzzKkNigYdoorno7cHgcy+S4DDVchvDfEQvQKcQp6ATiBPQUwgQJBTOTZTAsTyl6ei4Y0++8rJscYqTkJkWlFA3gcwgF+ADBQ0yioRQVlsVxCaogInRvWcDCqq3d3pDibEyxWoCOQSnlFDRgYk6zI5ABkSqr0BsAKKpLiBojiIH9fU/HFTAsBRAA1Cnx1OO1xWTqYNwGIkQFFMiZ5F1ODgJWPKrVUnWnevZsBSxGlhDt9TJ8UfD17/+D08mYIvcoipQao7GwebvJxz/vstKfYuJKtSI6ip7At37seXPQp9uKUBFSjFiMbXOrtaCoqmKdJcbIzq4wmWT4aJjnaCQ0XJNub0LW/iecrlCJreEpjONgdJ/RZBWxea20rBHWVilfoYvWaDyXvXO3g8b6C2F4LHzuPYfJmoADzQBAOScKkYyNvsFm5iw1Sw0FZfbsBUUBBEGMgKEqAbhMcNYCAnL5sS2GSIzxalY91OXqaVwPDpZHBChHBQER/d8RRX05cup/B9UbF1VCKBiMVjD0GJ80maczDQyGBh88quGGRAViVIqiwBQGq02cZsxjNOKi4AtP4T2KIMj1JxpV8UVBQ/Zx9pCWq4o658lwTPN1vA+gDgyg1ygqCBqVECNRG4AjalZ7fAC8L8qtqbwPvebTk4Dqfz671l8WXLMoynVh+D/BAcKCqAoC3GordJSMSIVO5FYbkKWzl6VEjQFjDfsDWLcwPaFCcxrZP7JY28CpAUDRRRpo4oCjEEJnkf5Qryv4wvLNX32evOjjiwiliJYHb+cyxLbptwXk3cu63C1GDvh0PB5vZlmW7N9pdVojqG2we9Qjz7tEDQBzZ1Kh4Sy31wyZMyxC2Rj5zAF/Pjw8/Oq9e/d4dwTrDHc2BI22Nq2CgJTTJ4u9lUajEclx1h99+fTp080Us/d+Ad+r2cFCCDx//hzAOM7ZfvHixUcPHz6sdfRucjvd2dkB+OV8p+TXZ3W6nXrnsw8LN83u7m7q124Dv3h7w//wrGe+/erVq5TqjcmmxfPmzZtUm9vJ6bLPNz8Ctnq93hc7nQ7OuZTylX5siDGS5/nsE87fgST5W4C6aJ3vAR8AXwY2AMPVEIED4G/AJ8AfqcO/ADJL8y3oELgCAAAAAElFTkSuQmCC
// @require     https://code.jquery.com/jquery-2.1.3.min.js
// Based on https://greasyfork.org/fr/users/11667-aymeric-maitre
// ==/UserScript==

this.jQuery = jQuery.noConflict(true);
var search_base_link_TPB = 'https://thepiratebay.org/search/';
var search_base_link_addic7ed = 'http://www.addic7ed.com/search.php?search=';
var search_base_link_GL = 'https://www.google.com/search?q=';
var search_suffix = '';
var newNode1;
var newNode2;
var newNode3;

jQuery(document).ready(function () {
    jQuery("<style type='text/css'> .download-linkgoogle{display:inline-block;width:22px;height:22px;margin:0 9px 0 0;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABORJREFUeNqMVWuIlFUYft7zfd/cvp3Za7oXFtkFb0uYtiGYhiBlWIlgiCmRSOl/SSqLyP7kv/pVgZhmhSVeuiIUhRpWLksiSpdFy0vetnXX3Zndmflu5/R8M7vmiklnODOcc97znvd9n+d5R8xWABanAYaPz0GYzwAZH8I1D1aaCKuM4H4umjkdzhHOswIc5vkuCf1zkgoAPwNd4rFVuQgbt49436jVOpJ3IGigU/5MGun4EZotAvSrULJXoDbAmEL1btVIIcfvWs5sZQVt1EGt1Sex09hAcLdhoJW1OjJO3hgsMYzWKHrmtHGyjgYRjO0g1PYR4+jFauLZm9eFHzM5q/EXK/sR/EDJdZ0E6rxBVnII9ujpNigrhGdl34tcZ7FyWC8zKc5RhWgvRHqMkZIY026UPEl/3eOPXqB5d503MJgqDeJ8Yze+nL0JMrymC/51d3kwnP7CqS1WQ2EQOq6M4CPmto4rXRPlkeZFrqEzKeRV3YayZF6o9/qXJstXzvVn78O+zufwaedanM25EH3EQnA1c2zkwxkLwz+zsFvo3DZIhcEbYcJ5RTOBxsLvGMhNx/GpDyPtj6E1vIjOG79KauyS9NfO0Qc61uNAx9M4U5vFlLJBfalIxz9hPgHs0TcsFHZNR/FYM6xc8K2b1o+QSnDDKzgybTnevHcrfqlr4RrI+RHmDvVg1shpfN26AiebmjGlZNDglVhFTYIw7/Ab+yUyYZvVQO6mWNB97fB7mpZIOjjc4F/G7raX8eKczainw9axcjpS4gQqoUcSgjGStckzBGzcYRVRYm88Cb5z9nBnDTQ3UxEsNzpvBlWHoiFph2V953FhpB3tUqCJOsSLyzjzd+Fgjv53xgLprjKa8XvEP5A+ldEVjY2USOWii9qI8DkqtnJvXv6PESuW8cyzb9WAEWqIBVK+rjDDZi0tbSrJ/N9RUapGfRzGzxMisMh0ywqnR5rvsaZpNYZaVaRw8K9WcecmcOtKlPTZEupTxrKecpRfkfT7+a7O7aWZi13lHbWdAfjZE2jMt/PMhXGKmxlSG4xVFGMTg3JRsXq8d9BUm1RVA4KztuVEh6FYxEjh+aEFeLc4i60j2OKo3FFENWhofQuucw2p/vWwSm4v9dEbp2sSY+wvzLNsPaAD3Qw1UeRKOXolokAu+tkfNw4vWvC914Iu5wYSrLOXDF63g9RWsQooO1eRKM1DamhJHCzCZB/jMKgpb7OtfPIUiqOzYVWBUNp4xpEOeWjHOlxFcoWX9D5rTeTj7lYtGvMhljvFjp4NNCmSGOBmgahbdF4mBlOnNf6265BVbu0K3bgVaEgkCGzsoOMNcs/nK5G0A0yFv9spuM8EdCwyCagRvrGHUPeoyCox1RbmulTbQ4+psAnupdeQzM9G6PgopcpFNCRnwlKXxNq+kdUHkoGDrtzgD8mk92Co1WRujvPI3PogI9eJyxXiZi5vQbr/CTgtepU0yX7lsx9HZ2YQOJttM0Q4d3BhKuF/hVL6ccgkBgFyG92EZPDbSPZhDE/bRBuz9tG/lu/PXgHKsR7gjgI1VGhmLK48qWKeYHDr6CiPu9A3zkLo3IR1vZGkZkTOtY99bnqEw7cBdacLdPoBQaSeZS3/HA9y54/x/hCj9Df3T7DubxOu+dqY+cYkzohOV1Q3oZZ/BBgAKs4qxoXfoWUAAAAASUVORK5CYII=') no-repeat 0 0;background-size:contain;} .download-linkaddic7ed{display:inline-block;width:22px;height:22px;margin:0 9px 0 0;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABG1JREFUeNqkVUtvlGUUfr7b3Du90Ma2QVpoTBUjRmMixDTRRKIxhoWyEbZEo78BE3fs3LgwuiAxBsNCY3RRL4iigRjA3iy0wwSoLS1tZzqWuXWmM/Oe1+f9vhntIAsTv8yZb97b857znHOesU6ey07XG8VhbG4KHAf/6xGNSNyzM/ZAxp2YnNqXvz3d4fQOAA2rfaPWgMW5ZD/ghM0EDzeAwirfEqztfDwbWE1D9+xNul31TM4ePdjhjo0B9x7ghUtb2wBKWQLxYLQTGHiBwME9bU+S989cQzX984ar7RB0vQrJc6HUaN8YJ2qWC6ePAmWC2xw7HnDiK2BwECg2/uWFVS1CbA+2MFwR5Ucm/PrbFOcinEv/BCmsQbr2QJKDkEoeMvcthPiidPuZHRi21gJN0g2d/u+W8VZd5NzcN9BeHFo1aHXoeC/nxqGzNeiQ135GAgzjrC2id9ymA1McJ2zIzQnIH5chsZ5/1kJJyMosJHUeEkcQWWut6bGpDlv7oC0qVNO4yTI0nGPoBfJPKh5/lXYEsrns503SBK4ZDMc/Y2kFj2dCdsC2bW5Q9JAfWvN3OAqVKUDduggV64Xa3oIafRnqsVegahVG8xCsxV/hrS4h1BmBQ9DthiBbBW6u5ZFeyRqONVSLHzFvchmzoVP09u41ny/dOwKrewjermGEd+9n7uuoZRaQvXQGCxXgxp8a8xuC1CawmKugUCzD9flFwLH5MuWHErM6Pw43EodTuwc5cATb8QiKDLWcfArlC6ewxWRXsh9APfo27GgCTqMA07ceK1JsO6DCJMB4bEIKdyQQWk9Blq4iz9DubJRwY+gorteBeY5vjbyB9S1BhaXmZFcRTo/D62b9St3kjHQq0qnguo6FsLY4AIEUtviuXDiL8uQsKrys1rsPVr4Gd2qOFwvCHgt47xOM+Xe/8fSVT4CDx9iVnOdZrUzpari5fBm3yw3U9hBwK4l6Ogf93UcMjX0UTyBcLwAfPg+wO30gl13jMN5oB+dI8Oz3wNwlYPQ5H9ink+YuMdS7hSpCLB23M4bQD59SZDJAIgZdLUGVS/e1bbVZT7QExaFKjqbOAgcIXDDAym841yHRcC04fGmCq5kvgoMsH1/VHn6anm23C06YSrc8S62gA0bgZr6kqr0H9OxCsyHgmhY0Fa8T3HB9Ekj9GGyu0rPD7wDH36W61dqd7mflfP0x8NlbvlPIrQDTnwOvcWxan177ImQyJ1HiT5wJWtREZDrvkRch6xzTszZbLkNGX2JLd1GedbD/8mlI2ZSa6yfPbxBEu1lerNfz7webjJ4PPwsZOcQWvsPDtXaj0MvAEOTJ14P9xhauQCYvUgF3+03l6gbJj3bxFmb70AlWeCxQ8GeOk0ujyX2BwN//z2LQDp/k/ngzJ8SJJYPcMmpr6Nip4uJvvySssTcDEfdBTFsxxcX1YO5BjyLvVD0k+lq3BYm7yrp2I9otdO9Po39tiBpLYnb8mZqk/pdnZzTmTLzPYiVt/CXAAJGo0M+Ejc7dAAAAAElFTkSuQmCC') no-repeat 0 0;background-size:contain;} .download-tpb{display:inline-block;width:22px;height:22px;margin:0 9px 0 0;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABK9JREFUeNrUVW1MU2cUfnt76feHUKB8FKljozhlG1lsiollA7pkg40CBiGBbNOwRDPI/ixEicAft2yhQ/TPMFmyjB/TCBqIlB/LUItmfFZwLchHsB0M+mG/aGlve9uycy/OTCVb/OGP3eQk977nfc85z3Oe817G9vY2ehkPhl7Sg1ssD+kXBgNDGRnpqL29o+xST08VhmGwhP0nnHgshiWwEkK6Tt15rbZicX19HVGH8JGREXoDl8NFkUg4oaura5AgiBdGcratTeH2uEtcLheKx+MIN05P0w4Oh4P8fj8rFosF4VPwooHtdjvz8uUriCSjiOobLhKJngTGcTzOYrHCJEnuFpgAY4KRYLxnnXw+n5BKpQjQ7gSORCIIglEsP7UxNTXV2t7eVmyxWBWDgwPfaCu0b4TDYQTcH7p1+3ZPc3NT1dzc3JudnbprAP056nCxWIwCgQDyejwoFo+TcDBGOfbuzVqorqpaWV5eXtHr9R0Gg+EHHo/rd3s8ebkKhaGhod5iMNyxdHd3x8LhCAZVkuBDoWBwJ7BKdRiZzb+jnJwctLq6ugcQ8CmH0Xjvvc+bmjqCW0Gu2WxWwpLy72rM5rmiTz857lhYXCyAoAk7VLITPywrQ9FYDG1BoThIBUhgoCNqNZqZmckGuHRgqrN9ff3tuzUKknN+6u0999QaScpf368AqpiIzWEjjAWBV9fWhG63mxLzc7oFakiFQvELVBSgvpOTkx/m5uYant0XJsLY0tISslitiIHhCLt6ta/5wsWLdpPJlMLlcIz/3KwpLe0vKSm+UvbB+98LBEK6QXl5eUa1Wt33TlHRsFJ56EkCQCo+cDD/8bCBfIrU6tcMo6M1MDHpxe8WX49Go04wByhlObC15YP1pDt371YAdzYel7tus9vFRqNRCZJ0BAJBAmjxSiSS+ZaWlhOFhYdXa2qO/Tk+Pq7BofxCKgt0vb5Uo6mQy+VjaWlpBpVKdSNZIpnBE3AQPYnICImCoSBIk01plhYn1SgmE6NnQCAQiBobG3VerzdDKBT+Svm3k5KSSID8pX/TnxyNReXz8/OFBBFOFItFjpSU1HvpkAh4HsWYmN3n25SBpHI2bLaDiwsLan/Af8DpfCTlcrkuqqkwufzy8vJLjFMnT76alpHOajvbZpbJZA++03Xut1qte2/evPWZfni49d/GOD8/f2TfPnl/wVsFk1PTUw2RcIQ5PjFxYnNzk41nZ2cv19bVoYmx8Z9vDA3V1RyrpZUBFRByefZYaqp0DhAtikWilRAR4kClhbZ12xGH05EH98MrAj7/7bW1NTQ0pG+ipvfMmdMKn8/Hw0ViEXK5HiEuj2ehAgK3Px6trtKFiPACzmSSexITaU0ToS0UChGIzeb0CoQCtLG+kTd7//5HszOzVb+NjR2nzra2nv6itrZ2UT+kR1hmRiba9PkQlC9Mk0qXv/7q3CmlUmmKRkkSMlO3Fm1ut4c2m81GXwGZsswHlZXabwcGrqsqtdrzj2+4PyYnp5DD6UQ4E8Pojn9c39AUPFoNA5CCTGYTrYTdflsMECmFwOvxQvVseo9Go7kwMTGRAIpaycqSIYkkCTH+d/+8vwQYAEKbQEZBeNksAAAAAElFTkSuQmCC') no-repeat 0 0;background-size:contain;} </style>").appendTo("head");


    jQuery('li[id*="episode-item-"]').each(function () {
        try {
            if (jQuery("div.heading-info").length) {
                var series = jQuery("body").find("div.heading-info h1").text().replace("                              ", "").replace("                          ", "");
                var season = this.parentNode.parentNode.id;
                season = season.replace("season", "").replace("-content", "");
                if (season < 10) season = '0' + season;
                jQuery("body").find('div.row a.watched-btn').removeClass('col-sm-6').removeClass('col-sm-offset-4').addClass('col-sm-offset-3');
                var episode = jQuery(this).find(".episode-nb-label").text().replace("                ", "").replace("              ", "");
                if (episode < 10) episode = '0' + episode;
                season = 'S' + season;
                episode = 'E' + episode;
            } else {
                var season = "";
                var series = jQuery(this).find("div.episode-details a.secondary-link").text();
                var episode = jQuery(this).find("div.episode-details h2 a").text();
            }

            var search_query_GL = series + ' ' + season + episode + search_suffix;

            search_query_GL = search_query_GL.replace(/ /g, '+');

            newNode1 = jQuery(this).find("a.watched-btn:first").clone();
            newNode1.attr('href', search_base_link_GL + search_query_GL + ' torrent');
            newNode1.attr('target', '_blank');
            newNode1.attr('title', 'Search on Google');
            newNode1.removeClass().addClass('download-linkgoogle');
            newNode1.find('i').removeClass().html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');

            newNode2 = jQuery(this).find("a.watched-btn:first").clone();
            newNode2.attr('href', search_base_link_TPB + search_query_GL);
            newNode2.attr('target', '_blank');
            newNode2.attr('title', 'Search on TPB');
            newNode2.removeClass().addClass('download-tpb');
            newNode2.find('i').removeClass().html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');

            var search_query_addic7ed = search_query_GL /*.replace(/ /g, '+')*/ ;

            newNode3 = jQuery(this).find("a.watched-btn:first").clone();
            newNode3.attr('href', search_base_link_addic7ed + search_query_addic7ed);
            newNode3.attr('target', '_blank');
            newNode3.attr('title', 'Search for subtitles on Addic7ted');
            newNode3.removeClass().addClass('download-linkaddic7ed');
            newNode3.find('i').removeClass().html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
            if (jQuery("div.heading-info").length) {
                jQuery(this).find("a.watched-btn:first").after(newNode1);
                jQuery(this).find("a.watched-btn:first").after(newNode2);
                jQuery(this).find("a.watched-btn:first").after(newNode3);
            } else {
                jQuery(this).find("a.watched-btn:first").before(newNode1);
                jQuery(this).find("a.watched-btn:first").before(newNode2);
                jQuery(this).find("a.watched-btn:first").before(newNode3);
            }

        } catch (e) {
            console.error(e);
        }
    });
});
