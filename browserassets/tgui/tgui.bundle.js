!function(e){function t(t){for(var o,i,c=t[0],l=t[1],u=t[2],s=0,p=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(d&&d(t);p.length;)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={1:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;a.push([395,0]),n()}({131:function(e,t,n){"use strict";t.__esModule=!0,t.EmptyPlaceholderCn=t.ToolLabelCn=t.ModuleViewCn=t.BlockCn=void 0;var o=n(454),r="cyborg-module-rewriter-interface";t.BlockCn=r;var a=(0,o.block)(r,"module-view");t.ModuleViewCn=a;var i=(0,o.element)(a,"tool-label");t.ToolLabelCn=i;var c=(0,o.block)(r,"empty-placeholder");t.EmptyPlaceholderCn=c},389:function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0;var o=n(1),r=n(4),a=n(131),i=function(e){var t=e.children,n=e.className,i=(0,r.classes)([a.EmptyPlaceholderCn,n]);return(0,o.createVNode)(1,"div",i,t,0)};t["default"]=i},395:function(e,t,n){e.exports=n(396)},396:function(e,t,n){"use strict";n(137),n(149),n(150),n(151),n(152),n(153),n(154),n(155),n(156),n(157),n(158),n(159),n(160),n(161),n(162),n(163),n(165),n(166),n(167),n(168),n(169),n(170),n(172),n(173),n(174),n(176),n(177),n(178),n(107),n(181),n(182),n(184),n(185),n(186),n(187),n(188),n(189),n(190),n(191),n(192),n(193),n(194),n(195),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(207),n(208),n(209),n(210),n(212),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(236),n(237),n(238),n(239),n(240),n(241),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(292),n(117),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(358),n(359),n(360),n(361),n(362),n(363),n(365),n(366),n(367),n(368);var o=n(1);n(369),n(370),n(371),n(372),n(373),n(374),n(413),n(414),n(415),n(416),n(417),n(418),n(419),n(420),n(421);var r,a,i=n(88),c=(n(89),n(124)),l=n(36);i.perf.mark("inception",null==(r=window.performance)||null==(a=r.timing)?void 0:a.navigationStart),i.perf.mark("init");var u=(0,l.configureStore)(),d=(0,c.createRenderer)((function(){var e=(0,n(449).getRoutedComponent)(u);return(0,o.createComponentVNode)(2,l.StoreProvider,{store:u,children:(0,o.createComponentVNode)(2,e)})}));!function s(){if("loading"!==document.readyState){for(u.subscribe(d),window.update=function(e){return u.dispatch(Byond.parseJson(e))};;){var e=window.__updateQueue__.shift();if(!e)break;window.update(e)}0}else document.addEventListener("DOMContentLoaded",s)}()},413:function(e,t,n){},414:function(e,t,n){},415:function(e,t,n){},416:function(e,t,n){},417:function(e,t,n){},418:function(e,t,n){},419:function(e,t,n){},420:function(e,t,n){},421:function(e,t,n){},449:function(e,t,n){"use strict";t.__esModule=!0,t.getRoutedComponent=void 0;var o=n(1),r=n(17),a=(n(91),n(40)),i=n(450),c=function(e,t){return function(){return(0,o.createComponentVNode)(2,a.Window,{resizable:!0,children:(0,o.createComponentVNode)(2,a.Window.Content,{scrollable:!0,children:["notFound"===e&&(0,o.createVNode)(1,"div",null,[(0,o.createTextVNode)("Interface "),(0,o.createVNode)(1,"b",null,t,0),(0,o.createTextVNode)(" was not found.")],4),"missingExport"===e&&(0,o.createVNode)(1,"div",null,[(0,o.createTextVNode)("Interface "),(0,o.createVNode)(1,"b",null,t,0),(0,o.createTextVNode)(" is missing an export.")],4)]})})}},l=function(){return(0,o.createComponentVNode)(2,a.Window,{resizable:!0,children:(0,o.createComponentVNode)(2,a.Window.Content,{scrollable:!0})})};t.getRoutedComponent=function(e){var t=e.getState(),n=(0,r.selectBackend)(t),o=n.suspended,a=n.config;if(o)return l;var u,d=null==a?void 0:a["interface"];try{u=i("./"+d+".js")}catch(p){if("MODULE_NOT_FOUND"===p.code)return c("notFound",d);throw p}var s=u[d];return s||c("missingExport",d)}},450:function(e,t,n){var o={"./CameraConsole.js":451,"./CyborgModuleRewriter.js":452,"./DJPanel.js":458,"./PaperSheet.js":459,"./SlotMachine.js":462,"./TankDispenser.js":463};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=450},451:function(e,t,n){"use strict";t.__esModule=!0,t.CameraConsoleContent=t.CameraConsole=void 0;var o=n(1),r=n(69),a=n(125),i=n(4),c=n(388),l=n(17),u=n(15),d=n(40),s=function(e,t){void 0===t&&(t="");var n=(0,c.createSearch)(t,(function(e){return e.name}));return(0,a.flow)([(0,r.filter)((function(e){return null==e?void 0:e.name})),t&&(0,r.filter)(n),(0,r.sortBy)((function(e){return e.name}))])(e)};t.CameraConsole=function(e,t){var n=(0,l.useBackend)(t),r=n.act,a=n.data,i=(n.config,a.mapRef),c=a.activeCamera,f=function(e,t){var n,o;if(!t)return[];var r=e.findIndex((function(e){return e.name===t.name}));return[null==(n=e[r-1])?void 0:n.name,null==(o=e[r+1])?void 0:o.name]}(s(a.cameras),c),m=f[0],v=f[1];return(0,o.createComponentVNode)(2,d.Window,{width:870,height:708,resizable:!0,children:[(0,o.createVNode)(1,"div","CameraConsole__left",(0,o.createComponentVNode)(2,d.Window.Content,{scrollable:!0,children:(0,o.createComponentVNode)(2,p)}),2),(0,o.createVNode)(1,"div","CameraConsole__right",[(0,o.createVNode)(1,"div","CameraConsole__toolbar",[(0,o.createVNode)(1,"b",null,"Camera: ",16),c&&c.name||"\u2014"],0),(0,o.createVNode)(1,"div","CameraConsole__toolbarRight",[(0,o.createComponentVNode)(2,u.Button,{icon:"chevron-left",disabled:!m,onClick:function(){return r("switch_camera",{name:m})}}),(0,o.createComponentVNode)(2,u.Button,{icon:"chevron-right",disabled:!v,onClick:function(){return r("switch_camera",{name:v})}})],4),(0,o.createComponentVNode)(2,u.ByondUi,{className:"CameraConsole__map",params:{id:i,type:"map"}})],4)]})};var p=function(e,t){var n=(0,l.useBackend)(t),r=n.act,a=n.data,c=(0,l.useLocalState)(t,"searchText",""),d=c[0],p=c[1],f=a.activeCamera,m=s(a.cameras,d);return(0,o.createFragment)([(0,o.createComponentVNode)(2,u.Input,{autoFocus:!0,fluid:!0,mb:1,placeholder:"Search for a camera",onInput:function(e,t){return p(t)}}),(0,o.createComponentVNode)(2,u.Section,{children:m.map((function(e){return(0,o.createVNode)(1,"div",(0,i.classes)(["Button","Button--fluid","Button--color--transparent","Button--ellipsis",f&&e.name===f.name&&"Button--selected"]),e.name,0,{title:e.name,onClick:function(){return r("switch_camera",{name:e.name})}},e.name)}))})],4)};t.CameraConsoleContent=p},452:function(e,t,n){"use strict";t.__esModule=!0,t.CyborgModuleRewriter=void 0;var o,r=n(1),a=n(17),i=n(40),c=(o=n(453))&&o.__esModule?o:{"default":o},l=n(131);t.CyborgModuleRewriter=function(e,t){var n=(0,a.useBackend)(t),o=n.act,u=n.data.modules;return(0,r.createComponentVNode)(2,i.Window,{width:670,height:640,resizable:!0,children:(0,r.createComponentVNode)(2,i.Window.Content,{className:l.BlockCn,scrollable:!0,children:(0,r.createComponentVNode)(2,c["default"],{modules:u,onEjectModule:function(e){return o("module-eject",{moduleRef:e})},onMoveToolDown:function(e){var t=e.moduleRef,n=e.toolRef;return o("tool-move",{dir:"down",moduleRef:t,toolRef:n})},onMoveToolUp:function(e){var t=e.moduleRef,n=e.toolRef;return o("tool-move",{dir:"up",moduleRef:t,toolRef:n})},onRemoveTool:function(e){var t=e.moduleRef,n=e.toolRef;return o("tool-remove",{moduleRef:t,toolRef:n})},onResetModule:function(e){var t=e.moduleId,n=e.moduleRef;return o("module-reset",{moduleId:t,moduleRef:n})},onSelectModule:function(e){return o("module-select",{moduleRef:e})}})})})}},453:function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0;var o=n(1),r=n(15),a=c(n(389)),i=c(n(455));function c(e){return e&&e.__esModule?e:{"default":e}}var l=function(e){var t=e.modules,n=(t=void 0===t?{}:t).available,c=void 0===n?[]:n,l=t.selected,u=e.onEjectModule,d=e.onMoveToolDown,s=e.onMoveToolUp,p=e.onRemoveTool,f=e.onResetModule,m=e.onSelectModule,v=l||{},h=v.ref,C=v.tools,b=void 0===C?[]:C;return c.length>0?(0,o.createComponentVNode)(2,r.Flex,{children:[(0,o.createComponentVNode)(2,r.Flex.Item,{width:18,mr:1,children:(0,o.createComponentVNode)(2,r.Section,{title:"Modules",fitted:!0,children:(0,o.createComponentVNode)(2,r.Tabs,{vertical:!0,children:c.map((function(e){var t=e.ref,n=e.name,a=(0,o.createComponentVNode)(2,r.Button,{icon:"eject",color:"transparent",onClick:function(){return u(t)},title:"Eject "+n});return(0,o.createComponentVNode)(2,r.Tabs.Tab,{onClick:function(){return m(t)},rightSlot:a,selected:t===h,children:n},t)}))})})}),(0,o.createComponentVNode)(2,r.Flex.Item,{grow:1,basis:0,children:h?(0,o.createComponentVNode)(2,i["default"],{onMoveToolDown:function(e){return d({moduleRef:h,toolRef:e})},onMoveToolUp:function(e){return s({moduleRef:h,toolRef:e})},onRemoveTool:function(e){return p({moduleRef:h,toolRef:e})},onResetModule:function(e){return f({moduleId:e,moduleRef:h})},tools:b}):(0,o.createComponentVNode)(2,r.Section,{children:(0,o.createComponentVNode)(2,a["default"],{children:"No module selected"})})})]}):(0,o.createComponentVNode)(2,r.Section,{children:(0,o.createComponentVNode)(2,a["default"],{children:"No modules inserted"})})};t["default"]=l},454:function(e,t,n){"use strict";t.__esModule=!0,t.modifier=t.element=t.block=void 0;t.block=function(e,t){return e+"-"+t};t.element=function(e,t){return e+"__"+t};t.modifier=function(e,t){return e+"--"+t}},455:function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0;var o,r=n(1),a=n(15),i=(o=n(456))&&o.__esModule?o:{"default":o};var c=[{id:"brobocop",name:"Brobocop"},{id:"chemistry",name:"Chemistry"},{id:"civilian",name:"Civilian"},{id:"engineering",name:"Engineering"},{id:"medical",name:"Medical"},{id:"mining",name:"Mining"}],l=function(e){var t=e.onMoveToolDown,n=e.onMoveToolUp,o=e.onRemoveTool,l=e.onResetModule,u=e.tools;return(0,r.createFragment)([(0,r.createComponentVNode)(2,a.Section,{title:"Preset",children:c.map((function(e){var t=e.id,n=e.name;return(0,r.createComponentVNode)(2,a.Button,{onClick:function(){return l(t)},title:n,children:n},t)}))}),(0,r.createComponentVNode)(2,a.Section,{title:"Tools",children:(0,r.createComponentVNode)(2,i["default"],{onMoveToolDown:t,onMoveToolUp:n,onRemoveTool:o,tools:u})})],4)};t["default"]=l},456:function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0;var o=n(1),r=i(n(389)),a=i(n(457));function i(e){return e&&e.__esModule?e:{"default":e}}var c=function(e){var t=e.onMoveToolDown,n=e.onMoveToolUp,i=e.onRemoveTool,c=e.tools,l=void 0===c?[]:c;return(0,o.createVNode)(1,"div",null,l.length>0?l.map((function(e){var r=e.name,c=e.ref;return(0,o.createComponentVNode)(2,a["default"],{onMoveToolDown:function(){return t(c)},onMoveToolUp:function(){return n(c)},onRemoveTool:function(){return i(c)},children:r},c)})):(0,o.createComponentVNode)(2,r["default"],{children:"Module has no tools"}),0)};t["default"]=c},457:function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0;var o=n(1),r=n(15),a=n(131),i=function(e){var t=e.children,n=e.onMoveToolDown,i=e.onMoveToolUp,c=e.onRemoveTool;return(0,o.createVNode)(1,"div",null,[(0,o.createComponentVNode)(2,r.Button,{icon:"arrow-up",onClick:i,title:"Move Up"}),(0,o.createComponentVNode)(2,r.Button,{icon:"arrow-down",onClick:n,title:"Move Down"}),(0,o.createComponentVNode)(2,r.Button,{icon:"trash",onClick:c,title:"Remove"}),(0,o.createVNode)(1,"span",a.ToolLabelCn,t,0)],4)};t["default"]=i},458:function(e,t,n){"use strict";t.__esModule=!0,t.DJPanel=void 0;var o=n(1),r=n(30),a=n(386),i=n(17),c=n(15),l=n(40);t.DJPanel=function(e,t){var n=(0,i.useBackend)(t),r=n.act,s=n.data,p=s.loadedSound,f=s.adminChannel;return(0,o.createComponentVNode)(2,l.Window,{width:430,height:305,title:"DJ Panel",resizable:!0,children:(0,o.createComponentVNode)(2,l.Window.Content,{children:[(0,o.createComponentVNode)(2,c.Section,{children:[(0,o.createComponentVNode)(2,c.Box,{children:[(0,o.createVNode)(1,"strong",null,"Active Soundfile: ",16),(0,o.createComponentVNode)(2,c.Button,{icon:p?"file-audio":"upload",selected:!p,content:p?(0,a.truncate)(p):"Upload",onClick:function(){return r("set-file")}})]}),(0,o.createComponentVNode)(2,c.Divider),(0,o.createComponentVNode)(2,d)]}),(0,o.createComponentVNode)(2,c.Section,{children:(0,o.createComponentVNode)(2,c.Box,{children:[(0,o.createComponentVNode)(2,c.Button,{icon:"music",selected:p,disabled:!p,content:"Play Music",onClick:function(){return r("play-music")}}),(0,o.createComponentVNode)(2,c.Button,{icon:"volume-up",selected:p,disabled:!p,content:"Play Sound",onClick:function(){return r("play-sound")}}),(0,o.createComponentVNode)(2,c.Button,{icon:"record-vinyl",selected:p,disabled:!p,content:"Play Ambience",onClick:function(){return r("play-ambience")}}),(0,o.createComponentVNode)(2,c.Box,{as:"span",color:"grey",textAlign:"right",pl:1,children:[(0,o.createComponentVNode)(2,c.Icon,{name:"satellite"})," Channel: ",(0,o.createVNode)(1,"em",null,1024-f,0)]})]})}),(0,o.createComponentVNode)(2,c.Section,{children:[(0,o.createComponentVNode)(2,c.Box,{children:[(0,o.createComponentVNode)(2,c.Button,{content:"Play Remote",onClick:function(){return r("play-remote")}}),(0,o.createComponentVNode)(2,c.Button,{disabled:!p,content:"Play To Player",onClick:function(){return r("play-player")}})]}),(0,o.createComponentVNode)(2,c.Box,{children:[(0,o.createComponentVNode)(2,c.Button,{color:"yellow",content:"Toggle DJ Announcements",onClick:function(){return r("toggle-announce")}}),(0,o.createComponentVNode)(2,c.Button,{color:"yellow",content:"Toggle DJ For Player",onClick:function(){return r("toggle-player-dj")}})]}),(0,o.createComponentVNode)(2,c.Box,{children:[(0,o.createComponentVNode)(2,c.Button,{icon:"stop",color:"red",content:"Stop Last Sound",onClick:function(){return r("stop-sound")}}),(0,o.createComponentVNode)(2,c.Button,{icon:"broadcast-tower",color:"red",content:"Stop The Radio For Everyone",onClick:function(){return r("stop-radio")}})]})]}),(0,o.createComponentVNode)(2,u)]})})};var u=function(e,t){if((0,i.useBackend)(t).data.announceMode)return(0,o.createComponentVNode)(2,c.NoticeBox,{info:!0,children:"Announce Mode Enabled"})},d=function(e,t){var n=(0,i.useBackend)(t),a=n.act,l=n.data,u=l.loadedSound,d=l.volume,s=l.frequency;return(0,o.createComponentVNode)(2,c.Box,{children:(0,o.createComponentVNode)(2,c.LabeledControls,{children:[(0,o.createComponentVNode)(2,c.LabeledControls.Item,{label:"Volume",children:(0,o.createComponentVNode)(2,c.NumberInput,{animated:!0,value:d,minValue:0,maxValue:100,format:function(e){return(0,r.toFixed)(2*e)+"%"},onDrag:function(e,t){return a("set-volume",{volume:t})}})}),(0,o.createComponentVNode)(2,c.LabeledControls.Item,{children:[(0,o.createComponentVNode)(2,c.Knob,{minValue:0,maxValue:100,ranges:{primary:[20,80],average:[10,90],bad:[0,100]},value:d,format:function(e){return(0,r.toFixed)(2*e)+"%"},onDrag:function(e,t){return a("set-volume",{volume:t})}}),(0,o.createComponentVNode)(2,c.Button,{icon:"sync-alt",top:"0.3em",content:"Reset",onClick:function(){return a("set-volume",{volume:"reset"})}})]}),(0,o.createComponentVNode)(2,c.LabeledControls.Item,{label:"Frequency",children:(0,o.createComponentVNode)(2,c.NumberInput,{animated:!0,value:s,step:.1,minValue:-100,maxValue:100,format:function(e){return(0,r.toFixed)(100*e)+"%"},onDrag:function(e,t){return a("set-freq",{frequency:t})}})}),(0,o.createComponentVNode)(2,c.LabeledControls.Item,{children:[(0,o.createComponentVNode)(2,c.Knob,{disabled:!u,minValue:-100,maxValue:100,step:.1,stepPixelSize:.1,ranges:{primary:[-40,40],average:[-70,70],bad:[-100,100]},value:s,format:function(e){return(0,r.toFixed)(100*e)+"%"},onDrag:function(e,t){return a("set-freq",{frequency:t})}}),(0,o.createComponentVNode)(2,c.Button,{icon:"sync-alt",top:"0.3em",content:"Reset",onClick:function(){return a("set-freq",{frequency:"reset"})}})]})]})})}},459:function(e,t,n){"use strict";t.__esModule=!0,t.PaperSheet=void 0;var o=n(1),r=n(4),a=n(377),i=s(n(460)),c=s(n(461)),l=n(17),u=n(15),d=n(40);function s(e){return e&&e.__esModule?e:{"default":e}}function p(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function f(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}function m(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function h(e,t){h=function(e,t){return new a(e,undefined,t)};var n=b(RegExp),o=RegExp.prototype,r=new WeakMap;function a(e,t,o){var a=n.call(this,e,t);return r.set(a,o||r.get(e)),a}function i(e,t){var n=r.get(t);return Object.keys(n).reduce((function(t,o){return t[o]=e[n[o]],t}),Object.create(null))}return C(a,n),a.prototype.exec=function(e){var t=o.exec.call(this,e);return t&&(t.groups=i(t,this)),t},a.prototype[Symbol.replace]=function(e,t){if("string"==typeof t){var n=r.get(this);return o[Symbol.replace].call(this,e,t.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+n[t]})))}if("function"==typeof t){var a=this;return o[Symbol.replace].call(this,e,(function(){var e=[];return e.push.apply(e,arguments),"object"!=typeof e[e.length-1]&&e.push(i(e,a)),t.apply(this,e)}))}return o[Symbol.replace].call(this,e,t)},h.apply(this,arguments)}function C(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}function b(e){var t="function"==typeof Map?new Map:undefined;return(b=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return y(e,arguments,g(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),V(o,e)})(e)}function y(e,t,n){return(y=N()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&V(r,n.prototype),r}).apply(null,arguments)}function N(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=function(e,t,n,o){return void 0===o&&(o=!1),"<span style=\"color:'"+n+"';font-family:'"+t+"';"+(o?"font-weight: bold;":"")+'">'+e+"</span>"},w=/\[(_+)\]/g,_=h(/\[<input[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+(.*?)id="(paperfield_[0-9]+)"(.*?)\/>\]/gm,{id:2}),k=/%s(?:ign)?(?=\\s|$)/gim,S=function(e,t,n,o,r){var a=e.replace(w,(function(e,a,i,c){var l=function(e,t,n){t=n+"x "+t;var o=document.createElement("canvas").getContext("2d");return o.font=t,o.measureText(e).width}(e,t,n)+"px";return function(e,t,n,o,r,a){return'[<input type="text" style="font:\''+o+"x "+n+"';color:'"+r+"';min-width:"+t+";max-width:"+t+';" id="'+a+'" maxlength='+e+" size="+e+" />]"}(a.length,l,t,n,o,"paperfield_"+r++)}));return{counter:r,text:a}},M=function(e){return e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),e.cancelBubble=!0,e.returnValue=!1,!1},B=function(e,t){var n=e.image,a=e.opacity,i=(f(e,["image","opacity"]),"rotate("+n.rotate+"deg) translate("+n.x+"px,"+n.y+"px)"),c={transform:i,"-ms-transform":i,"-webkit-transform":i,opacity:a||1,position:"absolute"};return(0,o.createVNode)(1,"div",(0,r.classes)(["paper121x54",n.sprite]),null,1,{style:c})},T=function(e,t){var n,r,a=e.value,i=e.stamps,c=e.backgroundColor,l=e.readOnly,d=i||[],s={__html:'<span class="paper-text">'+(n=a,r=l,(r?n.replace(/<input\s[^d]/g,"<input disabled "):n.replace(/<input\sdisabled\s/g,"<input "))+"</span>")};return(0,o.createComponentVNode)(2,u.Box,{position:"relative",backgroundColor:c,width:"100%",height:"100%",children:[(0,o.createComponentVNode)(2,u.Box,{fillPositionedParent:!0,width:"100%",height:"100%",dangerouslySetInnerHTML:s,p:"10px"}),d.map((function(e,t){return(0,o.createComponentVNode)(2,B,{image:{sprite:e[0],x:e[1],y:e[2],rotate:e[3]}},e[0]+t)}))]})},R=function(e){function t(t,n){var o;return(o=e.call(this,t,n)||this).state={x:0,y:0,rotate:0},o}p(t,e);var n=t.prototype;return n.findStampPosition=function(e){for(var t=event.pageX,n=event.pageY,o={left:e.target.offsetLeft,top:e.target.offsetTop},r=e.target.offsetParent;r;)o.left+=r.offsetLeft,o.top+=r.offsetTop,r=r.offsetParent;var i=[t-o.left,n-o.top],c=(0,a.vecScale)([121,51],.5);return(0,a.vecSubtract)(i,c)},n.componentDidMount=function(){document.onwheel=this.handleWheel.bind(this)},n.handleMouseMove=function(e){var t=this.findStampPosition(e);M(e),this.setState({x:t[0],y:t[1]})},n.handleMouseClick=function(e){var t=this.findStampPosition(e),n=(0,l.useBackend)(this.context),o=n.act,r=n.data;o("stamp",{x:t[0],y:t[1],r:this.state.rotate,stamp_class:this.props.stamp_class,stamp_icon_state:r.stamp_icon_state}),this.setState({x:t[0],y:t[1]})},n.handleWheel=function(e){var t=e.deltaY>0?15:-15;if(e.deltaY<0&&0===this.state.rotate)this.setState({rotate:360+t});else if(e.deltaY>0&&360===this.state.rotate)this.setState({rotate:t});else{var n={rotate:t+this.state.rotate};this.setState((function(){return n}))}M(e)},n.render=function(){var e=this.props,t=e.value,n=e.stamp_class,r=e.stamps,a=f(e,["value","stamp_class","stamps"]),i=r||[],c={sprite:n,x:this.state.x,y:this.state.y,rotate:this.state.rotate};return(0,o.normalizeProps)((0,o.createComponentVNode)(2,u.Box,Object.assign({onClick:this.handleMouseClick.bind(this),onMouseMove:this.handleMouseMove.bind(this),onwheel:this.handleWheel.bind(this)},a,{children:[(0,o.createComponentVNode)(2,T,{readOnly:!0,value:t,stamps:i}),(0,o.createComponentVNode)(2,B,{opacity:.5,image:c})]})))},t}(o.Component),P=function(e){function t(t,n){var o;return(o=e.call(this,t,n)||this).state={previewSelected:"Preview",old_text:t.value||"",textarea_text:"",combined_text:t.value||""},o}p(t,e);var n=t.prototype;return n.createPreview=function(e,t){void 0===t&&(t=!1);var n,o,r=(0,l.useBackend)(this.context).data,a=r.text,u=r.pen_color,d=r.pen_font,s=r.is_crayon,p=r.field_counter,f=r.edit_usr,v={text:a};if((e=e.trim()).length>0){var h=function(e){return i["default"].sanitize(e,{FORBID_ATTR:["class","style"],ALLOWED_TAGS:["br","code","li","p","pre","span","table","td","tr","th","ul","ol","menu","font","b","center","table","tr","th"]})}(e+="\n"===e[e.length]?" \n":"\n \n"),C=(n=u,o=f,h.replace(k,(function(){return x(o,"Times New Roman",n,!0)}))),b=S(C,d,12,u,p),y=function(e){return(0,c["default"])(e,{breaks:!0,smartypants:!0,smartLists:!0,walkTokens:function(e){switch(e.type){case"url":case"autolink":case"reflink":case"link":case"image":e.type="text",e.href=""}},baseUrl:"thisshouldbreakhttp"})}(b.text),N=x(y,d,u,s);v.text+=N,v.field_counter=b.counter}if(t){var V=function(e,t,n,o,r){var a;void 0===r&&(r=!1);for(var c={},l=[];null!==(a=_.exec(e));){var u=a[0],d=a.groups.id;if(d){var s=document.getElementById(d);if(0===(s&&s.value?s.value:"").length)continue;var p=i["default"].sanitize(s.value.trim(),{ALLOWED_TAGS:[]});if(0===p.length)continue;var f=s.cloneNode(!0);p.match(k)?(f.style.fontFamily="Times New Roman",r=!0,f.defaultValue=o):(f.style.fontFamily=t,f.defaultValue=p),r&&(f.style.fontWeight="bold"),f.style.color=n,f.disabled=!0;var v=document.createElement("div");v.appendChild(f),c[d]=p,l.push({value:"["+v.innerHTML+"]",raw_text:u})}}if(l.length>0)for(var h,C=m(l);!(h=C()).done;){var b=h.value;e=e.replace(b.raw_text,b.value)}return{text:e,fields:c}}(v.text,d,u,f,s);v.text=V.text,v.form_fields=V.fields}return v},n.onInputHandler=function(e,t){var n=this;if(t!==this.state.textarea_text){var o=this.state.old_text.length+this.state.textarea_text.length;if(o>5e3&&(t=o-5e3>=t.length?"":t.substr(0,t.length-(o-5e3)))===this.state.textarea_text)return;this.setState((function(){return{textarea_text:t,combined_text:n.createPreview(t)}}))}},n.finalUpdate=function(e){var t=(0,l.useBackend)(this.context).act,n=this.createPreview(e,!0);t("save",n),this.setState((function(){return{textarea_text:"",previewSelected:"save",combined_text:n.text}}))},n.render=function(){var e=this,t=this.props,n=(t.value,t.textColor),r=t.fontFamily,a=t.stamps,i=t.backgroundColor;return f(t,["value","textColor","fontFamily","stamps","backgroundColor"]),(0,o.createComponentVNode)(2,u.Flex,{direction:"column",fillPositionedParent:!0,children:[(0,o.createComponentVNode)(2,u.Flex.Item,{children:(0,o.createComponentVNode)(2,u.Tabs,{children:[(0,o.createComponentVNode)(2,u.Tabs.Tab,{textColor:"black",backgroundColor:"Edit"===this.state.previewSelected?"grey":"white",selected:"Edit"===this.state.previewSelected,onClick:function(){return e.setState({previewSelected:"Edit"})},children:"Edit"},"marked_edit"),(0,o.createComponentVNode)(2,u.Tabs.Tab,{textColor:"black",backgroundColor:"Preview"===this.state.previewSelected?"grey":"white",selected:"Preview"===this.state.previewSelected,onClick:function(){return e.setState((function(){return{previewSelected:"Preview",textarea_text:e.state.textarea_text,combined_text:e.createPreview(e.state.textarea_text).text}}))},children:"Preview"},"marked_preview"),(0,o.createComponentVNode)(2,u.Tabs.Tab,{textColor:"black",backgroundColor:"confirm"===this.state.previewSelected?"red":"save"===this.state.previewSelected?"grey":"white",selected:"confirm"===this.state.previewSelected||"save"===this.state.previewSelected,onClick:function(){"confirm"===e.state.previewSelected?e.finalUpdate(e.state.textarea_text):"Edit"===e.state.previewSelected?e.setState((function(){return{previewSelected:"confirm",textarea_text:e.state.textarea_text,combined_text:e.createPreview(e.state.textarea_text).text}})):e.setState({previewSelected:"confirm"})},children:"confirm"===this.state.previewSelected?"confirm":"save"},"marked_done")]})}),(0,o.createComponentVNode)(2,u.Flex.Item,{grow:1,basis:1,children:"Edit"===this.state.previewSelected&&(0,o.createComponentVNode)(2,u.TextArea,{value:this.state.textarea_text,textColor:n,fontFamily:r,height:window.innerHeight-80+"px",backgroundColor:i,onInput:this.onInputHandler.bind(this)})||(0,o.createComponentVNode)(2,T,{value:this.state.combined_text,stamps:a,fontFamily:r,textColor:n})})]})},t}(o.Component);t.PaperSheet=function(e,t){var n=(0,l.useBackend)(t).data,r=n.edit_mode,a=n.text,i=n.paper_color,c=n.pen_color,s=void 0===c?"black":c,p=n.pen_font,f=void 0===p?"Verdana":p,m=n.stamps,v=n.stamp_class,h=(n.stamped,i&&"white"!==i?i:"#FFFFFF"),C=m&&null!==m?m:[];return(0,o.createComponentVNode)(2,d.Window,{theme:"paper",width:400,height:500,resizable:!0,children:(0,o.createComponentVNode)(2,d.Window.Content,{children:(0,o.createComponentVNode)(2,u.Box,{fillPositionedParent:!0,backgroundColor:h,children:function(e){switch(e){case 0:return(0,o.createComponentVNode)(2,T,{value:a,stamps:C,readOnly:!0});case 1:return(0,o.createComponentVNode)(2,P,{value:a,textColor:s,fontFamily:f,stamps:C,backgroundColor:h});case 2:return(0,o.createComponentVNode)(2,R,{value:a,stamps:C,stamp_class:v});default:return"ERROR ERROR WE CANNOT BE HERE!!"}}(r)})})})}},462:function(e,t,n){"use strict";t.__esModule=!0,t.SlotMachine=void 0;var o=n(1),r=n(17),a=n(15),i=n(40);t.SlotMachine=function(e,t){var n=(0,r.useBackend)(t).data,d=n.scannedCard,s=n.busy;return(0,o.createComponentVNode)(2,i.Window,{title:"Slot Machine",width:375,height:190,children:(0,o.createComponentVNode)(2,i.Window.Content,{children:d?(0,o.createComponentVNode)(2,a.Box,{children:s?(0,o.createComponentVNode)(2,u):(0,o.createComponentVNode)(2,l)}):(0,o.createComponentVNode)(2,c)})})};var c=function(e,t){var n=(0,r.useBackend)(t).act;return(0,o.createComponentVNode)(2,a.Box,{children:[(0,o.createComponentVNode)(2,a.NoticeBox,{danger:!0,children:"You must insert your ID to continue!"}),(0,o.createComponentVNode)(2,a.Button,{icon:"id-card",content:"Insert ID",onClick:function(){return n("insert_card")}})]})},l=function(e,t){var n=(0,r.useBackend)(t),i=n.act,c=n.data,l=c.scannedCard,u=c.money,d=c.plays;return(0,o.createComponentVNode)(2,a.Box,{children:[(0,o.createComponentVNode)(2,a.NoticeBox,{success:!0,children:(0,o.createVNode)(1,"marquee",null," Twenty credits to play! ",16)}),(0,o.createComponentVNode)(2,a.Box,{mb:"0.5em",children:[(0,o.createVNode)(1,"strong",null,"Your card: ",16),(0,o.createComponentVNode)(2,a.Button,{icon:"eject",content:l,tooltip:"Eject Card",tooltipPosition:"bottom-right",onClick:function(){return i("eject")}})]}),(0,o.createComponentVNode)(2,a.Box,{mb:"0.75em",children:[(0,o.createVNode)(1,"strong",null,"Credits Remaining:",16),(0,o.createComponentVNode)(2,a.Icon,{name:"dollar-sign"})," ",u]}),(0,o.createComponentVNode)(2,a.BlockQuote,{children:[d," attempts have been made today!"]}),(0,o.createComponentVNode)(2,a.Divider),(0,o.createComponentVNode)(2,a.Button,{icon:"dice",content:"Play!",tooltip:"Pull the lever",tooltipPosition:"right",onClick:function(){return i("play")}})]})},u=function(){return(0,o.createComponentVNode)(2,a.NoticeBox,{warning:!0,children:"The Machine is busy, please wait!"})}},463:function(e,t,n){"use strict";t.__esModule=!0,t.TankDispenser=void 0;var o=n(1),r=n(17),a=n(15),i=n(40);t.TankDispenser=function(e,t){var n=(0,r.useBackend)(t),c=n.act,l=n.data;return(0,o.createComponentVNode)(2,i.Window,{width:280,height:105,children:(0,o.createComponentVNode)(2,i.Window.Content,{children:(0,o.createComponentVNode)(2,a.Section,{children:(0,o.createComponentVNode)(2,a.LabeledList,{children:[(0,o.createComponentVNode)(2,a.LabeledList.Item,{label:"Plasma",buttons:(0,o.createComponentVNode)(2,a.Button,{icon:l.plasma?"circle":"circle-o",content:"Dispense",disabled:!l.plasma,onClick:function(){return c("dispense-plasma")}}),children:l.plasma}),(0,o.createComponentVNode)(2,a.LabeledList.Item,{label:"Oxygen",buttons:(0,o.createComponentVNode)(2,a.Button,{icon:l.oxygen?"circle":"circle-o",content:"Dispense",disabled:!l.oxygen,onClick:function(){return c("dispense-oxygen")}}),children:l.oxygen})]})})})})}}});