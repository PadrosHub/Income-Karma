const banner = document.querySelector('#banner');
const intro = document.querySelector('#intro');
//RESIZING BANNER HEIGHT
const resize = ()=>{
    let introHeight = intro.offsetHeight;
    let bannerHeight = banner.style.height;
    banner.style.height = introHeight+'px';
    bannerHeight+50+'px';
    
}
resize();
