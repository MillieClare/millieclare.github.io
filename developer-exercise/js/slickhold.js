  // recommendations
    content += '<div class="row">';
    for (let recommendation of recommendationsArray) {
        content += '<div class="col-sm card responsive-carousel">' +
            `<a href=${recommendation.link}><img src=${recommendation.image.link} class="img-fluid product-image card-img-top" alt=${recommendation.image.alt}></a>` +
            `<div class="product-name card-text">${recommendation.product_name}</div>` +
            `<div class="price card-text">${new Intl.NumberFormat('en-GB', { style: 'currency', currency: recommendation.currency }).format(recommendation.price)}</div>` +
            '</div>';
    }
    content += '</div>';
    recommendationsElement.append(content);
}


$('.responsive-carousel').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 5,
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

        
    // recommendations
    content += '<div class="row">';
    for (let recommendation of recommendationsArray) {
        content += '<div class="col-sm">' +
            `<a href=${recommendation.link}><img src=${recommendation.image.link} class="img-fluid product-image" alt=${recommendation.image.alt}></a>` +
            `<div class="product-name">${recommendation.product_name}</div>` +
            `<div class="price">${new Intl.NumberFormat('en-GB', { style: 'currency', currency: recommendation.currency }).format(recommendation.price)}</div>` +
            '</div>';
    }
    content += '</div>';
    recommendationsElement.append(content);
}

$(document).ready(function () {
    $.getJSON("data/recommendations.json", function (recommendationsJSON) {
        showRecommendations("#recommendations", recommendationsJSON, 5);

    });
});
