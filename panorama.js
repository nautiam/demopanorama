function addPanorama() {
    // First panorama
    dayLuiBaoLucXaPano = new PANOLENS.ImagePanorama('asset/demo/day-lui-bao-luc-xa.jpg');
    dayLuiBaoLucXaPano.addEventListener('progress', onProgress);
    dayLuiBaoLucXaPano.addEventListener('enter', onEnter);
    dayLuiBaoLucXaPano.addEventListener('enter-fade-start', function () {
        // viewer.tweenControlCenter(lookAtPositions[2], 0);
        // setTimeout(function(){ 
        //     // alert('hello');
        // }, 2000);
        viewer.tweenControlCenter(lookAtPositions[1], 0);
        initialZoomDepth = 70;
        zoomIn(0.7);
    });
    dayLuiBaoLucXaPano.addEventListener('click', function(e) {
        dayLuiBaoLucXaPano.onClick(e);
        stop();
    });

    var lookAtPositions = [
        new THREE.Vector3(5000, -2000, 0),
        new THREE.Vector3(5000, -300, 40),
        new THREE.Vector3(5000, -400, 0),
        new THREE.Vector3(4000, -600, 5000),
        new THREE.Vector3(5000, -1000, -2000),
        new THREE.Vector3(5000, -800, -3500),
        new THREE.Vector3(5000, -250, 3000)
    ];
    // Second panorama
    dayLuiBaoLucGanPano = new PANOLENS.ImagePanorama('asset/demo/day-lui-bao-luc-gan.jpg');
    dayLuiBaoLucGanPano.addEventListener('progress', onProgress);
    // dayLuiBaoLucGanPano.addEventListener('progress', function(e) {
    //     onProgress(e);
    //     tocamInfospot.focus();
    // });
   
    dayLuiBaoLucGanPano.addEventListener('enter-fade-start', function () {
        viewer.tweenControlCenter(lookAtPositions[0], 0);
        base = 50;
        zoomOut(0.7);
    });
    dayLuiBaoLucGanPano.addEventListener('enter', onEnter);

    // Third panorama
    anSinhPano = new PANOLENS.ImagePanorama('asset/demo/an-sinh-xa-hoi.jpg');
    anSinhPano.addEventListener('progress', onProgress);
    anSinhPano.addEventListener('enter', onEnter);
    anSinhPano.addEventListener('enter-fade-start', function () {
        viewer.tweenControlCenter(lookAtPositions[6], 0);
    });

    koAiBiBoLaiPano = new PANOLENS.ImagePanorama('asset/demo/khong-ai-bi-bo-lai-phia-sau.jpg');
    koAiBiBoLaiPano.addEventListener('progress', onProgress);
    koAiBiBoLaiPano.addEventListener('enter', onEnter);
    koAiBiBoLaiPano.addEventListener('enter-fade-start', function () {
        viewer.tweenControlCenter(lookAtPositions[5], 0);
    });

    cungLenTiengXaPano = new PANOLENS.ImagePanorama('asset/demo/cung-len-tieng-xa.jpg');
    cungLenTiengXaPano.addEventListener('progress', onProgress);
    cungLenTiengXaPano.addEventListener('enter', onEnter);
    cungLenTiengXaPano.addEventListener('enter-fade-start', function () {
        viewer.tweenControlCenter(lookAtPositions[2], 0);
        setTimeout(function(){ 
            // alert('hello');
        }, 2000);
        initialZoomDepth = 80;
        zoomIn(0.7);
    });
    cungLenTiengXaPano.addEventListener('click', function(e) {
        cungLenTiengXaPano.onClick(e);
        stop();
    });

    cungLenTiengGanPano = new PANOLENS.ImagePanorama('asset/demo/cung-len-tieng-gan.jpg');
    cungLenTiengGanPano.addEventListener('progress', onProgress);
    cungLenTiengGanPano.addEventListener('enter', onEnter);

    phudieu1Pano = new PANOLENS.ImagePanorama('asset/demo/phu-dieu-1.jpg');
    phudieu1Pano.addEventListener('progress', onProgress);
    phudieu1Pano.addEventListener('enter', onEnter);
    phudieu1Pano.addEventListener('enter-fade-start', function () {
        viewer.tweenControlCenter(lookAtPositions[1], 0);
    });

    phudieu2Pano = new PANOLENS.ImagePanorama('asset/demo/phu-dieu-2.jpg');
    phudieu2Pano.addEventListener('progress', onProgress);
    phudieu2Pano.addEventListener('enter', onEnter);
    phudieu2Pano.addEventListener('enter-fade-start', function () {
        viewer.tweenControlCenter(lookAtPositions[4], 0);
    });

    letan1Pano = new PANOLENS.ImagePanorama('asset/demo/le-tan-1.jpg');
    letan1Pano.addEventListener('progress', function(e) {
        onProgress1(e);
        customInfospot.focus();
    });
    letan1Pano.addEventListener('enter', function(e) {
        onEnter();
        // zoomIn();
    });
    letan1Pano.addEventListener('enter-fade-start', function () {
        viewer.tweenControlCenter(lookAtPositions[2], 0);
        // setTimeout(function(){ 
        //     // alert('hello');
        // }, 2000);
        zoomIn(0.7);
    });
    letan1Pano.addEventListener('click', function(e) {
        letan1Pano.onClick(e);
        stop();
    });

    letan2Pano = new PANOLENS.ImagePanorama('asset/demo/le-tan-2.jpg');
    letan2Pano.addEventListener('progress', onProgress);
    letan2Pano.addEventListener('enter', onEnter);

    letan3Pano = new PANOLENS.ImagePanorama('asset/demo/le-tan-3.jpg');
    letan3Pano.addEventListener('progress', onProgress);
    letan3Pano.addEventListener('enter', onEnter);

    // Linking panoramas
    letan1Pano.link(letan2Pano, new THREE.Vector3(5000, -2200, -2000), 400, Image.ArrowLeft, "Bấm sang trái để xem thông tin cuộc triển lãm", 60);
    letan1Pano.link(letan3Pano, new THREE.Vector3(5000, -2200, 2000), 400, Image.ArrowRight, "Bấm sang phải để xem bản đồ khu vực triển lãm", 60);
    letan1Pano.link(dayLuiBaoLucXaPano, new THREE.Vector3(5000, -2200, 0), 400, Image.ArrowUp, "Bấm sang đây để vào không gian triển lãm", 60);

    letan2Pano.link(letan1Pano, new THREE.Vector3(5000, -3000, 0), 400, Image.ArrowDown);
    letan3Pano.link(letan1Pano, new THREE.Vector3(5000, -3000, 0), 400, Image.ArrowDown);

    dayLuiBaoLucXaPano.link(dayLuiBaoLucGanPano, new THREE.Vector3(5000, -3000, 0), 400, Image.ArrowUp);
    dayLuiBaoLucXaPano.link(anSinhPano, new THREE.Vector3(4000, -3000, -5000), 400, Image.ArrowLeft);
    dayLuiBaoLucXaPano.link(koAiBiBoLaiPano, new THREE.Vector3(4000, -3000, 5000), 400, Image.ArrowRight);
    dayLuiBaoLucXaPano.link(letan1Pano, new THREE.Vector3(5000, -4000, 0), 400, Image.ArrowDown);

    dayLuiBaoLucGanPano.link(dayLuiBaoLucXaPano, new THREE.Vector3(4000, -4000, 0), 400, Image.ArrowDown);
    // dayLuiBaoLucGanPano.link(cungLenTiengXaPano, new THREE.Vector3(5000, -4000, 0), 400, Image.ArrowUp);
    // dayLuiBaoLucGanPano.link(phudieu1Pano, new THREE.Vector3(5000, -3500, -4500), 400, Image.ArrowLeft);
    // dayLuiBaoLucGanPano.link(phudieu2Pano, new THREE.Vector3(5000, -3500, 4500), 400, Image.ArrowRight);

    anSinhPano.link(dayLuiBaoLucXaPano, new THREE.Vector3(2500, -4000, -5000), 400, Image.ArrowLeft);
    anSinhPano.link(phudieu1Pano, new THREE.Vector3(4000, -4500, 5000), 400, Image.ArrowRight);
    // anSinhPano.link(koAiBiBoLaiPano, new THREE.Vector3(2500, -3500, -5000), 400, Image.ArrowLeft);

    koAiBiBoLaiPano.link(dayLuiBaoLucXaPano, new THREE.Vector3(2500, -2500, 5000), 400, Image.ArrowRight);
    // koAiBiBoLaiPano.link(anSinhPano, new THREE.Vector3(5000, -3000, 2000), 400, Image.ArrowRight);
    koAiBiBoLaiPano.link(phudieu2Pano, new THREE.Vector3(2000, -3000, -5000), 400, Image.ArrowLeft);

    // cungLenTiengXaPano.link(cungLenTiengGanPano, new THREE.Vector3(5000, -300, 0), 400, Image.ArrowUp);
    // cungLenTiengXaPano.link(dayLuiBaoLucGanPano, new THREE.Vector3(5000, -3000, 0), 400, Image.ArrowDown);
    cungLenTiengXaPano.link(phudieu1Pano, new THREE.Vector3(5000, -3000, -2000), 400, Image.ArrowLeft);
    cungLenTiengXaPano.link(phudieu2Pano, new THREE.Vector3(5000, -3000, 2000), 400, Image.ArrowRight);

    cungLenTiengGanPano.link(cungLenTiengXaPano, new THREE.Vector3(5000, -3000, 0), 400, Image.ArrowDown);

    // phudieu1Pano.link(dayLuiBaoLucGanPano, new THREE.Vector3(5000, -3000, 0), 400, Image.ArrowDown);
    phudieu1Pano.link(anSinhPano, new THREE.Vector3(3500, -3000, -5000), 400, Image.ArrowLeft);
    phudieu1Pano.link(cungLenTiengXaPano, new THREE.Vector3(3500, -3000, 5000), 400, Image.ArrowRight);

    // phudieu2Pano.link(dayLuiBaoLucGanPano, new THREE.Vector3(5000, -3000, 0), 400, Image.ArrowDown);
    phudieu2Pano.link(cungLenTiengXaPano, new THREE.Vector3(3500, -3000, -3000), 400, Image.ArrowLeft);
    phudieu2Pano.link(koAiBiBoLaiPano, new THREE.Vector3(3500, -3000, 3000), 400, Image.ArrowRight);

    viewer = new PANOLENS.Viewer({"controlButtons":['video','fullscreen']});
    viewer.add(letan1Pano, letan2Pano, letan3Pano, dayLuiBaoLucXaPano, dayLuiBaoLucGanPano, anSinhPano, koAiBiBoLaiPano, cungLenTiengXaPano, cungLenTiengGanPano, phudieu1Pano, phudieu2Pano);
    
    
    // phudieu1Pano.addEventListener("click", function (e) {
    //     if (e.intersects.length > 0) return;
    //     const a = viewer.raycaster.intersectObject(viewer.panorama, true)[0].point;
    //     console.log('click panorama\n', e, 'point\n', a);
    // });
}

function addCustomInfoSpot() {
    // Custom InfoSpot
    customInfospot = new PANOLENS.Infospot(1);
    customInfospot.position.set(5000, -1000, 0);
    letan1Pano.add(customInfospot);

    letan2InfoSpot = new PANOLENS.Infospot(300, Image.Infospot);
    letan2InfoSpot.position.set(5000, -500, 300);
    letan2InfoSpot.addHoverElement(document.getElementById('letan2-container'), 20);
    letan2Pano.add(letan2InfoSpot);

    letan3InfoSpot = new PANOLENS.Infospot(300, Image.Info);
    letan3InfoSpot.position.set(5000, -550, 1300);
    // letan3InfoSpot.addHoverElement(document.getElementById('letan2-container'), 20);
    letan3InfoSpot.addHoverText("Bấm vào đây để xem chi tiết thông tin");
    letan3Pano.add(letan3InfoSpot);
    letan3InfoSpot.addEventListener("click", function (event) {
        openModal("tiviModal");
        if (letan3InfoSpot.element ) {
            letan3InfoSpot.element.style.display = 'none';
            letan3InfoSpot.element.left && ( spot.element.left.style.display = 'none' );
            letan3InfoSpot.element.right && ( spot.element.right.style.display = 'none' );
        }
    });

    infospot = new PANOLENS.Infospot(300, Image.Chuoi, true);
    infospot.position.set(5000, 0, 0);
    // infospot.addHoverElement( document.getElementById( 'desc-container' ), 0 );
    // infospot.addHoverElement(document.getElementById('chair-container'), 200);
    infospot.addEventListener("click", function (event) {
        this.focus();
        // infospot.onClick(event);
        // openModal("myModal");currentSlide(1);
        openModal("baolucModal");baolucCurrentSlide(1);
    });
    // letan1Pano.add(infospot);

    hotroInfospot = new PANOLENS.Infospot(300, Image.Info);
    hotroInfospot.position.set(5000, -100, -2650);
    hotroInfospot.addEventListener("click", function (event) {
        this.focus();
        openModal("myModal");currentSlide(1);
    });
    anSinhPano.add(hotroInfospot);

    baolucInfospot = new PANOLENS.Infospot(300, Image.Info);
    baolucInfospot.position.set(5000, 40, 4450);
    baolucInfospot.addEventListener("click", function (event) {
        this.focus();
        openModal("baolucModal");baolucCurrentSlide(1);
    });
    anSinhPano.add(baolucInfospot);

    danhbaInfospot = new PANOLENS.Infospot(300, Image.Info);
    danhbaInfospot.position.set(5000, -80, 4650);
    danhbaInfospot.addEventListener("click", function (event) {
        this.focus();
        openModal("danhbaModal");danhbaCurrentSlide(1);
    });
    koAiBiBoLaiPano.add(danhbaInfospot);

    ngoinhaInfospot = new PANOLENS.Infospot(300, Image.Info);
    ngoinhaInfospot.position.set(5000, -200, -1700);
    ngoinhaInfospot.addEventListener("click", function (event) {
        this.focus();
        openModal("ngoinhaModal");ngoinhaCurrentSlide(1);
    });
    koAiBiBoLaiPano.add(ngoinhaInfospot);

    ossoInfospot = new PANOLENS.Infospot(300, Image.Info);
    ossoInfospot.position.set(5000, -200, 1150);
    ossoInfospot.addEventListener("click", function (event) {
        this.focus();
        openModal("ossoModal");ossoCurrentSlide(1);
    });
    koAiBiBoLaiPano.add(ossoInfospot);

    tocamInfospot = new PANOLENS.Infospot(300, Image.Info);
    tocamInfospot.position.set(5000, -2000, 1150);
    tocamInfospot.addEventListener("click", function (event) {
        this.focus();
        openModal("tocamModal");tocamCurrentSlide(1);
    });
    dayLuiBaoLucGanPano.add(tocamInfospot);

    cunglentiengInfospot = new PANOLENS.Infospot(300, Image.Info);
    cunglentiengInfospot.position.set(5000, -1550, 3250);
    cunglentiengInfospot.addEventListener("click", function (event) {
        this.focus();
        openModal("cunglentiengModal");cunglentiengCurrentSlide(1);
    });
    cungLenTiengGanPano.add(cunglentiengInfospot);

    cunglentiengXaInfospot = new PANOLENS.Infospot(300, Image.Info);
    cunglentiengXaInfospot.position.set(5000, -1100, 2200);
    cunglentiengXaInfospot.addEventListener("click", function (event) {
        this.focus();
        openModal("cunglentiengModal");cunglentiengCurrentSlide(1);
    });
    cungLenTiengXaPano.add(cunglentiengXaInfospot);
}

var i = 1;
// myLoop();

var initialZoomDepth = 80;
function zoomIn(depth) {
    setTimeout(function () {
        // console.log(initialZoomDepth);
        viewer.setCameraFov(initialZoomDepth);
        // viewer.getCamera().fov = initialZoomDepth;
        initialZoomDepth -= depth;
        if (initialZoomDepth > 50) {
            zoomIn(depth);
        } else {
            viewer.OrbitControls.autoRotateSpeed = 1;
            autoRotate(2000);
        }
        
    }, 50)
}

var base = 50;
var target = 60;
function zoomOut(depth) {
    // console.log(base);
    setTimeout(function () {
        // console.log(initialZoomDepth);
        viewer.setCameraFov(base);
        // viewer.getCamera().fov = initialZoomDepth;
        base += depth;
        if (base < target) {
            zoomOut(depth);
        }
        
    }, 50)
}

var rotateSpeed = 1;
var timer = 0;
function autoRotate(time) {
    
    viewer.enableAutoRate();
    timer = setTimeout(function () {
        // viewer.disableAutoRate();
        if (rotateSpeed === 1) {
            console.log("Dao nguoc");
            viewer.OrbitControls.autoRotateSpeed *= -1;
            viewer.OrbitControls.autoRotate = true;
            rotateSpeed -= 1;
            // console.log(rotateSpeed);
            autoRotate(time * 2);
        } else if (rotateSpeed === 0) {
            console.log("Stop");
            // viewer.disableAutoRate();
            // rotateSpeed = 1;
            viewer.OrbitControls.autoRotateSpeed *= -1;
            viewer.OrbitControls.autoRotate = true;
            rotateSpeed -= 1;
            // console.log(rotateSpeed);
            autoRotate(time / 2);
        } else if (rotateSpeed = -1) {
            viewer.disableAutoRate();
            rotateSpeed = 1;
            // console.log(rotateSpeed);
        }

    }, time);
    console.log("Timer: " + timer);
}

function stop() {
    // console.log("Remain timer : " + timer);
    if (timer) {
        console.log("stop timer");
        clearTimeout(timer);
        timer = 0;
        viewer.disableAutoRate();
        rotateSpeed = 1;
    }
}

function myLoop() {         //  create a loop function
    setTimeout(function () {   //  call a 3s setTimeout when the loop is called
        i++;
        if (i % 2 === 0) {
            scaleUpPanorama(letan1Pano, true);
            scaleUpPanorama(letan2Pano, true);
            scaleUpPanorama(letan3Pano, true);
            scaleUpPanorama(dayLuiBaoLucXaPano, true);
            scaleUpPanorama(dayLuiBaoLucGanPano, true);
            scaleUpPanorama(koAiBiBoLaiPano, true);
            scaleUpPanorama(anSinhPano, true);
            scaleUpPanorama(cungLenTiengXaPano, true);
            scaleUpPanorama(cungLenTiengGanPano, true);
            scaleUpPanorama(phudieu1Pano, true);
            scaleUpPanorama(phudieu2Pano, true);
            scaleUpPanorama(letan2Pano, true);
            // letan1Pano.toggleInfospotVisibility(true);
            // letan2Pano.toggleInfospotVisibility(true);
            // letan3Pano.toggleInfospotVisibility(true);
            // dayLuiBaoLucXaPano.toggleInfospotVisibility(true);
            // dayLuiBaoLucGanPano.toggleInfospotVisibility(true);
            // koAiBiBoLaiPano.toggleInfospotVisibility(true);
            // cungLenTiengXaPano.toggleInfospotVisibility(true);
            // cungLenTiengGanPano.toggleInfospotVisibility(true);
            // phudieu1Pano.toggleInfospotVisibility(true);
            // phudieu2Pano.toggleInfospotVisibility(true);
            // infospot.show();
        } else {
            scaleUpPanorama(letan1Pano, false);
            scaleUpPanorama(letan2Pano, false);
            scaleUpPanorama(letan3Pano, false);
            scaleUpPanorama(dayLuiBaoLucXaPano, false);
            scaleUpPanorama(dayLuiBaoLucGanPano, false);
            scaleUpPanorama(koAiBiBoLaiPano, false);
            scaleUpPanorama(anSinhPano, false);
            scaleUpPanorama(cungLenTiengXaPano, false);
            scaleUpPanorama(cungLenTiengGanPano, false);
            scaleUpPanorama(phudieu1Pano, false);
            scaleUpPanorama(phudieu2Pano, false);
            // letan1Pano.toggleInfospotVisibility(false);
            // letan2Pano.toggleInfospotVisibility(false);
            // letan3Pano.toggleInfospotVisibility(false);
            // dayLuiBaoLucXaPano.toggleInfospotVisibility(false);
            // dayLuiBaoLucGanPano.toggleInfospotVisibility(false);
            // koAiBiBoLaiPano.toggleInfospotVisibility(false);
            // cungLenTiengXaPano.toggleInfospotVisibility(false);
            // cungLenTiengGanPano.toggleInfospotVisibility(false);
            // phudieu1Pano.toggleInfospotVisibility(false);
            // phudieu2Pano.toggleInfospotVisibility(false);
            // infospot.hide();
        }
        if (i >= 10) {
            i = 0;
        }
        myLoop();
    }, 500)
}

function scaleUpPanorama(parent, isUp) {
    parent.traverse( function ( object ) {
        if ( object instanceof PANOLENS.Infospot ) {
            if (isUp) {
                object.scaleDownAnimation && object.scaleDownAnimation.stop();
                object.scaleUpAnimation && object.scaleUpAnimation.start();
            } else {
                object.scaleUpAnimation && object.scaleUpAnimation.stop();
                object.scaleDownAnimation && object.scaleDownAnimation.start();
            }
            
        }
    } );
}

function allDescendants (node) {
    for (var i = 0; i < node.childNodes.length; i++) {
      var child = node.childNodes[i];
      allDescendants(child);
      console.log(child);
    }
}

/**
 * Link one-way panorama
 * @param  {PANOLENS.Panorama} pano  - The panorama to be linked to
 * @param  {THREE.Vector3} position - The position of infospot which navigates to the pano
 * @param  {number} [imageScale=300] - Image scale of linked infospot
 * @param  {string} [imageSrc=PANOLENS.DataImage.Arrow] - The image source of linked infospot
 * @param  {string} text - Text to be displayed
 * @param  {number} [delta=40] - Vertical delta to the infospot
 */
PANOLENS.Panorama.prototype.link = function ( pano, position, imageScale, imageSrc, text, delta ) {

    var scope = this, spot, scale, img;

    this.visible = true;

    if ( !position ) {

        console.warn( 'Please specify infospot position for linking' );

        return;

    }

    // Infospot scale
    if ( imageScale !== undefined ) {

        scale = imageScale;

    } else if ( pano.linkingImageScale !== undefined ) {

        scale = pano.linkingImageScale;

    } else {

        scale = 300;

    }


    // Infospot image
    if ( imageSrc ) {

        img = imageSrc

    } else if ( pano.linkingImageURL ) {

        img = pano.linkingImageURL;

    } else {

        img = PANOLENS.DataImage.Arrow;

    }

    // Creates a new infospot
    spot = new PANOLENS.Infospot( scale, img );
    spot.position.copy( position );
    spot.toPanorama = pano;
    spot.addHoverText(text, delta);
    spot.addEventListener( 'click', function () {

        /**
         * Viewer handler event
         * @type {object}
         * @event PANOLENS.Panorama#panolens-viewer-handler
         * @property {string} method - Viewer function name
         * @property {*} data - The argument to be passed into the method
         */
        if (spot.element ) {
            spot.element.style.display = 'none';
            spot.element.left && ( spot.element.left.style.display = 'none' );
            spot.element.right && ( spot.element.right.style.display = 'none' );
        }
        scope.dispatchEvent( { type : 'panolens-viewer-handler', method: 'setPanorama', data: pano } );

    } );

    this.linkedSpots.push( spot );

    this.add( spot );

    this.visible = false;

};