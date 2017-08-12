_menuCloseDelay=500;
_menuOpenDelay=150;
_subOffsetTop=2;
_subOffsetLeft=-2;
buildafterload="true";


with(submenuStyle=new mm_style()){
fontfamily="Verdana, Tahoma, Arial";
fontsize="8pt";
fontweight="bold";
headercolor="#000000";
offbgcolor="White";
offcolor="#000000";
onbgcolor="#FFFFFF";
onbold="bold";
oncolor="#0000AA";
ondecoration="underline";
padding="5";
subimage="images/target_11x11.gif";
subimagepadding="8";
}

with(menuStyle=new mm_style()){
align="center";
fontfamily="Tempus Sans ITC, URW Chancery L, Apple Chancery, sans serif";
fontsize="10pt";
fontweight="bold";
headerbgcolor="#ffffff";
headercolor="#000000";
image="images/location7.gif";
offcolor="#000000";
onbold="bold";
oncolor="#0000AA";
ondecoration="underline";
overimage="images/location_on7.gif";
imageposition="right";
itemwidth="100";
}

with(milonic=new menuname("Main Menu")){
position="relative";
menuwidth=700;
style=menuStyle;
alwaysvisible="1";
orientation="horizontal";
aI("text=HOME;target=;url=http://www.westcoastcustomcarts.net/;");
aI("text=CART GALLERY;target=;url=CART-GALLERY.html;");
aI("showmenu=OUR CARTS/Wee Weenie CartINFO_BAR_MENU;text=OUR CARTS;target=;url=OUR-CARTS.html;");
aI("text=COLOR OPTIONS;target=;url=CART-COLOR-OPTIONS.html;");
aI("text=PARTS;target=;url=PARTS.html;");
aI("showmenu=CONTACT US/Ordering a Hot Dog CartINFO_BAR_MENU;text=CONTACT US;target=;url=CONTACT-US.html;");
aI("text=FAQs;target=;url=FAQs.html;");
}

with(milonic=new menuname("OUR CARTS/Wee Weenie CartINFO_BAR_MENU")){
style=submenuStyle;
aI("text=Wee Weenie Cart;target=;url=Wee-Weenie-Hot-Dog-Cart.html;");
aI("text=Shave Ice Cart;target=;url=Shave-Ice-Cart.html;");
aI("text=Starter Cart;target=;url=Starter-Hot-Dog-Cart.html;");
aI("text=City Cart;target=;url=City-Hot-Dog-Cart.html;");
aI("text=Seattle Cart;target=;url=Seattle-Hot-Dog-Cart.html;");
aI("text=Classic Taco Cart;target=;url=Classic-Taco-Cart.html;");
aI("text=Deep Fryer Cart;target=;url=Deep-Fryer-Cart.html;");
aI("text=California Cart;target=;url=California-Hot-Dog-Cart.html;");
aI("text=Oregon Class IV Cart;target=;url=Oregon-Class-IV-Cart.html;");
aI("text=Ultimate Taco Cart;target=;url=Ultimate-Taco-Cart.html;");
aI("text=Ice Cream Cart;target=;url=Ice-Cream-Cart.html;");
aI("text=Sunglass Cart;target=;url=Sunglass-Cart.html;");
}

with(milonic=new menuname("CONTACT US/Ordering a Hot Dog CartINFO_BAR_MENU")){
style=submenuStyle;
aI("text=Ordering a Hot Dog Cart;target=;url=Ordering-a-Hot-Dog-Cart.html;");
}


 drawMenus();
