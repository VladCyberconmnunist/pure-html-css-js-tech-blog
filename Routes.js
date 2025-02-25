let url = window.location.pathname;
let curRoute = url.substring(url.lastIndexOf('/')+1);
console.log(curRoute)

const menuContent=document.querySelectorAll("li")
    // console.log(menuContent)
    const routes = ['/HTMLContent.html','/CSSContent.html','/HTMLNCSSContent.html','/JSContent.html','/SimpleProjects.html']
    // console.log(routes)
    menuContent.forEach((e,i) => {
    e.setAttribute('onclick',SetRoute(routes[i]))
    if (curRoute==routes[i].slice(1)){
        e.classList.add("active")
    }
   console.log(routes[i].slice(1))
    // window.location.assign('/HTMLContent.html')
});

function SetRoute(routePath){
   return "window.location.assign("+"\""+routePath+"\""+")"
}

window.addEventListener('keydown',(e)=>{
    if(e.ctrlKey&&e.shiftKey&&e.key==='R'){
        // &&e.key==='e'
        // &&e.key==='r'
        // e.ctrlKey&&
        // alert('Cntrl and r is pressed!')
        event.preventDefault();//Prevent reload if click ok button
        window.location.assign("/index.html")
    }})
