

jQuery(document).ready(function ($) {
    var horizontalAccordions = $(".accordion.width");

    horizontalAccordions.each(function() {
        var accordion = $(this);
        var collapse = accordion.find(".collapse");
        var bodies = collapse.find("> *");
        accordion.height(accordion.height());
        bodies.width(bodies.eq(0).width());
        collapse.not(".show").each(function() {
            $(this).parent().find("[data-toggle='collapse']")
                .addClass("collapsed");
        });
    });
});