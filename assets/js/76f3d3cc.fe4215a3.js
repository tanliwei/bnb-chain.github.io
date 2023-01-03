"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,b=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(b,i(i({ref:t},h),{},{components:n})):r.createElement(b,i({ref:t},h))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},18963:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>s,toc:()=>l,default:()=>h});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_label:"Architecture",sidebar_position:2},i="Architectural Details of ZkBNB",s={unversionedId:"zkbnb/zkbnb-architecture",id:"zkbnb/zkbnb-architecture",isDocsHomePage:!1,title:"Architectural Details of ZkBNB",description:"Increased throughput and scalability are two of the most desired requirements of any blockchain ecosystem to thrive in the competitive industry of Web3. Several solutions have been proposed to achieve this, however, one of the latest and touted solutions is the one based on Zero Knowledge (ZK) Proofs. Joining the bandwagon of providing groundbreaking scalability solutions based on ZK-Proofs is the world's third largest smart contract network, BNB Chain.",source:"@site/docs/zkbnb/zkbnb-architecture.md",sourceDirName:"zkbnb",slug:"/zkbnb/zkbnb-architecture",permalink:"/docs/zkbnb/zkbnb-architecture",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/zkbnb/zkbnb-architecture.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Architecture",sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Overview",permalink:"/docs/zkbnb/zkbnb-overview"},next:{title:"Tokenomics",permalink:"/docs/zkbnb/zkbnb-tokenomics"}},l=[{value:"ZkBNB - the Underlying ZkRollup Architecture",id:"zkbnb---the-underlying-zkrollup-architecture",children:[],level:2},{value:"ZkBNB Framework",id:"zkbnb-framework",children:[],level:2},{value:"ZkBNB Protocol Overview",id:"zkbnb-protocol-overview",children:[],level:2},{value:"Mechanism Behind Cutting-Edge Features",id:"mechanism-behind-cutting-edge-features",children:[{value:"<strong>Data Availability</strong>",id:"data-availability",children:[],level:4},{value:"Transaction Finality",id:"transaction-finality",children:[],level:4},{value:"Censorship resistance",id:"censorship-resistance",children:[],level:4}],level:2},{value:"API Reference",id:"api-reference",children:[],level:2}],c={toc:l};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"architectural-details-of-zkbnb"},"Architectural Details of ZkBNB"),(0,o.kt)("p",null,"Increased throughput and scalability are two of the most desired requirements of any blockchain ecosystem to thrive in the competitive industry of Web3. Several solutions have been proposed to achieve this, however, one of the latest and touted solutions is the one based on Zero Knowledge (ZK) Proofs. Joining the bandwagon of providing groundbreaking scalability solutions based on ZK-Proofs is the world's third largest smart contract network, BNB Chain."),(0,o.kt)("p",null,"Zero-Knowledge Rollups (ZkRollups) are Layer-2 (L2) blockchain scalability solutions based on ZK-Proofs. ZK-Rollups essentially scales the main blockchain network, i.e., Layer-1(L1), by performing computations, bundling transactions, and moving the transaction data off the main blockchain, making sure in this way that the network on the main chain does not become congested."),(0,o.kt)("p",null,"Harnessing the power of ZK-Rollups, BNB Chain has introduced ZkBNB which is considered a breakthrough in the scalability solutions for blockchain technologies. ZkBNB is an infrastructure designed for developers to build large-scale BSC-based applications with higher throughput and much lower or even zero transaction fees."),(0,o.kt)("p",null,"In this document, we dive deep into the underlying architecture that makes ZkBNB a ground-breaking innovation, covering the underlying ZkRollup architecture, protocol overview, key technologies used, and the tokenomics of the ZkBNB infrastructure."),(0,o.kt)("h2",{id:"zkbnb---the-underlying-zkrollup-architecture"},"ZkBNB - the Underlying ZkRollup Architecture"),(0,o.kt)("p",null,'Built on ZK Rollup architecture, ZkBNB is capable of bundling (or "rolling-up") hundreds of transactions off-chain and then generating cryptographic proof for proving the validity of the transactions, included in each batch. The cryptographic proofs are in the form of SNARKs (succinct non-interactive argument of knowledge), which can prove the validity of every single transaction in the rolled up block. It means, all funds are held on the BSC, while computation and storage are performed on BNB Application Sidechains (BAS), with less cost and fast speed. Furthermore, because of the use of Zk-SNARK proofs, ZkBNB shares the same security as that of BSC.'),(0,o.kt)("h2",{id:"zkbnb-framework"},"ZkBNB Framework"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2276).Z})),(0,o.kt)("p",null,"The different key components of the ZkBNB infrastructure, as illustrated in the figure above, are listed below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Committer:")," The committer is responsible for executing transactions and producing consecutive blocks."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Monitor:")," The Monitor component tracks events on BSC, and translates them into transactions on ZkBNB."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Witness:")," The Witness component is responsible for re-executing the transactions within a rollup block and generating witness materials."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Prover:")," Prover is responsible for generating cryptographic proof based on the witness materials."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sender:")," The Sender rollups the compressed L2 blocks into L1, and submits proof to verify them."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"API Server:")," The API Server is the access endpoint for most users; it provides rich data, including digital assets, blocks, transactions, swap info, and gas fees."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Recovery:")," A tool to recover the Sparse Merkle tree in kv-rocks based on the state world in PostgreSQL.")),(0,o.kt)("h2",{id:"zkbnb-protocol-overview"},"ZkBNB Protocol Overview"),(0,o.kt)("p",null,"ZkBNB is an implementation of the ZK-Rollup protocol, that provides built-in features like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deposit and transfer functionalities for BNB and BEP20 fungible tokens"),(0,o.kt)("li",{parentName:"ul"},"AMM-based fungible token swap on L2"),(0,o.kt)("li",{parentName:"ul"},"Deposit and transfer of BEP721 Non-Fungible Tokens (NFTs)"),(0,o.kt)("li",{parentName:"ul"},"Minting of BEP721 Non-Fungible Tokens on L2"),(0,o.kt)("li",{parentName:"ul"},"Out-of-the-box NFT-marketplace on L2")),(0,o.kt)("p",null,"The general rollup workflow in ZkBNB is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Users can become owners in the rollup operation by calling registerZNS in L1 to register a short name for L2;"),(0,o.kt)("li",{parentName:"ul"},"Owners can transfer assets to each other, mint NFTs on L2, or make a swap on L2;"),(0,o.kt)("li",{parentName:"ul"},"Owners can withdraw assets under their control to any L1 address.")),(0,o.kt)("p",null,"It is to note here that Rollup operation in the ZkBNB framework requires the assistance of a committer. The committer here is responsible for rolling transactions together. Other than this, a prover is also responsible for computing the zero-knowledge proof of the correct state transition. Additionally, the prover also affects the state transition by interacting with the rollup contract."),(0,o.kt)("p",null,"For more details on protocol design, refer ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/zkbnb/blob/master/docs/protocol.md"},"here"),"."),(0,o.kt)("h2",{id:"mechanism-behind-cutting-edge-features"},"Mechanism Behind Cutting-Edge Features"),(0,o.kt)("p",null,"The working of some of the most important features revolving around the issue of throughout, availability, and scalability that are offered seamlessly by ZkBNB is as follows:"),(0,o.kt)("h4",{id:"data-availability"},(0,o.kt)("strong",{parentName:"h4"},"Data Availability")),(0,o.kt)("p",null,"The state data for every transaction processed off-chain is published by ZkBNB onto BSC. Due to this data, it is possible to reproduce the rollup's state for an individual or a business to validate the chain themselves. BSC makes this transaction data available to all of the network's participants in the form of ",(0,o.kt)("strong",{parentName:"p"},"calldata"),"."),(0,o.kt)("p",null,"It is to note here that it is not required by ZkBNB to publish extensive transaction data on-chain, i.e., BSC main chain. This is large because the validity proofs generated with each rollup batch already verify the authenticity of state transitions. Nevertheless, it is still important to store transactions on-chain because it allows permissionless, independent verification of the L2 chain's state, allowing anyone to submit batches of transactions. In doing so, malicious committers are prevented from censoring or freezing the L2 chain."),(0,o.kt)("p",null,"ZkBNB provides a default client that is responsible for replaying all states on Layer-2 based on the ",(0,o.kt)("strong",{parentName:"p"},"calldata")," available on BSC."),(0,o.kt)("h4",{id:"transaction-finality"},"Transaction Finality"),(0,o.kt)("p",null,"In the ZkBNB setup, BSC acts as a settlement layer for ZkBNB. This means that all Layer-2 transactions are finalized, only in case the Layer-1 contract accepts the validity proof and executes the transactions. This condition eliminates the risk of malicious operators corrupting the Layer-2 chain (e.g., stealing roll-up funds), since every transaction must also be approved on the Layer-1 (Mainnet). Furthermore, BSC guarantees that user operations cannot be reversed once finalized on Layer-1. To provide an enhanced user experience, ZkBNB provides a relatively fast finality speed of approximately 10 minutes."),(0,o.kt)("p",null,"However, this does not affect the usability of the network. The state transition is designed to happen immediately once the block has been proposed on the ZkBNB. Furthermore, rollup operations are totally transparent to the users, allowing the users to make further transfers without waiting."),(0,o.kt)("h4",{id:"censorship-resistance"},"Censorship resistance"),(0,o.kt)("p",null,"In the ZkBNB setup, the committer is responsible for executing transactions and producing rollup batches. While this ensures efficiency, it increases the risk of censorship in the way that a malicious ZK-rollup committer can censor users by refusing to include their transactions in the rollup batches."),(0,o.kt)("p",null,"As a counter-security measure to censorship, ZkBNB allows users to submit transactions directly to the rollup contract on the BSC Mainnet if they feel that they are being censored by the ZkBNB operator. This feature allows users to force an exit from the ZkBNB to BSC without having to rely on the committer's permission."),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("p",null,"For details on API reference, refer ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/zkbnb/blob/master/docs/api_reference.md"},"here"),"."))}h.isMDXComponent=!0},2276:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/zkbnb-framework-974a1b9e5fb144d873a4d863962e3398.png"}}]);