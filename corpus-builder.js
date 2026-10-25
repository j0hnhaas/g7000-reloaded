// G7000 Reloaded Corpus Builder — browser-only; no ROM uploads.
const digest = async bytes => Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", bytes))).map(x=>x.toString(16).padStart(2,"0")).join("");
const save = (bytes, name, type="application/octet-stream") => {const url=URL.createObjectURL(new Blob([bytes],{type}));const a=document.createElement("a");a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);};
const $=id=>document.getElementById(id);
let built=null;
$("romFiles").addEventListener("change",()=>{$("buildStatus").textContent=$("romFiles").files.length+" files selected.";built=null;});
$("buildCorpus").addEventListener("click",async()=>{
 const files=Array.from($("romFiles").files).filter(f=>/\.bin$/i.test(f.name)).sort((a,b)=>a.name.localeCompare(b.name,"en",{sensitivity:"variant"}));
 if(!files.length){$("buildStatus").textContent="Select one or more .bin files.";return;}
 if(new Set(files.map(f=>f.name)).size!==files.length){$("buildStatus").textContent="Duplicate filenames are not supported. Rename conflicting source files locally before building.";return;}
 $("buildCorpus").disabled=true;$("buildStatus").textContent="Reading and hashing "+files.length+" ROMs…";
 try{
 const records=[];let offset=0;const chunks=[];
 for(const f of files){const bytes=new Uint8Array(await f.arrayBuffer());const sha256=await digest(bytes);
  records.push({filename:f.name,size:bytes.byteLength,sha256,blob_offset:offset,blob_end_exclusive:offset+bytes.byteLength});
  chunks.push(bytes);offset+=bytes.byteLength;
 }
 const blob=new Uint8Array(offset);let cursor=0;for(const part of chunks){blob.set(part,cursor);cursor+=part.length;}
 const corpusSha256=await digest(blob);
 const manifest={schema:"g7000-corpus-v1",version:"1.0",order:"filename-ascending-en",source:{type:"local-selected-files",note:"Source identity must be checked against the Google Drive snapshot separately."},rom_count:records.length,total_bytes:offset,corpus_sha256:corpusSha256,entries:records};
 built={blob,manifest};
 $("buildStatus").textContent="Built "+records.length+" ROMs · "+offset+" bytes · SHA-256 "+corpusSha256+". No data uploaded.";
 $("downloadCorpus").disabled=false;$("downloadManifest").disabled=false;$("downloadSha").disabled=false;
 }catch(error){$("buildStatus").textContent="Failed: "+error.message}finally{$("buildCorpus").disabled=false}
});
$("downloadCorpus").addEventListener("click",()=>built&&save(built.blob,"g7000-corpus-v1.bin"));
$("downloadManifest").addEventListener("click",()=>built&&save(JSON.stringify(built.manifest,null,2),"g7000-corpus-v1.json","application/json"));
$("downloadSha").addEventListener("click",()=>built&&save(built.manifest.corpus_sha256+"  g7000-corpus-v1.bin\n","g7000-corpus-v1.sha256","text/plain"));
export function resolveOffset(manifest,globalOffset,size=8){if(!Number.isInteger(globalOffset)||!Number.isInteger(size)||size<1)return null;return manifest.entries.find(e=>globalOffset>=e.blob_offset&&globalOffset+size<=e.blob_end_exclusive)||null;}
