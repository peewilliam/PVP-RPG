(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sc="158",bp=0,Bc=1,wp=2,Od=1,Fd=2,ii=3,di=0,Yt=1,Ft=2,hi=0,ji=1,Dn=2,zc=3,kc=4,Tp=5,Hi=100,Ap=101,Rp=102,Hc=103,Gc=104,Cp=200,Lp=201,Pp=202,Ip=203,wl=204,Tl=205,Dp=206,Np=207,Up=208,Op=209,Fp=210,Bp=211,zp=212,kp=213,Hp=214,Gp=0,Vp=1,Wp=2,Ho=3,Xp=4,$p=5,jp=6,qp=7,rc=0,Yp=1,Kp=2,wi=0,Zp=1,Jp=2,Qp=3,oc=4,em=5,Vc="attached",tm="detached",Bd=300,Ds=301,Ns=302,Al=303,Rl=304,na=306,Zi=1e3,En=1001,Go=1002,Ut=1003,Cl=1004,Bo=1005,nn=1006,zd=1007,Ji=1008,Ti=1009,nm=1010,im=1011,ac=1012,kd=1013,Ei=1014,li=1015,ui=1016,Hd=1017,Gd=1018,qi=1020,sm=1021,Sn=1023,rm=1024,om=1025,Yi=1026,Us=1027,am=1028,Vd=1029,lm=1030,Wd=1031,Xd=1033,xa=33776,va=33777,ya=33778,Ma=33779,Wc=35840,Xc=35841,$c=35842,jc=35843,cm=36196,qc=37492,Yc=37496,Kc=37808,Zc=37809,Jc=37810,Qc=37811,eh=37812,th=37813,nh=37814,ih=37815,sh=37816,rh=37817,oh=37818,ah=37819,lh=37820,ch=37821,Ea=36492,hh=36494,uh=36495,hm=36283,dh=36284,fh=36285,ph=36286,Ar=2300,Os=2301,Sa=2302,mh=2400,gh=2401,_h=2402,um=2500,dm=0,$d=1,Ll=2,jd=3e3,Ki=3001,fm=3200,pm=3201,lc=0,mm=1,bn="",ht="srgb",Xt="srgb-linear",cc="display-p3",ia="display-p3-linear",Vo="linear",dt="srgb",Wo="rec709",Xo="p3",rs=7680,xh=519,gm=512,_m=513,xm=514,vm=515,ym=516,Mm=517,Em=518,Sm=519,Pl=35044,vh="300 es",Il=1035,ci=2e3,$o=2001;class Xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yh=1234567;const yr=Math.PI/180,Fs=180/Math.PI;function Nn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function Ot(n,e,t){return Math.max(e,Math.min(t,n))}function hc(n,e){return(n%e+e)%e}function bm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function wm(n,e,t){return n!==e?(t-n)/(e-n):0}function Mr(n,e,t){return(1-t)*n+t*e}function Tm(n,e,t,i){return Mr(n,e,1-Math.exp(-t*i))}function Am(n,e=1){return e-Math.abs(hc(n,e*2)-e)}function Rm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Cm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Lm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Pm(n,e){return n+Math.random()*(e-n)}function Im(n){return n*(.5-Math.random())}function Dm(n){n!==void 0&&(yh=n);let e=yh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nm(n){return n*yr}function Um(n){return n*Fs}function Dl(n){return(n&n-1)===0&&n!==0}function qd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function jo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Om(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Fm={DEG2RAD:yr,RAD2DEG:Fs,generateUUID:Nn,clamp:Ot,euclideanModulo:hc,mapLinear:bm,inverseLerp:wm,lerp:Mr,damp:Tm,pingpong:Am,smoothstep:Rm,smootherstep:Cm,randInt:Lm,randFloat:Pm,randFloatSpread:Im,seededRandom:Dm,degToRad:Nm,radToDeg:Um,isPowerOfTwo:Dl,ceilPowerOfTwo:qd,floorPowerOfTwo:jo,setQuaternionFromProperEuler:Om,normalize:tt,denormalize:kn};class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,s,r,o,a,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],v=s[1],x=s[4],y=s[7],E=s[2],A=s[5],w=s[8];return r[0]=o*_+a*v+c*E,r[3]=o*m+a*x+c*A,r[6]=o*p+a*y+c*w,r[1]=l*_+h*v+u*E,r[4]=l*m+h*x+u*A,r[7]=l*p+h*y+u*w,r[2]=d*_+f*v+g*E,r[5]=d*m+f*x+g*A,r[8]=d*p+f*y+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*l-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ba.makeScale(e,t)),this}rotate(e){return this.premultiply(ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ba=new He;function Yd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bm(){const n=Rr("canvas");return n.style.display="block",n}const Mh={};function Er(n){n in Mh||(Mh[n]=!0,console.warn(n))}const Eh=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sh=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),eo={[Xt]:{transfer:Vo,primaries:Wo,toReference:n=>n,fromReference:n=>n},[ht]:{transfer:dt,primaries:Wo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ia]:{transfer:Vo,primaries:Xo,toReference:n=>n.applyMatrix3(Sh),fromReference:n=>n.applyMatrix3(Eh)},[cc]:{transfer:dt,primaries:Xo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Sh),fromReference:n=>n.applyMatrix3(Eh).convertLinearToSRGB()}},zm=new Set([Xt,ia]),Je={enabled:!0,_workingColorSpace:Xt,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!zm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=eo[e].toReference,s=eo[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return eo[n].primaries},getTransfer:function(n){return n===bn?Vo:eo[n].transfer}};function Cs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function wa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let os;class Kd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{os===void 0&&(os=Rr("canvas")),os.width=e.width,os.height=e.height;const i=os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Cs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Cs(t[i]/255)*255):t[i]=Cs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let km=0;class Zd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Nn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ta(s[o].image)):r.push(Ta(s[o]))}else r=Ta(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ta(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Kd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hm=0;class zt extends Xs{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,i=En,s=En,r=nn,o=Ji,a=Sn,c=Ti,l=zt.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Nn(),this.name="",this.source=new Zd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ki?ht:bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zi:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case Go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zi:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case Go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ht?Ki:jd}set encoding(e){Er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ki?ht:bn}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Bd;zt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,i=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,y=(f+1)/2,E=(p+1)/2,A=(h+d)/4,w=(u+_)/4,L=(g+m)/4;return x>y&&x>E?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=A/i,r=w/i):y>E?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=A/s,r=L/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=w/r,s=L/r),this.set(i,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gm extends Xs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(Er("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ki?ht:bn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new zt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends Gm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Jd extends zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vm extends zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Li{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const E=Math.sqrt(x),A=Math.atan2(E,p*v);m=Math.sin(m*A)/E,a=Math.sin(a*A)/E}const y=a*v;if(c=c*m+d*y,l=l*m+f*y,h=h*m+g*y,u=u*m+_*y,m===1-a){const E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Aa.copy(this).projectOnVector(e),this.sub(Aa)}reflect(e){return this.sub(Aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Aa=new R,bh=new Li;class fi{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),to.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),to.copy(i.boundingBox)),to.applyMatrix4(e.matrixWorld),this.union(to)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),no.subVectors(this.max,nr),as.subVectors(e.a,nr),ls.subVectors(e.b,nr),cs.subVectors(e.c,nr),pi.subVectors(ls,as),mi.subVectors(cs,ls),Ni.subVectors(as,cs);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ni.z,Ni.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ni.z,0,-Ni.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ni.y,Ni.x,0];return!Ra(t,as,ls,cs,no)||(t=[1,0,0,0,1,0,0,0,1],!Ra(t,as,ls,cs,no))?!1:(io.crossVectors(pi,mi),t=[io.x,io.y,io.z],Ra(t,as,ls,cs,no))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new R,new R,new R,new R,new R,new R,new R,new R],Cn=new R,to=new fi,as=new R,ls=new R,cs=new R,pi=new R,mi=new R,Ni=new R,nr=new R,no=new R,io=new R,Ui=new R;function Ra(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ui.fromArray(n,r);const a=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),c=e.dot(Ui),l=t.dot(Ui),h=i.dot(Ui);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Wm=new fi,ir=new R,Ca=new R;class jn{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Wm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);const t=ir.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ir,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(Ca)),this.expandByPoint(ir.copy(e.center).sub(Ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new R,La=new R,so=new R,gi=new R,Pa=new R,ro=new R,Ia=new R;class zr{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){La.copy(e).add(t).multiplyScalar(.5),so.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(La);const r=e.distanceTo(t)*.5,o=-this.direction.dot(so),a=gi.dot(this.direction),c=-gi.dot(so),l=gi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(La).addScaledVector(so,d),f}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),s=Zn.dot(Zn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,i,s,r){Pa.subVectors(t,e),ro.subVectors(i,e),Ia.crossVectors(Pa,ro);let o=this.direction.dot(Ia),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,e);const c=a*this.direction.dot(ro.crossVectors(gi,ro));if(c<0)return null;const l=a*this.direction.dot(Pa.cross(gi));if(l<0||c+l>o)return null;const h=-a*gi.dot(Ia);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(e,t,i,s,r,o,a,c,l,h,u,d,f,g,_,m){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,d,f,g,_,m)}set(e,t,i,s,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/hs.setFromMatrixColumn(e,0).length(),r=1/hs.setFromMatrixColumn(e,1).length(),o=1/hs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xm,e,$m)}lookAt(e,t,i){const s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),_i.crossVectors(i,un),_i.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),_i.crossVectors(i,un)),_i.normalize(),oo.crossVectors(un,_i),s[0]=_i.x,s[4]=oo.x,s[8]=un.x,s[1]=_i.y,s[5]=oo.y,s[9]=un.y,s[2]=_i.z,s[6]=oo.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],v=i[3],x=i[7],y=i[11],E=i[15],A=s[0],w=s[4],L=s[8],M=s[12],S=s[1],D=s[5],O=s[9],$=s[13],P=s[2],k=s[6],X=s[10],j=s[14],ne=s[3],K=s[7],q=s[11],N=s[15];return r[0]=o*A+a*S+c*P+l*ne,r[4]=o*w+a*D+c*k+l*K,r[8]=o*L+a*O+c*X+l*q,r[12]=o*M+a*$+c*j+l*N,r[1]=h*A+u*S+d*P+f*ne,r[5]=h*w+u*D+d*k+f*K,r[9]=h*L+u*O+d*X+f*q,r[13]=h*M+u*$+d*j+f*N,r[2]=g*A+_*S+m*P+p*ne,r[6]=g*w+_*D+m*k+p*K,r[10]=g*L+_*O+m*X+p*q,r[14]=g*M+_*$+m*j+p*N,r[3]=v*A+x*S+y*P+E*ne,r[7]=v*w+x*D+y*k+E*K,r[11]=v*L+x*O+y*X+E*q,r[15]=v*M+x*$+y*j+E*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*f-i*c*f)+_*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+i*o*f+r*a*h-i*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-i*o*d+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,x=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,y=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,E=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,A=t*v+i*x+s*y+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=v*w,e[1]=(_*d*r-u*m*r-_*s*f+i*m*f+u*s*p-i*d*p)*w,e[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*p+i*c*p)*w,e[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*f-i*c*f)*w,e[4]=x*w,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*w,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*w,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*w,e[8]=y*w,e[9]=(g*u*r-h*_*r-g*i*f+t*_*f+h*i*p-t*u*p)*w,e[10]=(o*_*r-g*a*r+g*i*l-t*_*l-o*i*p+t*a*p)*w,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*f-t*a*f)*w,e[12]=E*w,e[13]=(h*_*s-g*u*s+g*i*d-t*_*d-h*i*m+t*u*m)*w,e[14]=(g*a*s-o*_*s-g*i*c+t*_*c+o*i*m-t*a*m)*w,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*d+t*a*d)*w,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,v=c*l,x=c*h,y=c*u,E=i.x,A=i.y,w=i.z;return s[0]=(1-(_+p))*E,s[1]=(f+y)*E,s[2]=(g-x)*E,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(d+p))*A,s[6]=(m+v)*A,s[7]=0,s[8]=(g+x)*w,s[9]=(m-v)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=hs.set(s[0],s[1],s[2]).length();const o=hs.set(s[4],s[5],s[6]).length(),a=hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ln.copy(this);const l=1/r,h=1/o,u=1/a;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,t.setFromRotationMatrix(Ln),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ci){const c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s);let f,g;if(a===ci)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===$o)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ci){const c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*l,f=(i+s)*h;let g,_;if(a===ci)g=(o+r)*u,_=-2*u;else if(a===$o)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const hs=new R,Ln=new De,Xm=new R(0,0,0),$m=new R(1,1,1),_i=new R,oo=new R,un=new R,wh=new De,Th=new Li;class sa{constructor(e=0,t=0,i=0,s=sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Th.setFromEuler(this),this.setFromQuaternion(Th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sa.DEFAULT_ORDER="XYZ";class uc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jm=0;const Ah=new R,us=new Li,Jn=new De,ao=new R,sr=new R,qm=new R,Ym=new Li,Rh=new R(1,0,0),Ch=new R(0,1,0),Lh=new R(0,0,1),Km={type:"added"},Zm={type:"removed"};class ft extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new R,t=new sa,i=new Li,s=new R(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new He}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(Rh,e)}rotateY(e){return this.rotateOnAxis(Ch,e)}rotateZ(e){return this.rotateOnAxis(Lh,e)}translateOnAxis(e,t){return Ah.copy(e).applyQuaternion(this.quaternion),this.position.add(Ah.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rh,e)}translateY(e){return this.translateOnAxis(Ch,e)}translateZ(e){return this.translateOnAxis(Lh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ao.copy(e):ao.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(sr,ao,this.up):Jn.lookAt(ao,sr,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),us.setFromRotationMatrix(Jn),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Km)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,e,qm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,Ym,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}ft.DEFAULT_UP=new R(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new R,Qn=new R,Da=new R,ei=new R,ds=new R,fs=new R,Ph=new R,Na=new R,Ua=new R,Oa=new R;let lo=!1;class Mn{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Pn.subVectors(e,t),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Pn.subVectors(s,t),Qn.subVectors(i,t),Da.subVectors(e,t);const o=Pn.dot(Pn),a=Pn.dot(Qn),c=Pn.dot(Da),l=Qn.dot(Qn),h=Qn.dot(Da),u=o*l-a*a;if(u===0)return r.set(-2,-1,-1);const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ei),ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(e,t,i,s,r,o,a,c){return lo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lo=!0),this.getInterpolation(e,t,i,s,r,o,a,c)}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,ei),c.setScalar(0),c.addScaledVector(r,ei.x),c.addScaledVector(o,ei.y),c.addScaledVector(a,ei.z),c}static isFrontFacing(e,t,i,s){return Pn.subVectors(i,t),Qn.subVectors(e,t),Pn.cross(Qn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Pn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return lo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),lo=!0),Mn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ds.subVectors(s,i),fs.subVectors(r,i),Na.subVectors(e,i);const c=ds.dot(Na),l=fs.dot(Na);if(c<=0&&l<=0)return t.copy(i);Ua.subVectors(e,s);const h=ds.dot(Ua),u=fs.dot(Ua);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(ds,o);Oa.subVectors(e,r);const f=ds.dot(Oa),g=fs.dot(Oa);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(fs,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ph.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Ph,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector(ds,o).addScaledVector(fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},co={h:0,s:0,l:0};function Fa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class me{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Je.workingColorSpace){if(e=hc(e,1),t=Ot(t,0,1),i=Ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Fa(o,r,e+1/3),this.g=Fa(o,r,e),this.b=Fa(o,r,e-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(e,t=ht){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ht){const i=Qd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}copyLinearToSRGB(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ht){return Je.fromWorkingColorSpace(qt.copy(this),e),Math.round(Ot(qt.r*255,0,255))*65536+Math.round(Ot(qt.g*255,0,255))*256+Math.round(Ot(qt.b*255,0,255))}getHexString(e=ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(qt.copy(this),t);const i=qt.r,s=qt.g,r=qt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=ht){Je.fromWorkingColorSpace(qt.copy(this),e);const t=qt.r,i=qt.g,s=qt.b;return e!==ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(co);const i=Mr(xi.h,co.h,t),s=Mr(xi.s,co.s,t),r=Mr(xi.l,co.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new me;me.NAMES=Qd;let Jm=0;class Tn extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=ji,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wl,this.blendDst=Tl,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(i.blending=this.blending),this.side!==di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wl&&(i.blendSrc=this.blendSrc),this.blendDst!==Tl&&(i.blendDst=this.blendDst),this.blendEquation!==Hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ho&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mt extends Tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new R,ho=new fe;class Wt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Pl,this.updateRange={offset:0,count:-1},this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ho.fromBufferAttribute(this,t),ho.applyMatrix3(e),this.setXY(t,ho.x,ho.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=kn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class ef extends Wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class tf extends Wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class lt extends Wt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Qm=0;const xn=new De,Ba=new ft,ps=new R,dn=new fi,rr=new fi,Dt=new R;class Mt extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yd(e)?tf:ef)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new He().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,i){return xn.makeTranslation(e,t,i),this.applyMatrix4(xn),this}scale(e,t,i){return xn.makeScale(e,t,i),this.applyMatrix4(xn),this}lookAt(e){return Ba.lookAt(e),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(dn.min,rr.min),dn.expandByPoint(Dt),Dt.addVectors(dn.max,rr.max),dn.expandByPoint(Dt)):(dn.expandByPoint(rr.min),dn.expandByPoint(rr.max))}dn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Dt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Dt.fromBufferAttribute(a,l),c&&(ps.fromBufferAttribute(e,l),Dt.add(ps)),s=Math.max(s,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let S=0;S<a;S++)l[S]=new R,h[S]=new R;const u=new R,d=new R,f=new R,g=new fe,_=new fe,m=new fe,p=new R,v=new R;function x(S,D,O){u.fromArray(s,S*3),d.fromArray(s,D*3),f.fromArray(s,O*3),g.fromArray(o,S*2),_.fromArray(o,D*2),m.fromArray(o,O*2),d.sub(u),f.sub(u),_.sub(g),m.sub(g);const $=1/(_.x*m.y-m.x*_.y);isFinite($)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar($),v.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar($),l[S].add(p),l[D].add(p),l[O].add(p),h[S].add(v),h[D].add(v),h[O].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let S=0,D=y.length;S<D;++S){const O=y[S],$=O.start,P=O.count;for(let k=$,X=$+P;k<X;k+=3)x(i[k+0],i[k+1],i[k+2])}const E=new R,A=new R,w=new R,L=new R;function M(S){w.fromArray(r,S*3),L.copy(w);const D=l[S];E.copy(D),E.sub(w.multiplyScalar(w.dot(D))).normalize(),A.crossVectors(L,D);const $=A.dot(h[S])<0?-1:1;c[S*4]=E.x,c[S*4+1]=E.y,c[S*4+2]=E.z,c[S*4+3]=$}for(let S=0,D=y.length;S<D;++S){const O=y[S],$=O.start,P=O.count;for(let k=$,X=$+P;k<X;k+=3)M(i[k+0]),M(i[k+1]),M(i[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Wt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ih=new De,Oi=new zr,uo=new jn,Dh=new R,ms=new R,gs=new R,_s=new R,za=new R,fo=new R,po=new fe,mo=new fe,go=new fe,Nh=new R,Uh=new R,Oh=new R,_o=new R,xo=new R;class oe extends ft{constructor(e=new Mt,t=new mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){fo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(za.fromBufferAttribute(u,e),o?fo.addScaledVector(za,h):fo.addScaledVector(za.sub(t),h))}t.add(fo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(uo.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(uo,Dh)===null||Oi.origin.distanceToSquared(Dh)>(e.far-e.near)**2))&&(Ih.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(Ih),!(i.boundingBox!==null&&Oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,E=x;y<E;y+=3){const A=a.getX(y),w=a.getX(y+1),L=a.getX(y+2);s=vo(this,p,e,i,l,h,u,A,w,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);s=vo(this,o,e,i,l,h,u,v,x,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,E=x;y<E;y+=3){const A=y,w=y+1,L=y+2;s=vo(this,p,e,i,l,h,u,A,w,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,x=m+1,y=m+2;s=vo(this,o,e,i,l,h,u,v,x,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function eg(n,e,t,i,s,r,o,a){let c;if(e.side===Yt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===di,a),c===null)return null;xo.copy(a),xo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(xo);return l<t.near||l>t.far?null:{distance:l,point:xo.clone(),object:n}}function vo(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,ms),n.getVertexPosition(c,gs),n.getVertexPosition(l,_s);const h=eg(n,e,t,i,ms,gs,_s,_o);if(h){s&&(po.fromBufferAttribute(s,a),mo.fromBufferAttribute(s,c),go.fromBufferAttribute(s,l),h.uv=Mn.getInterpolation(_o,ms,gs,_s,po,mo,go,new fe)),r&&(po.fromBufferAttribute(r,a),mo.fromBufferAttribute(r,c),go.fromBufferAttribute(r,l),h.uv1=Mn.getInterpolation(_o,ms,gs,_s,po,mo,go,new fe),h.uv2=h.uv1),o&&(Nh.fromBufferAttribute(o,a),Uh.fromBufferAttribute(o,c),Oh.fromBufferAttribute(o,l),h.normal=Mn.getInterpolation(_o,ms,gs,_s,Nh,Uh,Oh,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new R,materialIndex:0};Mn.getNormal(ms,gs,_s,u.normal),h.face=u}return h}class Gt extends Mt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function g(_,m,p,v,x,y,E,A,w,L,M){const S=y/w,D=E/L,O=y/2,$=E/2,P=A/2,k=w+1,X=L+1;let j=0,ne=0;const K=new R;for(let q=0;q<X;q++){const N=q*D-$;for(let V=0;V<k;V++){const le=V*S-O;K[_]=le*v,K[m]=N*x,K[p]=P,l.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[p]=A>0?1:-1,h.push(K.x,K.y,K.z),u.push(V/w),u.push(1-q/L),j+=1}}for(let q=0;q<L;q++)for(let N=0;N<w;N++){const V=d+N+k*q,le=d+N+k*(q+1),ue=d+(N+1)+k*(q+1),pe=d+(N+1)+k*q;c.push(V,le,pe),c.push(le,ue,pe),ne+=6}a.addGroup(f,ne,M),f+=ne,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Qt(n){const e={};for(let t=0;t<n.length;t++){const i=Bs(n[t]);for(const s in i)e[s]=i[s]}return e}function tg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function nf(n){return n.getRenderTarget()===null?n.outputColorSpace:Je.workingColorSpace}const qo={clone:Bs,merge:Qt};var ng=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ig=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends Tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ng,this.fragmentShader=ig,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=tg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class sf extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class sn extends sf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xs=-90,vs=1;class sg extends ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(xs,vs,e,t);s.layers=this.layers,this.add(s);const r=new sn(xs,vs,e,t);r.layers=this.layers,this.add(r);const o=new sn(xs,vs,e,t);o.layers=this.layers,this.add(o);const a=new sn(xs,vs,e,t);a.layers=this.layers,this.add(a);const c=new sn(xs,vs,e,t);c.layers=this.layers,this.add(c);const l=new sn(xs,vs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$o)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class rf extends zt{constructor(e,t,i,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ds,super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rg extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Er("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ki?ht:bn),this.texture=new rf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gt(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:hi});r.uniforms.tEquirect.value=t;const o=new oe(s,r),a=t.minFilter;return t.minFilter===Ji&&(t.minFilter=nn),new sg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const ka=new R,og=new R,ag=new He;class zi{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ka.subVectors(i,t).cross(og.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ka),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ag.getNormalMatrix(e),s=this.coplanarPoint(ka).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new jn,yo=new R;class ra{constructor(e=new zi,t=new zi,i=new zi,s=new zi,r=new zi,o=new zi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ci){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],v=s[13],x=s[14],y=s[15];if(i[0].setComponents(c-r,d-l,m-f,y-p).normalize(),i[1].setComponents(c+r,d+l,m+f,y+p).normalize(),i[2].setComponents(c+o,d+h,m+g,y+v).normalize(),i[3].setComponents(c-o,d-h,m-g,y-v).normalize(),i[4].setComponents(c-a,d-u,m-_,y-x).normalize(),t===ci)i[5].setComponents(c+a,d+u,m+_,y+x).normalize();else if(t===$o)i[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(yo.x=s.normal.x>0?e.max.x:e.min.x,yo.y=s.normal.y>0?e.max.y:e.min.y,yo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(yo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function of(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function lg(n,e){const t=e.isWebGL2,i=new WeakMap;function s(l,h){const u=l.array,d=l.usage,f=n.createBuffer();n.bindBuffer(h,f),n.bufferData(h,u,d),l.onUploadCallback();let g;if(u instanceof Float32Array)g=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=n.SHORT;else if(u instanceof Uint32Array)g=n.UNSIGNED_INT;else if(u instanceof Int32Array)g=n.INT;else if(u instanceof Int8Array)g=n.BYTE;else if(u instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function r(l,h,u){const d=h.array,f=h.updateRange;n.bindBuffer(u,l),f.count===-1?n.bufferSubData(u,0,d):(t?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u===void 0?i.set(l,s(l,h)):u.version<l.version&&(r(u.buffer,l,h),u.version=l.version)}return{get:o,remove:a,update:c}}class oa extends Mt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*d-o;for(let x=0;x<l;x++){const y=x*u-r;g.push(y,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const x=v+l*p,y=v+l*(p+1),E=v+1+l*(p+1),A=v+1+l*p;f.push(x,y,A),f.push(y,E,A)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.width,e.height,e.widthSegments,e.heightSegments)}}var cg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hg=`#ifdef USE_ALPHAHASH
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
#endif`,ug=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,pg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mg=`#ifdef USE_AOMAP
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
#endif`,gg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_g=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yg=`#ifdef USE_IRIDESCENCE
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
#endif`,Mg=`#ifdef USE_BUMPMAP
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
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lg=`#define PI 3.141592653589793
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
} // validated`,Pg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ig=`vec3 transformedNormal = objectNormal;
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
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bg=`
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
}`,zg=`#ifdef USE_ENVMAP
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
#endif`,kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
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
#endif`,Wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qg=`#ifdef USE_GRADIENTMAP
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
}`,Yg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qg=`uniform bool receiveShadow;
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
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,t0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r0=`PhysicalMaterial material;
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
#endif`,o0=`struct PhysicalMaterial {
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
}`,a0=`
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
#endif`,l0=`#if defined( RE_IndirectDiffuse )
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
#endif`,c0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,f0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,p0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_0=`#if defined( USE_POINTS_UV )
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
#endif`,x0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M0=`#ifdef USE_MORPHNORMALS
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
#endif`,E0=`#ifdef USE_MORPHTARGETS
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
#endif`,S0=`#ifdef USE_MORPHTARGETS
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
#endif`,b0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,w0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,T0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,C0=`#ifdef USE_NORMALMAP
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
#endif`,L0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X0=`float getShadowMask() {
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
}`,$0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j0=`#ifdef USE_SKINNING
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
#endif`,q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y0=`#ifdef USE_SKINNING
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
#endif`,K0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e_=`#ifdef USE_TRANSMISSION
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
#endif`,t_=`#ifdef USE_TRANSMISSION
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
#endif`,n_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a_=`uniform sampler2D t2D;
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
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d_=`#include <common>
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
}`,f_=`#if DEPTH_PACKING == 3200
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
}`,p_=`#define DISTANCE
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
}`,m_=`#define DISTANCE
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
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,__=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x_=`uniform float scale;
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
}`,v_=`uniform vec3 diffuse;
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
}`,y_=`#include <common>
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
}`,M_=`uniform vec3 diffuse;
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
}`,E_=`#define LAMBERT
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
}`,S_=`#define LAMBERT
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
}`,b_=`#define MATCAP
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
}`,w_=`#define MATCAP
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
}`,T_=`#define NORMAL
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
}`,A_=`#define NORMAL
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
}`,R_=`#define PHONG
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
}`,C_=`#define PHONG
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
}`,L_=`#define STANDARD
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
}`,P_=`#define STANDARD
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
}`,I_=`#define TOON
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
}`,D_=`#define TOON
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
}`,N_=`uniform float size;
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
}`,U_=`uniform vec3 diffuse;
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
}`,O_=`#include <common>
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
}`,F_=`uniform vec3 color;
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
}`,B_=`uniform float rotation;
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
}`,z_=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:cg,alphahash_pars_fragment:hg,alphamap_fragment:ug,alphamap_pars_fragment:dg,alphatest_fragment:fg,alphatest_pars_fragment:pg,aomap_fragment:mg,aomap_pars_fragment:gg,begin_vertex:_g,beginnormal_vertex:xg,bsdfs:vg,iridescence_fragment:yg,bumpmap_pars_fragment:Mg,clipping_planes_fragment:Eg,clipping_planes_pars_fragment:Sg,clipping_planes_pars_vertex:bg,clipping_planes_vertex:wg,color_fragment:Tg,color_pars_fragment:Ag,color_pars_vertex:Rg,color_vertex:Cg,common:Lg,cube_uv_reflection_fragment:Pg,defaultnormal_vertex:Ig,displacementmap_pars_vertex:Dg,displacementmap_vertex:Ng,emissivemap_fragment:Ug,emissivemap_pars_fragment:Og,colorspace_fragment:Fg,colorspace_pars_fragment:Bg,envmap_fragment:zg,envmap_common_pars_fragment:kg,envmap_pars_fragment:Hg,envmap_pars_vertex:Gg,envmap_physical_pars_fragment:e0,envmap_vertex:Vg,fog_vertex:Wg,fog_pars_vertex:Xg,fog_fragment:$g,fog_pars_fragment:jg,gradientmap_pars_fragment:qg,lightmap_fragment:Yg,lightmap_pars_fragment:Kg,lights_lambert_fragment:Zg,lights_lambert_pars_fragment:Jg,lights_pars_begin:Qg,lights_toon_fragment:t0,lights_toon_pars_fragment:n0,lights_phong_fragment:i0,lights_phong_pars_fragment:s0,lights_physical_fragment:r0,lights_physical_pars_fragment:o0,lights_fragment_begin:a0,lights_fragment_maps:l0,lights_fragment_end:c0,logdepthbuf_fragment:h0,logdepthbuf_pars_fragment:u0,logdepthbuf_pars_vertex:d0,logdepthbuf_vertex:f0,map_fragment:p0,map_pars_fragment:m0,map_particle_fragment:g0,map_particle_pars_fragment:_0,metalnessmap_fragment:x0,metalnessmap_pars_fragment:v0,morphcolor_vertex:y0,morphnormal_vertex:M0,morphtarget_pars_vertex:E0,morphtarget_vertex:S0,normal_fragment_begin:b0,normal_fragment_maps:w0,normal_pars_fragment:T0,normal_pars_vertex:A0,normal_vertex:R0,normalmap_pars_fragment:C0,clearcoat_normal_fragment_begin:L0,clearcoat_normal_fragment_maps:P0,clearcoat_pars_fragment:I0,iridescence_pars_fragment:D0,opaque_fragment:N0,packing:U0,premultiplied_alpha_fragment:O0,project_vertex:F0,dithering_fragment:B0,dithering_pars_fragment:z0,roughnessmap_fragment:k0,roughnessmap_pars_fragment:H0,shadowmap_pars_fragment:G0,shadowmap_pars_vertex:V0,shadowmap_vertex:W0,shadowmask_pars_fragment:X0,skinbase_vertex:$0,skinning_pars_vertex:j0,skinning_vertex:q0,skinnormal_vertex:Y0,specularmap_fragment:K0,specularmap_pars_fragment:Z0,tonemapping_fragment:J0,tonemapping_pars_fragment:Q0,transmission_fragment:e_,transmission_pars_fragment:t_,uv_pars_fragment:n_,uv_pars_vertex:i_,uv_vertex:s_,worldpos_vertex:r_,background_vert:o_,background_frag:a_,backgroundCube_vert:l_,backgroundCube_frag:c_,cube_vert:h_,cube_frag:u_,depth_vert:d_,depth_frag:f_,distanceRGBA_vert:p_,distanceRGBA_frag:m_,equirect_vert:g_,equirect_frag:__,linedashed_vert:x_,linedashed_frag:v_,meshbasic_vert:y_,meshbasic_frag:M_,meshlambert_vert:E_,meshlambert_frag:S_,meshmatcap_vert:b_,meshmatcap_frag:w_,meshnormal_vert:T_,meshnormal_frag:A_,meshphong_vert:R_,meshphong_frag:C_,meshphysical_vert:L_,meshphysical_frag:P_,meshtoon_vert:I_,meshtoon_frag:D_,points_vert:N_,points_frag:U_,shadow_vert:O_,shadow_frag:F_,sprite_vert:B_,sprite_frag:z_},re={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},zn={basic:{uniforms:Qt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Qt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new me(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Qt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Qt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Qt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new me(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Qt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Qt([re.points,re.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Qt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Qt([re.common,re.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Qt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Qt([re.sprite,re.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Qt([re.common,re.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Qt([re.lights,re.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};zn.physical={uniforms:Qt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Mo={r:0,b:0,g:0};function k_(n,e,t,i,s,r,o){const a=new me(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(m,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),v=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===na)?(h===void 0&&(h=new oe(new Gt(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Bs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Je.getTransfer(x.colorSpace)!==dt,(u!==x||d!==x.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new oe(new oa(2,2),new rn({name:"BackgroundMaterial",uniforms:Bs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Je.getTransfer(x.colorSpace)!==dt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,p){m.getRGB(Mo,nf(n)),i.buffers.color.setClear(Mo.r,Mo.g,Mo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function H_(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=m(null);let l=c,h=!1;function u(P,k,X,j,ne){let K=!1;if(o){const q=_(j,X,k);l!==q&&(l=q,f(l.object)),K=p(P,j,X,ne),K&&v(P,j,X,ne)}else{const q=k.wireframe===!0;(l.geometry!==j.id||l.program!==X.id||l.wireframe!==q)&&(l.geometry=j.id,l.program=X.id,l.wireframe=q,K=!0)}ne!==null&&t.update(ne,n.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,L(P,k,X,j),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ne).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function f(P){return i.isWebGL2?n.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?n.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,k,X){const j=X.wireframe===!0;let ne=a[P.id];ne===void 0&&(ne={},a[P.id]=ne);let K=ne[k.id];K===void 0&&(K={},ne[k.id]=K);let q=K[j];return q===void 0&&(q=m(d()),K[j]=q),q}function m(P){const k=[],X=[],j=[];for(let ne=0;ne<s;ne++)k[ne]=0,X[ne]=0,j[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:j,object:P,attributes:{},index:null}}function p(P,k,X,j){const ne=l.attributes,K=k.attributes;let q=0;const N=X.getAttributes();for(const V in N)if(N[V].location>=0){const ue=ne[V];let pe=K[V];if(pe===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(pe=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(pe=P.instanceColor)),ue===void 0||ue.attribute!==pe||pe&&ue.data!==pe.data)return!0;q++}return l.attributesNum!==q||l.index!==j}function v(P,k,X,j){const ne={},K=k.attributes;let q=0;const N=X.getAttributes();for(const V in N)if(N[V].location>=0){let ue=K[V];ue===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor));const pe={};pe.attribute=ue,ue&&ue.data&&(pe.data=ue.data),ne[V]=pe,q++}l.attributes=ne,l.attributesNum=q,l.index=j}function x(){const P=l.newAttributes;for(let k=0,X=P.length;k<X;k++)P[k]=0}function y(P){E(P,0)}function E(P,k){const X=l.newAttributes,j=l.enabledAttributes,ne=l.attributeDivisors;X[P]=1,j[P]===0&&(n.enableVertexAttribArray(P),j[P]=1),ne[P]!==k&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,k),ne[P]=k)}function A(){const P=l.newAttributes,k=l.enabledAttributes;for(let X=0,j=k.length;X<j;X++)k[X]!==P[X]&&(n.disableVertexAttribArray(X),k[X]=0)}function w(P,k,X,j,ne,K,q){q===!0?n.vertexAttribIPointer(P,k,X,ne,K):n.vertexAttribPointer(P,k,X,j,ne,K)}function L(P,k,X,j){if(i.isWebGL2===!1&&(P.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const ne=j.attributes,K=X.getAttributes(),q=k.defaultAttributeValues;for(const N in K){const V=K[N];if(V.location>=0){let le=ne[N];if(le===void 0&&(N==="instanceMatrix"&&P.instanceMatrix&&(le=P.instanceMatrix),N==="instanceColor"&&P.instanceColor&&(le=P.instanceColor)),le!==void 0){const ue=le.normalized,pe=le.itemSize,Se=t.get(le);if(Se===void 0)continue;const We=Se.buffer,Re=Se.type,Ne=Se.bytesPerElement,xt=i.isWebGL2===!0&&(Re===n.INT||Re===n.UNSIGNED_INT||le.gpuType===kd);if(le.isInterleavedBufferAttribute){const Fe=le.data,F=Fe.stride,ln=le.offset;if(Fe.isInstancedInterleavedBuffer){for(let ve=0;ve<V.locationSize;ve++)E(V.location+ve,Fe.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let ve=0;ve<V.locationSize;ve++)y(V.location+ve);n.bindBuffer(n.ARRAY_BUFFER,We);for(let ve=0;ve<V.locationSize;ve++)w(V.location+ve,pe/V.locationSize,Re,ue,F*Ne,(ln+pe/V.locationSize*ve)*Ne,xt)}else{if(le.isInstancedBufferAttribute){for(let Fe=0;Fe<V.locationSize;Fe++)E(V.location+Fe,le.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Fe=0;Fe<V.locationSize;Fe++)y(V.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,We);for(let Fe=0;Fe<V.locationSize;Fe++)w(V.location+Fe,pe/V.locationSize,Re,ue,pe*Ne,pe/V.locationSize*Fe*Ne,xt)}}else if(q!==void 0){const ue=q[N];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(V.location,ue);break;case 3:n.vertexAttrib3fv(V.location,ue);break;case 4:n.vertexAttrib4fv(V.location,ue);break;default:n.vertexAttrib1fv(V.location,ue)}}}}A()}function M(){O();for(const P in a){const k=a[P];for(const X in k){const j=k[X];for(const ne in j)g(j[ne].object),delete j[ne];delete k[X]}delete a[P]}}function S(P){if(a[P.id]===void 0)return;const k=a[P.id];for(const X in k){const j=k[X];for(const ne in j)g(j[ne].object),delete j[ne];delete k[X]}delete a[P.id]}function D(P){for(const k in a){const X=a[k];if(X[P.id]===void 0)continue;const j=X[P.id];for(const ne in j)g(j[ne].object),delete j[ne];delete X[P.id]}}function O(){$(),h=!0,l!==c&&(l=c,f(l.object))}function $(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:O,resetDefaultState:$,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:y,disableUnusedAttributes:A}}function G_(n,e,t,i){const s=i.isWebGL2;let r;function o(l){r=l}function a(l,h){n.drawArrays(r,l,h),t.update(h,r,1)}function c(l,h,u){if(u===0)return;let d,f;if(s)d=n,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,l,h,u),t.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=c}function V_(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,y=o||e.has("OES_texture_float"),E=x&&y,A=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:A}}function W_(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new zi,a=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const v=r?0:i,x=v*4;let y=p.clippingState||null;c.value=y,y=h(g,d,x,f);for(let E=0;E!==x;++E)y[E]=t[E];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=f;x!==_;++x,y+=4)o.copy(u[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function X_(n){let e=new WeakMap;function t(o,a){return a===Al?o.mapping=Ds:a===Rl&&(o.mapping=Ns),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Al||a===Rl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new rg(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class kr extends sf{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Rs=4,Fh=[.125,.215,.35,.446,.526,.582],Gi=20,Ha=new kr,Bh=new me;let Ga=null,Va=0,Wa=0;const ki=(1+Math.sqrt(5))/2,ys=1/ki,zh=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,ki,ys),new R(0,ki,-ys),new R(ys,0,ki),new R(-ys,0,ki),new R(ki,ys,0),new R(-ki,ys,0)];class kh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ga=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ga,Va,Wa),e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ga=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:ui,format:Sn,colorSpace:Xt,depthBuffer:!1},s=Hh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$_(r)),this._blurMaterial=j_(r,e,t)}return s}_compileMaterial(e){const t=new oe(this._lodPlanes[0],e);this._renderer.compile(t,Ha)}_sceneToCubeUV(e,t,i,s){const a=new sn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Bh),h.toneMapping=wi,h.autoClear=!1;const f=new mt({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),g=new oe(new Gt,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Bh),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;Eo(s,v*x,p>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ds||e.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Eo(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Ha)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=zh[(s-1)%zh.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new oe(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Gi;m>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const p=[];let v=0;for(let w=0;w<Gi;++w){const L=w/_,M=Math.exp(-L*L/2);p.push(M),w===0?v+=M:w<m&&(v+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const y=this._sizeLods[s],E=3*y*(s>x-Rs?s-x+Rs:0),A=4*(this._cubeSize-y);Eo(t,E,A,3*y,2*y),c.setRenderTarget(t),c.render(u,Ha)}}function $_(n){const e=[],t=[],i=[];let s=n;const r=n-Rs+1+Fh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Rs?c=Fh[o-n+Rs-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),x=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let A=0;A<f;A++){const w=A%3*2/3-1,L=A>2?0:-1,M=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];v.set(M,_*g*A),x.set(d,m*g*A);const S=[A,A,A,A,A,A];y.set(S,p*g*A)}const E=new Mt;E.setAttribute("position",new Wt(v,_)),E.setAttribute("uv",new Wt(x,m)),E.setAttribute("faceIndex",new Wt(y,p)),e.push(E),s>Rs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Hh(n,e,t){const i=new Un(n,e,t);return i.texture.mapping=na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Eo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function j_(n,e,t){const i=new Float32Array(Gi),s=new R(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Gh(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Vh(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function dc(){return`

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
	`}function q_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Al||c===Rl,h=c===Ds||c===Ns;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new kh(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new kh(n));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Y_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function K_(n,e,t,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,y=v.length;x<y;x+=3){const E=v[x+0],A=v[x+1],w=v[x+2];d.push(E,A,A,w,w,E)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const E=x+0,A=x+1,w=x+2;d.push(E,A,A,w,w,E)}}else return;const m=new(Yd(d)?tf:ef)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Z_(n,e,t,i){const s=i.isWebGL2;let r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,f){n.drawElements(r,f,a,d*c),t.update(f,r,1)}function u(d,f,g){if(g===0)return;let _,m;if(s)_=n,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,f,a,d*c,g),t.update(f,r,g)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u}function J_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Q_(n,e){return n[0]-e[0]}function ex(n,e){return Math.abs(e[1])-Math.abs(n[1])}function tx(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new at,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==_){let k=function(){$.dispose(),r.delete(h),h.removeEventListener("dispose",k)};var f=k;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let M=0;x===!0&&(M=1),y===!0&&(M=2),E===!0&&(M=3);let S=h.attributes.position.count*M,D=1;S>e.maxTextureSize&&(D=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const O=new Float32Array(S*D*4*_),$=new Jd(O,S,D,_);$.type=li,$.needsUpdate=!0;const P=M*4;for(let X=0;X<_;X++){const j=A[X],ne=w[X],K=L[X],q=S*D*4*X;for(let N=0;N<j.count;N++){const V=N*P;x===!0&&(o.fromBufferAttribute(j,N),O[q+V+0]=o.x,O[q+V+1]=o.y,O[q+V+2]=o.z,O[q+V+3]=0),y===!0&&(o.fromBufferAttribute(ne,N),O[q+V+4]=o.x,O[q+V+5]=o.y,O[q+V+6]=o.z,O[q+V+7]=0),E===!0&&(o.fromBufferAttribute(K,N),O[q+V+8]=o.x,O[q+V+9]=o.y,O[q+V+10]=o.z,O[q+V+11]=K.itemSize===4?o.w:1)}}m={count:_,texture:$,size:new fe(S,D)},r.set(h,m),h.addEventListener("dispose",k)}let p=0;for(let x=0;x<d.length;x++)p+=d[x];const v=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",v),u.getUniforms().setValue(n,"morphTargetInfluences",d),u.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=i[h.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];i[h.id]=_}for(let y=0;y<g;y++){const E=_[y];E[0]=y,E[1]=d[y]}_.sort(ex);for(let y=0;y<8;y++)y<g&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Q_);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const E=a[y],A=E[0],w=E[1];A!==Number.MAX_SAFE_INTEGER&&w?(m&&h.getAttribute("morphTarget"+y)!==m[A]&&h.setAttribute("morphTarget"+y,m[A]),p&&h.getAttribute("morphNormal"+y)!==p[A]&&h.setAttribute("morphNormal"+y,p[A]),s[y]=w,v+=w):(m&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),p&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}const x=h.morphTargetsRelative?1:1-v;u.getUniforms().setValue(n,"morphTargetBaseInfluence",x),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function nx(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const af=new zt,lf=new Jd,cf=new Vm,hf=new rf,Wh=[],Xh=[],$h=new Float32Array(16),jh=new Float32Array(9),qh=new Float32Array(4);function $s(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Wh[s];if(r===void 0&&(r=new Float32Array(s),Wh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function aa(n,e){let t=Xh[e];t===void 0&&(t=new Int32Array(e),Xh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ix(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function sx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function ax(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,i))return;qh.set(i),n.uniformMatrix2fv(this.addr,!1,qh),Lt(t,i)}}function lx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,i))return;jh.set(i),n.uniformMatrix3fv(this.addr,!1,jh),Lt(t,i)}}function cx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Ct(t,i))return;$h.set(i),n.uniformMatrix4fv(this.addr,!1,$h),Lt(t,i)}}function hx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ux(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function dx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function fx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function px(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function gx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function _x(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function xx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2D(e||af,s)}function vx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||cf,s)}function yx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||hf,s)}function Mx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||lf,s)}function Ex(n){switch(n){case 5126:return ix;case 35664:return sx;case 35665:return rx;case 35666:return ox;case 35674:return ax;case 35675:return lx;case 35676:return cx;case 5124:case 35670:return hx;case 35667:case 35671:return ux;case 35668:case 35672:return dx;case 35669:case 35673:return fx;case 5125:return px;case 36294:return mx;case 36295:return gx;case 36296:return _x;case 35678:case 36198:case 36298:case 36306:case 35682:return xx;case 35679:case 36299:case 36307:return vx;case 35680:case 36300:case 36308:case 36293:return yx;case 36289:case 36303:case 36311:case 36292:return Mx}}function Sx(n,e){n.uniform1fv(this.addr,e)}function bx(n,e){const t=$s(e,this.size,2);n.uniform2fv(this.addr,t)}function wx(n,e){const t=$s(e,this.size,3);n.uniform3fv(this.addr,t)}function Tx(n,e){const t=$s(e,this.size,4);n.uniform4fv(this.addr,t)}function Ax(n,e){const t=$s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Rx(n,e){const t=$s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Cx(n,e){const t=$s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Lx(n,e){n.uniform1iv(this.addr,e)}function Px(n,e){n.uniform2iv(this.addr,e)}function Ix(n,e){n.uniform3iv(this.addr,e)}function Dx(n,e){n.uniform4iv(this.addr,e)}function Nx(n,e){n.uniform1uiv(this.addr,e)}function Ux(n,e){n.uniform2uiv(this.addr,e)}function Ox(n,e){n.uniform3uiv(this.addr,e)}function Fx(n,e){n.uniform4uiv(this.addr,e)}function Bx(n,e,t){const i=this.cache,s=e.length,r=aa(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||af,r[o])}function zx(n,e,t){const i=this.cache,s=e.length,r=aa(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||cf,r[o])}function kx(n,e,t){const i=this.cache,s=e.length,r=aa(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||hf,r[o])}function Hx(n,e,t){const i=this.cache,s=e.length,r=aa(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||lf,r[o])}function Gx(n){switch(n){case 5126:return Sx;case 35664:return bx;case 35665:return wx;case 35666:return Tx;case 35674:return Ax;case 35675:return Rx;case 35676:return Cx;case 5124:case 35670:return Lx;case 35667:case 35671:return Px;case 35668:case 35672:return Ix;case 35669:case 35673:return Dx;case 5125:return Nx;case 36294:return Ux;case 36295:return Ox;case 36296:return Fx;case 35678:case 36198:case 36298:case 36306:case 35682:return Bx;case 35679:case 36299:case 36307:return zx;case 35680:case 36300:case 36308:case 36293:return kx;case 36289:case 36303:case 36311:case 36292:return Hx}}class Vx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Ex(t.type)}}class Wx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Gx(t.type)}}class Xx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function Yh(n,e){n.seq.push(e),n.map[e.id]=e}function $x(n,e,t){const i=n.name,s=i.length;for(Xa.lastIndex=0;;){const r=Xa.exec(i),o=Xa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Yh(t,l===void 0?new Vx(a,n,e):new Wx(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Xx(a),Yh(t,u)),t=u}}}class zo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);$x(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Kh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const jx=37297;let qx=0;function Yx(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Kx(n){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(n);let i;switch(e===t?i="":e===Xo&&t===Wo?i="LinearDisplayP3ToLinearSRGB":e===Wo&&t===Xo&&(i="LinearSRGBToLinearDisplayP3"),n){case Xt:case ia:return[i,"LinearTransferOETF"];case ht:case cc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Zh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Yx(n.getShaderSource(e),o)}else return s}function Zx(n,e){const t=Kx(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Jx(n,e){let t;switch(e){case Zp:t="Linear";break;case Jp:t="Reinhard";break;case Qp:t="OptimizedCineon";break;case oc:t="ACESFilmic";break;case em:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Qx(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(pr).join(`
`)}function ev(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function tv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function pr(n){return n!==""}function Jh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(n){return n.replace(nv,sv)}const iv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function sv(n,e){let t=Ue[e];if(t===void 0){const i=iv.get(e);if(i!==void 0)t=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nl(t)}const rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eu(n){return n.replace(rv,ov)}function ov(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function av(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Od?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Fd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function lv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ds:case Ns:e="ENVMAP_TYPE_CUBE";break;case na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function hv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case rc:e="ENVMAP_BLENDING_MULTIPLY";break;case Yp:e="ENVMAP_BLENDING_MIX";break;case Kp:e="ENVMAP_BLENDING_ADD";break}return e}function uv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function dv(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=av(t),l=lv(t),h=cv(t),u=hv(t),d=uv(t),f=t.isWebGL2?"":Qx(t),g=ev(r),_=s.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pr).join(`
`),m.length>0&&(m+=`
`),p=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pr).join(`
`),p.length>0&&(p+=`
`)):(m=[tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),p=[f,tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?Ue.tonemapping_pars_fragment:"",t.toneMapping!==wi?Jx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Zx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pr).join(`
`)),o=Nl(o),o=Jh(o,t),o=Qh(o,t),a=Nl(a),a=Jh(a,t),a=Qh(a,t),o=eu(o),a=eu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+m+o,y=v+p+a,E=Kh(s,s.VERTEX_SHADER,x),A=Kh(s,s.FRAGMENT_SHADER,y);s.attachShader(_,E),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(D){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(_).trim(),$=s.getShaderInfoLog(E).trim(),P=s.getShaderInfoLog(A).trim();let k=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,E,A);else{const j=Zh(s,E,"vertex"),ne=Zh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Program Info Log: `+O+`
`+j+`
`+ne)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):($===""||P==="")&&(X=!1);X&&(D.diagnostics={runnable:k,programLog:O,vertexShader:{log:$,prefix:m},fragmentShader:{log:P,prefix:p}})}s.deleteShader(E),s.deleteShader(A),L=new zo(s,_),M=tv(s,_)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,jx)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}let fv=0;class pv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new mv(e),t.set(e,i)),i}}class mv{constructor(e){this.id=fv++,this.code=e,this.usedTimes=0}}function gv(n,e,t,i,s,r,o){const a=new uc,c=new pv,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,S,D,O,$){const P=O.fog,k=$.geometry,X=M.isMeshStandardMaterial?O.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),ne=j&&j.mapping===na?j.image.height:null,K=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,N=q!==void 0?q.length:0;let V=0;k.morphAttributes.position!==void 0&&(V=1),k.morphAttributes.normal!==void 0&&(V=2),k.morphAttributes.color!==void 0&&(V=3);let le,ue,pe,Se;if(K){const St=zn[K];le=St.vertexShader,ue=St.fragmentShader}else le=M.vertexShader,ue=M.fragmentShader,c.update(M),pe=c.getVertexShaderID(M),Se=c.getFragmentShaderID(M);const We=n.getRenderTarget(),Re=$.isInstancedMesh===!0,Ne=!!M.map,xt=!!M.matcap,Fe=!!j,F=!!M.aoMap,ln=!!M.lightMap,ve=!!M.bumpMap,Ce=!!M.normalMap,Ae=!!M.displacementMap,vt=!!M.emissiveMap,Be=!!M.metalnessMap,ze=!!M.roughnessMap,rt=M.anisotropy>0,Pt=M.clearcoat>0,$t=M.iridescence>0,C=M.sheen>0,b=M.transmission>0,B=rt&&!!M.anisotropyMap,Q=Pt&&!!M.clearcoatMap,Z=Pt&&!!M.clearcoatNormalMap,ee=Pt&&!!M.clearcoatRoughnessMap,ge=$t&&!!M.iridescenceMap,se=$t&&!!M.iridescenceThicknessMap,ce=C&&!!M.sheenColorMap,be=C&&!!M.sheenRoughnessMap,Ye=!!M.specularMap,J=!!M.specularColorMap,et=!!M.specularIntensityMap,Le=b&&!!M.transmissionMap,we=b&&!!M.thicknessMap,ye=!!M.gradientMap,de=!!M.alphaMap,je=M.alphaTest>0,I=!!M.alphaHash,ae=!!M.extensions,te=!!k.attributes.uv1,W=!!k.attributes.uv2,ie=!!k.attributes.uv3;let Me=wi;return M.toneMapped&&(We===null||We.isXRRenderTarget===!0)&&(Me=n.toneMapping),{isWebGL2:h,shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:le,fragmentShader:ue,defines:M.defines,customVertexShaderID:pe,customFragmentShaderID:Se,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,instancing:Re,instancingColor:Re&&$.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:We===null?n.outputColorSpace:We.isXRRenderTarget===!0?We.texture.colorSpace:Xt,map:Ne,matcap:xt,envMap:Fe,envMapMode:Fe&&j.mapping,envMapCubeUVHeight:ne,aoMap:F,lightMap:ln,bumpMap:ve,normalMap:Ce,displacementMap:d&&Ae,emissiveMap:vt,normalMapObjectSpace:Ce&&M.normalMapType===mm,normalMapTangentSpace:Ce&&M.normalMapType===lc,metalnessMap:Be,roughnessMap:ze,anisotropy:rt,anisotropyMap:B,clearcoat:Pt,clearcoatMap:Q,clearcoatNormalMap:Z,clearcoatRoughnessMap:ee,iridescence:$t,iridescenceMap:ge,iridescenceThicknessMap:se,sheen:C,sheenColorMap:ce,sheenRoughnessMap:be,specularMap:Ye,specularColorMap:J,specularIntensityMap:et,transmission:b,transmissionMap:Le,thicknessMap:we,gradientMap:ye,opaque:M.transparent===!1&&M.blending===ji,alphaMap:de,alphaTest:je,alphaHash:I,combine:M.combine,mapUv:Ne&&_(M.map.channel),aoMapUv:F&&_(M.aoMap.channel),lightMapUv:ln&&_(M.lightMap.channel),bumpMapUv:ve&&_(M.bumpMap.channel),normalMapUv:Ce&&_(M.normalMap.channel),displacementMapUv:Ae&&_(M.displacementMap.channel),emissiveMapUv:vt&&_(M.emissiveMap.channel),metalnessMapUv:Be&&_(M.metalnessMap.channel),roughnessMapUv:ze&&_(M.roughnessMap.channel),anisotropyMapUv:B&&_(M.anisotropyMap.channel),clearcoatMapUv:Q&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Z&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(M.sheenRoughnessMap.channel),specularMapUv:Ye&&_(M.specularMap.channel),specularColorMapUv:J&&_(M.specularColorMap.channel),specularIntensityMapUv:et&&_(M.specularIntensityMap.channel),transmissionMapUv:Le&&_(M.transmissionMap.channel),thicknessMapUv:we&&_(M.thicknessMap.channel),alphaMapUv:de&&_(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ce||rt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:te,vertexUv2s:W,vertexUv3s:ie,pointsUvs:$.isPoints===!0&&!!k.attributes.uv&&(Ne||de),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:$.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:V,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Me,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ne&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ft,flipSided:M.side===Yt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ae&&M.extensions.derivatives===!0,extensionFragDepth:ae&&M.extensions.fragDepth===!0,extensionDrawBuffers:ae&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)S.push(D),S.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(v(S,M),x(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){const S=g[M.type];let D;if(S){const O=zn[S];D=qo.clone(O.uniforms)}else D=M.uniforms;return D}function E(M,S){let D;for(let O=0,$=l.length;O<$;O++){const P=l[O];if(P.cacheKey===S){D=P,++D.usedTimes;break}}return D===void 0&&(D=new dv(n,S,M,r),l.push(D)),D}function A(M){if(--M.usedTimes===0){const S=l.indexOf(M);l[S]=l[l.length-1],l.pop(),M.destroy()}}function w(M){c.remove(M)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:A,releaseShaderCache:w,programs:l,dispose:L}}function _v(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function xv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function nu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function iu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,f,g,_,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||xv),i.length>1&&i.sort(d||nu),s.length>1&&s.sort(d||nu)}function h(){for(let u=e,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function vv(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new iu,n.set(i,[o])):s>=r.length?(o=new iu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function yv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new me};break;case"SpotLight":t={position:new R,direction:new R,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function Mv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ev=0;function Sv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function bv(n,e){const t=new yv,i=Mv(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new R);const r=new R,o=new De,a=new De;function c(h,u){let d=0,f=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let _=0,m=0,p=0,v=0,x=0,y=0,E=0,A=0,w=0,L=0,M=0;h.sort(Sv);const S=u===!0?Math.PI:1;for(let O=0,$=h.length;O<$;O++){const P=h[O],k=P.color,X=P.intensity,j=P.distance,ne=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=k.r*X*S,f+=k.g*X*S,g+=k.b*X*S;else if(P.isLightProbe){for(let K=0;K<9;K++)s.probe[K].addScaledVector(P.sh.coefficients[K],X);M++}else if(P.isDirectionalLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){const q=P.shadow,N=i.get(P);N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,s.directionalShadow[_]=N,s.directionalShadowMap[_]=ne,s.directionalShadowMatrix[_]=P.shadow.matrix,y++}s.directional[_]=K,_++}else if(P.isSpotLight){const K=t.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(k).multiplyScalar(X*S),K.distance=j,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,s.spot[p]=K;const q=P.shadow;if(P.map&&(s.spotLightMap[w]=P.map,w++,q.updateMatrices(P),P.castShadow&&L++),s.spotLightMatrix[p]=q.matrix,P.castShadow){const N=i.get(P);N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,s.spotShadow[p]=N,s.spotShadowMap[p]=ne,A++}p++}else if(P.isRectAreaLight){const K=t.get(P);K.color.copy(k).multiplyScalar(X),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),s.rectArea[v]=K,v++}else if(P.isPointLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity*S),K.distance=P.distance,K.decay=P.decay,P.castShadow){const q=P.shadow,N=i.get(P);N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,N.shadowCameraNear=q.camera.near,N.shadowCameraFar=q.camera.far,s.pointShadow[m]=N,s.pointShadowMap[m]=ne,s.pointShadowMatrix[m]=P.shadow.matrix,E++}s.point[m]=K,m++}else if(P.isHemisphereLight){const K=t.get(P);K.skyColor.copy(P.color).multiplyScalar(X*S),K.groundColor.copy(P.groundColor).multiplyScalar(X*S),s.hemi[x]=K,x++}}v>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=re.LTC_FLOAT_1,s.rectAreaLTC2=re.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=re.LTC_HALF_1,s.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;const D=s.hash;(D.directionalLength!==_||D.pointLength!==m||D.spotLength!==p||D.rectAreaLength!==v||D.hemiLength!==x||D.numDirectionalShadows!==y||D.numPointShadows!==E||D.numSpotShadows!==A||D.numSpotMaps!==w||D.numLightProbes!==M)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=v,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=A+w-L,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=M,D.directionalLength=_,D.pointLength=m,D.spotLength=p,D.rectAreaLength=v,D.hemiLength=x,D.numDirectionalShadows=y,D.numPointShadows=E,D.numSpotShadows=A,D.numSpotMaps=w,D.numLightProbes=M,s.version=Ev++)}function l(h,u){let d=0,f=0,g=0,_=0,m=0;const p=u.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const y=h[v];if(y.isDirectionalLight){const E=s.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),d++}else if(y.isSpotLight){const E=s.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const E=s.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const E=s.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const E=s.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function su(n,e){const t=new bv(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function c(u){t.setup(i,u)}function l(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function wv(n,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new su(n,e),t.set(r,[c])):o>=a.length?(c=new su(n,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:i,dispose:s}}class Tv extends Tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Av extends Tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cv=`uniform sampler2D shadow_pass;
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
}`;function Lv(n,e,t){let i=new ra;const s=new fe,r=new fe,o=new at,a=new Tv({depthPacking:pm}),c=new Av,l={},h=t.maxTextureSize,u={[di]:Yt,[Yt]:di,[Ft]:Ft},d=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:Rv,fragmentShader:Cv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Mt;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new oe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Od;let p=this.type;this.render=function(E,A,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const L=n.getRenderTarget(),M=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),D=n.state;D.setBlending(hi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const O=p!==ii&&this.type===ii,$=p===ii&&this.type!==ii;for(let P=0,k=E.length;P<k;P++){const X=E[P],j=X.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const ne=j.getFrameExtents();if(s.multiply(ne),r.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,j.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,j.mapSize.y=r.y)),j.map===null||O===!0||$===!0){const q=this.type!==ii?{minFilter:Ut,magFilter:Ut}:{};j.map!==null&&j.map.dispose(),j.map=new Un(s.x,s.y,q),j.map.texture.name=X.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const K=j.getViewportCount();for(let q=0;q<K;q++){const N=j.getViewport(q);o.set(r.x*N.x,r.y*N.y,r.x*N.z,r.y*N.w),D.viewport(o),j.updateMatrices(X,q),i=j.getFrustum(),y(A,w,j.camera,X,this.type)}j.isPointLightShadow!==!0&&this.type===ii&&v(j,w),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(L,M,S)};function v(E,A){const w=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Un(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,w,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,w,f,_,null)}function x(E,A,w,L){let M=null;const S=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)M=S;else if(M=w.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const D=M.uuid,O=A.uuid;let $=l[D];$===void 0&&($={},l[D]=$);let P=$[O];P===void 0&&(P=M.clone(),$[O]=P),M=P}if(M.visible=A.visible,M.wireframe=A.wireframe,L===ii?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=n.properties.get(M);D.light=w}return M}function y(E,A,w,L,M){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===ii)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);const O=e.update(E),$=E.material;if(Array.isArray($)){const P=O.groups;for(let k=0,X=P.length;k<X;k++){const j=P[k],ne=$[j.materialIndex];if(ne&&ne.visible){const K=x(E,ne,L,M);n.renderBufferDirect(w,null,O,K,E,j)}}}else if($.visible){const P=x(E,$,L,M);n.renderBufferDirect(w,null,O,P,E,null)}}const D=E.children;for(let O=0,$=D.length;O<$;O++)y(D[O],A,w,L,M)}}function Pv(n,e,t){const i=t.isWebGL2;function s(){let I=!1;const ae=new at;let te=null;const W=new at(0,0,0,0);return{setMask:function(ie){te!==ie&&!I&&(n.colorMask(ie,ie,ie,ie),te=ie)},setLocked:function(ie){I=ie},setClear:function(ie,Me,Ke,St,_n){_n===!0&&(ie*=St,Me*=St,Ke*=St),ae.set(ie,Me,Ke,St),W.equals(ae)===!1&&(n.clearColor(ie,Me,Ke,St),W.copy(ae))},reset:function(){I=!1,te=null,W.set(-1,0,0,0)}}}function r(){let I=!1,ae=null,te=null,W=null;return{setTest:function(ie){ie?Ne(n.DEPTH_TEST):xt(n.DEPTH_TEST)},setMask:function(ie){ae!==ie&&!I&&(n.depthMask(ie),ae=ie)},setFunc:function(ie){if(te!==ie){switch(ie){case Gp:n.depthFunc(n.NEVER);break;case Vp:n.depthFunc(n.ALWAYS);break;case Wp:n.depthFunc(n.LESS);break;case Ho:n.depthFunc(n.LEQUAL);break;case Xp:n.depthFunc(n.EQUAL);break;case $p:n.depthFunc(n.GEQUAL);break;case jp:n.depthFunc(n.GREATER);break;case qp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=ie}},setLocked:function(ie){I=ie},setClear:function(ie){W!==ie&&(n.clearDepth(ie),W=ie)},reset:function(){I=!1,ae=null,te=null,W=null}}}function o(){let I=!1,ae=null,te=null,W=null,ie=null,Me=null,Ke=null,St=null,_n=null;return{setTest:function(ct){I||(ct?Ne(n.STENCIL_TEST):xt(n.STENCIL_TEST))},setMask:function(ct){ae!==ct&&!I&&(n.stencilMask(ct),ae=ct)},setFunc:function(ct,Kt,Fn){(te!==ct||W!==Kt||ie!==Fn)&&(n.stencilFunc(ct,Kt,Fn),te=ct,W=Kt,ie=Fn)},setOp:function(ct,Kt,Fn){(Me!==ct||Ke!==Kt||St!==Fn)&&(n.stencilOp(ct,Kt,Fn),Me=ct,Ke=Kt,St=Fn)},setLocked:function(ct){I=ct},setClear:function(ct){_n!==ct&&(n.clearStencil(ct),_n=ct)},reset:function(){I=!1,ae=null,te=null,W=null,ie=null,Me=null,Ke=null,St=null,_n=null}}}const a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,_=[],m=null,p=!1,v=null,x=null,y=null,E=null,A=null,w=null,L=null,M=new me(0,0,0),S=0,D=!1,O=null,$=null,P=null,k=null,X=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,K=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),ne=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),ne=K>=2);let N=null,V={};const le=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),pe=new at().fromArray(le),Se=new at().fromArray(ue);function We(I,ae,te,W){const ie=new Uint8Array(4),Me=n.createTexture();n.bindTexture(I,Me),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<te;Ke++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(ae,0,n.RGBA,1,1,W,0,n.RGBA,n.UNSIGNED_BYTE,ie):n.texImage2D(ae+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ie);return Me}const Re={};Re[n.TEXTURE_2D]=We(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=We(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Re[n.TEXTURE_2D_ARRAY]=We(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=We(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ne(n.DEPTH_TEST),c.setFunc(Ho),Be(!1),ze(Bc),Ne(n.CULL_FACE),Ae(hi);function Ne(I){d[I]!==!0&&(n.enable(I),d[I]=!0)}function xt(I){d[I]!==!1&&(n.disable(I),d[I]=!1)}function Fe(I,ae){return f[I]!==ae?(n.bindFramebuffer(I,ae),f[I]=ae,i&&(I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ae),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ae)),!0):!1}function F(I,ae){let te=_,W=!1;if(I)if(te=g.get(ae),te===void 0&&(te=[],g.set(ae,te)),I.isWebGLMultipleRenderTargets){const ie=I.texture;if(te.length!==ie.length||te[0]!==n.COLOR_ATTACHMENT0){for(let Me=0,Ke=ie.length;Me<Ke;Me++)te[Me]=n.COLOR_ATTACHMENT0+Me;te.length=ie.length,W=!0}}else te[0]!==n.COLOR_ATTACHMENT0&&(te[0]=n.COLOR_ATTACHMENT0,W=!0);else te[0]!==n.BACK&&(te[0]=n.BACK,W=!0);W&&(t.isWebGL2?n.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function ln(I){return m!==I?(n.useProgram(I),m=I,!0):!1}const ve={[Hi]:n.FUNC_ADD,[Ap]:n.FUNC_SUBTRACT,[Rp]:n.FUNC_REVERSE_SUBTRACT};if(i)ve[Hc]=n.MIN,ve[Gc]=n.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(ve[Hc]=I.MIN_EXT,ve[Gc]=I.MAX_EXT)}const Ce={[Cp]:n.ZERO,[Lp]:n.ONE,[Pp]:n.SRC_COLOR,[wl]:n.SRC_ALPHA,[Fp]:n.SRC_ALPHA_SATURATE,[Up]:n.DST_COLOR,[Dp]:n.DST_ALPHA,[Ip]:n.ONE_MINUS_SRC_COLOR,[Tl]:n.ONE_MINUS_SRC_ALPHA,[Op]:n.ONE_MINUS_DST_COLOR,[Np]:n.ONE_MINUS_DST_ALPHA,[Bp]:n.CONSTANT_COLOR,[zp]:n.ONE_MINUS_CONSTANT_COLOR,[kp]:n.CONSTANT_ALPHA,[Hp]:n.ONE_MINUS_CONSTANT_ALPHA};function Ae(I,ae,te,W,ie,Me,Ke,St,_n,ct){if(I===hi){p===!0&&(xt(n.BLEND),p=!1);return}if(p===!1&&(Ne(n.BLEND),p=!0),I!==Tp){if(I!==v||ct!==D){if((x!==Hi||A!==Hi)&&(n.blendEquation(n.FUNC_ADD),x=Hi,A=Hi),ct)switch(I){case ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dn:n.blendFunc(n.ONE,n.ONE);break;case zc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case zc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,E=null,w=null,L=null,M.set(0,0,0),S=0,v=I,D=ct}return}ie=ie||ae,Me=Me||te,Ke=Ke||W,(ae!==x||ie!==A)&&(n.blendEquationSeparate(ve[ae],ve[ie]),x=ae,A=ie),(te!==y||W!==E||Me!==w||Ke!==L)&&(n.blendFuncSeparate(Ce[te],Ce[W],Ce[Me],Ce[Ke]),y=te,E=W,w=Me,L=Ke),(St.equals(M)===!1||_n!==S)&&(n.blendColor(St.r,St.g,St.b,_n),M.copy(St),S=_n),v=I,D=!1}function vt(I,ae){I.side===Ft?xt(n.CULL_FACE):Ne(n.CULL_FACE);let te=I.side===Yt;ae&&(te=!te),Be(te),I.blending===ji&&I.transparent===!1?Ae(hi):Ae(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);const W=I.stencilWrite;l.setTest(W),W&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Pt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ne(n.SAMPLE_ALPHA_TO_COVERAGE):xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(I){O!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),O=I)}function ze(I){I!==bp?(Ne(n.CULL_FACE),I!==$&&(I===Bc?n.cullFace(n.BACK):I===wp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xt(n.CULL_FACE),$=I}function rt(I){I!==P&&(ne&&n.lineWidth(I),P=I)}function Pt(I,ae,te){I?(Ne(n.POLYGON_OFFSET_FILL),(k!==ae||X!==te)&&(n.polygonOffset(ae,te),k=ae,X=te)):xt(n.POLYGON_OFFSET_FILL)}function $t(I){I?Ne(n.SCISSOR_TEST):xt(n.SCISSOR_TEST)}function C(I){I===void 0&&(I=n.TEXTURE0+j-1),N!==I&&(n.activeTexture(I),N=I)}function b(I,ae,te){te===void 0&&(N===null?te=n.TEXTURE0+j-1:te=N);let W=V[te];W===void 0&&(W={type:void 0,texture:void 0},V[te]=W),(W.type!==I||W.texture!==ae)&&(N!==te&&(n.activeTexture(te),N=te),n.bindTexture(I,ae||Re[I]),W.type=I,W.texture=ae)}function B(){const I=V[N];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ye(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(I){pe.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),pe.copy(I))}function we(I){Se.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Se.copy(I))}function ye(I,ae){let te=u.get(ae);te===void 0&&(te=new WeakMap,u.set(ae,te));let W=te.get(I);W===void 0&&(W=n.getUniformBlockIndex(ae,I.name),te.set(I,W))}function de(I,ae){const W=u.get(ae).get(I);h.get(ae)!==W&&(n.uniformBlockBinding(ae,W,I.__bindingPointIndex),h.set(ae,W))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},N=null,V={},f={},g=new WeakMap,_=[],m=null,p=!1,v=null,x=null,y=null,E=null,A=null,w=null,L=null,M=new me(0,0,0),S=0,D=!1,O=null,$=null,P=null,k=null,X=null,pe.set(0,0,n.canvas.width,n.canvas.height),Se.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ne,disable:xt,bindFramebuffer:Fe,drawBuffers:F,useProgram:ln,setBlending:Ae,setMaterial:vt,setFlipSided:Be,setCullFace:ze,setLineWidth:rt,setPolygonOffset:Pt,setScissorTest:$t,activeTexture:C,bindTexture:b,unbindTexture:B,compressedTexImage2D:Q,compressedTexImage3D:Z,texImage2D:J,texImage3D:et,updateUBOMapping:ye,uniformBlockBinding:de,texStorage2D:be,texStorage3D:Ye,texSubImage2D:ee,texSubImage3D:ge,compressedTexSubImage2D:se,compressedTexSubImage3D:ce,scissor:Le,viewport:we,reset:je}}function Iv(n,e,t,i,s,r,o){const a=s.isWebGL2,c=s.maxTextures,l=s.maxCubemapSize,h=s.maxTextureSize,u=s.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,b){return p?new OffscreenCanvas(C,b):Rr("canvas")}function x(C,b,B,Q){let Z=1;if((C.width>Q||C.height>Q)&&(Z=Q/Math.max(C.width,C.height)),Z<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ee=b?jo:Math.floor,ge=ee(Z*C.width),se=ee(Z*C.height);_===void 0&&(_=v(ge,se));const ce=B?v(ge,se):_;return ce.width=ge,ce.height=se,ce.getContext("2d").drawImage(C,0,0,ge,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ge+"x"+se+")."),ce}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return Dl(C.width)&&Dl(C.height)}function E(C){return a?!1:C.wrapS!==En||C.wrapT!==En||C.minFilter!==Ut&&C.minFilter!==nn}function A(C,b){return C.generateMipmaps&&b&&C.minFilter!==Ut&&C.minFilter!==nn}function w(C){n.generateMipmap(C)}function L(C,b,B,Q,Z=!1){if(a===!1)return b;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ee=b;if(b===n.RED&&(B===n.FLOAT&&(ee=n.R32F),B===n.HALF_FLOAT&&(ee=n.R16F),B===n.UNSIGNED_BYTE&&(ee=n.R8)),b===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(ee=n.R8UI),B===n.UNSIGNED_SHORT&&(ee=n.R16UI),B===n.UNSIGNED_INT&&(ee=n.R32UI),B===n.BYTE&&(ee=n.R8I),B===n.SHORT&&(ee=n.R16I),B===n.INT&&(ee=n.R32I)),b===n.RG&&(B===n.FLOAT&&(ee=n.RG32F),B===n.HALF_FLOAT&&(ee=n.RG16F),B===n.UNSIGNED_BYTE&&(ee=n.RG8)),b===n.RGBA){const ge=Z?Vo:Je.getTransfer(Q);B===n.FLOAT&&(ee=n.RGBA32F),B===n.HALF_FLOAT&&(ee=n.RGBA16F),B===n.UNSIGNED_BYTE&&(ee=ge===dt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function M(C,b,B){return A(C,B)===!0||C.isFramebufferTexture&&C.minFilter!==Ut&&C.minFilter!==nn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function S(C){return C===Ut||C===Cl||C===Bo?n.NEAREST:n.LINEAR}function D(C){const b=C.target;b.removeEventListener("dispose",D),$(b),b.isVideoTexture&&g.delete(b)}function O(C){const b=C.target;b.removeEventListener("dispose",O),k(b)}function $(C){const b=i.get(C);if(b.__webglInit===void 0)return;const B=C.source,Q=m.get(B);if(Q){const Z=Q[b.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(C),Object.keys(Q).length===0&&m.delete(B)}i.remove(C)}function P(C){const b=i.get(C);n.deleteTexture(b.__webglTexture);const B=C.source,Q=m.get(B);delete Q[b.__cacheKey],o.memory.textures--}function k(C){const b=C.texture,B=i.get(C),Q=i.get(b);if(Q.__webglTexture!==void 0&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(B.__webglFramebuffer[Z]))for(let ee=0;ee<B.__webglFramebuffer[Z].length;ee++)n.deleteFramebuffer(B.__webglFramebuffer[Z][ee]);else n.deleteFramebuffer(B.__webglFramebuffer[Z]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[Z])}else{if(Array.isArray(B.__webglFramebuffer))for(let Z=0;Z<B.__webglFramebuffer.length;Z++)n.deleteFramebuffer(B.__webglFramebuffer[Z]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let Z=0;Z<B.__webglColorRenderbuffer.length;Z++)B.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[Z]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let Z=0,ee=b.length;Z<ee;Z++){const ge=i.get(b[Z]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(b[Z])}i.remove(b),i.remove(C)}let X=0;function j(){X=0}function ne(){const C=X;return C>=c&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+c),X+=1,C}function K(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function q(C,b){const B=i.get(C);if(C.isVideoTexture&&Pt(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(B,C,b);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+b)}function N(C,b){const B=i.get(C);if(C.version>0&&B.__version!==C.version){Ne(B,C,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+b)}function V(C,b){const B=i.get(C);if(C.version>0&&B.__version!==C.version){Ne(B,C,b);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+b)}function le(C,b){const B=i.get(C);if(C.version>0&&B.__version!==C.version){xt(B,C,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+b)}const ue={[Zi]:n.REPEAT,[En]:n.CLAMP_TO_EDGE,[Go]:n.MIRRORED_REPEAT},pe={[Ut]:n.NEAREST,[Cl]:n.NEAREST_MIPMAP_NEAREST,[Bo]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[zd]:n.LINEAR_MIPMAP_NEAREST,[Ji]:n.LINEAR_MIPMAP_LINEAR},Se={[gm]:n.NEVER,[Sm]:n.ALWAYS,[_m]:n.LESS,[vm]:n.LEQUAL,[xm]:n.EQUAL,[Em]:n.GEQUAL,[ym]:n.GREATER,[Mm]:n.NOTEQUAL};function We(C,b,B){if(B?(n.texParameteri(C,n.TEXTURE_WRAP_S,ue[b.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ue[b.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ue[b.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,pe[b.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,pe[b.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==En||b.wrapT!==En)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,S(b.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,S(b.minFilter)),b.minFilter!==Ut&&b.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Se[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Ut||b.minFilter!==Bo&&b.minFilter!==Ji||b.type===li&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===ui&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(C,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function Re(C,b){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",D));const Q=b.source;let Z=m.get(Q);Z===void 0&&(Z={},m.set(Q,Z));const ee=K(b);if(ee!==C.__cacheKey){Z[ee]===void 0&&(Z[ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Z[ee].usedTimes++;const ge=Z[C.__cacheKey];ge!==void 0&&(Z[C.__cacheKey].usedTimes--,ge.usedTimes===0&&P(b)),C.__cacheKey=ee,C.__webglTexture=Z[ee].texture}return B}function Ne(C,b,B){let Q=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=n.TEXTURE_3D);const Z=Re(C,b),ee=b.source;t.bindTexture(Q,C.__webglTexture,n.TEXTURE0+B);const ge=i.get(ee);if(ee.version!==ge.__version||Z===!0){t.activeTexture(n.TEXTURE0+B);const se=Je.getPrimaries(Je.workingColorSpace),ce=b.colorSpace===bn?null:Je.getPrimaries(b.colorSpace),be=b.colorSpace===bn||se===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ye=E(b)&&y(b.image)===!1;let J=x(b.image,Ye,!1,h);J=$t(b,J);const et=y(J)||a,Le=r.convert(b.format,b.colorSpace);let we=r.convert(b.type),ye=L(b.internalFormat,Le,we,b.colorSpace,b.isVideoTexture);We(Q,b,et);let de;const je=b.mipmaps,I=a&&b.isVideoTexture!==!0,ae=ge.__version===void 0||Z===!0,te=M(b,J,et);if(b.isDepthTexture)ye=n.DEPTH_COMPONENT,a?b.type===li?ye=n.DEPTH_COMPONENT32F:b.type===Ei?ye=n.DEPTH_COMPONENT24:b.type===qi?ye=n.DEPTH24_STENCIL8:ye=n.DEPTH_COMPONENT16:b.type===li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Yi&&ye===n.DEPTH_COMPONENT&&b.type!==ac&&b.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Ei,we=r.convert(b.type)),b.format===Us&&ye===n.DEPTH_COMPONENT&&(ye=n.DEPTH_STENCIL,b.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=qi,we=r.convert(b.type))),ae&&(I?t.texStorage2D(n.TEXTURE_2D,1,ye,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,ye,J.width,J.height,0,Le,we,null));else if(b.isDataTexture)if(je.length>0&&et){I&&ae&&t.texStorage2D(n.TEXTURE_2D,te,ye,je[0].width,je[0].height);for(let W=0,ie=je.length;W<ie;W++)de=je[W],I?t.texSubImage2D(n.TEXTURE_2D,W,0,0,de.width,de.height,Le,we,de.data):t.texImage2D(n.TEXTURE_2D,W,ye,de.width,de.height,0,Le,we,de.data);b.generateMipmaps=!1}else I?(ae&&t.texStorage2D(n.TEXTURE_2D,te,ye,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,Le,we,J.data)):t.texImage2D(n.TEXTURE_2D,0,ye,J.width,J.height,0,Le,we,J.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){I&&ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,te,ye,je[0].width,je[0].height,J.depth);for(let W=0,ie=je.length;W<ie;W++)de=je[W],b.format!==Sn?Le!==null?I?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,de.width,de.height,J.depth,Le,de.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,ye,de.width,de.height,J.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,de.width,de.height,J.depth,Le,we,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,ye,de.width,de.height,J.depth,0,Le,we,de.data)}else{I&&ae&&t.texStorage2D(n.TEXTURE_2D,te,ye,je[0].width,je[0].height);for(let W=0,ie=je.length;W<ie;W++)de=je[W],b.format!==Sn?Le!==null?I?t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,de.width,de.height,Le,de.data):t.compressedTexImage2D(n.TEXTURE_2D,W,ye,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?t.texSubImage2D(n.TEXTURE_2D,W,0,0,de.width,de.height,Le,we,de.data):t.texImage2D(n.TEXTURE_2D,W,ye,de.width,de.height,0,Le,we,de.data)}else if(b.isDataArrayTexture)I?(ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,te,ye,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Le,we,J.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,J.width,J.height,J.depth,0,Le,we,J.data);else if(b.isData3DTexture)I?(ae&&t.texStorage3D(n.TEXTURE_3D,te,ye,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Le,we,J.data)):t.texImage3D(n.TEXTURE_3D,0,ye,J.width,J.height,J.depth,0,Le,we,J.data);else if(b.isFramebufferTexture){if(ae)if(I)t.texStorage2D(n.TEXTURE_2D,te,ye,J.width,J.height);else{let W=J.width,ie=J.height;for(let Me=0;Me<te;Me++)t.texImage2D(n.TEXTURE_2D,Me,ye,W,ie,0,Le,we,null),W>>=1,ie>>=1}}else if(je.length>0&&et){I&&ae&&t.texStorage2D(n.TEXTURE_2D,te,ye,je[0].width,je[0].height);for(let W=0,ie=je.length;W<ie;W++)de=je[W],I?t.texSubImage2D(n.TEXTURE_2D,W,0,0,Le,we,de):t.texImage2D(n.TEXTURE_2D,W,ye,Le,we,de);b.generateMipmaps=!1}else I?(ae&&t.texStorage2D(n.TEXTURE_2D,te,ye,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Le,we,J)):t.texImage2D(n.TEXTURE_2D,0,ye,Le,we,J);A(b,et)&&w(Q),ge.__version=ee.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function xt(C,b,B){if(b.image.length!==6)return;const Q=Re(C,b),Z=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+B);const ee=i.get(Z);if(Z.version!==ee.__version||Q===!0){t.activeTexture(n.TEXTURE0+B);const ge=Je.getPrimaries(Je.workingColorSpace),se=b.colorSpace===bn?null:Je.getPrimaries(b.colorSpace),ce=b.colorSpace===bn||ge===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const be=b.isCompressedTexture||b.image[0].isCompressedTexture,Ye=b.image[0]&&b.image[0].isDataTexture,J=[];for(let W=0;W<6;W++)!be&&!Ye?J[W]=x(b.image[W],!1,!0,l):J[W]=Ye?b.image[W].image:b.image[W],J[W]=$t(b,J[W]);const et=J[0],Le=y(et)||a,we=r.convert(b.format,b.colorSpace),ye=r.convert(b.type),de=L(b.internalFormat,we,ye,b.colorSpace),je=a&&b.isVideoTexture!==!0,I=ee.__version===void 0||Q===!0;let ae=M(b,et,Le);We(n.TEXTURE_CUBE_MAP,b,Le);let te;if(be){je&&I&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,de,et.width,et.height);for(let W=0;W<6;W++){te=J[W].mipmaps;for(let ie=0;ie<te.length;ie++){const Me=te[ie];b.format!==Sn?we!==null?je?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,ie,0,0,Me.width,Me.height,we,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,ie,de,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,ie,0,0,Me.width,Me.height,we,ye,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,ie,de,Me.width,Me.height,0,we,ye,Me.data)}}}else{te=b.mipmaps,je&&I&&(te.length>0&&ae++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,de,J[0].width,J[0].height));for(let W=0;W<6;W++)if(Ye){je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,J[W].width,J[W].height,we,ye,J[W].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,de,J[W].width,J[W].height,0,we,ye,J[W].data);for(let ie=0;ie<te.length;ie++){const Ke=te[ie].image[W].image;je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,ie+1,0,0,Ke.width,Ke.height,we,ye,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,ie+1,de,Ke.width,Ke.height,0,we,ye,Ke.data)}}else{je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,we,ye,J[W]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,de,we,ye,J[W]);for(let ie=0;ie<te.length;ie++){const Me=te[ie];je?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,ie+1,0,0,we,ye,Me.image[W]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,ie+1,de,we,ye,Me.image[W])}}}A(b,Le)&&w(n.TEXTURE_CUBE_MAP),ee.__version=Z.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Fe(C,b,B,Q,Z,ee){const ge=r.convert(B.format,B.colorSpace),se=r.convert(B.type),ce=L(B.internalFormat,ge,se,B.colorSpace);if(!i.get(b).__hasExternalTextures){const Ye=Math.max(1,b.width>>ee),J=Math.max(1,b.height>>ee);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,ee,ce,Ye,J,b.depth,0,ge,se,null):t.texImage2D(Z,ee,ce,Ye,J,0,ge,se,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),rt(b)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,Z,i.get(B).__webglTexture,0,ze(b)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,Z,i.get(B).__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function F(C,b,B){if(n.bindRenderbuffer(n.RENDERBUFFER,C),b.depthBuffer&&!b.stencilBuffer){let Q=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||rt(b)){const Z=b.depthTexture;Z&&Z.isDepthTexture&&(Z.type===li?Q=n.DEPTH_COMPONENT32F:Z.type===Ei&&(Q=n.DEPTH_COMPONENT24));const ee=ze(b);rt(b)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,Q,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,Q,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,Q,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(b.depthBuffer&&b.stencilBuffer){const Q=ze(b);B&&rt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,b.width,b.height):rt(b)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{const Q=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Z=0;Z<Q.length;Z++){const ee=Q[Z],ge=r.convert(ee.format,ee.colorSpace),se=r.convert(ee.type),ce=L(ee.internalFormat,ge,se,ee.colorSpace),be=ze(b);B&&rt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,ce,b.width,b.height):rt(b)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,ce,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ce,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ln(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);const Q=i.get(b.depthTexture).__webglTexture,Z=ze(b);if(b.depthTexture.format===Yi)rt(b)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(b.depthTexture.format===Us)rt(b)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ve(C){const b=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ln(b.__webglFramebuffer,C)}else if(B){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]=n.createRenderbuffer(),F(b.__webglDepthbuffer[Q],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),F(b.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(C,b,B){const Q=i.get(C);b!==void 0&&Fe(Q.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&ve(C)}function Ae(C){const b=C.texture,B=i.get(C),Q=i.get(b);C.addEventListener("dispose",O),C.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=b.version,o.memory.textures++);const Z=C.isWebGLCubeRenderTarget===!0,ee=C.isWebGLMultipleRenderTargets===!0,ge=y(C)||a;if(Z){B.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[se]=[];for(let ce=0;ce<b.mipmaps.length;ce++)B.__webglFramebuffer[se][ce]=n.createFramebuffer()}else B.__webglFramebuffer[se]=n.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let se=0;se<b.mipmaps.length;se++)B.__webglFramebuffer[se]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(ee)if(s.drawBuffers){const se=C.texture;for(let ce=0,be=se.length;ce<be;ce++){const Ye=i.get(se[ce]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&rt(C)===!1){const se=ee?b:[b];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ce=0;ce<se.length;ce++){const be=se[ce];B.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);const Ye=r.convert(be.format,be.colorSpace),J=r.convert(be.type),et=L(be.internalFormat,Ye,J,be.colorSpace,C.isXRRenderTarget===!0),Le=ze(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,et,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,B.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),F(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),We(n.TEXTURE_CUBE_MAP,b,ge);for(let se=0;se<6;se++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let ce=0;ce<b.mipmaps.length;ce++)Fe(B.__webglFramebuffer[se][ce],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,ce);else Fe(B.__webglFramebuffer[se],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);A(b,ge)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const se=C.texture;for(let ce=0,be=se.length;ce<be;ce++){const Ye=se[ce],J=i.get(Ye);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),We(n.TEXTURE_2D,Ye,ge),Fe(B.__webglFramebuffer,C,Ye,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),A(Ye,ge)&&w(n.TEXTURE_2D)}t.unbindTexture()}else{let se=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?se=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,Q.__webglTexture),We(se,b,ge),a&&b.mipmaps&&b.mipmaps.length>0)for(let ce=0;ce<b.mipmaps.length;ce++)Fe(B.__webglFramebuffer[ce],C,b,n.COLOR_ATTACHMENT0,se,ce);else Fe(B.__webglFramebuffer,C,b,n.COLOR_ATTACHMENT0,se,0);A(b,ge)&&w(se),t.unbindTexture()}C.depthBuffer&&ve(C)}function vt(C){const b=y(C)||a,B=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Q=0,Z=B.length;Q<Z;Q++){const ee=B[Q];if(A(ee,b)){const ge=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,se=i.get(ee).__webglTexture;t.bindTexture(ge,se),w(ge),t.unbindTexture()}}}function Be(C){if(a&&C.samples>0&&rt(C)===!1){const b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],B=C.width,Q=C.height;let Z=n.COLOR_BUFFER_BIT;const ee=[],ge=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(C),ce=C.isWebGLMultipleRenderTargets===!0;if(ce)for(let be=0;be<b.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let be=0;be<b.length;be++){ee.push(n.COLOR_ATTACHMENT0+be),C.depthBuffer&&ee.push(ge);const Ye=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Ye===!1&&(C.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ce&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[be]),Ye===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ge]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ge])),ce){const J=i.get(b[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,B,Q,0,0,B,Q,Z,n.NEAREST),f&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let be=0;be<b.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,se.__webglColorRenderbuffer[be]);const Ye=i.get(b[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function ze(C){return Math.min(u,C.samples)}function rt(C){const b=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Pt(C){const b=o.render.frame;g.get(C)!==b&&(g.set(C,b),C.update())}function $t(C,b){const B=C.colorSpace,Q=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Il||B!==Xt&&B!==bn&&(Je.getTransfer(B)===dt?a===!1?e.has("EXT_sRGB")===!0&&Q===Sn?(C.format=Il,C.minFilter=nn,C.generateMipmaps=!1):b=Kd.sRGBToLinear(b):(Q!==Sn||Z!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),b}this.allocateTextureUnit=ne,this.resetTextureUnits=j,this.setTexture2D=q,this.setTexture2DArray=N,this.setTexture3D=V,this.setTextureCube=le,this.rebindTextures=Ce,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=rt}function Dv(n,e,t){const i=t.isWebGL2;function s(r,o=bn){let a;const c=Je.getTransfer(o);if(r===Ti)return n.UNSIGNED_BYTE;if(r===Hd)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Gd)return n.UNSIGNED_SHORT_5_5_5_1;if(r===nm)return n.BYTE;if(r===im)return n.SHORT;if(r===ac)return n.UNSIGNED_SHORT;if(r===kd)return n.INT;if(r===Ei)return n.UNSIGNED_INT;if(r===li)return n.FLOAT;if(r===ui)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===sm)return n.ALPHA;if(r===Sn)return n.RGBA;if(r===rm)return n.LUMINANCE;if(r===om)return n.LUMINANCE_ALPHA;if(r===Yi)return n.DEPTH_COMPONENT;if(r===Us)return n.DEPTH_STENCIL;if(r===Il)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===am)return n.RED;if(r===Vd)return n.RED_INTEGER;if(r===lm)return n.RG;if(r===Wd)return n.RG_INTEGER;if(r===Xd)return n.RGBA_INTEGER;if(r===xa||r===va||r===ya||r===Ma)if(c===dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===xa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===va)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===xa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===va)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ya)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ma)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wc||r===Xc||r===$c||r===jc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Wc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===$c)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cm)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===qc||r===Yc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===qc)return c===dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Yc)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Kc||r===Zc||r===Jc||r===Qc||r===eh||r===th||r===nh||r===ih||r===sh||r===rh||r===oh||r===ah||r===lh||r===ch)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Kc)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zc)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jc)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qc)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===eh)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===th)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nh)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ih)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sh)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rh)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===oh)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ah)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lh)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ch)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ea||r===hh||r===uh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ea)return c===dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===uh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hm||r===dh||r===fh||r===ph)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ea)return a.COMPRESSED_RED_RGTC1_EXT;if(r===dh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===fh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ph)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qi?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class Nv extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gt extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uv={type:"move"};class $a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Uv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new gt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ov extends zt{constructor(e,t,i,s,r,o,a,c,l,h){if(h=h!==void 0?h:Yi,h!==Yi&&h!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Yi&&(i=Ei),i===void 0&&h===Us&&(i=qi),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ut,this.minFilter=c!==void 0?c:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Fv extends Xs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const v=[],x=[],y=new sn;y.layers.enable(1),y.viewport=new at;const E=new sn;E.layers.enable(2),E.viewport=new at;const A=[y,E],w=new Nv;w.layers.enable(1),w.layers.enable(2);let L=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let V=v[N];return V===void 0&&(V=new $a,v[N]=V),V.getTargetRaySpace()},this.getControllerGrip=function(N){let V=v[N];return V===void 0&&(V=new $a,v[N]=V),V.getGripSpace()},this.getHand=function(N){let V=v[N];return V===void 0&&(V=new $a,v[N]=V),V.getHandSpace()};function S(N){const V=x.indexOf(N.inputSource);if(V===-1)return;const le=v[V];le!==void 0&&(le.update(N.inputSource,N.frame,l||o),le.dispatchEvent({type:N.type,data:N.inputSource}))}function D(){s.removeEventListener("select",S),s.removeEventListener("selectstart",S),s.removeEventListener("selectend",S),s.removeEventListener("squeeze",S),s.removeEventListener("squeezestart",S),s.removeEventListener("squeezeend",S),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",O);for(let N=0;N<v.length;N++){const V=x[N];V!==null&&(x[N]=null,v[N].disconnect(V))}L=null,M=null,e.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,q.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",S),s.addEventListener("selectstart",S),s.addEventListener("selectend",S),s.addEventListener("squeeze",S),s.addEventListener("squeezestart",S),s.addEventListener("squeezeend",S),s.addEventListener("end",D),s.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,V),s.updateRenderState({baseLayer:f}),p=new Un(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let V=null,le=null,ue=null;_.depth&&(ue=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=_.stencil?Us:Yi,le=_.stencil?qi:Ei);const pe={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(pe),s.updateRenderState({layers:[d]}),p=new Un(d.textureWidth,d.textureHeight,{format:Sn,type:Ti,depthTexture:new Ov(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Se=e.properties.get(p);Se.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),q.setContext(s),q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function O(N){for(let V=0;V<N.removed.length;V++){const le=N.removed[V],ue=x.indexOf(le);ue>=0&&(x[ue]=null,v[ue].disconnect(le))}for(let V=0;V<N.added.length;V++){const le=N.added[V];let ue=x.indexOf(le);if(ue===-1){for(let Se=0;Se<v.length;Se++)if(Se>=x.length){x.push(le),ue=Se;break}else if(x[Se]===null){x[Se]=le,ue=Se;break}if(ue===-1)break}const pe=v[ue];pe&&pe.connect(le)}}const $=new R,P=new R;function k(N,V,le){$.setFromMatrixPosition(V.matrixWorld),P.setFromMatrixPosition(le.matrixWorld);const ue=$.distanceTo(P),pe=V.projectionMatrix.elements,Se=le.projectionMatrix.elements,We=pe[14]/(pe[10]-1),Re=pe[14]/(pe[10]+1),Ne=(pe[9]+1)/pe[5],xt=(pe[9]-1)/pe[5],Fe=(pe[8]-1)/pe[0],F=(Se[8]+1)/Se[0],ln=We*Fe,ve=We*F,Ce=ue/(-Fe+F),Ae=Ce*-Fe;V.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ae),N.translateZ(Ce),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const vt=We+Ce,Be=Re+Ce,ze=ln-Ae,rt=ve+(ue-Ae),Pt=Ne*Re/Be*vt,$t=xt*Re/Be*vt;N.projectionMatrix.makePerspective(ze,rt,Pt,$t,vt,Be),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function X(N,V){V===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(V.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(s===null)return;w.near=E.near=y.near=N.near,w.far=E.far=y.far=N.far,(L!==w.near||M!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,M=w.far);const V=N.parent,le=w.cameras;X(w,V);for(let ue=0;ue<le.length;ue++)X(le[ue],V);le.length===2?k(w,y,E):w.projectionMatrix.copy(y.projectionMatrix),j(N,w,V)};function j(N,V,le){le===null?N.matrix.copy(V.matrixWorld):(N.matrix.copy(le.matrixWorld),N.matrix.invert(),N.matrix.multiply(V.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(V.projectionMatrix),N.projectionMatrixInverse.copy(V.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Fs*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(N){c=N,d!==null&&(d.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)};let ne=null;function K(N,V){if(h=V.getViewerPose(l||o),g=V,h!==null){const le=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ue=!1;le.length!==w.cameras.length&&(w.cameras.length=0,ue=!0);for(let pe=0;pe<le.length;pe++){const Se=le[pe];let We=null;if(f!==null)We=f.getViewport(Se);else{const Ne=u.getViewSubImage(d,Se);We=Ne.viewport,pe===0&&(e.setRenderTargetTextures(p,Ne.colorTexture,d.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(p))}let Re=A[pe];Re===void 0&&(Re=new sn,Re.layers.enable(pe),Re.viewport=new at,A[pe]=Re),Re.matrix.fromArray(Se.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Se.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(We.x,We.y,We.width,We.height),pe===0&&(w.matrix.copy(Re.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ue===!0&&w.cameras.push(Re)}}for(let le=0;le<v.length;le++){const ue=x[le],pe=v[le];ue!==null&&pe!==void 0&&pe.update(ue,V,l||o)}ne&&ne(N,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),g=null}const q=new of;q.setAnimationLoop(K),this.setAnimationLoop=function(N){ne=N},this.dispose=function(){}}}function Bv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,nf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function zv(n,e,t,i){let s={},r={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function l(v,x){let y=s[v.id];y===void 0&&(g(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",m));const E=x.program;i.updateUBOMapping(v,E);const A=e.render.frame;r[v.id]!==A&&(d(v),r[v.id]=A)}function h(v){const x=u();v.__bindingPointIndex=x;const y=n.createBuffer(),E=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,E,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=s[v.id],y=v.uniforms,E=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,w=y.length;A<w;A++){const L=y[A];if(f(L,A,E)===!0){const M=L.__offset,S=Array.isArray(L.value)?L.value:[L.value];let D=0;for(let O=0;O<S.length;O++){const $=S[O],P=_($);typeof $=="number"?(L.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,M+D,L.__data)):$.isMatrix3?(L.__data[0]=$.elements[0],L.__data[1]=$.elements[1],L.__data[2]=$.elements[2],L.__data[3]=$.elements[0],L.__data[4]=$.elements[3],L.__data[5]=$.elements[4],L.__data[6]=$.elements[5],L.__data[7]=$.elements[0],L.__data[8]=$.elements[6],L.__data[9]=$.elements[7],L.__data[10]=$.elements[8],L.__data[11]=$.elements[0]):($.toArray(L.__data,D),D+=P.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,L.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,x,y){const E=v.value;if(y[x]===void 0){if(typeof E=="number")y[x]=E;else{const A=Array.isArray(E)?E:[E],w=[];for(let L=0;L<A.length;L++)w.push(A[L].clone());y[x]=w}return!0}else if(typeof E=="number"){if(y[x]!==E)return y[x]=E,!0}else{const A=Array.isArray(y[x])?y[x]:[y[x]],w=Array.isArray(E)?E:[E];for(let L=0;L<A.length;L++){const M=A[L];if(M.equals(w[L])===!1)return M.copy(w[L]),!0}}return!1}function g(v){const x=v.uniforms;let y=0;const E=16;let A=0;for(let w=0,L=x.length;w<L;w++){const M=x[w],S={boundary:0,storage:0},D=Array.isArray(M.value)?M.value:[M.value];for(let O=0,$=D.length;O<$;O++){const P=D[O],k=_(P);S.boundary+=k.boundary,S.storage+=k.storage}if(M.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,w>0){A=y%E;const O=E-A;A!==0&&O-S.boundary<0&&(y+=E-A,M.__offset=y)}y+=S.storage}return A=y%E,A>0&&(y+=E-A),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class uf{constructor(e={}){const{canvas:t=Bm(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ht,this._useLegacyLights=!1,this.toneMapping=wi,this.toneMappingExposure=1;const x=this;let y=!1,E=0,A=0,w=null,L=-1,M=null;const S=new at,D=new at;let O=null;const $=new me(0);let P=0,k=t.width,X=t.height,j=1,ne=null,K=null;const q=new at(0,0,k,X),N=new at(0,0,k,X);let V=!1;const le=new ra;let ue=!1,pe=!1,Se=null;const We=new De,Re=new fe,Ne=new R,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return w===null?j:1}let F=i;function ln(T,U){for(let z=0;z<T.length;z++){const H=T[z],G=t.getContext(H,U);if(G!==null)return G}return null}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sc}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",ae,!1),F===null){const U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),F=ln(U,T),F===null)throw ln(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ve,Ce,Ae,vt,Be,ze,rt,Pt,$t,C,b,B,Q,Z,ee,ge,se,ce,be,Ye,J,et,Le,we;function ye(){ve=new Y_(F),Ce=new V_(F,ve,e),ve.init(Ce),et=new Dv(F,ve,Ce),Ae=new Pv(F,ve,Ce),vt=new J_(F),Be=new _v,ze=new Iv(F,ve,Ae,Be,Ce,et,vt),rt=new X_(x),Pt=new q_(x),$t=new lg(F,Ce),Le=new H_(F,ve,$t,Ce),C=new K_(F,$t,vt,Le),b=new nx(F,C,$t,vt),be=new tx(F,Ce,ze),ge=new W_(Be),B=new gv(x,rt,Pt,ve,Ce,Le,ge),Q=new Bv(x,Be),Z=new vv,ee=new wv(ve,Ce),ce=new k_(x,rt,Pt,Ae,b,d,c),se=new Lv(x,b,Ce),we=new zv(F,vt,Ce,Ae),Ye=new G_(F,ve,vt,Ce),J=new Z_(F,ve,vt,Ce),vt.programs=B.programs,x.capabilities=Ce,x.extensions=ve,x.properties=Be,x.renderLists=Z,x.shadowMap=se,x.state=Ae,x.info=vt}ye();const de=new Fv(x,F);this.xr=de,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=ve.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ve.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(T){T!==void 0&&(j=T,this.setSize(k,X,!1))},this.getSize=function(T){return T.set(k,X)},this.setSize=function(T,U,z=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,X=U,t.width=Math.floor(T*j),t.height=Math.floor(U*j),z===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(k*j,X*j).floor()},this.setDrawingBufferSize=function(T,U,z){k=T,X=U,j=z,t.width=Math.floor(T*z),t.height=Math.floor(U*z),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(q)},this.setViewport=function(T,U,z,H){T.isVector4?q.set(T.x,T.y,T.z,T.w):q.set(T,U,z,H),Ae.viewport(S.copy(q).multiplyScalar(j).floor())},this.getScissor=function(T){return T.copy(N)},this.setScissor=function(T,U,z,H){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,U,z,H),Ae.scissor(D.copy(N).multiplyScalar(j).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(T){Ae.setScissorTest(V=T)},this.setOpaqueSort=function(T){ne=T},this.setTransparentSort=function(T){K=T},this.getClearColor=function(T){return T.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(T=!0,U=!0,z=!0){let H=0;if(T){let G=!1;if(w!==null){const he=w.texture.format;G=he===Xd||he===Wd||he===Vd}if(G){const he=w.texture.type,_e=he===Ti||he===Ei||he===ac||he===qi||he===Hd||he===Gd,Ee=ce.getClearColor(),Te=ce.getClearAlpha(),Oe=Ee.r,Pe=Ee.g,Ie=Ee.b;_e?(f[0]=Oe,f[1]=Pe,f[2]=Ie,f[3]=Te,F.clearBufferuiv(F.COLOR,0,f)):(g[0]=Oe,g[1]=Pe,g[2]=Ie,g[3]=Te,F.clearBufferiv(F.COLOR,0,g))}else H|=F.COLOR_BUFFER_BIT}U&&(H|=F.DEPTH_BUFFER_BIT),z&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Z.dispose(),ee.dispose(),Be.dispose(),rt.dispose(),Pt.dispose(),b.dispose(),Le.dispose(),we.dispose(),B.dispose(),de.dispose(),de.removeEventListener("sessionstart",_n),de.removeEventListener("sessionend",ct),Se&&(Se.dispose(),Se=null),Kt.stop()};function je(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=vt.autoReset,U=se.enabled,z=se.autoUpdate,H=se.needsUpdate,G=se.type;ye(),vt.autoReset=T,se.enabled=U,se.autoUpdate=z,se.needsUpdate=H,se.type=G}function ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function te(T){const U=T.target;U.removeEventListener("dispose",te),W(U)}function W(T){ie(T),Be.remove(T)}function ie(T){const U=Be.get(T).programs;U!==void 0&&(U.forEach(function(z){B.releaseProgram(z)}),T.isShaderMaterial&&B.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,z,H,G,he){U===null&&(U=xt);const _e=G.isMesh&&G.matrixWorld.determinant()<0,Ee=yp(T,U,z,H,G);Ae.setMaterial(H,_e);let Te=z.index,Oe=1;if(H.wireframe===!0){if(Te=C.getWireframeAttribute(z),Te===void 0)return;Oe=2}const Pe=z.drawRange,Ie=z.attributes.position;let Et=Pe.start*Oe,cn=(Pe.start+Pe.count)*Oe;he!==null&&(Et=Math.max(Et,he.start*Oe),cn=Math.min(cn,(he.start+he.count)*Oe)),Te!==null?(Et=Math.max(Et,0),cn=Math.min(cn,Te.count)):Ie!=null&&(Et=Math.max(Et,0),cn=Math.min(cn,Ie.count));const It=cn-Et;if(It<0||It===1/0)return;Le.setup(G,H,Ee,z,Te);let Yn,yt=Ye;if(Te!==null&&(Yn=$t.get(Te),yt=J,yt.setIndex(Yn)),G.isMesh)H.wireframe===!0?(Ae.setLineWidth(H.wireframeLinewidth*Fe()),yt.setMode(F.LINES)):yt.setMode(F.TRIANGLES);else if(G.isLine){let Ve=H.linewidth;Ve===void 0&&(Ve=1),Ae.setLineWidth(Ve*Fe()),G.isLineSegments?yt.setMode(F.LINES):G.isLineLoop?yt.setMode(F.LINE_LOOP):yt.setMode(F.LINE_STRIP)}else G.isPoints?yt.setMode(F.POINTS):G.isSprite&&yt.setMode(F.TRIANGLES);if(G.isInstancedMesh)yt.renderInstances(Et,It,G.count);else if(z.isInstancedBufferGeometry){const Ve=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,pa=Math.min(z.instanceCount,Ve);yt.renderInstances(Et,It,pa)}else yt.render(Et,It)};function Me(T,U,z){T.transparent===!0&&T.side===Ft&&T.forceSinglePass===!1?(T.side=Yt,T.needsUpdate=!0,Qr(T,U,z),T.side=di,T.needsUpdate=!0,Qr(T,U,z),T.side=Ft):Qr(T,U,z)}this.compile=function(T,U,z=null){z===null&&(z=T),m=ee.get(z),m.init(),v.push(m),z.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),T!==z&&T.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(x._useLegacyLights);const H=new Set;return T.traverse(function(G){const he=G.material;if(he)if(Array.isArray(he))for(let _e=0;_e<he.length;_e++){const Ee=he[_e];Me(Ee,z,G),H.add(Ee)}else Me(he,z,G),H.add(he)}),v.pop(),m=null,H},this.compileAsync=function(T,U,z=null){const H=this.compile(T,U,z);return new Promise(G=>{function he(){if(H.forEach(function(_e){Be.get(_e).currentProgram.isReady()&&H.delete(_e)}),H.size===0){G(T);return}setTimeout(he,10)}ve.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ke=null;function St(T){Ke&&Ke(T)}function _n(){Kt.stop()}function ct(){Kt.start()}const Kt=new of;Kt.setAnimationLoop(St),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(T){Ke=T,de.setAnimationLoop(T),T===null?Kt.stop():Kt.start()},de.addEventListener("sessionstart",_n),de.addEventListener("sessionend",ct),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(U),U=de.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,U,w),m=ee.get(T,v.length),m.init(),v.push(m),We.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),le.setFromProjectionMatrix(We),pe=this.localClippingEnabled,ue=ge.init(this.clippingPlanes,pe),_=Z.get(T,p.length),_.init(),p.push(_),Fn(T,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(ne,K),this.info.render.frame++,ue===!0&&ge.beginShadows();const z=m.state.shadowsArray;if(se.render(z,T,U),ue===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),ce.render(_,T),m.setupLights(x._useLegacyLights),U.isArrayCamera){const H=U.cameras;for(let G=0,he=H.length;G<he;G++){const _e=H[G];Ic(_,T,_e,_e.viewport)}}else Ic(_,T,U);w!==null&&(ze.updateMultisampleRenderTarget(w),ze.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(x,T,U),Le.resetDefaultState(),L=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Fn(T,U,z,H){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||le.intersectsSprite(T)){H&&Ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(We);const _e=b.update(T),Ee=T.material;Ee.visible&&_.push(T,_e,Ee,z,Ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||le.intersectsObject(T))){const _e=b.update(T),Ee=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ne.copy(T.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ne.copy(_e.boundingSphere.center)),Ne.applyMatrix4(T.matrixWorld).applyMatrix4(We)),Array.isArray(Ee)){const Te=_e.groups;for(let Oe=0,Pe=Te.length;Oe<Pe;Oe++){const Ie=Te[Oe],Et=Ee[Ie.materialIndex];Et&&Et.visible&&_.push(T,_e,Et,z,Ne.z,Ie)}}else Ee.visible&&_.push(T,_e,Ee,z,Ne.z,null)}}const he=T.children;for(let _e=0,Ee=he.length;_e<Ee;_e++)Fn(he[_e],U,z,H)}function Ic(T,U,z,H){const G=T.opaque,he=T.transmissive,_e=T.transparent;m.setupLightsView(z),ue===!0&&ge.setGlobalState(x.clippingPlanes,z),he.length>0&&vp(G,he,U,z),H&&Ae.viewport(S.copy(H)),G.length>0&&Jr(G,U,z),he.length>0&&Jr(he,U,z),_e.length>0&&Jr(_e,U,z),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function vp(T,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const he=Ce.isWebGL2;Se===null&&(Se=new Un(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?ui:Ti,minFilter:Ji,samples:he?4:0})),x.getDrawingBufferSize(Re),he?Se.setSize(Re.x,Re.y):Se.setSize(jo(Re.x),jo(Re.y));const _e=x.getRenderTarget();x.setRenderTarget(Se),x.getClearColor($),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const Ee=x.toneMapping;x.toneMapping=wi,Jr(T,z,H),ze.updateMultisampleRenderTarget(Se),ze.updateRenderTargetMipmap(Se);let Te=!1;for(let Oe=0,Pe=U.length;Oe<Pe;Oe++){const Ie=U[Oe],Et=Ie.object,cn=Ie.geometry,It=Ie.material,Yn=Ie.group;if(It.side===Ft&&Et.layers.test(H.layers)){const yt=It.side;It.side=Yt,It.needsUpdate=!0,Dc(Et,z,H,cn,It,Yn),It.side=yt,It.needsUpdate=!0,Te=!0}}Te===!0&&(ze.updateMultisampleRenderTarget(Se),ze.updateRenderTargetMipmap(Se)),x.setRenderTarget(_e),x.setClearColor($,P),x.toneMapping=Ee}function Jr(T,U,z){const H=U.isScene===!0?U.overrideMaterial:null;for(let G=0,he=T.length;G<he;G++){const _e=T[G],Ee=_e.object,Te=_e.geometry,Oe=H===null?_e.material:H,Pe=_e.group;Ee.layers.test(z.layers)&&Dc(Ee,U,z,Te,Oe,Pe)}}function Dc(T,U,z,H,G,he){T.onBeforeRender(x,U,z,H,G,he),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(x,U,z,H,T,he),G.transparent===!0&&G.side===Ft&&G.forceSinglePass===!1?(G.side=Yt,G.needsUpdate=!0,x.renderBufferDirect(z,U,H,G,T,he),G.side=di,G.needsUpdate=!0,x.renderBufferDirect(z,U,H,G,T,he),G.side=Ft):x.renderBufferDirect(z,U,H,G,T,he),T.onAfterRender(x,U,z,H,G,he)}function Qr(T,U,z){U.isScene!==!0&&(U=xt);const H=Be.get(T),G=m.state.lights,he=m.state.shadowsArray,_e=G.state.version,Ee=B.getParameters(T,G.state,he,U,z),Te=B.getProgramCacheKey(Ee);let Oe=H.programs;H.environment=T.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(T.isMeshStandardMaterial?Pt:rt).get(T.envMap||H.environment),Oe===void 0&&(T.addEventListener("dispose",te),Oe=new Map,H.programs=Oe);let Pe=Oe.get(Te);if(Pe!==void 0){if(H.currentProgram===Pe&&H.lightsStateVersion===_e)return Uc(T,Ee),Pe}else Ee.uniforms=B.getUniforms(T),T.onBuild(z,Ee,x),T.onBeforeCompile(Ee,x),Pe=B.acquireProgram(Ee,Te),Oe.set(Te,Pe),H.uniforms=Ee.uniforms;const Ie=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ie.clippingPlanes=ge.uniform),Uc(T,Ee),H.needsLights=Ep(T),H.lightsStateVersion=_e,H.needsLights&&(Ie.ambientLightColor.value=G.state.ambient,Ie.lightProbe.value=G.state.probe,Ie.directionalLights.value=G.state.directional,Ie.directionalLightShadows.value=G.state.directionalShadow,Ie.spotLights.value=G.state.spot,Ie.spotLightShadows.value=G.state.spotShadow,Ie.rectAreaLights.value=G.state.rectArea,Ie.ltc_1.value=G.state.rectAreaLTC1,Ie.ltc_2.value=G.state.rectAreaLTC2,Ie.pointLights.value=G.state.point,Ie.pointLightShadows.value=G.state.pointShadow,Ie.hemisphereLights.value=G.state.hemi,Ie.directionalShadowMap.value=G.state.directionalShadowMap,Ie.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ie.spotShadowMap.value=G.state.spotShadowMap,Ie.spotLightMatrix.value=G.state.spotLightMatrix,Ie.spotLightMap.value=G.state.spotLightMap,Ie.pointShadowMap.value=G.state.pointShadowMap,Ie.pointShadowMatrix.value=G.state.pointShadowMatrix),H.currentProgram=Pe,H.uniformsList=null,Pe}function Nc(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=zo.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Uc(T,U){const z=Be.get(T);z.outputColorSpace=U.outputColorSpace,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function yp(T,U,z,H,G){U.isScene!==!0&&(U=xt),ze.resetTextureUnits();const he=U.fog,_e=H.isMeshStandardMaterial?U.environment:null,Ee=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Xt,Te=(H.isMeshStandardMaterial?Pt:rt).get(H.envMap||_e),Oe=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Pe=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ie=!!z.morphAttributes.position,Et=!!z.morphAttributes.normal,cn=!!z.morphAttributes.color;let It=wi;H.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(It=x.toneMapping);const Yn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,yt=Yn!==void 0?Yn.length:0,Ve=Be.get(H),pa=m.state.lights;if(ue===!0&&(pe===!0||T!==M)){const hn=T===M&&H.id===L;ge.setState(H,T,hn)}let bt=!1;H.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==pa.state.version||Ve.outputColorSpace!==Ee||G.isInstancedMesh&&Ve.instancing===!1||!G.isInstancedMesh&&Ve.instancing===!0||G.isSkinnedMesh&&Ve.skinning===!1||!G.isSkinnedMesh&&Ve.skinning===!0||G.isInstancedMesh&&Ve.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ve.instancingColor===!1&&G.instanceColor!==null||Ve.envMap!==Te||H.fog===!0&&Ve.fog!==he||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ge.numPlanes||Ve.numIntersection!==ge.numIntersection)||Ve.vertexAlphas!==Oe||Ve.vertexTangents!==Pe||Ve.morphTargets!==Ie||Ve.morphNormals!==Et||Ve.morphColors!==cn||Ve.toneMapping!==It||Ce.isWebGL2===!0&&Ve.morphTargetsCount!==yt)&&(bt=!0):(bt=!0,Ve.__version=H.version);let Ii=Ve.currentProgram;bt===!0&&(Ii=Qr(H,U,G));let Oc=!1,tr=!1,ma=!1;const Zt=Ii.getUniforms(),Di=Ve.uniforms;if(Ae.useProgram(Ii.program)&&(Oc=!0,tr=!0,ma=!0),H.id!==L&&(L=H.id,tr=!0),Oc||M!==T){Zt.setValue(F,"projectionMatrix",T.projectionMatrix),Zt.setValue(F,"viewMatrix",T.matrixWorldInverse);const hn=Zt.map.cameraPosition;hn!==void 0&&hn.setValue(F,Ne.setFromMatrixPosition(T.matrixWorld)),Ce.logarithmicDepthBuffer&&Zt.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Zt.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,tr=!0,ma=!0)}if(G.isSkinnedMesh){Zt.setOptional(F,G,"bindMatrix"),Zt.setOptional(F,G,"bindMatrixInverse");const hn=G.skeleton;hn&&(Ce.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),Zt.setValue(F,"boneTexture",hn.boneTexture,ze),Zt.setValue(F,"boneTextureSize",hn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ga=z.morphAttributes;if((ga.position!==void 0||ga.normal!==void 0||ga.color!==void 0&&Ce.isWebGL2===!0)&&be.update(G,z,Ii),(tr||Ve.receiveShadow!==G.receiveShadow)&&(Ve.receiveShadow=G.receiveShadow,Zt.setValue(F,"receiveShadow",G.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Di.envMap.value=Te,Di.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),tr&&(Zt.setValue(F,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&Mp(Di,ma),he&&H.fog===!0&&Q.refreshFogUniforms(Di,he),Q.refreshMaterialUniforms(Di,H,j,X,Se),zo.upload(F,Nc(Ve),Di,ze)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(zo.upload(F,Nc(Ve),Di,ze),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Zt.setValue(F,"center",G.center),Zt.setValue(F,"modelViewMatrix",G.modelViewMatrix),Zt.setValue(F,"normalMatrix",G.normalMatrix),Zt.setValue(F,"modelMatrix",G.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const hn=H.uniformsGroups;for(let _a=0,Sp=hn.length;_a<Sp;_a++)if(Ce.isWebGL2){const Fc=hn[_a];we.update(Fc,Ii),we.bind(Fc,Ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ii}function Mp(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Ep(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,U,z){Be.get(T.texture).__webglTexture=U,Be.get(T.depthTexture).__webglTexture=z;const H=Be.get(T);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const z=Be.get(T);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,z=0){w=T,E=U,A=z;let H=!0,G=null,he=!1,_e=!1;if(T){const Te=Be.get(T);Te.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(F.FRAMEBUFFER,null),H=!1):Te.__webglFramebuffer===void 0?ze.setupRenderTarget(T):Te.__hasExternalTextures&&ze.rebindTextures(T,Be.get(T.texture).__webglTexture,Be.get(T.depthTexture).__webglTexture);const Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(_e=!0);const Pe=Be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Pe[U])?G=Pe[U][z]:G=Pe[U],he=!0):Ce.isWebGL2&&T.samples>0&&ze.useMultisampledRTT(T)===!1?G=Be.get(T).__webglMultisampledFramebuffer:Array.isArray(Pe)?G=Pe[z]:G=Pe,S.copy(T.viewport),D.copy(T.scissor),O=T.scissorTest}else S.copy(q).multiplyScalar(j).floor(),D.copy(N).multiplyScalar(j).floor(),O=V;if(Ae.bindFramebuffer(F.FRAMEBUFFER,G)&&Ce.drawBuffers&&H&&Ae.drawBuffers(T,G),Ae.viewport(S),Ae.scissor(D),Ae.setScissorTest(O),he){const Te=Be.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Te.__webglTexture,z)}else if(_e){const Te=Be.get(T.texture),Oe=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Te.__webglTexture,z||0,Oe)}L=-1},this.readRenderTargetPixels=function(T,U,z,H,G,he,_e){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Ee=Ee[_e]),Ee){Ae.bindFramebuffer(F.FRAMEBUFFER,Ee);try{const Te=T.texture,Oe=Te.format,Pe=Te.type;if(Oe!==Sn&&et.convert(Oe)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Pe===ui&&(ve.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Pe!==Ti&&et.convert(Pe)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===li&&(Ce.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-H&&z>=0&&z<=T.height-G&&F.readPixels(U,z,H,G,et.convert(Oe),et.convert(Pe),he)}finally{const Te=w!==null?Be.get(w).__webglFramebuffer:null;Ae.bindFramebuffer(F.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(T,U,z=0){const H=Math.pow(2,-z),G=Math.floor(U.image.width*H),he=Math.floor(U.image.height*H);ze.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,z,0,0,T.x,T.y,G,he),Ae.unbindTexture()},this.copyTextureToTexture=function(T,U,z,H=0){const G=U.image.width,he=U.image.height,_e=et.convert(z.format),Ee=et.convert(z.type);ze.setTexture2D(z,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment),U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,H,T.x,T.y,G,he,_e,Ee,U.image.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,H,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,_e,U.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,H,T.x,T.y,_e,Ee,U.image),H===0&&z.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(T,U,z,H,G=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=T.max.x-T.min.x+1,_e=T.max.y-T.min.y+1,Ee=T.max.z-T.min.z+1,Te=et.convert(H.format),Oe=et.convert(H.type);let Pe;if(H.isData3DTexture)ze.setTexture3D(H,0),Pe=F.TEXTURE_3D;else if(H.isDataArrayTexture)ze.setTexture2DArray(H,0),Pe=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);const Ie=F.getParameter(F.UNPACK_ROW_LENGTH),Et=F.getParameter(F.UNPACK_IMAGE_HEIGHT),cn=F.getParameter(F.UNPACK_SKIP_PIXELS),It=F.getParameter(F.UNPACK_SKIP_ROWS),Yn=F.getParameter(F.UNPACK_SKIP_IMAGES),yt=z.isCompressedTexture?z.mipmaps[0]:z.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,yt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,yt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,T.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,T.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,T.min.z),z.isDataTexture||z.isData3DTexture?F.texSubImage3D(Pe,G,U.x,U.y,U.z,he,_e,Ee,Te,Oe,yt.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Pe,G,U.x,U.y,U.z,he,_e,Ee,Te,yt.data)):F.texSubImage3D(Pe,G,U.x,U.y,U.z,he,_e,Ee,Te,Oe,yt),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ie),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Et),F.pixelStorei(F.UNPACK_SKIP_PIXELS,cn),F.pixelStorei(F.UNPACK_SKIP_ROWS,It),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Yn),G===0&&H.generateMipmaps&&F.generateMipmap(Pe),Ae.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ze.setTextureCube(T,0):T.isData3DTexture?ze.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ze.setTexture2DArray(T,0):ze.setTexture2D(T,0),Ae.unbindTexture()},this.resetState=function(){E=0,A=0,w=null,Ae.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===cc?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===ia?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ht?Ki:jd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ki?ht:Xt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class kv extends uf{}kv.prototype.isWebGL1Renderer=!0;class fc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new me(e),this.density=t}clone(){return new fc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Hv extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class df{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new R;class Cr{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Cr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ff extends Tn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ms;const or=new R,Es=new R,Ss=new R,bs=new fe,ar=new fe,pf=new De,So=new R,lr=new R,bo=new R,ru=new fe,ja=new fe,ou=new fe;class Gv extends ft{constructor(e=new ff){if(super(),this.isSprite=!0,this.type="Sprite",Ms===void 0){Ms=new Mt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new df(t,5);Ms.setIndex([0,1,2,0,2,3]),Ms.setAttribute("position",new Cr(i,3,0,!1)),Ms.setAttribute("uv",new Cr(i,2,3,!1))}this.geometry=Ms,this.material=e,this.center=new fe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),pf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-Ss.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;wo(So.set(-.5,-.5,0),Ss,o,Es,s,r),wo(lr.set(.5,-.5,0),Ss,o,Es,s,r),wo(bo.set(.5,.5,0),Ss,o,Es,s,r),ru.set(0,0),ja.set(1,0),ou.set(1,1);let a=e.ray.intersectTriangle(So,lr,bo,!1,or);if(a===null&&(wo(lr.set(-.5,.5,0),Ss,o,Es,s,r),ja.set(0,1),a=e.ray.intersectTriangle(So,bo,lr,!1,or),a===null))return;const c=e.ray.origin.distanceTo(or);c<e.near||c>e.far||t.push({distance:c,point:or.clone(),uv:Mn.getInterpolation(or,So,lr,bo,ru,ja,ou,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function wo(n,e,t,i,s,r){bs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(ar.x=r*bs.x-s*bs.y,ar.y=s*bs.x+r*bs.y):ar.copy(bs),n.copy(e),n.x+=ar.x,n.y+=ar.y,n.applyMatrix4(pf)}const au=new R,lu=new at,cu=new at,Vv=new R,hu=new De,To=new R,qa=new jn,uu=new De,Ya=new zr;class Wv extends oe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vc,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,To),this.boundingBox.expandByPoint(To)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,To),this.boundingSphere.expandByPoint(To)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qa.copy(this.boundingSphere),qa.applyMatrix4(s),e.ray.intersectsSphere(qa)!==!1&&(uu.copy(s).invert(),Ya.copy(e.ray).applyMatrix4(uu),!(this.boundingBox!==null&&Ya.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ya)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===tm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;lu.fromBufferAttribute(s.attributes.skinIndex,e),cu.fromBufferAttribute(s.attributes.skinWeight,e),au.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=cu.getComponent(r);if(o!==0){const a=lu.getComponent(r);hu.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Vv.copy(au).applyMatrix4(hu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class mf extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Xv extends zt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Ut,h=Ut,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const du=new De,$v=new De;class pc{constructor(e=[],t=[]){this.uuid=Nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new De;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:$v;du.multiplyMatrices(a,t[r]),du.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new pc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=qd(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Xv(t,e,e,Sn,li);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new mf),this.bones.push(o),this.boneInverses.push(new De().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class Ul extends Wt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ws=new De,fu=new De,Ao=[],pu=new fi,jv=new De,cr=new oe,hr=new jn;class qv extends oe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ul(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,jv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ws),pu.copy(e.boundingBox).applyMatrix4(ws),this.boundingBox.union(pu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ws),hr.copy(e.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,s=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(i),e.ray.intersectsSphere(hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ws),fu.multiplyMatrices(i,ws),cr.matrixWorld=fu,cr.raycast(e,Ao);for(let o=0,a=Ao.length;o<a;o++){const c=Ao[o];c.instanceId=r,c.object=this,t.push(c)}Ao.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ul(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class la extends Tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mu=new R,gu=new R,_u=new De,Ka=new zr,Ro=new jn;class Hr extends ft{constructor(e=new Mt,t=new la){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)mu.fromBufferAttribute(t,s-1),gu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=mu.distanceTo(gu);e.setAttribute("lineDistance",new lt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(s),Ro.radius+=r,e.ray.intersectsSphere(Ro)===!1)return;_u.copy(s).invert(),Ka.copy(e.ray).applyMatrix4(_u);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new R,h=new R,u=new R,d=new R,f=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const p=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let x=p,y=v-1;x<y;x+=f){const E=g.getX(x),A=g.getX(x+1);if(l.fromBufferAttribute(m,E),h.fromBufferAttribute(m,A),Ka.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let x=p,y=v-1;x<y;x+=f){if(l.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),Ka.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const xu=new R,vu=new R;class Yv extends Hr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)xu.fromBufferAttribute(t,s),vu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+xu.distanceTo(vu);e.setAttribute("lineDistance",new lt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kv extends Hr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Gr extends Tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const yu=new De,Ol=new zr,Co=new jn,Lo=new R;class ca extends ft{constructor(e=new Mt,t=new Gr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(s),Co.radius+=r,e.ray.intersectsSphere(Co)===!1)return;yu.copy(s).invert(),Ol.copy(e.ray).applyMatrix4(yu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Lo.fromBufferAttribute(u,m),Mu(Lo,m,c,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Lo.fromBufferAttribute(u,g),Mu(Lo,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Mu(n,e,t,i,s,r,o){const a=Ol.distanceSqToPoint(n);if(a<t){const c=new R;Ol.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Eu extends zt{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zv{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new fe:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new R,s=[],r=[],o=[],a=new R,c=new De;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ot(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ot(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Jv(n,e){const t=1-n;return t*t*e}function Qv(n,e){return 2*(1-n)*n*e}function ey(n,e){return n*n*e}function Za(n,e,t,i){return Jv(n,e)+Qv(n,t)+ey(n,i)}class ty extends Zv{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Za(e,s.x,r.x,o.x),Za(e,s.y,r.y,o.y),Za(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class is extends Mt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new R,h=new fe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=i+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(a,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class On extends Mt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=i/2;let p=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(f,2));function v(){const y=new R,E=new R;let A=0;const w=(t-e)/i;for(let L=0;L<=r;L++){const M=[],S=L/r,D=S*(t-e)+e;for(let O=0;O<=s;O++){const $=O/s,P=$*c+a,k=Math.sin(P),X=Math.cos(P);E.x=D*k,E.y=-S*i+m,E.z=D*X,u.push(E.x,E.y,E.z),y.set(k,w,X).normalize(),d.push(y.x,y.y,y.z),f.push($,1-S),M.push(g++)}_.push(M)}for(let L=0;L<s;L++)for(let M=0;M<r;M++){const S=_[M][L],D=_[M+1][L],O=_[M+1][L+1],$=_[M][L+1];h.push(S,D,$),h.push(D,O,$),A+=6}l.addGroup(p,A,0),p+=A}function x(y){const E=g,A=new fe,w=new R;let L=0;const M=y===!0?e:t,S=y===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const D=g;for(let O=0;O<=s;O++){const P=O/s*c+a,k=Math.cos(P),X=Math.sin(P);w.x=M*X,w.y=m*S,w.z=M*k,u.push(w.x,w.y,w.z),d.push(0,S,0),A.x=k*.5+.5,A.y=X*.5*S+.5,f.push(A.x,A.y),g++}for(let O=0;O<s;O++){const $=E+O,P=D+O;y===!0?h.push(P,P+1,$):h.push(P+1,P,$),L+=3}l.addGroup(p,L,y===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $n extends On{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new $n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vr extends Mt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(r.slice(),3)),this.setAttribute("uv",new lt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new R,y=new R,E=new R;for(let A=0;A<t.length;A+=3)f(t[A+0],x),f(t[A+1],y),f(t[A+2],E),c(x,y,E,v)}function c(v,x,y,E){const A=E+1,w=[];for(let L=0;L<=A;L++){w[L]=[];const M=v.clone().lerp(y,L/A),S=x.clone().lerp(y,L/A),D=A-L;for(let O=0;O<=D;O++)O===0&&L===A?w[L][O]=M:w[L][O]=M.clone().lerp(S,O/D)}for(let L=0;L<A;L++)for(let M=0;M<2*(A-L)-1;M++){const S=Math.floor(M/2);M%2===0?(d(w[L][S+1]),d(w[L+1][S]),d(w[L][S])):(d(w[L][S+1]),d(w[L+1][S+1]),d(w[L+1][S]))}}function l(v){const x=new R;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(v),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){const v=new R;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const y=m(v)/2/Math.PI+.5,E=p(v)/Math.PI+.5;o.push(y,1-E)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){const x=o[v+0],y=o[v+2],E=o[v+4],A=Math.max(x,y,E),w=Math.min(x,y,E);A>.9&&w<.1&&(x<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),E<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,x){const y=v*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function g(){const v=new R,x=new R,y=new R,E=new R,A=new fe,w=new fe,L=new fe;for(let M=0,S=0;M<r.length;M+=9,S+=6){v.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),A.set(o[S+0],o[S+1]),w.set(o[S+2],o[S+3]),L.set(o[S+4],o[S+5]),E.copy(v).add(x).add(y).divideScalar(3);const D=m(E);_(A,S+0,v,D),_(w,S+2,x,D),_(L,S+4,y,D)}}function _(v,x,y,E){E<0&&v.x===1&&(o[x]=v.x-1),y.x===0&&y.z===0&&(o[x]=E/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.vertices,e.indices,e.radius,e.details)}}class mc extends Vr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new mc(e.radius,e.detail)}}class gc extends Vr{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new gc(e.radius,e.detail)}}class js extends Mt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/s,f=new R,g=new fe;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const p=r+m/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(i+1);for(let p=0;p<i;p++){const v=p+m,x=v,y=v+i+1,E=v+i+2,A=v+1;a.push(x,y,A),a.push(y,E,A)}}this.setIndex(a),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class _t extends Mt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new R,d=new R,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const v=[],x=p/i;let y=0;p===0&&o===0?y=.5/t:p===i&&c===Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){const A=E/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+y,1-x),v.push(l++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){const x=h[p][v+1],y=h[p][v],E=h[p+1][v],A=h[p+1][v+1];(p!==0||o>0)&&f.push(x,y,A),(p!==i-1||c<Math.PI)&&f.push(y,E,A)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qs extends Vr{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new qs(e.radius,e.detail)}}class xe extends Tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pi extends xe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ny extends Tn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Po(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function iy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function sy(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Su(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=n[a+c]}return s}function gf(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Wr{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ry extends Wr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mh,endingEnd:mh}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case gh:r=e,a=2*t-i;break;case _h:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case gh:o=e,c=2*i-t;break;case _h:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}const l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+v*o[l+E]+x*o[c+E]+y*o[u+E];return r}}class oy extends Wr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class ay extends Wr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class qn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Po(t,this.TimeBufferType),this.values=Po(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Po(e.times,Array),values:Po(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ay(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ry(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ar:t=this.InterpolantFactoryMethodDiscrete;break;case Os:t=this.InterpolantFactoryMethodLinear;break;case Sa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return Os;case this.InterpolantFactoryMethodSmooth:return Sa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&iy(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Sa,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{const u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Os;class Ys extends qn{}Ys.prototype.ValueTypeName="bool";Ys.prototype.ValueBufferType=Array;Ys.prototype.DefaultInterpolation=Ar;Ys.prototype.InterpolantFactoryMethodLinear=void 0;Ys.prototype.InterpolantFactoryMethodSmooth=void 0;class _f extends qn{}_f.prototype.ValueTypeName="color";class zs extends qn{}zs.prototype.ValueTypeName="number";class ly extends Wr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t);let l=e*a;for(let h=l+a;l!==h;l+=4)Li.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Qi extends qn{InterpolantFactoryMethodLinear(e){return new ly(this.times,this.values,this.getValueSize(),e)}}Qi.prototype.ValueTypeName="quaternion";Qi.prototype.DefaultInterpolation=Os;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ks extends qn{}Ks.prototype.ValueTypeName="string";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=Ar;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;class ks extends qn{}ks.prototype.ValueTypeName="vector";class cy{constructor(e,t=-1,i,s=um){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Nn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(uy(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(qn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=sy(c);c=Su(c,1,h),l=Su(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new zs(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];gf(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){const x=d[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}s.push(new zs(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[u].name+"]";i(ks,f+".position",d,"pos",s),i(Qi,f+".quaternion",d,"rot",s),i(ks,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function hy(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zs;case"vector":case"vector2":case"vector3":case"vector4":return ks;case"color":return _f;case"quaternion":return Qi;case"bool":case"boolean":return Ys;case"string":return Ks}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function uy(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=hy(n.type);if(n.times===void 0){const t=[],i=[];gf(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Hs={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class dy{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const fy=new dy;class Zs{constructor(e){this.manager=e!==void 0?e:fy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Zs.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti={};class py extends Error{constructor(e,t){super(e),this.response=t}}class xf extends Zs{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Hs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ti[e]!==void 0){ti[e].push({onLoad:t,onProgress:i,onError:s});return}ti[e]=[],ti[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=ti[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){u.read().then(({done:x,value:y})=>{if(x)p.close();else{_+=y.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,w=h.length;A<w;A++){const L=h[A];L.onProgress&&L.onProgress(E)}p.enqueue(y),v()}})}}});return new Response(m)}else throw new py(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Hs.add(e,l);const h=ti[e];delete ti[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=ti[e];if(h===void 0)throw this.manager.itemError(e),l;delete ti[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class my extends Zs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Hs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Rr("img");function c(){h(),Hs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class vf extends Zs{constructor(e){super(e)}load(e,t,i,s){const r=new zt,o=new my(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Xr extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class gy extends Xr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ja=new De,bu=new R,wu=new R;class _c{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ra,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(bu),wu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wu),t.updateMatrixWorld(),Ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _y extends _c{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Fs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class xy extends Xr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new _y}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Tu=new De,ur=new R,Qa=new R;class vy extends _c{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ur.setFromMatrixPosition(e.matrixWorld),i.position.copy(ur),Qa.copy(i.position),Qa.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Qa),i.updateMatrixWorld(),s.makeTranslation(-ur.x,-ur.y,-ur.z),Tu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tu)}}class yf extends Xr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new vy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class yy extends _c{constructor(){super(new kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mf extends Xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new yy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class My extends Xr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fl{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Ey extends Zs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Hs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){Hs.add(e,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){s&&s(c),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class Sy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Au(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Au();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Au(){return(typeof performance>"u"?Date:performance).now()}const xc="\\[\\]\\.:\\/",by=new RegExp("["+xc+"]","g"),vc="[^"+xc+"]",wy="[^"+xc.replace("\\.","")+"]",Ty=/((?:WC+[\/:])*)/.source.replace("WC",vc),Ay=/(WCOD+)?/.source.replace("WCOD",wy),Ry=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc),Cy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc),Ly=new RegExp("^"+Ty+Ay+Ry+Cy+"$"),Py=["material","materials","bones","map"];class Iy{constructor(e,t,i){const s=i||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Qe{constructor(e,t,i){this.path=t,this.parsedPath=i||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,i):new Qe(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(by,"")}static parseTrackName(e){const t=Ly.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);Py.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=Iy;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Dy{constructor(e,t,i=0,s=1/0){this.ray=new zr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new uc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Bl(e,this,i,t),i.sort(Ru),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Bl(e[s],this,i,t);return i.sort(Ru),i}}function Ru(n,e){return n.distance-e.distance}function Bl(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const s=n.children;for(let r=0,o=s.length;r<o;r++)Bl(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sc);var Cu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},yc={},ha={};Object.defineProperty(ha,"__esModule",{value:!0});ha.VERSION=void 0;ha.VERSION="0.0.6";/**
 * @package      npmjs.com/package/@yandeu/events (events.min.js)
 *
 * @author       Arnout Kazemier (https://github.com/3rd-Eden)
 * @copyright    Copyright (c) 2014 Arnout Kazemier
 * @license      {@link https://github.com/primus/eventemitter3/blob/master/LICENSE|MIT}
 *
 * @author       Yannick Deubel (https://github.com/yandeu)
 * @copyright    Copyright (c) 2021 Yannick Deubel; Project Url: https://github.com/yandeu/events
 * @license      {@link https://github.com/yandeu/events/blob/master/LICENSE|MIT}
 */var Lu=Cu&&Cu.__spreadArray||function(n,e,t){if(t||arguments.length===2)for(var i=0,s=e.length,r;i<s;i++)(r||!(i in e))&&(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return n.concat(r||Array.prototype.slice.call(e))};Object.defineProperty(yc,"__esModule",{value:!0});var Ef=yc.Events=void 0,Ny=ha,Uy=function(){function n(e,t,i){i===void 0&&(i=!1),this.fn=e,this.context=t,this.once=i}return n}(),Pu=function(n,e,t,i,s){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new Uy(t,i||n,s);return n._events.has(e)?n._events.get(e).fn?n._events.set(e,[n._events.get(e),r]):n._events.get(e).push(r):(n._events.set(e,r),n._eventsCount++),n},Io=function(n,e){--n._eventsCount===0?n._events=new Map:n._events.delete(e)},Oy=function(){function n(){this._events=new Map,this._eventsCount=0}return Object.defineProperty(n,"VERSION",{get:function(){return Ny.VERSION},enumerable:!1,configurable:!0}),n.prototype.eventNames=function(){return Array.from(this._events.keys())},n.prototype.listeners=function(e){var t=this._events.get(e);if(!t)return[];if(t.fn)return[t.fn];for(var i=0,s=t.length,r=new Array(s);i<s;i++)r[i]=t[i].fn;return r},n.prototype.listenerCount=function(e){var t=this._events.get(e);return t?t.fn?1:t.length:0},n.prototype.emit=function(e){for(var t,i,s=[],r=1;r<arguments.length;r++)s[r-1]=arguments[r];if(!this._events.has(e))return!1;var o=this._events.get(e),a;if(o.fn)return o.once&&this.removeListener(e,o.fn,void 0,!0),(t=o.fn).call.apply(t,Lu([o.context],s,!1)),!0;var c=o.length;for(a=0;a<c;a++)o[a].once&&this.removeListener(e,o[a].fn,void 0,!0),(i=o[a].fn).call.apply(i,Lu([o[a].context],s,!1));return!0},n.prototype.on=function(e,t,i){return Pu(this,e,t,i,!1)},n.prototype.once=function(e,t,i){return Pu(this,e,t,i,!0)},n.prototype.removeListener=function(e,t,i,s){if(!this._events.has(e))return this;if(!t)return Io(this,e),this;var r=this._events.get(e);if(r.fn)r.fn===t&&(!s||r.once)&&(!i||r.context===i)&&Io(this,e);else{for(var o=0,a=[],c=r.length;o<c;o++)(r[o].fn!==t||s&&!r[o].once||i&&r[o].context!==i)&&a.push(r[o]);a.length?this._events.set(e,a.length===1?a[0]:a):Io(this,e)}return this},n.prototype.removeAllListeners=function(e){return e?this._events.delete(e)&&Io(this,e):(this._events=new Map,this._eventsCount=0),this},Object.defineProperty(n.prototype,"off",{get:function(){return this.removeListener},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"addListener",{get:function(){return this.on},enumerable:!1,configurable:!0}),n}();Ef=yc.Events=Oy;class Sf{constructor(){this.eventEmitter=new Ef}emit(e,t,i={}){this.eventEmitter.emit(e,t,i)}on(e,t){return this.eventEmitter.on(e,(i,s)=>{t(i,s)})}removeAllListeners(){this.eventEmitter.removeAllListeners()}}new Sf;const ri={CONNECT:"connect",CONNECTION:"connection",DATA_CHANNEL_IS_OPEN:"dataChannelIsOpen",DISCONNECT:"disconnect",DISCONNECTED:"disconnected",DROP:"dropped",ERROR:"error",RAW_MESSAGE:"rawMessage",RECEIVED_FROM_DATA_CHANNEL:"receiveFromDataChannel",SEND_OVER_DATA_CHANNEL:"sendOverDataChannel"},bf={BROWSER_NOT_SUPPORTED:"BROWSER_NOT_SUPPORTED",COULD_NOT_PARSE_MESSAGE:"COULD_NOT_PARSE_MESSAGE"},Fy=Object.getPrototypeOf(Object.getPrototypeOf(new Uint8Array)).constructor;typeof Promise=="function"&&Promise.prototype.then.bind(Promise.resolve());const wf=n=>typeof n=="string",zl=n=>n instanceof ArrayBuffer||n instanceof Fy,By=n=>{try{return typeof n!="string"||!isNaN(parseInt(n))?!1:(JSON.parse(n),!0)}catch{return!1}},zy=n=>{let{data:e}=n;e||(e=n);const t=zl(e),i=By(e),s=wf(e);if(i){const r=JSON.parse(e),o=Object.keys(r)[0],a=r[o];return{key:o,data:a}}return t?{key:ri.RAW_MESSAGE,data:e}:s?{key:ri.RAW_MESSAGE,data:e}:{key:"error",data:new Error(bf.COULD_NOT_PARSE_MESSAGE)}},ky=(n,e,t,i=null)=>{var s;const r=(o,a)=>{var c;const l=(c=o.byteLength)!==null&&c!==void 0?c:o.length*2;if(typeof e=="number"&&l>e)throw new Error(`maxMessageSize of ${e} exceeded`);Promise.resolve().then(()=>{n.send?n.send(o):a?n.sendMessageBinary(Buffer.from(o)):n.sendMessage(o)}).catch(h=>{console.log("error",h)})};if(n&&(n.readyState==="open"||!((s=n.isOpen)===null||s===void 0)&&s.call(n)))try{t===ri.RAW_MESSAGE&&i!==null&&(wf(i)||zl(i))?r(i,zl(i)):r(JSON.stringify({[t]:i}),!1)}catch(o){return console.error("Error in sendMessage.ts: ",o.message),o}};class Hy{emit(e,t=null){ky(this.dataChannel,this.maxMessageSize,e,t)}constructor(e,t,i,s){this.url=e,this.authorization=t,this.label=i,this.rtcConfiguration=s,this.bridge=new Sf,this.onDataChannel=r=>{const{channel:o}=r;o.label===this.label&&(this.dataChannel=o,this.dataChannel.binaryType="arraybuffer",this.dataChannel.onmessage=a=>{const{key:c,data:l}=zy(a);this.bridge.emit(c,l)})}}async fetchAdditionalCandidates(e,t){var i;if(((i=this.dataChannel)===null||i===void 0?void 0:i.readyState)==="closed")return;const s=await fetch(`${e}/connections/${t}/additional-candidates`,{method:"GET",headers:{"Content-Type":"application/json"}});s.ok&&(await s.json()).forEach(o=>{this.localPeerConnection.addIceCandidate(o)})}async connect(){const e=`${this.url}/.wrtc/v2`;let t={"Content-Type":"application/json"};this.authorization&&(t={...t,Authorization:this.authorization});let i={};try{const l=await fetch(`${e}/connections`,{method:"POST",headers:t});if(l.status>=300)throw{name:"Error",message:`Connection failed with status code ${l.status}.`,status:l.status,statusText:l.statusText};const h=await l.json();i=h.userData,this.remotePeerConnection=h}catch(l){return console.error(l.message),{error:l}}const{id:s,localDescription:r}=this.remotePeerConnection,o={sdpSemantics:"unified-plan",...this.rtcConfiguration},a=RTCPeerConnection||webkitRTCPeerConnection;this.localPeerConnection=new a(o),((l=10,h=50,u=1.8,d=20)=>Array(l).fill(0).map((f,g)=>parseInt((h*u**g).toString())+parseInt((Math.random()*d).toString())))().forEach(l=>{setTimeout(()=>{this.fetchAdditionalCandidates(e,s).catch(()=>{})},l)});try{await this.localPeerConnection.setRemoteDescription(r),this.localPeerConnection.addEventListener("datachannel",this.onDataChannel,{once:!0});const l=await this.localPeerConnection.createAnswer(),h=new RTCSessionDescription({type:"answer",sdp:l.sdp});await this.localPeerConnection.setLocalDescription(h);try{await fetch(`${e}/connections/${s}/remote-description`,{method:"POST",body:JSON.stringify(this.localPeerConnection.localDescription),headers:{"Content-Type":"application/json"}})}catch(d){return console.error(d.message),{error:d}}const u=()=>new Promise(d=>{this.localPeerConnection.addEventListener("datachannel",()=>{d()},{once:!0})});return this.dataChannel||await u(),{userData:i,localPeerConnection:this.localPeerConnection,dataChannel:this.dataChannel,id:s}}catch(l){return console.error(l.message),this.localPeerConnection.close(),{error:l}}}}class Gy{async connect(e){if(RTCPeerConnection||webkitRTCPeerConnection){const{localPeerConnection:i,dataChannel:s,id:r,userData:o,error:a}=await e.connect();return a?{error:a}:!i||!s||!r||!o?{error:new Error('Something went wrong in "await connectionsManager.connect()"')}:(this.localPeerConnection=i,this.dataChannel=s,this.id=r,{userData:o})}else{const i=new Error(bf.BROWSER_NOT_SUPPORTED);return console.error(i.message),{error:i}}}}const Vy=(n=24)=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let i=0;i<n;i++)t+=e.charAt(Math.floor(Math.random()*e.length));return t},Wy=(n=200,e=1,t)=>{let i=0;if(typeof t!="function"){console.error("You have to define your callback function!");return}const s=setInterval(()=>{t(),i++,i===e-1&&clearInterval(s)},n);t()},Xy=(n,e)=>{const{interval:t=150,runs:i=10}=n,s=Vy(24);Wy(t,i,()=>{e(s)})};class $y{constructor(e,t,i,s,r){this.userData={},this.receivedReliableMessages=[],this.url=i?`${e}:${i}`:e,this.connectionsManager=new Hy(this.url,t,s,r),this.bridge=this.connectionsManager.bridge,this.bridge.on(ri.DISCONNECTED,()=>this.bridge.removeAllListeners())}onconnectionstatechange(){const e=this.peerConnection.localPeerConnection;e.onconnectionstatechange=()=>{(e.connectionState==="disconnected"||e.connectionState==="closed")&&this.bridge.emit(ri.DISCONNECTED)}}get id(){return this.peerConnection.id}close(){this.peerConnection.localPeerConnection.close(),this.bridge.emit(ri.DISCONNECTED);try{const e=`${this.url}/.wrtc/v2`;fetch(`${e}/connections/${this.id}/close`,{method:"POST",headers:{"Content-Type":"application/json"}})}catch(e){console.error(e.message)}}emit(e,t=null,i){i&&i.reliable?Xy(i,s=>this.connectionsManager.emit(e,{MESSAGE:t,RELIABLE:1,ID:s})):this.connectionsManager.emit(e,t)}get raw(){return{emit:e=>this.emit(ri.RAW_MESSAGE,e)}}onRaw(e){this.bridge.on(ri.RAW_MESSAGE,t=>{(s=>e(s))(t)})}async onConnect(e){var t;this.peerConnection=new Gy;const i=await this.peerConnection.connect(this.connectionsManager);i.error?e(i.error):(i.userData&&(this.userData=i.userData),this.maxMessageSize=this.connectionsManager.maxMessageSize=(t=this.peerConnection.localPeerConnection.sctp)===null||t===void 0?void 0:t.maxMessageSize,this.onconnectionstatechange(),e())}onDisconnect(e){this.bridge.on(ri.DISCONNECTED,e)}on(e,t){this.bridge.on(e,i=>{i&&i.RELIABLE===1&&i.ID!=="undefined"?((()=>{const a=new Date().getTime();this.receivedReliableMessages.forEach((c,l,h)=>{c.expire<=a&&h.splice(l,1)})})(),this.receivedReliableMessages.filter(a=>a.id===i.ID).length===0&&(this.receivedReliableMessages.push({id:i.ID,timestamp:new Date,expire:new Date().getTime()+15e3}),t(i.MESSAGE))):t(i)})}}const jy=(n={})=>{const{authorization:e=void 0,iceServers:t=[],iceTransportPolicy:i="all",label:s="geckos.io",port:r=9208,url:o=`${location.protocol}//${location.hostname}`}=n;return new $y(o,e,r,s,{iceServers:t,iceTransportPolicy:i})},qy={server:{port:3e3}},ke={FIREBALL:{ID:1,NAME:"Bola de Fogo",DESCRIPTION:"Lança uma esfera de fogo em linha reta que explode ao atingir o inimigo, causando dano direto e queimando inimigos ao redor.",TYPE:"projectile",COOLDOWN:5e3,MANA_COST:40,DAMAGE:20,AREA_DAMAGE:10,AREA_RADIUS:2,RANGE:20,ICON:"/textures/skills/fireball.png",EFFECTS:["explosion","burn"]},TELEPORT:{ID:2,NAME:"Teleporte",DESCRIPTION:"O mago se desfaz em partículas mágicas e se move instantaneamente para outra posição, ignorando obstáculos.",TYPE:"mobility",COOLDOWN:1e4,MANA_COST:25,RANGE:15,ICON:"/textures/skills/teleport.png",EFFECTS:["fade","particles"]},FROST_SPIKES:{ID:3,NAME:"Estacas de Gelo",DESCRIPTION:"O mago conjura uma área de gelo no chão. Após 1 segundo, várias estacas congeladas irrompem da terra, atingindo todos os inimigos na área e aplicando lentidão.",TYPE:"aoe",COOLDOWN:12e3,MANA_COST:60,DAMAGE:25,AREA_RADIUS:5,RANGE:15,DELAY:1e3,SLOW:.4,SLOW_DURATION:3e3,ICON:"/textures/skills/frost_spikes.png",EFFECTS:["spikes","slow"]},METEOR_STORM:{ID:4,NAME:"Chuva de Meteoros",DESCRIPTION:"O mago invoca uma tempestade de meteoros que caem continuamente por 5 segundos em uma área. Cada meteoro causa dano ao atingir o solo, afetando todos os inimigos na zona.",TYPE:"zone",COOLDOWN:2e4,MANA_COST:90,DAMAGE:15,AREA_RADIUS:6,RANGE:18,DURATION:5e3,METEORS:10,METEOR_INTERVAL:500,TICK_INTERVAL:500,ICON:"/textures/skills/meteor_storm.png",EFFECTS:["meteor","fire","smoke"]},DASH:{ID:5,NAME:"Investida Ágil",DESCRIPTION:"O mago se esquiva instantaneamente para a esquerda ou direita, tornando‑se invulnerável por um breve instante e reposicionando‑se.",TYPE:"mobility",COOLDOWN:4e3,MANA_COST:20,RANGE:6,INVULNERABILITY:200,ICON:"/textures/skills/dash.png",EFFECTS:["dash","invuln"]},FIRE_WALL:{ID:6,NAME:"Muralha de Fogo",DESCRIPTION:"Cria uma barreira flamejante à sua frente que dura alguns segundos, bloqueando projéteis inimigos e queimando quem tente atravessá‑la.",TYPE:"zone",COOLDOWN:15e3,MANA_COST:80,DURATION:6e3,DAMAGE_PER_SECOND:10,WIDTH:8,ICON:"/textures/skills/fire_wall.png",EFFECTS:["wall","burn"]},CELESTIAL_HEAL:{ID:7,NAME:"Bênção Celestial",DESCRIPTION:"Invoca um raio de luz do céu que cura instantaneamente aliados em uma pequena área, restaurando sua vida.",TYPE:"heal",COOLDOWN:12e3,MANA_COST:70,HEAL_AMOUNT:100,AREA_RADIUS:4,ICON:"/textures/skills/celestial_heal.png",EFFECTS:["heal","light"]},UNSTABLE_CURSE:{ID:101,NAME:"Maldição Instável",DESCRIPTION:"Aplica uma maldição instável no inimigo. Após 4 segundos, ela explode causando dano em área e corrompendo todos os inimigos próximos.",TYPE:"dot-explode",COOLDOWN:7e3,MANA_COST:45,DAMAGE:30,AREA_RADIUS:3,DELAY:4e3,ICON:"/textures/skills/unstable_curse.png",EFFECTS:["curse","explosion","corruption"]},DARK_BEAM:{ID:102,NAME:"Raio das Sombras",DESCRIPTION:"Canaliza um feixe sombrio contínuo por 3 segundos, drenando vida do inimigo e causando dano por segundo.",TYPE:"channel",COOLDOWN:1e4,MANA_COST:60,DAMAGE_PER_SECOND:12,DURATION:3e3,LIFESTEAL:.25,ICON:"/textures/skills/dark_beam.png",EFFECTS:["beam","lifesteal","dark"]},CURSE_EXPANSION:{ID:103,NAME:"Expansão da Maldição",DESCRIPTION:"Transfere todas as maldições do alvo para inimigos próximos, espalhando os efeitos negativos com potência reduzida.",TYPE:"aoe-debuff",COOLDOWN:15e3,MANA_COST:50,RANGE:10,SPREAD_RADIUS:5,EFFECT_REDUCTION:.5,ICON:"/textures/skills/curse_expansion.png",EFFECTS:["spread","curse"]},SHADOW_PRISON:{ID:104,NAME:"Prisão Sombria",DESCRIPTION:"Cria uma prisão mágica que aprisiona o inimigo no lugar por 3 segundos e causa dano sombrio contínuo durante a duração.",TYPE:"zone-root",COOLDOWN:12e3,MANA_COST:55,DURATION:3e3,DAMAGE_PER_SECOND:10,ICON:"/textures/skills/shadow_prison.png",EFFECTS:["root","dark","zone"]}},Tf={PORT:qy.server.port},ut={PLAYER:{INIT:"player:init",MOVE:"player:move",MOVED:"player:moved",DISCONNECTED:"player:disconnected",JOINED:"player:joined",EXISTING:"player:existing",ROTATE:"player:rotate",ROTATED:"player:rotated",USE_ABILITY:"player:useAbility",ABILITY_USED:"player:abilityUsed",DAMAGE:"player:damage",LEVEL_UP:"player:levelUp",DEATH:"player:death",RESPAWN:"player:respawn",TARGET:"player:target",SYNC_REQUEST:"player:syncRequest",SYNC_RESPONSE:"player:syncResponse"},MONSTER:{SPAWN:"monster:spawn",MOVE:"monster:move",ATTACK:"monster:attack",DAMAGE:"monster:damage",DEATH:"monster:death",ABILITY:"monster:ability",SPAWNED:"monster:spawned",MOVED:"monster:moved",ATTACKED:"monster:attacked",DIED:"monster:died",DAMAGED:"monster:damaged"},COMBAT:{HIT:"combat:hit",DAMAGE_DEALT:"combat:damageDealt",FLOATING_TEXT:"combat:floatingText"},WORLD:{UPDATE:"world:update",INIT:"world:init"}},kl={BLACK_MIST_ZOMBIE:{ID:1,NAME:"Zumbi da Névoa Negra",INTERNAL_NAME:"BlackMistZombie",monsterType:"BLACK_MIST_ZOMBIE",HP:50,DAMAGE:50,DEFENSE:2,SPEED:.05,XP_REWARD:20,ATTACK_RANGE:1.5,ATTACK_COOLDOWN:2e3},SPIDER:{NAME:"Aranha Sombria",HP:80,DAMAGE:60,DEFENSE:3,SPEED:.15,ATTACK_RANGE:3,ATTACK_COOLDOWN:600,XP_REWARD:35}},si={SIZE:{WIDTH:200,HEIGHT:200},BOUNDARIES:{BORDER_WIDTH:2}};function Yy(n={}){const e=new On(.2,.3,1.5,8),t=new xe({color:5913890,roughness:.5,metalness:.15,emissive:2955792,emissiveIntensity:.18}),i=new oe(e,t);i.position.y=.75,i.castShadow=!0,i.receiveShadow=!0;const s=new Gt(1,1.2,.7),r=new xe({color:4094522,roughness:.5,metalness:.18,emissive:1718810,emissiveIntensity:.22}),o=new oe(s,r);o.position.y=1.6,o.castShadow=!0,o.receiveShadow=!0;const a=new _t(.38,12,12),c=new xe({color:12244664,roughness:.45,metalness:.13,emissive:3820090,emissiveIntensity:.18}),l=new oe(a,c);l.position.y=2.3,l.castShadow=!0,l.receiveShadow=!0;const h=new _t(.07,8,8),u=new xe({color:16711680,emissive:16711680,emissiveIntensity:.7}),d=new oe(h,u);d.position.set(-.12,2.38,.33);const f=d.clone();f.position.x=.12;const g=new On(.11,.13,.9,8),_=new xe({color:4094522,roughness:.5,metalness:.18,emissive:1718810,emissiveIntensity:.22}),m=new oe(g,_);m.position.set(-.55,1.6,0),m.rotation.z=Math.PI/6,m.castShadow=!0,m.receiveShadow=!0;const p=m.clone();p.position.x=.55,p.rotation.z=-Math.PI/6;const v=new gt;return v.add(i),v.add(o),v.add(l),v.add(m),v.add(p),v.add(d),v.add(f),v.userData.monsterType="BLACK_MIST_ZOMBIE",v}function Ky(){const n=new gt;n.scale.set(1.4,1.4,1.4),n.rotation.x=Math.PI;const e=new oe(new _t(.4,24,24),new xe({color:2236962,roughness:.7}));e.position.set(0,.25,-.25),n.add(e);const t=new oe(new _t(.28,24,24),new xe({color:2236962,roughness:.7}));t.position.set(0,.22,.25),n.add(t);const i=new mt({color:16711680});for(let r=0;r<6;r++){const o=new oe(new _t(.03,8,8),i),a=r/6*Math.PI*2;o.position.set(Math.cos(a)*.1,.28,.35+Math.sin(a)*.04),n.add(o)}const s=new xe({color:1118481,roughness:.6});for(let r=0;r<8;r++){const o=r/8*Math.PI*2,a=new gt;a.position.set(Math.cos(o)*.22,.18,Math.sin(o)*.22),a.rotation.y=o;const c=new oe(new On(.025,.03,.4,8),s);c.position.y=.2,c.rotation.z=Math.PI/3;const l=new oe(new On(.02,.025,.35,8),s);l.position.set(.3,.15,0),l.rotation.z=Math.PI/4;const h=new oe(new On(.015,.02,.25,8),s);h.position.set(.55,.05,0),h.rotation.z=Math.PI/6,a.add(c),a.add(l),a.add(h),n.add(a)}return n.position.y=.05,n}class Zy{constructor(e,t){this.container=e,this.camera=t,this.names=new Map}addName(e,t,i){const s=document.createElement("div");s.className="monster-name",s.textContent=i,s.style.position="absolute",s.style.color="#ffffff",s.style.fontWeight="bold",s.style.textShadow="0 0 6px #000, 0 0 3px #000, 1px 1px 2px #000",s.style.pointerEvents="none",s.style.fontSize="12px",s.style.fontFamily="Arial, sans-serif",s.style.textAlign="center",s.style.whiteSpace="nowrap",s.style.userSelect="none",s.style.padding="2px 8px",s.style.borderRadius="3px",s.style.backgroundColor="rgba(0, 0, 0, 0.3)",this.container.appendChild(s),this.names.set(e,{el:s,mesh:t})}removeName(e){const t=this.names.get(e);t&&(this.container.removeChild(t.el),this.names.delete(e))}updateAll(e,t){for(const{el:i,mesh:s}of this.names.values()){if(!s||!s.position)continue;const r=s.position.clone();r.y+=4.2,r.project(this.camera);const o=(r.x*.5+.5)*e,a=(-r.y*.5+.5)*t;i.style.left=`${o}px`,i.style.top=`${a}px`,i.style.display=s.visible?"block":"none";const c=this.camera.position.distanceTo(s.position),l=Math.max(.8,Math.min(1.2,30/c));i.style.transform=`translate(-50%, -50%) scale(${l})`}}}class Iu{constructor(e,t){this.scene=e,this.monsters=new Map,this.lastResetTime=Date.now(),this.floatingNameManager=t}updateMonster(e){if(!e||!e.id){console.error("Dados de monstro inválidos:",e);return}const t=e.id;this.monsters.has(t)?this.updateExistingMonster(t,e):this.createMonster(t,e)}createMonster(e,t){var r;let i;if(t.monsterType==="BLACK_MIST_ZOMBIE")i=Yy();else if(t.monsterType==="SPIDER")i=Ky();else{const o=new Gt(1,1,1),a=new xe({color:16711680});i=new oe(o,a);const c=new $n(.3,1,4),l=new xe({color:16742144}),h=new oe(c,l);h.position.set(0,0,.8),h.rotation.x=Math.PI/2,i.add(h)}this.scene.add(i);const s=t.position||{x:0,y:0,z:0};if(i.position.set(Number(s.x)||0,Number(s.y)||.5,Number(s.z)||0),i.userData={id:e,type:"monster",monsterType:t.monsterType||"unknown",stats:t.stats||{},level:t.level||1,created:Date.now(),lastUpdated:Date.now()},this.monsters.set(e,i),this.floatingNameManager){const o=t.monsterType||"BLACK_MIST_ZOMBIE",a=((r=kl[o])==null?void 0:r.NAME)||o;this.floatingNameManager.addName(e,i,a)}}updateExistingMonster(e,t){const i=this.monsters.get(e);i&&(t.position&&i.position.set(Number(t.position.x)||i.position.x,Number(t.position.y)||i.position.y,Number(t.position.z)||i.position.z),t.rotation!==void 0&&(i.rotation.y=Number(t.rotation)||i.rotation.y),t.stats&&(i.userData.stats=t.stats),t.active!==void 0&&(i.visible=t.active),i.userData.lastUpdated=Date.now())}removeMonster(e){if(!this.monsters.has(e))return;const t=this.monsters.get(e);this.scene.remove(t),this.monsters.delete(e),this.floatingNameManager&&this.floatingNameManager.removeName(e),console.log(`Monstro removido: ${e}`)}getMonster(e){return this.monsters.get(e)||null}clearAllMonsters(){console.log(`Limpando todos os monstros. Total antes: ${this.monsters.size}`);for(const e of this.monsters.keys())this.removeMonster(e);this.lastResetTime=Date.now(),console.log("Todos os monstros foram removidos.")}pruneStaleMonsters(e=15e3){const t=Date.now(),i=[];for(const[s,r]of this.monsters.entries())(!r.userData.lastUpdated||t-r.userData.lastUpdated>e)&&i.push(s);i.length>0&&(console.log(`Removendo ${i.length} monstros obsoletos`),i.forEach(s=>this.removeMonster(s)))}getMonsterData(e){const t=this.getMonster(e);return t?{...t.userData,status:t.userData.status||{}}:null}}function Du(n,e){if(e===dm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Ll||e===$d){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Ll)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class Jy extends Zs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new iM(t)}),this.register(function(t){return new uM(t)}),this.register(function(t){return new dM(t)}),this.register(function(t){return new fM(t)}),this.register(function(t){return new rM(t)}),this.register(function(t){return new oM(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new lM(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new cM(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new hM(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new pM(t)}),this.register(function(t){return new mM(t)})}load(e,t,i,s){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Fl.extractUrlBase(e),this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new xf(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Af){try{o[$e.KHR_BINARY_GLTF]=new gM(e)}catch(u){s&&s(u);return}r=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new CM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:o[u]=new tM;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[u]=new _M(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[u]=new xM;break;case $e.KHR_MESH_QUANTIZATION:o[u]=new vM;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function Qy(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class eM{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new me(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Xt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Mf(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new yf(h),l.distance=u;break;case"spot":l=new xy(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,yi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}}class tM{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return mt}extendParams(e,t,i){const s=[];e.color=new me(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Xt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,ht))}return Promise.all(s)}}class nM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class iM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new fe(a,a)}return Promise.all(r)}}class sM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class rM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new me(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Xt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ht)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class oM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class aM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new me().setRGB(a[0],a[1],a[2],Xt),Promise.all(r)}}class lM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class cM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new me().setRGB(a[0],a[1],a[2],Xt),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,ht)),Promise.all(r)}}class hM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class uM{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class dM{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class fM{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class pM{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class mM{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const l of s.primitives)if(l.mode!==yn.TRIANGLES&&l.mode!==yn.TRIANGLE_STRIP&&l.mode!==yn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new De,m=new R,p=new Li,v=new R(1,1,1),x=new qv(g.geometry,g.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&v.fromBufferAttribute(c.SCALE,y),x.setMatrixAt(y,_.compose(m,p,v));for(const y in c)if(y==="_COLOR_0"){const E=c[y];x.instanceColor=new Ul(E.array,E.itemSize,E.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);ft.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Af="glTF",dr=12,Nu={JSON:1313821514,BIN:5130562};class gM{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,dr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Af)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-dr,r=new DataView(e,dr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Nu.JSON){const l=new Uint8Array(e,dr+o,a);this.content=i.decode(l)}else if(c===Nu.BIN){const l=dr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class _M{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Hl[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Hl[h]||h.toLowerCase();if(o[h]!==void 0){const d=i.accessors[e.attributes[h]],f=Ls[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u){s.decodeDracoFile(h,function(d){for(const f in d.attributes){const g=d.attributes[f],_=c[f];_!==void 0&&(g.normalized=_)}u(d)},a,l)})})}}class xM{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class vM{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class Rf extends Wr{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(i-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,v=1-m,x=p-d+u;for(let y=0;y!==a;y++){const E=o[_+y+a],A=o[_+y+c]*h,w=o[g+y+a],L=o[g+y]*h;r[y]=v*E+x*A+m*w+p*L}return r}}const yM=new Li;class MM extends Rf{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return yM.fromArray(r).normalize().toArray(r),r}}const yn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ls={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Uu={9728:Ut,9729:nn,9984:Cl,9985:zd,9986:Bo,9987:Ji},Ou={33071:En,33648:Go,10497:Zi},el={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Hl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},EM={CUBICSPLINE:void 0,LINEAR:Os,STEP:Ar},tl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function SM(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new xe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:di})),n.DefaultMaterial}function Bi(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function yi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function bM(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function wM(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function TM(n){let e;const t=n.extensions&&n.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+nl(t.attributes):e=n.indices+":"+nl(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+nl(n.targets[i]);return e}function nl(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Gl(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function AM(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const RM=new De;class CM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Qy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new vf(this.options.manager):this.textureLoader=new Ey(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new xf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Bi(r,a,s),yi(a,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(Fl.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=el[s.type],a=Ls[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Wt(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=el[s.type],l=Ls[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let x=t.cache.get(v);x||(_=new l(a,p*f,s.count*f/h),x=new df(_,f/h),t.cache.add(v,x)),m=new Cr(x,c,d%f/h,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),m=new Wt(_,c,g);if(s.sparse!==void 0){const p=el.SCALAR,v=Ls[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,E=new v(o[1],x,s.sparse.count*p),A=new l(o[2],y,s.sparse.count*c);a!==null&&(m=new Wt(m.array.slice(),m.itemSize,m.normalized));for(let w=0,L=E.length;w<L;w++){const M=E[w];if(m.setX(M,A[w*c]),c>=2&&m.setY(M,A[w*c+1]),c>=3&&m.setZ(M,A[w*c+2]),c>=4&&m.setW(M,A[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Uu[d.magFilter]||nn,h.minFilter=Uu[d.minFilter]||Ji,h.wrapS=Ou[d.wrapS]||Zi,h.wrapT=Ou[d.wrapT]||Zi,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new zt(_);m.needsUpdate=!0,d(m)}),t.load(Fl.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||AM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new Gr,Tn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new la,Tn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return xe}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){const u=s[$e.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new me(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Xt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,ht)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ft);const h=r.alphaMode||tl.OPAQUE;if(h===tl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===tl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==mt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new fe(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==mt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==mt){const u=r.emissiveFactor;a.emissive=new me().setRGB(u[0],u[1],u[2],Xt)}return r.emissiveTexture!==void 0&&o!==mt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ht)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),yi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Bi(s,u,r),u})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Fu(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=TM(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Fu(new Mt,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?SM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const v=l[f];if(m.mode===yn.TRIANGLES||m.mode===yn.TRIANGLE_STRIP||m.mode===yn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Wv(_,v):new oe(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===yn.TRIANGLE_STRIP?p.geometry=Du(p.geometry,$d):m.mode===yn.TRIANGLE_FAN&&(p.geometry=Du(p.geometry,Ll));else if(m.mode===yn.LINES)p=new Yv(_,v);else if(m.mode===yn.LINE_STRIP)p=new Hr(_,v);else if(m.mode===yn.LINE_LOOP)p=new Kv(_,v);else if(m.mode===yn.POINTS)p=new ca(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&wM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),yi(p,r),m.extensions&&Bi(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Bi(s,u[0],r),u[0];const d=new gt;r.extensions&&Bi(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new sn(Fm.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new kr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),yi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new De;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new pc(a,c)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let v=0,x=d.length;v<x;v++){const y=d[v],E=f[v],A=g[v],w=_[v],L=m[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const M=i._createAnimationTracks(y,E,A,w,L);if(M)for(let S=0;S<M.length;S++)p.push(M[S])}return new cy(r,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(i.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,RM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new mf:l.length>1?h=new gt:l.length===1?h=l[0]:h=new ft,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),yi(h,r),r.extensions&&Bi(i,h,r),r.matrix!==void 0){const u=new De;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new gt;i.name&&(r.name=s.createUniqueName(i.name)),yi(r,i),i.extensions&&Bi(t,r,i);const o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof Tn||d instanceof zt)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];vi[r.path]===vi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(vi[r.path]){case vi.weights:l=zs;break;case vi.rotation:l=Qi;break;case vi.position:case vi.scale:l=ks;break;default:switch(i.itemSize){case 1:l=zs;break;case 2:case 3:default:l=ks;break}break}const h=s.interpolation!==void 0?EM[s.interpolation]:Os,u=this._getArrayFromAccessor(i);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+vi[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Gl(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Qi?MM:Rf;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function LM(n,e,t){const i=e.attributes,s=new fi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),a.normalized){const h=Gl(Ls[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new R,c=new R;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Gl(Ls[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new jn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Fu(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(const o in i){const a=Hl[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return Je.workingColorSpace!==Xt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),yi(n,e),LM(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?bM(n,e.targets,t):n})}const vn={SPAWN:{TREE:["/models-3d/Tree01.glb","/models-3d/Bush01.glb"],GRASS:"/models-3d/Grass01.glb",FLOWER:"/models-3d/Flower01.glb",ROCK:"/models-3d/Rock01.glb"},FOREST_NORTH:{TREE:"/models-3d/Tree01.glb",BUSH:"/models-3d/Bush01.glb",GRASS:"/models-3d/Grass01.glb",FLOWER:"/models-3d/Flowers01.glb",ROCK:"/models-3d/Rock02.glb"},FOREST_WEST:{TREE:["/models-3d/Tree01.glb","/models-3d/Bush01.glb"],GRASS:"/models-3d/Grass01.glb",FLOWER:"/models-3d/Flower01.glb",ROCK:"/models-3d/Rock01.glb"},MOUNTAINS:{TREE:"/models-3d/Tree01.glb",ROCK:"/models-3d/Mountain01.glb",STONE:"/models-3d/Pebbles01.glb",GRASS:"/models-3d/Grass01.glb"},PLAINS:{TREE:"/models-3d/Tree01.glb",GRASS:"/models-3d/Grass01.glb",FLOWER:"/models-3d/Flowers01.glb",ROCK:"/models-3d/Pebbles01.glb"},SWAMP:{TREE:["/models-3d/Tree01.glb","/models-3d/Bush01.glb"],GRASS:"/models-3d/Grass01.glb",ROCK:"/models-3d/Rock02.glb"},RUINS:{TREE:"/models-3d/Tree01.glb",ROCK:"/models-3d/Rock01.glb",BRIDGE:"/models-3d/Bridge01.glb",STONE:"/models-3d/Pebbles01.glb"}},il={},PM=new Jy;async function IM(n){return il[n]?il[n].clone():new Promise((e,t)=>{PM.load(n,i=>{il[n]=i.scene,e(i.scene.clone())},void 0,t)})}function DM(n,e,t){const i=t&&t.includes("Tree01.glb");t&&t.includes("Bush01.glb"),t&&t.includes("Rock01.glb");const s=t&&t.includes("Rock02.glb");t&&t.includes("Mountain01.glb"),t&&t.includes("Pebbles01.glb"),t&&t.includes("Bridge01.glb");const r=t&&t.includes("Flower01.glb");t&&t.includes("Flowers01.glb"),t&&t.includes("Grass01.glb"),["TREE","BUSH","GRASS","FLOWER"].includes(e)&&(n.rotation.x+=Math.random()*.05-.025,n.rotation.z+=Math.random()*.05-.025);let o=0;return n.traverse(a=>{if(a.isMesh){if(a.geometry){let c=0;a.geometry.index!==null?c=a.geometry.index.count/3:a.geometry.attributes.position&&(c=a.geometry.attributes.position.count/3),o+=c}if(!a.material.map){const c={roughness:.75,metalness:.1,flatShading:!1,envMapIntensity:.5,transparent:!1,vertexColors:!1,side:Ft};if(e==="TREE")i?a.position.y<.2||a.geometry&&a.geometry.attributes.position&&a.geometry.attributes.position.count<100?(a.material=new xe({color:10840116,roughness:.7,metalness:.05,flatShading:!1,emissive:4007959,emissiveIntensity:.15,...c}),a.material.color.offsetHSL(0,0,Math.random()*.1-.05)):(a.material=new xe({color:4176968,roughness:.6,metalness:0,flatShading:!1,emissive:1127185,emissiveIntensity:.2,...c}),a.material.color.offsetHSL(0,Math.random()*.1,Math.random()*.1)):(a.material=new xe({color:2787145,roughness:.7,metalness:0,emissive:1127185,emissiveIntensity:.15,...c}),a.material.color.offsetHSL(0,Math.random()*.2-.1,Math.random()*.1-.05));else if(e==="BUSH")a.material=new xe({color:3975766,roughness:.8,metalness:0,clearcoat:.2,clearcoatRoughness:.9,...c}),a.material.color.offsetHSL(0,Math.random()*.15-.075,Math.random()*.1-.05);else if(e==="GRASS")a.material=new xe({color:7592280,roughness:.9,metalness:0,clearcoat:.1,clearcoatRoughness:.9,emissive:1127168,emissiveIntensity:.03,...c}),a.material.color.offsetHSL(Math.random()*.05,Math.random()*.2-.1,0);else if(e==="FLOWER"){const l=r?6130676:4881657;a.material=new xe({color:l,roughness:.6,metalness:.1,clearcoat:.3,clearcoatRoughness:.6,transmission:.1,thickness:.3,emissive:2237030,emissiveIntensity:.08,...c}),a.material.color.offsetHSL(Math.random()*.05-.025,Math.random()*.2,Math.random()*.2-.1)}else if(e==="ROCK"||e==="STONE"){const l=s?7829367:8947848;a.material=new xe({color:l,roughness:.95,metalness:.15,flatShading:!0,...c}),a.material.color.offsetHSL(0,0,Math.random()*.15-.075)}else e==="MOUNTAIN"?(a.material=new xe({color:10202551,roughness:.9,metalness:.2,flatShading:!0,...c}),a.material.color.offsetHSL(0,Math.random()*.05-.025,Math.random()*.1-.05)):e==="BRIDGE"&&(a.material=new xe({color:9127187,roughness:.8,metalness:.05,clearcoat:.1,clearcoatRoughness:.8,emissive:2232576,emissiveIntensity:.05,...c}),a.material.color.offsetHSL(0,Math.random()*.1,Math.random()*.2-.1))}a.castShadow=!1,a.receiveShadow=!1,a.geometry&&o>1e3&&(a.geometry.computeBoundingBox(),a.geometry.computeBoundingSphere()),a.material&&(a.material.side=Ft,a.material.blending=ji,a.material.roughness!==void 0&&(a.material.roughness=Math.max(.5,a.material.roughness)))}}),{scaleFactor:1,triangles:o}}class NM{constructor(e){this.scene=e,this.worldObjects=new Map,this.visibleObjects=new Set,this.lastCullingTime=0,this.instancedMeshes=new Map,this.objectsByCategoryAndModel=new Map,this.frustum=new ra,this.frustumMatrix=new De,this.playerPosition=null,this.detailLevels={HIGH:50,MEDIUM:100,LOW:200}}setupLighting(e){if(!this.scene||!e){console.error("Cena ou renderer não disponíveis para configurar iluminação");return}console.log("[LIGHT] Configurando iluminação e sombras avançadas"),e.shadowMap.enabled=!0,e.shadowMap.type=Fd,e.outputColorSpace=ht,e.toneMapping=oc,e.toneMappingExposure=1.22,e.setPixelRatio(Math.min(window.devicePixelRatio,2));const t=16446435,i=.35,s=new My(t,i);this.scene.add(s);const r=16774870,o=1,a=new Mf(r,o);a.position.set(60,200,0),a.castShadow=!0,a.shadow.mapSize.width=2048,a.shadow.mapSize.height=2048,a.shadow.camera.near=10,a.shadow.camera.far=200,a.shadow.camera.left=-100,a.shadow.camera.right=100,a.shadow.camera.top=100,a.shadow.camera.bottom=-100,a.shadow.bias=-2e-4,a.shadow.normalBias=.01,a.shadow.radius=12,a.shadow.autoUpdate=!1,this.lastShadowUpdateTime=0,this.scene.add(a);const c=11786495,l=16776694,h=1.25,u=new gy(c,l,h);this.scene.add(u);const d=new me(14542591),f=.001;this.scene.fog=new fc(d,f),this.scene.background=new me(11786495),this.sunLight=a,this.ambientLight=s,this.hemisphereLight=u,console.log("[LIGHT] Iluminação configurada com sucesso")}updateLightPosition(e){if(!this.sunLight||!e)return;this.playerPosition=e.clone();const t=performance.now();t-this.lastShadowUpdateTime>500&&(this.lastShadowUpdateTime=t,this.sunLight.position.set(e.x+60,200,e.z),this.sunLight.target.position.set(e.x,0,e.z),this.scene.add(this.sunLight.target),this.sunLight.shadow.camera.left=-150,this.sunLight.shadow.camera.right=150,this.sunLight.shadow.camera.top=150,this.sunLight.shadow.camera.bottom=-150,this.sunLight.shadow.camera.near=10,this.sunLight.shadow.camera.far=300,this.sunLight.shadow.mapSize.width=4096,this.sunLight.shadow.mapSize.height=4096,this.sunLight.shadow.camera.updateProjectionMatrix(),this.sunLight.shadow.needsUpdate=!0,this.updateObjectCulling())}updateObjectCulling(){if(!this.playerPosition)return;const e=performance.now();if(e-this.lastCullingTime<200)return;this.lastCullingTime=e;const t=this.scene.getObjectByProperty("type","OrthographicCamera")||this.scene.getObjectByProperty("type","PerspectiveCamera");if(t){this.frustumMatrix.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.frustumMatrix);for(const[i,s]of this.worldObjects.entries()){if(!s.position)continue;const r=this.playerPosition.distanceTo(s.position);if(r>this.detailLevels.LOW){s.visible=!1;continue}const o=this.frustum.intersectsObject(s);s.visible=o,o&&s.traverse(a=>{if(a.isMesh&&(r<this.detailLevels.HIGH?(a.castShadow=!0,a.receiveShadow=!0):r<this.detailLevels.MEDIUM?(a.castShadow=!1,a.receiveShadow=!0):(a.castShadow=!1,a.receiveShadow=r<this.detailLevels.LOW),a.material))if(r>this.detailLevels.MEDIUM&&a.material.type==="MeshPhysicalMaterial"){const c=a.material.color.clone(),l=new ny({color:c,side:Ft});a._originalMaterial=a.material,a.material=l}else r<=this.detailLevels.MEDIUM&&a._originalMaterial&&(a.material=a._originalMaterial,delete a._originalMaterial)})}}}updateWorldObject(e){if(!e||!e.id){console.error("Dados de objeto do mundo inválidos:",e);return}const t=e.id;this.worldObjects.has(t)?this.updateExistingWorldObject(t,e):this.createWorldObject(t,e)}async createWorldObject(e,t){var c,l,h,u,d;let i;const s=t.biome||"SPAWN";let r=null,o=t.objectType;if(s==="MOUNTAINS"&&t.objectType==="ROCK"&&Math.random()>.7)r=vn[s].ROCK,o="MOUNTAIN";else if(s==="RUINS"&&t.objectType==="TREE"&&Math.random()>.6)r=vn[s].BRIDGE,o="BRIDGE";else if((t.objectType==="ROCK"||t.objectType==="BUSH")&&((c=vn[s])!=null&&c.ROCK))r=vn[s].ROCK,o="ROCK";else if(t.objectType==="TREE"&&((l=vn[s])!=null&&l.TREE)){let f=vn[s].TREE;Array.isArray(f)&&(f=Math.random()>.3?f[0]:f[1]),r=f,o="TREE"}else t.objectType==="BUSH"&&((h=vn[s])!=null&&h.BUSH)?(r=vn[s].BUSH,o="BUSH"):t.objectType==="GRASS"&&((u=vn[s])!=null&&u.GRASS)?(r=vn[s].GRASS,o="GRASS"):t.objectType==="FLOWER"&&((d=vn[s])!=null&&d.FLOWER)&&(r=vn[s].FLOWER,o="FLOWER");if(r)try{i=await IM(r);const f=DM(i,o,r);i.traverse(_=>{_.isMesh&&(o!=="FLOWER"&&(_.castShadow=!0),_.receiveShadow=!0,_.material&&(_.material.envMapIntensity=.8,_.material.type==="MeshPhysicalMaterial"&&(_.material.clearcoat=Math.min(_.material.clearcoat||0,.3),_.material.clearcoatRoughness=Math.max(_.material.clearcoatRoughness||0,.8),_.material.ior=1.2,["TREE","MOUNTAIN","BRIDGE"].includes(o)||(_.material.thickness=0,_.material.transmission=0))))}),["TREE","GRASS","FLOWER"].includes(o)&&(i.rotation.y=Math.random()*Math.PI*2);const g=`${s}_${o}_${r}`;this.objectsByCategoryAndModel.has(g)||this.objectsByCategoryAndModel.set(g,[]),this.objectsByCategoryAndModel.get(g).push(e)}catch(f){console.error(`[ERRO] Falha ao carregar modelo ${r}:`,f),i=Bu(t.objectType)}else console.log(`[FALLBACK] Usando primitiva para ${t.objectType}`),i=Bu(t.objectType);this.scene.add(i);const a=t.position||{x:0,y:0,z:0};return i.position.set(Number(a.x)||0,Number(a.y)||0,Number(a.z)||0),t.rotation!==void 0&&(i.rotation.y=Number(t.rotation)||0),i.userData={id:e,type:"worldObject",objectType:t.objectType||"unknown",isCollidable:t.isCollidable!==void 0?t.isCollidable:!0,properties:t.properties||{},created:Date.now()},this.worldObjects.set(e,i),i}updateExistingWorldObject(e,t){const i=this.worldObjects.get(e);i&&(t.position&&i.position.set(Number(t.position.x)||i.position.x,Number(t.position.y)||i.position.y,Number(t.position.z)||i.position.z),t.rotation!==void 0&&(i.rotation.y=Number(t.rotation)||i.rotation.y),t.properties&&(i.userData.properties=t.properties),t.active!==void 0&&(i.visible=t.active))}removeWorldObject(e){if(!this.worldObjects.has(e))return;const t=this.worldObjects.get(e);this.scene.remove(t),this.worldObjects.delete(e)}getWorldObject(e){return this.worldObjects.get(e)||null}clearAllWorldObjects(){for(const e of this.worldObjects.keys())this.removeWorldObject(e)}optimizeSceneWithInstancing(){if(!(this.worldObjects.size<50))for(const[e,t]of this.objectsByCategoryAndModel.entries())t.length<10||console.log(`[OPTIMIZAÇÃO] Considerando instanciamento para ${e} (${t.length} objetos)`)}updateRenderer(e,t){t&&(!this.playerPosition||this.playerPosition.distanceTo(t)>2)&&(this.playerPosition=t.clone(),this.updateObjectCulling())}}function Bu(n){let e,t,i;switch(n){case"TREE":const s=new gt,r=new On(.2,.3,1.5,8),o=new xe({color:9127187}),a=new oe(r,o);a.position.y=.75,a.castShadow=!0,a.receiveShadow=!0,s.add(a);const c=new $n(1,2,8),l=new xe({color:2263842}),h=new oe(c,l);h.position.y=2.5,h.castShadow=!0,h.receiveShadow=!0,s.add(h),i=s;break;case"ROCK":e=new mc(.8,0),t=new xe({color:8421504}),i=new oe(e,t),i.scale.y=.7,i.castShadow=!0,i.receiveShadow=!0;break;case"BUSH":e=new _t(.5,8,6),t=new xe({color:3329330}),i=new oe(e,t),i.castShadow=!0,i.receiveShadow=!0;break;case"HOUSE":const u=new gt,d=new Gt(3,2,3),f=new xe({color:13808780}),g=new oe(d,f);g.position.y=1,g.castShadow=!0,g.receiveShadow=!0,u.add(g);const _=new $n(3,1.5,4),m=new xe({color:9109504}),p=new oe(_,m);p.position.y=2.75,p.rotation.y=Math.PI/4,p.castShadow=!0,p.receiveShadow=!0,u.add(p),i=u;break;case"FENCE":e=new Gt(1.5,.8,.1),t=new xe({color:10506797}),i=new oe(e,t),i.castShadow=!0,i.receiveShadow=!0;break;default:e=new Gt(1,1,1),t=new xe({color:11184810}),i=new oe(e,t),i.castShadow=!0,i.receiveShadow=!0;break}return i}class UM{constructor(e){this.scene=e,this.players=new Map,this.localPlayerId=null}setLocalPlayerId(e){this.localPlayerId=e}hasPlayer(e){return this.players.has(e)}updatePlayerRotation(e,t){const i=this.players.get(e);i&&(i.rotation.y=Number(t)||0)}updatePlayer(e){if(!e||!e.id){console.error("Dados de jogador inválidos:",e);return}const t=e.id;t!==this.localPlayerId&&(this.players.has(t)?this.updateExistingPlayer(t,e):this.createPlayer(t,e))}createPlayer(e,t){const i=new Gt(1,1,1),s=new xe({color:255}),r=new oe(i,s);this.scene.add(r);const o=t.position||{x:0,z:0};r.position.set(Number(o.x)||0,.5,Number(o.z)||0);const a=new $n(.3,1,4),c=new xe({color:65280}),l=new oe(a,c);l.position.set(0,0,.8),l.rotation.x=Math.PI/2,r.add(l),r.userData={id:e,type:"player",name:t.name||`Player${e.slice(-4)}`,stats:t.stats||{},level:t.level||1,created:Date.now()},this.players.set(e,r),console.log(`Jogador criado: ${e}`)}updateExistingPlayer(e,t){const i=this.players.get(e);i&&(t.position&&i.position.set(Number(t.position.x)||i.position.x,.5,Number(t.position.z)||i.position.z),t.rotation!==void 0&&(i.rotation.y=Number(t.rotation)||i.rotation.y),t.stats&&(i.userData.stats=t.stats),t.level&&(i.userData.level=t.level),t.active!==void 0&&(i.visible=t.active))}removePlayer(e){if(!this.players.has(e))return;const t=this.players.get(e);this.scene.remove(t),this.players.delete(e),console.log(`Jogador removido: ${e}`)}getPlayer(e){return this.players.get(e)||null}clearAllPlayers(){for(const e of this.players.keys())this.removePlayer(e)}getPlayerData(e){const t=this.getPlayer(e);return t?{...t.userData,status:t.userData.status||{}}:null}}class OM{constructor(e=document.body){this.container=e,this.tabs=["Main","Sistema(Dano/Cura)","Global"],this.activeTab="Main",this.messages={Main:[],Sistema:[],"Sistema(Dano/Cura)":[],Global:[],Privado:[]},this._createChatElement()}_createChatElement(){this.chatEl=document.createElement("div"),this.chatEl.className="chat-manager",this.chatEl.style.position="fixed",this.chatEl.style.left="2vw",this.chatEl.style.bottom="3vw";const e=document.createElement("div");e.className="chat-resize-handle";const t=document.createElement("div");t.className="chat-resize-handle-bar",e.appendChild(t),document.body.appendChild(e);const i=()=>{const u=this.chatEl.getBoundingClientRect();e.style.left=u.left+u.width/2-30+"px",e.style.top=u.top-14+"px"};setTimeout(i,100),window.addEventListener("resize",i),new ResizeObserver(i).observe(this.chatEl);let r=!1,o=0,a=0;const c=120,l=600;e.addEventListener("mousedown",u=>{r=!0,o=u.clientY,a=this.chatEl.offsetHeight,document.body.style.userSelect="none"}),window.addEventListener("mousemove",u=>{var m;if(!r)return;const d=u.clientY-o;let f=Math.max(c,Math.min(l,a-d));this.chatEl.style.height=f+"px";const g=this.inputEl.offsetHeight||44,_=((m=this.tabButtons.Main)==null?void 0:m.offsetHeight)||36;this.messagesEl.style.maxHeight=f-g-_-12+"px",i()}),window.addEventListener("mouseup",()=>{r&&(r=!1,document.body.style.userSelect="")});const h=document.createElement("div");h.className="chat-tabs",this.tabButtons={},this.tabs.forEach(u=>{const d=document.createElement("button");d.className="chat-tab-btn"+(u===this.activeTab?" active":""),d.textContent=u,d.onclick=()=>this.setActiveTab(u),h.appendChild(d),this.tabButtons[u]=d}),this.chatEl.appendChild(h),this.messagesEl=document.createElement("div"),this.messagesEl.className="chat-messages",this.chatEl.appendChild(this.messagesEl),this.inputEl=document.createElement("textarea"),this.inputEl.className="chat-input",this.inputEl.rows=1,this.inputEl.placeholder="Digite sua mensagem...",this.inputEl.style.resize="none",this.inputEl.addEventListener("keydown",u=>{if(u.key==="Enter"&&!u.shiftKey){u.preventDefault();const d=this.inputEl.value.trim();d&&(this._handleInput(d),this.inputEl.value="",this.inputEl.rows=1)}else setTimeout(()=>{this.inputEl.rows=Math.min(4,this.inputEl.value.split(`
`).length)},0)}),this.inputEl.addEventListener("focus",()=>{this.chatEl.classList.add("focused"),window.dispatchEvent(new CustomEvent("chat:focus"))}),this.inputEl.addEventListener("blur",()=>{this.chatEl.classList.remove("focused"),window.dispatchEvent(new CustomEvent("chat:blur"))}),window.addEventListener("keydown",u=>{u.key==="Enter"&&document.activeElement!==this.inputEl&&(this.inputEl.focus(),u.preventDefault()),u.key==="Escape"&&document.activeElement===this.inputEl&&(this.inputEl.blur(),u.preventDefault())}),this.chatEl.appendChild(this.inputEl),this.container.appendChild(this.chatEl),this.renderMessages()}setActiveTab(e){!this.tabs.includes(e)&&e!=="Privado"||(this.activeTab=e,Object.entries(this.tabButtons).forEach(([t,i])=>{i.classList.toggle("active",t===e)}),this.renderMessages())}renderMessages(){this.messagesEl.innerHTML="",(this.messages[this.activeTab]||[]).slice(-100).forEach(t=>{const i=document.createElement("div");if(i.className="chat-message "+(t.type||"player"),t.name){const r=document.createElement("span");r.className="chat-name "+(t.nameClass||"player"),r.textContent=t.name+": ",i.appendChild(r)}const s=document.createElement("span");s.className="chat-text",s.innerHTML=this._sanitize(t.text,t.type==="me"),i.appendChild(s),this.messagesEl.appendChild(i)}),this.messagesEl.scrollTop=this.messagesEl.scrollHeight}setChannel(e){this.channel=e,e.on("chat:main",t=>{t&&t.text&&t.from&&this._addMessage({text:t.text,type:"player",name:t.from,nameClass:"player"},["Main"])}),e.on("chat:global",t=>{t&&t.text&&t.from&&this._addMessage({text:t.text,type:"player",name:t.from,nameClass:"player"},["Global"])}),e.on("chat:private",t=>{t&&t.text&&t.from&&(this._addMessage({text:t.text,type:"private",name:t.from,nameClass:"private"},["Privado"]),this.setActiveTab("Privado"))})}_handleInput(e){if(e.startsWith("/")){const[t,...i]=e.slice(1).split(" ");switch(t.toLowerCase()){case"w":{const s=i.shift(),r=i.join(" ");s&&r?this.channel?this.channel.emit("chat:private",{to:s,text:r}):(this.addPrivateMessage("Você",s,r),this.setActiveTab("Privado")):this.addSystemMessage("Uso: /w nome mensagem");break}case"me":{const s=i.join(" ");s&&this._addMessage({text:s,type:"me",name:"Você",nameClass:"player"},[this.activeTab,"Main"]);break}case"help":{this.addSystemMessage(`Bem-vindo ao MMORPG!
Comandos disponíveis:
/me ação - faz uma ação
/w nome mensagem - envia mensagem privada
/help - mostra esta ajuda
Objetivo: evolua, lute e interaja com outros jogadores!`);break}default:this.addSystemMessage("Comando desconhecido. Use /help para ver os comandos.")}}else this.channel?this.activeTab==="Global"?this.channel.emit("chat:global",{text:e}):this.activeTab==="Main"?this.channel.emit("chat:main",{text:e}):this.channel.emit("chat:main",{text:e}):this.addPlayerMessage("Você",e,this.activeTab)}_sanitize(e,t=!1){let i=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>");return t&&(i=`<i>${i}</i>`),i}addSystemMessage(e){this._addMessage({text:e,type:"system",name:"Sistema",nameClass:"system"},["Main","Sistema"])}addXPMessage(e){this._addMessage({text:e,type:"xp",name:"XP",nameClass:"xp"},["Main","Sistema"])}addCooldownMessage(e){this._addMessage({text:e,type:"cooldown",name:"Cooldown",nameClass:"cooldown"},["Main","Sistema"])}addManaMessage(e){this._addMessage({text:e,type:"mana",name:"Mana",nameClass:"mana"},["Main","Sistema"])}addErrorMessage(e){this._addMessage({text:e,type:"error",name:"Erro",nameClass:"error"},["Main","Sistema"])}addDamageMessage(e){console.log("[CHAT] addDamageMessage:",e),this._addMessage({text:e,type:"damage",name:"Dano",nameClass:"damage"},["Sistema(Dano/Cura)"])}addHealMessage(e){console.log("[CHAT] addHealMessage:",e),this._addMessage({text:e,type:"heal",name:"Cura",nameClass:"heal"},["Sistema(Dano/Cura)"])}addPlayerMessage(e,t,i="Main"){this._addMessage({text:t,type:"player",name:e,nameClass:"player"},[i,"Main"])}addPrivateMessage(e,t,i){this._addMessage({text:`(para ${t}) ${i}`,type:"private",name:e,nameClass:"private"},["Privado"])}_addMessage(e,t){console.log("[CHAT] _addMessage:",e,t),t.forEach(i=>{this.messages[i]||(this.messages[i]=[]),this.messages[i].push(e),this.messages[i].length>200&&this.messages[i].shift()}),t.includes(this.activeTab)&&this.renderMessages()}}class FM{constructor(){this.abilities=[{id:ke.FIREBALL.ID,name:ke.FIREBALL.NAME,description:ke.FIREBALL.DESCRIPTION,cooldown:ke.FIREBALL.COOLDOWN,mana:ke.FIREBALL.MANA_COST,icon:ke.FIREBALL.ICON},{id:ke.TELEPORT.ID,name:ke.TELEPORT.NAME,description:ke.TELEPORT.DESCRIPTION,cooldown:ke.TELEPORT.COOLDOWN,mana:ke.TELEPORT.MANA_COST,icon:ke.TELEPORT.ICON},{id:ke.FROST_SPIKES.ID,name:ke.FROST_SPIKES.NAME,description:ke.FROST_SPIKES.DESCRIPTION,cooldown:ke.FROST_SPIKES.COOLDOWN,mana:ke.FROST_SPIKES.MANA_COST,icon:ke.FROST_SPIKES.ICON},{id:ke.METEOR_STORM.ID,name:ke.METEOR_STORM.NAME,description:ke.METEOR_STORM.DESCRIPTION,cooldown:ke.METEOR_STORM.COOLDOWN,mana:ke.METEOR_STORM.MANA_COST,icon:ke.METEOR_STORM.ICON}],this.abilitySlots=[1,2,3,4],this.createHUD(),this.cooldowns=[0,0,0,0],this.abilityMaxCooldowns=[0,0,0,0],this.lastUpdate=Date.now(),this.animateCooldowns(),this.chatManager=new OM(document.body)}createHUD(){if(this.hud=document.createElement("div"),this.hud.id="hud",this.hud.style.position="fixed",this.hud.style.left="50%",this.hud.style.bottom="3vw",this.hud.style.transform="translateX(-50%)",this.hud.style.zIndex="2000",this.hud.style.display="flex",this.hud.style.flexDirection="column",this.hud.style.alignItems="center",this.hud.style.width="32vw",this.hud.style.minWidth="240px",this.hud.style.maxWidth="520px",this.hud.style.fontSize="min(1.2vw, 16px)",this.hud.innerHTML=`
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
      )`}else i.style.display="none"}animateCooldowns(){const e=Date.now(),t=e-this.lastUpdate;this.lastUpdate=e;for(let i=0;i<4;i++)this.cooldowns[i]>0&&(this.cooldowns[i]=Math.max(0,this.cooldowns[i]-t),this.updateCooldownVisual(i+1));requestAnimationFrame(()=>this.animateCooldowns())}showDeathMessage(e){let t=document.getElementById("death-message");if(t&&!e){t.style.opacity="0",setTimeout(()=>{t&&t.parentNode&&t.parentNode.removeChild(t)},500);return}}updateHealth(e,t){if(!this.healthBar||!this.healthText)return;const i=Math.max(0,e/t);this.healthBar.style.width=`${i*100}%`,this.healthText.textContent=`${Math.floor(e)} / ${Math.floor(t)}`,i<.3?(this.healthBar.style.background="linear-gradient(to right, #7f0000, #c0392b)",i<.15?this.lowHealthAnimation||(this.lowHealthAnimation=this.healthBar.animate([{opacity:.7},{opacity:1}],{duration:800,iterations:1/0,direction:"alternate",easing:"ease-in-out"})):this.lowHealthAnimation&&(this.lowHealthAnimation.cancel(),this.lowHealthAnimation=null,this.healthBar.style.opacity=1)):(this.healthBar.style.background="linear-gradient(to right, #c0392b, #e74c3c)",this.lowHealthAnimation&&(this.lowHealthAnimation.cancel(),this.lowHealthAnimation=null,this.healthBar.style.opacity=1))}updateAbilityStates(e){for(let t=0;t<4;t++){const i=this.abilitySlots[t],s=this.abilities.find(c=>c.id===i);if(!s)continue;const r=document.getElementById(`slot-${t+1}`);if(!r)continue;const o=r.querySelector("span:not(.cooldown-overlay)");if(!o||this.cooldowns[t]>0)continue;e>=s.mana?(o.style.color="",o.style.opacity="1",r.style.background="#2226"):(o.style.color="#999",o.style.opacity="0.6",r.style.background="#1a1a1a80")}}updateMonsterHUD(e){const t=document.querySelector(".target-ui");if(!t)return;t.style.display="block",t.querySelector(".target-icon").textContent="👹",t.querySelector(".target-name").textContent=e.name;const i=e.hp/e.maxHp*100;t.querySelector(".hp-fill").style.width=i+"%",t.querySelector(".hp-text").textContent=`${e.hp} / ${e.maxHp}`,t.querySelector(".mana-bar").style.display="none";const s=t.querySelector(".target-status");s.innerHTML="",(e.status||[]).forEach(r=>{const o=document.createElement("span");o.textContent=r.icon,o.title=r.tooltip,o.className="status-icon",s.appendChild(o)})}updatePlayerHUD(e){const t=document.querySelector(".target-ui");if(!t)return;t.style.display="block",t.querySelector(".target-icon").textContent="👤",t.querySelector(".target-name").textContent=e.name;const i=e.hp/e.maxHp*100;t.querySelector(".hp-fill").style.width=i+"%",t.querySelector(".hp-text").textContent=`${e.hp} / ${e.maxHp}`;const s=t.querySelector(".mana-bar");if(e.maxEnergy){s.style.display="block";const o=e.energy/e.maxEnergy*100;t.querySelector(".mana-fill").style.width=o+"%",t.querySelector(".mana-text").textContent=`${e.energy} / ${e.maxEnergy}`}else s.style.display="none";const r=t.querySelector(".target-status");r.innerHTML="",(e.status||[]).forEach(o=>{const a=document.createElement("span");a.textContent=o.icon,a.title=o.tooltip,a.className="status-icon",r.appendChild(a)})}clearMonsterHUD(){const e=document.querySelector(".target-ui");e&&(e.style.display="none")}clearPlayerHUD(){const e=document.querySelector(".target-ui");e&&(e.style.display="none")}addSystemMessage(e){this.chatManager.addSystemMessage(e)}addXPMessage(e){this.chatManager.addXPMessage(e)}addCooldownMessage(e){this.chatManager.addCooldownMessage(e)}addManaMessage(e){this.chatManager.addManaMessage(e)}addErrorMessage(e){this.chatManager.addErrorMessage(e)}addDamageMessage(e){this.chatManager.addDamageMessage(e)}addHealMessage(e){this.chatManager.addHealMessage(e)}addPlayerMessage(e,t,i){this.chatManager.addPlayerMessage(e,t,i)}setChannel(e){this.chatManager&&this.chatManager.setChannel(e)}createHealthBar(){const e=document.createElement("div");e.classList.add("health-bar-outer"),e.style.position="absolute",e.style.left="20px",e.style.bottom="80px",e.style.width="230px",e.style.height="22px",e.style.backgroundColor="rgba(0,0,0,0.6)",e.style.padding="3px",e.style.borderRadius="6px",e.style.boxShadow="0 2px 4px rgba(0,0,0,0.5), inset 0 1px 3px rgba(0,0,0,0.5)",e.style.border="1px solid #444",document.body.appendChild(e);const t=document.createElement("div");t.classList.add("health-bar"),t.style.width="100%",t.style.height="100%",t.style.backgroundColor="#e74c3c",t.style.background="linear-gradient(to right, #c0392b, #e74c3c)",t.style.borderRadius="4px",t.style.boxShadow="inset 0 0 5px rgba(0,0,0,0.3)",t.style.transition="width 0.3s ease-out",e.appendChild(t);const i=document.createElement("div");i.classList.add("health-text"),i.style.position="absolute",i.style.left="0",i.style.top="0",i.style.width="100%",i.style.height="100%",i.style.display="flex",i.style.alignItems="center",i.style.justifyContent="center",i.style.color="white",i.style.fontSize="12px",i.style.fontWeight="bold",i.style.textShadow="0 0 3px #000",e.appendChild(i),this.healthBar=t,this.healthText=i}createManaBar(){const e=document.createElement("div");e.classList.add("mana-bar-outer"),e.style.position="absolute",e.style.left="20px",e.style.bottom="50px",e.style.width="230px",e.style.height="22px",e.style.backgroundColor="rgba(0,0,0,0.6)",e.style.padding="3px",e.style.borderRadius="6px",e.style.boxShadow="0 2px 4px rgba(0,0,0,0.5), inset 0 1px 3px rgba(0,0,0,0.5)",e.style.border="1px solid #444",document.body.appendChild(e);const t=document.createElement("div");t.classList.add("mana-bar"),t.style.width="100%",t.style.height="100%",t.style.backgroundColor="#3498db",t.style.background="linear-gradient(to right, #2980b9, #3498db)",t.style.borderRadius="4px",t.style.boxShadow="inset 0 0 5px rgba(0,0,0,0.3)",t.style.transition="width 0.3s ease-out",e.appendChild(t);const i=document.createElement("div");i.classList.add("mana-text"),i.style.position="absolute",i.style.left="0",i.style.top="0",i.style.width="100%",i.style.height="100%",i.style.display="flex",i.style.alignItems="center",i.style.justifyContent="center",i.style.color="white",i.style.fontSize="12px",i.style.fontWeight="bold",i.style.textShadow="0 0 3px #000",e.appendChild(i),this.manaBar=t,this.manaText=i}updateMana(e,t){if(!this.manaBar||!this.manaText)return;const i=Math.max(0,e/t);this.manaBar.style.width=`${i*100}%`,this.manaText.textContent=`${Math.floor(e)} / ${Math.floor(t)}`,i<.3?this.manaBar.style.background="linear-gradient(to right, #1a5276, #2980b9)":this.manaBar.style.background="linear-gradient(to right, #2980b9, #3498db)"}showDeathModal(e){this.deathModal&&this.deathModal.parentNode&&this.deathModal.parentNode.removeChild(this.deathModal),this.deathModal=document.createElement("div"),this.deathModal.id="death-modal",this.deathModal.style.position="fixed",this.deathModal.style.left="0",this.deathModal.style.top="0",this.deathModal.style.width="100vw",this.deathModal.style.height="100vh",this.deathModal.style.background="rgba(20, 10, 30, 0.92)",this.deathModal.style.display="flex",this.deathModal.style.flexDirection="column",this.deathModal.style.alignItems="center",this.deathModal.style.justifyContent="center",this.deathModal.style.zIndex="9999",this.deathModal.style.fontFamily="Segoe UI, sans-serif",this.deathModal.innerHTML=`
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
    `,document.body.appendChild(this.deathModal),document.body.style.overflow="hidden";const t=this.deathModal.querySelector("#btn-respawn");t&&t.focus()}hideDeathModal(){this.deathModal&&this.deathModal.parentNode&&(this.deathModal.parentNode.removeChild(this.deathModal),this.deathModal=null),document.body.style.overflow=""}}const mr=[];function BM(n,e,t,i={}){const s=n instanceof R?n:new R(n.x,n.y,n.z),r=e instanceof R?e:new R(e.x,e.y,e.z),o=new _t(.5,24,24),a=new xe({color:16737792,emissive:16724736,emissiveIntensity:2.2,roughness:.3,metalness:.15}),c=new oe(o,a);c.position.copy(s);const l=new gt,h=new mt({color:16755200,transparent:!0,opacity:.6});for(let m=0;m<14;m++){const p=new _t(.12+Math.random()*.18,10,10),v=new oe(p,h.clone());v.position.set((Math.random()-.5)*1,(Math.random()-.5)*1,(Math.random()-.5)*1),l.add(v)}c.add(l),t.add(c);const u=new yf(16737792,2.2,8);c.add(u);const d=new R().subVectors(r,s).normalize(),f=i.speed||ke.FIREBALL.SPEED||18,g=i.maxDist||ke.FIREBALL.RANGE||40,_={mesh:c,dir:d,speed:f,start:performance.now(),maxDist:g,origin:s.clone(),type:"fireball",aura:l,target:r.clone(),exploded:!1};return mr.push(_),_}function zM(n,e){const t=new _t(.6,20,20),i=new xe({color:16759603,emissive:16737792,emissiveIntensity:3.5,transparent:!0,opacity:.85,roughness:.2}),s=new oe(t,i);s.position.copy(n),e.add(s);const r=performance.now(),o=420;function a(){const c=performance.now(),l=Math.min((c-r)/o,1);s.scale.setScalar(1+l*2.2),i.opacity=.85*(1-l),l<1?requestAnimationFrame(a):(e.remove(s),t.dispose(),i.dispose())}a()}function kM(n,e){const t=new gt;for(let s=0;s<7;s++){let h=function(){const u=performance.now(),d=Math.min((u-c)/l,1);a.scale.setScalar(1+d*1.2),o.opacity=(.38+Math.random()*.18)*(1-d),d<1?requestAnimationFrame(h):(t.remove(a),r.dispose(),o.dispose())};var i=h;const r=new _t(.18+Math.random()*.22,8,8),o=new xe({color:4473924,transparent:!0,opacity:.38+Math.random()*.18,roughness:1}),a=new oe(r,o);a.position.copy(n),a.position.x+=(Math.random()-.5)*.7,a.position.y+=Math.random()*.5,a.position.z+=(Math.random()-.5)*.7,t.add(a);const c=performance.now(),l=900+Math.random()*400;h()}e.add(t),setTimeout(()=>e.remove(t),1500)}function zu(n,e){for(let t=mr.length-1;t>=0;t--){const i=mr[t];if(i.type==="fireball"){i.mesh.position.addScaledVector(i.dir,i.speed*n),i.mesh.rotation.y+=n*5,i.mesh.rotation.x+=n*3;for(let s=0;s<i.aura.children.length;s++)i.aura.children[s].scale.setScalar(.9+Math.sin(performance.now()*.005+s)*.1);if(!i.exploded&&i.mesh.position.distanceTo(i.target)<.7){i.exploded=!0,zM(i.mesh.position,e),kM(i.mesh.position,e),e.remove(i.mesh),mr.splice(t,1);continue}i.mesh.position.distanceTo(i.origin)>i.maxDist&&(e.remove(i.mesh),mr.splice(t,1))}}}const sl=[],Vl=[];function HM(n,e,t,i=null,s={}){n instanceof R||new R(n.x,n.y,n.z);const r=e instanceof R?e:new R(e.x,e.y,e.z),o=s.radius||ke.FROST_SPIKES.AREA_RADIUS||5,a=new is(o,32),c=new mt({color:6737151,transparent:!0,opacity:.3}),l=new oe(a,c);l.position.set(r.x,.1,r.z),l.rotation.x=-Math.PI/2,t.add(l),GM(r,o,t);const h=s.delay||ke.FROST_SPIKES.DELAY||1e3,u=s.spikeCount||12;return setTimeout(()=>{t.getObjectById(l.id)&&(t.remove(l),c.dispose(),a.dispose())},h+500),setTimeout(()=>{VM(r,o,u,t)},h),{success:!0,areaMesh:l,delay:h}}function GM(n,e,t){const i=new xe({color:11197951,emissive:3381759,emissiveIntensity:.3,transparent:!0,opacity:.7,roughness:.2,metalness:.8}),s=Math.floor(15+Math.random()*15),r=new gt;for(let l=0;l<s;l++){const h=Math.random()*Math.PI*2,u=Math.random()*e*.9,d=n.x+Math.cos(h)*u,f=n.z+Math.sin(h)*u,g=.1+Math.random()*.3;let _;switch(Math.floor(Math.random()*4)){case 0:_=new $n(g*.5,g,6);break;case 1:_=new gc(g*.6);break;case 2:_=new qs(g*.7);break;default:_=new Gt(g*.6,g,g*.6)}const p=new oe(_,i.clone());p.position.set(d,.02,f),p.rotation.y=Math.random()*Math.PI*2,p.rotation.x=Math.random()*.2,p.rotation.z=Math.random()*.2,r.add(p)}t.add(r);const o=4e3,a=Date.now();function c(){const l=Date.now()-a,h=Math.min(l/o,1);if(h<1){if(h>.5){const u=(h-.5)*2;r.children.forEach(d=>{d.material.opacity=.7*(1-u)})}requestAnimationFrame(c)}else t.remove(r),r.children.forEach(u=>{u.geometry.dispose(),u.material.dispose()})}Vl.push({group:r,animate:c,type:"ice_crystals"}),c()}function VM(n,e,t,i){const s=new xe({color:10079487,emissive:3381759,emissiveIntensity:.5,transparent:!0,opacity:.8,roughness:.3,metalness:.7}),r=new gt,o=3,a=Math.ceil(t/o),c=80;let l=0;function h(d){$M(n,e*(.7+.1*d),i),KM(n,10+Math.floor(Math.random()*6),i);for(let f=0;f<a&&l<t;f++,l++){const g=Math.random()*Math.PI*2,m=Math.pow(Math.random(),.7)*e*.95,p=n.x+Math.cos(g)*m,v=n.z+Math.sin(g)*m,x=1.5+Math.random()*1.5,y=.2+Math.random()*.3,E=new gt,A=new oe(new $n(y,x,8),s.clone());A.position.y=x/2,E.add(A);const w=2+Math.floor(Math.random()*3);for(let L=0;L<w;L++){const M=y*(.4+Math.random()*.3),S=x*(.2+Math.random()*.3);let D;Math.random()>.5?D=new $n(M,S,6):D=new qs(M);const O=new oe(D,s.clone()),$=Math.random()*Math.PI*2,P=y*.8;O.position.x=Math.cos($)*P,O.position.z=Math.sin($)*P,O.position.y=S/3,O.rotation.x=(Math.random()-.5)*.3,O.rotation.y=Math.random()*Math.PI*2,O.rotation.z=(Math.random()-.5)*.3,E.add(O)}E.position.set(p,-x,v),r.add(E),WM(E),setTimeout(()=>{ZM(new R(p,.2,v),i)},220+Math.random()*120)}d+1<o&&setTimeout(()=>h(d+1),c)}h(0),i.add(r),setTimeout(()=>{XM(r,i)},3e3),qM(n,e,i)}function WM(n,e){const t=n.position.y,i=0,s=300+Math.random()*200,r=Date.now();function o(){const a=Date.now()-r,c=Math.min(a/s,1);if(c<1){const l=1-Math.pow(1-c,3);n.position.y=t+(i-t)*l,requestAnimationFrame(o)}else n.position.y=i}o()}function XM(n,e,t){const s=Date.now();function r(){const o=Date.now()-s,a=Math.min(o/1e3,1);a<1?(n.children.forEach((c,l)=>{const h=Math.min(a*(1+l*.05),1),u=h*h,d=0,f=-2-Math.random();c.position.y=d+(f-d)*u,c.children.forEach(g=>{g.material&&(g.material.opacity=.8*(1-u))})}),requestAnimationFrame(r)):(e.remove(n),n.children.forEach(c=>{c.children.forEach(l=>{l.geometry&&l.geometry.dispose(),l.material&&l.material.dispose()})}))}r()}function $M(n,e,t){const i=new js(e*.7,e,48),s=new mt({color:10084607,transparent:!0,opacity:.45,side:Ft,depthWrite:!1}),r=new oe(i,s);r.position.set(n.x,.11,n.z),r.rotation.x=-Math.PI/2,t.add(r);const o=performance.now(),a=320;function c(){const l=performance.now(),h=Math.min((l-o)/a,1);r.scale.setScalar(1+h*1.7),s.opacity=.45*(1-h),h<1?requestAnimationFrame(c):(t.remove(r),i.dispose(),s.dispose())}c()}function jM(n,e,t){const i=new gt;for(let r=0;r<e;r++){let g=function(){const _=performance.now(),m=Math.min((_-l)/h,1);c.position.y=u+m*(.7+Math.random()*.3),c.position.x+=d*.01,c.position.z+=f*.01,a.opacity=(.7+Math.random()*.2)*(1-m),m<1?requestAnimationFrame(g):(i.remove(c),o.dispose(),a.dispose())};var s=g;const o=new _t(.06+Math.random()*.04,6,6),a=new xe({color:13430527,emissive:10079487,emissiveIntensity:.7,transparent:!0,opacity:.7+Math.random()*.2,roughness:.4}),c=new oe(o,a);c.position.copy(n),c.position.x+=(Math.random()-.5)*1.2,c.position.y+=.1+Math.random()*.2,c.position.z+=(Math.random()-.5)*1.2,i.add(c);const l=performance.now(),h=420+Math.random()*180,u=c.position.y,d=(Math.random()-.5)*1.2,f=(Math.random()-.5)*1.2;g()}t.add(i),setTimeout(()=>t.remove(i),900)}function qM(n,e,t){const i=new is(e*.8,32),s=new mt({color:12316415,transparent:!0,opacity:.22,depthWrite:!1}),r=new oe(i,s);r.position.set(n.x,.12,n.z),r.rotation.x=-Math.PI/2,t.add(r);const o=performance.now(),a=700;function c(){const l=performance.now(),h=Math.min((l-o)/a,1);r.scale.setScalar(1+h*1.2),s.opacity=.22*(1-h),h<1?requestAnimationFrame(c):(t.remove(r),i.dispose(),s.dispose())}c()}function ku(n,e){for(let t=sl.length-1;t>=0;t--){const i=sl[t];i.type==="ice_spike"&&(i.mesh.position.addScaledVector(i.dir,i.speed*n),i.mesh.position.distanceTo(i.origin)>i.maxDist&&(e.remove(i.mesh),sl.splice(t,1)))}for(let t=Vl.length-1;t>=0;t--){const i=Vl[t];typeof i.animate=="function"&&i.animate()}}function YM(n,e,t=900){if(!n)return;const i=new mt({color:10079487,transparent:!0,opacity:.55,depthWrite:!1}),s=Array.isArray(n.material)?n.material.slice():[n.material];n.material=[...s,i];const r=n.position.clone();jM(r,8,e),setTimeout(()=>{n.material&&Array.isArray(n.material)&&(n.material=s)},t)}function KM(n,e,t){const i=new gt;for(let r=0;r<e;r++){let g=function(){const _=performance.now(),m=Math.min((_-l)/h,1);c.position.y=u+m*(.9+Math.random()*.4),c.position.x+=d*.012,c.position.z+=f*.012,a.opacity=.85*(1-m),m<1?requestAnimationFrame(g):(i.remove(c),o.dispose(),a.dispose())};var s=g;const o=new _t(.07+Math.random()*.05,6,6),a=new xe({color:14743295,emissive:10079487,emissiveIntensity:1.5,transparent:!0,opacity:.85,roughness:.2,blending:Dn}),c=new oe(o,a);c.position.copy(n),c.position.x+=(Math.random()-.5)*1.2,c.position.y+=.1+Math.random()*.2,c.position.z+=(Math.random()-.5)*1.2,i.add(c);const l=performance.now(),h=420+Math.random()*180,u=c.position.y,d=(Math.random()-.5)*1.2,f=(Math.random()-.5)*1.2;g()}t.add(i),setTimeout(()=>t.remove(i),900)}function ZM(n,e){const t=new gt,i=3+Math.floor(Math.random()*3);for(let r=0;r<i;r++){let f=function(){const g=performance.now(),_=Math.min((g-l)/h,1);c.position.y=u+(d-u)*_,a.opacity=.8*(1-_),_<1?requestAnimationFrame(f):(t.remove(c),o.dispose(),a.dispose())};var s=f;const o=new qs(.08+Math.random()*.05),a=new xe({color:13430527,emissive:10079487,emissiveIntensity:.7,transparent:!0,opacity:.8,roughness:.4}),c=new oe(o,a);c.position.copy(n),c.position.x+=(Math.random()-.5)*.3,c.position.z+=(Math.random()-.5)*.3,c.position.y+=.2+Math.random()*.1,t.add(c);const l=performance.now(),h=420+Math.random()*180,u=c.position.y,d=u-(.5+Math.random()*.2);f()}e.add(t),setTimeout(()=>e.remove(t),900)}function JM(n,e,t,i=null,s={}){const r=n instanceof R?n:new R(n.x,n.y,n.z),o=e instanceof R?e:new R(e.x,e.y,e.z);function a(f){const g=new js(.2,1.1,48),_=new xe({color:16769126,emissive:16766720,emissiveIntensity:2.5,side:Ft,transparent:!0,opacity:.7}),m=new oe(g,_);m.position.copy(f),m.position.y+=.1,m.rotation.x=-Math.PI/2,t.add(m);const p=performance.now(),v=420;function x(){const y=performance.now(),E=Math.min((y-p)/v,1);m.scale.setScalar(1+E*2.5),_.opacity=.7*(1-E),E<1?requestAnimationFrame(x):(t.remove(m),g.dispose(),_.dispose())}x()}function c(f){const g=new On(.45,.7,3.5,32,1,!0),_=new xe({color:16769126,emissive:16766720,emissiveIntensity:3.5,transparent:!0,opacity:.55,roughness:.25,metalness:.2}),m=new oe(g,_);m.position.copy(f),m.position.y+=1.7,t.add(m);const p=performance.now(),v=600;function x(){const y=performance.now(),E=Math.min((y-p)/v,1);_.opacity=.55*(1-E),m.scale.y=1+E*.5,E<1?requestAnimationFrame(x):(t.remove(m),g.dispose(),_.dispose())}x()}function l(f){const g=new gt;for(let m=0;m<18;m++){let w=function(){const L=performance.now(),M=Math.min((L-y)/E,1);x.position.y=A+M*(.7+Math.random()*.5),v.opacity=(.7+Math.random()*.2)*(1-M),M<1?requestAnimationFrame(w):(g.remove(x),p.dispose(),v.dispose())};var _=w;const p=new _t(.07+Math.random()*.07,8,8),v=new xe({color:16769126,emissive:16766720,emissiveIntensity:1.5,transparent:!0,opacity:.7+Math.random()*.2,roughness:.5}),x=new oe(p,v);x.position.copy(f),x.position.x+=(Math.random()-.5)*.7,x.position.y+=Math.random()*.2,x.position.z+=(Math.random()-.5)*.7,g.add(x);const y=performance.now(),E=700+Math.random()*300,A=x.position.y;w()}t.add(g),setTimeout(()=>t.remove(g),1200)}function h(){const f=new la({color:s.lineColor||16769126,transparent:!0,opacity:.5});for(let g=0;g<6;g++){const m=new ty(r.clone().add(new R(Math.random()*.6-.3,.5,Math.random()*.6-.3)),new R((r.x+o.x)/2+(Math.random()*4-2),Math.random()*3+2,(r.z+o.z)/2+(Math.random()*4-2)),o.clone().add(new R(Math.random()*.6-.3,.5,Math.random()*.6-.3))).getPoints(20),p=new Mt().setFromPoints(m),v=new Hr(p,f.clone());t.add(v),setTimeout(()=>t.remove(v),(s.duration||500)*.8)}}function u(f){const _=new Mt,m=new Gr({color:s.particleColor||13408767,size:.2,transparent:!0,opacity:.8,blending:Dn}),p=[];for(let x=0;x<20;x++)p.push(f.x+(Math.random()*2-1),f.y+Math.random()*2,f.z+(Math.random()*2-1));_.setAttribute("position",new lt(p,3));const v=new ca(_,m);t.add(v),setTimeout(()=>t.remove(v),s.duration||500)}function d(f,g=!0,_){if(!f||!f.material)return _&&_();const m=Array.isArray(f.material)?f.material:[f.material],p=performance.now(),v=120;function x(){const y=performance.now(),E=Math.min((y-p)/v,1);m.forEach(A=>{A.transparent=!0,A.opacity=g?1-E:E}),E<1?requestAnimationFrame(x):(g||m.forEach(A=>{A.opacity=1}),_&&_())}x()}a(r),c(r),l(r),u(r),h(),i?d(i,!0,()=>{setTimeout(()=>{i.position.copy(o),a(o),c(o),l(o),u(o),d(i,!1)},60)}):setTimeout(()=>{a(o),c(o),l(o),u(o)},60)}function QM(n,e,t,i={}){n instanceof R||new R(n.x,n.y,n.z);const s=e instanceof R?e:new R(e.x,e.y,e.z),r=i.radius||ke.METEOR_STORM.AREA_RADIUS||6,o=new is(r,32),a=new mt({color:16737792,transparent:!0,opacity:.3}),c=new oe(o,a);c.position.set(s.x,.1,s.z),c.rotation.x=-Math.PI/2,t.add(c);const l=i.duration||ke.METEOR_STORM.DURATION||5e3,h=i.meteorCount||ke.METEOR_STORM.METEORS||10,u=i.meteorInterval||ke.METEOR_STORM.METEOR_INTERVAL||500;eE(s,r,t,h,u);const d=new gt,f=32;for(let _=0;_<f;_++){let D=function(){const O=performance.now(),$=Math.min((O-M)/S,1);v.position.y=E+(A-E)*$,v.position.x+=w*.01,v.position.z+=L*.01,p.opacity=(.22+Math.random()*.13)*(1-$),$<1?requestAnimationFrame(D):(d.remove(v),m.dispose(),p.dispose())};var g=D;const m=new _t(.07+Math.random()*.04,6,6),p=new xe({color:2236962,emissive:1118481,emissiveIntensity:.2,transparent:!0,opacity:.22+Math.random()*.13,roughness:.8}),v=new oe(m,p),x=Math.random()*Math.PI*2,y=Math.random()*r*.95;v.position.set(e.x+Math.cos(x)*y,3.5+Math.random()*2.5,e.z+Math.sin(x)*y),d.add(v);const E=v.position.y,A=.1+Math.random()*.2,w=(Math.random()-.5)*.2,L=(Math.random()-.5)*.2,M=performance.now(),S=l*(.7+Math.random()*.4);D()}return t.add(d),setTimeout(()=>{t.remove(d),d.children.forEach(_=>{_.geometry.dispose(),_.material.dispose()})},l+500),setTimeout(()=>{t.getObjectById(c.id)&&(t.remove(c),a.dispose(),o.dispose())},l),{success:!0,areaMesh:c,duration:l}}function eE(n,e,t,i,s){let r=0;const o=()=>{if(r>=i)return;const a=Math.random()*Math.PI*2,c=Math.random()*e*.9,l=n.x+Math.cos(a)*c,h=n.z+Math.sin(a)*c;tE(new R(l,15,h),new R(l,0,h),t),r++,r<i&&setTimeout(o,s)};o()}function tE(n,e,t){const i=new _t(.4,8,8),s=new xe({color:16729088,emissive:16720384,emissiveIntensity:1,roughness:.7}),r=i.attributes.position;for(let p=0;p<r.count;p++){const v=r.getX(p),x=r.getY(p),y=r.getZ(p);r.setX(p,v+(Math.random()-.5)*.1),r.setY(p,x+(Math.random()-.5)*.1),r.setZ(p,y+(Math.random()-.5)*.1)}i.computeVertexNormals();const o=new oe(i,s);o.position.copy(n),t.add(o);const a=new _t(.1,8,8),c=new mt({color:16737792,transparent:!0,opacity:.7}),l=new gt,h=6,u=[];for(let p=0;p<h;p++){const v=new oe(a,c.clone());v.material.opacity=.7-p*.1,v.scale.set(1-p*.1,1-p*.1,1-p*.1),l.add(v),u.push(v)}t.add(l),new R().subVectors(e,n).normalize();const g=(n.y-e.y)/15,_=Date.now();function m(){const v=Date.now()-_,x=Math.min(v/(g*1e3),1);if(x<1){const y=new R().lerpVectors(n,e,x);o.position.copy(y);for(let E=0;E<u.length;E++){const A=Math.max(0,x-E*.02),w=new R().lerpVectors(n,e,A);u[E].position.copy(w)}requestAnimationFrame(m)}else{nE(e,t),t.remove(o),t.remove(l),i.dispose(),s.dispose(),a.dispose();for(let y=0;y<u.length;y++)u[y].material.dispose()}}m()}function nE(n,e){const t=new js(.7,2.1,48),i=new mt({color:16752704,transparent:!0,opacity:.45,side:Ft,depthWrite:!1}),s=new oe(t,i);s.position.copy(n),s.position.y+=.12,s.rotation.x=-Math.PI/2,e.add(s);const r=performance.now(),o=220;function a(){const _=performance.now(),m=Math.min((_-r)/o,1);s.scale.setScalar(1+m*2.2),i.opacity=.45*(1-m),m<1?requestAnimationFrame(a):(e.remove(s),t.dispose(),i.dispose())}a();for(let _=0;_<18;_++){let L=function(){const M=performance.now(),S=Math.min((M-E)/A,1);x.position.x+=y.x*.012,x.position.y=w+y.y*S*.7,x.position.z+=y.z*.012,v.opacity=(m?.32:.7)*(1-S),S<1?requestAnimationFrame(L):(e.remove(x),p.dispose(),v.dispose())};var g=L;const m=Math.random()>.5,p=new _t(m?.22:.13,6,6),v=new xe({color:m?3355443:16752704,emissive:m?2236962:16737792,emissiveIntensity:m?.2:1.2,transparent:!0,opacity:m?.32:.7,roughness:m?.8:.3,metalness:m?.1:.7});m||(v.blending=Dn);const x=new oe(p,v);x.position.copy(n),x.position.y+=.2+Math.random()*.2,e.add(x);const y=new R((Math.random()-.5)*2.2,.5+Math.random()*1.2,(Math.random()-.5)*2.2),E=performance.now(),A=420+Math.random()*180,w=x.position.y;L()}for(let _=0;_<7;_++){let w=function(){const M=performance.now(),S=Math.min((M-y)/E,1);v.position.x+=x.x*.012,v.position.y=A+x.y*S*.7-1.2*S*S,v.position.z+=x.z*.012,p.opacity=.8*(1-S),S<1?requestAnimationFrame(w):(e.remove(v),m.dispose(),p.dispose())};var g=w;const m=new qs(.13+Math.random()*.07),p=new xe({color:16752704,emissive:16737792,emissiveIntensity:1.2,transparent:!0,opacity:.8,roughness:.5,metalness:.7}),v=new oe(m,p);v.position.copy(n),v.position.y+=.18+Math.random()*.12,e.add(v);const x=new R((Math.random()-.5)*1.2,.7+Math.random()*.7,(Math.random()-.5)*1.2),y=performance.now(),E=520+Math.random()*180,A=v.position.y;w()}const c=new is(1.2+Math.random()*.7,24),l=new mt({color:2236945,transparent:!0,opacity:.32,depthWrite:!1}),h=new oe(c,l);h.position.copy(n),h.position.y+=.09,h.rotation.x=-Math.PI/2,e.add(h);const u=performance.now(),d=1800;function f(){const _=performance.now(),m=Math.min((_-u)/d,1);l.opacity=.32*(1-m),m<1?requestAnimationFrame(f):(e.remove(h),c.dispose(),l.dispose())}f()}function iE(n,e,t=1200){if(!n)return;const i=new mt({color:16729088,transparent:!0,opacity:.45,depthWrite:!1,blending:Dn}),s=Array.isArray(n.material)?n.material.slice():[n.material];n.material=[...s,i];const r=n.position.clone();sE(r,e),setTimeout(()=>{n.material&&Array.isArray(n.material)&&(n.material=s)},t)}function sE(n,e){const t=new gt;for(let s=0;s<10;s++){let u=function(){const d=performance.now(),f=Math.min((d-c)/l,1);a.position.y=h+f*(.7+Math.random()*.3),o.opacity=(.7+Math.random()*.2)*(1-f),f<1?requestAnimationFrame(u):(t.remove(a),r.dispose(),o.dispose())};var i=u;const r=new _t(.06+Math.random()*.04,6,6),o=new xe({color:16752704,emissive:16737792,emissiveIntensity:1.2,transparent:!0,opacity:.7+Math.random()*.2,roughness:.3,blending:Dn}),a=new oe(r,o);a.position.copy(n),a.position.x+=(Math.random()-.5)*.5,a.position.z+=(Math.random()-.5)*.5,a.position.y+=.2+Math.random()*.2,t.add(a);const c=performance.now(),l=420+Math.random()*180,h=a.position.y;u()}e.add(t),setTimeout(()=>e.remove(t),900)}class rE{constructor(e){this.scene=e,this.lastUpdate=performance.now(),this.playerCooldowns={},this.playerMana=250}update(){const e=performance.now(),t=(e-this.lastUpdate)/1e3;this.lastUpdate=e,typeof zu=="function"&&zu(t,this.scene),typeof ku=="function"&&ku(t,this.scene)}canUseAbility(e){const t=Date.now(),i=this.getAbilityById(e);if(!i)return console.warn(`Habilidade com ID ${e} não encontrada`),!1;if(this.playerCooldowns[e]){const s=this.playerCooldowns[e],r=Math.max(0,s-t);if(r>0){const o=(r/1e3).toFixed(1);return console.log(`Habilidade ${i.NAME} em cooldown! Tempo restante: ${o}s`),!1}}return this.playerMana<i.MANA_COST?(console.log(`Mana insuficiente para usar ${i.NAME}! Necessário: ${i.MANA_COST}, Atual: ${this.playerMana.toFixed(1)}`),!1):!0}startCooldown(e,t=Date.now()){this.playerCooldowns[e]=t}updateMana(e){this.playerMana=e}getAbilityById(e){switch(e){case 1:return ke.FIREBALL;case 2:return ke.TELEPORT;case 3:return ke.FROST_SPIKES;case 4:return ke.METEOR_STORM;default:return null}}spawnSkillEffect(e,t,i,s=null,r={}){try{const o=this.getAbilityById(e);if(!o)return console.warn(`Habilidade de ID ${e} não encontrada!`),null;switch(console.log(`Executando efeito visual da habilidade: ${o.NAME} (ID: ${e})`),e){case 1:return BM(t,i,this.scene,r);case 2:return JM(t,i,this.scene,s,r);case 3:return HM(t,i,this.scene,s,{radius:ke.FROST_SPIKES.AREA_RADIUS,delay:ke.FROST_SPIKES.DELAY,spikeCount:12});case 4:return QM(t,i,this.scene,r);default:return console.warn(`Implementação visual para habilidade ID ${e} não encontrada!`),null}}catch(o){return console.error(`Erro ao executar efeito da habilidade ${e}:`,o),null}}createSimpleEffect(e,t,i=16777215,s=null){const r=new _t(.5,8,8),o=new mt({color:i,transparent:!0,opacity:.7}),a=new oe(r,o);a.position.copy(t),a.position.y+=.5,this.scene.add(a);const c=1e3,l=performance.now(),h=()=>{const d=performance.now()-l,f=Math.min(d/c,1),g=1+f*3;a.scale.set(g,g,g),a.material.opacity=.7*(1-f),f<1?requestAnimationFrame(h):(this.scene.remove(a),a.geometry.dispose(),a.material.dispose())};h()}useAbility(e){const t=this.abilitiesInSlots[e];if(!t)return console.warn(`Não há habilidade no slot ${e+1}`),!1;const i=this.abilitiesConfig.find(r=>r.id===t);if(!i)return console.warn(`Configuração não encontrada para habilidade ID ${t}`),!1;if(this.cooldowns[e]>0)return console.log(`Habilidade ${i.name} ainda está em cooldown: ${this.cooldowns[e].toFixed(1)}s`),!1;const s=this.playerManager.getCurrentStats();if(s.mana<i.mana)return console.log(`Mana insuficiente para usar ${i.name}. Necessário: ${i.mana}, Atual: ${s.mana.toFixed(1)}`),!1;this.socket.emit(EVENTS.PLAYER.USE_ABILITY,{abilityId:t,targetPosition:this.getMouseTargetPosition(),currentPosition:this.playerManager.getPlayerPosition()})}getWhyCannotUse(e){const t=Date.now(),i=this.getAbilityById(e);if(!i)return"Habilidade inválida";if(this.playerCooldowns[e]){const s=this.playerCooldowns[e],r=Math.max(0,s-t);if(r>0)return`Em cooldown: ${(r/1e3).toFixed(1)}s`}return this.playerMana<i.MANA_COST?`Mana insuficiente (${this.playerMana.toFixed(0)}/${i.MANA_COST})`:"Pronto para usar"}}class oE{constructor(e,t){this.scene=e,this.camera=t,this.texts=[],this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.canvas.width=384,this.canvas.height=192,this.lastUpdate=performance.now(),this.lastMessageTimestamps=new Map}createFloatingText(e){const{text:t="",position:i={x:0,y:2,z:0},color:s,size:r=1,duration:o=2e3,fadeOut:a=!0,type:c="default",index:l=0}=e;if(c!=="damage"&&c!=="heal")return null;let h=120;t.length>12&&(h=90),t.length>20&&(h=60),h<60&&(h=60);const u=Math.min(r,4);let d="#ffffff";switch(c){case"damage":d="#ff4444";break;case"heal":d="#44ff44";break;case"xp":d="#ffe066";break;case"cooldown":d="#ffaa00";break;case"mana":d="#44caff";break;case"error":d="#ff2222";break;default:s&&(d=s)}const g=document.createElement("canvas").getContext("2d");g.font=`bold ${h}px Arial`;let _=g.measureText(t).width,m=40,p=Math.max(384,_+m),v=192;if(p>1024)for(p=1024;_+m>1024&&h>40;)h-=4,g.font=`bold ${h}px Arial`,_=g.measureText(t).width;this.canvas.width=p,this.canvas.height=v,this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.font=`bold ${h}px Arial`,this.context.fillStyle=d,this.context.strokeStyle="#000000",this.context.lineWidth=6,this.context.textAlign="center",this.context.textBaseline="middle",this.context.shadowColor="#000",this.context.shadowBlur=8,this.context.strokeText(t,this.canvas.width/2,this.canvas.height/2),this.context.fillText(t,this.canvas.width/2,this.canvas.height/2),this.context.shadowBlur=0;const x=new Eu(this.canvas);x.needsUpdate=!0;const y=new ff({map:x,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1}),E=new Gv(y),A=5,w=2.5,L=p/384*A*u,M=v/192*w*u;E.scale.set(L,M,1);const S=l*1.1,D=i.y!==void 0?Math.min(i.y+1+S,8):2+S;E.position.set(i.x,D,i.z),this.scene.add(E);const O={sprite:E,createdAt:performance.now(),duration:o,fadeOut:a,velocity:{y:.003},distanceScale:!0,baseScale:u,type:c,textKey:c,count:1,displayText:t};return this.texts.push(O),O}_redrawFloatingText(e){let t=120;e.displayText.length>12&&(t=90),e.displayText.length>20&&(t=60),t<60&&(t=60);const s=document.createElement("canvas").getContext("2d");s.font=`bold ${t}px Arial`;let r=s.measureText(e.displayText).width,o=40,a=Math.max(384,r+o),c=192;if(a>1024)for(a=1024;r+o>1024&&t>40;)t-=4,s.font=`bold ${t}px Arial`,r=s.measureText(e.displayText).width;this.canvas.width=a,this.canvas.height=c,this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.font=`bold ${t}px Arial`,this.context.fillStyle="#ff2222",this.context.strokeStyle="#000000",this.context.lineWidth=6,this.context.textAlign="center",this.context.textBaseline="middle",this.context.shadowColor="#000",this.context.shadowBlur=8,this.context.strokeText(e.displayText,this.canvas.width/2,this.canvas.height/2),this.context.fillText(e.displayText,this.canvas.width/2,this.canvas.height/2),this.context.shadowBlur=0,e.sprite.material.map=new Eu(this.canvas),e.sprite.material.map.needsUpdate=!0}update(){const e=performance.now(),t=e-this.lastUpdate;this.lastUpdate=e;for(let i=this.texts.length-1;i>=0;i--){const s=this.texts[i],r=e-s.createdAt;if(r>s.duration){this.scene.remove(s.sprite),s.sprite.material.dispose(),s.sprite.material.map.dispose(),this.texts.splice(i,1),this.lastMessageTimestamps.has(s.textKey)&&this.lastMessageTimestamps.delete(s.textKey);continue}if(s.sprite.position.y+=s.velocity.y*t,s.fadeOut){const o=s.duration*.5;if(r>o){const a=1-(r-o)/(s.duration-o);s.sprite.material.opacity=Math.max(0,a)}}}}clear(){for(const e of this.texts)this.scene.remove(e.sprite),e.sprite.material.dispose(),e.sprite.material.map&&e.sprite.material.map.dispose();this.texts=[]}}const Cf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class $r{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const aE=new kr(-1,1,1,-1,0,1);class lE extends Mt{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}}const cE=new lE;class Lf{constructor(e){this._mesh=new oe(cE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,aE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Wl extends $r{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof rn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qo.clone(e.uniforms),this.material=new rn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Lf(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Hu extends $r{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class hE extends $r{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class uE{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new fe);this._width=i.width,this._height=i.height,t=new Un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ui}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wl(Cf),this.copyPass.material.blending=hi,this.clock=new Sy}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Hu!==void 0&&(o instanceof Hu?i=!0:o instanceof hE&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class dE extends $r{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new me}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const fE={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new me(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Gs extends $r{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new fe(e.x,e.y):new fe(256,256),this.clearColor=new me(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Un(r,o,{type:ui}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Un(r,o,{type:ui});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Un(r,o,{type:ui});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=fE;this.highPassUniforms=qo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new rn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new fe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Cf;this.copyUniforms=qo.clone(h.uniforms),this.blendMaterial=new rn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Dn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new me,this.oldClearAlpha=1,this.basic=new mt,this.fsQuad=new Lf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new fe(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Gs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Gs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new rn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new fe(.5,.5)},direction:{value:new fe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new rn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Gs.BlurDirectionX=new fe(1,0);Gs.BlurDirectionY=new fe(0,1);const pE={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new fe(1/1024,1/512)}},vertexShader:`

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
	`},mE={name:"ColorCorrectionShader",uniforms:{tDiffuse:{value:null},powRGB:{value:new R(2,2,2)},mulRGB:{value:new R(1,1,1)},addRGB:{value:new R(0,0,0)}},vertexShader:`

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

		}`};function gE(n,e,t){if(!n||!e||!t)return;const i=n.position||n,s=e.position||e,r=new la({color:16777215,opacity:.8,transparent:!0,linewidth:2}),o=[new R(i.x,i.y+.4,i.z),new R(s.x,s.y+.7,s.z)],a=new Mt().setFromPoints(o),c=new Hr(a,r);t.add(c);const l=new Mt,h=15,u=new Float32Array(h*3);for(let g=0;g<h*3;g+=3)u[g]=s.x+(Math.random()-.5)*.5,u[g+1]=s.y+.5+(Math.random()-.5)*.5,u[g+2]=s.z+(Math.random()-.5)*.5;l.setAttribute("position",new Wt(u,3));const d=new Gr({color:16777215,size:.05,transparent:!0,opacity:.8}),f=new ca(l,d);if(t.add(f),e.userData&&e.userData.type==="player"){const g=e,_=Array.isArray(g.material)?[...g.material]:g.material;Array.isArray(g.material)?g.material.forEach(m=>{m.emissive=new me(35071),m.emissiveIntensity=.2}):g.material&&(g.material.emissive=new me(35071),g.material.emissiveIntensity=.2),setTimeout(()=>{Array.isArray(g.material)&&Array.isArray(_)?g.material.forEach((m,p)=>{_[p]&&(m.emissive=_[p].emissive||new me(0),m.emissiveIntensity=_[p].emissiveIntensity||0)}):g.material&&_&&(g.material.emissive=_.emissive||new me(0),g.material.emissiveIntensity=_.emissiveIntensity||0)},3e3)}setTimeout(()=>{t.remove(c),t.remove(f),a.dispose(),r.dispose(),l.dispose(),d.dispose()},1e3)}function _E(n,e,t){if(!n||!e||!t)return;const i=e instanceof R?e.clone():new R(e.x||0,e.y||.5,e.z||0),s=n.position.clone(),r=s.distanceTo(i),o=Math.max(2.5,r*.35),a=new R((s.x+i.x)/2,Math.max(s.y,i.y)+o,(s.z+i.z)/2),c=new mt({color:2236996,transparent:!0,opacity:.35,blending:Dn}),l=new _t(.5,8,8),h=new oe(l,c);h.visible=!1,t.add(h);let u=0;const d=Math.max(.5,r*.07);function f(_,m){const p=new js(.2,2.2,32),v=new mt({color:11141375,transparent:!0,opacity:.7,side:Ft,blending:Dn}),x=new oe(p,v);x.position.set(m.x,.06,m.z),x.rotation.x=-Math.PI/2,_.add(x);const y=32,E=new Mt,A=new Float32Array(y*3),w=[];for(let $=0;$<y;$++){const P=$*3;A[P]=m.x,A[P+1]=.2,A[P+2]=m.z;const k=Math.random()*Math.PI*2,X=.08+Math.random()*.12;w.push({x:Math.cos(k)*X,y:.04+Math.random()*.04,z:Math.sin(k)*X,gravity:.003+Math.random()*.004})}E.setAttribute("position",new Wt(A,3));const L=new Gr({color:11141375,size:.18,transparent:!0,opacity:.85,blending:Dn}),M=new ca(E,L);_.add(M);let S=0;const D=1.2;function O(){S+=.016,x.scale.set(1+S*2.5,1+S*2.5,1),x.material.opacity=.7*(1-S/D);const $=M.geometry.attributes.position.array;for(let P=0;P<y;P++){const k=P*3,X=w[P];$[k]+=X.x,$[k+1]+=X.y,$[k+2]+=X.z,X.y-=X.gravity}M.geometry.attributes.position.needsUpdate=!0,M.material.opacity=.85*(1-S/D),S<D?requestAnimationFrame(O):(_.remove(x),_.remove(M))}requestAnimationFrame(O)}function g(){u+=.016;const _=Math.min(u/d,1);let m=new R;if(_<.5){const v=_*2;m.lerpVectors(s,a,v)}else{const v=(_-.5)*2;m.lerpVectors(a,i,v)}n.position.copy(m),_>.1&&_<.95?(h.visible=!0,h.position.copy(m),h.scale.set(1+_*1.5,.5+_,1+_*1.5),h.material.opacity=.25+.25*Math.sin(_*Math.PI)):h.visible=!1;const p=new R().subVectors(i,m).normalize();if(p.length()>.01){const v=Math.atan2(p.z,p.x);n.rotation.y=v}_<1?requestAnimationFrame(g):(n.position.copy(i),h.visible=!1,t.remove(h),f(t,i))}requestAnimationFrame(g)}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class Gn{constructor(e,t,i,s,r="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),Gn.nextNameID=Gn.nextNameID||0,this.$name.id=`lil-gui-name-${++Gn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class xE extends Gn{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Xl(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const vE={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Xl,toHexString:Xl},Lr={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},yE={isPrimitive:!1,match:n=>Array.isArray(n),fromHexString(n,e,t=1){const i=Lr.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;const s=n*i<<16^e*i<<8^t*i<<0;return Lr.toHexString(s)}},ME={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const i=Lr.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;const s=n*i<<16^e*i<<8^t*i<<0;return Lr.toHexString(s)}},EE=[vE,Lr,yE,ME];function SE(n){return EE.find(e=>e.match(n))}class bE extends Gn{constructor(e,t,i,s){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=SE(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Xl(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class rl extends Gn{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class wE extends Gn{constructor(e,t,i,s,r,o){super(e,t,i,"number"),this._initInput(),this.min(s),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},i=v=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+v),this.$input.value=this.getValue())},s=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),i(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),i(this._step*this._arrowKeyMultiplier(v)*-1))},r=v=>{this._inputFocused&&(v.preventDefault(),i(this._step*this._normalizeMouseWheel(v)))};let o=!1,a,c,l,h,u;const d=5,f=v=>{a=v.clientX,c=l=v.clientY,o=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=v=>{if(o){const x=v.clientX-a,y=v.clientY-c;Math.abs(y)>d?(v.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>d&&_()}if(!o){const x=v.clientY-l;u-=x*this._step*this._arrowKeyMultiplier(v),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}l=v.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(p,v,x,y,E)=>(p-v)/(x-v)*(E-y)+y,t=p=>{const v=this.$slider.getBoundingClientRect();let x=e(p,v.left,v.right,this._min,this._max);this._snapClampSetValue(x)},i=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=p=>{t(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let o=!1,a,c;const l=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),o=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,c=p.touches[0].clientY,o=!0):l(p),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=p=>{if(o){const v=p.touches[0].clientX-a,x=p.touches[0].clientY-c;Math.abs(v)>Math.abs(x)?l(p):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else p.preventDefault(),t(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),g=400;let _;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const x=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(f,g)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class TE extends Gn{constructor(e,t,i,s){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class AE extends Gn{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var RE=`.lil-gui {
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
}`;function CE(n){const e=document.createElement("style");e.innerHTML=n;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Gu=!1;class Mc{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:c=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),c&&this.domElement.classList.add("allow-touch-styles"),!Gu&&a&&(CE(RE),Gu=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(e,t,i,s,r){if(Object(i)===i)return new TE(this,e,t,i);const o=e[t];switch(typeof o){case"number":return new wE(this,e,t,i,s,r);case"boolean":return new xE(this,e,t);case"string":return new AE(this,e,t);case"function":return new rl(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new bE(this,e,t,i)}addFolder(e){const t=new Mc({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof rl||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof rl)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */const LE=4,Vu=0,Wu=1,PE=2;function Js(n){let e=n.length;for(;--e>=0;)n[e]=0}const IE=0,Pf=1,DE=2,NE=3,UE=258,Ec=29,jr=256,Pr=jr+1+Ec,Ps=30,Sc=19,If=2*Pr+1,Vi=15,ol=16,OE=7,bc=256,Df=16,Nf=17,Uf=18,$l=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),ko=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),FE=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),Of=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),BE=512,oi=new Array((Pr+2)*2);Js(oi);const Sr=new Array(Ps*2);Js(Sr);const Ir=new Array(BE);Js(Ir);const Dr=new Array(UE-NE+1);Js(Dr);const wc=new Array(Ec);Js(wc);const Yo=new Array(Ps);Js(Yo);function al(n,e,t,i,s){this.static_tree=n,this.extra_bits=e,this.extra_base=t,this.elems=i,this.max_length=s,this.has_stree=n&&n.length}let Ff,Bf,zf;function ll(n,e){this.dyn_tree=n,this.max_code=0,this.stat_desc=e}const kf=n=>n<256?Ir[n]:Ir[256+(n>>>7)],Nr=(n,e)=>{n.pending_buf[n.pending++]=e&255,n.pending_buf[n.pending++]=e>>>8&255},on=(n,e,t)=>{n.bi_valid>ol-t?(n.bi_buf|=e<<n.bi_valid&65535,Nr(n,n.bi_buf),n.bi_buf=e>>ol-n.bi_valid,n.bi_valid+=t-ol):(n.bi_buf|=e<<n.bi_valid&65535,n.bi_valid+=t)},Hn=(n,e,t)=>{on(n,t[e*2],t[e*2+1])},Hf=(n,e)=>{let t=0;do t|=n&1,n>>>=1,t<<=1;while(--e>0);return t>>>1},zE=n=>{n.bi_valid===16?(Nr(n,n.bi_buf),n.bi_buf=0,n.bi_valid=0):n.bi_valid>=8&&(n.pending_buf[n.pending++]=n.bi_buf&255,n.bi_buf>>=8,n.bi_valid-=8)},kE=(n,e)=>{const t=e.dyn_tree,i=e.max_code,s=e.stat_desc.static_tree,r=e.stat_desc.has_stree,o=e.stat_desc.extra_bits,a=e.stat_desc.extra_base,c=e.stat_desc.max_length;let l,h,u,d,f,g,_=0;for(d=0;d<=Vi;d++)n.bl_count[d]=0;for(t[n.heap[n.heap_max]*2+1]=0,l=n.heap_max+1;l<If;l++)h=n.heap[l],d=t[t[h*2+1]*2+1]+1,d>c&&(d=c,_++),t[h*2+1]=d,!(h>i)&&(n.bl_count[d]++,f=0,h>=a&&(f=o[h-a]),g=t[h*2],n.opt_len+=g*(d+f),r&&(n.static_len+=g*(s[h*2+1]+f)));if(_!==0){do{for(d=c-1;n.bl_count[d]===0;)d--;n.bl_count[d]--,n.bl_count[d+1]+=2,n.bl_count[c]--,_-=2}while(_>0);for(d=c;d!==0;d--)for(h=n.bl_count[d];h!==0;)u=n.heap[--l],!(u>i)&&(t[u*2+1]!==d&&(n.opt_len+=(d-t[u*2+1])*t[u*2],t[u*2+1]=d),h--)}},Gf=(n,e,t)=>{const i=new Array(Vi+1);let s=0,r,o;for(r=1;r<=Vi;r++)s=s+t[r-1]<<1,i[r]=s;for(o=0;o<=e;o++){let a=n[o*2+1];a!==0&&(n[o*2]=Hf(i[a]++,a))}},HE=()=>{let n,e,t,i,s;const r=new Array(Vi+1);for(t=0,i=0;i<Ec-1;i++)for(wc[i]=t,n=0;n<1<<$l[i];n++)Dr[t++]=i;for(Dr[t-1]=i,s=0,i=0;i<16;i++)for(Yo[i]=s,n=0;n<1<<ko[i];n++)Ir[s++]=i;for(s>>=7;i<Ps;i++)for(Yo[i]=s<<7,n=0;n<1<<ko[i]-7;n++)Ir[256+s++]=i;for(e=0;e<=Vi;e++)r[e]=0;for(n=0;n<=143;)oi[n*2+1]=8,n++,r[8]++;for(;n<=255;)oi[n*2+1]=9,n++,r[9]++;for(;n<=279;)oi[n*2+1]=7,n++,r[7]++;for(;n<=287;)oi[n*2+1]=8,n++,r[8]++;for(Gf(oi,Pr+1,r),n=0;n<Ps;n++)Sr[n*2+1]=5,Sr[n*2]=Hf(n,5);Ff=new al(oi,$l,jr+1,Pr,Vi),Bf=new al(Sr,ko,0,Ps,Vi),zf=new al(new Array(0),FE,0,Sc,OE)},Vf=n=>{let e;for(e=0;e<Pr;e++)n.dyn_ltree[e*2]=0;for(e=0;e<Ps;e++)n.dyn_dtree[e*2]=0;for(e=0;e<Sc;e++)n.bl_tree[e*2]=0;n.dyn_ltree[bc*2]=1,n.opt_len=n.static_len=0,n.sym_next=n.matches=0},Wf=n=>{n.bi_valid>8?Nr(n,n.bi_buf):n.bi_valid>0&&(n.pending_buf[n.pending++]=n.bi_buf),n.bi_buf=0,n.bi_valid=0},Xu=(n,e,t,i)=>{const s=e*2,r=t*2;return n[s]<n[r]||n[s]===n[r]&&i[e]<=i[t]},cl=(n,e,t)=>{const i=n.heap[t];let s=t<<1;for(;s<=n.heap_len&&(s<n.heap_len&&Xu(e,n.heap[s+1],n.heap[s],n.depth)&&s++,!Xu(e,i,n.heap[s],n.depth));)n.heap[t]=n.heap[s],t=s,s<<=1;n.heap[t]=i},$u=(n,e,t)=>{let i,s,r=0,o,a;if(n.sym_next!==0)do i=n.pending_buf[n.sym_buf+r++]&255,i+=(n.pending_buf[n.sym_buf+r++]&255)<<8,s=n.pending_buf[n.sym_buf+r++],i===0?Hn(n,s,e):(o=Dr[s],Hn(n,o+jr+1,e),a=$l[o],a!==0&&(s-=wc[o],on(n,s,a)),i--,o=kf(i),Hn(n,o,t),a=ko[o],a!==0&&(i-=Yo[o],on(n,i,a)));while(r<n.sym_next);Hn(n,bc,e)},jl=(n,e)=>{const t=e.dyn_tree,i=e.stat_desc.static_tree,s=e.stat_desc.has_stree,r=e.stat_desc.elems;let o,a,c=-1,l;for(n.heap_len=0,n.heap_max=If,o=0;o<r;o++)t[o*2]!==0?(n.heap[++n.heap_len]=c=o,n.depth[o]=0):t[o*2+1]=0;for(;n.heap_len<2;)l=n.heap[++n.heap_len]=c<2?++c:0,t[l*2]=1,n.depth[l]=0,n.opt_len--,s&&(n.static_len-=i[l*2+1]);for(e.max_code=c,o=n.heap_len>>1;o>=1;o--)cl(n,t,o);l=r;do o=n.heap[1],n.heap[1]=n.heap[n.heap_len--],cl(n,t,1),a=n.heap[1],n.heap[--n.heap_max]=o,n.heap[--n.heap_max]=a,t[l*2]=t[o*2]+t[a*2],n.depth[l]=(n.depth[o]>=n.depth[a]?n.depth[o]:n.depth[a])+1,t[o*2+1]=t[a*2+1]=l,n.heap[1]=l++,cl(n,t,1);while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],kE(n,e),Gf(t,c,n.bl_count)},ju=(n,e,t)=>{let i,s=-1,r,o=e[0*2+1],a=0,c=7,l=4;for(o===0&&(c=138,l=3),e[(t+1)*2+1]=65535,i=0;i<=t;i++)r=o,o=e[(i+1)*2+1],!(++a<c&&r===o)&&(a<l?n.bl_tree[r*2]+=a:r!==0?(r!==s&&n.bl_tree[r*2]++,n.bl_tree[Df*2]++):a<=10?n.bl_tree[Nf*2]++:n.bl_tree[Uf*2]++,a=0,s=r,o===0?(c=138,l=3):r===o?(c=6,l=3):(c=7,l=4))},qu=(n,e,t)=>{let i,s=-1,r,o=e[0*2+1],a=0,c=7,l=4;for(o===0&&(c=138,l=3),i=0;i<=t;i++)if(r=o,o=e[(i+1)*2+1],!(++a<c&&r===o)){if(a<l)do Hn(n,r,n.bl_tree);while(--a!==0);else r!==0?(r!==s&&(Hn(n,r,n.bl_tree),a--),Hn(n,Df,n.bl_tree),on(n,a-3,2)):a<=10?(Hn(n,Nf,n.bl_tree),on(n,a-3,3)):(Hn(n,Uf,n.bl_tree),on(n,a-11,7));a=0,s=r,o===0?(c=138,l=3):r===o?(c=6,l=3):(c=7,l=4)}},GE=n=>{let e;for(ju(n,n.dyn_ltree,n.l_desc.max_code),ju(n,n.dyn_dtree,n.d_desc.max_code),jl(n,n.bl_desc),e=Sc-1;e>=3&&n.bl_tree[Of[e]*2+1]===0;e--);return n.opt_len+=3*(e+1)+5+5+4,e},VE=(n,e,t,i)=>{let s;for(on(n,e-257,5),on(n,t-1,5),on(n,i-4,4),s=0;s<i;s++)on(n,n.bl_tree[Of[s]*2+1],3);qu(n,n.dyn_ltree,e-1),qu(n,n.dyn_dtree,t-1)},WE=n=>{let e=4093624447,t;for(t=0;t<=31;t++,e>>>=1)if(e&1&&n.dyn_ltree[t*2]!==0)return Vu;if(n.dyn_ltree[9*2]!==0||n.dyn_ltree[10*2]!==0||n.dyn_ltree[13*2]!==0)return Wu;for(t=32;t<jr;t++)if(n.dyn_ltree[t*2]!==0)return Wu;return Vu};let Yu=!1;const XE=n=>{Yu||(HE(),Yu=!0),n.l_desc=new ll(n.dyn_ltree,Ff),n.d_desc=new ll(n.dyn_dtree,Bf),n.bl_desc=new ll(n.bl_tree,zf),n.bi_buf=0,n.bi_valid=0,Vf(n)},Xf=(n,e,t,i)=>{on(n,(IE<<1)+(i?1:0),3),Wf(n),Nr(n,t),Nr(n,~t),t&&n.pending_buf.set(n.window.subarray(e,e+t),n.pending),n.pending+=t},$E=n=>{on(n,Pf<<1,3),Hn(n,bc,oi),zE(n)},jE=(n,e,t,i)=>{let s,r,o=0;n.level>0?(n.strm.data_type===PE&&(n.strm.data_type=WE(n)),jl(n,n.l_desc),jl(n,n.d_desc),o=GE(n),s=n.opt_len+3+7>>>3,r=n.static_len+3+7>>>3,r<=s&&(s=r)):s=r=t+5,t+4<=s&&e!==-1?Xf(n,e,t,i):n.strategy===LE||r===s?(on(n,(Pf<<1)+(i?1:0),3),$u(n,oi,Sr)):(on(n,(DE<<1)+(i?1:0),3),VE(n,n.l_desc.max_code+1,n.d_desc.max_code+1,o+1),$u(n,n.dyn_ltree,n.dyn_dtree)),Vf(n),i&&Wf(n)},qE=(n,e,t)=>(n.pending_buf[n.sym_buf+n.sym_next++]=e,n.pending_buf[n.sym_buf+n.sym_next++]=e>>8,n.pending_buf[n.sym_buf+n.sym_next++]=t,e===0?n.dyn_ltree[t*2]++:(n.matches++,e--,n.dyn_ltree[(Dr[t]+jr+1)*2]++,n.dyn_dtree[kf(e)*2]++),n.sym_next===n.sym_end);var YE=XE,KE=Xf,ZE=jE,JE=qE,QE=$E,eS={_tr_init:YE,_tr_stored_block:KE,_tr_flush_block:ZE,_tr_tally:JE,_tr_align:QE};const tS=(n,e,t,i)=>{let s=n&65535|0,r=n>>>16&65535|0,o=0;for(;t!==0;){o=t>2e3?2e3:t,t-=o;do s=s+e[i++]|0,r=r+s|0;while(--o);s%=65521,r%=65521}return s|r<<16|0};var Ur=tS;const nS=()=>{let n,e=[];for(var t=0;t<256;t++){n=t;for(var i=0;i<8;i++)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n}return e},iS=new Uint32Array(nS()),sS=(n,e,t,i)=>{const s=iS,r=i+t;n^=-1;for(let o=i;o<r;o++)n=n>>>8^s[(n^e[o])&255];return n^-1};var Nt=sS,es={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},qr={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:rS,_tr_stored_block:ql,_tr_flush_block:oS,_tr_tally:Ai,_tr_align:aS}=eS,{Z_NO_FLUSH:Ri,Z_PARTIAL_FLUSH:lS,Z_FULL_FLUSH:cS,Z_FINISH:wn,Z_BLOCK:Ku,Z_OK:kt,Z_STREAM_END:Zu,Z_STREAM_ERROR:Vn,Z_DATA_ERROR:hS,Z_BUF_ERROR:hl,Z_DEFAULT_COMPRESSION:uS,Z_FILTERED:dS,Z_HUFFMAN_ONLY:Do,Z_RLE:fS,Z_FIXED:pS,Z_DEFAULT_STRATEGY:mS,Z_UNKNOWN:gS,Z_DEFLATED:ua}=qr,_S=9,xS=15,vS=8,yS=29,MS=256,Yl=MS+1+yS,ES=30,SS=19,bS=2*Yl+1,wS=15,Xe=3,Si=258,Wn=Si+Xe+1,TS=32,Vs=42,Tc=57,Kl=69,Zl=73,Jl=91,Ql=103,Wi=113,gr=666,en=1,Qs=2,ts=3,er=4,AS=3,Xi=(n,e)=>(n.msg=es[e],e),Ju=n=>n*2-(n>4?9:0),Mi=n=>{let e=n.length;for(;--e>=0;)n[e]=0},RS=n=>{let e,t,i,s=n.w_size;e=n.hash_size,i=e;do t=n.head[--i],n.head[i]=t>=s?t-s:0;while(--e);e=s,i=e;do t=n.prev[--i],n.prev[i]=t>=s?t-s:0;while(--e)};let CS=(n,e,t)=>(e<<n.hash_shift^t)&n.hash_mask,Ci=CS;const fn=n=>{const e=n.state;let t=e.pending;t>n.avail_out&&(t=n.avail_out),t!==0&&(n.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+t),n.next_out),n.next_out+=t,e.pending_out+=t,n.total_out+=t,n.avail_out-=t,e.pending-=t,e.pending===0&&(e.pending_out=0))},mn=(n,e)=>{oS(n,n.block_start>=0?n.block_start:-1,n.strstart-n.block_start,e),n.block_start=n.strstart,fn(n.strm)},Ze=(n,e)=>{n.pending_buf[n.pending++]=e},fr=(n,e)=>{n.pending_buf[n.pending++]=e>>>8&255,n.pending_buf[n.pending++]=e&255},ec=(n,e,t,i)=>{let s=n.avail_in;return s>i&&(s=i),s===0?0:(n.avail_in-=s,e.set(n.input.subarray(n.next_in,n.next_in+s),t),n.state.wrap===1?n.adler=Ur(n.adler,e,s,t):n.state.wrap===2&&(n.adler=Nt(n.adler,e,s,t)),n.next_in+=s,n.total_in+=s,s)},$f=(n,e)=>{let t=n.max_chain_length,i=n.strstart,s,r,o=n.prev_length,a=n.nice_match;const c=n.strstart>n.w_size-Wn?n.strstart-(n.w_size-Wn):0,l=n.window,h=n.w_mask,u=n.prev,d=n.strstart+Si;let f=l[i+o-1],g=l[i+o];n.prev_length>=n.good_match&&(t>>=2),a>n.lookahead&&(a=n.lookahead);do if(s=e,!(l[s+o]!==g||l[s+o-1]!==f||l[s]!==l[i]||l[++s]!==l[i+1])){i+=2,s++;do;while(l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&i<d);if(r=Si-(d-i),i=d-Si,r>o){if(n.match_start=e,o=r,r>=a)break;f=l[i+o-1],g=l[i+o]}}while((e=u[e&h])>c&&--t!==0);return o<=n.lookahead?o:n.lookahead},Ws=n=>{const e=n.w_size;let t,i,s;do{if(i=n.window_size-n.lookahead-n.strstart,n.strstart>=e+(e-Wn)&&(n.window.set(n.window.subarray(e,e+e-i),0),n.match_start-=e,n.strstart-=e,n.block_start-=e,n.insert>n.strstart&&(n.insert=n.strstart),RS(n),i+=e),n.strm.avail_in===0)break;if(t=ec(n.strm,n.window,n.strstart+n.lookahead,i),n.lookahead+=t,n.lookahead+n.insert>=Xe)for(s=n.strstart-n.insert,n.ins_h=n.window[s],n.ins_h=Ci(n,n.ins_h,n.window[s+1]);n.insert&&(n.ins_h=Ci(n,n.ins_h,n.window[s+Xe-1]),n.prev[s&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=s,s++,n.insert--,!(n.lookahead+n.insert<Xe)););}while(n.lookahead<Wn&&n.strm.avail_in!==0)},jf=(n,e)=>{let t=n.pending_buf_size-5>n.w_size?n.w_size:n.pending_buf_size-5,i,s,r,o=0,a=n.strm.avail_in;do{if(i=65535,r=n.bi_valid+42>>3,n.strm.avail_out<r||(r=n.strm.avail_out-r,s=n.strstart-n.block_start,i>s+n.strm.avail_in&&(i=s+n.strm.avail_in),i>r&&(i=r),i<t&&(i===0&&e!==wn||e===Ri||i!==s+n.strm.avail_in)))break;o=e===wn&&i===s+n.strm.avail_in?1:0,ql(n,0,0,o),n.pending_buf[n.pending-4]=i,n.pending_buf[n.pending-3]=i>>8,n.pending_buf[n.pending-2]=~i,n.pending_buf[n.pending-1]=~i>>8,fn(n.strm),s&&(s>i&&(s=i),n.strm.output.set(n.window.subarray(n.block_start,n.block_start+s),n.strm.next_out),n.strm.next_out+=s,n.strm.avail_out-=s,n.strm.total_out+=s,n.block_start+=s,i-=s),i&&(ec(n.strm,n.strm.output,n.strm.next_out,i),n.strm.next_out+=i,n.strm.avail_out-=i,n.strm.total_out+=i)}while(o===0);return a-=n.strm.avail_in,a&&(a>=n.w_size?(n.matches=2,n.window.set(n.strm.input.subarray(n.strm.next_in-n.w_size,n.strm.next_in),0),n.strstart=n.w_size,n.insert=n.strstart):(n.window_size-n.strstart<=a&&(n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,n.insert>n.strstart&&(n.insert=n.strstart)),n.window.set(n.strm.input.subarray(n.strm.next_in-a,n.strm.next_in),n.strstart),n.strstart+=a,n.insert+=a>n.w_size-n.insert?n.w_size-n.insert:a),n.block_start=n.strstart),n.high_water<n.strstart&&(n.high_water=n.strstart),o?er:e!==Ri&&e!==wn&&n.strm.avail_in===0&&n.strstart===n.block_start?Qs:(r=n.window_size-n.strstart,n.strm.avail_in>r&&n.block_start>=n.w_size&&(n.block_start-=n.w_size,n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,r+=n.w_size,n.insert>n.strstart&&(n.insert=n.strstart)),r>n.strm.avail_in&&(r=n.strm.avail_in),r&&(ec(n.strm,n.window,n.strstart,r),n.strstart+=r,n.insert+=r>n.w_size-n.insert?n.w_size-n.insert:r),n.high_water<n.strstart&&(n.high_water=n.strstart),r=n.bi_valid+42>>3,r=n.pending_buf_size-r>65535?65535:n.pending_buf_size-r,t=r>n.w_size?n.w_size:r,s=n.strstart-n.block_start,(s>=t||(s||e===wn)&&e!==Ri&&n.strm.avail_in===0&&s<=r)&&(i=s>r?r:s,o=e===wn&&n.strm.avail_in===0&&i===s?1:0,ql(n,n.block_start,i,o),n.block_start+=i,fn(n.strm)),o?ts:en)},ul=(n,e)=>{let t,i;for(;;){if(n.lookahead<Wn){if(Ws(n),n.lookahead<Wn&&e===Ri)return en;if(n.lookahead===0)break}if(t=0,n.lookahead>=Xe&&(n.ins_h=Ci(n,n.ins_h,n.window[n.strstart+Xe-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart),t!==0&&n.strstart-t<=n.w_size-Wn&&(n.match_length=$f(n,t)),n.match_length>=Xe)if(i=Ai(n,n.strstart-n.match_start,n.match_length-Xe),n.lookahead-=n.match_length,n.match_length<=n.max_lazy_match&&n.lookahead>=Xe){n.match_length--;do n.strstart++,n.ins_h=Ci(n,n.ins_h,n.window[n.strstart+Xe-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart;while(--n.match_length!==0);n.strstart++}else n.strstart+=n.match_length,n.match_length=0,n.ins_h=n.window[n.strstart],n.ins_h=Ci(n,n.ins_h,n.window[n.strstart+1]);else i=Ai(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++;if(i&&(mn(n,!1),n.strm.avail_out===0))return en}return n.insert=n.strstart<Xe-1?n.strstart:Xe-1,e===wn?(mn(n,!0),n.strm.avail_out===0?ts:er):n.sym_next&&(mn(n,!1),n.strm.avail_out===0)?en:Qs},Ts=(n,e)=>{let t,i,s;for(;;){if(n.lookahead<Wn){if(Ws(n),n.lookahead<Wn&&e===Ri)return en;if(n.lookahead===0)break}if(t=0,n.lookahead>=Xe&&(n.ins_h=Ci(n,n.ins_h,n.window[n.strstart+Xe-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart),n.prev_length=n.match_length,n.prev_match=n.match_start,n.match_length=Xe-1,t!==0&&n.prev_length<n.max_lazy_match&&n.strstart-t<=n.w_size-Wn&&(n.match_length=$f(n,t),n.match_length<=5&&(n.strategy===dS||n.match_length===Xe&&n.strstart-n.match_start>4096)&&(n.match_length=Xe-1)),n.prev_length>=Xe&&n.match_length<=n.prev_length){s=n.strstart+n.lookahead-Xe,i=Ai(n,n.strstart-1-n.prev_match,n.prev_length-Xe),n.lookahead-=n.prev_length-1,n.prev_length-=2;do++n.strstart<=s&&(n.ins_h=Ci(n,n.ins_h,n.window[n.strstart+Xe-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart);while(--n.prev_length!==0);if(n.match_available=0,n.match_length=Xe-1,n.strstart++,i&&(mn(n,!1),n.strm.avail_out===0))return en}else if(n.match_available){if(i=Ai(n,0,n.window[n.strstart-1]),i&&mn(n,!1),n.strstart++,n.lookahead--,n.strm.avail_out===0)return en}else n.match_available=1,n.strstart++,n.lookahead--}return n.match_available&&(i=Ai(n,0,n.window[n.strstart-1]),n.match_available=0),n.insert=n.strstart<Xe-1?n.strstart:Xe-1,e===wn?(mn(n,!0),n.strm.avail_out===0?ts:er):n.sym_next&&(mn(n,!1),n.strm.avail_out===0)?en:Qs},LS=(n,e)=>{let t,i,s,r;const o=n.window;for(;;){if(n.lookahead<=Si){if(Ws(n),n.lookahead<=Si&&e===Ri)return en;if(n.lookahead===0)break}if(n.match_length=0,n.lookahead>=Xe&&n.strstart>0&&(s=n.strstart-1,i=o[s],i===o[++s]&&i===o[++s]&&i===o[++s])){r=n.strstart+Si;do;while(i===o[++s]&&i===o[++s]&&i===o[++s]&&i===o[++s]&&i===o[++s]&&i===o[++s]&&i===o[++s]&&i===o[++s]&&s<r);n.match_length=Si-(r-s),n.match_length>n.lookahead&&(n.match_length=n.lookahead)}if(n.match_length>=Xe?(t=Ai(n,1,n.match_length-Xe),n.lookahead-=n.match_length,n.strstart+=n.match_length,n.match_length=0):(t=Ai(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++),t&&(mn(n,!1),n.strm.avail_out===0))return en}return n.insert=0,e===wn?(mn(n,!0),n.strm.avail_out===0?ts:er):n.sym_next&&(mn(n,!1),n.strm.avail_out===0)?en:Qs},PS=(n,e)=>{let t;for(;;){if(n.lookahead===0&&(Ws(n),n.lookahead===0)){if(e===Ri)return en;break}if(n.match_length=0,t=Ai(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++,t&&(mn(n,!1),n.strm.avail_out===0))return en}return n.insert=0,e===wn?(mn(n,!0),n.strm.avail_out===0?ts:er):n.sym_next&&(mn(n,!1),n.strm.avail_out===0)?en:Qs};function Bn(n,e,t,i,s){this.good_length=n,this.max_lazy=e,this.nice_length=t,this.max_chain=i,this.func=s}const _r=[new Bn(0,0,0,0,jf),new Bn(4,4,8,4,ul),new Bn(4,5,16,8,ul),new Bn(4,6,32,32,ul),new Bn(4,4,16,16,Ts),new Bn(8,16,32,32,Ts),new Bn(8,16,128,128,Ts),new Bn(8,32,128,256,Ts),new Bn(32,128,258,1024,Ts),new Bn(32,258,258,4096,Ts)],IS=n=>{n.window_size=2*n.w_size,Mi(n.head),n.max_lazy_match=_r[n.level].max_lazy,n.good_match=_r[n.level].good_length,n.nice_match=_r[n.level].nice_length,n.max_chain_length=_r[n.level].max_chain,n.strstart=0,n.block_start=0,n.lookahead=0,n.insert=0,n.match_length=n.prev_length=Xe-1,n.match_available=0,n.ins_h=0};function DS(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ua,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(bS*2),this.dyn_dtree=new Uint16Array((2*ES+1)*2),this.bl_tree=new Uint16Array((2*SS+1)*2),Mi(this.dyn_ltree),Mi(this.dyn_dtree),Mi(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(wS+1),this.heap=new Uint16Array(2*Yl+1),Mi(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*Yl+1),Mi(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Yr=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.status!==Vs&&e.status!==Tc&&e.status!==Kl&&e.status!==Zl&&e.status!==Jl&&e.status!==Ql&&e.status!==Wi&&e.status!==gr?1:0},qf=n=>{if(Yr(n))return Xi(n,Vn);n.total_in=n.total_out=0,n.data_type=gS;const e=n.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap===2?Tc:e.wrap?Vs:Wi,n.adler=e.wrap===2?0:1,e.last_flush=-2,rS(e),kt},Yf=n=>{const e=qf(n);return e===kt&&IS(n.state),e},NS=(n,e)=>Yr(n)||n.state.wrap!==2?Vn:(n.state.gzhead=e,kt),Kf=(n,e,t,i,s,r)=>{if(!n)return Vn;let o=1;if(e===uS&&(e=6),i<0?(o=0,i=-i):i>15&&(o=2,i-=16),s<1||s>_S||t!==ua||i<8||i>15||e<0||e>9||r<0||r>pS||i===8&&o!==1)return Xi(n,Vn);i===8&&(i=9);const a=new DS;return n.state=a,a.strm=n,a.status=Vs,a.wrap=o,a.gzhead=null,a.w_bits=i,a.w_size=1<<a.w_bits,a.w_mask=a.w_size-1,a.hash_bits=s+7,a.hash_size=1<<a.hash_bits,a.hash_mask=a.hash_size-1,a.hash_shift=~~((a.hash_bits+Xe-1)/Xe),a.window=new Uint8Array(a.w_size*2),a.head=new Uint16Array(a.hash_size),a.prev=new Uint16Array(a.w_size),a.lit_bufsize=1<<s+6,a.pending_buf_size=a.lit_bufsize*4,a.pending_buf=new Uint8Array(a.pending_buf_size),a.sym_buf=a.lit_bufsize,a.sym_end=(a.lit_bufsize-1)*3,a.level=e,a.strategy=r,a.method=t,Yf(n)},US=(n,e)=>Kf(n,e,ua,xS,vS,mS),OS=(n,e)=>{if(Yr(n)||e>Ku||e<0)return n?Xi(n,Vn):Vn;const t=n.state;if(!n.output||n.avail_in!==0&&!n.input||t.status===gr&&e!==wn)return Xi(n,n.avail_out===0?hl:Vn);const i=t.last_flush;if(t.last_flush=e,t.pending!==0){if(fn(n),n.avail_out===0)return t.last_flush=-1,kt}else if(n.avail_in===0&&Ju(e)<=Ju(i)&&e!==wn)return Xi(n,hl);if(t.status===gr&&n.avail_in!==0)return Xi(n,hl);if(t.status===Vs&&t.wrap===0&&(t.status=Wi),t.status===Vs){let s=ua+(t.w_bits-8<<4)<<8,r=-1;if(t.strategy>=Do||t.level<2?r=0:t.level<6?r=1:t.level===6?r=2:r=3,s|=r<<6,t.strstart!==0&&(s|=TS),s+=31-s%31,fr(t,s),t.strstart!==0&&(fr(t,n.adler>>>16),fr(t,n.adler&65535)),n.adler=1,t.status=Wi,fn(n),t.pending!==0)return t.last_flush=-1,kt}if(t.status===Tc){if(n.adler=0,Ze(t,31),Ze(t,139),Ze(t,8),t.gzhead)Ze(t,(t.gzhead.text?1:0)+(t.gzhead.hcrc?2:0)+(t.gzhead.extra?4:0)+(t.gzhead.name?8:0)+(t.gzhead.comment?16:0)),Ze(t,t.gzhead.time&255),Ze(t,t.gzhead.time>>8&255),Ze(t,t.gzhead.time>>16&255),Ze(t,t.gzhead.time>>24&255),Ze(t,t.level===9?2:t.strategy>=Do||t.level<2?4:0),Ze(t,t.gzhead.os&255),t.gzhead.extra&&t.gzhead.extra.length&&(Ze(t,t.gzhead.extra.length&255),Ze(t,t.gzhead.extra.length>>8&255)),t.gzhead.hcrc&&(n.adler=Nt(n.adler,t.pending_buf,t.pending,0)),t.gzindex=0,t.status=Kl;else if(Ze(t,0),Ze(t,0),Ze(t,0),Ze(t,0),Ze(t,0),Ze(t,t.level===9?2:t.strategy>=Do||t.level<2?4:0),Ze(t,AS),t.status=Wi,fn(n),t.pending!==0)return t.last_flush=-1,kt}if(t.status===Kl){if(t.gzhead.extra){let s=t.pending,r=(t.gzhead.extra.length&65535)-t.gzindex;for(;t.pending+r>t.pending_buf_size;){let a=t.pending_buf_size-t.pending;if(t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex,t.gzindex+a),t.pending),t.pending=t.pending_buf_size,t.gzhead.hcrc&&t.pending>s&&(n.adler=Nt(n.adler,t.pending_buf,t.pending-s,s)),t.gzindex+=a,fn(n),t.pending!==0)return t.last_flush=-1,kt;s=0,r-=a}let o=new Uint8Array(t.gzhead.extra);t.pending_buf.set(o.subarray(t.gzindex,t.gzindex+r),t.pending),t.pending+=r,t.gzhead.hcrc&&t.pending>s&&(n.adler=Nt(n.adler,t.pending_buf,t.pending-s,s)),t.gzindex=0}t.status=Zl}if(t.status===Zl){if(t.gzhead.name){let s=t.pending,r;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>s&&(n.adler=Nt(n.adler,t.pending_buf,t.pending-s,s)),fn(n),t.pending!==0)return t.last_flush=-1,kt;s=0}t.gzindex<t.gzhead.name.length?r=t.gzhead.name.charCodeAt(t.gzindex++)&255:r=0,Ze(t,r)}while(r!==0);t.gzhead.hcrc&&t.pending>s&&(n.adler=Nt(n.adler,t.pending_buf,t.pending-s,s)),t.gzindex=0}t.status=Jl}if(t.status===Jl){if(t.gzhead.comment){let s=t.pending,r;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>s&&(n.adler=Nt(n.adler,t.pending_buf,t.pending-s,s)),fn(n),t.pending!==0)return t.last_flush=-1,kt;s=0}t.gzindex<t.gzhead.comment.length?r=t.gzhead.comment.charCodeAt(t.gzindex++)&255:r=0,Ze(t,r)}while(r!==0);t.gzhead.hcrc&&t.pending>s&&(n.adler=Nt(n.adler,t.pending_buf,t.pending-s,s))}t.status=Ql}if(t.status===Ql){if(t.gzhead.hcrc){if(t.pending+2>t.pending_buf_size&&(fn(n),t.pending!==0))return t.last_flush=-1,kt;Ze(t,n.adler&255),Ze(t,n.adler>>8&255),n.adler=0}if(t.status=Wi,fn(n),t.pending!==0)return t.last_flush=-1,kt}if(n.avail_in!==0||t.lookahead!==0||e!==Ri&&t.status!==gr){let s=t.level===0?jf(t,e):t.strategy===Do?PS(t,e):t.strategy===fS?LS(t,e):_r[t.level].func(t,e);if((s===ts||s===er)&&(t.status=gr),s===en||s===ts)return n.avail_out===0&&(t.last_flush=-1),kt;if(s===Qs&&(e===lS?aS(t):e!==Ku&&(ql(t,0,0,!1),e===cS&&(Mi(t.head),t.lookahead===0&&(t.strstart=0,t.block_start=0,t.insert=0))),fn(n),n.avail_out===0))return t.last_flush=-1,kt}return e!==wn?kt:t.wrap<=0?Zu:(t.wrap===2?(Ze(t,n.adler&255),Ze(t,n.adler>>8&255),Ze(t,n.adler>>16&255),Ze(t,n.adler>>24&255),Ze(t,n.total_in&255),Ze(t,n.total_in>>8&255),Ze(t,n.total_in>>16&255),Ze(t,n.total_in>>24&255)):(fr(t,n.adler>>>16),fr(t,n.adler&65535)),fn(n),t.wrap>0&&(t.wrap=-t.wrap),t.pending!==0?kt:Zu)},FS=n=>{if(Yr(n))return Vn;const e=n.state.status;return n.state=null,e===Wi?Xi(n,hS):kt},BS=(n,e)=>{let t=e.length;if(Yr(n))return Vn;const i=n.state,s=i.wrap;if(s===2||s===1&&i.status!==Vs||i.lookahead)return Vn;if(s===1&&(n.adler=Ur(n.adler,e,t,0)),i.wrap=0,t>=i.w_size){s===0&&(Mi(i.head),i.strstart=0,i.block_start=0,i.insert=0);let c=new Uint8Array(i.w_size);c.set(e.subarray(t-i.w_size,t),0),e=c,t=i.w_size}const r=n.avail_in,o=n.next_in,a=n.input;for(n.avail_in=t,n.next_in=0,n.input=e,Ws(i);i.lookahead>=Xe;){let c=i.strstart,l=i.lookahead-(Xe-1);do i.ins_h=Ci(i,i.ins_h,i.window[c+Xe-1]),i.prev[c&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=c,c++;while(--l);i.strstart=c,i.lookahead=Xe-1,Ws(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=Xe-1,i.match_available=0,n.next_in=o,n.input=a,n.avail_in=r,i.wrap=s,kt};var zS=US,kS=Kf,HS=Yf,GS=qf,VS=NS,WS=OS,XS=FS,$S=BS,jS="pako deflate (from Nodeca project)",br={deflateInit:zS,deflateInit2:kS,deflateReset:HS,deflateResetKeep:GS,deflateSetHeader:VS,deflate:WS,deflateEnd:XS,deflateSetDictionary:$S,deflateInfo:jS};const qS=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);var YS=function(n){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const t=e.shift();if(t){if(typeof t!="object")throw new TypeError(t+"must be non-object");for(const i in t)qS(t,i)&&(n[i]=t[i])}}return n},KS=n=>{let e=0;for(let i=0,s=n.length;i<s;i++)e+=n[i].length;const t=new Uint8Array(e);for(let i=0,s=0,r=n.length;i<r;i++){let o=n[i];t.set(o,s),s+=o.length}return t},da={assign:YS,flattenChunks:KS};let Zf=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{Zf=!1}const Or=new Uint8Array(256);for(let n=0;n<256;n++)Or[n]=n>=252?6:n>=248?5:n>=240?4:n>=224?3:n>=192?2:1;Or[254]=Or[254]=1;var ZS=n=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(n);let e,t,i,s,r,o=n.length,a=0;for(s=0;s<o;s++)t=n.charCodeAt(s),(t&64512)===55296&&s+1<o&&(i=n.charCodeAt(s+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),s++)),a+=t<128?1:t<2048?2:t<65536?3:4;for(e=new Uint8Array(a),r=0,s=0;r<a;s++)t=n.charCodeAt(s),(t&64512)===55296&&s+1<o&&(i=n.charCodeAt(s+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),s++)),t<128?e[r++]=t:t<2048?(e[r++]=192|t>>>6,e[r++]=128|t&63):t<65536?(e[r++]=224|t>>>12,e[r++]=128|t>>>6&63,e[r++]=128|t&63):(e[r++]=240|t>>>18,e[r++]=128|t>>>12&63,e[r++]=128|t>>>6&63,e[r++]=128|t&63);return e};const JS=(n,e)=>{if(e<65534&&n.subarray&&Zf)return String.fromCharCode.apply(null,n.length===e?n:n.subarray(0,e));let t="";for(let i=0;i<e;i++)t+=String.fromCharCode(n[i]);return t};var QS=(n,e)=>{const t=e||n.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(n.subarray(0,e));let i,s;const r=new Array(t*2);for(s=0,i=0;i<t;){let o=n[i++];if(o<128){r[s++]=o;continue}let a=Or[o];if(a>4){r[s++]=65533,i+=a-1;continue}for(o&=a===2?31:a===3?15:7;a>1&&i<t;)o=o<<6|n[i++]&63,a--;if(a>1){r[s++]=65533;continue}o<65536?r[s++]=o:(o-=65536,r[s++]=55296|o>>10&1023,r[s++]=56320|o&1023)}return JS(r,s)},eb=(n,e)=>{e=e||n.length,e>n.length&&(e=n.length);let t=e-1;for(;t>=0&&(n[t]&192)===128;)t--;return t<0||t===0?e:t+Or[n[t]]>e?t:e},Fr={string2buf:ZS,buf2string:QS,utf8border:eb};function tb(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var Jf=tb;const Qf=Object.prototype.toString,{Z_NO_FLUSH:nb,Z_SYNC_FLUSH:ib,Z_FULL_FLUSH:sb,Z_FINISH:rb,Z_OK:Ko,Z_STREAM_END:ob,Z_DEFAULT_COMPRESSION:ab,Z_DEFAULT_STRATEGY:lb,Z_DEFLATED:cb}=qr;function Kr(n){this.options=da.assign({level:ab,method:cb,chunkSize:16384,windowBits:15,memLevel:8,strategy:lb},n||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Jf,this.strm.avail_out=0;let t=br.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(t!==Ko)throw new Error(es[t]);if(e.header&&br.deflateSetHeader(this.strm,e.header),e.dictionary){let i;if(typeof e.dictionary=="string"?i=Fr.string2buf(e.dictionary):Qf.call(e.dictionary)==="[object ArrayBuffer]"?i=new Uint8Array(e.dictionary):i=e.dictionary,t=br.deflateSetDictionary(this.strm,i),t!==Ko)throw new Error(es[t]);this._dict_set=!0}}Kr.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize;let s,r;if(this.ended)return!1;for(e===~~e?r=e:r=e===!0?rb:nb,typeof n=="string"?t.input=Fr.string2buf(n):Qf.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){if(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),(r===ib||r===sb)&&t.avail_out<=6){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(s=br.deflate(t,r),s===ob)return t.next_out>0&&this.onData(t.output.subarray(0,t.next_out)),s=br.deflateEnd(this.strm),this.onEnd(s),this.ended=!0,s===Ko;if(t.avail_out===0){this.onData(t.output);continue}if(r>0&&t.next_out>0){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(t.avail_in===0)break}return!0};Kr.prototype.onData=function(n){this.chunks.push(n)};Kr.prototype.onEnd=function(n){n===Ko&&(this.result=da.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function Ac(n,e){const t=new Kr(e);if(t.push(n,!0),t.err)throw t.msg||es[t.err];return t.result}function hb(n,e){return e=e||{},e.raw=!0,Ac(n,e)}function ub(n,e){return e=e||{},e.gzip=!0,Ac(n,e)}var db=Kr,fb=Ac,pb=hb,mb=ub,gb={Deflate:db,deflate:fb,deflateRaw:pb,gzip:mb};const No=16209,_b=16191;var xb=function(e,t){let i,s,r,o,a,c,l,h,u,d,f,g,_,m,p,v,x,y,E,A,w,L,M,S;const D=e.state;i=e.next_in,M=e.input,s=i+(e.avail_in-5),r=e.next_out,S=e.output,o=r-(t-e.avail_out),a=r+(e.avail_out-257),c=D.dmax,l=D.wsize,h=D.whave,u=D.wnext,d=D.window,f=D.hold,g=D.bits,_=D.lencode,m=D.distcode,p=(1<<D.lenbits)-1,v=(1<<D.distbits)-1;e:do{g<15&&(f+=M[i++]<<g,g+=8,f+=M[i++]<<g,g+=8),x=_[f&p];t:for(;;){if(y=x>>>24,f>>>=y,g-=y,y=x>>>16&255,y===0)S[r++]=x&65535;else if(y&16){E=x&65535,y&=15,y&&(g<y&&(f+=M[i++]<<g,g+=8),E+=f&(1<<y)-1,f>>>=y,g-=y),g<15&&(f+=M[i++]<<g,g+=8,f+=M[i++]<<g,g+=8),x=m[f&v];n:for(;;){if(y=x>>>24,f>>>=y,g-=y,y=x>>>16&255,y&16){if(A=x&65535,y&=15,g<y&&(f+=M[i++]<<g,g+=8,g<y&&(f+=M[i++]<<g,g+=8)),A+=f&(1<<y)-1,A>c){e.msg="invalid distance too far back",D.mode=No;break e}if(f>>>=y,g-=y,y=r-o,A>y){if(y=A-y,y>h&&D.sane){e.msg="invalid distance too far back",D.mode=No;break e}if(w=0,L=d,u===0){if(w+=l-y,y<E){E-=y;do S[r++]=d[w++];while(--y);w=r-A,L=S}}else if(u<y){if(w+=l+u-y,y-=u,y<E){E-=y;do S[r++]=d[w++];while(--y);if(w=0,u<E){y=u,E-=y;do S[r++]=d[w++];while(--y);w=r-A,L=S}}}else if(w+=u-y,y<E){E-=y;do S[r++]=d[w++];while(--y);w=r-A,L=S}for(;E>2;)S[r++]=L[w++],S[r++]=L[w++],S[r++]=L[w++],E-=3;E&&(S[r++]=L[w++],E>1&&(S[r++]=L[w++]))}else{w=r-A;do S[r++]=S[w++],S[r++]=S[w++],S[r++]=S[w++],E-=3;while(E>2);E&&(S[r++]=S[w++],E>1&&(S[r++]=S[w++]))}}else if(y&64){e.msg="invalid distance code",D.mode=No;break e}else{x=m[(x&65535)+(f&(1<<y)-1)];continue n}break}}else if(y&64)if(y&32){D.mode=_b;break e}else{e.msg="invalid literal/length code",D.mode=No;break e}else{x=_[(x&65535)+(f&(1<<y)-1)];continue t}break}}while(i<s&&r<a);E=g>>3,i-=E,g-=E<<3,f&=(1<<g)-1,e.next_in=i,e.next_out=r,e.avail_in=i<s?5+(s-i):5-(i-s),e.avail_out=r<a?257+(a-r):257-(r-a),D.hold=f,D.bits=g};const As=15,Qu=852,ed=592,td=0,dl=1,nd=2,vb=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),yb=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),Mb=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),Eb=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),Sb=(n,e,t,i,s,r,o,a)=>{const c=a.bits;let l=0,h=0,u=0,d=0,f=0,g=0,_=0,m=0,p=0,v=0,x,y,E,A,w,L=null,M;const S=new Uint16Array(As+1),D=new Uint16Array(As+1);let O=null,$,P,k;for(l=0;l<=As;l++)S[l]=0;for(h=0;h<i;h++)S[e[t+h]]++;for(f=c,d=As;d>=1&&S[d]===0;d--);if(f>d&&(f=d),d===0)return s[r++]=1<<24|64<<16|0,s[r++]=1<<24|64<<16|0,a.bits=1,0;for(u=1;u<d&&S[u]===0;u++);for(f<u&&(f=u),m=1,l=1;l<=As;l++)if(m<<=1,m-=S[l],m<0)return-1;if(m>0&&(n===td||d!==1))return-1;for(D[1]=0,l=1;l<As;l++)D[l+1]=D[l]+S[l];for(h=0;h<i;h++)e[t+h]!==0&&(o[D[e[t+h]]++]=h);if(n===td?(L=O=o,M=20):n===dl?(L=vb,O=yb,M=257):(L=Mb,O=Eb,M=0),v=0,h=0,l=u,w=r,g=f,_=0,E=-1,p=1<<f,A=p-1,n===dl&&p>Qu||n===nd&&p>ed)return 1;for(;;){$=l-_,o[h]+1<M?(P=0,k=o[h]):o[h]>=M?(P=O[o[h]-M],k=L[o[h]-M]):(P=96,k=0),x=1<<l-_,y=1<<g,u=y;do y-=x,s[w+(v>>_)+y]=$<<24|P<<16|k|0;while(y!==0);for(x=1<<l-1;v&x;)x>>=1;if(x!==0?(v&=x-1,v+=x):v=0,h++,--S[l]===0){if(l===d)break;l=e[t+o[h]]}if(l>f&&(v&A)!==E){for(_===0&&(_=f),w+=u,g=l-_,m=1<<g;g+_<d&&(m-=S[g+_],!(m<=0));)g++,m<<=1;if(p+=1<<g,n===dl&&p>Qu||n===nd&&p>ed)return 1;E=v&A,s[E]=f<<24|g<<16|w-r|0}}return v!==0&&(s[w+v]=l-_<<24|64<<16|0),a.bits=f,0};var wr=Sb;const bb=0,ep=1,tp=2,{Z_FINISH:id,Z_BLOCK:wb,Z_TREES:Uo,Z_OK:ns,Z_STREAM_END:Tb,Z_NEED_DICT:Ab,Z_STREAM_ERROR:Rn,Z_DATA_ERROR:np,Z_MEM_ERROR:ip,Z_BUF_ERROR:Rb,Z_DEFLATED:sd}=qr,fa=16180,rd=16181,od=16182,ad=16183,ld=16184,cd=16185,hd=16186,ud=16187,dd=16188,fd=16189,Zo=16190,ni=16191,fl=16192,pd=16193,pl=16194,md=16195,gd=16196,_d=16197,xd=16198,Oo=16199,Fo=16200,vd=16201,yd=16202,Md=16203,Ed=16204,Sd=16205,ml=16206,bd=16207,wd=16208,pt=16209,sp=16210,rp=16211,Cb=852,Lb=592,Pb=15,Ib=Pb,Td=n=>(n>>>24&255)+(n>>>8&65280)+((n&65280)<<8)+((n&255)<<24);function Db(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const ss=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.mode<fa||e.mode>rp?1:0},op=n=>{if(ss(n))return Rn;const e=n.state;return n.total_in=n.total_out=e.total=0,n.msg="",e.wrap&&(n.adler=e.wrap&1),e.mode=fa,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(Cb),e.distcode=e.distdyn=new Int32Array(Lb),e.sane=1,e.back=-1,ns},ap=n=>{if(ss(n))return Rn;const e=n.state;return e.wsize=0,e.whave=0,e.wnext=0,op(n)},lp=(n,e)=>{let t;if(ss(n))return Rn;const i=n.state;return e<0?(t=0,e=-e):(t=(e>>4)+5,e<48&&(e&=15)),e&&(e<8||e>15)?Rn:(i.window!==null&&i.wbits!==e&&(i.window=null),i.wrap=t,i.wbits=e,ap(n))},cp=(n,e)=>{if(!n)return Rn;const t=new Db;n.state=t,t.strm=n,t.window=null,t.mode=fa;const i=lp(n,e);return i!==ns&&(n.state=null),i},Nb=n=>cp(n,Ib);let Ad=!0,gl,_l;const Ub=n=>{if(Ad){gl=new Int32Array(512),_l=new Int32Array(32);let e=0;for(;e<144;)n.lens[e++]=8;for(;e<256;)n.lens[e++]=9;for(;e<280;)n.lens[e++]=7;for(;e<288;)n.lens[e++]=8;for(wr(ep,n.lens,0,288,gl,0,n.work,{bits:9}),e=0;e<32;)n.lens[e++]=5;wr(tp,n.lens,0,32,_l,0,n.work,{bits:5}),Ad=!1}n.lencode=gl,n.lenbits=9,n.distcode=_l,n.distbits=5},hp=(n,e,t,i)=>{let s;const r=n.state;return r.window===null&&(r.wsize=1<<r.wbits,r.wnext=0,r.whave=0,r.window=new Uint8Array(r.wsize)),i>=r.wsize?(r.window.set(e.subarray(t-r.wsize,t),0),r.wnext=0,r.whave=r.wsize):(s=r.wsize-r.wnext,s>i&&(s=i),r.window.set(e.subarray(t-i,t-i+s),r.wnext),i-=s,i?(r.window.set(e.subarray(t-i,t),0),r.wnext=i,r.whave=r.wsize):(r.wnext+=s,r.wnext===r.wsize&&(r.wnext=0),r.whave<r.wsize&&(r.whave+=s))),0},Ob=(n,e)=>{let t,i,s,r,o,a,c,l,h,u,d,f,g,_,m=0,p,v,x,y,E,A,w,L;const M=new Uint8Array(4);let S,D;const O=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(ss(n)||!n.output||!n.input&&n.avail_in!==0)return Rn;t=n.state,t.mode===ni&&(t.mode=fl),o=n.next_out,s=n.output,c=n.avail_out,r=n.next_in,i=n.input,a=n.avail_in,l=t.hold,h=t.bits,u=a,d=c,L=ns;e:for(;;)switch(t.mode){case fa:if(t.wrap===0){t.mode=fl;break}for(;h<16;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}if(t.wrap&2&&l===35615){t.wbits===0&&(t.wbits=15),t.check=0,M[0]=l&255,M[1]=l>>>8&255,t.check=Nt(t.check,M,2,0),l=0,h=0,t.mode=rd;break}if(t.head&&(t.head.done=!1),!(t.wrap&1)||(((l&255)<<8)+(l>>8))%31){n.msg="incorrect header check",t.mode=pt;break}if((l&15)!==sd){n.msg="unknown compression method",t.mode=pt;break}if(l>>>=4,h-=4,w=(l&15)+8,t.wbits===0&&(t.wbits=w),w>15||w>t.wbits){n.msg="invalid window size",t.mode=pt;break}t.dmax=1<<t.wbits,t.flags=0,n.adler=t.check=1,t.mode=l&512?fd:ni,l=0,h=0;break;case rd:for(;h<16;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}if(t.flags=l,(t.flags&255)!==sd){n.msg="unknown compression method",t.mode=pt;break}if(t.flags&57344){n.msg="unknown header flags set",t.mode=pt;break}t.head&&(t.head.text=l>>8&1),t.flags&512&&t.wrap&4&&(M[0]=l&255,M[1]=l>>>8&255,t.check=Nt(t.check,M,2,0)),l=0,h=0,t.mode=od;case od:for(;h<32;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}t.head&&(t.head.time=l),t.flags&512&&t.wrap&4&&(M[0]=l&255,M[1]=l>>>8&255,M[2]=l>>>16&255,M[3]=l>>>24&255,t.check=Nt(t.check,M,4,0)),l=0,h=0,t.mode=ad;case ad:for(;h<16;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}t.head&&(t.head.xflags=l&255,t.head.os=l>>8),t.flags&512&&t.wrap&4&&(M[0]=l&255,M[1]=l>>>8&255,t.check=Nt(t.check,M,2,0)),l=0,h=0,t.mode=ld;case ld:if(t.flags&1024){for(;h<16;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}t.length=l,t.head&&(t.head.extra_len=l),t.flags&512&&t.wrap&4&&(M[0]=l&255,M[1]=l>>>8&255,t.check=Nt(t.check,M,2,0)),l=0,h=0}else t.head&&(t.head.extra=null);t.mode=cd;case cd:if(t.flags&1024&&(f=t.length,f>a&&(f=a),f&&(t.head&&(w=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(i.subarray(r,r+f),w)),t.flags&512&&t.wrap&4&&(t.check=Nt(t.check,i,f,r)),a-=f,r+=f,t.length-=f),t.length))break e;t.length=0,t.mode=hd;case hd:if(t.flags&2048){if(a===0)break e;f=0;do w=i[r+f++],t.head&&w&&t.length<65536&&(t.head.name+=String.fromCharCode(w));while(w&&f<a);if(t.flags&512&&t.wrap&4&&(t.check=Nt(t.check,i,f,r)),a-=f,r+=f,w)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=ud;case ud:if(t.flags&4096){if(a===0)break e;f=0;do w=i[r+f++],t.head&&w&&t.length<65536&&(t.head.comment+=String.fromCharCode(w));while(w&&f<a);if(t.flags&512&&t.wrap&4&&(t.check=Nt(t.check,i,f,r)),a-=f,r+=f,w)break e}else t.head&&(t.head.comment=null);t.mode=dd;case dd:if(t.flags&512){for(;h<16;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}if(t.wrap&4&&l!==(t.check&65535)){n.msg="header crc mismatch",t.mode=pt;break}l=0,h=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),n.adler=t.check=0,t.mode=ni;break;case fd:for(;h<32;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}n.adler=t.check=Td(l),l=0,h=0,t.mode=Zo;case Zo:if(t.havedict===0)return n.next_out=o,n.avail_out=c,n.next_in=r,n.avail_in=a,t.hold=l,t.bits=h,Ab;n.adler=t.check=1,t.mode=ni;case ni:if(e===wb||e===Uo)break e;case fl:if(t.last){l>>>=h&7,h-=h&7,t.mode=ml;break}for(;h<3;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}switch(t.last=l&1,l>>>=1,h-=1,l&3){case 0:t.mode=pd;break;case 1:if(Ub(t),t.mode=Oo,e===Uo){l>>>=2,h-=2;break e}break;case 2:t.mode=gd;break;case 3:n.msg="invalid block type",t.mode=pt}l>>>=2,h-=2;break;case pd:for(l>>>=h&7,h-=h&7;h<32;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}if((l&65535)!==(l>>>16^65535)){n.msg="invalid stored block lengths",t.mode=pt;break}if(t.length=l&65535,l=0,h=0,t.mode=pl,e===Uo)break e;case pl:t.mode=md;case md:if(f=t.length,f){if(f>a&&(f=a),f>c&&(f=c),f===0)break e;s.set(i.subarray(r,r+f),o),a-=f,r+=f,c-=f,o+=f,t.length-=f;break}t.mode=ni;break;case gd:for(;h<14;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}if(t.nlen=(l&31)+257,l>>>=5,h-=5,t.ndist=(l&31)+1,l>>>=5,h-=5,t.ncode=(l&15)+4,l>>>=4,h-=4,t.nlen>286||t.ndist>30){n.msg="too many length or distance symbols",t.mode=pt;break}t.have=0,t.mode=_d;case _d:for(;t.have<t.ncode;){for(;h<3;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}t.lens[O[t.have++]]=l&7,l>>>=3,h-=3}for(;t.have<19;)t.lens[O[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,S={bits:t.lenbits},L=wr(bb,t.lens,0,19,t.lencode,0,t.work,S),t.lenbits=S.bits,L){n.msg="invalid code lengths set",t.mode=pt;break}t.have=0,t.mode=xd;case xd:for(;t.have<t.nlen+t.ndist;){for(;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,v=m>>>16&255,x=m&65535,!(p<=h);){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}if(x<16)l>>>=p,h-=p,t.lens[t.have++]=x;else{if(x===16){for(D=p+2;h<D;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}if(l>>>=p,h-=p,t.have===0){n.msg="invalid bit length repeat",t.mode=pt;break}w=t.lens[t.have-1],f=3+(l&3),l>>>=2,h-=2}else if(x===17){for(D=p+3;h<D;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}l>>>=p,h-=p,w=0,f=3+(l&7),l>>>=3,h-=3}else{for(D=p+7;h<D;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}l>>>=p,h-=p,w=0,f=11+(l&127),l>>>=7,h-=7}if(t.have+f>t.nlen+t.ndist){n.msg="invalid bit length repeat",t.mode=pt;break}for(;f--;)t.lens[t.have++]=w}}if(t.mode===pt)break;if(t.lens[256]===0){n.msg="invalid code -- missing end-of-block",t.mode=pt;break}if(t.lenbits=9,S={bits:t.lenbits},L=wr(ep,t.lens,0,t.nlen,t.lencode,0,t.work,S),t.lenbits=S.bits,L){n.msg="invalid literal/lengths set",t.mode=pt;break}if(t.distbits=6,t.distcode=t.distdyn,S={bits:t.distbits},L=wr(tp,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,S),t.distbits=S.bits,L){n.msg="invalid distances set",t.mode=pt;break}if(t.mode=Oo,e===Uo)break e;case Oo:t.mode=Fo;case Fo:if(a>=6&&c>=258){n.next_out=o,n.avail_out=c,n.next_in=r,n.avail_in=a,t.hold=l,t.bits=h,xb(n,d),o=n.next_out,s=n.output,c=n.avail_out,r=n.next_in,i=n.input,a=n.avail_in,l=t.hold,h=t.bits,t.mode===ni&&(t.back=-1);break}for(t.back=0;m=t.lencode[l&(1<<t.lenbits)-1],p=m>>>24,v=m>>>16&255,x=m&65535,!(p<=h);){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}if(v&&!(v&240)){for(y=p,E=v,A=x;m=t.lencode[A+((l&(1<<y+E)-1)>>y)],p=m>>>24,v=m>>>16&255,x=m&65535,!(y+p<=h);){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}l>>>=y,h-=y,t.back+=y}if(l>>>=p,h-=p,t.back+=p,t.length=x,v===0){t.mode=Sd;break}if(v&32){t.back=-1,t.mode=ni;break}if(v&64){n.msg="invalid literal/length code",t.mode=pt;break}t.extra=v&15,t.mode=vd;case vd:if(t.extra){for(D=t.extra;h<D;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}t.length+=l&(1<<t.extra)-1,l>>>=t.extra,h-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=yd;case yd:for(;m=t.distcode[l&(1<<t.distbits)-1],p=m>>>24,v=m>>>16&255,x=m&65535,!(p<=h);){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}if(!(v&240)){for(y=p,E=v,A=x;m=t.distcode[A+((l&(1<<y+E)-1)>>y)],p=m>>>24,v=m>>>16&255,x=m&65535,!(y+p<=h);){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}l>>>=y,h-=y,t.back+=y}if(l>>>=p,h-=p,t.back+=p,v&64){n.msg="invalid distance code",t.mode=pt;break}t.offset=x,t.extra=v&15,t.mode=Md;case Md:if(t.extra){for(D=t.extra;h<D;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}t.offset+=l&(1<<t.extra)-1,l>>>=t.extra,h-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){n.msg="invalid distance too far back",t.mode=pt;break}t.mode=Ed;case Ed:if(c===0)break e;if(f=d-c,t.offset>f){if(f=t.offset-f,f>t.whave&&t.sane){n.msg="invalid distance too far back",t.mode=pt;break}f>t.wnext?(f-=t.wnext,g=t.wsize-f):g=t.wnext-f,f>t.length&&(f=t.length),_=t.window}else _=s,g=o-t.offset,f=t.length;f>c&&(f=c),c-=f,t.length-=f;do s[o++]=_[g++];while(--f);t.length===0&&(t.mode=Fo);break;case Sd:if(c===0)break e;s[o++]=t.length,c--,t.mode=Fo;break;case ml:if(t.wrap){for(;h<32;){if(a===0)break e;a--,l|=i[r++]<<h,h+=8}if(d-=c,n.total_out+=d,t.total+=d,t.wrap&4&&d&&(n.adler=t.check=t.flags?Nt(t.check,s,d,o-d):Ur(t.check,s,d,o-d)),d=c,t.wrap&4&&(t.flags?l:Td(l))!==t.check){n.msg="incorrect data check",t.mode=pt;break}l=0,h=0}t.mode=bd;case bd:if(t.wrap&&t.flags){for(;h<32;){if(a===0)break e;a--,l+=i[r++]<<h,h+=8}if(t.wrap&4&&l!==(t.total&4294967295)){n.msg="incorrect length check",t.mode=pt;break}l=0,h=0}t.mode=wd;case wd:L=Tb;break e;case pt:L=np;break e;case sp:return ip;case rp:default:return Rn}return n.next_out=o,n.avail_out=c,n.next_in=r,n.avail_in=a,t.hold=l,t.bits=h,(t.wsize||d!==n.avail_out&&t.mode<pt&&(t.mode<ml||e!==id))&&hp(n,n.output,n.next_out,d-n.avail_out),u-=n.avail_in,d-=n.avail_out,n.total_in+=u,n.total_out+=d,t.total+=d,t.wrap&4&&d&&(n.adler=t.check=t.flags?Nt(t.check,s,d,n.next_out-d):Ur(t.check,s,d,n.next_out-d)),n.data_type=t.bits+(t.last?64:0)+(t.mode===ni?128:0)+(t.mode===Oo||t.mode===pl?256:0),(u===0&&d===0||e===id)&&L===ns&&(L=Rb),L},Fb=n=>{if(ss(n))return Rn;let e=n.state;return e.window&&(e.window=null),n.state=null,ns},Bb=(n,e)=>{if(ss(n))return Rn;const t=n.state;return t.wrap&2?(t.head=e,e.done=!1,ns):Rn},zb=(n,e)=>{const t=e.length;let i,s,r;return ss(n)||(i=n.state,i.wrap!==0&&i.mode!==Zo)?Rn:i.mode===Zo&&(s=1,s=Ur(s,e,t,0),s!==i.check)?np:(r=hp(n,e,t,t),r?(i.mode=sp,ip):(i.havedict=1,ns))};var kb=ap,Hb=lp,Gb=op,Vb=Nb,Wb=cp,Xb=Ob,$b=Fb,jb=Bb,qb=zb,Yb="pako inflate (from Nodeca project)",ai={inflateReset:kb,inflateReset2:Hb,inflateResetKeep:Gb,inflateInit:Vb,inflateInit2:Wb,inflate:Xb,inflateEnd:$b,inflateGetHeader:jb,inflateSetDictionary:qb,inflateInfo:Yb};function Kb(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var Zb=Kb;const up=Object.prototype.toString,{Z_NO_FLUSH:Jb,Z_FINISH:Qb,Z_OK:Br,Z_STREAM_END:xl,Z_NEED_DICT:vl,Z_STREAM_ERROR:ew,Z_DATA_ERROR:Rd,Z_MEM_ERROR:tw}=qr;function Zr(n){this.options=da.assign({chunkSize:1024*64,windowBits:15,to:""},n||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,e.windowBits===0&&(e.windowBits=-15)),e.windowBits>=0&&e.windowBits<16&&!(n&&n.windowBits)&&(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&(e.windowBits&15||(e.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Jf,this.strm.avail_out=0;let t=ai.inflateInit2(this.strm,e.windowBits);if(t!==Br)throw new Error(es[t]);if(this.header=new Zb,ai.inflateGetHeader(this.strm,this.header),e.dictionary&&(typeof e.dictionary=="string"?e.dictionary=Fr.string2buf(e.dictionary):up.call(e.dictionary)==="[object ArrayBuffer]"&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(t=ai.inflateSetDictionary(this.strm,e.dictionary),t!==Br)))throw new Error(es[t])}Zr.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize,s=this.options.dictionary;let r,o,a;if(this.ended)return!1;for(e===~~e?o=e:o=e===!0?Qb:Jb,up.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){for(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),r=ai.inflate(t,o),r===vl&&s&&(r=ai.inflateSetDictionary(t,s),r===Br?r=ai.inflate(t,o):r===Rd&&(r=vl));t.avail_in>0&&r===xl&&t.state.wrap>0&&n[t.next_in]!==0;)ai.inflateReset(t),r=ai.inflate(t,o);switch(r){case ew:case Rd:case vl:case tw:return this.onEnd(r),this.ended=!0,!1}if(a=t.avail_out,t.next_out&&(t.avail_out===0||r===xl))if(this.options.to==="string"){let c=Fr.utf8border(t.output,t.next_out),l=t.next_out-c,h=Fr.buf2string(t.output,c);t.next_out=l,t.avail_out=i-l,l&&t.output.set(t.output.subarray(c,c+l),0),this.onData(h)}else this.onData(t.output.length===t.next_out?t.output:t.output.subarray(0,t.next_out));if(!(r===Br&&a===0)){if(r===xl)return r=ai.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,!0;if(t.avail_in===0)break}}return!0};Zr.prototype.onData=function(n){this.chunks.push(n)};Zr.prototype.onEnd=function(n){n===Br&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=da.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function Rc(n,e){const t=new Zr(e);if(t.push(n),t.err)throw t.msg||es[t.err];return t.result}function nw(n,e){return e=e||{},e.raw=!0,Rc(n,e)}var iw=Zr,sw=Rc,rw=nw,ow=Rc,aw={Inflate:iw,inflate:sw,inflateRaw:rw,ungzip:ow};const{Deflate:lw,deflate:cw,deflateRaw:hw,gzip:uw}=gb,{Inflate:dw,inflate:fw,inflateRaw:pw,ungzip:mw}=aw;var gw=lw,_w=cw,xw=hw,vw=uw,yw=dw,Mw=fw,Ew=pw,Sw=mw,bw=qr,dp={Deflate:gw,deflate:_w,deflateRaw:xw,gzip:vw,Inflate:yw,inflate:Mw,inflateRaw:Ew,ungzip:Sw,constants:bw};console.log(`Tentando conectar ao servidor na porta: ${Tf.PORT}`);const Ge=jy({port:Tf.PORT}),Jo=15,ww=document.getElementById("game-container"),Cd=window.innerWidth,Ld=window.innerHeight;let nt,Rt,tn,Y,it,In,st,an,qe,Vt,Qo,tc=new fe,Tr=new Dy,xr=null,Pd=0;const Ht={w:!1,a:!1,s:!1,d:!1};let vr={w:!1,a:!1,s:!1,d:!1},yl=0,Id=performance.now(),Dd=performance.now(),fp=0,pp=0,gn=document.createElement("div");gn.style.position="fixed";gn.style.top="10px";gn.style.left="10px";gn.style.background="rgba(0,0,0,0.7)";gn.style.color="#fff";gn.style.fontFamily="monospace";gn.style.fontSize="15px";gn.style.padding="6px 12px";gn.style.borderRadius="8px";gn.style.zIndex="1000";gn.innerHTML="FPS: --<br>Ping: -- ms";document.body.appendChild(gn);const Ml=[];let Tt=null,Bt=null,$i=null;const ot=new FM;let An;function Tw(n){!n||!n.stats||ot.update(n.stats,n.level,"Arcane")}Ge.on(ut.PLAYER.ABILITY_USED,n=>{try{if(n.id===it&&(Y&&Y.userData&&n.mana!==void 0&&(Y.userData.stats.mana=n.mana,n.maxMana!==void 0&&(Y.userData.stats.maxMana=n.maxMana),ot.update(Y.userData.stats,Y.userData.level,"Arcane"),Vt.updateMana(n.mana)),n.abilityId)){const t=ot.abilitySlots.indexOf(n.abilityId)+1;if(t>0){const i=Date.now();let s;if(n.cooldownEnd&&n.cooldownEnd>i)s=n.cooldownEnd-i;else if(n.cooldownStart&&n.cooldownDuration){const r=i-n.cooldownStart;s=Math.max(0,n.cooldownDuration-r)}else if(n.cooldown)n.cooldown>i+1e3?s=n.cooldown-i:s=n.cooldown;else{const r=Vt.getAbilityById(n.abilityId);if(!r)return;s=r.COOLDOWN}s=Math.max(0,s),ot.setCooldown(t,s,s),n.cooldownEnd?Vt.startCooldown(n.abilityId,n.cooldownEnd):Vt.startCooldown(n.abilityId,i+s)}}}catch(e){console.error("Erro ao processar evento ABILITY_USED:",e)}});Ge.on(ut.PLAYER.INIT,n=>{Y&&Y.userData&&Tw(Y.userData)});Ge.on(ut.PLAYER.MOVED,n=>{try{if(!n||!n.id||!n.position){console.error("Dados de jogador inválidos:",n);return}if(n.id===it){if(Y){const t=Number(n.position.x)||0,i=Number(n.position.z)||0;Y.targetPosition=new R(t,.5,i),Y.rotation.y=Number(n.rotation)||0,n.stats&&Y.userData&&(Y.userData.stats={...Y.userData.stats,...n.stats},Y.userData.level=n.level,Y.userData.xp=n.xp,Y.userData.nextLevelXp=n.nextLevelXp,Y.userData.name=n.name,ot.update(n.stats,n.level,n.name,n.xp,n.nextLevelXp),n.stats.mana!==void 0&&Vt.updateMana(n.stats.mana))}}else qe.updatePlayer(n)}catch(e){console.error("Erro ao processar movimento de jogador:",e)}});function Aw(){Tr.setFromCamera(tc,Rt);const n=Tr.intersectObject(xr);return n.length>0?n[0].point:Y?Y.position.clone():new R(0,0,0)}function nc(n,e){if(!n||!An)return;const t=n.getWorldPosition(new R);An.createFloatingText({text:`-${Number(e).toFixed(1)}`,position:{x:t.x,y:t.y+2.2,z:t.z},type:"damage",size:1,duration:1600,fadeOut:!0})}function mp(){const n=performance.now();for(let e=Ml.length-1;e>=0;e--){const t=Ml[e],i=n-t.startTime,s=t.duration||1200;if(i>s){t.targetMesh&&t.sprite&&(t.targetMesh.remove(t.sprite),t.sprite.material&&(t.sprite.material.dispose(),t.sprite.material.map&&t.sprite.material.map.dispose())),Ml.splice(e,1);continue}t.sprite.position.y=1.5+i/500;const r=s*.5;if(i>r){const o=1-(i-r)/(s-r);t.sprite.material.opacity=Math.max(.1,o)}}}function Rw(){nt=new Hv;const n=new _t(500,32,32),e=new rn({side:Yt,uniforms:{topColor:{value:new me(2241365)},bottomColor:{value:new me(3829416)},offset:{value:400},exponent:{value:.8}},vertexShader:`
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
    `}),t=new oe(n,e);nt.add(t);const i=Cd/Ld;Rt=new kr(-15*i,Jo*i,Jo,-15,.1,1e3),Rt.position.set(20,20,20),Rt.lookAt(0,0,0),tn=new uf({antialias:!0,precision:"highp",powerPreference:"high-performance"}),tn.setSize(Cd,Ld),tn.setPixelRatio(window.devicePixelRatio),ww.appendChild(tn.domElement);const r=new vf().load("/textures/environment/tiled_stone_texture.png",f=>{console.log("Textura do chão carregada:",f)});r.wrapS=r.wrapT=Zi,r.repeat.set(32,32),r.anisotropy=8,r.colorSpace=ht;const o=new oa(si.SIZE.WIDTH,si.SIZE.HEIGHT),a=new xe({map:r,color:16777215,side:Ft,roughness:.5,metalness:0,flatShading:!1});xr=new oe(o,a),xr.rotation.x=Math.PI/2,xr.receiveShadow=!0,nt.add(xr),Cw(),st=new Iu(nt),an=new NM(nt),qe=new UM(nt),Vt=new rE(nt),an.setupLighting(tn),tn.outputColorSpace=ht,tn.toneMapping=oc,tn.toneMappingExposure=an.toneMappingExposure,window._threeRenderer=tn,In=new uE(tn),window._threeComposer=In,In.addPass(new dE(nt,Rt));const c=new Gs(new fe(window.innerWidth,window.innerHeight),.6,.4,.85);In.addPass(c),window._bloomPass=c;const l=new Wl(pE);l.material.uniforms.resolution.value.set(1/window.innerWidth,1/window.innerHeight),In.addPass(l),window._fxaaPass=l;const h=new Wl(mE);h.uniforms.powRGB.value.set(1.05,1.05,1.05),h.uniforms.mulRGB.value.set(1.05,1.05,1.05),In.addPass(h),window._colorCorrectionPass=h,tn.outputColorSpace=ht,window.addEventListener("resize",Pw),window.addEventListener("mousemove",Iw),An=new oE(nt,Rt);const u=document.getElementById("overlay");Qo=new Zy(u,Rt),st=new Iu(nt,Qo);const d=st.updateMonster.bind(st);st.updateMonster=function(f){d(f);const g=this.getMonster(f.id);g&&g.userData&&g.userData._wasGray&&f.stats&&f.stats.hp>0&&ic(g,16711680)}}function Cw(){const n=si.SIZE.WIDTH/2,e=si.SIZE.HEIGHT/2,t=si.BOUNDARIES.BORDER_WIDTH,i=new xe({color:16728128,transparent:!0,opacity:.6}),s=new oe(new Gt(si.SIZE.WIDTH,2,t),i);s.position.set(0,1,-100),nt.add(s);const r=new oe(new Gt(si.SIZE.WIDTH,2,t),i);r.position.set(0,1,e),nt.add(r);const o=new oe(new Gt(t,2,si.SIZE.HEIGHT),i);o.position.set(-100,1,0),nt.add(o);const a=new oe(new Gt(t,2,si.SIZE.HEIGHT),i);a.position.set(n,1,0),nt.add(a);const c=new xe({color:16711680}),l=new On(.5,.5,5,8),h=new oe(l,c);h.position.set(n,2.5,-100),nt.add(h);const u=new oe(l,c);u.position.set(-100,2.5,-100),nt.add(u);const d=new oe(l,c);d.position.set(n,2.5,e),nt.add(d);const f=new oe(l,c);f.position.set(-100,2.5,e),nt.add(f)}function Lw(){const n=new Gt(1,1,1),e=new xe({color:255});Y=new oe(n,e),nt.add(Y),Y.position.set(0,.5,0);const t=new $n(.3,1,4),i=new xe({color:65280}),s=new oe(t,i);s.position.set(0,0,.8),s.rotation.x=Math.PI/2,Y.add(s),qe.setLocalPlayerId(it),Y.targetPosition=Y.position.clone()}function Pw(){const n=window.innerWidth,e=window.innerHeight,t=n/e;if(Rt.left=-15*t,Rt.right=Jo*t,Rt.top=Jo,Rt.bottom=-15,Rt.updateProjectionMatrix(),tn.setSize(n,e),In){In.setSize(n,e);const i=In.passes.find(s=>s.material&&s.material.uniforms&&s.material.uniforms.resolution);i&&i.material.uniforms.resolution.value.set(1/n,1/e)}}function Iw(n){tc.x=n.clientX/window.innerWidth*2-1,tc.y=-(n.clientY/window.innerHeight)*2+1}window.addEventListener("keydown",n=>{gp(n.key,!0)&&Cc()});window.addEventListener("keyup",n=>{gp(n.key,!1)&&Cc()});function gp(n,e){let t=!1;return n==="w"||n==="W"?(t=Ht.w!==e,Ht.w=e):n==="a"||n==="A"?(t=Ht.a!==e,Ht.a=e):n==="s"||n==="S"?(t=Ht.s!==e,Ht.s=e):(n==="d"||n==="D")&&(t=Ht.d!==e,Ht.d=e),t}function Cc(){if(!Y||!it)return;const n={forward:Ht.w,backward:Ht.s,left:Ht.a,right:Ht.d};try{Ge.emit(ut.PLAYER.MOVE,{input:n,isRelativeToCamera:!0})}catch(e){console.error("Erro ao enviar comando de movimento:",e)}vr={...Ht}}function Dw(){if(Lc||!Y||!it)return;const n=Date.now();if(n-Pd<200)return;Pd=n,(vr.w!==Ht.w||vr.a!==Ht.a||vr.s!==Ht.s||vr.d!==Ht.d)&&Cc()}function Nw(){pp=performance.now(),Ge.emit("ping")}Ge.on("pong",()=>{fp=Math.round(performance.now()-pp)});setInterval(Nw,2e3);function Xn(){requestAnimationFrame(Xn);const n=performance.now(),e=(n-Dd)/1e3;if(Dd=n,yl++,n-Id>1e3&&(gn.innerHTML=`FPS: ${yl}<br>Ping: ${fp} ms`,yl=0,Id=n),Dw(),Gw(),qe.updatePositions&&qe.updatePositions(e),st.updatePositions&&st.updatePositions(e),Vt.update&&Vt.update(e),An&&An.update(e),an&&an.updateRenderer&&an.updateRenderer(e,Rt.position),Y&&an.updateLightPosition(Y.position),In?In.render():tn.render(nt,Rt),$i&&Tt){let t=null;Bt==="monster"?t=st.getMonster(Tt):Bt==="player"&&(t=qe.getPlayer(Tt)),t&&($i.position.copy(t.position),$i.rotation.copy(t.rotation))}Y&&Y.targetPosition&&Y.position.lerp(Y.targetPosition,.25),Qo&&Qo.updateAll(window.innerWidth,window.innerHeight)}Ge.onConnect(n=>{if(n){console.error("Erro ao conectar ao servidor:",n);return}console.log("Conectado ao servidor!"),ot.setChannel(Ge),Rw(),Fw(),Xn()});Ge.on(ut.PLAYER.INIT,n=>{try{console.log("ID recebido do servidor:",n.id),it=n.id,Lw()}catch(e){console.error("Erro ao processar ID do jogador:",e)}});Ge.on(ut.WORLD.INIT,n=>{try{console.log("[WORLD] Recebendo dados iniciais do mundo:",n);let e=n;if(n.compressed&&n.data)try{const s=atob(n.data),r=s.length,o=new Uint8Array(r);for(let c=0;c<r;c++)o[c]=s.charCodeAt(c);const a=dp.inflate(o,{to:"string"});e=JSON.parse(a),console.log("[WORLD] Dados descompactados com sucesso:",e)}catch(s){console.error("[ERRO] Falha ao descompactar dados:",s);return}const t=e.worldObjects||[],i=e.monsters||[];if(t&&t.length>0){console.log(`[WORLD] Processando ${t.length} objetos do mundo`);const s={};t.forEach(r=>{const o=r.biome||"UNKNOWN";s[o]=(s[o]||0)+1,an.updateWorldObject(r)}),console.log("[WORLD] Contagem de objetos por bioma:",s),an.optimizeSceneWithInstancing&&(console.log("[WORLD] Aplicando otimizações de renderização..."),an.optimizeSceneWithInstancing())}if(i&&i.length>0){console.log(`Inicializando ${i.length} monstros`);for(const s of i)s&&s.id&&st.updateMonster(s)}}catch(e){console.error("[ERRO] Falha ao processar dados iniciais do mundo:",e)}});Ge.on(ut.PLAYER.DISCONNECTED,n=>{try{if(!n||!n.id){console.error("Dados de desconexão inválidos:",n);return}const e=n.id;qe.removePlayer(e)}catch(e){console.error("Erro ao processar desconexão de jogador:",e)}});Ge.on(ut.PLAYER.EXISTING,n=>{try{if(!n||!n.id||!n.position){console.error("Dados de jogador existente inválidos:",n);return}const e=n.id;e===it&&Y&&Y.userData?(Y.userData.stats={...Y.userData.stats,...n.stats},Y.userData.level=n.level,Y.userData.xp=n.xp,Y.userData.nextLevelXp=n.nextLevelXp,Y.userData.name=n.name,ot.update(n.stats,n.level,n.name,n.xp,n.nextLevelXp)):e!==it&&qe.updatePlayer(n)}catch(e){console.error("Erro ao processar jogador existente:",e)}});Ge.on(ut.PLAYER.JOINED,n=>{try{if(!n||!n.id||!n.position){console.error("Dados de novo jogador inválidos:",n);return}const e=n.id;e===it&&Y&&Y.userData?(Y.userData.stats={...Y.userData.stats,...n.stats},Y.userData.level=n.level,Y.userData.xp=n.xp,Y.userData.nextLevelXp=n.nextLevelXp,Y.userData.name=n.name,ot.update(n.stats,n.level,n.name,n.xp,n.nextLevelXp)):e!==it&&qe.updatePlayer(n)}catch(e){console.error("Erro ao processar novo jogador:",e)}});Ge.on(ut.PLAYER.ROTATED,n=>{try{if(!n||!n.id||n.rotation===void 0){console.error("Dados de rotação inválidos:",n);return}const e=n.id,t=Number(n.rotation)||0;e===it&&Y?Y.rotation.y=t:qe.hasPlayer(e)&&qe.updatePlayerRotation(e,t)}catch(e){console.error("Erro ao processar rotação de jogador:",e)}});Ge.on(ut.WORLD.UPDATE,n=>{try{if(!n){console.error("Dados de atualização do mundo inválidos");return}let e=n;if(n.compressed&&n.data)try{const t=atob(n.data),i=t.length,s=new Uint8Array(i);for(let o=0;o<i;o++)s[o]=t.charCodeAt(o);const r=dp.inflate(s,{to:"string"});e=JSON.parse(r)}catch(t){console.error("Erro ao descompactar dados:",t);return}if(e.monsters&&Array.isArray(e.monsters)){for(const t of e.monsters)t&&t.id&&(st.updateMonster(t),Tt===t.id&&Bt==="monster"&&pn(bi(t,"monster")));st.pruneStaleMonsters()}if(e.worldObjects&&Array.isArray(e.worldObjects))for(const t of e.worldObjects)t&&t.id&&an.updateWorldObject(t);if(e.players&&Array.isArray(e.players))for(const t of e.players)t&&t.id&&(qe.updatePlayer(t),Tt===t.id&&Bt==="player"&&pn(bi(t,"player")))}catch(e){console.error("Erro ao processar atualização do mundo:",e)}});Ge.onDisconnect(()=>{console.log("Desconectado do servidor"),qe&&qe.removePlayer(it),st&&st.clearAllMonsters(),an&&an.clearAllWorldObjects(),it=null,gameStarted=!1,typeof uiElements<"u"&&uiElements&&uiElements.showConnectionLost?uiElements.showConnectionLost():console.log("Interface de usuário não disponível para mostrar mensagem de desconexão")});Ge.on("ping",()=>{Ge.emit("pong")});Ge.on(ut.PLAYER.DAMAGE,n=>{if(!(!n||!n.id||!n.damage)){if(n.id===it&&Y)nc(Y,n.damage);else if(qe.hasPlayer(n.id)){const e=qe.getPlayer(n.id);nc(e,n.damage)}}});Ge.on(ut.MONSTER.DAMAGE,n=>{if(!n||!n.id||!n.damage)return;const e=st.getMonster(n.id);e&&nc(e,n.damage)});function Is(n){if($i&&(nt.remove($i),$i=null),!n)return;const e=new mt({color:8947712,side:Yt,transparent:!0,opacity:.7}),t=n.clone();t.material=e,t.scale.multiplyScalar(1.15),t.position.copy(n.position),t.rotation.copy(n.rotation),t.renderOrder=999,nt.add(t),$i=t}window.addEventListener("mousedown",n=>{const e=new fe;e.x=n.clientX/window.innerWidth*2-1,e.y=-(n.clientY/window.innerHeight)*2+1,Tr.setFromCamera(e,Rt);let t=!1;for(const[i,s]of st.monsters.entries())if(Tr.intersectObject(s,!0).length>0){Tt=i,Bt="monster",Is(s),t=!0;const o=st.getMonsterData(i);o&&pn(bi(o,"monster"));break}if(!t){for(const[i,s]of qe.players.entries())if(Tr.intersectObject(s,!0).length>0){if(i===it)Tt=null,Bt=null,Is(null),pn(null);else{Tt=i,Bt="player",Is(s);const o=qe.getPlayerData(i);o&&pn(bi(o,"player"))}t=!0;break}}});window.addEventListener("keydown",n=>{(n.key==="Escape"||n.key==="Esc")&&(Tt=null,Bt=null,Is(null),pn(null))});function _p(){Tt&&(Bt==="monster"?st.monsters.has(Tt)||(Tt=null,Bt=null,pn(null)):Bt==="player"&&(qe.players.has(Tt)||(Tt=null,Bt=null,pn(null))))}const Uw=Xn;Xn=function(){mp(),_p(),Uw()};window.addEventListener("keydown",n=>{let e=null;if(n.key==="1"&&(e=1),n.key==="2"&&(e=2),n.key==="3"&&(e=3),n.key==="4"&&(e=4),!e||!Y)return;const t=ot.abilitySlots[e-1];if(!t)return;const i=Vt.getAbilityById(t);if(!i)return;if(!Vt.canUseAbility(t)){const r=Vt.getWhyCannotUse(t);if(An&&Y){const o={x:Y.position.x,y:Y.position.y+2,z:Y.position.z};let a="#ff0000";r.includes("cooldown")?a="#ffaa00":r.includes("mana")&&(a="#00aaff"),An.createFloatingText({text:r,position:o,color:a,size:.8,duration:1500,type:"error"})}return}const s=Aw();i&&ot.setCooldown(e,i.COOLDOWN,i.COOLDOWN),Ge.emit(ut.PLAYER.USE_ABILITY,{abilityId:t,targetPosition:s})});const Ow=Xn;Xn=function(){const n=performance.now();(n-(Xn.lastTime||n))/1e3,Xn.lastTime=n,Vt&&Vt.update(),mp(),_p(),Ow()};Ge.on(ut.PLAYER.ABILITY_USED,n=>{try{if(!n||!n.abilityId)return;if(n.teleport&&n.teleportPosition){let s=null;if(!n.playerId&&Y){s=Y;const r=Y.position.clone();Y.position.set(n.teleportPosition.x,n.teleportPosition.y||Y.position.y,n.teleportPosition.z),Vt.spawnSkillEffect(2,r,new R(n.teleportPosition.x,n.teleportPosition.y||Y.position.y,n.teleportPosition.z),Y)}else n.playerId&&(s=qe.getPlayer(n.playerId),s&&(s.position.set(n.teleportPosition.x,n.teleportPosition.y||s.position.y,n.teleportPosition.z),An.createFloatingText({text:"✨",position:n.teleportPosition,color:"#80ffff",size:1,duration:1e3,type:"default"})));return}let e=null;if(!n.playerId&&Y?e=Y:n.playerId&&(e=qe.getPlayer(n.playerId)),!e||!n.targetPosition)return;const t=n.position?new R(n.position.x,n.position.y,n.position.z):e.position.clone(),i=new R(n.targetPosition.x,n.targetPosition.y,n.targetPosition.z);if(Vt.spawnSkillEffect(n.abilityId,t,i,e,n.effect||{}),n.areaEffect&&n.areaEffect.center&&n.areaEffect.radius){const s=new R(n.areaEffect.center.x,n.areaEffect.center.y||0,n.areaEffect.center.z);if(n.abilityId===3){const r=new is(n.areaEffect.radius,32),o=new mt({color:65535,transparent:!0,opacity:.4}),a=new oe(r,o);a.position.set(s.x,.1,s.z),a.rotation.x=-Math.PI/2,nt.add(a);const c=8;for(let l=0;l<c;l++){const h=l/c*Math.PI*2,u=(Math.random()*.7+.3)*n.areaEffect.radius,d=s.x+Math.cos(h)*u,f=s.z+Math.sin(h)*u;An.createFloatingText({text:"❄️",position:{x:d,y:.5,z:f},color:"#ffffff",size:1+Math.random(),duration:2e3+Math.random()*1e3,type:"default"})}setTimeout(()=>{nt.remove(a),a.geometry.dispose(),o.dispose()},5e3)}}if(e){const s=e.scale.clone();e.scale.multiplyScalar(1.1),setTimeout(()=>{e&&e.scale.copy(s)},150)}}catch(e){console.error("Erro ao processar habilidade:",e)}});function Fw(){Ge.on(ut.COMBAT.DAMAGE_DEALT,n=>{try{if(!n||!n.targetId||!n.damage)return;if(n.died===!0){if(n.targetType==="monster"){const r=st.getMonster(n.targetId);if(r&&r.userData&&r.userData.stats&&(r.userData.stats.hp=0,Tt===n.targetId&&Bt==="monster")){const o=st.getMonsterData(n.targetId);o&&pn(bi(o,"monster"))}}else if(n.targetType==="player"){const r=qe.getPlayer(n.targetId);if(r&&r.userData&&r.userData.stats&&(r.userData.stats.hp=0,Tt===n.targetId&&Bt==="player")){const o=qe.getPlayerData(n.targetId);o&&pn(bi(o,"player"))}}}let e=null;if(n.targetType==="monster"?e=st.getMonster(n.targetId):n.targetType==="player"&&(n.targetId===it&&ot.updateHealth(n.remainingHp||0),e=qe.getPlayer(n.targetId)),!e)return;const t={x:e.position.x,y:e.position.y+1,z:e.position.z},i=parseInt(n.damage)||0,s=Math.min(.7+i/50,1.5);if(An.createFloatingText({text:n.damage?Number(n.damage).toFixed(1):"",position:t,color:"#ff0000",size:1,duration:1200,type:"damage"}),e){const r=e.scale.clone();e.scale.multiplyScalar(1.1),setTimeout(()=>{e&&e.scale.copy(r)},150)}if(ot&&ot.chatManager){if(n.targetId===it)if(console.log(`[DEBUG] Você recebeu ${n.damage} de dano!`),n.sourceType==="monster"&&n.sourceName)ot.chatManager.addDamageMessage(`Você recebeu ${n.damage} de dano do ${n.sourceName}!`);else if(n.sourceType==="player"&&n.sourceId){const r=qe.getPlayerData(n.sourceId);r&&r.name?ot.chatManager.addDamageMessage(`Você recebeu ${n.damage} de dano de ${r.name}!`):ot.chatManager.addDamageMessage(`Você recebeu ${n.damage} de dano de outro jogador!`)}else ot.chatManager.addDamageMessage(`Você recebeu ${n.damage} de dano!`);if(n.sourceId===it||n.targetType==="monster"||n.targetType==="player"&&n.targetId!==it){if(console.log(`[DEBUG] Você causou ${n.damage} de dano em ${n.targetType} ${n.targetId}!`),n.targetType==="monster"){let r=n.targetName||"monstro";ot.chatManager.addDamageMessage(`Você causou ${n.damage} de dano no ${r}!`)}else if(n.targetType==="player"&&n.targetId!==it){let r="jogador";const o=qe.getPlayerData(n.targetId);o&&o.name?r=o.name:r=`Jogador ${n.targetId.substring(0,6)}`,ot.chatManager.addDamageMessage(`Você causou ${n.damage} de dano em ${r}!`)}}}if(e&&n.abilityId&&(n.abilityId===4&&Ud(e,nt,"burn"),n.abilityId===3&&Ud(e,nt,"freeze")),Tt===n.targetId&&Bt===n.targetType){let r=null;n.targetType==="monster"?(r=st.getMonsterData(n.targetId)||{},r.id=n.targetId,r.monsterType=r.monsterType||n.monsterType,r.stats=r.stats||{},r.stats.hp=n.remainingHp??n.hp??r.stats.hp,r.stats.maxHp=n.maxHp??r.stats.maxHp,pn(bi(r,"monster"))):n.targetType==="player"&&(r=qe.getPlayerData(n.targetId)||{},r.id=n.targetId,r.stats=r.stats||{},r.stats.hp=n.remainingHp??n.hp??r.stats.hp,r.stats.maxHp=n.maxHp??r.stats.maxHp,r.stats.mana=n.remainingMana??r.stats.mana,r.stats.maxMana=n.maxMana??r.stats.maxMana,r.name=r.name||n.name,pn(bi(r,"player")))}}catch(e){console.error("Erro ao processar evento DAMAGE_DEALT:",e)}}),Ge.on(ut.COMBAT.FLOATING_TEXT,n=>{try{if(!n||!n.text||!n.position)return;An.createFloatingText({text:n.text,position:n.position,color:n.color||"#ffffff",size:n.size||1,duration:n.duration||2e3,type:n.type||"default"})}catch(e){console.error("Erro ao processar evento de texto flutuante:",e)}}),Ge.on(ut.PLAYER.DEATH,n=>{try{if(!n||!n.id)return;n.id===it&&(ot.showDeathMessage(!0),Y&&Y.userData&&Y.userData.stats&&(Y.userData.stats.hp=0));const e=qe.getPlayer(n.id);e&&(e.userData&&e.userData.stats&&(e.userData.stats.hp=0),e.rotation.x=Math.PI/2,e.position.y=.1,e.material&&(e.material.opacity=.7,e.material.transparent=!0)),Tt===n.id&&Bt==="player"&&n.id!==it&&(Tt=null,Bt=null,pn(null),Is(null))}catch(e){console.error("Erro ao processar evento de morte:",e)}}),Ge.on(ut.PLAYER.RESPAWN,n=>{try{if(!n)return;if(n.id===it)Y.position.set(n.position.x,n.position.y,n.position.z),Y.rotation.x=0,Y.material&&(Y.material.opacity=1),n.stats&&ot.update(n.stats,n.level||1,"Mago"),ot.showDeathMessage(!1);else{const e=qe.getPlayer(n.id);e&&(e.rotation.x=0,e.position.y=0,e.material&&(e.material.opacity=1))}n.position&&An.createFloatingText({text:"Respawn!",position:n.position,color:"#00ffff",size:1.5,duration:3e3,type:"default"})}catch(e){console.error("Erro ao processar evento de respawn:",e)}}),Ge.on(ut.PLAYER.SYNC_RESPONSE,n=>{var e,t;try{if(console.log("Sincronização recebida:",`Mana: ${(e=n.mana)==null?void 0:e.toFixed(1)}/${(t=n.maxMana)==null?void 0:t.toFixed(1)}`,`Cooldowns: ${Object.keys(n.cooldowns||{}).length}`),Y&&Y.userData&&n.mana!==void 0){const i=Y.userData.stats.mana,s=n.mana-i;Math.abs(s)>1&&console.log(`Mana atualizada: ${i.toFixed(1)} → ${n.mana.toFixed(1)} (${s>0?"+":""}${s.toFixed(1)})`),Y.userData.stats.mana=n.mana,n.maxMana!==void 0&&(Y.userData.stats.maxMana=n.maxMana),n.hp!==void 0&&(Y.userData.stats.hp=n.hp),n.maxHp!==void 0&&(Y.userData.stats.maxHp=n.maxHp),ot.update(Y.userData.stats,Y.userData.level,"Arcane"),Vt.updateMana(n.mana)}if(n.cooldowns){const i=Date.now(),s=n.timestamp?i-n.timestamp:0;for(const r in n.cooldowns){const a=n.cooldowns[r]+s;Vt.startCooldown(parseInt(r),a);const c=ot.abilitySlots.indexOf(parseInt(r))+1;if(c>0){const l=Math.max(0,a-i);ot.setCooldown(c,l,l)}}}}catch(i){console.error("Erro ao processar sincronização:",i)}}),Ge.on(ut.MONSTER.DEATH,n=>{if(!n||!n.id)return;const e=st.getMonster(n.id);e&&ea(e),setTimeout(()=>{st.removeMonster(n.id)},2e3)}),Ge.on("monster:webShot",n=>{try{const e=st.getMonster(n.sourceId);let t=null;n.targetId===it?t=Y:n.targetType==="player"?t=qe.getPlayer(n.targetId):n.targetType==="monster"&&(t=st.getMonster(n.targetId)),e&&t&&gE(e,t,nt)}catch(e){console.error("Erro ao processar monster:webShot:",e)}}),Ge.on("monster:spiderLeap",n=>{try{const e=st.getMonster(n.sourceId);e&&_E(e,n.targetPos,nt)}catch(e){console.error("Erro ao processar monster:spiderLeap:",e)}})}let Nd=0;const Bw=2e3;function zw(){const n=Date.now();n-Nd<Bw||Ge&&Ge.readyState===1&&(console.log("Solicitando sincronização com servidor..."),Ge.emit(ut.PLAYER.SYNC_REQUEST),Nd=n)}const kw=Xn;Xn=function(){Y&&it&&zw(),kw()};function bi(n,e){var r,o,a,c,l;let t=((r=n.stats)==null?void 0:r.hp)??n.hp??0,i=((o=n.stats)==null?void 0:o.maxHp)??n.maxHp??0,s=n.name||n.monsterType||"???";return e==="monster"&&n.monsterType&&kl[n.monsterType]&&(s=kl[n.monsterType].NAME),{id:n.id,type:e,name:s,hp:t,maxHp:i,energy:((a=n.stats)==null?void 0:a.mana)||n.energy||0,maxEnergy:((c=n.stats)==null?void 0:c.maxMana)||n.maxEnergy||0,status:[...(l=n.status)!=null&&l.slowedUntil&&n.status.slowedUntil>Date.now()?[{icon:"❄️",alt:"Slow",tooltip:"Lento (movimento reduzido)"}]:[]]}}function pn(n){const e=document.querySelector(".target-ui");if(!e||!n){e&&(e.style.display="none");return}if(n.hp<=0&&!(n.type==="player"&&n.id===it)){Tt=null,Bt=null,Is(null),e.style.display="none";return}e.style.display="block",e.querySelector(".target-icon").textContent=n.type==="player"?"👤":"👹",e.querySelector(".target-name").textContent=n.name;const t=n.hp/n.maxHp*100;e.querySelector(".hp-fill").style.width=t+"%",e.querySelector(".hp-text").textContent=`${n.hp} / ${n.maxHp}`;const i=e.querySelector(".mana-bar");if(n.maxEnergy){i.style.display="block";const r=n.energy/n.maxEnergy*100;e.querySelector(".mana-fill").style.width=r+"%",e.querySelector(".mana-text").textContent=`${n.energy} / ${n.maxEnergy}`}else i.style.display="none";const s=e.querySelector(".target-status");s.innerHTML="",(n.status||[]).forEach(r=>{if(r.icon.startsWith("http")||r.icon.includes(".")){const o=document.createElement("img");o.src=r.icon,o.alt=r.alt||"",o.title=r.tooltip||"",s.appendChild(o)}else{const o=document.createElement("span");o.textContent=r.icon,o.alt=r.alt||"",o.title=r.tooltip||"",o.style.fontSize="20px",o.style.lineHeight="20px",o.style.cursor="help",s.appendChild(o)}})}let Lc=!1;window.addEventListener("chat:focus",()=>{Lc=!0});window.addEventListener("chat:blur",()=>{Lc=!1});let El=28;const Sl=Math.PI/4.7,Hw=.15;function Gw(){if(!Y)return;const n=new R(Y.position.x,Y.position.y,Y.position.z),e=Math.cos(Sl)*El,t=Math.sin(Sl)*El,i=Math.cos(Sl)*El,s=new R(Y.position.x+e*.7,Y.position.y+t,Y.position.z+i*.7);Rt.position.distanceTo(s)>8?Rt.position.copy(s):Rt.position.lerp(s,Hw),Rt.lookAt(n)}function Ud(n,e,t){n&&(console.log("[StatusVisual] Aplicando status",t,"em mesh:",n),t==="burn"&&(console.log("[StatusVisual] Chamando applyBurnEffect"),iE(n,e)),(t==="freeze"||t==="slow")&&(console.log("[StatusVisual] Chamando applyFreezeEffect"),YM(n,e)))}window.setThreeExposure=n=>{tn.toneMappingExposure=n};let At=null,bl=!1;function xp(n){if(At)return;At=new Mc({width:340}),At.domElement.style.zIndex=1e4,At.domElement.style.position="fixed",At.domElement.style.top="60px",At.domElement.style.right="20px",At.domElement.style.display="none";const e={Exposição:n.toneMappingExposure,"Luz Direcional":n.sunIntensity,"Luz Ambiente":n.ambientIntensity,"Luz Hemisférica":n.hemiIntensity,"Bloom Intensity":window._bloomPass.strength,"Bloom Threshold":window._bloomPass.threshold,"Bloom Radius":window._bloomPass.radius,"Reset Preset Albion":()=>{e.Exposição=1.32,e["Luz Direcional"]=2.2,e["Luz Ambiente"]=.8,e["Luz Hemisférica"]=1.3,e["Bloom Intensity"]=.6,e["Bloom Threshold"]=.85,e["Bloom Radius"]=.4,t(),At.controllersRecursive().forEach(i=>i.updateDisplay())}};function t(){n.toneMappingExposure=e.Exposição,window._threeRenderer.toneMappingExposure=e.Exposição,n.sunIntensity=e["Luz Direcional"],n.ambientIntensity=e["Luz Ambiente"],n.hemiIntensity=e["Luz Hemisférica"],n.sunLight&&(n.sunLight.intensity=e["Luz Direcional"]),n.ambientLight&&(n.ambientLight.intensity=e["Luz Ambiente"]),n.hemisphereLight&&(n.hemisphereLight.intensity=e["Luz Hemisférica"]),window._bloomPass.strength=e["Bloom Intensity"],window._bloomPass.threshold=e["Bloom Threshold"],window._bloomPass.radius=e["Bloom Radius"]}At.add(e,"Exposição",.8,2,.01).onChange(t),At.add(e,"Luz Direcional",.5,4,.01).onChange(t),At.add(e,"Luz Ambiente",0,2,.01).onChange(t),At.add(e,"Luz Hemisférica",0,2,.01).onChange(t),At.add(e,"Bloom Intensity",0,2,.01).onChange(t),At.add(e,"Bloom Threshold",0,1,.01).onChange(t),At.add(e,"Bloom Radius",0,2,.01).onChange(t),At.add(e,"Reset Preset Albion")}window.addEventListener("keydown",n=>{n.key==="F10"&&(bl=!bl,At||xp(an),At&&(At.domElement.style.display=bl?"block":"none"))});setTimeout(()=>{window.worldObjectPresenter&&xp(window.worldObjectPresenter)},2e3);let Pc=!1;function ea(n){n&&(n.material&&(n.material.color.set(8947848),n.material.opacity=.5,n.material.transparent=!0),n.userData._wasGray=!0,n.rotation.x=Math.PI/2,n.position.y=.1)}function ic(n,e=255){n&&(n.material&&(n.material.color.set(e),n.material.opacity=1,n.material.transparent=!1),n.userData._wasGray=!1,n.rotation.x=0,n.position.y=.5)}Ge.on(ut.PLAYER.DEATH,n=>{if(Pc=!0,ot.showDeathModal(n),window.addEventListener("keydown",ta,!0),window.addEventListener("mousedown",ta,!0),setTimeout(()=>{const e=document.getElementById("btn-respawn");e&&(e.onclick=()=>{Ge.emit(ut.PLAYER.RESPAWN)})},100),n.id===it&&Y)ea(Y);else{const e=qe.getPlayer(n.id);e&&ea(e)}});Ge.on(ut.PLAYER.RESPAWN,n=>{if(Pc=!1,ot.hideDeathModal(),window.removeEventListener("keydown",ta,!0),window.removeEventListener("mousedown",ta,!0),n.id===it&&Y)ic(Y,255);else{const e=qe.getPlayer(n.id);e&&ic(e,255)}});Ge.on(ut.MONSTER.DEATH,n=>{if(!n||!n.id)return;const e=st.getMonster(n.id);e&&ea(e),setTimeout(()=>{st.removeMonster(n.id)},2e3)});function ta(n){if(Pc)return n.stopImmediatePropagation(),n.preventDefault(),!1}
