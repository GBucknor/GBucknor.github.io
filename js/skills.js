let rankLists = document.getElementsByClassName('ranks');
let animateRanks = (ranks) => {
    let list = ranks.getElementsByTagName('li');
    for (let i = 0; i < ranks.dataset.rank;++i) {
        $(list[i].children[0]).removeClass('far');
        $(list[i].children[0]).addClass('fas');
    }
}
for (let i = 0; i < rankLists.length;++i) {
    animateRanks(rankLists[i]);
}

$(function() {
    $(window).scroll(() => {
        let bottom = $(this).scrollTop() + $(this).height();
        for (let i = 0;i < rankLists.length;++i) {
            let ulBottom = $(rankLists[i]).offset().top + $(rankLists[i]).outerHeight();
            if (ulBottom < bottom) {
                let li = rankLists[i].getElementsByTagName('li');
                for (let j = 0;j < li.length;++j) {
                    $(li[j]).delay(150 * j).animate({'opacity':'1'}, 1500);
                }
            }
        }
    });
});
