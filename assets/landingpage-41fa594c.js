import{_ as l,r as i,o as c,c as x,a as t,b as d,p,d as r}from"./index-a1d806b1.js";const h="/assets/image-7826d87a.jpg";const _={data(){return{emailId:"",password:"",isPassType:"password"}},computed:{},methods:{validateRegex(s){let a=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;return s?a.test(s.trim()):!1},handleSubmit(){this.validateForm()&&this.emailId=="test@gmail.com"&&this.password=="Test@123"&&this.$router.push("/dashboard")},validateForm(){return this.validateRegex(this.emailId)&&this.password}}},e=s=>(p("data-v-9b3cf2f2"),s=s(),r(),s),m={class:"flex flex-col-reverse xl:grid xl:grid-cols-2 justify-center gap-12 w-full items-center overflow-y-auto py-10 px-4 h-fit xl:h-full"},w={class:"font-bold flex flex-col justify-center items-center w-full"},u={class:"w-full flex flex-col justify-center items-center"},f=e(()=>t("span",{class:"font-bold xl:!text-[40px] !text-[25px] text-black gap-8"},"Hello, my name is",-1)),g=e(()=>t("br",null,null,-1)),v=e(()=>t("span",{class:"gradient-text-1 xl:!text-[40px] !text-[35px] text-black"},"Nishanth Thiyakarajan",-1)),b={class:""},y=e(()=>t("p",{class:"xl:!text-[35px] !text-[25px] text-black"},"And I'm a ",-1)),k={class:"typed-text-container inline-block xl:!text-[50px] !text-[40px] gradient-text"},z=e(()=>t("br",null,null,-1)),A=e(()=>t("br",null,null,-1)),j=e(()=>t("br",null,null,-1)),$=e(()=>t("br",null,null,-1)),I={class:"flex gap-8 p-8"},S={href:"https://github.com/Nishanth-thiyakarajan",target:"_blank"},B=e(()=>t("svg",{width:"40",height:"40",fill:"#000000",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 24 24",id:"github"},[t("path",{d:"M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"})],-1)),C=[B],T={href:"https://www.linkedin.com/in/nishanth-thiyakarajan/",target:"_blank"},M=e(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[t("path",{d:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"})],-1)),N=[M],Z={href:"https://www.instagram.com/nishanth_thiyakarajan",target:"_blank"},D=e(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[t("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})],-1)),E=[D],F=e(()=>t("div",{class:"flex justify-center items-center"},[t("div",{class:"container xl:max-w-[520px] xl:max-h-[520px] max-w-[310px] max-h-[310px]"},[t("img",{src:h,class:"xl:max-w-[500px] xl:max-h-[500px] max-w-[300px] max-h-[300px] backCOlor 4layer-violet border p-2 border-white rounded-full"})])],-1));function L(s,a,R,V,H,O){const o=i("typed_text");return c(),x("div",m,[t("div",w,[t("div",u,[t("div",null,[f,g,v,t("span",b,[y,t("div",k,[d(o,{strings:["Data Analyst","ML Engineer","Data Scientist"],typeSpeed:120,backSpeed:40,loop:!0})])])]),z,A,j,$,t("div",I,[t("a",S,[t("button",{class:"btn container xl:max-w-[80px] xl:max-h-[80px] max-w-[60px] max-h-[60px]",onClick:a[0]||(a[0]=n=>s.openTab("git"))},C)]),t("a",T,[t("button",{class:"btn container xl:max-w-[80px] xl:max-h-[80px] max-w-[60px] max-h-[60px]",onClick:a[1]||(a[1]=n=>s.openTab("linkenin"))},N)]),t("a",Z,[t("button",{class:"btn container xl:max-w-[80px] xl:max-h-[80px] max-w-[60px] max-h-[60px]",onClick:a[2]||(a[2]=n=>s.openTab("insta"))},E)])])])]),F])}const q=l(_,[["render",L],["__scopeId","data-v-9b3cf2f2"]]);export{q as default};
