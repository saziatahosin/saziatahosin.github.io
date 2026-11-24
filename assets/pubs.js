/* ============ Publications: live from OpenAlex, with a built-in fallback ============
   The site asks OpenAlex (a free scholarly database) for every paper linked to her
   ORCID each time someone visits. New papers appear automatically once OpenAlex
   indexes them (usually days to a few weeks after the DOI goes live).
   FALLBACK is shown if OpenAlex can't be reached, and supplies papers that are still
   under review (OpenAlex only knows published work). Add new under-review papers here.  */

const OPENALEX_AUTHOR = "orcid:0009-0006-2027-7148";
const OPENALEX_MAILTO = "saziatahsin457@gmail.com";   // OpenAlex "polite pool": faster, more reliable
const ME_RE = /tahosin/i;

const FALLBACK = [
  {type:"journal",year:2025,title:"FedVGM: Enhancing Federated Learning Performance on Multi-Dataset Medical Images with XAI",authors:["M. S. Tahosin","M. A. Sheakh","M. J. Alam","M. M. Hassan","A. K. Bairagi","S. Abdulla","S. Alshathri","W. El-Shafai"],venue:"IEEE Journal of Biomedical and Health Informatics",doi:"10.1109/jbhi.2025.3600361",featured:true},
  {type:"journal",year:2025,title:"Improving Medical X-ray Diagnosis with Attention Mechanisms and Robust Transfer Learning Techniques",authors:["I. Das","M. A. Sheakh","M. S. Tahosin","S. Abdulla","M. M. Hassan","S. Jaman","A. Shukla"],venue:"IEEE Access",doi:"10.1109/access.2025.3607639"},
  {type:"journal",year:2025,title:"Optimizing Medical Image Analysis through MViTX on Multiple Datasets with Explainable AI",authors:["M. A. Sheakh","M. S. Tahosin","M. J. Alam","M. Begum"],venue:"Neural Computing and Applications",doi:"10.1007/s00521-025-11014-x",featured:true},
  {type:"journal",year:2025,title:"An Automated Privacy-Preserving Self-Supervised Classification of COVID-19 from Lung CT Scan Images Minimizing the Requirements of Large Data Annotation",authors:["S. S. Chowa","M. R. I. Bhuiyan","M. S. Tahosin","A. Karim","S. Montaha","M. M. Hassan","M. A. Shah","S. Azam"],venue:"Scientific Reports",doi:"10.1038/s41598-024-83972-6"},
  {type:"journal",year:2025,title:"A Hybrid Transfer Learning Framework for Brain Tumor Diagnosis",authors:["S. I. Tonni","M. A. Sheakh","M. S. Tahosin","M. Z. Hasan","T. F. Shuva","T. Bhuiyan","M. A. A. Almoyad","N. A. Orka","M. T. Rahman","R. T. Khan","M. S. Kaiser","M. A. Moni"],venue:"Advanced Intelligent Systems",doi:"10.1002/aisy.202400495"},
  {type:"journal",year:2025,title:"ECgMLP: A Novel Gated MLP Model for Enhanced Endometrial Cancer Diagnosis",authors:["M. A. Sheakh","S. Azam","M. S. Tahosin","A. Karim","S. Montaha","K. U. Fahim","N. Shafiabady","M. Jonkman","F. De Boer"],venue:"Computer Methods and Programs in Biomedicine Update",doi:"10.1016/j.cmpbup.2025.100181"},
  {type:"journal",year:2025,title:"Comparative Performance Analysis of Ensemble Learning Methods for Fetal Health Classification",authors:["T. B. Zannah","S. I. Tonni","M. A. Sheakh","M. S. Tahosin","A. H. Sarower","M. Begum"],venue:"Informatics in Medicine Unlocked",doi:"10.1016/j.imu.2025.101656"},
  {type:"journal",year:2024,title:"Predictive Modeling for Breast Cancer Classification in the Context of Bangladeshi Patients by Use of Machine Learning Approach with Explainable AI",authors:["T. Islam","M. A. Sheakh","M. S. Tahosin","M. H. Hena","S. Akash","Y. A. Bin Jardan","G. F. Wondmie","H. A. Nafidi","M. Bourhia"],venue:"Scientific Reports",doi:"10.1038/s41598-024-57740-5"},
  {type:"journal",year:2024,title:"Comparative Analysis of Machine Learning Algorithms for ECG-Based Heart Attack Prediction: A Study Using Bangladeshi Patient Data",authors:["M. A. Sheakh","M. S. Tahosin","L. Akter","I. Jahan","M. N. Islam","M. R. Siddiky","M. M. Hasan","S. Hasan"],venue:"World Journal of Advanced Research and Reviews",doi:"10.30574/wjarr.2024.23.3.2928"},
  {type:"journal",year:2024,title:"Lexicon and Deep Learning-Based Approaches in Sentiment Analysis on Short Texts",authors:["T. Islam","M. A. Sheakh","M. R. Sadik","M. S. Tahosin","M. M. R. Foysal","J. Ferdush","M. Begum"],venue:"Journal of Computer and Communications",doi:"10.4236/jcc.2024.121002"},
  {type:"journal",year:2023,title:"Optimizing Brain Tumor Classification through Feature Selection and Hyperparameter Tuning in Machine Learning Models",authors:["M. S. Tahosin","M. A. Sheakh","T. Islam","R. J. Lima","M. Begum"],venue:"Informatics in Medicine Unlocked",doi:"10.1016/j.imu.2023.101414",featured:true},
  {type:"conference",year:2025,title:"A Comprehensive Ensemble-Based Approach for Heart Disease Prediction with Feature Selection and Model Analysis",authors:["M. S. Tahosin","I. H. Pranto","M. M. U. Chowdhury","S. B. Emon","M. A. Alam","C. Khan"],venue:"5th International Conference on Advanced Research in Computing (ICARC)",doi:"10.1109/icarc64760.2025.10963152"},
  {type:"conference",year:2025,title:"DermNet-CNN: A Hyperparameter-Tuned CNN Model for Accurate Skin Disease Detection",authors:["I. Das","S. K. Gosh","M. S. Tahosin","M. A. K. Sobuj","T. I. Sazid","A. Akter"],venue:"17th International Conference on Electronics, Computers and Artificial Intelligence (ECAI)",doi:"10.1109/ecai65401.2025.11095543"},
  {type:"conference",year:2025,title:"A Comparative Study of Transformer-Based Models and Machine Learning Techniques for Enhancing Bangla Sentiment Analysis",authors:["M. S. I. K. Hamim","I. Ahmed","T. I. Sazid","F. Haque","M. N. Hossain","S. R. Pal","M. S. Tahosin","M. A. Sheakh"],venue:"17th International Conference on Electronics, Computers and Artificial Intelligence (ECAI)",doi:"10.1109/ecai65401.2025.11095616"},
  {type:"conference",year:2024,title:"Enhancing Bangla Fake News Detection Using Bidirectional Gated Recurrent Units and Deep Learning Techniques",authors:["U. Roy","M. S. Tahosin","M. M. Hassan","T. Islam","F. Imtiaz","M. R. Sadik","Y. Maleh","R. B. Sulaiman","M. S. H. Talukder"],venue:"7th International Conference on Networking, Intelligent Systems and Security (NISS)",doi:"10.1145/3659677.3659703"},
  {type:"conference",year:2024,title:"Accurate Thyroid Disease Detection with Ensemble Learning Models",authors:["M. N. Sakib","M. A. Sheakh","M. S. Tahosin","M. R. Sadik","M. A. Islam","L. Akter"],venue:"4th International Conference on Artificial Intelligence and Signal Processing (AISP)",doi:"10.1109/aisp61711.2024.10870726"},
  {type:"conference",year:2023,title:"Child and Maternal Mortality Risk Factor Analysis Using Machine Learning Approaches",authors:["M. A. Sheakh","M. S. Tahosin","M. M. Hasan","T. Islam","O. Islam","M. M. Rana"],venue:"11th International Symposium on Digital Forensics and Security (ISDFS)",doi:"10.1109/isdfs58141.2023.10131826"},
  {type:"conference",year:2023,title:"A Harmful Disorder: Predictive and Comparative Analysis for Fetal Anemia Disease by Using Different Machine Learning Approaches",authors:["M. Hasan","M. S. Tahosin","A. Farjana","M. A. Sheakh","M. M. Hasan"],venue:"11th International Symposium on Digital Forensics and Security (ISDFS)",doi:"10.1109/isdfs58141.2023.10131838"},
  {type:"chapter",year:2024,title:"Improving Hepatitis C Diagnosis Using Machine Learning Techniques: An Experimental Analysis",authors:["A. Sheakh","M. S. Tahosin","T. Islam","R. J. Lima"],venue:"Artificial Intelligence for Intelligent Systems (CRC Press)",doi:"10.1201/9781003496410-15"},
  {type:"review",year:2025,title:"Optimized Xcrs13 Ensemble Approach with Explainable AI for Histopathological Endometrial Cancer Classification",authors:["M. S. Tahosin","M. A. Sheakh","M. A. Alam","M. M. Hassan","S.-H. Lee","S. Abdulla","A. H. Sarower","A. R. Nabil"],venue:"Under review"},
  {type:"review",year:2025,title:"Recurrent Neural Networks for Predicting Temporal Evolution of Glioblastoma Multiforme from MRI Sequences",authors:["I. Das","A. Saha","T. C. Datta","M. A. Alam","S. K. Ghosh","M. S. Tahosin","M. A. Sheakh"],venue:"Under review"}
];
/* Fallback numbers, used only if OpenAlex is unreachable */
const FALLBACK_STATS = {works:19, citations:574, h:13, i10:14};

const normDoi = d => (d||"").toLowerCase().replace(/^https?:\/\/(dx\.)?doi\.org\//,"");
const normTitle = t => (t||"").toLowerCase().replace(/<[^>]+>/g,"").replace(/[^a-z0-9]+/g," ").trim();
const esc = s => String(s??"").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const isFirst = p => p.authors && ME_RE.test(p.authors[0]||"");

function abstractFrom(inv){
  if(!inv) return "";
  const words = [];
  for(const [word, pos] of Object.entries(inv)) for(const i of pos) words[i] = word;
  return words.join(" ").replace(/\s+/g," ").trim();
}

function fromOpenAlex(w){
  const doi = normDoi(w.doi), fb = FALLBACK.find(f => f.doi && f.doi===doi);
  const src = w.primary_location && w.primary_location.source;
  let type = w.type==="book-chapter" ? "chapter" : w.type==="preprint" ? "preprint" : (src && src.type==="conference") ? "conference" : "journal";
  if(fb) type = fb.type;
  return {
    type, year:w.publication_year, doi, cites:w.cited_by_count||0, featured: fb && fb.featured,
    title:(w.display_name||w.title||"").replace(/<[^>]+>/g,""),
    authors:(w.authorships||[]).map(a => a.author && a.author.display_name).filter(Boolean),
    venue: (src && src.display_name) || (fb && fb.venue) || "",
    publisher: src && src.host_organization_name || "",
    volume: w.biblio && w.biblio.volume, issue: w.biblio && w.biblio.issue,
    pages: w.biblio && w.biblio.first_page ? (w.biblio.first_page + (w.biblio.last_page && w.biblio.last_page!==w.biblio.first_page ? "–"+w.biblio.last_page : "")) : "",
    oa: w.open_access && w.open_access.is_oa ? (w.open_access.oa_url || null) : null,
    abstract: abstractFrom(w.abstract_inverted_index)
  };
}

async function fetchLive(){
  const sel = "id,doi,display_name,publication_year,type,primary_location,authorships,cited_by_count,biblio,open_access,abstract_inverted_index";
  const aRes = await fetch(`https://api.openalex.org/authors/${OPENALEX_AUTHOR}?mailto=${OPENALEX_MAILTO}`);
  if(!aRes.ok) throw new Error("OpenAlex unavailable");
  const authorId = (await aRes.clone().json()).id.split("/").pop();
  const wRes = await fetch(`https://api.openalex.org/works?filter=author.id:${authorId}&per-page=200&select=${sel}&mailto=${OPENALEX_MAILTO}`);
  if(!wRes.ok) throw new Error("OpenAlex unavailable");
  const a = await aRes.json(), w = await wRes.json();
  const skip = new Set(["dataset","paratext","erratum","retraction","peer-review","editorial","other"]);
  const byKey = new Map();
  for(const raw of w.results || []){
    if(skip.has(raw.type)) continue;
    const p = fromOpenAlex(raw), k = normTitle(p.title);
    const prev = byKey.get(k);
    if(!prev || (prev.type==="preprint" && p.type!=="preprint") || (!prev.doi && p.doi)) byKey.set(k, p);
  }
  // add under-review (and anything OpenAlex hasn't indexed yet) from the fallback list
  for(const f of FALLBACK){
    const k = normTitle(f.title);
    if(!byKey.has(k) && ![...byKey.values()].some(p => f.doi && p.doi===f.doi)) byKey.set(k, {...f, cites:null});
  }
  const pubs = [...byKey.values()];
  const stats = {works: pubs.filter(p => p.type!=="review").length, citations:a.cited_by_count, h:a.summary_stats && a.summary_stats.h_index, i10:a.summary_stats && a.summary_stats.i10_index, byYear:(a.counts_by_year||[]).map(c => ({year:c.year, cites:c.cited_by_count, works:c.works_count}))};
  const data = {pubs, stats, at: Date.now()};
  try{ localStorage.setItem("st-pubs", JSON.stringify(data)); }catch(e){}
  return data;
}

/* Returns cached/fallback data immediately via onData, then live data when it arrives. */
function loadPublications(onData){
  let cached = null;
  try{ cached = JSON.parse(localStorage.getItem("st-pubs")||"null"); }catch(e){}
  onData(cached || {pubs: FALLBACK.map(f => ({...f, cites:null})), stats: FALLBACK_STATS, at:null}, cached ? "cached" : "fallback");
  fetchLive().then(d => onData(d, "live")).catch(() => {
    document.querySelectorAll("#sync").forEach(el => el.textContent = cached ? "Showing figures last synced " + new Date(cached.at).toLocaleDateString() : "Showing saved publication list");
  });
}

function authorsHtml(list, max=12){
  const shown = list.length > max ? list.slice(0,max) : list;
  let s = shown.map(n => ME_RE.test(n) ? `<b>${esc(n)}</b>` : esc(n)).join(", ");
  if(list.length > max){ s += ", et al."; if(!shown.some(n => ME_RE.test(n))) s += " (incl. <b>M. S. Tahosin</b>)"; }
  return s;
}
const LABEL = {journal:"Journal", conference:"Conference", chapter:"Book chapter", review:"Under review", preprint:"Preprint"};
function syncLabel(mode, at){
  if(mode==="live") return "● Live from OpenAlex · " + new Date(at).toLocaleDateString(undefined,{day:"numeric",month:"short",year:"numeric"});
  if(mode==="cached") return "Last synced from OpenAlex " + new Date(at).toLocaleDateString() + " · refreshing…";
  return "Connecting to OpenAlex…";
}

/* ---------- citation export ---------- */
function splitName(n){
  const parts = n.replace(/\s+/g," ").trim().split(" ");
  const last = parts.pop() || "";
  const initials = parts.map(x => x.replace(/\./g,"")).filter(Boolean).map(x => x.split("-").map(y => y[0].toUpperCase()+".").join("-")).join(" ");
  return {last, initials, given: parts.join(" ")};
}
function apa(p){
  const names = p.authors.map(n => { const s = splitName(n); return s.last + (s.initials ? ", " + s.initials : ""); });
  let au = names.length > 20 ? names.slice(0,19).join(", ") + ", ... " + names[names.length-1]
         : names.length > 1 ? names.slice(0,-1).join(", ") + ", & " + names[names.length-1] : names[0]||"";
  let s = `${esc(au)} (${p.year}). ${esc(p.title)}. `;
  if(p.type==="chapter") s += `In <i>${esc(p.venue)}</i>`;
  else s += `<i>${esc(p.venue)}</i>`;
  if(p.volume) s += `, <i>${esc(p.volume)}</i>`;
  if(p.issue) s += `(${esc(p.issue)})`;
  if(p.pages) s += `, ${esc(p.pages)}`;
  s += ".";
  if(p.doi) s += ` https://doi.org/${p.doi}`;
  return s;
}
function bibtex(p){
  const first = splitName(p.authors[0]||"anon").last.toLowerCase().replace(/[^a-z]/g,"");
  const word = (p.title.toLowerCase().match(/[a-z]{4,}/)||["paper"])[0];
  const kind = p.type==="conference" ? "inproceedings" : p.type==="chapter" ? "incollection" : "article";
  const venueKey = kind==="article" ? "journal" : "booktitle";
  const f = [["title",`{${p.title}}`],["author",p.authors.map(n => { const s=splitName(n); return s.last + (s.given? ", "+s.given : ""); }).join(" and ")],
    [venueKey,p.venue],["year",p.year],["volume",p.volume],["number",p.issue],["pages",p.pages&&p.pages.replace("–","--")],["publisher",p.publisher],["doi",p.doi]]
    .filter(([,v]) => v);
  return `@${kind}{${first}${p.year}${word},\n` + f.map(([k,v]) => `  ${k} = {${v}}`).join(",\n") + "\n}";
}
