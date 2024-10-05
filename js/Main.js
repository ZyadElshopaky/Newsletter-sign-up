let input=document.querySelector(".Sign-up input")
let btn=document.querySelector(".Sign-up .btn")
let h3=document.querySelector(".Sign-up>div>h3:last-of-type")
let cont=document.querySelector(".conenir")
let Sucess=document.querySelector(".Sucess-message")
let Sucess_btn=document.querySelector(".Sucess-message>.btn")
btn.onclick=(e)=>{
  if(/(^[A-z0-9]+)@([A-z]+)(\.\w{2,6})/.test(input.value)){
    cont.style.cssText="display:none"
    Sucess.style.cssText="display:block;transform: scale(1);"
  }
  e.preventDefault()
}
Sucess_btn.addEventListener("click",()=>{
  cont.style.cssText="display:flex"
    Sucess.style.cssText="display:none;transform: scale(0);"
})