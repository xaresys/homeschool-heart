@font-face {
  font-family: 'Merriweather';
  /*font-style: normal;*/
  /*font-weight: Bold;*/
  src: url(https://raw.githubusercontent.com/xaresys/xaresys.github.io/master/Merriweather-Bold.ttf);
}

body {margin: 0;}

/* ------------------------------------------------*/

[id=new_metabar] {
/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#acc7e4+0,eaf2f9+90,acc7e4+100 */
	background: #acc7e4; /* Old browsers */
	background: -moz-linear-gradient(top, #acc7e4 0%, #eaf2f9 90%, #acc7e4 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #acc7e4 0%,#eaf2f9 90%,#acc7e4 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #acc7e4 0%,#eaf2f9 90%,#acc7e4 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#acc7e4', endColorstr='#eaf2f9',GradientType=0 ); /* IE6-9 */
}

/* New metabar ------------------------------------------------------------------------------------- */

/* The actual bar */
div[id=new_metabar] {
	list-style-type: none;
    margin: 0;
    padding: 0;
    white-space: nowrap;
    height: auto;
    width: 100%;
    /*display:block;*/
    display: table;
    line-height: 50px;
    /*overflow:hidden;*/
    z-index: 200000000; /*Maximum lels*/
}

/* The thing that contains the items */
ul[id=meta_container] {
    list-style-type: none;
	margin: 0 auto;
    padding: inherit;
    max-width: 953px;
    /*min-width: 534px;*/
    height: inherit;
    line-height: inherit;
    /*overflow:hidden;*/
    z-index: 200000000; /*Maximum lels*/
}

/* List items, not login button */
[class=metaitem] {
    /*display: inline-block;*/
    text-align: center;
    padding: 3px 1.5%;
    text-decoration: none !important;
    float: left;
    
    font-family: Merriweather !important;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    border-right: 1px solid rgba(48, 117, 191, 0.3);
    /*height: inherit;*/
    
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#acc7e4+0,eaf2f9+90,acc7e4+100 */
	background: #acc7e4; /* Old browsers */
	background: -moz-linear-gradient(top, #acc7e4 0%, #eaf2f9 90%, #acc7e4 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #acc7e4 0%,#eaf2f9 90%,#acc7e4 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #acc7e4 0%,#eaf2f9 90%,#acc7e4 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#acc7e4', endColorstr='#eaf2f9',GradientType=0 ); /* IE6-9 */
    
	text-shadow: 1px 1px 2px rgba(255,255,255,1);
    color: #3b6fa3 !important;
    /*color: #ffffff;*/
    
    font-size: 16px;
}

[class=metaitem]:active {
	/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#acc7e4+0,75a1d2+10,acc7e4+100 */
	background: #acc7e4; /* Old browsers */
	background: -moz-linear-gradient(top, #acc7e4 0%, #75a1d2 10%, #acc7e4 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #acc7e4 0%,#75a1d2 10%,#acc7e4 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #acc7e4 0%,#75a1d2 10%,#acc7e4 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#75a1d2', endColorstr='#acc7e4',GradientType=0 ); /* IE6-9 */
    
    
}

[class=metaitem]:hover {
	background: #acc7e4;
}

/* Login button --------------------------------------------------------------- */

[class=loginbutton], [class=logoutbutton] {
    /*display: inline-block;*/
    /*text-align: center;
    padding: 3px 2%;
    text-decoration: none;*/
    float: right;
    
    position: relative;
    
    /*font-family: Merriweather;*/
    border-left: 2px solid rgba(255, 255, 255, 0.2);
    border-right: 2px solid rgba(48, 117, 191, 0.2);
    vertical-align: middle;
    
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#acc7e4+0,75a1d2+90,acc7e4+100 */
	background: #acc7e4; /* Old browsers */
	background: -moz-linear-gradient(top, #acc7e4 0%, #75a1d2 90%, #acc7e4 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #acc7e4 0%,#75a1d2 90%,#acc7e4 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #acc7e4 0%,#75a1d2 90%,#acc7e4 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#acc7e4', endColorstr='#75a1d2',GradientType=0 ); /* IE6-9 */
    
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    color: #ffffff;
}

[class=loginbutton]:active, [class=logoutbutton]:active {
	/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#75a1d2+0,1a71ce+10,75a1d2+100 */
	background: #75a1d2; /* Old browsers */
	background: -moz-linear-gradient(top, #75a1d2 0%, #1a71ce 10%, #75a1d2 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #75a1d2 0%,#1a71ce 10%,#75a1d2 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #75a1d2 0%,#1a71ce 10%,#75a1d2 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1A71CE', endColorstr='#75a1d2',GradientType=0 ); /* IE6-9 */
}

[class=loginbutton]:hover, [class=logoutbutton]:hover {
	background: #75a1d2;
}

[class=logoutbutton] {
    text-align: center;
    padding: 3px 2%;
    font-family: Merriweather !important;
    text-decoration: none !important;
    color: #ffffff !important;
    font-size: 16px;
}

/*a[class=metaitem], a[class=loginbutton] {
	text-decoration: none;
    font-family: 'Merriweather';
    font-size: 16px;
}*/

div[class=loginbutton] a {
    font-family: 'Merriweather';
    font-size: 16px;
}

/* Ribbons ------------------------------------------------------------------------------*/

/* The HEART logo ribbon */
[id=heartribbon] {
    /*display: inline-block;*/
    float: left;
    width: 184px;
    height: 169px;
    position: absolute;
    z-index: 200000000; /*Maximum lels*/
}

[id="ribbon1"] {
	position: absolute;
    z-index: 200000020; /*Maximum lels*/
    -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.2));
    filter:         drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.2)); 
}

[id="ribbon2"] {
	position: absolute;
    z-index: inherit;
    -webkit-filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.2));
    filter:         drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.2)); 
}

[id="ribbon_placeholder"] {
	margin: 0;
    padding: 1px;
    width: 184px;
    float: left;
    border-left: 0;
    border-right: 0;
    visibility: hidden;
}

/* ----------------------------------------------------------------------------------*/

/* Mobile ribbon banner */

[id="mobile_ribbon"] {
	height: 58px;
    width: 100%;
    display: none;
    text-align: center;
    
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-	editor/#e1e4ed+0,ffffff+25,ffffff+75,e1e4ed+100 */
	background: #ffffff; /* Old browsers */
	background: -moz-linear-gradient(top, #e1e4ed 0%, #ffffff 25%, #ffffff 75%, #e1e4ed 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #e1e4ed 0%,#ffffff 25%,#ffffff 75%,#e1e4ed 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #e1e4ed 0%,#ffffff 25%,#ffffff 75%,#e1e4ed 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e1e4ed',GradientType=0 ); /* IE6-9 */
}

[class="ribbonblue"] {
	width: 12px;
    height: inherit;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#3b6fa3+0,75a1d2+25,75a1d2+75,3b6fa3+100 */
	background: #75a1d2; /* Old browsers */
	background: -moz-linear-gradient(top, #3b6fa3 0%, #75a1d2 25%, #75a1d2 75%, #3b6fa3 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #3b6fa3 0%,#75a1d2 25%,#75a1d2 75%,#3b6fa3 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #3b6fa3 0%,#75a1d2 25%,#75a1d2 75%,#3b6fa3 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#75a1d2', endColorstr='#3b6fa3',GradientType=0 ); /* IE6-9 */
}

[id="rbleft"] {
	float: left;
}

[id="rbright"] {
	float: right;
}

/* Navigation bar --------------------------------------- */

[id="navbar"] {
	display:block;
    text-align:center;
    /*height: 20px;*/
    height: auto;
    z-index: 100000000 !important;
    position: relative;
    /* Permalink - use to edit and share this gradient: 	http://colorzilla.com/gradient-editor/#1e1e1e+0,4b4b4b+100 */
	background: #1e1e1e; /* Old browsers */
	background: -moz-linear-gradient(top,  #1e1e1e 0%, #4b4b4b 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top,  #1e1e1e 0%,#4b4b4b 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom,  #1e1e1e 0%,#4b4b4b 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e1e1e', endColorstr='#4b4b4b',GradientType=0 ); /* IE6-9 */

}

[id="navbar_inner"] {
    width: 100%;
    height: auto;
	max-width: 953px;
    padding-left: 184px;
    display: table;
    table-layout: fixed;
    margin: auto;
    box-sizing: border-box; /* Opera */
  	-moz-box-sizing: border-box; /* Firefox */
  	-webkit-box-sizing: border-box; /* Regular */
}

[class="navbar_item"] {
	display: table-cell;
	text-decoration: none;
    color: #ffffff;
    /*padding: 5px 5px;*/
    font-family: Merriweather;
    font-size: 0.8em;
    border-left: 1px solid rgba(255, 255, 255, 0.25);
    border-right: 1px solid rgba(0, 0, 0, 0.5);
    vertical-align: middle;
    /*line-height: 0.8;*/
    white-space: nowrap;
}

[class="navbar_item"] a {
	text-decoration: none;
    padding: 3px 0px;
    color: inherit;
    width: 100%;
    display: block;
    font-family: Merriweather !important;
    font-size: 12px !important;
}

/* Navbar list */
[class="navbar_item"] ul {
	background: #4b4b4b;
	list-style: none;
    position: absolute;
    padding: 0;
    vertical-align: middle;
    margin: 0px 0px;
    margin-left: -1px;
    display: none;
    font-family: Merriweather !important;
    z-index: 200000000; /*Maximum lels*/
    
    /* Permalink - use to edit and share this gradient: 	http://colorzilla.com/gradient-editor/#1e1e1e+0,4b4b4b+100 */
	background: #4b4b4b; /* Old browsers */
	background: -moz-linear-gradient(top,  #4b4b4b 0%, #1e1e1e 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top,  #4b4b4b 0%,#1e1e1e 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom,  #4b4b4b 0%,#1e1e1e 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4b4b4b', endColorstr='#1e1e1e',GradientType=0 ); /* IE6-9 */
}

/* Navbar list item */
[class="navbar_item"] ul li {
	/*padding: 5px 5px;*/
    border-left: 1px solid rgba(255, 255, 255, 0.25);
    border-right: 1px solid rgba(0, 0, 0, 0.5);
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    text-align: left;
    font-family: Merriweather !important;
}

/* Navbar list link */
[class="navbar_item"] ul li a {
	text-decoration: underline;
    padding: 5px 8px;
    color: inherit;
    display: block;
    font-family: Merriweather !important;
}

/* Login link ------------------------- */
[class="loginbutton"] a {
    text-align: center;
    padding: 3px 10px;
    text-decoration: none;
    display: block;
    color: inherit;
    font-family: Merriweather;
}

/* Verse container ----------------- */
#headerversebox {
    font-family: Merriweather !important;
    font-size: 12px !important;
    height: auto !important;
    width: inherit !important;
    padding-left: 184px !important;
    padding-top: 5px !important;
    padding-bottom: 5px !important;
    color: #ffffff !important;
    text-align: center;
    
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#52789e+0,2d3f51+90,6d85a0+100 */
	background: #52789e; /* Old browsers */
	background: -moz-linear-gradient(top,  #52789e 0%, #2d3f51 90%, #6d85a0 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top,  #52789e 0%,#2d3f51 90%,#6d85a0 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom,  #52789e 0%,#2d3f51 90%,#6d85a0 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#52789e', endColorstr='#6d85a0',GradientType=0 ); /* IE6-9 */
}

/* Gotta love mobile... >_> ------------------------------------------------- */
@media screen and (max-width: 600px){
    [class="metaitem"], [class="loginbutton"], [class="logoutbutton"] {
        float: none;
        vertical-align: top;
        display: table-cell;
    }
    
    [id=heartribbon], [id=ribbon_placeholder] {
    	display: none;
    }
    
    [id=meta_container] {
    	display: table;
        table-layout: fixed;
        width: 100%;
    }
    
    [id="mobile_ribbon"] {
    	display: block;
    }
    
    [id="navbar_inner"] {
    	padding-left: 0px;
    }
}
