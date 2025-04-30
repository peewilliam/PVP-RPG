(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gc="158",Gp=0,Jc=1,Vp=2,ef=1,tf=2,li=3,xi=0,Jt=1,Ht=2,mi=0,Qi=1,Un=2,Qc=3,eh=4,Wp=5,$i=100,Xp=101,$p=102,th=103,nh=104,jp=200,qp=201,Yp=202,Kp=203,Bl=204,zl=205,Zp=206,Jp=207,Qp=208,em=209,tm=210,nm=211,im=212,sm=213,rm=214,om=0,am=1,lm=2,Zo=3,cm=4,hm=5,um=6,dm=7,_c=0,fm=1,pm=2,gi=0,mm=1,gm=2,_m=3,fa=4,xm=5,ih="attached",ym="detached",nf=300,zs=301,ks=302,kl=303,Hl=304,pa=306,is=1e3,bn=1001,Jo=1002,zt=1003,Gl=1004,qo=1005,rn=1006,sf=1007,ss=1008,Li=1009,vm=1010,Mm=1011,xc=1012,rf=1013,Ri=1014,fi=1015,_i=1016,of=1017,af=1018,es=1020,Em=1021,Sn=1023,bm=1024,Sm=1025,ts=1026,Hs=1027,wm=1028,lf=1029,Tm=1030,cf=1031,hf=1033,La=33776,Pa=33777,Da=33778,Ia=33779,sh=35840,rh=35841,oh=35842,ah=35843,Am=36196,lh=37492,ch=37496,hh=37808,uh=37809,dh=37810,fh=37811,ph=37812,mh=37813,gh=37814,_h=37815,xh=37816,yh=37817,vh=37818,Mh=37819,Eh=37820,bh=37821,Na=36492,Sh=36494,wh=36495,Rm=36283,Th=36284,Ah=36285,Rh=36286,Ur=2300,Gs=2301,Ua=2302,Ch=2400,Lh=2401,Ph=2402,Cm=2500,Lm=0,uf=1,Vl=2,df=3e3,ns=3001,Pm=3200,Dm=3201,yc=0,Im=1,wn="",at="srgb",qt="srgb-linear",vc="display-p3",ma="display-p3-linear",Qo="linear",pt="srgb",ea="rec709",ta="p3",us=7680,Dh=519,Nm=512,Um=513,Om=514,Fm=515,Bm=516,zm=517,km=518,Hm=519,Wl=35044,Ih="300 es",Xl=1035,pi=2e3,na=2001;class Js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nh=1234567;const Tr=Math.PI/180,Vs=180/Math.PI;function On(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function kt(n,e,t){return Math.max(e,Math.min(t,n))}function Mc(n,e){return(n%e+e)%e}function Gm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Vm(n,e,t){return n!==e?(t-n)/(e-n):0}function Ar(n,e,t){return(1-t)*n+t*e}function Wm(n,e,t,i){return Ar(n,e,1-Math.exp(-t*i))}function Xm(n,e=1){return e-Math.abs(Mc(n,e*2)-e)}function $m(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function jm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function qm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ym(n,e){return n+Math.random()*(e-n)}function Km(n){return n*(.5-Math.random())}function Zm(n){n!==void 0&&(Nh=n);let e=Nh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jm(n){return n*Tr}function Qm(n){return n*Vs}function $l(n){return(n&n-1)===0&&n!==0}function ff(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ia(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function eg(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const tg={DEG2RAD:Tr,RAD2DEG:Vs,generateUUID:On,clamp:kt,euclideanModulo:Mc,mapLinear:Gm,inverseLerp:Vm,lerp:Ar,damp:Wm,pingpong:Xm,smoothstep:$m,smootherstep:jm,randInt:qm,randFloat:Ym,randFloatSpread:Km,seededRandom:Zm,degToRad:Jm,radToDeg:Qm,isPowerOfTwo:$l,ceilPowerOfTwo:ff,floorPowerOfTwo:ia,setQuaternionFromProperEuler:eg,normalize:ot,denormalize:Vn};class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,s,r,o,a,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],x=s[1],y=s[4],v=s[7],E=s[2],A=s[5],w=s[8];return r[0]=o*_+a*x+c*E,r[3]=o*m+a*y+c*A,r[6]=o*p+a*v+c*w,r[1]=l*_+h*x+u*E,r[4]=l*m+h*y+u*A,r[7]=l*p+h*v+u*w,r[2]=d*_+f*x+g*E,r[5]=d*m+f*y+g*A,r[8]=d*p+f*v+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*l-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Oa.makeScale(e,t)),this}rotate(e){return this.premultiply(Oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oa=new We;function pf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Or(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ng(){const n=Or("canvas");return n.style.display="block",n}const Uh={};function Rr(n){n in Uh||(Uh[n]=!0,console.warn(n))}const Oh=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fh=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ho={[qt]:{transfer:Qo,primaries:ea,toReference:n=>n,fromReference:n=>n},[at]:{transfer:pt,primaries:ea,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ma]:{transfer:Qo,primaries:ta,toReference:n=>n.applyMatrix3(Fh),fromReference:n=>n.applyMatrix3(Oh)},[vc]:{transfer:pt,primaries:ta,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Fh),fromReference:n=>n.applyMatrix3(Oh).convertLinearToSRGB()}},ig=new Set([qt,ma]),nt={enabled:!0,_workingColorSpace:qt,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!ig.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ho[e].toReference,s=ho[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ho[n].primaries},getTransfer:function(n){return n===wn?Qo:ho[n].transfer}};function Os(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ds;class mf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ds===void 0&&(ds=Or("canvas")),ds.width=e.width,ds.height=e.height;const i=ds.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Or("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Os(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Os(t[i]/255)*255):t[i]=Os(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sg=0;class gf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=On(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ba(s[o].image)):r.push(Ba(s[o]))}else r=Ba(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ba(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rg=0;class Gt extends Js{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=bn,s=bn,r=rn,o=ss,a=Sn,c=Li,l=Gt.DEFAULT_ANISOTROPY,h=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=On(),this.name="",this.source=new gf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ns?at:wn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case is:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case Jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case is:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case Jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===at?ns:df}set encoding(e){Rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ns?at:wn}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=nf;Gt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,s=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,v=(f+1)/2,E=(p+1)/2,A=(h+d)/4,w=(u+_)/4,L=(g+m)/4;return y>v&&y>E?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=A/i,r=w/i):v>E?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=A/s,r=L/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=w/r,s=L/r),this.set(i,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class og extends Js{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(Rr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ns?at:wn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Gt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends og{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class _f extends Gt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ag extends Gt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const E=Math.sqrt(y),A=Math.atan2(E,p*x);m=Math.sin(m*A)/E,a=Math.sin(a*A)/E}const v=a*x;if(c=c*m+d*v,l=l*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return za.copy(this).projectOnVector(e),this.sub(za)}reflect(e){return this.sub(za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new R,Bh=new Ui;class yi{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uo.copy(i.boundingBox)),uo.applyMatrix4(e.matrixWorld),this.union(uo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),fo.subVectors(this.max,cr),fs.subVectors(e.a,cr),ps.subVectors(e.b,cr),ms.subVectors(e.c,cr),vi.subVectors(ps,fs),Mi.subVectors(ms,ps),zi.subVectors(fs,ms);let t=[0,-vi.z,vi.y,0,-Mi.z,Mi.y,0,-zi.z,zi.y,vi.z,0,-vi.x,Mi.z,0,-Mi.x,zi.z,0,-zi.x,-vi.y,vi.x,0,-Mi.y,Mi.x,0,-zi.y,zi.x,0];return!ka(t,fs,ps,ms,fo)||(t=[1,0,0,0,1,0,0,0,1],!ka(t,fs,ps,ms,fo))?!1:(po.crossVectors(vi,Mi),t=[po.x,po.y,po.z],ka(t,fs,ps,ms,fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new R,new R,new R,new R,new R,new R,new R,new R],Pn=new R,uo=new yi,fs=new R,ps=new R,ms=new R,vi=new R,Mi=new R,zi=new R,cr=new R,fo=new R,po=new R,ki=new R;function ka(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ki.fromArray(n,r);const a=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),c=e.dot(ki),l=t.dot(ki),h=i.dot(ki);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const lg=new yi,hr=new R,Ha=new R;class Jn{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):lg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);const t=hr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(hr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(Ha)),this.expandByPoint(hr.copy(e.center).sub(Ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new R,Ga=new R,mo=new R,Ei=new R,Va=new R,go=new R,Wa=new R;class qr{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ga.copy(e).add(t).multiplyScalar(.5),mo.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(Ga);const r=e.distanceTo(t)*.5,o=-this.direction.dot(mo),a=Ei.dot(this.direction),c=-Ei.dot(mo),l=Ei.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ga).addScaledVector(mo,d),f}intersectSphere(e,t){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),s=ni.dot(ni)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,i,s,r){Va.subVectors(t,e),go.subVectors(i,e),Wa.crossVectors(Va,go);let o=this.direction.dot(Wa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ei.subVectors(this.origin,e);const c=a*this.direction.dot(go.crossVectors(Ei,go));if(c<0)return null;const l=a*this.direction.dot(Va.cross(Ei));if(l<0||c+l>o)return null;const h=-a*Ei.dot(Wa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(e,t,i,s,r,o,a,c,l,h,u,d,f,g,_,m){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,d,f,g,_,m)}set(e,t,i,s,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),o=1/gs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cg,e,hg)}lookAt(e,t,i){const s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),bi.crossVectors(i,dn),bi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),bi.crossVectors(i,dn)),bi.normalize(),_o.crossVectors(dn,bi),s[0]=bi.x,s[4]=_o.x,s[8]=dn.x,s[1]=bi.y,s[5]=_o.y,s[9]=dn.y,s[2]=bi.z,s[6]=_o.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],x=i[3],y=i[7],v=i[11],E=i[15],A=s[0],w=s[4],L=s[8],M=s[12],b=s[1],I=s[5],O=s[9],j=s[13],P=s[2],k=s[6],$=s[10],q=s[14],ne=s[3],K=s[7],Y=s[11],N=s[15];return r[0]=o*A+a*b+c*P+l*ne,r[4]=o*w+a*I+c*k+l*K,r[8]=o*L+a*O+c*$+l*Y,r[12]=o*M+a*j+c*q+l*N,r[1]=h*A+u*b+d*P+f*ne,r[5]=h*w+u*I+d*k+f*K,r[9]=h*L+u*O+d*$+f*Y,r[13]=h*M+u*j+d*q+f*N,r[2]=g*A+_*b+m*P+p*ne,r[6]=g*w+_*I+m*k+p*K,r[10]=g*L+_*O+m*$+p*Y,r[14]=g*M+_*j+m*q+p*N,r[3]=x*A+y*b+v*P+E*ne,r[7]=x*w+y*I+v*k+E*K,r[11]=x*L+y*O+v*$+E*Y,r[15]=x*M+y*j+v*q+E*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*f-i*c*f)+_*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+i*o*f+r*a*h-i*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-i*o*d+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,y=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,v=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,E=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,A=t*x+i*y+s*v+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=x*w,e[1]=(_*d*r-u*m*r-_*s*f+i*m*f+u*s*p-i*d*p)*w,e[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*p+i*c*p)*w,e[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*f-i*c*f)*w,e[4]=y*w,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*w,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*w,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*w,e[8]=v*w,e[9]=(g*u*r-h*_*r-g*i*f+t*_*f+h*i*p-t*u*p)*w,e[10]=(o*_*r-g*a*r+g*i*l-t*_*l-o*i*p+t*a*p)*w,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*f-t*a*f)*w,e[12]=E*w,e[13]=(h*_*s-g*u*s+g*i*d-t*_*d-h*i*m+t*u*m)*w,e[14]=(g*a*s-o*_*s-g*i*c+t*_*c+o*i*m-t*a*m)*w,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*d+t*a*d)*w,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,x=c*l,y=c*h,v=c*u,E=i.x,A=i.y,w=i.z;return s[0]=(1-(_+p))*E,s[1]=(f+v)*E,s[2]=(g-y)*E,s[3]=0,s[4]=(f-v)*A,s[5]=(1-(d+p))*A,s[6]=(m+x)*A,s[7]=0,s[8]=(g+y)*w,s[9]=(m-x)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=gs.set(s[0],s[1],s[2]).length();const o=gs.set(s[4],s[5],s[6]).length(),a=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Dn.copy(this);const l=1/r,h=1/o,u=1/a;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,t.setFromRotationMatrix(Dn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=pi){const c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s);let f,g;if(a===pi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===na)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=pi){const c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*l,f=(i+s)*h;let g,_;if(a===pi)g=(o+r)*u,_=-2*u;else if(a===na)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const gs=new R,Dn=new Ue,cg=new R(0,0,0),hg=new R(1,1,1),bi=new R,_o=new R,dn=new R,zh=new Ue,kh=new Ui;class ga{constructor(e=0,t=0,i=0,s=ga.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kh.setFromEuler(this),this.setFromQuaternion(kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ga.DEFAULT_ORDER="XYZ";class Ec{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ug=0;const Hh=new R,_s=new Ui,ii=new Ue,xo=new R,ur=new R,dg=new R,fg=new Ui,Gh=new R(1,0,0),Vh=new R(0,1,0),Wh=new R(0,0,1),pg={type:"added"},mg={type:"removed"};class mt extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new R,t=new ga,i=new Ui,s=new R(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ue},normalMatrix:{value:new We}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(Gh,e)}rotateY(e){return this.rotateOnAxis(Vh,e)}rotateZ(e){return this.rotateOnAxis(Wh,e)}translateOnAxis(e,t){return Hh.copy(e).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gh,e)}translateY(e){return this.translateOnAxis(Vh,e)}translateZ(e){return this.translateOnAxis(Wh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xo.copy(e):xo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(ur,xo,this.up):ii.lookAt(xo,ur,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(ii),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(pg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,dg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,fg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}mt.DEFAULT_UP=new R(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new R,si=new R,Xa=new R,ri=new R,xs=new R,ys=new R,Xh=new R,$a=new R,ja=new R,qa=new R;let yo=!1;class Mn{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),In.subVectors(e,t),s.cross(In);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){In.subVectors(s,t),si.subVectors(i,t),Xa.subVectors(e,t);const o=In.dot(In),a=In.dot(si),c=In.dot(Xa),l=si.dot(si),h=si.dot(Xa),u=o*l-a*a;if(u===0)return r.set(-2,-1,-1);const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ri),ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getUV(e,t,i,s,r,o,a,c){return yo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yo=!0),this.getInterpolation(e,t,i,s,r,o,a,c)}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,ri),c.setScalar(0),c.addScaledVector(r,ri.x),c.addScaledVector(o,ri.y),c.addScaledVector(a,ri.z),c}static isFrontFacing(e,t,i,s){return In.subVectors(i,t),si.subVectors(e,t),In.cross(si).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),si.subVectors(this.a,this.b),In.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return yo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yo=!0),Mn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;xs.subVectors(s,i),ys.subVectors(r,i),$a.subVectors(e,i);const c=xs.dot($a),l=ys.dot($a);if(c<=0&&l<=0)return t.copy(i);ja.subVectors(e,s);const h=xs.dot(ja),u=ys.dot(ja);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(xs,o);qa.subVectors(e,r);const f=xs.dot(qa),g=ys.dot(qa);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ys,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Xh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Xh,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector(xs,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},vo={h:0,s:0,l:0};function Ya(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=Mc(e,1),t=kt(t,0,1),i=kt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ya(o,r,e+1/3),this.g=Ya(o,r,e),this.b=Ya(o,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=at){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){const i=xf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=Fa(e.r),this.g=Fa(e.g),this.b=Fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return nt.fromWorkingColorSpace(Zt.copy(this),e),Math.round(kt(Zt.r*255,0,255))*65536+Math.round(kt(Zt.g*255,0,255))*256+Math.round(kt(Zt.b*255,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Zt.copy(this),t);const i=Zt.r,s=Zt.g,r=Zt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=at){nt.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,i=Zt.g,s=Zt.b;return e!==at?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(vo);const i=Ar(Si.h,vo.h,t),s=Ar(Si.s,vo.s,t),r=Ar(Si.l,vo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new ge;ge.NAMES=xf;let gg=0;class An extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=On(),this.name="",this.type="Material",this.blending=Qi,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bl,this.blendDst=zl,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bl&&(i.blendSrc=this.blendSrc),this.blendDst!==zl&&(i.blendDst=this.blendDst),this.blendEquation!==$i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xt extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new R,Mo=new fe;class jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wl,this.updateRange={offset:0,count:-1},this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Mo.fromBufferAttribute(this,t),Mo.applyMatrix3(e),this.setXY(t,Mo.x,Mo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class yf extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vf extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ut extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let _g=0;const yn=new Ue,Ka=new mt,vs=new R,fn=new yi,dr=new yi,Ft=new R;class Tt extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pf(e)?vf:yf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,i){return yn.makeTranslation(e,t,i),this.applyMatrix4(yn),this}scale(e,t,i){return yn.makeScale(e,t,i),this.applyMatrix4(yn),this}lookAt(e){return Ka.lookAt(e),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(fn.min,dr.min),fn.expandByPoint(Ft),Ft.addVectors(fn.max,dr.max),fn.expandByPoint(Ft)):(fn.expandByPoint(dr.min),fn.expandByPoint(dr.max))}fn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ft));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ft.fromBufferAttribute(a,l),c&&(vs.fromBufferAttribute(e,l),Ft.add(vs)),s=Math.max(s,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let b=0;b<a;b++)l[b]=new R,h[b]=new R;const u=new R,d=new R,f=new R,g=new fe,_=new fe,m=new fe,p=new R,x=new R;function y(b,I,O){u.fromArray(s,b*3),d.fromArray(s,I*3),f.fromArray(s,O*3),g.fromArray(o,b*2),_.fromArray(o,I*2),m.fromArray(o,O*2),d.sub(u),f.sub(u),_.sub(g),m.sub(g);const j=1/(_.x*m.y-m.x*_.y);isFinite(j)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(j),x.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(j),l[b].add(p),l[I].add(p),l[O].add(p),h[b].add(x),h[I].add(x),h[O].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let b=0,I=v.length;b<I;++b){const O=v[b],j=O.start,P=O.count;for(let k=j,$=j+P;k<$;k+=3)y(i[k+0],i[k+1],i[k+2])}const E=new R,A=new R,w=new R,L=new R;function M(b){w.fromArray(r,b*3),L.copy(w);const I=l[b];E.copy(I),E.sub(w.multiplyScalar(w.dot(I))).normalize(),A.crossVectors(L,I);const j=A.dot(h[b])<0?-1:1;c[b*4]=E.x,c[b*4+1]=E.y,c[b*4+2]=E.z,c[b*4+3]=j}for(let b=0,I=v.length;b<I;++b){const O=v[b],j=O.start,P=O.count;for(let k=j,$=j+P;k<$;k+=3)M(i[k+0]),M(i[k+1]),M(i[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new jt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $h=new Ue,Hi=new qr,Eo=new Jn,jh=new R,Ms=new R,Es=new R,bs=new R,Za=new R,bo=new R,So=new fe,wo=new fe,To=new fe,qh=new R,Yh=new R,Kh=new R,Ao=new R,Ro=new R;class oe extends mt{constructor(e=new Tt,t=new xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){bo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Za.fromBufferAttribute(u,e),o?bo.addScaledVector(Za,h):bo.addScaledVector(Za.sub(t),h))}t.add(bo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(r),Hi.copy(e.ray).recast(e.near),!(Eo.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(Eo,jh)===null||Hi.origin.distanceToSquared(jh)>(e.far-e.near)**2))&&($h.copy(r).invert(),Hi.copy(e.ray).applyMatrix4($h),!(i.boundingBox!==null&&Hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,E=y;v<E;v+=3){const A=a.getX(v),w=a.getX(v+1),L=a.getX(v+2);s=Co(this,p,e,i,l,h,u,A,w,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=Co(this,o,e,i,l,h,u,x,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,E=y;v<E;v+=3){const A=v,w=v+1,L=v+2;s=Co(this,p,e,i,l,h,u,A,w,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,y=m+1,v=m+2;s=Co(this,o,e,i,l,h,u,x,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function xg(n,e,t,i,s,r,o,a){let c;if(e.side===Jt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===xi,a),c===null)return null;Ro.copy(a),Ro.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ro);return l<t.near||l>t.far?null:{distance:l,point:Ro.clone(),object:n}}function Co(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Ms),n.getVertexPosition(c,Es),n.getVertexPosition(l,bs);const h=xg(n,e,t,i,Ms,Es,bs,Ao);if(h){s&&(So.fromBufferAttribute(s,a),wo.fromBufferAttribute(s,c),To.fromBufferAttribute(s,l),h.uv=Mn.getInterpolation(Ao,Ms,Es,bs,So,wo,To,new fe)),r&&(So.fromBufferAttribute(r,a),wo.fromBufferAttribute(r,c),To.fromBufferAttribute(r,l),h.uv1=Mn.getInterpolation(Ao,Ms,Es,bs,So,wo,To,new fe),h.uv2=h.uv1),o&&(qh.fromBufferAttribute(o,a),Yh.fromBufferAttribute(o,c),Kh.fromBufferAttribute(o,l),h.normal=Mn.getInterpolation(Ao,Ms,Es,bs,qh,Yh,Kh,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new R,materialIndex:0};Mn.getNormal(Ms,Es,bs,u.normal),h.face=u}return h}class $t extends Tt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2));function g(_,m,p,x,y,v,E,A,w,L,M){const b=v/w,I=E/L,O=v/2,j=E/2,P=A/2,k=w+1,$=L+1;let q=0,ne=0;const K=new R;for(let Y=0;Y<$;Y++){const N=Y*I-j;for(let V=0;V<k;V++){const le=V*b-O;K[_]=le*x,K[m]=N*y,K[p]=P,l.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[p]=A>0?1:-1,h.push(K.x,K.y,K.z),u.push(V/w),u.push(1-Y/L),q+=1}}for(let Y=0;Y<L;Y++)for(let N=0;N<w;N++){const V=d+N+k*Y,le=d+N+k*(Y+1),ue=d+(N+1)+k*(Y+1),me=d+(N+1)+k*Y;c.push(V,le,me),c.push(le,ue,me),ne+=6}a.addGroup(f,ne,M),f+=ne,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function nn(n){const e={};for(let t=0;t<n.length;t++){const i=Ws(n[t]);for(const s in i)e[s]=i[s]}return e}function yg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Mf(n){return n.getRenderTarget()===null?n.outputColorSpace:nt.workingColorSpace}const sa={clone:Ws,merge:nn};var vg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vg,this.fragmentShader=Mg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=yg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ef extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class on extends Ef{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ss=-90,ws=1;class Eg extends mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(Ss,ws,e,t);s.layers=this.layers,this.add(s);const r=new on(Ss,ws,e,t);r.layers=this.layers,this.add(r);const o=new on(Ss,ws,e,t);o.layers=this.layers,this.add(o);const a=new on(Ss,ws,e,t);a.layers=this.layers,this.add(a);const c=new on(Ss,ws,e,t);c.layers=this.layers,this.add(c);const l=new on(Ss,ws,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===na)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class bf extends Gt{constructor(e,t,i,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:zs,super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bg extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Rr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ns?at:wn),this.texture=new bf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $t(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:mi});r.uniforms.tEquirect.value=t;const o=new oe(s,r),a=t.minFilter;return t.minFilter===ss&&(t.minFilter=rn),new Eg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Ja=new R,Sg=new R,wg=new We;class Wi{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ja.subVectors(i,t).cross(Sg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ja),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||wg.getNormalMatrix(e),s=this.coplanarPoint(Ja).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new Jn,Lo=new R;class _a{constructor(e=new Wi,t=new Wi,i=new Wi,s=new Wi,r=new Wi,o=new Wi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],x=s[13],y=s[14],v=s[15];if(i[0].setComponents(c-r,d-l,m-f,v-p).normalize(),i[1].setComponents(c+r,d+l,m+f,v+p).normalize(),i[2].setComponents(c+o,d+h,m+g,v+x).normalize(),i[3].setComponents(c-o,d-h,m-g,v-x).normalize(),i[4].setComponents(c-a,d-u,m-_,v-y).normalize(),t===pi)i[5].setComponents(c+a,d+u,m+_,v+y).normalize();else if(t===na)i[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Lo.x=s.normal.x>0?e.max.x:e.min.x,Lo.y=s.normal.y>0?e.max.y:e.min.y,Lo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Tg(n,e){const t=e.isWebGL2,i=new WeakMap;function s(l,h){const u=l.array,d=l.usage,f=n.createBuffer();n.bindBuffer(h,f),n.bufferData(h,u,d),l.onUploadCallback();let g;if(u instanceof Float32Array)g=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=n.SHORT;else if(u instanceof Uint32Array)g=n.UNSIGNED_INT;else if(u instanceof Int32Array)g=n.INT;else if(u instanceof Int8Array)g=n.BYTE;else if(u instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function r(l,h,u){const d=h.array,f=h.updateRange;n.bindBuffer(u,l),f.count===-1?n.bufferSubData(u,0,d):(t?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u===void 0?i.set(l,s(l,h)):u.version<l.version&&(r(u.buffer,l,h),u.version=l.version)}return{get:o,remove:a,update:c}}class xa extends Tt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*d-o;for(let y=0;y<l;y++){const v=y*u-r;g.push(v,-x,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const y=x+l*p,v=x+l*(p+1),E=x+1+l*(p+1),A=x+1+l*p;f.push(y,v,A),f.push(v,E,A)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ag=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ig=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ng=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ug=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Og=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t0="gl_FragColor = linearToOutputTexel( gl_FragColor );",n0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,i0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,s0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,r0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,o0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,l0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,f0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,p0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,x0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,y0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,S0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,w0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,T0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,A0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,P0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,D0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,U0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,k0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,H0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,G0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,V0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,W0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,j0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,q0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,e_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,a_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,l_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,c_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,h_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,d_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,p_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,__=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,x_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,y_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,b_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const S_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,P_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,D_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,I_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,N_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B_=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,z_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,V_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,X_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Y_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Q_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ex=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ix=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:Ag,alphahash_pars_fragment:Rg,alphamap_fragment:Cg,alphamap_pars_fragment:Lg,alphatest_fragment:Pg,alphatest_pars_fragment:Dg,aomap_fragment:Ig,aomap_pars_fragment:Ng,begin_vertex:Ug,beginnormal_vertex:Og,bsdfs:Fg,iridescence_fragment:Bg,bumpmap_pars_fragment:zg,clipping_planes_fragment:kg,clipping_planes_pars_fragment:Hg,clipping_planes_pars_vertex:Gg,clipping_planes_vertex:Vg,color_fragment:Wg,color_pars_fragment:Xg,color_pars_vertex:$g,color_vertex:jg,common:qg,cube_uv_reflection_fragment:Yg,defaultnormal_vertex:Kg,displacementmap_pars_vertex:Zg,displacementmap_vertex:Jg,emissivemap_fragment:Qg,emissivemap_pars_fragment:e0,colorspace_fragment:t0,colorspace_pars_fragment:n0,envmap_fragment:i0,envmap_common_pars_fragment:s0,envmap_pars_fragment:r0,envmap_pars_vertex:o0,envmap_physical_pars_fragment:x0,envmap_vertex:a0,fog_vertex:l0,fog_pars_vertex:c0,fog_fragment:h0,fog_pars_fragment:u0,gradientmap_pars_fragment:d0,lightmap_fragment:f0,lightmap_pars_fragment:p0,lights_lambert_fragment:m0,lights_lambert_pars_fragment:g0,lights_pars_begin:_0,lights_toon_fragment:y0,lights_toon_pars_fragment:v0,lights_phong_fragment:M0,lights_phong_pars_fragment:E0,lights_physical_fragment:b0,lights_physical_pars_fragment:S0,lights_fragment_begin:w0,lights_fragment_maps:T0,lights_fragment_end:A0,logdepthbuf_fragment:R0,logdepthbuf_pars_fragment:C0,logdepthbuf_pars_vertex:L0,logdepthbuf_vertex:P0,map_fragment:D0,map_pars_fragment:I0,map_particle_fragment:N0,map_particle_pars_fragment:U0,metalnessmap_fragment:O0,metalnessmap_pars_fragment:F0,morphcolor_vertex:B0,morphnormal_vertex:z0,morphtarget_pars_vertex:k0,morphtarget_vertex:H0,normal_fragment_begin:G0,normal_fragment_maps:V0,normal_pars_fragment:W0,normal_pars_vertex:X0,normal_vertex:$0,normalmap_pars_fragment:j0,clearcoat_normal_fragment_begin:q0,clearcoat_normal_fragment_maps:Y0,clearcoat_pars_fragment:K0,iridescence_pars_fragment:Z0,opaque_fragment:J0,packing:Q0,premultiplied_alpha_fragment:e_,project_vertex:t_,dithering_fragment:n_,dithering_pars_fragment:i_,roughnessmap_fragment:s_,roughnessmap_pars_fragment:r_,shadowmap_pars_fragment:o_,shadowmap_pars_vertex:a_,shadowmap_vertex:l_,shadowmask_pars_fragment:c_,skinbase_vertex:h_,skinning_pars_vertex:u_,skinning_vertex:d_,skinnormal_vertex:f_,specularmap_fragment:p_,specularmap_pars_fragment:m_,tonemapping_fragment:g_,tonemapping_pars_fragment:__,transmission_fragment:x_,transmission_pars_fragment:y_,uv_pars_fragment:v_,uv_pars_vertex:M_,uv_vertex:E_,worldpos_vertex:b_,background_vert:S_,background_frag:w_,backgroundCube_vert:T_,backgroundCube_frag:A_,cube_vert:R_,cube_frag:C_,depth_vert:L_,depth_frag:P_,distanceRGBA_vert:D_,distanceRGBA_frag:I_,equirect_vert:N_,equirect_frag:U_,linedashed_vert:O_,linedashed_frag:F_,meshbasic_vert:B_,meshbasic_frag:z_,meshlambert_vert:k_,meshlambert_frag:H_,meshmatcap_vert:G_,meshmatcap_frag:V_,meshnormal_vert:W_,meshnormal_frag:X_,meshphong_vert:$_,meshphong_frag:j_,meshphysical_vert:q_,meshphysical_frag:Y_,meshtoon_vert:K_,meshtoon_frag:Z_,points_vert:J_,points_frag:Q_,shadow_vert:ex,shadow_frag:tx,sprite_vert:nx,sprite_frag:ix},re={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Hn={basic:{uniforms:nn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:nn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ge(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:nn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:nn([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:nn([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ge(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:nn([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:nn([re.points,re.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:nn([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:nn([re.common,re.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:nn([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:nn([re.sprite,re.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:nn([re.common,re.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:nn([re.lights,re.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Hn.physical={uniforms:nn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Po={r:0,b:0,g:0};function sx(n,e,t,i,s,r,o){const a=new ge(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(m,p){let x=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?_(a,c):y&&y.isColor&&(_(y,1),x=!0);const v=n.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===pa)?(h===void 0&&(h=new oe(new $t(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Ws(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=nt.getTransfer(y.colorSpace)!==pt,(u!==y||d!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new oe(new xa(2,2),new an({name:"BackgroundMaterial",uniforms:Ws(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=nt.getTransfer(y.colorSpace)!==pt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,p){m.getRGB(Po,Mf(n)),i.buffers.color.setClear(Po.r,Po.g,Po.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function rx(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=m(null);let l=c,h=!1;function u(P,k,$,q,ne){let K=!1;if(o){const Y=_(q,$,k);l!==Y&&(l=Y,f(l.object)),K=p(P,q,$,ne),K&&x(P,q,$,ne)}else{const Y=k.wireframe===!0;(l.geometry!==q.id||l.program!==$.id||l.wireframe!==Y)&&(l.geometry=q.id,l.program=$.id,l.wireframe=Y,K=!0)}ne!==null&&t.update(ne,n.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,L(P,k,$,q),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ne).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(P){return i.isWebGL2?n.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?n.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,k,$){const q=$.wireframe===!0;let ne=a[P.id];ne===void 0&&(ne={},a[P.id]=ne);let K=ne[k.id];K===void 0&&(K={},ne[k.id]=K);let Y=K[q];return Y===void 0&&(Y=m(d()),K[q]=Y),Y}function m(P){const k=[],$=[],q=[];for(let ne=0;ne<s;ne++)k[ne]=0,$[ne]=0,q[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:$,attributeDivisors:q,object:P,attributes:{},index:null}}function p(P,k,$,q){const ne=l.attributes,K=k.attributes;let Y=0;const N=$.getAttributes();for(const V in N)if(N[V].location>=0){const ue=ne[V];let me=K[V];if(me===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(me=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(me=P.instanceColor)),ue===void 0||ue.attribute!==me||me&&ue.data!==me.data)return!0;Y++}return l.attributesNum!==Y||l.index!==q}function x(P,k,$,q){const ne={},K=k.attributes;let Y=0;const N=$.getAttributes();for(const V in N)if(N[V].location>=0){let ue=K[V];ue===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor));const me={};me.attribute=ue,ue&&ue.data&&(me.data=ue.data),ne[V]=me,Y++}l.attributes=ne,l.attributesNum=Y,l.index=q}function y(){const P=l.newAttributes;for(let k=0,$=P.length;k<$;k++)P[k]=0}function v(P){E(P,0)}function E(P,k){const $=l.newAttributes,q=l.enabledAttributes,ne=l.attributeDivisors;$[P]=1,q[P]===0&&(n.enableVertexAttribArray(P),q[P]=1),ne[P]!==k&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,k),ne[P]=k)}function A(){const P=l.newAttributes,k=l.enabledAttributes;for(let $=0,q=k.length;$<q;$++)k[$]!==P[$]&&(n.disableVertexAttribArray($),k[$]=0)}function w(P,k,$,q,ne,K,Y){Y===!0?n.vertexAttribIPointer(P,k,$,ne,K):n.vertexAttribPointer(P,k,$,q,ne,K)}function L(P,k,$,q){if(i.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const ne=q.attributes,K=$.getAttributes(),Y=k.defaultAttributeValues;for(const N in K){const V=K[N];if(V.location>=0){let le=ne[N];if(le===void 0&&(N==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),N==="instanceColor"&&P.instanceColor&&(le=P.instanceColor)),le!==void 0){const ue=le.normalized,me=le.itemSize,we=t.get(le);if(we===void 0)continue;const qe=we.buffer,Le=we.type,Oe=we.bytesPerElement,Et=i.isWebGL2===!0&&(Le===n.INT||Le===n.UNSIGNED_INT||le.gpuType===rf);if(le.isInterleavedBufferAttribute){const ke=le.data,F=ke.stride,cn=le.offset;if(ke.isInstancedInterleavedBuffer){for(let ve=0;ve<V.locationSize;ve++)E(V.location+ve,ke.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let ve=0;ve<V.locationSize;ve++)v(V.location+ve);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let ve=0;ve<V.locationSize;ve++)w(V.location+ve,me/V.locationSize,Le,ue,F*Oe,(cn+me/V.locationSize*ve)*Oe,Et)}else{if(le.isInstancedBufferAttribute){for(let ke=0;ke<V.locationSize;ke++)E(V.location+ke,le.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ke=0;ke<V.locationSize;ke++)v(V.location+ke);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let ke=0;ke<V.locationSize;ke++)w(V.location+ke,me/V.locationSize,Le,ue,me*Oe,me/V.locationSize*ke*Oe,Et)}}else if(Y!==void 0){const ue=Y[N];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(V.location,ue);break;case 3:n.vertexAttrib3fv(V.location,ue);break;case 4:n.vertexAttrib4fv(V.location,ue);break;default:n.vertexAttrib1fv(V.location,ue)}}}}A()}function M(){O();for(const P in a){const k=a[P];for(const $ in k){const q=k[$];for(const ne in q)g(q[ne].object),delete q[ne];delete k[$]}delete a[P]}}function b(P){if(a[P.id]===void 0)return;const k=a[P.id];for(const $ in k){const q=k[$];for(const ne in q)g(q[ne].object),delete q[ne];delete k[$]}delete a[P.id]}function I(P){for(const k in a){const $=a[k];if($[P.id]===void 0)continue;const q=$[P.id];for(const ne in q)g(q[ne].object),delete q[ne];delete $[P.id]}}function O(){j(),h=!0,l!==c&&(l=c,f(l.object))}function j(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:O,resetDefaultState:j,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:v,disableUnusedAttributes:A}}function ox(n,e,t,i){const s=i.isWebGL2;let r;function o(l){r=l}function a(l,h){n.drawArrays(r,l,h),t.update(h,r,1)}function c(l,h,u){if(u===0)return;let d,f;if(s)d=n,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,l,h,u),t.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=c}function ax(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,v=o||e.has("OES_texture_float"),E=y&&v,A=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:v,floatVertexTextures:E,maxSamples:A}}function lx(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Wi,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const x=r?0:i,y=x*4;let v=p.clippingState||null;c.value=v,v=h(g,d,y,f);for(let E=0;E!==y;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)o.copy(u[y]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function cx(n){let e=new WeakMap;function t(o,a){return a===kl?o.mapping=zs:a===Hl&&(o.mapping=ks),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===kl||a===Hl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new bg(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Yr extends Ef{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ns=4,Zh=[.125,.215,.35,.446,.526,.582],ji=20,Qa=new Yr,Jh=new ge;let el=null,tl=0,nl=0;const Xi=(1+Math.sqrt(5))/2,Ts=1/Xi,Qh=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Xi,Ts),new R(0,Xi,-Ts),new R(Ts,0,Xi),new R(-Ts,0,Xi),new R(Xi,Ts,0),new R(-Xi,Ts,0)];class eu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){el=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(el,tl,nl),e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),el=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:_i,format:Sn,colorSpace:qt,depthBuffer:!1},s=tu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tu(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hx(r)),this._blurMaterial=ux(r,e,t)}return s}_compileMaterial(e){const t=new oe(this._lodPlanes[0],e);this._renderer.compile(t,Qa)}_sceneToCubeUV(e,t,i,s){const a=new on(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Jh),h.toneMapping=gi,h.autoClear=!1;const f=new xt({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new oe(new $t,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Jh),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;Do(s,x*y,p>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===zs||e.mapping===ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Do(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Qa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Qh[(s-1)%Qh.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new oe(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ji-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ji;m>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ji}`);const p=[];let x=0;for(let w=0;w<ji;++w){const L=w/_,M=Math.exp(-L*L/2);p.push(M),w===0?x+=M:w<m&&(x+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const v=this._sizeLods[s],E=3*v*(s>y-Ns?s-y+Ns:0),A=4*(this._cubeSize-v);Do(t,E,A,3*v,2*v),c.setRenderTarget(t),c.render(u,Qa)}}function hx(n){const e=[],t=[],i=[];let s=n;const r=n-Ns+1+Zh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Ns?c=Zh[o-n+Ns-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let A=0;A<f;A++){const w=A%3*2/3-1,L=A>2?0:-1,M=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];x.set(M,_*g*A),y.set(d,m*g*A);const b=[A,A,A,A,A,A];v.set(b,p*g*A)}const E=new Tt;E.setAttribute("position",new jt(x,_)),E.setAttribute("uv",new jt(y,m)),E.setAttribute("faceIndex",new jt(v,p)),e.push(E),s>Ns&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function tu(n,e,t){const i=new Fn(n,e,t);return i.texture.mapping=pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Do(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function ux(n,e,t){const i=new Float32Array(ji),s=new R(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function nu(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function iu(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function bc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===kl||c===Hl,h=c===zs||c===ks;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new eu(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new eu(n));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function fx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function px(n,e,t,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let y=0,v=x.length;y<v;y+=3){const E=x[y+0],A=x[y+1],w=x[y+2];d.push(E,A,A,w,w,E)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const E=y+0,A=y+1,w=y+2;d.push(E,A,A,w,w,E)}}else return;const m=new(pf(d)?vf:yf)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function mx(n,e,t,i){const s=i.isWebGL2;let r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,f){n.drawElements(r,f,a,d*c),t.update(f,r,1)}function u(d,f,g){if(g===0)return;let _,m;if(s)_=n,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,f,a,d*c,g),t.update(f,r,g)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u}function gx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function _x(n,e){return n[0]-e[0]}function xx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function yx(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new ht,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==_){let k=function(){j.dispose(),r.delete(h),h.removeEventListener("dispose",k)};var f=k;m!==void 0&&m.texture.dispose();const y=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let M=0;y===!0&&(M=1),v===!0&&(M=2),E===!0&&(M=3);let b=h.attributes.position.count*M,I=1;b>e.maxTextureSize&&(I=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const O=new Float32Array(b*I*4*_),j=new _f(O,b,I,_);j.type=fi,j.needsUpdate=!0;const P=M*4;for(let $=0;$<_;$++){const q=A[$],ne=w[$],K=L[$],Y=b*I*4*$;for(let N=0;N<q.count;N++){const V=N*P;y===!0&&(o.fromBufferAttribute(q,N),O[Y+V+0]=o.x,O[Y+V+1]=o.y,O[Y+V+2]=o.z,O[Y+V+3]=0),v===!0&&(o.fromBufferAttribute(ne,N),O[Y+V+4]=o.x,O[Y+V+5]=o.y,O[Y+V+6]=o.z,O[Y+V+7]=0),E===!0&&(o.fromBufferAttribute(K,N),O[Y+V+8]=o.x,O[Y+V+9]=o.y,O[Y+V+10]=o.z,O[Y+V+11]=K.itemSize===4?o.w:1)}}m={count:_,texture:j,size:new fe(b,I)},r.set(h,m),h.addEventListener("dispose",k)}let p=0;for(let y=0;y<d.length;y++)p+=d[y];const x=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",x),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=i[h.id];if(_===void 0||_.length!==g){_=[];for(let v=0;v<g;v++)_[v]=[v,0];i[h.id]=_}for(let v=0;v<g;v++){const E=_[v];E[0]=v,E[1]=d[v]}_.sort(xx);for(let v=0;v<8;v++)v<g&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(_x);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let x=0;for(let v=0;v<8;v++){const E=a[v],A=E[0],w=E[1];A!==Number.MAX_SAFE_INTEGER&&w?(m&&h.getAttribute("morphTarget"+v)!==m[A]&&h.setAttribute("morphTarget"+v,m[A]),p&&h.getAttribute("morphNormal"+v)!==p[A]&&h.setAttribute("morphNormal"+v,p[A]),s[v]=w,x+=w):(m&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}const y=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(n,"morphTargetBaseInfluence",y),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function vx(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const wf=new Gt,Tf=new _f,Af=new ag,Rf=new bf,su=[],ru=[],ou=new Float32Array(16),au=new Float32Array(9),lu=new Float32Array(4);function Qs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=su[s];if(r===void 0&&(r=new Float32Array(s),su[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Nt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ya(n,e){let t=ru[e];t===void 0&&(t=new Int32Array(e),ru[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Mx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Nt(t,e)}}function bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Nt(t,e)}}function Sx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Nt(t,e)}}function wx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,i))return;lu.set(i),n.uniformMatrix2fv(this.addr,!1,lu),Nt(t,i)}}function Tx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,i))return;au.set(i),n.uniformMatrix3fv(this.addr,!1,au),Nt(t,i)}}function Ax(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,i))return;ou.set(i),n.uniformMatrix4fv(this.addr,!1,ou),Nt(t,i)}}function Rx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Cx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Nt(t,e)}}function Lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Nt(t,e)}}function Px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Nt(t,e)}}function Dx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ix(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Nt(t,e)}}function Nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Nt(t,e)}}function Ux(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Nt(t,e)}}function Ox(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||wf,s)}function Fx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Af,s)}function Bx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Rf,s)}function zx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Tf,s)}function kx(n){switch(n){case 5126:return Mx;case 35664:return Ex;case 35665:return bx;case 35666:return Sx;case 35674:return wx;case 35675:return Tx;case 35676:return Ax;case 5124:case 35670:return Rx;case 35667:case 35671:return Cx;case 35668:case 35672:return Lx;case 35669:case 35673:return Px;case 5125:return Dx;case 36294:return Ix;case 36295:return Nx;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return Ox;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return Bx;case 36289:case 36303:case 36311:case 36292:return zx}}function Hx(n,e){n.uniform1fv(this.addr,e)}function Gx(n,e){const t=Qs(e,this.size,2);n.uniform2fv(this.addr,t)}function Vx(n,e){const t=Qs(e,this.size,3);n.uniform3fv(this.addr,t)}function Wx(n,e){const t=Qs(e,this.size,4);n.uniform4fv(this.addr,t)}function Xx(n,e){const t=Qs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $x(n,e){const t=Qs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jx(n,e){const t=Qs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function qx(n,e){n.uniform1iv(this.addr,e)}function Yx(n,e){n.uniform2iv(this.addr,e)}function Kx(n,e){n.uniform3iv(this.addr,e)}function Zx(n,e){n.uniform4iv(this.addr,e)}function Jx(n,e){n.uniform1uiv(this.addr,e)}function Qx(n,e){n.uniform2uiv(this.addr,e)}function ey(n,e){n.uniform3uiv(this.addr,e)}function ty(n,e){n.uniform4uiv(this.addr,e)}function ny(n,e,t){const i=this.cache,s=e.length,r=ya(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||wf,r[o])}function iy(n,e,t){const i=this.cache,s=e.length,r=ya(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Af,r[o])}function sy(n,e,t){const i=this.cache,s=e.length,r=ya(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Rf,r[o])}function ry(n,e,t){const i=this.cache,s=e.length,r=ya(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Tf,r[o])}function oy(n){switch(n){case 5126:return Hx;case 35664:return Gx;case 35665:return Vx;case 35666:return Wx;case 35674:return Xx;case 35675:return $x;case 35676:return jx;case 5124:case 35670:return qx;case 35667:case 35671:return Yx;case 35668:case 35672:return Kx;case 35669:case 35673:return Zx;case 5125:return Jx;case 36294:return Qx;case 36295:return ey;case 36296:return ty;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return iy;case 35680:case 36300:case 36308:case 36293:return sy;case 36289:case 36303:case 36311:case 36292:return ry}}class ay{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=kx(t.type)}}class ly{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=oy(t.type)}}class cy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const il=/(\w+)(\])?(\[|\.)?/g;function cu(n,e){n.seq.push(e),n.map[e.id]=e}function hy(n,e,t){const i=n.name,s=i.length;for(il.lastIndex=0;;){const r=il.exec(i),o=il.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){cu(t,l===void 0?new ay(a,n,e):new ly(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new cy(a),cu(t,u)),t=u}}}class Yo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);hy(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function hu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const uy=37297;let dy=0;function fy(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function py(n){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n);let i;switch(e===t?i="":e===ta&&t===ea?i="LinearDisplayP3ToLinearSRGB":e===ea&&t===ta&&(i="LinearSRGBToLinearDisplayP3"),n){case qt:case ma:return[i,"LinearTransferOETF"];case at:case vc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function uu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+fy(n.getShaderSource(e),o)}else return s}function my(n,e){const t=py(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function gy(n,e){let t;switch(e){case mm:t="Linear";break;case gm:t="Reinhard";break;case _m:t="OptimizedCineon";break;case fa:t="ACESFilmic";break;case xm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _y(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mr).join(`
`)}function xy(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yy(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Mr(n){return n!==""}function du(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vy=/^[ \t]*#include +<([\w\d./]+)>/gm;function jl(n){return n.replace(vy,Ey)}const My=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ey(n,e){let t=Fe[e];if(t===void 0){const i=My.get(e);if(i!==void 0)t=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jl(t)}const by=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pu(n){return n.replace(by,Sy)}function Sy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ef?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===tf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function Ty(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zs:case ks:e="ENVMAP_TYPE_CUBE";break;case pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ay(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function Ry(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _c:e="ENVMAP_BLENDING_MULTIPLY";break;case fm:e="ENVMAP_BLENDING_MIX";break;case pm:e="ENVMAP_BLENDING_ADD";break}return e}function Cy(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Ly(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=wy(t),l=Ty(t),h=Ay(t),u=Ry(t),d=Cy(t),f=t.isWebGL2?"":_y(t),g=xy(r),_=s.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mr).join(`
`),m.length>0&&(m+=`
`),p=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mr).join(`
`),p.length>0&&(p+=`
`)):(m=[mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),p=[f,mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?Fe.tonemapping_pars_fragment:"",t.toneMapping!==gi?gy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,my("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mr).join(`
`)),o=jl(o),o=du(o,t),o=fu(o,t),a=jl(a),a=du(a,t),a=fu(a,t),o=pu(o),a=pu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+o,v=x+p+a,E=hu(s,s.VERTEX_SHADER,y),A=hu(s,s.FRAGMENT_SHADER,v);s.attachShader(_,E),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(I){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(_).trim(),j=s.getShaderInfoLog(E).trim(),P=s.getShaderInfoLog(A).trim();let k=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,E,A);else{const q=uu(s,E,"vertex"),ne=uu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Program Info Log: `+O+`
`+q+`
`+ne)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(j===""||P==="")&&($=!1);$&&(I.diagnostics={runnable:k,programLog:O,vertexShader:{log:j,prefix:m},fragmentShader:{log:P,prefix:p}})}s.deleteShader(E),s.deleteShader(A),L=new Yo(s,_),M=yy(s,_)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,uy)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}let Py=0;class Dy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Iy(e),t.set(e,i)),i}}class Iy{constructor(e){this.id=Py++,this.code=e,this.usedTimes=0}}function Ny(n,e,t,i,s,r,o){const a=new Ec,c=new Dy,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,b,I,O,j){const P=O.fog,k=j.geometry,$=M.isMeshStandardMaterial?O.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||$),ne=q&&q.mapping===pa?q.image.height:null,K=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const Y=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,N=Y!==void 0?Y.length:0;let V=0;k.morphAttributes.position!==void 0&&(V=1),k.morphAttributes.normal!==void 0&&(V=2),k.morphAttributes.color!==void 0&&(V=3);let le,ue,me,we;if(K){const Rt=Hn[K];le=Rt.vertexShader,ue=Rt.fragmentShader}else le=M.vertexShader,ue=M.fragmentShader,c.update(M),me=c.getVertexShaderID(M),we=c.getFragmentShaderID(M);const qe=n.getRenderTarget(),Le=j.isInstancedMesh===!0,Oe=!!M.map,Et=!!M.matcap,ke=!!q,F=!!M.aoMap,cn=!!M.lightMap,ve=!!M.bumpMap,Pe=!!M.normalMap,Ce=!!M.displacementMap,bt=!!M.emissiveMap,He=!!M.metalnessMap,Ge=!!M.roughnessMap,lt=M.anisotropy>0,Ut=M.clearcoat>0,Yt=M.iridescence>0,C=M.sheen>0,S=M.transmission>0,B=lt&&!!M.anisotropyMap,Q=Ut&&!!M.clearcoatMap,Z=Ut&&!!M.clearcoatNormalMap,ee=Ut&&!!M.clearcoatRoughnessMap,_e=Yt&&!!M.iridescenceMap,se=Yt&&!!M.iridescenceThicknessMap,ce=C&&!!M.sheenColorMap,Te=C&&!!M.sheenRoughnessMap,Qe=!!M.specularMap,J=!!M.specularColorMap,rt=!!M.specularIntensityMap,De=S&&!!M.transmissionMap,Ae=S&&!!M.thicknessMap,Me=!!M.gradientMap,de=!!M.alphaMap,Ze=M.alphaTest>0,D=!!M.alphaHash,ae=!!M.extensions,te=!!k.attributes.uv1,X=!!k.attributes.uv2,ie=!!k.attributes.uv3;let Ee=gi;return M.toneMapped&&(qe===null||qe.isXRRenderTarget===!0)&&(Ee=n.toneMapping),{isWebGL2:h,shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:le,fragmentShader:ue,defines:M.defines,customVertexShaderID:me,customFragmentShaderID:we,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,instancing:Le,instancingColor:Le&&j.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:qe===null?n.outputColorSpace:qe.isXRRenderTarget===!0?qe.texture.colorSpace:qt,map:Oe,matcap:Et,envMap:ke,envMapMode:ke&&q.mapping,envMapCubeUVHeight:ne,aoMap:F,lightMap:cn,bumpMap:ve,normalMap:Pe,displacementMap:d&&Ce,emissiveMap:bt,normalMapObjectSpace:Pe&&M.normalMapType===Im,normalMapTangentSpace:Pe&&M.normalMapType===yc,metalnessMap:He,roughnessMap:Ge,anisotropy:lt,anisotropyMap:B,clearcoat:Ut,clearcoatMap:Q,clearcoatNormalMap:Z,clearcoatRoughnessMap:ee,iridescence:Yt,iridescenceMap:_e,iridescenceThicknessMap:se,sheen:C,sheenColorMap:ce,sheenRoughnessMap:Te,specularMap:Qe,specularColorMap:J,specularIntensityMap:rt,transmission:S,transmissionMap:De,thicknessMap:Ae,gradientMap:Me,opaque:M.transparent===!1&&M.blending===Qi,alphaMap:de,alphaTest:Ze,alphaHash:D,combine:M.combine,mapUv:Oe&&_(M.map.channel),aoMapUv:F&&_(M.aoMap.channel),lightMapUv:cn&&_(M.lightMap.channel),bumpMapUv:ve&&_(M.bumpMap.channel),normalMapUv:Pe&&_(M.normalMap.channel),displacementMapUv:Ce&&_(M.displacementMap.channel),emissiveMapUv:bt&&_(M.emissiveMap.channel),metalnessMapUv:He&&_(M.metalnessMap.channel),roughnessMapUv:Ge&&_(M.roughnessMap.channel),anisotropyMapUv:B&&_(M.anisotropyMap.channel),clearcoatMapUv:Q&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Z&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(M.sheenRoughnessMap.channel),specularMapUv:Qe&&_(M.specularMap.channel),specularColorMapUv:J&&_(M.specularColorMap.channel),specularIntensityMapUv:rt&&_(M.specularIntensityMap.channel),transmissionMapUv:De&&_(M.transmissionMap.channel),thicknessMapUv:Ae&&_(M.thicknessMap.channel),alphaMapUv:de&&_(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Pe||lt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:te,vertexUv2s:X,vertexUv3s:ie,pointsUvs:j.isPoints===!0&&!!k.attributes.uv&&(Oe||de),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:j.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:V,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ee,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Oe&&M.map.isVideoTexture===!0&&nt.getTransfer(M.map.colorSpace)===pt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ht,flipSided:M.side===Jt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ae&&M.extensions.derivatives===!0,extensionFragDepth:ae&&M.extensions.fragDepth===!0,extensionDrawBuffers:ae&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)b.push(I),b.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(x(b,M),y(b,M),b.push(n.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function x(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function y(M,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function v(M){const b=g[M.type];let I;if(b){const O=Hn[b];I=sa.clone(O.uniforms)}else I=M.uniforms;return I}function E(M,b){let I;for(let O=0,j=l.length;O<j;O++){const P=l[O];if(P.cacheKey===b){I=P,++I.usedTimes;break}}return I===void 0&&(I=new Ly(n,b,M,r),l.push(I)),I}function A(M){if(--M.usedTimes===0){const b=l.indexOf(M);l[b]=l[l.length-1],l.pop(),M.destroy()}}function w(M){c.remove(M)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:A,releaseShaderCache:w,programs:l,dispose:L}}function Uy(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Oy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function gu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function _u(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,f,g,_,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||Oy),i.length>1&&i.sort(d||gu),s.length>1&&s.sort(d||gu)}function h(){for(let u=e,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Fy(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new _u,n.set(i,[o])):s>=r.length?(o=new _u,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function By(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new ge};break;case"SpotLight":t={position:new R,direction:new R,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function zy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ky=0;function Hy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Gy(n,e){const t=new By,i=zy(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new R);const r=new R,o=new Ue,a=new Ue;function c(h,u){let d=0,f=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let _=0,m=0,p=0,x=0,y=0,v=0,E=0,A=0,w=0,L=0,M=0;h.sort(Hy);const b=u===!0?Math.PI:1;for(let O=0,j=h.length;O<j;O++){const P=h[O],k=P.color,$=P.intensity,q=P.distance,ne=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=k.r*$*b,f+=k.g*$*b,g+=k.b*$*b;else if(P.isLightProbe){for(let K=0;K<9;K++)s.probe[K].addScaledVector(P.sh.coefficients[K],$);M++}else if(P.isDirectionalLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){const Y=P.shadow,N=i.get(P);N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,s.directionalShadow[_]=N,s.directionalShadowMap[_]=ne,s.directionalShadowMatrix[_]=P.shadow.matrix,v++}s.directional[_]=K,_++}else if(P.isSpotLight){const K=t.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(k).multiplyScalar($*b),K.distance=q,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,s.spot[p]=K;const Y=P.shadow;if(P.map&&(s.spotLightMap[w]=P.map,w++,Y.updateMatrices(P),P.castShadow&&L++),s.spotLightMatrix[p]=Y.matrix,P.castShadow){const N=i.get(P);N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,s.spotShadow[p]=N,s.spotShadowMap[p]=ne,A++}p++}else if(P.isRectAreaLight){const K=t.get(P);K.color.copy(k).multiplyScalar($),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),s.rectArea[x]=K,x++}else if(P.isPointLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*b),K.distance=P.distance,K.decay=P.decay,P.castShadow){const Y=P.shadow,N=i.get(P);N.shadowBias=Y.bias,N.shadowNormalBias=Y.normalBias,N.shadowRadius=Y.radius,N.shadowMapSize=Y.mapSize,N.shadowCameraNear=Y.camera.near,N.shadowCameraFar=Y.camera.far,s.pointShadow[m]=N,s.pointShadowMap[m]=ne,s.pointShadowMatrix[m]=P.shadow.matrix,E++}s.point[m]=K,m++}else if(P.isHemisphereLight){const K=t.get(P);K.skyColor.copy(P.color).multiplyScalar($*b),K.groundColor.copy(P.groundColor).multiplyScalar($*b),s.hemi[y]=K,y++}}x>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=re.LTC_FLOAT_1,s.rectAreaLTC2=re.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=re.LTC_HALF_1,s.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;const I=s.hash;(I.directionalLength!==_||I.pointLength!==m||I.spotLength!==p||I.rectAreaLength!==x||I.hemiLength!==y||I.numDirectionalShadows!==v||I.numPointShadows!==E||I.numSpotShadows!==A||I.numSpotMaps!==w||I.numLightProbes!==M)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=x,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=A+w-L,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=M,I.directionalLength=_,I.pointLength=m,I.spotLength=p,I.rectAreaLength=x,I.hemiLength=y,I.numDirectionalShadows=v,I.numPointShadows=E,I.numSpotShadows=A,I.numSpotMaps=w,I.numLightProbes=M,s.version=ky++)}function l(h,u){let d=0,f=0,g=0,_=0,m=0;const p=u.matrixWorldInverse;for(let x=0,y=h.length;x<y;x++){const v=h[x];if(v.isDirectionalLight){const E=s.directional[d];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),d++}else if(v.isSpotLight){const E=s.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),g++}else if(v.isRectAreaLight){const E=s.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),a.identity(),o.copy(v.matrixWorld),o.premultiply(p),a.extractRotation(o),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const E=s.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const E=s.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function xu(n,e){const t=new Gy(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function c(u){t.setup(i,u)}function l(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Vy(n,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new xu(n,e),t.set(r,[c])):o>=a.length?(c=new xu(n,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:i,dispose:s}}class Wy extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xy extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $y=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qy(n,e,t){let i=new _a;const s=new fe,r=new fe,o=new ht,a=new Wy({depthPacking:Dm}),c=new Xy,l={},h=t.maxTextureSize,u={[xi]:Jt,[Jt]:xi,[Ht]:Ht},d=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:$y,fragmentShader:jy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new oe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ef;let p=this.type;this.render=function(E,A,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const L=n.getRenderTarget(),M=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),I=n.state;I.setBlending(mi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=p!==li&&this.type===li,j=p===li&&this.type!==li;for(let P=0,k=E.length;P<k;P++){const $=E[P],q=$.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const ne=q.getFrameExtents();if(s.multiply(ne),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,q.mapSize.y=r.y)),q.map===null||O===!0||j===!0){const Y=this.type!==li?{minFilter:zt,magFilter:zt}:{};q.map!==null&&q.map.dispose(),q.map=new Fn(s.x,s.y,Y),q.map.texture.name=$.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const K=q.getViewportCount();for(let Y=0;Y<K;Y++){const N=q.getViewport(Y);o.set(r.x*N.x,r.y*N.y,r.x*N.z,r.y*N.w),I.viewport(o),q.updateMatrices($,Y),i=q.getFrustum(),v(A,w,q.camera,$,this.type)}q.isPointLightShadow!==!0&&this.type===li&&x(q,w),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(L,M,b)};function x(E,A){const w=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Fn(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,w,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,w,f,_,null)}function y(E,A,w,L){let M=null;const b=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(b!==void 0)M=b;else if(M=w.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const I=M.uuid,O=A.uuid;let j=l[I];j===void 0&&(j={},l[I]=j);let P=j[O];P===void 0&&(P=M.clone(),j[O]=P),M=P}if(M.visible=A.visible,M.wireframe=A.wireframe,L===li?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=n.properties.get(M);I.light=w}return M}function v(E,A,w,L,M){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===li)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);const O=e.update(E),j=E.material;if(Array.isArray(j)){const P=O.groups;for(let k=0,$=P.length;k<$;k++){const q=P[k],ne=j[q.materialIndex];if(ne&&ne.visible){const K=y(E,ne,L,M);n.renderBufferDirect(w,null,O,K,E,q)}}}else if(j.visible){const P=y(E,j,L,M);n.renderBufferDirect(w,null,O,P,E,null)}}const I=E.children;for(let O=0,j=I.length;O<j;O++)v(I[O],A,w,L,M)}}function Yy(n,e,t){const i=t.isWebGL2;function s(){let D=!1;const ae=new ht;let te=null;const X=new ht(0,0,0,0);return{setMask:function(ie){te!==ie&&!D&&(n.colorMask(ie,ie,ie,ie),te=ie)},setLocked:function(ie){D=ie},setClear:function(ie,Ee,et,Rt,xn){xn===!0&&(ie*=Rt,Ee*=Rt,et*=Rt),ae.set(ie,Ee,et,Rt),X.equals(ae)===!1&&(n.clearColor(ie,Ee,et,Rt),X.copy(ae))},reset:function(){D=!1,te=null,X.set(-1,0,0,0)}}}function r(){let D=!1,ae=null,te=null,X=null;return{setTest:function(ie){ie?Oe(n.DEPTH_TEST):Et(n.DEPTH_TEST)},setMask:function(ie){ae!==ie&&!D&&(n.depthMask(ie),ae=ie)},setFunc:function(ie){if(te!==ie){switch(ie){case om:n.depthFunc(n.NEVER);break;case am:n.depthFunc(n.ALWAYS);break;case lm:n.depthFunc(n.LESS);break;case Zo:n.depthFunc(n.LEQUAL);break;case cm:n.depthFunc(n.EQUAL);break;case hm:n.depthFunc(n.GEQUAL);break;case um:n.depthFunc(n.GREATER);break;case dm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=ie}},setLocked:function(ie){D=ie},setClear:function(ie){X!==ie&&(n.clearDepth(ie),X=ie)},reset:function(){D=!1,ae=null,te=null,X=null}}}function o(){let D=!1,ae=null,te=null,X=null,ie=null,Ee=null,et=null,Rt=null,xn=null;return{setTest:function(dt){D||(dt?Oe(n.STENCIL_TEST):Et(n.STENCIL_TEST))},setMask:function(dt){ae!==dt&&!D&&(n.stencilMask(dt),ae=dt)},setFunc:function(dt,Qt,zn){(te!==dt||X!==Qt||ie!==zn)&&(n.stencilFunc(dt,Qt,zn),te=dt,X=Qt,ie=zn)},setOp:function(dt,Qt,zn){(Ee!==dt||et!==Qt||Rt!==zn)&&(n.stencilOp(dt,Qt,zn),Ee=dt,et=Qt,Rt=zn)},setLocked:function(dt){D=dt},setClear:function(dt){xn!==dt&&(n.clearStencil(dt),xn=dt)},reset:function(){D=!1,ae=null,te=null,X=null,ie=null,Ee=null,et=null,Rt=null,xn=null}}}const a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,_=[],m=null,p=!1,x=null,y=null,v=null,E=null,A=null,w=null,L=null,M=new ge(0,0,0),b=0,I=!1,O=null,j=null,P=null,k=null,$=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,K=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),ne=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),ne=K>=2);let N=null,V={};const le=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),me=new ht().fromArray(le),we=new ht().fromArray(ue);function qe(D,ae,te,X){const ie=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(D,Ee),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<te;et++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(ae,0,n.RGBA,1,1,X,0,n.RGBA,n.UNSIGNED_BYTE,ie):n.texImage2D(ae+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ie);return Ee}const Le={};Le[n.TEXTURE_2D]=qe(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=qe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[n.TEXTURE_2D_ARRAY]=qe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=qe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Oe(n.DEPTH_TEST),c.setFunc(Zo),He(!1),Ge(Jc),Oe(n.CULL_FACE),Ce(mi);function Oe(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function Et(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function ke(D,ae){return f[D]!==ae?(n.bindFramebuffer(D,ae),f[D]=ae,i&&(D===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ae),D===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ae)),!0):!1}function F(D,ae){let te=_,X=!1;if(D)if(te=g.get(ae),te===void 0&&(te=[],g.set(ae,te)),D.isWebGLMultipleRenderTargets){const ie=D.texture;if(te.length!==ie.length||te[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,et=ie.length;Ee<et;Ee++)te[Ee]=n.COLOR_ATTACHMENT0+Ee;te.length=ie.length,X=!0}}else te[0]!==n.COLOR_ATTACHMENT0&&(te[0]=n.COLOR_ATTACHMENT0,X=!0);else te[0]!==n.BACK&&(te[0]=n.BACK,X=!0);X&&(t.isWebGL2?n.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function cn(D){return m!==D?(n.useProgram(D),m=D,!0):!1}const ve={[$i]:n.FUNC_ADD,[Xp]:n.FUNC_SUBTRACT,[$p]:n.FUNC_REVERSE_SUBTRACT};if(i)ve[th]=n.MIN,ve[nh]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(ve[th]=D.MIN_EXT,ve[nh]=D.MAX_EXT)}const Pe={[jp]:n.ZERO,[qp]:n.ONE,[Yp]:n.SRC_COLOR,[Bl]:n.SRC_ALPHA,[tm]:n.SRC_ALPHA_SATURATE,[Qp]:n.DST_COLOR,[Zp]:n.DST_ALPHA,[Kp]:n.ONE_MINUS_SRC_COLOR,[zl]:n.ONE_MINUS_SRC_ALPHA,[em]:n.ONE_MINUS_DST_COLOR,[Jp]:n.ONE_MINUS_DST_ALPHA,[nm]:n.CONSTANT_COLOR,[im]:n.ONE_MINUS_CONSTANT_COLOR,[sm]:n.CONSTANT_ALPHA,[rm]:n.ONE_MINUS_CONSTANT_ALPHA};function Ce(D,ae,te,X,ie,Ee,et,Rt,xn,dt){if(D===mi){p===!0&&(Et(n.BLEND),p=!1);return}if(p===!1&&(Oe(n.BLEND),p=!0),D!==Wp){if(D!==x||dt!==I){if((y!==$i||A!==$i)&&(n.blendEquation(n.FUNC_ADD),y=$i,A=$i),dt)switch(D){case Qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Un:n.blendFunc(n.ONE,n.ONE);break;case Qc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case eh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Un:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Qc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case eh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,E=null,w=null,L=null,M.set(0,0,0),b=0,x=D,I=dt}return}ie=ie||ae,Ee=Ee||te,et=et||X,(ae!==y||ie!==A)&&(n.blendEquationSeparate(ve[ae],ve[ie]),y=ae,A=ie),(te!==v||X!==E||Ee!==w||et!==L)&&(n.blendFuncSeparate(Pe[te],Pe[X],Pe[Ee],Pe[et]),v=te,E=X,w=Ee,L=et),(Rt.equals(M)===!1||xn!==b)&&(n.blendColor(Rt.r,Rt.g,Rt.b,xn),M.copy(Rt),b=xn),x=D,I=!1}function bt(D,ae){D.side===Ht?Et(n.CULL_FACE):Oe(n.CULL_FACE);let te=D.side===Jt;ae&&(te=!te),He(te),D.blending===Qi&&D.transparent===!1?Ce(mi):Ce(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),a.setMask(D.colorWrite);const X=D.stencilWrite;l.setTest(X),X&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Oe(n.SAMPLE_ALPHA_TO_COVERAGE):Et(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(D){O!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),O=D)}function Ge(D){D!==Gp?(Oe(n.CULL_FACE),D!==j&&(D===Jc?n.cullFace(n.BACK):D===Vp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Et(n.CULL_FACE),j=D}function lt(D){D!==P&&(ne&&n.lineWidth(D),P=D)}function Ut(D,ae,te){D?(Oe(n.POLYGON_OFFSET_FILL),(k!==ae||$!==te)&&(n.polygonOffset(ae,te),k=ae,$=te)):Et(n.POLYGON_OFFSET_FILL)}function Yt(D){D?Oe(n.SCISSOR_TEST):Et(n.SCISSOR_TEST)}function C(D){D===void 0&&(D=n.TEXTURE0+q-1),N!==D&&(n.activeTexture(D),N=D)}function S(D,ae,te){te===void 0&&(N===null?te=n.TEXTURE0+q-1:te=N);let X=V[te];X===void 0&&(X={type:void 0,texture:void 0},V[te]=X),(X.type!==D||X.texture!==ae)&&(N!==te&&(n.activeTexture(te),N=te),n.bindTexture(D,ae||Le[D]),X.type=D,X.texture=ae)}function B(){const D=V[N];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Qe(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){me.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),me.copy(D))}function Ae(D){we.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),we.copy(D))}function Me(D,ae){let te=u.get(ae);te===void 0&&(te=new WeakMap,u.set(ae,te));let X=te.get(D);X===void 0&&(X=n.getUniformBlockIndex(ae,D.name),te.set(D,X))}function de(D,ae){const X=u.get(ae).get(D);h.get(ae)!==X&&(n.uniformBlockBinding(ae,X,D.__bindingPointIndex),h.set(ae,X))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},N=null,V={},f={},g=new WeakMap,_=[],m=null,p=!1,x=null,y=null,v=null,E=null,A=null,w=null,L=null,M=new ge(0,0,0),b=0,I=!1,O=null,j=null,P=null,k=null,$=null,me.set(0,0,n.canvas.width,n.canvas.height),we.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Oe,disable:Et,bindFramebuffer:ke,drawBuffers:F,useProgram:cn,setBlending:Ce,setMaterial:bt,setFlipSided:He,setCullFace:Ge,setLineWidth:lt,setPolygonOffset:Ut,setScissorTest:Yt,activeTexture:C,bindTexture:S,unbindTexture:B,compressedTexImage2D:Q,compressedTexImage3D:Z,texImage2D:J,texImage3D:rt,updateUBOMapping:Me,uniformBlockBinding:de,texStorage2D:Te,texStorage3D:Qe,texSubImage2D:ee,texSubImage3D:_e,compressedTexSubImage2D:se,compressedTexSubImage3D:ce,scissor:De,viewport:Ae,reset:Ze}}function Ky(n,e,t,i,s,r,o){const a=s.isWebGL2,c=s.maxTextures,l=s.maxCubemapSize,h=s.maxTextureSize,u=s.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,S){return p?new OffscreenCanvas(C,S):Or("canvas")}function y(C,S,B,Q){let Z=1;if((C.width>Q||C.height>Q)&&(Z=Q/Math.max(C.width,C.height)),Z<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ee=S?ia:Math.floor,_e=ee(Z*C.width),se=ee(Z*C.height);_===void 0&&(_=x(_e,se));const ce=B?x(_e,se):_;return ce.width=_e,ce.height=se,ce.getContext("2d").drawImage(C,0,0,_e,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+_e+"x"+se+")."),ce}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function v(C){return $l(C.width)&&$l(C.height)}function E(C){return a?!1:C.wrapS!==bn||C.wrapT!==bn||C.minFilter!==zt&&C.minFilter!==rn}function A(C,S){return C.generateMipmaps&&S&&C.minFilter!==zt&&C.minFilter!==rn}function w(C){n.generateMipmap(C)}function L(C,S,B,Q,Z=!1){if(a===!1)return S;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ee=S;if(S===n.RED&&(B===n.FLOAT&&(ee=n.R32F),B===n.HALF_FLOAT&&(ee=n.R16F),B===n.UNSIGNED_BYTE&&(ee=n.R8)),S===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(ee=n.R8UI),B===n.UNSIGNED_SHORT&&(ee=n.R16UI),B===n.UNSIGNED_INT&&(ee=n.R32UI),B===n.BYTE&&(ee=n.R8I),B===n.SHORT&&(ee=n.R16I),B===n.INT&&(ee=n.R32I)),S===n.RG&&(B===n.FLOAT&&(ee=n.RG32F),B===n.HALF_FLOAT&&(ee=n.RG16F),B===n.UNSIGNED_BYTE&&(ee=n.RG8)),S===n.RGBA){const _e=Z?Qo:nt.getTransfer(Q);B===n.FLOAT&&(ee=n.RGBA32F),B===n.HALF_FLOAT&&(ee=n.RGBA16F),B===n.UNSIGNED_BYTE&&(ee=_e===pt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function M(C,S,B){return A(C,B)===!0||C.isFramebufferTexture&&C.minFilter!==zt&&C.minFilter!==rn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function b(C){return C===zt||C===Gl||C===qo?n.NEAREST:n.LINEAR}function I(C){const S=C.target;S.removeEventListener("dispose",I),j(S),S.isVideoTexture&&g.delete(S)}function O(C){const S=C.target;S.removeEventListener("dispose",O),k(S)}function j(C){const S=i.get(C);if(S.__webglInit===void 0)return;const B=C.source,Q=m.get(B);if(Q){const Z=Q[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(C),Object.keys(Q).length===0&&m.delete(B)}i.remove(C)}function P(C){const S=i.get(C);n.deleteTexture(S.__webglTexture);const B=C.source,Q=m.get(B);delete Q[S.__cacheKey],o.memory.textures--}function k(C){const S=C.texture,B=i.get(C),Q=i.get(S);if(Q.__webglTexture!==void 0&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(B.__webglFramebuffer[Z]))for(let ee=0;ee<B.__webglFramebuffer[Z].length;ee++)n.deleteFramebuffer(B.__webglFramebuffer[Z][ee]);else n.deleteFramebuffer(B.__webglFramebuffer[Z]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[Z])}else{if(Array.isArray(B.__webglFramebuffer))for(let Z=0;Z<B.__webglFramebuffer.length;Z++)n.deleteFramebuffer(B.__webglFramebuffer[Z]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let Z=0;Z<B.__webglColorRenderbuffer.length;Z++)B.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[Z]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let Z=0,ee=S.length;Z<ee;Z++){const _e=i.get(S[Z]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(S[Z])}i.remove(S),i.remove(C)}let $=0;function q(){$=0}function ne(){const C=$;return C>=c&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+c),$+=1,C}function K(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function Y(C,S){const B=i.get(C);if(C.isVideoTexture&&Ut(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(B,C,S);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+S)}function N(C,S){const B=i.get(C);if(C.version>0&&B.__version!==C.version){Oe(B,C,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+S)}function V(C,S){const B=i.get(C);if(C.version>0&&B.__version!==C.version){Oe(B,C,S);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+S)}function le(C,S){const B=i.get(C);if(C.version>0&&B.__version!==C.version){Et(B,C,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+S)}const ue={[is]:n.REPEAT,[bn]:n.CLAMP_TO_EDGE,[Jo]:n.MIRRORED_REPEAT},me={[zt]:n.NEAREST,[Gl]:n.NEAREST_MIPMAP_NEAREST,[qo]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[sf]:n.LINEAR_MIPMAP_NEAREST,[ss]:n.LINEAR_MIPMAP_LINEAR},we={[Nm]:n.NEVER,[Hm]:n.ALWAYS,[Um]:n.LESS,[Fm]:n.LEQUAL,[Om]:n.EQUAL,[km]:n.GEQUAL,[Bm]:n.GREATER,[zm]:n.NOTEQUAL};function qe(C,S,B){if(B?(n.texParameteri(C,n.TEXTURE_WRAP_S,ue[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ue[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ue[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,me[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,me[S.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==bn||S.wrapT!==bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,b(S.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,b(S.minFilter)),S.minFilter!==zt&&S.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,we[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===zt||S.minFilter!==qo&&S.minFilter!==ss||S.type===fi&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===_i&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(C,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function Le(C,S){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",I));const Q=S.source;let Z=m.get(Q);Z===void 0&&(Z={},m.set(Q,Z));const ee=K(S);if(ee!==C.__cacheKey){Z[ee]===void 0&&(Z[ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Z[ee].usedTimes++;const _e=Z[C.__cacheKey];_e!==void 0&&(Z[C.__cacheKey].usedTimes--,_e.usedTimes===0&&P(S)),C.__cacheKey=ee,C.__webglTexture=Z[ee].texture}return B}function Oe(C,S,B){let Q=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=n.TEXTURE_3D);const Z=Le(C,S),ee=S.source;t.bindTexture(Q,C.__webglTexture,n.TEXTURE0+B);const _e=i.get(ee);if(ee.version!==_e.__version||Z===!0){t.activeTexture(n.TEXTURE0+B);const se=nt.getPrimaries(nt.workingColorSpace),ce=S.colorSpace===wn?null:nt.getPrimaries(S.colorSpace),Te=S.colorSpace===wn||se===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Qe=E(S)&&v(S.image)===!1;let J=y(S.image,Qe,!1,h);J=Yt(S,J);const rt=v(J)||a,De=r.convert(S.format,S.colorSpace);let Ae=r.convert(S.type),Me=L(S.internalFormat,De,Ae,S.colorSpace,S.isVideoTexture);qe(Q,S,rt);let de;const Ze=S.mipmaps,D=a&&S.isVideoTexture!==!0,ae=_e.__version===void 0||Z===!0,te=M(S,J,rt);if(S.isDepthTexture)Me=n.DEPTH_COMPONENT,a?S.type===fi?Me=n.DEPTH_COMPONENT32F:S.type===Ri?Me=n.DEPTH_COMPONENT24:S.type===es?Me=n.DEPTH24_STENCIL8:Me=n.DEPTH_COMPONENT16:S.type===fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ts&&Me===n.DEPTH_COMPONENT&&S.type!==xc&&S.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Ri,Ae=r.convert(S.type)),S.format===Hs&&Me===n.DEPTH_COMPONENT&&(Me=n.DEPTH_STENCIL,S.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=es,Ae=r.convert(S.type))),ae&&(D?t.texStorage2D(n.TEXTURE_2D,1,Me,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Me,J.width,J.height,0,De,Ae,null));else if(S.isDataTexture)if(Ze.length>0&&rt){D&&ae&&t.texStorage2D(n.TEXTURE_2D,te,Me,Ze[0].width,Ze[0].height);for(let X=0,ie=Ze.length;X<ie;X++)de=Ze[X],D?t.texSubImage2D(n.TEXTURE_2D,X,0,0,de.width,de.height,De,Ae,de.data):t.texImage2D(n.TEXTURE_2D,X,Me,de.width,de.height,0,De,Ae,de.data);S.generateMipmaps=!1}else D?(ae&&t.texStorage2D(n.TEXTURE_2D,te,Me,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,De,Ae,J.data)):t.texImage2D(n.TEXTURE_2D,0,Me,J.width,J.height,0,De,Ae,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){D&&ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,te,Me,Ze[0].width,Ze[0].height,J.depth);for(let X=0,ie=Ze.length;X<ie;X++)de=Ze[X],S.format!==Sn?De!==null?D?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,de.width,de.height,J.depth,De,de.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Me,de.width,de.height,J.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,de.width,de.height,J.depth,De,Ae,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,Me,de.width,de.height,J.depth,0,De,Ae,de.data)}else{D&&ae&&t.texStorage2D(n.TEXTURE_2D,te,Me,Ze[0].width,Ze[0].height);for(let X=0,ie=Ze.length;X<ie;X++)de=Ze[X],S.format!==Sn?De!==null?D?t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,de.width,de.height,De,de.data):t.compressedTexImage2D(n.TEXTURE_2D,X,Me,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage2D(n.TEXTURE_2D,X,0,0,de.width,de.height,De,Ae,de.data):t.texImage2D(n.TEXTURE_2D,X,Me,de.width,de.height,0,De,Ae,de.data)}else if(S.isDataArrayTexture)D?(ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,te,Me,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,De,Ae,J.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,J.width,J.height,J.depth,0,De,Ae,J.data);else if(S.isData3DTexture)D?(ae&&t.texStorage3D(n.TEXTURE_3D,te,Me,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,De,Ae,J.data)):t.texImage3D(n.TEXTURE_3D,0,Me,J.width,J.height,J.depth,0,De,Ae,J.data);else if(S.isFramebufferTexture){if(ae)if(D)t.texStorage2D(n.TEXTURE_2D,te,Me,J.width,J.height);else{let X=J.width,ie=J.height;for(let Ee=0;Ee<te;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,Me,X,ie,0,De,Ae,null),X>>=1,ie>>=1}}else if(Ze.length>0&&rt){D&&ae&&t.texStorage2D(n.TEXTURE_2D,te,Me,Ze[0].width,Ze[0].height);for(let X=0,ie=Ze.length;X<ie;X++)de=Ze[X],D?t.texSubImage2D(n.TEXTURE_2D,X,0,0,De,Ae,de):t.texImage2D(n.TEXTURE_2D,X,Me,De,Ae,de);S.generateMipmaps=!1}else D?(ae&&t.texStorage2D(n.TEXTURE_2D,te,Me,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,Ae,J)):t.texImage2D(n.TEXTURE_2D,0,Me,De,Ae,J);A(S,rt)&&w(Q),_e.__version=ee.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Et(C,S,B){if(S.image.length!==6)return;const Q=Le(C,S),Z=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+B);const ee=i.get(Z);if(Z.version!==ee.__version||Q===!0){t.activeTexture(n.TEXTURE0+B);const _e=nt.getPrimaries(nt.workingColorSpace),se=S.colorSpace===wn?null:nt.getPrimaries(S.colorSpace),ce=S.colorSpace===wn||_e===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Te=S.isCompressedTexture||S.image[0].isCompressedTexture,Qe=S.image[0]&&S.image[0].isDataTexture,J=[];for(let X=0;X<6;X++)!Te&&!Qe?J[X]=y(S.image[X],!1,!0,l):J[X]=Qe?S.image[X].image:S.image[X],J[X]=Yt(S,J[X]);const rt=J[0],De=v(rt)||a,Ae=r.convert(S.format,S.colorSpace),Me=r.convert(S.type),de=L(S.internalFormat,Ae,Me,S.colorSpace),Ze=a&&S.isVideoTexture!==!0,D=ee.__version===void 0||Q===!0;let ae=M(S,rt,De);qe(n.TEXTURE_CUBE_MAP,S,De);let te;if(Te){Ze&&D&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,de,rt.width,rt.height);for(let X=0;X<6;X++){te=J[X].mipmaps;for(let ie=0;ie<te.length;ie++){const Ee=te[ie];S.format!==Sn?Ae!==null?Ze?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,0,0,Ee.width,Ee.height,Ae,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,de,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,0,0,Ee.width,Ee.height,Ae,Me,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,de,Ee.width,Ee.height,0,Ae,Me,Ee.data)}}}else{te=S.mipmaps,Ze&&D&&(te.length>0&&ae++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,de,J[0].width,J[0].height));for(let X=0;X<6;X++)if(Qe){Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,J[X].width,J[X].height,Ae,Me,J[X].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,de,J[X].width,J[X].height,0,Ae,Me,J[X].data);for(let ie=0;ie<te.length;ie++){const et=te[ie].image[X].image;Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,0,0,et.width,et.height,Ae,Me,et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,de,et.width,et.height,0,Ae,Me,et.data)}}else{Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Ae,Me,J[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,de,Ae,Me,J[X]);for(let ie=0;ie<te.length;ie++){const Ee=te[ie];Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,0,0,Ae,Me,Ee.image[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,de,Ae,Me,Ee.image[X])}}}A(S,De)&&w(n.TEXTURE_CUBE_MAP),ee.__version=Z.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ke(C,S,B,Q,Z,ee){const _e=r.convert(B.format,B.colorSpace),se=r.convert(B.type),ce=L(B.internalFormat,_e,se,B.colorSpace);if(!i.get(S).__hasExternalTextures){const Qe=Math.max(1,S.width>>ee),J=Math.max(1,S.height>>ee);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,ee,ce,Qe,J,S.depth,0,_e,se,null):t.texImage2D(Z,ee,ce,Qe,J,0,_e,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),lt(S)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,Z,i.get(B).__webglTexture,0,Ge(S)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,Z,i.get(B).__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function F(C,S,B){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let Q=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||lt(S)){const Z=S.depthTexture;Z&&Z.isDepthTexture&&(Z.type===fi?Q=n.DEPTH_COMPONENT32F:Z.type===Ri&&(Q=n.DEPTH_COMPONENT24));const ee=Ge(S);lt(S)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,Q,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,Q,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,Q,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){const Q=Ge(S);B&&lt(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,S.width,S.height):lt(S)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{const Q=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Z=0;Z<Q.length;Z++){const ee=Q[Z],_e=r.convert(ee.format,ee.colorSpace),se=r.convert(ee.type),ce=L(ee.internalFormat,_e,se,ee.colorSpace),Te=Ge(S);B&&lt(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,ce,S.width,S.height):lt(S)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,ce,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ce,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function cn(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);const Q=i.get(S.depthTexture).__webglTexture,Z=Ge(S);if(S.depthTexture.format===ts)lt(S)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Hs)lt(S)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ve(C){const S=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");cn(S.__webglFramebuffer,C)}else if(B){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]=n.createRenderbuffer(),F(S.__webglDepthbuffer[Q],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),F(S.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(C,S,B){const Q=i.get(C);S!==void 0&&ke(Q.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&ve(C)}function Ce(C){const S=C.texture,B=i.get(C),Q=i.get(S);C.addEventListener("dispose",O),C.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=S.version,o.memory.textures++);const Z=C.isWebGLCubeRenderTarget===!0,ee=C.isWebGLMultipleRenderTargets===!0,_e=v(C)||a;if(Z){B.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[se]=[];for(let ce=0;ce<S.mipmaps.length;ce++)B.__webglFramebuffer[se][ce]=n.createFramebuffer()}else B.__webglFramebuffer[se]=n.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let se=0;se<S.mipmaps.length;se++)B.__webglFramebuffer[se]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(ee)if(s.drawBuffers){const se=C.texture;for(let ce=0,Te=se.length;ce<Te;ce++){const Qe=i.get(se[ce]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&lt(C)===!1){const se=ee?S:[S];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ce=0;ce<se.length;ce++){const Te=se[ce];B.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);const Qe=r.convert(Te.format,Te.colorSpace),J=r.convert(Te.type),rt=L(Te.internalFormat,Qe,J,Te.colorSpace,C.isXRRenderTarget===!0),De=Ge(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,rt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,B.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),F(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),qe(n.TEXTURE_CUBE_MAP,S,_e);for(let se=0;se<6;se++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let ce=0;ce<S.mipmaps.length;ce++)ke(B.__webglFramebuffer[se][ce],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ce);else ke(B.__webglFramebuffer[se],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);A(S,_e)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const se=C.texture;for(let ce=0,Te=se.length;ce<Te;ce++){const Qe=se[ce],J=i.get(Qe);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),qe(n.TEXTURE_2D,Qe,_e),ke(B.__webglFramebuffer,C,Qe,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),A(Qe,_e)&&w(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?se=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,Q.__webglTexture),qe(se,S,_e),a&&S.mipmaps&&S.mipmaps.length>0)for(let ce=0;ce<S.mipmaps.length;ce++)ke(B.__webglFramebuffer[ce],C,S,n.COLOR_ATTACHMENT0,se,ce);else ke(B.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,se,0);A(S,_e)&&w(se),t.unbindTexture()}C.depthBuffer&&ve(C)}function bt(C){const S=v(C)||a,B=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Q=0,Z=B.length;Q<Z;Q++){const ee=B[Q];if(A(ee,S)){const _e=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,se=i.get(ee).__webglTexture;t.bindTexture(_e,se),w(_e),t.unbindTexture()}}}function He(C){if(a&&C.samples>0&&lt(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],B=C.width,Q=C.height;let Z=n.COLOR_BUFFER_BIT;const ee=[],_e=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(C),ce=C.isWebGLMultipleRenderTargets===!0;if(ce)for(let Te=0;Te<S.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Te=0;Te<S.length;Te++){ee.push(n.COLOR_ATTACHMENT0+Te),C.depthBuffer&&ee.push(_e);const Qe=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Qe===!1&&(C.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ce&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[Te]),Qe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[_e]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_e])),ce){const J=i.get(S[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,B,Q,0,0,B,Q,Z,n.NEAREST),f&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let Te=0;Te<S.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,se.__webglColorRenderbuffer[Te]);const Qe=i.get(S[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,Qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function Ge(C){return Math.min(u,C.samples)}function lt(C){const S=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ut(C){const S=o.render.frame;g.get(C)!==S&&(g.set(C,S),C.update())}function Yt(C,S){const B=C.colorSpace,Q=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Xl||B!==qt&&B!==wn&&(nt.getTransfer(B)===pt?a===!1?e.has("EXT_sRGB")===!0&&Q===Sn?(C.format=Xl,C.minFilter=rn,C.generateMipmaps=!1):S=mf.sRGBToLinear(S):(Q!==Sn||Z!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}this.allocateTextureUnit=ne,this.resetTextureUnits=q,this.setTexture2D=Y,this.setTexture2DArray=N,this.setTexture3D=V,this.setTextureCube=le,this.rebindTextures=Pe,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=lt}function Zy(n,e,t){const i=t.isWebGL2;function s(r,o=wn){let a;const c=nt.getTransfer(o);if(r===Li)return n.UNSIGNED_BYTE;if(r===of)return n.UNSIGNED_SHORT_4_4_4_4;if(r===af)return n.UNSIGNED_SHORT_5_5_5_1;if(r===vm)return n.BYTE;if(r===Mm)return n.SHORT;if(r===xc)return n.UNSIGNED_SHORT;if(r===rf)return n.INT;if(r===Ri)return n.UNSIGNED_INT;if(r===fi)return n.FLOAT;if(r===_i)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Em)return n.ALPHA;if(r===Sn)return n.RGBA;if(r===bm)return n.LUMINANCE;if(r===Sm)return n.LUMINANCE_ALPHA;if(r===ts)return n.DEPTH_COMPONENT;if(r===Hs)return n.DEPTH_STENCIL;if(r===Xl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===wm)return n.RED;if(r===lf)return n.RED_INTEGER;if(r===Tm)return n.RG;if(r===cf)return n.RG_INTEGER;if(r===hf)return n.RGBA_INTEGER;if(r===La||r===Pa||r===Da||r===Ia)if(c===pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===La)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ia)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===La)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Da)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ia)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sh||r===rh||r===oh||r===ah)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===sh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===oh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ah)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Am)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===lh||r===ch)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===lh)return c===pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ch)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===hh||r===uh||r===dh||r===fh||r===ph||r===mh||r===gh||r===_h||r===xh||r===yh||r===vh||r===Mh||r===Eh||r===bh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===hh)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===uh)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===dh)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fh)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ph)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===mh)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gh)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_h)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===xh)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yh)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vh)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Mh)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Eh)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bh)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Na||r===Sh||r===wh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Na)return c===pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Sh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rm||r===Th||r===Ah||r===Rh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Na)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Th)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ah)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===es?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class Jy extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yt extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qy={type:"move"};class sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qy)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new yt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ev extends Gt{constructor(e,t,i,s,r,o,a,c,l,h){if(h=h!==void 0?h:ts,h!==ts&&h!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ts&&(i=Ri),i===void 0&&h===Hs&&(i=es),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zt,this.minFilter=c!==void 0?c:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class tv extends Js{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const x=[],y=[],v=new on;v.layers.enable(1),v.viewport=new ht;const E=new on;E.layers.enable(2),E.viewport=new ht;const A=[v,E],w=new Jy;w.layers.enable(1),w.layers.enable(2);let L=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let V=x[N];return V===void 0&&(V=new sl,x[N]=V),V.getTargetRaySpace()},this.getControllerGrip=function(N){let V=x[N];return V===void 0&&(V=new sl,x[N]=V),V.getGripSpace()},this.getHand=function(N){let V=x[N];return V===void 0&&(V=new sl,x[N]=V),V.getHandSpace()};function b(N){const V=y.indexOf(N.inputSource);if(V===-1)return;const le=x[V];le!==void 0&&(le.update(N.inputSource,N.frame,l||o),le.dispatchEvent({type:N.type,data:N.inputSource}))}function I(){s.removeEventListener("select",b),s.removeEventListener("selectstart",b),s.removeEventListener("selectend",b),s.removeEventListener("squeeze",b),s.removeEventListener("squeezestart",b),s.removeEventListener("squeezeend",b),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",O);for(let N=0;N<x.length;N++){const V=y[N];V!==null&&(y[N]=null,x[N].disconnect(V))}L=null,M=null,e.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,Y.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",b),s.addEventListener("selectstart",b),s.addEventListener("selectend",b),s.addEventListener("squeeze",b),s.addEventListener("squeezestart",b),s.addEventListener("squeezeend",b),s.addEventListener("end",I),s.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,V),s.updateRenderState({baseLayer:f}),p=new Fn(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let V=null,le=null,ue=null;_.depth&&(ue=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=_.stencil?Hs:ts,le=_.stencil?es:Ri);const me={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(me),s.updateRenderState({layers:[d]}),p=new Fn(d.textureWidth,d.textureHeight,{format:Sn,type:Li,depthTexture:new ev(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const we=e.properties.get(p);we.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Y.setContext(s),Y.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function O(N){for(let V=0;V<N.removed.length;V++){const le=N.removed[V],ue=y.indexOf(le);ue>=0&&(y[ue]=null,x[ue].disconnect(le))}for(let V=0;V<N.added.length;V++){const le=N.added[V];let ue=y.indexOf(le);if(ue===-1){for(let we=0;we<x.length;we++)if(we>=y.length){y.push(le),ue=we;break}else if(y[we]===null){y[we]=le,ue=we;break}if(ue===-1)break}const me=x[ue];me&&me.connect(le)}}const j=new R,P=new R;function k(N,V,le){j.setFromMatrixPosition(V.matrixWorld),P.setFromMatrixPosition(le.matrixWorld);const ue=j.distanceTo(P),me=V.projectionMatrix.elements,we=le.projectionMatrix.elements,qe=me[14]/(me[10]-1),Le=me[14]/(me[10]+1),Oe=(me[9]+1)/me[5],Et=(me[9]-1)/me[5],ke=(me[8]-1)/me[0],F=(we[8]+1)/we[0],cn=qe*ke,ve=qe*F,Pe=ue/(-ke+F),Ce=Pe*-ke;V.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ce),N.translateZ(Pe),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const bt=qe+Pe,He=Le+Pe,Ge=cn-Ce,lt=ve+(ue-Ce),Ut=Oe*Le/He*bt,Yt=Et*Le/He*bt;N.projectionMatrix.makePerspective(Ge,lt,Ut,Yt,bt,He),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function $(N,V){V===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(V.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(s===null)return;w.near=E.near=v.near=N.near,w.far=E.far=v.far=N.far,(L!==w.near||M!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,M=w.far);const V=N.parent,le=w.cameras;$(w,V);for(let ue=0;ue<le.length;ue++)$(le[ue],V);le.length===2?k(w,v,E):w.projectionMatrix.copy(v.projectionMatrix),q(N,w,V)};function q(N,V,le){le===null?N.matrix.copy(V.matrixWorld):(N.matrix.copy(le.matrixWorld),N.matrix.invert(),N.matrix.multiply(V.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(V.projectionMatrix),N.projectionMatrixInverse.copy(V.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Vs*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(N){c=N,d!==null&&(d.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)};let ne=null;function K(N,V){if(h=V.getViewerPose(l||o),g=V,h!==null){const le=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ue=!1;le.length!==w.cameras.length&&(w.cameras.length=0,ue=!0);for(let me=0;me<le.length;me++){const we=le[me];let qe=null;if(f!==null)qe=f.getViewport(we);else{const Oe=u.getViewSubImage(d,we);qe=Oe.viewport,me===0&&(e.setRenderTargetTextures(p,Oe.colorTexture,d.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(p))}let Le=A[me];Le===void 0&&(Le=new on,Le.layers.enable(me),Le.viewport=new ht,A[me]=Le),Le.matrix.fromArray(we.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(we.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(qe.x,qe.y,qe.width,qe.height),me===0&&(w.matrix.copy(Le.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ue===!0&&w.cameras.push(Le)}}for(let le=0;le<x.length;le++){const ue=y[le],me=x[le];ue!==null&&me!==void 0&&me.update(ue,V,l||o)}ne&&ne(N,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),g=null}const Y=new Sf;Y.setAnimationLoop(K),this.setAnimationLoop=function(N){ne=N},this.dispose=function(){}}}function nv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Mf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const y=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function iv(n,e,t,i){let s={},r={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,y){const v=y.program;i.uniformBlockBinding(x,v)}function l(x,y){let v=s[x.id];v===void 0&&(g(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",m));const E=y.program;i.updateUBOMapping(x,E);const A=e.render.frame;r[x.id]!==A&&(d(x),r[x.id]=A)}function h(x){const y=u();x.__bindingPointIndex=y;const v=n.createBuffer(),E=x.__size,A=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,E,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=s[x.id],v=x.uniforms,E=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,w=v.length;A<w;A++){const L=v[A];if(f(L,A,E)===!0){const M=L.__offset,b=Array.isArray(L.value)?L.value:[L.value];let I=0;for(let O=0;O<b.length;O++){const j=b[O],P=_(j);typeof j=="number"?(L.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,M+I,L.__data)):j.isMatrix3?(L.__data[0]=j.elements[0],L.__data[1]=j.elements[1],L.__data[2]=j.elements[2],L.__data[3]=j.elements[0],L.__data[4]=j.elements[3],L.__data[5]=j.elements[4],L.__data[6]=j.elements[5],L.__data[7]=j.elements[0],L.__data[8]=j.elements[6],L.__data[9]=j.elements[7],L.__data[10]=j.elements[8],L.__data[11]=j.elements[0]):(j.toArray(L.__data,I),I+=P.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,L.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,y,v){const E=x.value;if(v[y]===void 0){if(typeof E=="number")v[y]=E;else{const A=Array.isArray(E)?E:[E],w=[];for(let L=0;L<A.length;L++)w.push(A[L].clone());v[y]=w}return!0}else if(typeof E=="number"){if(v[y]!==E)return v[y]=E,!0}else{const A=Array.isArray(v[y])?v[y]:[v[y]],w=Array.isArray(E)?E:[E];for(let L=0;L<A.length;L++){const M=A[L];if(M.equals(w[L])===!1)return M.copy(w[L]),!0}}return!1}function g(x){const y=x.uniforms;let v=0;const E=16;let A=0;for(let w=0,L=y.length;w<L;w++){const M=y[w],b={boundary:0,storage:0},I=Array.isArray(M.value)?M.value:[M.value];for(let O=0,j=I.length;O<j;O++){const P=I[O],k=_(P);b.boundary+=k.boundary,b.storage+=k.storage}if(M.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=v,w>0){A=v%E;const O=E-A;A!==0&&O-b.boundary<0&&(v+=E-A,M.__offset=v)}v+=b.storage}return A=v%E,A>0&&(v+=E-A),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Cf{constructor(e={}){const{canvas:t=ng(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=at,this._useLegacyLights=!1,this.toneMapping=gi,this.toneMappingExposure=1;const y=this;let v=!1,E=0,A=0,w=null,L=-1,M=null;const b=new ht,I=new ht;let O=null;const j=new ge(0);let P=0,k=t.width,$=t.height,q=1,ne=null,K=null;const Y=new ht(0,0,k,$),N=new ht(0,0,k,$);let V=!1;const le=new _a;let ue=!1,me=!1,we=null;const qe=new Ue,Le=new fe,Oe=new R,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return w===null?q:1}let F=i;function cn(T,U){for(let z=0;z<T.length;z++){const H=T[z],G=t.getContext(H,U);if(G!==null)return G}return null}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gc}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ae,!1),F===null){const U=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&U.shift(),F=cn(U,T),F===null)throw cn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ve,Pe,Ce,bt,He,Ge,lt,Ut,Yt,C,S,B,Q,Z,ee,_e,se,ce,Te,Qe,J,rt,De,Ae;function Me(){ve=new fx(F),Pe=new ax(F,ve,e),ve.init(Pe),rt=new Zy(F,ve,Pe),Ce=new Yy(F,ve,Pe),bt=new gx(F),He=new Uy,Ge=new Ky(F,ve,Ce,He,Pe,rt,bt),lt=new cx(y),Ut=new dx(y),Yt=new Tg(F,Pe),De=new rx(F,ve,Yt,Pe),C=new px(F,Yt,bt,De),S=new vx(F,C,Yt,bt),Te=new yx(F,Pe,Ge),_e=new lx(He),B=new Ny(y,lt,Ut,ve,Pe,De,_e),Q=new nv(y,He),Z=new Fy,ee=new Vy(ve,Pe),ce=new sx(y,lt,Ut,Ce,S,d,c),se=new qy(y,S,Pe),Ae=new iv(F,bt,Pe,Ce),Qe=new ox(F,ve,bt,Pe),J=new mx(F,ve,bt,Pe),bt.programs=B.programs,y.capabilities=Pe,y.extensions=ve,y.properties=He,y.renderLists=Z,y.shadowMap=se,y.state=Ce,y.info=bt}Me();const de=new tv(y,F);this.xr=de,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=ve.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ve.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(k,$,!1))},this.getSize=function(T){return T.set(k,$)},this.setSize=function(T,U,z=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,$=U,t.width=Math.floor(T*q),t.height=Math.floor(U*q),z===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(k*q,$*q).floor()},this.setDrawingBufferSize=function(T,U,z){k=T,$=U,q=z,t.width=Math.floor(T*z),t.height=Math.floor(U*z),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy(Y)},this.setViewport=function(T,U,z,H){T.isVector4?Y.set(T.x,T.y,T.z,T.w):Y.set(T,U,z,H),Ce.viewport(b.copy(Y).multiplyScalar(q).floor())},this.getScissor=function(T){return T.copy(N)},this.setScissor=function(T,U,z,H){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,U,z,H),Ce.scissor(I.copy(N).multiplyScalar(q).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(T){Ce.setScissorTest(V=T)},this.setOpaqueSort=function(T){ne=T},this.setTransparentSort=function(T){K=T},this.getClearColor=function(T){return T.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(T=!0,U=!0,z=!0){let H=0;if(T){let G=!1;if(w!==null){const he=w.texture.format;G=he===hf||he===cf||he===lf}if(G){const he=w.texture.type,xe=he===Li||he===Ri||he===xc||he===es||he===of||he===af,be=ce.getClearColor(),Re=ce.getClearAlpha(),Be=be.r,Ie=be.g,Ne=be.b;xe?(f[0]=Be,f[1]=Ie,f[2]=Ne,f[3]=Re,F.clearBufferuiv(F.COLOR,0,f)):(g[0]=Be,g[1]=Ie,g[2]=Ne,g[3]=Re,F.clearBufferiv(F.COLOR,0,g))}else H|=F.COLOR_BUFFER_BIT}U&&(H|=F.DEPTH_BUFFER_BIT),z&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Z.dispose(),ee.dispose(),He.dispose(),lt.dispose(),Ut.dispose(),S.dispose(),De.dispose(),Ae.dispose(),B.dispose(),de.dispose(),de.removeEventListener("sessionstart",xn),de.removeEventListener("sessionend",dt),we&&(we.dispose(),we=null),Qt.stop()};function Ze(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const T=bt.autoReset,U=se.enabled,z=se.autoUpdate,H=se.needsUpdate,G=se.type;Me(),bt.autoReset=T,se.enabled=U,se.autoUpdate=z,se.needsUpdate=H,se.type=G}function ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function te(T){const U=T.target;U.removeEventListener("dispose",te),X(U)}function X(T){ie(T),He.remove(T)}function ie(T){const U=He.get(T).programs;U!==void 0&&(U.forEach(function(z){B.releaseProgram(z)}),T.isShaderMaterial&&B.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,z,H,G,he){U===null&&(U=Et);const xe=G.isMesh&&G.matrixWorld.determinant()<0,be=Bp(T,U,z,H,G);Ce.setMaterial(H,xe);let Re=z.index,Be=1;if(H.wireframe===!0){if(Re=C.getWireframeAttribute(z),Re===void 0)return;Be=2}const Ie=z.drawRange,Ne=z.attributes.position;let At=Ie.start*Be,hn=(Ie.start+Ie.count)*Be;he!==null&&(At=Math.max(At,he.start*Be),hn=Math.min(hn,(he.start+he.count)*Be)),Re!==null?(At=Math.max(At,0),hn=Math.min(hn,Re.count)):Ne!=null&&(At=Math.max(At,0),hn=Math.min(hn,Ne.count));const Ot=hn-At;if(Ot<0||Ot===1/0)return;De.setup(G,H,be,z,Re);let ei,St=Qe;if(Re!==null&&(ei=Yt.get(Re),St=J,St.setIndex(ei)),G.isMesh)H.wireframe===!0?(Ce.setLineWidth(H.wireframeLinewidth*ke()),St.setMode(F.LINES)):St.setMode(F.TRIANGLES);else if(G.isLine){let $e=H.linewidth;$e===void 0&&($e=1),Ce.setLineWidth($e*ke()),G.isLineSegments?St.setMode(F.LINES):G.isLineLoop?St.setMode(F.LINE_LOOP):St.setMode(F.LINE_STRIP)}else G.isPoints?St.setMode(F.POINTS):G.isSprite&&St.setMode(F.TRIANGLES);if(G.isInstancedMesh)St.renderInstances(At,Ot,G.count);else if(z.isInstancedBufferGeometry){const $e=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ta=Math.min(z.instanceCount,$e);St.renderInstances(At,Ot,Ta)}else St.render(At,Ot)};function Ee(T,U,z){T.transparent===!0&&T.side===Ht&&T.forceSinglePass===!1?(T.side=Jt,T.needsUpdate=!0,co(T,U,z),T.side=xi,T.needsUpdate=!0,co(T,U,z),T.side=Ht):co(T,U,z)}this.compile=function(T,U,z=null){z===null&&(z=T),m=ee.get(z),m.init(),x.push(m),z.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),T!==z&&T.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(y._useLegacyLights);const H=new Set;return T.traverse(function(G){const he=G.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){const be=he[xe];Ee(be,z,G),H.add(be)}else Ee(he,z,G),H.add(he)}),x.pop(),m=null,H},this.compileAsync=function(T,U,z=null){const H=this.compile(T,U,z);return new Promise(G=>{function he(){if(H.forEach(function(xe){He.get(xe).currentProgram.isReady()&&H.delete(xe)}),H.size===0){G(T);return}setTimeout(he,10)}ve.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let et=null;function Rt(T){et&&et(T)}function xn(){Qt.stop()}function dt(){Qt.start()}const Qt=new Sf;Qt.setAnimationLoop(Rt),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(T){et=T,de.setAnimationLoop(T),T===null?Qt.stop():Qt.start()},de.addEventListener("sessionstart",xn),de.addEventListener("sessionend",dt),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(U),U=de.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,U,w),m=ee.get(T,x.length),m.init(),x.push(m),qe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),le.setFromProjectionMatrix(qe),me=this.localClippingEnabled,ue=_e.init(this.clippingPlanes,me),_=Z.get(T,p.length),_.init(),p.push(_),zn(T,U,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(ne,K),this.info.render.frame++,ue===!0&&_e.beginShadows();const z=m.state.shadowsArray;if(se.render(z,T,U),ue===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),ce.render(_,T),m.setupLights(y._useLegacyLights),U.isArrayCamera){const H=U.cameras;for(let G=0,he=H.length;G<he;G++){const xe=H[G];$c(_,T,xe,xe.viewport)}}else $c(_,T,U);w!==null&&(Ge.updateMultisampleRenderTarget(w),Ge.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(y,T,U),De.resetDefaultState(),L=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function zn(T,U,z,H){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||le.intersectsSprite(T)){H&&Oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(qe);const xe=S.update(T),be=T.material;be.visible&&_.push(T,xe,be,z,Oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||le.intersectsObject(T))){const xe=S.update(T),be=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Oe.copy(T.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Oe.copy(xe.boundingSphere.center)),Oe.applyMatrix4(T.matrixWorld).applyMatrix4(qe)),Array.isArray(be)){const Re=xe.groups;for(let Be=0,Ie=Re.length;Be<Ie;Be++){const Ne=Re[Be],At=be[Ne.materialIndex];At&&At.visible&&_.push(T,xe,At,z,Oe.z,Ne)}}else be.visible&&_.push(T,xe,be,z,Oe.z,null)}}const he=T.children;for(let xe=0,be=he.length;xe<be;xe++)zn(he[xe],U,z,H)}function $c(T,U,z,H){const G=T.opaque,he=T.transmissive,xe=T.transparent;m.setupLightsView(z),ue===!0&&_e.setGlobalState(y.clippingPlanes,z),he.length>0&&Fp(G,he,U,z),H&&Ce.viewport(b.copy(H)),G.length>0&&lo(G,U,z),he.length>0&&lo(he,U,z),xe.length>0&&lo(xe,U,z),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Fp(T,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const he=Pe.isWebGL2;we===null&&(we=new Fn(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?_i:Li,minFilter:ss,samples:he?4:0})),y.getDrawingBufferSize(Le),he?we.setSize(Le.x,Le.y):we.setSize(ia(Le.x),ia(Le.y));const xe=y.getRenderTarget();y.setRenderTarget(we),y.getClearColor(j),P=y.getClearAlpha(),P<1&&y.setClearColor(16777215,.5),y.clear();const be=y.toneMapping;y.toneMapping=gi,lo(T,z,H),Ge.updateMultisampleRenderTarget(we),Ge.updateRenderTargetMipmap(we);let Re=!1;for(let Be=0,Ie=U.length;Be<Ie;Be++){const Ne=U[Be],At=Ne.object,hn=Ne.geometry,Ot=Ne.material,ei=Ne.group;if(Ot.side===Ht&&At.layers.test(H.layers)){const St=Ot.side;Ot.side=Jt,Ot.needsUpdate=!0,jc(At,z,H,hn,Ot,ei),Ot.side=St,Ot.needsUpdate=!0,Re=!0}}Re===!0&&(Ge.updateMultisampleRenderTarget(we),Ge.updateRenderTargetMipmap(we)),y.setRenderTarget(xe),y.setClearColor(j,P),y.toneMapping=be}function lo(T,U,z){const H=U.isScene===!0?U.overrideMaterial:null;for(let G=0,he=T.length;G<he;G++){const xe=T[G],be=xe.object,Re=xe.geometry,Be=H===null?xe.material:H,Ie=xe.group;be.layers.test(z.layers)&&jc(be,U,z,Re,Be,Ie)}}function jc(T,U,z,H,G,he){T.onBeforeRender(y,U,z,H,G,he),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(y,U,z,H,T,he),G.transparent===!0&&G.side===Ht&&G.forceSinglePass===!1?(G.side=Jt,G.needsUpdate=!0,y.renderBufferDirect(z,U,H,G,T,he),G.side=xi,G.needsUpdate=!0,y.renderBufferDirect(z,U,H,G,T,he),G.side=Ht):y.renderBufferDirect(z,U,H,G,T,he),T.onAfterRender(y,U,z,H,G,he)}function co(T,U,z){U.isScene!==!0&&(U=Et);const H=He.get(T),G=m.state.lights,he=m.state.shadowsArray,xe=G.state.version,be=B.getParameters(T,G.state,he,U,z),Re=B.getProgramCacheKey(be);let Be=H.programs;H.environment=T.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(T.isMeshStandardMaterial?Ut:lt).get(T.envMap||H.environment),Be===void 0&&(T.addEventListener("dispose",te),Be=new Map,H.programs=Be);let Ie=Be.get(Re);if(Ie!==void 0){if(H.currentProgram===Ie&&H.lightsStateVersion===xe)return Yc(T,be),Ie}else be.uniforms=B.getUniforms(T),T.onBuild(z,be,y),T.onBeforeCompile(be,y),Ie=B.acquireProgram(be,Re),Be.set(Re,Ie),H.uniforms=be.uniforms;const Ne=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=_e.uniform),Yc(T,be),H.needsLights=kp(T),H.lightsStateVersion=xe,H.needsLights&&(Ne.ambientLightColor.value=G.state.ambient,Ne.lightProbe.value=G.state.probe,Ne.directionalLights.value=G.state.directional,Ne.directionalLightShadows.value=G.state.directionalShadow,Ne.spotLights.value=G.state.spot,Ne.spotLightShadows.value=G.state.spotShadow,Ne.rectAreaLights.value=G.state.rectArea,Ne.ltc_1.value=G.state.rectAreaLTC1,Ne.ltc_2.value=G.state.rectAreaLTC2,Ne.pointLights.value=G.state.point,Ne.pointLightShadows.value=G.state.pointShadow,Ne.hemisphereLights.value=G.state.hemi,Ne.directionalShadowMap.value=G.state.directionalShadowMap,Ne.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ne.spotShadowMap.value=G.state.spotShadowMap,Ne.spotLightMatrix.value=G.state.spotLightMatrix,Ne.spotLightMap.value=G.state.spotLightMap,Ne.pointShadowMap.value=G.state.pointShadowMap,Ne.pointShadowMatrix.value=G.state.pointShadowMatrix),H.currentProgram=Ie,H.uniformsList=null,Ie}function qc(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Yo.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Yc(T,U){const z=He.get(T);z.outputColorSpace=U.outputColorSpace,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Bp(T,U,z,H,G){U.isScene!==!0&&(U=Et),Ge.resetTextureUnits();const he=U.fog,xe=H.isMeshStandardMaterial?U.environment:null,be=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:qt,Re=(H.isMeshStandardMaterial?Ut:lt).get(H.envMap||xe),Be=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ie=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ne=!!z.morphAttributes.position,At=!!z.morphAttributes.normal,hn=!!z.morphAttributes.color;let Ot=gi;H.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ot=y.toneMapping);const ei=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,St=ei!==void 0?ei.length:0,$e=He.get(H),Ta=m.state.lights;if(ue===!0&&(me===!0||T!==M)){const un=T===M&&H.id===L;_e.setState(H,T,un)}let Ct=!1;H.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Ta.state.version||$e.outputColorSpace!==be||G.isInstancedMesh&&$e.instancing===!1||!G.isInstancedMesh&&$e.instancing===!0||G.isSkinnedMesh&&$e.skinning===!1||!G.isSkinnedMesh&&$e.skinning===!0||G.isInstancedMesh&&$e.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&$e.instancingColor===!1&&G.instanceColor!==null||$e.envMap!==Re||H.fog===!0&&$e.fog!==he||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==_e.numPlanes||$e.numIntersection!==_e.numIntersection)||$e.vertexAlphas!==Be||$e.vertexTangents!==Ie||$e.morphTargets!==Ne||$e.morphNormals!==At||$e.morphColors!==hn||$e.toneMapping!==Ot||Pe.isWebGL2===!0&&$e.morphTargetsCount!==St)&&(Ct=!0):(Ct=!0,$e.__version=H.version);let Fi=$e.currentProgram;Ct===!0&&(Fi=co(H,U,G));let Kc=!1,lr=!1,Aa=!1;const en=Fi.getUniforms(),Bi=$e.uniforms;if(Ce.useProgram(Fi.program)&&(Kc=!0,lr=!0,Aa=!0),H.id!==L&&(L=H.id,lr=!0),Kc||M!==T){en.setValue(F,"projectionMatrix",T.projectionMatrix),en.setValue(F,"viewMatrix",T.matrixWorldInverse);const un=en.map.cameraPosition;un!==void 0&&un.setValue(F,Oe.setFromMatrixPosition(T.matrixWorld)),Pe.logarithmicDepthBuffer&&en.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&en.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,lr=!0,Aa=!0)}if(G.isSkinnedMesh){en.setOptional(F,G,"bindMatrix"),en.setOptional(F,G,"bindMatrixInverse");const un=G.skeleton;un&&(Pe.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),en.setValue(F,"boneTexture",un.boneTexture,Ge),en.setValue(F,"boneTextureSize",un.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ra=z.morphAttributes;if((Ra.position!==void 0||Ra.normal!==void 0||Ra.color!==void 0&&Pe.isWebGL2===!0)&&Te.update(G,z,Fi),(lr||$e.receiveShadow!==G.receiveShadow)&&($e.receiveShadow=G.receiveShadow,en.setValue(F,"receiveShadow",G.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Bi.envMap.value=Re,Bi.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),lr&&(en.setValue(F,"toneMappingExposure",y.toneMappingExposure),$e.needsLights&&zp(Bi,Aa),he&&H.fog===!0&&Q.refreshFogUniforms(Bi,he),Q.refreshMaterialUniforms(Bi,H,q,$,we),Yo.upload(F,qc($e),Bi,Ge)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Yo.upload(F,qc($e),Bi,Ge),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&en.setValue(F,"center",G.center),en.setValue(F,"modelViewMatrix",G.modelViewMatrix),en.setValue(F,"normalMatrix",G.normalMatrix),en.setValue(F,"modelMatrix",G.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const un=H.uniformsGroups;for(let Ca=0,Hp=un.length;Ca<Hp;Ca++)if(Pe.isWebGL2){const Zc=un[Ca];Ae.update(Zc,Fi),Ae.bind(Zc,Fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fi}function zp(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function kp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,U,z){He.get(T.texture).__webglTexture=U,He.get(T.depthTexture).__webglTexture=z;const H=He.get(T);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const z=He.get(T);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,z=0){w=T,E=U,A=z;let H=!0,G=null,he=!1,xe=!1;if(T){const Re=He.get(T);Re.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(F.FRAMEBUFFER,null),H=!1):Re.__webglFramebuffer===void 0?Ge.setupRenderTarget(T):Re.__hasExternalTextures&&Ge.rebindTextures(T,He.get(T.texture).__webglTexture,He.get(T.depthTexture).__webglTexture);const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(xe=!0);const Ie=He.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?G=Ie[U][z]:G=Ie[U],he=!0):Pe.isWebGL2&&T.samples>0&&Ge.useMultisampledRTT(T)===!1?G=He.get(T).__webglMultisampledFramebuffer:Array.isArray(Ie)?G=Ie[z]:G=Ie,b.copy(T.viewport),I.copy(T.scissor),O=T.scissorTest}else b.copy(Y).multiplyScalar(q).floor(),I.copy(N).multiplyScalar(q).floor(),O=V;if(Ce.bindFramebuffer(F.FRAMEBUFFER,G)&&Pe.drawBuffers&&H&&Ce.drawBuffers(T,G),Ce.viewport(b),Ce.scissor(I),Ce.setScissorTest(O),he){const Re=He.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Re.__webglTexture,z)}else if(xe){const Re=He.get(T.texture),Be=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Re.__webglTexture,z||0,Be)}L=-1},this.readRenderTargetPixels=function(T,U,z,H,G,he,xe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=He.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be){Ce.bindFramebuffer(F.FRAMEBUFFER,be);try{const Re=T.texture,Be=Re.format,Ie=Re.type;if(Be!==Sn&&rt.convert(Be)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Ie===_i&&(ve.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ie!==Li&&rt.convert(Ie)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===fi&&(Pe.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-H&&z>=0&&z<=T.height-G&&F.readPixels(U,z,H,G,rt.convert(Be),rt.convert(Ie),he)}finally{const Re=w!==null?He.get(w).__webglFramebuffer:null;Ce.bindFramebuffer(F.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(T,U,z=0){const H=Math.pow(2,-z),G=Math.floor(U.image.width*H),he=Math.floor(U.image.height*H);Ge.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,z,0,0,T.x,T.y,G,he),Ce.unbindTexture()},this.copyTextureToTexture=function(T,U,z,H=0){const G=U.image.width,he=U.image.height,xe=rt.convert(z.format),be=rt.convert(z.type);Ge.setTexture2D(z,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment),U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,H,T.x,T.y,G,he,xe,be,U.image.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,H,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,xe,U.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,H,T.x,T.y,xe,be,U.image),H===0&&z.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(T,U,z,H,G=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=T.max.x-T.min.x+1,xe=T.max.y-T.min.y+1,be=T.max.z-T.min.z+1,Re=rt.convert(H.format),Be=rt.convert(H.type);let Ie;if(H.isData3DTexture)Ge.setTexture3D(H,0),Ie=F.TEXTURE_3D;else if(H.isDataArrayTexture)Ge.setTexture2DArray(H,0),Ie=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);const Ne=F.getParameter(F.UNPACK_ROW_LENGTH),At=F.getParameter(F.UNPACK_IMAGE_HEIGHT),hn=F.getParameter(F.UNPACK_SKIP_PIXELS),Ot=F.getParameter(F.UNPACK_SKIP_ROWS),ei=F.getParameter(F.UNPACK_SKIP_IMAGES),St=z.isCompressedTexture?z.mipmaps[0]:z.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,St.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,St.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,T.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,T.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,T.min.z),z.isDataTexture||z.isData3DTexture?F.texSubImage3D(Ie,G,U.x,U.y,U.z,he,xe,be,Re,Be,St.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ie,G,U.x,U.y,U.z,he,xe,be,Re,St.data)):F.texSubImage3D(Ie,G,U.x,U.y,U.z,he,xe,be,Re,Be,St),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ne),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,At),F.pixelStorei(F.UNPACK_SKIP_PIXELS,hn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ot),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ei),G===0&&H.generateMipmaps&&F.generateMipmap(Ie),Ce.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ge.setTextureCube(T,0):T.isData3DTexture?Ge.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ge.setTexture2DArray(T,0):Ge.setTexture2D(T,0),Ce.unbindTexture()},this.resetState=function(){E=0,A=0,w=null,Ce.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===vc?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===ma?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===at?ns:df}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ns?at:qt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class sv extends Cf{}sv.prototype.isWebGL1Renderer=!0;class Sc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ge(e),this.density=t}clone(){return new Sc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rv extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Lf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new R;class Fr{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Pf extends An{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let As;const fr=new R,Rs=new R,Cs=new R,Ls=new fe,pr=new fe,Df=new Ue,Io=new R,mr=new R,No=new R,yu=new fe,rl=new fe,vu=new fe;class ov extends mt{constructor(e=new Pf){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new Tt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Lf(t,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new Fr(i,3,0,!1)),As.setAttribute("uv",new Fr(i,2,3,!1))}this.geometry=As,this.material=e,this.center=new fe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),Df.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Cs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Uo(Io.set(-.5,-.5,0),Cs,o,Rs,s,r),Uo(mr.set(.5,-.5,0),Cs,o,Rs,s,r),Uo(No.set(.5,.5,0),Cs,o,Rs,s,r),yu.set(0,0),rl.set(1,0),vu.set(1,1);let a=e.ray.intersectTriangle(Io,mr,No,!1,fr);if(a===null&&(Uo(mr.set(-.5,.5,0),Cs,o,Rs,s,r),rl.set(0,1),a=e.ray.intersectTriangle(Io,No,mr,!1,fr),a===null))return;const c=e.ray.origin.distanceTo(fr);c<e.near||c>e.far||t.push({distance:c,point:fr.clone(),uv:Mn.getInterpolation(fr,Io,mr,No,yu,rl,vu,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Uo(n,e,t,i,s,r){Ls.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(pr.x=r*Ls.x-s*Ls.y,pr.y=s*Ls.x+r*Ls.y):pr.copy(Ls),n.copy(e),n.x+=pr.x,n.y+=pr.y,n.applyMatrix4(Df)}const Mu=new R,Eu=new ht,bu=new ht,av=new R,Su=new Ue,Oo=new R,ol=new Jn,wu=new Ue,al=new qr;class lv extends oe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ih,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Oo),this.boundingBox.expandByPoint(Oo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Oo),this.boundingSphere.expandByPoint(Oo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ol.copy(this.boundingSphere),ol.applyMatrix4(s),e.ray.intersectsSphere(ol)!==!1&&(wu.copy(s).invert(),al.copy(e.ray).applyMatrix4(wu),!(this.boundingBox!==null&&al.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,al)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ht,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ih?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ym?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Eu.fromBufferAttribute(s.attributes.skinIndex,e),bu.fromBufferAttribute(s.attributes.skinWeight,e),Mu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=bu.getComponent(r);if(o!==0){const a=Eu.getComponent(r);Su.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(av.copy(Mu).applyMatrix4(Su),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class If extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class cv extends Gt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=zt,h=zt,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tu=new Ue,hv=new Ue;class wc{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ue;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:hv;Tu.multiplyMatrices(a,t[r]),Tu.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new wc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=ff(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new cv(t,e,e,Sn,fi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new If),this.bones.push(o),this.boneInverses.push(new Ue().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class ql extends jt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ps=new Ue,Au=new Ue,Fo=[],Ru=new yi,uv=new Ue,gr=new oe,_r=new Jn;class dv extends oe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ql(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,uv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ps),Ru.copy(e.boundingBox).applyMatrix4(Ps),this.boundingBox.union(Ru)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ps),_r.copy(e.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(_r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,s=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_r.copy(this.boundingSphere),_r.applyMatrix4(i),e.ray.intersectsSphere(_r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ps),Au.multiplyMatrices(i,Ps),gr.matrixWorld=Au,gr.raycast(e,Fo);for(let o=0,a=Fo.length;o<a;o++){const c=Fo[o];c.instanceId=r,c.object=this,t.push(c)}Fo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ql(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class va extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cu=new R,Lu=new R,Pu=new Ue,ll=new qr,Bo=new Jn;class Kr extends mt{constructor(e=new Tt,t=new va){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Cu.fromBufferAttribute(t,s-1),Lu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Cu.distanceTo(Lu);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=r,e.ray.intersectsSphere(Bo)===!1)return;Pu.copy(s).invert(),ll.copy(e.ray).applyMatrix4(Pu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new R,h=new R,u=new R,d=new R,f=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const p=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let y=p,v=x-1;y<v;y+=f){const E=g.getX(y),A=g.getX(y+1);if(l.fromBufferAttribute(m,E),h.fromBufferAttribute(m,A),ll.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let y=p,v=x-1;y<v;y+=f){if(l.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),ll.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Du=new R,Iu=new R;class fv extends Kr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Du.fromBufferAttribute(t,s),Iu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Du.distanceTo(Iu);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pv extends Kr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Zr extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nu=new Ue,Yl=new qr,zo=new Jn,ko=new R;class Ma extends mt{constructor(e=new Tt,t=new Zr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(s),zo.radius+=r,e.ray.intersectsSphere(zo)===!1)return;Nu.copy(s).invert(),Yl.copy(e.ray).applyMatrix4(Nu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);ko.fromBufferAttribute(u,m),Uu(ko,m,c,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)ko.fromBufferAttribute(u,g),Uu(ko,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Uu(n,e,t,i,s,r,o){const a=Yl.distanceSqToPoint(n);if(a<t){const c=new R;Yl.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Ou extends Gt{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mv{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new fe:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new R,s=[],r=[],o=[],a=new R,c=new Ue;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(kt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(kt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function gv(n,e){const t=1-n;return t*t*e}function _v(n,e){return 2*(1-n)*n*e}function xv(n,e){return n*n*e}function cl(n,e,t,i){return gv(n,e)+_v(n,t)+xv(n,i)}class yv extends mv{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(cl(e,s.x,r.x,o.x),cl(e,s.y,r.y,o.y),cl(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cs extends Tt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new R,h=new fe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=i+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(a,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Bn extends Tt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=i/2;let p=0;x(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(f,2));function x(){const v=new R,E=new R;let A=0;const w=(t-e)/i;for(let L=0;L<=r;L++){const M=[],b=L/r,I=b*(t-e)+e;for(let O=0;O<=s;O++){const j=O/s,P=j*c+a,k=Math.sin(P),$=Math.cos(P);E.x=I*k,E.y=-b*i+m,E.z=I*$,u.push(E.x,E.y,E.z),v.set(k,w,$).normalize(),d.push(v.x,v.y,v.z),f.push(j,1-b),M.push(g++)}_.push(M)}for(let L=0;L<s;L++)for(let M=0;M<r;M++){const b=_[M][L],I=_[M+1][L],O=_[M+1][L+1],j=_[M][L+1];h.push(b,I,j),h.push(I,O,j),A+=6}l.addGroup(p,A,0),p+=A}function y(v){const E=g,A=new fe,w=new R;let L=0;const M=v===!0?e:t,b=v===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;const I=g;for(let O=0;O<=s;O++){const P=O/s*c+a,k=Math.cos(P),$=Math.sin(P);w.x=M*$,w.y=m*b,w.z=M*k,u.push(w.x,w.y,w.z),d.push(0,b,0),A.x=k*.5+.5,A.y=$*.5*b+.5,f.push(A.x,A.y),g++}for(let O=0;O<s;O++){const j=E+O,P=I+O;v===!0?h.push(P,P+1,j):h.push(P+1,P,j),L+=3}l.addGroup(p,L,v===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Kn extends Bn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Kn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jr extends Tt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(r.slice(),3)),this.setAttribute("uv",new ut(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new R,v=new R,E=new R;for(let A=0;A<t.length;A+=3)f(t[A+0],y),f(t[A+1],v),f(t[A+2],E),c(y,v,E,x)}function c(x,y,v,E){const A=E+1,w=[];for(let L=0;L<=A;L++){w[L]=[];const M=x.clone().lerp(v,L/A),b=y.clone().lerp(v,L/A),I=A-L;for(let O=0;O<=I;O++)O===0&&L===A?w[L][O]=M:w[L][O]=M.clone().lerp(b,O/I)}for(let L=0;L<A;L++)for(let M=0;M<2*(A-L)-1;M++){const b=Math.floor(M/2);M%2===0?(d(w[L][b+1]),d(w[L+1][b]),d(w[L][b])):(d(w[L][b+1]),d(w[L+1][b+1]),d(w[L+1][b]))}}function l(x){const y=new R;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(x),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){const x=new R;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const v=m(x)/2/Math.PI+.5,E=p(x)/Math.PI+.5;o.push(v,1-E)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const y=o[x+0],v=o[x+2],E=o[x+4],A=Math.max(y,v,E),w=Math.min(y,v,E);A>.9&&w<.1&&(y<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),E<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,y){const v=x*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){const x=new R,y=new R,v=new R,E=new R,A=new fe,w=new fe,L=new fe;for(let M=0,b=0;M<r.length;M+=9,b+=6){x.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),A.set(o[b+0],o[b+1]),w.set(o[b+2],o[b+3]),L.set(o[b+4],o[b+5]),E.copy(x).add(y).add(v).divideScalar(3);const I=m(E);_(A,b+0,x,I),_(w,b+2,y,I),_(L,b+4,v,I)}}function _(x,y,v,E){E<0&&x.x===1&&(o[y]=x.x-1),v.x===0&&v.z===0&&(o[y]=E/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.vertices,e.indices,e.radius,e.details)}}class Tc extends Jr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Tc(e.radius,e.detail)}}class Ac extends Jr{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ac(e.radius,e.detail)}}class er extends Tt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/s,f=new R,g=new fe;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const p=r+m/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(i+1);for(let p=0;p<i;p++){const x=p+m,y=x,v=x+i+1,E=x+i+2,A=x+1;a.push(y,v,A),a.push(v,E,A)}}this.setIndex(a),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Mt extends Tt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new R,d=new R,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const x=[],y=p/i;let v=0;p===0&&o===0?v=.5/t:p===i&&c===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){const A=E/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+v,1-y),x.push(l++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){const y=h[p][x+1],v=h[p][x],E=h[p+1][x],A=h[p+1][x+1];(p!==0||o>0)&&f.push(y,v,A),(p!==i-1||c<Math.PI)&&f.push(v,E,A)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tr extends Jr{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new tr(e.radius,e.detail)}}class ye extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Oi extends ye{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class vv extends An{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Ho(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Mv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ev(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Fu(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=n[a+c]}return s}function Nf(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Qr{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class bv extends Qr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ch,endingEnd:Ch}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Lh:r=e,a=2*t-i;break;case Ph:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Lh:o=e,c=2*i-t;break;case Ph:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}const l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,x=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+x*o[l+E]+y*o[c+E]+v*o[u+E];return r}}class Sv extends Qr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class wv extends Qr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Qn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ho(t,this.TimeBufferType),this.values=Ho(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ho(e.times,Array),values:Ho(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new wv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ur:t=this.InterpolantFactoryMethodDiscrete;break;case Gs:t=this.InterpolantFactoryMethodLinear;break;case Ua:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ur;case this.InterpolantFactoryMethodLinear:return Gs;case this.InterpolantFactoryMethodSmooth:return Ua}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Mv(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ua,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{const u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=Gs;class nr extends Qn{}nr.prototype.ValueTypeName="bool";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=Ur;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;class Uf extends Qn{}Uf.prototype.ValueTypeName="color";class Xs extends Qn{}Xs.prototype.ValueTypeName="number";class Tv extends Qr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t);let l=e*a;for(let h=l+a;l!==h;l+=4)Ui.slerpFlat(r,0,o,l-a,o,l,c);return r}}class rs extends Qn{InterpolantFactoryMethodLinear(e){return new Tv(this.times,this.values,this.getValueSize(),e)}}rs.prototype.ValueTypeName="quaternion";rs.prototype.DefaultInterpolation=Gs;rs.prototype.InterpolantFactoryMethodSmooth=void 0;class ir extends Qn{}ir.prototype.ValueTypeName="string";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Ur;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;class $s extends Qn{}$s.prototype.ValueTypeName="vector";class Av{constructor(e,t=-1,i,s=Cm){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=On(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Cv(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Qn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=Ev(c);c=Fu(c,1,h),l=Fu(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Xs(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];Nf(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let x=0;x!==d[g].morphTargets.length;++x){const y=d[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}s.push(new Xs(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[u].name+"]";i($s,f+".position",d,"pos",s),i(rs,f+".quaternion",d,"rot",s),i($s,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Rv(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xs;case"vector":case"vector2":case"vector3":case"vector4":return $s;case"color":return Uf;case"quaternion":return rs;case"bool":case"boolean":return nr;case"string":return ir}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Cv(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Rv(n.type);if(n.times===void 0){const t=[],i=[];Nf(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const js={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Lv{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Pv=new Lv;class sr{constructor(e){this.manager=e!==void 0?e:Pv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}sr.DEFAULT_MATERIAL_NAME="__DEFAULT";const oi={};class Dv extends Error{constructor(e,t){super(e),this.response=t}}class Of extends sr{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=js.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(oi[e]!==void 0){oi[e].push({onLoad:t,onProgress:i,onError:s});return}oi[e]=[],oi[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=oi[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){x();function x(){u.read().then(({done:y,value:v})=>{if(y)p.close();else{_+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,w=h.length;A<w;A++){const L=h[A];L.onProgress&&L.onProgress(E)}p.enqueue(v),x()}})}}});return new Response(m)}else throw new Dv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{js.add(e,l);const h=oi[e];delete oi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=oi[e];if(h===void 0)throw this.manager.itemError(e),l;delete oi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Iv extends sr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=js.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Or("img");function c(){h(),js.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Ff extends sr{constructor(e){super(e)}load(e,t,i,s){const r=new Gt,o=new Iv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class eo extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Nv extends eo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const hl=new Ue,Bu=new R,zu=new R;class Rc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _a,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bu),zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zu),t.updateMatrixWorld(),hl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Uv extends Rc{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Vs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ov extends eo{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Uv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ku=new Ue,xr=new R,ul=new R;class Fv extends Rc{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),xr.setFromMatrixPosition(e.matrixWorld),i.position.copy(xr),ul.copy(i.position),ul.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ul),i.updateMatrixWorld(),s.makeTranslation(-xr.x,-xr.y,-xr.z),ku.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ku)}}class Bf extends eo{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Fv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Bv extends Rc{constructor(){super(new Yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cc extends eo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Bv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zf extends eo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Kl{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class zv extends sr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=js.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){js.add(e,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){s&&s(c),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class kv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Hu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Hu(){return(typeof performance>"u"?Date:performance).now()}const Lc="\\[\\]\\.:\\/",Hv=new RegExp("["+Lc+"]","g"),Pc="[^"+Lc+"]",Gv="[^"+Lc.replace("\\.","")+"]",Vv=/((?:WC+[\/:])*)/.source.replace("WC",Pc),Wv=/(WCOD+)?/.source.replace("WCOD",Gv),Xv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pc),$v=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pc),jv=new RegExp("^"+Vv+Wv+Xv+$v+"$"),qv=["material","materials","bones","map"];class Yv{constructor(e,t,i){const s=i||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class st{constructor(e,t,i){this.path=t,this.parsedPath=i||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,i):new st(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hv,"")}static parseTrackName(e){const t=jv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);qv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=Yv;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Kv{constructor(e,t,i=0,s=1/0){this.ray=new qr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ec,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Zl(e,this,i,t),i.sort(Gu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Zl(e[s],this,i,t);return i.sort(Gu),i}}function Gu(n,e){return n.distance-e.distance}function Zl(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const s=n.children;for(let r=0,o=s.length;r<o;r++)Zl(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gc);var Vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Dc={},Ea={};Object.defineProperty(Ea,"__esModule",{value:!0});Ea.VERSION=void 0;Ea.VERSION="0.0.6";/**
 * @package      npmjs.com/package/@yandeu/events (events.min.js)
 *
 * @author       Arnout Kazemier (https://github.com/3rd-Eden)
 * @copyright    Copyright (c) 2014 Arnout Kazemier
 * @license      {@link https://github.com/primus/eventemitter3/blob/master/LICENSE|MIT}
 *
 * @author       Yannick Deubel (https://github.com/yandeu)
 * @copyright    Copyright (c) 2021 Yannick Deubel; Project Url: https://github.com/yandeu/events
 * @license      {@link https://github.com/yandeu/events/blob/master/LICENSE|MIT}
 */var Wu=Vu&&Vu.__spreadArray||function(n,e,t){if(t||arguments.length===2)for(var i=0,s=e.length,r;i<s;i++)(r||!(i in e))&&(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return n.concat(r||Array.prototype.slice.call(e))};Object.defineProperty(Dc,"__esModule",{value:!0});var kf=Dc.Events=void 0,Zv=Ea,Jv=function(){function n(e,t,i){i===void 0&&(i=!1),this.fn=e,this.context=t,this.once=i}return n}(),Xu=function(n,e,t,i,s){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new Jv(t,i||n,s);return n._events.has(e)?n._events.get(e).fn?n._events.set(e,[n._events.get(e),r]):n._events.get(e).push(r):(n._events.set(e,r),n._eventsCount++),n},Go=function(n,e){--n._eventsCount===0?n._events=new Map:n._events.delete(e)},Qv=function(){function n(){this._events=new Map,this._eventsCount=0}return Object.defineProperty(n,"VERSION",{get:function(){return Zv.VERSION},enumerable:!1,configurable:!0}),n.prototype.eventNames=function(){return Array.from(this._events.keys())},n.prototype.listeners=function(e){var t=this._events.get(e);if(!t)return[];if(t.fn)return[t.fn];for(var i=0,s=t.length,r=new Array(s);i<s;i++)r[i]=t[i].fn;return r},n.prototype.listenerCount=function(e){var t=this._events.get(e);return t?t.fn?1:t.length:0},n.prototype.emit=function(e){for(var t,i,s=[],r=1;r<arguments.length;r++)s[r-1]=arguments[r];if(!this._events.has(e))return!1;var o=this._events.get(e),a;if(o.fn)return o.once&&this.removeListener(e,o.fn,void 0,!0),(t=o.fn).call.apply(t,Wu([o.context],s,!1)),!0;var c=o.length;for(a=0;a<c;a++)o[a].once&&this.removeListener(e,o[a].fn,void 0,!0),(i=o[a].fn).call.apply(i,Wu([o[a].context],s,!1));return!0},n.prototype.on=function(e,t,i){return Xu(this,e,t,i,!1)},n.prototype.once=function(e,t,i){return Xu(this,e,t,i,!0)},n.prototype.removeListener=function(e,t,i,s){if(!this._events.has(e))return this;if(!t)return Go(this,e),this;var r=this._events.get(e);if(r.fn)r.fn===t&&(!s||r.once)&&(!i||r.context===i)&&Go(this,e);else{for(var o=0,a=[],c=r.length;o<c;o++)(r[o].fn!==t||s&&!r[o].once||i&&r[o].context!==i)&&a.push(r[o]);a.length?this._events.set(e,a.length===1?a[0]:a):Go(this,e)}return this},n.prototype.removeAllListeners=function(e){return e?this._events.delete(e)&&Go(this,e):(this._events=new Map,this._eventsCount=0),this},Object.defineProperty(n.prototype,"off",{get:function(){return this.removeListener},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"addListener",{get:function(){return this.on},enumerable:!1,configurable:!0}),n}();kf=Dc.Events=Qv;class Hf{constructor(){this.eventEmitter=new kf}emit(e,t,i={}){this.eventEmitter.emit(e,t,i)}on(e,t){return this.eventEmitter.on(e,(i,s)=>{t(i,s)})}removeAllListeners(){this.eventEmitter.removeAllListeners()}}new Hf;const hi={CONNECT:"connect",CONNECTION:"connection",DATA_CHANNEL_IS_OPEN:"dataChannelIsOpen",DISCONNECT:"disconnect",DISCONNECTED:"disconnected",DROP:"dropped",ERROR:"error",RAW_MESSAGE:"rawMessage",RECEIVED_FROM_DATA_CHANNEL:"receiveFromDataChannel",SEND_OVER_DATA_CHANNEL:"sendOverDataChannel"},Gf={BROWSER_NOT_SUPPORTED:"BROWSER_NOT_SUPPORTED",COULD_NOT_PARSE_MESSAGE:"COULD_NOT_PARSE_MESSAGE"},eM=Object.getPrototypeOf(Object.getPrototypeOf(new Uint8Array)).constructor;typeof Promise=="function"&&Promise.prototype.then.bind(Promise.resolve());const Vf=n=>typeof n=="string",Jl=n=>n instanceof ArrayBuffer||n instanceof eM,tM=n=>{try{return typeof n!="string"||!isNaN(parseInt(n))?!1:(JSON.parse(n),!0)}catch{return!1}},nM=n=>{let{data:e}=n;e||(e=n);const t=Jl(e),i=tM(e),s=Vf(e);if(i){const r=JSON.parse(e),o=Object.keys(r)[0],a=r[o];return{key:o,data:a}}return t?{key:hi.RAW_MESSAGE,data:e}:s?{key:hi.RAW_MESSAGE,data:e}:{key:"error",data:new Error(Gf.COULD_NOT_PARSE_MESSAGE)}},iM=(n,e,t,i=null)=>{var s;const r=(o,a)=>{var c;const l=(c=o.byteLength)!==null&&c!==void 0?c:o.length*2;if(typeof e=="number"&&l>e)throw new Error(`maxMessageSize of ${e} exceeded`);Promise.resolve().then(()=>{n.send?n.send(o):a?n.sendMessageBinary(Buffer.from(o)):n.sendMessage(o)}).catch(h=>{console.log("error",h)})};if(n&&(n.readyState==="open"||!((s=n.isOpen)===null||s===void 0)&&s.call(n)))try{t===hi.RAW_MESSAGE&&i!==null&&(Vf(i)||Jl(i))?r(i,Jl(i)):r(JSON.stringify({[t]:i}),!1)}catch(o){return console.error("Error in sendMessage.ts: ",o.message),o}};class sM{emit(e,t=null){iM(this.dataChannel,this.maxMessageSize,e,t)}constructor(e,t,i,s){this.url=e,this.authorization=t,this.label=i,this.rtcConfiguration=s,this.bridge=new Hf,this.onDataChannel=r=>{const{channel:o}=r;o.label===this.label&&(this.dataChannel=o,this.dataChannel.binaryType="arraybuffer",this.dataChannel.onmessage=a=>{const{key:c,data:l}=nM(a);this.bridge.emit(c,l)})}}async fetchAdditionalCandidates(e,t){var i;if(((i=this.dataChannel)===null||i===void 0?void 0:i.readyState)==="closed")return;const s=await fetch(`${e}/connections/${t}/additional-candidates`,{method:"GET",headers:{"Content-Type":"application/json"}});s.ok&&(await s.json()).forEach(o=>{this.localPeerConnection.addIceCandidate(o)})}async connect(){const e=`${this.url}/.wrtc/v2`;let t={"Content-Type":"application/json"};this.authorization&&(t={...t,Authorization:this.authorization});let i={};try{const l=await fetch(`${e}/connections`,{method:"POST",headers:t});if(l.status>=300)throw{name:"Error",message:`Connection failed with status code ${l.status}.`,status:l.status,statusText:l.statusText};const h=await l.json();i=h.userData,this.remotePeerConnection=h}catch(l){return console.error(l.message),{error:l}}const{id:s,localDescription:r}=this.remotePeerConnection,o={sdpSemantics:"unified-plan",...this.rtcConfiguration},a=RTCPeerConnection||webkitRTCPeerConnection;this.localPeerConnection=new a(o),((l=10,h=50,u=1.8,d=20)=>Array(l).fill(0).map((f,g)=>parseInt((h*u**g).toString())+parseInt((Math.random()*d).toString())))().forEach(l=>{setTimeout(()=>{this.fetchAdditionalCandidates(e,s).catch(()=>{})},l)});try{await this.localPeerConnection.setRemoteDescription(r),this.localPeerConnection.addEventListener("datachannel",this.onDataChannel,{once:!0});const l=await this.localPeerConnection.createAnswer(),h=new RTCSessionDescription({type:"answer",sdp:l.sdp});await this.localPeerConnection.setLocalDescription(h);try{await fetch(`${e}/connections/${s}/remote-description`,{method:"POST",body:JSON.stringify(this.localPeerConnection.localDescription),headers:{"Content-Type":"application/json"}})}catch(d){return console.error(d.message),{error:d}}const u=()=>new Promise(d=>{this.localPeerConnection.addEventListener("datachannel",()=>{d()},{once:!0})});return this.dataChannel||await u(),{userData:i,localPeerConnection:this.localPeerConnection,dataChannel:this.dataChannel,id:s}}catch(l){return console.error(l.message),this.localPeerConnection.close(),{error:l}}}}class rM{async connect(e){if(RTCPeerConnection||webkitRTCPeerConnection){const{localPeerConnection:i,dataChannel:s,id:r,userData:o,error:a}=await e.connect();return a?{error:a}:!i||!s||!r||!o?{error:new Error('Something went wrong in "await connectionsManager.connect()"')}:(this.localPeerConnection=i,this.dataChannel=s,this.id=r,{userData:o})}else{const i=new Error(Gf.BROWSER_NOT_SUPPORTED);return console.error(i.message),{error:i}}}}const oM=(n=24)=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let i=0;i<n;i++)t+=e.charAt(Math.floor(Math.random()*e.length));return t},aM=(n=200,e=1,t)=>{let i=0;if(typeof t!="function"){console.error("You have to define your callback function!");return}const s=setInterval(()=>{t(),i++,i===e-1&&clearInterval(s)},n);t()},lM=(n,e)=>{const{interval:t=150,runs:i=10}=n,s=oM(24);aM(t,i,()=>{e(s)})};class cM{constructor(e,t,i,s,r){this.userData={},this.receivedReliableMessages=[],this.url=i?`${e}:${i}`:e,this.connectionsManager=new sM(this.url,t,s,r),this.bridge=this.connectionsManager.bridge,this.bridge.on(hi.DISCONNECTED,()=>this.bridge.removeAllListeners())}onconnectionstatechange(){const e=this.peerConnection.localPeerConnection;e.onconnectionstatechange=()=>{(e.connectionState==="disconnected"||e.connectionState==="closed")&&this.bridge.emit(hi.DISCONNECTED)}}get id(){return this.peerConnection.id}close(){this.peerConnection.localPeerConnection.close(),this.bridge.emit(hi.DISCONNECTED);try{const e=`${this.url}/.wrtc/v2`;fetch(`${e}/connections/${this.id}/close`,{method:"POST",headers:{"Content-Type":"application/json"}})}catch(e){console.error(e.message)}}emit(e,t=null,i){i&&i.reliable?lM(i,s=>this.connectionsManager.emit(e,{MESSAGE:t,RELIABLE:1,ID:s})):this.connectionsManager.emit(e,t)}get raw(){return{emit:e=>this.emit(hi.RAW_MESSAGE,e)}}onRaw(e){this.bridge.on(hi.RAW_MESSAGE,t=>{(s=>e(s))(t)})}async onConnect(e){var t;this.peerConnection=new rM;const i=await this.peerConnection.connect(this.connectionsManager);i.error?e(i.error):(i.userData&&(this.userData=i.userData),this.maxMessageSize=this.connectionsManager.maxMessageSize=(t=this.peerConnection.localPeerConnection.sctp)===null||t===void 0?void 0:t.maxMessageSize,this.onconnectionstatechange(),e())}onDisconnect(e){this.bridge.on(hi.DISCONNECTED,e)}on(e,t){this.bridge.on(e,i=>{i&&i.RELIABLE===1&&i.ID!=="undefined"?((()=>{const a=new Date().getTime();this.receivedReliableMessages.forEach((c,l,h)=>{c.expire<=a&&h.splice(l,1)})})(),this.receivedReliableMessages.filter(a=>a.id===i.ID).length===0&&(this.receivedReliableMessages.push({id:i.ID,timestamp:new Date,expire:new Date().getTime()+15e3}),t(i.MESSAGE))):t(i)})}}const hM=(n={})=>{const{authorization:e=void 0,iceServers:t=[],iceTransportPolicy:i="all",label:s="geckos.io",port:r=9208,url:o=`${location.protocol}//${location.hostname}`}=n;return new cM(o,e,r,s,{iceServers:t,iceTransportPolicy:i})},uM={server:{port:3e3}},Ve={FIREBALL:{ID:1,NAME:"Bola de Fogo",DESCRIPTION:"Lança uma esfera de fogo em linha reta que explode ao atingir o inimigo, causando dano direto e queimando inimigos ao redor.",TYPE:"projectile",COOLDOWN:1e3,MANA_COST:40,DAMAGE:20,AREA_DAMAGE:10,AREA_RADIUS:2,RANGE:20,ICON:"/textures/skills/fireball.png",EFFECTS:["explosion","burn"]},TELEPORT:{ID:2,NAME:"Teleporte",DESCRIPTION:"O mago se desfaz em partículas mágicas e se move instantaneamente para outra posição, ignorando obstáculos.",TYPE:"mobility",COOLDOWN:6e3,MANA_COST:25,RANGE:15,ICON:"/textures/skills/teleport.png",EFFECTS:["fade","particles"]},FROST_SPIKES:{ID:3,NAME:"Estacas de Gelo",DESCRIPTION:"O mago conjura uma área de gelo no chão. Após 1 segundo, várias estacas congeladas irrompem da terra, atingindo todos os inimigos na área e aplicando lentidão.",TYPE:"aoe",COOLDOWN:6e3,MANA_COST:60,DAMAGE:30,AREA_RADIUS:5,RANGE:15,DELAY:1e3,SLOW:.4,SLOW_DURATION:3e3,ICON:"/textures/skills/frost_spikes.png",EFFECTS:["spikes","slow"]},METEOR_STORM:{ID:4,NAME:"Chuva de Meteoros",DESCRIPTION:"O mago invoca uma tempestade de meteoros que caem continuamente por 5 segundos em uma área. Cada meteoro causa dano ao atingir o solo, afetando todos os inimigos na zona.",TYPE:"zone",COOLDOWN:1e4,MANA_COST:90,DAMAGE:25,AREA_RADIUS:6,RANGE:18,DURATION:5e3,METEORS:10,METEOR_INTERVAL:500,TICK_INTERVAL:500,ICON:"/textures/skills/meteor_storm.png",EFFECTS:["meteor","fire","smoke"]},DASH:{ID:5,NAME:"Investida Ágil",DESCRIPTION:"O mago se esquiva instantaneamente para a esquerda ou direita, tornando‑se invulnerável por um breve instante e reposicionando‑se.",TYPE:"mobility",COOLDOWN:4e3,MANA_COST:20,RANGE:6,INVULNERABILITY:200,ICON:"/textures/skills/dash.png",EFFECTS:["dash","invuln"]},FIRE_WALL:{ID:6,NAME:"Muralha de Fogo",DESCRIPTION:"Cria uma barreira flamejante à sua frente que dura alguns segundos, bloqueando projéteis inimigos e queimando quem tente atravessá‑la.",TYPE:"zone",COOLDOWN:15e3,MANA_COST:80,DURATION:6e3,DAMAGE_PER_SECOND:10,WIDTH:8,ICON:"/textures/skills/fire_wall.png",EFFECTS:["wall","burn"]},CELESTIAL_HEAL:{ID:7,NAME:"Bênção Celestial",DESCRIPTION:"Invoca um raio de luz do céu que cura instantaneamente aliados em uma pequena área, restaurando sua vida.",TYPE:"heal",COOLDOWN:12e3,MANA_COST:70,HEAL_AMOUNT:100,AREA_RADIUS:4,ICON:"/textures/skills/celestial_heal.png",EFFECTS:["heal","light"]},UNSTABLE_CURSE:{ID:101,NAME:"Maldição Instável",DESCRIPTION:"Aplica uma maldição instável no inimigo. Após 4 segundos, ela explode causando dano em área e corrompendo todos os inimigos próximos.",TYPE:"dot-explode",COOLDOWN:7e3,MANA_COST:45,DAMAGE:30,AREA_RADIUS:3,DELAY:4e3,ICON:"/textures/skills/unstable_curse.png",EFFECTS:["curse","explosion","corruption"]},DARK_BEAM:{ID:102,NAME:"Raio das Sombras",DESCRIPTION:"Canaliza um feixe sombrio contínuo por 3 segundos, drenando vida do inimigo e causando dano por segundo.",TYPE:"channel",COOLDOWN:1e4,MANA_COST:60,DAMAGE_PER_SECOND:12,DURATION:3e3,LIFESTEAL:.25,ICON:"/textures/skills/dark_beam.png",EFFECTS:["beam","lifesteal","dark"]},CURSE_EXPANSION:{ID:103,NAME:"Expansão da Maldição",DESCRIPTION:"Transfere todas as maldições do alvo para inimigos próximos, espalhando os efeitos negativos com potência reduzida.",TYPE:"aoe-debuff",COOLDOWN:15e3,MANA_COST:50,RANGE:10,SPREAD_RADIUS:5,EFFECT_REDUCTION:.5,ICON:"/textures/skills/curse_expansion.png",EFFECTS:["spread","curse"]},SHADOW_PRISON:{ID:104,NAME:"Prisão Sombria",DESCRIPTION:"Cria uma prisão mágica que aprisiona o inimigo no lugar por 3 segundos e causa dano sombrio contínuo durante a duração.",TYPE:"zone-root",COOLDOWN:12e3,MANA_COST:55,DURATION:3e3,DAMAGE_PER_SECOND:10,ICON:"/textures/skills/shadow_prison.png",EFFECTS:["root","dark","zone"]}},Wf={PORT:uM.server.port},vt={PLAYER:{INIT:"player:init",DISCONNECTED:"player:disconnected",JOINED:"player:joined",EXISTING:"player:existing",ROTATED:"player:rotated",USE_ABILITY:"player:useAbility",ABILITY_USED:"player:abilityUsed",DAMAGE:"player:damage",DEATH:"player:death",RESPAWN:"player:respawn",SYNC_REQUEST:"player:syncRequest",SYNC_RESPONSE:"player:syncResponse"},MONSTER:{DAMAGE:"monster:damage",DEATH:"monster:death"},COMBAT:{DAMAGE_DEALT:"combat:damageDealt",FLOATING_TEXT:"combat:floatingText"},WORLD:{UPDATE:"world:update",INIT:"world:init"}},ra={BLACK_MIST_ZOMBIE:{ID:1,NAME:"Zumbi da Névoa Negra",INTERNAL_NAME:"BlackMistZombie",monsterType:"BLACK_MIST_ZOMBIE",HP:50,DAMAGE:50,DEFENSE:2,SPEED:.05,XP_REWARD:20,ATTACK_RANGE:1.5,ATTACK_COOLDOWN:2e3},SPIDER:{NAME:"Aranha Sombria",HP:80,DAMAGE:60,DEFENSE:3,SPEED:.15,ATTACK_RANGE:3,ATTACK_COOLDOWN:600,XP_REWARD:35}},ci={SIZE:{WIDTH:200,HEIGHT:200},BOUNDARIES:{BORDER_WIDTH:2}},qs={PLAYER_MOVE:"bin:player:move",PLAYER_MOVED:"bin:player:moved",MONSTER_DEATH:"bin:monster:death",WORLD_UPDATE:"bin:world:update",PLAYER_STATUS:"bin:player:status",MONSTER_DELTA_UPDATE:"bin:monster:delta"},Xf=["BLACK_MIST_ZOMBIE","SPIDER"],dM=["TREE","ROCK","BUSH","HOUSE","FENCE"];function fM(n={}){const e=new Bn(.2,.3,1.5,8),t=new ye({color:5913890,roughness:.5,metalness:.15,emissive:2955792,emissiveIntensity:.18}),i=new oe(e,t);i.position.y=.75,i.castShadow=!0,i.receiveShadow=!0;const s=new $t(1,1.2,.7),r=new ye({color:4094522,roughness:.5,metalness:.18,emissive:1718810,emissiveIntensity:.22}),o=new oe(s,r);o.position.y=1.6,o.castShadow=!0,o.receiveShadow=!0;const a=new Mt(.38,12,12),c=new ye({color:12244664,roughness:.45,metalness:.13,emissive:3820090,emissiveIntensity:.18}),l=new oe(a,c);l.position.y=2.3,l.castShadow=!0,l.receiveShadow=!0;const h=new Mt(.07,8,8),u=new ye({color:16711680,emissive:16711680,emissiveIntensity:.7}),d=new oe(h,u);d.position.set(-.12,2.38,.33);const f=d.clone();f.position.x=.12;const g=new Bn(.11,.13,.9,8),_=new ye({color:4094522,roughness:.5,metalness:.18,emissive:1718810,emissiveIntensity:.22}),m=new oe(g,_);m.position.set(-.55,1.6,0),m.rotation.z=Math.PI/6,m.castShadow=!0,m.receiveShadow=!0;const p=m.clone();p.position.x=.55,p.rotation.z=-Math.PI/6;const x=new yt;return x.add(i),x.add(o),x.add(l),x.add(m),x.add(p),x.add(d),x.add(f),x.userData.monsterType="BLACK_MIST_ZOMBIE",x}function pM(){const n=new yt;n.scale.set(1.4,1.4,1.4),n.rotation.x=Math.PI;const e=new oe(new Mt(.4,24,24),new ye({color:2236962,roughness:.7}));e.position.set(0,.25,-.25),n.add(e);const t=new oe(new Mt(.28,24,24),new ye({color:2236962,roughness:.7}));t.position.set(0,.22,.25),n.add(t);const i=new xt({color:16711680});for(let r=0;r<6;r++){const o=new oe(new Mt(.03,8,8),i),a=r/6*Math.PI*2;o.position.set(Math.cos(a)*.1,.28,.35+Math.sin(a)*.04),n.add(o)}const s=new ye({color:1118481,roughness:.6});for(let r=0;r<8;r++){const o=r/8*Math.PI*2,a=new yt;a.position.set(Math.cos(o)*.22,.18,Math.sin(o)*.22),a.rotation.y=o;const c=new oe(new Bn(.025,.03,.4,8),s);c.position.y=.2,c.rotation.z=Math.PI/3;const l=new oe(new Bn(.02,.025,.35,8),s);l.position.set(.3,.15,0),l.rotation.z=Math.PI/4;const h=new oe(new Bn(.015,.02,.25,8),s);h.position.set(.55,.05,0),h.rotation.z=Math.PI/6,a.add(c),a.add(l),a.add(h),n.add(a)}return n.position.y=.05,n}class mM{constructor(e,t){this.container=e,this.camera=t,this.names=new Map}addName(e,t,i){this.names.set(e,{el:null,mesh:t})}removeName(e){const t=this.names.get(e);t&&(t.el&&t.el.parentNode&&this.container.removeChild(t.el),this.names.delete(e))}updateAll(e,t){for(const{el:i,mesh:s}of this.names.values()){if(!i||!s||!s.position)continue;const r=s.position.clone();r.y+=4.2,r.project(this.camera);const o=(r.x*.5+.5)*e,a=(-r.y*.5+.5)*t;i.style.left=`${o}px`,i.style.top=`${a}px`,i.style.display=s.visible?"block":"none";const c=this.camera.position.distanceTo(s.position),l=Math.max(.8,Math.min(1.2,30/c));i.style.transform=`translate(-50%, -50%) scale(${l})`}}}class gM{constructor(e,t){this.container=e,this.camera=t,this.bars=new Map}addBar(e,t,i="player",s=""){const r=document.createElement("div");Object.assign(r.style,{position:"absolute",pointerEvents:"none",display:"flex",flexDirection:"column",alignItems:"center",zIndex:10,minWidth:"100px"});const o=document.createElement("div");o.textContent=s,Object.assign(o.style,{color:"#fff",fontWeight:"bold",fontSize:"10px",fontFamily:"Arial, sans-serif",textShadow:"0 0 4px #000, 0 0 2px #000",userSelect:"none",marginBottom:"2px",pointerEvents:"none"});const a=document.createElement("div");Object.assign(a.style,{position:"relative",width:"100px",height:"6px",background:"#111",borderRadius:"3px",border:"1px solid #222",boxShadow:"inset 0 0 4px rgba(0,0,0,0.8)",overflow:"hidden"});const c=document.createElement("div");Object.assign(c.style,{height:"100%",width:"100%",background:"linear-gradient(to right, #00ff00, #44cc44)",transition:"width 0.2s ease-in-out"}),a.appendChild(c);let l=null,h=null;i==="player"&&(l=document.createElement("div"),Object.assign(l.style,{width:"100px",height:"4px",marginTop:"2px",background:"#111",borderRadius:"3px",border:"1px solid #222",boxShadow:"inset 0 0 4px rgba(0,0,0,0.7)",overflow:"hidden"}),h=document.createElement("div"),Object.assign(h.style,{height:"100%",width:"100%",background:"linear-gradient(to right, #3399ff, #0066ff)",transition:"width 0.2s ease-in-out"}),l.appendChild(h)),r.appendChild(o),r.appendChild(a),l&&r.appendChild(l),this.container.appendChild(r),this.bars.set(e,{el:r,mesh:t,type:i,hpBar:c,manaBar:h})}updateBar(e,{hp:t,maxHp:i,mana:s,maxMana:r}){const o=this.bars.get(e);if(o){if(o.hpBar&&i>0){const a=Math.max(0,Math.min(1,t/i));o.hpBar.style.width=`${a*100}%`,o.hpBar.style.background=a>.5?"linear-gradient(to right, #00ff00, #44cc44)":a>.2?"linear-gradient(to right, #ffee55, #cc9900)":"linear-gradient(to right, #ff4444, #cc0000)"}if(o.manaBar&&r>0){const a=Math.max(0,Math.min(1,s/r));o.manaBar.style.width=`${a*100}%`}}}removeBar(e){var i;const t=this.bars.get(e);(i=t==null?void 0:t.el)!=null&&i.parentNode&&t.el.parentNode.removeChild(t.el),this.bars.delete(e)}updateAll(e,t){for(const{el:i,mesh:s}of this.bars.values()){if(!(s!=null&&s.position))continue;const r=s.position.clone();r.y+=3.2,r.x-=3,r.project(this.camera);const o=(r.x*.5+.5)*e,a=(-r.y*.5+.5)*t;i.style.left=`${o}px`,i.style.top=`${a}px`}}clear(){for(const{el:e}of this.bars.values())e!=null&&e.parentNode&&e.parentNode.removeChild(e);this.bars.clear()}}class $u{constructor(e,t,i){this.scene=e,this.monsters=new Map,this.lastResetTime=Date.now(),this.floatingNameManager=t,this.floatingBarManager=i}updateMonster(e){if(!e||!e.id){console.error("Dados de monstro inválidos:",e);return}const t=e.id;this.monsters.has(t)?this.updateExistingMonster(t,e):this.createMonster(t,e)}createMonster(e,t){var o,a;e=String(e),this.monsters.has(e)&&this.removeMonster(e);let i;console.log(t.monsterType);const s=t.monsterType||"BLACK_MIST_ZOMBIE";if(s==="BLACK_MIST_ZOMBIE")i=fM();else if(s==="SPIDER")i=pM();else{const c=new $t(1,1,1),l=new ye({color:16711680});i=new oe(c,l);const h=new Kn(.3,1,4),u=new ye({color:16742144}),d=new oe(h,u);d.position.set(0,0,.8),d.rotation.x=Math.PI/2,i.add(d)}this.scene.add(i);const r=t.position||{x:0,y:0,z:0};if(i.position.set(Number(r.x)||0,Number(r.y)||.5,Number(r.z)||0),i.userData={id:e,type:"monster",monsterType:s,stats:t.stats||{},level:t.level||1,created:Date.now(),lastUpdated:Date.now()},this.monsters.set(e,i),this.floatingNameManager){const c=((o=ra[s])==null?void 0:o.NAME)||s;this.floatingNameManager.addName(e,this.monsters.get(e),c)}if(this.floatingBarManager){const c=t.stats||{};this.floatingBarManager.addBar(e,this.monsters.get(e),"monster",((a=ra[s])==null?void 0:a.NAME)||s),this.floatingBarManager.updateBar(e,{hp:c.hp??1,maxHp:c.maxHp??1})}}updateExistingMonster(e,t){e=String(e);let i=this.monsters.get(e);!i&&(this.createMonster(e,t),i=this.monsters.get(e),!i)||t.monsterType&&i.userData.monsterType!==t.monsterType&&(this.createMonster(e,t),i=this.monsters.get(e),!i)||(t.position&&i.position.set(Number(t.position.x)||i.position.x,Number(t.position.y)||i.position.y,Number(t.position.z)||i.position.z),t.rotation!==void 0&&(i.rotation.y=Number(t.rotation)||i.rotation.y),t.stats&&(i.userData.stats={...i.userData.stats,...t.stats}),t.level!==void 0&&(i.userData.level=t.level),t.active!==void 0&&(i.visible=t.active),i.userData.lastUpdated=Date.now(),this.floatingBarManager&&t.stats&&this.floatingBarManager.updateBar(e,{hp:t.stats.hp??i.userData.stats.maxHp??1,maxHp:t.stats.maxHp??i.userData.stats.maxHp??1}))}removeMonster(e){if(e=String(e),!this.monsters.has(e))return;const t=this.monsters.get(e);this.scene.remove(t),this.floatingBarManager&&(this.floatingBarManager.updateBar(e,{hp:0,maxHp:t.userData.stats.maxHp??1}),this.floatingBarManager.removeBar(e)),this.monsters.delete(e),this.floatingNameManager&&this.floatingNameManager.removeName(e),console.log(`Monstro removido: ${e}`)}getMonster(e){return this.monsters.get(String(e))||null}clearAllMonsters(){console.log(`Limpando todos os monstros. Total antes: ${this.monsters.size}`);for(const e of this.monsters.keys())this.removeMonster(e);this.lastResetTime=Date.now(),console.log("Todos os monstros foram removidos.")}pruneStaleMonsters(e=15e3){const t=Date.now(),i=[];for(const[s,r]of this.monsters.entries())(!r.userData.lastUpdated||t-r.userData.lastUpdated>e)&&i.push(s);i.length>0&&(console.log(`Removendo ${i.length} monstros obsoletos`),i.forEach(s=>this.removeMonster(s)))}getMonsterData(e){const t=this.getMonster(e);return t?{...t.userData,status:t.userData.status||{}}:null}updateBar(e,{hp:t,maxHp:i}){const s=this.getMonster(e);s&&s.userData&&s.userData._wasGray&&(t=0)}}function ju(n,e){if(e===Lm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Vl||e===uf){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Vl)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class _M extends sr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new EM(t)}),this.register(function(t){return new LM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new DM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new IM(t)}),this.register(function(t){return new NM(t)})}load(e,t,i,s){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Kl.extractUrlBase(e),this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Of(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===$f){try{o[Ke.KHR_BINARY_GLTF]=new UM(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new qM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ke.KHR_MATERIALS_UNLIT:o[u]=new vM;break;case Ke.KHR_DRACO_MESH_COMPRESSION:o[u]=new OM(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:o[u]=new FM;break;case Ke.KHR_MESH_QUANTIZATION:o[u]=new BM;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function xM(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class yM{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new ge(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],qt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Cc(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Bf(h),l.distance=u;break;case"spot":l=new Ov(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ti(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}}class vM{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return xt}extendParams(e,t,i){const s=[];e.color=new ge(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],qt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,at))}return Promise.all(s)}}class MM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class EM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new fe(a,a)}return Promise.all(r)}}class bM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class SM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,at)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class wM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class TM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ge().setRGB(a[0],a[1],a[2],qt),Promise.all(r)}}class AM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class RM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ge().setRGB(a[0],a[1],a[2],qt),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,at)),Promise.all(r)}}class CM{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Oi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class LM{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class PM{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class DM{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class IM{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class NM{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const l of s.primitives)if(l.mode!==vn.TRIANGLES&&l.mode!==vn.TRIANGLE_STRIP&&l.mode!==vn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new Ue,m=new R,p=new Ui,x=new R(1,1,1),y=new dv(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&x.fromBufferAttribute(c.SCALE,v),y.setMatrixAt(v,_.compose(m,p,x));for(const v in c)if(v==="_COLOR_0"){const E=c[v];y.instanceColor=new ql(E.array,E.itemSize,E.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);mt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const $f="glTF",yr=12,qu={JSON:1313821514,BIN:5130562};class UM{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,yr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==$f)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-yr,r=new DataView(e,yr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===qu.JSON){const l=new Uint8Array(e,yr+o,a);this.content=i.decode(l)}else if(c===qu.BIN){const l=yr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class OM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Ql[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Ql[h]||h.toLowerCase();if(o[h]!==void 0){const d=i.accessors[e.attributes[h]],f=Fs[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u){s.decodeDracoFile(h,function(d){for(const f in d.attributes){const g=d.attributes[f],_=c[f];_!==void 0&&(g.normalized=_)}u(d)},a,l)})})}}class FM{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class BM{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class jf extends Qr{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(i-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,x=1-m,y=p-d+u;for(let v=0;v!==a;v++){const E=o[_+v+a],A=o[_+v+c]*h,w=o[g+v+a],L=o[g+v]*h;r[v]=x*E+y*A+m*w+p*L}return r}}const zM=new Ui;class kM extends jf{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return zM.fromArray(r).normalize().toArray(r),r}}const vn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Fs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Yu={9728:zt,9729:rn,9984:Gl,9985:sf,9986:qo,9987:ss},Ku={33071:bn,33648:Jo,10497:is},dl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ql={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},wi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},HM={CUBICSPLINE:void 0,LINEAR:Gs,STEP:Ur},fl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function GM(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new ye({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xi})),n.DefaultMaterial}function Vi(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ti(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function VM(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function WM(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function XM(n){let e;const t=n.extensions&&n.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+pl(t.attributes):e=n.indices+":"+pl(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+pl(n.targets[i]);return e}function pl(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function ec(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $M(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const jM=new Ue;class qM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new xM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new Ff(this.options.manager):this.textureLoader=new zv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Of(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Vi(r,a,s),Ti(a,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(Kl.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=dl[s.type],a=Fs[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new jt(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=dl[s.type],l=Fs[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let y=t.cache.get(x);y||(_=new l(a,p*f,s.count*f/h),y=new Lf(_,f/h),t.cache.add(x,y)),m=new Fr(y,c,d%f/h,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),m=new jt(_,c,g);if(s.sparse!==void 0){const p=dl.SCALAR,x=Fs[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,E=new x(o[1],y,s.sparse.count*p),A=new l(o[2],v,s.sparse.count*c);a!==null&&(m=new jt(m.array.slice(),m.itemSize,m.normalized));for(let w=0,L=E.length;w<L;w++){const M=E[w];if(m.setX(M,A[w*c]),c>=2&&m.setY(M,A[w*c+1]),c>=3&&m.setZ(M,A[w*c+2]),c>=4&&m.setW(M,A[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Yu[d.magFilter]||rn,h.minFilter=Yu[d.minFilter]||ss,h.wrapS=Ku[d.wrapS]||is,h.wrapT=Ku[d.wrapT]||is,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Gt(_);m.needsUpdate=!0,d(m)}),t.load(Kl.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||$M(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new Zr,An.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new va,An.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return ye}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[Ke.KHR_MATERIALS_UNLIT]){const u=s[Ke.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new ge(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],qt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,at)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ht);const h=r.alphaMode||fl.OPAQUE;if(h===fl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===fl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==xt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new fe(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==xt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==xt){const u=r.emissiveFactor;a.emissive=new ge().setRGB(u[0],u[1],u[2],qt)}return r.emissiveTexture!==void 0&&o!==xt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,at)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Ti(u,r),t.associations.set(u,{materials:e}),r.extensions&&Vi(s,u,r),u})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Zu(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=XM(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Zu(new Tt,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?GM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const x=l[f];if(m.mode===vn.TRIANGLES||m.mode===vn.TRIANGLE_STRIP||m.mode===vn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new lv(_,x):new oe(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===vn.TRIANGLE_STRIP?p.geometry=ju(p.geometry,uf):m.mode===vn.TRIANGLE_FAN&&(p.geometry=ju(p.geometry,Vl));else if(m.mode===vn.LINES)p=new fv(_,x);else if(m.mode===vn.LINE_STRIP)p=new Kr(_,x);else if(m.mode===vn.LINE_LOOP)p=new pv(_,x);else if(m.mode===vn.POINTS)p=new Ma(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&WM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ti(p,r),m.extensions&&Vi(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Vi(s,u[0],r),u[0];const d=new yt;r.extensions&&Vi(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new on(tg.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Yr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ti(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Ue;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new wc(a,c)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,x=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let x=0,y=d.length;x<y;x++){const v=d[x],E=f[x],A=g[x],w=_[x],L=m[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const M=i._createAnimationTracks(v,E,A,w,L);if(M)for(let b=0;b<M.length;b++)p.push(M[b])}return new Av(r,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(i.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,jM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new If:l.length>1?h=new yt:l.length===1?h=l[0]:h=new mt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ti(h,r),r.extensions&&Vi(i,h,r),r.matrix!==void 0){const u=new Ue;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new yt;i.name&&(r.name=s.createUniqueName(i.name)),Ti(r,i),i.extensions&&Vi(t,r,i);const o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof An||d instanceof Gt)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];wi[r.path]===wi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(wi[r.path]){case wi.weights:l=Xs;break;case wi.rotation:l=rs;break;case wi.position:case wi.scale:l=$s;break;default:switch(i.itemSize){case 1:l=Xs;break;case 2:case 3:default:l=$s;break}break}const h=s.interpolation!==void 0?HM[s.interpolation]:Gs,u=this._getArrayFromAccessor(i);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+wi[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=ec(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof rs?kM:jf;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function YM(n,e,t){const i=e.attributes,s=new yi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),a.normalized){const h=ec(Fs[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new R,c=new R;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=ec(Fs[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new Jn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Zu(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(const o in i){const a=Ql[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return nt.workingColorSpace!==qt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),Ti(n,e),YM(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?VM(n,e.targets,t):n})}const KM={SPAWN:{TREE:["/models-3d/Tree01.glb","/models-3d/Bush01.glb"],GRASS:"/models-3d/Grass01.glb",FLOWER:"/models-3d/Flower01.glb",ROCK:"/models-3d/Rock01.glb"},FOREST_NORTH:{TREE:"/models-3d/Tree01.glb",BUSH:"/models-3d/Bush01.glb",GRASS:"/models-3d/Grass01.glb",FLOWER:"/models-3d/Flowers01.glb",ROCK:"/models-3d/Rock02.glb"},FOREST_WEST:{TREE:["/models-3d/Tree01.glb","/models-3d/Bush01.glb"],GRASS:"/models-3d/Grass01.glb",FLOWER:"/models-3d/Flower01.glb",ROCK:"/models-3d/Rock01.glb"},MOUNTAINS:{TREE:"/models-3d/Tree01.glb",ROCK:"/models-3d/Mountain01.glb",STONE:"/models-3d/Pebbles01.glb",GRASS:"/models-3d/Grass01.glb"},PLAINS:{TREE:"/models-3d/Tree01.glb",GRASS:"/models-3d/Grass01.glb",FLOWER:"/models-3d/Flowers01.glb",ROCK:"/models-3d/Pebbles01.glb"},SWAMP:{TREE:["/models-3d/Tree01.glb","/models-3d/Bush01.glb"],GRASS:"/models-3d/Grass01.glb",ROCK:"/models-3d/Rock02.glb"},RUINS:{TREE:"/models-3d/Tree01.glb",ROCK:"/models-3d/Rock01.glb",BRIDGE:"/models-3d/Bridge01.glb",STONE:"/models-3d/Pebbles01.glb"}},ml={},ZM=new _M;async function JM(n){return ml[n]?ml[n].clone():new Promise((e,t)=>{ZM.load(n,i=>{ml[n]=i.scene,e(i.scene.clone())},void 0,t)})}function QM(n,e,t){const i=t&&t.includes("Tree01.glb");t&&t.includes("Bush01.glb"),t&&t.includes("Rock01.glb");const s=t&&t.includes("Rock02.glb");t&&t.includes("Mountain01.glb"),t&&t.includes("Pebbles01.glb"),t&&t.includes("Bridge01.glb");const r=t&&t.includes("Flower01.glb");t&&t.includes("Flowers01.glb"),t&&t.includes("Grass01.glb"),["TREE","BUSH","GRASS","FLOWER"].includes(e)&&(n.rotation.x+=Math.random()*.05-.025,n.rotation.z+=Math.random()*.05-.025);let o=0;return n.traverse(a=>{if(a.isMesh){if(a.geometry){let c=0;a.geometry.index!==null?c=a.geometry.index.count/3:a.geometry.attributes.position&&(c=a.geometry.attributes.position.count/3),o+=c}if(!a.material.map){const c={roughness:.75,metalness:.1,flatShading:!1,envMapIntensity:.5,transparent:!1,vertexColors:!1,side:Ht};if(e==="TREE")i?a.position.y<.2||a.geometry&&a.geometry.attributes.position&&a.geometry.attributes.position.count<100?(a.material=new ye({color:10840116,roughness:.7,metalness:.05,flatShading:!1,emissive:4007959,emissiveIntensity:.15,...c}),a.material.color.offsetHSL(0,0,Math.random()*.1-.05)):(a.material=new ye({color:4176968,roughness:.6,metalness:0,flatShading:!1,emissive:1127185,emissiveIntensity:.2,...c}),a.material.color.offsetHSL(0,Math.random()*.1,Math.random()*.1)):(a.material=new ye({color:2787145,roughness:.7,metalness:0,emissive:1127185,emissiveIntensity:.15,...c}),a.material.color.offsetHSL(0,Math.random()*.2-.1,Math.random()*.1-.05));else if(e==="BUSH")a.material=new ye({color:3975766,roughness:.8,metalness:0,clearcoat:.2,clearcoatRoughness:.9,...c}),a.material.color.offsetHSL(0,Math.random()*.15-.075,Math.random()*.1-.05);else if(e==="GRASS")a.material=new ye({color:7592280,roughness:.9,metalness:0,clearcoat:.1,clearcoatRoughness:.9,emissive:1127168,emissiveIntensity:.03,...c}),a.material.color.offsetHSL(Math.random()*.05,Math.random()*.2-.1,0);else if(e==="FLOWER"){const l=r?6130676:4881657;a.material=new ye({color:l,roughness:.6,metalness:.1,clearcoat:.3,clearcoatRoughness:.6,transmission:.1,thickness:.3,emissive:2237030,emissiveIntensity:.08,...c}),a.material.color.offsetHSL(Math.random()*.05-.025,Math.random()*.2,Math.random()*.2-.1)}else if(e==="ROCK"||e==="STONE"){const l=s?7829367:8947848;a.material=new ye({color:l,roughness:.95,metalness:.15,flatShading:!0,...c}),a.material.color.offsetHSL(0,0,Math.random()*.15-.075)}else e==="MOUNTAIN"?(a.material=new ye({color:10202551,roughness:.9,metalness:.2,flatShading:!0,...c}),a.material.color.offsetHSL(0,Math.random()*.05-.025,Math.random()*.1-.05)):e==="BRIDGE"&&(a.material=new ye({color:9127187,roughness:.8,metalness:.05,clearcoat:.1,clearcoatRoughness:.8,emissive:2232576,emissiveIntensity:.05,...c}),a.material.color.offsetHSL(0,Math.random()*.1,Math.random()*.2-.1))}a.castShadow=!1,a.receiveShadow=!1,a.geometry&&o>1e3&&(a.geometry.computeBoundingBox(),a.geometry.computeBoundingSphere()),a.material&&(a.material.side=Ht,a.material.blending=Qi,a.material.roughness!==void 0&&(a.material.roughness=Math.max(.5,a.material.roughness)))}}),{scaleFactor:1,triangles:o}}class Ju{constructor(e){this.scene=e,this.worldObjects=new Map,this.visibleObjects=new Set,this.lastCullingTime=0,this.instancedMeshes=new Map,this.objectsByCategoryAndModel=new Map,this.frustum=new _a,this.frustumMatrix=new Ue,this.playerPosition=null,this.detailLevels={HIGH:50,MEDIUM:100,LOW:200}}setupLighting(e){if(!this.scene||!e){console.error("Cena ou renderer não disponíveis para configurar iluminação");return}console.log("[LIGHT] Configurando iluminação e sombras avançadas"),e.shadowMap.enabled=!0,e.shadowMap.type=tf,e.outputColorSpace=at,e.toneMapping=fa,e.toneMappingExposure=1.22,e.setPixelRatio(Math.min(window.devicePixelRatio,2));const t=16446435,i=.35,s=new zf(t,i);this.scene.add(s);const r=16774870,o=1,a=new Cc(r,o);a.position.set(60,200,0),a.castShadow=!0,a.shadow.mapSize.width=2048,a.shadow.mapSize.height=2048,a.shadow.camera.near=10,a.shadow.camera.far=200,a.shadow.camera.left=-100,a.shadow.camera.right=100,a.shadow.camera.top=100,a.shadow.camera.bottom=-100,a.shadow.bias=-2e-4,a.shadow.normalBias=.01,a.shadow.radius=12,a.shadow.autoUpdate=!1,this.lastShadowUpdateTime=0,this.scene.add(a);const c=11786495,l=16776694,h=1.25,u=new Nv(c,l,h);this.scene.add(u);const d=new ge(14542591),f=.001;this.scene.fog=new Sc(d,f),this.scene.background=new ge(11786495),this.sunLight=a,this.ambientLight=s,this.hemisphereLight=u,console.log("[LIGHT] Iluminação configurada com sucesso")}updateLightPosition(e){if(!this.sunLight||!e)return;this.playerPosition=e.clone();const t=performance.now();t-this.lastShadowUpdateTime>500&&(this.lastShadowUpdateTime=t,this.sunLight.position.set(e.x+60,200,e.z),this.sunLight.target.position.set(e.x,0,e.z),this.scene.add(this.sunLight.target),this.sunLight.shadow.camera.left=-150,this.sunLight.shadow.camera.right=150,this.sunLight.shadow.camera.top=150,this.sunLight.shadow.camera.bottom=-150,this.sunLight.shadow.camera.near=10,this.sunLight.shadow.camera.far=300,this.sunLight.shadow.mapSize.width=4096,this.sunLight.shadow.mapSize.height=4096,this.sunLight.shadow.camera.updateProjectionMatrix(),this.sunLight.shadow.needsUpdate=!0,this.updateObjectCulling())}updateObjectCulling(){if(!this.playerPosition)return;const e=performance.now();if(e-this.lastCullingTime<200)return;this.lastCullingTime=e;const t=this.scene.getObjectByProperty("type","OrthographicCamera")||this.scene.getObjectByProperty("type","PerspectiveCamera");if(t){this.frustumMatrix.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.frustumMatrix);for(const[i,s]of this.worldObjects.entries()){if(!s.position)continue;const r=this.playerPosition.distanceTo(s.position);if(r>this.detailLevels.LOW){s.visible=!1;continue}const o=this.frustum.intersectsObject(s);s.visible=o,o&&s.traverse(a=>{if(a.isMesh&&(r<this.detailLevels.HIGH?(a.castShadow=!0,a.receiveShadow=!0):r<this.detailLevels.MEDIUM?(a.castShadow=!1,a.receiveShadow=!0):(a.castShadow=!1,a.receiveShadow=r<this.detailLevels.LOW),a.material))if(r>this.detailLevels.MEDIUM&&a.material.type==="MeshPhysicalMaterial"){const c=a.material.color.clone(),l=new vv({color:c,side:Ht});a._originalMaterial=a.material,a.material=l}else r<=this.detailLevels.MEDIUM&&a._originalMaterial&&(a.material=a._originalMaterial,delete a._originalMaterial)})}}}async createWorldObject(e,t){var c;e=String(e),this.worldObjects.has(e)&&this.removeWorldObject(e);const i=typeof t.type=="string"?t.type:"TREE",s=t.biome||"SPAWN";let r=(c=KM[s])==null?void 0:c[i];Array.isArray(r)&&(r=r[Math.floor(Math.random()*r.length)]);let o=null;if(r)try{o=await JM(r),QM(o,i,r)}catch{o=Qu(i)}else console.info(`[WorldObjectPresenter] Sem modelo 3D para ${i} (${s}), usando primitiva.`),o=Qu(i);const a=t.position||{x:0,y:0,z:0};return o.position.set(Number(a.x)||0,Number(a.y)||0,Number(a.z)||0),t.rotation!==void 0&&(o.rotation.y=Number(t.rotation)||0),o.userData={id:e,type:"worldObject",objectType:i,properties:t.properties||{},created:Date.now()},this.worldObjects.set(e,o),this.scene.add(o),o}updateWorldObject(e){if(!e||!e.id){console.error("Dados de objeto do mundo inválidos:",e);return}const t=String(e.id);let i=this.worldObjects.get(t);if(!i&&(this.createWorldObject(t,e),i=this.worldObjects.get(t),!i))return;const s=typeof i.userData.objectType=="string"?i.userData.objectType:"",r=typeof e.type=="string"?e.type:"";r&&s!==r&&(console.warn(`[DEBUG] Recriando objeto ${t}: type local='${s}', type recebido='${r}'`),this.createWorldObject(t,e),i=this.worldObjects.get(t),!i)||(e.position&&i.position.set(Number(e.position.x)||i.position.x,Number(e.position.y)||i.position.y,Number(e.position.z)||i.position.z),e.rotation!==void 0&&(i.rotation.y=Number(e.rotation)||i.rotation.y),e.properties&&(i.userData.properties=e.properties),e.active!==void 0&&(i.visible=e.active))}removeWorldObject(e){if(!this.worldObjects.has(e))return;const t=this.worldObjects.get(e);this.scene.remove(t),this.worldObjects.delete(e)}getWorldObject(e){return this.worldObjects.get(e)||null}clearAllWorldObjects(){for(const e of this.worldObjects.keys())this.removeWorldObject(e)}optimizeSceneWithInstancing(){if(!(this.worldObjects.size<50))for(const[e,t]of this.objectsByCategoryAndModel.entries())t.length<10||console.log(`[OPTIMIZAÇÃO] Considerando instanciamento para ${e} (${t.length} objetos)`)}updateRenderer(e,t){t&&(!this.playerPosition||this.playerPosition.distanceTo(t)>2)&&(this.playerPosition=t.clone(),this.updateObjectCulling())}}function Qu(n){let e,t,i;switch(n){case"TREE":const s=new yt,r=new Bn(.2,.3,1.5,8),o=new ye({color:9127187}),a=new oe(r,o);a.position.y=.75,a.castShadow=!0,a.receiveShadow=!0,s.add(a);const c=new Kn(1,2,8),l=new ye({color:2263842}),h=new oe(c,l);h.position.y=2.5,h.castShadow=!0,h.receiveShadow=!0,s.add(h),i=s;break;case"ROCK":e=new Tc(.8,0),t=new ye({color:8421504}),i=new oe(e,t),i.scale.y=.7,i.castShadow=!0,i.receiveShadow=!0;break;case"BUSH":e=new Mt(.5,8,6),t=new ye({color:3329330}),i=new oe(e,t),i.castShadow=!0,i.receiveShadow=!0;break;case"HOUSE":const u=new yt,d=new $t(3,2,3),f=new ye({color:13808780}),g=new oe(d,f);g.position.y=1,g.castShadow=!0,g.receiveShadow=!0,u.add(g);const _=new Kn(3,1.5,4),m=new ye({color:9109504}),p=new oe(_,m);p.position.y=2.75,p.rotation.y=Math.PI/4,p.castShadow=!0,p.receiveShadow=!0,u.add(p),i=u;break;case"FENCE":e=new $t(1.5,.8,.1),t=new ye({color:10506797}),i=new oe(e,t),i.castShadow=!0,i.receiveShadow=!0;break;default:e=new $t(1,1,1),t=new ye({color:11184810}),i=new oe(e,t),i.castShadow=!0,i.receiveShadow=!0;break}return i}class ed{constructor(e,t){this.scene=e,this.players=new Map,this.localPlayerId=null,this.floatingBarManager=t}setLocalPlayerId(e){this.localPlayerId=e}hasPlayer(e){return e=String(e),this.players.has(e)}updatePlayerRotation(e,t){const i=this.players.get(e);i&&(i.rotation.y=Number(t)||0)}updatePlayer(e){if(!e||!e.id){console.error("Dados de jogador inválidos:",e);return}const t=e.id;t!==this.localPlayerId&&(this.players.has(t)?this.updateExistingPlayer(t,e):this.createPlayer(t,e))}createPlayer(e,t){var h,u,d,f;e=String(e),this.players.has(e)&&this.removePlayer(e);const i=new $t(1,1,1),s=new ye({color:255}),r=new oe(i,s);this.scene.add(r);const o=t.position||{x:0,z:0};r.position.set(Number(o.x)||0,.5,Number(o.z)||0);const a=new Kn(.3,1,4),c=new ye({color:65280}),l=new oe(a,c);l.position.set(0,0,.8),l.rotation.x=Math.PI/2,r.add(l),r.userData={id:e,type:"player",name:t.name||`Player${String(e).slice(-4)}`,stats:t.stats||{},level:t.level||1,created:Date.now()},this.players.set(e,r),this.floatingBarManager&&e!==this.localPlayerId&&(this.floatingBarManager.addBar(e,r,"player",t.name||`Player${String(e).slice(-4)}`),this.floatingBarManager.updateBar(e,{hp:((h=t.stats)==null?void 0:h.hp)??1,maxHp:((u=t.stats)==null?void 0:u.maxHp)??1,mana:((d=t.stats)==null?void 0:d.mana)??1,maxMana:((f=t.stats)==null?void 0:f.maxMana)??1})),console.log(`Jogador criado: ${e}`),console.log("Players atuais:",Array.from(this.players.keys()))}updateExistingPlayer(e,t){e=String(e);let i=this.players.get(e);if(!i&&(this.createPlayer(e,t),i=this.players.get(e),!i)){console.error(`[PlayerPresenter] Falha ao criar mesh para player ${e}`);return}t.position&&i.position.set(Number(t.position.x)||i.position.x,.5,Number(t.position.z)||i.position.z),t.rotation!==void 0&&(i.rotation.y=Number(t.rotation)||i.rotation.y),t.stats&&(i.userData.stats={...i.userData.stats,...t.stats},t.stats.maxHp!==void 0&&(i.userData.stats.maxHp=t.stats.maxHp),t.stats.maxMana!==void 0&&(i.userData.stats.maxMana=t.stats.maxMana),t.stats.hp!==void 0&&(i.userData.stats.hp=t.stats.hp),t.stats.mana!==void 0&&(i.userData.stats.mana=t.stats.mana)),t.level&&(i.userData.level=t.level),t.active!==void 0&&(i.visible=t.active),this.floatingBarManager&&e!==this.localPlayerId&&i.userData.stats&&this.floatingBarManager.updateBar(e,{hp:i.userData.stats.hp??1,maxHp:i.userData.stats.maxHp??1,mana:i.userData.stats.mana??1,maxMana:i.userData.stats.maxMana??1}),console.log("Players atuais após update:",Array.from(this.players.keys()))}removePlayer(e){if(e=String(e),!this.players.has(e))return;const t=this.players.get(e);this.scene.remove(t),this.players.delete(e),this.floatingBarManager&&this.floatingBarManager.removeBar(e),console.log(`Jogador removido: ${e}`),console.log("Players atuais após remoção:",Array.from(this.players.keys()))}getPlayer(e){return e=String(e),this.players.get(e)||null}clearAllPlayers(){for(const e of this.players.keys())this.removePlayer(e)}getPlayerData(e){const t=this.getPlayer(e);return t?{...t.userData,status:t.userData.status||{}}:null}}class eE{constructor(e=document.body){this.container=e,this.tabs=["Main","Sistema(Dano/Cura)","Global"],this.activeTab="Main",this.messages={Main:[],Sistema:[],"Sistema(Dano/Cura)":[],Global:[],Privado:[]},this._createChatElement()}_createChatElement(){this.chatEl=document.createElement("div"),this.chatEl.className="chat-manager",this.chatEl.style.position="fixed",this.chatEl.style.left="2vw",this.chatEl.style.bottom="3vw";const e=document.createElement("div");e.className="chat-resize-handle";const t=document.createElement("div");t.className="chat-resize-handle-bar",e.appendChild(t),document.body.appendChild(e);const i=()=>{const u=this.chatEl.getBoundingClientRect();e.style.left=u.left+u.width/2-30+"px",e.style.top=u.top-14+"px"};setTimeout(i,100),window.addEventListener("resize",i),new ResizeObserver(i).observe(this.chatEl);let r=!1,o=0,a=0;const c=120,l=600;e.addEventListener("mousedown",u=>{r=!0,o=u.clientY,a=this.chatEl.offsetHeight,document.body.style.userSelect="none"}),window.addEventListener("mousemove",u=>{var m;if(!r)return;const d=u.clientY-o;let f=Math.max(c,Math.min(l,a-d));this.chatEl.style.height=f+"px";const g=this.inputEl.offsetHeight||44,_=((m=this.tabButtons.Main)==null?void 0:m.offsetHeight)||36;this.messagesEl.style.maxHeight=f-g-_-12+"px",i()}),window.addEventListener("mouseup",()=>{r&&(r=!1,document.body.style.userSelect="")});const h=document.createElement("div");h.className="chat-tabs",this.tabButtons={},this.tabs.forEach(u=>{const d=document.createElement("button");d.className="chat-tab-btn"+(u===this.activeTab?" active":""),d.textContent=u,d.onclick=()=>this.setActiveTab(u),h.appendChild(d),this.tabButtons[u]=d}),this.chatEl.appendChild(h),this.messagesEl=document.createElement("div"),this.messagesEl.className="chat-messages",this.chatEl.appendChild(this.messagesEl),this.inputEl=document.createElement("textarea"),this.inputEl.className="chat-input",this.inputEl.rows=1,this.inputEl.placeholder="Digite sua mensagem...",this.inputEl.style.resize="none",this.inputEl.addEventListener("keydown",u=>{if(u.key==="Enter"&&!u.shiftKey){u.preventDefault();const d=this.inputEl.value.trim();d&&(this._handleInput(d),this.inputEl.value="",this.inputEl.rows=1)}else setTimeout(()=>{this.inputEl.rows=Math.min(4,this.inputEl.value.split(`
`).length)},0)}),this.inputEl.addEventListener("focus",()=>{this.chatEl.classList.add("focused"),window.dispatchEvent(new CustomEvent("chat:focus"))}),this.inputEl.addEventListener("blur",()=>{this.chatEl.classList.remove("focused"),window.dispatchEvent(new CustomEvent("chat:blur"))}),window.addEventListener("keydown",u=>{u.key==="Enter"&&document.activeElement!==this.inputEl&&(this.inputEl.focus(),u.preventDefault()),u.key==="Escape"&&document.activeElement===this.inputEl&&(this.inputEl.blur(),u.preventDefault())}),this.chatEl.appendChild(this.inputEl),this.container.appendChild(this.chatEl),this.renderMessages()}setActiveTab(e){!this.tabs.includes(e)&&e!=="Privado"||(this.activeTab=e,Object.entries(this.tabButtons).forEach(([t,i])=>{i.classList.toggle("active",t===e)}),this.renderMessages())}renderMessages(){this.messagesEl.innerHTML="",(this.messages[this.activeTab]||[]).slice(-100).forEach(t=>{const i=document.createElement("div");if(i.className="chat-message "+(t.type||"player"),t.name){const r=document.createElement("span");r.className="chat-name "+(t.nameClass||"player"),r.textContent=t.name+": ",i.appendChild(r)}const s=document.createElement("span");s.className="chat-text",s.innerHTML=this._sanitize(t.text,t.type==="me"),i.appendChild(s),this.messagesEl.appendChild(i)}),this.messagesEl.scrollTop=this.messagesEl.scrollHeight}setChannel(e){this.channel=e,e.on("chat:main",t=>{t&&t.text&&t.from&&this._addMessage({text:t.text,type:"player",name:t.from,nameClass:"player"},["Main"])}),e.on("chat:global",t=>{t&&t.text&&t.from&&this._addMessage({text:t.text,type:"player",name:t.from,nameClass:"player"},["Global"])}),e.on("chat:private",t=>{t&&t.text&&t.from&&(this._addMessage({text:t.text,type:"private",name:t.from,nameClass:"private"},["Privado"]),this.setActiveTab("Privado"))})}_handleInput(e){if(e.startsWith("/")){const[t,...i]=e.slice(1).split(" ");switch(t.toLowerCase()){case"w":{const s=i.shift(),r=i.join(" ");s&&r?this.channel?this.channel.emit("chat:private",{to:s,text:r}):(this.addPrivateMessage("Você",s,r),this.setActiveTab("Privado")):this.addSystemMessage("Uso: /w nome mensagem");break}case"me":{const s=i.join(" ");s&&this._addMessage({text:s,type:"me",name:"Você",nameClass:"player"},[this.activeTab,"Main"]);break}case"help":{this.addSystemMessage(`Bem-vindo ao MMORPG!
Comandos disponíveis:
/me ação - faz uma ação
/w nome mensagem - envia mensagem privada
/help - mostra esta ajuda
Objetivo: evolua, lute e interaja com outros jogadores!`);break}default:this.addSystemMessage("Comando desconhecido. Use /help para ver os comandos.")}}else this.channel?this.activeTab==="Global"?this.channel.emit("chat:global",{text:e}):this.activeTab==="Main"?this.channel.emit("chat:main",{text:e}):this.channel.emit("chat:main",{text:e}):this.addPlayerMessage("Você",e,this.activeTab)}_sanitize(e,t=!1){let i=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>");return t&&(i=`<i>${i}</i>`),i}addSystemMessage(e){this._addMessage({text:e,type:"system",name:"Sistema",nameClass:"system"},["Main","Sistema"])}addXPMessage(e){this._addMessage({text:e,type:"xp",name:"XP",nameClass:"xp"},["Main","Sistema"])}addCooldownMessage(e){this._addMessage({text:e,type:"cooldown",name:"Cooldown",nameClass:"cooldown"},["Main","Sistema"])}addManaMessage(e){this._addMessage({text:e,type:"mana",name:"Mana",nameClass:"mana"},["Main","Sistema"])}addErrorMessage(e){this._addMessage({text:e,type:"error",name:"Erro",nameClass:"error"},["Main","Sistema"])}addDamageMessage(e){console.log("[CHAT] addDamageMessage:",e),this._addMessage({text:e,type:"damage",name:"Dano",nameClass:"damage"},["Sistema(Dano/Cura)"])}addHealMessage(e){console.log("[CHAT] addHealMessage:",e),this._addMessage({text:e,type:"heal",name:"Cura",nameClass:"heal"},["Sistema(Dano/Cura)"])}addPlayerMessage(e,t,i="Main"){this._addMessage({text:t,type:"player",name:e,nameClass:"player"},[i,"Main"])}addPrivateMessage(e,t,i){this._addMessage({text:`(para ${t}) ${i}`,type:"private",name:e,nameClass:"private"},["Privado"])}_addMessage(e,t){console.log("[CHAT] _addMessage:",e,t),t.forEach(i=>{this.messages[i]||(this.messages[i]=[]),this.messages[i].push(e),this.messages[i].length>200&&this.messages[i].shift()}),t.includes(this.activeTab)&&this.renderMessages()}}class tE{constructor(){this.abilities=[{id:Ve.FIREBALL.ID,name:Ve.FIREBALL.NAME,description:Ve.FIREBALL.DESCRIPTION,cooldown:Ve.FIREBALL.COOLDOWN,mana:Ve.FIREBALL.MANA_COST,icon:Ve.FIREBALL.ICON},{id:Ve.TELEPORT.ID,name:Ve.TELEPORT.NAME,description:Ve.TELEPORT.DESCRIPTION,cooldown:Ve.TELEPORT.COOLDOWN,mana:Ve.TELEPORT.MANA_COST,icon:Ve.TELEPORT.ICON},{id:Ve.FROST_SPIKES.ID,name:Ve.FROST_SPIKES.NAME,description:Ve.FROST_SPIKES.DESCRIPTION,cooldown:Ve.FROST_SPIKES.COOLDOWN,mana:Ve.FROST_SPIKES.MANA_COST,icon:Ve.FROST_SPIKES.ICON},{id:Ve.METEOR_STORM.ID,name:Ve.METEOR_STORM.NAME,description:Ve.METEOR_STORM.DESCRIPTION,cooldown:Ve.METEOR_STORM.COOLDOWN,mana:Ve.METEOR_STORM.MANA_COST,icon:Ve.METEOR_STORM.ICON}],this.abilitySlots=[1,2,3,4],this.createHUD(),this.cooldowns=[0,0,0,0],this.abilityMaxCooldowns=[0,0,0,0],this.lastUpdate=Date.now(),this.animateCooldowns(),this.chatManager=new eE(document.body),this.createPerformancePanel(),this.createSettingsButton(),this.loadUserSettings()}createHUD(){if(this.hud=document.createElement("div"),this.hud.id="hud",this.hud.style.position="fixed",this.hud.style.left="50%",this.hud.style.bottom="3vw",this.hud.style.transform="translateX(-50%)",this.hud.style.zIndex="2000",this.hud.style.display="flex",this.hud.style.flexDirection="column",this.hud.style.alignItems="center",this.hud.style.width="32vw",this.hud.style.minWidth="240px",this.hud.style.maxWidth="520px",this.hud.style.fontSize="min(1.2vw, 16px)",this.hud.innerHTML=`
      <div id="hud-barrow" style="display: flex; align-items: center; gap: 0; width: 100%;">
        <div id="hud-hp-wrap" style="position: relative; width: 40%; height: 2.2vw; min-width: 90px; max-width: 220px; display: flex; align-items: center;">
          <div id="hud-hp-bg" style="position: absolute; left: 0; top: 0.5vw; width: 100%; height: 1vw; background: #3a1818; border-radius: 0.6vw 0 0 0.6vw;"></div>
          <div id="hud-hp" style="position: absolute; left: 0; top: 0.5vw; height: 1vw; background: linear-gradient(90deg, #ff4444, #b80000); border-radius: 0.6vw 0 0 0; transition: width 0.2s;"></div>
          <div id="hud-hp-text" style="position: absolute; left: 1vw; top: 0.5vw; color: #fff; font-size: min(1vw, 13px); font-weight: bold; text-shadow: 1px 1px 2px #000; z-index:2;"></div>
        </div>
        <div id="hud-center-diamond" style="width: 4.5vw; height: 4.5vw; min-width: 54px; min-height: 54px; display: flex; align-items: center; justify-content: center; position: relative; z-index:3; margin: 0 -0.5vw; overflow: visible;">
          <svg width="100%" height="100%" viewBox="-8 -8 80 80" style="position:absolute;left:0;top:0;z-index:1;overflow:visible;">
            <!-- Fundo da borda de XP -->
            <polygon points="32,4 60,32 32,60 4,32" fill="none" stroke="#8888" stroke-width="12" stroke-linejoin="round" /> <!-- Fundo cinza translúcido -->
            <!-- Borda de XP -->
            <polygon id="hud-xp-border" points="32,4 60,32 32,60 4,32" fill="none" stroke="#ffe066" stroke-width="12" stroke-linejoin="round" style="filter: drop-shadow(0 0 4px #ffb700cc);" />
            <!-- Losango de fundo -->
            <polygon points="32,4 60,32 32,60 4,32" fill="#000" stroke="#fff" stroke-width="3"/>
          </svg>
          <span id="hud-level" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: min(2vw, 22px); font-weight: bold; text-shadow: 1px 1px 2px #000; z-index:2;">1</span>
        </div>
        <div id="hud-mp-wrap" style="position: relative; width: 40%; height: 2.2vw; min-width: 90px; max-width: 220px; display: flex; align-items: center;">
          <div id="hud-mp-bg" style="position: absolute; right: 0; top: 0.5vw; width: 100%; height: 1vw; background: #1a2a3a; border-radius: 0 0.6vw 0.6vw 0;"></div>
          <div id="hud-mp" style="position: absolute; right: 0; top: 0.5vw; height: 1vw; background: linear-gradient(90deg, #3399ff, #003366); border-radius: 0 0.6vw 0.6vw 0; transition: width 0.2s;"></div>
          <div id="hud-mp-text" style="position: absolute; right: 1vw; top: 0.5vw; color: #fff; font-size: min(1vw, 13px); font-weight: bold; text-shadow: 1px 1px 2px #000; z-index:2;"></div>
        </div>
      </div>
      <div id="hud-slots" style="margin-top: 1vw; display: flex; gap: 0.6vw; width: 100%; justify-content: center;"></div>
    `,document.body.appendChild(this.hud),this.renderAbilitySlots(),!document.querySelector(".target-ui")){const e=document.createElement("div");e.className="target-ui",e.style.display="none",e.innerHTML=`
        <div class="target-header">
          <span class="target-icon">👤</span>
          <span class="target-name">Nome</span>
        </div>
        <div class="target-bars">
          <div class="hp-bar">
            <div class="hp-fill" style="width: 100%"></div>
            <span class="hp-text">0 / 0</span>
          </div>
          <div class="mana-bar">
            <div class="mana-fill" style="width: 100%"></div>
            <span class="mana-text">0 / 0</span>
          </div>
        </div>
        <div class="target-status"></div>
      `,e.style.position="absolute",e.style.top="0px",e.style.left="50%",e.style.transform="translateX(-50%)",e.style.width="400px",e.style.backgroundColor="rgba(20, 20, 20, 0.7)",e.style.borderRadius="10px",e.style.padding="10px",e.style.fontFamily="Segoe UI, sans-serif",e.style.color="white",e.style.boxShadow="0 0 10px #000",e.style.zIndex="3000";const t=e.querySelector(".target-header");t.style.display="flex",t.style.justifyContent="space-between",t.style.fontWeight="bold",t.style.marginBottom="5px",t.style.fontSize="14px";const i=e.querySelector(".target-bars");i.style.marginBottom="5px";const s=e.querySelector(".hp-bar"),r=e.querySelector(".mana-bar");[s,r].forEach(d=>{d.style.position="relative",d.style.height="20px",d.style.borderRadius="4px",d.style.overflow="hidden",d.style.marginBottom="3px"}),s.style.backgroundColor="#440000";const o=e.querySelector(".hp-fill");o.style.background="linear-gradient(to right, #ff3333, #cc0000)",o.style.height="100%";const a=e.querySelector(".hp-text");a.style.position="absolute",a.style.width="100%",a.style.textAlign="center",a.style.top="0",a.style.lineHeight="20px",a.style.fontSize="13px",r.style.backgroundColor="#003366";const c=e.querySelector(".mana-fill");c.style.background="linear-gradient(to right, #3399ff, #0066cc)",c.style.height="100%";const l=e.querySelector(".mana-text");l.style.position="absolute",l.style.width="100%",l.style.textAlign="center",l.style.top="0",l.style.lineHeight="20px",l.style.fontSize="13px";const h=e.querySelector(".target-status");h.style.display="flex",h.style.gap="5px",h.style.justifyContent="flex-end";const u=document.createElement("style");u.type="text/css",u.textContent=`
        .target-status img {
          width: 20px;
          height: 20px;
        }
      `,document.head.appendChild(u),document.body.appendChild(e)}this.tooltip=document.createElement("div"),this.tooltip.id="hud-tooltip",this.tooltip.style.position="fixed",this.tooltip.style.zIndex="3000",this.tooltip.style.backgroundColor="rgba(0, 0, 0, 0.8)",this.tooltip.style.borderRadius="8px",this.tooltip.style.padding="10px",this.tooltip.style.boxShadow="0 0 10px rgba(0, 0, 0, 0.5)",this.tooltip.style.color="#fff",this.tooltip.style.fontSize="14px",this.tooltip.style.fontFamily="Arial, sans-serif",this.tooltip.style.pointerEvents="none",this.tooltip.style.maxWidth="240px",this.tooltip.style.display="none",document.body.appendChild(this.tooltip)}renderAbilitySlots(){const e=document.getElementById("hud-slots");e.innerHTML="";for(let t=0;t<4;t++){const i=document.createElement("div");i.className="hud-slot",i.id=`slot-${t+1}`,i.style.width="44px",i.style.height="44px",i.style.background="linear-gradient(145deg, #1a2334, #2a3349)",i.style.borderRadius="8px",i.style.border="2px solid #334466",i.style.boxShadow="0 2px 5px rgba(0,0,0,0.7), inset 0 1px 1px rgba(255,255,255,0.1)",i.style.position="relative",i.style.display="flex",i.style.alignItems="center",i.style.justifyContent="center",i.style.cursor="pointer",i.style.transition="all 0.2s ease",i.style.overflow="hidden",i.addEventListener("mouseenter",()=>{this.cooldowns[t]<=0&&(i.style.boxShadow="0 2px 8px rgba(120,180,255,0.4), inset 0 1px 1px rgba(255,255,255,0.2)",i.style.border="2px solid #5599ff")}),i.addEventListener("mouseleave",()=>{i.style.boxShadow="0 2px 5px rgba(0,0,0,0.7), inset 0 1px 1px rgba(255,255,255,0.1)",i.style.border="2px solid #334466"});const s=this.abilitySlots[t],r=this.abilities.find(c=>c.id===s),o=document.createElement("span");r&&r.icon&&r.icon.endsWith(".png")?o.innerHTML=`<img src='${r.icon}' alt='${r.name}' class='skill-icon-img' style='width:100%;height:100%;object-fit:cover;display:block;margin:0;border-radius:6px;transition:all 0.2s ease;'>`:(o.textContent=r?r.icon:"?",o.style.fontSize="28px",o.style.userSelect="none"),i.appendChild(o),i.addEventListener("mouseenter",c=>{if(!r)return;this.tooltip.innerHTML=`
          <div style="color: #ffcc66; font-weight: bold; font-size: 16px; margin-bottom: 5px; text-align: center;">
            ${r.name}
          </div>
          <div style="margin-bottom: 8px; color: #eee;">
            ${r.description}
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span style="color: #77bbff;">Mana: ${r.mana}</span>
            <span style="color: #ffaa77;">CD: ${r.cooldown/1e3}s</span>
          </div>
          <div style="margin-top: 5px; font-size: 12px; color: #aaa; text-align: center;">
            (Slot ${t+1})
          </div>
        `;const l=i.getBoundingClientRect();this.tooltip.style.left=`${l.left+l.width/2}px`,this.tooltip.style.top=`${l.top-10}px`,this.tooltip.style.transform="translate(-50%, -100%)",this.tooltip.style.display="block"}),i.addEventListener("mouseleave",()=>{this.tooltip.style.display="none"}),i.draggable=!0,i.ondragstart=c=>{c.dataTransfer.setData("text/plain",t)},i.ondragover=c=>{c.preventDefault(),i.style.background="#444a"},i.ondragleave=c=>{i.style.background="#2226"},i.ondrop=c=>{c.preventDefault(),i.style.background="#2226";const l=parseInt(c.dataTransfer.getData("text/plain"));this.swapAbilities(l,t)};const a=document.createElement("span");a.textContent=t+1,a.style.position="absolute",a.style.left="4px",a.style.top="2px",a.style.fontSize="13px",a.style.color="#fff",a.style.background="rgba(0,0,0,0.55)",a.style.padding="1px 5px 1px 3px",a.style.borderRadius="6px",a.style.zIndex="2",a.style.pointerEvents="none",a.style.fontWeight="bold",i.appendChild(a),e.appendChild(i)}}swapAbilities(e,t){const i=this.abilitySlots[e];this.abilitySlots[e]=this.abilitySlots[t],this.abilitySlots[t]=i;const s=this.cooldowns[e];this.cooldowns[e]=this.cooldowns[t],this.cooldowns[t]=s;const r=this.abilityMaxCooldowns[e];this.abilityMaxCooldowns[e]=this.abilityMaxCooldowns[t],this.abilityMaxCooldowns[t]=r,this.renderAbilitySlots(),this.updateCooldownVisual(e+1),this.updateCooldownVisual(t+1)}update(e,t,i,s,r){const o=Math.max(0,Math.round(e.hp)),a=Math.round(e.maxHp),c=Math.max(0,Math.round(e.mana)),l=Math.round(e.maxMana);if(document.getElementById("hud-hp").style.width=`${o/a*100}%`,document.getElementById("hud-hp-text").textContent=`${o} / ${a}`,document.getElementById("hud-mp").style.width=`${c/l*100}%`,document.getElementById("hud-mp-text").textContent=`${c} / ${l}`,document.getElementById("hud-level").textContent=`${t||1}`,this.updateAbilityStates(c),typeof s=="number"&&typeof r=="number"&&r>0){const h=Math.min(1,s/r),u=4*Math.sqrt(Math.pow(-28,2)+Math.pow(-28,2)),d=u,f=u*(1-h),g=document.getElementById("hud-xp-border");g.setAttribute("stroke-dasharray",d),g.setAttribute("stroke-dashoffset",f),g.style.opacity="1"}else{const h=document.getElementById("hud-xp-border"),u=4*Math.sqrt(Math.pow(-28,2)+Math.pow(-28,2));h.setAttribute("stroke-dasharray",u),h.setAttribute("stroke-dashoffset",u),h.style.opacity="1"}}setCooldown(e,t,i){this.cooldowns[e-1]=t,this.abilityMaxCooldowns[e-1]=i,this.updateCooldownVisual(e)}updateCooldownVisual(e){const t=document.getElementById(`slot-${e}`);let i=t.querySelector(".cooldown-overlay");if(i||(i=document.createElement("div"),i.className="cooldown-overlay",i.style.position="absolute",i.style.left="0",i.style.top="0",i.style.width="100%",i.style.height="100%",i.style.background="rgba(0,10,30,0.75)",i.style.color="#fff",i.style.fontWeight="bold",i.style.fontSize="19px",i.style.display="flex",i.style.alignItems="center",i.style.justifyContent="center",i.style.borderRadius="6px",i.style.backdropFilter="blur(1px)",i.style.textShadow="0 0 4px #000",i.style.transition="all 0.15s ease-out",i.style.boxShadow="inset 0 0 10px rgba(0,0,0,0.5)",t.appendChild(i)),this.cooldowns[e-1]>0){i.style.display="flex",i.textContent=Math.ceil(this.cooldowns[e-1]/1e3);const r=this.cooldowns[e-1]/this.abilityMaxCooldowns[e-1]*360;i.style.background=`conic-gradient(
        transparent ${r}deg, 
        rgba(0,10,30,0.75) ${r}deg
      )`}else i.style.display="none"}animateCooldowns(){const e=Date.now(),t=e-this.lastUpdate;this.lastUpdate=e;for(let i=0;i<4;i++)this.cooldowns[i]>0&&(this.cooldowns[i]=Math.max(0,this.cooldowns[i]-t),this.updateCooldownVisual(i+1));requestAnimationFrame(()=>this.animateCooldowns())}showDeathMessage(e){let t=document.getElementById("death-message");if(t&&!e){t.style.opacity="0",setTimeout(()=>{t&&t.parentNode&&t.parentNode.removeChild(t)},500);return}}updateHealth(e,t){if(!this.healthBar||!this.healthText)return;const i=Math.max(0,e/t);this.healthBar.style.width=`${i*100}%`,this.healthText.textContent=`${Math.floor(e)} / ${Math.floor(t)}`,i<.3?(this.healthBar.style.background="linear-gradient(to right, #7f0000, #c0392b)",i<.15?this.lowHealthAnimation||(this.lowHealthAnimation=this.healthBar.animate([{opacity:.7},{opacity:1}],{duration:800,iterations:1/0,direction:"alternate",easing:"ease-in-out"})):this.lowHealthAnimation&&(this.lowHealthAnimation.cancel(),this.lowHealthAnimation=null,this.healthBar.style.opacity=1)):(this.healthBar.style.background="linear-gradient(to right, #c0392b, #e74c3c)",this.lowHealthAnimation&&(this.lowHealthAnimation.cancel(),this.lowHealthAnimation=null,this.healthBar.style.opacity=1))}updateAbilityStates(e){for(let t=0;t<4;t++){const i=this.abilitySlots[t],s=this.abilities.find(c=>c.id===i);if(!s)continue;const r=document.getElementById(`slot-${t+1}`);if(!r)continue;const o=r.querySelector("span:not(.cooldown-overlay)");if(!o||this.cooldowns[t]>0)continue;e>=s.mana?(o.style.color="",o.style.opacity="1",r.style.background="#2226"):(o.style.color="#999",o.style.opacity="0.6",r.style.background="#1a1a1a80")}}updateMonsterHUD(e){const t=document.querySelector(".target-ui");if(!t)return;t.style.display="block",t.querySelector(".target-icon").textContent="👹",t.querySelector(".target-name").textContent=e.name;const i=e.hp/e.maxHp*100;t.querySelector(".hp-fill").style.width=i+"%",t.querySelector(".hp-text").textContent=`${e.hp} / ${e.maxHp}`,t.querySelector(".mana-bar").style.display="none";const s=t.querySelector(".target-status");s.innerHTML="",(e.status||[]).forEach(r=>{const o=document.createElement("span");o.textContent=r.icon,o.title=r.tooltip,o.className="status-icon",s.appendChild(o)})}updatePlayerHUD(e){const t=document.querySelector(".target-ui");if(!t)return;t.style.display="block",t.querySelector(".target-icon").textContent="👤",t.querySelector(".target-name").textContent=e.name;const i=e.hp/e.maxHp*100;t.querySelector(".hp-fill").style.width=i+"%",t.querySelector(".hp-text").textContent=`${e.hp} / ${e.maxHp}`;const s=t.querySelector(".mana-bar");if(e.maxEnergy){s.style.display="block";const o=e.energy/e.maxEnergy*100;t.querySelector(".mana-fill").style.width=o+"%",t.querySelector(".mana-text").textContent=`${e.energy} / ${e.maxEnergy}`}else s.style.display="none";const r=t.querySelector(".target-status");r.innerHTML="",(e.status||[]).forEach(o=>{const a=document.createElement("span");a.textContent=o.icon,a.title=o.tooltip,a.className="status-icon",r.appendChild(a)})}clearMonsterHUD(){const e=document.querySelector(".target-ui");e&&(e.style.display="none")}clearPlayerHUD(){const e=document.querySelector(".target-ui");e&&(e.style.display="none")}addSystemMessage(e){this.chatManager.addSystemMessage(e)}addXPMessage(e){this.chatManager.addXPMessage(e)}addCooldownMessage(e){this.chatManager.addCooldownMessage(e)}addManaMessage(e){this.chatManager.addManaMessage(e)}addErrorMessage(e){this.chatManager.addErrorMessage(e)}addDamageMessage(e){this.chatManager.addDamageMessage(e)}addHealMessage(e){this.chatManager.addHealMessage(e)}addPlayerMessage(e,t,i){this.chatManager.addPlayerMessage(e,t,i)}setChannel(e){this.channel=e,this.pingInterval&&clearInterval(this.pingInterval),this.pingListener&&this.channel&&this.channel.off&&this.channel.off("pong",this.pingListener),this.pingListener=()=>{this.ping=Math.round(performance.now()-this.pingStartTime)},this.channel&&this.channel.on&&this.channel.on("pong",this.pingListener),this.pingInterval=setInterval(()=>this.sendPing(),2e3)}sendPing(){this.channel&&this.channel.emit&&(this.pingStartTime=performance.now(),this.channel.emit("ping"))}createHealthBar(){const e=document.createElement("div");e.classList.add("health-bar-outer"),e.style.position="absolute",e.style.left="20px",e.style.bottom="80px",e.style.width="230px",e.style.height="22px",e.style.backgroundColor="rgba(0,0,0,0.6)",e.style.padding="3px",e.style.borderRadius="6px",e.style.boxShadow="0 2px 4px rgba(0,0,0,0.5), inset 0 1px 3px rgba(0,0,0,0.5)",e.style.border="1px solid #444",document.body.appendChild(e);const t=document.createElement("div");t.classList.add("health-bar"),t.style.width="100%",t.style.height="100%",t.style.backgroundColor="#e74c3c",t.style.background="linear-gradient(to right, #c0392b, #e74c3c)",t.style.borderRadius="4px",t.style.boxShadow="inset 0 0 5px rgba(0,0,0,0.3)",t.style.transition="width 0.3s ease-out",e.appendChild(t);const i=document.createElement("div");i.classList.add("health-text"),i.style.position="absolute",i.style.left="0",i.style.top="0",i.style.width="100%",i.style.height="100%",i.style.display="flex",i.style.alignItems="center",i.style.justifyContent="center",i.style.color="white",i.style.fontSize="12px",i.style.fontWeight="bold",i.style.textShadow="0 0 3px #000",e.appendChild(i),this.healthBar=t,this.healthText=i}createManaBar(){const e=document.createElement("div");e.classList.add("mana-bar-outer"),e.style.position="absolute",e.style.left="20px",e.style.bottom="50px",e.style.width="230px",e.style.height="22px",e.style.backgroundColor="rgba(0,0,0,0.6)",e.style.padding="3px",e.style.borderRadius="6px",e.style.boxShadow="0 2px 4px rgba(0,0,0,0.5), inset 0 1px 3px rgba(0,0,0,0.5)",e.style.border="1px solid #444",document.body.appendChild(e);const t=document.createElement("div");t.classList.add("mana-bar"),t.style.width="100%",t.style.height="100%",t.style.backgroundColor="#3498db",t.style.background="linear-gradient(to right, #2980b9, #3498db)",t.style.borderRadius="4px",t.style.boxShadow="inset 0 0 5px rgba(0,0,0,0.3)",t.style.transition="width 0.3s ease-out",e.appendChild(t);const i=document.createElement("div");i.classList.add("mana-text"),i.style.position="absolute",i.style.left="0",i.style.top="0",i.style.width="100%",i.style.height="100%",i.style.display="flex",i.style.alignItems="center",i.style.justifyContent="center",i.style.color="white",i.style.fontSize="12px",i.style.fontWeight="bold",i.style.textShadow="0 0 3px #000",e.appendChild(i),this.manaBar=t,this.manaText=i}updateMana(e,t){if(!this.manaBar||!this.manaText)return;const i=Math.max(0,e/t);this.manaBar.style.width=`${i*100}%`,this.manaText.textContent=`${Math.floor(e)} / ${Math.floor(t)}`,i<.3?this.manaBar.style.background="linear-gradient(to right, #1a5276, #2980b9)":this.manaBar.style.background="linear-gradient(to right, #2980b9, #3498db)"}showDeathModal(e){this.deathModal&&this.deathModal.parentNode&&this.deathModal.parentNode.removeChild(this.deathModal),this.deathModal=document.createElement("div"),this.deathModal.id="death-modal",this.deathModal.style.position="fixed",this.deathModal.style.left="0",this.deathModal.style.top="0",this.deathModal.style.width="100vw",this.deathModal.style.height="100vh",this.deathModal.style.background="rgba(20, 10, 30, 0.92)",this.deathModal.style.display="flex",this.deathModal.style.flexDirection="column",this.deathModal.style.alignItems="center",this.deathModal.style.justifyContent="center",this.deathModal.style.zIndex="9999",this.deathModal.style.fontFamily="Segoe UI, sans-serif",this.deathModal.innerHTML=`
      <div style="background: rgba(30,30,40,0.98); border-radius: 14px; box-shadow: 0 0 24px #000a; padding: 32px 28px; min-width: 260px; max-width: 92vw; text-align: center; border: 1.5px solid #444;">
        <div style="color: #ffe066; font-size: 1.6em; font-family: 'Segoe UI', serif; letter-spacing: 1px; margin-bottom: 0.5em;">
          <span style="vertical-align: middle; margin-right: 8px;">&#9760;</span>
          Você morreu
        </div>
        <div style="color: #fff; font-size: 1.1em; margin-bottom: 0.7em; display: flex; flex-direction: column; align-items: center; gap: 6px;">
          <span>
            <b style='color:#ffe066;'>Nível:</b> Perdeu <b style='color:#ffe066;'>${e.lostLevel}</b> (agora: <b>${e.newLevel}</b>)
          </span>
          <span>
            <b style='color:#ffe066;'>XP:</b> Perdeu <b style='color:#ffe066;'>${e.lostXP}</b> (agora: <b>${e.newXP}</b>)
          </span>
        </div>
        <div style="color: #ffb700; font-size: 1em; margin-bottom: 1.1em;">
          <span style="vertical-align:middle;margin-right:4px;">⚔️</span>
          <b>${e.killerName||"Desconhecido"}</b>
          <span style="color:#888; font-size:0.9em;">(${e.killerType||"desconhecido"})</span>
        </div>
        <button id="btn-respawn" style="background: linear-gradient(90deg,#ffe066,#ffb700); color: #222; font-weight: bold; font-size: 1.1em; border: none; border-radius: 8px; padding: 10px 34px; cursor: pointer; box-shadow: 0 2px 8px #0007; transition: background 0.2s;">Respawnar</button>
      </div>
    `,document.body.appendChild(this.deathModal),document.body.style.overflow="hidden";const t=this.deathModal.querySelector("#btn-respawn");t&&t.focus()}hideDeathModal(){this.deathModal&&this.deathModal.parentNode&&(this.deathModal.parentNode.removeChild(this.deathModal),this.deathModal=null),document.body.style.overflow=""}createPerformancePanel(){this.perfPanel=document.createElement("div"),this.perfPanel.id="performance-panel",this.perfPanel.style.position="fixed",this.perfPanel.style.top="8px",this.perfPanel.style.left="8px",this.perfPanel.style.background="rgba(20,20,20,0.85)",this.perfPanel.style.color="#fff",this.perfPanel.style.fontSize="13px",this.perfPanel.style.padding="8px 14px",this.perfPanel.style.borderRadius="8px",this.perfPanel.style.zIndex="4000",this.perfPanel.style.pointerEvents="none",this.perfPanel.innerHTML="FPS: --<br>FPS Média: --<br>Ping: --<br>Memória: --<br>Render: --ms<br>Monstros/UI: -- ms",document.body.appendChild(this.perfPanel),this.fps=0,this.frameCount=0,this.lastFpsTime=performance.now(),this.ping="--",this.pingStartTime=0,this.pingInterval=null,this.pingListener=null,this.channel=null,this.fpsHistory||(this.fpsHistory=[]),requestAnimationFrame(this.updatePerformancePanel.bind(this))}updatePerformancePanel(e){this.frameCount++,e-this.lastFpsTime>=1e3&&(this.fps=this.frameCount,this.frameCount=0,this.lastFpsTime=e);let t="--";window.performance&&performance.memory&&(t=(performance.memory.usedJSHeapSize/1048576).toFixed(1)+" MB");const i=window.__lastRenderTimeMs||"--",s=window.__lastUiUpdateTimeMs||"--";this.renderHistory||(this.renderHistory=[]),this.uiHistory||(this.uiHistory=[]),i!=="--"&&this.renderHistory.push(parseFloat(i)),s!=="--"&&this.uiHistory.push(parseFloat(s)),this.renderHistory.length>30&&this.renderHistory.shift(),this.uiHistory.length>30&&this.uiHistory.shift();const r=this.renderHistory.length?(this.renderHistory.reduce((_,m)=>_+m,0)/this.renderHistory.length).toFixed(2):"--",o=this.uiHistory.length?(this.uiHistory.reduce((_,m)=>_+m,0)/this.uiHistory.length).toFixed(2):"--";function a(_){return _==="--"?{text:"",color:"#fff"}:(_=parseFloat(_),_<=16?{text:"Excelente",color:"#4caf50"}:_<=25?{text:"Bom",color:"#ffe066"}:_<=33?{text:"Aceitável",color:"#ff9800"}:{text:"Ruim",color:"#f44336"})}const c=a(r),l=a(o);let h="--",u="",d="#fff";typeof this.ping=="number"&&(h=`${this.ping} ms`,this.ping<60?(u="Excelente",d="#4caf50"):this.ping<121?(u="Bom",d="#ffe066"):this.ping<201?(u="Ruim",d="#ff9800"):(u="Péssimo",d="#f44336"),h+=` <span style="color:${d}">${u}</span>`);const f=typeof window.fps=="number"?window.fps:this.fps;this.fpsHistory||(this.fpsHistory=[]),this.fpsHistory.push(f),this.fpsHistory.length>30&&this.fpsHistory.shift();const g=this.fpsHistory.length?Math.round(this.fpsHistory.reduce((_,m)=>_+m,0)/this.fpsHistory.length):"--";this.perfPanel.innerHTML=`FPS: ${f}<br>FPS Média: ${g}<br>Ping: ${h}<br>Memória: ${t}<br>Render: ${r} ms <span style="color:${c.color}">${c.text}</span><br>Monstros/UI: ${o} ms <span style="color:${l.color}">${l.text}</span>`,requestAnimationFrame(this.updatePerformancePanel.bind(this))}createSettingsButton(){this.settingsBtn=document.createElement("button"),this.settingsBtn.id="settings-btn",this.settingsBtn.innerText="⚙️",this.settingsBtn.title="Configurações",this.settingsBtn.style.position="fixed",this.settingsBtn.style.top="8px",this.settingsBtn.style.right="8px",this.settingsBtn.style.zIndex="4100",this.settingsBtn.style.background="#222",this.settingsBtn.style.color="#ffe066",this.settingsBtn.style.border="none",this.settingsBtn.style.borderRadius="50%",this.settingsBtn.style.width="40px",this.settingsBtn.style.height="40px",this.settingsBtn.style.fontSize="22px",this.settingsBtn.style.cursor="pointer",this.settingsBtn.style.boxShadow="0 2px 8px #0008",this.settingsBtn.addEventListener("click",()=>this.toggleSettingsMenu()),document.body.appendChild(this.settingsBtn),this.createSettingsMenu()}createSettingsMenu(){this.settingsMenu=document.createElement("div"),this.settingsMenu.id="settings-menu",this.settingsMenu.style.position="fixed",this.settingsMenu.style.top="60px",this.settingsMenu.style.right="16px",this.settingsMenu.style.background="rgba(30,30,30,0.98)",this.settingsMenu.style.color="#fff",this.settingsMenu.style.padding="24px 28px",this.settingsMenu.style.borderRadius="12px",this.settingsMenu.style.zIndex="4200",this.settingsMenu.style.display="none",this.settingsMenu.style.minWidth="320px",this.settingsMenu.style.boxShadow="0 4px 24px #000b",this.settingsMenu.innerHTML=`
      <h2 style="margin-top:0;font-size:20px;color:#ffe066;">Configurações</h2>
      <label><input type="checkbox" id="setting-effects"> Efeitos visuais avançados</label><br>
      <label><input type="checkbox" id="setting-lod"> Qualidade alta de modelos (LOD)</label><br>
      <label><input type="checkbox" id="setting-bars"> Barras/nome flutuante em tempo real</label><br>
      <label><input type="checkbox" id="setting-compression"> Compressão de dados</label><br>
      <label><input type="checkbox" id="setting-fpslimit"> Limitar FPS a 30</label><br>
      <button id="settings-save" style="margin-top:18px;padding:8px 18px;background:#ffe066;color:#222;border:none;border-radius:6px;font-weight:bold;cursor:pointer;">Salvar</button>
      <button id="settings-close" style="margin-top:18px;margin-left:12px;padding:8px 18px;background:#333;color:#fff;border:none;border-radius:6px;cursor:pointer;">Fechar</button>
    `,document.body.appendChild(this.settingsMenu),this.settingsMenu.querySelector("#settings-save").onclick=()=>this.saveUserSettings(),this.settingsMenu.querySelector("#settings-close").onclick=()=>this.toggleSettingsMenu(!1)}toggleSettingsMenu(e){const t=e!==void 0?e:this.settingsMenu.style.display==="none";this.settingsMenu.style.display=t?"block":"none"}loadUserSettings(){const e=JSON.parse(localStorage.getItem("pvpRpgUserSettings")||"{}");this.settingsMenu.querySelector("#setting-effects").checked=e.visualEffects!==!1,this.settingsMenu.querySelector("#setting-lod").checked=e.lod!==!1,this.settingsMenu.querySelector("#setting-bars").checked=e.bars!==!1,this.settingsMenu.querySelector("#setting-compression").checked=e.compression!==!1,this.settingsMenu.querySelector("#setting-fpslimit").checked=e.fpslimit===!0,window.__pvpRpgUserSettings=e}saveUserSettings(){const e={visualEffects:this.settingsMenu.querySelector("#setting-effects").checked,lod:this.settingsMenu.querySelector("#setting-lod").checked,bars:this.settingsMenu.querySelector("#setting-bars").checked,compression:this.settingsMenu.querySelector("#setting-compression").checked,fpslimit:this.settingsMenu.querySelector("#setting-fpslimit").checked};localStorage.setItem("pvpRpgUserSettings",JSON.stringify(e)),window.__pvpRpgUserSettings=e,this.toggleSettingsMenu(!1),window.dispatchEvent(new CustomEvent("pvpRpgUserSettingsChanged",{detail:e}))}}const Er=[];function nE(n,e,t,i={}){const s=n instanceof R?n:new R(n.x,n.y,n.z),r=e instanceof R?e:new R(e.x,e.y,e.z),o=new Mt(.5,24,24),a=new ye({color:16737792,emissive:16724736,emissiveIntensity:2.2,roughness:.3,metalness:.15}),c=new oe(o,a);c.position.copy(s);const l=new yt,h=new xt({color:16755200,transparent:!0,opacity:.6});for(let m=0;m<14;m++){const p=new Mt(.12+Math.random()*.18,10,10),x=new oe(p,h.clone());x.position.set((Math.random()-.5)*1,(Math.random()-.5)*1,(Math.random()-.5)*1),l.add(x)}c.add(l),t.add(c);const u=new Bf(16737792,2.2,8);c.add(u);const d=new R().subVectors(r,s).normalize(),f=i.speed||Ve.FIREBALL.SPEED||18,g=i.maxDist||Ve.FIREBALL.RANGE||40,_={mesh:c,dir:d,speed:f,start:performance.now(),maxDist:g,origin:s.clone(),type:"fireball",aura:l,target:r.clone(),exploded:!1};return Er.push(_),_}function iE(n,e){const t=new Mt(.6,20,20),i=new ye({color:16759603,emissive:16737792,emissiveIntensity:3.5,transparent:!0,opacity:.85,roughness:.2}),s=new oe(t,i);s.position.copy(n),e.add(s);const r=performance.now(),o=420;function a(){const c=performance.now(),l=Math.min((c-r)/o,1);s.scale.setScalar(1+l*2.2),i.opacity=.85*(1-l),l<1?requestAnimationFrame(a):(e.remove(s),t.dispose(),i.dispose())}a()}function sE(n,e){const t=new yt;for(let s=0;s<7;s++){let h=function(){const u=performance.now(),d=Math.min((u-c)/l,1);a.scale.setScalar(1+d*1.2),o.opacity=(.38+Math.random()*.18)*(1-d),d<1?requestAnimationFrame(h):(t.remove(a),r.dispose(),o.dispose())};var i=h;const r=new Mt(.18+Math.random()*.22,8,8),o=new ye({color:4473924,transparent:!0,opacity:.38+Math.random()*.18,roughness:1}),a=new oe(r,o);a.position.copy(n),a.position.x+=(Math.random()-.5)*.7,a.position.y+=Math.random()*.5,a.position.z+=(Math.random()-.5)*.7,t.add(a);const c=performance.now(),l=900+Math.random()*400;h()}e.add(t),setTimeout(()=>e.remove(t),1500)}function td(n,e){for(let t=Er.length-1;t>=0;t--){const i=Er[t];if(i.type==="fireball"){i.mesh.position.addScaledVector(i.dir,i.speed*n),i.mesh.rotation.y+=n*5,i.mesh.rotation.x+=n*3;for(let s=0;s<i.aura.children.length;s++)i.aura.children[s].scale.setScalar(.9+Math.sin(performance.now()*.005+s)*.1);if(!i.exploded&&i.mesh.position.distanceTo(i.target)<.7){i.exploded=!0,iE(i.mesh.position,e),sE(i.mesh.position,e),e.remove(i.mesh),Er.splice(t,1);continue}i.mesh.position.distanceTo(i.origin)>i.maxDist&&(e.remove(i.mesh),Er.splice(t,1))}}}const gl=[],tc=[];function rE(n,e,t,i=null,s={}){n instanceof R||new R(n.x,n.y,n.z);const r=e instanceof R?e:new R(e.x,e.y,e.z),o=s.radius||Ve.FROST_SPIKES.AREA_RADIUS||5,a=new cs(o,32),c=new xt({color:6737151,transparent:!0,opacity:.3}),l=new oe(a,c);l.position.set(r.x,.1,r.z),l.rotation.x=-Math.PI/2,t.add(l),oE(r,o,t);const h=s.delay||Ve.FROST_SPIKES.DELAY||1e3,u=s.spikeCount||12;return setTimeout(()=>{t.getObjectById(l.id)&&(t.remove(l),c.dispose(),a.dispose())},h+500),setTimeout(()=>{aE(r,o,u,t)},h),{success:!0,areaMesh:l,delay:h}}function oE(n,e,t){const i=new ye({color:11197951,emissive:3381759,emissiveIntensity:.3,transparent:!0,opacity:.7,roughness:.2,metalness:.8}),s=Math.floor(15+Math.random()*15),r=new yt;for(let l=0;l<s;l++){const h=Math.random()*Math.PI*2,u=Math.random()*e*.9,d=n.x+Math.cos(h)*u,f=n.z+Math.sin(h)*u,g=.1+Math.random()*.3;let _;switch(Math.floor(Math.random()*4)){case 0:_=new Kn(g*.5,g,6);break;case 1:_=new Ac(g*.6);break;case 2:_=new tr(g*.7);break;default:_=new $t(g*.6,g,g*.6)}const p=new oe(_,i.clone());p.position.set(d,.02,f),p.rotation.y=Math.random()*Math.PI*2,p.rotation.x=Math.random()*.2,p.rotation.z=Math.random()*.2,r.add(p)}t.add(r);const o=4e3,a=Date.now();function c(){const l=Date.now()-a,h=Math.min(l/o,1);if(h<1){if(h>.5){const u=(h-.5)*2;r.children.forEach(d=>{d.material.opacity=.7*(1-u)})}requestAnimationFrame(c)}else t.remove(r),r.children.forEach(u=>{u.geometry.dispose(),u.material.dispose()})}tc.push({group:r,animate:c,type:"ice_crystals"}),c()}function aE(n,e,t,i){const s=new ye({color:10079487,emissive:3381759,emissiveIntensity:.5,transparent:!0,opacity:.8,roughness:.3,metalness:.7}),r=new yt,o=3,a=Math.ceil(t/o),c=80;let l=0;function h(d){hE(n,e*(.7+.1*d),i),pE(n,10+Math.floor(Math.random()*6),i);for(let f=0;f<a&&l<t;f++,l++){const g=Math.random()*Math.PI*2,m=Math.pow(Math.random(),.7)*e*.95,p=n.x+Math.cos(g)*m,x=n.z+Math.sin(g)*m,y=1.5+Math.random()*1.5,v=.2+Math.random()*.3,E=new yt,A=new oe(new Kn(v,y,8),s.clone());A.position.y=y/2,E.add(A);const w=2+Math.floor(Math.random()*3);for(let L=0;L<w;L++){const M=v*(.4+Math.random()*.3),b=y*(.2+Math.random()*.3);let I;Math.random()>.5?I=new Kn(M,b,6):I=new tr(M);const O=new oe(I,s.clone()),j=Math.random()*Math.PI*2,P=v*.8;O.position.x=Math.cos(j)*P,O.position.z=Math.sin(j)*P,O.position.y=b/3,O.rotation.x=(Math.random()-.5)*.3,O.rotation.y=Math.random()*Math.PI*2,O.rotation.z=(Math.random()-.5)*.3,E.add(O)}E.position.set(p,-y,x),r.add(E),lE(E),setTimeout(()=>{mE(new R(p,.2,x),i)},220+Math.random()*120)}d+1<o&&setTimeout(()=>h(d+1),c)}h(0),i.add(r),setTimeout(()=>{cE(r,i)},3e3),dE(n,e,i)}function lE(n,e){const t=n.position.y,i=0,s=300+Math.random()*200,r=Date.now();function o(){const a=Date.now()-r,c=Math.min(a/s,1);if(c<1){const l=1-Math.pow(1-c,3);n.position.y=t+(i-t)*l,requestAnimationFrame(o)}else n.position.y=i}o()}function cE(n,e,t){const s=Date.now();function r(){const o=Date.now()-s,a=Math.min(o/1e3,1);a<1?(n.children.forEach((c,l)=>{const h=Math.min(a*(1+l*.05),1),u=h*h,d=0,f=-2-Math.random();c.position.y=d+(f-d)*u,c.children.forEach(g=>{g.material&&(g.material.opacity=.8*(1-u))})}),requestAnimationFrame(r)):(e.remove(n),n.children.forEach(c=>{c.children.forEach(l=>{l.geometry&&l.geometry.dispose(),l.material&&l.material.dispose()})}))}r()}function hE(n,e,t){const i=new er(e*.7,e,48),s=new xt({color:10084607,transparent:!0,opacity:.45,side:Ht,depthWrite:!1}),r=new oe(i,s);r.position.set(n.x,.11,n.z),r.rotation.x=-Math.PI/2,t.add(r);const o=performance.now(),a=320;function c(){const l=performance.now(),h=Math.min((l-o)/a,1);r.scale.setScalar(1+h*1.7),s.opacity=.45*(1-h),h<1?requestAnimationFrame(c):(t.remove(r),i.dispose(),s.dispose())}c()}function uE(n,e,t){const i=new yt;for(let r=0;r<e;r++){let g=function(){const _=performance.now(),m=Math.min((_-l)/h,1);c.position.y=u+m*(.7+Math.random()*.3),c.position.x+=d*.01,c.position.z+=f*.01,a.opacity=(.7+Math.random()*.2)*(1-m),m<1?requestAnimationFrame(g):(i.remove(c),o.dispose(),a.dispose())};var s=g;const o=new Mt(.06+Math.random()*.04,6,6),a=new ye({color:13430527,emissive:10079487,emissiveIntensity:.7,transparent:!0,opacity:.7+Math.random()*.2,roughness:.4}),c=new oe(o,a);c.position.copy(n),c.position.x+=(Math.random()-.5)*1.2,c.position.y+=.1+Math.random()*.2,c.position.z+=(Math.random()-.5)*1.2,i.add(c);const l=performance.now(),h=420+Math.random()*180,u=c.position.y,d=(Math.random()-.5)*1.2,f=(Math.random()-.5)*1.2;g()}t.add(i),setTimeout(()=>t.remove(i),900)}function dE(n,e,t){const i=new cs(e*.8,32),s=new xt({color:12316415,transparent:!0,opacity:.22,depthWrite:!1}),r=new oe(i,s);r.position.set(n.x,.12,n.z),r.rotation.x=-Math.PI/2,t.add(r);const o=performance.now(),a=700;function c(){const l=performance.now(),h=Math.min((l-o)/a,1);r.scale.setScalar(1+h*1.2),s.opacity=.22*(1-h),h<1?requestAnimationFrame(c):(t.remove(r),i.dispose(),s.dispose())}c()}function nd(n,e){for(let t=gl.length-1;t>=0;t--){const i=gl[t];i.type==="ice_spike"&&(i.mesh.position.addScaledVector(i.dir,i.speed*n),i.mesh.position.distanceTo(i.origin)>i.maxDist&&(e.remove(i.mesh),gl.splice(t,1)))}for(let t=tc.length-1;t>=0;t--){const i=tc[t];typeof i.animate=="function"&&i.animate()}}function fE(n,e,t=900){if(!n)return;const i=new xt({color:10079487,transparent:!0,opacity:.55,depthWrite:!1}),s=Array.isArray(n.material)?n.material.slice():[n.material];n.material=[...s,i];const r=n.position.clone();uE(r,8,e),setTimeout(()=>{n.material&&Array.isArray(n.material)&&(n.material=s)},t)}function pE(n,e,t){const i=new yt;for(let r=0;r<e;r++){let g=function(){const _=performance.now(),m=Math.min((_-l)/h,1);c.position.y=u+m*(.9+Math.random()*.4),c.position.x+=d*.012,c.position.z+=f*.012,a.opacity=.85*(1-m),m<1?requestAnimationFrame(g):(i.remove(c),o.dispose(),a.dispose())};var s=g;const o=new Mt(.07+Math.random()*.05,6,6),a=new ye({color:14743295,emissive:10079487,emissiveIntensity:1.5,transparent:!0,opacity:.85,roughness:.2,blending:Un}),c=new oe(o,a);c.position.copy(n),c.position.x+=(Math.random()-.5)*1.2,c.position.y+=.1+Math.random()*.2,c.position.z+=(Math.random()-.5)*1.2,i.add(c);const l=performance.now(),h=420+Math.random()*180,u=c.position.y,d=(Math.random()-.5)*1.2,f=(Math.random()-.5)*1.2;g()}t.add(i),setTimeout(()=>t.remove(i),900)}function mE(n,e){const t=new yt,i=3+Math.floor(Math.random()*3);for(let r=0;r<i;r++){let f=function(){const g=performance.now(),_=Math.min((g-l)/h,1);c.position.y=u+(d-u)*_,a.opacity=.8*(1-_),_<1?requestAnimationFrame(f):(t.remove(c),o.dispose(),a.dispose())};var s=f;const o=new tr(.08+Math.random()*.05),a=new ye({color:13430527,emissive:10079487,emissiveIntensity:.7,transparent:!0,opacity:.8,roughness:.4}),c=new oe(o,a);c.position.copy(n),c.position.x+=(Math.random()-.5)*.3,c.position.z+=(Math.random()-.5)*.3,c.position.y+=.2+Math.random()*.1,t.add(c);const l=performance.now(),h=420+Math.random()*180,u=c.position.y,d=u-(.5+Math.random()*.2);f()}e.add(t),setTimeout(()=>e.remove(t),900)}function gE(n,e,t,i=null,s={}){const r=n instanceof R?n:new R(n.x,n.y,n.z),o=e instanceof R?e:new R(e.x,e.y,e.z);function a(f){const g=new er(.2,1.1,48),_=new ye({color:16769126,emissive:16766720,emissiveIntensity:2.5,side:Ht,transparent:!0,opacity:.7}),m=new oe(g,_);m.position.copy(f),m.position.y+=.1,m.rotation.x=-Math.PI/2,t.add(m);const p=performance.now(),x=420;function y(){const v=performance.now(),E=Math.min((v-p)/x,1);m.scale.setScalar(1+E*2.5),_.opacity=.7*(1-E),E<1?requestAnimationFrame(y):(t.remove(m),g.dispose(),_.dispose())}y()}function c(f){const g=new Bn(.45,.7,3.5,32,1,!0),_=new ye({color:16769126,emissive:16766720,emissiveIntensity:3.5,transparent:!0,opacity:.55,roughness:.25,metalness:.2}),m=new oe(g,_);m.position.copy(f),m.position.y+=1.7,t.add(m);const p=performance.now(),x=600;function y(){const v=performance.now(),E=Math.min((v-p)/x,1);_.opacity=.55*(1-E),m.scale.y=1+E*.5,E<1?requestAnimationFrame(y):(t.remove(m),g.dispose(),_.dispose())}y()}function l(f){const g=new yt;for(let m=0;m<18;m++){let w=function(){const L=performance.now(),M=Math.min((L-v)/E,1);y.position.y=A+M*(.7+Math.random()*.5),x.opacity=(.7+Math.random()*.2)*(1-M),M<1?requestAnimationFrame(w):(g.remove(y),p.dispose(),x.dispose())};var _=w;const p=new Mt(.07+Math.random()*.07,8,8),x=new ye({color:16769126,emissive:16766720,emissiveIntensity:1.5,transparent:!0,opacity:.7+Math.random()*.2,roughness:.5}),y=new oe(p,x);y.position.copy(f),y.position.x+=(Math.random()-.5)*.7,y.position.y+=Math.random()*.2,y.position.z+=(Math.random()-.5)*.7,g.add(y);const v=performance.now(),E=700+Math.random()*300,A=y.position.y;w()}t.add(g),setTimeout(()=>t.remove(g),1200)}function h(){const f=new va({color:s.lineColor||16769126,transparent:!0,opacity:.5});for(let g=0;g<6;g++){const m=new yv(r.clone().add(new R(Math.random()*.6-.3,.5,Math.random()*.6-.3)),new R((r.x+o.x)/2+(Math.random()*4-2),Math.random()*3+2,(r.z+o.z)/2+(Math.random()*4-2)),o.clone().add(new R(Math.random()*.6-.3,.5,Math.random()*.6-.3))).getPoints(20),p=new Tt().setFromPoints(m),x=new Kr(p,f.clone());t.add(x),setTimeout(()=>t.remove(x),(s.duration||500)*.8)}}function u(f){const _=new Tt,m=new Zr({color:s.particleColor||13408767,size:.2,transparent:!0,opacity:.8,blending:Un}),p=[];for(let y=0;y<20;y++)p.push(f.x+(Math.random()*2-1),f.y+Math.random()*2,f.z+(Math.random()*2-1));_.setAttribute("position",new ut(p,3));const x=new Ma(_,m);t.add(x),setTimeout(()=>t.remove(x),s.duration||500)}function d(f,g=!0,_){if(!f||!f.material)return _&&_();const m=Array.isArray(f.material)?f.material:[f.material],p=performance.now(),x=120;function y(){const v=performance.now(),E=Math.min((v-p)/x,1);m.forEach(A=>{A.transparent=!0,A.opacity=g?1-E:E}),E<1?requestAnimationFrame(y):(g||m.forEach(A=>{A.opacity=1}),_&&_())}y()}a(r),c(r),l(r),u(r),h(),i?d(i,!0,()=>{setTimeout(()=>{i.position.copy(o),a(o),c(o),l(o),u(o),d(i,!1)},60)}):setTimeout(()=>{a(o),c(o),l(o),u(o)},60)}function _E(n,e,t,i={}){n instanceof R||new R(n.x,n.y,n.z);const s=e instanceof R?e:new R(e.x,e.y,e.z),r=i.radius||Ve.METEOR_STORM.AREA_RADIUS||6,o=new cs(r,32),a=new xt({color:16737792,transparent:!0,opacity:.3}),c=new oe(o,a);c.position.set(s.x,.1,s.z),c.rotation.x=-Math.PI/2,t.add(c);const l=i.duration||Ve.METEOR_STORM.DURATION||5e3,h=i.meteorCount||Ve.METEOR_STORM.METEORS||10,u=i.meteorInterval||Ve.METEOR_STORM.METEOR_INTERVAL||500;xE(s,r,t,h,u);const d=new yt,f=32;for(let _=0;_<f;_++){let I=function(){const O=performance.now(),j=Math.min((O-M)/b,1);x.position.y=E+(A-E)*j,x.position.x+=w*.01,x.position.z+=L*.01,p.opacity=(.22+Math.random()*.13)*(1-j),j<1?requestAnimationFrame(I):(d.remove(x),m.dispose(),p.dispose())};var g=I;const m=new Mt(.07+Math.random()*.04,6,6),p=new ye({color:2236962,emissive:1118481,emissiveIntensity:.2,transparent:!0,opacity:.22+Math.random()*.13,roughness:.8}),x=new oe(m,p),y=Math.random()*Math.PI*2,v=Math.random()*r*.95;x.position.set(e.x+Math.cos(y)*v,3.5+Math.random()*2.5,e.z+Math.sin(y)*v),d.add(x);const E=x.position.y,A=.1+Math.random()*.2,w=(Math.random()-.5)*.2,L=(Math.random()-.5)*.2,M=performance.now(),b=l*(.7+Math.random()*.4);I()}return t.add(d),setTimeout(()=>{t.remove(d),d.children.forEach(_=>{_.geometry.dispose(),_.material.dispose()})},l+500),setTimeout(()=>{t.getObjectById(c.id)&&(t.remove(c),a.dispose(),o.dispose())},l),{success:!0,areaMesh:c,duration:l}}function xE(n,e,t,i,s){let r=0;const o=()=>{if(r>=i)return;const a=Math.random()*Math.PI*2,c=Math.random()*e*.9,l=n.x+Math.cos(a)*c,h=n.z+Math.sin(a)*c;yE(new R(l,15,h),new R(l,0,h),t),r++,r<i&&setTimeout(o,s)};o()}function yE(n,e,t){const i=new Mt(.4,8,8),s=new ye({color:16729088,emissive:16720384,emissiveIntensity:1,roughness:.7}),r=i.attributes.position;for(let p=0;p<r.count;p++){const x=r.getX(p),y=r.getY(p),v=r.getZ(p);r.setX(p,x+(Math.random()-.5)*.1),r.setY(p,y+(Math.random()-.5)*.1),r.setZ(p,v+(Math.random()-.5)*.1)}i.computeVertexNormals();const o=new oe(i,s);o.position.copy(n),t.add(o);const a=new Mt(.1,8,8),c=new xt({color:16737792,transparent:!0,opacity:.7}),l=new yt,h=6,u=[];for(let p=0;p<h;p++){const x=new oe(a,c.clone());x.material.opacity=.7-p*.1,x.scale.set(1-p*.1,1-p*.1,1-p*.1),l.add(x),u.push(x)}t.add(l),new R().subVectors(e,n).normalize();const g=(n.y-e.y)/15,_=Date.now();function m(){const x=Date.now()-_,y=Math.min(x/(g*1e3),1);if(y<1){const v=new R().lerpVectors(n,e,y);o.position.copy(v);for(let E=0;E<u.length;E++){const A=Math.max(0,y-E*.02),w=new R().lerpVectors(n,e,A);u[E].position.copy(w)}requestAnimationFrame(m)}else{vE(e,t),t.remove(o),t.remove(l),i.dispose(),s.dispose(),a.dispose();for(let v=0;v<u.length;v++)u[v].material.dispose()}}m()}function vE(n,e){const t=new er(.7,2.1,48),i=new xt({color:16752704,transparent:!0,opacity:.45,side:Ht,depthWrite:!1}),s=new oe(t,i);s.position.copy(n),s.position.y+=.12,s.rotation.x=-Math.PI/2,e.add(s);const r=performance.now(),o=220;function a(){const _=performance.now(),m=Math.min((_-r)/o,1);s.scale.setScalar(1+m*2.2),i.opacity=.45*(1-m),m<1?requestAnimationFrame(a):(e.remove(s),t.dispose(),i.dispose())}a();for(let _=0;_<18;_++){let L=function(){const M=performance.now(),b=Math.min((M-E)/A,1);y.position.x+=v.x*.012,y.position.y=w+v.y*b*.7,y.position.z+=v.z*.012,x.opacity=(m?.32:.7)*(1-b),b<1?requestAnimationFrame(L):(e.remove(y),p.dispose(),x.dispose())};var g=L;const m=Math.random()>.5,p=new Mt(m?.22:.13,6,6),x=new ye({color:m?3355443:16752704,emissive:m?2236962:16737792,emissiveIntensity:m?.2:1.2,transparent:!0,opacity:m?.32:.7,roughness:m?.8:.3,metalness:m?.1:.7});m||(x.blending=Un);const y=new oe(p,x);y.position.copy(n),y.position.y+=.2+Math.random()*.2,e.add(y);const v=new R((Math.random()-.5)*2.2,.5+Math.random()*1.2,(Math.random()-.5)*2.2),E=performance.now(),A=420+Math.random()*180,w=y.position.y;L()}for(let _=0;_<7;_++){let w=function(){const M=performance.now(),b=Math.min((M-v)/E,1);x.position.x+=y.x*.012,x.position.y=A+y.y*b*.7-1.2*b*b,x.position.z+=y.z*.012,p.opacity=.8*(1-b),b<1?requestAnimationFrame(w):(e.remove(x),m.dispose(),p.dispose())};var g=w;const m=new tr(.13+Math.random()*.07),p=new ye({color:16752704,emissive:16737792,emissiveIntensity:1.2,transparent:!0,opacity:.8,roughness:.5,metalness:.7}),x=new oe(m,p);x.position.copy(n),x.position.y+=.18+Math.random()*.12,e.add(x);const y=new R((Math.random()-.5)*1.2,.7+Math.random()*.7,(Math.random()-.5)*1.2),v=performance.now(),E=520+Math.random()*180,A=x.position.y;w()}const c=new cs(1.2+Math.random()*.7,24),l=new xt({color:2236945,transparent:!0,opacity:.32,depthWrite:!1}),h=new oe(c,l);h.position.copy(n),h.position.y+=.09,h.rotation.x=-Math.PI/2,e.add(h);const u=performance.now(),d=1800;function f(){const _=performance.now(),m=Math.min((_-u)/d,1);l.opacity=.32*(1-m),m<1?requestAnimationFrame(f):(e.remove(h),c.dispose(),l.dispose())}f()}function ME(n,e,t=1200){if(!n)return;const i=new xt({color:16729088,transparent:!0,opacity:.45,depthWrite:!1,blending:Un}),s=Array.isArray(n.material)?n.material.slice():[n.material];n.material=[...s,i];const r=n.position.clone();EE(r,e),setTimeout(()=>{n.material&&Array.isArray(n.material)&&(n.material=s)},t)}function EE(n,e){const t=new yt;for(let s=0;s<10;s++){let u=function(){const d=performance.now(),f=Math.min((d-c)/l,1);a.position.y=h+f*(.7+Math.random()*.3),o.opacity=(.7+Math.random()*.2)*(1-f),f<1?requestAnimationFrame(u):(t.remove(a),r.dispose(),o.dispose())};var i=u;const r=new Mt(.06+Math.random()*.04,6,6),o=new ye({color:16752704,emissive:16737792,emissiveIntensity:1.2,transparent:!0,opacity:.7+Math.random()*.2,roughness:.3,blending:Un}),a=new oe(r,o);a.position.copy(n),a.position.x+=(Math.random()-.5)*.5,a.position.z+=(Math.random()-.5)*.5,a.position.y+=.2+Math.random()*.2,t.add(a);const c=performance.now(),l=420+Math.random()*180,h=a.position.y;u()}e.add(t),setTimeout(()=>e.remove(t),900)}class id{constructor(e){this.scene=e,this.lastUpdate=performance.now(),this.playerCooldowns={},this.playerMana=250}update(){const e=performance.now(),t=(e-this.lastUpdate)/1e3;this.lastUpdate=e,typeof td=="function"&&td(t,this.scene),typeof nd=="function"&&nd(t,this.scene)}canUseAbility(e){const t=Date.now(),i=this.getAbilityById(e);if(!i)return console.warn(`Habilidade com ID ${e} não encontrada`),!1;if(this.playerCooldowns[e]){const s=this.playerCooldowns[e],r=Math.max(0,s-t);if(r>0){const o=(r/1e3).toFixed(1);return console.log(`Habilidade ${i.NAME} em cooldown! Tempo restante: ${o}s`),!1}}return this.playerMana<i.MANA_COST?(console.log(`Mana insuficiente para usar ${i.NAME}! Necessário: ${i.MANA_COST}, Atual: ${this.playerMana.toFixed(1)}`),!1):!0}startCooldown(e,t=Date.now()){this.playerCooldowns[e]=t}updateMana(e){this.playerMana=e}getAbilityById(e){switch(e){case 1:return Ve.FIREBALL;case 2:return Ve.TELEPORT;case 3:return Ve.FROST_SPIKES;case 4:return Ve.METEOR_STORM;default:return null}}spawnSkillEffect(e,t,i,s=null,r={}){try{const o=this.getAbilityById(e);if(!o)return console.warn(`Habilidade de ID ${e} não encontrada!`),null;switch(console.log(`Executando efeito visual da habilidade: ${o.NAME} (ID: ${e})`),e){case 1:return nE(t,i,this.scene,r);case 2:return gE(t,i,this.scene,s,r);case 3:return rE(t,i,this.scene,s,{radius:Ve.FROST_SPIKES.AREA_RADIUS,delay:Ve.FROST_SPIKES.DELAY,spikeCount:12});case 4:return _E(t,i,this.scene,r);default:return console.warn(`Implementação visual para habilidade ID ${e} não encontrada!`),null}}catch(o){return console.error(`Erro ao executar efeito da habilidade ${e}:`,o),null}}createSimpleEffect(e,t,i=16777215,s=null){const r=new Mt(.5,8,8),o=new xt({color:i,transparent:!0,opacity:.7}),a=new oe(r,o);a.position.copy(t),a.position.y+=.5,this.scene.add(a);const c=1e3,l=performance.now(),h=()=>{const d=performance.now()-l,f=Math.min(d/c,1),g=1+f*3;a.scale.set(g,g,g),a.material.opacity=.7*(1-f),f<1?requestAnimationFrame(h):(this.scene.remove(a),a.geometry.dispose(),a.material.dispose())};h()}useAbility(e){const t=this.abilitiesInSlots[e];if(!t)return console.warn(`Não há habilidade no slot ${e+1}`),!1;const i=this.abilitiesConfig.find(r=>r.id===t);if(!i)return console.warn(`Configuração não encontrada para habilidade ID ${t}`),!1;if(this.cooldowns[e]>0)return console.log(`Habilidade ${i.name} ainda está em cooldown: ${this.cooldowns[e].toFixed(1)}s`),!1;const s=this.playerManager.getCurrentStats();if(s.mana<i.mana)return console.log(`Mana insuficiente para usar ${i.name}. Necessário: ${i.mana}, Atual: ${s.mana.toFixed(1)}`),!1;this.socket.emit(EVENTS.PLAYER.USE_ABILITY,{abilityId:t,targetPosition:this.getMouseTargetPosition(),currentPosition:this.playerManager.getPlayerPosition()})}getWhyCannotUse(e){const t=Date.now(),i=this.getAbilityById(e);if(!i)return"Habilidade inválida";if(this.playerCooldowns[e]){const s=this.playerCooldowns[e],r=Math.max(0,s-t);if(r>0)return`Em cooldown: ${(r/1e3).toFixed(1)}s`}return this.playerMana<i.MANA_COST?`Mana insuficiente (${this.playerMana.toFixed(0)}/${i.MANA_COST})`:"Pronto para usar"}}class bE{constructor(e,t){this.scene=e,this.camera=t,this.texts=[],this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.canvas.width=384,this.canvas.height=192,this.lastUpdate=performance.now(),this.lastMessageTimestamps=new Map}createFloatingText(e){const{text:t="",position:i={x:0,y:2,z:0},color:s,size:r=1,duration:o=2e3,fadeOut:a=!0,type:c="default",index:l=0}=e;if(c!=="damage"&&c!=="heal")return null;let h=120;t.length>12&&(h=90),t.length>20&&(h=60),h<60&&(h=60);const u=Math.min(r,4);let d="#ffffff";switch(c){case"damage":d="#ff4444";break;case"heal":d="#44ff44";break;case"xp":d="#ffe066";break;case"cooldown":d="#ffaa00";break;case"mana":d="#44caff";break;case"error":d="#ff2222";break;default:s&&(d=s)}const g=document.createElement("canvas").getContext("2d");g.font=`bold ${h}px Arial`;let _=g.measureText(t).width,m=40,p=Math.max(384,_+m),x=192;if(p>1024)for(p=1024;_+m>1024&&h>40;)h-=4,g.font=`bold ${h}px Arial`,_=g.measureText(t).width;this.canvas.width=p,this.canvas.height=x,this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.font=`bold ${h}px Arial`,this.context.fillStyle=d,this.context.strokeStyle="#000000",this.context.lineWidth=6,this.context.textAlign="center",this.context.textBaseline="middle",this.context.shadowColor="#000",this.context.shadowBlur=8,this.context.strokeText(t,this.canvas.width/2,this.canvas.height/2),this.context.fillText(t,this.canvas.width/2,this.canvas.height/2),this.context.shadowBlur=0;const y=new Ou(this.canvas);y.needsUpdate=!0;const v=new Pf({map:y,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1}),E=new ov(v),A=5,w=2.5,L=p/384*A*u,M=x/192*w*u;E.scale.set(L,M,1);const b=l*1.1,I=i.y!==void 0?Math.min(i.y+1+b,8):2+b;E.position.set(i.x,I,i.z),this.scene.add(E);const O={sprite:E,createdAt:performance.now(),duration:o,fadeOut:a,velocity:{y:.003},distanceScale:!0,baseScale:u,type:c,textKey:c,count:1,displayText:t};return this.texts.push(O),O}_redrawFloatingText(e){let t=120;e.displayText.length>12&&(t=90),e.displayText.length>20&&(t=60),t<60&&(t=60);const s=document.createElement("canvas").getContext("2d");s.font=`bold ${t}px Arial`;let r=s.measureText(e.displayText).width,o=40,a=Math.max(384,r+o),c=192;if(a>1024)for(a=1024;r+o>1024&&t>40;)t-=4,s.font=`bold ${t}px Arial`,r=s.measureText(e.displayText).width;this.canvas.width=a,this.canvas.height=c,this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.font=`bold ${t}px Arial`,this.context.fillStyle="#ff2222",this.context.strokeStyle="#000000",this.context.lineWidth=6,this.context.textAlign="center",this.context.textBaseline="middle",this.context.shadowColor="#000",this.context.shadowBlur=8,this.context.strokeText(e.displayText,this.canvas.width/2,this.canvas.height/2),this.context.fillText(e.displayText,this.canvas.width/2,this.canvas.height/2),this.context.shadowBlur=0,e.sprite.material.map=new Ou(this.canvas),e.sprite.material.map.needsUpdate=!0}update(){const e=performance.now(),t=e-this.lastUpdate;this.lastUpdate=e;for(let i=this.texts.length-1;i>=0;i--){const s=this.texts[i],r=e-s.createdAt;if(r>s.duration){this.scene.remove(s.sprite),s.sprite.material.dispose(),s.sprite.material.map.dispose(),this.texts.splice(i,1),this.lastMessageTimestamps.has(s.textKey)&&this.lastMessageTimestamps.delete(s.textKey);continue}if(s.sprite.position.y+=s.velocity.y*t,s.fadeOut){const o=s.duration*.5;if(r>o){const a=1-(r-o)/(s.duration-o);s.sprite.material.opacity=Math.max(0,a)}}}}clear(){for(const e of this.texts)this.scene.remove(e.sprite),e.sprite.material.dispose(),e.sprite.material.map&&e.sprite.material.map.dispose();this.texts=[]}}const qf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class to{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const SE=new Yr(-1,1,1,-1,0,1);class wE extends Tt{constructor(){super(),this.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ut([0,2,0,0,2,0],2))}}const TE=new wE;class Yf{constructor(e){this._mesh=new oe(TE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,SE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class nc extends to{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof an?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=sa.clone(e.uniforms),this.material=new an({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Yf(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class sd extends to{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class AE extends to{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class RE{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new fe);this._width=i.width,this._height=i.height,t=new Fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_i}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new nc(qf),this.copyPass.material.blending=mi,this.clock=new kv}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}sd!==void 0&&(o instanceof sd?i=!0:o instanceof AE&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class CE extends to{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ge}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const LE={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ge(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ys extends to{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new fe(e.x,e.y):new fe(256,256),this.clearColor=new ge(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Fn(r,o,{type:_i}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Fn(r,o,{type:_i});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Fn(r,o,{type:_i});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=LE;this.highPassUniforms=sa.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new an({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new fe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=qf;this.copyUniforms=sa.clone(h.uniforms),this.blendMaterial=new an({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Un,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ge,this.oldClearAlpha=1,this.basic=new xt,this.fsQuad=new Yf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new fe(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Ys.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Ys.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new an({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new fe(.5,.5)},direction:{value:new fe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new an({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ys.BlurDirectionX=new fe(1,0);Ys.BlurDirectionY=new fe(0,1);const PE={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new fe(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`},DE={name:"ColorCorrectionShader",uniforms:{tDiffuse:{value:null},powRGB:{value:new R(2,2,2)},mulRGB:{value:new R(1,1,1)},addRGB:{value:new R(0,0,0)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 powRGB;
		uniform vec3 mulRGB;
		uniform vec3 addRGB;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.rgb = mulRGB * pow( ( gl_FragColor.rgb + addRGB ), powRGB );

		}`};function IE(n,e,t){if(!n||!e||!t)return;const i=n.position||n,s=e.position||e,r=new va({color:16777215,opacity:.8,transparent:!0,linewidth:2}),o=[new R(i.x,i.y+.4,i.z),new R(s.x,s.y+.7,s.z)],a=new Tt().setFromPoints(o),c=new Kr(a,r);t.add(c);const l=new Tt,h=15,u=new Float32Array(h*3);for(let g=0;g<h*3;g+=3)u[g]=s.x+(Math.random()-.5)*.5,u[g+1]=s.y+.5+(Math.random()-.5)*.5,u[g+2]=s.z+(Math.random()-.5)*.5;l.setAttribute("position",new jt(u,3));const d=new Zr({color:16777215,size:.05,transparent:!0,opacity:.8}),f=new Ma(l,d);if(t.add(f),e.userData&&e.userData.type==="player"){const g=e,_=Array.isArray(g.material)?[...g.material]:g.material;Array.isArray(g.material)?g.material.forEach(m=>{m.emissive=new ge(35071),m.emissiveIntensity=.2}):g.material&&(g.material.emissive=new ge(35071),g.material.emissiveIntensity=.2),setTimeout(()=>{Array.isArray(g.material)&&Array.isArray(_)?g.material.forEach((m,p)=>{_[p]&&(m.emissive=_[p].emissive||new ge(0),m.emissiveIntensity=_[p].emissiveIntensity||0)}):g.material&&_&&(g.material.emissive=_.emissive||new ge(0),g.material.emissiveIntensity=_.emissiveIntensity||0)},3e3)}setTimeout(()=>{t.remove(c),t.remove(f),a.dispose(),r.dispose(),l.dispose(),d.dispose()},1e3)}function NE(n,e,t){if(!n||!e||!t)return;const i=e instanceof R?e.clone():new R(e.x||0,e.y||.5,e.z||0),s=n.position.clone(),r=s.distanceTo(i),o=Math.max(2.5,r*.35),a=new R((s.x+i.x)/2,Math.max(s.y,i.y)+o,(s.z+i.z)/2),c=new xt({color:2236996,transparent:!0,opacity:.35,blending:Un}),l=new Mt(.5,8,8),h=new oe(l,c);h.visible=!1,t.add(h);let u=0;const d=Math.max(.5,r*.07);function f(_,m){const p=new er(.2,2.2,32),x=new xt({color:11141375,transparent:!0,opacity:.7,side:Ht,blending:Un}),y=new oe(p,x);y.position.set(m.x,.06,m.z),y.rotation.x=-Math.PI/2,_.add(y);const v=32,E=new Tt,A=new Float32Array(v*3),w=[];for(let j=0;j<v;j++){const P=j*3;A[P]=m.x,A[P+1]=.2,A[P+2]=m.z;const k=Math.random()*Math.PI*2,$=.08+Math.random()*.12;w.push({x:Math.cos(k)*$,y:.04+Math.random()*.04,z:Math.sin(k)*$,gravity:.003+Math.random()*.004})}E.setAttribute("position",new jt(A,3));const L=new Zr({color:11141375,size:.18,transparent:!0,opacity:.85,blending:Un}),M=new Ma(E,L);_.add(M);let b=0;const I=1.2;function O(){b+=.016,y.scale.set(1+b*2.5,1+b*2.5,1),y.material.opacity=.7*(1-b/I);const j=M.geometry.attributes.position.array;for(let P=0;P<v;P++){const k=P*3,$=w[P];j[k]+=$.x,j[k+1]+=$.y,j[k+2]+=$.z,$.y-=$.gravity}M.geometry.attributes.position.needsUpdate=!0,M.material.opacity=.85*(1-b/I),b<I?requestAnimationFrame(O):(_.remove(y),_.remove(M))}requestAnimationFrame(O)}function g(){u+=.016;const _=Math.min(u/d,1);let m=new R;if(_<.5){const x=_*2;m.lerpVectors(s,a,x)}else{const x=(_-.5)*2;m.lerpVectors(a,i,x)}n.position.copy(m),_>.1&&_<.95?(h.visible=!0,h.position.copy(m),h.scale.set(1+_*1.5,.5+_,1+_*1.5),h.material.opacity=.25+.25*Math.sin(_*Math.PI)):h.visible=!1;const p=new R().subVectors(i,m).normalize();if(p.length()>.01){const x=Math.atan2(p.z,p.x);n.rotation.y=x}_<1?requestAnimationFrame(g):(n.position.copy(i),h.visible=!1,t.remove(h),f(t,i))}requestAnimationFrame(g)}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class jn{constructor(e,t,i,s,r="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),jn.nextNameID=jn.nextNameID||0,this.$name.id=`lil-gui-name-${++jn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class UE extends jn{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ic(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const OE={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:ic,toHexString:ic},Br={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},FE={isPrimitive:!1,match:n=>Array.isArray(n),fromHexString(n,e,t=1){const i=Br.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;const s=n*i<<16^e*i<<8^t*i<<0;return Br.toHexString(s)}},BE={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const i=Br.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;const s=n*i<<16^e*i<<8^t*i<<0;return Br.toHexString(s)}},zE=[OE,Br,FE,BE];function kE(n){return zE.find(e=>e.match(n))}class HE extends jn{constructor(e,t,i,s){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=kE(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=ic(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class _l extends jn{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class GE extends jn{constructor(e,t,i,s,r,o){super(e,t,i,"number"),this._initInput(),this.min(s),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},i=x=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+x),this.$input.value=this.getValue())},s=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),i(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),i(this._step*this._arrowKeyMultiplier(x)*-1))},r=x=>{this._inputFocused&&(x.preventDefault(),i(this._step*this._normalizeMouseWheel(x)))};let o=!1,a,c,l,h,u;const d=5,f=x=>{a=x.clientX,c=l=x.clientY,o=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=x=>{if(o){const y=x.clientX-a,v=x.clientY-c;Math.abs(v)>d?(x.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>d&&_()}if(!o){const y=x.clientY-l;u-=y*this._step*this._arrowKeyMultiplier(x),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}l=x.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(p,x,y,v,E)=>(p-x)/(y-x)*(E-v)+v,t=p=>{const x=this.$slider.getBoundingClientRect();let y=e(p,x.left,x.right,this._min,this._max);this._snapClampSetValue(y)},i=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=p=>{t(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let o=!1,a,c;const l=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),o=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,c=p.touches[0].clientY,o=!0):l(p),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=p=>{if(o){const x=p.touches[0].clientX-a,y=p.touches[0].clientY-c;Math.abs(x)>Math.abs(y)?l(p):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else p.preventDefault(),t(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),g=400;let _;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const y=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(f,g)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class VE extends jn{constructor(e,t,i,s){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class WE extends jn{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var XE=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function $E(n){const e=document.createElement("style");e.innerHTML=n;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let rd=!1;class Ic{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:c=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),c&&this.domElement.classList.add("allow-touch-styles"),!rd&&a&&($E(XE),rd=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(e,t,i,s,r){if(Object(i)===i)return new VE(this,e,t,i);const o=e[t];switch(typeof o){case"number":return new GE(this,e,t,i,s,r);case"boolean":return new UE(this,e,t);case"string":return new WE(this,e,t);case"function":return new _l(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new HE(this,e,t,i)}addFolder(e){const t=new Ic({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof _l||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof _l)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */const jE=4,od=0,ad=1,qE=2;function rr(n){let e=n.length;for(;--e>=0;)n[e]=0}const YE=0,Kf=1,KE=2,ZE=3,JE=258,Nc=29,no=256,zr=no+1+Nc,Bs=30,Uc=19,Zf=2*zr+1,Yi=15,xl=16,QE=7,Oc=256,Jf=16,Qf=17,ep=18,sc=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),Ko=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),eb=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),tp=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),tb=512,ui=new Array((zr+2)*2);rr(ui);const Cr=new Array(Bs*2);rr(Cr);const kr=new Array(tb);rr(kr);const Hr=new Array(JE-ZE+1);rr(Hr);const Fc=new Array(Nc);rr(Fc);const oa=new Array(Bs);rr(oa);function yl(n,e,t,i,s){this.static_tree=n,this.extra_bits=e,this.extra_base=t,this.elems=i,this.max_length=s,this.has_stree=n&&n.length}let np,ip,sp;function vl(n,e){this.dyn_tree=n,this.max_code=0,this.stat_desc=e}const rp=n=>n<256?kr[n]:kr[256+(n>>>7)],Gr=(n,e)=>{n.pending_buf[n.pending++]=e&255,n.pending_buf[n.pending++]=e>>>8&255},ln=(n,e,t)=>{n.bi_valid>xl-t?(n.bi_buf|=e<<n.bi_valid&65535,Gr(n,n.bi_buf),n.bi_buf=e>>xl-n.bi_valid,n.bi_valid+=t-xl):(n.bi_buf|=e<<n.bi_valid&65535,n.bi_valid+=t)},Wn=(n,e,t)=>{ln(n,t[e*2],t[e*2+1])},op=(n,e)=>{let t=0;do t|=n&1,n>>>=1,t<<=1;while(--e>0);return t>>>1},nb=n=>{n.bi_valid===16?(Gr(n,n.bi_buf),n.bi_buf=0,n.bi_valid=0):n.bi_valid>=8&&(n.pending_buf[n.pending++]=n.bi_buf&255,n.bi_buf>>=8,n.bi_valid-=8)},ib=(n,e)=>{const t=e.dyn_tree,i=e.max_code,s=e.stat_desc.static_tree,r=e.stat_desc.has_stree,o=e.stat_desc.extra_bits,a=e.stat_desc.extra_base,c=e.stat_desc.max_length;let l,h,u,d,f,g,_=0;for(d=0;d<=Yi;d++)n.bl_count[d]=0;for(t[n.heap[n.heap_max]*2+1]=0,l=n.heap_max+1;l<Zf;l++)h=n.heap[l],d=t[t[h*2+1]*2+1]+1,d>c&&(d=c,_++),t[h*2+1]=d,!(h>i)&&(n.bl_count[d]++,f=0,h>=a&&(f=o[h-a]),g=t[h*2],n.opt_len+=g*(d+f),r&&(n.static_len+=g*(s[h*2+1]+f)));if(_!==0){do{for(d=c-1;n.bl_count[d]===0;)d--;n.bl_count[d]--,n.bl_count[d+1]+=2,n.bl_count[c]--,_-=2}while(_>0);for(d=c;d!==0;d--)for(h=n.bl_count[d];h!==0;)u=n.heap[--l],!(u>i)&&(t[u*2+1]!==d&&(n.opt_len+=(d-t[u*2+1])*t[u*2],t[u*2+1]=d),h--)}},ap=(n,e,t)=>{const i=new Array(Yi+1);let s=0,r,o;for(r=1;r<=Yi;r++)s=s+t[r-1]<<1,i[r]=s;for(o=0;o<=e;o++){let a=n[o*2+1];a!==0&&(n[o*2]=op(i[a]++,a))}},sb=()=>{let n,e,t,i,s;const r=new Array(Yi+1);for(t=0,i=0;i<Nc-1;i++)for(Fc[i]=t,n=0;n<1<<sc[i];n++)Hr[t++]=i;for(Hr[t-1]=i,s=0,i=0;i<16;i++)for(oa[i]=s,n=0;n<1<<Ko[i];n++)kr[s++]=i;for(s>>=7;i<Bs;i++)for(oa[i]=s<<7,n=0;n<1<<Ko[i]-7;n++)kr[256+s++]=i;for(e=0;e<=Yi;e++)r[e]=0;for(n=0;n<=143;)ui[n*2+1]=8,n++,r[8]++;for(;n<=255;)ui[n*2+1]=9,n++,r[9]++;for(;n<=279;)ui[n*2+1]=7,n++,r[7]++;for(;n<=287;)ui[n*2+1]=8,n++,r[8]++;for(ap(ui,zr+1,r),n=0;n<Bs;n++)Cr[n*2+1]=5,Cr[n*2]=op(n,5);np=new yl(ui,sc,no+1,zr,Yi),ip=new yl(Cr,Ko,0,Bs,Yi),sp=new yl(new Array(0),eb,0,Uc,QE)},lp=n=>{let e;for(e=0;e<zr;e++)n.dyn_ltree[e*2]=0;for(e=0;e<Bs;e++)n.dyn_dtree[e*2]=0;for(e=0;e<Uc;e++)n.bl_tree[e*2]=0;n.dyn_ltree[Oc*2]=1,n.opt_len=n.static_len=0,n.sym_next=n.matches=0},cp=n=>{n.bi_valid>8?Gr(n,n.bi_buf):n.bi_valid>0&&(n.pending_buf[n.pending++]=n.bi_buf),n.bi_buf=0,n.bi_valid=0},ld=(n,e,t,i)=>{const s=e*2,r=t*2;return n[s]<n[r]||n[s]===n[r]&&i[e]<=i[t]},Ml=(n,e,t)=>{const i=n.heap[t];let s=t<<1;for(;s<=n.heap_len&&(s<n.heap_len&&ld(e,n.heap[s+1],n.heap[s],n.depth)&&s++,!ld(e,i,n.heap[s],n.depth));)n.heap[t]=n.heap[s],t=s,s<<=1;n.heap[t]=i},cd=(n,e,t)=>{let i,s,r=0,o,a;if(n.sym_next!==0)do i=n.pending_buf[n.sym_buf+r++]&255,i+=(n.pending_buf[n.sym_buf+r++]&255)<<8,s=n.pending_buf[n.sym_buf+r++],i===0?Wn(n,s,e):(o=Hr[s],Wn(n,o+no+1,e),a=sc[o],a!==0&&(s-=Fc[o],ln(n,s,a)),i--,o=rp(i),Wn(n,o,t),a=Ko[o],a!==0&&(i-=oa[o],ln(n,i,a)));while(r<n.sym_next);Wn(n,Oc,e)},rc=(n,e)=>{const t=e.dyn_tree,i=e.stat_desc.static_tree,s=e.stat_desc.has_stree,r=e.stat_desc.elems;let o,a,c=-1,l;for(n.heap_len=0,n.heap_max=Zf,o=0;o<r;o++)t[o*2]!==0?(n.heap[++n.heap_len]=c=o,n.depth[o]=0):t[o*2+1]=0;for(;n.heap_len<2;)l=n.heap[++n.heap_len]=c<2?++c:0,t[l*2]=1,n.depth[l]=0,n.opt_len--,s&&(n.static_len-=i[l*2+1]);for(e.max_code=c,o=n.heap_len>>1;o>=1;o--)Ml(n,t,o);l=r;do o=n.heap[1],n.heap[1]=n.heap[n.heap_len--],Ml(n,t,1),a=n.heap[1],n.heap[--n.heap_max]=o,n.heap[--n.heap_max]=a,t[l*2]=t[o*2]+t[a*2],n.depth[l]=(n.depth[o]>=n.depth[a]?n.depth[o]:n.depth[a])+1,t[o*2+1]=t[a*2+1]=l,n.heap[1]=l++,Ml(n,t,1);while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],ib(n,e),ap(t,c,n.bl_count)},hd=(n,e,t)=>{let i,s=-1,r,o=e[0*2+1],a=0,c=7,l=4;for(o===0&&(c=138,l=3),e[(t+1)*2+1]=65535,i=0;i<=t;i++)r=o,o=e[(i+1)*2+1],!(++a<c&&r===o)&&(a<l?n.bl_tree[r*2]+=a:r!==0?(r!==s&&n.bl_tree[r*2]++,n.bl_tree[Jf*2]++):a<=10?n.bl_tree[Qf*2]++:n.bl_tree[ep*2]++,a=0,s=r,o===0?(c=138,l=3):r===o?(c=6,l=3):(c=7,l=4))},ud=(n,e,t)=>{let i,s=-1,r,o=e[0*2+1],a=0,c=7,l=4;for(o===0&&(c=138,l=3),i=0;i<=t;i++)if(r=o,o=e[(i+1)*2+1],!(++a<c&&r===o)){if(a<l)do Wn(n,r,n.bl_tree);while(--a!==0);else r!==0?(r!==s&&(Wn(n,r,n.bl_tree),a--),Wn(n,Jf,n.bl_tree),ln(n,a-3,2)):a<=10?(Wn(n,Qf,n.bl_tree),ln(n,a-3,3)):(Wn(n,ep,n.bl_tree),ln(n,a-11,7));a=0,s=r,o===0?(c=138,l=3):r===o?(c=6,l=3):(c=7,l=4)}},rb=n=>{let e;for(hd(n,n.dyn_ltree,n.l_desc.max_code),hd(n,n.dyn_dtree,n.d_desc.max_code),rc(n,n.bl_desc),e=Uc-1;e>=3&&n.bl_tree[tp[e]*2+1]===0;e--);return n.opt_len+=3*(e+1)+5+5+4,e},ob=(n,e,t,i)=>{let s;for(ln(n,e-257,5),ln(n,t-1,5),ln(n,i-4,4),s=0;s<i;s++)ln(n,n.bl_tree[tp[s]*2+1],3);ud(n,n.dyn_ltree,e-1),ud(n,n.dyn_dtree,t-1)},ab=n=>{let e=4093624447,t;for(t=0;t<=31;t++,e>>>=1)if(e&1&&n.dyn_ltree[t*2]!==0)return od;if(n.dyn_ltree[9*2]!==0||n.dyn_ltree[10*2]!==0||n.dyn_ltree[13*2]!==0)return ad;for(t=32;t<no;t++)if(n.dyn_ltree[t*2]!==0)return ad;return od};let dd=!1;const lb=n=>{dd||(sb(),dd=!0),n.l_desc=new vl(n.dyn_ltree,np),n.d_desc=new vl(n.dyn_dtree,ip),n.bl_desc=new vl(n.bl_tree,sp),n.bi_buf=0,n.bi_valid=0,lp(n)},hp=(n,e,t,i)=>{ln(n,(YE<<1)+(i?1:0),3),cp(n),Gr(n,t),Gr(n,~t),t&&n.pending_buf.set(n.window.subarray(e,e+t),n.pending),n.pending+=t},cb=n=>{ln(n,Kf<<1,3),Wn(n,Oc,ui),nb(n)},hb=(n,e,t,i)=>{let s,r,o=0;n.level>0?(n.strm.data_type===qE&&(n.strm.data_type=ab(n)),rc(n,n.l_desc),rc(n,n.d_desc),o=rb(n),s=n.opt_len+3+7>>>3,r=n.static_len+3+7>>>3,r<=s&&(s=r)):s=r=t+5,t+4<=s&&e!==-1?hp(n,e,t,i):n.strategy===jE||r===s?(ln(n,(Kf<<1)+(i?1:0),3),cd(n,ui,Cr)):(ln(n,(KE<<1)+(i?1:0),3),ob(n,n.l_desc.max_code+1,n.d_desc.max_code+1,o+1),cd(n,n.dyn_ltree,n.dyn_dtree)),lp(n),i&&cp(n)},ub=(n,e,t)=>(n.pending_buf[n.sym_buf+n.sym_next++]=e,n.pending_buf[n.sym_buf+n.sym_next++]=e>>8,n.pending_buf[n.sym_buf+n.sym_next++]=t,e===0?n.dyn_ltree[t*2]++:(n.matches++,e--,n.dyn_ltree[(Hr[t]+no+1)*2]++,n.dyn_dtree[rp(e)*2]++),n.sym_next===n.sym_end);var db=lb,fb=hp,pb=hb,mb=ub,gb=cb,_b={_tr_init:db,_tr_stored_block:fb,_tr_flush_block:pb,_tr_tally:mb,_tr_align:gb};const xb=(n,e,t,i)=>{let s=n&65535|0,r=n>>>16&65535|0,o=0;for(;t!==0;){o=t>2e3?2e3:t,t-=o;do s=s+e[i++]|0,r=r+s|0;while(--o);s%=65521,r%=65521}return s|r<<16|0};var Vr=xb;const yb=()=>{let n,e=[];for(var t=0;t<256;t++){n=t;for(var i=0;i<8;i++)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n}return e},vb=new Uint32Array(yb()),Mb=(n,e,t,i)=>{const s=vb,r=i+t;n^=-1;for(let o=i;o<r;o++)n=n>>>8^s[(n^e[o])&255];return n^-1};var Bt=Mb,os={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},io={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:Eb,_tr_stored_block:oc,_tr_flush_block:bb,_tr_tally:Pi,_tr_align:Sb}=_b,{Z_NO_FLUSH:Di,Z_PARTIAL_FLUSH:wb,Z_FULL_FLUSH:Tb,Z_FINISH:Tn,Z_BLOCK:fd,Z_OK:Vt,Z_STREAM_END:pd,Z_STREAM_ERROR:qn,Z_DATA_ERROR:Ab,Z_BUF_ERROR:El,Z_DEFAULT_COMPRESSION:Rb,Z_FILTERED:Cb,Z_HUFFMAN_ONLY:Vo,Z_RLE:Lb,Z_FIXED:Pb,Z_DEFAULT_STRATEGY:Db,Z_UNKNOWN:Ib,Z_DEFLATED:ba}=io,Nb=9,Ub=15,Ob=8,Fb=29,Bb=256,ac=Bb+1+Fb,zb=30,kb=19,Hb=2*ac+1,Gb=15,Ye=3,Ci=258,Yn=Ci+Ye+1,Vb=32,Ks=42,Bc=57,lc=69,cc=73,hc=91,uc=103,Ki=113,br=666,sn=1,or=2,as=3,ar=4,Wb=3,Zi=(n,e)=>(n.msg=os[e],e),md=n=>n*2-(n>4?9:0),Ai=n=>{let e=n.length;for(;--e>=0;)n[e]=0},Xb=n=>{let e,t,i,s=n.w_size;e=n.hash_size,i=e;do t=n.head[--i],n.head[i]=t>=s?t-s:0;while(--e);e=s,i=e;do t=n.prev[--i],n.prev[i]=t>=s?t-s:0;while(--e)};let $b=(n,e,t)=>(e<<n.hash_shift^t)&n.hash_mask,Ii=$b;const pn=n=>{const e=n.state;let t=e.pending;t>n.avail_out&&(t=n.avail_out),t!==0&&(n.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+t),n.next_out),n.next_out+=t,e.pending_out+=t,n.total_out+=t,n.avail_out-=t,e.pending-=t,e.pending===0&&(e.pending_out=0))},mn=(n,e)=>{bb(n,n.block_start>=0?n.block_start:-1,n.strstart-n.block_start,e),n.block_start=n.strstart,pn(n.strm)},tt=(n,e)=>{n.pending_buf[n.pending++]=e},vr=(n,e)=>{n.pending_buf[n.pending++]=e>>>8&255,n.pending_buf[n.pending++]=e&255},dc=(n,e,t,i)=>{let s=n.avail_in;return s>i&&(s=i),s===0?0:(n.avail_in-=s,e.set(n.input.subarray(n.next_in,n.next_in+s),t),n.state.wrap===1?n.adler=Vr(n.adler,e,s,t):n.state.wrap===2&&(n.adler=Bt(n.adler,e,s,t)),n.next_in+=s,n.total_in+=s,s)},up=(n,e)=>{let t=n.max_chain_length,i=n.strstart,s,r,o=n.prev_length,a=n.nice_match;const c=n.strstart>n.w_size-Yn?n.strstart-(n.w_size-Yn):0,l=n.window,h=n.w_mask,u=n.prev,d=n.strstart+Ci;let f=l[i+o-1],g=l[i+o];n.prev_length>=n.good_match&&(t>>=2),a>n.lookahead&&(a=n.lookahead);do if(s=e,!(l[s+o]!==g||l[s+o-1]!==f||l[s]!==l[i]||l[++s]!==l[i+1])){i+=2,s++;do;while(l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&i<d);if(r=Ci-(d-i),i=d-Ci,r>o){if(n.match_start=e,o=r,r>=a)break;f=l[i+o-1],g=l[i+o]}}while((e=u[e&h])>c&&--t!==0);return o<=n.lookahead?o:n.lookahead},Zs=n=>{const e=n.w_size;let t,i,s;do{if(i=n.window_size-n.lookahead-n.strstart,n.strstart>=e+(e-Yn)&&(n.window.set(n.window.subarray(e,e+e-i),0),n.match_start-=e,n.strstart-=e,n.block_start-=e,n.insert>n.strstart&&(n.insert=n.strstart),Xb(n),i+=e),n.strm.avail_in===0)break;if(t=dc(n.strm,n.window,n.strstart+n.lookahead,i),n.lookahead+=t,n.lookahead+n.insert>=Ye)for(s=n.strstart-n.insert,n.ins_h=n.window[s],n.ins_h=Ii(n,n.ins_h,n.window[s+1]);n.insert&&(n.ins_h=Ii(n,n.ins_h,n.window[s+Ye-1]),n.prev[s&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=s,s++,n.insert--,!(n.lookahead+n.insert<Ye)););}while(n.lookahead<Yn&&n.strm.avail_in!==0)},dp=(n,e)=>{let t=n.pending_buf_size-5>n.w_size?n.w_size:n.pending_buf_size-5,i,s,r,o=0,a=n.strm.avail_in;do{if(i=65535,r=n.bi_valid+42>>3,n.strm.avail_out<r||(r=n.strm.avail_out-r,s=n.strstart-n.block_start,i>s+n.strm.avail_in&&(i=s+n.strm.avail_in),i>r&&(i=r),i<t&&(i===0&&e!==Tn||e===Di||i!==s+n.strm.avail_in)))break;o=e===Tn&&i===s+n.strm.avail_in?1:0,oc(n,0,0,o),n.pending_buf[n.pending-4]=i,n.pending_buf[n.pending-3]=i>>8,n.pending_buf[n.pending-2]=~i,n.pending_buf[n.pending-1]=~i>>8,pn(n.strm),s&&(s>i&&(s=i),n.strm.output.set(n.window.subarray(n.block_start,n.block_start+s),n.strm.next_out),n.strm.next_out+=s,n.strm.avail_out-=s,n.strm.total_out+=s,n.block_start+=s,i-=s),i&&(dc(n.strm,n.strm.output,n.strm.next_out,i),n.strm.next_out+=i,n.strm.avail_out-=i,n.strm.total_out+=i)}while(o===0);return a-=n.strm.avail_in,a&&(a>=n.w_size?(n.matches=2,n.window.set(n.strm.input.subarray(n.strm.next_in-n.w_size,n.strm.next_in),0),n.strstart=n.w_size,n.insert=n.strstart):(n.window_size-n.strstart<=a&&(n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,n.insert>n.strstart&&(n.insert=n.strstart)),n.window.set(n.strm.input.subarray(n.strm.next_in-a,n.strm.next_in),n.strstart),n.strstart+=a,n.insert+=a>n.w_size-n.insert?n.w_size-n.insert:a),n.block_start=n.strstart),n.high_water<n.strstart&&(n.high_water=n.strstart),o?ar:e!==Di&&e!==Tn&&n.strm.avail_in===0&&n.strstart===n.block_start?or:(r=n.window_size-n.strstart,n.strm.avail_in>r&&n.block_start>=n.w_size&&(n.block_start-=n.w_size,n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,r+=n.w_size,n.insert>n.strstart&&(n.insert=n.strstart)),r>n.strm.avail_in&&(r=n.strm.avail_in),r&&(dc(n.strm,n.window,n.strstart,r),n.strstart+=r,n.insert+=r>n.w_size-n.insert?n.w_size-n.insert:r),n.high_water<n.strstart&&(n.high_water=n.strstart),r=n.bi_valid+42>>3,r=n.pending_buf_size-r>65535?65535:n.pending_buf_size-r,t=r>n.w_size?n.w_size:r,s=n.strstart-n.block_start,(s>=t||(s||e===Tn)&&e!==Di&&n.strm.avail_in===0&&s<=r)&&(i=s>r?r:s,o=e===Tn&&n.strm.avail_in===0&&i===s?1:0,oc(n,n.block_start,i,o),n.block_start+=i,pn(n.strm)),o?as:sn)},bl=(n,e)=>{let t,i;for(;;){if(n.lookahead<Yn){if(Zs(n),n.lookahead<Yn&&e===Di)return sn;if(n.lookahead===0)break}if(t=0,n.lookahead>=Ye&&(n.ins_h=Ii(n,n.ins_h,n.window[n.strstart+Ye-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart),t!==0&&n.strstart-t<=n.w_size-Yn&&(n.match_length=up(n,t)),n.match_length>=Ye)if(i=Pi(n,n.strstart-n.match_start,n.match_length-Ye),n.lookahead-=n.match_length,n.match_length<=n.max_lazy_match&&n.lookahead>=Ye){n.match_length--;do n.strstart++,n.ins_h=Ii(n,n.ins_h,n.window[n.strstart+Ye-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart;while(--n.match_length!==0);n.strstart++}else n.strstart+=n.match_length,n.match_length=0,n.ins_h=n.window[n.strstart],n.ins_h=Ii(n,n.ins_h,n.window[n.strstart+1]);else i=Pi(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++;if(i&&(mn(n,!1),n.strm.avail_out===0))return sn}return n.insert=n.strstart<Ye-1?n.strstart:Ye-1,e===Tn?(mn(n,!0),n.strm.avail_out===0?as:ar):n.sym_next&&(mn(n,!1),n.strm.avail_out===0)?sn:or},Ds=(n,e)=>{let t,i,s;for(;;){if(n.lookahead<Yn){if(Zs(n),n.lookahead<Yn&&e===Di)return sn;if(n.lookahead===0)break}if(t=0,n.lookahead>=Ye&&(n.ins_h=Ii(n,n.ins_h,n.window[n.strstart+Ye-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart),n.prev_length=n.match_length,n.prev_match=n.match_start,n.match_length=Ye-1,t!==0&&n.prev_length<n.max_lazy_match&&n.strstart-t<=n.w_size-Yn&&(n.match_length=up(n,t),n.match_length<=5&&(n.strategy===Cb||n.match_length===Ye&&n.strstart-n.match_start>4096)&&(n.match_length=Ye-1)),n.prev_length>=Ye&&n.match_length<=n.prev_length){s=n.strstart+n.lookahead-Ye,i=Pi(n,n.strstart-1-n.prev_match,n.prev_length-Ye),n.lookahead-=n.prev_length-1,n.prev_length-=2;do++n.strstart<=s&&(n.ins_h=Ii(n,n.ins_h,n.window[n.strstart+Ye-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart);while(--n.prev_length!==0);if(n.match_available=0,n.match_length=Ye-1,n.strstart++,i&&(mn(n,!1),n.strm.avail_out===0))return sn}else if(n.match_available){if(i=Pi(n,0,n.window[n.strstart-1]),i&&mn(n,!1),n.strstart++,n.lookahead--,n.strm.avail_out===0)return sn}else n.match_available=1,n.strstart++,n.lookahead--}return n.match_available&&(i=Pi(n,0,n.window[n.strstart-1]),n.match_available=0),n.insert=n.strstart<Ye-1?n.strstart:Ye-1,e===Tn?(mn(n,!0),n.strm.avail_out===0?as:ar):n.sym_next&&(mn(n,!1),n.strm.avail_out===0)?sn:or},jb=(n,e)=>{let t,i,s,r;const o=n.window;for(;;){if(n.lookahead<=Ci){if(Zs(n),n.lookahead<=Ci&&e===Di)return sn;if(n.lookahead===0)break}if(n.match_length=0,n.lookahead>=Ye&&n.strstart>0&&(s=n.strstart-1,i=o[s],i===o[++s]&&i===o[++s]&&i===o[++s])){r=n.strstart+Ci;do;while(i===o[++s]&&i===o[++s]&&i===o[++s]&&i===o[++s]&&i===o[++s]&&i===o[++s]&&i===o[++s]&&i===o[++s]&&s<r);n.match_length=Ci-(r-s),n.match_length>n.lookahead&&(n.match_length=n.lookahead)}if(n.match_length>=Ye?(t=Pi(n,1,n.match_length-Ye),n.lookahead-=n.match_length,n.strstart+=n.match_length,n.match_length=0):(t=Pi(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++),t&&(mn(n,!1),n.strm.avail_out===0))return sn}return n.insert=0,e===Tn?(mn(n,!0),n.strm.avail_out===0?as:ar):n.sym_next&&(mn(n,!1),n.strm.avail_out===0)?sn:or},qb=(n,e)=>{let t;for(;;){if(n.lookahead===0&&(Zs(n),n.lookahead===0)){if(e===Di)return sn;break}if(n.match_length=0,t=Pi(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++,t&&(mn(n,!1),n.strm.avail_out===0))return sn}return n.insert=0,e===Tn?(mn(n,!0),n.strm.avail_out===0?as:ar):n.sym_next&&(mn(n,!1),n.strm.avail_out===0)?sn:or};function kn(n,e,t,i,s){this.good_length=n,this.max_lazy=e,this.nice_length=t,this.max_chain=i,this.func=s}const Sr=[new kn(0,0,0,0,dp),new kn(4,4,8,4,bl),new kn(4,5,16,8,bl),new kn(4,6,32,32,bl),new kn(4,4,16,16,Ds),new kn(8,16,32,32,Ds),new kn(8,16,128,128,Ds),new kn(8,32,128,256,Ds),new kn(32,128,258,1024,Ds),new kn(32,258,258,4096,Ds)],Yb=n=>{n.window_size=2*n.w_size,Ai(n.head),n.max_lazy_match=Sr[n.level].max_lazy,n.good_match=Sr[n.level].good_length,n.nice_match=Sr[n.level].nice_length,n.max_chain_length=Sr[n.level].max_chain,n.strstart=0,n.block_start=0,n.lookahead=0,n.insert=0,n.match_length=n.prev_length=Ye-1,n.match_available=0,n.ins_h=0};function Kb(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ba,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(Hb*2),this.dyn_dtree=new Uint16Array((2*zb+1)*2),this.bl_tree=new Uint16Array((2*kb+1)*2),Ai(this.dyn_ltree),Ai(this.dyn_dtree),Ai(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(Gb+1),this.heap=new Uint16Array(2*ac+1),Ai(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*ac+1),Ai(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const so=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.status!==Ks&&e.status!==Bc&&e.status!==lc&&e.status!==cc&&e.status!==hc&&e.status!==uc&&e.status!==Ki&&e.status!==br?1:0},fp=n=>{if(so(n))return Zi(n,qn);n.total_in=n.total_out=0,n.data_type=Ib;const e=n.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap===2?Bc:e.wrap?Ks:Ki,n.adler=e.wrap===2?0:1,e.last_flush=-2,Eb(e),Vt},pp=n=>{const e=fp(n);return e===Vt&&Yb(n.state),e},Zb=(n,e)=>so(n)||n.state.wrap!==2?qn:(n.state.gzhead=e,Vt),mp=(n,e,t,i,s,r)=>{if(!n)return qn;let o=1;if(e===Rb&&(e=6),i<0?(o=0,i=-i):i>15&&(o=2,i-=16),s<1||s>Nb||t!==ba||i<8||i>15||e<0||e>9||r<0||r>Pb||i===8&&o!==1)return Zi(n,qn);i===8&&(i=9);const a=new Kb;return n.state=a,a.strm=n,a.status=Ks,a.wrap=o,a.gzhead=null,a.w_bits=i,a.w_size=1<<a.w_bits,a.w_mask=a.w_size-1,a.hash_bits=s+7,a.hash_size=1<<a.hash_bits,a.hash_mask=a.hash_size-1,a.hash_shift=~~((a.hash_bits+Ye-1)/Ye),a.window=new Uint8Array(a.w_size*2),a.head=new Uint16Array(a.hash_size),a.prev=new Uint16Array(a.w_size),a.lit_bufsize=1<<s+6,a.pending_buf_size=a.lit_bufsize*4,a.pending_buf=new Uint8Array(a.pending_buf_size),a.sym_buf=a.lit_bufsize,a.sym_end=(a.lit_bufsize-1)*3,a.level=e,a.strategy=r,a.method=t,pp(n)},Jb=(n,e)=>mp(n,e,ba,Ub,Ob,Db),Qb=(n,e)=>{if(so(n)||e>fd||e<0)return n?Zi(n,qn):qn;const t=n.state;if(!n.output||n.avail_in!==0&&!n.input||t.status===br&&e!==Tn)return Zi(n,n.avail_out===0?El:qn);const i=t.last_flush;if(t.last_flush=e,t.pending!==0){if(pn(n),n.avail_out===0)return t.last_flush=-1,Vt}else if(n.avail_in===0&&md(e)<=md(i)&&e!==Tn)return Zi(n,El);if(t.status===br&&n.avail_in!==0)return Zi(n,El);if(t.status===Ks&&t.wrap===0&&(t.status=Ki),t.status===Ks){let s=ba+(t.w_bits-8<<4)<<8,r=-1;if(t.strategy>=Vo||t.level<2?r=0:t.level<6?r=1:t.level===6?r=2:r=3,s|=r<<6,t.strstart!==0&&(s|=Vb),s+=31-s%31,vr(t,s),t.strstart!==0&&(vr(t,n.adler>>>16),vr(t,n.adler&65535)),n.adler=1,t.status=Ki,pn(n),t.pending!==0)return t.last_flush=-1,Vt}if(t.status===Bc){if(n.adler=0,tt(t,31),tt(t,139),tt(t,8),t.gzhead)tt(t,(t.gzhead.text?1:0)+(t.gzhead.hcrc?2:0)+(t.gzhead.extra?4:0)+(t.gzhead.name?8:0)+(t.gzhead.comment?16:0)),tt(t,t.gzhead.time&255),tt(t,t.gzhead.time>>8&255),tt(t,t.gzhead.time>>16&255),tt(t,t.gzhead.time>>24&255),tt(t,t.level===9?2:t.strategy>=Vo||t.level<2?4:0),tt(t,t.gzhead.os&255),t.gzhead.extra&&t.gzhead.extra.length&&(tt(t,t.gzhead.extra.length&255),tt(t,t.gzhead.extra.length>>8&255)),t.gzhead.hcrc&&(n.adler=Bt(n.adler,t.pending_buf,t.pending,0)),t.gzindex=0,t.status=lc;else if(tt(t,0),tt(t,0),tt(t,0),tt(t,0),tt(t,0),tt(t,t.level===9?2:t.strategy>=Vo||t.level<2?4:0),tt(t,Wb),t.status=Ki,pn(n),t.pending!==0)return t.last_flush=-1,Vt}if(t.status===lc){if(t.gzhead.extra){let s=t.pending,r=(t.gzhead.extra.length&65535)-t.gzindex;for(;t.pending+r>t.pending_buf_size;){let a=t.pending_buf_size-t.pending;if(t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex,t.gzindex+a),t.pending),t.pending=t.pending_buf_size,t.gzhead.hcrc&&t.pending>s&&(n.adler=Bt(n.adler,t.pending_buf,t.pending-s,s)),t.gzindex+=a,pn(n),t.pending!==0)return t.last_flush=-1,Vt;s=0,r-=a}let o=new Uint8Array(t.gzhead.extra);t.pending_buf.set(o.subarray(t.gzindex,t.gzindex+r),t.pending),t.pending+=r,t.gzhead.hcrc&&t.pending>s&&(n.adler=Bt(n.adler,t.pending_buf,t.pending-s,s)),t.gzindex=0}t.status=cc}if(t.status===cc){if(t.gzhead.name){let s=t.pending,r;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>s&&(n.adler=Bt(n.adler,t.pending_buf,t.pending-s,s)),pn(n),t.pending!==0)return t.last_flush=-1,Vt;s=0}t.gzindex<t.gzhead.name.length?r=t.gzhead.name.charCodeAt(t.gzindex++)&255:r=0,tt(t,r)}while(r!==0);t.gzhead.hcrc&&t.pending>s&&(n.adler=Bt(n.adler,t.pending_buf,t.pending-s,s)),t.gzindex=0}t.status=hc}if(t.status===hc){if(t.gzhead.comment){let s=t.pending,r;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>s&&(n.adler=Bt(n.adler,t.pending_buf,t.pending-s,s)),pn(n),t.pending!==0)return t.last_flush=-1,Vt;s=0}t.gzindex<t.gzhead.comment.length?r=t.gzhead.comment.charCodeAt(t.gzindex++)&255:r=0,tt(t,r)}while(r!==0);t.gzhead.hcrc&&t.pending>s&&(n.adler=Bt(n.adler,t.pending_buf,t.pending-s,s))}t.status=uc}if(t.status===uc){if(t.gzhead.hcrc){if(t.pending+2>t.pending_buf_size&&(pn(n),t.pending!==0))return t.last_flush=-1,Vt;tt(t,n.adler&255),tt(t,n.adler>>8&255),n.adler=0}if(t.status=Ki,pn(n),t.pending!==0)return t.last_flush=-1,Vt}if(n.avail_in!==0||t.lookahead!==0||e!==Di&&t.status!==br){let s=t.level===0?dp(t,e):t.strategy===Vo?qb(t,e):t.strategy===Lb?jb(t,e):Sr[t.level].func(t,e);if((s===as||s===ar)&&(t.status=br),s===sn||s===as)return n.avail_out===0&&(t.last_flush=-1),Vt;if(s===or&&(e===wb?Sb(t):e!==fd&&(oc(t,0,0,!1),e===Tb&&(Ai(t.head),t.lookahead===0&&(t.strstart=0,t.block_start=0,t.insert=0))),pn(n),n.avail_out===0))return t.last_flush=-1,Vt}return e!==Tn?Vt:t.wrap<=0?pd:(t.wrap===2?(tt(t,n.adler&255),tt(t,n.adler>>8&255),tt(t,n.adler>>16&255),tt(t,n.adler>>24&255),tt(t,n.total_in&255),tt(t,n.total_in>>8&255),tt(t,n.total_in>>16&255),tt(t,n.total_in>>24&255)):(vr(t,n.adler>>>16),vr(t,n.adler&65535)),pn(n),t.wrap>0&&(t.wrap=-t.wrap),t.pending!==0?Vt:pd)},eS=n=>{if(so(n))return qn;const e=n.state.status;return n.state=null,e===Ki?Zi(n,Ab):Vt},tS=(n,e)=>{let t=e.length;if(so(n))return qn;const i=n.state,s=i.wrap;if(s===2||s===1&&i.status!==Ks||i.lookahead)return qn;if(s===1&&(n.adler=Vr(n.adler,e,t,0)),i.wrap=0,t>=i.w_size){s===0&&(Ai(i.head),i.strstart=0,i.block_start=0,i.insert=0);let c=new Uint8Array(i.w_size);c.set(e.subarray(t-i.w_size,t),0),e=c,t=i.w_size}const r=n.avail_in,o=n.next_in,a=n.input;for(n.avail_in=t,n.next_in=0,n.input=e,Zs(i);i.lookahead>=Ye;){let c=i.strstart,l=i.lookahead-(Ye-1);do i.ins_h=Ii(i,i.ins_h,i.window[c+Ye-1]),i.prev[c&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=c,c++;while(--l);i.strstart=c,i.lookahead=Ye-1,Zs(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=Ye-1,i.match_available=0,n.next_in=o,n.input=a,n.avail_in=r,i.wrap=s,Vt};var nS=Jb,iS=mp,sS=pp,rS=fp,oS=Zb,aS=Qb,lS=eS,cS=tS,hS="pako deflate (from Nodeca project)",Lr={deflateInit:nS,deflateInit2:iS,deflateReset:sS,deflateResetKeep:rS,deflateSetHeader:oS,deflate:aS,deflateEnd:lS,deflateSetDictionary:cS,deflateInfo:hS};const uS=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);var dS=function(n){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const t=e.shift();if(t){if(typeof t!="object")throw new TypeError(t+"must be non-object");for(const i in t)uS(t,i)&&(n[i]=t[i])}}return n},fS=n=>{let e=0;for(let i=0,s=n.length;i<s;i++)e+=n[i].length;const t=new Uint8Array(e);for(let i=0,s=0,r=n.length;i<r;i++){let o=n[i];t.set(o,s),s+=o.length}return t},Sa={assign:dS,flattenChunks:fS};let gp=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{gp=!1}const Wr=new Uint8Array(256);for(let n=0;n<256;n++)Wr[n]=n>=252?6:n>=248?5:n>=240?4:n>=224?3:n>=192?2:1;Wr[254]=Wr[254]=1;var pS=n=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(n);let e,t,i,s,r,o=n.length,a=0;for(s=0;s<o;s++)t=n.charCodeAt(s),(t&64512)===55296&&s+1<o&&(i=n.charCodeAt(s+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),s++)),a+=t<128?1:t<2048?2:t<65536?3:4;for(e=new Uint8Array(a),r=0,s=0;r<a;s++)t=n.charCodeAt(s),(t&64512)===55296&&s+1<o&&(i=n.charCodeAt(s+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),s++)),t<128?e[r++]=t:t<2048?(e[r++]=192|t>>>6,e[r++]=128|t&63):t<65536?(e[r++]=224|t>>>12,e[r++]=128|t>>>6&63,e[r++]=128|t&63):(e[r++]=240|t>>>18,e[r++]=128|t>>>12&63,e[r++]=128|t>>>6&63,e[r++]=128|t&63);return e};const mS=(n,e)=>{if(e<65534&&n.subarray&&gp)return String.fromCharCode.apply(null,n.length===e?n:n.subarray(0,e));let t="";for(let i=0;i<e;i++)t+=String.fromCharCode(n[i]);return t};var gS=(n,e)=>{const t=e||n.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(n.subarray(0,e));let i,s;const r=new Array(t*2);for(s=0,i=0;i<t;){let o=n[i++];if(o<128){r[s++]=o;continue}let a=Wr[o];if(a>4){r[s++]=65533,i+=a-1;continue}for(o&=a===2?31:a===3?15:7;a>1&&i<t;)o=o<<6|n[i++]&63,a--;if(a>1){r[s++]=65533;continue}o<65536?r[s++]=o:(o-=65536,r[s++]=55296|o>>10&1023,r[s++]=56320|o&1023)}return mS(r,s)},_S=(n,e)=>{e=e||n.length,e>n.length&&(e=n.length);let t=e-1;for(;t>=0&&(n[t]&192)===128;)t--;return t<0||t===0?e:t+Wr[n[t]]>e?t:e},Xr={string2buf:pS,buf2string:gS,utf8border:_S};function xS(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var _p=xS;const xp=Object.prototype.toString,{Z_NO_FLUSH:yS,Z_SYNC_FLUSH:vS,Z_FULL_FLUSH:MS,Z_FINISH:ES,Z_OK:aa,Z_STREAM_END:bS,Z_DEFAULT_COMPRESSION:SS,Z_DEFAULT_STRATEGY:wS,Z_DEFLATED:TS}=io;function ro(n){this.options=Sa.assign({level:SS,method:TS,chunkSize:16384,windowBits:15,memLevel:8,strategy:wS},n||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new _p,this.strm.avail_out=0;let t=Lr.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(t!==aa)throw new Error(os[t]);if(e.header&&Lr.deflateSetHeader(this.strm,e.header),e.dictionary){let i;if(typeof e.dictionary=="string"?i=Xr.string2buf(e.dictionary):xp.call(e.dictionary)==="[object ArrayBuffer]"?i=new Uint8Array(e.dictionary):i=e.dictionary,t=Lr.deflateSetDictionary(this.strm,i),t!==aa)throw new Error(os[t]);this._dict_set=!0}}ro.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize;let s,r;if(this.ended)return!1;for(e===~~e?r=e:r=e===!0?ES:yS,typeof n=="string"?t.input=Xr.string2buf(n):xp.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){if(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),(r===vS||r===MS)&&t.avail_out<=6){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(s=Lr.deflate(t,r),s===bS)return t.next_out>0&&this.onData(t.output.subarray(0,t.next_out)),s=Lr.deflateEnd(this.strm),this.onEnd(s),this.ended=!0,s===aa;if(t.avail_out===0){this.onData(t.output);continue}if(r>0&&t.next_out>0){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(t.avail_in===0)break}return!0};ro.prototype.onData=function(n){this.chunks.push(n)};ro.prototype.onEnd=function(n){n===aa&&(this.result=Sa.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function zc(n,e){const t=new ro(e);if(t.push(n,!0),t.err)throw t.msg||os[t.err];return t.result}function AS(n,e){return e=e||{},e.raw=!0,zc(n,e)}function RS(n,e){return e=e||{},e.gzip=!0,zc(n,e)}var CS=ro,LS=zc,PS=AS,DS=RS,IS={Deflate:CS,deflate:LS,deflateRaw:PS,gzip:DS};const Wo=16209,NS=16191;var US=function(e,t){let i,s,r,o,a,c,l,h,u,d,f,g,_,m,p,x,y,v,E,A,w,L,M,b;const I=e.state;i=e.next_in,M=e.input,s=i+(e.avail_in-5),r=e.next_out,b=e.output,o=r-(t-e.avail_out),a=r+(e.avail_out-257),c=I.dmax,l=I.wsize,h=I.whave,u=I.wnext,d=I.window,f=I.hold,g=I.bits,_=I.lencode,m=I.distcode,p=(1<<I.lenbits)-1,x=(1<<I.distbits)-1;e:do{g<15&&(f+=M[i++]<<g,g+=8,f+=M[i++]<<g,g+=8),y=_[f&p];t:for(;;){if(v=y>>>24,f>>>=v,g-=v,v=y>>>16&255,v===0)b[r++]=y&65535;else if(v&16){E=y&65535,v&=15,v&&(g<v&&(f+=M[i++]<<g,g+=8),E+=f&(1<<v)-1,f>>>=v,g-=v),g<15&&(f+=M[i++]<<g,g+=8,f+=M[i++]<<g,g+=8),y=m[f&x];n:for(;;){if(v=y>>>24,f>>>=v,g-=v,v=y>>>16&255,v&16){if(A=y&65535,v&=15,g<v&&(f+=M[i++]<<g,g+=8,g<v&&(f+=M[i++]<<g,g+=8)),A+=f&(1<<v)-1,A>c){e.msg="invalid distance too far back",I.mode=Wo;break e}if(f>>>=v,g-=v,v=r-o,A>v){if(v=A-v,v>h&&I.sane){e.msg="invalid distance too far back",I.mode=Wo;break e}if(w=0,L=d,u===0){if(w+=l-v,v<E){E-=v;do b[r++]=d[w++];while(--v);w=r-A,L=b}}else if(u<v){if(w+=l+u-v,v-=u,v<E){E-=v;do b[r++]=d[w++];while(--v);if(w=0,u<E){v=u,E-=v;do b[r++]=d[w++];while(--v);w=r-A,L=b}}}else if(w+=u-v,v<E){E-=v;do b[r++]=d[w++];while(--v);w=r-A,L=b}for(;E>2;)b[r++]=L[w++],b[r++]=L[w++],b[r++]=L[w++],E-=3;E&&(b[r++]=L[w++],E>1&&(b[r++]=L[w++]))}else{w=r-A;do b[r++]=b[w++],b[r++]=b[w++],b[r++]=b[w++],E-=3;while(E>2);E&&(b[r++]=b[w++],E>1&&(b[r++]=b[w++]))}}else if(v&64){e.msg="invalid distance code",I.mode=Wo;break e}else{y=m[(y&65535)+(f&(1<<v)-1)];continue n}break}}else if(v&64)if(v&32){I.mode=NS;break e}else{e.msg="invalid literal/length code",I.mode=Wo;break e}else{y=_[(y&65535)+(f&(1<<v)-1)];continue t}break}}while(i<s&&r<a);E=g>>3,i-=E,g-=E<<3,f&=(1<<g)-1,e.next_in=i,e.next_out=r,e.avail_in=i<s?5+(s-i):5-(i-s),e.avail_out=r<a?257+(a-r):257-(r-a),I.hold=f,I.bits=g};const Is=15,gd=852,_d=592,xd=0,Sl=1,yd=2,OS=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),FS=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),BS=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),zS=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),kS=(n,e,t,i,s,r,o,a)=>{const c=a.bits;let l=0,h=0,u=0,d=0,f=0,g=0,_=0,m=0,p=0,x=0,y,v,E,A,w,L=null,M;const b=new Uint16Array(Is+1),I=new Uint16Array(Is+1);let O=null,j,P,k;for(l=0;l<=Is;l++)b[l]=0;for(h=0;h<i;h++)b[e[t+h]]++;for(f=c,d=Is;d>=1&&b[d]===0;d--);if(f>d&&(f=d),d===0)return s[r++]=1<<24|64<<16|0,s[r++]=1<<24|64<<16|0,a.bits=1,0;for(u=1;u<d&&b[u]===0;u++);for(f<u&&(f=u),m=1,l=1;l<=Is;l++)if(m<<=1,m-=b[l],m<0)return-1;if(m>0&&(n===xd||d!==1))return-1;for(I[1]=0,l=1;l<Is;l++)I[l+1]=I[l]+b[l];for(h=0;h<i;h++)e[t+h]!==0&&(o[I[e[t+h]]++]=h);if(n===xd?(L=O=o,M=20):n===Sl?(L=OS,O=FS,M=257):(L=BS,O=zS,M=0),x=0,h=0,l=u,w=r,g=f,_=0,E=-1,p=1<<f,A=p-1,n===Sl&&p>gd||n===yd&&p>_d)return 1;for(;;){j=l-_,o[h]+1<M?(P=0,k=o[h]):o[h]>=M?(P=O[o[h]-M],k=L[o[h]-M]):(P=96,k=0),y=1<<l-_,v=1<<g,u=v;do v-=y,s[w+(x>>_)+v]=j<<24|P<<16|k|0;while(v!==0);for(y=1<<l-1;x&y;)y>>=1;if(y!==0?(x&=y-1,x+=y):x=0,h++,--b[l]===0){if(l===d)break;l=e[t+o[h]]}if(l>f&&(x&A)!==E){for(_===0&&(_=f),w+=u,g=l-_,m=1<<g;g+_<d&&(m-=b[g+_],!(m<=0));)g++,m<<=1;if(p+=1<<g,n===Sl&&p>gd||n===yd&&p>_d)return 1;E=x&A,s[E]=f<<24|g<<16|w-r|0}}return x!==0&&(s[w+x]=l-_<<24|64<<16|0),a.bits=f,0};var Pr=kS;const HS=0,yp=1,vp=2,{Z_FINISH:vd,Z_BLOCK:GS,Z_TREES:Xo,Z_OK:ls,Z_STREAM_END:VS,Z_NEED_DICT:WS,Z_STREAM_ERROR:Ln,Z_DATA_ERROR:Mp,Z_MEM_ERROR:Ep,Z_BUF_ERROR:XS,Z_DEFLATED:Md}=io,wa=16180,Ed=16181,bd=16182,Sd=16183,wd=16184,Td=16185,Ad=16186,Rd=16187,Cd=16188,Ld=16189,la=16190,ai=16191,wl=16192,Pd=16193,Tl=16194,Dd=16195,Id=16196,Nd=16197,Ud=16198,$o=16199,jo=16200,Od=16201,Fd=16202,Bd=16203,zd=16204,kd=16205,Al=16206,Hd=16207,Gd=16208,gt=16209,bp=16210,Sp=16211,$S=852,jS=592,qS=15,YS=qS,Vd=n=>(n>>>24&255)+(n>>>8&65280)+((n&65280)<<8)+((n&255)<<24);function KS(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const hs=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.mode<wa||e.mode>Sp?1:0},wp=n=>{if(hs(n))return Ln;const e=n.state;return n.total_in=n.total_out=e.total=0,n.msg="",e.wrap&&(n.adler=e.wrap&1),e.mode=wa,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array($S),e.distcode=e.distdyn=new Int32Array(jS),e.sane=1,e.back=-1,ls},Tp=n=>{if(hs(n))return Ln;const e=n.state;return e.wsize=0,e.whave=0,e.wnext=0,wp(n)},Ap=(n,e)=>{let t;if(hs(n))return Ln;const i=n.state;return e<0?(t=0,e=-e):(t=(e>>4)+5,e<48&&(e&=15)),e&&(e<8||e>15)?Ln:(i.window!==null&&i.wbits!==e&&(i.window=null),i.wrap=t,i.wbits=e,Tp(n))},Rp=(n,e)=>{if(!n)return Ln;const t=new KS;n.state=t,t.strm=n,t.window=null,t.mode=wa;const i=Ap(n,e);return i!==ls&&(n.state=null),i},ZS=n=>Rp(n,YS);let Wd=!0,Rl,Cl;const JS=n=>{if(Wd){Rl=new Int32Array(512),Cl=new Int32Array(32);let e=0;for(;e<144;)n.lens[e++]=8;for(;e<256;)n.lens[e++]=9;for(;e<280;)n.lens[e++]=7;for(;e<288;)n.lens[e++]=8;for(Pr(yp,n.lens,0,288,Rl,0,n.work,{bits:9}),e=0;e<32;)n.lens[e++]=5;Pr(vp,n.lens,0,32,Cl,0,n.work,{bits:5}),Wd=!1}n.lencode=Rl,n.lenbits=9,n.distcode=Cl,n.distbits=5},Cp=(n,e,t,i)=>{let s;const r=n.state;return r.window===null&&(r.wsize=1<<r.wbits,r.wnext=0,r.whave=0,r.window=new Uint8Array(r.wsize)),i>=r.wsize?(r.window.set(e.subarray(t-r.wsize,t),0),r.wnext=0,r.whave=r.wsize):(s=r.wsize-r.wnext,s>i&&(s=i),r.window.set(e.subarray(t-i,t-i+s),r.wnext),i-=s,i?(r.window.set(e.subarray(t-i,t),0),r.wnext=i,r.whave=r.wsize):(r.wnext+=s,r.wnext===r.wsize&&(r.wnext=0),r.whave<r.wsize&&(r.whave+=s))),0},QS=(n,e)=>{let t,i,s,r,o,a,c,l,h,u,d,f,g,_,m=0,p,x,y,v,E,A,w,L;const M=new Uint8Array(4);let b,I;const O=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(hs(n)||!n.output||!n.input&&n.avail_in!==0)return Ln;t=n.state,t.mode===ai&&(t.mode=wl),o=n.next_out,s=n.output,c=n.avail_out,r=n.next_in,i=n.input,a=n.avail_in,l=t.hold,h=t.bits,u=a,d=c,L=ls;e:for(;;)switch(t.mode){case wa:if(t.wrap===0){t.mode=wl;break}for(;h<16;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}if(t.wrap&2&&l===35615){t.wbits===0&&(t.wbits=15),t.check=0,M[0]=l&255,M[1]=l>>>8&255,t.check=Bt(t.check,M,2,0),l=0,h=0,t.mode=Ed;break}if(t.head&&(t.head.done=!1),!(t.wrap&1)||(((l&255)<<8)+(l>>8))%31){n.msg="incorrect header check",t.mode=gt;break}if((l&15)!==Md){n.msg="unknown compression method",t.mode=gt;break}if(l>>>=4,h-=4,w=(l&15)+8,t.wbits===0&&(t.wbits=w),w>15||w>t.wbits){n.msg="invalid window size",t.mode=gt;break}t.dmax=1<<t.wbits,t.flags=0,n.adler=t.check=1,t.mode=l&512?Ld:ai,l=0,h=0;break;case Ed:for(;h<16;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}if(t.flags=l,(t.flags&255)!==Md){n.msg="unknown compression method",t.mode=gt;break}if(t.flags&57344){n.msg="unknown header flags set",t.mode=gt;break}t.head&&(t.head.text=l>>8&1),t.flags&512&&t.wrap&4&&(M[0]=l&255,M[1]=l>>>8&255,t.check=Bt(t.check,M,2,0)),l=0,h=0,t.mode=bd;case bd:for(;h<32;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}t.head&&(t.head.time=l),t.flags&512&&t.wrap&4&&(M[0]=l&255,M[1]=l>>>8&255,M[2]=l>>>16&255,M[3]=l>>>24&255,t.check=Bt(t.check,M,4,0)),l=0,h=0,t.mode=Sd;case Sd:for(;h<16;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}t.head&&(t.head.xflags=l&255,t.head.os=l>>8),t.flags&512&&t.wrap&4&&(M[0]=l&255,M[1]=l>>>8&255,t.check=Bt(t.check,M,2,0)),l=0,h=0,t.mode=wd;case wd:if(t.flags&1024){for(;h<16;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}t.length=l,t.head&&(t.head.extra_len=l),t.flags&512&&t.wrap&4&&(M[0]=l&255,M[1]=l>>>8&255,t.check=Bt(t.check,M,2,0)),l=0,h=0}else t.head&&(t.head.extra=null);t.mode=Td;case Td:if(t.flags&1024&&(f=t.length,f>a&&(f=a),f&&(t.head&&(w=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(i.subarray(r,r+f),w)),t.flags&512&&t.wrap&4&&(t.check=Bt(t.check,i,f,r)),a-=f,r+=f,t.length-=f),t.length))break e;t.length=0,t.mode=Ad;case Ad:if(t.flags&2048){if(a===0)break e;f=0;do w=i[r+f++],t.head&&w&&t.length<65536&&(t.head.name+=String.fromCharCode(w));while(w&&f<a);if(t.flags&512&&t.wrap&4&&(t.check=Bt(t.check,i,f,r)),a-=f,r+=f,w)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=Rd;case Rd:if(t.flags&4096){if(a===0)break e;f=0;do w=i[r+f++],t.head&&w&&t.length<65536&&(t.head.comment+=String.fromCharCode(w));while(w&&f<a);if(t.flags&512&&t.wrap&4&&(t.check=Bt(t.check,i,f,r)),a-=f,r+=f,w)break e}else t.head&&(t.head.comment=null);t.mode=Cd;case Cd:if(t.flags&512){for(;h<16;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}if(t.wrap&4&&l!==(t.check&65535)){n.msg="header crc mismatch",t.mode=gt;break}l=0,h=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),n.adler=t.check=0,t.mode=ai;break;case Ld:for(;h<32;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}n.adler=t.check=Vd(l),l=0,h=0,t.mode=la;case la:if(t.havedict===0)return n.next_out=o,n.avail_out=c,n.next_in=r,n.avail_in=a,t.hold=l,t.bits=h,WS;n.adler=t.check=1,t.mode=ai;case ai:if(e===GS||e===Xo)break e;case wl:if(t.last){l>>>=h&7,h-=h&7,t.mode=Al;break}for(;h<3;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}switch(t.last=l&1,l>>>=1,h-=1,l&3){case 0:t.mode=Pd;break;case 1:if(JS(t),t.mode=$o,e===Xo){l>>>=2,h-=2;break e}break;case 2:t.mode=Id;break;case 3:n.msg="invalid block type",t.mode=gt}l>>>=2,h-=2;break;case Pd:for(l>>>=h&7,h-=h&7;h<32;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}if((l&65535)!==(l>>>16^65535)){n.msg="invalid stored block lengths",t.mode=gt;break}if(t.length=l&65535,l=0,h=0,t.mode=Tl,e===Xo)break e;case Tl:t.mode=Dd;case Dd:if(f=t.length,f){if(f>a&&(f=a),f>c&&(f=c),f===0)break e;s.set(i.subarray(r,r+f),o),a-=f,r+=f,c-=f,o+=f,t.length-=f;break}t.mode=ai;break;case Id:for(;h<14;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}if(t.nlen=(l&31)+257,l>>>=5,h-=5,t.ndist=(l&31)+1,l>>>=5,h-=5,t.ncode=(l&15)+4,l>>>=4,h-=4,t.nlen>286||t.ndist>30){n.msg="too many length or distance symbols",t.mode=gt;break}t.have=0,t.mode=Nd;case Nd:for(;t.have<t.ncode;){for(;h<3;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}t.lens[O[t.have++]]=l&7,l>>>=3,h-=3}for(;t.have<19;)t.lens[O[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,b={bits:t.lenbits},L=Pr(HS,t.lens,0,19,t.lencode,0,t.work,b),t.lenbits=b.bits,L){n.msg="invalid code lengths set",t.mode=gt;break}t.have=0,t.mode=Ud;case Ud:for(;t.have<t.nlen+t.ndist;){for(;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,x=m>>>16&255,y=m&65535,!(p<=h);){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}if(y<16)l>>>=p,h-=p,t.lens[t.have++]=y;else{if(y===16){for(I=p+2;h<I;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}if(l>>>=p,h-=p,t.have===0){n.msg="invalid bit length repeat",t.mode=gt;break}w=t.lens[t.have-1],f=3+(l&3),l>>>=2,h-=2}else if(y===17){for(I=p+3;h<I;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}l>>>=p,h-=p,w=0,f=3+(l&7),l>>>=3,h-=3}else{for(I=p+7;h<I;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}l>>>=p,h-=p,w=0,f=11+(l&127),l>>>=7,h-=7}if(t.have+f>t.nlen+t.ndist){n.msg="invalid bit length repeat",t.mode=gt;break}for(;f--;)t.lens[t.have++]=w}}if(t.mode===gt)break;if(t.lens[256]===0){n.msg="invalid code -- missing end-of-block",t.mode=gt;break}if(t.lenbits=9,b={bits:t.lenbits},L=Pr(yp,t.lens,0,t.nlen,t.lencode,0,t.work,b),t.lenbits=b.bits,L){n.msg="invalid literal/lengths set",t.mode=gt;break}if(t.distbits=6,t.distcode=t.distdyn,b={bits:t.distbits},L=Pr(vp,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,b),t.distbits=b.bits,L){n.msg="invalid distances set",t.mode=gt;break}if(t.mode=$o,e===Xo)break e;case $o:t.mode=jo;case jo:if(a>=6&&c>=258){n.next_out=o,n.avail_out=c,n.next_in=r,n.avail_in=a,t.hold=l,t.bits=h,US(n,d),o=n.next_out,s=n.output,c=n.avail_out,r=n.next_in,i=n.input,a=n.avail_in,l=t.hold,h=t.bits,t.mode===ai&&(t.back=-1);break}for(t.back=0;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,x=m>>>16&255,y=m&65535,!(p<=h);){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}if(x&&!(x&240)){for(v=p,E=x,A=y;m=t.lencode[A+((l&(1<<v+E)-1)>>v)],p=m>>>24,x=m>>>16&255,y=m&65535,!(v+p<=h);){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}l>>>=v,h-=v,t.back+=v}if(l>>>=p,h-=p,t.back+=p,t.length=y,x===0){t.mode=kd;break}if(x&32){t.back=-1,t.mode=ai;break}if(x&64){n.msg="invalid literal/length code",t.mode=gt;break}t.extra=x&15,t.mode=Od;case Od:if(t.extra){for(I=t.extra;h<I;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}t.length+=l&(1<<t.extra)-1,l>>>=t.extra,h-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=Fd;case Fd:for(;m=t.distcode[l&(1<<t.distbits)-1],p=m>>>24,x=m>>>16&255,y=m&65535,!(p<=h);){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}if(!(x&240)){for(v=p,E=x,A=y;m=t.distcode[A+((l&(1<<v+E)-1)>>v)],p=m>>>24,x=m>>>16&255,y=m&65535,!(v+p<=h);){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}l>>>=v,h-=v,t.back+=v}if(l>>>=p,h-=p,t.back+=p,x&64){n.msg="invalid distance code",t.mode=gt;break}t.offset=y,t.extra=x&15,t.mode=Bd;case Bd:if(t.extra){for(I=t.extra;h<I;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}t.offset+=l&(1<<t.extra)-1,l>>>=t.extra,h-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){n.msg="invalid distance too far back",t.mode=gt;break}t.mode=zd;case zd:if(c===0)break e;if(f=d-c,t.offset>f){if(f=t.offset-f,f>t.whave&&t.sane){n.msg="invalid distance too far back",t.mode=gt;break}f>t.wnext?(f-=t.wnext,g=t.wsize-f):g=t.wnext-f,f>t.length&&(f=t.length),_=t.window}else _=s,g=o-t.offset,f=t.length;f>c&&(f=c),c-=f,t.length-=f;do s[o++]=_[g++];while(--f);t.length===0&&(t.mode=jo);break;case kd:if(c===0)break e;s[o++]=t.length,c--,t.mode=jo;break;case Al:if(t.wrap){for(;h<32;){if(a===0)break e;a--,l|=i[r++]<<h,h+=8}if(d-=c,n.total_out+=d,t.total+=d,t.wrap&4&&d&&(n.adler=t.check=t.flags?Bt(t.check,s,d,o-d):Vr(t.check,s,d,o-d)),d=c,t.wrap&4&&(t.flags?l:Vd(l))!==t.check){n.msg="incorrect data check",t.mode=gt;break}l=0,h=0}t.mode=Hd;case Hd:if(t.wrap&&t.flags){for(;h<32;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}if(t.wrap&4&&l!==(t.total&4294967295)){n.msg="incorrect length check",t.mode=gt;break}l=0,h=0}t.mode=Gd;case Gd:L=VS;break e;case gt:L=Mp;break e;case bp:return Ep;case Sp:default:return Ln}return n.next_out=o,n.avail_out=c,n.next_in=r,n.avail_in=a,t.hold=l,t.bits=h,(t.wsize||d!==n.avail_out&&t.mode<gt&&(t.mode<Al||e!==vd))&&Cp(n,n.output,n.next_out,d-n.avail_out),u-=n.avail_in,d-=n.avail_out,n.total_in+=u,n.total_out+=d,t.total+=d,t.wrap&4&&d&&(n.adler=t.check=t.flags?Bt(t.check,s,d,n.next_out-d):Vr(t.check,s,d,n.next_out-d)),n.data_type=t.bits+(t.last?64:0)+(t.mode===ai?128:0)+(t.mode===$o||t.mode===Tl?256:0),(u===0&&d===0||e===vd)&&L===ls&&(L=XS),L},ew=n=>{if(hs(n))return Ln;let e=n.state;return e.window&&(e.window=null),n.state=null,ls},tw=(n,e)=>{if(hs(n))return Ln;const t=n.state;return t.wrap&2?(t.head=e,e.done=!1,ls):Ln},nw=(n,e)=>{const t=e.length;let i,s,r;return hs(n)||(i=n.state,i.wrap!==0&&i.mode!==la)?Ln:i.mode===la&&(s=1,s=Vr(s,e,t,0),s!==i.check)?Mp:(r=Cp(n,e,t,t),r?(i.mode=bp,Ep):(i.havedict=1,ls))};var iw=Tp,sw=Ap,rw=wp,ow=ZS,aw=Rp,lw=QS,cw=ew,hw=tw,uw=nw,dw="pako inflate (from Nodeca project)",di={inflateReset:iw,inflateReset2:sw,inflateResetKeep:rw,inflateInit:ow,inflateInit2:aw,inflate:lw,inflateEnd:cw,inflateGetHeader:hw,inflateSetDictionary:uw,inflateInfo:dw};function fw(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var pw=fw;const Lp=Object.prototype.toString,{Z_NO_FLUSH:mw,Z_FINISH:gw,Z_OK:$r,Z_STREAM_END:Ll,Z_NEED_DICT:Pl,Z_STREAM_ERROR:_w,Z_DATA_ERROR:Xd,Z_MEM_ERROR:xw}=io;function oo(n){this.options=Sa.assign({chunkSize:1024*64,windowBits:15,to:""},n||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,e.windowBits===0&&(e.windowBits=-15)),e.windowBits>=0&&e.windowBits<16&&!(n&&n.windowBits)&&(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&(e.windowBits&15||(e.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new _p,this.strm.avail_out=0;let t=di.inflateInit2(this.strm,e.windowBits);if(t!==$r)throw new Error(os[t]);if(this.header=new pw,di.inflateGetHeader(this.strm,this.header),e.dictionary&&(typeof e.dictionary=="string"?e.dictionary=Xr.string2buf(e.dictionary):Lp.call(e.dictionary)==="[object ArrayBuffer]"&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(t=di.inflateSetDictionary(this.strm,e.dictionary),t!==$r)))throw new Error(os[t])}oo.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize,s=this.options.dictionary;let r,o,a;if(this.ended)return!1;for(e===~~e?o=e:o=e===!0?gw:mw,Lp.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){for(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),r=di.inflate(t,o),r===Pl&&s&&(r=di.inflateSetDictionary(t,s),r===$r?r=di.inflate(t,o):r===Xd&&(r=Pl));t.avail_in>0&&r===Ll&&t.state.wrap>0&&n[t.next_in]!==0;)di.inflateReset(t),r=di.inflate(t,o);switch(r){case _w:case Xd:case Pl:case xw:return this.onEnd(r),this.ended=!0,!1}if(a=t.avail_out,t.next_out&&(t.avail_out===0||r===Ll))if(this.options.to==="string"){let c=Xr.utf8border(t.output,t.next_out),l=t.next_out-c,h=Xr.buf2string(t.output,c);t.next_out=l,t.avail_out=i-l,l&&t.output.set(t.output.subarray(c,c+l),0),this.onData(h)}else this.onData(t.output.length===t.next_out?t.output:t.output.subarray(0,t.next_out));if(!(r===$r&&a===0)){if(r===Ll)return r=di.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,!0;if(t.avail_in===0)break}}return!0};oo.prototype.onData=function(n){this.chunks.push(n)};oo.prototype.onEnd=function(n){n===$r&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=Sa.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function kc(n,e){const t=new oo(e);if(t.push(n),t.err)throw t.msg||os[t.err];return t.result}function yw(n,e){return e=e||{},e.raw=!0,kc(n,e)}var vw=oo,Mw=kc,Ew=yw,bw=kc,Sw={Inflate:vw,inflate:Mw,inflateRaw:Ew,ungzip:bw};const{Deflate:ww,deflate:Tw,deflateRaw:Aw,gzip:Rw}=IS,{Inflate:Cw,inflate:Lw,inflateRaw:Pw,ungzip:Dw}=Sw;var Iw=ww,Nw=Tw,Uw=Aw,Ow=Rw,Fw=Cw,Bw=Lw,zw=Pw,kw=Dw,Hw=io,Pp={Deflate:Iw,deflate:Nw,deflateRaw:Uw,gzip:Ow,Inflate:Fw,inflate:Bw,inflateRaw:zw,ungzip:kw,constants:Hw};const Dp=-100,Gw=100,Vw=Gw-Dp,Ww=65535/Vw;function Gn(n){return n/Ww+Dp}function Dr(n){return n/255*2*Math.PI}function ao(n){if(n instanceof ArrayBuffer)return n;if(ArrayBuffer.isView(n))return n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer:n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength);if(n&&n.type==="Buffer"&&Array.isArray(n.data))return new Uint8Array(n.data).buffer;if(Array.isArray(n))return new Uint8Array(n).buffer;if(n&&typeof n=="object"&&!Array.isArray(n)&&Object.keys(n).length>0&&Object.keys(n).every(e=>!isNaN(Number(e)))){const e=[];for(let t=0;t<Object.keys(n).length;t++)e.push(n[t]);return new Uint8Array(e).buffer}throw new Error("Formato de buffer não suportado")}function Xw(n){n=ao(n);const e=new DataView(n);return{opcode:e.getUint8(0),playerId:e.getUint16(1),posX:Gn(e.getUint16(3)),posY:Gn(e.getUint16(5)),rot:Dr(e.getUint8(7)),hp:e.getUint16(8),mana:e.getUint16(10)}}function $w(n){n=ao(n);const e=new DataView(n);return{opcode:e.getUint8(0),playerId:e.getUint16(1),hp:e.getUint16(3),maxHp:e.getUint16(5),mana:e.getUint16(7),maxMana:e.getUint16(9),level:e.getUint16(11),xp:e.getUint32(13),nextLevelXp:e.getUint32(17)}}function jw({forward:n,backward:e,left:t,right:i}){let s=0;n&&(s|=1),t&&(s|=2),e&&(s|=4),i&&(s|=8);const r=new ArrayBuffer(1);return new DataView(r).setUint8(0,s),r}function qw(n){n=ao(n);const e=new DataView(n);return{opcode:e.getUint8(0),monsterId:e.getUint16(1)}}function Yw(n){n=ao(n);const e=new DataView(n);let t=0;const i=e.getUint8(t);t+=1;const s=e.getUint16(t);t+=2;const r=e.getUint16(t);t+=2;const o=e.getUint16(t);t+=2;const a=[];for(let h=0;h<s;h++){const u=e.getUint16(t);t+=2;const d=e.getUint8(t);t+=1;const f=Xf[d]??"BLACK_MIST_ZOMBIE",g=Gn(e.getUint16(t));t+=2;const _=Gn(e.getUint16(t));t+=2;const m=Dr(e.getUint8(t));t+=1;const p=e.getUint16(t);t+=2;const x=e.getUint16(t);t+=2,a.push({id:u,monsterType:f,position:{x:g,z:_},rotation:m,stats:{hp:p,maxHp:x}})}const c=[];for(let h=0;h<r;h++){const u=e.getUint16(t);t+=2;const d=e.getUint8(t);t+=1;const f=dM[d]??"TREE",g=Gn(e.getUint16(t));t+=2;const _=Gn(e.getUint16(t));t+=2;const m=Dr(e.getUint8(t));t+=1;const p=e.getUint8(t);t+=1,c.push({id:u,type:f,position:{x:g,z:_},rotation:m,status:p})}const l=[];for(let h=0;h<o;h++){const u=e.getUint16(t);t+=2;const d=Gn(e.getUint16(t));t+=2;const f=Gn(e.getUint16(t));t+=2;const g=Dr(e.getUint8(t));t+=1;const _=e.getUint16(t);t+=2;const m=e.getUint16(t);t+=2;const p=e.getUint8(t);t+=1,l.push({id:u,position:{x:d,z:f},rotation:g,stats:{hp:_,mana:m},level:p})}return{opcode:i,monsters:a,worldObjects:c,players:l}}function Kw(n){n=ao(n);const e=new DataView(n);let t=0;const i=e.getUint8(t);t+=1;const s=e.getUint16(t);t+=2;const r=e.getUint16(t);t+=2;const o=[];for(let c=0;c<s;c++){const l=e.getUint16(t);t+=2;const h=e.getUint8(t);t+=1;const u=Xf[h]??"BLACK_MIST_ZOMBIE",d=Gn(e.getUint16(t));t+=2;const f=Gn(e.getUint16(t));t+=2;const g=Dr(e.getUint8(t));t+=1;const _=e.getUint16(t);t+=2;const m=e.getUint16(t);t+=2,o.push({id:String(l),monsterType:u,position:{x:d,z:f},rotation:g,stats:{hp:_,maxHp:m}})}const a=[];for(let c=0;c<r;c++)a.push(String(e.getUint16(t))),t+=2;return{opcode:i,addedOrUpdated:o,removed:a}}console.log(`Tentando conectar ao servidor na porta: ${Wf.PORT}`);const ze=hM({url:"http://152.70.210.134",port:Wf.PORT}),ca=15,Zw=document.getElementById("game-container"),$d=window.innerWidth,jd=window.innerHeight;let pe,wt,ct,W,it,En,Xe,Se,je,Pt,Ir,qi,qd,fc=new fe,Nr=new Kv,Us=null,Yd=0;const Wt={w:!1,a:!1,s:!1,d:!1};let wr={w:!1,a:!1,s:!1,d:!1},Zn=!0;const Jw=JSON.parse(localStorage.getItem("pvpRpgUserSettings")||"{}");Jw.visualEffects===!1&&(Zn=!1);const Dl=[];let ft=null,_t=null,Ji=null;const Je=new tE;Je.setChannel(ze);let Rn;function Qw(n){!n||!n.stats||Je.update(n.stats,n.level,"Arcane")}ze.on(vt.PLAYER.ABILITY_USED,n=>{try{if(n.id===it&&(W&&W.userData&&n.mana!==void 0&&(W.userData.stats.mana=n.mana,n.maxMana!==void 0&&(W.userData.stats.maxMana=n.maxMana),Je.update(W.userData.stats,W.userData.level,"Arcane"),Pt.updateMana(n.mana)),n.abilityId)){const t=Je.abilitySlots.indexOf(n.abilityId)+1;if(t>0){const i=Date.now();let s;if(n.cooldownEnd&&n.cooldownEnd>i)s=n.cooldownEnd-i;else if(n.cooldownStart&&n.cooldownDuration){const r=i-n.cooldownStart;s=Math.max(0,n.cooldownDuration-r)}else if(n.cooldown)n.cooldown>i+1e3?s=n.cooldown-i:s=n.cooldown;else{const r=Pt.getAbilityById(n.abilityId);if(!r)return;s=r.COOLDOWN}s=Math.max(0,s),Je.setCooldown(t,s,s),n.cooldownEnd?Pt.startCooldown(n.abilityId,n.cooldownEnd):Pt.startCooldown(n.abilityId,i+s)}}}catch(e){console.error("Erro ao processar evento ABILITY_USED:",e)}});ze.on(vt.PLAYER.INIT,n=>{W&&W.userData&&Qw(W.userData)});function eT(){Nr.setFromCamera(fc,wt);const n=Nr.intersectObject(Us);return n.length>0?n[0].point:W?W.position.clone():new R(0,0,0)}function pc(n,e){if(!n||!Rn)return;const t=n.getWorldPosition(new R);Rn.createFloatingText({text:`-${Number(e).toFixed(1)}`,position:{x:t.x,y:t.y+2.2,z:t.z},type:"damage",size:1,duration:1600,fadeOut:!0})}function Ip(){const n=performance.now();for(let e=Dl.length-1;e>=0;e--){const t=Dl[e],i=n-t.startTime,s=t.duration||1200;if(i>s){t.targetMesh&&t.sprite&&(t.targetMesh.remove(t.sprite),t.sprite.material&&(t.sprite.material.dispose(),t.sprite.material.map&&t.sprite.material.map.dispose())),Dl.splice(e,1);continue}t.sprite.position.y=1.5+i/500;const r=s*.5;if(i>r){const o=1-(i-r)/(s-r);t.sprite.material.opacity=Math.max(.1,o)}}}function tT(){pe=new rv;const n=new Mt(500,32,32),e=new an({side:Jt,uniforms:{topColor:{value:new ge(2241365)},bottomColor:{value:new ge(3829416)},offset:{value:400},exponent:{value:.8}},vertexShader:`
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform float offset;
      uniform float exponent;
      varying vec3 vWorldPosition;
      void main() {
        float h = normalize(vWorldPosition + offset).y;
        gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
      }
    `}),t=new oe(n,e);pe.add(t);const i=$d/jd;wt=new Yr(-15*i,ca*i,ca,-15,.1,1e3),wt.position.set(20,20,20),wt.lookAt(0,0,0),ct=new Cf({antialias:!0,precision:"highp",powerPreference:"high-performance",alpha:!1}),ct.setSize($d,jd),ct.setPixelRatio(window.devicePixelRatio),ct.setClearColor(2241365,1),Zw.appendChild(ct.domElement);const r=new Ff().load("/textures/environment/tiled_stone_texture.png",f=>{console.log("Textura do chão carregada:",f)});r.wrapS=r.wrapT=is,r.repeat.set(32,32),r.anisotropy=8,r.colorSpace=at;const o=new xa(ci.SIZE.WIDTH,ci.SIZE.HEIGHT),a=new ye({map:r,color:16777215,side:Ht,roughness:.5,metalness:0,flatShading:!1});Us=new oe(o,a),Us.rotation.x=Math.PI/2,Us.receiveShadow=!0,pe.add(Us),nT(),Xe=new $u(pe,Ir,qi),Se=new Ju(pe),je=new ed(pe,qi),Pt=new id(pe),ct.outputColorSpace=at,ct.toneMapping=fa,ct.toneMappingExposure=Se.toneMappingExposure,window._threeRenderer=ct,En=new RE(ct),window._threeComposer=En,En.addPass(new CE(pe,wt));const c=new Ys(new fe(window.innerWidth,window.innerHeight),.6,.4,.85);En.addPass(c),window._bloomPass=c;const l=new nc(PE);l.material.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight),En.addPass(l),window._fxaaPass=l;const h=new nc(DE);h.uniforms.powRGB.value.set(1.05,1.05,1.05),h.uniforms.mulRGB.value.set(1.05,1.05,1.05),En.addPass(h),window._colorCorrectionPass=h,ct.outputColorSpace=at,window.addEventListener("resize",sT),window.addEventListener("mousemove",rT),Rn=new bE(pe,wt),qi=new gM(document.body,wt);const u=document.getElementById("overlay");Ir=new mM(u,wt),Xe=new $u(pe,Ir,qi),Se=new Ju(pe),je=new ed(pe,qi),Pt=new id(pe);const d=Xe.updateMonster.bind(Xe);Xe.updateMonster=function(f){d(f);const g=this.getMonster(f.id);g&&g.userData&&g.userData._wasGray&&f.stats&&f.stats.hp>0&&mc(g,16711680)},Xc()}function nT(){const n=ci.SIZE.WIDTH/2,e=ci.SIZE.HEIGHT/2,t=ci.BOUNDARIES.BORDER_WIDTH,i=new ye({color:16728128,transparent:!0,opacity:.6}),s=new oe(new $t(ci.SIZE.WIDTH,2,t),i);s.position.set(0,1,-100),pe.add(s);const r=new oe(new $t(ci.SIZE.WIDTH,2,t),i);r.position.set(0,1,e),pe.add(r);const o=new oe(new $t(t,2,ci.SIZE.HEIGHT),i);o.position.set(-100,1,0),pe.add(o);const a=new oe(new $t(t,2,ci.SIZE.HEIGHT),i);a.position.set(n,1,0),pe.add(a);const c=new ye({color:16711680}),l=new Bn(.5,.5,5,8),h=new oe(l,c);h.position.set(n,2.5,-100),pe.add(h);const u=new oe(l,c);u.position.set(-100,2.5,-100),pe.add(u);const d=new oe(l,c);d.position.set(n,2.5,e),pe.add(d);const f=new oe(l,c);f.position.set(-100,2.5,e),pe.add(f)}function iT(){const n=new $t(1,1,1),e=new ye({color:255});W=new oe(n,e),pe.add(W),W.position.set(0,.5,0);const t=new Kn(.3,1,4),i=new ye({color:65280}),s=new oe(t,i);s.position.set(0,0,.8),s.rotation.x=Math.PI/2,W.add(s),je.setLocalPlayerId(it),W.targetPosition=W.position.clone()}function sT(){const n=window.innerWidth,e=window.innerHeight,t=n/e;if(wt.left=-15*t,wt.right=ca*t,wt.top=ca,wt.bottom=-15,wt.updateProjectionMatrix(),ct.setSize(n,e),En){En.setSize(n,e);const i=En.passes.find(s=>s.material&&s.material.uniforms&&s.material.uniforms.resolution);i&&i.material.uniforms.resolution.value.set(1/n,1/e)}}function rT(n){fc.x=n.clientX/window.innerWidth*2-1,fc.y=-(n.clientY/window.innerHeight)*2+1}window.addEventListener("keydown",n=>{Np(n.key,!0)&&Hc()});window.addEventListener("keyup",n=>{Np(n.key,!1)&&Hc()});function Np(n,e){let t=!1;return n==="w"||n==="W"?(t=Wt.w!==e,Wt.w=e):n==="a"||n==="A"?(t=Wt.a!==e,Wt.a=e):n==="s"||n==="S"?(t=Wt.s!==e,Wt.s=e):(n==="d"||n==="D")&&(t=Wt.d!==e,Wt.d=e),t}function Hc(){if(!W||!it)return;const n={forward:Wt.w,backward:Wt.s,left:Wt.a,right:Wt.d};try{const e=jw(n);ze.emit(qs.PLAYER_MOVE,new Uint8Array(e))}catch(e){console.error("Erro ao enviar comando de movimento (binário):",e)}wr={...Wt}}function oT(){if(Vc||!W||!it)return;const n=Date.now();if(n-Yd<200)return;Yd=n,(wr.w!==Wt.w||wr.a!==Wt.a||wr.s!==Wt.s||wr.d!==Wt.d)&&Hc()}let jr=!1,Gc=0,Il=0;window.addEventListener("pvpRpgUserSettingsChanged",n=>{jr=!!n.detail.fpslimit,Gc=jr?1e3/30:0});(function(){jr=!!JSON.parse(localStorage.getItem("pvpRpgUserSettings")||"{}").fpslimit,Gc=jr?1e3/30:0})();let Nl=0,Kd=performance.now(),Zd=0;window.addEventListener("pvpRpgUserSettingsChanged",n=>{const e=n.detail||{};typeof e.visualEffects=="boolean"&&(Zn=e.visualEffects)});let Cn=function(){requestAnimationFrame(Cn);const n=performance.now();if(jr&&Il&&n-Il<Gc)return;Il=n,Nl++,n-Kd>=1e3&&(Zd=Nl,Nl=0,Kd=n);const e=(n-qd)/1e3;qd=n;const t=performance.now();if(oT(),pT(),je.updatePositions&&je.updatePositions(e),Xe.updatePositions&&Xe.updatePositions(e),Pt.update&&Pt.update(e),Rn&&Rn.update(e),Se&&Se.updateRenderer&&Se.updateRenderer(e,wt.position),W&&Se.updateLightPosition(W.position),Ir&&Ir.updateAll(window.innerWidth,window.innerHeight),qi&&qi.updateAll(window.innerWidth,window.innerHeight),window.__lastUiUpdateTimeMs=(performance.now()-t).toFixed(2),Zn&&typeof En<"u"?En.render():typeof ct<"u"&&typeof pe<"u"&&typeof wt<"u"&&(ct.setSize(window.innerWidth,window.innerHeight),ct.setPixelRatio(window.devicePixelRatio),ct.render(pe,wt)),Ji&&ft){let i=null;_t==="monster"?i=Xe.getMonster(ft):_t==="player"&&(i=je.getPlayer(ft)),i&&(Ji.position.copy(i.position),Ji.rotation.copy(i.rotation))}W&&W.targetPosition&&W.position.lerp(W.targetPosition,.25),window.fps=Zd};ze.onConnect(n=>{if(n){console.error("Erro ao conectar ao servidor:",n);return}console.log("Conectado ao servidor!"),Je.setChannel(ze),tT(),cT(),Cn()});ze.on(vt.PLAYER.INIT,n=>{try{console.log("ID recebido do servidor:",n.id),it=n.id,iT(),W&&W.userData&&(W.userData.stats=n.stats,W.userData.level=n.level,W.userData.xp=n.xp,W.userData.nextLevelXp=n.nextLevelXp,W.userData.name=n.name,Je&&typeof Je.update=="function"&&Je.update(n.stats,n.level,n.name,n.xp,n.nextLevelXp))}catch(e){console.error("Erro ao processar ID do jogador:",e)}});ze.on(vt.WORLD.INIT,n=>{try{console.log("[WORLD] Recebendo dados iniciais do mundo:",n);let e=n;if(n.compressed&&n.data)try{const s=atob(n.data),r=s.length,o=new Uint8Array(r);for(let c=0;c<r;c++)o[c]=s.charCodeAt(c);const a=Pp.inflate(o,{to:"string"});e=JSON.parse(a),console.log("[WORLD] Dados descompactados com sucesso:",e)}catch(s){console.error("[ERRO] Falha ao descompactar dados:",s);return}const t=e.worldObjects||[],i=e.monsters||[];if(t&&t.length>0){console.log(`[WORLD] Processando ${t.length} objetos do mundo`);const s={};t.forEach(r=>{const o=r.biome||"UNKNOWN";s[o]=(s[o]||0)+1,Se.updateWorldObject(r)}),console.log("[WORLD] Contagem de objetos por bioma:",s),Se.optimizeSceneWithInstancing&&(console.log("[WORLD] Aplicando otimizações de renderização..."),Se.optimizeSceneWithInstancing())}if(i&&i.length>0){console.log(`Inicializando ${i.length} monstros`);for(const s of i)s&&s.id&&Xe.updateMonster(s)}}catch(e){console.error("[ERRO] Falha ao processar dados iniciais do mundo:",e)}});ze.on(vt.PLAYER.DISCONNECTED,n=>{try{if(!n||!n.id){console.error("Dados de desconexão inválidos:",n);return}const e=n.id;je.removePlayer(e)}catch(e){console.error("Erro ao processar desconexão de jogador:",e)}});ze.on(vt.PLAYER.EXISTING,n=>{try{if(!n||!n.id||!n.position){console.error("Dados de jogador existente inválidos:",n);return}const e=n.id;e===it&&W&&W.userData?(W.userData.stats={...W.userData.stats,...n.stats},W.userData.level=n.level,W.userData.xp=n.xp,W.userData.nextLevelXp=n.nextLevelXp,W.userData.name=n.name,Je.update(n.stats,n.level,n.name,n.xp,n.nextLevelXp)):e!==it&&je.updatePlayer(n)}catch(e){console.error("Erro ao processar jogador existente:",e)}});ze.on(vt.PLAYER.JOINED,n=>{try{if(!n||!n.id||!n.position){console.error("Dados de novo jogador inválidos:",n);return}const e=n.id;e===it&&W&&W.userData?(W.userData.stats={...W.userData.stats,...n.stats},W.userData.level=n.level,W.userData.xp=n.xp,W.userData.nextLevelXp=n.nextLevelXp,W.userData.name=n.name,Je.update(n.stats,n.level,n.name,n.xp,n.nextLevelXp)):e!==it&&je.updatePlayer(n)}catch(e){console.error("Erro ao processar novo jogador:",e)}});ze.on(vt.PLAYER.ROTATED,n=>{try{if(!n||!n.id||n.rotation===void 0){console.error("Dados de rotação inválidos:",n);return}const e=n.id,t=Number(n.rotation)||0;e===it&&W?W.rotation.y=t:je.hasPlayer(e)&&je.updatePlayerRotation(e,t)}catch(e){console.error("Erro ao processar rotação de jogador:",e)}});ze.on(vt.WORLD.UPDATE,n=>{try{if(!n){console.error("Dados de atualização do mundo inválidos");return}let e=n;if(n.compressed&&n.data)try{const t=atob(n.data),i=t.length,s=new Uint8Array(i);for(let o=0;o<i;o++)s[o]=t.charCodeAt(o);const r=Pp.inflate(s,{to:"string"});e=JSON.parse(r)}catch(t){console.error("Erro ao descompactar dados:",t);return}if(e.monsters&&Array.isArray(e.monsters)){for(const t of e.monsters)t&&t.id&&(Xe.updateMonster(t),ft===t.id&&_t==="monster"&&Xt(Xn(t,"monster")));Xe.pruneStaleMonsters()}if(e.worldObjects&&Array.isArray(e.worldObjects))for(const t of e.worldObjects)t&&t.id&&Se.updateWorldObject(t);if(e.players&&Array.isArray(e.players))for(const t of e.players)t&&t.id&&(je.updatePlayer(t),ft===t.id&&_t==="player"&&Xt(Xn(t,"player")))}catch(e){console.error("Erro ao processar atualização do mundo:",e)}});ze.onDisconnect(()=>{console.log("Desconectado do servidor"),je&&je.removePlayer(it),Xe&&Xe.clearAllMonsters(),Se&&Se.clearAllWorldObjects(),it=null,gameStarted=!1,typeof uiElements<"u"&&uiElements&&uiElements.showConnectionLost?uiElements.showConnectionLost():console.log("Interface de usuário não disponível para mostrar mensagem de desconexão")});ze.on("ping",()=>{ze.emit("pong")});ze.on(vt.PLAYER.DAMAGE,n=>{if(!(!n||!n.id||!n.damage)){if(n.id===it&&W)pc(W,n.damage);else if(je.hasPlayer(n.id)){const e=je.getPlayer(n.id);pc(e,n.damage)}}});ze.on(vt.MONSTER.DAMAGE,n=>{if(!n||!n.id||!n.damage)return;const e=Xe.getMonster(n.id);e&&pc(e,n.damage)});function Ni(n){if(Ji&&(pe.remove(Ji),Ji=null),!n)return;const e=new xt({color:8947712,side:Jt,transparent:!0,opacity:.7}),t=n.clone();t.material=e,t.scale.multiplyScalar(1.15),t.position.copy(n.position),t.rotation.copy(n.rotation),t.renderOrder=999,pe.add(t),Ji=t}window.addEventListener("mousedown",n=>{const e=new fe;e.x=n.clientX/window.innerWidth*2-1,e.y=-(n.clientY/window.innerHeight)*2+1,Nr.setFromCamera(e,wt);let t=!1;for(const[i,s]of Xe.monsters.entries())if(Nr.intersectObject(s,!0).length>0){ft=i,_t="monster",Ni(s),t=!0;const o=Xe.getMonsterData(i);o&&Xt(Xn(o,"monster"));break}if(!t){for(const[i,s]of je.players.entries())if(Nr.intersectObject(s,!0).length>0){if(i===it)ft=null,_t=null,Ni(null),Xt(null);else{ft=i,_t="player",Ni(s);const o=je.getPlayerData(i);o&&Xt(Xn(o,"player"))}t=!0;break}}});window.addEventListener("keydown",n=>{(n.key==="Escape"||n.key==="Esc")&&(ft=null,_t=null,Ni(null),Xt(null))});function Up(){ft&&(_t==="monster"?Xe.monsters.has(ft)||(ft=null,_t=null,Xt(null)):_t==="player"&&(je.players.has(ft)||(ft=null,_t=null,Xt(null))))}const aT=Cn;Cn=function(){Ip(),Up(),aT()};window.addEventListener("keydown",n=>{let e=null;if(n.key==="1"&&(e=1),n.key==="2"&&(e=2),n.key==="3"&&(e=3),n.key==="4"&&(e=4),!e||!W)return;const t=Je.abilitySlots[e-1];if(!t)return;const i=Pt.getAbilityById(t);if(!i)return;if(!Pt.canUseAbility(t)){const r=Pt.getWhyCannotUse(t);if(Rn&&W){const o={x:W.position.x,y:W.position.y+2,z:W.position.z};let a="#ff0000";r.includes("cooldown")?a="#ffaa00":r.includes("mana")&&(a="#00aaff"),Rn.createFloatingText({text:r,position:o,color:a,size:.8,duration:1500,type:"error"})}return}const s=eT();i&&Je.setCooldown(e,i.COOLDOWN,i.COOLDOWN),ze.emit(vt.PLAYER.USE_ABILITY,{abilityId:t,targetPosition:s})});const lT=Cn;Cn=function(){const n=performance.now();(n-(Cn.lastTime||n))/1e3,Cn.lastTime=n,Pt&&Pt.update(),Ip(),Up(),lT()};ze.on(vt.PLAYER.ABILITY_USED,n=>{try{if(!n||!n.abilityId)return;if(n.teleport&&n.teleportPosition){let s=null;if(!n.playerId&&W){s=W;const r=W.position.clone();W.position.set(n.teleportPosition.x,n.teleportPosition.y||W.position.y,n.teleportPosition.z),Pt.spawnSkillEffect(2,r,new R(n.teleportPosition.x,n.teleportPosition.y||W.position.y,n.teleportPosition.z),W)}else n.playerId&&(s=je.getPlayer(n.playerId),s&&(s.position.set(n.teleportPosition.x,n.teleportPosition.y||s.position.y,n.teleportPosition.z),Rn.createFloatingText({text:"✨",position:n.teleportPosition,color:"#80ffff",size:1,duration:1e3,type:"default"})));return}let e=null;if(!n.playerId&&W?e=W:n.playerId&&(e=je.getPlayer(n.playerId)),!e||!n.targetPosition)return;const t=n.position?new R(n.position.x,n.position.y,n.position.z):e.position.clone(),i=new R(n.targetPosition.x,n.targetPosition.y,n.targetPosition.z);if(Pt.spawnSkillEffect(n.abilityId,t,i,e,n.effect||{}),n.areaEffect&&n.areaEffect.center&&n.areaEffect.radius){const s=new R(n.areaEffect.center.x,n.areaEffect.center.y||0,n.areaEffect.center.z);if(n.abilityId===3){const r=new cs(n.areaEffect.radius,32),o=new xt({color:65535,transparent:!0,opacity:.4}),a=new oe(r,o);a.position.set(s.x,.1,s.z),a.rotation.x=-Math.PI/2,pe.add(a);const c=8;for(let l=0;l<c;l++){const h=l/c*Math.PI*2,u=(Math.random()*.7+.3)*n.areaEffect.radius,d=s.x+Math.cos(h)*u,f=s.z+Math.sin(h)*u;Rn.createFloatingText({text:"❄️",position:{x:d,y:.5,z:f},color:"#ffffff",size:1+Math.random(),duration:2e3+Math.random()*1e3,type:"default"})}setTimeout(()=>{pe.remove(a),a.geometry.dispose(),o.dispose()},5e3)}}if(e){const s=e.scale.clone();e.scale.multiplyScalar(1.1),setTimeout(()=>{e&&e.scale.copy(s)},150)}}catch(e){console.error("Erro ao processar habilidade:",e)}});function cT(){ze.on(vt.COMBAT.DAMAGE_DEALT,n=>{try{if(!n||!n.targetId||!n.damage)return;if(n.died===!0){if(n.targetType==="monster"){const r=Xe.getMonster(n.targetId);if(r&&r.userData&&r.userData.stats&&(r.userData.stats.hp=0,ft===n.targetId&&_t==="monster")){const o=Xe.getMonsterData(n.targetId);o&&Xt(Xn(o,"monster"))}}else if(n.targetType==="player"){const r=je.getPlayer(n.targetId);if(r&&r.userData&&r.userData.stats&&(r.userData.stats.hp=0,ft===n.targetId&&_t==="player")){const o=je.getPlayerData(n.targetId);o&&Xt(Xn(o,"player"))}}}let e=null;if(n.targetType==="monster"?e=Xe.getMonster(n.targetId):n.targetType==="player"&&(n.targetId===it&&Je.updateHealth(n.remainingHp||0),e=je.getPlayer(n.targetId)),!e)return;const t={x:e.position.x,y:e.position.y+1,z:e.position.z},i=parseInt(n.damage)||0,s=Math.min(.7+i/50,1.5);if(Rn.createFloatingText({text:n.damage?Number(n.damage).toFixed(1):"",position:t,color:"#ff0000",size:1,duration:1200,type:"damage"}),e){const r=e.scale.clone();e.scale.multiplyScalar(1.1),setTimeout(()=>{e&&e.scale.copy(r)},150)}if(Je&&Je.chatManager){if(n.targetId===it)if(console.log(`[DEBUG] Você recebeu ${n.damage} de dano!`),n.sourceType==="monster"&&n.sourceName)Je.chatManager.addDamageMessage(`Você recebeu ${n.damage} de dano do ${n.sourceName}!`);else if(n.sourceType==="player"&&n.sourceId){const r=je.getPlayerData(n.sourceId);r&&r.name?Je.chatManager.addDamageMessage(`Você recebeu ${n.damage} de dano de ${r.name}!`):Je.chatManager.addDamageMessage(`Você recebeu ${n.damage} de dano de outro jogador!`)}else Je.chatManager.addDamageMessage(`Você recebeu ${n.damage} de dano!`);if(n.sourceId===it||n.targetType==="monster"||n.targetType==="player"&&n.targetId!==it){if(console.log(`[DEBUG] Você causou ${n.damage} de dano em ${n.targetType} ${n.targetId}!`),n.targetType==="monster"){let r=n.targetName||"monstro";Je.chatManager.addDamageMessage(`Você causou ${n.damage} de dano no ${r}!`)}else if(n.targetType==="player"&&n.targetId!==it){let r="jogador";const o=je.getPlayerData(n.targetId);o&&o.name?r=o.name:r=`Jogador ${n.targetId.substring(0,6)}`,Je.chatManager.addDamageMessage(`Você causou ${n.damage} de dano em ${r}!`)}}}if(e&&n.abilityId&&(n.abilityId===4&&Qd(e,pe,"burn"),n.abilityId===3&&Qd(e,pe,"freeze")),ft===n.targetId&&_t===n.targetType){let r=null;n.targetType==="monster"?(r=Xe.getMonsterData(n.targetId)||{},r.id=n.targetId,r.monsterType=r.monsterType||n.monsterType,r.stats=r.stats||{},r.stats.hp=n.remainingHp??n.hp??r.stats.hp,r.stats.maxHp=n.maxHp??r.stats.maxHp,Xt(Xn(r,"monster"))):n.targetType==="player"&&(r=je.getPlayerData(n.targetId)||{},r.id=n.targetId,r.stats=r.stats||{},r.stats.hp=n.remainingHp??n.hp??r.stats.hp,r.stats.maxHp=n.maxHp??r.stats.maxHp,r.stats.mana=n.remainingMana??r.stats.mana,r.stats.maxMana=n.maxMana??r.stats.maxMana,r.name=r.name||n.name,Xt(Xn(r,"player")))}}catch(e){console.error("Erro ao processar evento DAMAGE_DEALT:",e)}}),ze.on(vt.COMBAT.FLOATING_TEXT,n=>{try{if(!n||!n.text||!n.position)return;Rn.createFloatingText({text:n.text,position:n.position,color:n.color||"#ffffff",size:n.size||1,duration:n.duration||2e3,type:n.type||"default"})}catch(e){console.error("Erro ao processar evento de texto flutuante:",e)}}),ze.on(vt.PLAYER.DEATH,n=>{try{if(!n||!n.id)return;n.id===it&&(Je.showDeathMessage(!0),W&&W.userData&&W.userData.stats&&(W.userData.stats.hp=0));const e=je.getPlayer(n.id);e&&(e.userData&&e.userData.stats&&(e.userData.stats.hp=0),e.rotation.x=Math.PI/2,e.position.y=.1,e.material&&(e.material.opacity=.7,e.material.transparent=!0)),ft===n.id&&_t==="player"&&n.id!==it&&(ft=null,_t=null,Xt(null),Ni(null))}catch(e){console.error("Erro ao processar evento de morte:",e)}}),ze.on(vt.PLAYER.RESPAWN,n=>{try{if(!n)return;if(n.id===it)W.position.set(n.position.x,n.position.y,n.position.z),W.rotation.x=0,W.material&&(W.material.opacity=1),n.stats&&Je.update(n.stats,n.level||1,"Mago"),Je.showDeathMessage(!1);else{const e=je.getPlayer(n.id);e&&(e.rotation.x=0,e.position.y=0,e.material&&(e.material.opacity=1))}n.position&&Rn.createFloatingText({text:"Respawn!",position:n.position,color:"#00ffff",size:1.5,duration:3e3,type:"default"})}catch(e){console.error("Erro ao processar evento de respawn:",e)}}),ze.on(vt.PLAYER.SYNC_RESPONSE,n=>{var e,t;try{if(console.log("Sincronização recebida:",`Mana: ${(e=n.mana)==null?void 0:e.toFixed(1)}/${(t=n.maxMana)==null?void 0:t.toFixed(1)}`,`Cooldowns: ${Object.keys(n.cooldowns||{}).length}`),W&&W.userData&&n.mana!==void 0){const i=W.userData.stats.mana,s=n.mana-i;Math.abs(s)>1&&console.log(`Mana atualizada: ${i.toFixed(1)} → ${n.mana.toFixed(1)} (${s>0?"+":""}${s.toFixed(1)})`),W.userData.stats.mana=n.mana,n.maxMana!==void 0&&(W.userData.stats.maxMana=n.maxMana),n.hp!==void 0&&(W.userData.stats.hp=n.hp),n.maxHp!==void 0&&(W.userData.stats.maxHp=n.maxHp),Je.update(W.userData.stats,W.userData.level,"Arcane"),Pt.updateMana(n.mana)}if(n.cooldowns){const i=Date.now(),s=n.timestamp?i-n.timestamp:0;for(const r in n.cooldowns){const a=n.cooldowns[r]+s;Pt.startCooldown(parseInt(r),a);const c=Je.abilitySlots.indexOf(parseInt(r))+1;if(c>0){const l=Math.max(0,a-i);Je.setCooldown(c,l,l)}}}}catch(i){console.error("Erro ao processar sincronização:",i)}}),ze.on(qs.MONSTER_DEATH,n=>{const e=qw(n),t=String(e.monsterId),i=Xe.getMonster(t);if(i&&ha(i),ft===t&&_t==="monster"){const s=Xe.getMonsterData(t);s&&(s.stats=s.stats||{},s.stats.hp=0,Xt(Xn(s,"monster")))}setTimeout(()=>{Xe.removeMonster(t),ft===t&&_t==="monster"&&(ft=null,_t=null,Xt(null),Ni(null))},2e3)}),ze.on("monster:webShot",n=>{try{const e=Xe.getMonster(n.sourceId);let t=null;n.targetId===it?t=W:n.targetType==="player"?t=je.getPlayer(n.targetId):n.targetType==="monster"&&(t=Xe.getMonster(n.targetId)),e&&t&&IE(e,t,pe)}catch(e){console.error("Erro ao processar monster:webShot:",e)}}),ze.on("monster:spiderLeap",n=>{try{const e=Xe.getMonster(n.sourceId);e&&NE(e,n.targetPos,pe)}catch(e){console.error("Erro ao processar monster:spiderLeap:",e)}}),ze.on(qs.MONSTER_DELTA_UPDATE,n=>{const{addedOrUpdated:e,removed:t}=Kw(n);if(Xe&&e)for(const i of e)Xe.updateExistingMonster(String(i.id),{...i,id:String(i.id)});if(Xe&&t)for(const i of t)Xe.removeMonster(String(i))})}let Jd=0;const hT=2e3;function uT(){const n=Date.now();n-Jd<hT||ze&&ze.readyState===1&&(console.log("Solicitando sincronização com servidor..."),ze.emit(vt.PLAYER.SYNC_REQUEST),Jd=n)}const dT=Cn;Cn=function(){W&&it&&uT(),dT()};function Xn(n,e){var r,o,a,c,l;let t=((r=n.stats)==null?void 0:r.hp)??n.hp??0,i=((o=n.stats)==null?void 0:o.maxHp)??n.maxHp??0,s=n.name||n.monsterType||"???";return e==="monster"&&n.monsterType&&ra[n.monsterType]&&(s=ra[n.monsterType].NAME),{id:n.id,type:e,name:s,hp:t,maxHp:i,energy:((a=n.stats)==null?void 0:a.mana)||n.energy||0,maxEnergy:((c=n.stats)==null?void 0:c.maxMana)||n.maxEnergy||0,status:[...(l=n.status)!=null&&l.slowedUntil&&n.status.slowedUntil>Date.now()?[{icon:"❄️",alt:"Slow",tooltip:"Lento (movimento reduzido)"}]:[]]}}function Xt(n){const e=document.querySelector(".target-ui");if(!e||!n){e&&(e.style.display="none");return}if(n.hp<=0&&!(n.type==="player"&&n.id===it)){ft=null,_t=null,Ni(null),e.style.display="none";return}e.style.display="block",e.querySelector(".target-icon").textContent=n.type==="player"?"👤":"👹",e.querySelector(".target-name").textContent=n.name;const t=n.hp/n.maxHp*100;e.querySelector(".hp-fill").style.width=t+"%",e.querySelector(".hp-text").textContent=`${n.hp} / ${n.maxHp}`;const i=e.querySelector(".mana-bar");if(n.maxEnergy){i.style.display="block";const r=n.energy/n.maxEnergy*100;e.querySelector(".mana-fill").style.width=r+"%",e.querySelector(".mana-text").textContent=`${n.energy} / ${n.maxEnergy}`}else i.style.display="none";const s=e.querySelector(".target-status");s.innerHTML="",(n.status||[]).forEach(r=>{if(r.icon.startsWith("http")||r.icon.includes(".")){const o=document.createElement("img");o.src=r.icon,o.alt=r.alt||"",o.title=r.tooltip||"",s.appendChild(o)}else{const o=document.createElement("span");o.textContent=r.icon,o.alt=r.alt||"",o.title=r.tooltip||"",o.style.fontSize="20px",o.style.lineHeight="20px",o.style.cursor="help",s.appendChild(o)}})}let Vc=!1;window.addEventListener("chat:focus",()=>{Vc=!0});window.addEventListener("chat:blur",()=>{Vc=!1});let Ul=28;const Ol=Math.PI/4.7,fT=.15;function pT(){if(!W)return;const n=new R(W.position.x,W.position.y,W.position.z),e=Math.cos(Ol)*Ul,t=Math.sin(Ol)*Ul,i=Math.cos(Ol)*Ul,s=new R(W.position.x+e*.7,W.position.y+t,W.position.z+i*.7);wt.position.distanceTo(s)>8?wt.position.copy(s):wt.position.lerp(s,fT),wt.lookAt(n)}function Qd(n,e,t){n&&(console.log("[StatusVisual] Aplicando status",t,"em mesh:",n),t==="burn"&&(console.log("[StatusVisual] Chamando applyBurnEffect"),ME(n,e)),(t==="freeze"||t==="slow")&&(console.log("[StatusVisual] Chamando applyFreezeEffect"),fE(n,e)))}window.setThreeExposure=n=>{ct.toneMappingExposure=n};let Dt=null,Fl=!1;function Op(n){if(Dt)return;Dt=new Ic({width:340}),Dt.domElement.style.zIndex=1e4,Dt.domElement.style.position="fixed",Dt.domElement.style.top="60px",Dt.domElement.style.right="20px",Dt.domElement.style.display="none";const e={Exposição:n.toneMappingExposure,"Luz Direcional":n.sunIntensity,"Luz Ambiente":n.ambientIntensity,"Luz Hemisférica":n.hemiIntensity,"Bloom Intensity":window._bloomPass.strength,"Bloom Threshold":window._bloomPass.threshold,"Bloom Radius":window._bloomPass.radius,"Reset Preset Albion":()=>{e.Exposição=1.32,e["Luz Direcional"]=2.2,e["Luz Ambiente"]=.8,e["Luz Hemisférica"]=1.3,e["Bloom Intensity"]=.6,e["Bloom Threshold"]=.85,e["Bloom Radius"]=.4,t(),Dt.controllersRecursive().forEach(i=>i.updateDisplay())}};function t(){n.toneMappingExposure=e.Exposição,window._threeRenderer.toneMappingExposure=e.Exposição,n.sunIntensity=e["Luz Direcional"],n.ambientIntensity=e["Luz Ambiente"],n.hemiIntensity=e["Luz Hemisférica"],n.sunLight&&(n.sunLight.intensity=e["Luz Direcional"]),n.ambientLight&&(n.ambientLight.intensity=e["Luz Ambiente"]),n.hemisphereLight&&(n.hemisphereLight.intensity=e["Luz Hemisférica"]),window._bloomPass.strength=e["Bloom Intensity"],window._bloomPass.threshold=e["Bloom Threshold"],window._bloomPass.radius=e["Bloom Radius"]}Dt.add(e,"Exposição",.8,2,.01).onChange(t),Dt.add(e,"Luz Direcional",.5,4,.01).onChange(t),Dt.add(e,"Luz Ambiente",0,2,.01).onChange(t),Dt.add(e,"Luz Hemisférica",0,2,.01).onChange(t),Dt.add(e,"Bloom Intensity",0,2,.01).onChange(t),Dt.add(e,"Bloom Threshold",0,1,.01).onChange(t),Dt.add(e,"Bloom Radius",0,2,.01).onChange(t),Dt.add(e,"Reset Preset Albion")}window.addEventListener("keydown",n=>{n.key==="F10"&&(Fl=!Fl,Dt||Op(Se),Dt&&(Dt.domElement.style.display=Fl?"block":"none"))});setTimeout(()=>{window.worldObjectPresenter&&Op(window.worldObjectPresenter)},2e3);let Wc=!1;function ha(n){if(!n)return;function e(t){t.material&&(Array.isArray(t.material)?t.material.forEach(i=>{i.color.set(8947848),i.opacity=.5,i.transparent=!0}):(t.material.color.set(8947848),t.material.opacity=.5,t.material.transparent=!0)),t.children&&t.children.length>0&&t.children.forEach(i=>e(i))}e(n),n.userData._wasGray=!0,n.rotation.x=Math.PI/2,n.position.y=.1,console.log("[CLIENT] [applyGrayDeathEffect] Efeito cinza aplicado ao mesh:",n.userData.id)}function mc(n,e=255){n&&(n.material&&(n.material.color.set(e),n.material.opacity=1,n.material.transparent=!1),n.userData._wasGray=!1,n.rotation.x=0,n.position.y=.5)}ze.on(vt.PLAYER.DEATH,n=>{if(Wc=!0,Je.showDeathModal(n),window.addEventListener("keydown",ua,!0),window.addEventListener("mousedown",ua,!0),setTimeout(()=>{const e=document.getElementById("btn-respawn");e&&(e.onclick=()=>{ze.emit(vt.PLAYER.RESPAWN)})},100),n.id===it&&W)ha(W);else{const e=je.getPlayer(n.id);e&&ha(e)}});ze.on(vt.PLAYER.RESPAWN,n=>{if(Wc=!1,Je.hideDeathModal(),window.removeEventListener("keydown",ua,!0),window.removeEventListener("mousedown",ua,!0),n.id===it&&W)mc(W,255);else{const e=je.getPlayer(n.id);e&&mc(e,255)}});ze.on(vt.MONSTER.DEATH,n=>{if(console.log("[CLIENT] [EVENTS.MONSTER.DEATH] Recebido para monstro:",n&&n.id),!n||!n.id)return;const e=Xe.getMonster(n.id);let t=1;if(e&&e.userData&&e.userData.stats&&e.userData.stats.maxHp)t=e.userData.stats.maxHp,console.log("[CLIENT] [applyGrayDeathEffect] Aplicando efeito cinza ao monstro:",n.id),ha(e);else{const i=Xe.getMonsterData?Xe.getMonsterData(n.id):null;i&&i.stats&&i.stats.maxHp&&(t=i.stats.maxHp),console.warn("[CLIENT] [applyGrayDeathEffect] Mesh do monstro não encontrado:",n.id)}if(Xe.floatingBarManager&&(console.log("[MONSTER.DEATH] Zerando barra",n.id,"maxHp:",t),Xe.floatingBarManager.updateBar(n.id,{hp:0,maxHp:t})),ft===n.id&&_t==="monster"){const i=Xe.getMonsterData(n.id);i&&(i.stats=i.stats||{},i.stats.hp=0,console.log("[CLIENT] [HUD] Atualizando HUD do alvo para vida 0 do monstro:",n.id),Xt(Xn(i,"monster")))}setTimeout(()=>{console.log("[CLIENT] [removeMonster] Removendo monstro:",n.id),Xe.removeMonster(n.id),ft===n.id&&_t==="monster"&&(ft=null,_t=null,Xt(null),Ni(null),console.log("[CLIENT] [HUD] HUD do alvo limpa após remoção do monstro:",n.id))},2e3)});function ua(n){if(Wc)return n.stopImmediatePropagation(),n.preventDefault(),!1}ze.on(qs.PLAYER_MOVED,n=>{const e=Xw(n);je&&(e.playerId===it?W?(W.position.set(e.posX,.5,e.posY),W.targetPosition=new R(e.posX,.5,e.posY),W.rotation.y=e.rot,W.userData&&W.userData.stats&&(W.userData.stats.hp=e.hp,W.userData.stats.mana=e.mana)):console.log("Objeto player local não encontrado:",W):je.updateExistingPlayer(String(e.playerId),{position:{x:e.posX,z:e.posY},rotation:e.rot,stats:{hp:e.hp,mana:e.mana}}))});ze.on(qs.WORLD_UPDATE,n=>{performance.now();const e=Yw(n);if(performance.now(),Se&&e.worldObjects){for(const i of e.worldObjects)Se.updateWorldObject({id:String(i.id),type:i.type,position:{x:i.position.x,y:0,z:i.position.z},rotation:i.rotation,status:i.status});const t=new Set(e.worldObjects.map(i=>String(i.id)));for(const i of Se.worldObjects.keys())t.has(i)||Se.removeWorldObject(i)}if(je&&e.players)for(const t of e.players)Number(t.id)!==Number(it)&&je.updateExistingPlayer(String(t.id),{position:{x:t.position.x,z:t.position.z},rotation:t.rotation,stats:{hp:t.stats.hp,mana:t.stats.mana},level:t.level});performance.now()});ze.on(qs.PLAYER_STATUS,n=>{const e=$w(n);e.playerId===it&&W&&W.userData&&(W.userData.stats.hp=e.hp,W.userData.stats.maxHp=e.maxHp,W.userData.stats.mana=e.mana,W.userData.stats.maxMana=e.maxMana,W.userData.level=e.level,W.userData.xp=e.xp,W.userData.nextLevelXp=e.nextLevelXp,Je&&typeof Je.update=="function"&&Je.update(W.userData.stats,W.userData.level,W.userData.name,W.userData.xp,W.userData.nextLevelXp),Pt&&typeof Pt.updateMana=="function"&&Pt.updateMana(e.mana))});let gn=document.createElement("div");gn.style.position="fixed";gn.style.top="8px";gn.style.left="8px";gn.style.zIndex=99999;gn.style.background="rgba(0,0,0,0.5)";gn.style.color="#fff";gn.style.fontSize="14px";gn.style.padding="4px 10px";gn.style.borderRadius="6px";gn.style.pointerEvents="none";gn.innerText=Zn?"Efeitos Visuais: ON":"Efeitos Visuais: OFF";document.body.appendChild(gn);function da(){gn.innerText=Zn?"Efeitos Visuais: ON":"Efeitos Visuais: OFF"}window.addEventListener("pvpRpgUserSettingsChanged",n=>{const e=n.detail||{};typeof e.visualEffects=="boolean"&&(Zn=e.visualEffects,da())});da();let $n=null,Nn=null;function mT(){pe&&($n||($n=new zf(16777215,.7),pe.add($n)),Nn||(Nn=new Cc(16777215,.7),Nn.position.set(20,40,20),pe.add(Nn)))}function gT(){pe&&($n&&(pe.remove($n),$n=null),Nn&&(pe.remove(Nn),Nn=null))}function Xc(){if(console.log("[DEBUG] Atualizando modo de efeitos visuais. Ativo:",Zn),Zn)console.log("[DEBUG] Ativando modo COMPOSER"),gT(),typeof Se<"u"&&typeof pe<"u"&&(console.log("[DEBUG] Verificando luzes principais..."),(!Se.sunLight||!Se.ambientLight||!Se.hemisphereLight)&&(console.log("[DEBUG] Luzes principais não encontradas, recriando sistema de iluminação!"),typeof Se.setupLighting=="function"&&typeof ct<"u"&&(console.log("[DEBUG] Chamando setupLighting..."),Se.setupLighting(ct))),Se.sunLight?(console.log("[DEBUG] Adicionando sunLight à cena"),pe.children.includes(Se.sunLight)||pe.add(Se.sunLight),Se.sunLight.intensity=2.2):console.warn("[DEBUG] sunLight não existe!"),Se.ambientLight?(console.log("[DEBUG] Adicionando ambientLight à cena"),pe.children.includes(Se.ambientLight)||pe.add(Se.ambientLight),Se.ambientLight.intensity=.8):console.warn("[DEBUG] ambientLight não existe!"),Se.hemisphereLight?(console.log("[DEBUG] Adicionando hemisphereLight à cena"),pe.children.includes(Se.hemisphereLight)||pe.add(Se.hemisphereLight),Se.hemisphereLight.intensity=1.3):console.warn("[DEBUG] hemisphereLight não existe!")),typeof ct<"u"&&typeof Se<"u"&&(ct.toneMapping=fa,ct.toneMappingExposure=Se.toneMappingExposure||1,ct.outputColorSpace=at);else{if(console.log("[DEBUG] Ativando modo RENDERER"),typeof pe<"u"){const n=pe.children.filter(e=>e.isLight&&e!==$n&&e!==Nn&&!e.userData.isFallbackLight);console.log("[DEBUG] Removendo luzes principais:",n.length),n.forEach(e=>pe.remove(e)),Se&&(Se.sunLight&&pe.children.includes(Se.sunLight)&&pe.remove(Se.sunLight),Se.ambientLight&&pe.children.includes(Se.ambientLight)&&pe.remove(Se.ambientLight),Se.hemisphereLight&&pe.children.includes(Se.hemisphereLight)&&pe.remove(Se.hemisphereLight))}mT(),$n&&($n.userData.isFallbackLight=!0,$n.intensity=.45),Nn&&(Nn.userData.isFallbackLight=!0,Nn.intensity=1),typeof ct<"u"&&(ct.toneMapping=gi,ct.toneMappingExposure=1,ct.outputColorSpace=at)}if(da&&da(),typeof pe<"u"){const n=pe.children.filter(e=>e.isLight);console.log("[DEBUG] Depois de alternar: Total de luzes na cena:",n.length),n.forEach((e,t)=>{console.log(`[DEBUG] Luz #${t+1}: ${e.type}, intensidade: ${e.intensity}, fallback: ${!!e.userData.isFallbackLight}`)})}}Xc();window.addEventListener("pvpRpgUserSettingsChanged",n=>{const e=n.detail||{};typeof e.visualEffects=="boolean"&&(Zn=e.visualEffects,Xc())});let _n=document.createElement("div");_n.style.position="fixed";_n.style.top="126px";_n.style.left="8px";_n.style.zIndex=99999;_n.style.background="rgba(0,0,0,0.7)";_n.style.color="#ffe066";_n.style.fontSize="13px";_n.style.padding="4px 12px";_n.style.borderRadius="6px";_n.style.pointerEvents="none";_n.innerText="Diagnóstico: --";document.body.appendChild(_n);function _T(){let n=Zn&&typeof En<"u"?"COMPOSER":"RENDERER",e=pe&&pe.children?pe.children.filter(r=>r.isLight).length:0,t=pe&&pe.children?pe.children.length:0,i=!!wt,s=!!Us;_n.innerText=`Modo: ${n}
Luzes: ${e}
Objs: ${t}
Câmera: ${i?"Sim":"Não"}
Chão: ${s?"Sim":"Não"}`,window.__lastDiagMode!==n&&(console.log("[DIAG] Modo:",n,"| Luzes:",e,"| Objs:",t,"| Câmera:",i,"| Chão:",s),window.__lastDiagMode=n)}const xT=Cn;Cn=function(){_T(),xT()};
