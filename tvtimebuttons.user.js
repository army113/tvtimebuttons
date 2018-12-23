// ==UserScript==
// @name        TV Time - RARBG, Google and Addic7ed search buttons
// @description Provide a "Search in RARBG, Google or Addic7ed" button in the "show" and "to-watch" pages
// @downloadURL https://github.com/army113/tvtimebuttons/raw/master/tvtimebuttons.user.js
// @namespace   https://github.com/army113/tvtimebuttons
// @include     http*://www.tvshowtime.com/*
// @include     http*://www.tvtime.com/*
// @version     1.1
// @grant       none
// @icon data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAFnUlEQVR4AdWZzWtkSxmHn7eq+nT6Y9Kd5I4zY5gPh1nMiOLi/h3CdaOg+AGCkosrN24UFa/gUhDNSjfCXQr3H7m48G50NcMwMzGf3Z10us+pqtcUOY195oTodJNEH6gEwjmHJ796q07xHuFiePz48TeAD4D3gduA5WoIwB7wKfAJ8DHUkTMh3uKHwNb6+vpX+v0+rVYLay0iwlWgqnjvGY/HDIdDDg4OPgO2gd9fJvqHbre79eDBA5rNJukBIQRUldm4CkSE2SiKgtevX3N8fJxkP6TEzUuura1tJfF08WQyIUmmUXKlojPS7N2/fz/Jbh0dHZFk5xP9Sbvd/s2zZ8/I8zyNlOYSYsuLJ+GXL1+mkvgZ8JHhnK0nT56kJG9ccjZzaSbv3r1Lcpsl+rWzKf/Lo0eP0nQn0bqkgCBchAJcYUns7e0xGAy+7YDvbmxszC+cyoUxRkbDHA2KSs0fMYLYJoL5971S/lAQAcRf+I+qghjotAwiimo92bPFnUS/44D30xZUWTglSTKGSLfdIQZQjVQRjBVcY4KxBiOmmrWAqlKEjBhB3jJREQygWgDCRTQaDYAvOWDNGJPqsxb7YDBhrdfmT7/7Aq31MZwIFawl5J7h67/S7XuanSaogsZSdMpkvEIo3sPKEDDM4zpwtAs/+KlhPO2w2hVUteYBrDpKLtonvYfglc3NIbQPYKNBFQNFoDM+pn0nQD+CloMAMoFRhGIP7A6QUaGn9I2SF7cJsctFlE7qgMjFIJyvvuOB0G03YGip0HAUI+VgP0eySEscRAX157ImZzzKkNigYdoorno7cHgcy+S4DDVchvDfEQvQKcQp6ATiBPQUwgQJBTOTZTAsTyl6ei4Y0++8rJscYqTkJkWlFA3gcwgF+ADBQ0yioRQVlsVxCaogInRvWcDCqq3d3pDibEyxWoCOQSnlFDRgYk6zI5ABkSqr0BsAKKpLiBojiIH9fU/HFTAsBRAA1Cnx1OO1xWTqYNwGIkQFFMiZ5F1ODgJWPKrVUnWnevZsBSxGlhDt9TJ8UfD17/+D08mYIvcoipQao7GwebvJxz/vstKfYuJKtSI6ip7At37seXPQp9uKUBFSjFiMbXOrtaCoqmKdJcbIzq4wmWT4aJjnaCQ0XJNub0LW/iecrlCJreEpjONgdJ/RZBWxea20rBHWVilfoYvWaDyXvXO3g8b6C2F4LHzuPYfJmoADzQBAOScKkYyNvsFm5iw1Sw0FZfbsBUUBBEGMgKEqAbhMcNYCAnL5sS2GSIzxalY91OXqaVwPDpZHBChHBQER/d8RRX05cup/B9UbF1VCKBiMVjD0GJ80maczDQyGBh88quGGRAViVIqiwBQGq02cZsxjNOKi4AtP4T2KIMj1JxpV8UVBQ/Zx9pCWq4o658lwTPN1vA+gDgyg1ygqCBqVECNRG4AjalZ7fAC8L8qtqbwPvebTk4Dqfz671l8WXLMoynVh+D/BAcKCqAoC3GordJSMSIVO5FYbkKWzl6VEjQFjDfsDWLcwPaFCcxrZP7JY28CpAUDRRRpo4oCjEEJnkf5Qryv4wvLNX32evOjjiwiliJYHb+cyxLbptwXk3cu63C1GDvh0PB5vZlmW7N9pdVojqG2we9Qjz7tEDQBzZ1Kh4Sy31wyZMyxC2Rj5zAF/Pjw8/Oq9e/d4dwTrDHc2BI22Nq2CgJTTJ4u9lUajEclx1h99+fTp080Us/d+Ad+r2cFCCDx//hzAOM7ZfvHixUcPHz6sdfRucjvd2dkB+OV8p+TXZ3W6nXrnsw8LN83u7m7q124Dv3h7w//wrGe+/erVq5TqjcmmxfPmzZtUm9vJ6bLPNz8Ctnq93hc7nQ7OuZTylX5siDGS5/nsE87fgST5W4C6aJ3vAR8AXwY2AMPVEIED4G/AJ8AfqcO/ADJL8y3oELgCAAAAAElFTkSuQmCC
// @require     https://code.jquery.com/jquery-2.1.3.min.js
// Based on https://greasyfork.org/fr/users/11667-aymeric-maitre
// ==/UserScript==

this.jQuery = jQuery.noConflict(true);
var search_base_link_rarbg = 'https://rarbgway.org/torrents.php?search=';
var search_base_link_addic7ed = 'http://www.addic7ed.com/search.php?search=';
var search_base_link_GL = 'https://www.google.com/search?q=';
var search_suffix = '';
var newNode1;
var newNode2;
var newNode3;

jQuery(document).ready(function () {
    jQuery("<style type='text/css'> .download-linkgoogle{display:inline-flex;width:22px;height:22px;margin:0 9px 0 0;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABORJREFUeNqMVWuIlFUYft7zfd/cvp3Za7oXFtkFb0uYtiGYhiBlWIlgiCmRSOl/SSqLyP7kv/pVgZhmhSVeuiIUhRpWLksiSpdFy0vetnXX3Zndmflu5/R8M7vmiklnODOcc97znvd9n+d5R8xWABanAYaPz0GYzwAZH8I1D1aaCKuM4H4umjkdzhHOswIc5vkuCf1zkgoAPwNd4rFVuQgbt49436jVOpJ3IGigU/5MGun4EZotAvSrULJXoDbAmEL1btVIIcfvWs5sZQVt1EGt1Sex09hAcLdhoJW1OjJO3hgsMYzWKHrmtHGyjgYRjO0g1PYR4+jFauLZm9eFHzM5q/EXK/sR/EDJdZ0E6rxBVnII9ujpNigrhGdl34tcZ7FyWC8zKc5RhWgvRHqMkZIY026UPEl/3eOPXqB5d503MJgqDeJ8Yze+nL0JMrymC/51d3kwnP7CqS1WQ2EQOq6M4CPmto4rXRPlkeZFrqEzKeRV3YayZF6o9/qXJstXzvVn78O+zufwaedanM25EH3EQnA1c2zkwxkLwz+zsFvo3DZIhcEbYcJ5RTOBxsLvGMhNx/GpDyPtj6E1vIjOG79KauyS9NfO0Qc61uNAx9M4U5vFlLJBfalIxz9hPgHs0TcsFHZNR/FYM6xc8K2b1o+QSnDDKzgybTnevHcrfqlr4RrI+RHmDvVg1shpfN26AiebmjGlZNDglVhFTYIw7/Ab+yUyYZvVQO6mWNB97fB7mpZIOjjc4F/G7raX8eKczainw9axcjpS4gQqoUcSgjGStckzBGzcYRVRYm88Cb5z9nBnDTQ3UxEsNzpvBlWHoiFph2V953FhpB3tUqCJOsSLyzjzd+Fgjv53xgLprjKa8XvEP5A+ldEVjY2USOWii9qI8DkqtnJvXv6PESuW8cyzb9WAEWqIBVK+rjDDZi0tbSrJ/N9RUapGfRzGzxMisMh0ywqnR5rvsaZpNYZaVaRw8K9WcecmcOtKlPTZEupTxrKecpRfkfT7+a7O7aWZi13lHbWdAfjZE2jMt/PMhXGKmxlSG4xVFGMTg3JRsXq8d9BUm1RVA4KztuVEh6FYxEjh+aEFeLc4i60j2OKo3FFENWhofQuucw2p/vWwSm4v9dEbp2sSY+wvzLNsPaAD3Qw1UeRKOXolokAu+tkfNw4vWvC914Iu5wYSrLOXDF63g9RWsQooO1eRKM1DamhJHCzCZB/jMKgpb7OtfPIUiqOzYVWBUNp4xpEOeWjHOlxFcoWX9D5rTeTj7lYtGvMhljvFjp4NNCmSGOBmgahbdF4mBlOnNf6265BVbu0K3bgVaEgkCGzsoOMNcs/nK5G0A0yFv9spuM8EdCwyCagRvrGHUPeoyCox1RbmulTbQ4+psAnupdeQzM9G6PgopcpFNCRnwlKXxNq+kdUHkoGDrtzgD8mk92Co1WRujvPI3PogI9eJyxXiZi5vQbr/CTgtepU0yX7lsx9HZ2YQOJttM0Q4d3BhKuF/hVL6ccgkBgFyG92EZPDbSPZhDE/bRBuz9tG/lu/PXgHKsR7gjgI1VGhmLK48qWKeYHDr6CiPu9A3zkLo3IR1vZGkZkTOtY99bnqEw7cBdacLdPoBQaSeZS3/HA9y54/x/hCj9Df3T7DubxOu+dqY+cYkzohOV1Q3oZZ/BBgAKs4qxoXfoWUAAAAASUVORK5CYII=') no-repeat 0 0;background-size:contain;} .download-linkaddic7ed{display:inline-flex;width:22px;height:22px;margin:0 9px 0 0;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABG1JREFUeNqkVUtvlGUUfr7b3Du90Ma2QVpoTBUjRmMixDTRRKIxhoWyEbZEo78BE3fs3LgwuiAxBsNCY3RRL4iigRjA3iy0wwSoLS1tZzqWuXWmM/Oe1+f9vhntIAsTv8yZb97b857znHOesU6ey07XG8VhbG4KHAf/6xGNSNyzM/ZAxp2YnNqXvz3d4fQOAA2rfaPWgMW5ZD/ghM0EDzeAwirfEqztfDwbWE1D9+xNul31TM4ePdjhjo0B9x7ghUtb2wBKWQLxYLQTGHiBwME9bU+S989cQzX984ar7RB0vQrJc6HUaN8YJ2qWC6ePAmWC2xw7HnDiK2BwECg2/uWFVS1CbA+2MFwR5Ucm/PrbFOcinEv/BCmsQbr2QJKDkEoeMvcthPiidPuZHRi21gJN0g2d/u+W8VZd5NzcN9BeHFo1aHXoeC/nxqGzNeiQ135GAgzjrC2id9ymA1McJ2zIzQnIH5chsZ5/1kJJyMosJHUeEkcQWWut6bGpDlv7oC0qVNO4yTI0nGPoBfJPKh5/lXYEsrns503SBK4ZDMc/Y2kFj2dCdsC2bW5Q9JAfWvN3OAqVKUDduggV64Xa3oIafRnqsVegahVG8xCsxV/hrS4h1BmBQ9DthiBbBW6u5ZFeyRqONVSLHzFvchmzoVP09u41ny/dOwKrewjermGEd+9n7uuoZRaQvXQGCxXgxp8a8xuC1CawmKugUCzD9flFwLH5MuWHErM6Pw43EodTuwc5cATb8QiKDLWcfArlC6ewxWRXsh9APfo27GgCTqMA07ceK1JsO6DCJMB4bEIKdyQQWk9Blq4iz9DubJRwY+gorteBeY5vjbyB9S1BhaXmZFcRTo/D62b9St3kjHQq0qnguo6FsLY4AIEUtviuXDiL8uQsKrys1rsPVr4Gd2qOFwvCHgt47xOM+Xe/8fSVT4CDx9iVnOdZrUzpari5fBm3yw3U9hBwK4l6Ogf93UcMjX0UTyBcLwAfPg+wO30gl13jMN5oB+dI8Oz3wNwlYPQ5H9ink+YuMdS7hSpCLB23M4bQD59SZDJAIgZdLUGVS/e1bbVZT7QExaFKjqbOAgcIXDDAym841yHRcC04fGmCq5kvgoMsH1/VHn6anm23C06YSrc8S62gA0bgZr6kqr0H9OxCsyHgmhY0Fa8T3HB9Ekj9GGyu0rPD7wDH36W61dqd7mflfP0x8NlbvlPIrQDTnwOvcWxan177ImQyJ1HiT5wJWtREZDrvkRch6xzTszZbLkNGX2JLd1GedbD/8mlI2ZSa6yfPbxBEu1lerNfz7webjJ4PPwsZOcQWvsPDtXaj0MvAEOTJ14P9xhauQCYvUgF3+03l6gbJj3bxFmb70AlWeCxQ8GeOk0ujyX2BwN//z2LQDp/k/ngzJ8SJJYPcMmpr6Nip4uJvvySssTcDEfdBTFsxxcX1YO5BjyLvVD0k+lq3BYm7yrp2I9otdO9Po39tiBpLYnb8mZqk/pdnZzTmTLzPYiVt/CXAAJGo0M+Ejc7dAAAAAElFTkSuQmCC') no-repeat 0 0;background-size:contain;} .download-rarbg{display:inline-flex;width:22px;height:22px;margin:0 9px 0 0;background: url('data:image/png;base64,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') no-repeat 0 0;background-size:contain;} </style>").appendTo("head");


    jQuery('li[id*="episode-item-"]').each(function () {
        try {
            if (jQuery("div.heading-info").length) {
                var series = jQuery("body").find("div.heading-info h1").text().replace("                              ", "").replace("                          ", "");
                var season = this.parentNode.parentNode.id;
                season = season.replace("season", "").replace("-content", "");
                if (season < 10) season = '0' + season;
                jQuery("body").find('.episode-list div.infos').removeClass('col-sm-10').addClass('col-sm-9');
                jQuery("body").find('.episode-list div.actions').removeClass('col-sm-2').addClass('col-sm-3');
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
            newNode2.attr('href', search_base_link_rarbg + search_query_GL);
            newNode2.attr('target', '_blank');
            newNode2.attr('title', 'Search on RARBG');
            newNode2.removeClass().addClass('download-rarbg');
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
