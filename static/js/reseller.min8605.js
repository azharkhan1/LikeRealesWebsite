"use strict";function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(e){_defineProperty(t,e,r[e])})}return t}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}document.addEventListener("DOMContentLoaded",function(){var n={7:{name:"Aluminum",id:"20875",price:"718.19",brand:"hostgator",category:"Hosting",variant:"Reseller_36"},8:{name:"Copper",id:"20881",price:"898.27",brand:"hostgator",category:"Hosting",variant:"Reseller_36"},9:{name:"Silver",id:"20887",price:"898.24",brand:"hostgator",category:"Hosting",variant:"Reseller_36"}};if(dataLayer.push({event:"productDetail",ecommerce:{detail:{actionField:{list:"Reseller Product Page"},products:Object.values(n)}}}),window.google_tag_manager){var e=document.querySelectorAll("a[href^='https://checkout.hostgator.com/']");Array.from(e).forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var t=e.currentTarget.href.split("/")[5],r=_objectSpread({},n[t]);r.quantity=1,dataLayer.push({event:"addToCart",ecommerce:{currencyCode:"USD",add:{products:[r]}}},function(){window.location=e.currentTarget.href})})})}});