const _0x236ffc=_0x5165;(function(_0x1b73ad,_0x177510){const _0x54b2ec=_0x5165,_0x474959=_0x1b73ad();while(!![]){try{const _0x201972=-parseInt(_0x54b2ec(0x196))/0x1*(parseInt(_0x54b2ec(0x198))/0x2)+parseInt(_0x54b2ec(0x19a))/0x3+parseInt(_0x54b2ec(0x191))/0x4+-parseInt(_0x54b2ec(0x19e))/0x5*(-parseInt(_0x54b2ec(0x19b))/0x6)+-parseInt(_0x54b2ec(0x197))/0x7+parseInt(_0x54b2ec(0x193))/0x8+-parseInt(_0x54b2ec(0x192))/0x9;if(_0x201972===_0x177510)break;else _0x474959['push'](_0x474959['shift']());}catch(_0x53d190){_0x474959['push'](_0x474959['shift']());}}}(_0x23cc,0x9a41d));const roles=[_0x236ffc(0x1a0),_0x236ffc(0x19f),'Software\x20Engineer',_0x236ffc(0x19d)];function _0x5165(_0x465858,_0x58bdbd){const _0x23ccc3=_0x23cc();return _0x5165=function(_0x516523,_0xafc3c){_0x516523=_0x516523-0x190;let _0x4ef78a=_0x23ccc3[_0x516523];return _0x4ef78a;},_0x5165(_0x465858,_0x58bdbd);}function _0x23cc(){const _0x362463=['58WCPzOd','innerHTML','1136985dnqDqv','390828arrIdh','<span\x20style=\x22background:\x20linear-gradient(45deg,\x20#ff7e5f,\x20#feb47b);\x20-webkit-background-clip:\x20text;\x20color:\x20transparent;\x20font-weight:\x20bold;\x22>','Digital\x20Marketing','10oxIfXP','Frontend\x20&\x20\Backend','Web\x20Developer','typewriters','3089184yfAQsD','3093768aYsmMi','4651928hXMImP','length','substring','19603AEduUT','2232874wdTNOK'];_0x23cc=function(){return _0x362463;};return _0x23cc();}let roleIndex=0x0,charIndex=0x0,isDeleting=![];const typewriters=document['getElementById'](_0x236ffc(0x190));function typeEffect(){const _0x364c2f=_0x236ffc,_0x1f3cba=roles[roleIndex];if(!isDeleting&&charIndex<=_0x1f3cba[_0x364c2f(0x194)])typewriters[_0x364c2f(0x199)]=_0x364c2f(0x19c)+_0x1f3cba[_0x364c2f(0x195)](0x0,charIndex)+'</span>',charIndex++;else isDeleting&&charIndex>=0x0&&(typewriters[_0x364c2f(0x199)]='<span\x20style=\x22background:\x20linear-gradient(45deg,\x20#ff7e5f,\x20#feb47b);\x20-webkit-background-clip:\x20text;\x20color:\x20transparent;\x20font-weight:\x20bold;\x22>'+_0x1f3cba[_0x364c2f(0x195)](0x0,charIndex)+'</span>',charIndex--);if(!isDeleting&&charIndex===_0x1f3cba['length'])setTimeout(()=>isDeleting=!![],0x3e8);else isDeleting&&charIndex===0x0&&(isDeleting=![],roleIndex=(roleIndex+0x1)%roles[_0x364c2f(0x194)]);setTimeout(typeEffect,isDeleting?0x64:0x96);}typeEffect();