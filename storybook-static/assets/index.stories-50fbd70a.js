var m=Object.defineProperty;var r=(t,n)=>m(t,"name",{value:n,configurable:!0});import{r as f}from"./index-d282687f.js";import{j as s}from"./jsx-runtime-920531fb.js";import"./es.object.get-own-property-descriptor-fbf95828.js";const l={price:t=>(+t.replace(new RegExp(",","g"),"")).toLocaleString(),phoneNumber:t=>{const n=t.replace(new RegExp("[^0-9]","g"),"");let e="";return t.length>13?t.slice(0,13):n.length<4?n:n.length<7?(e+=n.slice(0,3),e+="-",e+=n.slice(3),e):n.length<11?(e+=n.slice(0,3),e+="-",e+=n.slice(3,6),e+="-",e+=n.slice(6),e):(e+=n.slice(0,3),e+="-",e+=n.slice(3,7),e+="-",e+=n.slice(7),e)},date:t=>{const n=t.replace(new RegExp("[^0-9]","g"),"");let e="";return t.length>10?t.slice(0,10):n.length<=4?n:n.length<=6?(e+=n.slice(0,4),e+="-",e+=n.slice(4),e):(e+=n.slice(0,4),e+="-",e+=n.slice(4,6),e+="-",e+=n.slice(6),e)}},c=r((t,n)=>{switch(n){case"price":return l.price(t);case"phone":return l.phoneNumber(t);case"date":return l.date(t)}return t},"format");function o({onChange:t,initialValue:n,formatType:e="none",...p}){const[u,d]=f.useState(c(n??"",e));return s("input",{value:u,...p,onChange:a=>{t==null||t(a),d(e!=="none"?c(a.target.value,e):a.target.value)}})}r(o,"Input");try{o.displayName="Input",o.__docgenInfo={description:"",displayName:"Input",props:{formatType:{defaultValue:{value:"none"},description:"",name:"formatType",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"price"'},{value:'"phone"'},{value:'"date"'}]}},initialValue:{defaultValue:null,description:"",name:"initialValue",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Input/index.tsx#Input"]={docgenInfo:o.__docgenInfo,name:"Input",path:"src/components/Input/index.tsx#Input"})}catch{}const S={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '.';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialValue: 'initial value',
};

export const Price = Template.bind({});
Price.args = {
  initialValue: '100000',
  formatType: 'price',
};

export const Phone = Template.bind({});
Phone.args = {
  initialValue: '01012345678',
  formatType: 'phone',
};

export const Date = Template.bind({});
Date.args = {
  initialValue: '20230103',
  formatType: 'date',
};
`,locationsMap:{default:{startLoc:{col:47,line:9},endLoc:{col:76,line:9},startBody:{col:47,line:9},endBody:{col:76,line:9}},price:{startLoc:{col:47,line:9},endLoc:{col:76,line:9},startBody:{col:47,line:9},endBody:{col:76,line:9}},phone:{startLoc:{col:47,line:9},endLoc:{col:76,line:9},startBody:{col:47,line:9},endBody:{col:76,line:9}},date:{startLoc:{col:47,line:9},endLoc:{col:76,line:9},startBody:{col:47,line:9},endBody:{col:76,line:9}}}}},title:"Input",component:o},i=r(t=>s(o,{...t}),"Template"),g=i.bind({});g.args={initialValue:"initial value"};const y=i.bind({});y.args={initialValue:"100000",formatType:"price"};const h=i.bind({});h.args={initialValue:"01012345678",formatType:"phone"};const I=i.bind({});I.args={initialValue:"20230103",formatType:"date"};const V=["Default","Price","Phone","Date"];export{I as Date,g as Default,h as Phone,y as Price,V as __namedExportsOrder,S as default};
//# sourceMappingURL=index.stories-50fbd70a.js.map
