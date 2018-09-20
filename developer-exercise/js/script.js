function showRecommendations(recommendationsDivId, recommendationsData, recommendationsToShow, maxRecommendations) {
    // recommendations div id passed in as string
    let recommendationsElement = $(recommendationsDivId);
    let content = '';
    let recommendationsArray = recommendationsData.hits.filter(recommendation => {
        return recommendation.hasOwnProperty('image');
    }).slice(0, maxRecommendations);

    // heading for recommendation section
    content += '<div class="row">';
    content += '<div class="col-sm">';
    content += '<div class="recommendations-heading">If you like this, you might be into these</div>';
    content += '<div class="horizontal_break"><hr></div>';
    content += '</div></div>';

    // recommendations
    content += '<div class="row responsive-carousel">';
    for (let recommendation of recommendationsArray) {
        content += '<div class="col-sm card">' +
            `<a href=${recommendation.link}><img src=${recommendation.image.link} class="img-fluid product-image card-img-top" alt=${recommendation.image.alt}>` +
            `<div class="product-name card-text">${recommendation.product_name}</div>` +
            `<div class="price card-text">${new Intl.NumberFormat('en-GB', { style: 'currency', currency: recommendation.currency }).format(recommendation.price)}</div>` +
            '</a></div>';
    }
    content += '</div>';
    recommendationsElement.append(content);

    //initialise carousel only when entire page is loaded
    $('.product-image').on("load", function () {
        //carousel functionality using slick
        //http://kenwheeler.github.io/slick/
        $('.responsive-carousel').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: recommendationsToShow,
            slidesToScroll: maxRecommendations - recommendationsToShow,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        //equal height fix from https://github.com/kenwheeler/slick/issues/179

        $('.responsive-carousel').on('setPosition', function () {
            $(this).find('.slick-slide').height('auto');
            let slickTrack = $(this).find('.slick-track');
            let slickTrackHeight = $(slickTrack).height();
            $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
        });

    });
}


$(document).ready(function () {
    $.getJSON("data/recommendations.json", function (recommendationsJSON) {
        showRecommendations("#recommendations", recommendationsJSON, 5, 7);

    });
});
