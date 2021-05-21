(this["webpackJsonpspotify-api-project-react"]=this["webpackJsonpspotify-api-project-react"]||[]).push([[0],{18:function(t,e,a){t.exports={FindAnArtist:"FindAnArtist_FindAnArtist__D85Q3","show-searchbar":"FindAnArtist_show-searchbar__3b9l0"}},19:function(t,e,a){t.exports={Footer:"Footer_Footer__238hM"}},25:function(t,e,a){},3:function(t,e,a){t.exports={SearchResult:"SearchResult_SearchResult__1cuMP","show-searchresult":"SearchResult_show-searchresult__3jn41",SearchResultBg:"SearchResult_SearchResultBg__21P-z",BackButton:"SearchResult_BackButton__2RX7s",ArtistTag:"SearchResult_ArtistTag__3LxHK",ArtistName:"SearchResult_ArtistName__2xDYx",SpotifyButton:"SearchResult_SpotifyButton__2aDxZ",ArtistImg:"SearchResult_ArtistImg__1pabO"}},44:function(t,e,a){"use strict";a.r(e);var s=a(0),c=a(1),r=a(17),n=a.n(r),i=(a(25),a(4)),o=a(8),u=a.n(o),h=a(18),p=a.n(h),l=function(t){return Object(s.jsxs)("div",{className:p.a.FindAnArtist,children:[Object(s.jsx)("h1",{children:"Search for an Artist"}),t.children]})},j=a(3),b=a.n(j),d=a.p+"static/media/back-button.87dd6e54.svg",m=function(t){var e=t.artistName,a=t.artistImg,c=t.artistSpotifyLink,r=t.setArtistName,n=t.setArtistImg,i=t.setArtistSpotifyLink,o=t.setInputText,u=t.setResult;return Object(s.jsxs)("div",{className:b.a.SearchResult,children:[Object(s.jsx)("div",{className:b.a.SearchResultBg}),Object(s.jsx)("img",{onClick:function(){r(""),n(""),i(""),o(""),u(!1)},className:b.a.BackButton,src:d,alt:"Back-Button"}),Object(s.jsx)("div",{className:b.a.ArtistTag,children:Object(s.jsx)("p",{children:"Artist"})}),Object(s.jsx)("div",{className:b.a.ArtistName,children:Object(s.jsx)("h1",{children:e})}),Object(s.jsx)("a",{className:b.a.SpotifyButton,href:c,target:"_blank",rel:"noreferrer",children:"Open Spotify"}),Object(s.jsx)("img",{className:b.a.ArtistImg,src:a,alt:"Artist-Img"})]})},S=a(19),f=a.n(S),_=function(){return Object(s.jsxs)("div",{className:f.a.Footer,children:[Object(s.jsx)("p",{children:"project created by Christina Punla"}),Object(s.jsx)("p",{children:"powered by Spotify API"})]})},x=a(6),O=a.n(x),A=a.p+"static/media/search.8c756ae2.svg",g=a(5),N=a.n(g),y=function(t){var e=t.token,a=t.inputText,c=t.setInputText,r=t.setArtistName,n=t.setArtistImg,i=t.setArtistSpotifyLink,o=t.setResult,u=function(t){c(t.target.value)},h=function(){console.log("GETTING RESULT..."),N()("https://api.spotify.com/v1/search?q="+a+"&type=artist",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+e}}).then((function(t){r(t.data.artists.items[0].name),n(t.data.artists.items[0].images[1].url),i(t.data.artists.items[0].external_urls.spotify),o(!0)})).catch((function(){}))};return Object(s.jsx)("div",{className:O.a.SearchbarContainer,children:Object(s.jsxs)("form",{children:[Object(s.jsx)("input",{onChange:u,onKeyPress:function(t){"Enter"===t.code&&(t.preventDefault(),h())},id:"SearchbarInput",className:O.a.SearchbarInput,type:"text"}),Object(s.jsx)("button",{type:"submit",onClick:u,children:Object(s.jsx)("img",{className:O.a.SearchIcon,src:A,alt:"Search-SVG"})})]})})};var I=function(){var t="".concat("8102acefd4d44fd4abb9ea35bcd80bad"),e="".concat("a10f6d6f177e469d872bfb8329dd2e4a"),a=Object(c.useState)(""),r=Object(i.a)(a,2),n=r[0],o=r[1],h=Object(c.useState)(""),p=Object(i.a)(h,2),j=p[0],b=p[1],d=Object(c.useState)(""),S=Object(i.a)(d,2),f=S[0],x=S[1],O=Object(c.useState)(""),A=Object(i.a)(O,2),g=A[0],I=A[1],R=Object(c.useState)(""),k=Object(i.a)(R,2),v=k[0],T=k[1],B=Object(c.useState)(!1),w=Object(i.a)(B,2),C=w[0],E=w[1];return Object(c.useEffect)((function(){console.log("GETTING ACCESS TOKEN"),N()("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+btoa(t+":"+e)},data:"grant_type=client_credentials"}).then((function(t){o(t.data.access_token)})).catch((function(){}))}),[t,e]),C?Object(s.jsxs)("div",{className:u.a.App,children:[Object(s.jsx)(m,{artistName:f,artistImg:g,artistSpotifyLink:v,setArtistName:x,setArtistImg:I,setArtistSpotifyLink:T,setInputText:b,setResult:E}),Object(s.jsx)(_,{})]}):Object(s.jsxs)("div",{className:u.a.App,children:[Object(s.jsx)(l,{children:Object(s.jsx)(y,{token:n,inputText:j,setInputText:b,setArtistName:x,setArtistImg:I,setArtistSpotifyLink:T,setResult:E})}),Object(s.jsx)(_,{})]})};n.a.render(Object(s.jsx)(I,{}),document.getElementById("root"))},6:function(t,e,a){t.exports={SearchbarContainer:"Searchbar_SearchbarContainer__25U4R",SearchbarInput:"Searchbar_SearchbarInput__YrwRx",SearchIcon:"Searchbar_SearchIcon__Kk5tX"}},8:function(t,e,a){t.exports={App:"App_App__aOmNj"}}},[[44,1,2]]]);
//# sourceMappingURL=main.1600e99a.chunk.js.map