// INIT Animate On Scroll Library https://michalsnik.github.io/aos/
AOS.init({
  delay:350,
  mirror: false,
  once: true,
  duration: 800,
});

// Data input
var data = MENU_ARRAY;
// Renderize the Menu
$('#main_menu').renderizeMenu(data, {
  rootClass: "nav navbar-nav mr-auto",
  itemClass: 'nav-item',
  linkClass: 'nav-link',
  itemHasMenuClass: "nav-item dropdown",
  linkHasMenuClass: "nav-link dropdown-toggle",
  menuClass: "dropdown-menu",
  menuLinkClass: "dropdown-item",
  menuItemHasSubmenuClass: "dropdown",
  menuLinkHasSubmenuClass: "dropdown-item dropdown-toggle",
  submenuClass: "dropdown-menu",
  dir:"rtl"
});
// Apply your favorite plugin
jQuery.SmartMenus.Bootstrap.init();

$(document).ready(function() {
  $(".navbar ul li a").on("click", function(){
    $(this).parent().addClass("active").siblings().removeClass("active");
  })
})