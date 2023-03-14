
let ul = document.querySelector( "ul" )
let xmark= document.querySelector( ".xmark" );
let toggle = document.querySelector( ".toggle" );
toggle.onclick = () => {
  ul.classList.add( "hidden-bottom" );
  ul.classList.remove("hidden-top" )
  toggle.style.display = "none"
  xmark.style.display = "block"
  xmark.style.color = "#2d78e2  "
};
xmark.onclick = () => {
  toggle.style.display = "block";
  xmark.style.display = "none";
  ul.classList.remove( "hidden-bottom" );
  ul.classList.add( "hidden-top" );
};