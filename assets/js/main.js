var headroom = new Headroom(document.querySelector("header nav"), {
    "offset": 300,
    "tolerance": 10,
    classes: {
        initial: 'animated',
        pinned: 'slideInDown',
        unpinned: 'slideOutUp'
    }
});

headroom.init();
