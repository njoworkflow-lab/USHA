(()=>{var zu=0,ec=1,ku=2;var Ch=1,Hu=2,Nn=3,ei=0,Bt=1,Fn=2;var wn=0,rs=1,Tn=2,tc=3,nc=4,Vu=5,Si=100,Gu=101,Wu=102,ic=103,sc=104,Xu=200,qu=201,Yu=202,$u=203,So=204,Eo=205,Zu=206,Ju=207,Ku=208,ju=209,Qu=210,ed=211,td=212,nd=213,id=214,sd=0,rd=1,ad=2,Hr=3,od=4,ld=5,cd=6,hd=7,Ph=0,ud=1,dd=2,jn=0,ul=1,dl=2,fl=3,js=4,fd=5,pl=6;var Lh=300,ls=301,cs=302,wo=303,To=304,ma=306,Ao=1e3,mn=1001,Ro=1002,Wt=1003,rc=1004;var Wa=1005;var rn=1006,pd=1007;var Vs=1008;var Qn=1009,md=1010,gd=1011,ml=1012,Ih=1013,Jn=1014,Kn=1015,Kt=1016,Uh=1017,Dh=1018,Ti=1020,_d=1021,gn=1023,vd=1024,xd=1025,Ai=1026,hs=1027,yd=1028,Nh=1029,Md=1030,Fh=1031,Oh=1033,Xa=33776,qa=33777,Ya=33778,$a=33779,ac=35840,oc=35841,lc=35842,cc=35843,Bh=36196,hc=37492,uc=37496,dc=37808,fc=37809,pc=37810,mc=37811,gc=37812,_c=37813,vc=37814,xc=37815,yc=37816,Mc=37817,bc=37818,Sc=37819,Ec=37820,wc=37821,Za=36492,Tc=36494,Ac=36495,bd=36283,Rc=36284,Cc=36285,Pc=36286;var Vr=2300,Gr=2301,Ja=2302,Lc=2400,Ic=2401,Uc=2402;var zh=3e3,Ri=3001,Sd=3200,Ed=3201,kh=0,wd=1,an="",St="srgb",zn="srgb-linear",gl="display-p3",ga="display-p3-linear",Wr="linear",et="srgb",Xr="rec709",qr="p3";var Oi=7680;var Dc=519,Td=512,Ad=513,Rd=514,Hh=515,Cd=516,Pd=517,Ld=518,Id=519,Co=35044;var Nc="300 es",Po=1035,On=2e3,Yr=2001,ti=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fc=1234567,Bs=Math.PI/180,Gs=180/Math.PI;function Bn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Ft(i,e,t){return Math.max(e,Math.min(t,i))}function _l(i,e){return(i%e+e)%e}function Ud(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Dd(i,e,t){return i!==e?(t-i)/(e-i):0}function zs(i,e,t){return(1-t)*i+t*e}function Nd(i,e,t,n){return zs(i,e,1-Math.exp(-t*n))}function Fd(i,e=1){return e-Math.abs(_l(i,e*2)-e)}function Od(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Bd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function zd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function kd(i,e){return i+Math.random()*(e-i)}function Hd(i){return i*(.5-Math.random())}function Vd(i){i!==void 0&&(Fc=i);let e=Fc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gd(i){return i*Bs}function Wd(i){return i*Gs}function Lo(i){return(i&i-1)===0&&i!==0}function Xd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $r(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qd(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qe(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Qs={DEG2RAD:Bs,RAD2DEG:Gs,generateUUID:Bn,clamp:Ft,euclideanModulo:_l,mapLinear:Ud,inverseLerp:Dd,lerp:zs,damp:Nd,pingpong:Fd,smoothstep:Od,smootherstep:Bd,randInt:zd,randFloat:kd,randFloatSpread:Hd,seededRandom:Vd,degToRad:Gd,radToDeg:Wd,isPowerOfTwo:Lo,ceilPowerOfTwo:Xd,floorPowerOfTwo:$r,setQuaternionFromProperEuler:qd,normalize:Qe,denormalize:Sn},ve=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qe=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],v=s[0],p=s[3],d=s[6],M=s[1],_=s[4],T=s[7],C=s[2],A=s[5],w=s[8];return r[0]=o*v+a*M+l*C,r[3]=o*p+a*_+l*A,r[6]=o*d+a*T+l*w,r[1]=c*v+h*M+u*C,r[4]=c*p+h*_+u*A,r[7]=c*d+h*T+u*w,r[2]=f*v+m*M+g*C,r[5]=f*p+m*_+g*A,r[8]=f*d+m*T+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,m=c*r-o*l,g=t*u+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ka.makeScale(e,t)),this}rotate(e){return this.premultiply(Ka.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ka.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ka=new qe;function Vh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yd(){let i=Zr("canvas");return i.style.display="block",i}var Oc={};function ks(i){i in Oc||(Oc[i]=!0,console.warn(i))}var Bc=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zc=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fr={[zn]:{transfer:Wr,primaries:Xr,toReference:i=>i,fromReference:i=>i},[St]:{transfer:et,primaries:Xr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ga]:{transfer:Wr,primaries:qr,toReference:i=>i.applyMatrix3(zc),fromReference:i=>i.applyMatrix3(Bc)},[gl]:{transfer:et,primaries:qr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(zc),fromReference:i=>i.applyMatrix3(Bc).convertLinearToSRGB()}},$d=new Set([zn,ga]),Ze={enabled:!0,_workingColorSpace:zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!$d.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=fr[e].toReference,s=fr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return fr[i].primaries},getTransfer:function(i){return i===an?Wr:fr[i].transfer}};function as(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ja(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Bi,Jr=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bi===void 0&&(Bi=Zr("canvas")),Bi.width=e.width,Bi.height=e.height;let n=Bi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=as(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(as(t[n]/255)*255):t[n]=as(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Zd=0,Kr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Bn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qa(s[o].image)):r.push(Qa(s[o]))}else r=Qa(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Qa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Jd=0,on=class i extends ti{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=mn,s=mn,r=rn,o=Vs,a=gn,l=Qn,c=i.DEFAULT_ANISOTROPY,h=an){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Bn(),this.name="",this.source=new Kr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ri?St:an),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ao:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case Ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ao:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case Ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===St?Ri:zh}set encoding(e){ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ri?St:an}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Lh;on.DEFAULT_ANISOTROPY=1;var ot=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,T=(m+1)/2,C=(d+1)/2,A=(h+f)/4,w=(u+v)/4,L=(g+p)/4;return _>T&&_>C?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=w/n):T>C?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=A/s,r=L/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=w/r,s=L/r),this.set(n,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-v)/M,this.z=(f-h)/M,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Io=class extends ti{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(ks("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ri?St:an),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new on(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Kr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pt=class extends Io{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},jr=class extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Uo=class extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ni=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==m||h!==g){let p=1-a,d=l*f+c*m+h*g+u*v,M=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){let C=Math.sqrt(_),A=Math.atan2(C,d*M);p=Math.sin(p*A)/C,a=Math.sin(a*A)/C}let T=a*M;if(l=l*p+f*T,c=c*p+m*T,h=h*p+g*T,u=u*p+v*T,p===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*m-c*f,e[t+1]=l*g+h*f+c*u-a*m,e[t+2]=c*g+h*m+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return eo.copy(this).projectOnVector(e),this.sub(eo)}reflect(e){return this.sub(eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},eo=new R,kc=new ni,Ci=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)),pr.applyMatrix4(e.matrixWorld),this.union(pr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ps),mr.subVectors(this.max,Ps),zi.subVectors(e.a,Ps),ki.subVectors(e.b,Ps),Hi.subVectors(e.c,Ps),Xn.subVectors(ki,zi),qn.subVectors(Hi,ki),vi.subVectors(zi,Hi);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-vi.z,vi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,vi.z,0,-vi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-vi.y,vi.x,0];return!to(t,zi,ki,Hi,mr)||(t=[1,0,0,0,1,0,0,0,1],!to(t,zi,ki,Hi,mr))?!1:(gr.crossVectors(Xn,qn),t=[gr.x,gr.y,gr.z],to(t,zi,ki,Hi,mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Pn=[new R,new R,new R,new R,new R,new R,new R,new R],dn=new R,pr=new Ci,zi=new R,ki=new R,Hi=new R,Xn=new R,qn=new R,vi=new R,Ps=new R,mr=new R,gr=new R,xi=new R;function to(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){xi.fromArray(i,r);let a=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Kd=new Ci,Ls=new R,no=new R,us=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Kd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);let t=Ls.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ls,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(no.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(no)),this.expandByPoint(Ls.copy(e.center).sub(no))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ln=new R,io=new R,_r=new R,Yn=new R,so=new R,vr=new R,ro=new R,Ws=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){io.copy(e).add(t).multiplyScalar(.5),_r.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(io);let r=e.distanceTo(t)*.5,o=-this.direction.dot(_r),a=Yn.dot(this.direction),l=-Yn.dot(_r),c=Yn.lengthSq(),h=Math.abs(1-o*o),u,f,m,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let v=1/h;u*=v,f*=v,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(io).addScaledVector(_r,f),m}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);let n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,n,s,r){so.subVectors(t,e),vr.subVectors(n,e),ro.crossVectors(so,vr);let o=this.direction.dot(ro),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,e);let l=a*this.direction.dot(vr.crossVectors(Yn,vr));if(l<0)return null;let c=a*this.direction.dot(so.cross(Yn));if(c<0||l+c>o)return null;let h=-a*Yn.dot(ro);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,f,m,g,v,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,m,g,v,p)}set(e,t,n,s,r,o,a,l,c,h,u,f,m,g,v,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Vi.setFromMatrixColumn(e,0).length(),r=1/Vi.setFromMatrixColumn(e,1).length(),o=1/Vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,m=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,m=l*u,g=c*h,v=c*u;t[0]=f+v*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,m=l*u,g=c*h,v=c*u;t[0]=f-v*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,m=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+g,t[10]=f-v*u}else if(e.order==="XZY"){let f=o*l,m=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jd,e,Qd)}lookAt(e,t,n){let s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),$n.crossVectors(n,Zt),$n.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),$n.crossVectors(n,Zt)),$n.normalize(),xr.crossVectors(Zt,$n),s[0]=$n.x,s[4]=xr.x,s[8]=Zt.x,s[1]=$n.y,s[5]=xr.y,s[9]=Zt.y,s[2]=$n.z,s[6]=xr.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],v=n[6],p=n[10],d=n[14],M=n[3],_=n[7],T=n[11],C=n[15],A=s[0],w=s[4],L=s[8],y=s[12],E=s[1],O=s[5],q=s[9],te=s[13],U=s[2],B=s[6],V=s[10],Y=s[14],X=s[3],G=s[7],J=s[11],ee=s[15];return r[0]=o*A+a*E+l*U+c*X,r[4]=o*w+a*O+l*B+c*G,r[8]=o*L+a*q+l*V+c*J,r[12]=o*y+a*te+l*Y+c*ee,r[1]=h*A+u*E+f*U+m*X,r[5]=h*w+u*O+f*B+m*G,r[9]=h*L+u*q+f*V+m*J,r[13]=h*y+u*te+f*Y+m*ee,r[2]=g*A+v*E+p*U+d*X,r[6]=g*w+v*O+p*B+d*G,r[10]=g*L+v*q+p*V+d*J,r[14]=g*y+v*te+p*Y+d*ee,r[3]=M*A+_*E+T*U+C*X,r[7]=M*w+_*O+T*B+C*G,r[11]=M*L+_*q+T*V+C*J,r[15]=M*y+_*te+T*Y+C*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],g=e[3],v=e[7],p=e[11],d=e[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*m-n*l*m)+v*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*h-r*l*h)+p*(+t*c*u-t*a*m-r*o*u+n*o*m+r*a*h-n*c*h)+d*(-s*a*h-t*l*u+t*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],g=e[12],v=e[13],p=e[14],d=e[15],M=u*p*c-v*f*c+v*l*m-a*p*m-u*l*d+a*f*d,_=g*f*c-h*p*c-g*l*m+o*p*m+h*l*d-o*f*d,T=h*v*c-g*u*c+g*a*m-o*v*m-h*a*d+o*u*d,C=g*u*l-h*v*l-g*a*f+o*v*f+h*a*p-o*u*p,A=t*M+n*_+s*T+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/A;return e[0]=M*w,e[1]=(v*f*r-u*p*r-v*s*m+n*p*m+u*s*d-n*f*d)*w,e[2]=(a*p*r-v*l*r+v*s*c-n*p*c-a*s*d+n*l*d)*w,e[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*m-n*l*m)*w,e[4]=_*w,e[5]=(h*p*r-g*f*r+g*s*m-t*p*m-h*s*d+t*f*d)*w,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*d-t*l*d)*w,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*m+t*l*m)*w,e[8]=T*w,e[9]=(g*u*r-h*v*r-g*n*m+t*v*m+h*n*d-t*u*d)*w,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*d+t*a*d)*w,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*m-t*a*m)*w,e[12]=C*w,e[13]=(h*v*s-g*u*s+g*n*f-t*v*f-h*n*p+t*u*p)*w,e[14]=(g*a*s-o*v*s-g*n*l+t*v*l+o*n*p-t*a*p)*w,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*f+t*a*f)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,m=r*h,g=r*u,v=o*h,p=o*u,d=a*u,M=l*c,_=l*h,T=l*u,C=n.x,A=n.y,w=n.z;return s[0]=(1-(v+d))*C,s[1]=(m+T)*C,s[2]=(g-_)*C,s[3]=0,s[4]=(m-T)*A,s[5]=(1-(f+d))*A,s[6]=(p+M)*A,s[7]=0,s[8]=(g+_)*w,s[9]=(p-M)*w,s[10]=(1-(f+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Vi.set(s[0],s[1],s[2]).length(),o=Vi.set(s[4],s[5],s[6]).length(),a=Vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],fn.copy(this);let c=1/r,h=1/o,u=1/a;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,t.setFromRotationMatrix(fn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=On){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),m,g;if(a===On)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Yr)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=On){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*c,m=(n+s)*h,g,v;if(a===On)g=(o+r)*u,v=-2*u;else if(a===Yr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Vi=new R,fn=new ht,jd=new R(0,0,0),Qd=new R(1,1,1),$n=new R,xr=new R,Zt=new R,Hc=new ht,Vc=new ni,Qr=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vc.setFromEuler(this),this.setFromQuaternion(Vc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qr.DEFAULT_ORDER="XYZ";var Xs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ef=0,Gc=new R,Gi=new ni,In=new ht,yr=new R,Is=new R,tf=new R,nf=new ni,Wc=new R(1,0,0),Xc=new R(0,1,0),qc=new R(0,0,1),sf={type:"added"},rf={type:"removed"},zt=class i extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new Qr,n=new ni,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new qe}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(Wc,e)}rotateY(e){return this.rotateOnAxis(Xc,e)}rotateZ(e){return this.rotateOnAxis(qc,e)}translateOnAxis(e,t){return Gc.copy(e).applyQuaternion(this.quaternion),this.position.add(Gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wc,e)}translateY(e){return this.translateOnAxis(Xc,e)}translateZ(e){return this.translateOnAxis(qc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yr.copy(e):yr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Is,yr,this.up):In.lookAt(yr,Is,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(In),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(sf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,tf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,nf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};zt.DEFAULT_UP=new R(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pn=new R,Un=new R,ao=new R,Dn=new R,Wi=new R,Xi=new R,Yc=new R,oo=new R,lo=new R,co=new R,Mr=!1,wi=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),pn.subVectors(e,t),s.cross(pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){pn.subVectors(s,t),Un.subVectors(n,t),ao.subVectors(e,t);let o=pn.dot(pn),a=pn.dot(Un),l=pn.dot(ao),c=Un.dot(Un),h=Un.dot(ao),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(e,t,n,s,r,o,a,l){return Mr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mr=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(a,Dn.z),l)}static isFrontFacing(e,t,n,s){return pn.subVectors(n,t),Un.subVectors(e,t),pn.cross(Un).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),pn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Mr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mr=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Wi.subVectors(s,n),Xi.subVectors(r,n),oo.subVectors(e,n);let l=Wi.dot(oo),c=Xi.dot(oo);if(l<=0&&c<=0)return t.copy(n);lo.subVectors(e,s);let h=Wi.dot(lo),u=Xi.dot(lo);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Wi,o);co.subVectors(e,r);let m=Wi.dot(co),g=Xi.dot(co);if(g>=0&&m<=g)return t.copy(r);let v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Xi,a);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Yc.subVectors(r,s),a=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(Yc,a);let d=1/(p+v+f);return o=v*d,a=f*d,t.copy(n).addScaledVector(Wi,o).addScaledVector(Xi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},br={h:0,s:0,l:0};function ho(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=_l(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ho(o,r,e+1/3),this.g=ho(o,r,e),this.b=ho(o,r,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let n=Gh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}copyLinearToSRGB(e){return this.r=ja(e.r),this.g=ja(e.g),this.b=ja(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return Ze.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Ft(Nt.r*255,0,255))*65536+Math.round(Ft(Nt.g*255,0,255))*256+Math.round(Ft(Nt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Nt.copy(this),t);let n=Nt.r,s=Nt.g,r=Nt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=St){Ze.fromWorkingColorSpace(Nt.copy(this),e);let t=Nt.r,n=Nt.g,s=Nt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(br);let n=zs(Zn.h,br.h,t),s=zs(Zn.s,br.s,t),r=zs(Zn.l,br.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nt=new xe;xe.NAMES=Gh;var af=0,kn=class extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=rs,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=So,this.blendDst=Eo,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==So&&(n.blendSrc=this.blendSrc),this.blendDst!==Eo&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Yt=class extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var _t=new R,Sr=new ve,st=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Co,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXY(t,Sr.x,Sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Co&&(e.usage=this.usage),e}};var ea=class extends st{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ta=class extends st{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ct=class extends st{constructor(e,t,n){super(new Float32Array(e),t,n)}};var of=0,sn=new ht,uo=new zt,qi=new R,Jt=new Ci,Us=new Ci,Rt=new R,Lt=class i extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vh(e)?ta:ea)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return uo.lookAt(e),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Us.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(Jt.min,Us.min),Jt.expandByPoint(Rt),Rt.addVectors(Jt.max,Us.max),Jt.expandByPoint(Rt)):(Jt.expandByPoint(Us.min),Jt.expandByPoint(Us.max))}Jt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Rt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Rt.fromBufferAttribute(a,c),l&&(qi.fromBufferAttribute(e,c),Rt.add(qi)),s=Math.max(s,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new st(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new R,h[E]=new R;let u=new R,f=new R,m=new R,g=new ve,v=new ve,p=new ve,d=new R,M=new R;function _(E,O,q){u.fromArray(s,E*3),f.fromArray(s,O*3),m.fromArray(s,q*3),g.fromArray(o,E*2),v.fromArray(o,O*2),p.fromArray(o,q*2),f.sub(u),m.sub(u),v.sub(g),p.sub(g);let te=1/(v.x*p.y-p.x*v.y);isFinite(te)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(te),M.copy(m).multiplyScalar(v.x).addScaledVector(f,-p.x).multiplyScalar(te),c[E].add(d),c[O].add(d),c[q].add(d),h[E].add(M),h[O].add(M),h[q].add(M))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let E=0,O=T.length;E<O;++E){let q=T[E],te=q.start,U=q.count;for(let B=te,V=te+U;B<V;B+=3)_(n[B+0],n[B+1],n[B+2])}let C=new R,A=new R,w=new R,L=new R;function y(E){w.fromArray(r,E*3),L.copy(w);let O=c[E];C.copy(O),C.sub(w.multiplyScalar(w.dot(O))).normalize(),A.crossVectors(L,O);let te=A.dot(h[E])<0?-1:1;l[E*4]=C.x,l[E*4+1]=C.y,l[E*4+2]=C.z,l[E*4+3]=te}for(let E=0,O=T.length;E<O;++E){let q=T[E],te=q.start,U=q.count;for(let B=te,V=te+U;B<V;B+=3)y(n[B+0]),y(n[B+1]),y(n[B+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new st(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let f=0,m=e.count;f<m;f+=3){let g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),m=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new st(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$c=new ht,yi=new Ws,Er=new us,Zc=new R,Yi=new R,$i=new R,Zi=new R,fo=new R,wr=new R,Tr=new ve,Ar=new ve,Rr=new ve,Jc=new R,Kc=new R,jc=new R,Cr=new R,Pr=new R,pt=class extends zt{constructor(e=new Lt,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(fo.fromBufferAttribute(u,e),o?wr.addScaledVector(fo,h):wr.addScaledVector(fo.sub(t),h))}t.add(wr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(r),yi.copy(e.ray).recast(e.near),!(Er.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Er,Zc)===null||yi.origin.distanceToSquared(Zc)>(e.far-e.near)**2))&&($c.copy(r).invert(),yi.copy(e.ray).applyMatrix4($c),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let p=f[g],d=o[p.materialIndex],M=Math.max(p.start,m.start),_=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let T=M,C=_;T<C;T+=3){let A=a.getX(T),w=a.getX(T+1),L=a.getX(T+2);s=Lr(this,d,e,n,c,h,u,A,w,L),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){let M=a.getX(p),_=a.getX(p+1),T=a.getX(p+2);s=Lr(this,o,e,n,c,h,u,M,_,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let p=f[g],d=o[p.materialIndex],M=Math.max(p.start,m.start),_=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=M,C=_;T<C;T+=3){let A=T,w=T+1,L=T+2;s=Lr(this,d,e,n,c,h,u,A,w,L),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){let M=p,_=p+1,T=p+2;s=Lr(this,o,e,n,c,h,u,M,_,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function lf(i,e,t,n,s,r,o,a){let l;if(e.side===Bt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ei,a),l===null)return null;Pr.copy(a),Pr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Pr);return c<t.near||c>t.far?null:{distance:c,point:Pr.clone(),object:i}}function Lr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Yi),i.getVertexPosition(l,$i),i.getVertexPosition(c,Zi);let h=lf(i,e,t,n,Yi,$i,Zi,Cr);if(h){s&&(Tr.fromBufferAttribute(s,a),Ar.fromBufferAttribute(s,l),Rr.fromBufferAttribute(s,c),h.uv=wi.getInterpolation(Cr,Yi,$i,Zi,Tr,Ar,Rr,new ve)),r&&(Tr.fromBufferAttribute(r,a),Ar.fromBufferAttribute(r,l),Rr.fromBufferAttribute(r,c),h.uv1=wi.getInterpolation(Cr,Yi,$i,Zi,Tr,Ar,Rr,new ve),h.uv2=h.uv1),o&&(Jc.fromBufferAttribute(o,a),Kc.fromBufferAttribute(o,l),jc.fromBufferAttribute(o,c),h.normal=wi.getInterpolation(Cr,Yi,$i,Zi,Jc,Kc,jc,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new R,materialIndex:0};wi.getNormal(Yi,$i,Zi,u.normal),h.face=u}return h}var Pi=class i extends Lt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(u,2));function g(v,p,d,M,_,T,C,A,w,L,y){let E=T/w,O=C/L,q=T/2,te=C/2,U=A/2,B=w+1,V=L+1,Y=0,X=0,G=new R;for(let J=0;J<V;J++){let ee=J*O-te;for(let le=0;le<B;le++){let H=le*E-q;G[v]=H*M,G[p]=ee*_,G[d]=U,c.push(G.x,G.y,G.z),G[v]=0,G[p]=0,G[d]=A>0?1:-1,h.push(G.x,G.y,G.z),u.push(le/w),u.push(1-J/L),Y+=1}}for(let J=0;J<L;J++)for(let ee=0;ee<w;ee++){let le=f+ee+B*J,H=f+ee+B*(J+1),$=f+(ee+1)+B*(J+1),re=f+(ee+1)+B*J;l.push(le,H,re),l.push(H,$,re),X+=6}a.addGroup(m,X,y),m+=X,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ds(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Gt(i){let e={};for(let t=0;t<i.length;t++){let n=ds(i[t]);for(let s in n)e[s]=n[s]}return e}function cf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wh(i){return i.getRenderTarget()===null?i.outputColorSpace:Ze.workingColorSpace}var si={clone:ds,merge:Gt},hf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,lt=class extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hf,this.fragmentShader=uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=cf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},na=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=On}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ot=class extends na{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ji=-90,Ki=1,Do=class extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ot(Ji,Ki,e,t);s.layers=this.layers,this.add(s);let r=new Ot(Ji,Ki,e,t);r.layers=this.layers,this.add(r);let o=new Ot(Ji,Ki,e,t);o.layers=this.layers,this.add(o);let a=new Ot(Ji,Ki,e,t);a.layers=this.layers,this.add(a);let l=new Ot(Ji,Ki,e,t);l.layers=this.layers,this.add(l);let c=new Ot(Ji,Ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ia=class extends on{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ls,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},No=class extends Pt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(ks("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ri?St:an),this.texture=new ia(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pi(5,5,5),r=new lt({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:wn});r.uniforms.tEquirect.value=t;let o=new pt(s,r),a=t.minFilter;return t.minFilter===Vs&&(t.minFilter=rn),new Do(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},po=new R,df=new R,ff=new qe,qt=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=po.subVectors(n,t).cross(df.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(po),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ff.getNormalMatrix(e),s=this.coplanarPoint(po).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Mi=new us,Ir=new R,qs=class{constructor(e=new qt,t=new qt,n=new qt,s=new qt,r=new qt,o=new qt){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],m=s[8],g=s[9],v=s[10],p=s[11],d=s[12],M=s[13],_=s[14],T=s[15];if(n[0].setComponents(l-r,f-c,p-m,T-d).normalize(),n[1].setComponents(l+r,f+c,p+m,T+d).normalize(),n[2].setComponents(l+o,f+h,p+g,T+M).normalize(),n[3].setComponents(l-o,f-h,p-g,T-M).normalize(),n[4].setComponents(l-a,f-u,p-v,T-_).normalize(),t===On)n[5].setComponents(l+a,f+u,p+v,T+_).normalize();else if(t===Yr)n[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ir.x=s.normal.x>0?e.max.x:e.min.x,Ir.y=s.normal.y>0?e.max.y:e.min.y,Ir.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Xh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function pf(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,f=c.usage,m=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),c.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){let f=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),m.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let v=0,p=g.length;v<p;v++){let d=g[v];t?i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var ii=class i extends Lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,m=[],g=[],v=[],p=[];for(let d=0;d<h;d++){let M=d*f-o;for(let _=0;_<c;_++){let T=_*u-r;g.push(T,-M,0),v.push(0,0,1),p.push(_/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){let _=M+c*d,T=M+c*(d+1),C=M+1+c*(d+1),A=M+1+c*d;m.push(_,T,A),m.push(T,C,A)}this.setIndex(m),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(v,3)),this.setAttribute("uv",new Ct(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gf=`#ifdef USE_ALPHAHASH
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
#endif`,_f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mf=`#ifdef USE_AOMAP
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
#endif`,bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,wf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Af=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rf=`#ifdef USE_IRIDESCENCE
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
#endif`,Cf=`#ifdef USE_BUMPMAP
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
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bf=`#define PI 3.141592653589793
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
} // validated`,zf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,kf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",qf=`
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
}`,Yf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,np=`#ifdef USE_GRADIENTMAP
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
}`,ip=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,op=`uniform bool receiveShadow;
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
#endif`,lp=`#ifdef USE_ENVMAP
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
#endif`,cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fp=`PhysicalMaterial material;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pp=`struct PhysicalMaterial {
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
}`,mp=`
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
#endif`,gp=`#if defined( RE_IndirectDiffuse )
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Mp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wp=`#if defined( USE_POINTS_UV )
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
#endif`,Tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ap=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cp=`#ifdef USE_MORPHNORMALS
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
#endif`,Pp=`#ifdef USE_MORPHTARGETS
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
#endif`,Lp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Up=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Op=`#ifdef USE_NORMALMAP
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
#endif`,Bp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qp=`float getShadowMask() {
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
}`,em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,om=`#ifndef saturate
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lm=`#ifdef USE_TRANSMISSION
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
#endif`,cm=`#ifdef USE_TRANSMISSION
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mm=`uniform sampler2D t2D;
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,Mm=`#if DEPTH_PACKING == 3200
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
}`,bm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,Sm=`#define DISTANCE
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`uniform float scale;
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
}`,Am=`uniform vec3 diffuse;
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
}`,Rm=`#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Pm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,Lm=`#define LAMBERT
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
}`,Im=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,Um=`#define MATCAP
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
}`,Dm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,Nm=`#define NORMAL
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
}`,Fm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,Om=`#define PHONG
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
}`,Bm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,zm=`#define STANDARD
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
}`,km=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,Hm=`#define TOON
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
}`,Vm=`uniform float size;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Wm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
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
}`,Xm=`uniform vec3 color;
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
}`,qm=`uniform float rotation;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:mf,alphahash_pars_fragment:gf,alphamap_fragment:_f,alphamap_pars_fragment:vf,alphatest_fragment:xf,alphatest_pars_fragment:yf,aomap_fragment:Mf,aomap_pars_fragment:bf,batching_pars_vertex:Sf,batching_vertex:Ef,begin_vertex:wf,beginnormal_vertex:Tf,bsdfs:Af,iridescence_fragment:Rf,bumpmap_pars_fragment:Cf,clipping_planes_fragment:Pf,clipping_planes_pars_fragment:Lf,clipping_planes_pars_vertex:If,clipping_planes_vertex:Uf,color_fragment:Df,color_pars_fragment:Nf,color_pars_vertex:Ff,color_vertex:Of,common:Bf,cube_uv_reflection_fragment:zf,defaultnormal_vertex:kf,displacementmap_pars_vertex:Hf,displacementmap_vertex:Vf,emissivemap_fragment:Gf,emissivemap_pars_fragment:Wf,colorspace_fragment:Xf,colorspace_pars_fragment:qf,envmap_fragment:Yf,envmap_common_pars_fragment:$f,envmap_pars_fragment:Zf,envmap_pars_vertex:Jf,envmap_physical_pars_fragment:lp,envmap_vertex:Kf,fog_vertex:jf,fog_pars_vertex:Qf,fog_fragment:ep,fog_pars_fragment:tp,gradientmap_pars_fragment:np,lightmap_fragment:ip,lightmap_pars_fragment:sp,lights_lambert_fragment:rp,lights_lambert_pars_fragment:ap,lights_pars_begin:op,lights_toon_fragment:cp,lights_toon_pars_fragment:hp,lights_phong_fragment:up,lights_phong_pars_fragment:dp,lights_physical_fragment:fp,lights_physical_pars_fragment:pp,lights_fragment_begin:mp,lights_fragment_maps:gp,lights_fragment_end:_p,logdepthbuf_fragment:vp,logdepthbuf_pars_fragment:xp,logdepthbuf_pars_vertex:yp,logdepthbuf_vertex:Mp,map_fragment:bp,map_pars_fragment:Sp,map_particle_fragment:Ep,map_particle_pars_fragment:wp,metalnessmap_fragment:Tp,metalnessmap_pars_fragment:Ap,morphcolor_vertex:Rp,morphnormal_vertex:Cp,morphtarget_pars_vertex:Pp,morphtarget_vertex:Lp,normal_fragment_begin:Ip,normal_fragment_maps:Up,normal_pars_fragment:Dp,normal_pars_vertex:Np,normal_vertex:Fp,normalmap_pars_fragment:Op,clearcoat_normal_fragment_begin:Bp,clearcoat_normal_fragment_maps:zp,clearcoat_pars_fragment:kp,iridescence_pars_fragment:Hp,opaque_fragment:Vp,packing:Gp,premultiplied_alpha_fragment:Wp,project_vertex:Xp,dithering_fragment:qp,dithering_pars_fragment:Yp,roughnessmap_fragment:$p,roughnessmap_pars_fragment:Zp,shadowmap_pars_fragment:Jp,shadowmap_pars_vertex:Kp,shadowmap_vertex:jp,shadowmask_pars_fragment:Qp,skinbase_vertex:em,skinning_pars_vertex:tm,skinning_vertex:nm,skinnormal_vertex:im,specularmap_fragment:sm,specularmap_pars_fragment:rm,tonemapping_fragment:am,tonemapping_pars_fragment:om,transmission_fragment:lm,transmission_pars_fragment:cm,uv_pars_fragment:hm,uv_pars_vertex:um,uv_vertex:dm,worldpos_vertex:fm,background_vert:pm,background_frag:mm,backgroundCube_vert:gm,backgroundCube_frag:_m,cube_vert:vm,cube_frag:xm,depth_vert:ym,depth_frag:Mm,distanceRGBA_vert:bm,distanceRGBA_frag:Sm,equirect_vert:Em,equirect_frag:wm,linedashed_vert:Tm,linedashed_frag:Am,meshbasic_vert:Rm,meshbasic_frag:Cm,meshlambert_vert:Pm,meshlambert_frag:Lm,meshmatcap_vert:Im,meshmatcap_frag:Um,meshnormal_vert:Dm,meshnormal_frag:Nm,meshphong_vert:Fm,meshphong_frag:Om,meshphysical_vert:Bm,meshphysical_frag:zm,meshtoon_vert:km,meshtoon_frag:Hm,points_vert:Vm,points_frag:Gm,shadow_vert:Wm,shadow_frag:Xm,sprite_vert:qm,sprite_frag:Ym},ie={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},bn={basic:{uniforms:Gt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Gt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new xe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Gt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Gt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Gt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new xe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Gt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Gt([ie.points,ie.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Gt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Gt([ie.common,ie.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Gt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Gt([ie.sprite,ie.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Gt([ie.common,ie.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Gt([ie.lights,ie.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};bn.physical={uniforms:Gt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var Ur={r:0,b:0,g:0};function $m(i,e,t,n,s,r,o){let a=new xe(0),l=r===!0?0:1,c,h,u=null,f=0,m=null;function g(p,d){let M=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?t:e).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),M=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ma)?(h===void 0&&(h=new pt(new Pi(1,1,1),new lt({name:"BackgroundCubeMaterial",uniforms:ds(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Ze.getTransfer(_.colorSpace)!==et,(u!==_||f!==_.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new pt(new ii(2,2),new lt({name:"BackgroundMaterial",uniforms:ds(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(_.colorSpace)!==et,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,d){p.getRGB(Ur,Wh(i)),n.buffers.color.setClear(Ur.r,Ur.g,Ur.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:g}}function Zm(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null),c=l,h=!1;function u(U,B,V,Y,X){let G=!1;if(o){let J=v(Y,V,B);c!==J&&(c=J,m(c.object)),G=d(U,Y,V,X),G&&M(U,Y,V,X)}else{let J=B.wireframe===!0;(c.geometry!==Y.id||c.program!==V.id||c.wireframe!==J)&&(c.geometry=Y.id,c.program=V.id,c.wireframe=J,G=!0)}X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(G||h)&&(h=!1,L(U,B,V,Y),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(U){return n.isWebGL2?i.bindVertexArray(U):r.bindVertexArrayOES(U)}function g(U){return n.isWebGL2?i.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function v(U,B,V){let Y=V.wireframe===!0,X=a[U.id];X===void 0&&(X={},a[U.id]=X);let G=X[B.id];G===void 0&&(G={},X[B.id]=G);let J=G[Y];return J===void 0&&(J=p(f()),G[Y]=J),J}function p(U){let B=[],V=[],Y=[];for(let X=0;X<s;X++)B[X]=0,V[X]=0,Y[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:Y,object:U,attributes:{},index:null}}function d(U,B,V,Y){let X=c.attributes,G=B.attributes,J=0,ee=V.getAttributes();for(let le in ee)if(ee[le].location>=0){let $=X[le],re=G[le];if(re===void 0&&(le==="instanceMatrix"&&U.instanceMatrix&&(re=U.instanceMatrix),le==="instanceColor"&&U.instanceColor&&(re=U.instanceColor)),$===void 0||$.attribute!==re||re&&$.data!==re.data)return!0;J++}return c.attributesNum!==J||c.index!==Y}function M(U,B,V,Y){let X={},G=B.attributes,J=0,ee=V.getAttributes();for(let le in ee)if(ee[le].location>=0){let $=G[le];$===void 0&&(le==="instanceMatrix"&&U.instanceMatrix&&($=U.instanceMatrix),le==="instanceColor"&&U.instanceColor&&($=U.instanceColor));let re={};re.attribute=$,$&&$.data&&(re.data=$.data),X[le]=re,J++}c.attributes=X,c.attributesNum=J,c.index=Y}function _(){let U=c.newAttributes;for(let B=0,V=U.length;B<V;B++)U[B]=0}function T(U){C(U,0)}function C(U,B){let V=c.newAttributes,Y=c.enabledAttributes,X=c.attributeDivisors;V[U]=1,Y[U]===0&&(i.enableVertexAttribArray(U),Y[U]=1),X[U]!==B&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,B),X[U]=B)}function A(){let U=c.newAttributes,B=c.enabledAttributes;for(let V=0,Y=B.length;V<Y;V++)B[V]!==U[V]&&(i.disableVertexAttribArray(V),B[V]=0)}function w(U,B,V,Y,X,G,J){J===!0?i.vertexAttribIPointer(U,B,V,X,G):i.vertexAttribPointer(U,B,V,Y,X,G)}function L(U,B,V,Y){if(n.isWebGL2===!1&&(U.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let X=Y.attributes,G=V.getAttributes(),J=B.defaultAttributeValues;for(let ee in G){let le=G[ee];if(le.location>=0){let H=X[ee];if(H===void 0&&(ee==="instanceMatrix"&&U.instanceMatrix&&(H=U.instanceMatrix),ee==="instanceColor"&&U.instanceColor&&(H=U.instanceColor)),H!==void 0){let $=H.normalized,re=H.itemSize,ye=t.get(H);if(ye===void 0)continue;let Me=ye.buffer,De=ye.type,Oe=ye.bytesPerElement,Re=n.isWebGL2===!0&&(De===i.INT||De===i.UNSIGNED_INT||H.gpuType===Ih);if(H.isInterleavedBufferAttribute){let Ye=H.data,I=Ye.stride,Je=H.offset;if(Ye.isInstancedInterleavedBuffer){for(let we=0;we<le.locationSize;we++)C(le.location+we,Ye.meshPerAttribute);U.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let we=0;we<le.locationSize;we++)T(le.location+we);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let we=0;we<le.locationSize;we++)w(le.location+we,re/le.locationSize,De,$,I*Oe,(Je+re/le.locationSize*we)*Oe,Re)}else{if(H.isInstancedBufferAttribute){for(let Ye=0;Ye<le.locationSize;Ye++)C(le.location+Ye,H.meshPerAttribute);U.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Ye=0;Ye<le.locationSize;Ye++)T(le.location+Ye);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let Ye=0;Ye<le.locationSize;Ye++)w(le.location+Ye,re/le.locationSize,De,$,re*Oe,re/le.locationSize*Ye*Oe,Re)}}else if(J!==void 0){let $=J[ee];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(le.location,$);break;case 3:i.vertexAttrib3fv(le.location,$);break;case 4:i.vertexAttrib4fv(le.location,$);break;default:i.vertexAttrib1fv(le.location,$)}}}}A()}function y(){q();for(let U in a){let B=a[U];for(let V in B){let Y=B[V];for(let X in Y)g(Y[X].object),delete Y[X];delete B[V]}delete a[U]}}function E(U){if(a[U.id]===void 0)return;let B=a[U.id];for(let V in B){let Y=B[V];for(let X in Y)g(Y[X].object),delete Y[X];delete B[V]}delete a[U.id]}function O(U){for(let B in a){let V=a[B];if(V[U.id]===void 0)continue;let Y=V[U.id];for(let X in Y)g(Y[X].object),delete Y[X];delete V[U.id]}}function q(){te(),h=!0,c!==l&&(c=l,m(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:q,resetDefaultState:te,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:O,initAttributes:_,enableAttribute:T,disableUnusedAttributes:A}}function Jm(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,f){if(f===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,f),t.update(u,r,f)}function c(h,u,f){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Km(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,T=o||e.has("OES_texture_float"),C=_&&T,A=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:T,floatVertexTextures:C,maxSamples:A}}function jm(i){let e=this,t=null,n=0,s=!1,r=!1,o=new qt,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||n!==0||s;return s=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){let g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let M=r?0:n,_=M*4,T=d.clippingState||null;l.value=T,T=h(g,f,_,m);for(let C=0;C!==_;++C)T[C]=t[C];d.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,m,g){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let d=m+v*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let _=0,T=m;_!==v;++_,T+=4)o.copy(u[_]).applyMatrix4(M,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Qm(i){let e=new WeakMap;function t(o,a){return a===wo?o.mapping=ls:a===To&&(o.mapping=cs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===wo||a===To)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new No(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var fs=class extends na{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},is=4,Qc=[.125,.215,.35,.446,.526,.582],Ei=20,mo=new fs,eh=new xe,go=null,_o=0,vo=0,bi=(1+Math.sqrt(5))/2,ji=1/bi,th=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,bi,ji),new R(0,bi,-ji),new R(ji,0,bi),new R(-ji,0,bi),new R(bi,ji,0),new R(-bi,ji,0)],ps=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(go,_o,vo),e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Kt,format:gn,colorSpace:zn,depthBuffer:!1},s=nh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eg(r)),this._blurMaterial=tg(r,e,t)}return s}_compileMaterial(e){let t=new pt(this._lodPlanes[0],e);this._renderer.compile(t,mo)}_sceneToCubeUV(e,t,n,s){let a=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(eh),h.toneMapping=jn,h.autoClear=!1;let m=new Yt({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new pt(new Pi,m),v=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(eh),v=!0);for(let d=0;d<6;d++){let M=d%3;M===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):M===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let _=this._cubeSize;Dr(s,M*_,d>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ls||e.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ih());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Dr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,mo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=th[(s-1)%th.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new pt(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ei-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):Ei;p>Ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ei}`);let d=[],M=0;for(let w=0;w<Ei;++w){let L=w/v,y=Math.exp(-L*L/2);d.push(y),w===0?M+=y:w<p&&(M+=2*y)}for(let w=0;w<d.length;w++)d[w]=d[w]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;let T=this._sizeLods[s],C=3*T*(s>_-is?s-_+is:0),A=4*(this._cubeSize-T);Dr(t,C,A,3*T,2*T),l.setRenderTarget(t),l.render(u,mo)}};function eg(i){let e=[],t=[],n=[],s=i,r=i-is+1+Qc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-is?l=Qc[o-i+is-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,v=3,p=2,d=1,M=new Float32Array(v*g*m),_=new Float32Array(p*g*m),T=new Float32Array(d*g*m);for(let A=0;A<m;A++){let w=A%3*2/3-1,L=A>2?0:-1,y=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];M.set(y,v*g*A),_.set(f,p*g*A);let E=[A,A,A,A,A,A];T.set(E,d*g*A)}let C=new Lt;C.setAttribute("position",new st(M,v)),C.setAttribute("uv",new st(_,p)),C.setAttribute("faceIndex",new st(T,d)),e.push(C),s>is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nh(i,e,t){let n=new Pt(i,e,t);return n.texture.mapping=ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function tg(i,e,t){let n=new Float32Array(Ei),s=new R(0,1,0);return new lt({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vl(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function ih(){return new lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function sh(){return new lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function vl(){return`

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
	`}function ng(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===wo||l===To,h=l===ls||l===cs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new ps(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new ps(i));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ig(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sg(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let v=f.morphAttributes[g];for(let p=0,d=v.length;p<d;p++)e.remove(v[p])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let v=m[g];for(let p=0,d=v.length;p<d;p++)e.update(v[p],i.ARRAY_BUFFER)}}function c(u){let f=[],m=u.index,g=u.attributes.position,v=0;if(m!==null){let M=m.array;v=m.version;for(let _=0,T=M.length;_<T;_+=3){let C=M[_+0],A=M[_+1],w=M[_+2];f.push(C,A,A,w,w,C)}}else if(g!==void 0){let M=g.array;v=g.version;for(let _=0,T=M.length/3-1;_<T;_+=3){let C=_+0,A=_+1,w=_+2;f.push(C,A,A,w,w,C)}}else return;let p=new(Vh(f)?ta:ea)(f,1);p.version=v;let d=r.get(u);d&&e.remove(d),r.set(u,p)}function h(u){let f=r.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function rg(i,e,t,n){let s=n.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){i.drawElements(r,g,a,m*l),t.update(g,r,1)}function u(m,g,v){if(v===0)return;let p,d;if(s)p=i,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,g,a,m*l,v),t.update(g,r,v)}function f(m,g,v){if(v===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<v;d++)this.render(m[d]/l,g[d]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,v);let d=0;for(let M=0;M<v;M++)d+=g[M];t.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function ag(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function og(i,e){return i[0]-e[0]}function lg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function cg(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new ot,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,v=r.get(h);if(v===void 0||v.count!==g){let U=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",U)};v!==void 0&&v.texture.dispose();let M=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],L=0;M===!0&&(L=1),_===!0&&(L=2),T===!0&&(L=3);let y=h.attributes.position.count*L,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let O=new Float32Array(y*E*4*g),q=new jr(O,y,E,g);q.type=Kn,q.needsUpdate=!0;let te=L*4;for(let B=0;B<g;B++){let V=C[B],Y=A[B],X=w[B],G=y*E*4*B;for(let J=0;J<V.count;J++){let ee=J*te;M===!0&&(o.fromBufferAttribute(V,J),O[G+ee+0]=o.x,O[G+ee+1]=o.y,O[G+ee+2]=o.z,O[G+ee+3]=0),_===!0&&(o.fromBufferAttribute(Y,J),O[G+ee+4]=o.x,O[G+ee+5]=o.y,O[G+ee+6]=o.z,O[G+ee+7]=0),T===!0&&(o.fromBufferAttribute(X,J),O[G+ee+8]=o.x,O[G+ee+9]=o.y,O[G+ee+10]=o.z,O[G+ee+11]=X.itemSize===4?o.w:1)}}v={count:g,texture:q,size:new ve(y,E)},r.set(h,v),h.addEventListener("dispose",U)}let p=0;for(let M=0;M<f.length;M++)p+=f[M];let d=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let m=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let _=0;_<m;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<m;_++){let T=g[_];T[0]=_,T[1]=f[_]}g.sort(lg);for(let _=0;_<8;_++)_<m&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(og);let v=h.morphAttributes.position,p=h.morphAttributes.normal,d=0;for(let _=0;_<8;_++){let T=a[_],C=T[0],A=T[1];C!==Number.MAX_SAFE_INTEGER&&A?(v&&h.getAttribute("morphTarget"+_)!==v[C]&&h.setAttribute("morphTarget"+_,v[C]),p&&h.getAttribute("morphNormal"+_)!==p[C]&&h.setAttribute("morphNormal"+_,p[C]),s[_]=A,d+=A):(v&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),p&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let M=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",M),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function hg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var sa=class extends on{constructor(e,t,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Ai,h!==Ai&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ai&&(n=Jn),n===void 0&&h===hs&&(n=Ti),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},qh=new on,Yh=new sa(1,1);Yh.compareFunction=Hh;var $h=new jr,Zh=new Uo,Jh=new ia,rh=[],ah=[],oh=new Float32Array(16),lh=new Float32Array(9),ch=new Float32Array(4);function vs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=rh[s];if(r===void 0&&(r=new Float32Array(s),rh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function _a(i,e){let t=ah[e];t===void 0&&(t=new Int32Array(e),ah[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ug(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function mg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,n))return;ch.set(n),i.uniformMatrix2fv(this.addr,!1,ch),wt(t,n)}}function gg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,n))return;lh.set(n),i.uniformMatrix3fv(this.addr,!1,lh),wt(t,n)}}function _g(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,n))return;oh.set(n),i.uniformMatrix4fv(this.addr,!1,oh),wt(t,n)}}function vg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function Mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function bg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function Eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function Tg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Yh:qh;t.setTexture2D(e||r,s)}function Ag(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Zh,s)}function Rg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Jh,s)}function Cg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||$h,s)}function Pg(i){switch(i){case 5126:return ug;case 35664:return dg;case 35665:return fg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return _g;case 5124:case 35670:return vg;case 35667:case 35671:return xg;case 35668:case 35672:return yg;case 35669:case 35673:return Mg;case 5125:return bg;case 36294:return Sg;case 36295:return Eg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Cg}}function Lg(i,e){i.uniform1fv(this.addr,e)}function Ig(i,e){let t=vs(e,this.size,2);i.uniform2fv(this.addr,t)}function Ug(i,e){let t=vs(e,this.size,3);i.uniform3fv(this.addr,t)}function Dg(i,e){let t=vs(e,this.size,4);i.uniform4fv(this.addr,t)}function Ng(i,e){let t=vs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Fg(i,e){let t=vs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Og(i,e){let t=vs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Bg(i,e){i.uniform1iv(this.addr,e)}function zg(i,e){i.uniform2iv(this.addr,e)}function kg(i,e){i.uniform3iv(this.addr,e)}function Hg(i,e){i.uniform4iv(this.addr,e)}function Vg(i,e){i.uniform1uiv(this.addr,e)}function Gg(i,e){i.uniform2uiv(this.addr,e)}function Wg(i,e){i.uniform3uiv(this.addr,e)}function Xg(i,e){i.uniform4uiv(this.addr,e)}function qg(i,e,t){let n=this.cache,s=e.length,r=_a(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||qh,r[o])}function Yg(i,e,t){let n=this.cache,s=e.length,r=_a(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Zh,r[o])}function $g(i,e,t){let n=this.cache,s=e.length,r=_a(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Jh,r[o])}function Zg(i,e,t){let n=this.cache,s=e.length,r=_a(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||$h,r[o])}function Jg(i){switch(i){case 5126:return Lg;case 35664:return Ig;case 35665:return Ug;case 35666:return Dg;case 35674:return Ng;case 35675:return Fg;case 35676:return Og;case 5124:case 35670:return Bg;case 35667:case 35671:return zg;case 35668:case 35672:return kg;case 35669:case 35673:return Hg;case 5125:return Vg;case 36294:return Gg;case 36295:return Wg;case 36296:return Xg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return Yg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return Zg}}var Fo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Pg(t.type)}},Oo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jg(t.type)}},Bo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},xo=/(\w+)(\])?(\[|\.)?/g;function hh(i,e){i.seq.push(e),i.map[e.id]=e}function Kg(i,e,t){let n=i.name,s=n.length;for(xo.lastIndex=0;;){let r=xo.exec(n),o=xo.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){hh(t,c===void 0?new Fo(a,i,e):new Oo(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Bo(a),hh(t,u)),t=u}}}var os=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Kg(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function uh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var jg=37297,Qg=0;function e0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function t0(i){let e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(i),n;switch(e===t?n="":e===qr&&t===Xr?n="LinearDisplayP3ToLinearSRGB":e===Xr&&t===qr&&(n="LinearSRGBToLinearDisplayP3"),i){case zn:case ga:return[n,"LinearTransferOETF"];case St:case gl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function dh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+e0(i.getShaderSource(e),o)}else return s}function n0(i,e){let t=t0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function i0(i,e){let t;switch(e){case ul:t="Linear";break;case dl:t="Reinhard";break;case fl:t="OptimizedCineon";break;case js:t="ACESFilmic";break;case pl:t="AgX";break;case fd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function s0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ss).join(`
`)}function r0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ss).join(`
`)}function a0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function o0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ss(i){return i!==""}function fh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ph(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var l0=/^[ \t]*#include +<([\w\d./]+)>/gm;function zo(i){return i.replace(l0,h0)}var c0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function h0(i,e){let t=He[e];if(t===void 0){let n=c0.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zo(t)}var u0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mh(i){return i.replace(u0,d0)}function d0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function f0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ch?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function p0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ls:case cs:e="ENVMAP_TYPE_CUBE";break;case ma:e="ENVMAP_TYPE_CUBE_UV";break}return e}function m0(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===cs&&(e="ENVMAP_MODE_REFRACTION"),e}function g0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ph:e="ENVMAP_BLENDING_MULTIPLY";break;case ud:e="ENVMAP_BLENDING_MIX";break;case dd:e="ENVMAP_BLENDING_ADD";break}return e}function _0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function v0(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=f0(t),c=p0(t),h=m0(t),u=g0(t),f=_0(t),m=t.isWebGL2?"":s0(t),g=r0(t),v=a0(r),p=s.createProgram(),d,M,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ss).join(`
`),d.length>0&&(d+=`
`),M=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ss).join(`
`),M.length>0&&(M+=`
`)):(d=[gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),M=[m,gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?He.tonemapping_pars_fragment:"",t.toneMapping!==jn?i0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,n0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ss).join(`
`)),o=zo(o),o=fh(o,t),o=ph(o,t),a=zo(a),a=fh(a,t),a=ph(a,t),o=mh(o),a=mh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let T=_+d+o,C=_+M+a,A=uh(s,s.VERTEX_SHADER,T),w=uh(s,s.FRAGMENT_SHADER,C);s.attachShader(p,A),s.attachShader(p,w),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function L(q){if(i.debug.checkShaderErrors){let te=s.getProgramInfoLog(p).trim(),U=s.getShaderInfoLog(A).trim(),B=s.getShaderInfoLog(w).trim(),V=!0,Y=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,A,w);else{let X=dh(s,A,"vertex"),G=dh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+X+`
`+G)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(U===""||B==="")&&(Y=!1);Y&&(q.diagnostics={runnable:V,programLog:te,vertexShader:{log:U,prefix:d},fragmentShader:{log:B,prefix:M}})}s.deleteShader(A),s.deleteShader(w),y=new os(s,p),E=o0(s,p)}let y;this.getUniforms=function(){return y===void 0&&L(this),y};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(p,jg)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qg++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=w,this}var x0=0,ko=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ho(e),t.set(e,n)),n}},Ho=class{constructor(e){this.id=x0++,this.code=e,this.usedTimes=0}};function y0(i,e,t,n,s,r,o){let a=new Xs,l=new ko,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return y===0?"uv":`uv${y}`}function p(y,E,O,q,te){let U=q.fog,B=te.geometry,V=y.isMeshStandardMaterial?q.environment:null,Y=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),X=Y&&Y.mapping===ma?Y.image.height:null,G=g[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let J=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ee=J!==void 0?J.length:0,le=0;B.morphAttributes.position!==void 0&&(le=1),B.morphAttributes.normal!==void 0&&(le=2),B.morphAttributes.color!==void 0&&(le=3);let H,$,re,ye;if(G){let kt=bn[G];H=kt.vertexShader,$=kt.fragmentShader}else H=y.vertexShader,$=y.fragmentShader,l.update(y),re=l.getVertexShaderID(y),ye=l.getFragmentShaderID(y);let Me=i.getRenderTarget(),De=te.isInstancedMesh===!0,Oe=te.isBatchedMesh===!0,Re=!!y.map,Ye=!!y.matcap,I=!!Y,Je=!!y.aoMap,we=!!y.lightMap,Ce=!!y.bumpMap,pe=!!y.normalMap,$e=!!y.displacementMap,Be=!!y.emissiveMap,S=!!y.metalnessMap,x=!!y.roughnessMap,N=y.anisotropy>0,j=y.clearcoat>0,K=y.iridescence>0,Z=y.sheen>0,_e=y.transmission>0,se=N&&!!y.anisotropyMap,me=j&&!!y.clearcoatMap,Le=j&&!!y.clearcoatNormalMap,Q=j&&!!y.clearcoatRoughnessMap,W=K&&!!y.iridescenceMap,ge=K&&!!y.iridescenceThicknessMap,Se=Z&&!!y.sheenColorMap,Te=Z&&!!y.sheenRoughnessMap,be=!!y.specularMap,ce=!!y.specularColorMap,Pe=!!y.specularIntensityMap,Ke=_e&&!!y.transmissionMap,dt=_e&&!!y.thicknessMap,We=!!y.gradientMap,ne=!!y.alphaMap,P=y.alphaTest>0,ae=!!y.alphaHash,oe=!!y.extensions,Ne=!!B.attributes.uv1,Ie=!!B.attributes.uv2,tt=!!B.attributes.uv3,nt=jn;return y.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(nt=i.toneMapping),{isWebGL2:h,shaderID:G,shaderType:y.type,shaderName:y.name,vertexShader:H,fragmentShader:$,defines:y.defines,customVertexShaderID:re,customFragmentShaderID:ye,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Oe,instancing:De,instancingColor:De&&te.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Me===null?i.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:zn,map:Re,matcap:Ye,envMap:I,envMapMode:I&&Y.mapping,envMapCubeUVHeight:X,aoMap:Je,lightMap:we,bumpMap:Ce,normalMap:pe,displacementMap:f&&$e,emissiveMap:Be,normalMapObjectSpace:pe&&y.normalMapType===wd,normalMapTangentSpace:pe&&y.normalMapType===kh,metalnessMap:S,roughnessMap:x,anisotropy:N,anisotropyMap:se,clearcoat:j,clearcoatMap:me,clearcoatNormalMap:Le,clearcoatRoughnessMap:Q,iridescence:K,iridescenceMap:W,iridescenceThicknessMap:ge,sheen:Z,sheenColorMap:Se,sheenRoughnessMap:Te,specularMap:be,specularColorMap:ce,specularIntensityMap:Pe,transmission:_e,transmissionMap:Ke,thicknessMap:dt,gradientMap:We,opaque:y.transparent===!1&&y.blending===rs,alphaMap:ne,alphaTest:P,alphaHash:ae,combine:y.combine,mapUv:Re&&v(y.map.channel),aoMapUv:Je&&v(y.aoMap.channel),lightMapUv:we&&v(y.lightMap.channel),bumpMapUv:Ce&&v(y.bumpMap.channel),normalMapUv:pe&&v(y.normalMap.channel),displacementMapUv:$e&&v(y.displacementMap.channel),emissiveMapUv:Be&&v(y.emissiveMap.channel),metalnessMapUv:S&&v(y.metalnessMap.channel),roughnessMapUv:x&&v(y.roughnessMap.channel),anisotropyMapUv:se&&v(y.anisotropyMap.channel),clearcoatMapUv:me&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Le&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(y.sheenRoughnessMap.channel),specularMapUv:be&&v(y.specularMap.channel),specularColorMapUv:ce&&v(y.specularColorMap.channel),specularIntensityMapUv:Pe&&v(y.specularIntensityMap.channel),transmissionMapUv:Ke&&v(y.transmissionMap.channel),thicknessMapUv:dt&&v(y.thicknessMap.channel),alphaMapUv:ne&&v(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(pe||N),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Ne,vertexUv2s:Ie,vertexUv3s:tt,pointsUvs:te.isPoints===!0&&!!B.attributes.uv&&(Re||ne),fog:!!U,useFog:y.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:te.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:le,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:nt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Re&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===et,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Fn,flipSided:y.side===Bt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:oe&&y.extensions.derivatives===!0,extensionFragDepth:oe&&y.extensions.fragDepth===!0,extensionDrawBuffers:oe&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let O in y.defines)E.push(O),E.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(M(E,y),_(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function M(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function _(y,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function T(y){let E=g[y.type],O;if(E){let q=bn[E];O=si.clone(q.uniforms)}else O=y.uniforms;return O}function C(y,E){let O;for(let q=0,te=c.length;q<te;q++){let U=c[q];if(U.cacheKey===E){O=U,++O.usedTimes;break}}return O===void 0&&(O=new v0(i,E,y,r),c.push(O)),O}function A(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),y.destroy()}}function w(y){l.remove(y)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:T,acquireProgram:C,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:L}}function M0(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function b0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function _h(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,m,g,v,p){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:v,group:p},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=p),e++,d}function a(u,f,m,g,v,p){let d=o(u,f,m,g,v,p);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(u,f,m,g,v,p){let d=o(u,f,m,g,v,p);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||b0),n.length>1&&n.sort(f||_h),s.length>1&&s.sort(f||_h)}function h(){for(let u=e,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function S0(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new vh,i.set(n,[o])):s>=r.length?(o=new vh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function E0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new xe};break;case"SpotLight":t={position:new R,direction:new R,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function w0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var T0=0;function A0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function R0(i,e){let t=new E0,n=w0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new R);let r=new R,o=new ht,a=new ht;function l(h,u){let f=0,m=0,g=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let v=0,p=0,d=0,M=0,_=0,T=0,C=0,A=0,w=0,L=0,y=0;h.sort(A0);let E=u===!0?Math.PI:1;for(let q=0,te=h.length;q<te;q++){let U=h[q],B=U.color,V=U.intensity,Y=U.distance,X=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=B.r*V*E,m+=B.g*V*E,g+=B.b*V*E;else if(U.isLightProbe){for(let G=0;G<9;G++)s.probe[G].addScaledVector(U.sh.coefficients[G],V);y++}else if(U.isDirectionalLight){let G=t.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity*E),U.castShadow){let J=U.shadow,ee=n.get(U);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,s.directionalShadow[v]=ee,s.directionalShadowMap[v]=X,s.directionalShadowMatrix[v]=U.shadow.matrix,T++}s.directional[v]=G,v++}else if(U.isSpotLight){let G=t.get(U);G.position.setFromMatrixPosition(U.matrixWorld),G.color.copy(B).multiplyScalar(V*E),G.distance=Y,G.coneCos=Math.cos(U.angle),G.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),G.decay=U.decay,s.spot[d]=G;let J=U.shadow;if(U.map&&(s.spotLightMap[w]=U.map,w++,J.updateMatrices(U),U.castShadow&&L++),s.spotLightMatrix[d]=J.matrix,U.castShadow){let ee=n.get(U);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,s.spotShadow[d]=ee,s.spotShadowMap[d]=X,A++}d++}else if(U.isRectAreaLight){let G=t.get(U);G.color.copy(B).multiplyScalar(V),G.halfWidth.set(U.width*.5,0,0),G.halfHeight.set(0,U.height*.5,0),s.rectArea[M]=G,M++}else if(U.isPointLight){let G=t.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity*E),G.distance=U.distance,G.decay=U.decay,U.castShadow){let J=U.shadow,ee=n.get(U);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,ee.shadowCameraNear=J.camera.near,ee.shadowCameraFar=J.camera.far,s.pointShadow[p]=ee,s.pointShadowMap[p]=X,s.pointShadowMatrix[p]=U.shadow.matrix,C++}s.point[p]=G,p++}else if(U.isHemisphereLight){let G=t.get(U);G.skyColor.copy(U.color).multiplyScalar(V*E),G.groundColor.copy(U.groundColor).multiplyScalar(V*E),s.hemi[_]=G,_++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_FLOAT_1,s.rectAreaLTC2=ie.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ie.LTC_HALF_1,s.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;let O=s.hash;(O.directionalLength!==v||O.pointLength!==p||O.spotLength!==d||O.rectAreaLength!==M||O.hemiLength!==_||O.numDirectionalShadows!==T||O.numPointShadows!==C||O.numSpotShadows!==A||O.numSpotMaps!==w||O.numLightProbes!==y)&&(s.directional.length=v,s.spot.length=d,s.rectArea.length=M,s.point.length=p,s.hemi.length=_,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=A+w-L,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=y,O.directionalLength=v,O.pointLength=p,O.spotLength=d,O.rectAreaLength=M,O.hemiLength=_,O.numDirectionalShadows=T,O.numPointShadows=C,O.numSpotShadows=A,O.numSpotMaps=w,O.numLightProbes=y,s.version=T0++)}function c(h,u){let f=0,m=0,g=0,v=0,p=0,d=u.matrixWorldInverse;for(let M=0,_=h.length;M<_;M++){let T=h[M];if(T.isDirectionalLight){let C=s.directional[f];C.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),f++}else if(T.isSpotLight){let C=s.spot[g];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),g++}else if(T.isRectAreaLight){let C=s.rectArea[v];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(d),a.identity(),o.copy(T.matrixWorld),o.premultiply(d),a.extractRotation(o),C.halfWidth.set(T.width*.5,0,0),C.halfHeight.set(0,T.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){let C=s.point[m];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(d),m++}else if(T.isHemisphereLight){let C=s.hemi[p];C.direction.setFromMatrixPosition(T.matrixWorld),C.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:s}}function xh(i,e){let t=new R0(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function C0(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new xh(i,e),t.set(r,[l])):o>=a.length?(l=new xh(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Vo=class extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Go=class extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},P0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L0=`uniform sampler2D shadow_pass;
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
}`;function I0(i,e,t){let n=new qs,s=new ve,r=new ve,o=new ot,a=new Vo({depthPacking:Ed}),l=new Go,c={},h=t.maxTextureSize,u={[ei]:Bt,[Bt]:ei,[Fn]:Fn},f=new lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:P0,fragmentShader:L0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Lt;g.setAttribute("position",new st(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new pt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ch;let d=this.type;this.render=function(A,w,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let y=i.getRenderTarget(),E=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),q=i.state;q.setBlending(wn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let te=d!==Nn&&this.type===Nn,U=d===Nn&&this.type!==Nn;for(let B=0,V=A.length;B<V;B++){let Y=A[B],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let G=X.getFrameExtents();if(s.multiply(G),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,X.mapSize.y=r.y)),X.map===null||te===!0||U===!0){let ee=this.type!==Nn?{minFilter:Wt,magFilter:Wt}:{};X.map!==null&&X.map.dispose(),X.map=new Pt(s.x,s.y,ee),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let J=X.getViewportCount();for(let ee=0;ee<J;ee++){let le=X.getViewport(ee);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),q.viewport(o),X.updateMatrices(Y,ee),n=X.getFrustum(),T(w,L,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===Nn&&M(X,L),X.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(y,E,O)};function M(A,w){let L=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Pt(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,L,f,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,L,m,v,null)}function _(A,w,L,y){let E=null,O=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)E=O;else if(E=L.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let q=E.uuid,te=w.uuid,U=c[q];U===void 0&&(U={},c[q]=U);let B=U[te];B===void 0&&(B=E.clone(),U[te]=B,w.addEventListener("dispose",C)),E=B}if(E.visible=w.visible,E.wireframe=w.wireframe,y===Nn?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:u[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let q=i.properties.get(E);q.light=L}return E}function T(A,w,L,y,E){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===Nn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);let te=e.update(A),U=A.material;if(Array.isArray(U)){let B=te.groups;for(let V=0,Y=B.length;V<Y;V++){let X=B[V],G=U[X.materialIndex];if(G&&G.visible){let J=_(A,G,y,E);A.onBeforeShadow(i,A,w,L,te,J,X),i.renderBufferDirect(L,null,te,J,A,X),A.onAfterShadow(i,A,w,L,te,J,X)}}}else if(U.visible){let B=_(A,U,y,E);A.onBeforeShadow(i,A,w,L,te,B,null),i.renderBufferDirect(L,null,te,B,A,null),A.onAfterShadow(i,A,w,L,te,B,null)}}let q=A.children;for(let te=0,U=q.length;te<U;te++)T(q[te],w,L,y,E)}function C(A){A.target.removeEventListener("dispose",C);for(let L in c){let y=c[L],E=A.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}function U0(i,e,t){let n=t.isWebGL2;function s(){let P=!1,ae=new ot,oe=null,Ne=new ot(0,0,0,0);return{setMask:function(Ie){oe!==Ie&&!P&&(i.colorMask(Ie,Ie,Ie,Ie),oe=Ie)},setLocked:function(Ie){P=Ie},setClear:function(Ie,tt,nt,Tt,kt){kt===!0&&(Ie*=Tt,tt*=Tt,nt*=Tt),ae.set(Ie,tt,nt,Tt),Ne.equals(ae)===!1&&(i.clearColor(Ie,tt,nt,Tt),Ne.copy(ae))},reset:function(){P=!1,oe=null,Ne.set(-1,0,0,0)}}}function r(){let P=!1,ae=null,oe=null,Ne=null;return{setTest:function(Ie){Ie?Oe(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(Ie){ae!==Ie&&!P&&(i.depthMask(Ie),ae=Ie)},setFunc:function(Ie){if(oe!==Ie){switch(Ie){case sd:i.depthFunc(i.NEVER);break;case rd:i.depthFunc(i.ALWAYS);break;case ad:i.depthFunc(i.LESS);break;case Hr:i.depthFunc(i.LEQUAL);break;case od:i.depthFunc(i.EQUAL);break;case ld:i.depthFunc(i.GEQUAL);break;case cd:i.depthFunc(i.GREATER);break;case hd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=Ie}},setLocked:function(Ie){P=Ie},setClear:function(Ie){Ne!==Ie&&(i.clearDepth(Ie),Ne=Ie)},reset:function(){P=!1,ae=null,oe=null,Ne=null}}}function o(){let P=!1,ae=null,oe=null,Ne=null,Ie=null,tt=null,nt=null,Tt=null,kt=null;return{setTest:function(it){P||(it?Oe(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(it){ae!==it&&!P&&(i.stencilMask(it),ae=it)},setFunc:function(it,Ht,Mn){(oe!==it||Ne!==Ht||Ie!==Mn)&&(i.stencilFunc(it,Ht,Mn),oe=it,Ne=Ht,Ie=Mn)},setOp:function(it,Ht,Mn){(tt!==it||nt!==Ht||Tt!==Mn)&&(i.stencilOp(it,Ht,Mn),tt=it,nt=Ht,Tt=Mn)},setLocked:function(it){P=it},setClear:function(it){kt!==it&&(i.clearStencil(it),kt=it)},reset:function(){P=!1,ae=null,oe=null,Ne=null,Ie=null,tt=null,nt=null,Tt=null,kt=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},m={},g=new WeakMap,v=[],p=null,d=!1,M=null,_=null,T=null,C=null,A=null,w=null,L=null,y=new xe(0,0,0),E=0,O=!1,q=null,te=null,U=null,B=null,V=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,G=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=G>=1):J.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=G>=2);let ee=null,le={},H=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),re=new ot().fromArray(H),ye=new ot().fromArray($);function Me(P,ae,oe,Ne){let Ie=new Uint8Array(4),tt=i.createTexture();i.bindTexture(P,tt),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let nt=0;nt<oe;nt++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(ae,0,i.RGBA,1,1,Ne,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(ae+nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return tt}let De={};De[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),De[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(De[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),De[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(i.DEPTH_TEST),l.setFunc(Hr),Be(!1),S(ec),Oe(i.CULL_FACE),pe(wn);function Oe(P){f[P]!==!0&&(i.enable(P),f[P]=!0)}function Re(P){f[P]!==!1&&(i.disable(P),f[P]=!1)}function Ye(P,ae){return m[P]!==ae?(i.bindFramebuffer(P,ae),m[P]=ae,n&&(P===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ae),P===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ae)),!0):!1}function I(P,ae){let oe=v,Ne=!1;if(P)if(oe=g.get(ae),oe===void 0&&(oe=[],g.set(ae,oe)),P.isWebGLMultipleRenderTargets){let Ie=P.texture;if(oe.length!==Ie.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,nt=Ie.length;tt<nt;tt++)oe[tt]=i.COLOR_ATTACHMENT0+tt;oe.length=Ie.length,Ne=!0}}else oe[0]!==i.COLOR_ATTACHMENT0&&(oe[0]=i.COLOR_ATTACHMENT0,Ne=!0);else oe[0]!==i.BACK&&(oe[0]=i.BACK,Ne=!0);Ne&&(t.isWebGL2?i.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function Je(P){return p!==P?(i.useProgram(P),p=P,!0):!1}let we={[Si]:i.FUNC_ADD,[Gu]:i.FUNC_SUBTRACT,[Wu]:i.FUNC_REVERSE_SUBTRACT};if(n)we[ic]=i.MIN,we[sc]=i.MAX;else{let P=e.get("EXT_blend_minmax");P!==null&&(we[ic]=P.MIN_EXT,we[sc]=P.MAX_EXT)}let Ce={[Xu]:i.ZERO,[qu]:i.ONE,[Yu]:i.SRC_COLOR,[So]:i.SRC_ALPHA,[Qu]:i.SRC_ALPHA_SATURATE,[Ku]:i.DST_COLOR,[Zu]:i.DST_ALPHA,[$u]:i.ONE_MINUS_SRC_COLOR,[Eo]:i.ONE_MINUS_SRC_ALPHA,[ju]:i.ONE_MINUS_DST_COLOR,[Ju]:i.ONE_MINUS_DST_ALPHA,[ed]:i.CONSTANT_COLOR,[td]:i.ONE_MINUS_CONSTANT_COLOR,[nd]:i.CONSTANT_ALPHA,[id]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(P,ae,oe,Ne,Ie,tt,nt,Tt,kt,it){if(P===wn){d===!0&&(Re(i.BLEND),d=!1);return}if(d===!1&&(Oe(i.BLEND),d=!0),P!==Vu){if(P!==M||it!==O){if((_!==Si||A!==Si)&&(i.blendEquation(i.FUNC_ADD),_=Si,A=Si),it)switch(P){case rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tn:i.blendFunc(i.ONE,i.ONE);break;case tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,C=null,w=null,L=null,y.set(0,0,0),E=0,M=P,O=it}return}Ie=Ie||ae,tt=tt||oe,nt=nt||Ne,(ae!==_||Ie!==A)&&(i.blendEquationSeparate(we[ae],we[Ie]),_=ae,A=Ie),(oe!==T||Ne!==C||tt!==w||nt!==L)&&(i.blendFuncSeparate(Ce[oe],Ce[Ne],Ce[tt],Ce[nt]),T=oe,C=Ne,w=tt,L=nt),(Tt.equals(y)===!1||kt!==E)&&(i.blendColor(Tt.r,Tt.g,Tt.b,kt),y.copy(Tt),E=kt),M=P,O=!1}function $e(P,ae){P.side===Fn?Re(i.CULL_FACE):Oe(i.CULL_FACE);let oe=P.side===Bt;ae&&(oe=!oe),Be(oe),P.blending===rs&&P.transparent===!1?pe(wn):pe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);let Ne=P.stencilWrite;c.setTest(Ne),Ne&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),N(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Oe(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function Be(P){q!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),q=P)}function S(P){P!==zu?(Oe(i.CULL_FACE),P!==te&&(P===ec?i.cullFace(i.BACK):P===ku?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),te=P}function x(P){P!==U&&(X&&i.lineWidth(P),U=P)}function N(P,ae,oe){P?(Oe(i.POLYGON_OFFSET_FILL),(B!==ae||V!==oe)&&(i.polygonOffset(ae,oe),B=ae,V=oe)):Re(i.POLYGON_OFFSET_FILL)}function j(P){P?Oe(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function K(P){P===void 0&&(P=i.TEXTURE0+Y-1),ee!==P&&(i.activeTexture(P),ee=P)}function Z(P,ae,oe){oe===void 0&&(ee===null?oe=i.TEXTURE0+Y-1:oe=ee);let Ne=le[oe];Ne===void 0&&(Ne={type:void 0,texture:void 0},le[oe]=Ne),(Ne.type!==P||Ne.texture!==ae)&&(ee!==oe&&(i.activeTexture(oe),ee=oe),i.bindTexture(P,ae||De[P]),Ne.type=P,Ne.texture=ae)}function _e(){let P=le[ee];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function se(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(P){re.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),re.copy(P))}function Ke(P){ye.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),ye.copy(P))}function dt(P,ae){let oe=u.get(ae);oe===void 0&&(oe=new WeakMap,u.set(ae,oe));let Ne=oe.get(P);Ne===void 0&&(Ne=i.getUniformBlockIndex(ae,P.name),oe.set(P,Ne))}function We(P,ae){let Ne=u.get(ae).get(P);h.get(ae)!==Ne&&(i.uniformBlockBinding(ae,Ne,P.__bindingPointIndex),h.set(ae,Ne))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ee=null,le={},m={},g=new WeakMap,v=[],p=null,d=!1,M=null,_=null,T=null,C=null,A=null,w=null,L=null,y=new xe(0,0,0),E=0,O=!1,q=null,te=null,U=null,B=null,V=null,re.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Oe,disable:Re,bindFramebuffer:Ye,drawBuffers:I,useProgram:Je,setBlending:pe,setMaterial:$e,setFlipSided:Be,setCullFace:S,setLineWidth:x,setPolygonOffset:N,setScissorTest:j,activeTexture:K,bindTexture:Z,unbindTexture:_e,compressedTexImage2D:se,compressedTexImage3D:me,texImage2D:be,texImage3D:ce,updateUBOMapping:dt,uniformBlockBinding:We,texStorage2D:Se,texStorage3D:Te,texSubImage2D:Le,texSubImage3D:Q,compressedTexSubImage2D:W,compressedTexSubImage3D:ge,scissor:Pe,viewport:Ke,reset:ne}}function D0(i,e,t,n,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,x){return m?new OffscreenCanvas(S,x):Zr("canvas")}function v(S,x,N,j){let K=1;if((S.width>j||S.height>j)&&(K=j/Math.max(S.width,S.height)),K<1||x===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let Z=x?$r:Math.floor,_e=Z(K*S.width),se=Z(K*S.height);u===void 0&&(u=g(_e,se));let me=N?g(_e,se):u;return me.width=_e,me.height=se,me.getContext("2d").drawImage(S,0,0,_e,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+_e+"x"+se+")."),me}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function p(S){return Lo(S.width)&&Lo(S.height)}function d(S){return a?!1:S.wrapS!==mn||S.wrapT!==mn||S.minFilter!==Wt&&S.minFilter!==rn}function M(S,x){return S.generateMipmaps&&x&&S.minFilter!==Wt&&S.minFilter!==rn}function _(S){i.generateMipmap(S)}function T(S,x,N,j,K=!1){if(a===!1)return x;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Z=x;if(x===i.RED&&(N===i.FLOAT&&(Z=i.R32F),N===i.HALF_FLOAT&&(Z=i.R16F),N===i.UNSIGNED_BYTE&&(Z=i.R8)),x===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(Z=i.R8UI),N===i.UNSIGNED_SHORT&&(Z=i.R16UI),N===i.UNSIGNED_INT&&(Z=i.R32UI),N===i.BYTE&&(Z=i.R8I),N===i.SHORT&&(Z=i.R16I),N===i.INT&&(Z=i.R32I)),x===i.RG&&(N===i.FLOAT&&(Z=i.RG32F),N===i.HALF_FLOAT&&(Z=i.RG16F),N===i.UNSIGNED_BYTE&&(Z=i.RG8)),x===i.RGBA){let _e=K?Wr:Ze.getTransfer(j);N===i.FLOAT&&(Z=i.RGBA32F),N===i.HALF_FLOAT&&(Z=i.RGBA16F),N===i.UNSIGNED_BYTE&&(Z=_e===et?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function C(S,x,N){return M(S,N)===!0||S.isFramebufferTexture&&S.minFilter!==Wt&&S.minFilter!==rn?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function A(S){return S===Wt||S===rc||S===Wa?i.NEAREST:i.LINEAR}function w(S){let x=S.target;x.removeEventListener("dispose",w),y(x),x.isVideoTexture&&h.delete(x)}function L(S){let x=S.target;x.removeEventListener("dispose",L),O(x)}function y(S){let x=n.get(S);if(x.__webglInit===void 0)return;let N=S.source,j=f.get(N);if(j){let K=j[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(S),Object.keys(j).length===0&&f.delete(N)}n.remove(S)}function E(S){let x=n.get(S);i.deleteTexture(x.__webglTexture);let N=S.source,j=f.get(N);delete j[x.__cacheKey],o.memory.textures--}function O(S){let x=S.texture,N=n.get(S),j=n.get(x);if(j.__webglTexture!==void 0&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(N.__webglFramebuffer[K]))for(let Z=0;Z<N.__webglFramebuffer[K].length;Z++)i.deleteFramebuffer(N.__webglFramebuffer[K][Z]);else i.deleteFramebuffer(N.__webglFramebuffer[K]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[K])}else{if(Array.isArray(N.__webglFramebuffer))for(let K=0;K<N.__webglFramebuffer.length;K++)i.deleteFramebuffer(N.__webglFramebuffer[K]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let K=0;K<N.__webglColorRenderbuffer.length;K++)N.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[K]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let K=0,Z=x.length;K<Z;K++){let _e=n.get(x[K]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(x[K])}n.remove(x),n.remove(S)}let q=0;function te(){q=0}function U(){let S=q;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),q+=1,S}function B(S){let x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function V(S,x){let N=n.get(S);if(S.isVideoTexture&&$e(S),S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){let j=S.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(N,S,x);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+x)}function Y(S,x){let N=n.get(S);if(S.version>0&&N.__version!==S.version){re(N,S,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+x)}function X(S,x){let N=n.get(S);if(S.version>0&&N.__version!==S.version){re(N,S,x);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+x)}function G(S,x){let N=n.get(S);if(S.version>0&&N.__version!==S.version){ye(N,S,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+x)}let J={[Ao]:i.REPEAT,[mn]:i.CLAMP_TO_EDGE,[Ro]:i.MIRRORED_REPEAT},ee={[Wt]:i.NEAREST,[rc]:i.NEAREST_MIPMAP_NEAREST,[Wa]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[pd]:i.LINEAR_MIPMAP_NEAREST,[Vs]:i.LINEAR_MIPMAP_LINEAR},le={[Td]:i.NEVER,[Id]:i.ALWAYS,[Ad]:i.LESS,[Hh]:i.LEQUAL,[Rd]:i.EQUAL,[Ld]:i.GEQUAL,[Cd]:i.GREATER,[Pd]:i.NOTEQUAL};function H(S,x,N){if(N?(i.texParameteri(S,i.TEXTURE_WRAP_S,J[x.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,J[x.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,J[x.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,ee[x.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,ee[x.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==mn||x.wrapT!==mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,A(x.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==Wt&&x.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,le[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let j=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Wt||x.minFilter!==Wa&&x.minFilter!==Vs||x.type===Kn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Kt&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(S,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function $(S,x){let N=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",w));let j=x.source,K=f.get(j);K===void 0&&(K={},f.set(j,K));let Z=B(x);if(Z!==S.__cacheKey){K[Z]===void 0&&(K[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),K[Z].usedTimes++;let _e=K[S.__cacheKey];_e!==void 0&&(K[S.__cacheKey].usedTimes--,_e.usedTimes===0&&E(x)),S.__cacheKey=Z,S.__webglTexture=K[Z].texture}return N}function re(S,x,N){let j=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=i.TEXTURE_3D);let K=$(S,x),Z=x.source;t.bindTexture(j,S.__webglTexture,i.TEXTURE0+N);let _e=n.get(Z);if(Z.version!==_e.__version||K===!0){t.activeTexture(i.TEXTURE0+N);let se=Ze.getPrimaries(Ze.workingColorSpace),me=x.colorSpace===an?null:Ze.getPrimaries(x.colorSpace),Le=x.colorSpace===an||se===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let Q=d(x)&&p(x.image)===!1,W=v(x.image,Q,!1,s.maxTextureSize);W=Be(x,W);let ge=p(W)||a,Se=r.convert(x.format,x.colorSpace),Te=r.convert(x.type),be=T(x.internalFormat,Se,Te,x.colorSpace,x.isVideoTexture);H(j,x,ge);let ce,Pe=x.mipmaps,Ke=a&&x.isVideoTexture!==!0&&be!==Bh,dt=_e.__version===void 0||K===!0,We=C(x,W,ge);if(x.isDepthTexture)be=i.DEPTH_COMPONENT,a?x.type===Kn?be=i.DEPTH_COMPONENT32F:x.type===Jn?be=i.DEPTH_COMPONENT24:x.type===Ti?be=i.DEPTH24_STENCIL8:be=i.DEPTH_COMPONENT16:x.type===Kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Ai&&be===i.DEPTH_COMPONENT&&x.type!==ml&&x.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Jn,Te=r.convert(x.type)),x.format===hs&&be===i.DEPTH_COMPONENT&&(be=i.DEPTH_STENCIL,x.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Ti,Te=r.convert(x.type))),dt&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,be,W.width,W.height):t.texImage2D(i.TEXTURE_2D,0,be,W.width,W.height,0,Se,Te,null));else if(x.isDataTexture)if(Pe.length>0&&ge){Ke&&dt&&t.texStorage2D(i.TEXTURE_2D,We,be,Pe[0].width,Pe[0].height);for(let ne=0,P=Pe.length;ne<P;ne++)ce=Pe[ne],Ke?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ce.width,ce.height,Se,Te,ce.data):t.texImage2D(i.TEXTURE_2D,ne,be,ce.width,ce.height,0,Se,Te,ce.data);x.generateMipmaps=!1}else Ke?(dt&&t.texStorage2D(i.TEXTURE_2D,We,be,W.width,W.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,W.width,W.height,Se,Te,W.data)):t.texImage2D(i.TEXTURE_2D,0,be,W.width,W.height,0,Se,Te,W.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ke&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,We,be,Pe[0].width,Pe[0].height,W.depth);for(let ne=0,P=Pe.length;ne<P;ne++)ce=Pe[ne],x.format!==gn?Se!==null?Ke?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ce.width,ce.height,W.depth,Se,ce.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,be,ce.width,ce.height,W.depth,0,ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ce.width,ce.height,W.depth,Se,Te,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,be,ce.width,ce.height,W.depth,0,Se,Te,ce.data)}else{Ke&&dt&&t.texStorage2D(i.TEXTURE_2D,We,be,Pe[0].width,Pe[0].height);for(let ne=0,P=Pe.length;ne<P;ne++)ce=Pe[ne],x.format!==gn?Se!==null?Ke?t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,ce.width,ce.height,Se,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,be,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ce.width,ce.height,Se,Te,ce.data):t.texImage2D(i.TEXTURE_2D,ne,be,ce.width,ce.height,0,Se,Te,ce.data)}else if(x.isDataArrayTexture)Ke?(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,We,be,W.width,W.height,W.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,Se,Te,W.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,W.width,W.height,W.depth,0,Se,Te,W.data);else if(x.isData3DTexture)Ke?(dt&&t.texStorage3D(i.TEXTURE_3D,We,be,W.width,W.height,W.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,Se,Te,W.data)):t.texImage3D(i.TEXTURE_3D,0,be,W.width,W.height,W.depth,0,Se,Te,W.data);else if(x.isFramebufferTexture){if(dt)if(Ke)t.texStorage2D(i.TEXTURE_2D,We,be,W.width,W.height);else{let ne=W.width,P=W.height;for(let ae=0;ae<We;ae++)t.texImage2D(i.TEXTURE_2D,ae,be,ne,P,0,Se,Te,null),ne>>=1,P>>=1}}else if(Pe.length>0&&ge){Ke&&dt&&t.texStorage2D(i.TEXTURE_2D,We,be,Pe[0].width,Pe[0].height);for(let ne=0,P=Pe.length;ne<P;ne++)ce=Pe[ne],Ke?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Se,Te,ce):t.texImage2D(i.TEXTURE_2D,ne,be,Se,Te,ce);x.generateMipmaps=!1}else Ke?(dt&&t.texStorage2D(i.TEXTURE_2D,We,be,W.width,W.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,Te,W)):t.texImage2D(i.TEXTURE_2D,0,be,Se,Te,W);M(x,ge)&&_(j),_e.__version=Z.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function ye(S,x,N){if(x.image.length!==6)return;let j=$(S,x),K=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+N);let Z=n.get(K);if(K.version!==Z.__version||j===!0){t.activeTexture(i.TEXTURE0+N);let _e=Ze.getPrimaries(Ze.workingColorSpace),se=x.colorSpace===an?null:Ze.getPrimaries(x.colorSpace),me=x.colorSpace===an||_e===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Le=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,W=[];for(let ne=0;ne<6;ne++)!Le&&!Q?W[ne]=v(x.image[ne],!1,!0,s.maxCubemapSize):W[ne]=Q?x.image[ne].image:x.image[ne],W[ne]=Be(x,W[ne]);let ge=W[0],Se=p(ge)||a,Te=r.convert(x.format,x.colorSpace),be=r.convert(x.type),ce=T(x.internalFormat,Te,be,x.colorSpace),Pe=a&&x.isVideoTexture!==!0,Ke=Z.__version===void 0||j===!0,dt=C(x,ge,Se);H(i.TEXTURE_CUBE_MAP,x,Se);let We;if(Le){Pe&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,dt,ce,ge.width,ge.height);for(let ne=0;ne<6;ne++){We=W[ne].mipmaps;for(let P=0;P<We.length;P++){let ae=We[P];x.format!==gn?Te!==null?Pe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,P,0,0,ae.width,ae.height,Te,ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,P,ce,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,P,0,0,ae.width,ae.height,Te,be,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,P,ce,ae.width,ae.height,0,Te,be,ae.data)}}}else{We=x.mipmaps,Pe&&Ke&&(We.length>0&&dt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,dt,ce,W[0].width,W[0].height));for(let ne=0;ne<6;ne++)if(Q){Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,W[ne].width,W[ne].height,Te,be,W[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ce,W[ne].width,W[ne].height,0,Te,be,W[ne].data);for(let P=0;P<We.length;P++){let oe=We[P].image[ne].image;Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,P+1,0,0,oe.width,oe.height,Te,be,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,P+1,ce,oe.width,oe.height,0,Te,be,oe.data)}}else{Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Te,be,W[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ce,Te,be,W[ne]);for(let P=0;P<We.length;P++){let ae=We[P];Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,P+1,0,0,Te,be,ae.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,P+1,ce,Te,be,ae.image[ne])}}}M(x,Se)&&_(i.TEXTURE_CUBE_MAP),Z.__version=K.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function Me(S,x,N,j,K,Z){let _e=r.convert(N.format,N.colorSpace),se=r.convert(N.type),me=T(N.internalFormat,_e,se,N.colorSpace);if(!n.get(x).__hasExternalTextures){let Q=Math.max(1,x.width>>Z),W=Math.max(1,x.height>>Z);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,Z,me,Q,W,x.depth,0,_e,se,null):t.texImage2D(K,Z,me,Q,W,0,_e,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),pe(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,n.get(N).__webglTexture,0,Ce(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,K,n.get(N).__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(S,x,N){if(i.bindRenderbuffer(i.RENDERBUFFER,S),x.depthBuffer&&!x.stencilBuffer){let j=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(N||pe(x)){let K=x.depthTexture;K&&K.isDepthTexture&&(K.type===Kn?j=i.DEPTH_COMPONENT32F:K.type===Jn&&(j=i.DEPTH_COMPONENT24));let Z=Ce(x);pe(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,j,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,j,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,j,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(x.depthBuffer&&x.stencilBuffer){let j=Ce(x);N&&pe(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,j,i.DEPTH24_STENCIL8,x.width,x.height):pe(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{let j=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let K=0;K<j.length;K++){let Z=j[K],_e=r.convert(Z.format,Z.colorSpace),se=r.convert(Z.type),me=T(Z.internalFormat,_e,se,Z.colorSpace),Le=Ce(x);N&&pe(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,me,x.width,x.height):pe(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,me,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,me,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);let j=n.get(x.depthTexture).__webglTexture,K=Ce(x);if(x.depthTexture.format===Ai)pe(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(x.depthTexture.format===hs)pe(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Re(S){let x=n.get(S),N=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Oe(x.__webglFramebuffer,S)}else if(N){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]=i.createRenderbuffer(),De(x.__webglDepthbuffer[j],S,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),De(x.__webglDepthbuffer,S,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(S,x,N){let j=n.get(S);x!==void 0&&Me(j.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Re(S)}function I(S){let x=S.texture,N=n.get(S),j=n.get(x);S.addEventListener("dispose",L),S.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=x.version,o.memory.textures++);let K=S.isWebGLCubeRenderTarget===!0,Z=S.isWebGLMultipleRenderTargets===!0,_e=p(S)||a;if(K){N.__webglFramebuffer=[];for(let se=0;se<6;se++)if(a&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[se]=[];for(let me=0;me<x.mipmaps.length;me++)N.__webglFramebuffer[se][me]=i.createFramebuffer()}else N.__webglFramebuffer[se]=i.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let se=0;se<x.mipmaps.length;se++)N.__webglFramebuffer[se]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Z)if(s.drawBuffers){let se=S.texture;for(let me=0,Le=se.length;me<Le;me++){let Q=n.get(se[me]);Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&pe(S)===!1){let se=Z?x:[x];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let me=0;me<se.length;me++){let Le=se[me];N.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[me]);let Q=r.convert(Le.format,Le.colorSpace),W=r.convert(Le.type),ge=T(Le.internalFormat,Q,W,Le.colorSpace,S.isXRRenderTarget===!0),Se=Ce(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,ge,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,N.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),De(N.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),H(i.TEXTURE_CUBE_MAP,x,_e);for(let se=0;se<6;se++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)Me(N.__webglFramebuffer[se][me],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,me);else Me(N.__webglFramebuffer[se],S,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);M(x,_e)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Z){let se=S.texture;for(let me=0,Le=se.length;me<Le;me++){let Q=se[me],W=n.get(Q);t.bindTexture(i.TEXTURE_2D,W.__webglTexture),H(i.TEXTURE_2D,Q,_e),Me(N.__webglFramebuffer,S,Q,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),M(Q,_e)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?se=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,j.__webglTexture),H(se,x,_e),a&&x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)Me(N.__webglFramebuffer[me],S,x,i.COLOR_ATTACHMENT0,se,me);else Me(N.__webglFramebuffer,S,x,i.COLOR_ATTACHMENT0,se,0);M(x,_e)&&_(se),t.unbindTexture()}S.depthBuffer&&Re(S)}function Je(S){let x=p(S)||a,N=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let j=0,K=N.length;j<K;j++){let Z=N[j];if(M(Z,x)){let _e=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,se=n.get(Z).__webglTexture;t.bindTexture(_e,se),_(_e),t.unbindTexture()}}}function we(S){if(a&&S.samples>0&&pe(S)===!1){let x=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],N=S.width,j=S.height,K=i.COLOR_BUFFER_BIT,Z=[],_e=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(S),me=S.isWebGLMultipleRenderTargets===!0;if(me)for(let Le=0;Le<x.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Le=0;Le<x.length;Le++){Z.push(i.COLOR_ATTACHMENT0+Le),S.depthBuffer&&Z.push(_e);let Q=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Q===!1&&(S.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),me&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[Le]),Q===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[_e]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_e])),me){let W=n.get(x[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,W,0)}i.blitFramebuffer(0,0,N,j,0,0,N,j,K,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let Le=0;Le<x.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,se.__webglColorRenderbuffer[Le]);let Q=n.get(x[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function Ce(S){return Math.min(s.maxSamples,S.samples)}function pe(S){let x=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function $e(S){let x=o.render.frame;h.get(S)!==x&&(h.set(S,x),S.update())}function Be(S,x){let N=S.colorSpace,j=S.format,K=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Po||N!==zn&&N!==an&&(Ze.getTransfer(N)===et?a===!1?e.has("EXT_sRGB")===!0&&j===gn?(S.format=Po,S.minFilter=rn,S.generateMipmaps=!1):x=Jr.sRGBToLinear(x):(j!==gn||K!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}this.allocateTextureUnit=U,this.resetTextureUnits=te,this.setTexture2D=V,this.setTexture2DArray=Y,this.setTexture3D=X,this.setTextureCube=G,this.rebindTextures=Ye,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=pe}function N0(i,e,t){let n=t.isWebGL2;function s(r,o=an){let a,l=Ze.getTransfer(o);if(r===Qn)return i.UNSIGNED_BYTE;if(r===Uh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Dh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===md)return i.BYTE;if(r===gd)return i.SHORT;if(r===ml)return i.UNSIGNED_SHORT;if(r===Ih)return i.INT;if(r===Jn)return i.UNSIGNED_INT;if(r===Kn)return i.FLOAT;if(r===Kt)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===_d)return i.ALPHA;if(r===gn)return i.RGBA;if(r===vd)return i.LUMINANCE;if(r===xd)return i.LUMINANCE_ALPHA;if(r===Ai)return i.DEPTH_COMPONENT;if(r===hs)return i.DEPTH_STENCIL;if(r===Po)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===yd)return i.RED;if(r===Nh)return i.RED_INTEGER;if(r===Md)return i.RG;if(r===Fh)return i.RG_INTEGER;if(r===Oh)return i.RGBA_INTEGER;if(r===Xa||r===qa||r===Ya||r===$a)if(l===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Xa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Xa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ya)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$a)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ac||r===oc||r===lc||r===cc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ac)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===oc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===cc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===hc||r===uc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===hc)return l===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===uc)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===dc||r===fc||r===pc||r===mc||r===gc||r===_c||r===vc||r===xc||r===yc||r===Mc||r===bc||r===Sc||r===Ec||r===wc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===dc)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fc)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===pc)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===mc)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gc)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_c)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vc)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xc)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yc)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mc)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bc)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sc)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ec)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wc)return l===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Za||r===Tc||r===Ac)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Za)return l===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Tc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ac)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===bd||r===Rc||r===Cc||r===Pc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Za)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Rc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Cc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Pc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ti?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Wo=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},En=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},F0={type:"move"},Hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,n),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(F0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new En;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Xo=class extends ti{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null,v=t.getContextAttributes(),p=null,d=null,M=[],_=[],T=new ve,C=null,A=new Ot;A.layers.enable(1),A.viewport=new ot;let w=new Ot;w.layers.enable(2),w.viewport=new ot;let L=[A,w],y=new Wo;y.layers.enable(1),y.layers.enable(2);let E=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let $=M[H];return $===void 0&&($=new Hs,M[H]=$),$.getTargetRaySpace()},this.getControllerGrip=function(H){let $=M[H];return $===void 0&&($=new Hs,M[H]=$),$.getGripSpace()},this.getHand=function(H){let $=M[H];return $===void 0&&($=new Hs,M[H]=$),$.getHandSpace()};function q(H){let $=_.indexOf(H.inputSource);if($===-1)return;let re=M[$];re!==void 0&&(re.update(H.inputSource,H.frame,c||o),re.dispatchEvent({type:H.type,data:H.inputSource}))}function te(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",U);for(let H=0;H<M.length;H++){let $=_[H];$!==null&&(_[H]=null,M[H].disconnect($))}E=null,O=null,e.setRenderTarget(p),m=null,f=null,u=null,s=null,d=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",te),s.addEventListener("inputsourceschange",U),v.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let $={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Pt(m.framebufferWidth,m.framebufferHeight,{format:gn,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let $=null,re=null,ye=null;v.depth&&(ye=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=v.stencil?hs:Ai,re=v.stencil?Ti:Jn);let Me={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Me),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new Pt(f.textureWidth,f.textureHeight,{format:gn,type:Qn,depthTexture:new sa(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let De=e.properties.get(d);De.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),le.setContext(s),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function U(H){for(let $=0;$<H.removed.length;$++){let re=H.removed[$],ye=_.indexOf(re);ye>=0&&(_[ye]=null,M[ye].disconnect(re))}for(let $=0;$<H.added.length;$++){let re=H.added[$],ye=_.indexOf(re);if(ye===-1){for(let De=0;De<M.length;De++)if(De>=_.length){_.push(re),ye=De;break}else if(_[De]===null){_[De]=re,ye=De;break}if(ye===-1)break}let Me=M[ye];Me&&Me.connect(re)}}let B=new R,V=new R;function Y(H,$,re){B.setFromMatrixPosition($.matrixWorld),V.setFromMatrixPosition(re.matrixWorld);let ye=B.distanceTo(V),Me=$.projectionMatrix.elements,De=re.projectionMatrix.elements,Oe=Me[14]/(Me[10]-1),Re=Me[14]/(Me[10]+1),Ye=(Me[9]+1)/Me[5],I=(Me[9]-1)/Me[5],Je=(Me[8]-1)/Me[0],we=(De[8]+1)/De[0],Ce=Oe*Je,pe=Oe*we,$e=ye/(-Je+we),Be=$e*-Je;$.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Be),H.translateZ($e),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();let S=Oe+$e,x=Re+$e,N=Ce-Be,j=pe+(ye-Be),K=Ye*Re/x*S,Z=I*Re/x*S;H.projectionMatrix.makePerspective(N,j,K,Z,S,x),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function X(H,$){$===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices($.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;y.near=w.near=A.near=H.near,y.far=w.far=A.far=H.far,(E!==y.near||O!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,O=y.far);let $=H.parent,re=y.cameras;X(y,$);for(let ye=0;ye<re.length;ye++)X(re[ye],$);re.length===2?Y(y,A,w):y.projectionMatrix.copy(A.projectionMatrix),G(H,y,$)};function G(H,$,re){re===null?H.matrix.copy($.matrixWorld):(H.matrix.copy(re.matrixWorld),H.matrix.invert(),H.matrix.multiply($.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Gs*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let J=null;function ee(H,$){if(h=$.getViewerPose(c||o),g=$,h!==null){let re=h.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let ye=!1;re.length!==y.cameras.length&&(y.cameras.length=0,ye=!0);for(let Me=0;Me<re.length;Me++){let De=re[Me],Oe=null;if(m!==null)Oe=m.getViewport(De);else{let Ye=u.getViewSubImage(f,De);Oe=Ye.viewport,Me===0&&(e.setRenderTargetTextures(d,Ye.colorTexture,f.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(d))}let Re=L[Me];Re===void 0&&(Re=new Ot,Re.layers.enable(Me),Re.viewport=new ot,L[Me]=Re),Re.matrix.fromArray(De.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(De.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),Me===0&&(y.matrix.copy(Re.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ye===!0&&y.cameras.push(Re)}}for(let re=0;re<M.length;re++){let ye=_[re],Me=M[re];ye!==null&&Me!==void 0&&Me.update(ye,$,c||o)}J&&J(H,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let le=new Xh;le.setAnimationLoop(ee),this.setAnimationLoop=function(H){J=H},this.dispose=function(){}}};function O0(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Wh(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,M,_,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,T)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),v(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,M,_):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Bt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Bt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let M=e.get(d).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*_,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,M,_){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=_*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Bt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){let M=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function B0(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,_){let T=_.program;n.uniformBlockBinding(M,T)}function c(M,_){let T=s[M.id];T===void 0&&(g(M),T=h(M),s[M.id]=T,M.addEventListener("dispose",p));let C=_.program;n.updateUBOMapping(M,C);let A=e.render.frame;r[M.id]!==A&&(f(M),r[M.id]=A)}function h(M){let _=u();M.__bindingPointIndex=_;let T=i.createBuffer(),C=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,T),T}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let _=s[M.id],T=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,w=T.length;A<w;A++){let L=Array.isArray(T[A])?T[A]:[T[A]];for(let y=0,E=L.length;y<E;y++){let O=L[y];if(m(O,A,y,C)===!0){let q=O.__offset,te=Array.isArray(O.value)?O.value:[O.value],U=0;for(let B=0;B<te.length;B++){let V=te[B],Y=v(V);typeof V=="number"||typeof V=="boolean"?(O.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,q+U,O.__data)):V.isMatrix3?(O.__data[0]=V.elements[0],O.__data[1]=V.elements[1],O.__data[2]=V.elements[2],O.__data[3]=0,O.__data[4]=V.elements[3],O.__data[5]=V.elements[4],O.__data[6]=V.elements[5],O.__data[7]=0,O.__data[8]=V.elements[6],O.__data[9]=V.elements[7],O.__data[10]=V.elements[8],O.__data[11]=0):(V.toArray(O.__data,U),U+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,_,T,C){let A=M.value,w=_+"_"+T;if(C[w]===void 0)return typeof A=="number"||typeof A=="boolean"?C[w]=A:C[w]=A.clone(),!0;{let L=C[w];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return C[w]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(M){let _=M.uniforms,T=0,C=16;for(let w=0,L=_.length;w<L;w++){let y=Array.isArray(_[w])?_[w]:[_[w]];for(let E=0,O=y.length;E<O;E++){let q=y[E],te=Array.isArray(q.value)?q.value:[q.value];for(let U=0,B=te.length;U<B;U++){let V=te[U],Y=v(V),X=T%C;X!==0&&C-X<Y.boundary&&(T+=C-X),q.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=T,T+=Y.storage}}}let A=T%C;return A>0&&(T+=C-A),M.__size=T,M.__cache={},this}function v(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function p(M){let _=M.target;_.removeEventListener("dispose",p);let T=o.indexOf(_.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function d(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var Ys=class{constructor(e={}){let{canvas:t=Yd(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let m=new Uint32Array(4),g=new Int32Array(4),v=null,p=null,d=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this._useLegacyLights=!1,this.toneMapping=jn,this.toneMappingExposure=1;let _=this,T=!1,C=0,A=0,w=null,L=-1,y=null,E=new ot,O=new ot,q=null,te=new xe(0),U=0,B=t.width,V=t.height,Y=1,X=null,G=null,J=new ot(0,0,B,V),ee=new ot(0,0,B,V),le=!1,H=new qs,$=!1,re=!1,ye=null,Me=new ht,De=new ve,Oe=new R,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return w===null?Y:1}let I=n;function Je(b,D){for(let z=0;z<b.length;z++){let k=b[z],F=t.getContext(k,D);if(F!==null)return F}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",ae,!1),I===null){let D=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&D.shift(),I=Je(D,b),I===null)throw Je(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let we,Ce,pe,$e,Be,S,x,N,j,K,Z,_e,se,me,Le,Q,W,ge,Se,Te,be,ce,Pe,Ke;function dt(){we=new ig(I),Ce=new Km(I,we,e),we.init(Ce),ce=new N0(I,we,Ce),pe=new U0(I,we,Ce),$e=new ag(I),Be=new M0,S=new D0(I,we,pe,Be,Ce,ce,$e),x=new Qm(_),N=new ng(_),j=new pf(I,Ce),Pe=new Zm(I,we,j,Ce),K=new sg(I,j,$e,Pe),Z=new hg(I,K,j,$e),Se=new cg(I,Ce,S),Q=new jm(Be),_e=new y0(_,x,N,we,Ce,Pe,Q),se=new O0(_,Be),me=new S0,Le=new C0(we,Ce),ge=new $m(_,x,N,pe,Z,f,l),W=new I0(_,Z,Ce),Ke=new B0(I,$e,Ce,pe),Te=new Jm(I,we,$e,Ce),be=new rg(I,we,$e,Ce),$e.programs=_e.programs,_.capabilities=Ce,_.extensions=we,_.properties=Be,_.renderLists=me,_.shadowMap=W,_.state=pe,_.info=$e}dt();let We=new Xo(_,I);this.xr=We,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let b=we.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=we.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(B,V,!1))},this.getSize=function(b){return b.set(B,V)},this.setSize=function(b,D,z=!0){if(We.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=b,V=D,t.width=Math.floor(b*Y),t.height=Math.floor(D*Y),z===!0&&(t.style.width=b+"px",t.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(B*Y,V*Y).floor()},this.setDrawingBufferSize=function(b,D,z){B=b,V=D,Y=z,t.width=Math.floor(b*z),t.height=Math.floor(D*z),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(J)},this.setViewport=function(b,D,z,k){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,D,z,k),pe.viewport(E.copy(J).multiplyScalar(Y).floor())},this.getScissor=function(b){return b.copy(ee)},this.setScissor=function(b,D,z,k){b.isVector4?ee.set(b.x,b.y,b.z,b.w):ee.set(b,D,z,k),pe.scissor(O.copy(ee).multiplyScalar(Y).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(b){pe.setScissorTest(le=b)},this.setOpaqueSort=function(b){X=b},this.setTransparentSort=function(b){G=b},this.getClearColor=function(b){return b.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(b=!0,D=!0,z=!0){let k=0;if(b){let F=!1;if(w!==null){let he=w.texture.format;F=he===Oh||he===Fh||he===Nh}if(F){let he=w.texture.type,Ee=he===Qn||he===Jn||he===ml||he===Ti||he===Uh||he===Dh,Ue=ge.getClearColor(),Fe=ge.getClearAlpha(),Ve=Ue.r,ze=Ue.g,ke=Ue.b;Ee?(m[0]=Ve,m[1]=ze,m[2]=ke,m[3]=Fe,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=Ve,g[1]=ze,g[2]=ke,g[3]=Fe,I.clearBufferiv(I.COLOR,0,g))}else k|=I.COLOR_BUFFER_BIT}D&&(k|=I.DEPTH_BUFFER_BIT),z&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),me.dispose(),Le.dispose(),Be.dispose(),x.dispose(),N.dispose(),Z.dispose(),Pe.dispose(),Ke.dispose(),_e.dispose(),We.dispose(),We.removeEventListener("sessionstart",kt),We.removeEventListener("sessionend",it),ye&&(ye.dispose(),ye=null),Ht.stop()};function ne(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let b=$e.autoReset,D=W.enabled,z=W.autoUpdate,k=W.needsUpdate,F=W.type;dt(),$e.autoReset=b,W.enabled=D,W.autoUpdate=z,W.needsUpdate=k,W.type=F}function ae(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function oe(b){let D=b.target;D.removeEventListener("dispose",oe),Ne(D)}function Ne(b){Ie(b),Be.remove(b)}function Ie(b){let D=Be.get(b).programs;D!==void 0&&(D.forEach(function(z){_e.releaseProgram(z)}),b.isShaderMaterial&&_e.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,z,k,F,he){D===null&&(D=Re);let Ee=F.isMesh&&F.matrixWorld.determinant()<0,Ue=Nu(b,D,z,k,F);pe.setMaterial(k,Ee);let Fe=z.index,Ve=1;if(k.wireframe===!0){if(Fe=K.getWireframeAttribute(z),Fe===void 0)return;Ve=2}let ze=z.drawRange,ke=z.attributes.position,gt=ze.start*Ve,$t=(ze.start+ze.count)*Ve;he!==null&&(gt=Math.max(gt,he.start*Ve),$t=Math.min($t,(he.start+he.count)*Ve)),Fe!==null?(gt=Math.max(gt,0),$t=Math.min($t,Fe.count)):ke!=null&&(gt=Math.max(gt,0),$t=Math.min($t,ke.count));let At=$t-gt;if(At<0||At===1/0)return;Pe.setup(F,k,Ue,z,Fe);let Cn,ct=Te;if(Fe!==null&&(Cn=j.get(Fe),ct=be,ct.setIndex(Cn)),F.isMesh)k.wireframe===!0?(pe.setLineWidth(k.wireframeLinewidth*Ye()),ct.setMode(I.LINES)):ct.setMode(I.TRIANGLES);else if(F.isLine){let Xe=k.linewidth;Xe===void 0&&(Xe=1),pe.setLineWidth(Xe*Ye()),F.isLineSegments?ct.setMode(I.LINES):F.isLineLoop?ct.setMode(I.LINE_LOOP):ct.setMode(I.LINE_STRIP)}else F.isPoints?ct.setMode(I.POINTS):F.isSprite&&ct.setMode(I.TRIANGLES);if(F.isBatchedMesh)ct.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)ct.renderInstances(gt,At,F.count);else if(z.isInstancedBufferGeometry){let Xe=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ka=Math.min(z.instanceCount,Xe);ct.renderInstances(gt,At,ka)}else ct.render(gt,At)};function tt(b,D,z){b.transparent===!0&&b.side===Fn&&b.forceSinglePass===!1?(b.side=Bt,b.needsUpdate=!0,dr(b,D,z),b.side=ei,b.needsUpdate=!0,dr(b,D,z),b.side=Fn):dr(b,D,z)}this.compile=function(b,D,z=null){z===null&&(z=b),p=Le.get(z),p.init(),M.push(p),z.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),b!==z&&b.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(_._useLegacyLights);let k=new Set;return b.traverse(function(F){let he=F.material;if(he)if(Array.isArray(he))for(let Ee=0;Ee<he.length;Ee++){let Ue=he[Ee];tt(Ue,z,F),k.add(Ue)}else tt(he,z,F),k.add(he)}),M.pop(),p=null,k},this.compileAsync=function(b,D,z=null){let k=this.compile(b,D,z);return new Promise(F=>{function he(){if(k.forEach(function(Ee){Be.get(Ee).currentProgram.isReady()&&k.delete(Ee)}),k.size===0){F(b);return}setTimeout(he,10)}we.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let nt=null;function Tt(b){nt&&nt(b)}function kt(){Ht.stop()}function it(){Ht.start()}let Ht=new Xh;Ht.setAnimationLoop(Tt),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(b){nt=b,We.setAnimationLoop(b),b===null?Ht.stop():Ht.start()},We.addEventListener("sessionstart",kt),We.addEventListener("sessionend",it),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(We.cameraAutoUpdate===!0&&We.updateCamera(D),D=We.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,D,w),p=Le.get(b,M.length),p.init(),M.push(p),Me.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),H.setFromProjectionMatrix(Me),re=this.localClippingEnabled,$=Q.init(this.clippingPlanes,re),v=me.get(b,d.length),v.init(),d.push(v),Mn(b,D,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(X,G),this.info.render.frame++,$===!0&&Q.beginShadows();let z=p.state.shadowsArray;if(W.render(z,b,D),$===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset(),ge.render(v,b),p.setupLights(_._useLegacyLights),D.isArrayCamera){let k=D.cameras;for(let F=0,he=k.length;F<he;F++){let Ee=k[F];$l(v,b,Ee,Ee.viewport)}}else $l(v,b,D);w!==null&&(S.updateMultisampleRenderTarget(w),S.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(_,b,D),Pe.resetDefaultState(),L=-1,y=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function Mn(b,D,z,k){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||H.intersectsSprite(b)){k&&Oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Me);let Ee=Z.update(b),Ue=b.material;Ue.visible&&v.push(b,Ee,Ue,z,Oe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||H.intersectsObject(b))){let Ee=Z.update(b),Ue=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Oe.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Oe.copy(Ee.boundingSphere.center)),Oe.applyMatrix4(b.matrixWorld).applyMatrix4(Me)),Array.isArray(Ue)){let Fe=Ee.groups;for(let Ve=0,ze=Fe.length;Ve<ze;Ve++){let ke=Fe[Ve],gt=Ue[ke.materialIndex];gt&&gt.visible&&v.push(b,Ee,gt,z,Oe.z,ke)}}else Ue.visible&&v.push(b,Ee,Ue,z,Oe.z,null)}}let he=b.children;for(let Ee=0,Ue=he.length;Ee<Ue;Ee++)Mn(he[Ee],D,z,k)}function $l(b,D,z,k){let F=b.opaque,he=b.transmissive,Ee=b.transparent;p.setupLightsView(z),$===!0&&Q.setGlobalState(_.clippingPlanes,z),he.length>0&&Du(F,he,D,z),k&&pe.viewport(E.copy(k)),F.length>0&&ur(F,D,z),he.length>0&&ur(he,D,z),Ee.length>0&&ur(Ee,D,z),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Du(b,D,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let he=Ce.isWebGL2;ye===null&&(ye=new Pt(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?Kt:Qn,minFilter:Vs,samples:he?4:0})),_.getDrawingBufferSize(De),he?ye.setSize(De.x,De.y):ye.setSize($r(De.x),$r(De.y));let Ee=_.getRenderTarget();_.setRenderTarget(ye),_.getClearColor(te),U=_.getClearAlpha(),U<1&&_.setClearColor(16777215,.5),_.clear();let Ue=_.toneMapping;_.toneMapping=jn,ur(b,z,k),S.updateMultisampleRenderTarget(ye),S.updateRenderTargetMipmap(ye);let Fe=!1;for(let Ve=0,ze=D.length;Ve<ze;Ve++){let ke=D[Ve],gt=ke.object,$t=ke.geometry,At=ke.material,Cn=ke.group;if(At.side===Fn&&gt.layers.test(k.layers)){let ct=At.side;At.side=Bt,At.needsUpdate=!0,Zl(gt,z,k,$t,At,Cn),At.side=ct,At.needsUpdate=!0,Fe=!0}}Fe===!0&&(S.updateMultisampleRenderTarget(ye),S.updateRenderTargetMipmap(ye)),_.setRenderTarget(Ee),_.setClearColor(te,U),_.toneMapping=Ue}function ur(b,D,z){let k=D.isScene===!0?D.overrideMaterial:null;for(let F=0,he=b.length;F<he;F++){let Ee=b[F],Ue=Ee.object,Fe=Ee.geometry,Ve=k===null?Ee.material:k,ze=Ee.group;Ue.layers.test(z.layers)&&Zl(Ue,D,z,Fe,Ve,ze)}}function Zl(b,D,z,k,F,he){b.onBeforeRender(_,D,z,k,F,he),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(_,D,z,k,b,he),F.transparent===!0&&F.side===Fn&&F.forceSinglePass===!1?(F.side=Bt,F.needsUpdate=!0,_.renderBufferDirect(z,D,k,F,b,he),F.side=ei,F.needsUpdate=!0,_.renderBufferDirect(z,D,k,F,b,he),F.side=Fn):_.renderBufferDirect(z,D,k,F,b,he),b.onAfterRender(_,D,z,k,F,he)}function dr(b,D,z){D.isScene!==!0&&(D=Re);let k=Be.get(b),F=p.state.lights,he=p.state.shadowsArray,Ee=F.state.version,Ue=_e.getParameters(b,F.state,he,D,z),Fe=_e.getProgramCacheKey(Ue),Ve=k.programs;k.environment=b.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(b.isMeshStandardMaterial?N:x).get(b.envMap||k.environment),Ve===void 0&&(b.addEventListener("dispose",oe),Ve=new Map,k.programs=Ve);let ze=Ve.get(Fe);if(ze!==void 0){if(k.currentProgram===ze&&k.lightsStateVersion===Ee)return Kl(b,Ue),ze}else Ue.uniforms=_e.getUniforms(b),b.onBuild(z,Ue,_),b.onBeforeCompile(Ue,_),ze=_e.acquireProgram(Ue,Fe),Ve.set(Fe,ze),k.uniforms=Ue.uniforms;let ke=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ke.clippingPlanes=Q.uniform),Kl(b,Ue),k.needsLights=Ou(b),k.lightsStateVersion=Ee,k.needsLights&&(ke.ambientLightColor.value=F.state.ambient,ke.lightProbe.value=F.state.probe,ke.directionalLights.value=F.state.directional,ke.directionalLightShadows.value=F.state.directionalShadow,ke.spotLights.value=F.state.spot,ke.spotLightShadows.value=F.state.spotShadow,ke.rectAreaLights.value=F.state.rectArea,ke.ltc_1.value=F.state.rectAreaLTC1,ke.ltc_2.value=F.state.rectAreaLTC2,ke.pointLights.value=F.state.point,ke.pointLightShadows.value=F.state.pointShadow,ke.hemisphereLights.value=F.state.hemi,ke.directionalShadowMap.value=F.state.directionalShadowMap,ke.directionalShadowMatrix.value=F.state.directionalShadowMatrix,ke.spotShadowMap.value=F.state.spotShadowMap,ke.spotLightMatrix.value=F.state.spotLightMatrix,ke.spotLightMap.value=F.state.spotLightMap,ke.pointShadowMap.value=F.state.pointShadowMap,ke.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=ze,k.uniformsList=null,ze}function Jl(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=os.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function Kl(b,D){let z=Be.get(b);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function Nu(b,D,z,k,F){D.isScene!==!0&&(D=Re),S.resetTextureUnits();let he=D.fog,Ee=k.isMeshStandardMaterial?D.environment:null,Ue=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:zn,Fe=(k.isMeshStandardMaterial?N:x).get(k.envMap||Ee),Ve=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,ze=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),ke=!!z.morphAttributes.position,gt=!!z.morphAttributes.normal,$t=!!z.morphAttributes.color,At=jn;k.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(At=_.toneMapping);let Cn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ct=Cn!==void 0?Cn.length:0,Xe=Be.get(k),ka=p.state.lights;if($===!0&&(re===!0||b!==y)){let nn=b===y&&k.id===L;Q.setState(k,b,nn)}let ft=!1;k.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==ka.state.version||Xe.outputColorSpace!==Ue||F.isBatchedMesh&&Xe.batching===!1||!F.isBatchedMesh&&Xe.batching===!0||F.isInstancedMesh&&Xe.instancing===!1||!F.isInstancedMesh&&Xe.instancing===!0||F.isSkinnedMesh&&Xe.skinning===!1||!F.isSkinnedMesh&&Xe.skinning===!0||F.isInstancedMesh&&Xe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Xe.instancingColor===!1&&F.instanceColor!==null||Xe.envMap!==Fe||k.fog===!0&&Xe.fog!==he||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Q.numPlanes||Xe.numIntersection!==Q.numIntersection)||Xe.vertexAlphas!==Ve||Xe.vertexTangents!==ze||Xe.morphTargets!==ke||Xe.morphNormals!==gt||Xe.morphColors!==$t||Xe.toneMapping!==At||Ce.isWebGL2===!0&&Xe.morphTargetsCount!==ct)&&(ft=!0):(ft=!0,Xe.__version=k.version);let gi=Xe.currentProgram;ft===!0&&(gi=dr(k,D,F));let jl=!1,Cs=!1,Ha=!1,Ut=gi.getUniforms(),_i=Xe.uniforms;if(pe.useProgram(gi.program)&&(jl=!0,Cs=!0,Ha=!0),k.id!==L&&(L=k.id,Cs=!0),jl||y!==b){Ut.setValue(I,"projectionMatrix",b.projectionMatrix),Ut.setValue(I,"viewMatrix",b.matrixWorldInverse);let nn=Ut.map.cameraPosition;nn!==void 0&&nn.setValue(I,Oe.setFromMatrixPosition(b.matrixWorld)),Ce.logarithmicDepthBuffer&&Ut.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ut.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Cs=!0,Ha=!0)}if(F.isSkinnedMesh){Ut.setOptional(I,F,"bindMatrix"),Ut.setOptional(I,F,"bindMatrixInverse");let nn=F.skeleton;nn&&(Ce.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),Ut.setValue(I,"boneTexture",nn.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(Ut.setOptional(I,F,"batchingTexture"),Ut.setValue(I,"batchingTexture",F._matricesTexture,S));let Va=z.morphAttributes;if((Va.position!==void 0||Va.normal!==void 0||Va.color!==void 0&&Ce.isWebGL2===!0)&&Se.update(F,z,gi),(Cs||Xe.receiveShadow!==F.receiveShadow)&&(Xe.receiveShadow=F.receiveShadow,Ut.setValue(I,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(_i.envMap.value=Fe,_i.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Cs&&(Ut.setValue(I,"toneMappingExposure",_.toneMappingExposure),Xe.needsLights&&Fu(_i,Ha),he&&k.fog===!0&&se.refreshFogUniforms(_i,he),se.refreshMaterialUniforms(_i,k,Y,V,ye),os.upload(I,Jl(Xe),_i,S)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(os.upload(I,Jl(Xe),_i,S),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ut.setValue(I,"center",F.center),Ut.setValue(I,"modelViewMatrix",F.modelViewMatrix),Ut.setValue(I,"normalMatrix",F.normalMatrix),Ut.setValue(I,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let nn=k.uniformsGroups;for(let Ga=0,Bu=nn.length;Ga<Bu;Ga++)if(Ce.isWebGL2){let Ql=nn[Ga];Ke.update(Ql,gi),Ke.bind(Ql,gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gi}function Fu(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function Ou(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,D,z){Be.get(b.texture).__webglTexture=D,Be.get(b.depthTexture).__webglTexture=z;let k=Be.get(b);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,D){let z=Be.get(b);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,z=0){w=b,C=D,A=z;let k=!0,F=null,he=!1,Ee=!1;if(b){let Fe=Be.get(b);Fe.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(I.FRAMEBUFFER,null),k=!1):Fe.__webglFramebuffer===void 0?S.setupRenderTarget(b):Fe.__hasExternalTextures&&S.rebindTextures(b,Be.get(b.texture).__webglTexture,Be.get(b.depthTexture).__webglTexture);let Ve=b.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ee=!0);let ze=Be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ze[D])?F=ze[D][z]:F=ze[D],he=!0):Ce.isWebGL2&&b.samples>0&&S.useMultisampledRTT(b)===!1?F=Be.get(b).__webglMultisampledFramebuffer:Array.isArray(ze)?F=ze[z]:F=ze,E.copy(b.viewport),O.copy(b.scissor),q=b.scissorTest}else E.copy(J).multiplyScalar(Y).floor(),O.copy(ee).multiplyScalar(Y).floor(),q=le;if(pe.bindFramebuffer(I.FRAMEBUFFER,F)&&Ce.drawBuffers&&k&&pe.drawBuffers(b,F),pe.viewport(E),pe.scissor(O),pe.setScissorTest(q),he){let Fe=Be.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,Fe.__webglTexture,z)}else if(Ee){let Fe=Be.get(b.texture),Ve=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Fe.__webglTexture,z||0,Ve)}L=-1},this.readRenderTargetPixels=function(b,D,z,k,F,he,Ee){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ue=Ue[Ee]),Ue){pe.bindFramebuffer(I.FRAMEBUFFER,Ue);try{let Fe=b.texture,Ve=Fe.format,ze=Fe.type;if(Ve!==gn&&ce.convert(Ve)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ke=ze===Kt&&(we.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&we.has("EXT_color_buffer_float"));if(ze!==Qn&&ce.convert(ze)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===Kn&&(Ce.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-k&&z>=0&&z<=b.height-F&&I.readPixels(D,z,k,F,ce.convert(Ve),ce.convert(ze),he)}finally{let Fe=w!==null?Be.get(w).__webglFramebuffer:null;pe.bindFramebuffer(I.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(b,D,z=0){let k=Math.pow(2,-z),F=Math.floor(D.image.width*k),he=Math.floor(D.image.height*k);S.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,b.x,b.y,F,he),pe.unbindTexture()},this.copyTextureToTexture=function(b,D,z,k=0){let F=D.image.width,he=D.image.height,Ee=ce.convert(z.format),Ue=ce.convert(z.type);S.setTexture2D(z,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment),D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,k,b.x,b.y,F,he,Ee,Ue,D.image.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,k,b.x,b.y,D.mipmaps[0].width,D.mipmaps[0].height,Ee,D.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,k,b.x,b.y,Ee,Ue,D.image),k===0&&z.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(b,D,z,k,F=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let he=b.max.x-b.min.x+1,Ee=b.max.y-b.min.y+1,Ue=b.max.z-b.min.z+1,Fe=ce.convert(k.format),Ve=ce.convert(k.type),ze;if(k.isData3DTexture)S.setTexture3D(k,0),ze=I.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)S.setTexture2DArray(k,0),ze=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);let ke=I.getParameter(I.UNPACK_ROW_LENGTH),gt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),$t=I.getParameter(I.UNPACK_SKIP_PIXELS),At=I.getParameter(I.UNPACK_SKIP_ROWS),Cn=I.getParameter(I.UNPACK_SKIP_IMAGES),ct=z.isCompressedTexture?z.mipmaps[F]:z.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ct.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ct.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,b.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,b.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,b.min.z),z.isDataTexture||z.isData3DTexture?I.texSubImage3D(ze,F,D.x,D.y,D.z,he,Ee,Ue,Fe,Ve,ct.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(ze,F,D.x,D.y,D.z,he,Ee,Ue,Fe,ct.data)):I.texSubImage3D(ze,F,D.x,D.y,D.z,he,Ee,Ue,Fe,Ve,ct),I.pixelStorei(I.UNPACK_ROW_LENGTH,ke),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$t),I.pixelStorei(I.UNPACK_SKIP_ROWS,At),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Cn),F===0&&k.generateMipmaps&&I.generateMipmap(ze),pe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),pe.unbindTexture()},this.resetState=function(){C=0,A=0,w=null,pe.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===gl?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===ga?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===St?Ri:zh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ri?St:zn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},qo=class extends Ys{};qo.prototype.isWebGL1Renderer=!0;var $s=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Yo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Co,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Vt=new R,ra=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new st(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zs=class extends kn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qi,Ds=new R,es=new R,ts=new R,ns=new ve,Ns=new ve,Kh=new ht,Nr=new R,Fs=new R,Fr=new R,yh=new ve,yo=new ve,Mh=new ve,aa=class extends zt{constructor(e=new Zs){if(super(),this.isSprite=!0,this.type="Sprite",Qi===void 0){Qi=new Lt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Yo(t,5);Qi.setIndex([0,1,2,0,2,3]),Qi.setAttribute("position",new ra(n,3,0,!1)),Qi.setAttribute("uv",new ra(n,2,3,!1))}this.geometry=Qi,this.material=e,this.center=new ve(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),es.setFromMatrixScale(this.matrixWorld),Kh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ts.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&es.multiplyScalar(-ts.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Or(Nr.set(-.5,-.5,0),ts,o,es,s,r),Or(Fs.set(.5,-.5,0),ts,o,es,s,r),Or(Fr.set(.5,.5,0),ts,o,es,s,r),yh.set(0,0),yo.set(1,0),Mh.set(1,1);let a=e.ray.intersectTriangle(Nr,Fs,Fr,!1,Ds);if(a===null&&(Or(Fs.set(-.5,.5,0),ts,o,es,s,r),yo.set(0,1),a=e.ray.intersectTriangle(Nr,Fr,Fs,!1,Ds),a===null))return;let l=e.ray.origin.distanceTo(Ds);l<e.near||l>e.far||t.push({distance:l,point:Ds.clone(),uv:wi.getInterpolation(Ds,Nr,Fs,Fr,yh,yo,Mh,new ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Or(i,e,t,n,s,r){ns.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ns.x=r*ns.x-s*ns.y,Ns.y=s*ns.x+r*ns.y):Ns.copy(ns),i.copy(e),i.x+=Ns.x,i.y+=Ns.y,i.applyMatrix4(Kh)}var $o=class extends kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bh=new ht,Zo=new Ws,Br=new us,zr=new R,ms=class extends zt{constructor(e=new Lt,t=new $o){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(s),Br.radius+=r,e.ray.intersectsSphere(Br)===!1)return;bh.copy(s).invert(),Zo.copy(e.ray).applyMatrix4(bh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,v=m;g<v;g++){let p=c.getX(g);zr.fromBufferAttribute(u,p),Sh(zr,p,l,s,e,t,this)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=f,v=m;g<v;g++)zr.fromBufferAttribute(u,g),Sh(zr,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Sh(i,e,t,n,s,r,o){let a=Zo.distanceSqToPoint(i);if(a<t){let l=new R;Zo.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var oa=class extends on{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Jo=class i extends Lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Ct(r,3)),this.setAttribute("normal",new Ct(r.slice(),3)),this.setAttribute("uv",new Ct(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let _=new R,T=new R,C=new R;for(let A=0;A<t.length;A+=3)m(t[A+0],_),m(t[A+1],T),m(t[A+2],C),l(_,T,C,M)}function l(M,_,T,C){let A=C+1,w=[];for(let L=0;L<=A;L++){w[L]=[];let y=M.clone().lerp(T,L/A),E=_.clone().lerp(T,L/A),O=A-L;for(let q=0;q<=O;q++)q===0&&L===A?w[L][q]=y:w[L][q]=y.clone().lerp(E,q/O)}for(let L=0;L<A;L++)for(let y=0;y<2*(A-L)-1;y++){let E=Math.floor(y/2);y%2===0?(f(w[L][E+1]),f(w[L+1][E]),f(w[L][E])):(f(w[L][E+1]),f(w[L+1][E+1]),f(w[L+1][E]))}}function c(M){let _=new R;for(let T=0;T<r.length;T+=3)_.x=r[T+0],_.y=r[T+1],_.z=r[T+2],_.normalize().multiplyScalar(M),r[T+0]=_.x,r[T+1]=_.y,r[T+2]=_.z}function h(){let M=new R;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let T=p(M)/2/Math.PI+.5,C=d(M)/Math.PI+.5;o.push(T,1-C)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){let _=o[M+0],T=o[M+2],C=o[M+4],A=Math.max(_,T,C),w=Math.min(_,T,C);A>.9&&w<.1&&(_<.2&&(o[M+0]+=1),T<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function m(M,_){let T=M*3;_.x=e[T+0],_.y=e[T+1],_.z=e[T+2]}function g(){let M=new R,_=new R,T=new R,C=new R,A=new ve,w=new ve,L=new ve;for(let y=0,E=0;y<r.length;y+=9,E+=6){M.set(r[y+0],r[y+1],r[y+2]),_.set(r[y+3],r[y+4],r[y+5]),T.set(r[y+6],r[y+7],r[y+8]),A.set(o[E+0],o[E+1]),w.set(o[E+2],o[E+3]),L.set(o[E+4],o[E+5]),C.copy(M).add(_).add(T).divideScalar(3);let O=p(C);v(A,E+0,M,O),v(w,E+2,_,O),v(L,E+4,T,O)}}function v(M,_,T,C){C<0&&M.x===1&&(o[_]=M.x-1),T.x===0&&T.z===0&&(o[_]=C/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var la=class i extends Jo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ca=class i extends Lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new R,f=new R,m=[],g=[],v=[],p=[];for(let d=0;d<=n;d++){let M=[],_=d/n,T=0;d===0&&o===0?T=.5/t:d===n&&l===Math.PI&&(T=-.5/t);for(let C=0;C<=t;C++){let A=C/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),p.push(A+T,1-_),M.push(c++)}h.push(M)}for(let d=0;d<n;d++)for(let M=0;M<t;M++){let _=h[d][M+1],T=h[d][M],C=h[d+1][M],A=h[d+1][M+1];(d!==0||o>0)&&m.push(_,T,A),(d!==n-1||l<Math.PI)&&m.push(T,C,A)}this.setIndex(m),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(v,3)),this.setAttribute("uv",new Ct(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ha=class extends lt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ko=class extends kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kh,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ua=class extends Ko{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function kr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function z0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var gs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},jo=class extends gs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lc,endingEnd:Lc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ic:r=e,a=2*t-n;break;case Uc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ic:o=e,l=2*n-t;break;case Uc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),v=g*g,p=v*g,d=-f*p+2*f*v-f*g,M=(1+f)*p+(-1.5-2*f)*v+(-.5+f)*g+1,_=(-1-m)*p+(1.5+m)*v+.5*g,T=m*p-m*v;for(let C=0;C!==a;++C)r[C]=d*o[h+C]+M*o[c+C]+_*o[l+C]+T*o[u+C];return r}},Qo=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},el=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},_n=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=kr(t,this.TimeBufferType),this.values=kr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:kr(e.times,Array),values:kr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new el(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vr:t=this.InterpolantFactoryMethodDiscrete;break;case Gr:t=this.InterpolantFactoryMethodLinear;break;case Ja:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return Gr;case this.InterpolantFactoryMethodSmooth:return Ja}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&z0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ja,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,f=u-n,m=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[f+g]||v!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let m=0;m!==n;++m)t[f+m]=t[u+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=Gr;var Li=class extends _n{};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Vr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var tl=class extends _n{};tl.prototype.ValueTypeName="color";var nl=class extends _n{};nl.prototype.ValueTypeName="number";var il=class extends gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)ni.slerpFlat(r,0,o,c-a,o,c,l);return r}},Js=class extends _n{InterpolantFactoryMethodLinear(e){return new il(this.times,this.values,this.getValueSize(),e)}};Js.prototype.ValueTypeName="quaternion";Js.prototype.DefaultInterpolation=Gr;Js.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends _n{};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Vr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends _n{};sl.prototype.ValueTypeName="vector";var rl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},k0=new rl,al=class{constructor(e){this.manager=e!==void 0?e:k0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};al.DEFAULT_MATERIAL_NAME="__DEFAULT";var da=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Mo=new ht,Eh=new R,wh=new R,fa=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Eh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eh),wh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wh),t.updateMatrixWorld(),Mo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Mo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Th=new ht,Os=new R,bo=new R,ol=class extends fa{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Os.setFromMatrixPosition(e.matrixWorld),n.position.copy(Os),bo.copy(n.position),bo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(bo),n.updateMatrixWorld(),s.makeTranslation(-Os.x,-Os.y,-Os.z),Th.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Th)}},pa=class extends da{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ol}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ll=class extends fa{constructor(){super(new fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ks=class extends da{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new ll}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var _s=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ah(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Ah();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Ah(){return(typeof performance>"u"?Date:performance).now()}var xl="\\[\\]\\.:\\/",H0=new RegExp("["+xl+"]","g"),yl="[^"+xl+"]",V0="[^"+xl.replace("\\.","")+"]",G0=/((?:WC+[\/:])*)/.source.replace("WC",yl),W0=/(WCOD+)?/.source.replace("WCOD",V0),X0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yl),q0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yl),Y0=new RegExp("^"+G0+W0+X0+q0+"$"),$0=["material","materials","bones","map"],cl=class{constructor(e,t,n){let s=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},at=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(H0,"")}static parseTrackName(e){let t=Y0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};at.Composite=cl;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var w_=new Float32Array(1);var Ui=class{constructor(e,t,n=0,s=1/0){this.ray=new Ws(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Xs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return hl(e,this,n,t),n.sort(Rh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)hl(e[s],this,n,t);return n.sort(Rh),n}};function Rh(i,e){return i.distance-e.distance}function hl(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)hl(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var xa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var jt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Z0=new fs(-1,1,1,-1,0,1),Ml=class extends Lt{constructor(){super(),this.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ct([0,2,0,0,2,0],2))}},J0=new Ml,ri=class{constructor(e){this._mesh=new pt(J0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Z0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var xs=class extends jt{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=si.clone(e.uniforms),this.material=new lt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ri(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var er=class extends jt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ya=class extends jt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ma=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ve);this._width=n.width,this._height=n.height,t=new Pt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xs(xa),this.copyPass.material.blending=wn,this.clock=new _s}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}er!==void 0&&(o instanceof er?n=!0:o instanceof ya&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ba=class extends jt{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var jh={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ys=class i extends jt{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ve(e.x,e.y):new ve(256,256),this.clearColor=new xe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Pt(r,o,{type:Kt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Pt(r,o,{type:Kt});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let m=new Pt(r,o,{type:Kt});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let a=jh;this.highPassUniforms=si.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new lt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ve(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=xa;this.copyUniforms=si.clone(h.uniforms),this.blendMaterial=new lt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Tn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new xe,this.oldClearAlpha=1,this.basic=new Yt,this.fsQuad=new ri(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ve(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new lt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ve(.5,.5)},direction:{value:new ve(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new lt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};ys.BlurDirectionX=new ve(1,0);ys.BlurDirectionY=new ve(0,1);var Qh={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Sa=class extends jt{constructor(){super();let e=Qh;this.uniforms=si.clone(e.uniforms),this.material=new ha({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ri(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ul?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===js?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===pl&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var bl=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),Ea=(i,e,t)=>i+(e-i)*t,tr=`
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);
vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;
vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);
vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;
return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}`,K0=`
uniform float uLobe, uRead, uSq, uWob, uTime, uStretch;
float smaxf(float a,float b,float k){float h=clamp(0.5+0.5*(a-b)/k,0.,1.);return mix(b,a,h)+k*h*(1.-h);}
vec3 shapeP(vec3 d){
  vec3 L1=normalize(vec3(-0.5,0.84,0.18)); vec3 L2=normalize(vec3(0.42,0.9,0.12)); vec3 L3=normalize(vec3(0.97,0.05,0.2)); vec3 L4=normalize(vec3(0.7,-0.6,0.35));
  float a1=acos(clamp(dot(d,L1),-1.,1.)); float a2=acos(clamp(dot(d,L2),-1.,1.)); float a3=acos(clamp(dot(d,L3),-1.,1.)); float a4=acos(clamp(dot(d,L4),-1.,1.));
  float r=1.0+uLobe*(0.22*exp(-a1*a1/0.30)-0.12*exp(-a2*a2/0.10)+0.07*exp(-a3*a3/0.25)+0.09*exp(-a4*a4/0.35));
  vec3 p=d*r; p*=vec3(1.16,0.96,0.90);
  p.y=smaxf(p.y,-0.80,0.30);
  vec3 lens=d*vec3(1.36,0.82,1.0); lens.y=smaxf(lens.y,-0.58,0.22); lens.y=-smaxf(-lens.y,-0.6,0.22);
  p=mix(p,lens,uRead);
  p.y*=uSq; p.xz*=inversesqrt(max(uSq,0.2));
  p.x*=uStretch; p.yz*=inversesqrt(max(uStretch,0.2));
  p+=d*snoise(d*1.4+vec3(uTime*0.22,uTime*0.17,0.))*uWob;
  return p;
}`,ai=class i{constructor({detail:e=96}={}){this.group=new En,this.body=new En,this.group.add(this.body),this.p={lobe:1,read:0,sq:1,stretch:1,wob:.016,inner:1,glow:0,eyes:1,lookX:0,lookY:0,light:0,tint:0,rim:.6,blush:0,eyeW:1,eyeH:1,happy:0},this.tgt={...this.p},this.k=6,this.blinkT=1.5,this.blink=1,this.winkT=0;let t=this.uniforms={uLobe:{value:1},uRead:{value:0},uSq:{value:1},uStretch:{value:1},uWob:{value:.016},uTime:{value:0},uInner:{value:1},uLight:{value:0},uTint:{value:0},uRim:{value:.6},uBlush:{value:0},uB1:{value:new R},uB2:{value:new R},uRimC:{value:new xe("#FFB089")},uPeach:{value:new xe("#FF8A4C")},uPeach2:{value:new xe("#FFC9A6")},uEmber:{value:new xe("#FF5A1F")},uGlowC:{value:new R(.12,-.28,.6)},uGlowR:{value:.62}},n=this.mat=new ua({color:new xe("#F3ECE6"),roughness:.5,metalness:0,clearcoat:.35,clearcoatRoughness:.35,sheen:.8,sheenColor:new xe("#FFD2B8"),sheenRoughness:.6,envMapIntensity:.75});n.onBeforeCompile=l=>{Object.assign(l.uniforms,t),l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
`+tr+K0+`
varying vec3 vObj;`).replace("#include <beginnormal_vertex>",`
          vec3 dd=normalize(position); vec3 up_=abs(dd.y)<0.99?vec3(0.,1.,0.):vec3(1.,0.,0.);
          vec3 t1=normalize(cross(dd,up_)); vec3 t2=cross(dd,t1); float ee=0.012;
          vec3 sp=shapeP(dd); vec3 pa=shapeP(normalize(dd+t1*ee)); vec3 pb=shapeP(normalize(dd+t2*ee));
          vec3 objectNormal=normalize(cross(pa-sp,pb-sp)); if(dot(objectNormal,sp)<0.) objectNormal=-objectNormal;
          #ifdef USE_TANGENT
          vec3 objectTangent=t1;
          #endif`).replace("#include <begin_vertex>","vec3 transformed=sp; vObj=sp;"),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
uniform float uInner,uLight,uGlowR,uTint,uRim,uBlush; uniform vec3 uPeach,uPeach2,uEmber,uGlowC,uB1,uB2,uRimC; varying vec3 vObj;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
          { vec3 q=vObj-uGlowC; q.x*=0.8; float g=exp(-dot(q,q)/uGlowR);
            float facing=clamp(dot(normal,normalize(vViewPosition)),0.,1.);
            vec3 pc=mix(uPeach2,uPeach,clamp(g*1.25,0.,1.));
            totalEmissiveRadiance+=pc*g*(0.3+0.7*pow(facing,1.1))*uInner*1.2;
            totalEmissiveRadiance+=uEmber*g*uLight*0.8;
            diffuseColor.rgb=mix(diffuseColor.rgb,pc,clamp(g*uInner*0.95,0.,0.85)); diffuseColor.rgb=mix(diffuseColor.rgb,uEmber*vec3(1.,.75,.6),uTint); totalEmissiveRadiance*=1.-uTint*.5;
            // light-made edges: a soft luminous rim so she belongs to the field of light
            float fr=pow(1.-facing,2.2); totalEmissiveRadiance+=uRimC*fr*uRim*1.6; diffuseColor.rgb=mix(diffuseColor.rgb,uRimC,fr*uRim*.35);
            // blush
            float b=exp(-dot(vObj-uB1,vObj-uB1)/.018)+exp(-dot(vObj-uB2,vObj-uB2)/.018);
            totalEmissiveRadiance+=vec3(1.,.38,.32)*b*uBlush*.9; diffuseColor.rgb=mix(diffuseColor.rgb,vec3(1.,.55,.5),clamp(b*uBlush,0.,.6)); }`)};let s=new la(1,e);this.mesh=new pt(s,n),this.body.add(this.mesh);let r=new ca(1,32,20),o=new Yt({color:"#0B0A0F",fog:!1}),a=new Yt({color:"#ffffff"});this.eyes=[0,1].map(()=>{let l=new En,c=new pt(r,o);c.scale.set(.082,.145,.045);let h=new pt(r,a);return h.scale.set(.024,.024,.012),h.position.set(.024,.07,.036),l.add(c,h),this.body.add(l),l}),this._m=new ht}set(e,t){return Object.assign(this.tgt,e),t&&Object.assign(this.p,e),this}state(e,t){let n={resting:{read:0,eyes:0,inner:.9,light:0},reading:{read:1,eyes:0,inner:1.15,light:0},present:{read:0,eyes:1,inner:1,light:0},found:{read:0,eyes:1,inner:1.1,light:.35}};return this.set(n[e],t)}shape(e,t){let n=this.p,s=n.lobe*(1-n.read),r=_=>Math.acos(bl(e.dot(_),-1,1)),o=r(i.L1),a=r(i.L2),l=r(i.L3),c=r(i.L4),h=1+s*(.22*Math.exp(-o*o/.3)-.12*Math.exp(-a*a/.1)+.07*Math.exp(-l*l/.25)+.09*Math.exp(-c*c/.35)),u=(_,T,C)=>{let A=bl(.5+.5*(_-T)/C);return Ea(T,_,A)+C*A*(1-A)},f=e.x*h*1.16,m=u(e.y*h*.96,-.8,.3),g=e.z*h*.9,v=e.x*1.36,p=-u(-u(e.y*.82,-.58,.22),-.6,.22),d=e.z;f=Ea(f,v,n.read),m=Ea(m,p,n.read),g=Ea(g,d,n.read),m*=n.sq;let M=1/Math.sqrt(Math.max(n.sq,.2));return f*=M,g*=M,f*=n.stretch,M=1/Math.sqrt(Math.max(n.stretch,.2)),m*=M,g*=M,t.set(f,m,g)}_pt(e,t){let n=new R(Math.sin(e)*Math.cos(t),Math.sin(t),Math.cos(e)*Math.cos(t)).normalize();return this.shape(n,new R)}_eye(e,t,n,s){let r=new R(Math.sin(t)*Math.cos(n),Math.sin(n),Math.cos(t)*Math.cos(n)).normalize(),o=this.shape(r,new R),a=new R().crossVectors(r,new R(0,1,0)).normalize(),l=new R().crossVectors(r,a),c=this.shape(r.clone().addScaledVector(a,.01).normalize(),new R).sub(o),h=this.shape(r.clone().addScaledVector(l,.01).normalize(),new R).sub(o),u=new R().crossVectors(c,h).normalize();u.dot(o)<0&&u.negate();let f=new R().crossVectors(new R(0,1,0),u).normalize(),m=new R().crossVectors(u,f);this._m.makeBasis(f,m,u),e.quaternion.setFromRotationMatrix(this._m),e.position.copy(o).addScaledVector(u,-.008);let g=this.p;e.scale.set(g.eyeW,Math.max(1e-4,s*g.eyeH*(1-g.happy*.72)),1),e.visible=s>.02}update(e,t){let n=this.p,s=this.tgt,r=1-Math.exp(-this.k*e);for(let u in s)n[u]+=(s[u]-n[u])*r;this.blinkT-=e,this.blinkT<0&&(this.blinkT=2.4+Math.random()*3.6,this._bl=0),this._bl!==void 0&&(this._bl+=e/.15,this.blink=this._bl<1?1-Math.sin(this._bl*Math.PI):1,this._bl>=1&&(this._bl=void 0));let o=this.uniforms;o.uLobe.value=n.lobe*(1-n.read),o.uRead.value=n.read,o.uSq.value=n.sq*(1+Math.sin(t*1.7)*.012),o.uStretch.value=n.stretch,o.uWob.value=n.wob,o.uTime.value=t,o.uInner.value=n.inner,o.uLight.value=n.light,o.uTint.value=n.tint,o.uRim.value=n.rim,o.uBlush.value=n.blush;let a=bl(n.eyes)*this.blink;this.winkT>0&&(this.winkT-=e);let l=this.winkT>0?1-Math.sin(Math.PI*(1-this.winkT/.5)):1,c=.26*(1-Math.abs(n.lookX)*.3),h=-.04+n.lookY;n.blush>.01&&(o.uB1.value.copy(this._pt(n.lookX-c*1.55,h-.24)),o.uB2.value.copy(this._pt(n.lookX+c*1.55,h-.24))),this._eye(this.eyes[0],n.lookX-c,h+n.happy*.03,a*l),this._eye(this.eyes[1],n.lookX+c,h+(n.lookX>.2?.03:0)+n.happy*.03,a)}};ai.L1=new R(-.5,.84,.18).normalize();ai.L2=new R(.42,.9,.12).normalize();ai.L3=new R(.97,.05,.2).normalize();ai.L4=new R(.7,-.6,.35).normalize();var vt=(()=>{let i=1234567;return()=>(i=i*16807%2147483647)/2147483647})(),Qt=()=>{let i=0,e=0;for(;!i;)i=vt();for(;!e;)e=vt();return Math.sqrt(-2*Math.log(i))*Math.cos(6.2831*e)},eu=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)};function wa(i){return i?[[-1,1.05,0],[1,1.05,0],[-1,-1.65,0],[1,-1.65,0]]:[[-4.1,-.25,0],[-1.35,-1.55,0],[1.35,-.25,0],[4.1,-1.55,0]]}function Sl(i){return i?[.35,.25,0]:[2.9,.95,0]}function nu(i,e){let t=new Lt,n=new Float32Array(i*3),s=new Float32Array(i*3),r=new Float32Array(i*3),o=new Float32Array(i*3),a=new Float32Array(i*4),l=new Float32Array(i*2);for(let m=0;m<i;m++){n[m*3]=(vt()-.5)*22,n[m*3+1]=(vt()-.5)*11,n[m*3+2]=-9+vt()*13;let g=vt();a[m*4]=vt(),a[m*4+1]=g>.992?5+vt()*6:g>.9?1.6+vt()*1.4:.6+vt()*.9,a[m*4+2]=vt(),a[m*4+3]=vt(),l[m*2]=vt(),l[m*2+1]=Math.floor(vt()*56)/55}let c={p0:n,p1:s,p2:r,p3:o,r4:a,lane:l,N:i};tu(c,!1),t.setAttribute("position",new st(n,3)),t.setAttribute("p1",new st(s,3)),t.setAttribute("p2",new st(r,3)),t.setAttribute("p3",new st(o,3)),t.setAttribute("r4",new st(a,4)),t.setAttribute("lane",new st(l,2));let h={uT:{value:0},uS:{value:0},uChaos:{value:1},uPx:{value:e*(innerHeight/900)},uHold:{value:0},uBurst:{value:0},uMouse:{value:new R(99,99,0)},uMouseK:{value:0},uFocus:{value:12},uDim:{value:1},uHi:{value:-1},uC3:{value:new R(0,0,0)},uSig:{value:new R(3.6,1.15,0)},uFlow:{value:0},uPearl:{value:new xe("#F6F0EA")},uEmber:{value:new xe("#FF5A1F")},uPeach:{value:new xe("#FFB48A")}},u=new lt({uniforms:h,transparent:!0,depthWrite:!1,blending:Tn,vertexShader:tr+`
      attribute vec3 p1,p2,p3; attribute vec4 r4; attribute vec2 lane;
      uniform float uT,uS,uChaos,uPx,uHold,uBurst,uMouseK,uFocus,uFlow; uniform float uHi; uniform vec3 uMouse,uC3,uSig;
      uniform vec3 uPearl,uEmber,uPeach;
      varying vec3 vC; varying float vA; varying float vSoft;
      vec3 pick(float k){ if(k<.5||k>3.5) return position; if(k<1.5) return p1; if(k<2.5) return p2; return p3+uC3; }
      vec3 rotz(vec3 p,vec3 c,float a){ vec3 n=normalize(vec3(0.1375,0.8674,0.4782)); vec3 q=p-c-vec3(0.,-.15,0.); float s=sin(a),co=cos(a); return c+vec3(0.,-.15,0.)+q*co+cross(n,q)*s+n*dot(n,q)*(1.-co); }
      void main(){
        float r=r4.x, sz=r4.y, hue=r4.z, ph=r4.w;
        float s=clamp(uS,0.,4.); float i=floor(s); float f=fract(s); if(s>=4.){i=4.;f=0.;}
        float ff=smoothstep(0.,1.,clamp((f-r*.35)/.65,0.,1.));
        vec3 a=pick(i), b=pick(min(i+1.,4.));
        if(i>2.5&&i<3.5) a=rotz(a,uC3,uT*(.04+ph*.05)); if(i>1.5&&i<2.5) b=rotz(b,uC3,uT*(.04+ph*.05));
        vec3 p=mix(a,b,ff);
        // weight of each formation (for colour)
        float w2=(i==2.?1.-ff:0.)+(i==1.?ff:0.);
        float w3=(i==3.?1.-ff:0.)+(i==2.?ff:0.);
        float w1=(i==1.?1.-ff:0.)+(i==0.?ff:0.);
        // living drift: big turbulent motion in noise, calm otherwise
        float ch=uChaos*(1.-w2*.85)*(1.-w3*.7)*(1.-w1*.55);
        vec3 q=p*.18+vec3(0.,0.,uT*.06);
        vec3 n=vec3(snoise(q),snoise(q+vec3(17.1,3.2,8.)),snoise(q+vec3(-4.,11.,2.3)));
        p+=n*(.12+ch*1.25);
        // signal streams flow along their lane
        float flow=fract(lane.x-uT*.06*(.6+ph));
        // hold: gather into a dense sphere of light
        vec3 dir=normalize(position+vec3(.001)); float rr=1.05+pow(r,4.)*1.6;
        vec3 sph=dir*rr; sph+=vec3(snoise(dir*2.+uT*.6),snoise(dir*2.+uT*.6+9.),0.)*.25;
        float hk=smoothstep(0.,.75,uHold); p=mix(p,sph,hk*smoothstep(0.,.35,uHold*1.3-r*.3));
        p+=dir*uBurst*(2.+r*9.);
        // cursor: particles move away from her pointer, like noise parting
        vec2 d=p.xy-uMouse.xy; float md=dot(d,d); p.xy+=normalize(d+vec2(.0001))*exp(-md/1.4)*.9*uMouseK;
        vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv;
        float z=-mv.z; float soft=smoothstep(.5,9.,abs(z-uFocus)); vSoft=soft;
        float big=step(4.,sz);
        float psz=sz*(1.+soft*2.6)*uPx*(24./z)*(1.+hk*.4);
        gl_PointSize=clamp(psz,1.,90.);
        // colour: mostly pearl dust, a few embers; signal and halo glow warm
        vec3 col=mix(uPearl*.8,uPearl,ph);
        float em=step(.965,hue);
        col=mix(col,uEmber,em*.9);
        float conv=smoothstep(.15,.95,lane.x);
        col=mix(col,mix(uPeach,uEmber,conv),w2*conv*.9);
        col=mix(col,mix(uPeach,uPearl,ph),w3*.6);
        col=mix(col,mix(uPeach,uEmber,r),hk*.8);
        float tw=.65+.35*sin(uT*(1.5+ph*3.)+r*40.);
        float a2=(.6+.4*tw)/(1.+soft*3.5)*(big>.5?.16:1.)*(1.+w3*.8+hk*1.2);
        a2*=1.+w2*conv*pow(.5+.5*sin((lane.x-uT*.08)*46.+lane.y*3.),14.)*3.;
        // highlighted algorithm cluster
        float cid=floor(r*3.999); a2*=mix(1.,(uHi<0.?1.:(abs(cid-uHi)<.5?1.5:.7)),w1);
        vA=a2; vC=col;
      }`,fragmentShader:`uniform float uDim; varying vec3 vC; varying float vA; varying float vSoft;
      void main(){ vec2 c=gl_PointCoord-.5; float d=length(c);
        float core=smoothstep(.5,.05+vSoft*.35,d);
        float ring=smoothstep(.5,.42,d)*smoothstep(.3,.45,d)*vSoft*.6; // bokeh rim
        float a=(core+ring)*vA*uDim; if(a<.003) discard;
        gl_FragColor=vec4(vC*a,a); }`}),f=new ms(t,u);return f.frustumCulled=!1,{pts:f,u:h,B:c,g:t,relayout:m=>{tu(c,m),["p1","p2","p3"].forEach(g=>t.attributes[g].needsUpdate=!0)}}}function tu(i,e){let{p1:t,p2:n,p3:s,r4:r,lane:o,N:a}=i,l=wa(e),c=Sl(e),h=e?.62:1;for(let u=0;u<a;u++){let f=r[u*4],m=Math.floor(f*3.999),g=l[m],v=Math.floor(vt()*3),p=Math.pow(vt(),.7),d=v*2.094+p*5.2+m*1.3,M=(.12+p*1.25)*h,_=Math.cos(d)*M+Qt()*.09*h,T=Math.sin(d)*M*.52+Qt()*.07*h,C=Qt()*.18*h;vt()<.18&&(_=Qt()*.35*h,T=Qt()*.25*h,C=Qt()*.25*h);let A=[.35,-.25,.3,-.35][m],w=Math.cos(A),L=Math.sin(A);t[u*3]=g[0]+_*w-T*L,t[u*3+1]=g[1]+_*L+T*w,t[u*3+2]=g[2]+C;let y=o[u*2],E=o[u*2+1],O=e?-3.2:-10,q=c[0],te=O+(q-O)*y,U=e?-2.6+(c[1]+2.6)*Math.pow(y,1.6):-2.4+(c[1]+2.4)*Math.pow(eu(0,1,y),1.7)+Math.sin(y*7.5)*.18*(1-y),B=(E-.5)*(e?9:5)-(e?0:1.3)+Math.sin(y*11+E*30)*.35,V=eu(.05,.78,y),Y=(1-V)*.25+.012+V*.02;if(n[u*3]=te+Qt()*.03,n[u*3+1]=B*(1-V)+U*V+Qt()*Y,n[u*3+2]=(E-.5)*6*(1-V)+Qt()*Y*2-1.5*(1-V),e){let Oe=-4.4+(c[1]+4.4)*y,Re=(E-.5)*5*(1-V)+Math.sin(y*9+E*20)*.3*(1-V)+(-.2+c[0]*Math.pow(y,2))*V;n[u*3]=Re+Qt()*Y,n[u*3+1]=Oe+Qt()*.03}let X=vt()*6.2831,G=(1.75+Math.abs(Qt())*.32+(vt()<.12?vt()*1.6:0))*(e?.8:1),J=Math.cos(X)*G,ee=Math.sin(X)*G,le=Qt()*.12,H=-1.05,$=.28,re=ee*Math.cos(H)-le*Math.sin(H),ye=ee*Math.sin(H)+le*Math.cos(H),Me=J*Math.cos($)+ye*Math.sin($),De=-J*Math.sin($)+ye*Math.cos($);s[u*3]=Me,s[u*3+1]=re-.15,s[u*3+2]=De}}var fe=null,ln=null,yt=!1,Hn=null;function El(){let i=window.AudioContext||window.webkitAudioContext;if(!i)return!1;fe=new i,ln=fe.createGain(),ln.gain.value=0;let e=fe.createDynamicsCompressor();ln.connect(e),e.connect(fe.destination);let t=fe.sampleRate*1.6,n=fe.createBuffer(2,t,fe.sampleRate);for(let a=0;a<2;a++){let l=n.getChannelData(a);for(let c=0;c<t;c++)l[c]=(Math.random()*2-1)*Math.pow(1-c/t,3.2)}let s=fe.createConvolver();s.buffer=n;let r=fe.createGain();r.gain.value=.22,s.connect(r),r.connect(ln),Ae.verb=s,Hn=fe.createGain(),Hn.gain.value=0;let o=fe.createBiquadFilter();return o.type="lowpass",o.frequency.value=700,Hn.connect(o),o.connect(ln),[130.8,196,261.6].forEach((a,l)=>{let c=fe.createOscillator();c.type=l?"sine":"triangle",c.frequency.value=a,c.detune.value=(l-1)*6;let h=fe.createGain();h.gain.value=.05/(l+1),c.connect(h),h.connect(Hn),c.start()}),!0}function nr(i,e,t,n){let s=fe.createGain(),r=fe.currentTime;return s.gain.setValueAtTime(0,r),s.gain.linearRampToValueAtTime(n,r+e),s.gain.exponentialRampToValueAtTime(1e-4,r+e+t),i.connect(s),s.connect(ln),s.connect(Ae.verb),s}var oi=null,li=null,Ae={holdStart(){if(!fe&&!El())return;fe.state==="suspended"&&fe.resume();let i=!1;try{i=localStorage.getItem("usha-sound")==="off"}catch{}if(!yt&&!i){yt=!0,ln.gain.setTargetAtTime(.8,fe.currentTime,.1),Hn.gain.setTargetAtTime(.5,fe.currentTime,1.5);let e=document.getElementById("snd");e&&e.classList.add("on")}if(!oi){oi=fe.createOscillator(),oi.type="sawtooth",oi.frequency.value=55;let e=fe.createBiquadFilter();e.type="lowpass",e.frequency.value=300,Ae._lp=e,li=fe.createGain(),li.gain.value=0,oi.connect(e),e.connect(li),li.connect(ln),li.connect(Ae.verb),oi.start()}li.gain.setTargetAtTime(.12,fe.currentTime,.15)},holdLevel(i){oi&&(oi.frequency.setTargetAtTime(55+i*165,fe.currentTime,.05),Ae._lp.frequency.setTargetAtTime(300+i*2600,fe.currentTime,.05))},holdStop(){li&&li.gain.setTargetAtTime(0,fe.currentTime,.12)},wake(){if(!yt)return;let i=fe.currentTime,e=fe.sampleRate*1.2,t=fe.createBuffer(1,e,fe.sampleRate),n=t.getChannelData(0);for(let o=0;o<e;o++)n[o]=(Math.random()*2-1)*Math.pow(1-o/e,2);let s=fe.createBufferSource();s.buffer=t;let r=fe.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(400,i),r.frequency.exponentialRampToValueAtTime(6e3,i+1),s.connect(r),nr(r,.01,1.1,.25),s.start(),Hn.gain.setTargetAtTime(.5,i,1.5),setTimeout(()=>Ae.chord(),350)},get on(){return yt},get running(){return!!fe&&fe.state==="running"},disable(){if(!fe){yt=!1;return}yt=!1,ln.gain.setTargetAtTime(0,fe.currentTime,.15),Hn.gain.setTargetAtTime(0,fe.currentTime,.5)},enable(){if(!fe&&!El())return;if(fe.state!=="running"){fe.resume();try{let e=fe.createBuffer(1,1,22050),t=fe.createBufferSource();t.buffer=e,t.connect(fe.destination),t.start(0)}catch{}}if(yt)return;yt=!0,ln.gain.setTargetAtTime(.8,fe.currentTime,.2),Hn.gain.setTargetAtTime(.5,fe.currentTime,1.5);let i=document.getElementById("snd");i&&i.classList.add("on")},toggle(){return!fe&&!El()?!1:(yt=!yt,fe.state==="suspended"&&fe.resume(),ln.gain.setTargetAtTime(yt?.8:0,fe.currentTime,.25),Hn.gain.setTargetAtTime(yt?.5:0,fe.currentTime,1.2),yt&&Ae.chord(),yt)},tick(i=1400,e=.06){if(!yt)return;let t=fe.createOscillator();t.type="sine",t.frequency.value=i,nr(t,.002,.06,e),t.start(),t.stop(fe.currentTime+.1)},boop(){if(!yt)return;let i=fe.createOscillator(),e=fe.currentTime;i.type="sine",i.frequency.setValueAtTime(620,e),i.frequency.exponentialRampToValueAtTime(240,e+.22),nr(i,.01,.35,.2),i.start(),i.stop(e+.45)},glass(i=0,e=0){if(!yt)return;let t=[1568,1760,2093][i%3];[1,2.76,5.4].forEach((n,s)=>{let r=fe.createOscillator();r.type="sine",r.frequency.value=t*n,nr(r,.001,.9/(s+1),(e?.07:.04)/(s+1)),r.start(),r.stop(fe.currentTime+1)})},chord(){yt&&[523.3,659.3,784].forEach((i,e)=>setTimeout(()=>{let t=fe.createOscillator();t.type="sine",t.frequency.value=i,nr(t,.01,1.2,.06),t.start(),t.stop(fe.currentTime+1.4)},e*90))}};function xt(i,e,t,n=.12,s="sine",r=0,o=0){if(!yt)return;let a=fe.currentTime+r,l=fe.createOscillator();if(l.type=s,l.frequency.setValueAtTime(i,a),l.frequency.exponentialRampToValueAtTime(Math.max(30,e),a+t),o){let u=fe.createOscillator(),f=fe.createGain();u.frequency.value=o,f.gain.value=i*.06,u.connect(f),f.connect(l.frequency),u.start(a),u.stop(a+t+.05)}let c=fe.createGain();c.gain.setValueAtTime(0,a),c.gain.linearRampToValueAtTime(n,a+.012),c.gain.exponentialRampToValueAtTime(1e-4,a+t);let h=fe.createBiquadFilter();h.type="lowpass",h.frequency.value=3200,l.connect(h),h.connect(c),c.connect(ln),c.connect(Ae.verb),l.start(a),l.stop(a+t+.05)}Object.assign(Ae,{voice(i){if(!yt)return;let e=(t,n)=>t+Math.random()*(n-t);switch(i){case"tap":{let t=e(520,700);xt(t,t*1.7,.14,.13),xt(t*1.5,t*2.1,.1,.07,"sine",.09);break}case"giggle":for(let t=0;t<5;t++)xt(e(900,1100)-t*60,e(1300,1500)-t*80,.07,.09,"sine",t*.075);break;case"hm":xt(420,380,.16,.1,"triangle"),xt(400,640,.22,.1,"triangle",.2);break;case"surprise":xt(500,1500,.18,.14,"sine",0,18);break;case"happy":[523,659,784,1046].forEach((t,n)=>xt(t,t*1.02,.2,.07,"sine",n*.07));break;case"dizzy":xt(900,300,.9,.1,"sine",0,9);break;case"sleep":xt(300,180,1.2,.07,"triangle");break;case"wake":xt(250,900,.25,.1,"sine",0,12),xt(700,1200,.12,.07,"sine",.25);break;case"purr":xt(140,150,.9,.06,"sawtooth",0,24);break;case"wee":xt(400,1800,.5,.12,"sine",0,7);break;case"think":for(let t=0;t<6;t++)xt(1800+t%2*300,1800+t%2*300,.04,.025,"square",t*.11);break;case"found":[784,1175,1568].forEach((t,n)=>xt(t,t,.5,.05,"sine",n*.05));break;case"pop":xt(e(200,280),60,.18,.16,"sine"),xt(e(1200,1600),300,.08,.05,"square");break;case"collect":{let t=[1046,1175,1318,1568][Math.floor(e(0,4))];xt(t,t,.3,.07),xt(t*2,t*2,.2,.03,"sine",.04);break}case"secret":[523,659,784,988,1175,1568].forEach((t,n)=>xt(t,t,.7,.05,"sine",n*.1));break}}});function ut(i=8){try{navigator.vibrate&&navigator.vibrate(i)}catch{}}var wl={en:{nav1:"How she works",nav2:"Try her",nav3:"Plans",cta:"Start free week",hold:"Press and hold to wake <b>USHA</b>",holdS:"Your market is out there. Loud, scattered, moving.",holdHint:"Hold \xB7 3 s",helloA:"Hello,",helloB:"I\u2019m <b>USHA.</b>",helloC:"I read your market, so you don\u2019t have to.",kicker:"USHA by NJO \xB7 Business intelligence engine",h1:"The algorithm that <i>understands</i> algorithms.",sub:"Every day she reads your marketplaces, competitors and buyers, tells you what changed and why, and does the work that follows.",b1:"Start your free week",b2:"See her work",tr1:"First week free",tr2:"No new hires",tr3:"Works in your messenger, 24/7",scroll:"Scroll \xB7 move the cursor through the noise",n_k:"01 \xB7 The problem",n_h:"Four algorithms decide your sales. <i>Nobody</i> on your team watches them.",n_p:"They decide who sees you, who finds you, what you pay and who buys. Their rules change every month.",a0:"The feed",a0d:"Decides who sees your post: a thousand people or ten.",a1:"The search",a1d:"Decides if your product is on page 1 or page 9.",a2:"The auction",a2d:"Decides what each click and each customer costs you.",a3:"The buyer",a3d:"Decides in seven seconds whether to trust you.",n_e1:"Posting more won\u2019t beat them.",n_e2:"<b>Reading them will. That\u2019s her job.</b>",s_k:"02 \xB7 What she does",s_h:"She reads everything.<br>You get <i>only what matters.</i>",s_p:"Every day USHA reads 1,240 sources around your business: marketplaces, competitors, reviews, search and ads. When something moves, you get the finding and her next move.",f_live:"Live findings",f_ill:"Illustrative examples",f_move:"Her move",t_k:"03 \xB7 Try her",t_h:"Pick your business. <i>Watch her think.</i>",t_p:"Real questions owners ask. Every answer comes with a finding, a reason and a move.",t_you:"You",t_reading:"Reading 1,240 sources",t_move:"Her move",t_prep:"Ready this week",t_week:"See her whole week",t_weekH:"A week with USHA: a new gift box launch",t_hint:"Tap her. Poke her. Tickle her. Leave her alone for a while.",t_ill:"Illustrative examples \xB7 brand names anonymised",w_k:"04 \xB7 Why her",w_h:"Everyone has the same AI. <i>She</i> uses it differently.",w_c1:"AI tools",w_c2:"Agency",w_c3:"In-house team",w_c4:"USHA",w_7h:"One engine instead of seven hires.",w_7p:"To cover the same work in-house you need at least seven people: months of hiring, training and managing, plus holidays and sick leave.",w_roles:["Head of marketing","Marketer","Paid media","Social media","Video editor","AI creator","Designer"],w_m:"months of hiring",w_w:"week to start",w_sick:"She never takes sick leave, never says \u201Cnot today\u201D, and never leaves for a competitor with your project history.",m_k:"05 \xB7 Every month",m_h:"Numbers, <i>not promises.</i>",m_p:"What USHA delivers for one brand every month. Switch the plan to compare.",m_pro:"Only in Pro",p_k:"06 \xB7 Plans",p_h:"Same engine. <i>Different appetite.</i>",p_p:"Every plan runs the same engine. Plans differ in how much work she delivers for one brand each month.",p_rec:"Most chosen",p_cta:"Choose with your project manager",p_all:"Compare every line",p_hide:"Hide the details",p_note:"\u201CUp to\u201D is a monthly maximum; your exact plan is agreed at the start. Advertising budgets, creator fees and products for collaborations are paid separately.",c_k:"07 \xB7 You stay in control",c_h:"Your yes. <i>Her move.</i>",c_p:"You decide how independently she works. Budgets and promotion terms are always yours to approve. She supports your sales team and never closes deals or takes payments.",c_a:"Runs automatically",c_at:"Posts, stories, replies and reports under the approved plan",c_y:"Needs your \u201Cyes\u201D",c_yt:"Strategy, budget, promotion terms",c_n:"Never without you",c_nt:"Closing deals, taking payments",c_g:"What NJO guarantees",c_g1:"The agreed volume of work, every month",c_g2:"24/7 access to USHA in your messenger",c_g3:"Every output checked against NJO\u2019s quality standards",c_g4:"A monthly report with honest conclusions and next month\u2019s plan",c_e:"Everyone has the same AI models. <i>The engineers</i> make the difference.",c_ep:"USHA is built by NJO: strategists with over ten years of methods, art directors who set her visual standards, analysts who taught her to read markets, and engineers who make her smarter every month.",c_since:"Since 2016",c_mk:"Russia \xB7 GCC \xB7 Egypt",c_par:"Official partners",c_visit:"Visit NJO",fr_k:"08 \xB7 Start",fr_h:"Your first week <i>is on us.</i>",fr_p:"USHA calibrates to your business: products, market, competitors and channels. At the end of the week you get:",fr_1:"Your strategy, with online and offline priorities",fr_2:"Four ready posts for your brand",fr_3:"Your own USHA chat, ready to take tasks",fr_then:"Then you decide. If you continue, she starts the agreed plan the following week.",fr_lim:"USHA is opening to a limited number of companies.",bf_q1:"What do you sell?",bf_q2:"What hurts most right now?",bf_q3:"Where can your project manager reach you?",bf_a1:["Food & drinks","Household goods","Beauty & care","Fashion","Marketplace seller","Caf\xE9 & restaurant","Real estate","Auto","B2B & industry","Something else"],bf_a2:["Sales dropped","Competitors outrank us","Ads got expensive","Content without results","No time for marketing","Launching something new"],bf_name:"Your name",bf_co:"Company",bf_ct:"Telegram, phone or email",bf_next:"Next",bf_back:"Back",bf_send:"Send to my project manager",bf_safe:"No payment and no contract for the free week.",bf_doneH:"Your brief is ready.",bf_doneP:"It is copied. Send it to your project manager in Telegram or by email, and USHA starts her first week with you.",bf_tg:"Open Telegram",bf_mail:"Send by email",bf_copy:"Copy again",bf_copied:"Copied",bf_step:"Step",q_k:"Questions",q_h:"Before you <i>decide.</i>",faq:[["Is USHA a chatbot?","No. You talk to her in one chat, but she works on her own every day: she reads your market, plans, produces and publishes within the plan you approve."],["Do I need to learn a new platform?","No. She works in your messenger. You approve the decisions that matter; she does the rest and reports every month."],["Who checks the quality?","NJO\u2019s strategists and art directors set her standards, and every output is checked against them before it reaches you."],["Which markets and platforms?","Russia, the GCC and Egypt. Wildberries, Ozon, Yandex Market, VK, Telegram, Instagram, Dzen, YouTube, RuTube, TikTok and others."],["Are advertising budgets included?","No. Advertising budgets, creator fees and products for collaborations are paid separately, and you approve every budget."],["What happens after the free week?","You decide. If you continue, she starts the agreed plan the following week. If not, you keep the strategy and the posts."]],g_k:"09 \xB7 Break",g_h:"You read all the way here. <i>Let\u2019s play.</i>",g_p:"Fly USHA through the noise. Catch the signals, burst the noise clouds, find the engineers\u2019 house.",g_start:"Play",g_keys:"Move: mouse, arrows or WASD \xB7 Dash: Space \xB7 Break: Esc",g_touch:"Drag to fly \xB7 tap to dash",g_t1:"Catch 12 signals",g_t2:"Burst 5 noise clouds",g_t3:"Find the engineers\u2019 house",g_done:"All tasks done. She\u2019s proud of you.",g_hint:"Dash into the noise to burst it: Space or tap.",g_leave:"Leave the game",g_pause:"Break",g_brk:"Break time",g_brkP:"While she rests, meet the people who built her.",g_open:"Open njobusinesssolutions.com",g_back:"Back to the game",g_house:"You found the engineers\u2019 house.",sec_h:"You noticed what others missed.",sec_p:"That is exactly how she works. 30% off your first three months of USHA.",sec_code:"Your code",sec_claim:"Claim with your project manager",sec_rare:"Fewer than one in a thousand visitors get here.",ft_tag:"The algorithm that understands algorithms.",ft_made:"Built by NJO \xB7 Since 2016",ft_top:"Back to the top",ft_contact:"Contact",bub:{hi:"Hi!",tap2:"Hehe.",tap3:"Again?",tickle:"That tickles!",dizzy:"Whoa\u2026 everything\u2019s spinning.",sleep:"Zz\u2026 still watching your market\u2026",wake:"I\u2019m up! Nothing moved.",drag:"Wheee!",hover:"You can stay.",lang:"English it is.",thinking:"Let me look\u2026",why:"Fair fight. I checked.",month:"I like this part.",plans:"Pro is my favourite. Ask why.",control:"You always have the last word.",free:"One week. Then you decide.",faq:"Ask me anything else in the chat.",game:"Finally!",made:"By the way, I made this website myself."}},ru:{nav1:"\u041A\u0430\u043A \u043E\u043D\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442",nav2:"\u041F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C",nav3:"\u0422\u0430\u0440\u0438\u0444\u044B",cta:"\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u043D\u0435\u0434\u0435\u043B\u044F",hold:"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0437\u0431\u0443\u0434\u0438\u0442\u044C <b>USHA</b>",holdS:"\u0412\u0430\u0448 \u0440\u044B\u043D\u043E\u043A \u0433\u0434\u0435-\u0442\u043E \u0442\u0430\u043C. \u0428\u0443\u043C\u043D\u044B\u0439, \u0440\u0430\u0437\u0440\u043E\u0437\u043D\u0435\u043D\u043D\u044B\u0439, \u0432 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0438.",holdHint:"\u0423\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \xB7 3 \u0441",helloA:"\u041F\u0440\u0438\u0432\u0435\u0442,",helloB:"\u044F <b>USHA.</b>",helloC:"\u042F \u0447\u0438\u0442\u0430\u044E \u0432\u0430\u0448 \u0440\u044B\u043D\u043E\u043A, \u0447\u0442\u043E\u0431\u044B \u0432\u0430\u043C \u043D\u0435 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u043B\u043E\u0441\u044C.",kicker:"USHA by NJO \xB7 \u0414\u0432\u0438\u0436\u043E\u043A \u0431\u0438\u0437\u043D\u0435\u0441-\u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0438",h1:"\u0410\u043B\u0433\u043E\u0440\u0438\u0442\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 <i>\u043F\u043E\u043D\u0438\u043C\u0430\u0435\u0442</i> \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u044B.",sub:"\u041A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u043E\u043D\u0430 \u0447\u0438\u0442\u0430\u0435\u0442 \u0432\u0430\u0448\u0438 \u043C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u044B, \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432 \u0438 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439, \u0433\u043E\u0432\u043E\u0440\u0438\u0442, \u0447\u0442\u043E \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u043E\u0441\u044C \u0438 \u043F\u043E\u0447\u0435\u043C\u0443, \u0438 \u0434\u0435\u043B\u0430\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0443, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0438\u0437 \u044D\u0442\u043E\u0433\u043E \u0441\u043B\u0435\u0434\u0443\u0435\u0442.",b1:"\u041D\u0430\u0447\u0430\u0442\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0443\u044E \u043D\u0435\u0434\u0435\u043B\u044E",b2:"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0435\u0451 \u0432 \u0434\u0435\u043B\u0435",tr1:"\u041F\u0435\u0440\u0432\u0430\u044F \u043D\u0435\u0434\u0435\u043B\u044F \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E",tr2:"\u0411\u0435\u0437 \u043D\u043E\u0432\u044B\u0445 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432",tr3:"\u0412 \u0432\u0430\u0448\u0435\u043C \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u0435, 24/7",scroll:"\u041B\u0438\u0441\u0442\u0430\u0439\u0442\u0435 \xB7 \u043F\u0440\u043E\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u0443\u0440\u0441\u043E\u0440\u043E\u043C \u0441\u043A\u0432\u043E\u0437\u044C \u0448\u0443\u043C",n_k:"01 \xB7 \u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0430",n_h:"\u0412\u0430\u0448\u0438 \u043F\u0440\u043E\u0434\u0430\u0436\u0438 \u0440\u0435\u0448\u0430\u044E\u0442 \u0447\u0435\u0442\u044B\u0440\u0435 \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u0430. <i>\u041D\u0438\u043A\u0442\u043E</i> \u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u0435 \u0437\u0430 \u043D\u0438\u043C\u0438 \u043D\u0435 \u0441\u043B\u0435\u0434\u0438\u0442.",n_p:"\u041E\u043D\u0438 \u0440\u0435\u0448\u0430\u044E\u0442, \u043A\u0442\u043E \u0432\u0430\u0441 \u0432\u0438\u0434\u0438\u0442, \u043A\u0442\u043E \u043D\u0430\u0445\u043E\u0434\u0438\u0442, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u044B \u043F\u043B\u0430\u0442\u0438\u0442\u0435 \u0438 \u043A\u0442\u043E \u043F\u043E\u043A\u0443\u043F\u0430\u0435\u0442. \u0418\u0445 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F \u043A\u0430\u0436\u0434\u044B\u0439 \u043C\u0435\u0441\u044F\u0446.",a0:"\u041B\u0435\u043D\u0442\u0430",a0d:"\u0420\u0435\u0448\u0430\u0435\u0442, \u043A\u0442\u043E \u0443\u0432\u0438\u0434\u0438\u0442 \u0432\u0430\u0448 \u043F\u043E\u0441\u0442: \u0442\u044B\u0441\u044F\u0447\u0430 \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u0438\u043B\u0438 \u0434\u0435\u0441\u044F\u0442\u044C.",a1:"\u041F\u043E\u0438\u0441\u043A",a1d:"\u0420\u0435\u0448\u0430\u0435\u0442, \u0433\u0434\u0435 \u0432\u0430\u0448 \u0442\u043E\u0432\u0430\u0440: \u043D\u0430 \u043F\u0435\u0440\u0432\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0438\u043B\u0438 \u043D\u0430 \u0434\u0435\u0432\u044F\u0442\u043E\u0439.",a2:"\u0410\u0443\u043A\u0446\u0438\u043E\u043D",a2d:"\u0420\u0435\u0448\u0430\u0435\u0442, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u0430\u043C \u0441\u0442\u043E\u0438\u0442 \u043A\u0430\u0436\u0434\u044B\u0439 \u043A\u043B\u0438\u043A \u0438 \u043A\u0430\u0436\u0434\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442.",a3:"\u041F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044C",a3d:"\u0417\u0430 \u0441\u0435\u043C\u044C \u0441\u0435\u043A\u0443\u043D\u0434 \u0440\u0435\u0448\u0430\u0435\u0442, \u0434\u043E\u0432\u0435\u0440\u044F\u0442\u044C \u043B\u0438 \u0432\u0430\u043C.",n_e1:"\u0411\u043E\u043B\u044C\u0448\u0435 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0439 \u0438\u0445 \u043D\u0435 \u043E\u0431\u044B\u0433\u0440\u0430\u0435\u0442.",n_e2:"<b>\u041F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043E\u0431\u044B\u0433\u0440\u0430\u0435\u0442. \u042D\u0442\u043E \u0435\u0451 \u0440\u0430\u0431\u043E\u0442\u0430.</b>",s_k:"02 \xB7 \u0427\u0442\u043E \u043E\u043D\u0430 \u0434\u0435\u043B\u0430\u0435\u0442",s_h:"\u041E\u043D\u0430 \u0447\u0438\u0442\u0430\u0435\u0442 \u0432\u0441\u0451.<br>\u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 <i>\u0442\u043E\u043B\u044C\u043A\u043E \u0432\u0430\u0436\u043D\u043E\u0435.</i>",s_p:"\u041A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C USHA \u0447\u0438\u0442\u0430\u0435\u0442 1 240 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432 \u0432\u043E\u043A\u0440\u0443\u0433 \u0432\u0430\u0448\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430: \u043C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u044B, \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432, \u043E\u0442\u0437\u044B\u0432\u044B, \u043F\u043E\u0438\u0441\u043A \u0438 \u0440\u0435\u043A\u043B\u0430\u043C\u0443. \u041A\u043E\u0433\u0434\u0430 \u0447\u0442\u043E-\u0442\u043E \u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F, \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 \u043D\u0430\u0445\u043E\u0434\u043A\u0443 \u0438 \u0435\u0451 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0445\u043E\u0434.",f_live:"\u041D\u0430\u0445\u043E\u0434\u043A\u0438 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0438",f_ill:"\u041F\u0440\u0438\u043C\u0435\u0440\u044B \u0434\u043B\u044F \u0438\u043B\u043B\u044E\u0441\u0442\u0440\u0430\u0446\u0438\u0438",f_move:"\u0415\u0451 \u0445\u043E\u0434",t_k:"03 \xB7 \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435",t_h:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u0431\u0438\u0437\u043D\u0435\u0441. <i>\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435, \u043A\u0430\u043A \u043E\u043D\u0430 \u0434\u0443\u043C\u0430\u0435\u0442.</i>",t_p:"\u0420\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0435\u0432. \u041A\u0430\u0436\u0434\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 \u2014 \u044D\u0442\u043E \u043D\u0430\u0445\u043E\u0434\u043A\u0430, \u043F\u0440\u0438\u0447\u0438\u043D\u0430 \u0438 \u0445\u043E\u0434.",t_you:"\u0412\u044B",t_reading:"\u0427\u0438\u0442\u0430\u044E 1 240 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432",t_move:"\u0415\u0451 \u0445\u043E\u0434",t_prep:"\u0413\u043E\u0442\u043E\u0432\u043E \u043D\u0430 \u044D\u0442\u043E\u0439 \u043D\u0435\u0434\u0435\u043B\u0435",t_week:"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u044E \u043D\u0435\u0434\u0435\u043B\u044E",t_weekH:"\u041D\u0435\u0434\u0435\u043B\u044F \u0441 USHA: \u0437\u0430\u043F\u0443\u0441\u043A \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u043E\u0433\u043E \u043D\u0430\u0431\u043E\u0440\u0430",t_hint:"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043D\u0435\u0451. \u041F\u043E\u0442\u044B\u043A\u0430\u0439\u0442\u0435. \u041F\u043E\u0449\u0435\u043A\u043E\u0447\u0438\u0442\u0435. \u0418\u043B\u0438 \u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043D\u0435\u043D\u0430\u0434\u043E\u043B\u0433\u043E \u0432 \u043F\u043E\u043A\u043E\u0435.",t_ill:"\u041F\u0440\u0438\u043C\u0435\u0440\u044B \u0434\u043B\u044F \u0438\u043B\u043B\u044E\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \xB7 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0431\u0440\u0435\u043D\u0434\u043E\u0432 \u0441\u043A\u0440\u044B\u0442\u044B",w_k:"04 \xB7 \u041F\u043E\u0447\u0435\u043C\u0443 \u043E\u043D\u0430",w_h:"\u0423 \u0432\u0441\u0435\u0445 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0439 \u0418\u0418. <i>\u041E\u043D\u0430</i> \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0435\u0433\u043E \u0438\u043D\u0430\u0447\u0435.",w_c1:"\u0418\u0418-\u0441\u0435\u0440\u0432\u0438\u0441\u044B",w_c2:"\u0410\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E",w_c3:"\u0421\u0432\u043E\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430",w_c4:"USHA",w_7h:"\u041E\u0434\u0438\u043D \u0434\u0432\u0438\u0436\u043E\u043A \u0432\u043C\u0435\u0441\u0442\u043E \u0441\u0435\u043C\u0438 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432.",w_7p:"\u0427\u0442\u043E\u0431\u044B \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u0442\u0443 \u0436\u0435 \u0440\u0430\u0431\u043E\u0442\u0443 \u0432\u043D\u0443\u0442\u0440\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u043D\u0443\u0436\u043D\u043E \u043C\u0438\u043D\u0438\u043C\u0443\u043C \u0441\u0435\u043C\u044C \u0447\u0435\u043B\u043E\u0432\u0435\u043A: \u043C\u0435\u0441\u044F\u0446\u044B \u043D\u0430\u0439\u043C\u0430, \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F, \u043F\u043B\u044E\u0441 \u043E\u0442\u043F\u0443\u0441\u043A\u0430 \u0438 \u0431\u043E\u043B\u044C\u043D\u0438\u0447\u043D\u044B\u0435.",w_roles:["\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440 \u043F\u043E \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0443","\u041C\u0430\u0440\u043A\u0435\u0442\u043E\u043B\u043E\u0433","\u0422\u0430\u0440\u0433\u0435\u0442\u043E\u043B\u043E\u0433","SMM-\u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442","\u0412\u0438\u0434\u0435\u043E\u043C\u043E\u043D\u0442\u0430\u0436\u0451\u0440","\u0418\u0418-\u043A\u0440\u0435\u0430\u0442\u043E\u0440","\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440"],w_m:"\u043C\u0435\u0441\u044F\u0446\u0430 \u043D\u0430\u0439\u043C\u0430",w_w:"\u043D\u0435\u0434\u0435\u043B\u044F \u0434\u043E \u0441\u0442\u0430\u0440\u0442\u0430",w_sick:"\u041E\u043D\u0430 \u043D\u0435 \u0443\u0445\u043E\u0434\u0438\u0442 \u043D\u0430 \u0431\u043E\u043B\u044C\u043D\u0438\u0447\u043D\u044B\u0439, \u043D\u0435 \u0433\u043E\u0432\u043E\u0440\u0438\u0442 \xAB\u0441\u0435\u0433\u043E\u0434\u043D\u044F \u043D\u0435 \u043C\u043E\u0451\xBB \u0438 \u043D\u0435 \u0443\u0445\u043E\u0434\u0438\u0442 \u043A \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u0443 \u0441 \u0438\u0441\u0442\u043E\u0440\u0438\u0435\u0439 \u0432\u0430\u0448\u0435\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430.",m_k:"05 \xB7 \u041A\u0430\u0436\u0434\u044B\u0439 \u043C\u0435\u0441\u044F\u0446",m_h:"\u0426\u0438\u0444\u0440\u044B, <i>\u0430 \u043D\u0435 \u043E\u0431\u0435\u0449\u0430\u043D\u0438\u044F.</i>",m_p:"\u0427\u0442\u043E USHA \u0434\u0435\u043B\u0430\u0435\u0442 \u0434\u043B\u044F \u043E\u0434\u043D\u043E\u0433\u043E \u0431\u0440\u0435\u043D\u0434\u0430 \u043A\u0430\u0436\u0434\u044B\u0439 \u043C\u0435\u0441\u044F\u0446. \u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0442\u0430\u0440\u0438\u0444, \u0447\u0442\u043E\u0431\u044B \u0441\u0440\u0430\u0432\u043D\u0438\u0442\u044C.",m_pro:"\u0422\u043E\u043B\u044C\u043A\u043E \u0432 Pro",p_k:"06 \xB7 \u0422\u0430\u0440\u0438\u0444\u044B",p_h:"\u041E\u0434\u0438\u043D \u0434\u0432\u0438\u0436\u043E\u043A. <i>\u0420\u0430\u0437\u043D\u044B\u0439 \u0430\u043F\u043F\u0435\u0442\u0438\u0442.</i>",p_p:"\u0412\u043E \u0432\u0441\u0435\u0445 \u0442\u0430\u0440\u0438\u0444\u0430\u0445 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043E\u0434\u0438\u043D \u0438 \u0442\u043E\u0442 \u0436\u0435 \u0434\u0432\u0438\u0436\u043E\u043A. \u041E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F \u043E\u0431\u044A\u0451\u043C \u0440\u0430\u0431\u043E\u0442\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u043D\u0430 \u0434\u0435\u043B\u0430\u0435\u0442 \u0434\u043B\u044F \u043E\u0434\u043D\u043E\u0433\u043E \u0431\u0440\u0435\u043D\u0434\u0430 \u0432 \u043C\u0435\u0441\u044F\u0446.",p_rec:"\u0412\u044B\u0431\u0438\u0440\u0430\u044E\u0442 \u0447\u0430\u0449\u0435",p_cta:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441 \u0432\u0430\u0448\u0438\u043C \u043F\u0440\u043E\u0434\u0436\u0435\u043A\u0442-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u043C",p_all:"\u0421\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0432\u0441\u0435 \u0441\u0442\u0440\u043E\u043A\u0438",p_hide:"\u0421\u043A\u0440\u044B\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438",p_note:"\xAB\u0414\u043E\xBB \u2014 \u044D\u0442\u043E \u043C\u0435\u0441\u044F\u0447\u043D\u044B\u0439 \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C; \u0442\u043E\u0447\u043D\u044B\u0439 \u043F\u043B\u0430\u043D \u0441\u043E\u0433\u043B\u0430\u0441\u0443\u0435\u0442\u0441\u044F \u043D\u0430 \u0441\u0442\u0430\u0440\u0442\u0435. \u0420\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0435 \u0431\u044E\u0434\u0436\u0435\u0442\u044B, \u0433\u043E\u043D\u043E\u0440\u0430\u0440\u044B \u0431\u043B\u043E\u0433\u0435\u0440\u043E\u0432 \u0438 \u0442\u043E\u0432\u0430\u0440\u044B \u0434\u043B\u044F \u043A\u043E\u043B\u043B\u0430\u0431\u043E\u0440\u0430\u0446\u0438\u0439 \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E.",c_k:"07 \xB7 \u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0443 \u0432\u0430\u0441",c_h:"\u0412\u0430\u0448\u0435 \xAB\u0434\u0430\xBB. <i>\u0415\u0451 \u0445\u043E\u0434.</i>",c_p:"\u0412\u044B \u0440\u0435\u0448\u0430\u0435\u0442\u0435, \u043D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u043D\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442. \u0411\u044E\u0434\u0436\u0435\u0442\u044B \u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0430\u043A\u0446\u0438\u0439 \u0432\u0441\u0435\u0433\u0434\u0430 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0435 \u0432\u044B. \u041E\u043D\u0430 \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u043E\u0442\u0434\u0435\u043B\u0443 \u043F\u0440\u043E\u0434\u0430\u0436, \u043D\u043E \u043D\u0435 \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0441\u0434\u0435\u043B\u043A\u0438 \u0438 \u043D\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043E\u043F\u043B\u0430\u0442\u0443.",c_a:"\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441\u0430\u043C\u0430",c_at:"\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438, \u0441\u0442\u043E\u0440\u0438\u0441, \u043E\u0442\u0432\u0435\u0442\u044B \u0438 \u043E\u0442\u0447\u0451\u0442\u044B \u043F\u043E \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D\u043D\u043E\u043C\u0443 \u043F\u043B\u0430\u043D\u0443",c_y:"\u041D\u0443\u0436\u043D\u043E \u0432\u0430\u0448\u0435 \xAB\u0434\u0430\xBB",c_yt:"\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F, \u0431\u044E\u0434\u0436\u0435\u0442, \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0430\u043A\u0446\u0438\u0439",c_n:"\u041D\u0438\u043A\u043E\u0433\u0434\u0430 \u0431\u0435\u0437 \u0432\u0430\u0441",c_nt:"\u0421\u0434\u0435\u043B\u043A\u0438 \u0438 \u043F\u0440\u0438\u0451\u043C \u043E\u043F\u043B\u0430\u0442\u044B",c_g:"\u0427\u0442\u043E \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u0442 NJO",c_g1:"\u0421\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043E\u0431\u044A\u0451\u043C \u0440\u0430\u0431\u043E\u0442\u044B \u043A\u0430\u0436\u0434\u044B\u0439 \u043C\u0435\u0441\u044F\u0446",c_g2:"\u0414\u043E\u0441\u0442\u0443\u043F \u043A USHA \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u0435 24/7",c_g3:"\u041A\u0430\u0436\u0434\u044B\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D \u043F\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0430\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 NJO",c_g4:"\u0415\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u044B\u0439 \u043E\u0442\u0447\u0451\u0442 \u0441 \u0447\u0435\u0441\u0442\u043D\u044B\u043C\u0438 \u0432\u044B\u0432\u043E\u0434\u0430\u043C\u0438 \u0438 \u043F\u043B\u0430\u043D\u043E\u043C \u043D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043C\u0435\u0441\u044F\u0446",c_e:"\u0423 \u0432\u0441\u0435\u0445 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0435 \u0418\u0418-\u043C\u043E\u0434\u0435\u043B\u0438. <i>\u0418\u043D\u0436\u0435\u043D\u0435\u0440\u044B</i> \u0434\u0435\u043B\u0430\u044E\u0442 \u0440\u0430\u0437\u043D\u0438\u0446\u0443.",c_ep:"USHA \u0441\u043E\u0437\u0434\u0430\u043B\u0430 NJO: \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438 \u0441 \u043C\u0435\u0442\u043E\u0434\u0438\u043A\u0430\u043C\u0438, \u043E\u0442\u0442\u043E\u0447\u0435\u043D\u043D\u044B\u043C\u0438 \u0437\u0430 \u0434\u0435\u0441\u044F\u0442\u044C \u0441 \u043B\u0438\u0448\u043D\u0438\u043C \u043B\u0435\u0442, \u0430\u0440\u0442-\u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0430, \u0437\u0430\u0434\u0430\u0432\u0448\u0438\u0435 \u0435\u0451 \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u044B, \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0438, \u043D\u0430\u0443\u0447\u0438\u0432\u0448\u0438\u0435 \u0435\u0451 \u0447\u0438\u0442\u0430\u0442\u044C \u0440\u044B\u043D\u043A\u0438, \u0438 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043A\u0430\u0436\u0434\u044B\u0439 \u043C\u0435\u0441\u044F\u0446 \u0434\u0435\u043B\u0430\u044E\u0442 \u0435\u0451 \u0443\u043C\u043D\u0435\u0435.",c_since:"\u0421 2016 \u0433\u043E\u0434\u0430",c_mk:"\u0420\u043E\u0441\u0441\u0438\u044F \xB7 GCC \xB7 \u0415\u0433\u0438\u043F\u0435\u0442",c_par:"\u041E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u044B",c_visit:"\u0421\u0430\u0439\u0442 NJO",fr_k:"08 \xB7 \u0421\u0442\u0430\u0440\u0442",fr_h:"\u041F\u0435\u0440\u0432\u0430\u044F \u043D\u0435\u0434\u0435\u043B\u044F <i>\u0437\u0430 \u043D\u0430\u0448 \u0441\u0447\u0451\u0442.</i>",fr_p:"USHA \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u0434 \u0432\u0430\u0448 \u0431\u0438\u0437\u043D\u0435\u0441: \u0442\u043E\u0432\u0430\u0440\u044B, \u0440\u044B\u043D\u043E\u043A, \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432 \u0438 \u043A\u0430\u043D\u0430\u043B\u044B. \u0412 \u043A\u043E\u043D\u0446\u0435 \u043D\u0435\u0434\u0435\u043B\u0438 \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435:",fr_1:"\u0412\u0430\u0448\u0443 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044E \u0441 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u0430\u043C\u0438 \u043E\u043D\u043B\u0430\u0439\u043D \u0438 \u043E\u0444\u043B\u0430\u0439\u043D",fr_2:"\u0427\u0435\u0442\u044B\u0440\u0435 \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u043F\u043E\u0441\u0442\u0430 \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0431\u0440\u0435\u043D\u0434\u0430",fr_3:"\u0421\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0447\u0430\u0442 \u0441 USHA, \u0433\u043E\u0442\u043E\u0432\u044B\u0439 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0438",fr_then:"\u0414\u0430\u043B\u044C\u0448\u0435 \u0440\u0435\u0448\u0430\u0435\u0442\u0435 \u0432\u044B. \u0415\u0441\u043B\u0438 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0435\u0442\u0435, \u043E\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043F\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043D\u043E\u043C\u0443 \u043F\u043B\u0430\u043D\u0443 \u0441\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u043D\u0435\u0434\u0435\u043B\u0438.",fr_lim:"USHA \u043E\u0442\u043A\u0440\u044B\u0442\u0430 \u0434\u043B\u044F \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439.",bf_q1:"\u0427\u0442\u043E \u0432\u044B \u043F\u0440\u043E\u0434\u0430\u0451\u0442\u0435?",bf_q2:"\u0427\u0442\u043E \u0441\u0435\u0439\u0447\u0430\u0441 \u0431\u043E\u043B\u0438\u0442 \u0431\u043E\u043B\u044C\u0448\u0435 \u0432\u0441\u0435\u0433\u043E?",bf_q3:"\u041A\u0430\u043A \u043F\u0440\u043E\u0434\u0436\u0435\u043A\u0442-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0443 \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438?",bf_a1:["\u0415\u0434\u0430 \u0438 \u043D\u0430\u043F\u0438\u0442\u043A\u0438","\u0422\u043E\u0432\u0430\u0440\u044B \u0434\u043B\u044F \u0434\u043E\u043C\u0430","\u041A\u0440\u0430\u0441\u043E\u0442\u0430 \u0438 \u0443\u0445\u043E\u0434","\u041E\u0434\u0435\u0436\u0434\u0430","\u0421\u0435\u043B\u043B\u0435\u0440 \u043C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u043E\u0432","\u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D","\u041D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u044C","\u0410\u0432\u0442\u043E","B2B \u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E","\u0414\u0440\u0443\u0433\u043E\u0435"],bf_a2:["\u0423\u043F\u0430\u043B\u0438 \u043F\u0440\u043E\u0434\u0430\u0436\u0438","\u041A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u044B \u0432\u044B\u0448\u0435 \u043D\u0430\u0441","\u0420\u0435\u043A\u043B\u0430\u043C\u0430 \u043F\u043E\u0434\u043E\u0440\u043E\u0436\u0430\u043B\u0430","\u041A\u043E\u043D\u0442\u0435\u043D\u0442 \u0431\u0435\u0437 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430","\u041D\u0435\u0442 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u043D\u0430 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433","\u0417\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u043C \u043D\u043E\u0432\u0438\u043D\u043A\u0443"],bf_name:"\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",bf_co:"\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F",bf_ct:"Telegram, \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0438\u043B\u0438 email",bf_next:"\u0414\u0430\u043B\u044C\u0448\u0435",bf_back:"\u041D\u0430\u0437\u0430\u0434",bf_send:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u043E\u0434\u0436\u0435\u043A\u0442-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0443",bf_safe:"\u0411\u0435\u0437 \u043E\u043F\u043B\u0430\u0442\u044B \u0438 \u0431\u0435\u0437 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u043D\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0443\u044E \u043D\u0435\u0434\u0435\u043B\u044E.",bf_doneH:"\u0411\u0440\u0438\u0444 \u0433\u043E\u0442\u043E\u0432.",bf_doneP:"\u041E\u043D \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D. \u041E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u0435\u0433\u043E \u043F\u0440\u043E\u0434\u0436\u0435\u043A\u0442-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0443 \u0432 Telegram \u0438\u043B\u0438 \u043F\u043E \u043F\u043E\u0447\u0442\u0435, \u0438 USHA \u043D\u0430\u0447\u043D\u0451\u0442 \u043F\u0435\u0440\u0432\u0443\u044E \u043D\u0435\u0434\u0435\u043B\u044E \u0441 \u0432\u0430\u043C\u0438.",bf_tg:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C Telegram",bf_mail:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E\u043C",bf_copy:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0435\u0449\u0451 \u0440\u0430\u0437",bf_copied:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E",bf_step:"\u0428\u0430\u0433",q_k:"\u0412\u043E\u043F\u0440\u043E\u0441\u044B",q_h:"\u041F\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043C <i>\u0440\u0435\u0448\u0438\u0442\u044C.</i>",faq:[["USHA \u2014 \u044D\u0442\u043E \u0447\u0430\u0442-\u0431\u043E\u0442?","\u041D\u0435\u0442. \u0412\u044B \u043E\u0431\u0449\u0430\u0435\u0442\u0435\u0441\u044C \u0441 \u043D\u0435\u0439 \u0432 \u043E\u0434\u043D\u043E\u043C \u0447\u0430\u0442\u0435, \u043D\u043E \u043E\u043D\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441\u0430\u043C\u0430 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C: \u0447\u0438\u0442\u0430\u0435\u0442 \u0432\u0430\u0448 \u0440\u044B\u043D\u043E\u043A, \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u0442, \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u0438 \u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0435\u0442 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D\u043D\u043E\u0433\u043E \u0432\u0430\u043C\u0438 \u043F\u043B\u0430\u043D\u0430."],["\u041D\u0443\u0436\u043D\u043E \u043E\u0441\u0432\u0430\u0438\u0432\u0430\u0442\u044C \u043D\u043E\u0432\u0443\u044E \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0443?","\u041D\u0435\u0442. \u041E\u043D\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u0432\u0430\u0448\u0435\u043C \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440\u0435. \u0412\u044B \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0435 \u0432\u0430\u0436\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u0434\u0435\u043B\u0430\u0435\u0442 \u043E\u043D\u0430 \u0438 \u043E\u0442\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u0436\u0434\u044B\u0439 \u043C\u0435\u0441\u044F\u0446."],["\u041A\u0442\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E?","\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438 \u0438 \u0430\u0440\u0442-\u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0430 NJO \u0437\u0430\u0434\u0430\u044E\u0442 \u0435\u0451 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u044B, \u0438 \u043A\u0430\u0436\u0434\u044B\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442\u0441\u044F \u043F\u043E \u043D\u0438\u043C, \u043F\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043C \u043F\u043E\u043F\u0430\u0441\u0442\u044C \u043A \u0432\u0430\u043C."],["\u041A\u0430\u043A\u0438\u0435 \u0440\u044B\u043D\u043A\u0438 \u0438 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0438?","\u0420\u043E\u0441\u0441\u0438\u044F, \u0441\u0442\u0440\u0430\u043D\u044B GCC \u0438 \u0415\u0433\u0438\u043F\u0435\u0442. Wildberries, Ozon, \u042F\u043D\u0434\u0435\u043A\u0441 \u041C\u0430\u0440\u043A\u0435\u0442, \u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435, Telegram, Instagram, \u0414\u0437\u0435\u043D, YouTube, RuTube, TikTok \u0438 \u0434\u0440\u0443\u0433\u0438\u0435."],["\u0420\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0439 \u0431\u044E\u0434\u0436\u0435\u0442 \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u0442\u0430\u0440\u0438\u0444?","\u041D\u0435\u0442. \u0420\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0435 \u0431\u044E\u0434\u0436\u0435\u0442\u044B, \u0433\u043E\u043D\u043E\u0440\u0430\u0440\u044B \u0431\u043B\u043E\u0433\u0435\u0440\u043E\u0432 \u0438 \u0442\u043E\u0432\u0430\u0440\u044B \u0434\u043B\u044F \u043A\u043E\u043B\u043B\u0430\u0431\u043E\u0440\u0430\u0446\u0438\u0439 \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E, \u0438 \u043A\u0430\u0436\u0434\u044B\u0439 \u0431\u044E\u0434\u0436\u0435\u0442 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0435 \u0432\u044B."],["\u0427\u0442\u043E \u043F\u043E\u0441\u043B\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0439 \u043D\u0435\u0434\u0435\u043B\u0438?","\u0420\u0435\u0448\u0430\u0435\u0442\u0435 \u0432\u044B. \u0415\u0441\u043B\u0438 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0435\u0442\u0435, \u043E\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442 \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043F\u043B\u0430\u043D \u0441\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u043D\u0435\u0434\u0435\u043B\u0438. \u0415\u0441\u043B\u0438 \u043D\u0435\u0442, \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F \u0438 \u043F\u043E\u0441\u0442\u044B \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0443 \u0432\u0430\u0441."]],g_k:"09 \xB7 \u041F\u0435\u0440\u0435\u0440\u044B\u0432",g_h:"\u0412\u044B \u0434\u043E\u0447\u0438\u0442\u0430\u043B\u0438 \u0434\u043E \u043A\u043E\u043D\u0446\u0430. <i>\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0438\u0433\u0440\u0430\u0442\u044C.</i>",g_p:"\u041F\u0440\u043E\u0432\u0435\u0434\u0438\u0442\u0435 USHA \u0441\u043A\u0432\u043E\u0437\u044C \u0448\u0443\u043C. \u041B\u043E\u0432\u0438\u0442\u0435 \u0441\u0438\u0433\u043D\u0430\u043B\u044B, \u0440\u0430\u0437\u0431\u0438\u0432\u0430\u0439\u0442\u0435 \u043E\u0431\u043B\u0430\u043A\u0430 \u0448\u0443\u043C\u0430, \u043D\u0430\u0439\u0434\u0438\u0442\u0435 \u0434\u043E\u043C \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043E\u0432.",g_start:"\u0418\u0433\u0440\u0430\u0442\u044C",g_keys:"\u0414\u0432\u0438\u0436\u0435\u043D\u0438\u0435: \u043C\u044B\u0448\u044C, \u0441\u0442\u0440\u0435\u043B\u043A\u0438 \u0438\u043B\u0438 WASD \xB7 \u0420\u044B\u0432\u043E\u043A: \u043F\u0440\u043E\u0431\u0435\u043B \xB7 \u041F\u0435\u0440\u0435\u0440\u044B\u0432: Esc",g_touch:"\u0412\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \xB7 \u043A\u0430\u0441\u0430\u043D\u0438\u0435 \u2014 \u0440\u044B\u0432\u043E\u043A",g_t1:"\u041F\u043E\u0439\u043C\u0430\u0442\u044C 12 \u0441\u0438\u0433\u043D\u0430\u043B\u043E\u0432",g_t2:"\u0420\u0430\u0437\u0431\u0438\u0442\u044C 5 \u043E\u0431\u043B\u0430\u043A\u043E\u0432 \u0448\u0443\u043C\u0430",g_t3:"\u041D\u0430\u0439\u0442\u0438 \u0434\u043E\u043C \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043E\u0432",g_done:"\u0412\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u044B. \u041E\u043D\u0430 \u0432\u0430\u043C\u0438 \u0433\u043E\u0440\u0434\u0438\u0442\u0441\u044F.",g_hint:"\u0427\u0442\u043E\u0431\u044B \u0440\u0430\u0437\u0431\u0438\u0442\u044C \u0448\u0443\u043C, \u0441\u0434\u0435\u043B\u0430\u0439\u0442\u0435 \u0440\u044B\u0432\u043E\u043A: \u043F\u0440\u043E\u0431\u0435\u043B \u0438\u043B\u0438 \u043A\u0430\u0441\u0430\u043D\u0438\u0435.",g_leave:"\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u0438\u0433\u0440\u044B",g_pause:"\u041F\u0435\u0440\u0435\u0440\u044B\u0432",g_brk:"\u041F\u0435\u0440\u0435\u0440\u044B\u0432",g_brkP:"\u041F\u043E\u043A\u0430 \u043E\u043D\u0430 \u043E\u0442\u0434\u044B\u0445\u0430\u0435\u0442, \u043F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u044C\u0442\u0435\u0441\u044C \u0441 \u0442\u0435\u043C\u0438, \u043A\u0442\u043E \u0435\u0451 \u0441\u043E\u0437\u0434\u0430\u043B.",g_open:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C njobusinesssolutions.com",g_back:"\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0432 \u0438\u0433\u0440\u0443",g_house:"\u0412\u044B \u043D\u0430\u0448\u043B\u0438 \u0434\u043E\u043C \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043E\u0432.",sec_h:"\u0412\u044B \u0437\u0430\u043C\u0435\u0442\u0438\u043B\u0438 \u0442\u043E, \u0447\u0442\u043E \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u044E\u0442 \u0434\u0440\u0443\u0433\u0438\u0435.",sec_p:"\u0418\u043C\u0435\u043D\u043D\u043E \u0442\u0430\u043A \u043E\u043D\u0430 \u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442. \u0421\u043A\u0438\u0434\u043A\u0430 30% \u043D\u0430 \u043F\u0435\u0440\u0432\u044B\u0435 \u0442\u0440\u0438 \u043C\u0435\u0441\u044F\u0446\u0430 USHA.",sec_code:"\u0412\u0430\u0448 \u043A\u043E\u0434",sec_claim:"\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0443 \u043F\u0440\u043E\u0434\u0436\u0435\u043A\u0442-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",sec_rare:"\u0421\u044E\u0434\u0430 \u0434\u043E\u0445\u043E\u0434\u0438\u0442 \u043C\u0435\u043D\u044C\u0448\u0435 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044F \u0438\u0437 \u0442\u044B\u0441\u044F\u0447\u0438.",ft_tag:"\u0410\u043B\u0433\u043E\u0440\u0438\u0442\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u0442 \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u044B.",ft_made:"\u0421\u043E\u0437\u0434\u0430\u043D\u043E NJO \xB7 \u0421 2016 \u0433\u043E\u0434\u0430",ft_top:"\u041D\u0430\u0432\u0435\u0440\u0445",ft_contact:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",bub:{hi:"\u041F\u0440\u0438\u0432\u0435\u0442!",tap2:"\u0425\u0438-\u0445\u0438.",tap3:"\u0415\u0449\u0451 \u0440\u0430\u0437?",tickle:"\u0429\u0435\u043A\u043E\u0442\u043D\u043E!",dizzy:"\u041E\u0439\u2026 \u0432\u0441\u0451 \u043A\u0440\u0443\u0436\u0438\u0442\u0441\u044F.",sleep:"\u0425\u0440\u2026 \u0432\u0441\u0451 \u0435\u0449\u0451 \u0441\u043B\u0435\u0436\u0443 \u0437\u0430 \u0440\u044B\u043D\u043A\u043E\u043C\u2026",wake:"\u042F \u0442\u0443\u0442! \u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u043E\u0441\u044C.",drag:"\u0423\u0438\u0438\u0438!",hover:"\u041C\u043E\u0436\u0435\u0442\u0435 \u043E\u0441\u0442\u0430\u0442\u044C\u0441\u044F.",lang:"\u041F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u043C \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u0438\u0439.",thinking:"\u0421\u0435\u0439\u0447\u0430\u0441 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u044E\u2026",why:"\u0427\u0435\u0441\u0442\u043D\u044B\u0439 \u0431\u043E\u0439. \u042F \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u043B\u0430.",month:"\u041B\u044E\u0431\u043B\u044E \u044D\u0442\u0443 \u0447\u0430\u0441\u0442\u044C.",plans:"Pro \u2014 \u043C\u043E\u0439 \u043B\u044E\u0431\u0438\u043C\u044B\u0439. \u0421\u043F\u0440\u043E\u0441\u0438\u0442\u0435 \u043F\u043E\u0447\u0435\u043C\u0443.",control:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0441\u043B\u043E\u0432\u043E \u0432\u0441\u0435\u0433\u0434\u0430 \u0437\u0430 \u0432\u0430\u043C\u0438.",free:"\u041E\u0434\u043D\u0430 \u043D\u0435\u0434\u0435\u043B\u044F. \u041F\u043E\u0442\u043E\u043C \u0440\u0435\u0448\u0430\u0435\u0442\u0435 \u0432\u044B.",faq:"\u041E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u0441\u043F\u0440\u043E\u0441\u0438\u0442\u0435 \u0443 \u043C\u0435\u043D\u044F \u0432 \u0447\u0430\u0442\u0435.",game:"\u041D\u0430\u043A\u043E\u043D\u0435\u0446-\u0442\u043E!",made:"\u041A\u0441\u0442\u0430\u0442\u0438, \u044D\u0442\u043E\u0442 \u0441\u0430\u0439\u0442 \u044F \u0441\u0434\u0435\u043B\u0430\u043B\u0430 \u0441\u0430\u043C\u0430."}}},Ms=[{k:["Competitor A \xB7 Wildberries \xB7 02:40","\u041A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442 \u0410 \xB7 Wildberries \xB7 02:40"],v:"\u221218%",t:["They cut the price overnight.","\u0421\u043D\u0438\u0437\u0438\u043B\u0438 \u0446\u0435\u043D\u0443 \u0437\u0430 \u043D\u043E\u0447\u044C."],d:["You hear it from her at 08:02, not from your falling numbers.","\u0412\u044B \u0443\u0437\u043D\u0430\u0451\u0442\u0435 \u043E\u0431 \u044D\u0442\u043E\u043C \u043E\u0442 \u043D\u0435\u0451 \u0432 08:02, \u0430 \u043D\u0435 \u043F\u043E \u043F\u0430\u0434\u0435\u043D\u0438\u044E \u0441\u0432\u043E\u0438\u0445 \u0446\u0438\u0444\u0440."],m:["Answer with a bundle and keep your margin.","\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u043D\u0430\u0431\u043E\u0440\u043E\u043C \u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043C\u0430\u0440\u0436\u0443."]},{k:["Search \xB7 Wildberries \xB7 7 days","\u041F\u043E\u0438\u0441\u043A \xB7 Wildberries \xB7 7 \u0434\u043D\u0435\u0439"],v:"+34%",t:["\u201CPower bank 20000\u201D is surging.","\u0417\u0430\u043F\u0440\u043E\u0441 \xAB\u043F\u0430\u0443\u044D\u0440\u0431\u0430\u043D\u043A 20000\xBB \u0440\u0435\u0437\u043A\u043E \u0440\u0430\u0441\u0442\u0451\u0442."],d:["Your card ranks 47th: the title misses the capacity.","\u0412\u0430\u0448\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043D\u0430 47-\u043C \u043C\u0435\u0441\u0442\u0435: \u0432 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0438 \u043D\u0435\u0442 \u0451\u043C\u043A\u043E\u0441\u0442\u0438."],m:["The fixed title is ready. Approve it.","\u0418\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0433\u043E\u0442\u043E\u0432\u043E. \u0423\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435."]},{k:["Reviews \xB7 30 days","\u041E\u0442\u0437\u044B\u0432\u044B \xB7 30 \u0434\u043D\u0435\u0439"],v:"\xD7212",t:["Buyers complain about packaging.","\u041F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0438 \u0436\u0430\u043B\u0443\u044E\u0442\u0441\u044F \u043D\u0430 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0443."],d:["On your competitors\u2019 products, not yours.","\u041D\u0430 \u0442\u043E\u0432\u0430\u0440\u044B \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432, \u0430 \u043D\u0435 \u043D\u0430 \u0432\u0430\u0448\u0438."],m:["Build this month\u2019s campaign around your packaging.","\u041F\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u044E \u043C\u0435\u0441\u044F\u0446\u0430 \u0432\u043E\u043A\u0440\u0443\u0433 \u0432\u0430\u0448\u0435\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438."]},{k:["Demand by hour \xB7 14 competitors","\u0421\u043F\u0440\u043E\u0441 \u043F\u043E \u0447\u0430\u0441\u0430\u043C \xB7 14 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432"],v:"19:00",t:["Demand moved to the evening.","\u0421\u043F\u0440\u043E\u0441 \u0441\u043C\u0435\u0441\u0442\u0438\u043B\u0441\u044F \u043D\u0430 \u0432\u0435\u0447\u0435\u0440."],d:["Your ads still run in the morning.","\u0410 \u0432\u0430\u0448\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0430 \u0432\u0441\u0451 \u0435\u0449\u0451 \u0438\u0434\u0451\u0442 \u0443\u0442\u0440\u043E\u043C."],m:["Move 70% of the budget to 19:00\u201302:00.","\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 70% \u0431\u044E\u0434\u0436\u0435\u0442\u0430 \u043D\u0430 19:00\u201302:00."]}],Tl=[{id:"sweets",n:["FMCG \xB7 Sweets","FMCG \xB7 \u0421\u043B\u0430\u0434\u043E\u0441\u0442\u0438"],q:["We\u2019re launching a new gift box next week.","\u041D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u043D\u0435\u0434\u0435\u043B\u0435 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u043C \u043D\u043E\u0432\u044B\u0439 \u043F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u044B\u0439 \u043D\u0430\u0431\u043E\u0440."],sig:["1,180 reviews \xB7 23 competitor sets","1 180 \u043E\u0442\u0437\u044B\u0432\u043E\u0432 \xB7 23 \u043D\u0430\u0431\u043E\u0440\u0430 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432"],a:["Buyers praise freshness and complain about dry fillings. Don\u2019t cut the price: lead with freshness and local production.","\u041F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0438 \u0445\u0432\u0430\u043B\u044F\u0442 \u0441\u0432\u0435\u0436\u0435\u0441\u0442\u044C \u0438 \u0436\u0430\u043B\u0443\u044E\u0442\u0441\u044F \u043D\u0430 \u0441\u0443\u0445\u0443\u044E \u043D\u0430\u0447\u0438\u043D\u043A\u0443. \u0426\u0435\u043D\u0443 \u043D\u0435 \u0441\u043D\u0438\u0436\u0430\u0435\u043C: \u0432\u0435\u0434\u0451\u043C \u0441\u043E \u0441\u0432\u0435\u0436\u0435\u0441\u0442\u0438 \u0438 \u043C\u0435\u0441\u0442\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430."],m:["Launch plan inside your budget, approved in one message.","\u041F\u043B\u0430\u043D \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u0431\u044E\u0434\u0436\u0435\u0442\u0430, \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043E\u0434\u043D\u0438\u043C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435\u043C."],prep:[["posts","\u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0439",6],["stories","\u0441\u0442\u043E\u0440\u0438\u0441",12],["short videos","\u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0445 \u0432\u0438\u0434\u0435\u043E",2],["ad creatives","\u043A\u0440\u0435\u0430\u0442\u0438\u0432\u043E\u0432",8]],week:1},{id:"drinks",n:["FMCG \xB7 Drinks","FMCG \xB7 \u041D\u0430\u043F\u0438\u0442\u043A\u0438"],q:["Why did we drop on Ozon?","\u041F\u043E\u0447\u0435\u043C\u0443 \u043C\u044B \u043F\u0440\u043E\u0441\u0435\u043B\u0438 \u043D\u0430 Ozon?"],sig:["\u22123 positions \xB7 02:40","\u22123 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \xB7 02:40"],a:["Your energy drink lost 3 positions overnight. The new leader shows the can cold, with drops, in the first frame.","\u0412\u0430\u0448 \u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u043A \u0437\u0430 \u043D\u043E\u0447\u044C \u043F\u043E\u0442\u0435\u0440\u044F\u043B 3 \u043F\u043E\u0437\u0438\u0446\u0438\u0438. \u041D\u043E\u0432\u044B\u0439 \u043B\u0438\u0434\u0435\u0440 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0431\u0430\u043D\u043A\u0443 \u0445\u043E\u043B\u043E\u0434\u043D\u043E\u0439, \u0441 \u043A\u0430\u043F\u043B\u044F\u043C\u0438, \u0432 \u043F\u0435\u0440\u0432\u043E\u043C \u043A\u0430\u0434\u0440\u0435."],m:["6 new card images in that logic are ready.","\u0413\u043E\u0442\u043E\u0432\u044B 6 \u043D\u043E\u0432\u044B\u0445 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0432 \u044D\u0442\u043E\u0439 \u043B\u043E\u0433\u0438\u043A\u0435."],prep:[["card images","\u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",6],["title variants","\u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F",3]]},{id:"home",n:["FMCG \xB7 Household","FMCG \xB7 \u0422\u043E\u0432\u0430\u0440\u044B \u0434\u043B\u044F \u0434\u043E\u043C\u0430"],q:["What do buyers want that nobody offers?","\u0427\u0435\u0433\u043E \u0445\u043E\u0442\u044F\u0442 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0438, \u0430 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442?"],sig:["\u201Csmell\u201D \xD7 212 in 30 days","\xAB\u0437\u0430\u043F\u0430\u0445\xBB \xD7 212 \u0437\u0430 30 \u0434\u043D\u0435\u0439"],a:["Reviews of rival detergents mention smell 212 times. Nobody advertises a fragrance-free line. You have one.","\u0412 \u043E\u0442\u0437\u044B\u0432\u0430\u0445 \u043D\u0430 \u043F\u043E\u0440\u043E\u0448\u043A\u0438 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432 \u0437\u0430\u043F\u0430\u0445 \u0443\u043F\u043E\u043C\u0438\u043D\u0430\u0435\u0442\u0441\u044F 212 \u0440\u0430\u0437. \u041D\u0438\u043A\u0442\u043E \u043D\u0435 \u0440\u0435\u043A\u043B\u0430\u043C\u0438\u0440\u0443\u0435\u0442 \u043B\u0438\u043D\u0435\u0439\u043A\u0443 \u0431\u0435\u0437 \u043E\u0442\u0434\u0443\u0448\u043A\u0438. \u0423 \u0432\u0430\u0441 \u043E\u043D\u0430 \u0435\u0441\u0442\u044C."],m:["Lead with the fragrance-free line in VK this week.","\u0412\u0435\u0434\u0451\u043C \u0441 \u043B\u0438\u043D\u0435\u0439\u043A\u0438 \u0431\u0435\u0437 \u043E\u0442\u0434\u0443\u0448\u043A\u0438 \u0432\u043E \u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435 \u043D\u0430 \u044D\u0442\u043E\u0439 \u043D\u0435\u0434\u0435\u043B\u0435."],prep:[["posts","\u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438",4],["ad creatives","\u043A\u0440\u0435\u0430\u0442\u0438\u0432\u043E\u0432",6]]},{id:"beauty",n:["Beauty","\u041A\u0440\u0430\u0441\u043E\u0442\u0430"],q:["Should we cut the price of our serum?","\u0421\u043D\u0438\u0436\u0430\u0442\u044C \u0446\u0435\u043D\u0443 \u043D\u0430 \u0441\u044B\u0432\u043E\u0440\u043E\u0442\u043A\u0443?"],sig:["2 brands moved to bundles","2 \u0431\u0440\u0435\u043D\u0434\u0430 \u043F\u0435\u0440\u0435\u0448\u043B\u0438 \u043D\u0430 \u043D\u0430\u0431\u043E\u0440\u044B"],a:["No. Two brands moved serums into bundles overnight, and your reviews praise the texture 41 times.","\u041D\u0435\u0442. \u0414\u0432\u0430 \u0431\u0440\u0435\u043D\u0434\u0430 \u0437\u0430 \u043D\u043E\u0447\u044C \u043F\u0435\u0440\u0435\u0432\u0435\u043B\u0438 \u0441\u044B\u0432\u043E\u0440\u043E\u0442\u043A\u0438 \u0432 \u043D\u0430\u0431\u043E\u0440\u044B, \u0430 \u0432\u0430\u0448\u0438 \u043E\u0442\u0437\u044B\u0432\u044B \u0445\u0432\u0430\u043B\u044F\u0442 \u0442\u0435\u043A\u0441\u0442\u0443\u0440\u0443 41 \u0440\u0430\u0437."],m:["Lead with texture in short videos and keep the price.","\u0412\u0435\u0434\u0451\u043C \u0441 \u0442\u0435\u043A\u0441\u0442\u0443\u0440\u044B \u0432 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0445 \u0432\u0438\u0434\u0435\u043E \u0438 \u0434\u0435\u0440\u0436\u0438\u043C \u0446\u0435\u043D\u0443."],prep:[["short videos","\u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0445 \u0432\u0438\u0434\u0435\u043E",3],["stories","\u0441\u0442\u043E\u0440\u0438\u0441",10]]},{id:"mp",n:["Marketplace sellers","\u0421\u0435\u043B\u043B\u0435\u0440\u044B \u043C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u043E\u0432"],q:["Why is my card not growing?","\u041F\u043E\u0447\u0435\u043C\u0443 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043D\u0435 \u0440\u0430\u0441\u0442\u0451\u0442?"],sig:["Rank 47 \xB7 search +34%","\u041C\u0435\u0441\u0442\u043E 47 \xB7 \u0441\u043F\u0440\u043E\u0441 +34%"],a:["Search for \u201Cpower bank 20000\u201D grew 34% in a week. Your card ranks 47th because the title misses the capacity.","\u0417\u0430\u043F\u0440\u043E\u0441 \xAB\u043F\u0430\u0443\u044D\u0440\u0431\u0430\u043D\u043A 20000\xBB \u0432\u044B\u0440\u043E\u0441 \u043D\u0430 34% \u0437\u0430 \u043D\u0435\u0434\u0435\u043B\u044E. \u0412\u0430\u0448\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043D\u0430 47-\u043C \u043C\u0435\u0441\u0442\u0435: \u0432 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0438 \u043D\u0435\u0442 \u0451\u043C\u043A\u043E\u0441\u0442\u0438."],m:["The fixed title and new first image are ready.","\u0418\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438 \u043D\u043E\u0432\u043E\u0435 \u043F\u0435\u0440\u0432\u043E\u0435 \u0444\u043E\u0442\u043E \u0433\u043E\u0442\u043E\u0432\u044B."],prep:[["title","\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",1],["card images","\u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439",5]]},{id:"cafe",n:["Caf\xE9s & restaurants","\u041A\u0430\u0444\u0435 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B"],q:["Our ads cost more and bring fewer guests.","\u0420\u0435\u043A\u043B\u0430\u043C\u0430 \u0434\u043E\u0440\u043E\u0436\u0435, \u0430 \u0433\u043E\u0441\u0442\u0435\u0439 \u043C\u0435\u043D\u044C\u0448\u0435."],sig:["Peak 07:40\u201308:30","\u041F\u0438\u043A 07:40\u201308:30"],a:["Demand for coffee to go near your three points peaks at 07:40\u201308:30. Your ads start at 11:00.","\u0421\u043F\u0440\u043E\u0441 \u043D\u0430 \u043A\u043E\u0444\u0435 \u0441 \u0441\u043E\u0431\u043E\u0439 \u0443 \u0432\u0430\u0448\u0438\u0445 \u0442\u0440\u0451\u0445 \u0442\u043E\u0447\u0435\u043A \u043F\u0438\u043A\u0443\u0435\u0442 \u0432 07:40\u201308:30. \u0410 \u0440\u0435\u043A\u043B\u0430\u043C\u0430 \u0441\u0442\u0430\u0440\u0442\u0443\u0435\u0442 \u0432 11:00."],m:["Move 60% of the budget to the mornings.","\u041F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u043C 60% \u0431\u044E\u0434\u0436\u0435\u0442\u0430 \u043D\u0430 \u0443\u0442\u0440\u043E."],prep:[["ad sets","\u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0445 \u043D\u0430\u0431\u043E\u0440\u0430",3],["stories","\u0441\u0442\u043E\u0440\u0438\u0441",8]]},{id:"estate",n:["Real estate","\u041D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u044C"],q:["A competitor launched a big campaign.","\u041A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043B \u0431\u043E\u043B\u044C\u0448\u0443\u044E \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u044E."],sig:["\u201Cfamily layout\u201D +18%","\xAB\u0441\u0435\u043C\u0435\u0439\u043D\u0430\u044F \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0430\xBB +18%"],a:["They promise \u201Cready in 2026\u201D. Searches for family layouts are up 18%.","\u041E\u043D\u0438 \u043E\u0431\u0435\u0449\u0430\u044E\u0442 \xAB\u0441\u0434\u0430\u0447\u0430 \u0432 2026\xBB. \u0417\u0430\u043F\u0440\u043E\u0441\u044B \u043E \u0441\u0435\u043C\u0435\u0439\u043D\u044B\u0445 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0430\u0445 \u0432\u044B\u0440\u043E\u0441\u043B\u0438 \u043D\u0430 18%."],m:["Answer with a three-bedroom layout series, not a discount.","\u041E\u0442\u0432\u0435\u0447\u0430\u0435\u043C \u0441\u0435\u0440\u0438\u0435\u0439 \u043F\u0440\u043E \u0442\u0440\u0451\u0445\u043A\u043E\u043C\u043D\u0430\u0442\u043D\u044B\u0435 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0438, \u0430 \u043D\u0435 \u0441\u043A\u0438\u0434\u043A\u043E\u0439."],prep:[["posts","\u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438",5],["short videos","\u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0445 \u0432\u0438\u0434\u0435\u043E",2]]},{id:"auto",n:["Auto dealers","\u0410\u0432\u0442\u043E\u0434\u0438\u043B\u0435\u0440\u044B"],q:["Two dealers cut prices. Do we follow?","\u0414\u0432\u0430 \u0434\u0438\u043B\u0435\u0440\u0430 \u0441\u043D\u0438\u0437\u0438\u043B\u0438 \u0446\u0435\u043D\u044B. \u041F\u043E\u0432\u0442\u043E\u0440\u044F\u0435\u043C?"],sig:["Service 3 : 1 price","\u0421\u0435\u0440\u0432\u0438\u0441 3 : 1 \u0446\u0435\u043D\u0430"],a:["Buyers ask about service, not price, three to one.","\u041F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0438 \u0441\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u044E\u0442 \u043E \u0441\u0435\u0440\u0432\u0438\u0441\u0435, \u0430 \u043D\u0435 \u043E \u0446\u0435\u043D\u0435, \u0442\u0440\u0438 \u043A \u043E\u0434\u043D\u043E\u043C\u0443."],m:["Offer a service bundle and protect the margin.","\u041F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u043F\u0430\u043A\u0435\u0442 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C \u043C\u0430\u0440\u0436\u0443."],prep:[["offer","\u043E\u0444\u0444\u0435\u0440",1],["ad creatives","\u043A\u0440\u0435\u0430\u0442\u0438\u0432\u043E\u0432",6]]}],Ta=[{d:["Mon","\u041F\u043D"],t:["One line from the owner: \u201CNew gift box launches next week.\u201D By the evening she has read 23 competitor sets and 1,180 reviews.","\u041E\u0434\u043D\u0430 \u0441\u0442\u0440\u043E\u043A\u0430 \u043E\u0442 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430: \xAB\u041D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u043D\u0435\u0434\u0435\u043B\u0435 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u043C \u043D\u043E\u0432\u044B\u0439 \u043D\u0430\u0431\u043E\u0440\xBB. \u041A \u0432\u0435\u0447\u0435\u0440\u0443 \u043E\u043D\u0430 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043B\u0430 23 \u043D\u0430\u0431\u043E\u0440\u0430 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432 \u0438 1 180 \u043E\u0442\u0437\u044B\u0432\u043E\u0432."]},{d:["Tue","\u0412\u0442"],t:["Her pick: keep the price, lead with freshness and local production. Plan and budget sent. The owner replies: \u201CApproved.\u201D","\u0415\u0451 \u0432\u044B\u0431\u043E\u0440: \u0446\u0435\u043D\u0443 \u043D\u0435 \u0441\u043D\u0438\u0436\u0430\u0435\u043C, \u0432\u0435\u0434\u0451\u043C \u0441\u043E \u0441\u0432\u0435\u0436\u0435\u0441\u0442\u0438 \u0438 \u043C\u0435\u0441\u0442\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430. \u041F\u043B\u0430\u043D \u0438 \u0431\u044E\u0434\u0436\u0435\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u044B. \u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442: \xAB\u0423\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E\xBB."]},{d:["Wed","\u0421\u0440"],t:["Ready: 12 product images from the brand\u2019s own photos, 6 posts, 12 stories, 2 short videos, 8 ad creatives.","\u0413\u043E\u0442\u043E\u0432\u043E: 12 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u044B\u0445 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u0438\u0437 \u0444\u043E\u0442\u043E \u0431\u0440\u0435\u043D\u0434\u0430, 6 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0439, 12 \u0441\u0442\u043E\u0440\u0438\u0441, 2 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0445 \u0432\u0438\u0434\u0435\u043E, 8 \u043A\u0440\u0435\u0430\u0442\u0438\u0432\u043E\u0432."]},{d:["Thu","\u0427\u0442"],t:["The campaign goes live within budget. 41 questions answered, 9 ready buyers handed to sales.","\u041A\u0430\u043C\u043F\u0430\u043D\u0438\u044F \u0437\u0430\u043F\u0443\u0449\u0435\u043D\u0430 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u0431\u044E\u0434\u0436\u0435\u0442\u0430. \u041E\u0442\u0432\u0435\u0442\u0438\u043B\u0430 \u043D\u0430 41 \u0432\u043E\u043F\u0440\u043E\u0441, 9 \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439 \u043F\u0435\u0440\u0435\u0434\u0430\u043B\u0430 \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0438."]},{d:["Fri","\u041F\u0442"],t:["Pistachio box: 3 days of stock left. Ads shift to the hazelnut box, 640 in stock.","\u0424\u0438\u0441\u0442\u0430\u0448\u043A\u043E\u0432\u044B\u0439 \u043D\u0430\u0431\u043E\u0440: \u043E\u0441\u0442\u0430\u0442\u043A\u043E\u0432 \u043D\u0430 3 \u0434\u043D\u044F. \u0420\u0435\u043A\u043B\u0430\u043C\u0430 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u043E\u0440\u0435\u0445\u043E\u0432\u044B\u0439, \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435 640 \u0448\u0442\u0443\u043A."]}],Al=[[["Knows your business","\u0417\u043D\u0430\u0435\u0442 \u0432\u0430\u0448 \u0431\u0438\u0437\u043D\u0435\u0441"],["Starts from zero","\u041A\u0430\u0436\u0434\u044B\u0439 \u0440\u0430\u0437 \u0441 \u043D\u0443\u043B\u044F"],["Through one manager","\u0427\u0435\u0440\u0435\u0437 \u043E\u0434\u043D\u043E\u0433\u043E \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430"],["Until people leave","\u041F\u043E\u043A\u0430 \u043B\u044E\u0434\u0438 \u043D\u0435 \u0443\u0448\u043B\u0438"],["Remembers everything","\u041F\u043E\u043C\u043D\u0438\u0442 \u0432\u0441\u0451"]],[["Watches competitors daily","\u0421\u043B\u0435\u0434\u0438\u0442 \u0437\u0430 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u0430\u043C\u0438 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u043E"],["No","\u041D\u0435\u0442"],["On request","\u041F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443"],["When there\u2019s time","\u041A\u043E\u0433\u0434\u0430 \u0435\u0441\u0442\u044C \u0432\u0440\u0435\u043C\u044F"],["Every day","\u041A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C"]],[["Decodes why leaders win","\u0420\u0430\u0437\u0431\u0438\u0440\u0430\u0435\u0442, \u043F\u043E\u0447\u0435\u043C\u0443 \u043B\u0438\u0434\u0435\u0440\u044B \u0432\u044B\u0438\u0433\u0440\u044B\u0432\u0430\u044E\u0442"],["No","\u041D\u0435\u0442"],["Rarely","\u0420\u0435\u0434\u043A\u043E"],["Rarely","\u0420\u0435\u0434\u043A\u043E"],["Always, as actions","\u0412\u0441\u0435\u0433\u0434\u0430, \u0432 \u0432\u0438\u0434\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439"]],[["Visuals","\u0412\u0438\u0437\u0443\u0430\u043B"],["Generic","\u0428\u0430\u0431\u043B\u043E\u043D\u043D\u044B\u0439"],["Good, expensive","\u0425\u043E\u0440\u043E\u0448\u0438\u0439, \u0434\u043E\u0440\u043E\u0433\u043E\u0439"],["Depends on hires","\u0417\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u043B\u044E\u0434\u0435\u0439"],["From your products","\u0418\u0437 \u0432\u0430\u0448\u0438\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432"]],[["Facts and numbers","\u0424\u0430\u043A\u0442\u044B \u0438 \u0446\u0438\u0444\u0440\u044B"],["Can be invented","\u041C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0432\u044B\u0434\u0443\u043C\u0430\u043D\u044B"],["Depends","\u041F\u043E-\u0440\u0430\u0437\u043D\u043E\u043C\u0443"],["Depends","\u041F\u043E-\u0440\u0430\u0437\u043D\u043E\u043C\u0443"],["Your data, checkable","\u0412\u0430\u0448\u0438 \u0434\u0430\u043D\u043D\u044B\u0435, \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u043E"]],[["Available","\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u044C"],["When prompted","\u041F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443"],["Office hours","\u0412 \u0440\u0430\u0431\u043E\u0447\u0438\u0435 \u0447\u0430\u0441\u044B"],["Minus holidays","\u041A\u0440\u043E\u043C\u0435 \u043E\u0442\u043F\u0443\u0441\u043A\u043E\u0432"],["24/7","24/7"]],[["Does the work end to end","\u0414\u0435\u043B\u0430\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0443 \u0446\u0435\u043B\u0438\u043A\u043E\u043C"],["You do it","\u0414\u0435\u043B\u0430\u0435\u0442\u0435 \u0432\u044B"],["Slowly","\u041C\u0435\u0434\u043B\u0435\u043D\u043D\u043E"],["If fully staffed","\u0415\u0441\u043B\u0438 \u0432\u0441\u0435 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435"],["Research \u2192 publish \u2192 measure","\u0410\u043D\u0430\u043B\u0438\u0437 \u2192 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044F \u2192 \u0437\u0430\u043C\u0435\u0440\u044B"]]],iu=[{k:["Intelligence","\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430"],t:["Market and competitor radar, success decoding, and a brief that ends in actions.","\u0420\u0430\u0434\u0430\u0440 \u0440\u044B\u043D\u043A\u0430 \u0438 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432, \u0440\u0430\u0437\u0431\u043E\u0440 \u0443\u0441\u043F\u0435\u0445\u0430 \u043B\u0438\u0434\u0435\u0440\u043E\u0432 \u0438 \u0441\u0432\u043E\u0434\u043A\u0430 \u0441 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F\u043C\u0438."],n:[[["competitors tracked","\u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432"],5,10],[["marketplaces","\u043C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u0430"],1,3]]},{k:["Strategy & content","\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F \u0438 \u043A\u043E\u043D\u0442\u0435\u043D\u0442"],t:["Quarterly strategy, monthly plan and regular publishing across your channels.","\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F \u043D\u0430 \u043A\u0432\u0430\u0440\u0442\u0430\u043B, \u043F\u043B\u0430\u043D \u043D\u0430 \u043C\u0435\u0441\u044F\u0446 \u0438 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 \u0432\u043E \u0432\u0441\u0435\u0445 \u043A\u0430\u043D\u0430\u043B\u0430\u0445."],n:[[["posts","\u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0439"],16,20],[["stories","\u0441\u0442\u043E\u0440\u0438\u0441"],32,40]]},{k:["Video, photo & design","\u0412\u0438\u0434\u0435\u043E, \u0444\u043E\u0442\u043E \u0438 \u0434\u0438\u0437\u0430\u0439\u043D"],t:["Videos without a shoot, product photo shoots from your real products, designs in one style.","\u0412\u0438\u0434\u0435\u043E \u0431\u0435\u0437 \u0441\u044A\u0451\u043C\u043A\u0438, \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0441\u0438\u0438 \u0438\u0437 \u0432\u0430\u0448\u0438\u0445 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432, \u043C\u0430\u043A\u0435\u0442\u044B \u0432 \u0435\u0434\u0438\u043D\u043E\u043C \u0441\u0442\u0438\u043B\u0435."],n:[[["videos","\u0432\u0438\u0434\u0435\u043E"],4,6],[["edits","\u043C\u043E\u043D\u0442\u0430\u0436\u0435\u0439"],10,15],[["photo shoots","\u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0441\u0438\u0438"],1,2],[["designs","\u043C\u0430\u043A\u0435\u0442\u043E\u0432"],10,15]]},{k:["Promotion & bloggers","\u041F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0438 \u0431\u043B\u043E\u0433\u0435\u0440\u044B"],t:["Promotions, ads within your budget, bloggers and UGC creators.","\u0410\u043A\u0446\u0438\u0438, \u0440\u0435\u043A\u043B\u0430\u043C\u0430 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u0431\u044E\u0434\u0436\u0435\u0442\u0430, \u0431\u043B\u043E\u0433\u0435\u0440\u044B \u0438 UGC-\u043A\u0440\u0435\u0430\u0442\u043E\u0440\u044B."],n:[[["promotions","\u0430\u043A\u0446\u0438\u0438"],1,2],[["ad platforms","\u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0438"],1,2],[["collaborations","\u043A\u043E\u043B\u043B\u0430\u0431\u043E\u0440\u0430\u0446\u0438\u0439"],10,30]]}],su=[["Packaging design","\u0414\u0438\u0437\u0430\u0439\u043D \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438"],["Customer replies, Mon\u2013Fri 10:00\u201318:00","\u041E\u0442\u0432\u0435\u0442\u044B \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044F\u043C, \u043F\u043D\u2013\u043F\u0442 10:00\u201318:00"],["Stock intelligence","\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u043E\u0441\u0442\u0430\u0442\u043A\u043E\u0432"]],ru=[{n:"USHA Core",t:["The engine for one brand, one marketplace, one ad platform.","\u0414\u0432\u0438\u0436\u043E\u043A \u0434\u043B\u044F \u043E\u0434\u043D\u043E\u0433\u043E \u0431\u0440\u0435\u043D\u0434\u0430, \u043E\u0434\u043D\u043E\u0433\u043E \u043C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u0430 \u0438 \u043E\u0434\u043D\u043E\u0439 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u043E\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0438."],pts:[["Up to 5 competitors tracked","\u0414\u043E 5 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u0434 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435\u043C"],["1 marketplace","1 \u043C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441"],["Up to 16 posts \xB7 32 stories","\u0414\u043E 16 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0439 \xB7 32 \u0441\u0442\u043E\u0440\u0438\u0441"],["Up to 4 videos \xB7 1 photo shoot","\u0414\u043E 4 \u0432\u0438\u0434\u0435\u043E \xB7 1 \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0441\u0438\u044F"],["1 ad platform \xB7 1 promotion","1 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u0430\u044F \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0430 \xB7 1 \u0430\u043A\u0446\u0438\u044F"]]},{n:"USHA Pro",hot:1,t:["More reach and output, plus customer replies and stock intelligence.","\u0411\u043E\u043B\u044C\u0448\u0435 \u043E\u0445\u0432\u0430\u0442\u0430 \u0438 \u0440\u0430\u0431\u043E\u0442\u044B, \u043F\u043B\u044E\u0441 \u043E\u0442\u0432\u0435\u0442\u044B \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044F\u043C \u0438 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u043E\u0441\u0442\u0430\u0442\u043A\u043E\u0432."],pts:[["Up to 10 competitors tracked","\u0414\u043E 10 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u0434 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435\u043C"],["Up to 3 marketplaces","\u0414\u043E 3 \u043C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u043E\u0432"],["Up to 20 posts \xB7 40 stories","\u0414\u043E 20 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0439 \xB7 40 \u0441\u0442\u043E\u0440\u0438\u0441"],["Packaging design \xB7 customer replies","\u0414\u0438\u0437\u0430\u0439\u043D \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438 \xB7 \u043E\u0442\u0432\u0435\u0442\u044B \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044F\u043C"],["2 ad platforms \xB7 2 promotions","2 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0435 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0438 \xB7 2 \u0430\u043A\u0446\u0438\u0438"]]},{n:"USHA Enterprise",t:["All eight areas, configured around your company.","\u0412\u0441\u0435 \u0432\u043E\u0441\u0435\u043C\u044C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439, \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0445 \u043F\u043E\u0434 \u0432\u0430\u0448\u0443 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044E."],pts:[["All eight areas","\u0412\u0441\u0435 \u0432\u043E\u0441\u0435\u043C\u044C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439"],["Operations and stock","\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B \u0438 \u043E\u0441\u0442\u0430\u0442\u043A\u0438"],["Dashboards, websites, automations","\u041F\u0430\u043D\u0435\u043B\u0438, \u0441\u0430\u0439\u0442\u044B, \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438"],["Scope agreed individually","\u041E\u0431\u044A\u0451\u043C \u0441\u043E\u0433\u043B\u0430\u0441\u0443\u0435\u0442\u0441\u044F \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E"]]}],ir=["Google","Meta","Midjourney","Runway","Kling AI"],Rl={tg:"https://t.me/njo_manager",mail:"darina@njobusinesssolutions.com",njo:"https://www.njobusinesssolutions.com/"};var Vn=(i,e)=>i+Math.random()*(e-i);function au({scene:i,cam:e,U:t,SND:n,haptic:s,T:r,onBreak:o,onSecret:a,onExit:l}){let g=new Float32Array(6294),v=new Float32Array(2098*3),p=new Float32Array(2098),d=new Float32Array(2098),M=new Lt;M.setAttribute("position",new st(g,3)),M.setAttribute("c",new st(v,3)),M.setAttribute("s",new st(p,1)),M.setAttribute("a",new st(d,1));let _=new lt({transparent:!0,depthWrite:!1,blending:Tn,uniforms:{uPx:{value:1}},vertexShader:"attribute vec3 c;attribute float s,a;uniform float uPx;varying vec3 vC;varying float vA;void main(){vC=c;vA=a;vec4 mv=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mv;gl_PointSize=s*uPx*(12./-mv.z);}",fragmentShader:"varying vec3 vC;varying float vA;void main(){float d=length(gl_PointCoord-.5);float a=smoothstep(.5,0.,d);a=a*a*vA;if(a<.004)discard;gl_FragColor=vec4(vC*a,a);}"}),T=new ms(M,_);T.frustumCulled=!1,T.visible=!1,i.add(T);let C=9,A=5.5,w={active:!1,paused:!1,sig:0,burst:0,house:!1,secretOn:!1,secretGot:!1,still:0,done:!1},L={x:0,y:0,vx:0,vy:0,dash:0,tx:0,ty:0,steer:!1},y=[],E=[],O={x:0,y:0},q={x:0,y:0,on:0},te={},U=!1,B=document.getElementById("tasks"),V=document.getElementById("toast"),Y=0;function X(I,Je=2.6){V.textContent=I,V.classList.add("on"),Y=Je}function G(){let I=r();B.innerHTML=`<div class="${w.sig>=12?"ok":""}"><span>${I.g_t1}</span><b>${Math.min(w.sig,12)}/12</b></div><div class="${w.burst>=5?"ok":""}"><span>${I.g_t2}</span><b>${Math.min(w.burst,5)}/5</b></div><div class="${w.house?"ok":""}"><span>${I.g_t3}</span><b>${w.house?"1":"0"}/1</b></div>`}function J(){let I=Math.tan(Qs.degToRad(e.fov/2))*12;A=I*1.5,C=I*e.aspect*1.5,y=[];for(let Ce=0;Ce<18;Ce++)y.push({x:Vn(-C*.9,C*.9),y:Vn(-A*.85,A*.85),ph:Vn(0,6.28),got:0,fade:0});E=[];for(let Ce=0;Ce<7;Ce++){let pe={x:Vn(-C*.8,C*.8),y:Vn(-A*.75,A*.75),r:Vn(.45,.75),hp:1,burst:0,p:[]};for(let $e=0;$e<260;$e++){let Be=Vn(0,6.28),S=Math.acos(Vn(-1,1)),x=Math.cbrt(Math.random())*pe.r;pe.p.push({ox:Math.sin(S)*Math.cos(Be)*x,oy:Math.sin(S)*Math.sin(Be)*x*.8,oz:Math.cos(S)*x*.6,vx:0,vy:0,vz:0})}E.push(pe)}let Je=Math.random()<.5?-1:1,we=Math.random()<.5?-1:1;O={x:Je*C*.93,y:we*A*.88},q={x:-Je*C*1.25,y:-we*A*1.2,on:0}}function ee(){J(),Object.assign(w,{active:!0,paused:!1,sig:0,burst:0,house:!1,secretOn:!1,secretGot:!1,still:0,done:!1}),Object.assign(L,{x:0,y:0,vx:0,vy:0,dash:0,tx:0,ty:0}),T.visible=!0,G(),X(r().g_p,3.5),n.voice("wee"),s([10,30,10])}function le(){w.active=!1,T.visible=!1,V.classList.remove("on")}function H(){!w.active||w.paused||(L.dash=.38,w.still=0,t.tgt.sq=.8,t.tgt.stretch=1.25,setTimeout(()=>{t.tgt.sq=1,t.tgt.stretch=1},220),n.voice("surprise"),s(12))}addEventListener("keydown",I=>{w.active&&(te[I.code]=1,w.still=0,I.code==="Space"&&(I.preventDefault(),H()),I.code==="Escape"&&(w.paused?re():$()),/Arrow/.test(I.code)&&I.preventDefault())}),addEventListener("keyup",I=>{te[I.code]=0});function $(){w.paused=!0,o(!0),n.voice("sleep")}function re(){w.paused=!1,o(!1),n.voice("wake")}let ye=new Ui,Me=new qt(new R(0,0,1),0),De=new R;function Oe(I){ye.setFromCamera(I,e),ye.ray.intersectPlane(Me,De)&&(L.tx=De.x,L.ty=De.y,L.steer=!0,w.still=0)}function Re(I,Je,we,Ce){if(!w.active||(_.uniforms.uPx.value=Math.min(2,devicePixelRatio||1)*Math.min(1.4,innerHeight/900),Y>0&&(Y-=I,Y<=0&&V.classList.remove("on")),w.paused))return;let pe=(te.ArrowRight||te.KeyD?1:0)-(te.ArrowLeft||te.KeyA?1:0),$e=(te.ArrowUp||te.KeyW?1:0)-(te.ArrowDown||te.KeyS?1:0);if(Ce&&Oe(we),pe||$e)L.vx+=pe*22*I,L.vy+=$e*22*I,L.steer=!1;else if(L.steer){let Q=L.tx-L.x,W=L.ty-L.y;L.vx+=Q*6*I,L.vy+=W*6*I}let Be=L.dash>0?2.2:1;if(L.dash-=I,L.dash>0){let Q=Math.hypot(L.vx,L.vy)||1;L.vx+=L.vx/Q*30*I,L.vy+=L.vy/Q*30*I}let S=Math.pow(.06,I);L.vx*=S,L.vy*=S;let x=7*Be,N=Math.hypot(L.vx,L.vy);N>x&&(L.vx*=x/N,L.vy*=x/N),L.x+=L.vx*I,L.y+=L.vy*I;let j=C*(w.done?1.35:1),K=A*(w.done?1.3:1);Math.abs(L.x)>j&&(L.x=Math.sign(L.x)*j,L.vx*=-.5),Math.abs(L.y)>K&&(L.y=Math.sign(L.y)*K,L.vy*=-.5),N<.15&&!(pe||$e)?w.still+=I:N>.4&&(w.still=0),t.group.position.set(L.x,L.y+Math.sin(Je*3)*.03,.2),t.group.scale.setScalar(.42),t.group.rotation.set(-L.vy*.04,L.vx*.06,-L.vx*.05),t.state("present"),t.tgt.lookX=Qs.clamp(L.vx*.12,-.6,.6),t.tgt.lookY=Qs.clamp(L.vy*.06,-.3,.3),t.tgt.happy=Math.max(0,t.tgt.happy-I*.8),e.position.x+=(L.x*.75-e.position.x)*(1-Math.pow(.03,I)),e.position.y+=(L.y*.75-e.position.y)*(1-Math.pow(.03,I)),e.position.z=12,e.lookAt(e.position.x,e.position.y,0),e.updateMatrixWorld();let Z=0,_e=(Q,W,ge,Se,Te,be,ce,Pe)=>{g[Z*3]=Q,g[Z*3+1]=W,g[Z*3+2]=ge,v[Z*3]=Se,v[Z*3+1]=Te,v[Z*3+2]=be,p[Z]=ce,d[Z]=Pe,Z++};for(let Q of y){let W=Q.y+Math.sin(Je*1.6+Q.ph)*.15;!Q.got&&Math.hypot(L.x-Q.x,L.y-W)<.55&&(Q.got=1,w.sig++,n.voice("collect"),s(8),t.tgt.happy=1,G(),w.sig===12&&X("\u2713 "+r().g_t1),Ye()),Q.got&&(Q.fade=Math.min(1,Q.fade+I*2));let ge=.8+.2*Math.sin(Je*5+Q.ph);_e(Q.x,W+Q.fade*.8,0,1,.45+Q.fade*.4,.18,(44+Q.fade*40)*ge,(1-Q.fade)*1.2),_e(Q.x,W+Q.fade*.8,0,1,.9,.8,11*ge,(1-Q.fade)*1.5)}for(let Q of E){let W=Math.hypot(L.x-Q.x,L.y-Q.y);if(!Q.burst&&W<Q.r+.38)if(L.dash>0||N>5.2){Q.burst=.001,w.burst++,n.voice("pop"),s([15,20,15]),G(),w.burst===5&&X("\u2713 "+r().g_t2),Ye();for(let ge of Q.p){let Se=Math.hypot(ge.ox,ge.oy,ge.oz)||1,Te=Vn(3,9);ge.vx=ge.ox/Se*Te+L.vx*.3,ge.vy=ge.oy/Se*Te+L.vy*.3,ge.vz=ge.oz/Se*Te}}else{let ge=(L.x-Q.x)/(W||1),Se=(L.y-Q.y)/(W||1);L.vx+=ge*6,L.vy+=Se*6,n.voice("hm"),s(6),U||(U=!0,X(r().g_hint,3))}Q.burst&&(Q.burst+=I);for(let ge of Q.p){let Se,Te,be,ce;if(Q.burst){let Pe=Q.burst;Se=Q.x+ge.ox+ge.vx*Pe*Math.exp(-Pe*.8),Te=Q.y+ge.oy+ge.vy*Pe*Math.exp(-Pe*.8),be=ge.oz+ge.vz*Pe*.3,ce=Math.max(0,1-Pe*.6)*.8}else Se=Q.x+ge.ox+Math.sin(Je*7+ge.ox*40)*.06,Te=Q.y+ge.oy+Math.cos(Je*6+ge.oy*50)*.06,be=ge.oz,ce=.55;_e(Se,Te,be,.62,.6,.66,5,ce)}}let se=Math.hypot(L.x-O.x,L.y-O.y);!w.house&&se<.8&&(w.house=!0,n.voice("found"),s([10,40,10]),G(),X(r().g_house,3),Ye(),setTimeout(()=>w.active&&!w.paused&&$(),1200));let me=.55,Le=Qs.clamp(1.2-se/6,.12,1);for(let Q=0;Q<220;Q++){let W=Q/220*5,ge,Se;W<1?(ge=-1+W*2,Se=-1):W<2?(ge=1,Se=-1+(W-1)*1.2):W<3?(ge=1-(W-2),Se=.2+(W-2)*.9):W<4?(ge=-(W-3),Se=1.1-(W-3)*.9):(ge=-1,Se=.2-(W-4)*1.2),_e(O.x+ge*me,O.y+Se*me,0,w.house?1:.9,w.house?.7:.85,w.house?.45:.8,4,Le*(w.house?1:.55)*(.7+.3*Math.sin(Je*2+Q)))}if(w.done&&!w.secretGot&&w.still>8&&!w.secretOn&&(w.secretOn=!0,n.voice("hm")),w.secretOn&&!w.secretGot){q.x+=(L.x+1.6-q.x)*I*.25,q.y+=(L.y+1-q.y)*I*.25,Math.hypot(L.x-q.x,L.y-q.y)<.5&&(w.secretGot=!0,n.voice("secret"),s([20,50,20,50,40]),a());for(let Q=0;Q<8;Q++)_e(q.x+Math.cos(Je+Q)*.05,q.y+Math.sin(Je*1.3+Q)*.05,0,.83,1,.23,30-Q*3,.5)}for(;Z<2098;Z++)d[Z]=0;M.attributes.position.needsUpdate=M.attributes.c.needsUpdate=M.attributes.s.needsUpdate=M.attributes.a.needsUpdate=!0}function Ye(){!w.done&&w.sig>=12&&w.burst>=5&&w.house&&(w.done=!0,setTimeout(()=>{X(r().g_done,4),n.voice("happy"),t.tgt.happy=1,t.tgt.blush=1,setTimeout(()=>t.tgt.blush=0,2500)},1500))}return{S:w,start:ee,stop:le,update:Re,dash:H,pause:$,resume:re,renderTasks:G,get active(){return w.active}}}var ue=(i,e=document)=>e.querySelector(i),rt=(i,e=document)=>[...e.querySelectorAll(i)],hn=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),en=(i,e,t)=>i+(e-i)*t,xn=(i,e,t)=>hn((i-e)/(t-e)),Ni=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Wn=()=>innerWidth<820,zl=/[?&]lite/.test(location.search),Il=i=>new Promise(e=>setTimeout(e,i)),fi=(()=>{let e=location.search.match(/lang=(en|ru)/);if(e)return e[1];if(/^\/en(\/|$)/.test(location.pathname))return"en";try{let t=localStorage.getItem("usha-lang");if(t==="en"){history.replaceState(null,"","/en/"+location.hash);return t}}catch{}return"ru"})(),Rs=()=>fi==="ru"?1:0,un=()=>wl[fi];function j0(i){let e=0,t=n=>[...n.childNodes].forEach(s=>{if(s.nodeType===3){let r=document.createDocumentFragment();s.textContent.split(/(\s+)/).forEach(o=>{if(!o)return;if(/^\s+$/.test(o)){r.appendChild(document.createTextNode(" "));return}let a=document.createElement("span");a.className="w";let l=document.createElement("span");l.textContent=o,l.style.setProperty("--i",e++),a.appendChild(l),r.appendChild(a)}),n.replaceChild(r,s)}else s.nodeType===1&&s.tagName!=="BR"&&t(s)});t(i)}function kl(){document.documentElement.lang=fi,rt("[data-t]").forEach(i=>{let e=un()[i.dataset.t];typeof e=="string"&&(i.innerHTML=e,i.classList.contains("sp")&&j0(i))}),rt("[data-ph]").forEach(i=>i.placeholder=un()[i.dataset.ph]),rt(".lang button").forEach(i=>i.classList.toggle("on",i.dataset.l===fi)),ue("#gkeys").textContent=matchMedia("(pointer:coarse)").matches?un().g_touch:un().g_keys,p_()}var Hl=ue("#gl"),mi=new Ys({canvas:Hl,antialias:!1,powerPreference:"high-performance"});Hl.addEventListener("webglcontextlost",i=>{i.preventDefault();try{let e=+(sessionStorage.getItem("usha-cl")||0);e<3&&(sessionStorage.setItem("usha-cl",String(e+1)),setTimeout(()=>location.reload(),400))}catch{location.reload()}});var ui=zl?.75:Math.min(devicePixelRatio||1,Wn()?1.25:1.75);mi.setPixelRatio(ui);mi.toneMapping=js;mi.toneMappingExposure=.92;var Rn=new $s;{let i=new ps(mi),e=new $s;e.add(new pt(new Pi(20,20,20),new Yt({color:197123,side:Bt})));let t=new pt(new ii(6,6),new Yt({color:new xe(4.2,3.8,3.4)}));t.position.set(-2,9.5,3),t.rotation.x=Math.PI/2,e.add(t);let n=new pt(new ii(1.4,10),new Yt({color:new xe(2.2,.7,.25)}));n.position.set(9.5,1,-2),n.rotation.y=-Math.PI/2,e.add(n);let s=new pt(new ii(1.4,10),new Yt({color:new xe(1.4,.45,.2)}));s.position.set(-9.5,-1,-2),s.rotation.y=Math.PI/2,e.add(s),Rn.environment=i.fromScene(e,.02).texture}var cn=new Ot(32,innerWidth/innerHeight,.1,200),Di={uT:{value:0},uG:{value:0},uGP:{value:new ve(.7,.6)},uAsp:{value:1},uWarm:{value:0}},Vl=new pt(new ii(2,2),new lt({uniforms:Di,depthWrite:!1,depthTest:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,.9999,1.);}",fragmentShader:tr+`uniform float uT,uG,uAsp,uWarm;uniform vec2 uGP;varying vec2 vUv;
    void main(){vec2 p=(vUv-.5)*vec2(uAsp,1.);
      vec3 c=mix(vec3(.018,.016,.022),vec3(.006,.005,.008),smoothstep(0.,1.,length(p)));
      float n=snoise(vec3(p*1.4,uT*.03))*.5+.5;
      vec2 g=(vUv-uGP)*vec2(uAsp,1.);float d=length(g);
      vec3 e=mix(vec3(1.,.42,.16),vec3(.55,.08,.03),smoothstep(0.,.55,d));
      c+=e*exp(-d*d*9.)*uG*(.55+.35*n)*.6;
      c+=vec3(.9,.35,.12)*exp(-pow(length(p-vec2(0.,-.9)),2.)*3.)*uWarm*.06;
      gl_FragColor=vec4(c,1.);}`}));Vl.frustumCulled=!1;Vl.renderOrder=-10;Rn.add(Vl);var Q0=zl?14e3:Wn()?18e3:48e3,bt=nu(Q0,ui);Rn.add(bt.pts);var Ra=Wn();Ra&&bt.relayout(!0);var Ge=new ai({detail:Wn()?64:110});Ge.state("resting",!0);Ge.set({inner:.3},!0);Rn.add(Ge.group);Ge.group.scale.setScalar(.001);var Aa=(()=>{let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d"),t=e.createRadialGradient(128,128,0,128,128,128);t.addColorStop(0,"rgba(255,190,150,.55)"),t.addColorStop(.35,"rgba(255,130,80,.22)"),t.addColorStop(.7,"rgba(255,90,31,.06)"),t.addColorStop(1,"rgba(255,90,31,0)"),e.fillStyle=t,e.fillRect(0,0,256,256);let n=new oa(i);n.colorSpace=St;let s=new aa(new Zs({map:n,blending:Tn,depthWrite:!1,transparent:!0,opacity:0}));return s.renderOrder=-1,Rn.add(s),s})(),Su=new Ks("#FFF1E6",.85);Su.position.set(-4,6,6);Rn.add(Su);var Ul=new pa("#FF6A2A",0,10,2);Rn.add(Ul);var Eu=new Ks("#9C8CFF",.2);Eu.position.set(5,-2,4);Rn.add(Eu);var Fi=new Ma(mi,new Pt(innerWidth*ui,innerHeight*ui,{samples:zl||Wn()?0:4,type:Kt}));Fi.addPass(new ba(Rn,cn));var rr=new ys(new ve(innerWidth,innerHeight),.55,.5,.8);Fi.addPass(rr);{let i=rr.setSize.bind(rr);rr.setSize=(e,t)=>i(Math.round(e/2),Math.round(t/2))}var Na=new xs({uniforms:{tDiffuse:{value:null},uT:{value:0},uAsp:{value:1},uFlash:{value:0},uGrain:{value:.028}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float uT,uAsp,uFlash,uGrain;varying vec2 vUv;
    float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
    void main(){vec2 d=vUv-.5;float ca=.0012*length(d*2.);
      vec3 c;c.r=texture2D(tDiffuse,vUv-d*ca).r;c.g=texture2D(tDiffuse,vUv).g;c.b=texture2D(tDiffuse,vUv+d*ca).b;
      float rr=length(d*vec2(uAsp,1.));c*=mix(1.,smoothstep(1.15,.25,rr),.55);
      c+=(h(vUv*vec2(1733.,977.)+fract(uT*1.7)*61.)-.5)*uGrain;
      c=mix(c,vec3(1.,.93,.88),uFlash);
      gl_FragColor=vec4(c,1.);}`});Fi.addPass(Na);Fi.addPass(new Sa);function Gl(){let i=innerWidth,e=innerHeight;document.querySelectorAll(".alg").forEach(t=>t._w=0),mi.setSize(i,e,!1),Fi.setSize(i,e),cn.aspect=i/e,cn.fov=i/e<.8?52:32,cn.updateProjectionMatrix(),Na.uniforms.uAsp.value=i/e,Di.uAsp.value=i/e,bt.u.uPx.value=mi.getPixelRatio()*Math.min(1.4,e/900),Wn()!==Ra&&(Ra=Wn(),bt.relayout(Ra))}var wu=matchMedia("(pointer:coarse)").matches,ou=innerWidth,lu=innerHeight;addEventListener("resize",()=>{wu&&innerWidth===ou&&Math.abs(innerHeight-lu)<160||(ou=innerWidth,lu=innerHeight,Gl(),typeof Nl=="function"&&Nl())});Gl();var je=!1,Mt=-1,An=0,lr=!1,Tu=0,Dl=ue("#intro"),e_=ue("#holdRing"),cu=ue("#hey"),t_=/skip/.test(location.search)||(()=>{try{return sessionStorage.getItem("usha-awake")==="1"}catch{return!1}})();t_&&(Dl.remove(),je=!0,Mt=9);je||document.documentElement.classList.add("locked");var Fa=i=>{je||i.preventDefault()};je||(addEventListener("touchmove",Fa,{passive:!1}),addEventListener("wheel",Fa,{passive:!1}));var hu=i=>{je||(lr=!0,Ae.holdStart(),ut(10),i&&i.preventDefault&&i.preventDefault())},Cl=()=>{lr&&Ae.holdStop(),lr=!1};if(!je){let i=ue("#holdBtn");i.addEventListener("pointerdown",hu),addEventListener("pointerup",Cl),addEventListener("pointercancel",Cl),addEventListener("keydown",e=>{(e.code==="Space"||e.code==="Enter")&&!e.repeat&&!je&&hu(e)}),addEventListener("keyup",e=>{(e.code==="Space"||e.code==="Enter")&&Cl()}),i.addEventListener("contextmenu",e=>e.preventDefault())}function n_(){Tu=An,je=!0,Mt=0,lr=!1,Ae.holdStop(),Ae.wake(),ut([14,40,30]),Dl.classList.add("gone"),setTimeout(()=>Dl.remove(),1300),removeEventListener("touchmove",Fa),removeEventListener("wheel",Fa),setTimeout(()=>Ae.voice("happy"),1400);try{sessionStorage.setItem("usha-awake","1")}catch{}}var vn=3.6,Au=["#hero","#noise","#signal","#talk","#why","#month","#plans","#control","#free","#faqs","#game"].map(i=>ue(i)),Oa=[],Pl=0,Ru=innerHeight;function Nl(){Ru=innerHeight,Oa=Au.map(i=>[i.offsetTop,i.offsetHeight])}function i_(i){let e=0,t=Ru;for(let n=0;n<Au.length;n++){let s=Oa[n][0],r=Math.max(1,Oa[n][1]-(n<3?t:0));i>=s-(n<3?1:t*.5)&&(e=n+hn((i-s+(n<3?0:t*.5))/r))}return e}var bs=new R,ar=new Ui,uu=new qt(new R(0,0,1),0),du=new R;function Ca(i,e,t){return uu.constant=-t,ar.setFromCamera(new ve(i/innerWidth*2-1,-(e/innerHeight)*2+1),cn),ar.ray.intersectPlane(uu,du)?du.toArray():[0,0,t]}var s_=ue("#talk .side"),r_=ue("#gher");function fu(i,e){let t=Sl(e);if(i===0)return{u:e?[0,2.98,0]:[2.75,.1,1.2],us:e?1.02:.95,ch:1,g:0,gp:[.72,.5],st:"present",dim:1};if(i===1)return{u:e?[0,-4.6,0]:[0,-.05,.6],us:e?.001:.4,ch:.55,g:0,gp:[.5,.5],st:"scan",dim:1};if(i===2)return{u:e?[t[0]+1.05,t[1]+.95,.4]:[t[0]+1.2,t[1]+.65,.4],us:e?.4:.55,ch:.3,g:.55,gp:e?[.7,.64]:[.78,.62],st:"found",dim:1};if(i===3){let s=s_.getBoundingClientRect(),r=hn(s.top+s.height*.5,-innerHeight*.5,innerHeight*1.5);return{u:Ca(s.left+s.width*.5,r,1),us:e?.62:1,ch:.25,g:.5,gp:[(s.left+s.width*.5)/innerWidth,1-r/innerHeight],st:"talk",dim:1}}if(i===10){let s=r_.getBoundingClientRect();return{u:Ca(s.left+s.width/2,s.top+s.height/2,2.2),us:e?.62:.78,ch:.5,g:.3,gp:[.5,.8],st:"present",dim:.8}}return{u:Ca(innerWidth-52,innerHeight-70,1),us:e||innerWidth<1300?.001:.24,ch:.35,g:0,gp:[.9,.2],st:"companion",dim:.5}}function a_(i,e){let t=hn(Math.floor(i),0,10),n=i-t,s=fu(t,e),r=fu(Math.min(t+1,10),e),o=Ni(xn(n,.86,1)),a={};for(let l in s)a[l]=Array.isArray(s[l])?s[l].map((c,h)=>en(c,r[l][h],o)):typeof s[l]=="number"?en(s[l],r[l],o):o<.5?s[l]:r[l];return s.us<.01&&(a.u=r.u.slice(),a.us=en(.001,r.us,Ni(xn(o,.85,1)))),r.us<.01&&(a.u=s.u.slice()),a.i=t,a.f=n,a.w=o,a}var o_=i=>{let e=i-.8,t=Math.floor(e),n=hn((e-t)/.28);return hn(t+Ni(n),0,4)},hi=ue("#bub"),sr=0,pu={};function tn(i,e=2.4){let t=un().bub[i];t&&(hi.textContent=t,hi.classList.add("on"),sr=e)}var de={taps:0,tapT:0,spin:0,hoverT:0,hoverSaid:-99,idle:0,asleep:!1,exprT:0,tick:0,drag:null,off:[0,0],lastX:0,lastY:0,lastScroll:0,surpriseT:-9,busy:!1};function yn(i,e){Object.assign(Ge.tgt,i),de.exprT=e}function l_(){de.idle=0,de.asleep&&(de.asleep=!1,yn({eyeW:1.25,eyeH:1.3},.7),Ae.voice("wake"),ut(8),tn("wake"))}["pointermove","pointerdown","keydown","wheel","touchstart"].forEach(i=>addEventListener(i,l_,{passive:!0}));function c_(){if(de.taps++,de.tapT=1.1,Ge.tgt.sq=.74,setTimeout(()=>Ge.tgt.sq=1,150),ut(12),de.taps>=6){de.taps=0,de.spin=1.4,Ae.voice("dizzy"),tn("dizzy"),yn({eyeW:.8,eyeH:.6},1.6),ut([20,30,20,30]);return}if(de.taps===3){Ge.winkT=.5,Ae.voice("giggle"),tn("tap3",1.6),yn({happy:1,blush:.8},1.2);return}if(de.taps===2){Ae.voice("giggle"),tn("tap2",1.4),yn({happy:1,blush:.5},1);return}Ae.voice("tap"),pu.hi||(pu.hi=1,tn("hi",1.6)),yn({eyeW:1.15,eyeH:1.15},.4)}var or=new ve(0,0),ci=new ve,cr=0,Gn=!1,za=!1,di=null,_v=new Ui;addEventListener("pointermove",i=>{let e=i.clientX/innerWidth*2-1,t=-(i.clientY/innerHeight)*2+1;Gn&&(de.tick+=Math.hypot(i.clientX-de.lastX,i.clientY-de.lastY)),de.lastX=i.clientX,de.lastY=i.clientY,or.set(e,t),cr=1,di&&!de.drag&&Math.hypot(i.clientX-di[0],i.clientY-di[1])>14&&di[2]&&(de.drag=!0,Ae.voice("wee"),tn("drag",1.2))},{passive:!0});document.addEventListener("pointerleave",()=>cr=0);var Fl=0,Ts=-1,mu=0;Hl.addEventListener("pointerdown",i=>{di=[i.clientX,i.clientY,Gn],za=!0,je&&!Xt.active&&!Gn&&(Fl=1,Ae.tick(900,.04))});addEventListener("pointerup",()=>{di&&di[2]&&!de.drag&&je&&!Xt.active&&c_(),de.drag&&Ae.voice("tap"),de.drag=null,di=null,za=!1});rt(".alg").forEach(i=>{i.addEventListener("pointerenter",()=>{Ts=+i.dataset.a,Ae.glass(Ts),ut(6)}),i.addEventListener("pointerleave",()=>Ts=-1)});var gu=scrollY,Ol=0;addEventListener("scroll",()=>{Ol=Math.abs(scrollY-gu),gu=scrollY},{passive:!0});var pi=0,Pa=0,Wl=!1,_u=5.2;function h_(){let i=Rs();ue("#fbody").innerHTML=Ms.map((e,t)=>`<div class="fitem${t===pi?" on":""}"><div class="fk">${e.k[i]}</div><div class="fv">${e.v}</div><h3>${e.t[i]}</h3><p>${e.d[i]}</p><div class="mv">${un().f_move}: ${e.m[i]}</div></div>`).join(""),ue("#fdots").innerHTML=Ms.map((e,t)=>`<button aria-label="${t+1}"><i></i></button>`).join(""),rt("#fdots button").forEach((e,t)=>e.onclick=()=>{Xl(t),Ae.tick(1300),ut(6)})}function Xl(i){pi=(i+Ms.length)%Ms.length,Pa=0,rt("#fbody .fitem").forEach((e,t)=>e.classList.toggle("on",t===pi)),ue("#fnum").textContent=`0${pi+1} / 0${Ms.length}`,je&&Ia===2&&(Ae.voice("found"),Ge.winkT=0,yn({eyeW:1.12,eyeH:1.12},.5))}ue(".fcard").addEventListener("pointerenter",()=>Wl=!0);ue(".fcard").addEventListener("pointerleave",()=>Wl=!1);function u_(i,e){e&&(Wl||(Pa+=i),Pa>_u&&Xl(pi+1),rt("#fdots button").forEach((t,n)=>{t.querySelector("i").style.transform=`scaleX(${n<pi?1:n===pi?Pa/_u:0})`}))}var La=0,Ss=0,Bl=!1;function d_(){let i=Rs();ue("#ichips").innerHTML=Tl.map((e,t)=>`<button class="${t===La?"on":""}" data-i="${t}">${e.n[i]}</button>`).join(""),rt("#ichips button").forEach(e=>e.onclick=()=>{La=+e.dataset.i,rt("#ichips button").forEach(t=>t.classList.toggle("on",t===e)),ql(La),ut(6)})}async function f_(i,e,t){i.textContent="";for(let n=0;n<e.length;n+=2){if(t!==Ss)return;i.textContent=e.slice(0,n+2),await Il(14)}}async function ql(i,e){let t=++Ss,n=Tl[i],s=Rs(),r=un();de.busy=!0;let o=ue("#chat");if(o.innerHTML=`<div class="q"><span>${n.q[s]}</span></div><div class="who">USHA</div><div class="reading"><span>${r.t_reading}</span><span class="bar"><i></i></span></div><div class="ub"></div>`,Ge.state("reading"),e||Ae.voice("think"),requestAnimationFrame(()=>{let c=o.querySelector(".bar i");c&&(c.style.width="100%")}),await Il(1400),t!==Ss)return;o.querySelector(".reading").remove();let a=o.querySelector(".ub");if(a.innerHTML=`<div class="sig">${n.sig[s]}</div><p class="ans"></p>`,As="found",Ae.voice("found"),ut(8),await f_(a.querySelector(".ans"),n.a[s],t),t!==Ss||(await Il(250),t!==Ss))return;a.insertAdjacentHTML("beforeend",`<div class="move">${n.m[s]}</div><div class="who" style="margin-top:18px">${r.t_prep}</div><div class="prep">${n.prep.map(c=>`<div><b data-n="${c[2]}">0</b>${c[s]}</div>`).join("")}</div>`+(n.week?`<button class="wkbtn" id="wkbtn">${r.t_week} \u2193</button><div class="week" id="week"><div class="who">${r.t_weekH}</div><div class="days">${Ta.map((c,h)=>`<button data-d="${h}" class="${h?"":"on"}">${c.d[s]}</button>`).join("")}</div><div class="day" id="day">${Ta[0].t[s]}</div></div>`:"")+`<div class="ill">${r.t_ill}</div>`),a.querySelectorAll(".prep b").forEach(c=>{let h=+c.dataset.n,u=0,f=performance.now();(function m(){u=Math.min(1,(performance.now()-f)/700),c.textContent=Math.round(h*Ni(u)),u<1&&requestAnimationFrame(m)})()}),As="happy",yn({happy:1,blush:.6},1.2),Ae.voice("happy");let l=ue("#wkbtn");l&&(l.onclick=()=>{ue("#week").classList.toggle("on"),Ae.tick(1100),ut(6)}),rt("#week .days button").forEach(c=>c.onclick=()=>{rt("#week .days button").forEach(h=>h.classList.toggle("on",h===c)),ue("#day").textContent=Ta[+c.dataset.d].t[Rs()],Ae.tick(900+ +c.dataset.d*120),ut(5)}),de.busy=!1,setTimeout(()=>{t===Ss&&(As="present")},1600)}var As="present";function p_(){h_(),Xl(pi),d_();let i=Rs(),e=un();ue("#cmp").innerHTML=`<tr><th></th><th>${e.w_c1}</th><th>${e.w_c2}</th><th>${e.w_c3}</th><th class="u">${e.w_c4}</th></tr>`+Al.map(t=>`<tr>${t.map((n,s)=>`<td class="${s===4?"u":""}">${n[i]}</td>`).join("")}</tr>`).join(""),ue("#cmpm").innerHTML=Al.map(t=>`<div class="cm glass"><h4>${t[0][i]}</h4><div class="cu"><span>USHA</span><b>${t[4][i]}</b></div><div class="co"><div><span>${e.w_c1}</span>${t[1][i]}</div><div><span>${e.w_c2}</span>${t[2][i]}</div><div><span>${e.w_c3}</span>${t[3][i]}</div></div></div>`).join(""),ue("#roles").innerHTML=e.w_roles.map(t=>`<span>${t}</span>`).join("")+'<span class="one">USHA</span>',m_(),ue("#plancards").innerHTML=ru.map((t,n)=>`<div class="plan glass rv in${t.hot?" hot":""}">${t.hot?`<span class="badge">${e.p_rec}</span>`:""}<h3>${t.n}</h3><p>${t.t[i]}</p><ul>${t.pts.map(s=>`<li>${s[i]}</li>`).join("")}</ul><a class="btn ${t.hot?"btn-p":"btn-g"}" href="#free" data-plan="${t.n}">${t.hot?'<span class="d"></span>':""}${e.p_cta}</a></div>`).join(""),rt("#plancards a").forEach(t=>t.addEventListener("click",()=>{mt.plan=t.dataset.plan})),ue("#faq").innerHTML=e.faq.map(t=>`<details><summary>${t[0]}</summary><p>${t[1]}</p></details>`).join(""),rt("#faq summary").forEach(t=>t.addEventListener("click",()=>{Ae.tick(1e3),ut(5)})),ue("#track").innerHTML=[...ir,...ir,...ir,...ir].map(t=>`<span>${t}</span>`).join(""),Ba(),Xt&&Xt.renderTasks(),E_()}var ws=1;function m_(){let i=Rs();ue("#areas").innerHTML=iu.map(e=>`<div class="area glass rv in"><h3>${e.k[i]}</h3><p>${e.t[i]}</p><div class="nums">${e.n.map(t=>`<div><span>${t[0][i]}</span><b data-a="${t[1]}" data-b="${t[2]}">${ws?t[2]:t[1]}</b></div>`).join("")}</div></div>`).join(""),ue("#proonly").innerHTML=`<b style="font-weight:600;color:var(--peach)">${un().m_pro}</b>`+su.map(e=>`<span>${e[i]}</span>`).join(""),ue("#proonly").classList.toggle("dim",!ws)}rt("#mtog button").forEach(i=>i.onclick=()=>{ws=+i.dataset.p,rt("#mtog button").forEach(e=>e.classList.toggle("on",e===i)),ue("#proonly").classList.toggle("dim",!ws),Ae.tick(ws?1400:1e3),ut(6),rt("#areas b[data-a]").forEach(e=>{let t=+e.textContent,n=+(ws?e.dataset.b:e.dataset.a),s=performance.now();(function r(){let o=Math.min(1,(performance.now()-s)/600);e.textContent=Math.round(en(t,n,Ni(o))),o<1&&requestAnimationFrame(r)})()})});var g_=new IntersectionObserver(i=>i.forEach(e=>{e.isIntersecting&&(e.target.classList.add("in"),e.target.id==="roles"&&setTimeout(()=>e.target.classList.add("go"),700))}),{threshold:.15});function Yl(){rt(".rv:not(.in)").forEach(i=>g_.observe(i))}var __=new IntersectionObserver(i=>i.forEach(e=>{e.isIntersecting&&!Bl&&je&&(Bl=!0,ql(0,!0))}),{threshold:.3});__.observe(ue("#chat"));var mt={step:0,sell:null,pain:null,plan:null};function Ba(){let i=un();ue("#bq1").innerHTML=i.bf_a1.map((e,t)=>`<button type="button" class="${mt.sell===t?"on":""}" data-i="${t}">${e}</button>`).join(""),ue("#bq2").innerHTML=i.bf_a2.map((e,t)=>`<button type="button" class="${mt.pain===t?"on":""}" data-i="${t}">${e}</button>`).join(""),rt("#bq1 button").forEach(e=>e.onclick=()=>{mt.sell=+e.dataset.i,Ba(),Ae.tick(1200),ut(6),setTimeout(()=>hr(1),260)}),rt("#bq2 button").forEach(e=>e.onclick=()=>{mt.pain=+e.dataset.i,Ba(),Ae.tick(1300),ut(6),setTimeout(()=>hr(2),260)}),ue("#bnextT").textContent=mt.step===2?i.bf_send:i.bf_next}function hr(i){mt.step=hn(i,0,2),rt("#brief .step").forEach(e=>e.classList.toggle("on",+e.dataset.s===mt.step)),ue("#bstep").textContent=mt.step+1,ue("#bprog").style.width=(mt.step+1)/3*100+"%",ue("#bback").style.visibility=mt.step?"visible":"hidden",Ba()}ue("#bback").onclick=()=>hr(mt.step-1);ue("#bnext").onclick=()=>{if(mt.step<2){if(mt.step===0&&mt.sell==null||mt.step===1&&mt.pain==null){vu(ue("#brief"));return}hr(mt.step+1);return}let i=ue("#bct").value.trim();if(!i){vu(ue("#bct").parentNode),ue("#bct").focus();return}let e=wl.en,n=["USHA brief \xB7 first free week",mt.plan?"Plan: "+mt.plan:"","Sells: "+e.bf_a1[mt.sell],"Pain: "+e.bf_a2[mt.pain],"Name: "+(ue("#bname").value.trim()||"-"),"Company: "+(ue("#bco").value.trim()||"-"),"Contact: "+i,"Language: "+fi.toUpperCase()].filter(Boolean).join(`
`);try{navigator.clipboard.writeText(n)}catch{}ue("#btg").href=Rl.tg,ue("#bmail").href=`mailto:${Rl.mail}?subject=${encodeURIComponent("USHA \xB7 free week")}&body=${encodeURIComponent(n)}`,ue("#bcopy").onclick=()=>{try{navigator.clipboard.writeText(n)}catch{}ue("#bcopy").textContent=un().bf_copied,Ae.tick(1500)},rt("#brief .step, #bnav, #brief .safe").forEach(s=>s.style.display="none"),ue("#bdone").classList.add("on"),Ae.voice("happy"),ut([10,30,10]),yn({happy:1,blush:1},2)};function vu(i){i.animate([{transform:"translateX(0)"},{transform:"translateX(-8px)"},{transform:"translateX(8px)"},{transform:"translateX(0)"}],{duration:300}),Ae.voice("hm"),ut(20)}hr(0);var Xt=null;Xt=au({scene:Rn,cam:cn,U:Ge,SND:Ae,haptic:ut,T:()=>un(),onBreak:i=>ue("#brk").classList.toggle("on",i),onSecret:()=>{ue("#secret").classList.add("on")},onExit:()=>{}});function Cu(i){Wn()&&(mi.setPixelRatio(i?Math.min(ui,1):ui),Fi.setPixelRatio(i?Math.min(ui,1):ui),rr.enabled=!i,Gl())}function v_(){let i=ue("#game");scrollTo({top:i.offsetTop,behavior:"instant"}),document.documentElement.classList.add("gaming"),Cu(!0),Xt.start(),tn("game",1.8)}function x_(){Xt.stop(),Cu(!1),document.documentElement.classList.remove("gaming"),ue("#brk").classList.remove("on")}ue("#gstart").onclick=v_;ue("#gleave").onclick=x_;ue("#gpause").onclick=()=>Xt.pause();ue("#gresume").onclick=()=>Xt.resume();ue("#sclose").onclick=()=>ue("#secret").classList.remove("on");addEventListener("pointerdown",i=>{!Xt.active||i.target.closest&&i.target.closest("button")||(za=!0,or.set(i.clientX/innerWidth*2-1,-(i.clientY/innerHeight)*2+1),cr=1,matchMedia("(pointer:coarse)").matches&&Xt.dash())},{passive:!0});addEventListener("touchmove",i=>{Xt.active&&!(i.target.closest&&i.target.closest("button"))&&i.preventDefault()},{passive:!1});var y_=new _s,It=0,Ll=0,Ia=-1,xu={},M_=rt(".alg"),b_=rt("[data-in]"),S_=new qt(new R(0,0,1),0),yu=new R;function Pu(){let i=Math.min(.25,y_.getDelta()),e=Math.min(.05,i);It+=e,ci.lerp(or,1-Math.pow(.003,e));let t=Wn();Pl-=i,(Pl<=0||!Oa.length)&&(Nl(),Pl=1);let n=i_(scrollY),s=a_(n,t),r=location.search.match(/hold=([\d.]+)/);je||(An=hn(An+(lr?i/3:-i*1.4)),r&&(An=+r[1]),e_.style.setProperty("--p",An.toFixed(4)),ue("#holdBtn").style.setProperty("--k",An.toFixed(4)),Ae.holdLevel(An),An>=1&&n_()),Mt>=0&&(Mt+=i);let o=je?xn(Mt,.15,1.4):0,a=je&&Mt<vn+1?Math.min(xn(Mt,.9,1.5),1-xn(Mt,vn-.6,vn)):0;cu.style.opacity=a.toFixed(3),cu.style.transform=`translateY(${((1-a)*16).toFixed(1)}px)`,document.documentElement.classList.toggle("locked",!je||Mt<vn-.3),Na.uniforms.uFlash.value=je?Math.max(0,1-Mt*2.4)*.55:0;let l=Xt.active;Ll=en(Ll,l?4:o_(n),1-Math.pow(4e-4,e)),bt.u.uS.value=Ll,bt.u.uT.value=It,bt.u.uChaos.value=l?.3:s.ch,bt.u.uHold.value=je?Math.max(0,1-Mt*1.6)*Tu:An,bt.u.uBurst.value=je&&Mt<1.6?Math.sin(Math.PI*hn(Mt/1.6))*.55:0,bt.u.uDim.value=en(bt.u.uDim.value,je?l?.45:s.dim:.55+An*.45,.08),s.i===1&&Ts<0&&(mu+=e),bt.u.uHi.value=Ts>=0?Ts:s.i===1&&s.f>.2&&s.f<.66?Math.floor(mu/1.6)%4:-1,Fl*=Math.pow(.05,e);let c=wu?0:1;l||(cn.position.set(ci.x*.45*c,ci.y*.25*c,12),cn.lookAt(ci.x*.12*c,ci.y*.06*c,0),cn.updateMatrixWorld()),ar.setFromCamera(or,cn),ar.ray.intersectPlane(S_,yu)&&bt.u.uMouse.value.copy(yu),bt.u.uMouseK.value=en(bt.u.uMouseK.value,(je&&!l?cr:0)*(s.i===3?.35:1)*(1+Fl*2.5),.1),bt.u.uFocus.value=12-(s.i===3?1.2:0);let h=s.u,u=s.us;if(je&&Mt<vn+.4){let g=1-Ni(xn(Mt,vn-.5,vn+.4));h=h.map((v,p)=>en(v,[0,t?.9:.55,1.5][p],g)),u=en(u,t?.7:.85,g)}if(de.drag){let g=Ca(de.lastX,de.lastY,h[2]);de.off[0]=en(de.off[0],g[0]-h[0],.25),de.off[1]=en(de.off[1],g[1]-h[1],.25)}else de.off[0]*=Math.pow(.004,e),de.off[1]*=Math.pow(.004,e);if(!l){let g=Math.sin(It*1.25)*.06*(de.asleep?.4:1);Ge.group.position.set(h[0]+de.off[0],h[1]+g+de.off[1],h[2]),Ge.group.scale.setScalar(Math.max(.001,u*Ni(xn(Mt,.35,1.5)))),de.spin=Math.max(0,de.spin-e),Ge.group.rotation.set(Math.sin(It*.6)*.03,-.1+ci.x*.22+Math.sin(It*.35)*.05+de.off[0]*.3,Math.sin(It*.8)*.025-de.off[0]*.25+(de.spin>0?Math.sin(de.spin*9)*de.spin*.5:0))}let f=Ge.group.position,m=Ge.group.scale.x;if(s.i<=3&&!l&&bt.u.uC3.value.set(f.x,f.y,f.z-.2),Aa.position.set(f.x,f.y-.05,f.z-.5),Aa.scale.setScalar(m*4.4),Aa.material.opacity=en(Aa.material.opacity,o*(de.asleep?.35:.9)*(Ge.p.light*.4+.8)*(1+Ge.p.blush*.3),.1),Ul.position.set(f.x+.6,f.y+.4,f.z-1.6),Ul.intensity=7*o*(m/.9),Di.uG.value=en(Di.uG.value,l?0:s.g*o,.06),Di.uGP.value.set(s.gp[0],s.gp[1]),Di.uT.value=It,Di.uWarm.value=o*(s.i===0?1:.4),Gn=je&&!l&&m>.05&&ar.intersectObject(Ge.mesh,!1).length>0,document.body.classList.toggle("hot",Gn),Es.classList.toggle("hot",Gn),de.tapT-=e,de.tapT<0&&(de.taps=0),Gn?(de.hoverT+=e,de.hoverT>1.2&&It-de.hoverSaid>25&&(de.hoverSaid=It,Ae.voice("purr"),tn("hover",1.8),yn({blush:.7,happy:.6},1.5))):de.hoverT=0,de.tick*=Math.pow(.2,e),de.tick>innerWidth*.9&&Gn&&(de.tick=0,Ae.voice("giggle"),tn("tickle",1.6),yn({happy:1,blush:1},1.4),Ge.tgt.stretch=1.12,setTimeout(()=>Ge.tgt.stretch=1,300),ut([8,20,8,20,8])),Ol>innerHeight*.35&&It-de.surpriseT>4&&je&&(de.surpriseT=It,yn({eyeW:1.2,eyeH:1.35},.5),Ae.voice("surprise")),Ol*=.5,je&&!l&&Mt>vn&&(de.idle+=i,de.idle>28&&!de.asleep&&(de.asleep=!0,Ae.voice("sleep"),tn("sleep",3.5))),de.exprT>0&&(de.exprT-=e,de.exprT<=0&&Object.assign(Ge.tgt,{eyeW:1,eyeH:1,happy:0,blush:0})),!l)if(!je||Mt<1.1)Ge.state("resting"),Ge.tgt.inner=.3+o;else if(de.asleep)Ge.state("resting"),Ge.tgt.inner=.7,Ge.tgt.sq=1+Math.sin(It*1.2)*.03;else{let g=s.st;if(g==="talk"&&(g=As==="found"?"found":Ge.p.read>.5&&de.busy?"reading":"present"),de.busy&&s.i===3&&As!=="found"&&As!=="happy"&&(g="reading"),g==="scan"||g==="companion"?Ge.state("present"):Ge.state(g),(g==="present"||g==="companion")&&(Ge.tgt.lookX=ci.x*.5,Ge.tgt.lookY=ci.y*.22),g==="scan"){let v=wa(t),p=bt.u.uHi.value>=0?bt.u.uHi.value:Math.floor(It/1.6)%4;Ge.tgt.lookX=hn((v[p][0]-f.x)*.18,-.65,.65),Ge.tgt.lookY=hn((v[p][1]-f.y)*.15,-.3,.3)}g==="found"&&(Ge.tgt.lookX=s.i===3?.45:t?.25:-.5,Ge.tgt.lookY=s.i===3?0:-.22),g==="reading"&&(Ge.tgt.lookX=Math.sin(It*2.2)*.35),Ge.tgt.inner=.95+(Gn?.25:0)+(g==="found"?.2:0)}if(Xt.update(e,It,or,l&&cr&&(matchMedia("(pointer:fine)").matches||za)),Ge.update(e,It),m<.05&&(sr=0,hi.classList.remove("on")),sr>0){sr-=e,sr<=0&&hi.classList.remove("on"),bs.set(t?f.x:f.x+(f.x>0?-m*.55:m*.55),f.y+m*1,f.z).project(cn);let g=(bs.x+1)/2*innerWidth;hi.classList.toggle("flip",!t&&g>innerWidth*.6),hi.classList.toggle("mid",t),hi.style.left=g.toFixed(0)+"px",hi.style.top=((1-bs.y)/2*innerHeight).toFixed(0)+"px"}if(s.i===1||s.i===0&&s.w>0||s.i===2&&s.f<.1){let g=wa(t),v=bt.u.uHi.value;M_.forEach((p,d)=>{bs.set(g[d][0],g[d][1]-(t?.7:1),0).project(cn);let M=p._w||(p._w=p.offsetWidth),_=M/2+6;p.style.left=(hn((bs.x+1)/2*innerWidth,_,innerWidth-_)-M/2).toFixed(1)+"px",p.style.top=((1-bs.y)/2*innerHeight).toFixed(1)+"px",p.classList.toggle("on",v===d)})}u_(e,s.i===2&&je);for(let g of b_){let v=g._m||(g._m=[g.dataset.in.split(",").map(Number),g.classList.contains("sp")]),[p,d,M]=v[0],_=Math.min(M,.86),T=n-p,C=Math.min(xn(T,d,d+.1),1-xn(T,_,_+.08));d<0&&(C=(je?xn(Mt,vn-.2,vn+1.2):0)*(1-xn(T,_,_+.08)));let A=Math.round(C*1e3);A!==g._q&&(g._q=A,v[1]?(g.style.setProperty("--v",C.toFixed(3)),g.style.opacity=C>.001?1:0):(g.style.opacity=C.toFixed(3),g.style.transform=`translate3d(0,${((1-C)*22).toFixed(1)}px,0)`),g.style.visibility=C<.005?"hidden":"visible")}if(s.i!==Ia&&(Ia=s.i,je&&Mt>vn+1)){Ae.tick(700+Math.min(s.i,6)*120,.04),ut(5);let g=["","","","","why","month","plans","control","free","faq","made"][s.i];g==="made"?setTimeout(()=>{Ia===10&&!Xt.active&&(tn("made",4.5),Ae.voice("happy"))},900):g&&!xu[g]&&!t&&(xu[g]=1,setTimeout(()=>tn(g,2.6),600))}Na.uniforms.uT.value=It,Fi.render(),requestAnimationFrame(Pu)}var Es=ue("#cur"),Ua=innerWidth/2,Da=innerHeight/2,Mu=Ua,bu=Da;matchMedia("(hover:hover) and (pointer:fine)").matches&&(document.documentElement.classList.add("cur-on"),addEventListener("pointermove",i=>{Mu=i.clientX,bu=i.clientY,Es.style.opacity=1;let e=i.target.closest&&i.target.closest("a,button,summary,.alg,input");Es.classList.toggle("big",!!e)},{passive:!0}),(function i(){Ua+=(Mu-Ua)*.22,Da+=(bu-Da)*.22,Es.style.transform=`translate(${Ua}px,${Da}px)`,requestAnimationFrame(i)})(),(function i(){Es.classList.add("blink"),setTimeout(()=>Es.classList.remove("blink"),130),setTimeout(i,2500+Math.random()*3500)})());rt(".lang button").forEach(i=>i.onclick=()=>{if(fi!==i.dataset.l){fi=i.dataset.l;try{localStorage.setItem("usha-lang",fi);history.replaceState(null,"",(fi==="en"?"/en/":"/")+location.hash)}catch{}document.title=fi==="en"?"USHA by NJO — AI business intelligence & marketing engine for brands":"USHA by NJO — ИИ-аналитик и маркетолог для брендов и маркетплейсов";kl(),Yl(),Ae.voice("hm"),tn("lang",1.6),ut(6),Bl&&ql(La,!0)}});var Lu="usha-sound",Iu=()=>{try{return localStorage.getItem(Lu)==="off"}catch{return!1}};ue("#snd").classList.toggle("on",!Iu());ue("#snd").onclick=i=>{i.stopPropagation();let e=!ue("#snd").classList.contains("on");e?Ae.enable():Ae.disable(),ue("#snd").classList.toggle("on",e);try{localStorage.setItem(Lu,e?"on":"off")}catch{}ut(8)};var Uu=i=>{i.target&&i.target.closest&&i.target.closest("#snd")||Iu()||(Ae.enable(),Ae.running&&["pointerup","touchend","click","keydown"].forEach(e=>removeEventListener(e,Uu,!0)))};["pointerup","touchend","click","keydown"].forEach(i=>addEventListener(i,Uu,!0));document.addEventListener("pointerover",i=>{let e=i.target.closest&&i.target.closest("a,button,summary");e&&e!==document._lastHov&&(document._lastHov=e,Ae.tick(1500,.025))});function E_(){rt('a[href^="#"]').forEach(i=>{i._b||(i._b=1,i.addEventListener("click",e=>{let t=i.getAttribute("href");if(t.length<2){e.preventDefault(),scrollTo({top:0,behavior:"smooth"});return}let n=ue(t);if(!n)return;e.preventDefault();let s=t==="#noise"||t==="#signal"?innerHeight*.45:0;scrollTo({top:n.offsetTop+s,behavior:"smooth"})}))})}kl();Yl();(document.fonts?document.fonts.ready:Promise.resolve()).then(()=>{kl(),Yl()});Pu();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
