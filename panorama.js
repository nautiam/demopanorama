function addPanorama() {
    // First panorama
    dayLuiBaoLucXaPano = new PANOLENS.ImagePanorama('asset/demo/day-lui-bao-luc-xa.jpg');
    dayLuiBaoLucXaPano.addEventListener('progress', onProgress);
    dayLuiBaoLucXaPano.addEventListener('enter', onEnter);

    // Second panorama
    dayLuiBaoLucGanPano = new PANOLENS.ImagePanorama('asset/demo/day-lui-bao-luc-gan.jpg');
    dayLuiBaoLucGanPano.addEventListener('progress', onProgress);
    dayLuiBaoLucGanPano.addEventListener('enter', onEnter);

    // Third panorama
    anSinhPano = new PANOLENS.ImagePanorama('asset/demo/an-sinh-xa-hoi.jpg');
    anSinhPano.addEventListener('progress', onProgress);
    anSinhPano.addEventListener('enter', onEnter);

    koAiBiBoLaiPano = new PANOLENS.ImagePanorama('asset/demo/khong-ai-bi-bo-lai-phia-sau.jpg');
    koAiBiBoLaiPano.addEventListener('progress', onProgress);
    koAiBiBoLaiPano.addEventListener('enter', onEnter);

    cungLenTiengXaPano = new PANOLENS.ImagePanorama('asset/demo/cung-len-tieng-xa.jpg');
    cungLenTiengXaPano.addEventListener('progress', onProgress);
    cungLenTiengXaPano.addEventListener('enter', onEnter);

    cungLenTiengGanPano = new PANOLENS.ImagePanorama('asset/demo/cung-len-tieng-gan.jpg');
    cungLenTiengGanPano.addEventListener('progress', onProgress);
    cungLenTiengGanPano.addEventListener('enter', onEnter);

    phudieu1Pano = new PANOLENS.ImagePanorama('asset/demo/phu-dieu-1.jpg');
    phudieu1Pano.addEventListener('progress', onProgress);
    phudieu1Pano.addEventListener('enter', onEnter);

    phudieu2Pano = new PANOLENS.ImagePanorama('asset/demo/phu-dieu-2.jpg');
    phudieu2Pano.addEventListener('progress', onProgress);
    phudieu2Pano.addEventListener('enter', onEnter);

    letan1Pano = new PANOLENS.ImagePanorama('asset/demo/le-tan-1.jpg');
    letan1Pano.addEventListener('progress', function(e) {
        onProgress(e);
        customInfospot.focus();
    });
    letan1Pano.addEventListener('enter', onEnter);

    letan2Pano = new PANOLENS.ImagePanorama('asset/demo/le-tan-2.jpg');
    letan2Pano.addEventListener('progress', onProgress);
    letan2Pano.addEventListener('enter', onEnter);

    letan3Pano = new PANOLENS.ImagePanorama('asset/demo/le-tan-3.jpg');
    letan3Pano.addEventListener('progress', onProgress);
    letan3Pano.addEventListener('enter', onEnter);

    cungLenTiengXaPano.addEventListener("click", function (e) {
        if (e.intersects.length > 0) return;
        const a = viewer.raycaster.intersectObject(viewer.panorama, true)[0].point;
        console.log('click panorama\n', e, 'point\n', a);
    });

    // Linking panoramas
    letan1Pano.link(letan2Pano, new THREE.Vector3(5000, -3000, -2000), 600, Image.ArrowLeft);
    letan1Pano.link(letan3Pano, new THREE.Vector3(5000, -3000, 2000), 600, Image.ArrowRight);
    letan1Pano.link(dayLuiBaoLucXaPano, new THREE.Vector3(5000, -3000, 0), 600, Image.ArrowUp);

    letan2Pano.link(letan1Pano, new THREE.Vector3(5000, -3000, 0), 600, Image.ArrowDown);
    letan3Pano.link(letan1Pano, new THREE.Vector3(5000, -3000, 0), 600, Image.ArrowDown);

    dayLuiBaoLucXaPano.link(dayLuiBaoLucGanPano, new THREE.Vector3(5000, -3000, 0), 600, Image.ArrowUp);
    dayLuiBaoLucXaPano.link(anSinhPano, new THREE.Vector3(5000, -3000, -2000), 600, Image.ArrowLeft);
    dayLuiBaoLucXaPano.link(koAiBiBoLaiPano, new THREE.Vector3(5000, -3000, 2000), 600, Image.ArrowRight);
    dayLuiBaoLucXaPano.link(letan1Pano, new THREE.Vector3(5000, -4000, 0), 600, Image.ArrowDown);

    dayLuiBaoLucGanPano.link(dayLuiBaoLucXaPano, new THREE.Vector3(5000, -4000, 0), 600, Image.ArrowDown);
    dayLuiBaoLucGanPano.link(cungLenTiengXaPano, new THREE.Vector3(5000, -300, 0), 600, Image.ArrowUp);
    dayLuiBaoLucGanPano.link(phudieu1Pano, new THREE.Vector3(5000, -500, -5000), 600, Image.ArrowLeft);
    dayLuiBaoLucGanPano.link(phudieu2Pano, new THREE.Vector3(5000, -500, 5000), 600, Image.ArrowRight);

    anSinhPano.link(dayLuiBaoLucXaPano, new THREE.Vector3(5000, -3000, -500), 600, Image.ArrowDown);
    anSinhPano.link(cungLenTiengXaPano, new THREE.Vector3(5000, -3000, 2000), 600, Image.ArrowRight);
    anSinhPano.link(koAiBiBoLaiPano, new THREE.Vector3(5000, -3000, -3000), 600, Image.ArrowLeft);

    koAiBiBoLaiPano.link(dayLuiBaoLucXaPano, new THREE.Vector3(5000, -3000, -500), 600, Image.ArrowDown);
    koAiBiBoLaiPano.link(anSinhPano, new THREE.Vector3(5000, -3000, 2000), 600, Image.ArrowRight);
    koAiBiBoLaiPano.link(cungLenTiengXaPano, new THREE.Vector3(5000, -3000, -3000), 600, Image.ArrowLeft);

    cungLenTiengXaPano.link(cungLenTiengGanPano, new THREE.Vector3(5000, -300, 0), 600, Image.ArrowUp);
    cungLenTiengXaPano.link(dayLuiBaoLucGanPano, new THREE.Vector3(5000, -3000, 0), 600, Image.ArrowDown);
    cungLenTiengXaPano.link(anSinhPano, new THREE.Vector3(5000, -3000, -2000), 600, Image.ArrowLeft);
    cungLenTiengXaPano.link(koAiBiBoLaiPano, new THREE.Vector3(5000, -3000, 2000), 600, Image.ArrowRight);

    cungLenTiengGanPano.link(cungLenTiengXaPano, new THREE.Vector3(5000, -3000, 0), 600, Image.ArrowDown);

    phudieu1Pano.link(dayLuiBaoLucGanPano, new THREE.Vector3(5000, -3000, 0), 600, Image.ArrowDown);
    phudieu2Pano.link(dayLuiBaoLucGanPano, new THREE.Vector3(5000, -3000, 0), 600, Image.ArrowDown);

    viewer = new PANOLENS.Viewer();
    viewer.add(letan1Pano, letan2Pano, letan3Pano, dayLuiBaoLucXaPano, dayLuiBaoLucGanPano, anSinhPano, koAiBiBoLaiPano, cungLenTiengXaPano, cungLenTiengGanPano, phudieu1Pano, phudieu2Pano);
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

    infospot = new PANOLENS.Infospot(300, Image.Info);
    infospot.position.set(5000, 0, 0);
    // infospot.addHoverElement( document.getElementById( 'desc-container' ), 0 );
    // infospot.addHoverElement(document.getElementById('chair-container'), 200);
    infospot.addEventListener("click", function (event) {
        this.focus();
        // infospot.onClick(event);
        // openModal("myModal");currentSlide(1);
        openModal("baolucModal");baolucCurrentSlide(1);
    });
    // letan3Pano.add(infospot);

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

    cunglentiengInfospot = new PANOLENS.Infospot(450, Image.Info);
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