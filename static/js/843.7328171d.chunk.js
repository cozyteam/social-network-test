"use strict";(self.webpackChunkstorm=self.webpackChunkstorm||[]).push([[843],{3843:function(s,t,e){e.r(t),e.d(t,{default:function(){return D}});var n=e(8683),r=e(5671),i=e(3144),o=e(136),a=e(2882),u=e(2791),l={avatar:"ProfileInfo_avatar__mBfs1",descriptionBlock:"ProfileInfo_descriptionBlock__NBqCE"},p=e(4904),c=e(4353),d=e(184),f=(u.Component,e(885)),h=function(s){var t=(0,u.useState)(!1),e=(0,f.Z)(t,2),n=e[0],r=e[1],i=(0,u.useState)(s.status),o=(0,f.Z)(i,2),a=o[0],l=o[1];(0,u.useEffect)((function(){l(s.status)}),[s.status]);return(0,d.jsxs)("div",{children:[!n&&(0,d.jsx)("div",{children:(0,d.jsxs)("span",{onDoubleClick:function(){r(!0)},children:[" \u0421\u0442\u0430\u0442\u0443\u0441: ",a||"________"]})}),n&&(0,d.jsx)("div",{children:(0,d.jsx)("input",{autoFocus:!0,onBlur:function(){r(!1),s.updateStatus(a)},onChange:function(s){l(s.currentTarget.value)},value:a})})]})},j=function(s){if(!s.profile)return(0,d.jsx)(p.Z,{});var t=s.profile.contacts,e=[];for(var n in t)null!=t[n]&&e.push(n+" - "+t[n]);return(0,d.jsx)("div",{children:(0,d.jsxs)("div",{className:l.descriptionBlock,children:[(0,d.jsx)("img",{className:l.avatar,src:null!=s.profile.photos.large?s.profile.photos.large:c}),(0,d.jsx)(h,{status:s.status,updateStatus:s.updateStatus}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"\u0418\u043c\u044f: "}),s.profile.fullName]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"\u041e\u0431\u043e \u043c\u043d\u0435:"})," ",s.profile.aboutMe]}),(0,d.jsx)("div",{className:l.job,children:s.profile.lookingForAJob?(0,d.jsx)("span",{children:"\u0412 \u043f\u043e\u0438\u0441\u043a\u0435 \u0440\u0430\u0431\u043e\u0442\u044b"}):(0,d.jsx)("span",{children:s.profile.lookingForAJobDescription})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"}),e.map((function(s){return(0,d.jsx)("div",{children:s})}))]})]})]})})},x=e(6070),m={postsBlock:"MyPosts_postsBlock__MkRmv"},v="Post_item__e2tlX",k=function(s){return(0,d.jsxs)("div",{className:v,children:[(0,d.jsx)("img",{src:"https://www.meme-arsenal.com/memes/8ab5fe07681cd172915e9472a0a8443d.jpg"}),(0,d.jsx)("span",{children:s.message}),(0,d.jsx)("div",{children:(0,d.jsxs)("span",{children:["Like: ",s.likesCount]})})]})},g=e(6139),_=e(704),P=e(5304),Z=e(9086),S=(0,P.D)(30),C=(0,_.Z)({form:"postform"})((function(s){return(0,d.jsx)("form",{onSubmit:s.handleSubmit,children:(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{children:(0,d.jsx)(g.Z,{name:"postform",value:s.newPostText,placeholder:"Post message",component:Z.gx,validate:[P.C,S]})}),(0,d.jsx)("div",{children:(0,d.jsx)("button",{onClick:s.onAddPost,children:"Add post"})})]})})})),b=function(s){(0,o.Z)(e,s);var t=(0,a.Z)(e);function e(){return(0,r.Z)(this,e),t.apply(this,arguments)}return(0,i.Z)(e,[{key:"render",value:function(){var s=this,t=this.props.posts.map((function(s){return(0,d.jsx)(k,{id:s.id,message:s.message,likesCount:s.likesCount})}));return(0,d.jsxs)("div",{className:m.postsBlock,children:[(0,d.jsx)("h3",{children:"My posts"}),(0,d.jsx)(C,{onSubmit:function(t){s.props.addPost(t.postform)}}),(0,d.jsx)("div",{className:m.posts,children:t})]})}}]),e}(u.Component),B=b,N=e(8687),w=(0,N.$j)((function(s){return{posts:s.profilePage.posts,newPostText:s.profilePage.newPostText}}),(function(s){return{addPost:function(t){s((0,x.Wl)(t))}}}))(B),y=function(s){return(0,d.jsxs)("div",{children:[(0,d.jsx)(j,{profile:s.profile,status:s.status,updateStatus:s.updateStatus}),(0,d.jsx)(w,{})]})},A=e(7781),I=(e(1548),e(6871)),M=function(s){(0,o.Z)(e,s);var t=(0,a.Z)(e);function e(){return(0,r.Z)(this,e),t.apply(this,arguments)}return(0,i.Z)(e,[{key:"componentDidMount",value:function(){var s=this.props.params.userId;s||(s=26143),this.props.setProfile(s),this.props.getStatus(s)}},{key:"render",value:function(){return(0,d.jsx)(y,(0,n.Z)((0,n.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(u.Component),D=(0,A.qC)((0,N.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,authorizedUserId:s.auth.userId,isAuth:s.auth.isAuth}}),{setProfile:x.RG,getStatus:x.lR,updateStatus:x.Nf}),(function(s){return function(t){return(0,d.jsx)(s,(0,n.Z)((0,n.Z)({},t),{},{params:(0,I.UO)()}))}}))(M)}}]);
//# sourceMappingURL=843.7328171d.chunk.js.map