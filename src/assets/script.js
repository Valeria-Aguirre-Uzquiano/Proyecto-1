function moveUp() {
    document.documentElement.scrollTop=0;
}

window.addEventListener("scroll",function () {
    if(this.document.documentElement.scrollTop>0){
        this.document.getElementById("move-up").style.display="flex"
    }else{
        this.document.getElementById("move-up").style.display="none"
    }
})