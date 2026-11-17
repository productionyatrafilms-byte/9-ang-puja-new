// Fills every element that has data-text="<path>" with the three language
// spans taken from SITE_DATA (data.js), e.g. data-text="pujas.2.label".
// Loaded after data.js and BEFORE custom.js, so the spans already exist when
// custom.js shows the chosen language.
(function () {
    document.querySelectorAll("[data-text]").forEach(function (el) {
        var entry = el.getAttribute("data-text").split(".").reduce(function (node, key) {
            return node == null ? node : node[key];
        }, SITE_DATA);

        if (!entry) {
            return;
        }

        el.innerHTML =
            '<span class="english">' + entry.english + "</span>" +
            '<span class="hindi">' + entry.hindi + "</span>" +
            '<span class="gujrati">' + entry.gujrati + "</span>";
    });
})();
