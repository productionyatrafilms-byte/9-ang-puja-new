$(function () {
    var $stage = $(".stage");
    var $dots = $(".ang-dot");
    var $copy = $(".text-box-copy, .verse-copy");
    var autoTimer = null;
    var current = 0;
    // The hand guides the first visit only: it stays until the user has been to
    // pranam.html and comes back (index.html#last), then it is not shown again.
    var handDone = false;
    var AUTO_DELAY = 2200;
    var clickAudio = new Audio("./assets/audio/click.mp3");
    var transitionAudio = new Audio("./assets/audio/transition.mp3");

    var ANG_DOTS = {
        1: ["toe-left", "toe-right"],
        2: ["knee-left", "knee-right"],
        3: ["forearm-left", "forearm-right"],
        4: ["shoulder-left", "shoulder-right"],
        5: ["shikha"],
        6: ["forehead"],
        7: ["throat"],
        8: ["heart"],
        9: ["navel"]
    };

    var STEPS = [
        { },
        { auto: true },
        { target: "toe-right", filled: [], introBox: true },
        { target: "toe-left", filled: ["toe-right"], introBox: true },
        { target: "knee-left", filled: ANG_DOTS[1], ang: 1 },
        { target: "knee-right", filled: ["knee-left"] },
        { target: "forearm-left", filled: ANG_DOTS[2], ang: 2 },
        { target: "forearm-right", filled: ["knee-left", "knee-right", "forearm-left"] },
        { target: "shoulder-left", filled: ANG_DOTS[3], ang: 3 },
        { target: "shoulder-right", filled: ["shoulder-left"] },
        { target: "shikha", filled: ANG_DOTS[4], ang: 4 },
        { target: "forehead", filled: ANG_DOTS[5], ang: 5 },
        { target: "throat", filled: ANG_DOTS[6], ang: 6 },
        { target: "heart", filled: ANG_DOTS[7], ang: 7 },
        { target: "navel", filled: ANG_DOTS[8], ang: 8 },
        { filled: ANG_DOTS[9], ang: 9, free: true, upsanhar: true },
        { filled: ANG_DOTS[9], ang: 9, free: true, upsanhar: true, pranam: true }
    ];

    function angOf(name) {
        var found = 0;
        $.each(ANG_DOTS, function (ang, names) {
            if (names.indexOf(name) !== -1) {
                found = Number(ang);
            }
        });
        return found;
    }

    function showAng(ang) {
        $stage.attr("data-ang", ang);
        $copy.each(function () {
            var own = Number($(this).attr("data-ang"));
            $(this)
                .toggleClass("is-active", own === ang)
                .toggleClass("is-past", own < ang);
        });
    }

    function paintDots(filled, target, free) {
        $dots.each(function () {
            var name = $(this).attr("data-dot");
            var isTarget = name === target;
            $(this)
                .toggleClass("is-filled", filled.indexOf(name) !== -1)
                .toggleClass("is-target", isTarget)
                .attr("tabindex", isTarget || free ? 0 : -1);
        });
    }

    function go(index) {
        var step = STEPS[index];

        clearTimeout(autoTimer);
        current = index;

        // Back at the intro (home / back button) a new guided pass starts, so
        // the hand is allowed again and the "#last" in the address is dropped.
        if (index === 0) {
            handDone = false;
            if (window.location.hash) {
                history.replaceState(null, "", window.location.pathname + window.location.search);
            }
        }

        $stage
            .attr("data-step", index)
            .toggleClass("is-intro", index === 0)
            .toggleClass("show-intro-box", !!step.introBox)
            .toggleClass("show-info", !!step.ang)
            .toggleClass("show-home", index >= 4)
            .toggleClass("show-hand", index >= 2 && !handDone)
            .toggleClass("show-upsanhar-btn show-pranam", !!step.free)
            .toggleClass("is-free", !!step.free);

        if (step.ang) {
            showAng(step.ang);
        } else if (index === 0) {
            showAng(1);
        }

        paintDots(step.filled || [], step.target, !!step.free);

        if (step.auto) {
            autoTimer = setTimeout(function () {
                go(index + 1);
            }, AUTO_DELAY);
        }
    }

    $(".intro-arrow").on("click", function () {
        playSound(transitionAudio);
        go(1);
    });

    $dots.on("click", function () {
        var name = $(this).attr("data-dot");
        var ang;

        if (STEPS[current].free) {
            playSound(clickAudio);
            ang = angOf(name);
            showAng(ang);
            // the Upsanhar and Pranam buttons (and the hand) belong to the 9th point only
            $stage
                .toggleClass("show-upsanhar-btn show-pranam", ang === 9)
                .toggleClass("show-hand", ang === 9 && !handDone);
            paintDots(ANG_DOTS[ang], null, true);
            return;
        }

        if ($(this).hasClass("is-target")) {
            playSound(clickAudio);
            go(current + 1);
        }
    });

    // Upsanhar: the hand leads here after the 9th point; the button opens the
    // concluding verse in a modal, closing it moves the hand on to Pranam.
    var popAudioClose = new Audio("./assets/audio/pop.mp3");

    function openUpsanhar() {
        playSound(clickAudio);
        $stage.addClass("is-modal-open");
        $(".upsanhar-close").trigger("focus");
    }

    function closeUpsanhar() {
        if (!$stage.hasClass("is-modal-open")) {
            return;
        }
        playSound(popAudioClose);
        $stage.removeClass("is-modal-open");
        if (current === STEPS.length - 2) {
            go(STEPS.length - 1);
        }
    }

    $(".upsanhar-btn").on("click", openUpsanhar);
    $(".upsanhar-close, .upsanhar-backdrop").on("click", closeUpsanhar);
    $(document).on("keydown", function (e) {
        if (e.key === "Escape") {
            closeUpsanhar();
        }
    });

    $(".pranam-btn").on("click", function () {
        window.location.href = "./pranam.html";
    });

    $(".back-btn, .home-btn").on("click", function () {
        go(0);
    });

    // pranam.html's back arrow opens index.html#last: show the last point
    // (Ang 9 with the Pranam button) straight away, without the slide-in.
    if (window.location.hash === "#last") {
        handDone = true;
        $stage.addClass("no-anim");
        go(STEPS.length - 1);
        setTimeout(function () {
            $stage.removeClass("no-anim");
        }, 100);
    } else {
        go(0);
    }
});
