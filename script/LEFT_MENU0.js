_menuCloseDelay=500;
_menuOpenDelay=150;
_subOffsetTop=2;
_subOffsetLeft=-2;
buildafterload="true";


with(menuStyle=new mm_style()){
align="left";
bgimage="images/graygrad3d2.gif";
fontfamily="Tempus Sans ITC, URW Chancery L, Apple Chancery, sans serif";
fontsize="9pt";
fontstyle="normal";
fontweight="bold";
headerbgcolor="#ffffff";
headercolor="#000000";
image="images/target_11x11.gif";
offcolor="#000000";
oncolor="#0000AA";
outfilter="fade(duration=0.5)";
separatorcolor="Transparent";
separatorsize="5";
subimage="images/purpgradwhite.gif";
subimagepadding="5";
imagepadding="2";
itemheight="30";
itemwidth="150";
}

with(submenuStyle=new mm_style()){
borderstyle="raised";
borderwidth="0";
fontfamily="Tempus Sans ITC, URW Chancery L, Apple Chancery, sans serif";
fontsize="8pt";
fontstyle="normal";
fontweight="normal";
headercolor="#000000";
offbgcolor="#FFFFFF";
offcolor="#000000";
onbgcolor="#0000AA";
onbold="bold";
oncolor="#ffffff";
ondecoration="underline";
outfilter="fade(duration=0.5)";
padding="3";
separatorsize="2";
subimage="images/purpgradwhite.gif";
subimagepadding="8";
swap3d="1";
}

with(milonic=new menuname("Main Menu")){
position="relative";
style=menuStyle;
alwaysvisible="1";
itemwidth="110";
orientation="vertical";
itemheight="21";
aI("text=HOME;target=;url=http://www.westcoastcustomcarts.net/;align=left;");
aI("text=CART GALLERY;target=;url=CART-GALLERY.html;align=left;");
aI("text=OUR CARTS;target=;url=OUR-CARTS.html;align=left;");
aI("text=COLOR OPTIONS;target=;url=CART-COLOR-OPTIONS.html;align=left;");
aI("text=PARTS;target=;url=PARTS.html;align=left;");
aI("text=CONTACT US;target=;url=CONTACT-US.html;align=left;");
aI("text=FAQs;target=;url=FAQs.html;align=left;");
aI("text=RESOURCES;target=;url=RESOURCES.html;align=left;");
aI("text=SITE MAP;target=;url=sitemap-page-order.html;align=left;");
}


 drawMenus();
