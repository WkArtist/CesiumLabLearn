define(["exports","./when-7ef6387a","./Check-ed6a1804","./Math-c73e522c","./Cartesian2-51a0e5d9","./Transforms-ae2e5e13","./ComponentDatatype-3593b1c2","./GeometryAttribute-ab118dcd","./GeometryAttributes-cb18da36","./IndexDatatype-62984545","./GeometryOffsetAttribute-e4fca9ed"],function(i,R,e,N,B,S,U,F,W,Y,J){"use strict";var f=new B.Cartesian3(1,1,1),j=Math.cos,q=Math.sin;function c(i){i=R.defaultValue(i,R.defaultValue.EMPTY_OBJECT);var e=R.defaultValue(i.radii,f),t=R.defaultValue(i.innerRadii,e),a=R.defaultValue(i.minimumClock,0),n=R.defaultValue(i.maximumClock,N.CesiumMath.TWO_PI),r=R.defaultValue(i.minimumCone,0),o=R.defaultValue(i.maximumCone,N.CesiumMath.PI),s=Math.round(R.defaultValue(i.stackPartitions,10)),m=Math.round(R.defaultValue(i.slicePartitions,8)),u=Math.round(R.defaultValue(i.subdivisions,128));this._radii=B.Cartesian3.clone(e),this._innerRadii=B.Cartesian3.clone(t),this._minimumClock=a,this._maximumClock=n,this._minimumCone=r,this._maximumCone=o,this._stackPartitions=s,this._slicePartitions=m,this._subdivisions=u,this._offsetAttribute=i.offsetAttribute,this._workerName="createEllipsoidOutlineGeometry"}c.packedLength=2*B.Cartesian3.packedLength+8,c.pack=function(i,e,t){return t=R.defaultValue(t,0),B.Cartesian3.pack(i._radii,e,t),t+=B.Cartesian3.packedLength,B.Cartesian3.pack(i._innerRadii,e,t),t+=B.Cartesian3.packedLength,e[t++]=i._minimumClock,e[t++]=i._maximumClock,e[t++]=i._minimumCone,e[t++]=i._maximumCone,e[t++]=i._stackPartitions,e[t++]=i._slicePartitions,e[t++]=i._subdivisions,e[t]=R.defaultValue(i._offsetAttribute,-1),e};var C=new B.Cartesian3,_=new B.Cartesian3,h={radii:C,innerRadii:_,minimumClock:void 0,maximumClock:void 0,minimumCone:void 0,maximumCone:void 0,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0,offsetAttribute:void 0};c.unpack=function(i,e,t){e=R.defaultValue(e,0);var a=B.Cartesian3.unpack(i,e,C);e+=B.Cartesian3.packedLength;var n=B.Cartesian3.unpack(i,e,_);e+=B.Cartesian3.packedLength;var r=i[e++],o=i[e++],s=i[e++],m=i[e++],u=i[e++],f=i[e++],d=i[e++],l=i[e];return R.defined(t)?(t._radii=B.Cartesian3.clone(a,t._radii),t._innerRadii=B.Cartesian3.clone(n,t._innerRadii),t._minimumClock=r,t._maximumClock=o,t._minimumCone=s,t._maximumCone=m,t._stackPartitions=u,t._slicePartitions=f,t._subdivisions=d,t._offsetAttribute=-1===l?void 0:l,t):(h.minimumClock=r,h.maximumClock=o,h.minimumCone=s,h.maximumCone=m,h.stackPartitions=u,h.slicePartitions=f,h.subdivisions=d,h.offsetAttribute=-1===l?void 0:l,new c(h))},c.createGeometry=function(i){var e=i._radii;if(!(e.x<=0||e.y<=0||e.z<=0)){var t=i._innerRadii;if(!(t.x<=0||t.y<=0||t.z<=0)){var a=i._minimumClock,n=i._maximumClock,r=i._minimumCone,o=i._maximumCone,s=i._subdivisions,m=B.Ellipsoid.fromCartesian3(e),u=i._slicePartitions+1,f=i._stackPartitions+1;(u=Math.round(u*Math.abs(n-a)/N.CesiumMath.TWO_PI))<2&&(u=2),(f=Math.round(f*Math.abs(o-r)/N.CesiumMath.PI))<2&&(f=2);var d=0,l=1,c=t.x!==e.x||t.y!==e.y||t.z!==e.z,C=!1,_=!1;c&&(l=2,0<r&&(C=!0,d+=u),o<Math.PI&&(_=!0,d+=u));var h,p,v,y,k=s*l*(f+u),b=new Float64Array(3*k),A=2*(k+d-(u+f)*l),x=Y.IndexDatatype.createTypedArray(k,A),P=0,w=new Array(f),M=new Array(f);for(h=0;h<f;h++)y=r+h*(o-r)/(f-1),w[h]=q(y),M[h]=j(y);var V=new Array(s),g=new Array(s);for(h=0;h<s;h++)v=a+h*(n-a)/(s-1),V[h]=q(v),g[h]=j(v);for(h=0;h<f;h++)for(p=0;p<s;p++)b[P++]=e.x*w[h]*g[p],b[P++]=e.y*w[h]*V[p],b[P++]=e.z*M[h];if(c)for(h=0;h<f;h++)for(p=0;p<s;p++)b[P++]=t.x*w[h]*g[p],b[P++]=t.y*w[h]*V[p],b[P++]=t.z*M[h];for(w.length=s,M.length=s,h=0;h<s;h++)y=r+h*(o-r)/(s-1),w[h]=q(y),M[h]=j(y);for(V.length=u,g.length=u,h=0;h<u;h++)v=a+h*(n-a)/(u-1),V[h]=q(v),g[h]=j(v);for(h=0;h<s;h++)for(p=0;p<u;p++)b[P++]=e.x*w[h]*g[p],b[P++]=e.y*w[h]*V[p],b[P++]=e.z*M[h];if(c)for(h=0;h<s;h++)for(p=0;p<u;p++)b[P++]=t.x*w[h]*g[p],b[P++]=t.y*w[h]*V[p],b[P++]=t.z*M[h];for(h=P=0;h<f*l;h++){var G=h*s;for(p=0;p<s-1;p++)x[P++]=G+p,x[P++]=G+p+1}var E=f*s*l;for(h=0;h<u;h++)for(p=0;p<s-1;p++)x[P++]=E+h+p*u,x[P++]=E+h+(p+1)*u;if(c)for(E=f*s*l+u*s,h=0;h<u;h++)for(p=0;p<s-1;p++)x[P++]=E+h+p*u,x[P++]=E+h+(p+1)*u;if(c){var O=f*s*l,D=O+s*u;if(C)for(h=0;h<u;h++)x[P++]=O+h,x[P++]=D+h;if(_)for(O+=s*u-u,D+=s*u-u,h=0;h<u;h++)x[P++]=O+h,x[P++]=D+h}var I=new W.GeometryAttributes({position:new F.GeometryAttribute({componentDatatype:U.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:b})});if(R.defined(i._offsetAttribute)){var T=b.length,z=new Uint8Array(T/3),L=i._offsetAttribute===J.GeometryOffsetAttribute.NONE?0:1;J.arrayFill(z,L),I.applyOffset=new F.GeometryAttribute({componentDatatype:U.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:z})}return new F.Geometry({attributes:I,indices:x,primitiveType:F.PrimitiveType.LINES,boundingSphere:S.BoundingSphere.fromEllipsoid(m),offsetAttribute:i._offsetAttribute})}}},i.EllipsoidOutlineGeometry=c});
