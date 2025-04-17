import{_ as m,c as r,a as e,t as n,F as p,e as b,b as w,w as h,r as _,o as d,j as g}from"./index-CYsWD8Xo.js";const f={data(){return{workingCount:319,smDownCount:0,umDownCount:8,currentTime:"",downEquipments:[{equipment:"TK0012",fleet:"Mitsubishi Triton DC 4x4",comment:"Repair engine overheating, Spare NV12009",downSince:"14 Apr 2025 06:45:56",estimatedReturn:""},{equipment:"TK1234",fleet:"Mitsubishi Triton DC 4x4",comment:"Repair engine overheating, Spare NV12045",downSince:"10 Apr 2025 08:34:10",estimatedReturn:""},{equipment:"TK2345",fleet:"Mitsubishi Triton DC 4x4",comment:"Repair AC problem spare NV9802",downSince:"09 Apr 2025 11:47:49",estimatedReturn:""},{equipment:"TK2343",fleet:"Mitsubishi Triton DC 4x4",comment:"Repair engine overheating",downSince:"18 Mar 2025 11:30:33",estimatedReturn:"29 Apr 2025 17:30:32"},{equipment:"TK1243",fleet:"Mitsubishi Triton DC 4x4",comment:"Repair turbo problem, unit spare NV12104",downSince:"13 Mar 2025 17:00:00",estimatedReturn:"30 Apr 2025 17:55:20"},{equipment:"TK3425",fleet:"Mitsubishi Triton DC 4x4",comment:"Repair engine low power unit spare NV12017",downSince:"23 Feb 2025",estimatedReturn:"24 Apr 2025"},{equipment:"TK2132",fleet:"Mitsubishi Triton DC 4x4",comment:"Repair engine blow -by spare NV12039",downSince:"16 Jan 2025",estimatedReturn:"25 Apr 2025 17:55:25"},{equipment:"TK2325",fleet:"Mitsubishi Triton DC 4x4",comment:"Repair engine overheat, Spare NV12056",downSince:"13 Sep 2024 07:14:34",estimatedReturn:"18 Apr 2025 17:35:23"}]}},mounted(){this.updateClock(),setInterval(this.updateClock,1e3)},methods:{updateClock(){const i=new Date,t=i.getHours().toString().padStart(2,"0"),a=i.getMinutes().toString().padStart(2,"0"),l=i.getSeconds().toString().padStart(2,"0");this.currentTime=`${t}:${a}:${l}`}}},v={class:"container mt-4"},S={class:"d-flex justify-content-between align-items-center mb-3"},T={class:"text-end"},x={class:"row text-center mb-4"},C={class:"col"},D={class:"card border-success"},R={class:"card-body"},q={class:"text-success"},M={class:"col"},N={class:"card border-danger"},k={class:"card-body"},y={class:"text-danger"},V={class:"col"},A={class:"card border-warning"},K={class:"card-body"},E={class:"text-warning"},B={class:"table-responsive"},F={class:"table table-bordered align-middle text-center"};function j(i,t,a,l,s,I){const c=_("router-link");return d(),r("div",v,[e("div",S,[t[1]||(t[1]=e("h4",{class:"fw-bold"},"TRANSKON - Down Equipment",-1)),e("div",T,[t[0]||(t[0]=e("h5",{class:"fw-bold text-primary"},null,-1)),e("div",null,n(s.currentTime),1)])]),e("div",x,[e("div",C,[e("div",D,[e("div",R,[e("h3",q,n(s.workingCount),1),t[2]||(t[2]=e("p",{class:"fw-bold mb-0"},"Working",-1))])])]),e("div",M,[e("div",N,[e("div",k,[e("h3",y,n(s.smDownCount),1),t[3]||(t[3]=e("p",{class:"fw-bold mb-0"},"SM Down",-1))])])]),e("div",V,[e("div",A,[e("div",K,[e("h3",E,n(s.umDownCount),1),t[4]||(t[4]=e("p",{class:"fw-bold mb-0"},"UM Down",-1))])])])]),e("div",B,[e("table",F,[t[5]||(t[5]=e("thead",{class:"table-primary"},[e("tr",null,[e("th",null,"TK Number"),e("th",null,"Vehicle Type"),e("th",null,"Comment"),e("th",null,"Down Since"),e("th",null,"Estimated Return")])],-1)),e("tbody",null,[(d(!0),r(p,null,b(s.downEquipments,(o,u)=>(d(),r("tr",{key:u},[e("td",null,n(o.equipment),1),e("td",null,n(o.fleet),1),e("td",null,n(o.comment),1),e("td",null,n(o.downSince),1),e("td",null,n(o.estimatedReturn),1)]))),128))])])]),e("div",null,[w(c,{to:"/de/dashboard",class:"btn btn-danger mt-3"},{default:h(()=>t[6]||(t[6]=[g("Back to Dashboard")])),_:1})])])}const H=m(f,[["render",j],["__scopeId","data-v-912c45f3"]]);export{H as default};
