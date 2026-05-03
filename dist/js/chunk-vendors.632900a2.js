"use strict";(self["webpackChunknewbet"]=self["webpackChunknewbet"]||[]).push([[504],{2455:function(t,e,n){n.d(e,{cY:function(){return w},FA:function(){return x},g:function(){return R},u:function(){return l},Uj:function(){return u},Fy:function(){return b},bD:function(){return k},T9:function(){return v},yU:function(){return y},mS:function(){return h},Ku:function(){return P},ZQ:function(){return _},zJ:function(){return L},zW:function(){return A},nr:function(){return T},Ov:function(){return S},gE:function(){return M},eX:function(){return C}});n(4423),n(4114),n(8111),n(7588),n(1701),n(9577),n(6632),n(4226),n(9486),n(456),n(4979);const r=()=>{},i=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},s=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,s||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const c=i<t.length,u=c?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==u||null==h)throw new a;const f=e<<2|o>>4;if(r.push(f),64!==u){const t=o<<4&240|u>>2;if(r.push(t),64!==h){const t=u<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c=function(t){const e=i(t);return o.encodeByteArray(e,!0)},u=function(t){return c(t).replace(/\./g,"")},l=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=()=>h().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",VUE_APP_ADMIN_PASS:"admin1234",VUE_APP_ADMIN_USER:"admin",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},p=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&l(t[1]);return e&&JSON.parse(e)},g=()=>{try{return r()||f()||d()||p()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},m=t=>g()?.emulatorHosts?.[t],y=t=>{const e=m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},v=()=>g()?.config;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},a="";return[u(JSON.stringify(n)),u(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){const t=g()?.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function T(){return!E()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function S(){return!E()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function A(){try{return"object"===typeof indexedDB}catch(t){return!1}}function C(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const I="FirebaseError";class R extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=I,Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,x.prototype.create)}}class x{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?O(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new R(r,o,n);return a}}function O(t,e){return t.replace(N,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const N=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(D(n)&&D(s)){if(!k(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function D(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(t){return t&&t._delegate?t._delegate:t}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t){try{const e=t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t;return e.endsWith(".cloudworkstations.dev")}catch{return!1}}async function M(t){const e=await fetch(t,{credentials:"include"});return e.ok}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */},144:function(t,e,n){n.d(e,{C4:function(){return S},EW:function(){return Ft},Gc:function(){return vt},IG:function(){return Ct},IJ:function(){return Nt},KR:function(){return Ot},Kh:function(){return yt},Pr:function(){return Mt},R1:function(){return Pt},Tm:function(){return Et},X2:function(){return u},a1:function(){return Rt},bl:function(){return A},fE:function(){return Tt},g8:function(){return _t},hV:function(){return zt},hZ:function(){return M},i9:function(){return xt},ju:function(){return St},lJ:function(){return It},qA:function(){return F},u4:function(){return L},ux:function(){return At},wB:function(){return qt},yC:function(){return o}});n(4114),n(8111),n(2489),n(7588),n(1701),n(3579),n(5367),n(2731),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8454),n(9452);var r=n(4232);let i,s;class o{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=i,!t&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let t,e;if(this._isPaused=!0,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){let t,e;if(this._isPaused=!1,this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){1===++this._on&&(this.prevScope=i,i=this)}off(){this._on>0&&0===--this._on&&(i=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){let e,n;for(this._active=!1,e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(this.effects.length=0,e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0}}}function a(){return i}const c=new WeakSet;class u{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,i&&i.active&&i.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,c.has(this)&&(c.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||d(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,C(this),m(this);const t=s,e=E;s=this,E=!0;try{return this.fn()}finally{0,y(this),s=t,E=e,this.flags&=-3}}stop(){if(1&this.flags){for(let t=this.deps;t;t=t.nextDep)b(t);this.deps=this.depsTail=void 0,C(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){v(this)&&this.run()}get dirty(){return v(this)}}let l,h,f=0;function d(t,e=!1){if(t.flags|=8,e)return t.next=h,void(h=t);t.next=l,l=t}function p(){f++}function g(){if(--f>0)return;if(h){let t=h;h=void 0;while(t){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let t;while(l){let n=l;l=void 0;while(n){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(e){t||(t=e)}n=r}}if(t)throw t}function m(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function y(t){let e,n=t.depsTail,r=n;while(r){const t=r.prevDep;-1===r.version?(r===n&&(n=t),b(r),_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=t}t.deps=e,t.depsTail=n}function v(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(w(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function w(t){if(4&t.flags&&!(16&t.flags))return;if(t.flags&=-17,t.globalVersion===I)return;if(t.globalVersion=I,!t.isSSR&&128&t.flags&&(!t.deps&&!t._dirty||!v(t)))return;t.flags|=2;const e=t.dep,n=s,i=E;s=t,E=!0;try{m(t);const n=t.fn(t._value);(0===e.version||(0,r.$H)(n,t._value))&&(t.flags|=128,t._value=n,e.version++)}catch(o){throw e.version++,o}finally{s=n,E=i,y(t),t.flags&=-3}}function b(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let t=n.computed.deps;t;t=t.nextDep)b(t,!0)}e||--n.sc||!n.map||n.map.delete(n.key)}function _(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let E=!0;const T=[];function S(){T.push(E),E=!1}function A(){const t=T.pop();E=void 0===t||t}function C(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const t=s;s=void 0;try{e()}finally{s=t}}}let I=0;class R{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class x{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!s||!E||s===this.computed)return;let e=this.activeLink;if(void 0===e||e.sub!==s)e=this.activeLink=new R(s,this),s.deps?(e.prevDep=s.depsTail,s.depsTail.nextDep=e,s.depsTail=e):s.deps=s.depsTail=e,O(e);else if(-1===e.version&&(e.version=this.version,e.nextDep)){const t=e.nextDep;t.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=t),e.prevDep=s.depsTail,e.nextDep=void 0,s.depsTail.nextDep=e,s.depsTail=e,s.deps===e&&(s.deps=t)}return e}trigger(t){this.version++,I++,this.notify(t)}notify(t){p();try{0;for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{g()}}}function O(t){if(t.dep.sc++,4&t.sub.flags){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let t=e.deps;t;t=t.nextDep)O(t)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const N=new WeakMap,k=Symbol(""),D=Symbol(""),P=Symbol("");function L(t,e,n){if(E&&s){let e=N.get(t);e||N.set(t,e=new Map);let r=e.get(n);r||(e.set(n,r=new x),r.map=e,r.key=n),r.track()}}function M(t,e,n,i,s,o){const a=N.get(t);if(!a)return void I++;const c=t=>{t&&t.trigger()};if(p(),"clear"===e)a.forEach(c);else{const s=(0,r.cy)(t),o=s&&(0,r.yI)(n);if(s&&"length"===n){const t=Number(i);a.forEach((e,n)=>{("length"===n||n===P||!(0,r.Bm)(n)&&n>=t)&&c(e)})}else switch((void 0!==n||a.has(void 0))&&c(a.get(n)),o&&c(a.get(P)),e){case"add":s?o&&c(a.get("length")):(c(a.get(k)),(0,r.CE)(t)&&c(a.get(D)));break;case"delete":s||(c(a.get(k)),(0,r.CE)(t)&&c(a.get(D)));break;case"set":(0,r.CE)(t)&&c(a.get(k));break}}g()}function U(t){const e=At(t);return e===t?e:(L(e,"iterate",P),Tt(t)?e:e.map(It))}function F(t){return L(t=At(t),"iterate",P),t}function V(t,e){return Et(t)?_t(t)?Rt(It(e)):Rt(e):It(e)}const j={__proto__:null,[Symbol.iterator](){return B(this,Symbol.iterator,t=>V(this,t))},concat(...t){return U(this).concat(...t.map(t=>(0,r.cy)(t)?U(t):t))},entries(){return B(this,"entries",t=>(t[1]=V(this,t[1]),t))},every(t,e){return q(this,"every",t,e,void 0,arguments)},filter(t,e){return q(this,"filter",t,e,t=>t.map(t=>V(this,t)),arguments)},find(t,e){return q(this,"find",t,e,t=>V(this,t),arguments)},findIndex(t,e){return q(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return q(this,"findLast",t,e,t=>V(this,t),arguments)},findLastIndex(t,e){return q(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return q(this,"forEach",t,e,void 0,arguments)},includes(...t){return G(this,"includes",t)},indexOf(...t){return G(this,"indexOf",t)},join(t){return U(this).join(t)},lastIndexOf(...t){return G(this,"lastIndexOf",t)},map(t,e){return q(this,"map",t,e,void 0,arguments)},pop(){return H(this,"pop")},push(...t){return H(this,"push",t)},reduce(t,...e){return z(this,"reduce",t,e)},reduceRight(t,...e){return z(this,"reduceRight",t,e)},shift(){return H(this,"shift")},some(t,e){return q(this,"some",t,e,void 0,arguments)},splice(...t){return H(this,"splice",t)},toReversed(){return U(this).toReversed()},toSorted(t){return U(this).toSorted(t)},toSpliced(...t){return U(this).toSpliced(...t)},unshift(...t){return H(this,"unshift",t)},values(){return B(this,"values",t=>V(this,t))}};function B(t,e,n){const r=F(t),i=r[e]();return r===t||Tt(t)||(i._next=i.next,i.next=()=>{const t=i._next();return t.done||(t.value=n(t.value)),t}),i}const $=Array.prototype;function q(t,e,n,r,i,s){const o=F(t),a=o!==t&&!Tt(t),c=o[e];if(c!==$[e]){const e=c.apply(t,s);return a?It(e):e}let u=n;o!==t&&(a?u=function(e,r){return n.call(this,V(t,e),r,t)}:n.length>2&&(u=function(e,r){return n.call(this,e,r,t)}));const l=c.call(o,u,r);return a&&i?i(l):l}function z(t,e,n,r){const i=F(t),s=i!==t&&!Tt(t);let o=n,a=!1;i!==t&&(s?(a=0===r.length,o=function(e,r,i){return a&&(a=!1,e=V(t,e)),n.call(this,e,V(t,r),i,t)}):n.length>3&&(o=function(e,r,i){return n.call(this,e,r,i,t)}));const c=i[e](o,...r);return a?V(t,c):c}function G(t,e,n){const r=At(t);L(r,"iterate",P);const i=r[e](...n);return-1!==i&&!1!==i||!St(n[0])?i:(n[0]=At(n[0]),r[e](...n))}function H(t,e,n=[]){S(),p();const r=At(t)[e].apply(t,n);return g(),A(),r}const K=(0,r.pD)("__proto__,__v_isRef,__isVue"),W=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>"arguments"!==t&&"caller"!==t).map(t=>Symbol[t]).filter(r.Bm));function Q(t){(0,r.Bm)(t)||(t=String(t));const e=At(this);return L(e,"has",t),e.hasOwnProperty(t)}class X{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){if("__v_skip"===e)return t["__v_skip"];const i=this._isReadonly,s=this._isShallow;if("__v_isReactive"===e)return!i;if("__v_isReadonly"===e)return i;if("__v_isShallow"===e)return s;if("__v_raw"===e)return n===(i?s?pt:dt:s?ft:ht).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=(0,r.cy)(t);if(!i){let t;if(o&&(t=j[e]))return t;if("hasOwnProperty"===e)return Q}const a=Reflect.get(t,e,xt(t)?t:n);if((0,r.Bm)(e)?W.has(e):K(e))return a;if(i||L(t,"get",e),s)return a;if(xt(a)){const t=o&&(0,r.yI)(e)?a:a.value;return i&&(0,r.Gv)(t)?wt(t):t}return(0,r.Gv)(a)?i?wt(a):yt(a):a}}class Y extends X{constructor(t=!1){super(!1,t)}set(t,e,n,i){let s=t[e];const o=(0,r.cy)(t)&&(0,r.yI)(e);if(!this._isShallow){const t=Et(s);if(Tt(n)||Et(n)||(s=At(s),n=At(n)),!o&&xt(s)&&!xt(n))return t||(s.value=n),!0}const a=o?Number(e)<t.length:(0,r.$3)(t,e),c=Reflect.set(t,e,n,xt(t)?t:i);return t===At(i)&&(a?(0,r.$H)(n,s)&&M(t,"set",e,n,s):M(t,"add",e,n)),c}deleteProperty(t,e){const n=(0,r.$3)(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&M(t,"delete",e,void 0,i),s}has(t,e){const n=Reflect.has(t,e);return(0,r.Bm)(e)&&W.has(e)||L(t,"has",e),n}ownKeys(t){return L(t,"iterate",(0,r.cy)(t)?"length":k),Reflect.ownKeys(t)}}class J extends X{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Z=new Y,tt=new J,et=new Y(!0),nt=t=>t,rt=t=>Reflect.getPrototypeOf(t);function it(t,e,n){return function(...i){const s=this["__v_raw"],o=At(s),a=(0,r.CE)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=s[t](...i),h=n?nt:e?Rt:It;return!e&&L(o,"iterate",u?D:k),(0,r.X$)(Object.create(l),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}}})}}function st(t){return function(...e){return"delete"!==t&&("clear"===t?void 0:this)}}function ot(t,e){const n={get(n){const i=this["__v_raw"],s=At(i),o=At(n);t||((0,r.$H)(n,o)&&L(s,"get",n),L(s,"get",o));const{has:a}=rt(s),c=e?nt:t?Rt:It;return a.call(s,n)?c(i.get(n)):a.call(s,o)?c(i.get(o)):void(i!==s&&i.get(n))},get size(){const e=this["__v_raw"];return!t&&L(At(e),"iterate",k),e.size},has(e){const n=this["__v_raw"],i=At(n),s=At(e);return t||((0,r.$H)(e,s)&&L(i,"has",e),L(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)},forEach(n,r){const i=this,s=i["__v_raw"],o=At(s),a=e?nt:t?Rt:It;return!t&&L(o,"iterate",k),s.forEach((t,e)=>n.call(r,a(t),a(e),i))}};(0,r.X$)(n,t?{add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear")}:{add(t){const n=At(this),i=rt(n),s=At(t),o=e||Tt(t)||Et(t)?t:s,a=i.has.call(n,o)||(0,r.$H)(t,o)&&i.has.call(n,t)||(0,r.$H)(s,o)&&i.has.call(n,s);return a||(n.add(o),M(n,"add",o,o)),this},set(t,n){e||Tt(n)||Et(n)||(n=At(n));const i=At(this),{has:s,get:o}=rt(i);let a=s.call(i,t);a||(t=At(t),a=s.call(i,t));const c=o.call(i,t);return i.set(t,n),a?(0,r.$H)(n,c)&&M(i,"set",t,n,c):M(i,"add",t,n),this},delete(t){const e=At(this),{has:n,get:r}=rt(e);let i=n.call(e,t);i||(t=At(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&M(e,"delete",t,void 0,s),o},clear(){const t=At(this),e=0!==t.size,n=void 0,r=t.clear();return e&&M(t,"clear",void 0,void 0,n),r}});const i=["keys","values","entries",Symbol.iterator];return i.forEach(r=>{n[r]=it(r,t,e)}),n}function at(t,e){const n=ot(t,e);return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.$3)(n,i)&&i in e?n:e,i,s)}const ct={get:at(!1,!1)},ut={get:at(!1,!0)},lt={get:at(!0,!1)};const ht=new WeakMap,ft=new WeakMap,dt=new WeakMap,pt=new WeakMap;function gt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:gt((0,r.Zf)(t))}function yt(t){return Et(t)?t:bt(t,!1,Z,ct,ht)}function vt(t){return bt(t,!1,et,ut,ft)}function wt(t){return bt(t,!0,tt,lt,dt)}function bt(t,e,n,i,s){if(!(0,r.Gv)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=mt(t);if(0===o)return t;const a=s.get(t);if(a)return a;const c=new Proxy(t,2===o?i:n);return s.set(t,c),c}function _t(t){return Et(t)?_t(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function Et(t){return!(!t||!t["__v_isReadonly"])}function Tt(t){return!(!t||!t["__v_isShallow"])}function St(t){return!!t&&!!t["__v_raw"]}function At(t){const e=t&&t["__v_raw"];return e?At(e):t}function Ct(t){return!(0,r.$3)(t,"__v_skip")&&Object.isExtensible(t)&&(0,r.yQ)(t,"__v_skip",!0),t}const It=t=>(0,r.Gv)(t)?yt(t):t,Rt=t=>(0,r.Gv)(t)?wt(t):t;function xt(t){return!!t&&!0===t["__v_isRef"]}function Ot(t){return kt(t,!1)}function Nt(t){return kt(t,!0)}function kt(t,e){return xt(t)?t:new Dt(t,e)}class Dt{constructor(t,e){this.dep=new x,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=e?t:At(t),this._value=e?t:It(t),this["__v_isShallow"]=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,n=this["__v_isShallow"]||Tt(t)||Et(t);t=n?t:At(t),(0,r.$H)(t,e)&&(this._rawValue=t,this._value=n?t:It(t),this.dep.trigger())}}function Pt(t){return xt(t)?t.value:t}const Lt={get:(t,e,n)=>"__v_raw"===e?t:Pt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return xt(i)&&!xt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Mt(t){return _t(t)?t:new Proxy(t,Lt)}class Ut{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new x(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=I-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!e,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||s===this))return d(this,!0),!0}get value(){const t=this.dep.track();return w(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ft(t,e,n=!1){let i,s;(0,r.Tn)(t)?i=t:(i=t.get,s=t.set);const o=new Ut(i,s,n);return o}const Vt={},jt=new WeakMap;let Bt;function $t(t,e=!1,n=Bt){if(n){let e=jt.get(n);e||jt.set(n,e=[]),e.push(t)}else 0}function qt(t,e,n=r.MZ){const{immediate:i,deep:s,once:o,scheduler:c,augmentJob:l,call:h}=n,f=t=>s?t:Tt(t)||!1===s||0===s?zt(t,1):zt(t);let d,p,g,m,y=!1,v=!1;if(xt(t)?(p=()=>t.value,y=Tt(t)):_t(t)?(p=()=>f(t),y=!0):(0,r.cy)(t)?(v=!0,y=t.some(t=>_t(t)||Tt(t)),p=()=>t.map(t=>xt(t)?t.value:_t(t)?f(t):(0,r.Tn)(t)?h?h(t,2):t():void 0)):p=(0,r.Tn)(t)?e?h?()=>h(t,2):t:()=>{if(g){S();try{g()}finally{A()}}const e=Bt;Bt=d;try{return h?h(t,3,[m]):t(m)}finally{Bt=e}}:r.tE,e&&s){const t=p,e=!0===s?1/0:s;p=()=>zt(t(),e)}const w=a(),b=()=>{d.stop(),w&&w.active&&(0,r.TF)(w.effects,d)};if(o&&e){const t=e;e=(...e)=>{t(...e),b()}}let _=v?new Array(t.length).fill(Vt):Vt;const E=t=>{if(1&d.flags&&(d.dirty||t))if(e){const t=d.run();if(s||y||(v?t.some((t,e)=>(0,r.$H)(t,_[e])):(0,r.$H)(t,_))){g&&g();const n=Bt;Bt=d;try{const n=[t,_===Vt?void 0:v&&_[0]===Vt?[]:_,m];_=t,h?h(e,3,n):e(...n)}finally{Bt=n}}}else d.run()};return l&&l(E),d=new u(p),d.scheduler=c?()=>c(E,!1):E,m=t=>$t(t,!1,d),g=d.onStop=()=>{const t=jt.get(d);if(t){if(h)h(t,4);else for(const e of t)e();jt.delete(d)}},e?i?E(!0):_=d.run():c?c(E.bind(null,!0),!0):d.run(),b.pause=d.pause.bind(d),b.resume=d.resume.bind(d),b.stop=b,b}function zt(t,e=1/0,n){if(e<=0||!(0,r.Gv)(t)||t["__v_skip"])return t;if(n=n||new Map,(n.get(t)||0)>=e)return t;if(n.set(t,e),e--,xt(t))zt(t.value,e,n);else if((0,r.cy)(t))for(let r=0;r<t.length;r++)zt(t[r],e,n);else if((0,r.vM)(t)||(0,r.CE)(t))t.forEach(t=>{zt(t,e,n)});else if((0,r.Qd)(t)){for(const r in t)zt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&zt(t[r],e,n)}return t}},6768:function(t,e,n){n.d(e,{$u:function(){return Tt},CE:function(){return cn},Df:function(){return nt},EW:function(){return Qn},FK:function(){return Xe},Fv:function(){return bn},Gt:function(){return k},Gy:function(){return z},K9:function(){return Fe},Lk:function(){return pn},MZ:function(){return et},OW:function(){return J},Q3:function(){return _n},QP:function(){return H},WQ:function(){return D},Wv:function(){return un},bF:function(){return gn},bo:function(){return O},dY:function(){return m},eW:function(){return wn},g2:function(){return Nt},h:function(){return Xn},k6:function(){return x},nI:function(){return Nn},pI:function(){return Lt},pM:function(){return rt},pR:function(){return X},qL:function(){return o},uX:function(){return nn},wB:function(){return M}});n(4423),n(4114),n(8111),n(1148),n(2489),n(7588),n(1701),n(8237),n(3579),n(5367),n(2731),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8454),n(9452);var r=n(144),i=n(4232);function s(t,e,n,r){try{return r?t(...r):t()}catch(i){a(i,e,n)}}function o(t,e,n,r){if((0,i.Tn)(t)){const o=s(t,e,n,r);return o&&(0,i.yL)(o)&&o.catch(t=>{a(t,e,n)}),o}if((0,i.cy)(t)){const i=[];for(let s=0;s<t.length;s++)i.push(o(t[s],e,n,r));return i}}function a(t,e,n,o=!0){const a=e?e.vnode:null,{errorHandler:u,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||i.MZ;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const e=i.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,o,a))return;i=i.parent}if(u)return(0,r.C4)(),s(u,null,10,[t,o,a]),void(0,r.bl)()}c(t,n,a,o,l)}function c(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const u=[];let l=-1;const h=[];let f=null,d=0;const p=Promise.resolve();let g=null;function m(t){const e=g||p;return t?e.then(this?t.bind(this):t):e}function y(t){let e=l+1,n=u.length;while(e<n){const r=e+n>>>1,i=u[r],s=T(i);s<t||s===t&&2&i.flags?e=r+1:n=r}return e}function v(t){if(!(1&t.flags)){const e=T(t),n=u[u.length-1];!n||!(2&t.flags)&&e>=T(n)?u.push(t):u.splice(y(e),0,t),t.flags|=1,w()}}function w(){g||(g=p.then(S))}function b(t){(0,i.cy)(t)?h.push(...t):f&&-1===t.id?f.splice(d+1,0,t):1&t.flags||(h.push(t),t.flags|=1),w()}function _(t,e,n=l+1){for(0;n<u.length;n++){const e=u[n];if(e&&2&e.flags){if(t&&e.id!==t.uid)continue;0,u.splice(n,1),n--,4&e.flags&&(e.flags&=-2),e(),4&e.flags||(e.flags&=-2)}}}function E(t){if(h.length){const t=[...new Set(h)].sort((t,e)=>T(t)-T(e));if(h.length=0,f)return void f.push(...t);for(f=t,d=0;d<f.length;d++){const t=f[d];0,4&t.flags&&(t.flags&=-2),8&t.flags||t(),t.flags&=-2}f=null,d=0}}const T=t=>null==t.id?2&t.flags?-1:1/0:t.id;function S(t){i.tE;try{for(l=0;l<u.length;l++){const t=u[l];!t||8&t.flags||(4&t.flags&&(t.flags&=-2),s(t,t.i,t.i?15:14),4&t.flags||(t.flags&=-2))}}finally{for(;l<u.length;l++){const t=u[l];t&&(t.flags&=-2)}l=-1,u.length=0,E(t),g=null,(u.length||h.length)&&S(t)}}let A=!1;let C=null,I=null;function R(t){const e=C;return C=t,I=t&&t.type.__scopeId||null,e}function x(t,e=C,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&on(-1);const i=R(e);let s;try{s=t(...n)}finally{R(i),r._d&&on(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function O(t,e){if(null===C)return t;const n=Hn(C),s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,a,c,u=i.MZ]=e[o];t&&((0,i.Tn)(t)&&(t={mounted:t,updated:t}),t.deep&&(0,r.hV)(a),s.push({dir:t,instance:n,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function N(t,e,n,i){const s=t.dirs,a=e&&e.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.C4)(),o(l,n,8,[t.el,u,t,e]),(0,r.bl)())}}function k(t,e){if(On){let n=On.provides;const r=On.parent&&On.parent.provides;r===n&&(n=On.provides=Object.create(r)),n[t]=e}}function D(t,e,n=!1){const r=Nn();if(r||se){let s=se?se._context.provides:r?null==r.parent||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,i.Tn)(e)?e.call(r&&r.proxy):e}else 0}const P=Symbol.for("v-scx"),L=()=>{{const t=D(P);return t}};function M(t,e,n){return U(t,e,n)}function U(t,e,n=i.MZ){const{immediate:s,deep:a,flush:c,once:u}=n;const l=(0,i.X$)({},n);const h=e&&s||!e&&"post"!==c;let f;if(Vn)if("sync"===c){const t=L();f=t.__watcherHandles||(t.__watcherHandles=[])}else if(!h){const t=()=>{};return t.stop=i.tE,t.resume=i.tE,t.pause=i.tE,t}const d=On;l.call=(t,e,n)=>o(t,d,e,n);let p=!1;"post"===c?l.scheduler=t=>{Ue(t,d&&d.suspense)}:"sync"!==c&&(p=!0,l.scheduler=(t,e)=>{e?t():v(t)}),l.augmentJob=t=>{e&&(t.flags|=4),p&&(t.flags|=2,d&&(t.id=d.uid,t.i=d))};const g=(0,r.wB)(t,e,l);return Vn&&(f?f.push(g):h&&g()),g}function F(t,e,n){const r=this.proxy,s=(0,i.Kg)(t)?t.includes(".")?V(r,t):()=>r[t]:t.bind(r,r);let o;(0,i.Tn)(e)?o=e:(o=e.handler,n=e);const a=Pn(this),c=U(s,o.bind(r),n);return a(),c}function V(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}const j=Symbol("_vte"),B=t=>t.__isTeleport;const $=Symbol("_leaveCb"),q=Symbol("_enterCb");function z(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return _t(()=>{t.isMounted=!0}),St(()=>{t.isUnmounting=!0}),t}const G=[Function,Array],H={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:G,onEnter:G,onAfterEnter:G,onEnterCancelled:G,onBeforeLeave:G,onLeave:G,onAfterLeave:G,onLeaveCancelled:G,onBeforeAppear:G,onAppear:G,onAfterAppear:G,onAppearCancelled:G},K=t=>{const e=t.subTree;return e.component?K(e.component):e},W={name:"BaseTransition",props:H,setup(t,{slots:e}){const n=Nn(),i=z();return()=>{const s=e.default&&nt(e.default(),!0);if(!s||!s.length)return;const o=Q(s),a=(0,r.ux)(t),{mode:c}=a;if(i.isLeaving)return Z(o);const u=tt(o);if(!u)return Z(o);let l=J(u,a,i,n,t=>l=t);u.type!==Je&&et(u,l);let h=n.subTree&&tt(n.subTree);if(h&&h.type!==Je&&!hn(h,u)&&K(n).type!==Je){let t=J(h,a,i,n);if(et(h,t),"out-in"===c&&u.type!==Je)return i.isLeaving=!0,t.afterLeave=()=>{i.isLeaving=!1,8&n.job.flags||n.update(),delete t.afterLeave,h=void 0},Z(o);"in-out"===c&&u.type!==Je?t.delayLeave=(t,e,n)=>{const r=Y(i,h);r[String(h.key)]=h,t[$]=()=>{e(),t[$]=void 0,delete l.delayedLeave,h=void 0},l.delayedLeave=()=>{n(),delete l.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return o}}};function Q(t){let e=t[0];if(t.length>1){let n=!1;for(const r of t)if(r.type!==Je){0,e=r,n=!0;break}}return e}const X=W;function Y(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function J(t,e,n,r,s){const{appear:a,mode:c,persisted:u=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:v,onAppear:w,onAfterAppear:b,onAppearCancelled:_}=e,E=String(t.key),T=Y(n,t),S=(t,e)=>{t&&o(t,r,9,e)},C=(t,e)=>{const n=e[1];S(t,e),(0,i.cy)(t)?t.every(t=>t.length<=1)&&n():t.length<=1&&n()},I={mode:c,persisted:u,beforeEnter(e){let r=l;if(!n.isMounted){if(!a)return;r=v||l}e[$]&&e[$](!0);const i=T[E];i&&hn(t,i)&&i.el[$]&&i.el[$](),S(r,[e])},enter(e){if(!A&&T[E]===t)return;let r=h,i=f,s=d;if(!n.isMounted){if(!a)return;r=w||h,i=b||f,s=_||d}let o=!1;e[q]=t=>{o||(o=!0,S(t?s:i,[e]),I.delayedLeave&&I.delayedLeave(),e[q]=void 0)};const c=e[q].bind(null,!1);r?C(r,[e,c]):c()},leave(e,r){const i=String(t.key);if(e[q]&&e[q](!0),n.isUnmounting)return r();S(p,[e]);let s=!1;e[$]=n=>{s||(s=!0,r(),S(n?y:m,[e]),e[$]=void 0,T[i]===t&&delete T[i])};const o=e[$].bind(null,!1);T[i]=t,g?C(g,[e,o]):o()},clone(t){const i=J(t,e,n,r,s);return s&&s(i),i}};return I}function Z(t){if(lt(t))return t=vn(t),t.children=null,t}function tt(t){if(!lt(t))return B(t.type)&&t.children?Q(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(16&e)return n[0];if(32&e&&(0,i.Tn)(n.default))return n.default()}}function et(t,e){6&t.shapeFlag&&t.component?(t.transition=e,et(t.component.subTree,e)):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function nt(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Xe?(128&o.patchFlag&&i++,r=r.concat(nt(o.children,e,a))):(e||o.type!==Je)&&r.push(null!=a?vn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function rt(t,e){return(0,i.Tn)(t)?(()=>(0,i.X$)({name:t.name},e,{setup:t}))():t}function it(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function st(t,e){let n;return!(!(n=Object.getOwnPropertyDescriptor(t,e))||n.configurable)}const ot=new WeakMap;function at(t,e,n,o,a=!1){if((0,i.cy)(t))return void t.forEach((t,r)=>at(t,e&&((0,i.cy)(e)?e[r]:e),n,o,a));if(ut(o)&&!a)return void(512&o.shapeFlag&&o.type.__asyncResolved&&o.component.subTree.component&&at(t,e,n,o.component.subTree));const c=4&o.shapeFlag?Hn(o.component):o.el,u=a?null:c,{i:l,r:h}=t;const f=e&&e.r,d=l.refs===i.MZ?l.refs={}:l.refs,p=l.setupState,g=(0,r.ux)(p),m=p===i.MZ?i.NO:t=>!st(d,t)&&(0,i.$3)(g,t),y=(t,e)=>!e||!st(d,e);if(null!=f&&f!==h)if(ct(e),(0,i.Kg)(f))d[f]=null,m(f)&&(p[f]=null);else if((0,r.i9)(f)){const t=e;y(f,t.k)&&(f.value=null),t.k&&(d[t.k]=null)}if((0,i.Tn)(h))s(h,l,12,[u,d]);else{const e=(0,i.Kg)(h),s=(0,r.i9)(h);if(e||s){const r=()=>{if(t.f){const n=e?m(h)?p[h]:d[h]:y(h)||!t.k?h.value:d[t.k];if(a)(0,i.cy)(n)&&(0,i.TF)(n,c);else if((0,i.cy)(n))n.includes(c)||n.push(c);else if(e)d[h]=[c],m(h)&&(p[h]=d[h]);else{const e=[c];y(h,t.k)&&(h.value=e),t.k&&(d[t.k]=e)}}else e?(d[h]=u,m(h)&&(p[h]=u)):s&&(y(h,t.k)&&(h.value=u),t.k&&(d[t.k]=u))};if(u){const e=()=>{r(),ot.delete(t)};e.id=-1,ot.set(t,e),Ue(e,n)}else ct(t),r()}else 0}}function ct(t){const e=ot.get(t);e&&(e.flags|=8,ot.delete(t))}(0,i.We)().requestIdleCallback,(0,i.We)().cancelIdleCallback;const ut=t=>!!t.type.__asyncLoader;const lt=t=>t.type.__isKeepAlive;RegExp,RegExp;function ht(t,e){return(0,i.cy)(t)?t.some(t=>ht(t,e)):(0,i.Kg)(t)?t.split(",").includes(e):!!(0,i.gd)(t)&&(t.lastIndex=0,t.test(e))}function ft(t,e){pt(t,"a",e)}function dt(t,e){pt(t,"da",e)}function pt(t,e,n=On){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(vt(e,r,n),n){let t=n.parent;while(t&&t.parent)lt(t.parent.vnode)&&gt(r,e,n,t),t=t.parent}}function gt(t,e,n,r){const s=vt(e,t,r,!0);At(()=>{(0,i.TF)(r[e],s)},n)}function mt(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function yt(t){return 128&t.shapeFlag?t.ssContent:t}function vt(t,e,n=On,i=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{(0,r.C4)();const s=Pn(n),a=o(e,n,t,i);return s(),(0,r.bl)(),a});return i?s.unshift(a):s.push(a),a}}const wt=t=>(e,n=On)=>{Vn&&"sp"!==t||vt(t,(...t)=>e(...t),n)},bt=wt("bm"),_t=wt("m"),Et=wt("bu"),Tt=wt("u"),St=wt("bum"),At=wt("um"),Ct=wt("sp"),It=wt("rtg"),Rt=wt("rtc");function xt(t,e=On){vt("ec",t,e)}const Ot="components";function Nt(t,e){return Dt(Ot,t,!0,e)||t}const kt=Symbol.for("v-ndc");function Dt(t,e,n=!0,r=!1){const s=C||On;if(s){const n=s.type;if(t===Ot){const t=Kn(n,!1);if(t&&(t===e||t===(0,i.PT)(e)||t===(0,i.ZH)((0,i.PT)(e))))return n}const o=Pt(s[t]||n[t],e)||Pt(s.appContext[t],e);return!o&&r?n:o}}function Pt(t,e){return t&&(t[e]||t[(0,i.PT)(e)]||t[(0,i.ZH)((0,i.PT)(e))])}function Lt(t,e,n,s){let o;const a=n&&n[s],c=(0,i.cy)(t);if(c||(0,i.Kg)(t)){const n=c&&(0,r.g8)(t);let i=!1,s=!1;n&&(i=!(0,r.fE)(t),s=(0,r.Tm)(t),t=(0,r.qA)(t)),o=new Array(t.length);for(let c=0,u=t.length;c<u;c++)o[c]=e(i?s?(0,r.a1)((0,r.lJ)(t[c])):(0,r.lJ)(t[c]):t[c],c,void 0,a&&a[c])}else if("number"===typeof t){o=new Array(t);for(let n=0;n<t;n++)o[n]=e(n+1,n,void 0,a&&a[n])}else if((0,i.Gv)(t))if(t[Symbol.iterator])o=Array.from(t,(t,n)=>e(t,n,void 0,a&&a[n]));else{const n=Object.keys(t);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=e(t[i],i,r,a&&a[r])}}else o=[];return n&&(n[s]=o),o}const Mt=t=>t?Mn(t)?Hn(t):Mt(t.parent):null,Ut=(0,i.X$)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Mt(t.parent),$root:t=>Mt(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ht(t),$forceUpdate:t=>t.f||(t.f=()=>{v(t.update)}),$nextTick:t=>t.n||(t.n=m.bind(t.proxy)),$watch:t=>F.bind(t)}),Ft=(t,e)=>t!==i.MZ&&!t.__isScriptSetup&&(0,i.$3)(t,e),Vt={get({_:t},e){if("__v_skip"===e)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=t;if("$"!==e[0]){const t=c[e];if(void 0!==t)switch(t){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(Ft(s,e))return c[e]=1,s[e];if(o!==i.MZ&&(0,i.$3)(o,e))return c[e]=2,o[e];if((0,i.$3)(a,e))return c[e]=3,a[e];if(n!==i.MZ&&(0,i.$3)(n,e))return c[e]=4,n[e];Bt&&(c[e]=0)}}const h=Ut[e];let f,d;return h?("$attrs"===e&&(0,r.u4)(t.attrs,"get",""),h(t)):(f=u.__cssModules)&&(f=f[e])?f:n!==i.MZ&&(0,i.$3)(n,e)?(c[e]=4,n[e]):(d=l.config.globalProperties,(0,i.$3)(d,e)?d[e]:void 0)},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return Ft(s,e)?(s[e]=n,!0):r!==i.MZ&&(0,i.$3)(r,e)?(r[e]=n,!0):!(0,i.$3)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:o,type:a}},c){let u;return!!(n[c]||t!==i.MZ&&"$"!==c[0]&&(0,i.$3)(t,c)||Ft(e,c)||(0,i.$3)(o,c)||(0,i.$3)(r,c)||(0,i.$3)(Ut,c)||(0,i.$3)(s.config.globalProperties,c)||(u=a.__cssModules)&&u[c])},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.$3)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function jt(t){return(0,i.cy)(t)?t.reduce((t,e)=>(t[e]=null,t),{}):t}let Bt=!0;function $t(t){const e=Ht(t),n=t.proxy,s=t.ctx;Bt=!1,e.beforeCreate&&zt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:_,unmounted:E,render:T,renderTracked:S,renderTriggered:A,errorCaptured:C,serverPrefetch:I,expose:R,inheritAttrs:x,components:O,directives:N,filters:D}=e,P=null;if(h&&qt(h,s,P),c)for(const r in c){const t=c[r];(0,i.Tn)(t)&&(s[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,i.Gv)(e)&&(t.data=(0,r.Kh)(e))}if(Bt=!0,a)for(const r in a){const t=a[r],e=(0,i.Tn)(t)?t.bind(n,n):(0,i.Tn)(t.get)?t.get.bind(n,n):i.tE;0;const o=!(0,i.Tn)(t)&&(0,i.Tn)(t.set)?t.set.bind(n):i.tE,c=Qn({get:e,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)Gt(u[r],s,n,r);if(l){const t=(0,i.Tn)(l)?l.call(n):l;Reflect.ownKeys(t).forEach(e=>{k(e,t[e])})}function L(t,e){(0,i.cy)(e)?e.forEach(e=>t(e.bind(n))):e&&t(e.bind(n))}if(f&&zt(f,t,"c"),L(bt,d),L(_t,p),L(Et,g),L(Tt,m),L(ft,y),L(dt,v),L(xt,C),L(Rt,S),L(It,A),L(St,b),L(At,E),L(Ct,I),(0,i.cy)(R))if(R.length){const e=t.exposed||(t.exposed={});R.forEach(t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e,enumerable:!0})})}else t.exposed||(t.exposed={});T&&t.render===i.tE&&(t.render=T),null!=x&&(t.inheritAttrs=x),O&&(t.components=O),N&&(t.directives=N),I&&it(t)}function qt(t,e,n=i.tE){(0,i.cy)(t)&&(t=Yt(t));for(const s in t){const n=t[s];let o;o=(0,i.Gv)(n)?"default"in n?D(n.from||s,n.default,!0):D(n.from||s):D(n),(0,r.i9)(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[s]=o}}function zt(t,e,n){o((0,i.cy)(t)?t.map(t=>t.bind(e.proxy)):t.bind(e.proxy),e,n)}function Gt(t,e,n,r){let s=r.includes(".")?V(n,r):()=>n[r];if((0,i.Kg)(t)){const n=e[t];(0,i.Tn)(n)&&M(s,n)}else if((0,i.Tn)(t))M(s,t.bind(n));else if((0,i.Gv)(t))if((0,i.cy)(t))t.forEach(t=>Gt(t,e,n,r));else{const r=(0,i.Tn)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.Tn)(r)&&M(s,r,t)}else 0}function Ht(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach(t=>Kt(u,t,a,!0)),Kt(u,e,a)):u=e,(0,i.Gv)(e)&&o.set(e,u),u}function Kt(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Kt(t,s,n,!0),i&&i.forEach(e=>Kt(t,e,n,!0));for(const o in e)if(r&&"expose"===o);else{const r=Wt[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Wt={data:Qt,props:te,emits:te,methods:Zt,computed:Zt,beforeCreate:Jt,created:Jt,beforeMount:Jt,mounted:Jt,beforeUpdate:Jt,updated:Jt,beforeDestroy:Jt,beforeUnmount:Jt,destroyed:Jt,unmounted:Jt,activated:Jt,deactivated:Jt,errorCaptured:Jt,serverPrefetch:Jt,components:Zt,directives:Zt,watch:ee,provide:Qt,inject:Xt};function Qt(t,e){return e?t?function(){return(0,i.X$)((0,i.Tn)(t)?t.call(this,this):t,(0,i.Tn)(e)?e.call(this,this):e)}:e:t}function Xt(t,e){return Zt(Yt(t),Yt(e))}function Yt(t){if((0,i.cy)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Jt(t,e){return t?[...new Set([].concat(t,e))]:e}function Zt(t,e){return t?(0,i.X$)(Object.create(null),t,e):e}function te(t,e){return t?(0,i.cy)(t)&&(0,i.cy)(e)?[...new Set([...t,...e])]:(0,i.X$)(Object.create(null),jt(t),jt(null!=e?e:{})):e}function ee(t,e){if(!t)return e;if(!e)return t;const n=(0,i.X$)(Object.create(null),t);for(const r in e)n[r]=Jt(t[r],e[r]);return n}function ne(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let re=0;function ie(t,e){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const s=ne(),a=new WeakSet,c=[];let u=!1;const l=s.app={_uid:re++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Yn,get config(){return s.config},set config(t){0},use(t,...e){return a.has(t)||(t&&(0,i.Tn)(t.install)?(a.add(t),t.install(l,...e)):(0,i.Tn)(t)&&(a.add(t),t(l,...e))),l},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),l},component(t,e){return e?(s.components[t]=e,l):s.components[t]},directive(t,e){return e?(s.directives[t]=e,l):s.directives[t]},mount(i,o,a){if(!u){0;const c=l._ceVNode||gn(n,r);return c.appContext=s,!0===a?a="svg":!1===a&&(a=void 0),o&&e?e(c,i):t(c,i,a),u=!0,l._container=i,i.__vue_app__=l,Hn(c.component)}},onUnmount(t){c.push(t)},unmount(){u&&(o(c,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(t,e){return s.provides[t]=e,l},runWithContext(t){const e=se;se=l;try{return t()}finally{se=e}}};return l}}let se=null;const oe=(t,e)=>"modelValue"===e||"model-value"===e?t.modelModifiers:t[`${e}Modifiers`]||t[`${(0,i.PT)(e)}Modifiers`]||t[`${(0,i.Tg)(e)}Modifiers`];function ae(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.MZ;let s=n;const a=e.startsWith("update:"),c=a&&oe(r,e.slice(7));let u;c&&(c.trim&&(s=n.map(t=>(0,i.Kg)(t)?t.trim():t)),c.number&&(s=n.map(i.bB)));let l=r[u=(0,i.rU)(e)]||r[u=(0,i.rU)((0,i.PT)(e))];!l&&a&&(l=r[u=(0,i.rU)((0,i.Tg)(e))]),l&&o(l,t,6,s);const h=r[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,o(h,t,6,s)}}const ce=new WeakMap;function ue(t,e,n=!1){const r=n?ce:e.emitsCache,s=r.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!(0,i.Tn)(t)){const r=t=>{const n=ue(t,e,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,i.cy)(o)?o.forEach(t=>a[t]=null):(0,i.X$)(a,o),(0,i.Gv)(t)&&r.set(t,a),a):((0,i.Gv)(t)&&r.set(t,null),null)}function le(t,e){return!(!t||!(0,i.Mp)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.$3)(t,e[0].toLowerCase()+e.slice(1))||(0,i.$3)(t,(0,i.Tg)(e))||(0,i.$3)(t,e))}function he(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:c,attrs:u,emit:l,render:h,renderCache:f,props:d,data:p,setupState:g,ctx:m,inheritAttrs:y}=t,v=R(t);let w,b;try{if(4&n.shapeFlag){const t=s||r,e=t;w=En(h.call(e,t,f,d,g,p,m)),b=u}else{const t=e;0,w=En(t.length>1?t(d,{attrs:u,slots:c,emit:l}):t(d,null)),b=e.props?u:fe(u)}}catch(E){tn.length=0,a(E,t,1),w=gn(Je)}let _=w;if(b&&!1!==y){const t=Object.keys(b),{shapeFlag:e}=_;t.length&&7&e&&(o&&t.some(i.CP)&&(b=de(b,o)),_=vn(_,b,!1,!0))}return n.dirs&&(_=vn(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&et(_,n.transition),w=_,R(v),w}const fe=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.Mp)(n))&&((e||(e={}))[n]=t[n]);return e},de=(t,e)=>{const n={};for(const r in t)(0,i.CP)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function pe(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||ge(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?ge(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(me(o,r,n)&&!le(u,n))return!0}}return!1}function ge(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(me(e,t,s)&&!le(n,s))return!0}return!1}function me(t,e,n){const r=t[n],s=e[n];return"style"===n&&(0,i.Gv)(r)&&(0,i.Gv)(s)?!(0,i.BX)(r,s):r!==s}function ye({vnode:t,parent:e,suspense:n},r){while(e){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===t&&(n.suspense.vnode.el=n.el=r,t=n),n!==t)break;(t=e.vnode).el=r,e=e.parent}n&&n.activeBranch===t&&(n.vnode.el=r)}const ve={},we=()=>Object.create(ve),be=t=>Object.getPrototypeOf(t)===ve;function _e(t,e,n,i=!1){const s={},o=we();t.propsDefaults=Object.create(null),Te(t,e,s,o);for(const r in t.propsOptions[0])r in s||(s[r]=void 0);n?t.props=i?s:(0,r.Gc)(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function Ee(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.ux)(o),[l]=t.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;Te(t,e,o,a)&&(h=!0);for(const s in u)e&&((0,i.$3)(e,s)||(r=(0,i.Tg)(s))!==s&&(0,i.$3)(e,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=Se(l,u,s,void 0,t,!0)):delete o[s]);if(a!==u)for(const t in a)e&&(0,i.$3)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(le(t.emitsOptions,s))continue;const c=e[s];if(l)if((0,i.$3)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const e=(0,i.PT)(s);o[e]=Se(l,u,e,c,t,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.hZ)(t.attrs,"set","")}function Te(t,e,n,s){const[o,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,i.SU)(r))continue;const l=e[r];let h;o&&(0,i.$3)(o,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:le(t.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const e=(0,r.ux)(n),s=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=Se(o,e,c,s[c],t,!(0,i.$3)(s,c))}}return u}function Se(t,e,n,r,s,o){const a=t[n];if(null!=a){const t=(0,i.$3)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(t)){const{propsDefaults:i}=s;if(n in i)r=i[n];else{const o=Pn(s);r=i[n]=t.call(null,e),o()}}else r=t;s.ce&&s.ce._setProp(n,r)}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}const Ae=new WeakMap;function Ce(t,e,n=!1){const r=n?Ae:e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!(0,i.Tn)(t)){const r=t=>{u=!0;const[n,r]=Ce(t,e,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!u)return(0,i.Gv)(t)&&r.set(t,i.Oj),i.Oj;if((0,i.cy)(o))for(let h=0;h<o.length;h++){0;const t=(0,i.PT)(o[h]);Ie(t)&&(a[t]=i.MZ)}else if(o){0;for(const t in o){const e=(0,i.PT)(t);if(Ie(e)){const n=o[t],r=a[e]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n),s=r.type;let u=!1,l=!0;if((0,i.cy)(s))for(let t=0;t<s.length;++t){const e=s[t],n=(0,i.Tn)(e)&&e.name;if("Boolean"===n){u=!0;break}"String"===n&&(l=!1)}else u=(0,i.Tn)(s)&&"Boolean"===s.name;r[0]=u,r[1]=l,(u||(0,i.$3)(r,"default"))&&c.push(e)}}}const l=[a,c];return(0,i.Gv)(t)&&r.set(t,l),l}function Ie(t){return"$"!==t[0]&&!(0,i.SU)(t)}const Re=t=>"_"===t||"_ctx"===t||"$stable"===t,xe=t=>(0,i.cy)(t)?t.map(En):[En(t)],Oe=(t,e,n)=>{if(e._n)return e;const r=x((...t)=>xe(e(...t)),n);return r._c=!1,r},Ne=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Re(s))continue;const n=t[s];if((0,i.Tn)(n))e[s]=Oe(s,n,r);else if(null!=n){0;const t=xe(n);e[s]=()=>t}}},ke=(t,e)=>{const n=xe(e);t.slots.default=()=>n},De=(t,e,n)=>{for(const r in e)!n&&Re(r)||(t[r]=e[r])},Pe=(t,e,n)=>{const r=t.slots=we();if(32&t.vnode.shapeFlag){const t=e._;t?(De(r,e,n),n&&(0,i.yQ)(r,"_",t,!0)):Ne(e,r)}else e&&ke(t,e)},Le=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=i.MZ;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:De(s,e,n):(o=!e.$stable,Ne(e,s)),a=e}else e&&(ke(t,e),a={default:1});if(o)for(const i in s)Re(i)||null!=a[i]||delete s[i]};function Me(){}const Ue=Qe;function Fe(t){return Ve(t)}function Ve(t,e){Me();const n=(0,i.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=i.tE,insertStaticContent:m}=t,y=(t,e,n,r=null,i=null,s=null,o=void 0,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!hn(t,e)&&(r=Y(t),H(t,i,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Ye:w(t,e,n,r);break;case Je:b(t,e,n,r);break;case Ze:null==t&&T(e,n,r,o);break;case Xe:P(t,e,n,r,i,s,o,a,c);break;default:1&h?C(t,e,n,r,i,s,o,a,c):6&h?L(t,e,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,s,o,a,c,tt)}null!=l&&i?at(l,t&&t.ref,s,e||t,!e):null==l&&t&&null!=t.ref&&at(t.ref,null,s,t,!0)},w=(t,e,n,r)=>{if(null==t)s(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},b=(t,e,n,r)=>{null==t?s(e.el=l(e.children||""),n,r):e.el=t.el},T=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r,t.el,t.anchor)},S=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),s(t,n,r),t=i;s(e,n,r)},A=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},C=(t,e,n,r,i,s,o,a,c)=>{if("svg"===e.type?o="svg":"math"===e.type&&(o="mathml"),null==t)I(e,n,r,i,s,o,a,c);else{const n=t.el&&t.el._isVueCE?t.el:null;try{n&&n._beginPatch(),O(t,e,i,s,o,a,c)}finally{n&&n._endPatch()}}},I=(t,e,n,r,o,u,l,h)=>{let d,p;const{props:g,shapeFlag:m,transition:y,dirs:v}=t;if(d=t.el=c(t.type,u,g&&g.is,g),8&m?f(d,t.children):16&m&&x(t.children,d,null,r,o,je(t,u),l,h),v&&N(t,null,r,"created"),R(d,t,t.scopeId,l,r),g){for(const t in g)"value"===t||(0,i.SU)(t)||a(d,t,null,g[t],u,r);"value"in g&&a(d,"value",null,g.value,u),(p=g.onVnodeBeforeMount)&&Cn(p,r,t)}v&&N(t,null,r,"beforeMount");const w=$e(o,y);if(w&&y.beforeEnter(d),s(d,e,n),(p=g&&g.onVnodeMounted)||w||v){Ue(()=>{try{p&&Cn(p,r,t),w&&y.enter(d),v&&N(t,null,r,"mounted")}finally{0}},o)}},R=(t,e,n,r,i)=>{if(n&&g(t,n),r)for(let s=0;s<r.length;s++)g(t,r[s]);if(i){let n=i.subTree;if(e===n||We(n.type)&&(n.ssContent===e||n.ssFallback===e)){const e=i.vnode;R(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},x=(t,e,n,r,i,s,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?Tn(t[u]):En(t[u]);y(null,c,e,n,r,i,s,o,a)}},O=(t,e,n,r,s,o,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||i.MZ,g=e.props||i.MZ;let m;if(n&&Be(n,!1),(m=g.onVnodeBeforeUpdate)&&Cn(m,n,e,t),d&&N(e,t,n,"beforeUpdate"),n&&Be(n,!0),(p.innerHTML&&null==g.innerHTML||p.textContent&&null==g.textContent)&&f(u,""),h?k(t.dynamicChildren,h,u,n,r,je(e,s),o):c||B(t,e,u,null,n,r,je(e,s),o,!1),l>0){if(16&l)D(u,p,g,n,s);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,s),4&l&&a(u,"style",p.style,g.style,s),8&l){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const r=t[e],i=p[r],o=g[r];o===i&&"value"!==r||a(u,r,i,o,s,n)}}1&l&&t.children!==e.children&&f(u,e.children)}else c||null!=h||D(u,p,g,n,s);((m=g.onVnodeUpdated)||d)&&Ue(()=>{m&&Cn(m,n,e,t),d&&N(e,t,n,"updated")},r)},k=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Xe||!hn(c,u)||198&c.shapeFlag)?d(c.el):n;y(c,u,l,null,r,i,s,o,!0)}},D=(t,e,n,r,s)=>{if(e!==n){if(e!==i.MZ)for(const o in e)(0,i.SU)(o)||o in n||a(t,o,e[o],null,s,r);for(const o in n){if((0,i.SU)(o))continue;const c=n[o],u=e[o];c!==u&&"value"!==o&&a(t,o,u,c,s,r)}"value"in n&&a(t,"value",e.value,n.value,s)}},P=(t,e,n,r,i,o,a,c,l)=>{const h=e.el=t?t.el:u(""),f=e.anchor=t?t.anchor:u("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(s(h,n,r),s(f,n,r),x(e.children||[],n,f,i,o,a,c,l)):d>0&&64&d&&p&&t.dynamicChildren&&t.dynamicChildren.length===p.length?(k(t.dynamicChildren,p,n,i,o,a,c),(null!=e.key||i&&e===i.subTree)&&qe(t,e,!0)):B(t,e,n,f,i,o,a,c,l)},L=(t,e,n,r,i,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,c):M(e,n,r,i,s,o,c):U(t,e,c)},M=(t,e,n,r,i,s,o)=>{const a=t.component=xn(t,r,i);if(lt(t)&&(a.ctx.renderer=tt),jn(a,!1,o),a.asyncDep){if(i&&i.registerDep(a,F,o),!t.el){const r=a.subTree=gn(Je);b(null,r,e,n),t.placeholder=r.el}}else F(a,t,e,n,i,s,o)},U=(t,e,n)=>{const r=e.component=t.component;if(pe(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,e,n);r.next=e,r.update()}else e.el=t.el,r.vnode=e},F=(t,e,n,s,o,a,c)=>{const u=()=>{if(t.isMounted){let{next:e,bu:n,u:r,parent:s,vnode:u}=t;{const n=Ge(t);if(n)return e&&(e.el=u.el,V(t,e,c)),void n.asyncDep.then(()=>{Ue(()=>{t.isUnmounted||h()},o)})}let l,f=e;0,Be(t,!1),e?(e.el=u.el,V(t,e,c)):e=u,n&&(0,i.DY)(n),(l=e.props&&e.props.onVnodeBeforeUpdate)&&Cn(l,s,e,u),Be(t,!0);const p=he(t);0;const g=t.subTree;t.subTree=p,y(g,p,d(g.el),Y(g),t,o,a),e.el=p.el,null===f&&ye(t,p.el),r&&Ue(r,o),(l=e.props&&e.props.onVnodeUpdated)&&Ue(()=>Cn(l,s,e,u),o)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:f,root:d,type:p}=t,g=ut(e);if(Be(t,!1),l&&(0,i.DY)(l),!g&&(r=u&&u.onVnodeBeforeMount)&&Cn(r,f,e),Be(t,!0),c&&nt){const e=()=>{t.subTree=he(t),nt(c,t.subTree,t,o,null)};g&&p.__asyncHydrate?p.__asyncHydrate(c,t,e):e()}else{d.ce&&d.ce._hasShadowRoot()&&d.ce._injectChildStyle(p,t.parent?t.parent.type:void 0);const r=t.subTree=he(t);0,y(null,r,n,s,t,o,a),e.el=r.el}if(h&&Ue(h,o),!g&&(r=u&&u.onVnodeMounted)){const t=e;Ue(()=>Cn(r,f,t),o)}(256&e.shapeFlag||f&&ut(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&Ue(t.a,o),t.isMounted=!0,e=n=s=null}};t.scope.on();const l=t.effect=new r.X2(u);t.scope.off();const h=t.update=l.run.bind(l),f=t.job=l.runIfDirty.bind(l);f.i=t,f.id=t.uid,l.scheduler=()=>v(f),Be(t,!0),h()},V=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,Ee(t,e.props,i,n),Le(t,e.children,n),(0,r.C4)(),_(t),(0,r.bl)()},B=(t,e,n,r,i,s,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void z(u,h,n,r,i,s,o,a,c);if(256&d)return void q(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&X(u,i,s),h!==u&&f(n,h)):16&l?16&p?z(u,h,n,r,i,s,o,a,c):X(u,i,s,!0):(8&l&&f(n,""),16&p&&x(h,n,r,i,s,o,a,c))},q=(t,e,n,r,s,o,a,c,u)=>{t=t||i.Oj,e=e||i.Oj;const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?Tn(e[d]):En(e[d]);y(t[d],r,n,null,s,o,a,c,u)}l>h?X(t,s,o,!0,!1,f):x(e,n,r,s,o,a,c,u,f)},z=(t,e,n,r,s,o,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=u?Tn(e[l]):En(e[l]);if(!hn(r,i))break;y(r,i,n,null,s,o,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=u?Tn(e[d]):En(e[d]);if(!hn(r,i))break;y(r,i,n,null,s,o,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,i=t<h?e[t].el:r;while(l<=d)y(null,e[l]=u?Tn(e[l]):En(e[l]),n,i,s,o,a,c,u),l++}}else if(l>d)while(l<=f)H(t[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const t=e[l]=u?Tn(e[l]):En(e[l]);null!=t.key&&m.set(t.key,l)}let v,w=0;const b=d-g+1;let _=!1,E=0;const T=new Array(b);for(l=0;l<b;l++)T[l]=0;for(l=p;l<=f;l++){const r=t[l];if(w>=b){H(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(v=g;v<=d;v++)if(0===T[v-g]&&hn(r,e[v])){i=v;break}void 0===i?H(r,s,o,!0):(T[i-g]=l+1,i>=E?E=i:_=!0,y(r,e[i],n,null,s,o,a,c,u),w++)}const S=_?ze(T):i.Oj;for(v=S.length-1,l=b-1;l>=0;l--){const t=g+l,i=e[t],f=e[t+1],d=t+1<h?f.el||Ke(f):r;0===T[l]?y(null,i,n,d,s,o,a,c,u):_&&(v<0||l!==S[v]?G(i,n,d,2):v--)}}},G=(t,e,n,r,i=null)=>{const{el:a,type:c,transition:u,children:l,shapeFlag:h}=t;if(6&h)return void G(t.component.subTree,e,n,r);if(128&h)return void t.suspense.move(e,n,r);if(64&h)return void c.move(t,e,n,tt);if(c===Xe){s(a,e,n);for(let t=0;t<l.length;t++)G(l[t],e,n,r);return void s(t.anchor,e,n)}if(c===Ze)return void S(t,e,n);const f=2!==r&&1&h&&u;if(f)if(0===r)u.beforeEnter(a),s(a,e,n),Ue(()=>u.enter(a),i);else{const{leave:r,delayLeave:i,afterLeave:c}=u,l=()=>{t.ctx.isUnmounted?o(a):s(a,e,n)},h=()=>{a._isLeaving&&a[$](!0),r(a,()=>{l(),c&&c()})};i?i(a,l,h):h()}else s(a,e,n)},H=(t,e,n,i=!1,s=!1)=>{const{type:o,props:a,ref:c,children:u,dynamicChildren:l,shapeFlag:h,patchFlag:f,dirs:d,cacheIndex:p,memo:g}=t;if(-2===f&&(s=!1),null!=c&&((0,r.C4)(),at(c,null,n,t,!0),(0,r.bl)()),null!=p&&(e.renderCache[p]=void 0),256&h)return void e.ctx.deactivate(t);const m=1&h&&d,y=!ut(t);let v;if(y&&(v=a&&a.onVnodeBeforeUnmount)&&Cn(v,e,t),6&h)Q(t.component,n,i);else{if(128&h)return void t.suspense.unmount(n,i);m&&N(t,null,e,"beforeUnmount"),64&h?t.type.remove(t,e,n,tt,i):l&&!l.hasOnce&&(o!==Xe||f>0&&64&f)?X(l,e,n,!1,!0):(o===Xe&&384&f||!s&&16&h)&&X(u,e,n),i&&K(t)}const w=null!=g&&null==p;(y&&(v=a&&a.onVnodeUnmounted)||m||w)&&Ue(()=>{v&&Cn(v,e,t),m&&N(t,null,e,"unmounted"),w&&(t.el=null)},n)},K=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Xe)return void W(n,r);if(e===Ze)return void A(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},W=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Q=(t,e,n)=>{const{bum:r,scope:s,job:o,subTree:a,um:c,m:u,a:l}=t;He(u),He(l),r&&(0,i.DY)(r),s.stop(),o&&(o.flags|=8,H(a,t,e,n)),c&&Ue(c,e),Ue(()=>{t.isUnmounted=!0},e)},X=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)H(t[o],e,n,r,i)},Y=t=>{if(6&t.shapeFlag)return Y(t.component.subTree);if(128&t.shapeFlag)return t.suspense.next();const e=p(t.anchor||t.el),n=e&&e[j];return n?p(n):e};let J=!1;const Z=(t,e,n)=>{let r;null==t?e._vnode&&(H(e._vnode,null,null,!0),r=e._vnode.component):y(e._vnode||null,t,e,null,null,null,n),e._vnode=t,J||(J=!0,_(r),E(),J=!1)},tt={p:y,um:H,m:G,r:K,mt:M,mc:x,pc:B,pbc:k,n:Y,o:t};let et,nt;return e&&([et,nt]=e(tt)),{render:Z,hydrate:et,createApp:ie(Z,et)}}function je({type:t,props:e},n){return"svg"===n&&"foreignObject"===t||"mathml"===n&&"annotation-xml"===t&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Be({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function $e(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function qe(t,e,n=!1){const r=t.children,s=e.children;if((0,i.cy)(r)&&(0,i.cy)(s))for(let i=0;i<r.length;i++){const t=r[i];let e=s[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[i]=Tn(s[i]),e.el=t.el),n||-2===e.patchFlag||qe(t,e)),e.type===Ye&&(-1===e.patchFlag&&(e=s[i]=Tn(e)),e.el=t.el),e.type!==Je||e.el||(e.el=t.el)}}function ze(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}function Ge(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ge(e)}function He(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Ke(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Ke(e.subTree):null}const We=t=>t.__isSuspense;function Qe(t,e){e&&e.pendingBranch?(0,i.cy)(t)?e.effects.push(...t):e.effects.push(t):b(t)}const Xe=Symbol.for("v-fgt"),Ye=Symbol.for("v-txt"),Je=Symbol.for("v-cmt"),Ze=Symbol.for("v-stc"),tn=[];let en=null;function nn(t=!1){tn.push(en=t?null:[])}function rn(){tn.pop(),en=tn[tn.length-1]||null}let sn=1;function on(t,e=!1){sn+=t,t<0&&en&&e&&(en.hasOnce=!0)}function an(t){return t.dynamicChildren=sn>0?en||i.Oj:null,rn(),sn>0&&en&&en.push(t),t}function cn(t,e,n,r,i,s){return an(pn(t,e,n,r,i,s,!0))}function un(t,e,n,r,i){return an(gn(t,e,n,r,i,!0))}function ln(t){return!!t&&!0===t.__v_isVNode}function hn(t,e){return t.type===e.type&&t.key===e.key}const fn=({key:t})=>null!=t?t:null,dn=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,i.Kg)(t)||(0,r.i9)(t)||(0,i.Tn)(t)?{i:C,r:t,k:e,f:!!n}:t:null);function pn(t,e=null,n=null,r=0,s=null,o=(t===Xe?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fn(e),ref:e&&dn(e),scopeId:I,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:C};return c?(Sn(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=(0,i.Kg)(n)?8:16),sn>0&&!a&&en&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&en.push(u),u}const gn=mn;function mn(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==kt||(t=Je),ln(t)){const r=vn(t,e,!0);return n&&Sn(r,n),sn>0&&!a&&en&&(6&r.shapeFlag?en[en.indexOf(t)]=r:en.push(r)),r.patchFlag=-2,r}if(Wn(t)&&(t=t.__vccOpts),e){e=yn(e);let{class:t,style:n}=e;t&&!(0,i.Kg)(t)&&(e.class=(0,i.C4)(t)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),e.style=(0,i.Tr)(n))}const c=(0,i.Kg)(t)?1:We(t)?128:B(t)?64:(0,i.Gv)(t)?4:(0,i.Tn)(t)?2:0;return pn(t,e,n,s,o,c,a,!0)}function yn(t){return t?(0,r.ju)(t)||be(t)?(0,i.X$)({},t):t:null}function vn(t,e,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:u}=t,l=e?An(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&fn(l),ref:e&&e.ref?n&&o?(0,i.cy)(o)?o.concat(dn(e)):[o,dn(e)]:dn(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xe?-1===a?16:16|a:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:u,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vn(t.ssContent),ssFallback:t.ssFallback&&vn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u&&r&&et(h,u.clone(h)),h}function wn(t=" ",e=0){return gn(Ye,null,t,e)}function bn(t,e){const n=gn(Ze,null,t);return n.staticCount=e,n}function _n(t="",e=!1){return e?(nn(),un(Je,null,t)):gn(Je,null,t)}function En(t){return null==t||"boolean"===typeof t?gn(Je):(0,i.cy)(t)?gn(Xe,null,t.slice()):ln(t)?Tn(t):gn(Ye,null,String(t))}function Tn(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:vn(t)}function Sn(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.cy)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),Sn(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||be(e)?3===r&&C&&(1===C.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=C}}else(0,i.Tn)(e)?(e={default:e,_ctx:C},n=32):(e=String(e),64&r?(n=16,e=[wn(e)]):n=8);t.children=e,t.shapeFlag|=n}function An(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C4)([e.class,r.class]));else if("style"===t)e.style=(0,i.Tr)([e.style,r.style]);else if((0,i.Mp)(t)){const n=e[t],s=r[t];!s||n===s||(0,i.cy)(n)&&n.includes(s)?null!=s||null!=n||(0,i.CP)(t)||(e[t]=s):e[t]=n?[].concat(n,s):s}else""!==t&&(e[t]=r[t])}return e}function Cn(t,e,n,r=null){o(t,e,7,[n,r])}const In=ne();let Rn=0;function xn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||In,a={uid:Rn++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ce(s,o),emitsOptions:ue(s,o),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:s.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=ae.bind(null,a),t.ce&&t.ce(a),a}let On=null;const Nn=()=>On||C;let kn,Dn;{const t=(0,i.We)(),e=(e,n)=>{let r;return(r=t[e])||(r=t[e]=[]),r.push(n),t=>{r.length>1?r.forEach(e=>e(t)):r[0](t)}};kn=e("__VUE_INSTANCE_SETTERS__",t=>On=t),Dn=e("__VUE_SSR_SETTERS__",t=>Vn=t)}const Pn=t=>{const e=On;return kn(t),t.scope.on(),()=>{t.scope.off(),kn(e)}},Ln=()=>{On&&On.scope.off(),kn(null)};function Mn(t){return 4&t.vnode.shapeFlag}let Un,Fn,Vn=!1;function jn(t,e=!1,n=!1){e&&Dn(e);const{props:r,children:i}=t.vnode,s=Mn(t);_e(t,r,s,e),Pe(t,i,n||e);const o=s?Bn(t,e):void 0;return e&&Dn(!1),o}function Bn(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Vt);const{setup:o}=n;if(o){(0,r.C4)();const n=t.setupContext=o.length>1?Gn(t):null,c=Pn(t),u=s(o,t,0,[t.props,n]),l=(0,i.yL)(u);if((0,r.bl)(),c(),!l&&!t.sp||ut(t)||it(t),l){if(u.then(Ln,Ln),e)return u.then(n=>{$n(t,n,e)}).catch(e=>{a(e,t,0)});t.asyncDep=u}else $n(t,u,e)}else qn(t,e)}function $n(t,e,n){(0,i.Tn)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Gv)(e)&&(t.setupState=(0,r.Pr)(e)),qn(t,n)}function qn(t,e,n){const s=t.type;if(!t.render){if(!e&&Un&&!s.render){const e=s.template||Ht(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:o},r),a);s.render=Un(e,c)}}t.render=s.render||i.tE,Fn&&Fn(t)}{const e=Pn(t);(0,r.C4)();try{$t(t)}finally{(0,r.bl)(),e()}}}const zn={get(t,e){return(0,r.u4)(t,"get",""),t[e]}};function Gn(t){const e=e=>{t.exposed=e||{}};return{attrs:new Proxy(t.attrs,zn),slots:t.slots,emit:t.emit,expose:e}}function Hn(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(t.exposed)),{get(e,n){return n in e?e[n]:n in Ut?Ut[n](t):void 0},has(t,e){return e in t||e in Ut}})):t.proxy}function Kn(t,e=!0){return(0,i.Tn)(t)?t.displayName||t.name:t.name||e&&t.__name}function Wn(t){return(0,i.Tn)(t)&&"__vccOpts"in t}const Qn=(t,e)=>{const n=(0,r.EW)(t,e,Vn);return n};function Xn(t,e,n){try{on(-1);const r=arguments.length;return 2===r?(0,i.Gv)(e)&&!(0,i.cy)(e)?ln(e)?gn(t,null,[e]):gn(t,e):gn(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&ln(n)&&(n=[n]),gn(t,e,n))}finally{on(1)}}const Yn="3.5.32"},5130:function(t,e,n){n.d(e,{D$:function(){return yt},Ef:function(){return Tt},Jo:function(){return pt},eB:function(){return w},jR:function(){return wt}});n(4423),n(4114),n(8111),n(2489),n(7588),n(1701),n(3579),n(5367),n(2731),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8454),n(9452);var r=n(6768),i=(n(144),n(4232));
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let s;const o="undefined"!==typeof window&&window.trustedTypes;if(o)try{s=o.createPolicy("vue",{createHTML:t=>t})}catch(Ct){}const a=s?t=>s.createHTML(t):t=>t,c="http://www.w3.org/2000/svg",u="http://www.w3.org/1998/Math/MathML",l="undefined"!==typeof document?document:null,h=l&&l.createElement("template"),f={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i="svg"===e?l.createElementNS(c,t):"mathml"===e?l.createElementNS(u,t):n?l.createElement(t,{is:n}):l.createElement(t);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>l.createTextNode(t),createComment:t=>l.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>l.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{h.innerHTML=a("svg"===r?`<svg>${t}</svg>`:"mathml"===r?`<math>${t}</math>`:t);const i=h.content;if("svg"===r||"mathml"===r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},d="transition",p="animation",g=Symbol("_vtc"),m={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},y=(0,i.X$)({},r.QP,m),v=t=>(t.displayName="Transition",t.props=y,t),w=v((t,{slots:e})=>(0,r.h)(r.pR,E(t),e)),b=(t,e=[])=>{(0,i.cy)(t)?t.forEach(t=>t(...e)):t&&t(...e)},_=t=>!!t&&((0,i.cy)(t)?t.some(t=>t.length>1):t.length>1);function E(t){const e={};for(const i in t)i in m||(e[i]=t[i]);if(!1===t.css)return e;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=T(s),y=g&&g[0],v=g&&g[1],{onBeforeEnter:w,onEnter:E,onEnterCancelled:S,onLeave:R,onLeaveCancelled:O,onBeforeAppear:N=w,onAppear:k=E,onAppearCancelled:P=S}=e,L=(t,e,n,r)=>{t._enterCancelled=r,C(t,e?h:c),C(t,e?l:a),n&&n()},M=(t,e)=>{t._isLeaving=!1,C(t,f),C(t,p),C(t,d),e&&e()},U=t=>(e,n)=>{const i=t?k:E,s=()=>L(e,t,n);b(i,[e,s]),I(()=>{C(e,t?u:o),A(e,t?h:c),_(i)||x(e,r,y,s)})};return(0,i.X$)(e,{onBeforeEnter(t){b(w,[t]),A(t,o),A(t,a)},onBeforeAppear(t){b(N,[t]),A(t,u),A(t,l)},onEnter:U(!1),onAppear:U(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>M(t,e);A(t,f),t._enterCancelled?(A(t,d),D(t)):(D(t),A(t,d)),I(()=>{t._isLeaving&&(C(t,f),A(t,p),_(R)||x(t,r,v,n))}),b(R,[t,n])},onEnterCancelled(t){L(t,!1,void 0,!0),b(S,[t])},onAppearCancelled(t){L(t,!0,void 0,!0),b(P,[t])},onLeaveCancelled(t){M(t),b(O,[t])}})}function T(t){if(null==t)return null;if((0,i.Gv)(t))return[S(t.enter),S(t.leave)];{const e=S(t);return[e,e]}}function S(t){const e=(0,i.Ro)(t);return e}function A(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.add(e)),(t[g]||(t[g]=new Set)).add(e)}function C(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.remove(e));const n=t[g];n&&(n.delete(e),n.size||(t[g]=void 0))}function I(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let R=0;function x(t,e,n,r){const i=t._endId=++R,s=()=>{i===t._endId&&r()};if(null!=n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=O(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,f),s()},f=e=>{e.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,f)}function O(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(`${d}Delay`),s=r(`${d}Duration`),o=N(i,s),a=r(`${p}Delay`),c=r(`${p}Duration`),u=N(a,c);let l=null,h=0,f=0;e===d?o>0&&(l=d,h=o,f=s.length):e===p?u>0&&(l=p,h=u,f=c.length):(h=Math.max(o,u),l=h>0?o>u?d:p:null,f=l?l===d?s.length:c.length:0);const g=l===d&&/\b(?:transform|all)(?:,|$)/.test(r(`${d}Property`).toString());return{type:l,timeout:h,propCount:f,hasTransform:g}}function N(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map((e,n)=>k(e)+k(t[n])))}function k(t){return"auto"===t?0:1e3*Number(t.slice(0,-1).replace(",","."))}function D(t){const e=t?t.ownerDocument:document;return e.body.offsetHeight}function P(t,e,n){const r=t[g];r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const L=Symbol("_vod"),M=Symbol("_vsh");const U=Symbol("");const F=/(?:^|;)\s*display\s*:/;function V(t,e,n){const r=t.style,s=(0,i.Kg)(n);let o=!1;if(n&&!s){if(e)if((0,i.Kg)(e))for(const t of e.split(";")){const e=t.slice(0,t.indexOf(":")).trim();null==n[e]&&B(r,e,"")}else for(const t in e)null==n[t]&&B(r,t,"");for(const t in n)"display"===t&&(o=!0),B(r,t,n[t])}else if(s){if(e!==n){const t=r[U];t&&(n+=";"+t),r.cssText=n,o=F.test(n)}}else e&&t.removeAttribute("style");L in t&&(t[L]=o?r.display:"",t[M]&&(r.display="none"))}const j=/\s*!important$/;function B(t,e,n){if((0,i.cy)(n))n.forEach(n=>B(t,e,n));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=z(t,e);j.test(n)?t.setProperty((0,i.Tg)(r),n.replace(j,""),"important"):t[r]=n}}const $=["Webkit","Moz","ms"],q={};function z(t,e){const n=q[e];if(n)return n;let r=(0,i.PT)(e);if("filter"!==r&&r in t)return q[e]=r;r=(0,i.ZH)(r);for(let i=0;i<$.length;i++){const n=$[i]+r;if(n in t)return q[e]=n}return e}const G="http://www.w3.org/1999/xlink";function H(t,e,n,r,s,o=(0,i.J$)(e)){r&&e.startsWith("xlink:")?null==n?t.removeAttributeNS(G,e.slice(6,e.length)):t.setAttributeNS(G,e,n):null==n||o&&!(0,i.Y2)(n)?t.removeAttribute(e):t.setAttribute(e,o?"":(0,i.Bm)(n)?String(n):n)}function K(t,e,n,r,s){if("innerHTML"===e||"textContent"===e)return void(null!=n&&(t[e]="innerHTML"===e?a(n):n));const o=t.tagName;if("value"===e&&"PROGRESS"!==o&&!o.includes("-")){const r="OPTION"===o?t.getAttribute("value")||"":t.value,i=null==n?"checkbox"===t.type?"on":"":String(n);return r===i&&"_value"in t||(t.value=i),null==n&&t.removeAttribute(e),void(t._value=n)}let c=!1;if(""===n||null==n){const r=typeof t[e];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",c=!0):"number"===r&&(n=0,c=!0)}try{t[e]=n}catch(Ct){0}c&&t.removeAttribute(s||e)}function W(t,e,n,r){t.addEventListener(e,n,r)}function Q(t,e,n,r){t.removeEventListener(e,n,r)}const X=Symbol("_vei");function Y(t,e,n,r,i=null){const s=t[X]||(t[X]={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=Z(e);if(r){const o=s[e]=rt(r,i);W(t,n,o,a)}else o&&(Q(t,n,o,a),s[e]=void 0)}}const J=/(?:Once|Passive|Capture)$/;function Z(t){let e;if(J.test(t)){let n;e={};while(n=t.match(J))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,i.Tg)(t.slice(2));return[n,e]}let tt=0;const et=Promise.resolve(),nt=()=>tt||(et.then(()=>tt=0),tt=Date.now());function rt(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,r.qL)(it(t,n.value),e,5,[t])};return n.value=t,n.attached=nt(),n}function it(t,e){if((0,i.cy)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(t=>e=>!e._stopped&&t&&t(e))}return e}const st=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ot=(t,e,n,r,s,o)=>{const a="svg"===s;"class"===e?P(t,r,a):"style"===e?V(t,n,r):(0,i.Mp)(e)?(0,i.CP)(e)||Y(t,e,n,r,o):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):at(t,e,r,a))?(K(t,e,r),t.tagName.includes("-")||"value"!==e&&"checked"!==e&&"selected"!==e||H(t,e,r,a,o,"value"!==e)):t._isVueCE&&(ct(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!(0,i.Kg)(r)))?K(t,(0,i.PT)(e),r,o,e):("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),H(t,e,r,a))};function at(t,e,n,r){if(r)return"innerHTML"===e||"textContent"===e||!!(e in t&&st(e)&&(0,i.Tn)(n));if("spellcheck"===e||"draggable"===e||"translate"===e||"autocorrect"===e)return!1;if("sandbox"===e&&"IFRAME"===t.tagName)return!1;if("form"===e)return!1;if("list"===e&&"INPUT"===t.tagName)return!1;if("type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!st(e)||!(0,i.Kg)(n))&&e in t}function ct(t,e){const n=t._def.props;if(!n)return!1;const r=(0,i.PT)(e);return Array.isArray(n)?n.some(t=>(0,i.PT)(t)===r):Object.keys(n).some(t=>(0,i.PT)(t)===r)}"undefined"!==typeof HTMLElement&&HTMLElement;const ut=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,i.cy)(e)?t=>(0,i.DY)(e,t):e};function lt(t){t.target.composing=!0}function ht(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ft=Symbol("_assign");function dt(t,e,n){return e&&(t=t.trim()),n&&(t=(0,i.bB)(t)),t}const pt={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[ft]=ut(i);const s=r||i.props&&"number"===i.props.type;W(t,e?"change":"input",e=>{e.target.composing||t[ft](dt(t.value,n,s))}),(n||s)&&W(t,"change",()=>{t.value=dt(t.value,n,s)}),e||(W(t,"compositionstart",lt),W(t,"compositionend",ht),W(t,"change",ht))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:o}},a){if(t[ft]=ut(a),t.composing)return;const c=!o&&"number"!==t.type||/^0\d/.test(t.value)?t.value:(0,i.bB)(t.value),u=null==e?"":e;if(c===u)return;const l=t.getRootNode();if((l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===t&&"range"!==t.type){if(r&&e===n)return;if(s&&t.value.trim()===u)return}t.value=u}};const gt=["ctrl","shift","alt","meta"],mt={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>gt.some(n=>t[`${n}Key`]&&!e.includes(n))},yt=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(n,...r)=>{for(let t=0;t<e.length;t++){const r=mt[e[t]];if(r&&r(n,e))return}return t(n,...r)})},vt={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},wt=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=n=>{if(!("key"in n))return;const r=(0,i.Tg)(n.key);return e.some(t=>t===r||vt[t]===r)?t(n):void 0})},bt=(0,i.X$)({patchProp:ot},f);let _t;function Et(){return _t||(_t=(0,r.K9)(bt))}const Tt=(...t)=>{const e=Et().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=At(t);if(!r)return;const s=e._component;(0,i.Tn)(s)||s.render||s.template||(s.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const o=n(r,!1,St(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function St(t){return t instanceof SVGElement?"svg":"function"===typeof MathMLElement&&t instanceof MathMLElement?"mathml":void 0}function At(t){if((0,i.Kg)(t)){const e=document.querySelector(t);return e}return t}},4232:function(t,e,n){n.d(e,{$3:function(){return d},$H:function(){return U},BH:function(){return G},BX:function(){return nt},Bm:function(){return _},C4:function(){return Y},CE:function(){return g},CP:function(){return u},DY:function(){return F},Gv:function(){return E},J$:function(){return Z},Kg:function(){return b},MZ:function(){return i},Mp:function(){return c},NO:function(){return a},Oj:function(){return s},PT:function(){return k},Qd:function(){return I},Ro:function(){return B},SU:function(){return x},TF:function(){return h},Tg:function(){return P},Tn:function(){return w},Tr:function(){return H},We:function(){return q},X$:function(){return l},Y2:function(){return tt},ZH:function(){return L},Zf:function(){return C},bB:function(){return j},cy:function(){return p},gd:function(){return v},pD:function(){return r},rU:function(){return M},tE:function(){return o},u3:function(){return rt},vM:function(){return m},v_:function(){return st},yI:function(){return R},yL:function(){return T},yQ:function(){return V}});n(4114),n(8111),n(2489),n(7588);
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function r(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return t=>t in e}const i={},s=[],o=()=>{},a=()=>!1,c=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),u=t=>t.startsWith("onUpdate:"),l=Object.assign,h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},f=Object.prototype.hasOwnProperty,d=(t,e)=>f.call(t,e),p=Array.isArray,g=t=>"[object Map]"===A(t),m=t=>"[object Set]"===A(t),y=t=>"[object Date]"===A(t),v=t=>"[object RegExp]"===A(t),w=t=>"function"===typeof t,b=t=>"string"===typeof t,_=t=>"symbol"===typeof t,E=t=>null!==t&&"object"===typeof t,T=t=>(E(t)||w(t))&&w(t.then)&&w(t.catch),S=Object.prototype.toString,A=t=>S.call(t),C=t=>A(t).slice(8,-1),I=t=>"[object Object]"===A(t),R=t=>b(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,x=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),O=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},N=/-\w/g,k=O(t=>t.replace(N,t=>t.slice(1).toUpperCase())),D=/\B([A-Z])/g,P=O(t=>t.replace(D,"-$1").toLowerCase()),L=O(t=>t.charAt(0).toUpperCase()+t.slice(1)),M=O(t=>{const e=t?`on${L(t)}`:"";return e}),U=(t,e)=>!Object.is(t,e),F=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},V=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},j=t=>{const e=parseFloat(t);return isNaN(e)?t:e},B=t=>{const e=b(t)?Number(t):NaN;return isNaN(e)?t:e};let $;const q=()=>$||($="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const z="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",G=r(z);function H(t){if(p(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=b(r)?X(r):H(r);if(i)for(const t in i)e[t]=i[t]}return e}if(b(t)||E(t))return t}const K=/;(?![^(]*\))/g,W=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function X(t){const e={};return t.replace(Q,"").split(K).forEach(t=>{if(t){const n=t.split(W);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Y(t){let e="";if(b(t))e=t;else if(p(t))for(let n=0;n<t.length;n++){const r=Y(t[n]);r&&(e+=r+" ")}else if(E(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const J="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(J);function tt(t){return!!t||""===t}function et(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=nt(t[r],e[r]);return n}function nt(t,e){if(t===e)return!0;let n=y(t),r=y(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=_(t),r=_(e),n||r)return t===e;if(n=p(t),r=p(e),n||r)return!(!n||!r)&&et(t,e);if(n=E(t),r=E(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!nt(t[n],e[n]))return!1}}return String(t)===String(e)}function rt(t,e){return t.findIndex(t=>nt(t,e))}const it=t=>!(!t||!0!==t["__v_isRef"]),st=t=>b(t)?t:null==t?"":p(t)||E(t)&&(t.toString===S||!w(t.toString))?it(t)?st(t.value):JSON.stringify(t,ot,2):String(t),ot=(t,e)=>it(e)?ot(t,e.value):g(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[e,n],r)=>(t[at(e,r)+" =>"]=n,t),{})}:m(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>at(t))}:_(e)?at(e):!E(e)||p(e)||I(e)?e:String(e),at=(t,e="")=>{var n;return _(t)?`Symbol(${null!=(n=t.description)?n:e})`:t}},1241:function(t,e){e.A=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},9306:function(t,e,n){var r=n(4901),i=n(6823),s=TypeError;t.exports=function(t){if(r(t))return t;throw new s(i(t)+" is not a function")}},3506:function(t,e,n){var r=n(3925),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw new s("Can't set "+i(t)+" as a prototype")}},7080:function(t,e,n){var r=n(4402).has;t.exports=function(t){return r(t),t}},3463:function(t){var e=TypeError;t.exports=function(t){if("string"==typeof t)return t;throw new e("Argument is not a string")}},4328:function(t,e,n){var r=n(4995),i=new r.WeakMap,s=r.set,o=r.remove;t.exports=function(t){return s(i,t,1),o(i,t),t}},6557:function(t,e,n){var r=n(4995).has;t.exports=function(t){return r(t),t}},6469:function(t,e,n){var r=n(8227),i=n(2360),s=n(4913).f,o=r("unscopables"),a=Array.prototype;void 0===a[o]&&s(a,o,{configurable:!0,value:i(null)}),t.exports=function(t){a[o][t]=!0}},679:function(t,e,n){var r=n(1625),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw new i("Incorrect invocation")}},3972:function(t,e,n){var r=n(34),i=String,s=TypeError;t.exports=function(t){if(void 0===t||r(t))return t;throw new s(i(t)+" is not an object or undefined")}},8551:function(t,e,n){var r=n(34),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw new s(i(t)+" is not an object")}},4154:function(t,e,n){var r=n(6955),i=TypeError;t.exports=function(t){if("Uint8Array"===r(t))return t;throw new i("Argument is not an Uint8Array")}},7811:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7394:function(t,e,n){var r=n(4576),i=n(6706),s=n(2195),o=r.ArrayBuffer,a=r.TypeError;t.exports=o&&i(o.prototype,"byteLength","get")||function(t){if("ArrayBuffer"!==s(t))throw new a("ArrayBuffer expected");return t.byteLength}},3238:function(t,e,n){var r=n(4576),i=n(7811),s=n(7394),o=r.DataView;t.exports=function(t){if(!i||0!==s(t))return!1;try{return new o(t),!1}catch(e){return!0}}},5169:function(t,e,n){var r=n(3238),i=TypeError;t.exports=function(t){if(r(t))throw new i("ArrayBuffer is detached");return t}},4644:function(t,e,n){var r,i,s,o=n(7811),a=n(3724),c=n(4576),u=n(4901),l=n(34),h=n(9297),f=n(6955),d=n(6823),p=n(6699),g=n(6840),m=n(2106),y=n(1625),v=n(2787),w=n(2967),b=n(8227),_=n(3392),E=n(1181),T=E.enforce,S=E.get,A=c.Int8Array,C=A&&A.prototype,I=c.Uint8ClampedArray,R=I&&I.prototype,x=A&&v(A),O=C&&v(C),N=Object.prototype,k=c.TypeError,D=b("toStringTag"),P=_("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=o&&!!w&&"Opera"!==f(c.opera),U=!1,F={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},V={BigInt64Array:8,BigUint64Array:8},j=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h(F,e)||h(V,e)},B=function(t){var e=v(t);if(l(e)){var n=S(e);return n&&h(n,L)?n[L]:B(e)}},$=function(t){if(!l(t))return!1;var e=f(t);return h(F,e)||h(V,e)},q=function(t){if($(t))return t;throw new k("Target is not a typed array")},z=function(t){if(u(t)&&(!w||y(x,t)))return t;throw new k(d(t)+" is not a typed array constructor")},G=function(t,e,n,r){if(a){if(n)for(var i in F){var s=c[i];if(s&&h(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(u){}}}O[t]&&!n||g(O,t,n?e:M&&C[t]||e,r)}},H=function(t,e,n){var r,i;if(a){if(w){if(n)for(r in F)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(s){}if(x[t]&&!n)return;try{return g(x,t,n?e:M&&x[t]||e)}catch(s){}}for(r in F)i=c[r],!i||i[t]&&!n||g(i,t,e)}};for(r in F)i=c[r],s=i&&i.prototype,s?T(s)[L]=i:M=!1;for(r in V)i=c[r],s=i&&i.prototype,s&&(T(s)[L]=i);if((!M||!u(x)||x===Function.prototype)&&(x=function(){throw new k("Incorrect invocation")},M))for(r in F)c[r]&&w(c[r],x);if((!M||!O||O===N)&&(O=x.prototype,M))for(r in F)c[r]&&w(c[r].prototype,O);if(M&&v(R)!==O&&w(R,O),a&&!h(O,D))for(r in U=!0,m(O,D,{configurable:!0,get:function(){return l(this)?this[P]:void 0}}),F)c[r]&&p(c[r].prototype,P,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:U&&P,aTypedArray:q,aTypedArrayConstructor:z,exportTypedArrayMethod:G,exportTypedArrayStaticMethod:H,getTypedArrayConstructor:B,isView:j,isTypedArray:$,TypedArray:x,TypedArrayPrototype:O}},9617:function(t,e,n){var r=n(5397),i=n(5610),s=n(6198),o=function(t){return function(e,n,o){var a=r(e),c=s(a);if(0===c)return!t&&-1;var u,l=i(o,c);if(t&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},4527:function(t,e,n){var r=n(3724),i=n(4376),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!o(t,"length").writable)throw new s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},7680:function(t,e,n){var r=n(9504);t.exports=r([].slice)},2804:function(t){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=e+"+/",r=e+"-_",i=function(t){for(var e={},n=0;n<64;n++)e[t.charAt(n)]=n;return e};t.exports={i2c:n,c2i:i(n),i2cUrl:r,c2iUrl:i(r)}},6319:function(t,e,n){var r=n(8551),i=n(9539);t.exports=function(t,e,n,s){try{return s?e(r(n)[0],n[1]):e(n)}catch(o){i(t,"throw",o)}}},2195:function(t,e,n){var r=n(9504),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},6955:function(t,e,n){var r=n(2140),i=n(4901),s=n(2195),o=n(8227),a=o("toStringTag"),c=Object,u="Arguments"===s(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?s(e):"Object"===(r=s(e))&&i(e.callee)?"Arguments":r}},7740:function(t,e,n){var r=n(9297),i=n(5031),s=n(7347),o=n(4913);t.exports=function(t,e,n){for(var a=i(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},2211:function(t,e,n){var r=n(9039);t.exports=!r(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})},2529:function(t){t.exports=function(t,e){return{value:t,done:e}}},6699:function(t,e,n){var r=n(3724),i=n(4913),s=n(6980);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},6980:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},4659:function(t,e,n){var r=n(3724),i=n(4913),s=n(6980);t.exports=function(t,e,n){r?i.f(t,e,s(0,n)):t[e]=n}},2106:function(t,e,n){var r=n(283),i=n(4913);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},6840:function(t,e,n){var r=n(4901),i=n(4913),s=n(283),o=n(9433);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&s(n,u,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},6279:function(t,e,n){var r=n(6840);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},9433:function(t,e,n){var r=n(4576),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},3724:function(t,e,n){var r=n(9039);t.exports=!r(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]})},4055:function(t,e,n){var r=n(4576),i=n(34),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},6837:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw new e("Maximum allowed index exceeded");return t}},5002:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8727:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},9544:function(t,e,n){var r=n(2839);t.exports=/ipad|iphone|ipod/i.test(r)&&/applewebkit/i.test(r)},8574:function(t,e,n){var r=n(4215);t.exports="NODE"===r},2839:function(t,e,n){var r=n(4576),i=r.navigator,s=i&&i.userAgent;t.exports=s?String(s):""},9519:function(t,e,n){var r,i,s=n(4576),o=n(2839),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},4215:function(t,e,n){var r=n(4576),i=n(2839),s=n(2195),o=function(t){return i.slice(0,t.length)===t};t.exports=function(){return o("Bun/")?"BUN":o("Cloudflare-Workers")?"CLOUDFLARE":o("Deno/")?"DENO":o("Node.js/")?"NODE":r.Bun&&"string"==typeof Bun.version?"BUN":r.Deno&&"object"==typeof Deno.version?"DENO":"process"===s(r.process)?"NODE":r.window&&r.document?"BROWSER":"REST"}()},6193:function(t,e,n){var r=n(9504),i=Error,s=r("".replace),o=function(t){return String(new i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=s(t,a,"");return t}},6518:function(t,e,n){var r=n(4576),i=n(7347).f,s=n(6699),o=n(6840),a=n(9433),c=n(7740),u=n(2796);t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,y=t.stat;if(l=m?r:y?r[g]||a(g,{}):r[g]&&r[g].prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(y?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&s(d,"sham",!0),o(l,h,d,t)}}},9039:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},8745:function(t,e,n){var r=n(616),i=Function.prototype,s=i.apply,o=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},6080:function(t,e,n){var r=n(7476),i=n(9306),s=n(616),o=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:s?o(t,e):function(){return t.apply(e,arguments)}}},616:function(t,e,n){var r=n(9039);t.exports=!r(function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})},9565:function(t,e,n){var r=n(616),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},350:function(t,e,n){var r=n(3724),i=n(9297),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},6706:function(t,e,n){var r=n(9504),i=n(9306);t.exports=function(t,e,n){try{return r(i(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(s){}}},7476:function(t,e,n){var r=n(2195),i=n(9504);t.exports=function(t){if("Function"===r(t))return i(t)}},9504:function(t,e,n){var r=n(616),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);t.exports=r?o:function(t){return function(){return s.apply(t,arguments)}}},944:function(t){var e=TypeError;t.exports=function(t){var n=t&&t.alphabet;if(void 0===n||"base64"===n||"base64url"===n)return n||"base64";throw new e("Incorrect `alphabet` option")}},7751:function(t,e,n){var r=n(4576),i=n(4901),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},1767:function(t){t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},851:function(t,e,n){var r=n(6955),i=n(5966),s=n(4117),o=n(6269),a=n(8227),c=a("iterator");t.exports=function(t){if(!s(t))return i(t,c)||i(t,"@@iterator")||o[r(t)]}},81:function(t,e,n){var r=n(9565),i=n(9306),s=n(8551),o=n(6823),a=n(851),c=TypeError;t.exports=function(t,e){var n=arguments.length<2?a(t):e;if(i(n))return s(r(n,t));throw new c(o(t)+" is not iterable")}},5966:function(t,e,n){var r=n(9306),i=n(4117);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},3789:function(t,e,n){var r=n(9306),i=n(8551),s=n(9565),o=n(1291),a=n(1767),c="Invalid size",u=RangeError,l=TypeError,h=Math.max,f=function(t,e){this.set=t,this.size=h(e,0),this.has=r(t.has),this.keys=r(t.keys)};f.prototype={getIterator:function(){return a(i(s(this.keys,this.set)))},includes:function(t){return s(this.has,this.set,t)}},t.exports=function(t){i(t);var e=+t.size;if(e!==e)throw new l(c);var n=o(e);if(n<0)throw new u(c);return new f(t,n)}},4576:function(t,e,n){var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(t,e,n){var r=n(9504),i=n(8981),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},421:function(t){t.exports={}},397:function(t,e,n){var r=n(7751);t.exports=r("document","documentElement")},5917:function(t,e,n){var r=n(3724),i=n(9039),s=n(4055);t.exports=!r&&!i(function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a})},7055:function(t,e,n){var r=n(9504),i=n(9039),s=n(2195),o=Object,a=r("".split);t.exports=i(function(){return!o("z").propertyIsEnumerable(0)})?function(t){return"String"===s(t)?a(t,""):o(t)}:o},3167:function(t,e,n){var r=n(4901),i=n(34),s=n(2967);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},3706:function(t,e,n){var r=n(9504),i=n(4901),s=n(7629),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},1181:function(t,e,n){var r,i,s,o=n(8622),a=n(4576),c=n(34),u=n(6699),l=n(9297),h=n(7629),f=n(6119),d=n(421),p="Object already initialized",g=a.TypeError,m=a.WeakMap,y=function(t){return s(t)?i(t):r(t,{})},v=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw new g("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var w=h.state||(h.state=new m);w.get=w.get,w.has=w.has,w.set=w.set,r=function(t,e){if(w.has(t))throw new g(p);return e.facade=t,w.set(t,e),e},i=function(t){return w.get(t)||{}},s=function(t){return w.has(t)}}else{var b=f("state");d[b]=!0,r=function(t,e){if(l(t,b))throw new g(p);return e.facade=t,u(t,b,e),e},i=function(t){return l(t,b)?t[b]:{}},s=function(t){return l(t,b)}}t.exports={set:r,get:i,has:s,enforce:y,getterFor:v}},4209:function(t,e,n){var r=n(8227),i=n(6269),s=r("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[s]===t)}},4376:function(t,e,n){var r=n(2195);t.exports=Array.isArray||function(t){return"Array"===r(t)}},1108:function(t,e,n){var r=n(6955);t.exports=function(t){var e=r(t);return"BigInt64Array"===e||"BigUint64Array"===e}},4901:function(t){var e="object"==typeof document&&document.all;t.exports="undefined"==typeof e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},2796:function(t,e,n){var r=n(9039),i=n(4901),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n===l||n!==u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},4117:function(t){t.exports=function(t){return null===t||void 0===t}},34:function(t,e,n){var r=n(4901);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},3925:function(t,e,n){var r=n(34);t.exports=function(t){return r(t)||null===t}},6395:function(t){t.exports=!1},757:function(t,e,n){var r=n(7751),i=n(4901),s=n(1625),o=n(7040),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&s(e.prototype,a(t))}},507:function(t,e,n){var r=n(9565);t.exports=function(t,e,n){var i,s,o=n?t:t.iterator,a=t.next;while(!(i=r(a,o)).done)if(s=e(i.value),void 0!==s)return s}},2652:function(t,e,n){var r=n(6080),i=n(9565),s=n(8551),o=n(6823),a=n(4209),c=n(6198),u=n(1625),l=n(81),h=n(851),f=n(9539),d=TypeError,p=function(t,e){this.stopped=t,this.result=e},g=p.prototype;t.exports=function(t,e,n){var m,y,v,w,b,_,E,T=n&&n.that,S=!(!n||!n.AS_ENTRIES),A=!(!n||!n.IS_RECORD),C=!(!n||!n.IS_ITERATOR),I=!(!n||!n.INTERRUPTED),R=r(e,T),x=function(t){var e=m;return m=void 0,e&&f(e,"normal"),new p(!0,t)},O=function(t){return S?(s(t),I?R(t[0],t[1],x):R(t[0],t[1])):I?R(t,x):R(t)};if(A)m=t.iterator;else if(C)m=t;else{if(y=h(t),!y)throw new d(o(t)+" is not iterable");if(a(y)){for(v=0,w=c(t);w>v;v++)if(b=O(t[v]),b&&u(g,b))return b;return new p(!1)}m=l(t,y)}_=A?t.next:m.next;while(!(E=i(_,m)).done){var N=E.value;try{b=O(N)}catch(k){if(!m)throw k;f(m,"throw",k)}if("object"==typeof b&&b&&u(g,b))return b}return new p(!1)}},1385:function(t,e,n){var r=n(9539);t.exports=function(t,e,n){for(var i=t.length-1;i>=0;i--)if(void 0!==t[i])try{n=r(t[i].iterator,e,n)}catch(s){e="throw",n=s}if("throw"===e)throw n;return n}},9539:function(t,e,n){var r=n(9565),i=n(8551),s=n(5966);t.exports=function(t,e,n){var o,a;i(t);try{if(o=s(t,"return"),!o){if("throw"===e)throw n;return n}o=r(o,t)}catch(c){a=!0,o=c}if("throw"===e)throw n;if(a)throw o;return i(o),n}},9462:function(t,e,n){var r=n(9565),i=n(2360),s=n(6699),o=n(6279),a=n(8227),c=n(1181),u=n(5966),l=n(7657).IteratorPrototype,h=n(2529),f=n(9539),d=n(1385),p=a("toStringTag"),g="IteratorHelper",m="WrapForValidIterator",y="normal",v="throw",w=c.set,b=function(t){var e=c.getterFor(t?m:g);return o(i(l),{next:function(){var n=e(this);if(t)return n.nextHandler();if(n.done)return h(void 0,!0);try{var r=n.nextHandler();return n.returnHandlerResult?r:h(r,n.done)}catch(i){throw n.done=!0,i}},return:function(){var n=e(this),i=n.iterator,s=n.done;if(n.done=!0,t){var o=u(i,"return");return o?r(o,i):h(void 0,!0)}if(s)return h(void 0,!0);if(n.inner)try{f(n.inner.iterator,y)}catch(a){return f(i,v,a)}if(n.openIters)try{d(n.openIters,y)}catch(a){if(i)return f(i,v,a);throw a}return i&&f(i,y),h(void 0,!0)}})},_=b(!0),E=b(!1);s(E,p,"Iterator Helper"),t.exports=function(t,e,n){var r=function(r,i){i?(i.iterator=r.iterator,i.next=r.next):i=r,i.type=e?m:g,i.returnHandlerResult=!!n,i.nextHandler=t,i.counter=0,i.done=!1,w(this,i)};return r.prototype=e?_:E,r}},684:function(t){t.exports=function(t,e){var n="function"==typeof Iterator&&Iterator.prototype[t];if(n)try{n.call({next:null},e).next()}catch(r){return!0}}},4549:function(t,e,n){var r=n(4576);t.exports=function(t,e){var n=r.Iterator,i=n&&n.prototype,s=i&&i[t],o=!1;if(s)try{s.call({next:function(){return{done:!0}},return:function(){o=!0}},-1)}catch(a){a instanceof e||(o=!1)}if(!o)return s}},7657:function(t,e,n){var r,i,s,o=n(9039),a=n(4901),c=n(34),u=n(2360),l=n(2787),h=n(6840),f=n(8227),d=n(6395),p=f("iterator"),g=!1;[].keys&&(s=[].keys(),"next"in s?(i=l(l(s)),i!==Object.prototype&&(r=i)):g=!0);var m=!c(r)||o(function(){var t={};return r[p].call(t)!==t});m?r={}:d&&(r=u(r)),a(r[p])||h(r,p,function(){return this}),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:g}},6269:function(t){t.exports={}},6198:function(t,e,n){var r=n(8014);t.exports=function(t){return r(t.length)}},283:function(t,e,n){var r=n(9504),i=n(9039),s=n(4901),o=n(9297),a=n(3724),c=n(350).CONFIGURABLE,u=n(3706),l=n(1181),h=l.enforce,f=l.get,d=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),y=r([].join),v=a&&!i(function(){return 8!==p(function(){},"length",{value:8}).length}),w=String(String).split("String"),b=t.exports=function(t,e,n){"Symbol("===g(d(e),0,7)&&(e="["+m(d(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),v&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return o(r,"source")||(r.source=y(w,"string"==typeof e?e:"")),t};Function.prototype.toString=b(function(){return s(this)&&f(this).source||u(this)},"toString")},2248:function(t,e,n){var r=n(9504),i=Map.prototype;t.exports={Map:Map,set:r(i.set),get:r(i.get),has:r(i.has),remove:r(i["delete"]),proto:i}},741:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},2603:function(t,e,n){var r=n(655);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},2360:function(t,e,n){var r,i=n(8551),s=n(6801),o=n(8727),a=n(421),c=n(397),u=n(4055),l=n(6119),h=">",f="<",d="prototype",p="script",g=l("IE_PROTO"),m=function(){},y=function(t){return f+p+h+t+f+"/"+p+h},v=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},w=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}b="undefined"!=typeof document?document.domain&&r?v(r):w():v(r);var t=o.length;while(t--)delete b[d][o[t]];return b()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[d]=i(t),n=new m,m[d]=null,n[g]=t):n=b(),void 0===e?n:s.f(n,e)}},6801:function(t,e,n){var r=n(3724),i=n(8686),s=n(4913),o=n(8551),a=n(5397),c=n(1072);e.f=r&&!i?Object.defineProperties:function(t,e){o(t);var n,r=a(e),i=c(e),u=i.length,l=0;while(u>l)s.f(t,n=i[l++],r[n]);return t}},4913:function(t,e,n){var r=n(3724),i=n(5917),s=n(8686),o=n(8551),a=n(6969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(o(t),e=a(e),o(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},7347:function(t,e,n){var r=n(3724),i=n(9565),s=n(8773),o=n(6980),a=n(5397),c=n(6969),u=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},8480:function(t,e,n){var r=n(1828),i=n(8727),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},3717:function(t,e){e.f=Object.getOwnPropertySymbols},2787:function(t,e,n){var r=n(9297),i=n(4901),s=n(8981),o=n(6119),a=n(2211),c=o("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=s(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},1625:function(t,e,n){var r=n(9504);t.exports=r({}.isPrototypeOf)},1828:function(t,e,n){var r=n(9504),i=n(9297),s=n(5397),o=n(9617).indexOf,a=n(421),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},1072:function(t,e,n){var r=n(1828),i=n(8727);t.exports=Object.keys||function(t){return r(t,i)}},8773:function(t,e){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},2967:function(t,e,n){var r=n(6706),i=n(34),s=n(7750),o=n(3506);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(a){}return function(n,r){return s(n),o(r),i(n)?(e?t(n,r):n.__proto__=r,n):n}}():void 0)},4270:function(t,e,n){var r=n(9565),i=n(4901),s=n(34),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!s(a=r(n,t)))return a;if(i(n=t.valueOf)&&!s(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!s(a=r(n,t)))return a;throw new o("Can't convert object to primitive value")}},5031:function(t,e,n){var r=n(7751),i=n(9504),s=n(8480),o=n(3717),a=n(8551),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},9167:function(t,e,n){var r=n(4576);t.exports=r},7750:function(t,e,n){var r=n(4117),i=TypeError;t.exports=function(t){if(r(t))throw new i("Can't call method on "+t);return t}},9472:function(t,e,n){var r=n(4576),i=n(8745),s=n(4901),o=n(4215),a=n(2839),c=n(7680),u=n(2812),l=r.Function,h=/MSIE .\./.test(a)||"BUN"===o&&function(){var t=r.Bun.version.split(".");return t.length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2])}();t.exports=function(t,e){var n=e?2:1;return h?function(r,o){var a=u(arguments.length,1)>n,h=s(r)?r:l(r),f=a?c(arguments,n):[],d=a?function(){i(h,this,f)}:h;return e?t(d,o):t(d)}:t}},9286:function(t,e,n){var r=n(4402),i=n(8469),s=r.Set,o=r.add;t.exports=function(t){var e=new s;return i(t,function(t){o(e,t)}),e}},3440:function(t,e,n){var r=n(7080),i=n(4402),s=n(9286),o=n(5170),a=n(3789),c=n(8469),u=n(507),l=i.has,h=i.remove;t.exports=function(t){var e=r(this),n=a(t),i=s(e);return o(i)<=n.size?c(i,function(t){n.includes(t)&&h(i,t)}):u(n.getIterator(),function(t){l(i,t)&&h(i,t)}),i}},4402:function(t,e,n){var r=n(9504),i=Set.prototype;t.exports={Set:Set,add:r(i.add),has:r(i.has),remove:r(i["delete"]),proto:i}},8750:function(t,e,n){var r=n(7080),i=n(4402),s=n(5170),o=n(3789),a=n(8469),c=n(507),u=i.Set,l=i.add,h=i.has;t.exports=function(t){var e=r(this),n=o(t),i=new u;return s(e)>n.size?c(n.getIterator(),function(t){h(e,t)&&l(i,t)}):a(e,function(t){n.includes(t)&&l(i,t)}),i}},4449:function(t,e,n){var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(8469),c=n(507),u=n(9539);t.exports=function(t){var e=r(this),n=o(t);if(s(e)<=n.size)return!1!==a(e,function(t){if(n.includes(t))return!1},!0);var l=n.getIterator();return!1!==c(l,function(t){if(i(e,t))return u(l.iterator,"normal",!1)})}},3838:function(t,e,n){var r=n(7080),i=n(5170),s=n(8469),o=n(3789);t.exports=function(t){var e=r(this),n=o(t);return!(i(e)>n.size)&&!1!==s(e,function(t){if(!n.includes(t))return!1},!0)}},8527:function(t,e,n){var r=n(7080),i=n(4402).has,s=n(5170),o=n(3789),a=n(507),c=n(9539);t.exports=function(t){var e=r(this),n=o(t);if(s(e)<n.size)return!1;var u=n.getIterator();return!1!==a(u,function(t){if(!i(e,t))return c(u.iterator,"normal",!1)})}},8469:function(t,e,n){var r=n(9504),i=n(507),s=n(4402),o=s.Set,a=s.proto,c=r(a.forEach),u=r(a.keys),l=u(new o).next;t.exports=function(t,e,n){return n?i({iterator:u(t),next:l},e):c(t,e)}},4916:function(t,e,n){var r=n(7751),i=function(t){return{size:t,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}},s=function(t){return{size:t,has:function(){return!0},keys:function(){throw new Error("e")}}};t.exports=function(t,e){var n=r("Set");try{(new n)[t](i(0));try{return(new n)[t](i(-1)),!1}catch(a){if(!e)return!0;try{return(new n)[t](s(-1/0)),!1}catch(c){var o=new n([1,2]);return e(o[t](s(1/0)))}}}catch(c){return!1}}},9835:function(t){t.exports=function(t){try{var e=new Set,n={size:0,has:function(){return!0},keys:function(){return Object.defineProperty({},"next",{get:function(){return e.clear(),e.add(4),function(){return{done:!0}}}})}},r=e[t](n);return 1===r.size&&4===r.values().next().value}catch(i){return!1}}},5170:function(t,e,n){var r=n(6706),i=n(4402);t.exports=r(i.proto,"size","get")||function(t){return t.size}},3650:function(t,e,n){var r=n(7080),i=n(4402),s=n(9286),o=n(3789),a=n(507),c=i.add,u=i.has,l=i.remove;t.exports=function(t){var e=r(this),n=o(t).getIterator(),i=s(e);return a(n,function(t){u(e,t)?l(i,t):c(i,t)}),i}},4204:function(t,e,n){var r=n(7080),i=n(4402).add,s=n(9286),o=n(3789),a=n(507);t.exports=function(t){var e=r(this),n=o(t).getIterator(),c=s(e);return a(n,function(t){i(c,t)}),c}},6119:function(t,e,n){var r=n(5745),i=n(3392),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},7629:function(t,e,n){var r=n(6395),i=n(4576),s=n(9433),o="__core-js_shared__",a=t.exports=i[o]||s(o,{});(a.versions||(a.versions=[])).push({version:"3.49.0",mode:r?"pure":"global",copyright:"© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(t,e,n){var r=n(7629);t.exports=function(t,e){return r[t]||(r[t]=e||{})}},4495:function(t,e,n){var r=n(9519),i=n(9039),s=n(4576),o=s.String;t.exports=!!Object.getOwnPropertySymbols&&!i(function(){var t=Symbol("symbol detection");return!o(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41})},9225:function(t,e,n){var r,i,s,o,a=n(4576),c=n(8745),u=n(6080),l=n(4901),h=n(9297),f=n(9039),d=n(397),p=n(7680),g=n(4055),m=n(2812),y=n(9544),v=n(8574),w=a.setImmediate,b=a.clearImmediate,_=a.process,E=a.Dispatch,T=a.Function,S=a.MessageChannel,A=a.String,C=0,I={},R="onreadystatechange";f(function(){r=a.location});var x=function(t){if(h(I,t)){var e=I[t];delete I[t],e()}},O=function(t){return function(){x(t)}},N=function(t){x(t.data)},k=function(t){a.postMessage(A(t),r.protocol+"//"+r.host)};w&&b||(w=function(t){m(arguments.length,1);var e=l(t)?t:T(t),n=p(arguments,1);return I[++C]=function(){c(e,void 0,n)},i(C),C},b=function(t){delete I[t]},v?i=function(t){_.nextTick(O(t))}:E&&E.now?i=function(t){E.now(O(t))}:S&&!y?(s=new S,o=s.port2,s.port1.onmessage=N,i=u(o.postMessage,o)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!f(k)?(i=k,a.addEventListener("message",N,!1)):i=R in g("script")?function(t){d.appendChild(g("script"))[R]=function(){d.removeChild(this),x(t)}}:function(t){setTimeout(O(t),0)}),t.exports={set:w,clear:b}},5610:function(t,e,n){var r=n(1291),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},5854:function(t,e,n){var r=n(2777),i=TypeError;t.exports=function(t){var e=r(t,"number");if("number"==typeof e)throw new i("Can't convert number to bigint");return BigInt(e)}},5397:function(t,e,n){var r=n(7055),i=n(7750);t.exports=function(t){return r(i(t))}},1291:function(t,e,n){var r=n(741);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},8014:function(t,e,n){var r=n(1291),i=Math.min;t.exports=function(t){var e=r(t);return e>0?i(e,9007199254740991):0}},8981:function(t,e,n){var r=n(7750),i=Object;t.exports=function(t){return i(r(t))}},2777:function(t,e,n){var r=n(9565),i=n(34),s=n(757),o=n(5966),a=n(4270),c=n(8227),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,c=o(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||s(n))return n;throw new u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},6969:function(t,e,n){var r=n(2777),i=n(757);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},2140:function(t,e,n){var r=n(8227),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},655:function(t,e,n){var r=n(6955),i=String;t.exports=function(t){if("Symbol"===r(t))throw new TypeError("Cannot convert a Symbol value to a string");return i(t)}},6823:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},3392:function(t,e,n){var r=n(9504),i=0,s=Math.random(),o=r(1.1.toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},9143:function(t,e,n){var r=n(4576),i=n(9504),s=n(3972),o=n(3463),a=n(9297),c=n(2804),u=n(944),l=n(5169),h=c.c2i,f=c.c2iUrl,d=r.SyntaxError,p=r.TypeError,g=i("".charAt),m=function(t,e){for(var n=t.length;e<n;e++){var r=g(t,e);if(" "!==r&&"\t"!==r&&"\n"!==r&&"\f"!==r&&"\r"!==r)break}return e},y=function(t,e,n){var r=t.length;r<4&&(t+=2===r?"AA":"A");var i=(e[g(t,0)]<<18)+(e[g(t,1)]<<12)+(e[g(t,2)]<<6)+e[g(t,3)],s=[i>>16&255,i>>8&255,255&i];if(2===r){if(n&&0!==s[1])throw new d("Extra bits");return[s[0]]}if(3===r){if(n&&0!==s[2])throw new d("Extra bits");return[s[0],s[1]]}return s},v=function(t,e,n){for(var r=e.length,i=0;i<r;i++)t[n+i]=e[i];return n+r};t.exports=function(t,e,n,r){o(t),s(e);var i="base64"===u(e)?h:f,c=e?e.lastChunkHandling:void 0;if(void 0===c&&(c="loose"),"loose"!==c&&"strict"!==c&&"stop-before-partial"!==c)throw new p("Incorrect `lastChunkHandling` option");n&&l(n.buffer);var w=t.length,b=n||[],_=0,E=0,T="",S=0;if(r)while(1){if(S=m(t,S),S===w){if(T.length>0){if("stop-before-partial"===c)break;if("loose"!==c)throw new d("Missing padding");if(1===T.length)throw new d("Malformed padding: exactly one additional character");_=v(b,y(T,i,!1),_)}E=w;break}var A=g(t,S);if(++S,"="===A){if(T.length<2)throw new d("Padding is too early");if(S=m(t,S),2===T.length){if(S===w){if("stop-before-partial"===c)break;throw new d("Malformed padding: only one =")}"="===g(t,S)&&(++S,S=m(t,S))}if(S<w)throw new d("Unexpected character after padding");_=v(b,y(T,i,"strict"===c),_),E=w;break}if(!a(i,A))throw new d("Unexpected character");var C=r-_;if(1===C&&2===T.length||2===C&&3===T.length)break;if(T+=A,4===T.length&&(_=v(b,y(T,i,!1),_),T="",E=S,_===r))break}return{bytes:b,read:E,written:_}}},2303:function(t,e,n){var r=n(4576),i=n(9504),s=r.Uint8Array,o=r.SyntaxError,a=Math.min,c=i("".match);t.exports=function(t,e){var n=t.length;if(n%2!==0)throw new o("String should be an even number of characters");for(var r=e?a(e.length,n/2):n/2,i=e||new s(r),u=c(t,/.{2}/g),l=0;l<r;l++){var h=+("0x"+u[l]+"0");if(h!==h)throw new o("String should only contain hex characters");i[l]=h>>4}return{bytes:i,read:l<<1}}},7040:function(t,e,n){var r=n(4495);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(t,e,n){var r=n(3724),i=n(9039);t.exports=r&&i(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype})},2812:function(t){var e=TypeError;t.exports=function(t,n){if(t<n)throw new e("Not enough arguments");return t}},8622:function(t,e,n){var r=n(4576),i=n(4901),s=r.WeakMap;t.exports=i(s)&&/native code/.test(String(s))},4995:function(t,e,n){var r=n(9504),i=WeakMap.prototype;t.exports={WeakMap:WeakMap,set:r(i.set),get:r(i.get),has:r(i.has),remove:r(i["delete"])}},511:function(t,e,n){var r=n(9167),i=n(9297),s=n(1951),o=n(4913).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:s.f(t)})}},1951:function(t,e,n){var r=n(8227);e.f=r},8227:function(t,e,n){var r=n(4576),i=n(5745),s=n(9297),o=n(3392),a=n(4495),c=n(7040),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;t.exports=function(t){return s(l,t)||(l[t]=a&&s(u,t)?u[t]:h("Symbol."+t)),l[t]}},4423:function(t,e,n){var r=n(6518),i=n(9617).includes,s=n(9039),o=n(6469),a=s(function(){return!Array(1).includes()}),c=s(function(){return[,1].includes(void 0,1)});r({target:"Array",proto:!0,forced:a||c},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},4114:function(t,e,n){var r=n(6518),i=n(8981),s=n(6198),o=n(4527),a=n(6837),c=n(9039),u=c(function(){return 4294967297!==[].push.call({length:4294967296},1)}),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=i(this),n=s(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return o(e,n),n}})},8111:function(t,e,n){var r=n(6518),i=n(4576),s=n(679),o=n(8551),a=n(4901),c=n(2787),u=n(2106),l=n(4659),h=n(9039),f=n(9297),d=n(8227),p=n(7657).IteratorPrototype,g=n(3724),m=n(6395),y="constructor",v="Iterator",w=d("toStringTag"),b=TypeError,_=i[v],E=m||!a(_)||_.prototype!==p||!h(function(){_({})}),T=function(){if(s(this,p),c(this)===p)throw new b("Abstract class Iterator not directly constructable")},S=function(t,e){g?u(p,t,{configurable:!0,get:function(){return e},set:function(e){if(o(this),this===p)throw new b("You can't redefine this property");f(this,t)?this[t]=e:l(this,t,e)}}):p[t]=e};f(p,w)||S(w,v),!E&&f(p,y)&&p[y]!==Object||S(y,T),T.prototype=p,r({global:!0,constructor:!0,forced:E},{Iterator:T})},6382:function(t,e,n){var r=n(9565),i=n(6840),s=n(5966),o=n(9297),a=n(8227),c=n(7657).IteratorPrototype,u=a("dispose");o(c,u)||i(c,u,function(){var t=s(this,"return");t&&r(t,this)})},1148:function(t,e,n){var r=n(6518),i=n(9565),s=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("every",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{every:function(t){a(this);try{o(t)}catch(r){u(this,"throw",r)}if(h)return i(h,this,t);var e=c(this),n=0;return!s(e,function(e,r){if(!t(e,n++))return r()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},2489:function(t,e,n){var r=n(6518),i=n(9565),s=n(9306),o=n(8551),a=n(1767),c=n(9462),u=n(6319),l=n(6395),h=n(9539),f=n(684),d=n(4549),p=!l&&!f("filter",function(){}),g=!l&&!p&&d("filter",TypeError),m=l||p||g,y=c(function(){var t,e,n,r=this.iterator,s=this.predicate,a=this.next;while(1){if(t=o(i(a,r)),e=this.done=!!t.done,e)return;if(n=t.value,u(r,s,[n,this.counter++],!0))return n}});r({target:"Iterator",proto:!0,real:!0,forced:m},{filter:function(t){o(this);try{s(t)}catch(e){h(this,"throw",e)}return g?i(g,this,t):new y(a(this),{predicate:t})}})},116:function(t,e,n){var r=n(6518),i=n(9565),s=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("find",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{find:function(t){a(this);try{o(t)}catch(r){u(this,"throw",r)}if(h)return i(h,this,t);var e=c(this),n=0;return s(e,function(e,r){if(t(e,n++))return r(e)},{IS_RECORD:!0,INTERRUPTED:!0}).result}})},7588:function(t,e,n){var r=n(6518),i=n(9565),s=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("forEach",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{forEach:function(t){a(this);try{o(t)}catch(r){u(this,"throw",r)}if(h)return i(h,this,t);var e=c(this),n=0;s(e,function(e){t(e,n++)},{IS_RECORD:!0})}})},1701:function(t,e,n){var r=n(6518),i=n(9565),s=n(9306),o=n(8551),a=n(1767),c=n(9462),u=n(6319),l=n(9539),h=n(684),f=n(4549),d=n(6395),p=!d&&!h("map",function(){}),g=!d&&!p&&f("map",TypeError),m=d||p||g,y=c(function(){var t=this.iterator,e=o(i(this.next,t)),n=this.done=!!e.done;if(!n)return u(t,this.mapper,[e.value,this.counter++],!0)});r({target:"Iterator",proto:!0,real:!0,forced:m},{map:function(t){o(this);try{s(t)}catch(e){l(this,"throw",e)}return g?i(g,this,t):new y(a(this),{mapper:t})}})},8237:function(t,e,n){var r=n(6518),i=n(2652),s=n(9306),o=n(8551),a=n(1767),c=n(9539),u=n(4549),l=n(8745),h=n(9039),f=TypeError,d=h(function(){[].keys().reduce(function(){},void 0)}),p=!d&&u("reduce",f);r({target:"Iterator",proto:!0,real:!0,forced:d||p},{reduce:function(t){o(this);try{s(t)}catch(h){c(this,"throw",h)}var e=arguments.length<2,n=e?void 0:arguments[1];if(p)return l(p,this,e?[t]:[t,n]);var r=a(this),u=0;if(i(r,function(r){e?(e=!1,n=r):n=t(n,r,u),u++},{IS_RECORD:!0}),e)throw new f("Reduce of empty iterator with no initial value");return n}})},3579:function(t,e,n){var r=n(6518),i=n(9565),s=n(2652),o=n(9306),a=n(8551),c=n(1767),u=n(9539),l=n(4549),h=l("some",TypeError);r({target:"Iterator",proto:!0,real:!0,forced:h},{some:function(t){a(this);try{o(t)}catch(r){u(this,"throw",r)}if(h)return i(h,this,t);var e=c(this),n=0;return s(e,function(e,r){if(t(e,n++))return r()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},1806:function(t,e,n){var r=n(6518),i=n(8551),s=n(4659),o=n(2652),a=n(1767);r({target:"Iterator",proto:!0,real:!0},{toArray:function(){var t=[],e=0;return o(a(i(this)),function(n){s(t,e++,n)},{IS_RECORD:!0}),t}})},2731:function(t,e,n){var r=n(6518),i=n(9306),s=n(2248),o=n(6395),a=s.get,c=s.has,u=s.set;r({target:"Map",proto:!0,real:!0,forced:o},{getOrInsertComputed:function(t,e){var n=c(this,t);if(i(e),n)return a(this,t);0===t&&1/t===-1/0&&(t=0);var r=e(t);return u(this,t,r),r}})},5367:function(t,e,n){var r=n(6518),i=n(2248),s=n(6395),o=i.get,a=i.has,c=i.set;r({target:"Map",proto:!0,real:!0,forced:s},{getOrInsert:function(t,e){return a(this,t)?o(this,t):(c(this,t,e),e)}})},7642:function(t,e,n){var r=n(6518),i=n(3440),s=n(9039),o=n(4916),a=!o("difference",function(t){return 0===t.size}),c=a||s(function(){var t={size:1,has:function(){return!0},keys:function(){var t=0;return{next:function(){var n=t++>1;return e.has(1)&&e.clear(),{done:n,value:2}}}}},e=new Set([1,2,3,4]);return 3!==e.difference(t).size});r({target:"Set",proto:!0,real:!0,forced:c},{difference:i})},8004:function(t,e,n){var r=n(6518),i=n(9039),s=n(8750),o=n(4916),a=!o("intersection",function(t){return 2===t.size&&t.has(1)&&t.has(2)})||i(function(){return"3,2"!==String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))});r({target:"Set",proto:!0,real:!0,forced:a},{intersection:s})},3853:function(t,e,n){var r=n(6518),i=n(4449),s=n(4916),o=!s("isDisjointFrom",function(t){return!t});r({target:"Set",proto:!0,real:!0,forced:o},{isDisjointFrom:i})},5876:function(t,e,n){var r=n(6518),i=n(3838),s=n(4916),o=!s("isSubsetOf",function(t){return t});r({target:"Set",proto:!0,real:!0,forced:o},{isSubsetOf:i})},2475:function(t,e,n){var r=n(6518),i=n(8527),s=n(4916),o=!s("isSupersetOf",function(t){return!t});r({target:"Set",proto:!0,real:!0,forced:o},{isSupersetOf:i})},5024:function(t,e,n){var r=n(6518),i=n(3650),s=n(9835),o=n(4916),a=!o("symmetricDifference")||!s("symmetricDifference");r({target:"Set",proto:!0,real:!0,forced:a},{symmetricDifference:i})},1698:function(t,e,n){var r=n(6518),i=n(4204),s=n(9835),o=n(4916),a=!o("union")||!s("union");r({target:"Set",proto:!0,real:!0,forced:a},{union:i})},7324:function(t,e,n){var r=n(4576),i=n(511),s=n(4913).f,o=n(7347).f,a=r.Symbol;if(i("dispose"),a){var c=o(a,"dispose");c.enumerable&&c.configurable&&c.writable&&s(a,"dispose",{value:c.value,enumerable:!1,configurable:!1,writable:!1})}},9577:function(t,e,n){var r=n(4644),i=n(1108),s=n(6198),o=n(1291),a=n(5854),c=r.aTypedArray,u=r.getTypedArrayConstructor,l=r.exportTypedArrayMethod,h=RangeError,f=function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}(),d=f&&function(){try{new Int8Array(1)["with"](-.5,1)}catch(t){return!0}}();l("with",{with:function(t,e){var n=c(this),r=s(n),l=o(t),f=l<0?r+l:l,d=i(n)?a(e):+e;if(f>=r||f<0)throw new h("Incorrect index");for(var p=new(u(n))(r),g=0;g<r;g++)p[g]=g===f?d:n[g];return p}}["with"],!f||d)},6632:function(t,e,n){var r=n(6518),i=n(4576),s=n(9143),o=n(4154),a=i.Uint8Array,c=!a||!a.prototype.setFromBase64||!function(){var t=new a([255,255,255,255,255]);try{return void t.setFromBase64("",null)}catch(e){}try{return void t.setFromBase64("a")}catch(e){}try{t.setFromBase64("MjYyZg===")}catch(e){return 50===t[0]&&54===t[1]&&50===t[2]&&255===t[3]&&255===t[4]}}();a&&r({target:"Uint8Array",proto:!0,forced:c},{setFromBase64:function(t){o(this);var e=s(t,arguments.length>1?arguments[1]:void 0,this,this.length);return{read:e.read,written:e.written}}})},4226:function(t,e,n){var r=n(6518),i=n(4576),s=n(3463),o=n(4154),a=n(5169),c=n(2303);function u(){try{var t=new ArrayBuffer(16,{maxByteLength:1024});new Uint8Array(t).setFromHex("cafed00d")}catch(e){return!0}}i.Uint8Array&&r({target:"Uint8Array",proto:!0,forced:u()},{setFromHex:function(t){o(this),s(t),a(this.buffer);var e=c(t,this).read;return{read:e,written:e/2}}})},9486:function(t,e,n){var r=n(6518),i=n(4576),s=n(9504),o=n(3972),a=n(4154),c=n(5169),u=n(2804),l=n(944),h=u.i2c,f=u.i2cUrl,d=s("".charAt),p=i.Uint8Array,g=!p||!p.prototype.toBase64||!function(){try{var t=new p;t.toBase64(null)}catch(e){return!0}}();p&&r({target:"Uint8Array",proto:!0,forced:g},{toBase64:function(){var t=a(this),e=arguments.length?o(arguments[0]):void 0,n="base64"===l(e)?h:f,r=!!e&&!!e.omitPadding;c(this.buffer);for(var i,s="",u=0,p=t.length,g=function(t){return d(n,i>>6*t&63)};u+2<p;u+=3)i=(t[u]<<16)+(t[u+1]<<8)+t[u+2],s+=g(3)+g(2)+g(1)+g(0);return u+2===p?(i=(t[u]<<16)+(t[u+1]<<8),s+=g(3)+g(2)+g(1)+(r?"":"=")):u+1===p&&(i=t[u]<<16,s+=g(3)+g(2)+(r?"":"==")),s}})},456:function(t,e,n){var r=n(6518),i=n(4576),s=n(9504),o=n(4154),a=n(5169),c=s(1.1.toString),u=s([].join),l=Array,h=i.Uint8Array,f=!h||!h.prototype.toHex||!function(){try{var t=new h([255,255,255,255,255,255,255,255]);return"ffffffffffffffff"===t.toHex()}catch(e){return!1}}();h&&r({target:"Uint8Array",proto:!0,forced:f},{toHex:function(){o(this),a(this.buffer);for(var t=l(this.length),e=0,n=this.length;e<n;e++){var r=c(this[e],16);t[e]=1===r.length?"0"+r:r}return u(t,"")}})},9452:function(t,e,n){var r=n(6518),i=n(9306),s=n(6557),o=n(4328),a=n(4995),c=n(6395),u=a.get,l=a.has,h=a.set,f=c||!function(){try{WeakMap.prototype.getOrInsertComputed&&(new WeakMap).getOrInsertComputed(1,function(){throw 1})}catch(t){return t instanceof TypeError}}();r({target:"WeakMap",proto:!0,real:!0,forced:f},{getOrInsertComputed:function(t,e){if(c||s(this),o(t),i(e),l(this,t))return u(this,t);var n=e(t);return h(this,t,n),n}})},8454:function(t,e,n){var r=n(6518),i=n(4995),s=n(6395),o=i.get,a=i.has,c=i.set;r({target:"WeakMap",proto:!0,real:!0,forced:s},{getOrInsert:function(t,e){return a(this,t)?o(this,t):(c(this,t,e),e)}})},6368:function(t,e,n){var r=n(6518),i=n(4576),s=n(9225).clear;r({global:!0,bind:!0,enumerable:!0,forced:i.clearImmediate!==s},{clearImmediate:s})},4979:function(t,e,n){var r=n(6518),i=n(4576),s=n(7751),o=n(6980),a=n(4913).f,c=n(9297),u=n(679),l=n(3167),h=n(2603),f=n(5002),d=n(6193),p=n(3724),g=n(6395),m="DOMException",y=s("Error"),v=s(m),w=function(){u(this,b);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new v(e,n),i=new y(e);return i.name=m,a(r,"stack",o(1,d(i.stack,1))),l(r,this,w),r},b=w.prototype=v.prototype,_="stack"in new y(m),E="stack"in new v(1,2),T=v&&p&&Object.getOwnPropertyDescriptor(i,m),S=!!T&&!(T.writable&&T.configurable),A=_&&!S&&!E;r({global:!0,constructor:!0,forced:g||A},{DOMException:A?w:v});var C=s(m),I=C.prototype;if(I.constructor!==C)for(var R in g||a(I,"constructor",o(1,C)),f)if(c(f,R)){var x=f[R],O=x.s;c(C,O)||a(C,O,o(6,x.c))}},9848:function(t,e,n){n(6368),n(9309)},9309:function(t,e,n){var r=n(6518),i=n(4576),s=n(9225).set,o=n(9472),a=i.setImmediate?o(s,!1):s;r({global:!0,bind:!0,enumerable:!0,forced:i.setImmediate!==a},{setImmediate:a})},262:function(t,e,n){n.d(e,{MF:function(){return wt},j6:function(){return pt},xZ:function(){return gt},om:function(){return dt},Sx:function(){return _t},Wp:function(){return bt},KO:function(){return Et}});n(4114),n(8111),n(2489),n(1701),n(3579),n(5367),n(2731);var r=n(798),i=n(6189),s=n(2455);n(4423),n(8454),n(9452),n(4979);const o=(t,e)=>e.some(e=>t instanceof e);let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(E(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)});return e.then(e=>{e instanceof IDBCursor&&h.set(e,t)}).catch(()=>{}),g.set(e,t),e}function y(t){if(f.has(t))return;const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)});f.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function _(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&y(t),o(t,u())?new Proxy(t,v):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=_(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function S(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction),t)}),n&&o.addEventListener("blocked",t=>n(t.oldVersion,t.newVersion,t)),a.then(t=>{s&&t.addEventListener("close",()=>s()),i&&t.addEventListener("versionchange",t=>i(t.oldVersion,t.newVersion,t))}).catch(()=>{}),a}const A=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],I=new Map;function R(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(I.get(e))return I.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!A.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return I.set(e,s),s}w(t=>({...t,get:(e,n,r)=>R(e,n)||t.get(e,n,r),has:(e,n)=>!!R(e,n)||t.has(e,n)}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(O(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function O(t){const e=t.getComponent();return"VERSION"===e?.type}const N="@firebase/app",k="0.14.11",D=new i.Vy("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",F="@firebase/app-check",V="@firebase/auth",j="@firebase/auth-compat",B="@firebase/database",$="@firebase/data-connect",q="@firebase/database-compat",z="@firebase/functions",G="@firebase/functions-compat",H="@firebase/installations",K="@firebase/installations-compat",W="@firebase/messaging",Q="@firebase/messaging-compat",X="@firebase/performance",Y="@firebase/performance-compat",J="@firebase/remote-config",Z="@firebase/remote-config-compat",tt="@firebase/storage",et="@firebase/storage-compat",nt="@firebase/firestore",rt="@firebase/ai",it="@firebase/firestore-compat",st="firebase",ot="12.12.0",at="[DEFAULT]",ct={[N]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[F]:"fire-app-check",[U]:"fire-app-check-compat",[V]:"fire-auth",[j]:"fire-auth-compat",[B]:"fire-rtdb",[$]:"fire-data-connect",[q]:"fire-rtdb-compat",[z]:"fire-fn",[G]:"fire-fn-compat",[H]:"fire-iid",[K]:"fire-iid-compat",[W]:"fire-fcm",[Q]:"fire-fcm-compat",[X]:"fire-perf",[Y]:"fire-perf-compat",[J]:"fire-rc",[Z]:"fire-rc-compat",[tt]:"fire-gcs",[et]:"fire-gcs-compat",[nt]:"fire-fst",[it]:"fire-fst-compat",[rt]:"fire-vertex","fire-js":"fire-js",[st]:"fire-js-all"},ut=new Map,lt=new Map,ht=new Map;function ft(t,e){try{t.container.addComponent(e)}catch(n){D.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dt(t){const e=t.name;if(ht.has(e))return D.debug(`There were multiple attempts to register component ${e}.`),!1;ht.set(e,t);for(const n of ut.values())ft(n,t);for(const n of lt.values())ft(n,t);return!0}function pt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gt(t){return null!==t&&void 0!==t&&void 0!==t.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mt={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},yt=new s.FA("app","Firebase",mt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wt=ot;function bt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i={name:at,automaticDataCollectionEnabled:!0,...e},o=i.name;if("string"!==typeof o||!o)throw yt.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw yt.create("no-options");const a=ut.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw yt.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const r of ht.values())c.addComponent(r);const u=new vt(n,i,c);return ut.set(o,u),u}function _t(t=at){const e=ut.get(t);if(!e&&t===at&&(0,s.T9)())return bt();if(!e)throw yt.create("no-app",{appName:t});return e}function Et(t,e,n){let i=ct[t]??t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void D.warn(t.join(" "))}dt(new r.uA(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tt="firebase-heartbeat-database",St=1,At="firebase-heartbeat-store";let Ct=null;function It(){return Ct||(Ct=S(Tt,St,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(At)}catch(n){console.warn(n)}}}}).catch(t=>{throw yt.create("idb-open",{originalErrorMessage:t.message})})),Ct}async function Rt(t){try{const e=await It(),n=e.transaction(At),r=await n.objectStore(At).get(Ot(t));return await n.done,r}catch(e){if(e instanceof s.g)D.warn(e.message);else{const t=yt.create("idb-get",{originalErrorMessage:e?.message});D.warn(t.message)}}}async function xt(t,e){try{const n=await It(),r=n.transaction(At,"readwrite"),i=r.objectStore(At);await i.put(e,Ot(t)),await r.done}catch(n){if(n instanceof s.g)D.warn(n.message);else{const t=yt.create("idb-set",{originalErrorMessage:n?.message});D.warn(t.message)}}}function Ot(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=1024,kt=30;class Dt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Mt(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Pt();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(t=>t.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats.length>kt){const t=Ft(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(t,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){D.warn(t)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const t=Pt(),{heartbeatsToSend:e,unsentEntries:n}=Lt(this._heartbeatsCache.heartbeats),r=(0,s.Uj)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return D.warn(t),""}}}function Pt(){const t=new Date;return t.toISOString().substring(0,10)}function Lt(t,e=Nt){const n=[];let r=t.slice();for(const i of t){const t=n.find(t=>t.agent===i.agent);if(t){if(t.dates.push(i.date),Ut(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ut(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Mt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then(()=>!0).catch(()=>!1)}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Rt(this.app);return t?.heartbeats?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){const e=await this._canUseIndexedDBPromise;if(e){const e=await this.read();return xt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){const e=await this._canUseIndexedDBPromise;if(e){const e=await this.read();return xt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:[...e.heartbeats,...t.heartbeats]})}}}function Ut(t){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:t})).length}function Ft(t){if(0===t.length)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t){dt(new r.uA("platform-logger",t=>new x(t),"PRIVATE")),dt(new r.uA("heartbeat",t=>new Dt(t),"PRIVATE")),Et(N,k,t),Et(N,k,"esm2020"),Et("fire-js","")}Vt("")},798:function(t,e,n){n.d(e,{h1:function(){return u},uA:function(){return i}});n(8111),n(2489),n(1701),n(5367),n(2731),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698);var r=n(2455);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.cY;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),n=t?.optional??!1;if(!this.isInitialized(e)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:e})}catch(r){if(n)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),r=this.onInitCallbacks.get(n)??new Set;r.add(t),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&t(i,n),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},6189:function(t,e,n){n.d(e,{$b:function(){return i},Vy:function(){return u}});n(4114),n(8111),n(2489),n(1701);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},4373:function(t,e,n){n.d(e,{A:function(){return Sn}});var r={};n.r(r),n.d(r,{hasBrowserEnv:function(){return Bt},hasStandardBrowserEnv:function(){return qt},hasStandardBrowserWebWorkerEnv:function(){return zt},navigator:function(){return $t},origin:function(){return Gt}});n(4114),n(8111),n(7588),n(9577),n(6632),n(4226),n(9486),n(456),n(9848);function i(t,e){return function(){return t.apply(e,arguments)}}const{toString:s}=Object.prototype,{getPrototypeOf:o}=Object,{iterator:a,toStringTag:c}=Symbol,u=(t=>e=>{const n=s.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),l=t=>(t=t.toLowerCase(),e=>u(e)===t),h=t=>e=>typeof e===t,{isArray:f}=Array,d=h("undefined");function p(t){return null!==t&&!d(t)&&null!==t.constructor&&!d(t.constructor)&&v(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const g=l("ArrayBuffer");function m(t){let e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&g(t.buffer),e}const y=h("string"),v=h("function"),w=h("number"),b=t=>null!==t&&"object"===typeof t,_=t=>!0===t||!1===t,E=t=>{if("object"!==u(t))return!1;const e=o(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(c in t)&&!(a in t)},T=t=>{if(!b(t)||p(t))return!1;try{return 0===Object.keys(t).length&&Object.getPrototypeOf(t)===Object.prototype}catch(e){return!1}},S=l("Date"),A=l("File"),C=t=>!(!t||"undefined"===typeof t.uri),I=t=>t&&"undefined"!==typeof t.getParts,R=l("Blob"),x=l("FileList"),O=t=>b(t)&&v(t.pipe);function N(){return"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const k=N(),D="undefined"!==typeof k.FormData?k.FormData:void 0,P=t=>{let e;return t&&(D&&t instanceof D||v(t.append)&&("formdata"===(e=u(t))||"object"===e&&v(t.toString)&&"[object FormData]"===t.toString()))},L=l("URLSearchParams"),[M,U,F,V]=["ReadableStream","Request","Response","Headers"].map(l),j=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function B(t,e,{allOwnKeys:n=!1}={}){if(null===t||"undefined"===typeof t)return;let r,i;if("object"!==typeof t&&(t=[t]),f(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{if(p(t))return;const i=n?Object.getOwnPropertyNames(t):Object.keys(t),s=i.length;let o;for(r=0;r<s;r++)o=i[r],e.call(null,t[o],o,t)}}function $(t,e){if(p(t))return null;e=e.toLowerCase();const n=Object.keys(t);let r,i=n.length;while(i-- >0)if(r=n[i],e===r.toLowerCase())return r;return null}const q=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:n.g)(),z=t=>!d(t)&&t!==q;function G(){const{caseless:t,skipUndefined:e}=z(this)&&this||{},n={},r=(r,i)=>{if("__proto__"===i||"constructor"===i||"prototype"===i)return;const s=t&&$(n,i)||i;E(n[s])&&E(r)?n[s]=G(n[s],r):E(r)?n[s]=G({},r):f(r)?n[s]=r.slice():e&&d(r)||(n[s]=r)};for(let i=0,s=arguments.length;i<s;i++)arguments[i]&&B(arguments[i],r);return n}const H=(t,e,n,{allOwnKeys:r}={})=>(B(e,(e,r)=>{n&&v(e)?Object.defineProperty(t,r,{value:i(e,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,r,{value:e,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),t),K=t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),W=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Q=(t,e,n,r)=>{let i,s,a;const c={};if(e=e||{},null==t)return e;do{i=Object.getOwnPropertyNames(t),s=i.length;while(s-- >0)a=i[s],r&&!r(a,t,e)||c[a]||(e[a]=t[a],c[a]=!0);t=!1!==n&&o(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},X=(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return-1!==r&&r===n},Y=t=>{if(!t)return null;if(f(t))return t;let e=t.length;if(!w(e))return null;const n=new Array(e);while(e-- >0)n[e]=t[e];return n},J=(t=>e=>t&&e instanceof t)("undefined"!==typeof Uint8Array&&o(Uint8Array)),Z=(t,e)=>{const n=t&&t[a],r=n.call(t);let i;while((i=r.next())&&!i.done){const n=i.value;e.call(t,n[0],n[1])}},tt=(t,e)=>{let n;const r=[];while(null!==(n=t.exec(e)))r.push(n);return r},et=l("HTMLFormElement"),nt=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,e,n){return e.toUpperCase()+n}),rt=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),it=l("RegExp"),st=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};B(n,(n,i)=>{let s;!1!==(s=e(n,i,t))&&(r[i]=s||n)}),Object.defineProperties(t,r)},ot=t=>{st(t,(e,n)=>{if(v(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=t[n];v(r)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))})},at=(t,e)=>{const n={},r=t=>{t.forEach(t=>{n[t]=!0})};return f(t)?r(t):r(String(t).split(e)),n},ct=()=>{},ut=(t,e)=>null!=t&&Number.isFinite(t=+t)?t:e;function lt(t){return!!(t&&v(t.append)&&"FormData"===t[c]&&t[a])}const ht=t=>{const e=new Array(10),n=(t,r)=>{if(b(t)){if(e.indexOf(t)>=0)return;if(p(t))return t;if(!("toJSON"in t)){e[r]=t;const i=f(t)?[]:{};return B(t,(t,e)=>{const s=n(t,r+1);!d(s)&&(i[e]=s)}),e[r]=void 0,i}}return t};return n(t,0)},ft=l("AsyncFunction"),dt=t=>t&&(b(t)||v(t))&&v(t.then)&&v(t.catch),pt=((t,e)=>t?setImmediate:e?((t,e)=>(q.addEventListener("message",({source:n,data:r})=>{n===q&&r===t&&e.length&&e.shift()()},!1),n=>{e.push(n),q.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))("function"===typeof setImmediate,v(q.postMessage)),gt="undefined"!==typeof queueMicrotask?queueMicrotask.bind(q):"undefined"!==typeof process&&process.nextTick||pt,mt=t=>null!=t&&v(t[a]);var yt={isArray:f,isArrayBuffer:g,isBuffer:p,isFormData:P,isArrayBufferView:m,isString:y,isNumber:w,isBoolean:_,isObject:b,isPlainObject:E,isEmptyObject:T,isReadableStream:M,isRequest:U,isResponse:F,isHeaders:V,isUndefined:d,isDate:S,isFile:A,isReactNativeBlob:C,isReactNative:I,isBlob:R,isRegExp:it,isFunction:v,isStream:O,isURLSearchParams:L,isTypedArray:J,isFileList:x,forEach:B,merge:G,extend:H,trim:j,stripBOM:K,inherits:W,toFlatObject:Q,kindOf:u,kindOfTest:l,endsWith:X,toArray:Y,forEachEntry:Z,matchAll:tt,isHTMLForm:et,hasOwnProperty:rt,hasOwnProp:rt,reduceDescriptors:st,freezeMethods:ot,toObjectSet:at,toCamelCase:nt,noop:ct,toFiniteNumber:ut,findKey:$,global:q,isContextDefined:z,isSpecCompliantForm:lt,toJSONObject:ht,isAsyncFn:ft,isThenable:dt,setImmediate:pt,asap:gt,isIterable:mt};n(1701),n(3579),n(1806);class vt extends Error{static from(t,e,n,r,i,s){const o=new vt(t.message,e||t.code,n,r,i);return o.cause=t,o.name=t.name,null!=t.status&&null==o.status&&(o.status=t.status),s&&Object.assign(o,s),o}constructor(t,e,n,r,i){super(t),Object.defineProperty(this,"message",{value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:yt.toJSONObject(this.config),code:this.code,status:this.status}}}vt.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE",vt.ERR_BAD_OPTION="ERR_BAD_OPTION",vt.ECONNABORTED="ECONNABORTED",vt.ETIMEDOUT="ETIMEDOUT",vt.ERR_NETWORK="ERR_NETWORK",vt.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS",vt.ERR_DEPRECATED="ERR_DEPRECATED",vt.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE",vt.ERR_BAD_REQUEST="ERR_BAD_REQUEST",vt.ERR_CANCELED="ERR_CANCELED",vt.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT",vt.ERR_INVALID_URL="ERR_INVALID_URL";var wt=vt,bt=null;function _t(t){return yt.isPlainObject(t)||yt.isArray(t)}function Et(t){return yt.endsWith(t,"[]")?t.slice(0,-2):t}function Tt(t,e,n){return t?t.concat(e).map(function(t,e){return t=Et(t),!n&&e?"["+t+"]":t}).join(n?".":""):e}function St(t){return yt.isArray(t)&&!t.some(_t)}const At=yt.toFlatObject(yt,{},null,function(t){return/^is[A-Z]/.test(t)});function Ct(t,e,n){if(!yt.isObject(t))throw new TypeError("target must be an object");e=e||new(bt||FormData),n=yt.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(t,e){return!yt.isUndefined(e[t])});const r=n.metaTokens,i=n.visitor||l,s=n.dots,o=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,c=a&&yt.isSpecCompliantForm(e);if(!yt.isFunction(i))throw new TypeError("visitor must be a function");function u(t){if(null===t)return"";if(yt.isDate(t))return t.toISOString();if(yt.isBoolean(t))return t.toString();if(!c&&yt.isBlob(t))throw new wt("Blob is not supported. Use a Buffer instead.");return yt.isArrayBuffer(t)||yt.isTypedArray(t)?c&&"function"===typeof Blob?new Blob([t]):Buffer.from(t):t}function l(t,n,i){let a=t;if(yt.isReactNative(e)&&yt.isReactNativeBlob(t))return e.append(Tt(i,n,s),u(t)),!1;if(t&&!i&&"object"===typeof t)if(yt.endsWith(n,"{}"))n=r?n:n.slice(0,-2),t=JSON.stringify(t);else if(yt.isArray(t)&&St(t)||(yt.isFileList(t)||yt.endsWith(n,"[]"))&&(a=yt.toArray(t)))return n=Et(n),a.forEach(function(t,r){!yt.isUndefined(t)&&null!==t&&e.append(!0===o?Tt([n],r,s):null===o?n:n+"[]",u(t))}),!1;return!!_t(t)||(e.append(Tt(i,n,s),u(t)),!1)}const h=[],f=Object.assign(At,{defaultVisitor:l,convertValue:u,isVisitable:_t});function d(t,n){if(!yt.isUndefined(t)){if(-1!==h.indexOf(t))throw Error("Circular reference detected in "+n.join("."));h.push(t),yt.forEach(t,function(t,r){const s=!(yt.isUndefined(t)||null===t)&&i.call(e,t,yt.isString(r)?r.trim():r,n,f);!0===s&&d(t,n?n.concat(r):[r])}),h.pop()}}if(!yt.isObject(t))throw new TypeError("data must be an object");return d(t),e}var It=Ct;function Rt(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(t){return e[t]})}function xt(t,e){this._pairs=[],t&&It(t,this,e)}const Ot=xt.prototype;Ot.append=function(t,e){this._pairs.push([t,e])},Ot.toString=function(t){const e=t?function(e){return t.call(this,e,Rt)}:Rt;return this._pairs.map(function(t){return e(t[0])+"="+e(t[1])},"").join("&")};var Nt=xt;function kt(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Dt(t,e,n){if(!e)return t;const r=n&&n.encode||kt,i=yt.isFunction(n)?{serialize:n}:n,s=i&&i.serialize;let o;if(o=s?s(e,i):yt.isURLSearchParams(e)?e.toString():new Nt(e,i).toString(r),o){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+o}return t}class Pt{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){yt.forEach(this.handlers,function(e){null!==e&&t(e)})}}var Lt=Pt,Mt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Ut="undefined"!==typeof URLSearchParams?URLSearchParams:Nt,Ft="undefined"!==typeof FormData?FormData:null,Vt="undefined"!==typeof Blob?Blob:null,jt={isBrowser:!0,classes:{URLSearchParams:Ut,FormData:Ft,Blob:Vt},protocols:["http","https","file","blob","url","data"]};const Bt="undefined"!==typeof window&&"undefined"!==typeof document,$t="object"===typeof navigator&&navigator||void 0,qt=Bt&&(!$t||["ReactNative","NativeScript","NS"].indexOf($t.product)<0),zt=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)(),Gt=Bt&&window.location.href||"http://localhost";var Ht={...r,...jt};function Kt(t,e){return It(t,new Ht.classes.URLSearchParams,{visitor:function(t,e,n,r){return Ht.isNode&&yt.isBuffer(t)?(this.append(e,t.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...e})}function Wt(t){return yt.matchAll(/\w+|\[(\w*)]/g,t).map(t=>"[]"===t[0]?"":t[1]||t[0])}function Qt(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function Xt(t){function e(t,n,r,i){let s=t[i++];if("__proto__"===s)return!0;const o=Number.isFinite(+s),a=i>=t.length;if(s=!s&&yt.isArray(r)?r.length:s,a)return yt.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!o;r[s]&&yt.isObject(r[s])||(r[s]=[]);const c=e(t,n,r[s],i);return c&&yt.isArray(r[s])&&(r[s]=Qt(r[s])),!o}if(yt.isFormData(t)&&yt.isFunction(t.entries)){const n={};return yt.forEachEntry(t,(t,r)=>{e(Wt(t),r,n,0)}),n}return null}var Yt=Xt;function Jt(t,e,n){if(yt.isString(t))try{return(e||JSON.parse)(t),yt.trim(t)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(t)}const Zt={transitional:Mt,adapter:["xhr","http","fetch"],transformRequest:[function(t,e){const n=e.getContentType()||"",r=n.indexOf("application/json")>-1,i=yt.isObject(t);i&&yt.isHTMLForm(t)&&(t=new FormData(t));const s=yt.isFormData(t);if(s)return r?JSON.stringify(Yt(t)):t;if(yt.isArrayBuffer(t)||yt.isBuffer(t)||yt.isStream(t)||yt.isFile(t)||yt.isBlob(t)||yt.isReadableStream(t))return t;if(yt.isArrayBufferView(t))return t.buffer;if(yt.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let o;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Kt(t,this.formSerializer).toString();if((o=yt.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return It(o?{"files[]":t}:t,e&&new e,this.formSerializer)}}return i||r?(e.setContentType("application/json",!1),Jt(t)):t}],transformResponse:[function(t){const e=this.transitional||Zt.transitional,n=e&&e.forcedJSONParsing,r="json"===this.responseType;if(yt.isResponse(t)||yt.isReadableStream(t))return t;if(t&&yt.isString(t)&&(n&&!this.responseType||r)){const n=e&&e.silentJSONParsing,s=!n&&r;try{return JSON.parse(t,this.parseReviver)}catch(i){if(s){if("SyntaxError"===i.name)throw wt.from(i,wt.ERR_BAD_RESPONSE,this,null,this.response);throw i}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ht.classes.FormData,Blob:Ht.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};yt.forEach(["delete","get","head","post","put","patch"],t=>{Zt.headers[t]={}});var te=Zt;const ee=yt.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var ne=t=>{const e={};let n,r,i;return t&&t.split("\n").forEach(function(t){i=t.indexOf(":"),n=t.substring(0,i).trim().toLowerCase(),r=t.substring(i+1).trim(),!n||e[n]&&ee[n]||("set-cookie"===n?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e};(Object.getOwnPropertyDescriptor(ne,"name")||{}).writable||Object.defineProperty(ne,"name",{value:"default",configurable:!0});const re=Symbol("internals"),ie=t=>!/[\r\n]/.test(t);function se(t,e){if(!1!==t&&null!=t)if(yt.isArray(t))t.forEach(t=>se(t,e));else if(!ie(String(t)))throw new Error(`Invalid character in header content ["${e}"]`)}function oe(t){return t&&String(t).trim().toLowerCase()}function ae(t){let e=t.length;while(e>0){const n=t.charCodeAt(e-1);if(10!==n&&13!==n)break;e-=1}return e===t.length?t:t.slice(0,e)}function ce(t){return!1===t||null==t?t:yt.isArray(t)?t.map(ce):ae(String(t))}function ue(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(t))e[r[1]]=r[2];return e}const le=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function he(t,e,n,r,i){return yt.isFunction(r)?r.call(this,e,n):(i&&(e=n),yt.isString(e)?yt.isString(r)?-1!==e.indexOf(r):yt.isRegExp(r)?r.test(e):void 0:void 0)}function fe(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,n)=>e.toUpperCase()+n)}function de(t,e){const n=yt.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(t,n,i){return this[r].call(this,e,t,n,i)},configurable:!0})})}class pe{constructor(t){t&&this.set(t)}set(t,e,n){const r=this;function i(t,e,n){const i=oe(e);if(!i)throw new Error("header name must be a non-empty string");const s=yt.findKey(r,i);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(se(t,e),r[s||e]=ce(t))}const s=(t,e)=>yt.forEach(t,(t,n)=>i(t,n,e));if(yt.isPlainObject(t)||t instanceof this.constructor)s(t,e);else if(yt.isString(t)&&(t=t.trim())&&!le(t))s(ne(t),e);else if(yt.isObject(t)&&yt.isIterable(t)){let n,r,i={};for(const e of t){if(!yt.isArray(e))throw TypeError("Object iterator must return a key-value pair");i[r=e[0]]=(n=i[r])?yt.isArray(n)?[...n,e[1]]:[n,e[1]]:e[1]}s(i,e)}else null!=t&&i(e,t,n);return this}get(t,e){if(t=oe(t),t){const n=yt.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return ue(t);if(yt.isFunction(e))return e.call(this,t,n);if(yt.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=oe(t),t){const n=yt.findKey(this,t);return!(!n||void 0===this[n]||e&&!he(this,this[n],n,e))}return!1}delete(t,e){const n=this;let r=!1;function i(t){if(t=oe(t),t){const i=yt.findKey(n,t);!i||e&&!he(n,n[i],i,e)||(delete n[i],r=!0)}}return yt.isArray(t)?t.forEach(i):i(t),r}clear(t){const e=Object.keys(this);let n=e.length,r=!1;while(n--){const i=e[n];t&&!he(this,this[i],i,t,!0)||(delete this[i],r=!0)}return r}normalize(t){const e=this,n={};return yt.forEach(this,(r,i)=>{const s=yt.findKey(n,i);if(s)return e[s]=ce(r),void delete e[i];const o=t?fe(i):String(i).trim();o!==i&&delete e[i],e[o]=ce(r),n[o]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return yt.forEach(this,(n,r)=>{null!=n&&!1!==n&&(e[r]=t&&yt.isArray(n)?n.join(", "):n)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join("\n")}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach(t=>n.set(t)),n}static accessor(t){const e=this[re]=this[re]={accessors:{}},n=e.accessors,r=this.prototype;function i(t){const e=oe(t);n[e]||(de(r,t),n[e]=!0)}return yt.isArray(t)?t.forEach(i):i(t),this}}pe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),yt.reduceDescriptors(pe.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(t){this[n]=t}}}),yt.freezeMethods(pe);var ge=pe;function me(t,e){const n=this||te,r=e||n,i=ge.from(r.headers);let s=r.data;return yt.forEach(t,function(t){s=t.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function ye(t){return!(!t||!t.__CANCEL__)}class ve extends wt{constructor(t,e,n){super(null==t?"canceled":t,wt.ERR_CANCELED,e,n),this.name="CanceledError",this.__CANCEL__=!0}}var we=ve;function be(t,e,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(new wt("Request failed with status code "+n.status,[wt.ERR_BAD_REQUEST,wt.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}function _e(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Ee(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i,s=0,o=0;return e=void 0!==e?e:1e3,function(a){const c=Date.now(),u=r[o];i||(i=c),n[s]=a,r[s]=c;let l=o,h=0;while(l!==s)h+=n[l++],l%=t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),c-i<e)return;const f=u&&c-u;return f?Math.round(1e3*h/f):void 0}}var Te=Ee;function Se(t,e){let n,r,i=0,s=1e3/e;const o=(e,s=Date.now())=>{i=s,n=null,r&&(clearTimeout(r),r=null),t(...e)},a=(...t)=>{const e=Date.now(),a=e-i;a>=s?o(t,e):(n=t,r||(r=setTimeout(()=>{r=null,o(n)},s-a)))},c=()=>n&&o(n);return[a,c]}var Ae=Se;const Ce=(t,e,n=3)=>{let r=0;const i=Te(50,250);return Ae(n=>{const s=n.loaded,o=n.lengthComputable?n.total:void 0,a=s-r,c=i(a),u=s<=o;r=s;const l={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&u?(o-s)/c:void 0,event:n,lengthComputable:null!=o,[e?"download":"upload"]:!0};t(l)},n)},Ie=(t,e)=>{const n=null!=t;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Re=t=>(...e)=>yt.asap(()=>t(...e));n(4423),n(4979);var xe=Ht.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Ht.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Ht.origin),Ht.navigator&&/(msie|trident)/i.test(Ht.navigator.userAgent)):()=>!0,Oe=Ht.hasStandardBrowserEnv?{write(t,e,n,r,i,s,o){if("undefined"===typeof document)return;const a=[`${t}=${encodeURIComponent(e)}`];yt.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),yt.isString(r)&&a.push(`path=${r}`),yt.isString(i)&&a.push(`domain=${i}`),!0===s&&a.push("secure"),yt.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if("undefined"===typeof document)return null;const e=document.cookie.match(new RegExp("(?:^|; )"+t+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Ne(t){return"string"===typeof t&&/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function ke(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function De(t,e,n){let r=!Ne(e);return t&&(r||0==n)?ke(t,e):e}const Pe=t=>t instanceof ge?{...t}:t;function Le(t,e){e=e||{};const n={};function r(t,e,n,r){return yt.isPlainObject(t)&&yt.isPlainObject(e)?yt.merge.call({caseless:r},t,e):yt.isPlainObject(e)?yt.merge({},e):yt.isArray(e)?e.slice():e}function i(t,e,n,i){return yt.isUndefined(e)?yt.isUndefined(t)?void 0:r(void 0,t,n,i):r(t,e,n,i)}function s(t,e){if(!yt.isUndefined(e))return r(void 0,e)}function o(t,e){return yt.isUndefined(e)?yt.isUndefined(t)?void 0:r(void 0,t):r(void 0,e)}function a(n,i,s){return s in e?r(n,i):s in t?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(t,e,n)=>i(Pe(t),Pe(e),n,!0)};return yt.forEach(Object.keys({...t,...e}),function(r){if("__proto__"===r||"constructor"===r||"prototype"===r)return;const s=yt.hasOwnProp(c,r)?c[r]:i,o=s(t[r],e[r],r);yt.isUndefined(o)&&s!==a||(n[r]=o)}),n}var Me=t=>{const e=Le({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:a}=e;if(e.headers=o=ge.from(o),e.url=Dt(De(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),yt.isFormData(n))if(Ht.hasStandardBrowserEnv||Ht.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(yt.isFunction(n.getHeaders)){const t=n.getHeaders(),e=["content-type","content-length"];Object.entries(t).forEach(([t,n])=>{e.includes(t.toLowerCase())&&o.set(t,n)})}if(Ht.hasStandardBrowserEnv&&(r&&yt.isFunction(r)&&(r=r(e)),r||!1!==r&&xe(e.url))){const t=i&&s&&Oe.read(s);t&&o.set(i,t)}return e};(Object.getOwnPropertyDescriptor(Me,"name")||{}).writable||Object.defineProperty(Me,"name",{value:"default",configurable:!0});const Ue="undefined"!==typeof XMLHttpRequest;var Fe=Ue&&function(t){return new Promise(function(e,n){const r=Me(t);let i=r.data;const s=ge.from(r.headers).normalize();let o,a,c,u,l,{responseType:h,onUploadProgress:f,onDownloadProgress:d}=r;function p(){u&&u(),l&&l(),r.cancelToken&&r.cancelToken.unsubscribe(o),r.signal&&r.signal.removeEventListener("abort",o)}let g=new XMLHttpRequest;function m(){if(!g)return;const r=ge.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders()),i=h&&"text"!==h&&"json"!==h?g.response:g.responseText,s={data:i,status:g.status,statusText:g.statusText,headers:r,config:t,request:g};be(function(t){e(t),p()},function(t){n(t),p()},s),g=null}g.open(r.method.toUpperCase(),r.url,!0),g.timeout=r.timeout,"onloadend"in g?g.onloadend=m:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(m)},g.onabort=function(){g&&(n(new wt("Request aborted",wt.ECONNABORTED,t,g)),g=null)},g.onerror=function(e){const r=e&&e.message?e.message:"Network Error",i=new wt(r,wt.ERR_NETWORK,t,g);i.event=e||null,n(i),g=null},g.ontimeout=function(){let e=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const i=r.transitional||Mt;r.timeoutErrorMessage&&(e=r.timeoutErrorMessage),n(new wt(e,i.clarifyTimeoutError?wt.ETIMEDOUT:wt.ECONNABORTED,t,g)),g=null},void 0===i&&s.setContentType(null),"setRequestHeader"in g&&yt.forEach(s.toJSON(),function(t,e){g.setRequestHeader(e,t)}),yt.isUndefined(r.withCredentials)||(g.withCredentials=!!r.withCredentials),h&&"json"!==h&&(g.responseType=r.responseType),d&&([c,l]=Ce(d,!0),g.addEventListener("progress",c)),f&&g.upload&&([a,u]=Ce(f),g.upload.addEventListener("progress",a),g.upload.addEventListener("loadend",u)),(r.cancelToken||r.signal)&&(o=e=>{g&&(n(!e||e.type?new we(null,t,g):e),g.abort(),g=null)},r.cancelToken&&r.cancelToken.subscribe(o),r.signal&&(r.signal.aborted?o():r.signal.addEventListener("abort",o)));const y=_e(r.url);y&&-1===Ht.protocols.indexOf(y)?n(new wt("Unsupported protocol "+y+":",wt.ERR_BAD_REQUEST,t)):g.send(i||null)})};n(5367),n(2731),n(2489);const Ve=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let n,r=new AbortController;const i=function(t){if(!n){n=!0,o();const e=t instanceof Error?t:this.reason;r.abort(e instanceof wt?e:new we(e instanceof Error?e.message:e))}};let s=e&&setTimeout(()=>{s=null,i(new wt(`timeout of ${e}ms exceeded`,wt.ETIMEDOUT))},e);const o=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach(t=>{t.unsubscribe?t.unsubscribe(i):t.removeEventListener("abort",i)}),t=null)};t.forEach(t=>t.addEventListener("abort",i));const{signal:a}=r;return a.unsubscribe=()=>yt.asap(o),a}};var je=Ve;const Be=function*(t,e){let n=t.byteLength;if(!e||n<e)return void(yield t);let r,i=0;while(i<n)r=i+e,yield t.slice(i,r),i=r},$e=async function*(t,e){for await(const n of qe(t))yield*Be(n,e)},qe=async function*(t){if(t[Symbol.asyncIterator])return void(yield*t);const e=t.getReader();try{for(;;){const{done:t,value:n}=await e.read();if(t)break;yield n}}finally{await e.cancel()}},ze=(t,e,n,r)=>{const i=$e(t,e);let s,o=0,a=t=>{s||(s=!0,r&&r(t))};return new ReadableStream({async pull(t){try{const{done:e,value:r}=await i.next();if(e)return a(),void t.close();let s=r.byteLength;if(n){let t=o+=s;n(t)}t.enqueue(new Uint8Array(r))}catch(e){throw a(e),e}},cancel(t){return a(t),i.return()}},{highWaterMark:2})},Ge=65536,{isFunction:He}=yt,Ke=(({Request:t,Response:e})=>({Request:t,Response:e}))(yt.global),{ReadableStream:We,TextEncoder:Qe}=yt.global,Xe=(t,...e)=>{try{return!!t(...e)}catch(n){return!1}},Ye=t=>{t=yt.merge.call({skipUndefined:!0},Ke,t);const{fetch:e,Request:n,Response:r}=t,i=e?He(e):"function"===typeof fetch,s=He(n),o=He(r);if(!i)return!1;const a=i&&He(We),c=i&&("function"===typeof Qe?(t=>e=>t.encode(e))(new Qe):async t=>new Uint8Array(await new n(t).arrayBuffer())),u=s&&a&&Xe(()=>{let t=!1;const e=new We,r=new n(Ht.origin,{body:e,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return e.cancel(),t&&!r}),l=o&&a&&Xe(()=>yt.isReadableStream(new r("").body)),h={stream:l&&(t=>t.body)};i&&(()=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!h[t]&&(h[t]=(e,n)=>{let r=e&&e[t];if(r)return r.call(e);throw new wt(`Response type '${t}' is not supported`,wt.ERR_NOT_SUPPORT,n)})})})();const f=async t=>{if(null==t)return 0;if(yt.isBlob(t))return t.size;if(yt.isSpecCompliantForm(t)){const e=new n(Ht.origin,{method:"POST",body:t});return(await e.arrayBuffer()).byteLength}return yt.isArrayBufferView(t)||yt.isArrayBuffer(t)?t.byteLength:(yt.isURLSearchParams(t)&&(t+=""),yt.isString(t)?(await c(t)).byteLength:void 0)},d=async(t,e)=>{const n=yt.toFiniteNumber(t.getContentLength());return null==n?f(e):n};return async t=>{let{url:i,method:o,data:a,signal:c,cancelToken:f,timeout:p,onDownloadProgress:g,onUploadProgress:m,responseType:y,headers:v,withCredentials:w="same-origin",fetchOptions:b}=Me(t),_=e||fetch;y=y?(y+"").toLowerCase():"text";let E=je([c,f&&f.toAbortSignal()],p),T=null;const S=E&&E.unsubscribe&&(()=>{E.unsubscribe()});let A;try{if(m&&u&&"get"!==o&&"head"!==o&&0!==(A=await d(v,a))){let t,e=new n(i,{method:"POST",body:a,duplex:"half"});if(yt.isFormData(a)&&(t=e.headers.get("content-type"))&&v.setContentType(t),e.body){const[t,n]=Ie(A,Ce(Re(m)));a=ze(e.body,Ge,t,n)}}yt.isString(w)||(w=w?"include":"omit");const e=s&&"credentials"in n.prototype,c={...b,signal:E,method:o.toUpperCase(),headers:v.normalize().toJSON(),body:a,duplex:"half",credentials:e?w:void 0};T=s&&new n(i,c);let f=await(s?_(T,b):_(i,c));const p=l&&("stream"===y||"response"===y);if(l&&(g||p&&S)){const t={};["status","statusText","headers"].forEach(e=>{t[e]=f[e]});const e=yt.toFiniteNumber(f.headers.get("content-length")),[n,i]=g&&Ie(e,Ce(Re(g),!0))||[];f=new r(ze(f.body,Ge,n,()=>{i&&i(),S&&S()}),t)}y=y||"text";let C=await h[yt.findKey(h,y)||"text"](f,t);return!p&&S&&S(),await new Promise((e,n)=>{be(e,n,{data:C,headers:ge.from(f.headers),status:f.status,statusText:f.statusText,config:t,request:T})})}catch(C){if(S&&S(),C&&"TypeError"===C.name&&/Load failed|fetch/i.test(C.message))throw Object.assign(new wt("Network Error",wt.ERR_NETWORK,t,T,C&&C.response),{cause:C.cause||C});throw wt.from(C,C&&C.code,t,T,C&&C.response)}}},Je=new Map,Ze=t=>{let e=t&&t.env||{};const{fetch:n,Request:r,Response:i}=e,s=[r,i,n];let o,a,c=s.length,u=c,l=Je;while(u--)o=s[u],a=l.get(o),void 0===a&&l.set(o,a=u?new Map:Ye(e)),l=a;return a};Ze();const tn={http:bt,xhr:Fe,fetch:{get:Ze}};yt.forEach(tn,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(n){}Object.defineProperty(t,"adapterName",{value:e})}});const en=t=>`- ${t}`,nn=t=>yt.isFunction(t)||null===t||!1===t;function rn(t,e){t=yt.isArray(t)?t:[t];const{length:n}=t;let r,i;const s={};for(let o=0;o<n;o++){let n;if(r=t[o],i=r,!nn(r)&&(i=tn[(n=String(r)).toLowerCase()],void 0===i))throw new wt(`Unknown adapter '${n}'`);if(i&&(yt.isFunction(i)||(i=i.get(e))))break;s[n||"#"+o]=i}if(!i){const t=Object.entries(s).map(([t,e])=>`adapter ${t} `+(!1===e?"is not supported by the environment":"is not available in the build"));let e=n?t.length>1?"since :\n"+t.map(en).join("\n"):" "+en(t[0]):"as no adapter specified";throw new wt("There is no suitable adapter to dispatch the request "+e,"ERR_NOT_SUPPORT")}return i}var sn={getAdapter:rn,adapters:tn};function on(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new we(null,t)}function an(t){on(t),t.headers=ge.from(t.headers),t.data=me.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);const e=sn.getAdapter(t.adapter||te.adapter,t);return e(t).then(function(e){return on(t),e.data=me.call(t,t.transformResponse,e),e.headers=ge.from(e.headers),e},function(e){return ye(e)||(on(t),e&&e.response&&(e.response.data=me.call(t,t.transformResponse,e.response),e.response.headers=ge.from(e.response.headers))),Promise.reject(e)})}const cn="1.15.0",un={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{un[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}});const ln={};function hn(t,e,n){if("object"!==typeof t)throw new wt("options must be an object",wt.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;while(i-- >0){const s=r[i],o=e[s];if(o){const e=t[s],n=void 0===e||o(e,s,t);if(!0!==n)throw new wt("option "+s+" must be "+n,wt.ERR_BAD_OPTION_VALUE);continue}if(!0!==n)throw new wt("Unknown option "+s,wt.ERR_BAD_OPTION)}}un.transitional=function(t,e,n){function r(t,e){return"[Axios v"+cn+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,i,s)=>{if(!1===t)throw new wt(r(i," has been removed"+(e?" in "+e:"")),wt.ERR_DEPRECATED);return e&&!ln[i]&&(ln[i]=!0,console.warn(r(i," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,i,s)}},un.spelling=function(t){return(e,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};var fn={assertOptions:hn,validators:un};const dn=fn.validators;class pn{constructor(t){this.defaults=t||{},this.interceptors={request:new Lt,response:new Lt}}async request(t,e){try{return await this._request(t,e)}catch(n){if(n instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=new Error;const e=(()=>{if(!t.stack)return"";const e=t.stack.indexOf("\n");return-1===e?"":t.stack.slice(e+1)})();try{if(n.stack){if(e){const t=e.indexOf("\n"),r=-1===t?-1:e.indexOf("\n",t+1),i=-1===r?"":e.slice(r+1);String(n.stack).endsWith(i)||(n.stack+="\n"+e)}}else n.stack=e}catch(r){}}throw n}}_request(t,e){"string"===typeof t?(e=e||{},e.url=t):e=t||{},e=Le(this.defaults,e);const{transitional:n,paramsSerializer:r,headers:i}=e;void 0!==n&&fn.assertOptions(n,{silentJSONParsing:dn.transitional(dn.boolean),forcedJSONParsing:dn.transitional(dn.boolean),clarifyTimeoutError:dn.transitional(dn.boolean),legacyInterceptorReqResOrdering:dn.transitional(dn.boolean)},!1),null!=r&&(yt.isFunction(r)?e.paramsSerializer={serialize:r}:fn.assertOptions(r,{encode:dn.function,serialize:dn.function},!0)),void 0!==e.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?e.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:e.allowAbsoluteUrls=!0),fn.assertOptions(e,{baseUrl:dn.spelling("baseURL"),withXsrfToken:dn.spelling("withXSRFToken")},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase();let s=i&&yt.merge(i.common,i[e.method]);i&&yt.forEach(["delete","get","head","post","put","patch","common"],t=>{delete i[t]}),e.headers=ge.concat(s,i);const o=[];let a=!0;this.interceptors.request.forEach(function(t){if("function"===typeof t.runWhen&&!1===t.runWhen(e))return;a=a&&t.synchronous;const n=e.transitional||Mt,r=n&&n.legacyInterceptorReqResOrdering;r?o.unshift(t.fulfilled,t.rejected):o.push(t.fulfilled,t.rejected)});const c=[];let u;this.interceptors.response.forEach(function(t){c.push(t.fulfilled,t.rejected)});let l,h=0;if(!a){const t=[an.bind(this),void 0];t.unshift(...o),t.push(...c),l=t.length,u=Promise.resolve(e);while(h<l)u=u.then(t[h++],t[h++]);return u}l=o.length;let f=e;while(h<l){const t=o[h++],e=o[h++];try{f=t(f)}catch(d){e.call(this,d);break}}try{u=an.call(this,f)}catch(d){return Promise.reject(d)}h=0,l=c.length;while(h<l)u=u.then(c[h++],c[h++]);return u}getUri(t){t=Le(this.defaults,t);const e=De(t.baseURL,t.url,t.allowAbsoluteUrls);return Dt(e,t.params,t.paramsSerializer)}}yt.forEach(["delete","get","head","options"],function(t){pn.prototype[t]=function(e,n){return this.request(Le(n||{},{method:t,url:e,data:(n||{}).data}))}}),yt.forEach(["post","put","patch"],function(t){function e(e){return function(n,r,i){return this.request(Le(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}pn.prototype[t]=e(),pn.prototype[t+"Form"]=e(!0)});var gn=pn;class mn{constructor(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise(function(t){e=t});const n=this;this.promise.then(t=>{if(!n._listeners)return;let e=n._listeners.length;while(e-- >0)n._listeners[e](t);n._listeners=null}),this.promise.then=t=>{let e;const r=new Promise(t=>{n.subscribe(t),e=t}).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t(function(t,r,i){n.reason||(n.reason=new we(t,r,i),e(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}toAbortSignal(){const t=new AbortController,e=e=>{t.abort(e)};return this.subscribe(e),t.signal.unsubscribe=()=>this.unsubscribe(e),t.signal}static source(){let t;const e=new mn(function(e){t=e});return{token:e,cancel:t}}}var yn=mn;function vn(t){return function(e){return t.apply(null,e)}}function wn(t){return yt.isObject(t)&&!0===t.isAxiosError}const bn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(bn).forEach(([t,e])=>{bn[e]=t});var _n=bn;function En(t){const e=new gn(t),n=i(gn.prototype.request,e);return yt.extend(n,gn.prototype,e,{allOwnKeys:!0}),yt.extend(n,e,null,{allOwnKeys:!0}),n.create=function(e){return En(Le(t,e))},n}const Tn=En(te);Tn.Axios=gn,Tn.CanceledError=we,Tn.CancelToken=yn,Tn.isCancel=ye,Tn.VERSION=cn,Tn.toFormData=It,Tn.AxiosError=wt,Tn.Cancel=Tn.CanceledError,Tn.all=function(t){return Promise.all(t)},Tn.spread=vn,Tn.isAxiosError=wn,Tn.mergeConfig=Le,Tn.AxiosHeaders=ge,Tn.formToJSON=t=>Yt(yt.isHTMLForm(t)?new FormData(t):t),Tn.getAdapter=sn.getAdapter,Tn.HttpStatusCode=_n,Tn.default=Tn;var Sn=Tn},6400:function(t,e,n){n.d(e,{Wp:function(){return r.Wp}});var r=n(262),i="firebase",s="12.12.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(i,s,"app")},4289:function(t,e,n){n.d(e,{gS:function(){return _u},rJ:function(){return yc},kd:function(){return bu},H9:function(){return vc},x7:function(){return yu},GG:function(){return vu},aU:function(){return Tc},My:function(){return au},P:function(){return ru},BN:function(){return wu}});n(4114),n(8111),n(2489),n(7588),n(1701),n(5367),n(2731),n(8454),n(9452);var r,i,s=n(262),o=n(798),a=(n(4423),n(1148),n(116),n(8237),n(3579),n(1806),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(9577),n(6632),n(4226),n(9486),n(456),n(4979),n(2455)),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={};(function(){var t;
/** @license
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
         */function e(t,e){function n(){}n.prototype=e.prototype,t.F=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.D=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function o(t,e,n){n||(n=0);const r=Array(16);if("string"===typeof e)for(var i=0;i<16;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;i<16;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];let s,o=t.g[3];s=e+(o^n&(i^o))+r[0]+3614090360&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[1]+3905402710&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[4]+4118548399&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[5]+1200080426&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[8]+1770035416&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[9]+2336552879&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[12]+1804603682&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[13]+4254626195&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(i^o&(n^i))+r[1]+4129170786&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[6]+3225465664&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[5]+3593408605&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[10]+38016083&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[9]+568446438&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[14]+3275163606&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[13]+2850285829&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[2]+4243563512&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(n^i^o)+r[5]+4294588738&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[8]+2272392833&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[1]+2763975236&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[4]+1272893353&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[13]+681279174&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[0]+3936430074&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[9]+3654602809&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[12]+3873151461&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(i^(n|~o))+r[0]+4096336452&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[7]+1126891415&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[12]+1700485571&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[3]+2399980690&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[8]+1873313359&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[15]+4264355552&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[4]+4149444226&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[11]+3174756917&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+o&4294967295}function a(t,e){var n=l;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}function c(t,e){this.h=e;const n=[];let r=!0;for(let i=t.length-1;i>=0;i--){const s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},s.prototype.v=function(t,e){void 0===e&&(e=t.length);const n=e-this.blockSize,r=this.C;let i=this.h,s=0;for(;s<e;){if(0==i)for(;s<=n;)o(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){o(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){o(this,r),i=0;break}}this.h=i,this.o+=e},s.prototype.A=function(){var t=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;e=8*this.o;for(var n=t.length-8;n<t.length;++n)t[n]=255&e,e/=256;for(this.v(t),t=Array(16),e=0,n=0;n<4;++n)for(let r=0;r<32;r+=8)t[e++]=this.g[n]>>>r&255;return t};var l={};function h(t){return-128<=t&&t<128?a(t,function(t){return new c([0|t],t<0?-1:0)}):new c([0|t],t<0?-1:0)}function f(t){if(isNaN(t)||!isFinite(t))return p;if(t<0)return w(f(-t));const e=[];let n=1;for(let r=0;t>=n;r++)e[r]=t/n|0,n*=4294967296;return new c(e,0)}function d(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,e<2||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return w(d(t.substring(1),e));if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character');const n=f(Math.pow(e,8));let r=p;for(let s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s);const o=parseInt(t.substring(s,s+i),e);i<8?(i=f(Math.pow(e,i)),r=r.j(i).add(f(o))):(r=r.j(n),r=r.add(f(o)))}return r}var p=h(0),g=h(1),m=h(16777216);function y(t){if(0!=t.h)return!1;for(let e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function v(t){return-1==t.h}function w(t){const e=t.g.length,n=[];for(let r=0;r<e;r++)n[r]=~t.g[r];return new c(n,~t.h).add(g)}function b(t,e){return t.add(w(e))}function _(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function E(t,e){this.g=t,this.h=e}function T(t,e){if(y(e))throw Error("division by zero");if(y(t))return new E(p,p);if(v(t))return e=T(w(t),e),new E(w(e.g),w(e.h));if(v(e))return e=T(t,w(e)),new E(w(e.g),e.h);if(t.g.length>30){if(v(t)||v(e))throw Error("slowDivide_ only works with positive integers.");for(var n=g,r=e;r.l(t)<=0;)n=S(n),r=S(r);var i=A(n,1),s=A(r,1);for(r=A(r,2),n=A(n,2);!y(r);){var o=s.add(r);o.l(t)<=0&&(i=i.add(n),s=o),r=A(r,1),n=A(n,1)}return e=b(t,i.j(e)),new E(i,e)}for(i=p;t.l(e)>=0;){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=r<=48?1:Math.pow(2,r-48),s=f(n),o=s.j(e);v(o)||o.l(t)>0;)n-=r,s=f(n),o=s.j(e);y(s)&&(s=g),i=i.add(s),t=b(t,o)}return new E(i,t)}function S(t){const e=t.g.length+1,n=[];for(let r=0;r<e;r++)n[r]=t.i(r)<<1|t.i(r-1)>>>31;return new c(n,t.h)}function A(t,e){const n=e>>5;e%=32;const r=t.g.length-n,i=[];for(let s=0;s<r;s++)i[s]=e>0?t.i(s+n)>>>e|t.i(s+n+1)<<32-e:t.i(s+n);return new c(i,t.h)}t=c.prototype,t.m=function(){if(v(this))return-w(this).m();let t=0,e=1;for(let n=0;n<this.g.length;n++){const r=this.i(n);t+=(r>=0?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if(t=t||10,t<2||36<t)throw Error("radix out of range: "+t);if(y(this))return"0";if(v(this))return"-"+w(this).toString(t);const e=f(Math.pow(t,6));var n=this;let r="";for(;;){const i=T(n,e).g;n=b(n,i.j(e));let s=((n.g.length>0?n.g[0]:n.h)>>>0).toString(t);if(n=i,y(n))return s+r;for(;s.length<6;)s="0"+s;r=s+r}},t.i=function(t){return t<0?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return t=b(this,t),v(t)?-1:y(t)?0:1},t.abs=function(){return v(this)?w(this):this},t.add=function(t){const e=Math.max(this.g.length,t.g.length),n=[];let r=0;for(let i=0;i<=e;i++){let e=r+(65535&this.i(i))+(65535&t.i(i)),s=(e>>>16)+(this.i(i)>>>16)+(t.i(i)>>>16);r=s>>>16,e&=65535,s&=65535,n[i]=s<<16|e}return new c(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(y(this)||y(t))return p;if(v(this))return v(t)?w(this).j(w(t)):w(w(this).j(t));if(v(t))return w(this.j(w(t)));if(this.l(m)<0&&t.l(m)<0)return f(this.m()*t.m());const e=this.g.length+t.g.length,n=[];for(var r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(let e=0;e<t.g.length;e++){const i=this.i(r)>>>16,s=65535&this.i(r),o=t.i(e)>>>16,a=65535&t.i(e);n[2*r+2*e]+=s*a,_(n,2*r+2*e),n[2*r+2*e+1]+=i*a,_(n,2*r+2*e+1),n[2*r+2*e+1]+=s*o,_(n,2*r+2*e+1),n[2*r+2*e+2]+=i*o,_(n,2*r+2*e+2)}for(t=0;t<e;t++)n[t]=n[2*t+1]<<16|n[2*t];for(t=e;t<2*e;t++)n[t]=0;return new c(n,0)},t.B=function(t){return T(this,t).h},t.and=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)&t.i(r);return new c(n,this.h&t.h)},t.or=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)|t.i(r);return new c(n,this.h|t.h)},t.xor=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)^t.i(r);return new c(n,this.h^t.h)},s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,i=u.Md5=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=f,c.fromString=d,r=u.Integer=c}).apply("undefined"!==typeof c?c:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var l,h,f,d,p,g,m,y,v=n(6189),w=(n(7324),n(6382),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{}),b={};(function(){var t,e=Object.defineProperty;function n(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof w&&w];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function i(t,n){if(n)t:{var i=r;t=t.split(".");for(var s=0;s<t.length-1;s++){var o=t[s];if(!(o in i))break t;i=i[o]}t=t[t.length-1],s=i[t],n=n(s),n!=s&&null!=n&&e(i,t,{configurable:!0,writable:!0,value:n})}}i("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(t){return t||function(t){var e,n=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push([e,t[e]]);return n}});
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
var s=s||{},o=this||self;function a(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function c(t,e,n){return t.call.apply(t.bind,arguments)}function u(t,e,n){return u=c,u.apply(null,arguments)}function v(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function _(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Ob=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}var T="undefined"!==typeof AsyncContext&&"function"===typeof AsyncContext.Snapshot?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function S(t){const e=t.length;if(e>0){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function A(t,e){for(let r=1;r<arguments.length;r++){const e=arguments[r];var n=typeof e;if(n="object"!=n?n:e?Array.isArray(e)?"array":n:"null","array"==n||"object"==n&&"number"==typeof e.length){n=t.length||0;const r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}class C{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return this.h>0?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function I(t){o.setTimeout(()=>{throw t},0)}function R(){var t=P;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class x{constructor(){this.h=this.g=null}add(t,e){const n=O.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var O=new C(()=>new N,t=>t.reset());class N{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let k,D=!1,P=new x,L=()=>{const t=Promise.resolve(void 0);k=()=>{t.then(M)}};function M(){for(var t;t=R();){try{t.h.call(t.g)}catch(n){I(n)}var e=O;e.j(t),e.h<100&&(e.h++,t.next=e.g,e.g=t)}D=!1}function U(){this.u=this.u,this.C=this.C}function F(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}U.prototype.u=!1,U.prototype.dispose=function(){this.u||(this.u=!0,this.N())},U.prototype[Symbol.dispose]=function(){this.dispose()},U.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},F.prototype.h=function(){this.defaultPrevented=!0};var V=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};o.addEventListener("test",t,e),o.removeEventListener("test",t,e)}catch(n){}return t}();function j(t){return/^[\s\xa0]*$/.test(t)}function B(t,e){F.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,e)}_(B,F),B.prototype.init=function(t,e){const n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget,e||("mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement)),this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&B.Z.h.call(this)},B.prototype.h=function(){B.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $="closure_listenable_"+(1e6*Math.random()|0),q=0;function z(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++q,this.da=this.fa=!1}function G(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function H(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function K(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function W(t){const e={};for(const n in t)e[n]=t[n];return e}const Q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function X(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<Q.length;e++)n=Q[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Y(t){this.src=t,this.g={},this.h=0}function J(t,e){const n=e.type;if(n in t.g){var r,i=t.g[n],s=Array.prototype.indexOf.call(i,e,void 0);(r=s>=0)&&Array.prototype.splice.call(i,s,1),r&&(G(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Z(t,e,n,r){for(let i=0;i<t.length;++i){const s=t[i];if(!s.da&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}Y.prototype.add=function(t,e,n,r,i){const s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);const o=Z(t,e,r,i);return o>-1?(e=t[o],n||(e.fa=!1)):(e=new z(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var tt="closure_lm_"+(1e6*Math.random()|0),et={};function rt(t,e,n,r,i){if(r&&r.once)return ot(t,e,n,r,i);if(Array.isArray(e)){for(let s=0;s<e.length;s++)rt(t,e[s],n,r,i);return null}return n=dt(n),t&&t[$]?t.J(e,n,a(r)?!!r.capture:!!r,i):it(t,e,n,!1,r,i)}function it(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");const o=a(i)?!!i.capture:!!i;let c=ht(t);if(c||(t[tt]=c=new Y(t)),n=c.add(e,n,r,o,s),n.proxy)return n;if(r=st(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)V||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(ut(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function st(){function t(n){return e.call(t.src,t.listener,n)}const e=lt;return t}function ot(t,e,n,r,i){if(Array.isArray(e)){for(let s=0;s<e.length;s++)ot(t,e[s],n,r,i);return null}return n=dt(n),t&&t[$]?t.K(e,n,a(r)?!!r.capture:!!r,i):it(t,e,n,!0,r,i)}function at(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)at(t,e[s],n,r,i);else r=a(r)?!!r.capture:!!r,n=dt(n),t&&t[$]?(t=t.i,s=String(e).toString(),s in t.g&&(e=t.g[s],n=Z(e,n,r,i),n>-1&&(G(e[n]),Array.prototype.splice.call(e,n,1),0==e.length&&(delete t.g[s],t.h--)))):t&&(t=ht(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Z(e,n,r,i)),(n=t>-1?e[t]:null)&&ct(n))}function ct(t){if("number"!==typeof t&&t&&!t.da){var e=t.src;if(e&&e[$])J(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ut(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ht(e))?(J(n,t),0==n.h&&(n.src=null,e[tt]=null)):G(t)}}}function ut(t){return t in et?et[t]:et[t]="on"+t}function lt(t,e){if(t.da)t=!0;else{e=new B(e,this);const n=t.listener,r=t.ha||t.src;t.fa&&ct(t),t=n.call(r,e)}return t}function ht(t){return t=t[tt],t instanceof Y?t:null}var ft="__closure_events_fn_"+(1e9*Math.random()>>>0);function dt(t){return"function"===typeof t?t:(t[ft]||(t[ft]=function(e){return t.handleEvent(e)}),t[ft])}function pt(){U.call(this),this.i=new Y(this),this.M=this,this.G=null}function gt(t,e){var n,r=t.G;if(r)for(n=[];r;r=r.G)n.push(r);if(t=t.M,r=e.type||e,"string"===typeof e)e=new F(e,t);else if(e instanceof F)e.target=e.target||t;else{var i=e;e=new F(r,t),X(e,i)}let s,o;if(i=!0,n)for(o=n.length-1;o>=0;o--)s=e.g=n[o],i=mt(s,r,!0,e)&&i;if(s=e.g=t,i=mt(s,r,!0,e)&&i,i=mt(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=mt(s,r,!1,e)&&i}function mt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();let i=!0;for(let s=0;s<e.length;++s){const o=e[s];if(o&&!o.da&&o.capture==n){const e=o.listener,n=o.ha||o.src;o.fa&&J(t.i,o),i=!1!==e.call(n,r)&&i}}return i&&!r.defaultPrevented}function yt(t,e){if("function"!==typeof t){if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=u(t.handleEvent,t)}return Number(e)>2147483647?-1:o.setTimeout(t,e||0)}function vt(t){t.g=yt(()=>{t.g=null,t.i&&(t.i=!1,vt(t))},t.l);const e=t.h;t.h=null,t.m.apply(null,e)}_(pt,U),pt.prototype[$]=!0,pt.prototype.removeEventListener=function(t,e,n,r){at(this,t,e,n,r)},pt.prototype.N=function(){if(pt.Z.N.call(this),this.i){var t=this.i;for(const e in t.g){const n=t.g[e];for(let t=0;t<n.length;t++)G(n[t]);delete t.g[e],t.h--}}this.G=null},pt.prototype.J=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},pt.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class wt extends U{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:vt(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bt(t){U.call(this),this.h=t,this.g={}}_(bt,U);var _t=[];function Et(t){H(t.g,function(t,e){this.g.hasOwnProperty(e)&&ct(t)},t),t.g={}}bt.prototype.N=function(){bt.Z.N.call(this),Et(this)},bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tt=o.JSON.stringify,St=o.JSON.parse,At=class{stringify(t){return o.JSON.stringify(t,void 0)}parse(t){return o.JSON.parse(t,void 0)}};function Ct(){}function It(){}var Rt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function xt(){F.call(this,"d")}function Ot(){F.call(this,"c")}_(xt,F),_(Ot,F);var Nt={},kt=null;function Dt(){return kt=kt||new pt}function Pt(t){F.call(this,Nt.Ia,t)}function Lt(t){const e=Dt();gt(e,new Pt(e))}function Mt(t,e){F.call(this,Nt.STAT_EVENT,t),this.stat=e}function Ut(t){const e=Dt();gt(e,new Mt(e,t))}function Ft(t,e){F.call(this,Nt.Ja,t),this.size=e}function Vt(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){t()},e)}function jt(){this.g=!0}function Bt(t,e,n,r,i,s){t.info(function(){if(t.g)if(s){var o="",a=s.split("&");for(let t=0;t<a.length;t++){var c=a[t].split("=");if(c.length>1){const t=c[0];c=c[1];const e=t.split("_");o=e.length>=2&&"type"==e[1]?o+(t+"=")+c+"&":o+(t+"=redacted&")}}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o})}function $t(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o})}function qt(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Gt(t,n)+(r?" "+r:"")})}function zt(t,e){t.info(function(){return"TIMEOUT: "+e})}function Gt(t,e){if(!t.g)return e;if(!e)return null;try{const s=JSON.parse(e);if(s)for(t=0;t<s.length;t++)if(Array.isArray(s[t])){var n=s[t];if(!(n.length<2)){var r=n[1];if(Array.isArray(r)&&!(r.length<1)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(let t=1;t<r.length;t++)r[t]=""}}}return Tt(s)}catch(s){return e}}Nt.Ia="serverreachability",_(Pt,F),Nt.STAT_EVENT="statevent",_(Mt,F),Nt.Ja="timingevent",_(Ft,F),jt.prototype.ua=function(){this.g=!1},jt.prototype.info=function(){};var Ht,Kt={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Wt={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function Qt(){}function Xt(t){return encodeURIComponent(String(t))}function Yt(t){var e=1;t=t.split(":");const n=[];for(;e>0&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Jt(t,e,n,r){this.j=t,this.i=e,this.l=n,this.S=r||1,this.V=new bt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Zt}function Zt(){this.i=null,this.g="",this.h=!1}_(Qt,Ct),Qt.prototype.g=function(){return new XMLHttpRequest},Ht=new Qt;var te={},ee={};function ne(t,e,n){t.M=1,t.A=xe(Se(e)),t.u=n,t.R=!0,re(t,null)}function re(t,e){t.F=Date.now(),ae(t),t.B=Se(t.A);var n=t.B,r=t.S;Array.isArray(r)||(r=[String(r)]),qe(n.i,"t",r),t.C=0,n=t.j.L,t.h=new Zt,t.g=Ln(t.j,n?e:null,!t.u),t.P>0&&(t.O=new wt(u(t.Y,t,t.g),t.P)),e=t.V,n=t.g,r=t.ba;var i="readystatechange";Array.isArray(i)||(i&&(_t[0]=i.toString()),i=_t);for(let s=0;s<i.length;s++){const t=rt(n,i[s],r||e.handleEvent,!1,e.h||e);if(!t)break;e.g[t.key]=t}e=t.J?W(t.J):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,e)):(t.v="GET",t.g.ea(t.B,t.v,null,e)),Lt(),Bt(t.i,t.v,t.B,t.l,t.S,t.u)}function ie(t){if(!se(t))return t.g.la();const e=dn(t.g);if(""===e)return"";let n="";const r=e.length,i=4==fn(t.g);if(!t.h.i){if("undefined"===typeof TextDecoder)return he(t),le(t),"";t.h.i=new o.TextDecoder}for(let s=0;s<r;s++)t.h.h=!0,n+=t.h.i.decode(e[s],{stream:!(i&&s==r-1)});return e.length=0,t.h.g+=n,t.C=0,t.h.g}function se(t){return!!t.g&&("GET"==t.v&&2!=t.M&&t.j.Aa)}function oe(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?ee:(n=Number(e.substring(n,r)),isNaN(n)?te:(r+=1,r+n>e.length?ee:(e=e.slice(r,r+n),t.C=r+n,e)))}function ae(t){t.T=Date.now()+t.H,ce(t,t.H)}function ce(t,e){if(null!=t.D)throw Error("WatchDog timer not null");t.D=Vt(u(t.aa,t),e)}function ue(t){t.D&&(o.clearTimeout(t.D),t.D=null)}function le(t){0==t.j.I||t.K||On(t.j,t)}function he(t){ue(t);var e=t.O;e&&"function"==typeof e.dispose&&e.dispose(),t.O=null,Et(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.dispose())}function fe(t,e){try{var n=t.j;if(0!=n.I&&(n.g==t||ye(n.h,t)))if(!t.L&&ye(n.h,t)&&3==n.I){try{var r=n.Ba.g.parse(e)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.v){if(n.g){if(!(n.g.F+3e3<t.F))break t;xn(n),vn(n)}Cn(n),Ut(18)}}else n.xa=i[1],0<n.xa-n.K&&i[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=Vt(u(n.Va,n),6e3));me(n.h)<=1&&n.ta&&(n.ta=void 0)}else kn(n,11)}else if((t.L||n.g==t)&&xn(n),!j(e))for(i=n.Ba.g.parse(e),e=0;e<i.length;e++){let u=i[e];const l=u[0];if(!(l<=n.K))if(n.K=l,u=u[1],2==n.I)if("c"==u[0]){n.M=u[1],n.ba=u[2];const e=u[3];null!=e&&(n.ka=e,n.j.info("VER="+n.ka));const i=u[4];null!=i&&(n.za=i,n.j.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&l>0&&(r=1.5*l,n.O=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(ve(s,s.h),s.h=null))}if(r.G){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.wa=t,Re(r.J,r.G,t))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-t.F,n.j.info("Handshake RTT: "+n.T+"ms")),r=n;var o=t;if(r.na=Pn(r,r.L?r.ba:null,r.W),o.L){we(r.h,o);var a=o,c=r.O;c&&(a.H=c),a.D&&(ue(a),ae(a)),r.g=o}else An(r);n.i.length>0&&bn(n)}else"stop"!=u[0]&&"close"!=u[0]||kn(n,7);else 3==n.I&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?kn(n,7):yn(n):"noop"!=u[0]&&n.l&&n.l.qa(u),n.A=0)}Lt(4)}catch(l){}}Jt.prototype.ba=function(t){t=t.target;const e=this.O;e&&3==fn(t)?e.j():this.Y(t)},Jt.prototype.Y=function(t){try{if(t==this.g)t:{const a=fn(this.g),c=this.g.ya(),u=this.g.ca();if(!(a<3)&&(3!=a||this.g&&(this.h.h||this.g.la()||dn(this.g)))){this.K||4!=a||7==c||Lt(8==c||u<=0?3:2),ue(this);var e=this.g.ca();this.X=e;var n=ie(this);if(this.o=200==e,$t(this.i,this.v,this.B,this.l,this.S,a,e),this.o){if(this.U&&!this.L){e:{if(this.g){var r,i=this.g;if((r=i.g?i.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(r)){var s=r;break e}}s=null}if(!(t=s)){this.o=!1,this.m=3,Ut(12),he(this),le(this);break t}qt(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,fe(this,t)}if(this.R){let e;for(t=!0;!this.K&&this.C<n.length;){if(e=oe(this,n),e==ee){4==a&&(this.m=4,Ut(14),t=!1),qt(this.i,this.l,null,"[Incomplete Response]");break}if(e==te){this.m=4,Ut(15),qt(this.i,this.l,n,"[Invalid Chunk]"),t=!1;break}qt(this.i,this.l,e,null),fe(this,e)}if(se(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=a||0!=n.length||this.h.h||(this.m=1,Ut(16),t=!1),this.o=this.o&&t,t){if(n.length>0&&!this.W){this.W=!0;var o=this.j;o.g==this&&o.aa&&!o.P&&(o.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),In(o),o.P=!0,Ut(11))}}else qt(this.i,this.l,n,"[Invalid Chunked Response]"),he(this),le(this)}else qt(this.i,this.l,n,null),fe(this,n);4==a&&he(this),this.o&&!this.K&&(4==a?On(this.j,this):(this.o=!1,ae(this)))}else pn(this.g),400==e&&n.indexOf("Unknown SID")>0?(this.m=3,Ut(12)):(this.m=0,Ut(13)),he(this),le(this)}}}catch(a){}},Jt.prototype.cancel=function(){this.K=!0,he(this)},Jt.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(zt(this.i,this.B),2!=this.M&&(Lt(),Ut(17)),he(this),this.m=2,le(this)):ce(this,this.T-t)};var de=class{constructor(t,e){this.g=t,this.map=e}};function pe(t){this.l=t||10,o.PerformanceNavigationTiming?(t=o.performance.getEntriesByType("navigation"),t=t.length>0&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ge(t){return!!t.h||!!t.g&&t.g.size>=t.j}function me(t){return t.h?1:t.g?t.g.size:0}function ye(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ve(t,e){t.g?t.g.add(e):t.h=e}function we(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function be(t){if(null!=t.h)return t.i.concat(t.h.G);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.G);return e}return S(t.i)}pe.prototype.cancel=function(){if(this.i=be(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var _e=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ee(t,e){if(t){t=t.split("&");for(let n=0;n<t.length;n++){const r=t[n].indexOf("=");let i,s=null;r>=0?(i=t[n].substring(0,r),s=t[n].substring(r+1)):i=t[n],e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Te(t){let e;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,t instanceof Te?(this.l=t.l,Ae(this,t.j),this.o=t.o,this.g=t.g,Ce(this,t.u),this.h=t.h,Ie(this,ze(t.i)),this.m=t.m):t&&(e=String(t).match(_e))?(this.l=!1,Ae(this,e[1]||"",!0),this.o=Oe(e[2]||""),this.g=Oe(e[3]||"",!0),Ce(this,e[4]),this.h=Oe(e[5]||"",!0),Ie(this,e[6]||"",!0),this.m=Oe(e[7]||"")):(this.l=!1,this.i=new Fe(null,this.l))}function Se(t){return new Te(t)}function Ae(t,e,n){t.j=n?Oe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ce(t,e){if(e){if(e=Number(e),isNaN(e)||e<0)throw Error("Bad port number "+e);t.u=e}else t.u=null}function Ie(t,e,n){e instanceof Fe?(t.i=e,He(t.i,t.l)):(n||(e=Ne(e,Me)),t.i=new Fe(e,t.l))}function Re(t,e,n){t.i.set(e,n)}function xe(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Oe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ne(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,ke),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ke(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Te.prototype.toString=function(){const t=[];var e=this.j;e&&t.push(Ne(e,De,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(Ne(e,De,!0),"@"),t.push(Xt(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.u,null!=n&&t.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ne(n,"/"==n.charAt(0)?Le:Pe,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",Ne(n,Ue)),t.join("")},Te.prototype.resolve=function(t){const e=Se(this);let n=!!t.j;n?Ae(e,t.j):n=!!t.o,n?e.o=t.o:n=!!t.g,n?e.g=t.g:n=null!=t.u;var r=t.h;if(n)Ce(e,t.u);else if(n=!!t.h){if("/"!=r.charAt(0))if(this.g&&!this.h)r="/"+r;else{var i=e.h.lastIndexOf("/");-1!=i&&(r=e.h.slice(0,i+1)+r)}if(i=r,".."==i||"."==i)r="";else if(-1!=i.indexOf("./")||-1!=i.indexOf("/.")){r=0==i.lastIndexOf("/",0),i=i.split("/");const t=[];for(let e=0;e<i.length;){const n=i[e++];"."==n?r&&e==i.length&&t.push(""):".."==n?((t.length>1||1==t.length&&""!=t[0])&&t.pop(),r&&e==i.length&&t.push("")):(t.push(n),r=!0)}r=t.join("/")}else r=i}return n?e.h=r:n=""!==t.i.toString(),n?Ie(e,ze(t.i)):n=!!t.m,n&&(e.m=t.m),e};var De=/[#\/\?@]/g,Pe=/[#\?:]/g,Le=/[#\?]/g,Me=/[#\?@]/g,Ue=/#/g;function Fe(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ve(t){t.g||(t.g=new Map,t.h=0,t.i&&Ee(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function je(t,e){Ve(t),e=Ge(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Be(t,e){return Ve(t),e=Ge(t,e),t.g.has(e)}function $e(t,e){Ve(t);let n=[];if("string"===typeof e)Be(t,e)&&(n=n.concat(t.g.get(Ge(t,e))));else for(t=Array.from(t.g.values()),e=0;e<t.length;e++)n=n.concat(t[e]);return n}function qe(t,e,n){je(t,e),n.length>0&&(t.i=null,t.g.set(Ge(t,e),S(n)),t.h+=n.length)}function ze(t){const e=new Fe;return e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),e}function Ge(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function He(t,e){e&&!t.j&&(Ve(t),t.i=null,t.g.forEach(function(t,e){const n=e.toLowerCase();e!=n&&(je(this,e),qe(this,n,t))},t)),t.j=e}function Ke(t,e){const n=new jt;if(o.Image){const r=new Image;r.onload=v(Qe,n,"TestLoadImage: loaded",!0,e,r),r.onerror=v(Qe,n,"TestLoadImage: error",!1,e,r),r.onabort=v(Qe,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=v(Qe,n,"TestLoadImage: timeout",!1,e,r),o.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function We(t,e){const n=new jt,r=new AbortController,i=setTimeout(()=>{r.abort(),Qe(n,"TestPingServer: timeout",!1,e)},1e4);fetch(t,{signal:r.signal}).then(t=>{clearTimeout(i),t.ok?Qe(n,"TestPingServer: ok",!0,e):Qe(n,"TestPingServer: server error",!1,e)}).catch(()=>{clearTimeout(i),Qe(n,"TestPingServer: error",!1,e)})}function Qe(t,e,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function Xe(){this.g=new At}function Ye(t){this.i=t.Sb||null,this.h=t.ab||!1}function Je(t,e){pt.call(this),this.H=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function Ze(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}function tn(t){t.readyState=4,t.l=null,t.j=null,t.B=null,en(t)}function en(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function nn(t){let e="";return H(t,function(t,n){e+=n,e+=":",e+=t,e+="\r\n"}),e}function rn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=nn(n),"string"===typeof t?null!=n&&Xt(n):Re(t,e,n))}function sn(t){pt.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}t=Fe.prototype,t.add=function(t,e){Ve(this),this.i=null,t=Ge(this,t);let n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){Ve(this),this.g.forEach(function(n,r){n.forEach(function(n){t.call(e,n,r,this)},this)},this)},t.set=function(t,e){return Ve(this),this.i=null,t=Ge(this,t),Be(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t?(t=$e(this,t),t.length>0?String(t[0]):e):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(let r=0;r<e.length;r++){var n=e[r];const i=Xt(n);n=$e(this,n);for(let e=0;e<n.length;e++){let r=i;""!==n[e]&&(r+="="+Xt(n[e])),t.push(r)}}return this.i=t.join("&")},_(Ye,Ct),Ye.prototype.g=function(){return new Je(this.i,this.h)},_(Je,pt),t=Je.prototype,t.open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=e,this.readyState=1,en(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const e={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(e.body=t),(this.H||o).fetch(new Request(this.D,e)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,tn(this)),this.readyState=0},t.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,en(this)),this.g&&(this.readyState=3,en(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if("undefined"!==typeof o.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ze(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))},t.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.B.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?tn(this):en(this),3==this.readyState&&Ze(this)}},t.Oa=function(t){this.g&&(this.response=this.responseText=t,tn(this))},t.Na=function(t){this.g&&(this.response=t,tn(this))},t.ga=function(){this.g&&tn(this)},t.setRequestHeader=function(t,e){this.A.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Je.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),_(sn,pt);var on=/^https?$/i,an=["POST","PUT"];function cn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.o=5,un(t),hn(t)}function un(t){t.A||(t.A=!0,gt(t,"complete"),gt(t,"error"))}function ln(t){if(t.h&&"undefined"!=typeof s)if(t.v&&4==fn(t))setTimeout(t.Ca.bind(t),0);else if(gt(t,"readystatechange"),4==fn(t)){t.h=!1;try{const s=t.ca();t:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===s){let e=String(t.D).match(_e)[1]||null;!e&&o.self&&o.self.location&&(e=o.self.location.protocol.slice(0,-1)),r=!on.test(e?e.toLowerCase():"")}n=r}if(n)gt(t,"complete"),gt(t,"success");else{t.o=6;try{var i=fn(t)>2?t.g.statusText:""}catch(a){i=""}t.l=i+" ["+t.ca()+"]",un(t)}}finally{hn(t)}}}function hn(t,e){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const r=t.g;t.g=null,e||gt(t,"ready");try{r.onreadystatechange=null}catch(n){}}}function fn(t){return t.g?t.g.readyState:0}function dn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(E){return null}}function pn(t){const e={};t=(t.g&&fn(t)>=2&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(j(t[r]))continue;var n=Yt(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}K(e,function(t){return t.join(", ")})}function gn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mn(t){this.za=0,this.i=[],this.j=new jt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=gn("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=gn("baseRetryDelayMs",5e3,t),this.Za=gn("retryDelaySeedMs",1e4,t),this.Ta=gn("forwardChannelMaxRetries",2,t),this.va=gn("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new pe(t&&t.concurrentRequestLimit),this.Ba=new Xe,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function yn(t){if(wn(t),3==t.I){var e=t.V++,n=Se(t.J);if(Re(n,"SID",t.M),Re(n,"RID",e),Re(n,"TYPE","terminate"),Tn(t,n),e=new Jt(t,t.j,e),e.M=2,e.A=xe(Se(n)),n=!1,o.navigator&&o.navigator.sendBeacon)try{n=o.navigator.sendBeacon(e.A.toString(),"")}catch(r){}!n&&o.Image&&((new Image).src=e.A,n=!0),n||(e.g=Ln(e.j,null),e.g.ea(e.A)),e.F=Date.now(),ae(e)}Dn(t)}function vn(t){t.g&&(In(t),t.g.cancel(),t.g=null)}function wn(t){vn(t),t.v&&(o.clearTimeout(t.v),t.v=null),xn(t),t.h.cancel(),t.m&&("number"===typeof t.m&&o.clearTimeout(t.m),t.m=null)}function bn(t){if(!ge(t.h)&&!t.m){t.m=!0;var e=t.Ea;k||L(),D||(k(),D=!0),P.add(e,t),t.D=0}}function _n(t,e){return!(me(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.G.concat(t.i),!0):!(1==t.I||2==t.I||t.D>=(t.Sa?0:t.Ta))&&(t.m=Vt(u(t.Ea,t,e),Nn(t,t.D)),t.D++,!0))}function En(t,e){var n;n=e?e.l:t.V++;const r=Se(t.J);Re(r,"SID",t.M),Re(r,"RID",n),Re(r,"AID",t.K),Tn(t,r),t.u&&t.o&&rn(r,t.u,t.o),n=new Jt(t,t.j,n,t.D+1),null===t.u&&(n.J=t.o),e&&(t.i=e.G.concat(t.i)),e=Sn(t,n,1e3),n.H=Math.round(.5*t.va)+Math.round(.5*t.va*Math.random()),ve(t.h,n),ne(n,r,e)}function Tn(t,e){t.H&&H(t.H,function(t,n){Re(e,n,t)}),t.l&&H({},function(t,n){Re(e,n,t)})}function Sn(t,e,n){n=Math.min(t.i.length,n);const r=t.l?u(t.l.Ka,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?n>0?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let c=!0;for(let u=0;u<n;u++){var s=i[u].g;const n=i[u].map;if(s-=e,s<0)e=Math.max(0,i[u].g-100),c=!1;else try{s="req"+s+"_"||0;try{var o=n instanceof Map?n:Object.entries(n);for(const[e,n]of o){let r=n;a(n)&&(r=Tt(n)),t.push(s+e+"="+encodeURIComponent(r))}}catch(nt){throw t.push(s+"type="+encodeURIComponent("_badmap")),nt}}catch(nt){r&&r(n)}}if(c){o=t.join("&");break t}}o=void 0}return t=t.i.splice(0,n),e.G=t,o}function An(t){if(!t.g&&!t.v){t.Y=1;var e=t.Da;k||L(),D||(k(),D=!0),P.add(e,t),t.A=0}}function Cn(t){return!(t.g||t.v||t.A>=3)&&(t.Y++,t.v=Vt(u(t.Da,t),Nn(t,t.A)),t.A++,!0)}function In(t){null!=t.B&&(o.clearTimeout(t.B),t.B=null)}function Rn(t){t.g=new Jt(t,t.j,"rpc",t.Y),null===t.u&&(t.g.J=t.o),t.g.P=0;var e=Se(t.na);Re(e,"RID","rpc"),Re(e,"SID",t.M),Re(e,"AID",t.K),Re(e,"CI",t.F?"0":"1"),!t.F&&t.ia&&Re(e,"TO",t.ia),Re(e,"TYPE","xmlhttp"),Tn(t,e),t.u&&t.o&&rn(e,t.u,t.o),t.O&&(t.g.H=t.O);var n=t.g;t=t.ba,n.M=1,n.A=xe(Se(e)),n.u=null,n.R=!0,re(n,t)}function xn(t){null!=t.C&&(o.clearTimeout(t.C),t.C=null)}function On(t,e){var n=null;if(t.g==e){xn(t),In(t),t.g=null;var r=2}else{if(!ye(t.h,e))return;n=e.G,we(t.h,e),r=1}if(0!=t.I)if(e.o)if(1==r){n=e.u?e.u.length:0,e=Date.now()-e.F;var i=t.D;r=Dt(),gt(r,new Ft(r,n)),bn(t)}else An(t);else if(i=e.m,3==i||0==i&&e.X>0||!(1==r&&_n(t,e)||2==r&&Cn(t)))switch(n&&n.length>0&&(e=t.h,e.i=e.i.concat(n)),i){case 1:kn(t,5);break;case 4:kn(t,10);break;case 3:kn(t,6);break;default:kn(t,2)}}function Nn(t,e){let n=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(n*=2),n*e}function kn(t,e){if(t.j.info("Error code "+e),2==e){var n=u(t.bb,t),r=t.Ua;const e=!r;r=new Te(r||"//www.google.com/images/cleardot.gif"),o.location&&"http"==o.location.protocol||Ae(r,"https"),xe(r),e?Ke(r.toString(),n):We(r.toString(),n)}else Ut(2);t.I=0,t.l&&t.l.pa(e),Dn(t),wn(t)}function Dn(t){if(t.I=0,t.ja=[],t.l){const e=be(t.h);0==e.length&&0==t.i.length||(A(t.ja,e),A(t.ja,t.i),t.h.i.length=0,S(t.i),t.i.length=0),t.l.oa()}}function Pn(t,e,n){var r=n instanceof Te?Se(n):new Te(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Ce(r,r.u);else{var i=o.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;const t=new Te(null);r&&Ae(t,r),e&&(t.g=e),i&&Ce(t,i),n&&(t.h=n),r=t}return n=t.G,e=t.wa,n&&e&&Re(r,n,e),Re(r,"VER",t.ka),Tn(t,r),r}function Ln(t,e,n){if(e&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Aa&&!t.ma?new sn(new Ye({ab:n})):new sn(t.ma),e.Fa(t.L),e}function Mn(){}function Un(){}function Fn(t,e){pt.call(this),this.g=new mn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.sa&&(t?t["X-WebChannel-Client-Profile"]=e.sa:t={"X-WebChannel-Client-Profile":e.sa}),this.g.U=t,(t=e&&e.Qb)&&!j(t)&&(this.g.u=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!j(e)&&(this.g.G=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Bn(this)}function Vn(t){xt.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function jn(){Ot.call(this),this.status=1}function Bn(t){this.g=t}t=sn.prototype,t.Fa=function(t){this.H=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ht.g(),this.g.onreadystatechange=T(u(this.Ca,this));try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(s){return void cn(this,s)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),i=o.FormData&&t instanceof o.FormData,!(Array.prototype.indexOf.call(an,e,void 0)>=0)||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(s){cn(this,s)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,gt(this,"complete"),gt(this,"abort"),hn(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hn(this,!0)),sn.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?ln(this):this.Xa())},t.Xa=function(){ln(this)},t.isActive=function(){return!!this.g},t.ca=function(){try{return fn(this)>2?this.g.status:-1}catch(t){return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.La=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),St(e)}},t.ya=function(){return this.o},t.Ha=function(){return"string"===typeof this.l?this.l:String(this.l)},t=mn.prototype,t.ka=8,t.I=1,t.connect=function(t,e,n,r){Ut(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.J=Pn(this,null,this.W),bn(this)},t.Ea=function(t){if(this.m)if(this.m=null,1==this.I){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Jt(this,this.j,t);let s=this.o;if(this.U&&(s?(s=W(s),X(s,this.U)):s=this.U),null!==this.u||this.R||(i.J=s,s=null),this.S)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,e>4096){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Sn(this,i,e),n=Se(this.J),Re(n,"RID",t),Re(n,"CVER",22),this.G&&Re(n,"X-HTTP-Session-Id",this.G),Tn(this,n),s&&(this.R?e="headers="+Xt(nn(s))+"&"+e:this.u&&rn(n,this.u,s)),ve(this.h,i),this.Ra&&Re(n,"TYPE","init"),this.S?(Re(n,"$req",e),Re(n,"SID","null"),i.U=!0,ne(i,n,null)):ne(i,n,e),this.I=2}}else 3==this.I&&(t?En(this,t):0==this.i.length||ge(this.h)||En(this))},t.Da=function(){if(this.v=null,Rn(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=Vt(u(this.Wa,this),t)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ut(10),vn(this),Rn(this))},t.Va=function(){null!=this.C&&(this.C=null,vn(this),Cn(this),Ut(19))},t.bb=function(t){t?(this.j.info("Successfully pinged google.com"),Ut(2)):(this.j.info("Failed to ping google.com"),Ut(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},t=Mn.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){},Un.prototype.g=function(t,e){return new Fn(t,e)},_(Fn,pt),Fn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Fn.prototype.close=function(){yn(this.g)},Fn.prototype.o=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Tt(t),t=n);e.i.push(new de(e.Ya++,t)),3==e.I&&bn(e)},Fn.prototype.N=function(){this.g.l=null,delete this.j,yn(this.g),delete this.g,Fn.Z.N.call(this)},_(Vn,xt),_(jn,Ot),_(Bn,Mn),Bn.prototype.ra=function(){gt(this.g,"a")},Bn.prototype.qa=function(t){gt(this.g,new Vn(t))},Bn.prototype.pa=function(t){gt(this.g,new jn)},Bn.prototype.oa=function(){gt(this.g,"b")},Un.prototype.createWebChannel=Un.prototype.g,Fn.prototype.send=Fn.prototype.o,Fn.prototype.open=Fn.prototype.m,Fn.prototype.close=Fn.prototype.close,y=b.createWebChannelTransport=function(){return new Un},m=b.getStatEventTarget=function(){return Dt()},g=b.Event=Nt,p=b.Stat={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Kt.NO_ERROR=0,Kt.TIMEOUT=8,Kt.HTTP_ERROR=6,d=b.ErrorCode=Kt,Wt.COMPLETE="complete",f=b.EventType=Wt,It.EventType=Rt,Rt.OPEN="a",Rt.CLOSE="b",Rt.ERROR="c",Rt.MESSAGE="d",pt.prototype.listen=pt.prototype.J,h=b.WebChannel=It,b.FetchXmlHttpFactory=Ye,sn.prototype.listenOnce=sn.prototype.K,sn.prototype.getLastError=sn.prototype.Ha,sn.prototype.getLastErrorCode=sn.prototype.ya,sn.prototype.getStatus=sn.prototype.ca,sn.prototype.getResponseJson=sn.prototype.La,sn.prototype.getResponseText=sn.prototype.la,sn.prototype.send=sn.prototype.ea,sn.prototype.setWithCredentials=sn.prototype.Fa,l=b.XhrIo=sn}).apply("undefined"!==typeof w?w:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_.UNAUTHENTICATED=new _(null),_.GOOGLE_CREDENTIALS=new _("google-credentials-uid"),_.FIRST_PARTY=new _("first-party-uid"),_.MOCK_USER=new _("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let E="12.12.0";function T(t){E=t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=new v.Vy("@firebase/firestore");function A(){return S.logLevel}function C(t,...e){if(S.logLevel<=v.$b.DEBUG){const n=e.map(x);S.debug(`Firestore (${E}): ${t}`,...n)}}function I(t,...e){if(S.logLevel<=v.$b.ERROR){const n=e.map(x);S.error(`Firestore (${E}): ${t}`,...n)}}function R(t,...e){if(S.logLevel<=v.$b.WARN){const n=e.map(x);S.warn(`Firestore (${E}): ${t}`,...n)}}function x(t){if("string"==typeof t)return t;try{return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e,n){let r="Unexpected state";"string"==typeof e?r=e:n=e,N(t,r,n)}function N(t,e,n){let r=`FIRESTORE (${E}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(t){r+=" CONTEXT: "+n}throw I(r),new Error(r)}function k(t,e,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,t||N(e,i,r)}function D(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends a.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class F{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(_.UNAUTHENTICATED))}shutdown(){}}class V{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class j{constructor(t){this.t=t,this.currentUser=_.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){k(void 0===this.o,42304);let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new M;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new M,t.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new M)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(k("string"==typeof e.accessToken,31837,{l:e}),new U(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return k(null===t||"string"==typeof t,2055,{h:t}),new _(t)}}class B{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=_.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class ${constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new B(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(_.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class q{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class z{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,(0,s.xZ)(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){k(void 0===this.o,3512);const n=t=>{null!=t.error&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.m;return this.m=t.token,C("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const r=t=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(t=>r(t)),setTimeout(()=>{if(!this.appCheck){const t=this.V.getImmediate({optional:!0});t?r(t):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new q(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(k("string"==typeof t.token,44558,{tokenResult:t}),this.m=t.token,new q(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=G(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%62))}return n}}function K(t,e){return t<e?-1:t>e?1:0}function W(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.charAt(r),i=e.charAt(r);if(n!==i)return Y(n)===Y(i)?K(n,i):Y(n)?1:-1}return K(t.length,e.length)}const Q=55296,X=57343;function Y(t){const e=t.charCodeAt(0);return e>=Q&&e<=X}function J(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="__name__";class tt{constructor(t,e,n){void 0===e?e=0:e>t.length&&O(637,{offset:e,range:t.length}),void 0===n?n=t.length-e:n>t.length-e&&O(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===tt.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof tt?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=tt.compareSegments(t.get(r),e.get(r));if(0!==n)return n}return K(t.length,e.length)}static compareSegments(t,e){const n=tt.isNumericId(t),r=tt.isNumericId(e);return n&&!r?-1:!n&&r?1:n&&r?tt.extractNumericId(t).compare(tt.extractNumericId(e)):W(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return r.fromString(t.substring(4,t.length-2))}}class et extends tt{construct(t,e,n){return new et(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new L(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new et(e)}static emptyPath(){return new et([])}}const nt=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends tt{construct(t,e,n){return new rt(t,e,n)}static isValidIdentifier(t){return nt.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Z}static keyField(){return new rt([Z])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new L(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new L(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new L(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new L(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new rt(e)}static emptyPath(){return new rt([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.path=t}static fromPath(t){return new it(et.fromString(t))}static fromName(t){return new it(et.fromString(t).popFirst(5))}static empty(){return new it(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===et.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return et.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new it(new et(t.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,e,n){if(!n)throw new L(P.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ot(t,e,n,r){if(!0===e&&!0===r)throw new L(P.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function at(t){if(!it.isDocumentKey(t))throw new L(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ct(t){if(it.isDocumentKey(t))throw new L(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ut(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}function lt(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":O(12329,{type:typeof t})}function ht(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lt(t);throw new L(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ft(t,e){const n={typeString:t};return e&&(n.value=e),n}function dt(t,e){if(!ut(t))throw new L(P.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(void 0!==s&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new L(P.INVALID_ARGUMENT,n);return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=-62135596800,gt=1e6;class mt{static now(){return mt.fromMillis(Date.now())}static fromDate(t){return mt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*gt);return new mt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new L(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<pt)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gt}_compareTo(t){return this.seconds===t.seconds?K(this.nanoseconds,t.nanoseconds):K(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:mt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(dt(t,mt._jsonSchema))return new mt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-pt;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}mt._jsonSchemaVersion="firestore/timestamp/1.0",mt._jsonSchema={type:ft("string",mt._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt{static fromTimestamp(t){return new yt(t)}static min(){return new yt(new mt(0,0))}static max(){return new yt(new mt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=-1;class wt{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}wt.UNKNOWN_ID=-1;function bt(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=yt.fromTimestamp(1e9===r?new mt(n+1,0):new mt(n,r));return new Et(i,it.empty(),e)}function _t(t){return new Et(t.readTime,t.key,vt)}class Et{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Et(yt.min(),it.empty(),vt)}static max(){return new Et(yt.max(),it.empty(),vt)}}function Tt(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=it.comparator(t.documentKey,e.documentKey),0!==n?n:K(t.largestBatchId,e.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const St="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class At{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ct(t){if(t.code!==P.FAILED_PRECONDITION||t.message!==St)throw t;C("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new It((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof It?e:It.resolve(e)}catch(t){return It.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):It.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):It.reject(e)}static resolve(t){return new It((e,n)=>{e(t)})}static reject(t){return new It((e,n)=>{n(t)})}static waitFor(t){return new It((e,n)=>{let r=0,i=0,s=!1;t.forEach(t=>{++r,t.next(()=>{++i,s&&i===r&&e()},t=>n(t))}),s=!0,i===r&&e()})}static or(t){let e=It.resolve(!1);for(const n of t)e=e.next(t=>t?It.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}static mapArray(t,e){return new It((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next(t=>{s[c]=t,++o,o===i&&n(s)},t=>r(t))}})}static doWhile(t,e){return new It((n,r)=>{const i=()=>{!0===t()?e().next(()=>{i()},r):n()};i()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function xt(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ot{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ae(t),this.ue=t=>e.writeSequenceNumber(t))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Ot.ce=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=-1;function kt(t){return null==t}function Dt(t){return 0===t&&1/t==-1/0}function Pt(t){return"number"==typeof t&&Number.isInteger(t)&&!Dt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Lt="";function Mt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ft(e)),e=Ut(t.get(n),e);return Ft(e)}function Ut(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case Lt:n+="";break;default:n+=e}}return n}function Ft(t){return t+Lt+""}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vt="remoteDocuments",jt="owner",Bt="mutationQueues",$t="mutations";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="documentMutations",zt="remoteDocumentsV14",Gt="remoteDocumentGlobal",Ht="targets",Kt="targetDocuments",Wt="targetGlobal",Qt="collectionParents",Xt="clientMetadata",Yt="bundles",Jt="namedQueries",Zt="indexConfiguration",te="indexState",ee="indexEntries",ne="documentOverlays",re="globals",ie=[Bt,$t,qt,Vt,Ht,jt,Wt,Kt,Xt,Gt,Qt,Yt,Jt],se=[Bt,$t,qt,zt,Ht,jt,Wt,Kt,Xt,Gt,Qt,Yt,Jt,ne],oe=se,ae=[...oe,Zt,te,ee];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ce(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ue(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function le(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,e){this.comparator=t,this.root=e||de.EMPTY}insert(t,e){return new he(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,de.BLACK,null,null))}remove(t){return new he(this.comparator,this.root.remove(t,this.comparator).copy(null,null,de.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new fe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new fe(this.root,t,this.comparator,!1)}getReverseIterator(){return new fe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new fe(this.root,t,this.comparator,!0)}}class fe{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class de{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:de.RED,this.left=null!=r?r:de.EMPTY,this.right=null!=i?i:de.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new de(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return de.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return de.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,de.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,de.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O(43730,{key:this.key,value:this.value});if(this.right.isRed())throw O(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw O(27949);return t+(this.isRed()?0:1)}}de.EMPTY=null,de.RED=!0,de.BLACK=!1,de.EMPTY=new class{constructor(){this.size=0}get key(){throw O(57766)}get value(){throw O(16141)}get color(){throw O(16727)}get left(){throw O(29726)}get right(){throw O(36894)}copy(t,e,n,r,i){return this}insert(t,e,n){return new de(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(t){this.comparator=t,this.data=new he(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ge(this.data.getIterator())}getIteratorFrom(t){return new ge(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof pe))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new pe(this.comparator);return e.data=t,e}}class ge{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me{constructor(t){this.fields=t,t.sort(rt.comparator)}static empty(){return new me([])}unionWith(t){let e=new pe(rt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new me(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return J(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new ye("Invalid base64 string: "+t):t}}(t);return new ve(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ve(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return K(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ve.EMPTY_BYTE_STRING=new ve("");const we=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function be(t){if(k(!!t,39018),"string"==typeof t){let e=0;const n=we.exec(t);if(k(!!n,46558,{timestamp:t}),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_e(t.seconds),nanos:_e(t.nanos)}}function _e(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ee(t){return"string"==typeof t?ve.fromBase64String(t):ve.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="server_timestamp",Se="__type__",Ae="__previous_value__",Ce="__local_write_time__";function Ie(t){const e=(t?.mapValue?.fields||{})[Se]?.stringValue;return e===Te}function Re(t){const e=t.mapValue.fields[Ae];return Ie(e)?Re(e):e}function xe(t){const e=be(t.mapValue.fields[Ce].timestampValue);return new mt(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t,e,n,r,i,s,o,a,c,u,l){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c,this.isUsingEmulator=u,this.apiKey=l}}const Ne="(default)";class ke{constructor(t,e){this.projectId=t,this.database=e||Ne}static empty(){return new ke("","")}get isDefaultDatabase(){return this.database===Ne}isEqual(t){return t instanceof ke&&t.projectId===this.projectId&&t.database===this.database}}function De(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new L(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ke(t.options.projectId,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="__type__",Le="__max__",Me={mapValue:{fields:{__type__:{stringValue:Le}}}},Ue="__vector__",Fe="value";function Ve(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ie(t)?4:nn(t)?9007199254740991:tn(t)?10:11:O(28295,{value:t})}function je(t,e){if(t===e)return!0;const n=Ve(t);if(n!==Ve(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xe(t).isEqual(xe(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=be(t.timestampValue),r=be(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ee(t.bytesValue).isEqual(Ee(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return _e(t.geoPointValue.latitude)===_e(e.geoPointValue.latitude)&&_e(t.geoPointValue.longitude)===_e(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return _e(t.integerValue)===_e(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=_e(t.doubleValue),r=_e(e.doubleValue);return n===r?Dt(n)===Dt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return J(t.arrayValue.values||[],e.arrayValue.values||[],je);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(ce(n)!==ce(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!je(n[i],r[i])))return!1;return!0}(t,e);default:return O(52216,{left:t})}}function Be(t,e){return void 0!==(t.values||[]).find(t=>je(t,e))}function $e(t,e){if(t===e)return 0;const n=Ve(t),r=Ve(e);if(n!==r)return K(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return K(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=_e(t.integerValue||t.doubleValue),r=_e(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return qe(t.timestampValue,e.timestampValue);case 4:return qe(xe(t),xe(e));case 5:return W(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ee(t),r=Ee(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=K(n[i],r[i]);if(0!==t)return t}return K(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=K(_e(t.latitude),_e(e.latitude));return 0!==n?n:K(_e(t.longitude),_e(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ze(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=e.fields||{},i=n[Fe]?.arrayValue,s=r[Fe]?.arrayValue,o=K(i?.values?.length||0,s?.values?.length||0);return 0!==o?o:ze(i,s)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===Me.mapValue&&e===Me.mapValue)return 0;if(t===Me.mapValue)return 1;if(e===Me.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=W(r[o],s[o]);if(0!==t)return t;const e=$e(n[r[o]],i[s[o]]);if(0!==e)return e}return K(r.length,s.length)}(t.mapValue,e.mapValue);default:throw O(23264,{he:n})}}function qe(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return K(t,e);const n=be(t),r=be(e),i=K(n.seconds,r.seconds);return 0!==i?i:K(n.nanos,r.nanos)}function ze(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=$e(n[i],r[i]);if(t)return t}return K(n.length,r.length)}function Ge(t){return He(t)}function He(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=be(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Ee(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return it.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=He(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${He(t.fields[i])}`;return n+"}"}(t.mapValue):O(61005,{value:t})}function Ke(t){switch(Ve(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Re(t);return e?16+Ke(e):16;case 5:return 2*t.stringValue.length;case 6:return Ee(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(t){return(t.values||[]).reduce((t,e)=>t+Ke(e),0)}(t.arrayValue);case 10:case 11:return function(t){let e=0;return ue(t.fields,(t,n)=>{e+=t.length+Ke(n)}),e}(t.mapValue);default:throw O(13486,{value:t})}}function We(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Qe(t){return!!t&&"integerValue"in t}function Xe(t){return!!t&&"arrayValue"in t}function Ye(t){return!!t&&"nullValue"in t}function Je(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ze(t){return!!t&&"mapValue"in t}function tn(t){const e=(t?.mapValue?.fields||{})[Pe]?.stringValue;return e===Ue}function en(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ue(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=en(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=en(t.arrayValue.values[n]);return e}return{...t}}function nn(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Le}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rn{constructor(t){this.value=t}static empty(){return new rn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ze(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=en(e)}setAll(t){let e=rt.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=en(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Ze(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return je(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Ze(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){ue(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new rn(en(this.value))}}function sn(t){const e=[];return ue(t.fields,(t,n)=>{const r=new rt([t]);if(Ze(n)){const t=sn(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new me(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class on{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new on(t,0,yt.min(),yt.min(),yt.min(),rn.empty(),0)}static newFoundDocument(t,e,n,r){return new on(t,1,e,yt.min(),n,r,0)}static newNoDocument(t,e){return new on(t,2,e,yt.min(),yt.min(),rn.empty(),0)}static newUnknownDocument(t,e){return new on(t,3,e,yt.min(),yt.min(),rn.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(yt.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=yt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof on&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new on(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t,e){this.position=t,this.inclusive=e}}function cn(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?it.comparator(it.fromName(o.referenceValue),n.key):$e(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function un(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!je(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t,e="asc"){this.field=t,this.dir=e}}function hn(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{}class dn extends fn{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new _n(t,e,n):"array-contains"===e?new An(t,n):"in"===e?new Cn(t,n):"not-in"===e?new In(t,n):"array-contains-any"===e?new Rn(t,n):new dn(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new En(t,n):new Tn(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&void 0===e.nullValue&&this.matchesComparison($e(e,this.value)):null!==e&&Ve(this.value)===Ve(e)&&this.matchesComparison($e(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return O(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends fn{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new pn(t,e)}matches(t){return gn(this)?void 0===this.filters.find(e=>!e.matches(t)):void 0!==this.filters.find(e=>e.matches(t))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function gn(t){return"and"===t.op}function mn(t){return yn(t)&&gn(t)}function yn(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function vn(t){if(t instanceof dn)return t.field.canonicalString()+t.op.toString()+Ge(t.value);if(mn(t))return t.filters.map(t=>vn(t)).join(",");{const e=t.filters.map(t=>vn(t)).join(",");return`${t.op}(${e})`}}function wn(t,e){return t instanceof dn?function(t,e){return e instanceof dn&&t.op===e.op&&t.field.isEqual(e.field)&&je(t.value,e.value)}(t,e):t instanceof pn?function(t,e){return e instanceof pn&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce((t,n,r)=>t&&wn(n,e.filters[r]),!0)}(t,e):void O(19439)}function bn(t){return t instanceof dn?function(t){return`${t.field.canonicalString()} ${t.op} ${Ge(t.value)}`}(t):t instanceof pn?function(t){return t.op.toString()+" {"+t.getFilters().map(bn).join(" ,")+"}"}(t):"Filter"}class _n extends dn{constructor(t,e,n){super(t,e,n),this.key=it.fromName(n.referenceValue)}matches(t){const e=it.comparator(t.key,this.key);return this.matchesComparison(e)}}class En extends dn{constructor(t,e){super(t,"in",e),this.keys=Sn("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Tn extends dn{constructor(t,e){super(t,"not-in",e),this.keys=Sn("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Sn(t,e){return(e.arrayValue?.values||[]).map(t=>it.fromName(t.referenceValue))}class An extends dn{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Xe(e)&&Be(e.arrayValue,this.value)}}class Cn extends dn{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Be(this.value.arrayValue,e)}}class In extends dn{constructor(t,e){super(t,"not-in",e)}matches(t){if(Be(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&void 0===e.nullValue&&!Be(this.value.arrayValue,e)}}class Rn extends dn{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Xe(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>Be(this.value.arrayValue,t))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.Te=null}}function On(t,e=null,n=[],r=[],i=null,s=null,o=null){return new xn(t,e,n,r,i,s,o)}function Nn(t){const e=D(t);if(null===e.Te){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>vn(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),kt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>Ge(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>Ge(t)).join(",")),e.Te=t}return e.Te}function kn(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!hn(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wn(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!un(t.startAt,e.startAt)&&un(t.endAt,e.endAt)}function Dn(t){return it.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pn{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Ln(t,e,n,r,i,s,o,a){return new Pn(t,e,n,r,i,s,o,a)}function Mn(t){return new Pn(t)}function Un(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Fn(t){return it.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}function Vn(t){return null!==t.collectionGroup}function jn(t){const e=D(t);if(null===e.Ee){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new pe(rt.comparator);return t.filters.forEach(t=>{t.getFlattenedFilters().forEach(t=>{t.isInequality()&&(e=e.add(t.field))})}),e}(e);r.forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ee.push(new ln(r,n))}),t.has(rt.keyField().canonicalString())||e.Ee.push(new ln(rt.keyField(),n))}return e.Ee}function Bn(t){const e=D(t);return e.Ie||(e.Ie=$n(e,jn(t))),e.Ie}function $n(t,e){if("F"===t.limitType)return On(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(t=>{const e="desc"===t.dir?"asc":"desc";return new ln(t.field,e)});const n=t.endAt?new an(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new an(t.startAt.position,t.startAt.inclusive):null;return On(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function qn(t,e){const n=t.filters.concat([e]);return new Pn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function zn(t,e){const n=t.explicitOrderBy.concat([e]);return new Pn(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Gn(t,e,n){return new Pn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Hn(t,e){return kn(Bn(t),Bn(e))&&t.limitType===e.limitType}function Kn(t){return`${Nn(Bn(t))}|lt:${t.limitType}`}function Wn(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>bn(t)).join(", ")}]`),kt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>Ge(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>Ge(t)).join(",")),`Target(${e})`}(Bn(t))}; limitType=${t.limitType})`}function Qn(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):it.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of jn(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=cn(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,jn(t),e))&&!(t.endAt&&!function(t,e,n){const r=cn(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,jn(t),e))}(t,e)}function Xn(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Yn(t){return(e,n)=>{let r=!1;for(const i of jn(t)){const t=Jn(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Jn(t,e,n){const r=t.field.isKeyField()?it.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?$e(r,i):O(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return O(19790,{direction:t.dir})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){ue(this.inner,(e,n)=>{for(const[r,i]of n)t(r,i)})}isEmpty(){return le(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new he(it.comparator);function er(){return tr}const nr=new he(it.comparator);function rr(...t){let e=nr;for(const n of t)e=e.insert(n.key,n);return e}function ir(t){let e=nr;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function sr(){return ar()}function or(){return ar()}function ar(){return new Zn(t=>t.toString(),(t,e)=>t.isEqual(e))}const cr=new he(it.comparator),ur=new pe(it.comparator);function lr(...t){let e=ur;for(const n of t)e=e.add(n);return e}const hr=new pe(K);function fr(){return hr}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dt(e)?"-0":e}}function pr(t){return{integerValue:""+t}}function gr(t,e){return Pt(e)?pr(e):dr(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this._=void 0}}function yr(t,e,n){return t instanceof br?function(t,e){const n={fields:{[Se]:{stringValue:Te},[Ce]:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Ie(e)&&(e=Re(e)),e&&(n.fields[Ae]=e),{mapValue:n}}(n,e):t instanceof _r?Er(t,e):t instanceof Tr?Sr(t,e):function(t,e){const n=wr(t,e),r=Cr(n)+Cr(t.Ae);return Qe(n)&&Qe(t.Ae)?pr(r):dr(t.serializer,r)}(t,e)}function vr(t,e,n){return t instanceof _r?Er(t,e):t instanceof Tr?Sr(t,e):n}function wr(t,e){return t instanceof Ar?function(t){return Qe(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class br extends mr{}class _r extends mr{constructor(t){super(),this.elements=t}}function Er(t,e){const n=Ir(e);for(const r of t.elements)n.some(t=>je(t,r))||n.push(r);return{arrayValue:{values:n}}}class Tr extends mr{constructor(t){super(),this.elements=t}}function Sr(t,e){let n=Ir(e);for(const r of t.elements)n=n.filter(t=>!je(t,r));return{arrayValue:{values:n}}}class Ar extends mr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Cr(t){return _e(t.integerValue||t.doubleValue)}function Ir(t){return Xe(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof _r&&e instanceof _r||t instanceof Tr&&e instanceof Tr?J(t.elements,e.elements,je):t instanceof Ar&&e instanceof Ar?je(t.Ae,e.Ae):t instanceof br&&e instanceof br}(t.transform,e.transform)}class xr{constructor(t,e){this.version=t,this.transformResults=e}}class Or{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Or}static exists(t){return new Or(void 0,t)}static updateTime(t){return new Or(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Nr(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class kr{}function Dr(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new qr(t.key,Or.none()):new Fr(t.key,t.data,Or.none());{const n=t.data,r=rn.empty();let i=new pe(rt.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new Vr(t.key,r,new me(i.toArray()),Or.none())}}function Pr(t,e,n){t instanceof Fr?function(t,e,n){const r=t.value.clone(),i=Br(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Vr?function(t,e,n){if(!Nr(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Br(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(jr(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Lr(t,e,n,r){return t instanceof Fr?function(t,e,n,r){if(!Nr(t.precondition,e))return n;const i=t.value.clone(),s=$r(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof Vr?function(t,e,n,r){if(!Nr(t.precondition,e))return n;const i=$r(t.fieldTransforms,r,e),s=e.data;return s.setAll(jr(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,r):function(t,e,n){return Nr(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Mr(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=wr(r.transform,t||null);null!=i&&(null===n&&(n=rn.empty()),n.set(r.field,i))}return n||null}function Ur(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&J(t,e,(t,e)=>Rr(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fr extends kr{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Vr extends kr{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jr(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Br(t,e,n){const r=new Map;k(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,vr(o,a,n[i]))}return r}function $r(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,yr(t,s,e))}return r}class qr extends kr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zr extends kr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Pr(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Lr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Lr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=or();return this.mutations.forEach(r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=Dr(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(yt.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),lr())}isEqual(t){return this.batchId===t.batchId&&J(this.mutations,t.mutations,(t,e)=>Ur(t,e))&&J(this.baseMutations,t.baseMutations,(t,e)=>Ur(t,e))}}class Hr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){k(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let r=function(){return cr}();const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Hr(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wr{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qr,Xr;function Yr(t){switch(t){case P.OK:return O(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return O(15467,{code:t})}}function Jr(t){if(void 0===t)return I("GRPC error has no .code"),P.UNKNOWN;switch(t){case Qr.OK:return P.OK;case Qr.CANCELLED:return P.CANCELLED;case Qr.UNKNOWN:return P.UNKNOWN;case Qr.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Qr.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Qr.INTERNAL:return P.INTERNAL;case Qr.UNAVAILABLE:return P.UNAVAILABLE;case Qr.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Qr.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Qr.NOT_FOUND:return P.NOT_FOUND;case Qr.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Qr.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Qr.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Qr.ABORTED:return P.ABORTED;case Qr.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Qr.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Qr.DATA_LOSS:return P.DATA_LOSS;default:return O(39323,{code:t})}}(Xr=Qr||(Qr={}))[Xr.OK=0]="OK",Xr[Xr.CANCELLED=1]="CANCELLED",Xr[Xr.UNKNOWN=2]="UNKNOWN",Xr[Xr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Xr[Xr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Xr[Xr.NOT_FOUND=5]="NOT_FOUND",Xr[Xr.ALREADY_EXISTS=6]="ALREADY_EXISTS",Xr[Xr.PERMISSION_DENIED=7]="PERMISSION_DENIED",Xr[Xr.UNAUTHENTICATED=16]="UNAUTHENTICATED",Xr[Xr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Xr[Xr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Xr[Xr.ABORTED=10]="ABORTED",Xr[Xr.OUT_OF_RANGE=11]="OUT_OF_RANGE",Xr[Xr.UNIMPLEMENTED=12]="UNIMPLEMENTED",Xr[Xr.INTERNAL=13]="INTERNAL",Xr[Xr.UNAVAILABLE=14]="UNAVAILABLE",Xr[Xr.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Zr=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ti(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new r([4294967295,4294967295],0);function ni(t){const e=ti().encode(t),n=new i;return n.update(e),new Uint8Array(n.digest())}function ri(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new r([n,i],0),new r([s,o],0)]}class ii{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new si(`Invalid padding: ${e}`);if(n<0)throw new si(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new si(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new si(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=r.fromNumber(this.ge)}ye(t,e,n){let i=t.add(e.multiply(r.fromNumber(n)));return 1===i.compare(ei)&&(i=new r([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.ge)return!1;const e=ni(t),[n,r]=ri(e);for(let i=0;i<this.hashCount;i++){const t=this.ye(n,r,i);if(!this.we(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new ii(i,r,e);return n.forEach(t=>s.insert(t)),s}insert(t){if(0===this.ge)return;const e=ni(t),[n,r]=ri(e);for(let i=0;i<this.hashCount;i++){const t=this.ye(n,r,i);this.Se(t)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class si extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,ai.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new oi(yt.min(),r,new he(K),er(),lr())}}class ai{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new ai(n,e,lr(),lr(),lr())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,e,n,r){this.be=t,this.removedTargetIds=e,this.key=n,this.De=r}}class ui{constructor(t,e){this.targetId=t,this.Ce=e}}class li{constructor(t,e,n=ve.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class hi{constructor(){this.ve=0,this.Fe=pi(),this.Me=ve.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=lr(),e=lr(),n=lr();return this.Fe.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:O(38017,{changeType:i})}}),new ai(this.Me,this.xe,t,e,n)}qe(){this.Oe=!1,this.Fe=pi()}Ke(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,k(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class fi{constructor(t){this.Ge=t,this.ze=new Map,this.je=er(),this.Je=di(),this.He=di(),this.Ze=new he(K)}Xe(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(t.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.Qe(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:O(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((t,n)=>{this.rt(n)&&e(n)})}st(t){const e=t.targetId,n=t.Ce.count,r=this.ot(e);if(r){const i=r.target;if(Dn(i))if(0===n){const t=new it(i.path);this.et(e,t,on.newNoDocument(t,yt.min()))}else k(1===n,20013,{expectedCount:n});else{const r=this._t(e);if(r!==n){const n=this.ut(t),i=n?this.ct(n,t,r):1;if(0!==i){this.it(e);const t=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,t)}Zr?.o(function(t,e,n,r,i){const s={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},o=e.unchangedNames;return o&&(s.bloomFilter={applied:0===i,hashCount:o?.hashCount??0,bitmapLength:o?.bits?.bitmap?.length??0,padding:o?.bits?.padding??0,mightContain:t=>r?.mightContain(t)??!1}),s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,t.Ce,this.Ge.ht(),n,i))}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=e;let s,o;try{s=Ee(n).toUint8Array()}catch(t){if(t instanceof ye)return R("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new ii(s,r,i)}catch(t){return R(t instanceof si?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.ge?null:o}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let r=0;return n.forEach(n=>{const i=this.Ge.ht(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.mightContain(s)||(this.et(e,n,null),r++)}),r}Tt(t){const e=new Map;this.ze.forEach((n,r)=>{const i=this.ot(r);if(i){if(n.current&&Dn(i.target)){const e=new it(i.target.path);this.Et(e).has(r)||this.It(r,e)||this.et(r,e,on.newNoDocument(e,t))}n.Be&&(e.set(r,n.ke()),n.qe())}});let n=lr();this.He.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.ot(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))}),this.je.forEach((e,n)=>n.setReadTime(t));const r=new oi(t,e,this.Ze,this.je,n);return this.je=er(),this.Je=di(),this.He=di(),this.Ze=new he(K),r}Ye(t,e){if(!this.rt(t))return;const n=this.It(t,e.key)?2:0;this.nt(t).Ke(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.He=this.He.insert(e.key,this.Rt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const r=this.nt(t);this.It(t,e)?r.Ke(e,1):r.Ue(e),this.He=this.He.insert(e,this.Rt(e).delete(t)),this.He=this.He.insert(e,this.Rt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new hi,this.ze.set(t,e)),e}Rt(t){let e=this.He.get(t);return e||(e=new pe(K),this.He=this.He.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new pe(K),this.Je=this.Je.insert(t,e)),e}rt(t){const e=null!==this.ot(t);return e||C("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new hi),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}It(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function di(){return new he(it.comparator)}function pi(){return new he(it.comparator)}const gi=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),mi=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),yi=(()=>{const t={and:"AND",or:"OR"};return t})();class vi{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function wi(t,e){return t.useProto3Json||kt(e)?e:{value:e}}function bi(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _i(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ei(t,e){return bi(t,e.toTimestamp())}function Ti(t){return k(!!t,49232),yt.fromTimestamp(function(t){const e=be(t);return new mt(e.seconds,e.nanos)}(t))}function Si(t,e){return Ai(t,e).canonicalString()}function Ai(t,e){const n=function(t){return new et(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function Ci(t){const e=et.fromString(t);return k(Qi(e),10190,{key:e.toString()}),e}function Ii(t,e){return Si(t.databaseId,e.path)}function Ri(t,e){const n=Ci(e);if(n.get(1)!==t.databaseId.projectId)throw new L(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new it(ki(n))}function xi(t,e){return Si(t.databaseId,e)}function Oi(t){const e=Ci(t);return 4===e.length?et.emptyPath():ki(e)}function Ni(t){return new et(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ki(t){return k(t.length>4&&"documents"===t.get(4),29091,{key:t.toString()}),t.popFirst(5)}function Di(t,e,n){return{name:Ii(t,e),fields:n.value.mapValue.fields}}function Pi(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:O(39313,{state:t})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(k(void 0===e||"string"==typeof e,58123),ve.fromBase64String(e||"")):(k(void 0===e||e instanceof Buffer||e instanceof Uint8Array,16193),ve.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?P.UNKNOWN:Jr(t.code);return new L(e,t.message||"")}(o);n=new li(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ri(t,r.document.name),s=Ti(r.document.updateTime),o=r.document.createTime?Ti(r.document.createTime):yt.min(),a=new rn({mapValue:{fields:r.document.fields}}),c=on.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new ci(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ri(t,r.document),s=r.readTime?Ti(r.readTime):yt.min(),o=on.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ci([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ri(t,r.document),s=r.removedTargetIds||[];n=new ci([],s,i,null)}else{if(!("filter"in e))return O(11601,{Vt:e});{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new Wr(r,i),o=t.targetId;n=new ui(o,s)}}return n}function Li(t,e){let n;if(e instanceof Fr)n={update:Di(t,e.key,e.value)};else if(e instanceof qr)n={delete:Ii(t,e.key)};else if(e instanceof Vr)n={update:Di(t,e.key,e.data),updateMask:Wi(e.fieldMask)};else{if(!(e instanceof zr))return O(16599,{dt:e.type});n={verify:Ii(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof br)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof _r)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Tr)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ar)return{fieldPath:e.field.canonicalString(),increment:n.Ae};throw O(20930,{transform:e.transform})}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ei(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:O(27497)}(t,e.precondition)),n}function Mi(t,e){return t&&t.length>0?(k(void 0!==e,14353),t.map(t=>function(t,e){let n=t.updateTime?Ti(t.updateTime):Ti(e);return n.isEqual(yt.min())&&(n=Ti(e)),new xr(n,t.transformResults||[])}(t,e))):[]}function Ui(t,e){return{documents:[xi(t,e.path)]}}function Fi(t,e){const n={structuredQuery:{}},r=e.path;let i;null!==e.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=xi(t,i);const s=function(t){if(0!==t.length)return Ki(pn.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Gi(t.field),direction:$i(t.dir)}}(t))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=wi(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{ft:n,parent:i}}function Vi(t){let e=Oi(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){k(1===r,65062);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Bi(t);return e instanceof pn&&mn(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map(t=>function(t){return new ln(Hi(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,kt(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new an(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new an(n,e)}(n.endAt)),Ln(e,i,o,s,a,"F",c,u)}function ji(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O(28987,{purpose:t})}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function Bi(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Hi(t.unaryFilter.field);return dn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Hi(t.unaryFilter.field);return dn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Hi(t.unaryFilter.field);return dn.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Hi(t.unaryFilter.field);return dn.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return O(61313);default:return O(60726)}}(t):void 0!==t.fieldFilter?function(t){return dn.create(Hi(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return O(58110);default:return O(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return pn.create(t.compositeFilter.filters.map(t=>Bi(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return O(1026)}}(t.compositeFilter.op))}(t):O(30097,{filter:t})}function $i(t){return gi[t]}function qi(t){return mi[t]}function zi(t){return yi[t]}function Gi(t){return{fieldPath:t.canonicalString()}}function Hi(t){return rt.fromServerFormat(t.fieldPath)}function Ki(t){return t instanceof dn?function(t){if("=="===t.op){if(Je(t.value))return{unaryFilter:{field:Gi(t.field),op:"IS_NAN"}};if(Ye(t.value))return{unaryFilter:{field:Gi(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Je(t.value))return{unaryFilter:{field:Gi(t.field),op:"IS_NOT_NAN"}};if(Ye(t.value))return{unaryFilter:{field:Gi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gi(t.field),op:qi(t.op),value:t.value}}}(t):t instanceof pn?function(t){const e=t.getFilters().map(t=>Ki(t));return 1===e.length?e[0]:{compositeFilter:{op:zi(t.op),filters:e}}}(t):O(54877,{filter:t})}function Wi(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Qi(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}function Xi(t){return!!t&&"function"==typeof t._toProto&&"ProtoValue"===t._protoValueType}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yi{constructor(t,e,n,r,i=yt.min(),s=yt.min(),o=ve.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Yi(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Yi(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(t){this.yt=t}}function Zi(t){const e=Vi({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Gn(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(){}Dt(t,e){this.Ct(t,e),e.vt()}Ct(t,e){if("nullValue"in t)this.Ft(e,5);else if("booleanValue"in t)this.Ft(e,10),e.Mt(t.booleanValue?1:0);else if("integerValue"in t)this.Ft(e,15),e.Mt(_e(t.integerValue));else if("doubleValue"in t){const n=_e(t.doubleValue);isNaN(n)?this.Ft(e,13):(this.Ft(e,15),Dt(n)?e.Mt(0):e.Mt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Ft(e,20),"string"==typeof n&&(n=be(n)),e.xt(`${n.seconds||""}`),e.Mt(n.nanos||0)}else if("stringValue"in t)this.Ot(t.stringValue,e),this.Nt(e);else if("bytesValue"in t)this.Ft(e,30),e.Bt(Ee(t.bytesValue)),this.Nt(e);else if("referenceValue"in t)this.Lt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Ft(e,45),e.Mt(n.latitude||0),e.Mt(n.longitude||0)}else"mapValue"in t?nn(t)?this.Ft(e,Number.MAX_SAFE_INTEGER):tn(t)?this.kt(t.mapValue,e):(this.qt(t.mapValue,e),this.Nt(e)):"arrayValue"in t?(this.Kt(t.arrayValue,e),this.Nt(e)):O(19022,{Ut:t})}Ot(t,e){this.Ft(e,25),this.$t(t,e)}$t(t,e){e.xt(t)}qt(t,e){const n=t.fields||{};this.Ft(e,55);for(const r of Object.keys(n))this.Ot(r,e),this.Ct(n[r],e)}kt(t,e){const n=t.fields||{};this.Ft(e,53);const r=Fe,i=n[r].arrayValue?.values?.length||0;this.Ft(e,15),e.Mt(_e(i)),this.Ot(r,e),this.Ct(n[r],e)}Kt(t,e){const n=t.values||[];this.Ft(e,50);for(const r of n)this.Ct(r,e)}Lt(t,e){this.Ft(e,37),it.fromName(t).path.forEach(t=>{this.Ft(e,60),this.$t(t,e)})}Ft(t,e){t.Mt(e)}Nt(t){t.Mt(2)}}ts.Wt=new ts;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class es{constructor(){this.bn=new ns}addToCollectionParentIndex(t,e){return this.bn.add(e),It.resolve()}getCollectionParents(t,e){return It.resolve(this.bn.getEntries(e))}addFieldIndex(t,e){return It.resolve()}deleteFieldIndex(t,e){return It.resolve()}deleteAllFieldIndexes(t){return It.resolve()}createTargetIndexes(t,e){return It.resolve()}getDocumentsMatchingTarget(t,e){return It.resolve(null)}getIndexType(t,e){return It.resolve(0)}getFieldIndexes(t,e){return It.resolve([])}getNextCollectionGroupToUpdate(t){return It.resolve(null)}getMinOffset(t,e){return It.resolve(Et.min())}getMinOffsetFromCollectionGroup(t,e){return It.resolve(Et.min())}updateCollectionGroup(t,e,n){return It.resolve()}updateIndexEntries(t,e){return It.resolve()}}class ns{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new pe(et.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new pe(et.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rs={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},is=41943040;class ss{static withCacheSize(t){return new ss(t,ss.DEFAULT_COLLECTION_PERCENTILE,ss.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ss.DEFAULT_COLLECTION_PERCENTILE=10,ss.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ss.DEFAULT=new ss(is,ss.DEFAULT_COLLECTION_PERCENTILE,ss.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ss.DISABLED=new ss(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class os{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new os(0)}static ar(){return new os(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const as="LruGarbageCollector",cs=1048576;function us([t,e],[n,r]){const i=K(t,n);return 0===i?K(e,r):i}class ls{constructor(t){this.Pr=t,this.buffer=new pe(us),this.Tr=0}Er(){return++this.Tr}Ir(t){const e=[t,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();us(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class hs{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Ar(t){C(as,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){xt(t)?C(as,"Ignoring IndexedDB error during garbage collection: ",t):await Ct(t)}await this.Ar(3e5)})}}class fs{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(t=>Math.floor(e/100*t))}nthSequenceNumber(t,e){if(0===e)return It.resolve(Ot.ce);const n=new ls(e);return this.Vr.forEachTarget(t,t=>n.Ir(t.sequenceNumber)).next(()=>this.Vr.mr(t,t=>n.Ir(t))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Vr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector","Garbage collection skipped; disabled"),It.resolve(rs)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rs):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let n,r,i,s,o,a,c;const u=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(e=>(e>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,s=Date.now(),this.nthSequenceNumber(t,r))).next(r=>(n=r,o=Date.now(),this.removeTargets(t,n,e))).next(e=>(i=e,a=Date.now(),this.removeOrphanedDocuments(t,n))).next(t=>(c=Date.now(),A()<=v.$b.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-u}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(a-o)+"ms\n"+`\tRemoved ${t} documents in `+(c-a)+"ms\n"+`Total Duration: ${c-u}ms`),It.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:t})))}}function ds(t,e){return new fs(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ps{constructor(){this.changes=new Zn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,on.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?It.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gs{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(t=>(null!==n&&Lr(n.mutation,t,me.empty(),mt.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,lr()).next(()=>e))}getLocalViewOfDocuments(t,e,n=lr()){const r=sr();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(t=>{let e=rr();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){const n=sr();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,lr()))}populateOverlays(t,e,n){const r=[];return n.forEach(t=>{e.has(t)||r.push(t)}),this.documentOverlayCache.getOverlays(t,r).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,r){let i=er();const s=ar(),o=function(){return ar()}();return e.forEach((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Vr)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Lr(o.mutation,e,o.mutation.getFieldMask(),mt.now())):s.set(e.key,me.empty())}),this.recalculateAndSaveOverlays(t,i).next(t=>(t.forEach((t,e)=>s.set(t,e)),e.forEach((t,e)=>o.set(t,new gs(e,s.get(t)??null))),o))}recalculateAndSaveOverlays(t,e){const n=ar();let r=new he((t,e)=>t-e),i=lr();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(const i of t)i.keys().forEach(t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||me.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||lr()).add(t);r=r.insert(i.batchId,a)})}).next(()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=or();c.forEach(t=>{if(!i.has(t)){const r=Dr(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}}),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return It.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n,r){return Fn(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Vn(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):It.resolve(sr());let o=vt,a=i;return s.next(e=>It.forEach(e,(e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?It.resolve():this.remoteDocumentCache.getEntry(t,e).next(t=>{a=a.insert(e,t)}))).next(()=>this.populateOverlays(t,e,i)).next(()=>this.computeViews(t,a,e,lr())).next(t=>({batchId:o,changes:ir(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new it(e)).next(t=>{let e=rr();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const i=e.collectionGroup;let s=rr();return this.indexManager.getCollectionParents(t,i).next(o=>It.forEach(o,o=>{const a=function(t,e){return new Pn(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(i));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next(t=>{t.forEach((t,e)=>{s=s.insert(t,e)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,r))).next(t=>{i.forEach((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,on.newInvalidDocument(r)))});let n=rr();return t.forEach((t,r)=>{const s=i.get(t);void 0!==s&&Lr(s.mutation,r,me.empty(),mt.now()),Qn(e,r)&&(n=n.insert(t,r))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return It.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Ti(t.createTime)}}(e)),It.resolve()}getNamedQuery(t,e){return It.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(t){return{name:t.name,query:Zi(t.bundledQuery),readTime:Ti(t.readTime)}}(e)),It.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(){this.overlays=new he(it.comparator),this.Lr=new Map}getOverlay(t,e){return It.resolve(this.overlays.get(e))}getOverlays(t,e){const n=sr();return It.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,r)=>{this.St(t,e,r)}),It.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Lr.get(n);return void 0!==r&&(r.forEach(t=>this.overlays=this.overlays.remove(t)),this.Lr.delete(n)),It.resolve()}getOverlaysForCollection(t,e,n){const r=sr(),i=e.length+1,s=new it(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return It.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new he((t,e)=>t-e);const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=sr(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=sr(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((t,e)=>o.set(t,e)),o.size()>=r)break;return It.resolve(o)}St(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Lr.get(r.largestBatchId).delete(n.key);this.Lr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Kr(e,n));let i=this.Lr.get(e);void 0===i&&(i=lr(),this.Lr.set(e,i)),this.Lr.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.sessionToken=ve.EMPTY_BYTE_STRING}getSessionToken(t){return It.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,It.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.kr=new pe(_s.qr),this.Kr=new pe(_s.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const n=new _s(t,e);this.kr=this.kr.add(n),this.Kr=this.Kr.add(n)}$r(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.Wr(new _s(t,e))}Qr(t,e){t.forEach(t=>this.removeReference(t,e))}Gr(t){const e=new it(new et([])),n=new _s(e,t),r=new _s(e,t+1),i=[];return this.Kr.forEachInRange([n,r],t=>{this.Wr(t),i.push(t.key)}),i}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.Kr=this.Kr.delete(t)}jr(t){const e=new it(new et([])),n=new _s(e,t),r=new _s(e,t+1);let i=lr();return this.Kr.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new _s(t,0),n=this.kr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class _s{constructor(t,e){this.key=t,this.Jr=e}static qr(t,e){return it.comparator(t.key,e.key)||K(t.Jr,e.Jr)}static Ur(t,e){return K(t.Jr,e.Jr)||it.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Hr=new pe(_s.qr)}checkEmpty(t){return It.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Gr(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.Hr=this.Hr.add(new _s(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return It.resolve(s)}lookupMutationBatch(t,e){return It.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Xr(n),i=r<0?0:r;return It.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return It.resolve(0===this.mutationQueue.length?Nt:this.Yn-1)}getAllMutationBatches(t){return It.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new _s(e,0),r=new _s(e,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([n,r],t=>{const e=this.Zr(t.Jr);i.push(e)}),It.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new pe(K);return e.forEach(t=>{const e=new _s(t,0),r=new _s(t,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([e,r],t=>{n=n.add(t.Jr)})}),It.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;it.isDocumentKey(i)||(i=i.child(""));const s=new _s(new it(i),0);let o=new pe(K);return this.Hr.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.Jr)),!0)},s),It.resolve(this.Yr(o))}Yr(t){const e=[];return t.forEach(t=>{const n=this.Zr(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){k(0===this.ei(e.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Hr;return It.forEach(e.mutations,r=>{const i=new _s(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Hr=n})}nr(t){}containsKey(t,e){const n=new _s(e,0),r=this.Hr.firstAfterOrEqual(n);return It.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,It.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(t){this.ti=t,this.docs=function(){return new he(it.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.ti(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return It.resolve(n?n.document.mutableCopy():on.newInvalidDocument(e))}getEntries(t,e){let n=er();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():on.newInvalidDocument(t))}),It.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=er();const s=e.path,o=new it(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Tt(_t(o),n)<=0||(r.has(o.key)||Qn(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return It.resolve(i)}getAllFromCollectionGroup(t,e,n,r){O(9500)}ni(t,e){return It.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Ss(this)}getSize(t){return It.resolve(this.size)}}class Ss extends ps{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.Mr.addEntry(t,r)):this.Mr.removeEntry(n)}),It.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(t){this.persistence=t,this.ri=new Zn(t=>Nn(t),kn),this.lastRemoteSnapshotVersion=yt.min(),this.highestTargetId=0,this.ii=0,this.si=new bs,this.targetCount=0,this.oi=os._r()}forEachTarget(t,e){return this.ri.forEach((t,n)=>e(n)),It.resolve()}getLastRemoteSnapshotVersion(t){return It.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return It.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),It.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ii&&(this.ii=e),It.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new os(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,It.resolve()}updateTargetData(t,e){return this.lr(e),It.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,It.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.ri.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.ri.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),It.waitFor(i).next(()=>r)}getTargetCount(t){return It.resolve(this.targetCount)}getTargetData(t,e){const n=this.ri.get(e)||null;return It.resolve(n)}addMatchingKeys(t,e,n){return this.si.$r(e,n),It.resolve()}removeMatchingKeys(t,e,n){this.si.Qr(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),It.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),It.resolve()}getMatchingKeysForTargetId(t,e){const n=this.si.jr(e);return It.resolve(n)}containsKey(t,e){return It.resolve(this.si.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t,e){this._i={},this.overlays={},this.ai=new Ot(0),this.ui=!1,this.ui=!0,this.ci=new ws,this.referenceDelegate=t(this),this.li=new As(this),this.indexManager=new es,this.remoteDocumentCache=function(t){return new Ts(t)}(t=>this.referenceDelegate.hi(t)),this.serializer=new Ji(e),this.Pi=new ys(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new vs,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this._i[t.toKey()];return n||(n=new Es(e,this.referenceDelegate),this._i[t.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,n){C("MemoryPersistence","Starting transaction:",t);const r=new Is(this.ai.next());return this.referenceDelegate.Ti(),n(r).next(t=>this.referenceDelegate.Ei(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ii(t,e){return It.or(Object.values(this._i).map(n=>()=>n.containsKey(t,e)))}}class Is extends At{constructor(t){super(),this.currentSequenceNumber=t}}class Rs{constructor(t){this.persistence=t,this.Ri=new bs,this.Ai=null}static Vi(t){return new Rs(t)}get di(){if(this.Ai)return this.Ai;throw O(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.di.delete(n.toString()),It.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.di.add(n.toString()),It.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),It.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(t=>this.di.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.di.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ei(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return It.forEach(this.di,n=>{const r=it.fromPath(n);return this.mi(t,r).next(t=>{t||e.removeEntry(r,yt.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(t=>{t?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return It.or([()=>It.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ii(t,e)])}}class xs{constructor(t,e){this.persistence=t,this.fi=new Zn(t=>Mt(t.path),(t,e)=>t.isEqual(e)),this.garbageCollector=ds(this,e)}static Vi(t,e){return new xs(t,e)}Ti(){}Ei(t){return It.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}pr(t){let e=0;return this.mr(t,t=>{e++}).next(()=>e)}mr(t,e){return It.forEach(this.fi,(n,r)=>this.wr(t,n,r).next(t=>t?It.resolve():e(r)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(t,r=>this.wr(t,r,e).next(t=>{t||(n++,i.removeEntry(r,yt.min()))})).next(()=>i.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),It.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),It.resolve()}removeReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),It.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),It.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Ke(t.data.value)),e}wr(t,e,n){return It.or([()=>this.persistence.Ii(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const t=this.fi.get(e);return It.resolve(void 0!==t&&t>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Os{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Ts=n,this.Es=r}static Is(t,e){let n=lr(),r=lr();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Os(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return(0,a.nr)()?8:Rt((0,a.ZQ)())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,r){const i={result:null};return this.gs(t,e).next(t=>{i.result=t}).next(()=>{if(!i.result)return this.ps(t,e,r,n).next(t=>{i.result=t})}).next(()=>{if(i.result)return;const n=new Ns;return this.ys(t,e,n).next(r=>{if(i.result=r,this.As)return this.ws(t,e,n,r.size)})}).next(()=>i.result)}ws(t,e,n,r){return n.documentReadCount<this.Vs?(A()<=v.$b.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",Wn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),It.resolve()):(A()<=v.$b.DEBUG&&C("QueryEngine","Query:",Wn(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ds*r?(A()<=v.$b.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",Wn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Bn(e))):It.resolve())}gs(t,e){if(Un(e))return It.resolve(null);let n=Bn(e);return this.indexManager.getIndexType(t,n).next(r=>0===r?null:(null!==e.limit&&1===r&&(e=Gn(e,null,"F"),n=Bn(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(r=>{const i=lr(...r);return this.fs.getDocuments(t,i).next(r=>this.indexManager.getMinOffset(t,n).next(n=>{const s=this.Ss(e,r);return this.bs(e,s,i,n.readTime)?this.gs(t,Gn(e,null,"F")):this.Ds(t,s,e,n)}))})))}ps(t,e,n,r){return Un(e)||r.isEqual(yt.min())?It.resolve(null):this.fs.getDocuments(t,n).next(i=>{const s=this.Ss(e,i);return this.bs(e,s,n,r)?It.resolve(null):(A()<=v.$b.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Wn(e)),this.Ds(t,s,e,bt(r,vt)).next(t=>t))})}Ss(t,e){let n=new pe(Yn(t));return e.forEach((e,r)=>{Qn(t,r)&&(n=n.add(r))}),n}bs(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(t,e,n){return A()<=v.$b.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",Wn(e)),this.fs.getDocumentsMatchingQuery(t,e,Et.min(),n)}Ds(t,e,n,r){return this.fs.getDocumentsMatchingQuery(t,n,r).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds="LocalStore",Ps=3e8;class Ls{constructor(t,e,n,r){this.persistence=t,this.Cs=e,this.serializer=r,this.vs=new he(K),this.Fs=new Zn(t=>Nn(t),kn),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(n)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ms(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function Ms(t,e,n,r){return new Ls(t,e,n,r)}async function Us(t,e){const n=D(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next(i=>(r=i,n.Os(e),n.mutationQueue.getAllMutationBatches(t))).next(e=>{const i=[],s=[];let o=lr();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next(t=>({Ns:t,removedBatchIds:i,addedBatchIds:s}))})})}function Fs(t,e){const n=D(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=It.resolve();return s.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const s=n.docVersions.get(t);k(null!==s,48541),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))})}),o.next(()=>t.mutationQueue.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=lr();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>n.localDocuments.getDocuments(t,r))})}function Vs(t){const e=D(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function js(t,e){const n=D(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const o=[];e.targetChanges.forEach((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.li.removeMatchingKeys(t,s.removedDocuments,a).next(()=>n.li.addMatchingKeys(t,s.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(ve.EMPTY_BYTE_STRING,yt.min()).withLastLimboFreeSnapshotVersion(yt.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){if(0===t.resumeToken.approximateByteSize())return!0;const r=e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds();if(r>=Ps)return!0;const i=n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size;return i>0}(c,u,s)&&o.push(n.li.updateTargetData(t,u))});let a=er(),c=lr();if(e.documentUpdates.forEach(r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(Bs(t,s,e.documentUpdates).next(t=>{a=t.Bs,c=t.Ls})),!r.isEqual(yt.min())){const e=n.li.getLastRemoteSnapshotVersion(t).next(e=>n.li.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return It.waitFor(o).next(()=>s.apply(t)).next(()=>n.localDocuments.getLocalViewOfDocuments(t,a,c)).next(()=>a)}).then(t=>(n.vs=i,t))}function Bs(t,e,n){let r=lr(),i=lr();return n.forEach(t=>r=r.add(t)),e.getEntries(t,r).next(t=>{let r=er();return n.forEach((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(yt.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):C(Ds,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)}),{Bs:r,Ls:i}})}function $s(t,e){const n=D(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=Nt),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e)))}function qs(t,e){const n=D(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.li.getTargetData(t,e).next(i=>i?(r=i,It.resolve(r)):n.li.allocateTargetId(t).next(i=>(r=new Yi(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.li.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.vs.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.vs=n.vs.insert(t.targetId,t),n.Fs.set(e,t.targetId)),t})}async function zs(t,e,n){const r=D(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!xt(t))throw t;C(Ds,`Failed to update sequence numbers for target ${e}: ${t}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function Gs(t,e,n){const r=D(t);let i=yt.min(),s=lr();return r.persistence.runTransaction("Execute query","readwrite",t=>function(t,e,n){const r=D(t),i=r.Fs.get(n);return void 0!==i?It.resolve(r.vs.get(i)):r.li.getTargetData(e,n)}(r,t,Bn(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>r.Cs.getDocumentsMatchingQuery(t,e,n?i:yt.min(),n?s:lr())).next(t=>(Hs(r,Xn(e),t),{documents:t,ks:s})))}function Hs(t,e,n){let r=t.Ms.get(e)||yt.min();n.forEach((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)}),t.Ms.set(e,r)}class Ks{constructor(){this.activeTargetIds=fr()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ws{constructor(){this.vo=new Ks,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,n){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new Ks,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{Mo(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs="ConnectivityMonitor";class Ys{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){C(Xs,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){C(Xs,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Js=null;function Zs(){return null===Js?Js=function(){return 268435456+Math.round(2147483648*Math.random())}():Js++,"0x"+Js.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const to="RestConnection",eo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class no{get qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Uo=`projects/${n}/databases/${r}`,this.$o=this.databaseId.database===Ne?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Wo(t,e,n,r,i){const s=Zs(),o=this.Qo(t,e.toUriEncodedString());C(to,`Sending RPC '${t}' ${s}:`,o,n);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,r,i);const{host:u}=new URL(o),l=(0,a.zJ)(u);return this.zo(t,o,c,n,l).then(e=>(C(to,`Received RPC '${t}' ${s}: `,e),e),e=>{throw R(to,`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e})}jo(t,e,n,r,i,s){return this.Wo(t,e,n,r,i)}Go(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+E}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}Qo(t,e){const n=eo[t];let r=`${this.Ko}/v1/${e}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io="WebChannelConnection",so=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};class oo extends no{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!oo.c_){const t=m();so(t,g.STAT_EVENT,t=>{t.stat===p.PROXY?C(io,"STAT_EVENT: detected buffering proxy"):t.stat===p.NOPROXY&&C(io,"STAT_EVENT: detected no buffering proxy")}),oo.c_=!0}}zo(t,e,n,r,i){const s=Zs();return new Promise((i,o)=>{const a=new l;a.setWithCredentials(!0),a.listenOnce(f.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case d.NO_ERROR:const e=a.getResponseJson();C(io,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(e)),i(e);break;case d.TIMEOUT:C(io,`RPC '${t}' ${s} timed out`),o(new L(P.DEADLINE_EXCEEDED,"Request time out"));break;case d.HTTP_ERROR:const n=a.getStatus();if(C(io,`RPC '${t}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=t?.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(e)>=0?e:P.UNKNOWN}(e.status);o(new L(t,e.message))}else o(new L(P.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new L(P.UNAVAILABLE,"Connection failed."));break;default:O(9055,{l_:t,streamId:s,h_:a.getLastErrorCode(),P_:a.getLastError()})}}finally{C(io,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(r);C(io,`RPC '${t}' ${s} sending request:`,r),a.send(e,"POST",c,n,15)})}T_(t,e,n){const r=Zs(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=this.createWebChannelTransport(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},a=this.longPollingOptions.timeoutSeconds;void 0!==a&&(o.longPollingTimeout=Math.round(1e3*a)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Go(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const c=i.join("");C(io,`Creating RPC '${t}' stream ${r}: ${c}`,o);const u=s.createWebChannel(c,o);this.E_(u);let l=!1,f=!1;const d=new ro({Jo:e=>{f?C(io,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(l||(C(io,`Opening RPC '${t}' stream ${r} transport.`),u.open(),l=!0),C(io,`RPC '${t}' stream ${r} sending:`,e),u.send(e))},Ho:()=>u.close()});return so(u,h.EventType.OPEN,()=>{f||(C(io,`RPC '${t}' stream ${r} transport opened.`),d.i_())}),so(u,h.EventType.CLOSE,()=>{f||(f=!0,C(io,`RPC '${t}' stream ${r} transport closed`),d.o_(),this.I_(u))}),so(u,h.EventType.ERROR,e=>{f||(f=!0,R(io,`RPC '${t}' stream ${r} transport errored. Name:`,e.name,"Message:",e.message),d.o_(new L(P.UNAVAILABLE,"The operation could not be completed")))}),so(u,h.EventType.MESSAGE,e=>{if(!f){const n=e.data[0];k(!!n,16349);const i=n,s=i?.error||i[0]?.error;if(s){C(io,`RPC '${t}' stream ${r} received error:`,s);const e=s.status;let n=function(t){const e=Qr[t];if(void 0!==e)return Jr(e)}(e),i=s.message;"NOT_FOUND"===e&&i.includes("database")&&i.includes("does not exist")&&i.includes(this.databaseId.database)&&R(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),void 0===n&&(n=P.INTERNAL,i="Unknown error status: "+e+" with message "+s.message),f=!0,d.o_(new L(n,i)),u.close()}else C(io,`RPC '${t}' stream ${r} received:`,n),d.__(n)}}),oo.u_(),setTimeout(()=>{d.s_()},0),d}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}E_(t){this.a_.push(t)}I_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,n){super.Go(t,e,n),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t){return new oo(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t){return new vi(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oo.c_=!1;class lo{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Ci=t,this.timerId=e,this.R_=n,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,e-n);r>0&&C("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho="PersistentStream";class fo{constructor(t,e,n,r,i,s,o,a){this.Ci=t,this.S_=n,this.b_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new lo(t,e)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.K_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.K_(),this.U_(),this.M_.cancel(),this.D_++,4!==t?this.M_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(I(e.toString()),I("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===P.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.D_===e&&this.G_(t,n)},e=>{t(()=>{const t=new L(P.UNKNOWN,"Fetching auth token failed: "+e.message);return this.z_(t)})})}G_(t,e){const n=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.Yo(()=>{n(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(t=>{n(()=>this.z_(t))}),this.stream.onMessage(t=>{n(()=>1==++this.F_?this.J_(t):this.onNext(t))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return C(ho,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(C(ho,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class po extends fo{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=Pi(this.serializer,t),n=function(t){if(!("targetChange"in t))return yt.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?yt.min():e.readTime?Ti(e.readTime):yt.min()}(t);return this.listener.H_(e,n)}Z_(t){const e={};e.database=Ni(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=Dn(r)?{documents:Ui(t,r)}:{query:Fi(t,r).ft},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=_i(t,e.resumeToken);const r=wi(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(yt.min())>0){n.readTime=bi(t,e.snapshotVersion.toTimestamp());const r=wi(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=ji(this.serializer,t);n&&(e.labels=n),this.q_(e)}X_(t){const e={};e.database=Ni(this.serializer),e.removeTarget=t,this.q_(e)}}class go extends fo{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return k(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,k(!t.writeResults||0===t.writeResults.length,55816),this.listener.ta()}onNext(t){k(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Mi(t.writeResults,t.commitTime),n=Ti(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=Ni(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>Li(this.serializer,t))};this.q_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{}class yo extends mo{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Wo(t,Ai(e,n),r,i,s)).catch(t=>{throw"FirebaseError"===t.name?(t.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new L(P.UNKNOWN,t.toString())})}jo(t,e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.jo(t,Ai(e,n),r,s,o,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new L(P.UNKNOWN,t.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function vo(t,e,n,r){return new yo(t,e,n,r)}class wo{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,"Online"===t&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(I(e),this.aa=!1):C("OnlineStateTracker",e)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="RemoteStore";class _o{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(t=>{n.enqueueAndForget(async()=>{Oo(this)&&(C(bo,"Restarting streams for network reachability change."),await async function(t){const e=D(t);e.Ia.add(4),await To(e),e.Va.set("Unknown"),e.Ia.delete(4),await Eo(e)}(this))})}),this.Va=new wo(n,r)}}async function Eo(t){if(Oo(t))for(const e of t.Ra)await e(!0)}async function To(t){for(const e of t.Ra)await e(!1)}function So(t,e){const n=D(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),xo(n)?Ro(n):Qo(n).O_()&&Co(n,e))}function Ao(t,e){const n=D(t),r=Qo(n);n.Ea.delete(e),r.O_()&&Io(n,e),0===n.Ea.size&&(r.O_()?r.L_():Oo(n)&&n.Va.set("Unknown"))}function Co(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(yt.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qo(t).Z_(e)}function Io(t,e){t.da.$e(e),Qo(t).X_(e)}function Ro(t){t.da=new fi({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Qo(t).start(),t.Va.ua()}function xo(t){return Oo(t)&&!Qo(t).x_()&&t.Ea.size>0}function Oo(t){return 0===D(t).Ia.size}function No(t){t.da=void 0}async function ko(t){t.Va.set("Online")}async function Do(t){t.Ea.forEach((e,n)=>{Co(t,e)})}async function Po(t,e){No(t),xo(t)?(t.Va.ha(e),Ro(t)):t.Va.set("Unknown")}async function Lo(t,e,n){if(t.Va.set("Online"),e instanceof li&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Ea.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Ea.delete(r),t.da.removeTarget(r))}(t,e)}catch(n){C(bo,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Mo(t,n)}else if(e instanceof ci?t.da.Xe(e):e instanceof ui?t.da.st(e):t.da.tt(e),!n.isEqual(yt.min()))try{const e=await Vs(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.da.Tt(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Ea.get(r);i&&t.Ea.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach((e,n)=>{const r=t.Ea.get(e);if(!r)return;t.Ea.set(e,r.withResumeToken(ve.EMPTY_BYTE_STRING,r.snapshotVersion)),Io(t,e);const i=new Yi(r.target,e,n,r.sequenceNumber);Co(t,i)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){C(bo,"Failed to raise snapshot:",e),await Mo(t,e)}}async function Mo(t,e,n){if(!xt(e))throw e;t.Ia.add(1),await To(t),t.Va.set("Offline"),n||(n=()=>Vs(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{C(bo,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Eo(t)})}function Uo(t,e){return e().catch(n=>Mo(t,n,e))}async function Fo(t){const e=D(t),n=Xo(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Nt;for(;Vo(e);)try{const t=await $s(e.localStore,r);if(null===t){0===e.Ta.length&&n.L_();break}r=t.batchId,jo(e,t)}catch(t){await Mo(e,t)}Bo(e)&&$o(e)}function Vo(t){return Oo(t)&&t.Ta.length<10}function jo(t,e){t.Ta.push(e);const n=Xo(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function Bo(t){return Oo(t)&&!Xo(t).x_()&&t.Ta.length>0}function $o(t){Xo(t).start()}async function qo(t){Xo(t).ra()}async function zo(t){const e=Xo(t);for(const n of t.Ta)e.ea(n.mutations)}async function Go(t,e,n){const r=t.Ta.shift(),i=Hr.from(r,e,n);await Uo(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Fo(t)}async function Ho(t,e){e&&Xo(t).Y_&&await async function(t,e){if(function(t){return Yr(t)&&t!==P.ABORTED}(e.code)){const n=t.Ta.shift();Xo(t).B_(),await Uo(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Fo(t)}}(t,e),Bo(t)&&$o(t)}async function Ko(t,e){const n=D(t);n.asyncQueue.verifyOperationInProgress(),C(bo,"RemoteStore received new credentials");const r=Oo(n);n.Ia.add(3),await To(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Eo(n)}async function Wo(t,e){const n=D(t);e?(n.Ia.delete(2),await Eo(n)):e||(n.Ia.add(2),await To(n),n.Va.set("Unknown"))}function Qo(t){return t.ma||(t.ma=function(t,e,n){const r=D(t);return r.sa(),new po(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Zo:ko.bind(null,t),Yo:Do.bind(null,t),t_:Po.bind(null,t),H_:Lo.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),xo(t)?Ro(t):t.Va.set("Unknown")):(await t.ma.stop(),No(t))})),t.ma}function Xo(t){return t.fa||(t.fa=function(t,e,n){const r=D(t);return r.sa(),new go(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:qo.bind(null,t),t_:Ho.bind(null,t),ta:zo.bind(null,t),na:Go.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Fo(t)):(await t.fa.stop(),t.Ta.length>0&&(C(bo,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Yo{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new M,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Yo(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new L(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jo(t,e){if(I("AsyncQueue",`${e}: ${t}`),xt(t))return new L(P.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{static emptySet(t){return new Zo(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||it.comparator(e.key,n.key):(t,e)=>it.comparator(t.key,e.key),this.keyedMap=rr(),this.sortedSet=new he(this.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Zo))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Zo;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(){this.ga=new he(it.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?0!==t.type&&3===n.type?this.ga=this.ga.insert(e,t):3===t.type&&1!==n.type?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.ga=this.ga.remove(e):1===t.type&&2===n.type?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):O(63341,{Vt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,n)=>{t.push(n)}),t}}class ea{constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach(t=>{s.push({type:0,doc:t})}),new ea(t,e,Zo.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Hn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class ra{constructor(){this.queries=ia(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(t,e){const n=D(t),r=n.queries;n.queries=ia(),r.forEach((t,n)=>{for(const r of n.Sa)r.onError(e)})}(this,new L(P.ABORTED,"Firestore shutting down"))}}function ia(){return new Zn(t=>Kn(t),Hn)}async function sa(t,e){const n=D(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new na,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(t){const n=Jo(t,`Initialization of query '${Wn(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&ua(n)}async function oa(t,e){const n=D(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const t=s.Sa.indexOf(e);t>=0&&(s.Sa.splice(t,1),0===s.Sa.length?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function aa(t,e){const n=D(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.Sa)t.Fa(i)&&(r=!0);e.wa=i}}r&&ua(n)}function ca(t,e,n){const r=D(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function ua(t){t.Ca.forEach(t=>{t.next()})}var la,ha;(ha=la||(la={})).Ma="default",ha.Cache="cache";class fa{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new ea(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache)return!0;if(!this.Da())return!0;const n="Offline"!==e;return(!this.options.qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}ka(t){t=ea.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==la.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class da{constructor(t){this.key=t}}class pa{constructor(t){this.key=t}}class ga{constructor(t,e){this.query=t,this.Za=e,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=lr(),this.mutatedKeys=lr(),this.eu=Yn(t),this.tu=new Zo(this.eu)}get nu(){return this.Za}ru(t,e){const n=e?e.iu:new ta,r=e?e.tu:this.tu;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=Qn(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.su(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.eu(l,a)>0||c&&this.eu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))}),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{tu:s,iu:n,bs:o,mutatedKeys:i}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const s=t.iu.ya();s.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O(20277,{Vt:t})}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.eu(t.doc,e.doc)),this.ou(n),r=r??!1;const o=e&&!r?this._u():[],a=0===this.Ya.size&&this.current&&!r?1:0,c=a!==this.Xa;return this.Xa=a,0!==s.length||c?{snapshot:new ea(this.query,t.tu,i,s,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:o}:{au:o}}va(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ta,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=lr(),this.tu.forEach(t=>{this.uu(t.key)&&(this.Ya=this.Ya.add(t.key))});const e=[];return t.forEach(t=>{this.Ya.has(t)||e.push(new pa(t))}),this.Ya.forEach(n=>{t.has(n)||e.push(new da(n))}),e}cu(t){this.Za=t.ks,this.Ya=lr();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return ea.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,0===this.Xa,this.hasCachedResults)}}const ma="SyncEngine";class ya{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class va{constructor(t){this.key=t,this.hu=!1}}class wa{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Pu={},this.Tu=new Zn(t=>Kn(t),Hn),this.Eu=new Map,this.Iu=new Set,this.Ru=new he(it.comparator),this.Au=new Map,this.Vu=new bs,this.du={},this.mu=new Map,this.fu=os.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}}async function ba(t,e,n=!0){const r=$a(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await Ea(r,e,n,!0),i}async function _a(t,e){const n=$a(t);await Ea(n,e,!0,!1)}async function Ea(t,e,n,r){const i=await qs(t.localStore,Bn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await Ta(t,e,s,"current"===o,i.resumeToken)),t.isPrimaryClient&&n&&So(t.remoteStore,i),a}async function Ta(t,e,n,r,i){t.pu=(e,n,r)=>async function(t,e,n,r){let i=e.view.ru(n);i.bs&&(i=await Gs(t.localStore,e.query,!1).then(({documents:t})=>e.view.ru(t,i)));const s=r&&r.targetChanges.get(e.targetId),o=r&&null!=r.targetMismatches.get(e.targetId),a=e.view.applyChanges(i,t.isPrimaryClient,s,o);return Ma(t,e.targetId,a.au),a.snapshot}(t,e,n,r);const s=await Gs(t.localStore,e,!0),o=new ga(e,s.ks),a=o.ru(s.documents),c=ai.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);Ma(t,n,u.au);const l=new ya(e,n,o);return t.Tu.set(e,l),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),u.snapshot}async function Sa(t,e,n){const r=D(t),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter(t=>!Hn(t,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await zs(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ao(r.remoteStore,i.targetId),Pa(r,i.targetId)}).catch(Ct)):(Pa(r,i.targetId),await zs(r.localStore,i.targetId,!0))}async function Aa(t,e){const n=D(t),r=n.Tu.get(e),i=n.Eu.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ao(n.remoteStore,r.targetId))}async function Ca(t,e,n){const r=qa(t);try{const t=await function(t,e){const n=D(t),r=mt.now(),i=e.reduce((t,e)=>t.add(e.key),lr());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>{let a=er(),c=lr();return n.xs.getEntries(t,i).next(t=>{a=t,a.forEach((t,e)=>{e.isValidDocument()||(c=c.add(t))})}).next(()=>n.localDocuments.getOverlayedDocuments(t,a)).next(i=>{s=i;const o=[];for(const t of e){const e=Mr(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Vr(t.key,e,sn(e.value.mapValue),Or.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)}).next(e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)})}).then(()=>({batchId:o.batchId,changes:ir(s)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.du[t.currentUser.toKey()];r||(r=new he(K)),r=r.insert(e,n),t.du[t.currentUser.toKey()]=r}(r,t.batchId,n),await Va(r,t.changes),await Fo(r.remoteStore)}catch(t){const e=Jo(t,"Failed to persist write");n.reject(e)}}async function Ia(t,e){const n=D(t);try{const t=await js(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Au.get(e);r&&(k(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1,22616),t.addedDocuments.size>0?r.hu=!0:t.modifiedDocuments.size>0?k(r.hu,14607):t.removedDocuments.size>0&&(k(r.hu,42227),r.hu=!1))}),await Va(n,t,e)}catch(t){await Ct(t)}}function Ra(t,e,n){const r=D(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Tu.forEach((n,r)=>{const i=r.view.va(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=D(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const i of n.Sa)i.va(e)&&(r=!0)}),r&&ua(n)}(r.eventManager,e),t.length&&r.Pu.H_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xa(t,e,n){const r=D(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let t=new he(it.comparator);t=t.insert(s,on.newNoDocument(s,yt.min()));const n=lr().add(s),i=new oi(yt.min(),new Map,new he(K),t,n);await Ia(r,i),r.Ru=r.Ru.remove(s),r.Au.delete(e),Fa(r)}else await zs(r.localStore,e,!1).then(()=>Pa(r,e,n)).catch(Ct)}async function Oa(t,e){const n=D(t),r=e.batch.batchId;try{const t=await Fs(n.localStore,e);Da(n,r,null),ka(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Va(n,t)}catch(t){await Ct(t)}}async function Na(t,e,n){const r=D(t);try{const t=await function(t,e){const n=D(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next(e=>(k(null!==e,37113),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e))).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r)).next(()=>n.localDocuments.getDocuments(t,r))})}(r.localStore,e);Da(r,e,n),ka(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Va(r,t)}catch(n){await Ct(n)}}function ka(t,e){(t.mu.get(e)||[]).forEach(t=>{t.resolve()}),t.mu.delete(e)}function Da(t,e,n){const r=D(t);let i=r.du[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Pa(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(e=>{t.Vu.containsKey(e)||La(t,e)})}function La(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);null!==n&&(Ao(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Fa(t))}function Ma(t,e,n){for(const r of n)r instanceof da?(t.Vu.addReference(r.key,e),Ua(t,r)):r instanceof pa?(C(ma,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||La(t,r.key)):O(19791,{wu:r})}function Ua(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(C(ma,"New document in limbo: "+n),t.Iu.add(r),Fa(t))}function Fa(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new it(et.fromString(e)),r=t.fu.next();t.Au.set(r,new va(n)),t.Ru=t.Ru.insert(n,r),So(t.remoteStore,new Yi(Bn(Mn(n.path)),r,"TargetPurposeLimboResolution",Ot.ce))}}async function Va(t,e,n){const r=D(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((t,a)=>{o.push(r.pu(a,e,n).then(t=>{if((t||n)&&r.isPrimaryClient){const e=t?!t.fromCache:n?.targetChanges.get(a.targetId)?.current;r.sharedClientState.updateQueryState(a.targetId,e?"current":"not-current")}if(t){i.push(t);const e=Os.Is(a.targetId,t);s.push(e)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(t,e){const n=D(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>It.forEach(e,e=>It.forEach(e.Ts,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>It.forEach(e.Es,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!xt(t))throw t;C(Ds,"Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.vs.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.vs=n.vs.insert(t,i)}}}(r.localStore,s))}async function ja(t,e){const n=D(t);if(!n.currentUser.isEqual(e)){C(ma,"User change. New user:",e.toKey());const t=await Us(n.localStore,e);n.currentUser=e,function(t,e){t.mu.forEach(t=>{t.forEach(t=>{t.reject(new L(P.CANCELLED,e))})}),t.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Va(n,t.Ns)}}function Ba(t,e){const n=D(t),r=n.Au.get(e);if(r&&r.hu)return lr().add(r.key);{let t=lr();const r=n.Eu.get(e);if(!r)return t;for(const e of r){const r=n.Tu.get(e);t=t.unionWith(r.view.nu)}return t}}function $a(t){const e=D(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ia.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ba.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xa.bind(null,e),e.Pu.H_=aa.bind(null,e.eventManager),e.Pu.yu=ca.bind(null,e.eventManager),e}function qa(t){const e=D(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Oa.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Na.bind(null,e),e}class za{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=uo(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Ms(this.persistence,new ks,t.initialUser,this.serializer)}Cu(t){return new Cs(Rs.Vi,this.serializer)}Du(t){return new Ws}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}za.provider={build:()=>new za};class Ga extends za{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){k(this.persistence.referenceDelegate instanceof xs,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new hs(n,t.asyncQueue,e)}Cu(t){const e=void 0!==this.cacheSizeBytes?ss.withCacheSize(this.cacheSizeBytes):ss.DEFAULT;return new Cs(t=>xs.Vi(t,e),this.serializer)}}class Ha{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ra(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ja.bind(null,this.syncEngine),await Wo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new ra}()}createDatastore(t){const e=uo(t.databaseInfo.databaseId),n=ao(t.databaseInfo);return vo(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new _o(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,t=>Ra(this.syncEngine,t,0),function(){return Ys.v()?new Ys:new Qs}())}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new wa(t,e,n,r,i,s);return o&&(a.gu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await async function(t){const e=D(t);C(bo,"RemoteStore shutting down."),e.Ia.add(5),await To(e),e.Aa.shutdown(),e.Va.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ha.provider={build:()=>new Ha};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ka{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):I("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wa="FirestoreClient";class Qa{constructor(t,e,n,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this._databaseInfo=r,this.user=_.UNAUTHENTICATED,this.clientId=H.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async t=>{C(Wa,"Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(C(Wa,"Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new M;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Jo(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Xa(t,e){t.asyncQueue.verifyOperationInProgress(),C(Wa,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Us(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ya(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ja(t);C(Wa,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(t=>Ko(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>Ko(e.remoteStore,n)),t._onlineComponents=e}async function Ja(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){C(Wa,"Using user provided OfflineComponentProvider");try{await Xa(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===P.FAILED_PRECONDITION||t.code===P.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;R("Error using user provided cache. Falling back to memory cache: "+n),await Xa(t,new za)}}else C(Wa,"Using default OfflineComponentProvider"),await Xa(t,new Ga(void 0));return t._offlineComponents}async function Za(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(C(Wa,"Using user provided OnlineComponentProvider"),await Ya(t,t._uninitializedComponentsProvider._online)):(C(Wa,"Using default OnlineComponentProvider"),await Ya(t,new Ha))),t._onlineComponents}function tc(t){return Za(t).then(t=>t.syncEngine)}async function ec(t){const e=await Za(t),n=e.eventManager;return n.onListen=ba.bind(null,e.syncEngine),n.onUnlisten=Sa.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=_a.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Aa.bind(null,e.syncEngine),n}function nc(t,e,n={}){const r=new M;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new Ka({next:a=>{s.Nu(),e.enqueueAndForget(()=>oa(t,o));const c=a.docs.has(n);!c&&a.fromCache?i.reject(new L(P.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&a.fromCache&&r&&"server"===r.source?i.reject(new L(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:t=>i.reject(t)}),o=new fa(Mn(n.path),s,{includeMetadataChanges:!0,qa:!0});return sa(t,o)}(await ec(t),t.asyncQueue,e,n,r)),r.promise}function rc(t,e,n={}){const r=new M;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new Ka({next:n=>{s.Nu(),e.enqueueAndForget(()=>oa(t,o)),n.fromCache&&"server"===r.source?i.reject(new L(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new fa(n,s,{includeMetadataChanges:!0,qa:!0});return sa(t,o)}(await ec(t),t.asyncQueue,e,n,r)),r.promise}function ic(t,e){const n=new M;return t.asyncQueue.enqueueAndForget(async()=>Ca(await tc(t),e,n)),n.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sc(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const oc="ComponentProvider",ac=new Map;function cc(t,e,n,r,i){return new Oe(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,sc(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="firestore.googleapis.com",lc=!0;class hc{constructor(t){if(void 0===t.host){if(void 0!==t.ssl)throw new L(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=uc,this.ssl=lc}else this.host=t.host,this.ssl=t.ssl??lc;if(this.isUsingEmulator=void 0!==t.emulatorOptions,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=is;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<cs)throw new L(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ot("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sc(t.experimentalLongPollingOptions??{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new L(P.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class fc{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new L(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hc(t),this._emulatorOptions=t.emulatorOptions||{},void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new F;switch(t.type){case"firstParty":return new $(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new L(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ac.get(t);e&&(C(oc,"Removing Datastore"),ac.delete(t),e.terminate())}(this),Promise.resolve()}}function dc(t,e,n,r={}){t=ht(t,fc);const i=(0,a.zJ)(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;i&&(0,a.gE)(`https://${c}`),s.host!==uc&&s.host!==c&&R("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:c,ssl:i,emulatorOptions:r};if(!(0,a.bD)(u,o)&&(t._setSettings(u),r.mockUserToken)){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=_.MOCK_USER;else{e=(0,a.Fy)(r.mockUserToken,t._app?.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new L(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new _(i)}t._authCredentials=new V(new U(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new pc(this.firestore,t,this._query)}}class gc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new gc(this.firestore,t,this._key)}toJSON(){return{type:gc._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(dt(e,gc._jsonSchema))return new gc(t,n||null,new it(et.fromString(e.referencePath)))}}gc._jsonSchemaVersion="firestore/documentReference/1.0",gc._jsonSchema={type:ft("string",gc._jsonSchemaVersion),referencePath:ft("string")};class mc extends pc{constructor(t,e,n){super(t,e,Mn(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new gc(this.firestore,null,new it(t))}withConverter(t){return new mc(this.firestore,t,this._path)}}function yc(t,e,...n){if(t=(0,a.Ku)(t),st("collection","path",e),t instanceof fc){const r=et.fromString(e,...n);return ct(r),new mc(t,null,r)}{if(!(t instanceof gc||t instanceof mc))throw new L(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(et.fromString(e,...n));return ct(r),new mc(t.firestore,null,r)}}function vc(t,e,...n){if(t=(0,a.Ku)(t),1===arguments.length&&(e=H.newId()),st("doc","path",e),t instanceof fc){const r=et.fromString(e,...n);return at(r),new gc(t,null,new it(r))}{if(!(t instanceof gc||t instanceof mc))throw new L(P.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(et.fromString(e,...n));return at(r),new gc(t.firestore,t instanceof mc?t.converter:null,new it(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wc="AsyncQueue";class bc{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new lo(this,"async_queue_retry"),this._c=()=>{const t=co();t&&C(wc,"Visibility state changed to "+t.visibilityState),this.M_.w_()},this.ac=t;const e=co();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=co();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new M;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(0!==this.Yu.length){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!xt(t))throw t;C(wc,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(t=>{throw this.nc=t,this.rc=!1,I("INTERNAL UNHANDLED ERROR: ",_c(t)),t}).then(t=>(this.rc=!1,t))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const r=Yo.createAndSchedule(this,t,e,n,t=>this.hc(t));return this.tc.push(r),r}uc(){this.nc&&O(47125,{Pc:_c(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do{t=this.ac,await t}while(t!==this.ac)}Ec(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ic(t){return this.Tc().then(()=>{this.tc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function _c(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ec extends fc{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new bc,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new bc(t),this._firestoreClient=void 0,await t}}}function Tc(t,e){const n="object"==typeof t?t:(0,s.Sx)(),r="string"==typeof t?t:e||Ne,i=(0,s.j6)(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const t=(0,a.yU)("firestore");t&&dc(i,...t)}return i}function Sc(t){if(t._terminated)throw new L(P.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Ac(t),t._firestoreClient}function Ac(t){const e=t._freezeSettings(),n=cc(t._databaseId,t._app?.options.appId||"",t._persistenceKey,t._app?.options.apiKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Qa(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(t){const e=t?._online.build();return{_offline:t?._offline.build(e),_online:e}}(t._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Cc(ve.fromBase64String(t))}catch(t){throw new L(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Cc(ve.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Cc._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(dt(t,Cc._jsonSchema))return Cc.fromBase64String(t.bytes)}}Cc._jsonSchemaVersion="firestore/bytes/1.0",Cc._jsonSchema={type:ft("string",Cc._jsonSchemaVersion),bytes:ft("string")};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ic{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new L(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rc{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new L(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new L(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return K(this._lat,t._lat)||K(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xc._jsonSchemaVersion}}static fromJSON(t){if(dt(t,xc._jsonSchema))return new xc(t.latitude,t.longitude)}}xc._jsonSchemaVersion="firestore/geoPoint/1.0",xc._jsonSchema={type:ft("string",xc._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oc{constructor(t){this._values=(t||[]).map(t=>t)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Oc._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(dt(t,Oc._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(t=>"number"==typeof t))return new Oc(t.vectorValues);throw new L(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Oc._jsonSchemaVersion="firestore/vectorValue/1.0",Oc._jsonSchema={type:ft("string",Oc._jsonSchemaVersion),vectorValues:ft("object")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nc=/^__.*__$/;class kc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Vr(t,this.data,this.fieldMask,e,this.fieldTransforms):new Fr(t,this.data,e,this.fieldTransforms)}}function Dc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O(40011,{dataSource:t})}}class Pc{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new Pc({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(t){const e=this.path?.child(t),n=this.i({path:e,arrayElement:!1});return n.mc(t),n}fc(t){const e=this.path?.child(t),n=this.i({path:e,arrayElement:!1});return n.Ac(),n}gc(t){return this.i({path:void 0,arrayElement:!0})}yc(t){return Hc(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.mc(this.path.get(t))}mc(t){if(0===t.length)throw this.yc("Document fields must not be empty");if(Dc(this.dataSource)&&Nc.test(t))throw this.yc('Document fields cannot begin and end with "__"')}}class Lc{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||uo(t)}I(t,e,n,r=!1){return new Pc({dataSource:t,methodName:e,targetDoc:n,path:rt.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mc(t){const e=t._freezeSettings(),n=uo(t._databaseId);return new Lc(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Uc(t,e,n,r,i,s={}){const o=t.I(s.merge||s.mergeFields?2:0,e,n,i);$c("Data must be an object, but it was:",o,r);const a=jc(r,o);let c,u;if(s.merge)c=new me(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=qc(e,r,n);if(!o.contains(i))throw new L(P.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Kc(t,i)||t.push(i)}c=new me(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new kc(new rn(a),c,u)}function Fc(t,e,n,r=!1){return Vc(n,t.I(r?4:3,e))}function Vc(t,e){if(Bc(t=(0,a.Ku)(t)))return $c("Unsupported field value:",e,t),jc(t,e);if(t instanceof Rc)return function(t,e){if(!Dc(e.dataSource))throw e.yc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.yc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&4!==e.dataSource)throw e.yc("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Vc(i,e.gc(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.Ku)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return gr(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=mt.fromDate(t);return{timestampValue:bi(e.serializer,n)}}if(t instanceof mt){const n=new mt(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:bi(e.serializer,n)}}if(t instanceof xc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Cc)return{bytesValue:_i(e.serializer,t._byteString)};if(t instanceof gc){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.yc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Si(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof Oc)return function(t,e){const n=t instanceof Oc?t.toArray():t,r={fields:{[Pe]:{stringValue:Ue},[Fe]:{arrayValue:{values:n.map(t=>{if("number"!=typeof t)throw e.yc("VectorValues must only contain numeric values.");return dr(e.serializer,t)})}}}};return{mapValue:r}}(t,e);if(Xi(t))return t._toProto(e.serializer);throw e.yc(`Unsupported field value: ${lt(t)}`)}(t,e)}function jc(t,e){const n={};return le(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ue(t,(t,r)=>{const i=Vc(r,e.dc(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function Bc(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof mt||t instanceof xc||t instanceof Cc||t instanceof gc||t instanceof Rc||t instanceof Oc||Xi(t))}function $c(t,e,n){if(!Bc(n)||!ut(n)){const r=lt(n);throw"an object"===r?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function qc(t,e,n){if((e=(0,a.Ku)(e))instanceof Ic)return e._internalPath;if("string"==typeof e)return Gc(t,e);throw Hc("Field path arguments must be of type string or ",t,!1,void 0,n)}const zc=new RegExp("[~\\*/\\[\\]]");function Gc(t,e,n){if(e.search(zc)>=0)throw Hc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ic(...e.split("."))._internalPath}catch(r){throw Hc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new L(P.INVALID_ARGUMENT,a+t+c)}function Kc(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wc{convertValue(t,e="none"){switch(Ve(t)){case 0:return null;case 1:return t.booleanValue;case 2:return _e(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ee(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return ue(t,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertVectorValue(t){const e=t.fields?.[Fe].arrayValue?.values?.map(t=>_e(t.doubleValue));return new Oc(e)}convertGeoPoint(t){return new xc(_e(t.latitude),_e(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Re(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(xe(t));default:return null}}convertTimestamp(t){const e=be(t);return new mt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=et.fromString(t);k(Qi(n),9688,{name:t});const r=new ke(n.get(1),n.get(3)),i=new it(n.popFirst(5));return r.isEqual(e)||I(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc extends Wc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Cc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new gc(this.firestore,null,e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="@firebase/firestore",Yc="4.14.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jc{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new gc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Zc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(t){if(this._document){const e=this._document.data.field(qc("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Zc extends Jc{data(){return super.data()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new L(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class eu{}class nu extends eu{}function ru(t,e,...n){let r=[];e instanceof eu&&r.push(e),r=r.concat(n),function(t){const e=t.filter(t=>t instanceof su).length,n=t.filter(t=>t instanceof iu).length;if(e>1||e>0&&n>0)throw new L(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */(r);for(const i of r)t=i._apply(t);return t}class iu extends nu{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new iu(t,e,n)}_apply(t){const e=this._parse(t);return lu(t._query,e),new pc(t.firestore,t.converter,qn(t._query,e))}_parse(t){const e=Mc(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new L(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){uu(o,s);const e=[];for(const n of o)e.push(cu(r,t,n));a={arrayValue:{values:e}}}else a=cu(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||uu(o,s),a=Fc(n,e,o,"in"===s||"not-in"===s);const c=dn.create(i,s,a);return c}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}class su extends eu{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new su(t,e)}_parse(t){const e=this._queryConstraints.map(e=>e._parse(t)).filter(t=>t.getFilters().length>0);return 1===e.length?e[0]:pn.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const i of r)lu(n,i),n=qn(n,i)}(t._query,e),new pc(t.firestore,t.converter,qn(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class ou extends nu{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ou(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new L(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new L(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new ln(e,n);return r}(t._query,this._field,this._direction);return new pc(t.firestore,t.converter,zn(t._query,e))}}function au(t,e="asc"){const n=e,r=qc("orderBy",t);return ou._create(r,n)}function cu(t,e,n){if("string"==typeof(n=(0,a.Ku)(n))){if(""===n)throw new L(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vn(e)&&-1!==n.indexOf("/"))throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(et.fromString(n));if(!it.isDocumentKey(r))throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return We(t,new it(r))}if(n instanceof gc)return We(t,n._key);throw new L(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lt(n)}.`)}function uu(t,e){if(!Array.isArray(t)||0===t.length)throw new L(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lu(t,e){const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new L(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function hu(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class fu{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class du extends Jc{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new pu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(qc("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=du._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),t&&t.isValidDocument()&&t.isFoundDocument()?(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e):e}}du._jsonSchemaVersion="firestore/documentSnapshot/1.0",du._jsonSchema={type:ft("string",du._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class pu extends du{data(t={}){return super.data(t)}}class gu{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new fu(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new pu(this._firestore,this._userDataWriter,n.key,n,new fu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new L(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>{const r=new pu(t._firestore,t._userDataWriter,n.doc.key,n.doc,new fu(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}})}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new pu(t._firestore,t._userDataWriter,e.doc.key,e.doc,new fu(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:mu(e.type),doc:r,oldIndex:i,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=gu._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=H.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],r=[];return this.docs.forEach(t=>{null!==t._document&&(e.push(t._document),n.push(this._userDataWriter.convertObjectMap(t._document.data.value.mapValue.fields,"previous")),r.push(t.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function mu(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O(61501,{type:t})}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
gu._jsonSchemaVersion="firestore/querySnapshot/1.0",gu._jsonSchema={type:ft("string",gu._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yu(t){t=ht(t,gc);const e=ht(t.firestore,Ec),n=Sc(e);return nc(n,t._key).then(n=>Tu(e,t,n))}function vu(t){t=ht(t,pc);const e=ht(t.firestore,Ec),n=Sc(e),r=new Qc(e);return tu(t._query),rc(n,t._query).then(n=>new gu(e,r,t,n))}function wu(t,e,n){t=ht(t,gc);const r=ht(t.firestore,Ec),i=hu(t.converter,e,n),s=Mc(r);return Eu(r,[Uc(s,"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,Or.none())])}function bu(t){return Eu(ht(t.firestore,Ec),[new qr(t._key,Or.none())])}function _u(t,e){const n=ht(t.firestore,Ec),r=vc(t),i=hu(t.converter,e),s=Mc(t.firestore);return Eu(n,[Uc(s,"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,Or.exists(!1))]).then(()=>r)}function Eu(t,e){const n=Sc(t);return ic(n,e)}function Tu(t,e,n){const r=n.docs.get(e._key),i=new Qc(t);return new du(t,i,e._key,r,new fu(n.hasPendingWrites,n.fromCache),e.converter)}new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){T(s.MF),(0,s.om)(new o.uA("firestore",(t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new Ec(new j(t.getProvider("auth-internal")),new z(i,t.getProvider("app-check-internal")),De(i,n),i);return r={useFetchStreams:e,...r},s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,s.KO)(Xc,Yc,t),(0,s.KO)(Xc,Yc,"esm2020")}()},1924:function(t,e,n){n.d(e,{XR:function(){return _e},qk:function(){return be},c7:function(){return Te},KR:function(){return Ee},bp:function(){return we}});n(4423),n(4114),n(8111),n(2489),n(7588),n(1701),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(9577),n(6632),n(4226),n(9486),n(456),n(4979);var r=n(262),i=n(2455),s=n(798);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5,l=1e3;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class h extends i.g{constructor(t,e,n=0){super(p(t),`Firebase Storage: ${e} (${p(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return p(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var f,d;function p(t){return"storage/"+t}function g(){const t="An unknown error occurred, please check the error payload for server response.";return new h(f.UNKNOWN,t)}function m(t){return new h(f.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function y(t){return new h(f.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function v(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h(f.UNAUTHENTICATED,t)}function w(){return new h(f.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function b(t){return new h(f.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function _(){return new h(f.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function E(){return new h(f.CANCELED,"User canceled the upload/download.")}function T(t){return new h(f.INVALID_URL,"Invalid URL '"+t+"'.")}function S(t){return new h(f.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function A(){return new h(f.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function C(){return new h(f.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function I(){return new h(f.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function R(){return new h(f.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function x(t){return new h(f.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function O(t){return new h(f.INVALID_ARGUMENT,t)}function N(){return new h(f.APP_DELETED,"The Firebase app was deleted.")}function k(t){return new h(f.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function D(t,e){return new h(f.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function P(t){throw new h(f.INTERNAL_ERROR,"Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(f||(f={}));class L{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=L.makeFromUrl(t,e)}catch(r){return new L(t,"")}if(""===n.path)return n;throw S(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+r+s,"i"),c={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${l}/b/${r}/o${f}`,"i"),p={bucket:1,path:3},g=e===o?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",y=new RegExp(`^https?://${g}/${r}/${m}`,"i"),v={bucket:1,path:2},w=[{regex:a,indices:c,postModify:i},{regex:d,indices:p,postModify:u},{regex:y,indices:v,postModify:u}];for(let o=0;o<w.length;o++){const e=w[o],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new L(t,i),e.postModify(n);break}}if(null==n)throw T(t);return n}}class M{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...t){u||(u=!0,e.apply(null,t))}function h(e){i=setTimeout(()=>{i=null,t(d,c())},e)}function f(){s&&clearTimeout(s)}function d(t,...e){if(u)return void f();if(t)return f(),void l.call(null,t,...e);const n=c()||o;if(n)return f(),void l.call(null,t,...e);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function g(t){p||(p=!0,f(),u||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,g(!0)},n),g}function F(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t){return void 0!==t}function j(t){return"function"===typeof t}function B(t){return"object"===typeof t&&!Array.isArray(t)}function $(t){return"string"===typeof t||t instanceof String}function q(t){return z()&&t instanceof Blob}function z(){return"undefined"!==typeof Blob}function G(t,e,n,r){if(r<e)throw O(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw O(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t,e,n){let r=e;return null==n&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function K(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(t,e){const n=t>=500&&t<600,r=[408,429],i=-1!==r.indexOf(t),s=-1!==e.indexOf(t);return n||i||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(d||(d={}));class Q{constructor(t,e,n,r,i,s,o,a,c,u,l,h=!0,f=!1){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.isUsingEmulator=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()})}start_(){const t=(t,e)=>{if(e)return void t(!1,new X(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===d.NO_ERROR,i=n.getStatus();if(!e||W(i,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===d.ABORT;return void t(!1,new X(!1,null,e))}const s=-1!==this.successCodes_.indexOf(i);t(!0,new X(s,n))})},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());V(t)?n(t):n()}catch(s){r(s)}else if(null!==i){const t=g();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){const t=this.appDelete_?N():E();r(t)}else{const t=_();r(t)}};this.canceled_?e(!1,new X(!1,null,!0)):this.backoffId_=U(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&F(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class X{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function Y(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function J(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Z(t,e){e&&(t["X-Firebase-GMPID"]=e)}function tt(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function et(t,e,n,r,i,s,o=!0,a=!1){const c=K(t.urlParams),u=t.url+c,l=Object.assign({},t.headers);return Z(l,e),Y(l,n),J(l,s),tt(l,r),new Q(u,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,a)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function rt(...t){const e=nt();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(z())return new Blob(t);throw new h(f.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function it(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t){if("undefined"===typeof atob)throw x("base-64");return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class at{constructor(t,e){this.data=t,this.contentType=e||null}}function ct(t,e){switch(t){case ot.RAW:return new at(ut(e));case ot.BASE64:case ot.BASE64URL:return new at(ht(t,e));case ot.DATA_URL:return new at(dt(e),pt(e))}throw g()}function ut(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(i){const i=r,s=t.charCodeAt(++n);r=65536|(1023&i)<<10|1023&s,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320===(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function lt(t){let e;try{e=decodeURIComponent(t)}catch(n){throw D(ot.DATA_URL,"Malformed data URL.")}return ut(e)}function ht(t,e){switch(t){case ot.BASE64:{const n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){const e=n?"-":"_";throw D(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case ot.BASE64URL:{const n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(n||r){const e=n?"+":"/";throw D(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=st(e)}catch(i){if(i.message.includes("polyfill"))throw i;throw D(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class ft{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw D(ot.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=gt(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function dt(t){const e=new ft(t);return e.base64?ht(ot.BASE64,e.rest):lt(e.rest)}function pt(t){const e=new ft(t);return e.contentType}function gt(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t,e){let n=0,r="";q(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(q(this.data_)){const n=this.data_,r=it(n,t,e);return null===r?null:new mt(r)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new mt(n,!0)}}static getBlob(...t){if(z()){const e=t.map(t=>t instanceof mt?t.data_:t);return new mt(rt.apply(null,e))}{const e=t.map(t=>$(t)?ct(ot.RAW,t).data:t.data_);let n=0;e.forEach(t=>{n+=t.byteLength});const r=new Uint8Array(n);let i=0;return e.forEach(t=>{for(let e=0;e<t.length;e++)r[i++]=t[e]}),new mt(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t){let e;try{e=JSON.parse(t)}catch(n){return null}return B(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function wt(t,e){const n=e.split("/").filter(t=>t.length>0).join("/");return 0===t.length?n:t+"/"+n}function bt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t,e){return e}class Et{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||_t}}let Tt=null;function St(t){return!$(t)||t.length<2?t:bt(t)}function At(){if(Tt)return Tt;const t=[];function e(t,e){return St(e)}t.push(new Et("bucket")),t.push(new Et("generation")),t.push(new Et("metageneration")),t.push(new Et("name","fullPath",!0));const n=new Et("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const i=new Et("size");return i.xform=r,t.push(i),t.push(new Et("timeCreated")),t.push(new Et("updated")),t.push(new Et("md5Hash",null,!0)),t.push(new Et("cacheControl",null,!0)),t.push(new Et("contentDisposition",null,!0)),t.push(new Et("contentEncoding",null,!0)),t.push(new Et("contentLanguage",null,!0)),t.push(new Et("contentType",null,!0)),t.push(new Et("metadata","customMetadata",!0)),Tt=t,Tt}function Ct(t,e){function n(){const n=t["bucket"],r=t["fullPath"],i=new L(n,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function It(t,e,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const t=n[s];r[t.local]=t.xform(r,e[t.server])}return Ct(r,t),r}function Rt(t,e,n){const r=yt(e);if(null===r)return null;const i=r;return It(t,i,n)}function xt(t,e,n,r){const i=yt(e);if(null===i)return null;if(!$(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map(e=>{const i=t["bucket"],s=t["fullPath"],a="/b/"+o(i)+"/o/"+o(s),c=H(a,n,r),u=K({alt:"media",token:e});return c+u});return c[0]}function Ot(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t){if(!t)throw g()}function Dt(t,e){function n(n,r){const i=Rt(t,r,e);return kt(null!==i),i}return n}function Pt(t,e){function n(n,r){const i=Rt(t,r,e);return kt(null!==i),xt(i,r,t.host,t._protocol)}return n}function Lt(t){function e(e,n){let r;return r=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?w():v():402===e.getStatus()?y(t.bucket):403===e.getStatus()?b(t.path):n,r.status=e.getStatus(),r.serverResponse=n.serverResponse,r}return e}function Mt(t){const e=Lt(t);function n(n,r){let i=e(n,r);return 404===n.getStatus()&&(i=m(t.path)),i.serverResponse=r.serverResponse,i}return n}function Ut(t,e,n){const r=e.fullServerUrl(),i=H(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Nt(i,s,Dt(t,n),o);return a.errorHandler=Mt(e),a}function Ft(t,e,n){const r=e.fullServerUrl(),i=H(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Nt(i,s,Pt(t,n),o);return a.errorHandler=Mt(e),a}function Vt(t,e){const n=e.fullServerUrl(),r=H(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(t,e){}const a=new Nt(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Mt(e),a}function jt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Bt(t,e,n){const r=Object.assign({},n);return r["fullPath"]=t.path,r["size"]=e.size(),r["contentType"]||(r["contentType"]=jt(null,e)),r}function $t(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=Bt(e,r,i),l=Ot(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",f="\r\n--"+c+"--",d=mt.getBlob(h,r,f);if(null===d)throw C();const p={name:u["fullPath"]},g=H(s,t.host,t._protocol),m="POST",y=t.maxUploadRetryTime,v=new Nt(g,m,Dt(t,n),y);return v.urlParams=p,v.headers=o,v.body=d.uploadData(),v.errorHandler=Lt(e),v}class qt{constructor(t,e,n,r){this.current=t,this.total=e,this.finalized=!!n,this.metadata=r||null}}function zt(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch(i){kt(!1)}const r=e||["active"];return kt(!!n&&-1!==r.indexOf(n)),n}function Gt(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=Bt(e,r,i),a={name:o["fullPath"]},c=H(s,t.host,t._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o["contentType"],"Content-Type":"application/json; charset=utf-8"},h=Ot(o,n),f=t.maxUploadRetryTime;function d(t){let e;zt(t);try{e=t.getResponseHeader("X-Goog-Upload-URL")}catch(n){kt(!1)}return kt($(e)),e}const p=new Nt(c,u,d,f);return p.urlParams=a,p.headers=l,p.body=h,p.errorHandler=Lt(e),p}function Ht(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(t){const e=zt(t,["active","final"]);let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(s){kt(!1)}n||kt(!1);const i=Number(n);return kt(!isNaN(i)),new qt(i,r.size(),"final"===e)}const o="POST",a=t.maxUploadRetryTime,c=new Nt(n,o,s,a);return c.headers=i,c.errorHandler=Lt(e),c}const Kt=262144;function Wt(t,e,n,r,i,s,o,a){const c=new qt(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw I();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,f=h+l;let d="";d=0===l?"finalize":u===l?"upload, finalize":"upload";const p={"X-Goog-Upload-Command":d,"X-Goog-Upload-Offset":`${c.current}`},g=r.slice(h,f);if(null===g)throw C();function m(t,n){const i=zt(t,["active","final"]),o=c.current+l,a=r.size();let u;return u="final"===i?Dt(e,s)(t,n):null,new qt(o,a,"final"===i,u)}const y="POST",v=e.maxUploadRetryTime,w=new Nt(n,y,m,v);return w.headers=p,w.body=g.uploadData(),w.progressCallback=a||null,w.errorHandler=Lt(t),w}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Xt(t){switch(t){case"running":case"pausing":case"canceling":return Qt.RUNNING;case"paused":return Qt.PAUSED;case"success":return Qt.SUCCESS;case"canceled":return Qt.CANCELED;case"error":return Qt.ERROR;default:return Qt.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t,e,n){const r=j(t)||null!=e||null!=n;if(r)this.next=t,this.error=e??void 0,this.complete=n??void 0;else{const e=t;this.next=e.next,this.error=e.error,this.complete=e.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zt=null;class te{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=d.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=d.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=d.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,n,r,s){if(this.sent_)throw P("cannot .send() more than once");if((0,i.zJ)(t)&&n&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==s)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw P("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw P("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw P("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw P("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class ee extends te{initXhr(){this.xhr_.responseType="text"}}function ne(){return Zt?Zt():new ee}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class re{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(t,e,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=n,this._mappings=At(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=t=>{if(this._request=void 0,this._chunkMultiplier=1,t._codeEquals(f.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const e=this.isExponentialBackoffExpired();if(W(t.status,[])){if(!e)return this.sleepTime=Math.max(2*this.sleepTime,l),this._needToFetchStatus=!0,void this.completeTransitions_();t=_()}this._error=t,this._transition("error")}},this._metadataErrorHandler=t=>{this._request=void 0,t._codeEquals(f.CANCELED)?this.completeTransitions_():(this._error=t,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((t,e)=>{this._resolve=t,this._reject=e,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([e,n])=>{switch(this._state){case"running":t(e,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,e)=>{const n=Gt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,ne,t,e);this._request=r,r.getPromise().then(t=>{this._request=void 0,this._uploadUrl=t,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((e,n)=>{const r=Ht(this._ref.storage,this._ref._location,t,this._blob),i=this._ref.storage._makeRequest(r,ne,e,n);this._request=i,i.getPromise().then(t=>{this._request=void 0,this._updateProgress(t.current),this._needToFetchStatus=!1,t.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=Kt*this._chunkMultiplier,e=new qt(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((r,i)=>{let s;try{s=Wt(this._ref._location,this._ref.storage,n,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const o=this._ref.storage._makeRequest(s,ne,r,i,!1);this._request=o,o.getPromise().then(t=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(t.current),t.finalized?(this._metadata=t.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){const t=Kt*this._chunkMultiplier;2*t<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,e)=>{const n=Ut(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,ne,t,e);this._request=r,r.getPromise().then(t=>{this._request=void 0,this._metadata=t,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,e)=>{const n=$t(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,ne,t,e);this._request=r,r.getPromise().then(t=>{this._request=void 0,this._metadata=t,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const e="paused"===this._state;this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=E(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Xt(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,n,r){const i=new Yt(e||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);-1!==e&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise();const t=this._observers.slice();t.forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(void 0!==this._resolve){let t=!0;switch(Xt(this._state)){case Qt.SUCCESS:Jt(this._resolve.bind(null,this.snapshot))();break;case Qt.CANCELED:case Qt.ERROR:const e=this._reject;Jt(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){const e=Xt(this._state);switch(e){case Qt.RUNNING:case Qt.PAUSED:t.next&&Jt(t.next.bind(t,this.snapshot))();break;case Qt.SUCCESS:t.complete&&Jt(t.complete.bind(t))();break;case Qt.CANCELED:case Qt.ERROR:t.error&&Jt(t.error.bind(t,this._error))();break;default:t.error&&Jt(t.error.bind(t,this._error))()}}resume(){const t="paused"===this._state||"pausing"===this._state;return t&&this._transition("running"),t}pause(){const t="running"===this._state;return t&&this._transition("pausing"),t}cancel(){const t="running"===this._state||"pausing"===this._state;return t&&this._transition("canceling"),t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t,e){this._service=t,this._location=e instanceof L?e:L.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new ie(t,e)}get root(){const t=new L(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return bt(this._location.path)}get storage(){return this._service}get parent(){const t=vt(this._location.path);if(null===t)return null;const e=new L(this._location.bucket,t);return new ie(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw k(t)}}function se(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new re(t,new mt(e),n)}function oe(t){t._throwIfRoot("getDownloadURL");const e=Ft(t.storage,t._location,At());return t.storage.makeRequestWithTokens(e,ne).then(t=>{if(null===t)throw R();return t})}function ae(t){t._throwIfRoot("deleteObject");const e=Vt(t.storage,t._location);return t.storage.makeRequestWithTokens(e,ne)}function ce(t,e){const n=wt(t._location.path,e),r=new L(t._location.bucket,n);return new ie(t.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t){return/^[A-Za-z]+:\/\//.test(t)}function le(t,e){return new ie(t,e)}function he(t,e){if(t instanceof ge){const n=t;if(null==n._bucket)throw A();const r=new ie(n,n._bucket);return null!=e?he(r,e):r}return void 0!==e?ce(t,e):t}function fe(t,e){if(e&&ue(e)){if(t instanceof ge)return le(t,e);throw O("To use ref(service, url), the first argument must be a Storage instance.")}return he(t,e)}function de(t,e){const n=e?.[a];return null==n?null:L.makeFromBucketSpec(n,t)}function pe(t,e,n,r={}){t.host=`${e}:${n}`;const s=(0,i.zJ)(e);s&&(0,i.gE)(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:o}=r;o&&(t._overrideAuthToken="string"===typeof o?o:(0,i.Fy)(o,t.app.options.projectId))}class ge{constructor(t,e,n,r,i,s=!1){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=s,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?L.makeFromBucketSpec(r,this._host):de(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=L.makeFromBucketSpec(this._url,t):this._bucket=de(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){G("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){G("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){if((0,r.xZ)(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ie(this,t)}_makeRequest(t,e,n,r,i=!0){if(this._deleted)return new M(N());{const s=et(t,this._appId,n,r,e,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const me="@firebase/storage",ye="0.14.2",ve="storage";function we(t,e,n){return t=(0,i.Ku)(t),se(t,e,n)}function be(t){return t=(0,i.Ku)(t),oe(t)}function _e(t){return t=(0,i.Ku)(t),ae(t)}function Ee(t,e){return t=(0,i.Ku)(t),fe(t,e)}function Te(t=(0,r.Sx)(),e){t=(0,i.Ku)(t);const n=(0,r.j6)(t,ve),s=n.getImmediate({identifier:e}),o=(0,i.yU)("storage");return o&&Se(s,...o),s}function Se(t,e,n,r={}){pe(t,e,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new ge(n,i,s,e,r.MF)}function Ce(){(0,r.om)(new s.uA(ve,Ae,"PUBLIC").setMultipleInstances(!0)),(0,r.KO)(me,ye,""),(0,r.KO)(me,ye,"esm2020")}Ce()},8728:function(t,e,n){n.d(e,{aE:function(){return fe},Bt:function(){return Ot}});n(4423),n(4114),n(8111),n(2489),n(116),n(7588),n(1701),n(8237),n(3579),n(5367),n(2731),n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(1148);
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const r="undefined"!==typeof document;function i(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function s(t){return t.__esModule||"Module"===t[Symbol.toStringTag]||t.default&&i(t.default)}const o=Object.assign;function a(t,e){const n={};for(const r in e){const i=e[r];n[r]=u(i)?i.map(t):t(i)}return n}const c=()=>{},u=Array.isArray;function l(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const h=/#/g,f=/&/g,d=/\//g,p=/=/g,g=/\?/g,m=/\+/g,y=/%5B/g,v=/%5D/g,w=/%5E/g,b=/%60/g,_=/%7B/g,E=/%7C/g,T=/%7D/g,S=/%20/g;function A(t){return null==t?"":encodeURI(""+t).replace(E,"|").replace(y,"[").replace(v,"]")}function C(t){return A(t).replace(_,"{").replace(T,"}").replace(w,"^")}function I(t){return A(t).replace(m,"%2B").replace(S,"+").replace(h,"%23").replace(f,"%26").replace(b,"`").replace(_,"{").replace(T,"}").replace(w,"^")}function R(t){return I(t).replace(p,"%3D")}function x(t){return A(t).replace(h,"%23").replace(g,"%3F")}function O(t){return x(t).replace(d,"%2F")}function N(t){if(null==t)return null;try{return decodeURIComponent(""+t)}catch(e){}return""+t}const k=/\/$/,D=t=>t.replace(k,"");function P(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return c=a>=0&&c>a?-1:c,c>=0&&(r=e.slice(0,c),s=e.slice(c,a>0?a:e.length),i=t(s.slice(1))),a>=0&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=$(null!=r?r:e,n),{fullPath:r+s+o,path:r,query:i,hash:N(o)}}function L(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function M(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function U(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&F(e.matched[r],n.matched[i])&&V(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function F(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function V(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!j(t[n],e[n]))return!1;return!0}function j(t,e){return u(t)?B(t,e):u(e)?B(e,t):t?.valueOf()===e?.valueOf()}function B(t,e){return u(e)?t.length===e.length&&t.every((t,n)=>t===e[n]):1===t.length&&t[0]===e}function $(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s).join("/")}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let z=function(t){return t["pop"]="pop",t["push"]="push",t}({}),G=function(t){return t["back"]="back",t["forward"]="forward",t["unknown"]="",t}({});function H(t){if(!t)if(r){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),D(t)}const K=/^[^#]+#/;function W(t,e){return t.replace(K,"#")+e}function Q(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const X=()=>({left:window.scrollX,top:window.scrollY});function Y(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Q(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.scrollX,null!=e.top?e.top:window.scrollY)}function J(t,e){return(history.state?history.state.position-e:-1)+t}const Z=new Map;function tt(t,e){Z.set(t,e)}function et(t){const e=Z.get(t);return Z.delete(t),e}function nt(t){return"string"===typeof t||t&&"object"===typeof t}function rt(t){return"string"===typeof t||"symbol"===typeof t}let it=function(t){return t[t["MATCHER_NOT_FOUND"]=1]="MATCHER_NOT_FOUND",t[t["NAVIGATION_GUARD_REDIRECT"]=2]="NAVIGATION_GUARD_REDIRECT",t[t["NAVIGATION_ABORTED"]=4]="NAVIGATION_ABORTED",t[t["NAVIGATION_CANCELLED"]=8]="NAVIGATION_CANCELLED",t[t["NAVIGATION_DUPLICATED"]=16]="NAVIGATION_DUPLICATED",t}({});const st=Symbol("");it.MATCHER_NOT_FOUND,it.NAVIGATION_GUARD_REDIRECT,it.NAVIGATION_ABORTED,it.NAVIGATION_CANCELLED,it.NAVIGATION_DUPLICATED;function ot(t,e){return o(new Error,{type:t,[st]:!0},e)}function at(t,e){return t instanceof Error&&st in t&&(null==e||!!(t.type&e))}const ct=["params","query","hash"];function ut(t){if("string"===typeof t)return t;if(null!=t.path)return t.path;const e={};for(const n of ct)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function lt(t){const e={};if(""===t||"?"===t)return e;const n=("?"===t[0]?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const t=n[r].replace(m," "),i=t.indexOf("="),s=N(i<0?t:t.slice(0,i)),o=i<0?null:N(t.slice(i+1));if(s in e){let t=e[s];u(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function ht(t){let e="";for(let n in t){const r=t[n];n=R(n),null!=r?(u(r)?r.map(t=>t&&I(t)):[r&&I(r)]).forEach(t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}):void 0!==r&&(e+=(e.length?"&":"")+n)}return e}function ft(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=u(r)?r.map(t=>null==t?null:""+t):null==r?r:""+r)}return e}const dt=Symbol(""),pt=Symbol(""),gt=Symbol(""),mt=Symbol(""),yt=Symbol("");function vt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function wt(t,e,n,r,i,s=t=>t()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,c)=>{const u=t=>{!1===t?c(ot(it.NAVIGATION_ABORTED,{from:n,to:e})):t instanceof Error?c(t):nt(t)?c(ot(it.NAVIGATION_GUARD_REDIRECT,{from:e,to:t})):(o&&r.enterCallbacks[i]===o&&"function"===typeof t&&o.push(t),a())},l=s(()=>t.call(r&&r.instances[i],e,n,u));let h=Promise.resolve(l);t.length<3&&(h=h.then(u)),h.catch(t=>c(t))})}function bt(t,e,n,r,o=t=>t()){const a=[];for(const c of t){0;for(const t in c.components){let u=c.components[t];if("beforeRouteEnter"===e||c.instances[t])if(i(u)){const i=(u.__vccOpts||u)[e];i&&a.push(wt(i,n,r,c,t,o))}else{let i=u();0,a.push(()=>i.then(i=>{if(!i)throw new Error(`Couldn't resolve component "${t}" at "${c.path}"`);const a=s(i)?i.default:i;c.mods[t]=i,c.components[t]=a;const u=(a.__vccOpts||a)[e];return u&&wt(u,n,r,c,t,o)()}))}}}return a}function _t(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find(t=>F(t,s))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find(t=>F(t,a))||i.push(a))}return[n,r,i]}var Et=n(6768),Tt=n(144);
/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let St=()=>location.protocol+"//"+location.host;function At(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),M(n,"")}return M(n,t)+r+i}function Ct(t,e,n,r){let i=[],s=[],a=null;const c=({state:s})=>{const o=At(t,location),c=n.value,u=e.value;let l=0;if(s){if(n.value=o,e.value=s,a&&a===c)return void(a=null);l=u?s.position-u.position:0}else r(o);i.forEach(t=>{t(n.value,c,{delta:l,type:z.pop,direction:l?l>0?G.forward:G.back:G.unknown})})};function u(){a=n.value}function l(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function h(){if("hidden"===document.visibilityState){const{history:t}=window;if(!t.state)return;t.replaceState(o({},t.state,{scroll:X()}),"")}}function f(){for(const t of s)t();s=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",h),document.removeEventListener("visibilitychange",h)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",h),document.addEventListener("visibilitychange",h),{pauseListeners:u,listen:l,destroy:f}}function It(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?X():null}}function Rt(t){const{history:e,location:n}=window,r={value:At(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:St()+t+r;try{e[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function a(t,n){s(t,o({},e.state,It(i.value.back,t,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=t}function c(t,n){const a=o({},i.value,e.state,{forward:t,scroll:X()});s(a.current,a,!0),s(t,o({},It(r.value,t,null),{position:a.position+1},n),!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:a}}function xt(t){t=H(t);const e=Rt(t),n=Ct(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=o({location:"",base:t,go:r,createHref:W.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Ot(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),xt(t)}let Nt=function(t){return t[t["Static"]=0]="Static",t[t["Param"]=1]="Param",t[t["Group"]=2]="Group",t}({});var kt=function(t){return t[t["Static"]=0]="Static",t[t["Param"]=1]="Param",t[t["ParamRegExp"]=2]="ParamRegExp",t[t["ParamRegExpEnd"]=3]="ParamRegExpEnd",t[t["EscapeNext"]=4]="EscapeNext",t}(kt||{});const Dt={type:Nt.Static,value:""},Pt=/[a-zA-Z0-9_]/;function Lt(t){if(!t)return[[]];if("/"===t)return[[Dt]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=kt.Static,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(n===kt.Static?s.push({type:Nt.Static,value:u}):n===kt.Param||n===kt.ParamRegExp||n===kt.ParamRegExpEnd?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Nt.Param,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||n===kt.ParamRegExp)switch(n){case kt.Static:"/"===a?(u&&h(),o()):":"===a?(h(),n=kt.Param):f();break;case kt.EscapeNext:f(),n=r;break;case kt.Param:"("===a?n=kt.ParamRegExp:Pt.test(a)?f():(h(),n=kt.Static,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case kt.ParamRegExp:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=kt.ParamRegExpEnd:l+=a;break;case kt.ParamRegExpEnd:h(),n=kt.Static,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=kt.EscapeNext;return n===kt.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}const Mt="[^/]+?",Ut={sensitive:!1,strict:!1,start:!0,end:!0};var Ft=function(t){return t[t["_multiplier"]=10]="_multiplier",t[t["Root"]=90]="Root",t[t["Segment"]=40]="Segment",t[t["SubSegment"]=30]="SubSegment",t[t["Static"]=40]="Static",t[t["Dynamic"]=20]="Dynamic",t[t["BonusCustomRegExp"]=10]="BonusCustomRegExp",t[t["BonusWildcard"]=-50]="BonusWildcard",t[t["BonusRepeatable"]=-20]="BonusRepeatable",t[t["BonusOptional"]=-8]="BonusOptional",t[t["BonusStrict"]=.7000000000000001]="BonusStrict",t[t["BonusCaseSensitive"]=.25]="BonusCaseSensitive",t}(Ft||{});const Vt=/[.+*?^${}()[\]/\\]/g;function jt(t,e){const n=o({},Ut,e),r=[];let i=n.start?"^":"";const s=[];for(const o of t){const t=o.length?[]:[Ft.Root];n.strict&&!o.length&&(i+="/");for(let e=0;e<o.length;e++){const r=o[e];let a=Ft.Segment+(n.sensitive?Ft.BonusCaseSensitive:0);if(r.type===Nt.Static)e||(i+="/"),i+=r.value.replace(Vt,"\\$&"),a+=Ft.Static;else if(r.type===Nt.Param){const{value:t,repeatable:n,optional:c,regexp:u}=r;s.push({name:t,repeatable:n,optional:c});const l=u||Mt;l!==Mt&&(a+=Ft.BonusCustomRegExp);let h=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;e||(h=c&&o.length<2?`(?:/${h})`:"/"+h),c&&(h+="?"),i+=h,a+=Ft.Dynamic,c&&(a+=Ft.BonusOptional),n&&(a+=Ft.BonusRepeatable),".*"===l&&(a+=Ft.BonusWildcard)}t.push(a)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=Ft.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function c(t){const e=t.match(a),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function l(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(t.type===Nt.Static)n+=t.value;else if(t.type===Nt.Param){const{value:s,repeatable:o,optional:a}=t,c=s in e?e[s]:"";if(u(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=u(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n||"/"}return{re:a,score:r,keys:s,parse:c,stringify:l}}function Bt(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&t[0]===Ft.Static+Ft.Segment?-1:1:t.length>e.length?1===e.length&&e[0]===Ft.Static+Ft.Segment?1:-1:0}function $t(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=Bt(r[n],i[n]);if(t)return t;n++}if(1===Math.abs(i.length-r.length)){if(qt(r))return 1;if(qt(i))return-1}return i.length-r.length}function qt(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const zt={strict:!1,end:!0,sensitive:!1};function Gt(t,e,n){const r=jt(Lt(t.path),n);const i=o(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function Ht(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,u=Wt(t);u.aliasOf=r&&r.record;const f=l(e,t),d=[u];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)d.push(Wt(o({},u,{components:r?r.record.components:u.components,path:t,aliasOf:r?r.record:u})))}let p,g;for(const e of d){const{path:o}=e;if(n&&"/"!==o[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(o&&r+o)}if(p=Gt(e,n,f),r?r.alias.push(p):(g=g||p,g!==p&&g.alias.push(p),i&&t.name&&!Xt(p)&&a(t.name)),te(p)&&h(p),u.children){const t=u.children;for(let e=0;e<t.length;e++)s(t[e],p,r&&r.children[e])}r=r||p}return g?()=>{a(g)}:c}function a(t){if(rt(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(a),e.alias.forEach(a))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(a),t.alias.forEach(a))}}function u(){return n}function h(t){const e=Jt(t,n);n.splice(e,0,t),t.record.name&&!Xt(t)&&r.set(t.record.name,t)}function f(t,e){let i,s,a,c={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw ot(it.MATCHER_NOT_FOUND,{location:t});0,a=i.record.name,c=o(Kt(e.params,i.keys.filter(t=>!t.optional).concat(i.parent?i.parent.keys.filter(t=>t.optional):[]).map(t=>t.name)),t.params&&Kt(t.params,i.keys.map(t=>t.name))),s=i.stringify(c)}else if(null!=t.path)s=t.path,i=n.find(t=>t.re.test(s)),i&&(c=i.parse(s),a=i.record.name);else{if(i=e.name?r.get(e.name):n.find(t=>t.re.test(e.path)),!i)throw ot(it.MATCHER_NOT_FOUND,{location:t,currentLocation:e});a=i.record.name,c=o({},e.params,t.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:a,path:s,params:c,matched:u,meta:Yt(u)}}function d(){n.length=0,r.clear()}return e=l(zt,e),t.forEach(t=>s(t)),{addRoute:s,resolve:f,removeRoute:a,clearRoutes:d,getRoutes:u,getRecordMatcher:i}}function Kt(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Wt(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Qt(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Qt(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="object"===typeof n?n[r]:n;return e}function Xt(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Yt(t){return t.reduce((t,e)=>o(t,e.meta),{})}function Jt(t,e){let n=0,r=e.length;while(n!==r){const i=n+r>>1;$t(t,e[i])<0?r=i:n=i+1}const i=Zt(t);return i&&(r=e.lastIndexOf(i,r-1)),r}function Zt(t){let e=t;while(e=e.parent)if(te(e)&&0===$t(t,e))return e}function te({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ee(t){const e=(0,Et.WQ)(gt),n=(0,Et.WQ)(mt);const r=(0,Et.EW)(()=>{const n=(0,Tt.R1)(t.to);return e.resolve(n)}),i=(0,Et.EW)(()=>{const{matched:t}=r.value,{length:e}=t,i=t[e-1],s=n.matched;if(!i||!s.length)return-1;const o=s.findIndex(F.bind(null,i));if(o>-1)return o;const a=ae(t[e-2]);return e>1&&ae(i)===a&&s[s.length-1].path!==a?s.findIndex(F.bind(null,t[e-2])):o}),s=(0,Et.EW)(()=>i.value>-1&&oe(n.params,r.value.params)),o=(0,Et.EW)(()=>i.value>-1&&i.value===n.matched.length-1&&V(n.params,r.value.params));function a(n={}){if(se(n)){const n=e[(0,Tt.R1)(t.replace)?"replace":"push"]((0,Tt.R1)(t.to)).catch(c);return t.viewTransition&&"undefined"!==typeof document&&"startViewTransition"in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:(0,Et.EW)(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}function ne(t){return 1===t.length?t[0]:t}const re=(0,Et.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ee,setup(t,{slots:e}){const n=(0,Tt.Kh)(ee(t)),{options:r}=(0,Et.WQ)(gt),i=(0,Et.EW)(()=>({[ce(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ce(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&ne(e.default(n));return t.custom?r:(0,Et.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),ie=re;function se(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function oe(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!u(i)||i.length!==r.length||r.some((t,e)=>t.valueOf()!==i[e].valueOf()))return!1}return!0}function ae(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ce=(t,e,n)=>null!=t?t:null!=e?e:n,ue=(0,Et.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=(0,Et.WQ)(yt),i=(0,Et.EW)(()=>t.route||r.value),s=(0,Et.WQ)(pt,0),a=(0,Et.EW)(()=>{let t=(0,Tt.R1)(s);const{matched:e}=i.value;let n;while((n=e[t])&&!n.components)t++;return t}),c=(0,Et.EW)(()=>i.value.matched[a.value]);(0,Et.Gt)(pt,(0,Et.EW)(()=>a.value+1)),(0,Et.Gt)(dt,c),(0,Et.Gt)(yt,i);const u=(0,Tt.KR)();return(0,Et.wB)(()=>[u.value,c.value,t.name],([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&F(e,i)&&r||(e.enterCallbacks[n]||[]).forEach(e=>e(t))},{flush:"post"}),()=>{const r=i.value,s=t.name,a=c.value,l=a&&a.components[s];if(!l)return le(n.default,{Component:l,route:r});const h=a.props[s],f=h?!0===h?r.params:"function"===typeof h?h(r):h:null,d=t=>{t.component.isUnmounted&&(a.instances[s]=null)},p=(0,Et.h)(l,o({},f,e,{onVnodeUnmounted:d,ref:u}));return le(n.default,{Component:p,route:r})||p}}});function le(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const he=ue;function fe(t){const e=Ht(t.routes,t),n=t.parseQuery||lt,i=t.stringifyQuery||ht,s=t.history;const l=vt(),h=vt(),f=vt(),d=(0,Tt.IJ)(q);let p=q;r&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const g=a.bind(null,t=>""+t),m=a.bind(null,O),y=a.bind(null,N);function v(t,n){let r,i;return rt(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function w(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function b(){return e.getRoutes().map(t=>t.record)}function _(t){return!!e.getRecordMatcher(t)}function E(t,r){if(r=o({},r||d.value),"string"===typeof t){const i=P(n,t,r.path),a=e.resolve({path:i.path},r),c=s.createHref(i.fullPath);return o(i,a,{params:y(a.params),hash:N(i.hash),redirectedFrom:void 0,href:c})}let a;if(null!=t.path)a=o({},t,{path:P(n,t.path,r.path).path});else{const e=o({},t.params);for(const t in e)null==e[t]&&delete e[t];a=o({},t,{params:m(e)}),r.params=m(r.params)}const c=e.resolve(a,r),u=t.hash||"";c.params=g(y(c.params));const l=L(i,o({},t,{hash:C(u),path:c.path})),h=s.createHref(l);return o({fullPath:l,hash:u,query:i===ht?ft(t.query):t.query||{}},c,{redirectedFrom:void 0,href:h})}function T(t){return"string"===typeof t?P(n,t,d.value.path):o({},t)}function S(t,e){if(p!==t)return ot(it.NAVIGATION_CANCELLED,{from:e,to:t})}function A(t){return x(t)}function I(t){return A(o(T(t),{replace:!0}))}function R(t,e){const n=t.matched[t.matched.length-1];if(n&&n.redirect){const{redirect:r}=n;let i="function"===typeof r?r(t,e):r;return"string"===typeof i&&(i=i.includes("?")||i.includes("#")?i=T(i):{path:i},i.params={}),o({query:t.query,hash:t.hash,params:null!=i.path?{}:t.params},i)}}function x(t,e){const n=p=E(t),r=d.value,s=t.state,a=t.force,c=!0===t.replace,u=R(n,r);if(u)return x(o(T(u),{state:"object"===typeof u?o({},s,u.state):s,force:a,replace:c}),e||n);const l=n;let h;return l.redirectedFrom=e,!a&&U(i,r,n)&&(h=ot(it.NAVIGATION_DUPLICATED,{to:l,from:r}),Z(r,r,!0,!1)),(h?Promise.resolve(h):M(l,r)).catch(t=>at(t)?at(t,it.NAVIGATION_GUARD_REDIRECT)?t:Q(t):K(t,l,r)).then(t=>{if(t){if(at(t,it.NAVIGATION_GUARD_REDIRECT))return x(o({replace:c},T(t.to),{state:"object"===typeof t.to?o({},s,t.to.state):s,force:a}),e||l)}else t=V(l,r,!0,c,s);return F(l,r,t),t})}function k(t,e){const n=S(t,e);return n?Promise.reject(n):Promise.resolve()}function D(t){const e=ct.values().next().value;return e&&"function"===typeof e.runWithContext?e.runWithContext(t):t()}function M(t,e){let n;const[r,i,s]=_t(t,e);n=bt(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach(r=>{n.push(wt(r,t,e))});const o=k.bind(null,t,e);return n.push(o),dt(n).then(()=>{n=[];for(const r of l.list())n.push(wt(r,t,e));return n.push(o),dt(n)}).then(()=>{n=bt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach(r=>{n.push(wt(r,t,e))});return n.push(o),dt(n)}).then(()=>{n=[];for(const r of s)if(r.beforeEnter)if(u(r.beforeEnter))for(const i of r.beforeEnter)n.push(wt(i,t,e));else n.push(wt(r.beforeEnter,t,e));return n.push(o),dt(n)}).then(()=>(t.matched.forEach(t=>t.enterCallbacks={}),n=bt(s,"beforeRouteEnter",t,e,D),n.push(o),dt(n))).then(()=>{n=[];for(const r of h.list())n.push(wt(r,t,e));return n.push(o),dt(n)}).catch(t=>at(t,it.NAVIGATION_CANCELLED)?t:Promise.reject(t))}function F(t,e,n){f.list().forEach(r=>D(()=>r(t,e,n)))}function V(t,e,n,i,a){const c=S(t,e);if(c)return c;const u=e===q,l=r?history.state:{};n&&(i||u?s.replace(t.fullPath,o({scroll:u&&l&&l.scroll},a)):s.push(t.fullPath,a)),d.value=t,Z(t,e,n,u),Q()}let j;function B(){j||(j=s.listen((t,e,n)=>{if(!ut.listening)return;const i=E(t),a=R(i,ut.currentRoute.value);if(a)return void x(o(a,{replace:!0,force:!0}),i).catch(c);p=i;const u=d.value;r&&tt(J(u.fullPath,n.delta),X()),M(i,u).catch(t=>at(t,it.NAVIGATION_ABORTED|it.NAVIGATION_CANCELLED)?t:at(t,it.NAVIGATION_GUARD_REDIRECT)?(x(o(T(t.to),{force:!0}),i).then(t=>{at(t,it.NAVIGATION_ABORTED|it.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===z.pop&&s.go(-1,!1)}).catch(c),Promise.reject()):(n.delta&&s.go(-n.delta,!1),K(t,i,u))).then(t=>{t=t||V(i,u,!1),t&&(n.delta&&!at(t,it.NAVIGATION_CANCELLED)?s.go(-n.delta,!1):n.type===z.pop&&at(t,it.NAVIGATION_ABORTED|it.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),F(i,u,t)}).catch(c)}))}let $,G=vt(),H=vt();function K(t,e,n){Q(t);const r=H.list();return r.length?r.forEach(r=>r(t,e,n)):console.error(t),Promise.reject(t)}function W(){return $&&d.value!==q?Promise.resolve():new Promise((t,e)=>{G.add([t,e])})}function Q(t){return $||($=!t,B(),G.list().forEach(([e,n])=>t?n(t):e()),G.reset()),t}function Z(e,n,i,s){const{scrollBehavior:o}=t;if(!r||!o)return Promise.resolve();const a=!i&&et(J(e.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,Et.dY)().then(()=>o(e,n,a)).then(t=>t&&Y(t)).catch(t=>K(t,e,n))}const nt=t=>s.go(t);let st;const ct=new Set,ut={currentRoute:d,listening:!0,addRoute:v,removeRoute:w,clearRoutes:e.clearRoutes,hasRoute:_,getRoutes:b,resolve:E,options:t,push:A,replace:I,go:nt,back:()=>nt(-1),forward:()=>nt(1),beforeEach:l.add,beforeResolve:h.add,afterEach:f.add,onError:H.add,isReady:W,install(t){t.component("RouterLink",ie),t.component("RouterView",he),t.config.globalProperties.$router=ut,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,Tt.R1)(d)}),r&&!st&&d.value===q&&(st=!0,A(s.location).catch(t=>{0}));const e={};for(const r in q)Object.defineProperty(e,r,{get:()=>d.value[r],enumerable:!0});t.provide(gt,ut),t.provide(mt,(0,Tt.Gc)(e)),t.provide(yt,d);const n=t.unmount;ct.add(t),t.unmount=function(){ct.delete(t),ct.size<1&&(p=q,j&&j(),j=null,d.value=q,st=!1,$=!1),n()}}};function dt(t){return t.reduce((t,e)=>t.then(()=>D(e)),Promise.resolve())}return ut}}}]);
//# sourceMappingURL=chunk-vendors.632900a2.js.map