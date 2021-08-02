/*! For license information please see ext.node.js.LICENSE.txt */
!function webpackUniversalModuleDefinition(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var a=t();for(var r in a)("object"==typeof exports?exports:e)[r]=a[r]}}(global,(function(){return(()=>{var e={10:(e,t,a)=>{e.exports=a(204)},204:(e,t,a)=>{"use strict";a.d(t,{default:()=>y});const r=require("@dfinity/agent"),n=require("@dfinity/principal"),o=(require("@dfinity/identity"),require("@dfinity/principal/lib/esm/utils/getCrc")),s=require("@dfinity/principal/lib/esm/utils/sha224"),i=require("axios");var c=a.n(i);const u=require("bignumber.js");var d=a.n(u);const l=require("json-bigint");const _=a.n(l)()({strict:!0}),p=Object.freeze({NotFound:0,Timeout:1,NetworkError:2});class RosettaError extends Error{constructor(e,t){switch(super(e),t){case 408:this.errorType=p.Timeout;break;case 500:this.errorType=p.NotFound;break;default:this.errorType=p.NetworkError}}}class Transaction{constructor(e,t){this.blockIndex=t,this.hash=e.transaction_identifier.hash;const a=e.metadata.timestamp.div(1e6).toNumber();this.timestamp=new Date(a);const r=e.operations;r.length>=1?(this.type=r[0].type,this.status=r[0].status,this.account1Address=r[0].account.address,this.amount=new(d())(r[0].amount.value),"TRANSACTION"!==r[0].type&&"BURN"!==r[0].type||this.amount.isZero()||(this.amount=this.amount.negated())):(this.type="",this.status="",this.account1Address="",this.amount=new(d())(0)),r.length>=2&&"TRANSACTION"===r[1].type?this.account2Address=r[1].account.address:this.account2Address="",r.length>=3&&"FEE"===r[2].type?this.fee=new(d())(-r[2].amount.value):this.fee=new(d())(0),this.memo=new(d())(e.metadata.memo)}}a(728),a(710),a(650);const m="ryjl3-tyaaa-aaaaa-aaaba-cai",f="rkp4c-7iaaa-aaaaa-aaaca-cai",h=new class RosettaApi{constructor(){this.axios=c().create({baseURL:"https://rosetta-api.internetcomputer.org/",method:"post",transformRequest:e=>_.stringify(e),transformResponse:e=>_.parse(e),headers:{"Content-Type":"application/json;charset=utf-8"}}),this.networkIdentifier=this.networksList().then((e=>e.network_identifiers.find((e=>"Internet Computer"===e.blockchain))))}async getAccountBalance(e){try{const t=await this.accountBalanceByAddress(e);return new(d())(t.balances[0].value)}catch(e){return new RosettaError(e.message,c().isAxiosError(e)?e?.response?.status:void 0)}}async getLastBlockIndex(){try{return(await this.networkStatus()).current_block_identifier.index}catch(e){return new RosettaError(e.message,c().isAxiosError(e)?e?.response?.status:void 0)}}async getTransaction(e){try{const t=await this.transactionsByHash(e);return 0===t.transactions.length?new RosettaError("Transaction not found.",500):new Transaction(t.transactions[0].transaction,t.transactions[0].block_identifier.index)}catch(e){return new RosettaError(e.message,c().isAxiosError(e)?e?.response?.status:void 0)}}async getTransactions(e,t,a){try{let r;if(t)r=t;else{r=(await this.networkStatus()).current_block_identifier.index}a&&(r=Math.max(r-a,-1));const n=Math.min(e,r+1),o=[];for(let e=0;e<n;e++)o.push(await this.getTransactionByBlock(r-e));return o}catch(e){return new RosettaError(e.message,c().isAxiosError(e)?e?.response?.status:void 0)}}async getTransactionsByAccount(e){try{const t=await this.transactionsByAccount(e);return(await Promise.all(t.transactions.map((e=>new Transaction(e.transaction,e.block_identifier.index))))).reverse()}catch(e){return new RosettaError(e.message,c().isAxiosError(e)?e?.response?.status:void 0)}}async getTransactionByBlock(e){const t=await this.blockByIndex(e);return new Transaction(t.block.transactions[0],e)}async request(e,t){return(await this.axios.request({url:e,data:t})).data}networksList(){return this.request("/network/list",{})}async networkStatus(){const e=await this.networkIdentifier;return this.request("/network/status",{network_identifier:e})}async accountBalanceByAddress(e){const t=await this.networkIdentifier;return this.request("/account/balance",{network_identifier:t,account_identifier:{address:e}})}async blockByIndex(e){const t=await this.networkIdentifier;return this.request("/block",{network_identifier:t,block_identifier:{index:e}})}async transactionsByAccount(e){const t=await this.networkIdentifier;return this.request("/search/transactions",{network_identifier:t,account_identifier:{address:e}})}async transactionsByHash(e){const t=await this.networkIdentifier;return this.request("/search/transactions",{network_identifier:t,transaction_identifier:{hash:e}})}},getCyclesTopupSubAccount=e=>{var t=Array.from(n.Principal.fromText(e).toUint8Array());return[t.length,...t]},principalToAccountIdentifier=(e,t)=>{const a=Buffer("\naccount-id"),r=new Uint8Array([...a,...n.Principal.fromText(e).toUint8Array(),...getSubAccountArray(t)]),i=(0,s.sha224)(r),c=to32bits((0,o.getCrc32)(i)),u=new Uint8Array([...c,...i]);return toHexString(u)},getSubAccountArray=e=>Array.isArray(e)?e.concat(Array(32-e.length).fill(0)):Array(28).fill(0).concat(to32bits(e||0)),from32bits=e=>{for(var t,a=0;a<4;a++)t=t<<8|e[a];return t},to32bits=e=>{let t=new ArrayBuffer(4);return new DataView(t).setUint32(0,e),Array.from(new Uint8Array(t))},toHexString=e=>Array.from(e,(function(e){return("0"+(255&e).toString(16)).slice(-2)})).join(""),fromHexString=e=>{"0x"===e.substr(0,2)&&(e=e.substr(2));for(var t=[],a=0;a<e.length;a+=2)t.push(parseInt(e.substr(a,2),16));return t},isHex=e=>/^[0-9a-fA-F]+$/.test(e),ext_did=({IDL:e})=>{const t=e.Text,a=e.Text,r=e.Variant({principal:e.Principal,address:a}),n=e.Record({token:t,owner:r,spender:e.Principal}),o=e.Nat,s=o,i=e.Variant({InvalidToken:t,Other:e.Text}),c=i,u=e.Variant({ok:s,err:c}),d=e.Vec(e.Nat8),l=e.Record({token:t,subaccount:e.Opt(d),allowance:o,spender:e.Principal}),_=e.Record({token:t,user:r}),p=e.Variant({ok:o,err:i}),m=t,f=a,h=e.Variant({ok:f,err:c}),N=e.Text,y=e.Nat32,g=e.Variant({fungible:e.Record({decimals:e.Nat8,metadata:e.Opt(e.Vec(e.Nat8)),name:e.Text,symbol:e.Text}),nonfungible:e.Record({metadata:e.Opt(e.Vec(e.Nat8))})}),w=e.Variant({ok:g,err:c}),k=e.Record({to:r,metadata:e.Opt(e.Vec(e.Nat8))}),b=e.Vec(e.Nat8),R=e.Record({to:r,token:t,notify:e.Bool,from:r,memo:b,subaccount:e.Opt(d),amount:o}),v=e.Variant({ok:o,err:e.Variant({CannotNotify:a,InsufficientBalance:e.Null,InvalidToken:t,Rejected:e.Null,Unauthorized:a,Other:e.Text})});return e.Service({acceptCycles:e.Func([],[],[]),allowance:e.Func([n],[u],["query"]),approve:e.Func([l],[],[]),availableCycles:e.Func([],[e.Nat],["query"]),balance:e.Func([_],[p],["query"]),bearer:e.Func([m],[h],["query"]),extensions:e.Func([],[e.Vec(N)],["query"]),getAllowances:e.Func([],[e.Vec(e.Tuple(y,e.Principal))],["query"]),getMinter:e.Func([],[e.Principal],["query"]),getRegistry:e.Func([],[e.Vec(e.Tuple(y,f))],["query"]),getTokens:e.Func([],[e.Vec(e.Tuple(y,g))],["query"]),metadata:e.Func([m],[w],["query"]),mintNFT:e.Func([k],[y],[]),setMinter:e.Func([e.Principal],[],[]),supply:e.Func([m],[u],["query"]),transfer:e.Func([R],[v],[])})},constructUser=e=>isHex(e)&&64===e.length?{address:e}:{principal:n.Principal.fromText(e)},tokenIdentifier=(e,t)=>{const a=Buffer("\ntid"),r=new Uint8Array([...a,...n.Principal.fromText(e).toUint8Array(),...to32bits(t)]);return n.Principal.fromUint8Array(r).toText()},decodeTokenId=e=>{var t=[...n.Principal.fromText(e).toUint8Array()],a=t.splice(0,4);return toHexString(a)!==toHexString(Buffer("\ntid"))?{index:0,canister:e,token:tokenIdentifier(e,0)}:{index:from32bits(t.splice(-4)),canister:n.Principal.fromUint8Array(t).toText(),token:e}},N={governance:({IDL:e})=>{const t=e.Rec(),a=e.Record({id:e.Nat64}),r=e.Record({followees:e.Vec(a)}),n=e.Record({id:e.Opt(e.Principal)}),o=e.Record({neuron_minimum_stake_e8s:e.Nat64,max_proposals_to_keep_per_topic:e.Nat32,neuron_management_fee_per_proposal_e8s:e.Nat64,reject_cost_e8s:e.Nat64,transaction_fee_e8s:e.Nat64,neuron_spawn_dissolve_delay_seconds:e.Nat64,minimum_icp_xdr_rate:e.Nat64,maximum_node_provider_rewards_e8s:e.Nat64}),s=e.Record({day_after_genesis:e.Nat64,actual_timestamp_seconds:e.Nat64,distributed_e8s_equivalent:e.Nat64,settled_proposals:e.Vec(a)}),i=e.Record({to_subaccount:e.Vec(e.Nat8),neuron_stake_e8s:e.Nat64,from:e.Opt(e.Principal),memo:e.Nat64,from_subaccount:e.Vec(e.Nat8),transfer_timestamp:e.Nat64,block_height:e.Nat64}),c=e.Record({error_message:e.Text,error_type:e.Int32}),u=e.Record({vote:e.Int32,voting_power:e.Nat64}),d=e.Record({no:e.Nat64,yes:e.Nat64,total:e.Nat64,timestamp_seconds:e.Nat64}),l=e.Record({new_controller:e.Opt(e.Principal)}),_=e.Record({amount_e8s:e.Nat64}),p=e.Record({topic:e.Int32,followees:e.Vec(a)}),m=e.Record({hot_key_to_remove:e.Opt(e.Principal)}),f=e.Record({new_hot_key:e.Opt(e.Principal)}),h=e.Record({additional_dissolve_delay_seconds:e.Nat32}),N=e.Record({dissolve_timestamp_seconds:e.Nat64}),y=e.Variant({RemoveHotKey:m,AddHotKey:f,StopDissolving:e.Record({}),StartDissolving:e.Record({}),IncreaseDissolveDelay:h,SetDissolveTimestamp:N}),g=e.Record({operation:e.Opt(y)}),w=e.Record({vote:e.Int32,proposal:e.Opt(a)}),k=e.Record({dissolve_delay_seconds:e.Nat64,kyc_verified:e.Bool,amount_e8s:e.Nat64,new_controller:e.Opt(e.Principal),nonce:e.Nat64}),b=e.Record({hash:e.Vec(e.Nat8)}),R=e.Record({e8s:e.Nat64}),v=e.Record({to_account:e.Opt(b),amount:e.Opt(R)}),x=e.Variant({Spawn:l,Split:_,Follow:p,Configure:g,RegisterVote:w,DisburseToNeuron:k,MakeProposal:t,Disburse:v}),T=e.Record({id:e.Opt(a),command:e.Opt(x)}),O=e.Record({nns_function:e.Int32,payload:e.Vec(e.Nat8)}),V=e.Record({dissolve_delay_seconds:e.Nat64}),q=e.Record({to_account:e.Opt(b)}),A=e.Variant({RewardToNeuron:V,RewardToAccount:q}),F=e.Record({node_provider:e.Opt(n),reward_mode:e.Opt(A),amount_e8s:e.Nat64}),I=e.Record({default_followees:e.Vec(e.Tuple(e.Int32,r))}),P=e.Record({principals:e.Vec(e.Principal)}),B=e.Variant({ToRemove:n,ToAdd:n}),S=e.Record({change:e.Opt(B)}),E=e.Record({motion_text:e.Text}),D=e.Variant({ManageNeuron:T,ExecuteNnsFunction:O,RewardNodeProvider:F,SetDefaultFollowees:I,ManageNetworkEconomics:o,ApproveGenesisKyc:P,AddOrRemoveNodeProvider:S,Motion:E});t.fill(e.Record({url:e.Text,action:e.Opt(D),summary:e.Text}));const C=e.Record({id:e.Opt(a),failure_reason:e.Opt(c),ballots:e.Vec(e.Tuple(e.Nat64,u)),proposal_timestamp_seconds:e.Nat64,reward_event_round:e.Nat64,failed_timestamp_seconds:e.Nat64,reject_cost_e8s:e.Nat64,latest_tally:e.Opt(d),decided_timestamp_seconds:e.Nat64,proposal:e.Opt(t),proposer:e.Opt(a),executed_timestamp_seconds:e.Nat64}),L=e.Record({controller:e.Opt(e.Principal),memo:e.Nat64}),z=e.Variant({Spawn:l,Split:_,ClaimOrRefresh:L,DisburseToNeuron:k,Disburse:v}),U=e.Record({command:e.Opt(z),timestamp:e.Nat64}),j=e.Record({vote:e.Int32,proposal_id:e.Opt(a)}),M=e.Variant({DissolveDelaySeconds:e.Nat64,WhenDissolvedTimestampSeconds:e.Nat64}),H=e.Record({id:e.Opt(a),controller:e.Opt(e.Principal),recent_ballots:e.Vec(j),kyc_verified:e.Bool,not_for_profit:e.Bool,maturity_e8s_equivalent:e.Nat64,cached_neuron_stake_e8s:e.Nat64,created_timestamp_seconds:e.Nat64,aging_since_timestamp_seconds:e.Nat64,hot_keys:e.Vec(e.Principal),account:e.Vec(e.Nat8),dissolve_state:e.Opt(M),followees:e.Vec(e.Tuple(e.Int32,r)),neuron_fees_e8s:e.Nat64,transfer:e.Opt(i)}),W=(e.Record({default_followees:e.Vec(e.Tuple(e.Int32,r)),wait_for_quiet_threshold_seconds:e.Nat64,node_providers:e.Vec(n),economics:e.Opt(o),latest_reward_event:e.Opt(s),to_claim_transfers:e.Vec(i),short_voting_period_seconds:e.Nat64,proposals:e.Vec(e.Tuple(e.Nat64,C)),in_flight_commands:e.Vec(e.Tuple(e.Nat64,U)),neurons:e.Vec(e.Tuple(e.Nat64,H)),genesis_timestamp_seconds:e.Nat64}),e.Variant({Ok:e.Null,Err:c})),K=e.Variant({Error:c,NeuronId:a}),Z=e.Record({result:e.Opt(K)}),J=e.Variant({Ok:H,Err:c}),G=e.Record({dissolve_delay_seconds:e.Nat64,recent_ballots:e.Vec(j),created_timestamp_seconds:e.Nat64,state:e.Int32,retrieved_at_timestamp_seconds:e.Nat64,voting_power:e.Nat64,age_seconds:e.Nat64}),$=e.Variant({Ok:G,Err:c}),Q=e.Record({id:e.Opt(a),status:e.Int32,topic:e.Int32,failure_reason:e.Opt(c),ballots:e.Vec(e.Tuple(e.Nat64,u)),proposal_timestamp_seconds:e.Nat64,reward_event_round:e.Nat64,failed_timestamp_seconds:e.Nat64,reject_cost_e8s:e.Nat64,latest_tally:e.Opt(d),reward_status:e.Int32,decided_timestamp_seconds:e.Nat64,proposal:e.Opt(t),proposer:e.Opt(a),executed_timestamp_seconds:e.Nat64}),X=e.Record({neuron_ids:e.Vec(e.Nat64),include_neurons_readable_by_caller:e.Bool}),Y=e.Record({neuron_infos:e.Vec(e.Tuple(e.Nat64,G)),full_neurons:e.Vec(H)}),ee=e.Record({include_reward_status:e.Vec(e.Int32),before_proposal:e.Opt(a),limit:e.Nat32,exclude_topic:e.Vec(e.Int32),include_status:e.Vec(e.Int32)}),te=e.Record({proposal_info:e.Vec(Q)}),ae=e.Record({created_neuron_id:e.Opt(a)}),re=e.Record({proposal_id:e.Opt(a)}),ne=e.Record({transfer_block_height:e.Nat64}),oe=e.Variant({Error:c,Spawn:ae,Split:ae,Follow:e.Record({}),Configure:e.Record({}),RegisterVote:e.Record({}),DisburseToNeuron:ae,MakeProposal:re,Disburse:ne}),se=e.Record({command:e.Opt(oe)});return e.Service({claim_gtc_neurons:e.Func([e.Principal,e.Vec(a)],[W],[]),claim_or_refresh_neuron_from_account:e.Func([L],[Z],[]),get_full_neuron:e.Func([e.Nat64],[J],["query"]),get_neuron_ids:e.Func([],[e.Vec(e.Nat64)],["query"]),get_neuron_info:e.Func([e.Nat64],[$],["query"]),get_pending_proposals:e.Func([],[e.Vec(Q)],["query"]),get_proposal_info:e.Func([e.Nat64],[e.Opt(Q)],["query"]),list_neurons:e.Func([X],[Y],["query"]),list_proposals:e.Func([ee],[te],["query"]),manage_neuron:e.Func([T],[se],[]),transfer_gtc_neuron:e.Func([a,a],[W],[])})},ledger:({IDL:e})=>{const t=e.Text,a=e.Record({secs:e.Nat64,nanos:e.Nat32}),r=e.Record({max_message_size_bytes:e.Opt(e.Nat32),node_max_memory_size_bytes:e.Opt(e.Nat32),controller_id:e.Principal}),n=e.Record({e8s:e.Nat64}),o=(e.Record({send_whitelist:e.Vec(e.Tuple(e.Principal)),minting_account:t,transaction_window:e.Opt(a),max_message_size_bytes:e.Opt(e.Nat32),archive_options:e.Opt(r),initial_values:e.Vec(e.Tuple(t,n))}),e.Record({account:t})),s=e.Vec(e.Nat8),i=e.Nat64,c=e.Record({to_subaccount:e.Opt(s),from_subaccount:e.Opt(s),to_canister:e.Principal,max_fee:n,block_height:i}),u=e.Nat64,d=e.Record({timestamp_nanos:e.Nat64}),l=e.Record({to:t,fee:n,memo:u,from_subaccount:e.Opt(s),created_at_time:e.Opt(d),amount:n});return e.Service({account_balance_dfx:e.Func([o],[n],["query"]),notify_dfx:e.Func([c],[],[]),send_dfx:e.Func([l],[i],[])})},hzld:({IDL:e})=>{const t=e.Principal,a=e.Record({user:t}),r=e.Nat,n=e.Vec(e.Nat8),o=e.Record({to:t,metadata:e.Opt(n),from:t,amount:r}),s=e.Variant({ok:e.Null,err:e.Variant({InsufficientBalance:e.Null,InvalidSource:t,Unauthorized:e.Null})}),i=e.Variant({removeOperator:e.Null,setOperator:e.Null}),c=e.Record({owner:t,operators:e.Vec(e.Tuple(t,i))}),u=e.Variant({ok:e.Null,err:e.Variant({Unauthorized:e.Null,InvalidOwner:t})});return e.Service({getBalance:e.Func([a],[e.Opt(r)],[]),getBalanceInsecure:e.Func([a],[e.Opt(r)],["query"]),getCommunityChestValueInsecure:e.Func([],[e.Opt(e.Nat)],["query"]),getInfo:e.Func([],[e.Record({balance:e.Nat,maxLiveSize:e.Nat,heap:e.Nat,size:e.Nat})],["query"]),getNumberOfAccounts:e.Func([],[e.Nat],[]),getTokenInfo:e.Func([],[e.Record({fee:e.Nat,totalMinted:e.Nat,totalSupply:e.Nat,totalTransactions:e.Nat})],["query"]),getTotalMinted:e.Func([],[e.Nat],[]),mint:e.Func([e.Principal,e.Nat],[],[]),transfer:e.Func([o],[s],[]),updateOperator:e.Func([e.Vec(c)],[u],[])})},nns:({IDL:e})=>{const t=e.Text,a=e.Record({name:e.Text,canister_id:e.Principal}),r=e.Variant({Ok:e.Null,CanisterAlreadyAttached:e.Null,NameAlreadyTaken:e.Null,NameTooLong:e.Null,CanisterLimitExceeded:e.Null}),n=e.Vec(e.Nat8),o=e.Record({name:e.Text,sub_account:n,account_identifier:t}),s=e.Variant({Ok:o,AccountNotFound:e.Null,NameTooLong:e.Null,SubAccountLimitExceeded:e.Null}),i=e.Record({canister_id:e.Principal}),c=e.Variant({Ok:e.Null,CanisterNotFound:e.Null}),u=e.Record({name:e.Text,account_identifier:t}),d=e.Record({account_identifier:t,hardware_wallet_accounts:e.Vec(u),sub_accounts:e.Vec(o)}),l=e.Variant({Ok:d,AccountNotFound:e.Null}),_=e.Record({name:e.Text,canister_id:e.Principal}),p=e.Nat64,m=e.Record({latest_transaction_block_height:p,seconds_since_last_ledger_sync:e.Nat64,sub_accounts_count:e.Nat64,hardware_wallet_accounts_count:e.Nat64,accounts_count:e.Nat64,earliest_transaction_block_height:p,transactions_count:e.Nat64,block_height_synced_up_to:e.Opt(e.Nat64),latest_transaction_timestamp_nanos:e.Nat64,earliest_transaction_timestamp_nanos:e.Nat64}),f=e.Record({page_size:e.Nat8,offset:e.Nat32,account_identifier:t}),h=e.Record({timestamp_nanos:e.Nat64}),N=e.Record({e8s:e.Nat64}),y=e.Record({to:t,fee:N,amount:N}),g=e.Record({fee:N,from:t,amount:N}),w=e.Variant({Burn:e.Record({amount:N}),Mint:e.Record({amount:N}),Send:y,Receive:g}),k=e.Record({memo:e.Nat64,timestamp:h,block_height:p,transfer:w}),b=e.Record({total:e.Nat32,transactions:e.Vec(k)}),R=e.Tuple(e.Text,e.Text),v=e.Record({url:e.Text,method:e.Text,body:e.Vec(e.Nat8),headers:e.Vec(R)}),x=e.Record({body:e.Vec(e.Nat8),headers:e.Vec(R),status_code:e.Nat16}),T=e.Record({name:e.Text,account_identifier:t}),O=e.Variant({Ok:e.Null,AccountNotFound:e.Null,HardwareWalletAlreadyRegistered:e.Null,HardwareWalletLimitExceeded:e.Null,NameTooLong:e.Null}),V=e.Record({account_identifier:t}),q=e.Variant({Ok:e.Null,HardwareWalletNotFound:e.Null}),A=e.Record({new_name:e.Text,account_identifier:t}),F=e.Variant({Ok:e.Null,AccountNotFound:e.Null,SubAccountNotFound:e.Null,NameTooLong:e.Null});return e.Service({add_account:e.Func([],[t],[]),attach_canister:e.Func([a],[r],[]),create_sub_account:e.Func([e.Text],[s],[]),detach_canister:e.Func([i],[c],[]),get_account:e.Func([],[l],["query"]),get_canisters:e.Func([],[e.Vec(_)],["query"]),get_icp_to_cycles_conversion_rate:e.Func([],[e.Nat64],["query"]),get_stats:e.Func([],[m],["query"]),get_transactions:e.Func([f],[b],["query"]),http_request:e.Func([v],[x],["query"]),register_hardware_wallet:e.Func([T],[O],[]),remove_hardware_wallet:e.Func([V],[q],[]),rename_sub_account:e.Func([A],[F],[])})},ext:ext_did,default:ext_did};class ExtConnection{_mapIdls={[m]:N.ledger,"rrkah-fqaaa-aaaaa-aaaaq-cai":N.governance,"qoctq-giaaa-aaaaa-aaaea-cai":N.nns,"qz7gu-giaaa-aaaaf-qaaka-cai":N.hzld};_metadata={[m]:{name:"ICP",symbol:"ICP",decimals:8,type:"fungible"},"qz7gu-giaaa-aaaaf-qaaka-cai":{name:"HZLD",symbol:"HZLD",decimals:0,type:"fungible"}};_identity=!1;_host=!1;_agent=!1;_canisters={};constructor(e,t){t&&(this._identity=t),e&&(this._host=e),this._makeAgent()}idl(e,t){return this._mapIdls[e]=t,this}setIdentity(e){return this._identity=e||!1,this._makeAgent(),this}setHost(e){return this._host=e||!1,this._makeAgent(),this}canister(e,t){if(t){if("string"==typeof t){if(!N.hasOwnProperty(t))throw new Error(t+" is not a preloaded IDL");t=N[t]}}else t=this._mapIdls.hasOwnProperty(e)?this._mapIdls[e]:N.default;return this._canisters.hasOwnProperty(e)||(this._canisters[e]=r.Actor.createActor(t,{agent:this._agent,canisterId:e})),this._canisters[e]}token(e,t){e||(e=m);var a=decodeTokenId(e);t||(t=this._mapIdls.hasOwnProperty(a.canister)?this._mapIdls[a.canister]:N.ext);var r=this.canister(a.canister,t);return{call:r,fee:()=>new Promise(((e,t)=>{switch(a.canister){case m:e(1e4);break;case"qz7gu-giaaa-aaaaf-qaaka-cai":e(1);break;default:e(0)}})),getMetadata:()=>new Promise(((e,t)=>{this._metadata.hasOwnProperty(a.canister)?e(this._metadata[a.canister]):(a.canister,r.metadata(a.token).then((a=>{void 0!==a.ok?void 0!==a.ok.fungible?e({name:a.ok.fungible.name,symbol:a.ok.fungible.symbol,decimals:a.ok.fungible.decimals,metadata:a.ok.fungible.metadata,type:"fungible"}):e({metadata:a.ok.nonfungible.metadata,type:"nonfungible"}):void 0!==a.err?t(a.err):t(a)})).catch(t))})),getBearer:()=>new Promise(((e,t)=>{r.bearer(a.token).then((a=>{void 0!==a.ok?e(a.ok):void 0!==a.err?t(a.err):t(a)})).catch(t)})),getBalance:(e,t)=>new Promise(((o,s)=>{var i;switch(a.canister){case m:h.getAccountBalance(e).then((e=>{o(e)}));break;case"qz7gu-giaaa-aaaaf-qaaka-cai":i={user:n.Principal.fromText(t)},r.getBalanceInsecure(i).then((e=>{var t=0===e.length?0:e[0];o(t)})).catch(s);break;default:i={user:constructUser(e),token:a.token},r.balance(i).then((e=>{void 0!==e.ok?o(e.ok):void 0!==e.err?s(e.err):s(e)})).catch(s)}})),getTransactions:(e,t)=>new Promise(((t,r)=>{switch(a.canister){case m:h.getTransactionsByAccount(e).then((e=>{Array.isArray(e)||t([]);var a=[];e.map((e=>"TRANSACTION"===e.type&&("COMPLETED"===e.status&&(a.push({from:e.account1Address,to:e.account2Address,amount:Number(e.amount)/10**8,fee:Number(e.fee)/10**8,hash:e.hash,timestamp:e.timestamp,memo:Number(e.memo)}),!0)))),t(a)})).catch(r);break;case"qz7gu-giaaa-aaaaf-qaaka-cai":default:t([])}})),transfer:(t,o,s,i,c,u,d)=>new Promise(((l,_)=>{var p;switch(a.canister){case m:p={from_subaccount:[getSubAccountArray(o??0)],to:s,amount:{e8s:i},fee:{e8s:c},memo:u?Number(BigInt(u)):0,created_at_time:[]},r.send_dfx(p).then((e=>{l(!0)})).catch(_);break;case"qz7gu-giaaa-aaaaf-qaaka-cai":p={to:n.Principal.fromText(s),metadata:[],from:n.Principal.fromText(t),amount:i},r.transfer(p).then((e=>{void 0!==e.ok?l(!0):_(JSON.stringify(e.err))})).catch(_);break;default:p={token:e,from:{address:principalToAccountIdentifier(t,o??0)},subaccount:[getSubAccountArray(o??0)],to:constructUser(s),amount:i,fee:c,memo:fromHexString(u),notify:d},r.transfer(p).then((e=>{void 0!==e.ok?l(!0):_(JSON.stringify(e.err))})).catch(_)}})),mintCycles:(e,t,o,s,i)=>new Promise(((e,c)=>{switch(a.canister){case m:var u=getCyclesTopupSubAccount(o),d=principalToAccountIdentifier(f,u),l={from_subaccount:[getSubAccountArray(t??0)],to:d,fee:{e8s:i},memo:Number(BigInt("0x50555054")),created_at_time:[],amount:{e8s:s}};r.send_dfx(l).then((a=>{var o={block_height:a,max_fee:{e8s:i},from_subaccount:[getSubAccountArray(t??0)],to_subaccount:[getSubAccountArray(u)],to_canister:n.Principal.fromText(f)};r.notify_dfx(o).then(e).catch(c)})).catch(c);break;case"5ymop-yyaaa-aaaah-qaa4q-cai":c("WIP");break;default:c("Cycle topup is not supported by this token")}}))}}_makeAgent(){var e={};this._identity&&(e.identity=this._identity),this._host&&(e.host=this._host),this._agent=new r.HttpAgent(e)}}const y={connect:(e,t)=>new ExtConnection(e??"https://boundary.ic0.app/",t),decodeTokenId,encodeTokenId:tokenIdentifier,constructUser,principalToAccountIdentifier,fromHexString,toHexString}},710:e=>{"use strict";e.exports=require("bip39")},650:e=>{"use strict";e.exports=require("pbkdf2")},728:e=>{"use strict";e.exports=require("sjcl")}},t={};function __webpack_require__(a){var r=t[a];if(void 0!==r)return r.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,__webpack_require__),n.exports}__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var a in t)__webpack_require__.o(t,a)&&!__webpack_require__.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a=__webpack_require__(10);return a=a.default})()}));