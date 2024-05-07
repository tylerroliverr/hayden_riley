
    var cursorContainer = document.getElementById('cursor-container');
    var customCursor = document.getElementById('custom-cursor');
    var link = document.querySelectorAll('.link');

    document.addEventListener('mousemove', function (e) {
        var x = e.clientX;
        var y = e.clientY;

        customCursor.style.transform = 'translate(' + (x - customCursor.clientWidth / 2) + 'px, ' + (y - customCursor.clientHeight / 2) + 'px)';
    });

    document.addEventListener("mousedown", function() {
        customCursor.classList.add('clicked');
    });

    document.addEventListener("mouseup", function() {
        setTimeout(() => {
            customCursor.classList.remove('clicked');
        }, "50");
    });


    document.documentElement.addEventListener('mouseleave', function () {
        customCursor.classList.add('hidden');
    });

    document.documentElement.addEventListener('mouseenter', function () {
        cursorContainer.style.visibility = 'visible';
        cursorContainer.style.opacity = '1';
        customCursor.classList.remove('hidden');
        customCursor.style.visibility = 'visible'; // Always show cursor on mousemove
    });

    link.forEach(function (links) {
        links.addEventListener('mouseover', function () {
            customCursor.classList.add('hovering');
        });

        links.addEventListener('mouseout', function () {
            customCursor.classList.remove('hovering');
        });
    });

