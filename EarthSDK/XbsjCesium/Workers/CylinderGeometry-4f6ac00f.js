/**
 * Cesium - https://github.com/AnalyticalGraphicsInc/cesium
 *
 * Copyright 2011-2020 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(["exports","./when-4ca4e419","./Check-430b3551","./Math-c0afb7aa","./Cartesian2-0cd32dae","./Transforms-1f147cce","./ComponentDatatype-adb4702b","./GeometryAttribute-ebf6a4c7","./GeometryAttributes-614c63f8","./IndexDatatype-a78bfe07","./GeometryOffsetAttribute-daefb9ce","./VertexFormat-95f25802","./CylinderGeometryLibrary-e40ba316"],function(t,I,e,U,S,B,Y,Z,J,W,j,u,q){"use strict";var H=new S.Cartesian2,K=new S.Cartesian3,Q=new S.Cartesian3,X=new S.Cartesian3,$=new S.Cartesian3;function f(t){var e=(t=I.defaultValue(t,I.defaultValue.EMPTY_OBJECT)).length,a=t.topRadius,r=t.bottomRadius,n=I.defaultValue(t.vertexFormat,u.VertexFormat.DEFAULT),o=I.defaultValue(t.slices,128);this._length=e,this._topRadius=a,this._bottomRadius=r,this._vertexFormat=u.VertexFormat.clone(n),this._slices=o,this._offsetAttribute=t.offsetAttribute,this._workerName="createCylinderGeometry"}f.packedLength=u.VertexFormat.packedLength+5,f.pack=function(t,e,a){return a=I.defaultValue(a,0),u.VertexFormat.pack(t._vertexFormat,e,a),a+=u.VertexFormat.packedLength,e[a++]=t._length,e[a++]=t._topRadius,e[a++]=t._bottomRadius,e[a++]=t._slices,e[a]=I.defaultValue(t._offsetAttribute,-1),e};var a,p=new u.VertexFormat,d={vertexFormat:p,length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,offsetAttribute:void 0};f.unpack=function(t,e,a){e=I.defaultValue(e,0);var r=u.VertexFormat.unpack(t,e,p);e+=u.VertexFormat.packedLength;var n=t[e++],o=t[e++],i=t[e++],s=t[e++],m=t[e];return I.defined(a)?(a._vertexFormat=u.VertexFormat.clone(r,a._vertexFormat),a._length=n,a._topRadius=o,a._bottomRadius=i,a._slices=s,a._offsetAttribute=-1===m?void 0:m,a):(d.length=n,d.topRadius=o,d.bottomRadius=i,d.slices=s,d.offsetAttribute=-1===m?void 0:m,new f(d))},f.createGeometry=function(t){var e=t._length,a=t._topRadius,r=t._bottomRadius,n=t._vertexFormat,o=t._slices;if(!(e<=0||a<0||r<0||0===a&&0===r)){var i,s=o+o,m=o+s,u=s+s,f=q.CylinderGeometryLibrary.computePositions(e,a,r,o,!0),p=n.st?new Float32Array(2*u):void 0,d=n.normal?new Float32Array(3*u):void 0,y=n.tangent?new Float32Array(3*u):void 0,l=n.bitangent?new Float32Array(3*u):void 0,b=n.normal||n.tangent||n.bitangent;if(b){var c=n.tangent||n.bitangent,v=0,A=0,g=0,h=Math.atan2(r-a,e),x=K;x.z=Math.sin(h);var _=Math.cos(h),C=X,F=Q;for(i=0;i<o;i++){var w=i/o*U.CesiumMath.TWO_PI,G=_*Math.cos(w),D=_*Math.sin(w);b&&(x.x=G,x.y=D,c&&(C=S.Cartesian3.normalize(S.Cartesian3.cross(S.Cartesian3.UNIT_Z,x,C),C)),n.normal&&(d[v++]=x.x,d[v++]=x.y,d[v++]=x.z,d[v++]=x.x,d[v++]=x.y,d[v++]=x.z),n.tangent&&(y[A++]=C.x,y[A++]=C.y,y[A++]=C.z,y[A++]=C.x,y[A++]=C.y,y[A++]=C.z),n.bitangent&&(F=S.Cartesian3.normalize(S.Cartesian3.cross(x,C,F),F),l[g++]=F.x,l[g++]=F.y,l[g++]=F.z,l[g++]=F.x,l[g++]=F.y,l[g++]=F.z))}for(i=0;i<o;i++)n.normal&&(d[v++]=0,d[v++]=0,d[v++]=-1),n.tangent&&(y[A++]=1,y[A++]=0,y[A++]=0),n.bitangent&&(l[g++]=0,l[g++]=-1,l[g++]=0);for(i=0;i<o;i++)n.normal&&(d[v++]=0,d[v++]=0,d[v++]=1),n.tangent&&(y[A++]=1,y[A++]=0,y[A++]=0),n.bitangent&&(l[g++]=0,l[g++]=1,l[g++]=0)}var R=12*o-12,V=W.IndexDatatype.createTypedArray(u,R),T=0,O=0;for(i=0;i<o-1;i++)V[T++]=O,V[T++]=O+2,V[T++]=O+3,V[T++]=O,V[T++]=O+3,V[T++]=O+1,O+=2;for(V[T++]=s-2,V[T++]=0,V[T++]=1,V[T++]=s-2,V[T++]=1,V[T++]=s-1,i=1;i<o-1;i++)V[T++]=s+i+1,V[T++]=s+i,V[T++]=s;for(i=1;i<o-1;i++)V[T++]=m,V[T++]=m+i,V[T++]=m+i+1;var L=0;if(n.st){var P=Math.max(a,r);for(i=0;i<u;i++){var k=S.Cartesian3.fromArray(f,3*i,$);p[L++]=(k.x+P)/(2*P),p[L++]=(k.y+P)/(2*P)}}var M=new J.GeometryAttributes;n.position&&(M.position=new Z.GeometryAttribute({componentDatatype:Y.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:f})),n.normal&&(M.normal=new Z.GeometryAttribute({componentDatatype:Y.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:d})),n.tangent&&(M.tangent=new Z.GeometryAttribute({componentDatatype:Y.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:y})),n.bitangent&&(M.bitangent=new Z.GeometryAttribute({componentDatatype:Y.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:l})),n.st&&(M.st=new Z.GeometryAttribute({componentDatatype:Y.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:p})),H.x=.5*e,H.y=Math.max(r,a);var z=new B.BoundingSphere(S.Cartesian3.ZERO,S.Cartesian2.magnitude(H));if(I.defined(t._offsetAttribute)){e=f.length;var E=new Uint8Array(e/3),N=t._offsetAttribute===j.GeometryOffsetAttribute.NONE?0:1;j.arrayFill(E,N),M.applyOffset=new Z.GeometryAttribute({componentDatatype:Y.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:E})}return new Z.Geometry({attributes:M,indices:V,primitiveType:Z.PrimitiveType.TRIANGLES,boundingSphere:z,offsetAttribute:t._offsetAttribute})}},f.getUnitCylinder=function(){return I.defined(a)||(a=f.createGeometry(new f({topRadius:1,bottomRadius:1,length:1,vertexFormat:u.VertexFormat.POSITION_ONLY}))),a},t.CylinderGeometry=f});
